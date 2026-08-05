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
exports.AlumniService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AlumniService = class AlumniService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, search) {
        return this.prisma.alumni.findMany({
            where: {
                schoolId,
                ...(search
                    ? {
                        OR: [
                            { firstName: { contains: search, mode: "insensitive" } },
                            { lastName: { contains: search, mode: "insensitive" } },
                            { currentOccupation: { contains: search, mode: "insensitive" } }
                        ]
                    }
                    : {})
            },
            orderBy: { graduationYear: "desc" }
        });
    }
    async create(schoolId, dto) {
        if (dto.studentId) {
            const student = await this.prisma.student.findFirst({ where: { id: dto.studentId, schoolId } });
            if (!student)
                throw new common_1.NotFoundException("Student not found");
            const existing = await this.prisma.alumni.findUnique({ where: { studentId: dto.studentId } });
            if (existing)
                throw new common_1.ConflictException("This student already has an alumni record");
        }
        return this.prisma.alumni.create({ data: { ...dto, schoolId } });
    }
    async update(schoolId, id, dto) {
        const alumni = await this.prisma.alumni.findFirst({ where: { id, schoolId } });
        if (!alumni)
            throw new common_1.NotFoundException("Alumni record not found");
        return this.prisma.alumni.update({ where: { id }, data: dto });
    }
    async remove(schoolId, id) {
        const alumni = await this.prisma.alumni.findFirst({ where: { id, schoolId } });
        if (!alumni)
            throw new common_1.NotFoundException("Alumni record not found");
        await this.prisma.alumni.delete({ where: { id } });
    }
};
exports.AlumniService = AlumniService;
exports.AlumniService = AlumniService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AlumniService);
//# sourceMappingURL=alumni.service.js.map