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
exports.DocumentService = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const prisma_service_1 = require("../prisma/prisma.service");
let DocumentService = class DocumentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForOwner(schoolId, ownerType, ownerId) {
        return this.prisma.document.findMany({
            where: { schoolId, ownerType, ownerId },
            include: { uploadedBy: { omit: { passwordHash: true } } },
            orderBy: { createdAt: "desc" }
        });
    }
    async assertOwnerInSchool(schoolId, ownerType, ownerId) {
        if (ownerType === "TEACHER") {
            const teacher = await this.prisma.teacher.findFirst({ where: { id: ownerId, schoolId } });
            if (!teacher)
                throw new common_1.NotFoundException("Teacher not found");
            return;
        }
        if (ownerType === "STUDENT") {
            const student = await this.prisma.student.findFirst({ where: { id: ownerId, schoolId } });
            if (!student)
                throw new common_1.NotFoundException("Student not found");
            return;
        }
        const staff = await this.prisma.staff.findFirst({ where: { id: ownerId, schoolId } });
        if (!staff)
            throw new common_1.NotFoundException("Staff member not found");
    }
    deleteUploadedFile(fileUrl) {
        if (!fileUrl.startsWith("/uploads/"))
            return;
        fs.unlink(path.join(process.cwd(), fileUrl), () => { });
    }
    async create(schoolId, uploadedById, dto, file) {
        try {
            await this.assertOwnerInSchool(schoolId, dto.ownerType, dto.ownerId);
        }
        catch (error) {
            this.deleteUploadedFile(file.url);
            throw error;
        }
        return this.prisma.document.create({
            data: {
                schoolId,
                ownerType: dto.ownerType,
                ownerId: dto.ownerId,
                title: dto.title,
                fileUrl: file.url,
                fileName: file.originalName,
                mimeType: file.mimeType,
                fileSize: file.size,
                uploadedById
            },
            include: { uploadedBy: { omit: { passwordHash: true } } }
        });
    }
    async remove(schoolId, id) {
        const document = await this.prisma.document.findFirst({ where: { id, schoolId } });
        if (!document)
            throw new common_1.NotFoundException("Document not found");
        this.deleteUploadedFile(document.fileUrl);
        await this.prisma.document.delete({ where: { id } });
    }
};
exports.DocumentService = DocumentService;
exports.DocumentService = DocumentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DocumentService);
//# sourceMappingURL=document.service.js.map