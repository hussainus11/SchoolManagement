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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const crypto = __importStar(require("node:crypto"));
const client_1 = require("../../generated/prisma/client");
const auth_service_1 = require("../auth/auth.service");
const image_upload_util_1 = require("../common/image-upload.util");
const prisma_service_1 = require("../prisma/prisma.service");
function generateTempPassword() {
    return crypto.randomBytes(9).toString("base64url");
}
let StudentService = class StudentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.student.findMany({
            where: {
                schoolId,
                deletedAt: null,
                branchId: filters.branchId,
                sectionId: filters.sectionId,
                ...(filters.search
                    ? {
                        OR: [
                            { firstName: { contains: filters.search, mode: "insensitive" } },
                            { lastName: { contains: filters.search, mode: "insensitive" } },
                            { admissionNumber: { contains: filters.search, mode: "insensitive" } }
                        ]
                    }
                    : {})
            },
            include: { section: { include: { class: true } }, guardians: { include: { guardian: true } } },
            orderBy: { createdAt: "desc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const student = await this.prisma.student.findFirst({
            where: { id, schoolId, deletedAt: null },
            include: { section: { include: { class: true } }, guardians: { include: { guardian: true } } }
        });
        if (!student)
            throw new common_1.NotFoundException("Student not found");
        return student;
    }
    async assertBranchInSchool(schoolId, branchId) {
        const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
    }
    async assertSectionInSchool(schoolId, sectionId) {
        const section = await this.prisma.section.findFirst({
            where: { id: sectionId, class: { schoolId } }
        });
        if (!section)
            throw new common_1.NotFoundException("Section not found");
    }
    async create(schoolId, dto) {
        await this.assertBranchInSchool(schoolId, dto.branchId);
        if (dto.sectionId)
            await this.assertSectionInSchool(schoolId, dto.sectionId);
        return this.prisma.student.create({
            data: {
                schoolId,
                branchId: dto.branchId,
                sectionId: dto.sectionId,
                admissionNumber: dto.admissionNumber,
                firstName: dto.firstName,
                lastName: dto.lastName,
                gender: dto.gender,
                dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
                bloodGroup: dto.bloodGroup,
                address: dto.address,
                admissionDate: dto.admissionDate ? new Date(dto.admissionDate) : undefined
            },
            include: { section: { include: { class: true } } }
        });
    }
    async update(schoolId, id, dto) {
        await this.findOneForSchool(schoolId, id);
        if (dto.sectionId)
            await this.assertSectionInSchool(schoolId, dto.sectionId);
        return this.prisma.student.update({
            where: { id },
            data: {
                firstName: dto.firstName,
                lastName: dto.lastName,
                sectionId: dto.sectionId,
                gender: dto.gender,
                dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
                bloodGroup: dto.bloodGroup,
                address: dto.address,
                academicStatus: dto.academicStatus
            },
            include: { section: { include: { class: true } }, guardians: { include: { guardian: true } } }
        });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        await this.prisma.student.update({ where: { id }, data: { deletedAt: new Date(), isActive: false } });
    }
    async setPhoto(schoolId, id, photoUrl) {
        const student = await this.findOneForSchool(schoolId, id);
        (0, image_upload_util_1.deleteUploadedFile)(student.photoUrl);
        return this.prisma.student.update({ where: { id }, data: { photoUrl } });
    }
    async removePhoto(schoolId, id) {
        const student = await this.findOneForSchool(schoolId, id);
        (0, image_upload_util_1.deleteUploadedFile)(student.photoUrl);
        return this.prisma.student.update({ where: { id }, data: { photoUrl: null } });
    }
    async linkGuardian(schoolId, studentId, guardianId, dto) {
        await this.findOneForSchool(schoolId, studentId);
        const guardian = await this.prisma.guardian.findFirst({ where: { id: guardianId, schoolId } });
        if (!guardian)
            throw new common_1.NotFoundException("Guardian not found");
        if (dto.isPrimary) {
            await this.prisma.studentGuardian.updateMany({ where: { studentId }, data: { isPrimary: false } });
        }
        return this.prisma.studentGuardian.upsert({
            where: { studentId_guardianId: { studentId, guardianId } },
            create: { studentId, guardianId, relation: dto.relation, isPrimary: dto.isPrimary ?? false },
            update: { relation: dto.relation, isPrimary: dto.isPrimary ?? false }
        });
    }
    async unlinkGuardian(schoolId, studentId, guardianId) {
        await this.findOneForSchool(schoolId, studentId);
        await this.prisma.studentGuardian.deleteMany({ where: { studentId, guardianId } });
    }
    async createLogin(schoolId, id, dto) {
        const student = await this.findOneForSchool(schoolId, id);
        if (student.userId)
            throw new common_1.ConflictException("This student already has a portal login");
        const existingUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (existingUser)
            throw new common_1.ConflictException("A user with this email already exists");
        const tempPassword = generateTempPassword();
        const passwordHash = await auth_service_1.AuthService.hashPassword(tempPassword);
        const user = await this.prisma.$transaction(async (tx) => {
            const createdUser = await tx.user.create({
                data: {
                    email: dto.email,
                    passwordHash,
                    firstName: student.firstName,
                    lastName: student.lastName,
                    role: client_1.Role.STUDENT,
                    schoolId,
                    branchId: student.branchId
                }
            });
            await tx.student.update({ where: { id }, data: { userId: createdUser.id } });
            return createdUser;
        });
        return { userId: user.id, email: user.email, tempPassword };
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentService);
//# sourceMappingURL=student.service.js.map