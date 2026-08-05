"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolController = void 0;
const fs = __importStar(require("node:fs"));
const node_path_1 = require("node:path");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const image_upload_util_1 = require("../common/image-upload.util");
const update_school_dto_1 = require("./dto/update-school.dto");
const school_service_1 = require("./school.service");
const UPLOAD_DIR = (0, node_path_1.join)(process.cwd(), "uploads", "id-card-backgrounds");
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];
let SchoolController = class SchoolController {
    schoolService;
    constructor(schoolService) {
        this.schoolService = schoolService;
    }
    getMySchool(user) {
        return this.schoolService.findByIdOrThrow(user.schoolId);
    }
    updateMySchool(user, dto) {
        return this.schoolService.update(user.schoolId, dto);
    }
    uploadIdCardBackground(user, file) {
        if (!file)
            throw new common_1.BadRequestException("No file uploaded");
        return this.schoolService.setIdCardBackgroundImage(user.schoolId, `/uploads/id-card-backgrounds/${file.filename}`);
    }
    removeIdCardBackground(user) {
        return this.schoolService.removeIdCardBackgroundImage(user.schoolId);
    }
    uploadLogo(user, file) {
        if (!file)
            throw new common_1.BadRequestException("No file uploaded");
        return this.schoolService.setLogo(user.schoolId, `/uploads/logos/${file.filename}`);
    }
    removeLogo(user) {
        return this.schoolService.removeLogo(user.schoolId);
    }
};
exports.SchoolController = SchoolController;
__decorate([
    (0, common_1.Get)("me"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "getMySchool", null);
__decorate([
    (0, common_1.Patch)("me"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_school_dto_1.UpdateSchoolDto]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "updateMySchool", null);
__decorate([
    (0, common_1.Post)("me/id-card-background"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", {
        storage: (0, multer_1.diskStorage)({
            destination: (_req, _file, cb) => {
                fs.mkdirSync(UPLOAD_DIR, { recursive: true });
                cb(null, UPLOAD_DIR);
            },
            filename: (req, file, cb) => {
                const user = req.user;
                cb(null, `${user?.schoolId}-${Date.now()}${(0, node_path_1.extname)(file.originalname)}`);
            }
        }),
        fileFilter: (_req, file, cb) => {
            if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
                cb(new common_1.BadRequestException("Only JPEG, PNG, or WEBP images are allowed"), false);
                return;
            }
            cb(null, true);
        },
        limits: { fileSize: 5 * 1024 * 1024 }
    })),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "uploadIdCardBackground", null);
__decorate([
    (0, common_1.Delete)("me/id-card-background"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "removeIdCardBackground", null);
__decorate([
    (0, common_1.Post)("me/logo"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", (0, image_upload_util_1.imageUploadOptions)("logos"))),
    (0, audit_decorator_1.AuditAction)("SCHOOL_LOGO_UPDATED"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "uploadLogo", null);
__decorate([
    (0, common_1.Delete)("me/logo"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN),
    (0, audit_decorator_1.AuditAction)("SCHOOL_LOGO_REMOVED"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "removeLogo", null);
exports.SchoolController = SchoolController = __decorate([
    (0, common_1.Controller)("schools"),
    (0, audit_decorator_1.Audit)("School"),
    (0, resource_decorator_1.Resource)("settings"),
    __metadata("design:paramtypes", [school_service_1.SchoolService])
], SchoolController);
//# sourceMappingURL=school.controller.js.map