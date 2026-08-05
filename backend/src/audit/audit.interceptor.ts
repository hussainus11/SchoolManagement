import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { Request } from "express";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AuditService } from "./audit.service";
import { AUDIT_ACTION_KEY, AUDIT_ENTITY_KEY, AUDIT_SKIP_KEY } from "./decorators/audit.decorator";

const METHOD_VERB: Record<string, string> = {
  POST: "CREATED",
  PATCH: "UPDATED",
  PUT: "UPDATED",
  DELETE: "DELETED"
};

function toUpperSnake(entityType: string) {
  return entityType.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toUpperCase();
}

/** Auto-logs mutating requests on any controller tagged with @Audit(). Generic and best-effort —
 *  entityId comes from the response body's `id` (falling back to the `:id` route param), and
 *  `after` is the response body itself. Handlers that already log manually with richer context
 *  should use @SkipAudit() to avoid a duplicate entry. */
@Injectable()
export class AuditInterceptor implements NestInterceptor {
  private readonly logger = new Logger(AuditInterceptor.name);

  constructor(
    private readonly reflector: Reflector,
    private readonly auditService: AuditService
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    if (context.getType() !== "http") return next.handle();

    const skip = this.reflector.getAllAndOverride<boolean>(AUDIT_SKIP_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (skip) return next.handle();

    const entityType = this.reflector.getAllAndOverride<string>(AUDIT_ENTITY_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (!entityType) return next.handle();

    const request = context.switchToHttp().getRequest<Request & { user?: JwtPayload }>();
    const verb = METHOD_VERB[request.method];
    const explicitAction = this.reflector.get<string>(AUDIT_ACTION_KEY, context.getHandler());
    if (!verb && !explicitAction) return next.handle();

    const action = explicitAction ?? `${toUpperSnake(entityType)}_${verb}`;
    const user = request.user;

    return next.handle().pipe(
      tap((result: unknown) => {
        if (!user) return;
        const resultId =
          result && typeof result === "object" && "id" in result
            ? ((result as { id?: unknown }).id as string | undefined)
            : undefined;
        const entityId = resultId ?? (request.params?.id as string | undefined) ?? null;

        this.auditService
          .log({
            schoolId: user.schoolId,
            userId: user.sub,
            action,
            entityType,
            entityId,
            after: request.method === "DELETE" ? undefined : safeAfter(result)
          })
          .catch((err) => this.logger.error(`Failed to write audit log for ${action}`, err));
      })
    );
  }
}

function safeAfter(result: unknown) {
  if (result === undefined || result === null) return undefined;
  try {
    return JSON.parse(JSON.stringify(result));
  } catch {
    return undefined;
  }
}
