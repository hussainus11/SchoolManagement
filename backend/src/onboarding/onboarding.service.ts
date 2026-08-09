import { ConflictException, Injectable } from "@nestjs/common";
import { Prisma, Role } from "../../generated/prisma/client";
import { AcademicYearService } from "../academic-year/academic-year.service";
import { AuditService } from "../audit/audit.service";
import { AuthService } from "../auth/auth.service";
import { BranchService } from "../branch/branch.service";
import { ClassService } from "../class/class.service";
import { PrismaService } from "../prisma/prisma.service";
import { SchoolService } from "../school/school.service";
import { SectionService } from "../section/section.service";
import { SubjectService } from "../subject/subject.service";
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

// A generic K-10 structure with one starter section each, so a new school isn't starting from a
// completely blank slate. All of this is just a head start — the admin can rename, add to, or
// delete anything here afterward through the normal Classes/Subjects screens.
const DEFAULT_CLASS_NAMES = [
  "Nursery",
  "KG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10"
];

const DEFAULT_SUBJECTS: { name: string; code: string }[] = [
  { name: "English", code: "ENG" },
  { name: "Mathematics", code: "MATH" },
  { name: "Science", code: "SCI" },
  { name: "Social Studies", code: "SST" },
  { name: "Computer Science", code: "CS" },
  { name: "Art & Craft", code: "ART" },
  { name: "Physical Education", code: "PE" },
  { name: "Music", code: "MUS" }
];

@Injectable()
export class OnboardingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly schoolService: SchoolService,
    private readonly branchService: BranchService,
    private readonly academicYearService: AcademicYearService,
    private readonly classService: ClassService,
    private readonly sectionService: SectionService,
    private readonly subjectService: SubjectService,
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

        const academicYear = await this.academicYearService.createWithinTransaction(tx, school.id, {
          name: dto.academicYearName,
          startDate: new Date(dto.academicYearStart),
          endDate: new Date(dto.academicYearEnd)
        });

        for (const [index, name] of DEFAULT_CLASS_NAMES.entries()) {
          const cls = await this.classService.createWithinTransaction(tx, school.id, {
            branchId: branch.id,
            academicYearId: academicYear.id,
            name,
            order: index
          });
          await this.sectionService.createWithinTransaction(tx, { classId: cls.id, name: "A" });
        }

        for (const subject of DEFAULT_SUBJECTS) {
          await this.subjectService.createWithinTransaction(tx, school.id, subject);
        }

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
