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
exports.AssetService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AssetService = class AssetService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.asset.findMany({
            where: { schoolId, ...filters },
            include: {
                category: true,
                assignedToTeacher: { include: { user: { omit: { passwordHash: true } } } }
            },
            orderBy: { createdAt: "desc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const asset = await this.prisma.asset.findFirst({
            where: { id, schoolId },
            include: { category: true, assignedToTeacher: { include: { user: { omit: { passwordHash: true } } } } }
        });
        if (!asset)
            throw new common_1.NotFoundException("Asset not found");
        return asset;
    }
    async assertRelations(schoolId, branchId, categoryId, teacherId) {
        const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
        const category = await this.prisma.assetCategory.findFirst({ where: { id: categoryId, schoolId } });
        if (!category)
            throw new common_1.NotFoundException("Asset category not found");
        if (teacherId) {
            const teacher = await this.prisma.teacher.findFirst({ where: { id: teacherId, schoolId, deletedAt: null } });
            if (!teacher)
                throw new common_1.NotFoundException("Teacher not found");
        }
    }
    async create(schoolId, dto) {
        await this.assertRelations(schoolId, dto.branchId, dto.categoryId, dto.assignedToTeacherId);
        return this.prisma.asset.create({
            data: {
                schoolId,
                branchId: dto.branchId,
                categoryId: dto.categoryId,
                name: dto.name,
                serialNumber: dto.serialNumber,
                purchaseDate: dto.purchaseDate ? new Date(dto.purchaseDate) : undefined,
                purchaseCost: dto.purchaseCost,
                status: dto.status,
                assignedToTeacherId: dto.assignedToTeacherId,
                location: dto.location,
                notes: dto.notes
            },
            include: { category: true, assignedToTeacher: { include: { user: { omit: { passwordHash: true } } } } }
        });
    }
    async update(schoolId, id, dto) {
        await this.findOneForSchool(schoolId, id);
        await this.assertRelations(schoolId, dto.branchId, dto.categoryId, dto.assignedToTeacherId);
        return this.prisma.asset.update({
            where: { id },
            data: {
                branchId: dto.branchId,
                categoryId: dto.categoryId,
                name: dto.name,
                serialNumber: dto.serialNumber,
                purchaseDate: dto.purchaseDate ? new Date(dto.purchaseDate) : undefined,
                purchaseCost: dto.purchaseCost,
                status: dto.status,
                assignedToTeacherId: dto.assignedToTeacherId,
                location: dto.location,
                notes: dto.notes
            },
            include: { category: true, assignedToTeacher: { include: { user: { omit: { passwordHash: true } } } } }
        });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        await this.prisma.asset.delete({ where: { id } });
    }
};
exports.AssetService = AssetService;
exports.AssetService = AssetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AssetService);
//# sourceMappingURL=asset.service.js.map