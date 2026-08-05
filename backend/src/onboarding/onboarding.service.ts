import { ConflictException, Injectable } from "@nestjs/common";
import { Prisma, Role } from "../../generated/prisma/client";
import { AcademicYearService } from "../academic-year/academic-year.service";
import { AuditService } from "../audit/audit.service";
import { AuthService } from "../auth/auth.service";
import { BranchService } from "../branch/branch.service";
import { PrismaService } from "../prisma/prisma.service";
import { SchoolService } from "../school/school.service";
import { UsersService } from "../users/users.service";
import { OnboardSchoolDto } from "./dto/onboard-school.dto";

interface RequestMeta {
  userAgent?: string;
  ipAddress?: string;
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

@Injectable()
export class OnboardingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly schoolService: SchoolService,
    private readonly branchService: BranchService,
    private readonly academicYearService: AcademicYearService,
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
    private readonly auditService: AuditService
  ) {}

  async onboard(dto: OnboardSchoolDto, meta: RequestMeta) {
    const passwordHash = await AuthService.hashPassword(dto.adminPassword);
    const baseSlug = slugify(dto.schoolName) || "school";

    let result;
    try {
      result = await this.prisma.$transaction(async (tx) => {
        let slug = baseSlug;
        let suffix = 1;
        while (await tx.school.findUnique({ where: { slug } })) {
          slug = `${baseSlug}-${++suffix}`;
        }

        const school = await this.schoolService.createWithinTransaction(tx, {
          name: dto.schoolName,
          slug,
          email: dto.schoolEmail,
          phone: dto.schoolPhone
        });

        const branch = await this.branchService.createWithinTransaction(tx, school.id, {
          name: "Main Branch",
          code: "MAIN"
        });

        await this.academicYearService.createWithinTransaction(tx, school.id, {
          name: dto.academicYearName,
          startDate: new Date(dto.academicYearStart),
          endDate: new Date(dto.academicYearEnd)
        });

        const adminUser = await this.usersService.createWithinTransaction(tx, {
          email: dto.adminEmail,
          passwordHash,
          firstName: dto.adminFirstName,
          lastName: dto.adminLastName,
          role: Role.SCHOOL_ADMIN,
          schoolId: school.id,
          branchId: branch.id
        });

        return { school, adminUser };
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
        throw new ConflictException("A user with this email already exists");
      }
      throw error;
    }

    const { school, adminUser } = result;

    await this.auditService.log({
      schoolId: school.id,
      userId: adminUser.id,
      action: "SCHOOL_ONBOARDED",
      entityType: "School",
      entityId: school.id
    });

    const session = await this.authService.issueSessionForUser(adminUser, meta);
    return { school, ...session };
  }
}
