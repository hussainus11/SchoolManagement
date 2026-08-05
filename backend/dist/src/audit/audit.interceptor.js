"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuditInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditInterceptor = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const operators_1 = require("rxjs/operators");
const audit_service_1 = require("./audit.service");
const audit_decorator_1 = require("./decorators/audit.decorator");
const METHOD_VERB = {
    POST: "CREATED",
    PATCH: "UPDATED",
    PUT: "UPDATED",
    DELETE: "DELETED"
};
function toUpperSnake(entityType) {
    return entityType.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toUpperCase();
}
let AuditInterceptor = AuditInterceptor_1 = class AuditInterceptor {
    reflector;
    auditService;
    logger = new common_1.Logger(AuditInterceptor_1.name);
    constructor(reflector, auditService) {
        this.reflector = reflector;
        this.auditService = auditService;
    }
    intercept(context, next) {
        if (context.getType() !== "http")
            return next.handle();
        const skip = this.reflector.getAllAndOverride(audit_decorator_1.AUDIT_SKIP_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (skip)
            return next.handle();
        const entityType = this.reflector.getAllAndOverride(audit_decorator_1.AUDIT_ENTITY_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (!entityType)
            return next.handle();
        const request = context.switchToHttp().getRequest();
        const verb = METHOD_VERB[request.method];
        const explicitAction = this.reflector.get(audit_decorator_1.AUDIT_ACTION_KEY, context.getHandler());
        if (!verb && !explicitAction)
            return next.handle();
        const action = explicitAction ?? `${toUpperSnake(entityType)}_${verb}`;
        const user = request.user;
        return next.handle().pipe((0, operators_1.tap)((result) => {
            if (!user)
                return;
            const resultId = result && typeof result === "object" && "id" in result
                ? result.id
                : undefined;
            const entityId = resultId ?? request.params?.id ?? null;
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
        }));
    }
};
exports.AuditInterceptor = AuditInterceptor;
exports.AuditInterceptor = AuditInterceptor = AuditInterceptor_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        audit_service_1.AuditService])
], AuditInterceptor);
function safeAfter(result) {
    if (result === undefined || result === null)
        return undefined;
    try {
        return JSON.parse(JSON.stringify(result));
    }
    catch {
        return undefined;
    }
}
//# sourceMappingURL=audit.interceptor.js.map