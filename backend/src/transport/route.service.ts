import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRouteStopDto } from "./dto/create-route-stop.dto";
import { CreateRouteDto } from "./dto/create-route.dto";
import { UpdateRouteDto } from "./dto/update-route.dto";

@Injectable()
export class RouteService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string) {
    return this.prisma.route.findMany({
      where: { schoolId },
      include: { vehicle: true, stops: { orderBy: { order: "asc" } } },
      orderBy: { name: "asc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const route = await this.prisma.route.findFirst({
      where: { id, schoolId },
      include: { vehicle: true, stops: { orderBy: { order: "asc" } } }
    });
    if (!route) throw new NotFoundException("Route not found");
    return route;
  }

  private async assertVehicleInSchool(schoolId: string, vehicleId: string) {
    const vehicle = await this.prisma.vehicle.findFirst({ where: { id: vehicleId, schoolId } });
    if (!vehicle) throw new NotFoundException("Vehicle not found");
  }

  async create(schoolId: string, dto: CreateRouteDto) {
    await this.assertVehicleInSchool(schoolId, dto.vehicleId);
    return this.prisma.route.create({ data: { ...dto, schoolId }, include: { vehicle: true, stops: true } });
  }

  async update(schoolId: string, id: string, dto: UpdateRouteDto) {
    await this.findOneForSchool(schoolId, id);
    if (dto.vehicleId) await this.assertVehicleInSchool(schoolId, dto.vehicleId);
    return this.prisma.route.update({
      where: { id },
      data: dto,
      include: { vehicle: true, stops: { orderBy: { order: "asc" } } }
    });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    const usage = await this.prisma.studentTransport.count({ where: { routeId: id } });
    if (usage > 0) throw new ConflictException("Cannot delete a route with students assigned");
    await this.prisma.routeStop.deleteMany({ where: { routeId: id } });
    await this.prisma.route.delete({ where: { id } });
  }

  async addStop(schoolId: string, routeId: string, dto: CreateRouteStopDto) {
    await this.findOneForSchool(schoolId, routeId);
    return this.prisma.routeStop.create({ data: { ...dto, routeId } });
  }

  async removeStop(schoolId: string, routeId: string, stopId: string) {
    await this.findOneForSchool(schoolId, routeId);
    const stop = await this.prisma.routeStop.findFirst({ where: { id: stopId, routeId } });
    if (!stop) throw new NotFoundException("Stop not found");
    const usage = await this.prisma.studentTransport.count({ where: { stopId } });
    if (usage > 0) throw new ConflictException("Cannot delete a stop with students assigned");
    await this.prisma.routeStop.delete({ where: { id: stopId } });
  }
}
