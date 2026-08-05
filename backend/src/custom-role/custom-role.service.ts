import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { RESOURCE_KEYS } from "../common/resource-catalog";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCustomRoleDto } from "./dto/create-custom-role.dto";
import { UpdateCustomRoleDto } from "./dto/update-custom-role.dto";

@Injectable()
export class CustomRoleService {
  constructor(private readonly prisma: PrismaService) {}

  private validatePermissions(permissions?: string[]) {
    if (!permissions) return;
    const invalid = permissions.filter((p) => !RESOURCE_KEYS.includes(p));
    if (invalid.length > 0) {
      throw new BadRequestException(`Unknown resource key(s): ${invalid.join(", ")}`);
    }
  }

  findAllForSchool(schoolId: string) {
    return this.prisma.customRole.findMany({
      where: { schoolId },
      include: { permissions: true, _count: { select: { teachers: true, staff: true } } },
      orderBy: { name: "asc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const role = await this.prisma.customRole.findFirst({
      where: { id, schoolId },
      include: { permissions: true }
    });
    if (!role) throw new NotFoundException("Role not found");
    return role;
  }

  async create(schoolId: string, dto: CreateCustomRoleDto) {
    this.validatePermissions(dto.permissions);

    const existing = await this.prisma.customRole.findUnique({
      where: { schoolId_name: { schoolId, name: dto.name } }
    });
    if (existing) throw new ConflictException("A role with this name already exists");

    return this.prisma.customRole.create({
      data: {
        schoolId,
        name: dto.name,
        allowLogin: dto.allowLogin ?? true,
        permissions: dto.permissions
          ? { create: dto.permissions.map((resource) => ({ resource })) }
          : undefined
      },
      include: { permissions: true }
    });
  }

  async update(schoolId: string, id: string, dto: UpdateCustomRoleDto) {
    await this.findOneForSchool(schoolId, id);
    this.validatePermissions(dto.permissions);

    if (dto.name) {
      const existing = await this.prisma.customRole.findUnique({
        where: { schoolId_name: { schoolId, name: dto.name } }
      });
      if (existing && existing.id !== id) {
        throw new ConflictException("A role with this name already exists");
      }
    }

    return this.prisma.$transaction(async (tx) => {
      if (dto.permissions) {
        await tx.rolePermission.deleteMany({ where: { customRoleId: id } });
      }
      return tx.customRole.update({
        where: { id },
        data: {
          name: dto.name,
          allowLogin: dto.allowLogin,
          permissions: dto.permissions
            ? { create: dto.permissions.map((resource) => ({ resource })) }
            : undefined
        },
        include: { permissions: true }
      });
    });
  }

  async remove(schoolId: string, id: string) {
    await this.findOneForSchool(schoolId, id);
    const [teacherCount, staffCount] = await Promise.all([
      this.prisma.teacher.count({ where: { customRoleId: id } }),
      this.prisma.staff.count({ where: { customRoleId: id } })
    ]);
    if (teacherCount > 0 || staffCount > 0) {
      throw new ConflictException("Cannot delete a role that is still assigned to teachers or staff");
    }
    await this.prisma.customRole.delete({ where: { id } });
  }
}
