import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import * as crypto from "node:crypto";
import { Role } from "../../generated/prisma/client";
import { AuthService } from "../auth/auth.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateGuardianDto } from "./dto/create-guardian.dto";

function generateTempPassword() {
  return crypto.randomBytes(9).toString("base64url");
}

@Injectable()
export class GuardianService {
  constructor(private readonly prisma: PrismaService) {}

  findAllForSchool(schoolId: string, search?: string) {
    return this.prisma.guardian.findMany({
      where: {
        schoolId,
        ...(search
          ? {
              OR: [
                { firstName: { contains: search, mode: "insensitive" } },
                { lastName: { contains: search, mode: "insensitive" } },
                { email: { contains: search, mode: "insensitive" } },
                { phone: { contains: search, mode: "insensitive" } }
              ]
            }
          : {})
      },
      orderBy: { createdAt: "desc" }
    });
  }

  async findOneForSchool(schoolId: string, id: string) {
    const guardian = await this.prisma.guardian.findFirst({ where: { id, schoolId } });
    if (!guardian) throw new NotFoundException("Guardian not found");
    return guardian;
  }

  create(schoolId: string, dto: CreateGuardianDto) {
    return this.prisma.guardian.create({ data: { ...dto, schoolId } });
  }

  async createLogin(schoolId: string, id: string) {
    const guardian = await this.findOneForSchool(schoolId, id);
    if (guardian.userId) throw new ConflictException("This guardian already has a portal login");
    if (!guardian.email) throw new ConflictException("Guardian must have an email to create a login");

    const existingUser = await this.prisma.user.findUnique({ where: { email: guardian.email } });
    if (existingUser) throw new ConflictException("A user with this email already exists");

    const tempPassword = generateTempPassword();
    const passwordHash = await AuthService.hashPassword(tempPassword);

    const user = await this.prisma.$transaction(async (tx) => {
      const createdUser = await tx.user.create({
        data: {
          email: guardian.email!,
          passwordHash,
          firstName: guardian.firstName,
          lastName: guardian.lastName,
          phone: guardian.phone,
          role: Role.PARENT,
          schoolId
        }
      });
      await tx.guardian.update({ where: { id }, data: { userId: createdUser.id } });
      return createdUser;
    });

    return { userId: user.id, email: user.email, tempPassword };
  }
}
