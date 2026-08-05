export declare const AUDIT_ENTITY_KEY = "auditEntity";
export declare const AUDIT_ACTION_KEY = "auditAction";
export declare const AUDIT_SKIP_KEY = "auditSkip";
export declare const Audit: (entityType: string) => import("@nestjs/common").CustomDecorator<string>;
export declare const AuditAction: (action: string) => import("@nestjs/common").CustomDecorator<string>;
export declare const SkipAudit: () => import("@nestjs/common").CustomDecorator<string>;
