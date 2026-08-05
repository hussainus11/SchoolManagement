import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "../decorators/public.decorator";
import { SKIP_PASSWORD_CHECK_KEY } from "../decorators/skip-password-check.decorator";
import { JwtPayload } from "../types/jwt-payload.type";

/** Blocks every endpoint for a session flagged mustChangePassword, except @Public() routes and
 *  ones explicitly exempted with @SkipPasswordCheck() (namely /auth/change-password itself). */
@Injectable()
export class MustChangePasswordGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (isPublic) return true;

    const skip = this.reflector.getAllAndOverride<boolean>(SKIP_PASSWORD_CHECK_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (skip) return true;

    const request = context.switchToHttp().getRequest();
    const user: JwtPayload | undefined = request.user;
    if (user?.mustChangePassword) {
      throw new ForbiddenException("You must change your password before continuing");
    }
    return true;
  }
}
