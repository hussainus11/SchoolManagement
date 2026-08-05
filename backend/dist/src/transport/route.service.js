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
exports.RouteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RouteService = class RouteService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId) {
        return this.prisma.route.findMany({
            where: { schoolId },
            include: { vehicle: true, stops: { orderBy: { order: "asc" } } },
            orderBy: { name: "asc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const route = await this.prisma.route.findFirst({
            where: { id, schoolId },
            include: { vehicle: true, stops: { orderBy: { order: "asc" } } }
        });
        if (!route)
            throw new common_1.NotFoundException("Route not found");
        return route;
    }
    async assertVehicleInSchool(schoolId, vehicleId) {
        const vehicle = await this.prisma.vehicle.findFirst({ where: { id: vehicleId, schoolId } });
        if (!vehicle)
            throw new common_1.NotFoundException("Vehicle not found");
    }
    async create(schoolId, dto) {
        await this.assertVehicleInSchool(schoolId, dto.vehicleId);
        return this.prisma.route.create({ data: { ...dto, schoolId }, include: { vehicle: true, stops: true } });
    }
    async update(schoolId, id, dto) {
        await this.findOneForSchool(schoolId, id);
        if (dto.vehicleId)
            await this.assertVehicleInSchool(schoolId, dto.vehicleId);
        return this.prisma.route.update({
            where: { id },
            data: dto,
            include: { vehicle: true, stops: { orderBy: { order: "asc" } } }
        });
    }
    async remove(schoolId, id) {
        await this.findOneForSchool(schoolId, id);
        const usage = await this.prisma.studentTransport.count({ where: { routeId: id } });
        if (usage > 0)
            throw new common_1.ConflictException("Cannot delete a route with students assigned");
        await this.prisma.routeStop.deleteMany({ where: { routeId: id } });
        await this.prisma.route.delete({ where: { id } });
    }
    async addStop(schoolId, routeId, dto) {
        await this.findOneForSchool(schoolId, routeId);
        return this.prisma.routeStop.create({ data: { ...dto, routeId } });
    }
    async removeStop(schoolId, routeId, stopId) {
        await this.findOneForSchool(schoolId, routeId);
        const stop = await this.prisma.routeStop.findFirst({ where: { id: stopId, routeId } });
        if (!stop)
            throw new common_1.NotFoundException("Stop not found");
        const usage = await this.prisma.studentTransport.count({ where: { stopId } });
        if (usage > 0)
            throw new common_1.ConflictException("Cannot delete a stop with students assigned");
        await this.prisma.routeStop.delete({ where: { id: stopId } });
    }
};
exports.RouteService = RouteService;
exports.RouteService = RouteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RouteService);
//# sourceMappingURL=route.service.js.map