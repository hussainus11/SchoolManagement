import { SetMetadata } from "@nestjs/common";

export const AUDIT_ENTITY_KEY = "auditEntity";
export const AUDIT_ACTION_KEY = "auditAction";
export const AUDIT_SKIP_KEY = "auditSkip";

/** Marks a controller (or a single handler) as audit-logged. Applied at class level, every
 *  mutating request (POST/PATCH/PUT/DELETE) is recorded by AuditInterceptor with an action of
 *  `<ENTITY>_CREATED` / `_UPDATED` / `_DELETED`, unless overridden with @AuditAction. */
export const Audit = (entityType: string) => SetMetadata(AUDIT_ENTITY_KEY, entityType);

/** Overrides the default verb-derived action name for a specific handler, e.g. "LEAVE_APPROVED". */
export const AuditAction = (action: string) => SetMetadata(AUDIT_ACTION_KEY, action);

/** Excludes a specific handler from a class-level @Audit() — use when the handler already logs
 *  manually (e.g. with richer before/after context) to avoid a duplicate entry. */
export const SkipAudit = () => SetMetadata(AUDIT_SKIP_KEY, true);
