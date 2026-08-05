import { PrismaService } from "../prisma/prisma.service";
import { CreateDisciplineIncidentDto } from "./dto/create-discipline-incident.dto";
export declare class DisciplineService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, studentId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        student: {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            firstName: string;
            lastName: string;
            deletedAt: Date | null;
            userId: string | null;
            sectionId: string | null;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            admissionNumber: string;
            bloodGroup: string | null;
            admissionDate: Date;
            academicStatus: import("../../generated/prisma/enums").AcademicStatus;
        };
        reportedBy: {
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
            role: import("../../generated/prisma/enums").Role;
            mustChangePassword: boolean;
            lastLoginAt: Date | null;
            deletedAt: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        description: string;
        category: string;
        reportedById: string;
        incidentDate: Date;
        severity: import("../../generated/prisma/enums").DisciplineSeverity;
        actionTaken: string | null;
    })[]>;
    create(schoolId: string, reportedById: string, dto: CreateDisciplineIncidentDto): Promise<{
        student: {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            firstName: string;
            lastName: string;
            deletedAt: Date | null;
            userId: string | null;
            sectionId: string | null;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            admissionNumber: string;
            bloodGroup: string | null;
            admissionDate: Date;
            academicStatus: import("../../generated/prisma/enums").AcademicStatus;
        };
        reportedBy: {
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
            role: import("../../generated/prisma/enums").Role;
            mustChangePassword: boolean;
            lastLoginAt: Date | null;
            deletedAt: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        description: string;
        category: string;
        reportedById: string;
        incidentDate: Date;
        severity: import("../../generated/prisma/enums").DisciplineSeverity;
        actionTaken: string | null;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
