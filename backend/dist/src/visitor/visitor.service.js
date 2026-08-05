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
exports.VisitorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let VisitorService = class VisitorService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, filters) {
        return this.prisma.visitor.findMany({
            where: { schoolId, branchId: filters.branchId, checkOutAt: filters.active ? null : undefined },
            orderBy: { checkInAt: "desc" }
        });
    }
    async checkIn(schoolId, dto) {
        const branch = await this.prisma.branch.findFirst({ where: { id: dto.branchId, schoolId } });
        if (!branch)
            throw new common_1.NotFoundException("Branch not found");
        return this.prisma.visitor.create({ data: { ...dto, schoolId } });
    }
    async checkOut(schoolId, id) {
        const visitor = await this.prisma.visitor.findFirst({ where: { id, schoolId } });
        if (!visitor)
            throw new common_1.NotFoundException("Visitor not found");
        if (visitor.checkOutAt)
            throw new common_1.ConflictException("This visitor has already checked out");
        return this.prisma.visitor.update({ where: { id }, data: { checkOutAt: new Date() } });
    }
};
exports.VisitorService = VisitorService;
exports.VisitorService = VisitorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VisitorService);
//# sourceMappingURL=visitor.service.js.map