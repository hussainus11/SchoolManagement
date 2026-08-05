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
exports.FeeHeadService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FeeHeadService = class FeeHeadService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId) {
        return this.prisma.feeHead.findMany({ where: { schoolId }, orderBy: { name: "asc" } });
    }
    async findOneForSchool(schoolId, id) {
        const feeHead = await this.prisma.feeHead.findFirst({ where: { id, schoolId } });
        if (!feeHead)
            throw new common_1.NotFoundException("Fee head not found");
        return feeHead;
    }
    create(schoolId, dto) {
        return this.prisma.feeHead.create({ data: { ...dto, schoolId } });
    }
    async update(schoolId, id, dto) {
        await this.findOneForSchool(schoolId, id);
        return this.prisma.feeHead.update({ where: { id }, data: dto });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        const usage = await this.prisma.feeStructure.count({ where: { feeHeadId: id } });
        if (usage > 0) {
            throw new common_1.ConflictException("Cannot delete a fee head that is used in a fee structure");
        }
        await this.prisma.feeHead.delete({ where: { id } });
    }
};
exports.FeeHeadService = FeeHeadService;
exports.FeeHeadService = FeeHeadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FeeHeadService);
//# sourceMappingURL=fee-head.service.js.map