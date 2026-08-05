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
exports.FeeStructureService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FeeStructureService = class FeeStructureService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.feeStructure.findMany({
            where: { schoolId, ...filters },
            include: { feeHead: true, class: true },
            orderBy: { createdAt: "desc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const structure = await this.prisma.feeStructure.findFirst({
            where: { id, schoolId },
            include: { feeHead: true, class: true }
        });
        if (!structure)
            throw new common_1.NotFoundException("Fee structure not found");
        return structure;
    }
    async create(schoolId, dto) {
        const cls = await this.prisma.class.findFirst({ where: { id: dto.classId, schoolId } });
        if (!cls)
            throw new common_1.NotFoundException("Class not found");
        const feeHead = await this.prisma.feeHead.findFirst({ where: { id: dto.feeHeadId, schoolId } });
        if (!feeHead)
            throw new common_1.NotFoundException("Fee head not found");
        const year = await this.prisma.academicYear.findFirst({
            where: { id: dto.academicYearId, schoolId }
        });
        if (!year)
            throw new common_1.NotFoundException("Academic year not found");
        return this.prisma.feeStructure.create({
            data: { ...dto, schoolId },
            include: { feeHead: true, class: true }
        });
    }
    async update(schoolId, id, dto) {
        await this.findOneForSchool(schoolId, id);
        return this.prisma.feeStructure.update({
            where: { id },
            data: dto,
            include: { feeHead: true, class: true }
        });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        await this.prisma.feeStructure.delete({ where: { id } });
    }
};
exports.FeeStructureService = FeeStructureService;
exports.FeeStructureService = FeeStructureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FeeStructureService);
//# sourceMappingURL=fee-structure.service.js.map