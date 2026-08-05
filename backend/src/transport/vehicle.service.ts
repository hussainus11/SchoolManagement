import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";

@Injectable()
export class VehicleService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, branchId?: string) {
    return this.prisma.vehicle.findMany({
      where: { schoolId, branchId },
      orderBy: { registrationNumber: "asc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const vehicle = await this.prisma.vehicle.findFirst({ where: { id, schoolId } });
    if (!vehicle) throw new NotFoundException("Vehicle not found");
    return vehicle;
  }

  private async assertBranchInSchool(schoolId: string, branchId: string) {
    const branch = await this.prisma.branch.findFirst({ where: { id: branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");
  }

  async create(schoolId: string, dto: CreateVehicleDto) {
    await this.assertBranchInSchool(schoolId, dto.branchId);
    return this.prisma.vehicle.create({ data: { ...dto, schoolId } });
  }

  async update(schoolId: string, id: string, dto: CreateVehicleDto) {
    await this.findOneForSchool(schoolId, id);
    await this.assertBranchInSchool(schoolId, dto.branchId);
    return this.prisma.vehicle.update({ where: { id }, data: dto });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    const usage = await this.prisma.route.count({ where: { vehicleId: id } });
    if (usage > 0) throw new ConflictException("Cannot delete a vehicle that has routes assigned");
    await this.prisma.vehicle.delete({ where: { id } });
  }
}
