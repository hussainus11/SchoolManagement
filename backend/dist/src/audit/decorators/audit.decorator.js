"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipAudit = exports.AuditAction = exports.Audit = exports.AUDIT_SKIP_KEY = exports.AUDIT_ACTION_KEY = exports.AUDIT_ENTITY_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.AUDIT_ENTITY_KEY = "auditEntity";
exports.AUDIT_ACTION_KEY = "auditAction";
exports.AUDIT_SKIP_KEY = "auditSkip";
const Audit = (entityType) => (0, common_1.SetMetadata)(exports.AUDIT_ENTITY_KEY, entityType);
exports.Audit = Audit;
const AuditAction = (action) => (0, common_1.SetMetadata)(exports.AUDIT_ACTION_KEY, action);
exports.AuditAction = AuditAction;
const SkipAudit = () => (0, common_1.SetMetadata)(exports.AUDIT_SKIP_KEY, true);
exports.SkipAudit = SkipAudit;
//# sourceMappingURL=audit.decorator.js.map