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
exports.AcademicYearService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AcademicYearService = class AcademicYearService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId) {
        return this.prisma.academicYear.findMany({
            where: { schoolId },
            orderBy: { startDate: "desc" }
        });
    }
    async create(schoolId, data) {
        if (data.isCurrent) {
            await this.prisma.academicYear.updateMany({
                where: { schoolId, isCurrent: true },
                data: { isCurrent: false }
            });
        }
        return this.prisma.academicYear.create({ data: { ...data, schoolId } });
    }
    createWithinTransaction(tx, schoolId, data) {
        return tx.academicYear.create({ data: { ...data, schoolId, isCurrent: true } });
    }
    async setCurrent(schoolId, id) {
        const year = await this.prisma.academicYear.findFirst({ where: { id, schoolId } });
        if (!year)
            throw new common_1.NotFoundException("Academic year not found");
        await this.prisma.$transaction([
            this.prisma.academicYear.updateMany({
                where: { schoolId, isCurrent: true },
                data: { isCurrent: false }
            }),
            this.prisma.academicYear.update({ where: { id }, data: { isCurrent: true } })
        ]);
        return this.prisma.academicYear.findUniqueOrThrow({ where: { id } });
    }
};
exports.AcademicYearService = AcademicYearService;
exports.AcademicYearService = AcademicYearService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AcademicYearService);
//# sourceMappingURL=academic-year.service.js.map