import { Role } from "../../generated/prisma/client";
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
export declare class OnboardingService {
    private readonly prisma;
    private readonly schoolService;
    private readonly branchService;
    private readonly academicYearService;
    private readonly usersService;
    private readonly authService;
    private readonly auditService;
    constructor(prisma: PrismaService, schoolService: SchoolService, branchService: BranchService, academicYearService: AcademicYearService, usersService: UsersService, authService: AuthService, auditService: AuditService);
    onboard(dto: OnboardSchoolDto, meta: RequestMeta): Promise<{
        tokens: import("../auth/auth.service").AuthTokens;
        user: {
            id: string;
            email: string;
            phone: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string | null;
            branchId: string | null;
            firstName: string;
            lastName: string;
            role: Role;
            mustChangePassword: boolean;
            lastLoginAt: Date | null;
            deletedAt: Date | null;
        };
        school: any;
    }>;
}
export {};
