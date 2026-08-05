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
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const crypto = __importStar(require("node:crypto"));
const client_1 = require("../../generated/prisma/client");
const auth_service_1 = require("../auth/auth.service");
const image_upload_util_1 = require("../common/image-upload.util");
const prisma_service_1 = require("../prisma/prisma.service");
function generateTempPassword() {
    return crypto.randomBytes(9).toString("base64url");
}
let TeacherService = class TeacherService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.teacher.findMany({
            where: {
                schoolId,
                deletedAt: null,
                branchId: filters.branchId,
                ...(filters.search
                    ? {
                        user: {
                            OR: [
                                { firstName: { contains: filters.search, mode: "insensitive" } },
                                { lastName: { contains: filters.search, mode: "insensitive" } },
                                { email: { contains: filters.search, mode: "insensitive" } }
                            ]
                        }
                    }
                    : {})
            },
            include: { user: { omit: { passwordHash: true } }, qualifications: true, customRole: true, leaveGroup: true },
            orderBy: { createdAt: "desc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const teacher = await this.prisma.teacher.findFirst({
            where: { id, schoolId, deletedAt: null },
            include: { user: { omit: { passwordHash: true } }, qualifications: true, customRole: true, leaveGroup: true }
        });
        if (!teacher)
            throw new common_1.NotFoundException("Teacher not found");
        return teacher;
    }
    async assertCustomRoleBelongsToSchool(schoolId, customRoleId) {
        const role = await this.prisma.customRole.findFirst({ where: { id: customRoleId, schoolId } });
        if (!role)
            throw new common_1.NotFoundException("Role not found");
    }
    async assertLeaveGroupBelongsToSchool(schoolId, leaveGroupId) {
        const group = await this.prisma.leaveGroup.findFirst({ where: { id: leaveGroupId, schoolId } });
        if (!group)
            throw new common_1.NotFoundException("Leave group not found");
    }
    async create(schoolId, dto) {
        const branch = await this.prisma.branch.findFirst({ where: { id: dto.branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
        await this.assertCustomRoleBelongsToSchool(schoolId, dto.customRoleId);
        if (dto.leaveGroupId) {
            await this.assertLeaveGroupBelongsToSchool(schoolId, dto.leaveGroupId);
        }
        const existingUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (existingUser)
            throw new common_1.ConflictException("A user with this email already exists");
        const tempPassword = generateTempPassword();
        const passwordHash = await auth_service_1.AuthService.hashPassword(tempPassword);
        const teacher = await this.prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    email: dto.email,
                    passwordHash,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    phone: dto.phone,
                    role: client_1.Role.TEACHER,
                    schoolId,
                    branchId: dto.branchId,
                    mustChangePassword: true
                }
            });
            return tx.teacher.create({
                data: {
                    userId: user.id,
                    schoolId,
                    branchId: dto.branchId,
                    employeeCode: dto.employeeCode,
                    gender: dto.gender,
                    dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
                    joiningDate: dto.joiningDate ? new Date(dto.joiningDate) : undefined,
                    address: dto.address,
                    emergencyPhone: dto.emergencyPhone,
                    customRoleId: dto.customRoleId,
                    leaveGroupId: dto.leaveGroupId
                },
                include: { user: { omit: { passwordHash: true } }, qualifications: true, customRole: true, leaveGroup: true }
            });
        });
        return { teacher, tempPassword };
    }
    async update(schoolId, id, dto) {
        const teacher = await this.findOneForSchool(schoolId, id);
        if (dto.customRoleId) {
            await this.assertCustomRoleBelongsToSchool(schoolId, dto.customRoleId);
        }
        if (dto.leaveGroupId) {
            await this.assertLeaveGroupBelongsToSchool(schoolId, dto.leaveGroupId);
        }
        if (dto.firstName !== undefined || dto.lastName !== undefined || dto.phone !== undefined) {
            await this.prisma.user.update({
                where: { id: teacher.userId },
                data: { firstName: dto.firstName, lastName: dto.lastName, phone: dto.phone }
            });
        }
        return this.prisma.teacher.update({
            where: { id },
            data: {
                address: dto.address,
                emergencyPhone: dto.emergencyPhone,
                gender: dto.gender,
                dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
                customRoleId: dto.customRoleId === undefined ? undefined : dto.customRoleId,
                leaveGroupId: dto.leaveGroupId === undefined ? undefined : dto.leaveGroupId
            },
            include: { user: { omit: { passwordHash: true } }, qualifications: true, customRole: true, leaveGroup: true }
        });
    }
    async remove(schoolId, id) {
        const teacher = await this.findOneForSchool(schoolId, id);
        await this.prisma.$transaction([
            this.prisma.teacher.update({ where: { id }, data: { deletedAt: new Date(), isActive: false } }),
            this.prisma.user.update({ where: { id: teacher.userId }, data: { isActive: false } })
        ]);
    }
    async setPhoto(schoolId, id, photoUrl) {
        const teacher = await this.findOneForSchool(schoolId, id);
        (0, image_upload_util_1.deleteUploadedFile)(teacher.photoUrl);
        return this.prisma.teacher.update({ where: { id }, data: { photoUrl } });
    }
    async removePhoto(schoolId, id) {
        const teacher = await this.findOneForSchool(schoolId, id);
        (0, image_upload_util_1.deleteUploadedFile)(teacher.photoUrl);
        return this.prisma.teacher.update({ where: { id }, data: { photoUrl: null } });
    }
    async resetPassword(schoolId, id) {
        const teacher = await this.findOneForSchool(schoolId, id);
        const tempPassword = generateTempPassword();
        const passwordHash = await auth_service_1.AuthService.hashPassword(tempPassword);
        await this.prisma.$transaction([
            this.prisma.user.update({
                where: { id: teacher.userId },
                data: { passwordHash, mustChangePassword: true }
            }),
            this.prisma.refreshToken.updateMany({
                where: { userId: teacher.userId, revokedAt: null },
                data: { revokedAt: new Date() }
            })
        ]);
        return { tempPassword };
    }
    async addQualification(schoolId, teacherId, dto) {
        await this.findOneForSchool(schoolId, teacherId);
        return this.prisma.teacherQualification.create({ data: { teacherId, ...dto } });
    }
    async removeQualification(schoolId, teacherId, qualificationId) {
        await this.findOneForSchool(schoolId, teacherId);
        await this.prisma.teacherQualification.deleteMany({ where: { id: qualificationId, teacherId } });
    }
};
exports.TeacherService = TeacherService;
exports.TeacherService = TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeacherService);
//# sourceMappingURL=teacher.service.js.map