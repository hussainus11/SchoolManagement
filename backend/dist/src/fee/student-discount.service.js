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
exports.StudentDiscountService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StudentDiscountService = class StudentDiscountService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findForStudent(schoolId, studentId) {
        return this.prisma.studentDiscount.findMany({
            where: { schoolId, studentId },
            include: { feeHead: true },
            orderBy: { createdAt: "desc" }
        });
    }
    async create(schoolId, dto) {
        if (dto.type === "PERCENTAGE" && dto.value > 100) {
            throw new common_1.BadRequestException("A percentage discount cannot exceed 100");
        }
        const student = await this.prisma.student.findFirst({
            where: { id: dto.studentId, schoolId, deletedAt: null }
        });
        if (!student)
            throw new common_1.NotFoundException("Student not found");
        if (dto.feeHeadId) {
            const feeHead = await this.prisma.feeHead.findFirst({ where: { id: dto.feeHeadId, schoolId } });
            if (!feeHead)
                throw new common_1.NotFoundException("Fee head not found");
        }
        return this.prisma.studentDiscount.create({ data: { ...dto, schoolId }, include: { feeHead: true } });
    }
    async deactivate(schoolId, id) {
        const discount = await this.prisma.studentDiscount.findFirst({ where: { id, schoolId } });
        if (!discount)
            throw new common_1.NotFoundException("Discount not found");
        return this.prisma.studentDiscount.update({ where: { id }, data: { isActive: false } });
    }
};
exports.StudentDiscountService = StudentDiscountService;
exports.StudentDiscountService = StudentDiscountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentDiscountService);
//# sourceMappingURL=student-discount.service.js.map