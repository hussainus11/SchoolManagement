import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import * as crypto from "node:crypto";
import { Role } from "../../generated/prisma/client";
import { AuthService } from "../auth/auth.service";
import { deleteUploadedFile } from "../common/image-upload.util";
import { PrismaService } from "../prisma/prisma.service";
import { CreateStaffDto } from "./dto/create-staff.dto";
import { UpdateStaffDto } from "./dto/update-staff.dto";

function generateTempPassword() {
  return crypto.randomBytes(9).toString("base64url");
}

@Injectable()
export class StaffService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, filters: { branchId?: string; search?: string }) {
    return this.prisma.staff.findMany({
      where: {
        schoolId,
        deletedAt: null,
        branchId: filters.branchId,
        ...(filters.search
          ? {
              OR: [
                { designation: { contains: filters.search, mode: "insensitive" } },
                {
                  user: {
                    OR: [
                      { firstName: { contains: filters.search, mode: "insensitive" } },
                      { lastName: { contains: filters.search, mode: "insensitive" } },
                      { email: { contains: filters.search, mode: "insensitive" } }
                    ]
                  }
                }
              ]
            }
          : {})
      },
      include: { user: { omit: { passwordHash: true } }, customRole: true, leaveGroup: true },
      orderBy: { createdAt: "desc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const staff = await this.prisma.staff.findFirst({
      where: { id, schoolId, deletedAt: null },
      include: { user: { omit: { passwordHash: true } }, customRole: true, leaveGroup: true }
    });
    if (!staff) throw new NotFoundException("Staff member not found");
    return staff;
  }

  private async assertCustomRoleBelongsToSchool(schoolId: string, customRoleId: string) {
    const role = await this.prisma.customRole.findFirst({ where: { id: customRoleId, schoolId } });
    if (!role) throw new NotFoundException("Role not found");
  }

  private async assertLeaveGroupBelongsToSchool(schoolId: string, leaveGroupId: string) {
    const group = await this.prisma.leaveGroup.findFirst({ where: { id: leaveGroupId, schoolId } });
    if (!group) throw new NotFoundException("Leave group not found");
  }

  async create(schoolId: string, dto: CreateStaffDto) {
    const branch = await this.prisma.branch.findFirst({ where: { id: dto.branchId, schoolId } });
    if (!branch) throw new NotFoundException("Branch not found");

    await this.assertCustomRoleBelongsToSchool(schoolId, dto.customRoleId);
    if (dto.leaveGroupId) {
      await this.assertLeaveGroupBelongsToSchool(schoolId, dto.leaveGroupId);
    }

    const existingUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existingUser) throw new ConflictException("A user with this email already exists");

    const tempPassword = generateTempPassword();
    const passwordHash = await AuthService.hashPassword(tempPassword);

    const staff = await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: dto.email,
          passwordHash,
          firstName: dto.firstName,
          lastName: dto.lastName,
          phone: dto.phone,
          role: Role.STAFF,
          schoolId,
          branchId: dto.branchId,
          mustChangePassword: true
        }
      });

      return tx.staff.create({
        data: {
          userId: user.id,
          schoolId,
          branchId: dto.branchId,
          employeeCode: dto.employeeCode,
          designation: dto.designation,
          gender: dto.gender,
          dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
          joiningDate: dto.joiningDate ? new Date(dto.joiningDate) : undefined,
          address: dto.address,
          emergencyPhone: dto.emergencyPhone,
          customRoleId: dto.customRoleId,
          leaveGroupId: dto.leaveGroupId
        },
        include: { user: { omit: { passwordHash: true } }, customRole: true, leaveGroup: true }
      });
    });

    return { staff, tempPassword };
  }

  async update(schoolId: string, id: string, dto: UpdateStaffDto) {
    const staff = await this.findOneForSchool(schoolId, id);

    if (dto.customRoleId) {
      await this.assertCustomRoleBelongsToSchool(schoolId, dto.customRoleId);
    }
    if (dto.leaveGroupId) {
      await this.assertLeaveGroupBelongsToSchool(schoolId, dto.leaveGroupId);
    }

    if (dto.firstName !== undefined || dto.lastName !== undefined || dto.phone !== undefined) {
      await this.prisma.user.update({
        where: { id: staff.userId },
        data: { firstName: dto.firstName, lastName: dto.lastName, phone: dto.phone }
      });
    }

    return this.prisma.staff.update({
      where: { id },
      data: {
        designation: dto.designation,
        address: dto.address,
        emergencyPhone: dto.emergencyPhone,
        gender: dto.gender,
        dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
        customRoleId: dto.customRoleId === undefined ? undefined : dto.customRoleId,
        leaveGroupId: dto.leaveGroupId === undefined ? undefined : dto.leaveGroupId
      },
      include: { user: { omit: { passwordHash: true } }, customRole: true, leaveGroup: true }
    });
  }

  async remove(schoolId: string, id: string) {
    const staff = await this.findOneForSchool(schoolId, id);
    await this.prisma.$transaction([
      this.prisma.staff.update({ where: { id }, data: { deletedAt: new Date(), isActive: false } }),
      this.prisma.user.update({ where: { id: staff.userId }, data: { isActive: false } })
    ]);
  }

  async setPhoto(schoolId: string, id: string, photoUrl: string) {
    const staff = await this.findOneForSchool(schoolId, id);
    deleteUploadedFile(staff.photoUrl);
    return this.prisma.staff.update({ where: { id }, data: { photoUrl } });
  }

  async removePhoto(schoolId: string, id: string) {
    const staff = await this.findOneForSchool(schoolId, id);
    deleteUploadedFile(staff.photoUrl);
    return this.prisma.staff.update({ where: { id }, data: { photoUrl: null } });
  }

  async resetPassword(schoolId: string, id: string) {
    const staff = await this.findOneForSchool(schoolId, id);
    const tempPassword = generateTempPassword();
    const passwordHash = await AuthService.hashPassword(tempPassword);

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: staff.userId },
        data: { passwordHash, mustChangePassword: true }
      }),
      this.prisma.refreshToken.updateMany({
        where: { userId: staff.userId, revokedAt: null },
        data: { revokedAt: new Date() }
      })
    ]);

    return { tempPassword };
  }
}
