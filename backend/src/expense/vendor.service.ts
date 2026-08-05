import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateVendorDto } from "./dto/create-vendor.dto";

@Injectable()
export class VendorService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string) {
    return this.prisma.vendor.findMany({ where: { schoolId }, orderBy: { name: "asc" } });
  }

  create(schoolId: string, dto: CreateVendorDto) {
    return this.prisma.vendor.create({ data: { ...dto, schoolId } });
  }

  async update(schoolId: string, id: string, dto: Partial<CreateVendorDto>) {
    const vendor = await this.prisma.vendor.findFirst({ where: { id, schoolId } });
    if (!vendor) throw new NotFoundException("Vendor not found");
    return this.prisma.vendor.update({ where: { id }, data: dto });
  }
}
