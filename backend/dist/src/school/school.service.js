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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolService = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const prisma_service_1 = require("../prisma/prisma.service");
let SchoolService = class SchoolService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findById(id) {
        return this.prisma.school.findUnique({ where: { id } });
    }
    async findByIdOrThrow(id) {
        const school = await this.findById(id);
        if (!school)
            throw new common_1.NotFoundException("School not found");
        return school;
    }
    update(id, data) {
        return this.prisma.school.update({ where: { id }, data });
    }
    deleteUploadedFile(fileUrl) {
        if (!fileUrl || !fileUrl.startsWith("/uploads/"))
            return;
        const filePath = path.join(process.cwd(), fileUrl);
        fs.unlink(filePath, () => { });
    }
    async setIdCardBackgroundImage(id, imageUrl) {
        const school = await this.findByIdOrThrow(id);
        this.deleteUploadedFile(school.idCardBackgroundImageUrl);
        return this.prisma.school.update({ where: { id }, data: { idCardBackgroundImageUrl: imageUrl } });
    }
    async removeIdCardBackgroundImage(id) {
        const school = await this.findByIdOrThrow(id);
        this.deleteUploadedFile(school.idCardBackgroundImageUrl);
        return this.prisma.school.update({ where: { id }, data: { idCardBackgroundImageUrl: null } });
    }
    async setLogo(id, logoUrl) {
        const school = await this.findByIdOrThrow(id);
        this.deleteUploadedFile(school.logoUrl);
        return this.prisma.school.update({ where: { id }, data: { logoUrl } });
    }
    async removeLogo(id) {
        const school = await this.findByIdOrThrow(id);
        this.deleteUploadedFile(school.logoUrl);
        return this.prisma.school.update({ where: { id }, data: { logoUrl: null } });
    }
    async createWithinTransaction(tx, data) {
        const existing = await tx.school.findUnique({ where: { slug: data.slug } });
        if (existing)
            throw new common_1.ConflictException("A school with this slug already exists");
        return tx.school.create({ data });
    }
};
exports.SchoolService = SchoolService;
exports.SchoolService = SchoolService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SchoolService);
//# sourceMappingURL=school.service.js.map