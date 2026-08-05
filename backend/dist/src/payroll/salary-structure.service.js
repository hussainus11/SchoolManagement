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
exports.SalaryStructureService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SalaryStructureService = class SalaryStructureService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findForUser(schoolId, userId) {
        return this.prisma.salaryStructure.findMany({
            where: { schoolId, userId },
            orderBy: { effectiveFrom: "desc" }
        });
    }
    async create(schoolId, dto) {
        const user = await this.prisma.user.findFirst({
            where: { id: dto.userId, schoolId, deletedAt: null }
        });
        if (!user)
            throw new common_1.NotFoundException("User not found");
        return this.prisma.$transaction(async (tx) => {
            await tx.salaryStructure.updateMany({
                where: { schoolId, userId: dto.userId, isActive: true },
                data: { isActive: false }
            });
            return tx.salaryStructure.create({
                data: {
                    schoolId,
                    userId: dto.userId,
                    basicSalary: dto.basicSalary,
                    allowances: dto.allowances ?? 0,
                    fixedDeductions: dto.fixedDeductions ?? 0,
                    effectiveFrom: new Date(dto.effectiveFrom)
                }
            });
        });
    }
    async deactivate(schoolId, id) {
        const structure = await this.prisma.salaryStructure.findFirst({ where: { id, schoolId } });
        if (!structure)
            throw new common_1.NotFoundException("Salary structure not found");
        return this.prisma.salaryStructure.update({ where: { id }, data: { isActive: false } });
    }
};
exports.SalaryStructureService = SalaryStructureService;
exports.SalaryStructureService = SalaryStructureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SalaryStructureService);
//# sourceMappingURL=salary-structure.service.js.map