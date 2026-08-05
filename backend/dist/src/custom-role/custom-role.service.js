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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRoleService = void 0;
const common_1 = require("@nestjs/common");
const resource_catalog_1 = require("../common/resource-catalog");
const prisma_service_1 = require("../prisma/prisma.service");
let CustomRoleService = class CustomRoleService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    validatePermissions(permissions) {
        if (!permissions)
            return;
        const invalid = permissions.filter((p) => !resource_catalog_1.RESOURCE_KEYS.includes(p));
        if (invalid.length > 0) {
            throw new common_1.BadRequestException(`Unknown resource key(s): ${invalid.join(", ")}`);
        }
    }
    findAllForSchool(schoolId) {
        return this.prisma.customRole.findMany({
            where: { schoolId },
            include: { permissions: true, _count: { select: { teachers: true, staff: true } } },
            orderBy: { name: "asc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const role = await this.prisma.customRole.findFirst({
            where: { id, schoolId },
            include: { permissions: true }
        });
        if (!role)
            throw new common_1.NotFoundException("Role not found");
        return role;
    }
    async create(schoolId, dto) {
        this.validatePermissions(dto.permissions);
        const existing = await this.prisma.customRole.findUnique({
            where: { schoolId_name: { schoolId, name: dto.name } }
        });
        if (existing)
            throw new common_1.ConflictException("A role with this name already exists");
        return this.prisma.customRole.create({
            data: {
                schoolId,
                name: dto.name,
                allowLogin: dto.allowLogin ?? true,
                permissions: dto.permissions
                    ? { create: dto.permissions.map((resource) => ({ resource })) }
                    : undefined
            },
            include: { permissions: true }
        });
    }
    async update(schoolId, id, dto) {
        await this.findOneForSchool(schoolId, id);
        this.validatePermissions(dto.permissions);
        if (dto.name) {
            const existing = await this.prisma.customRole.findUnique({
                where: { schoolId_name: { schoolId, name: dto.name } }
            });
            if (existing && existing.id !== id) {
                throw new common_1.ConflictException("A role with this name already exists");
            }
        }
        return this.prisma.$transaction(async (tx) => {
            if (dto.permissions) {
                await tx.rolePermission.deleteMany({ where: { customRoleId: id } });
            }
            return tx.customRole.update({
                where: { id },
                data: {
                    name: dto.name,
                    allowLogin: dto.allowLogin,
                    permissions: dto.permissions
                        ? { create: dto.permissions.map((resource) => ({ resource })) }
                        : undefined
                },
                include: { permissions: true }
            });
        });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        const [teacherCount, staffCount] = await Promise.all([
            this.prisma.teacher.count({ where: { customRoleId: id } }),
            this.prisma.staff.count({ where: { customRoleId: id } })
        ]);
        if (teacherCount > 0 || staffCount > 0) {
            throw new common_1.ConflictException("Cannot delete a role that is still assigned to teachers or staff");
        }
        await this.prisma.customRole.delete({ where: { id } });
    }
};
exports.CustomRoleService = CustomRoleService;
exports.CustomRoleService = CustomRoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CustomRoleService);
//# sourceMappingURL=custom-role.service.js.map