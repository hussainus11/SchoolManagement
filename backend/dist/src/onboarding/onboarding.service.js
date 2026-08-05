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
exports.OnboardingService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const academic_year_service_1 = require("../academic-year/academic-year.service");
const audit_service_1 = require("../audit/audit.service");
const auth_service_1 = require("../auth/auth.service");
const branch_service_1 = require("../branch/branch.service");
const prisma_service_1 = require("../prisma/prisma.service");
const school_service_1 = require("../school/school.service");
const users_service_1 = require("../users/users.service");
function slugify(input) {
    return input
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}
let OnboardingService = class OnboardingService {
    prisma;
    schoolService;
    branchService;
    academicYearService;
    usersService;
    authService;
    auditService;
    constructor(prisma, schoolService, branchService, academicYearService, usersService, authService, auditService) {
        this.prisma = prisma;
        this.schoolService = schoolService;
        this.branchService = branchService;
        this.academicYearService = academicYearService;
        this.usersService = usersService;
        this.authService = authService;
        this.auditService = auditService;
    }
    async onboard(dto, meta) {
        const passwordHash = await auth_service_1.AuthService.hashPassword(dto.adminPassword);
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
                    role: client_1.Role.SCHOOL_ADMIN,
                    schoolId: school.id,
                    branchId: branch.id
                });
                return { school, adminUser };
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
                throw new common_1.ConflictException("A user with this email already exists");
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
};
exports.OnboardingService = OnboardingService;
exports.OnboardingService = OnboardingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        school_service_1.SchoolService,
        branch_service_1.BranchService,
        academic_year_service_1.AcademicYearService,
        users_service_1.UsersService,
        auth_service_1.AuthService,
        audit_service_1.AuditService])
], OnboardingService);
//# sourceMappingURL=onboarding.service.js.map