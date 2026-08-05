import { DayOfWeek } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
interface AssignInput {
    sectionId: string;
    periodId: string;
    dayOfWeek: DayOfWeek;
    subjectId: string;
    teacherId: string;
}
export declare class TimetableService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findForSection(schoolId: string, sectionId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        period: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            order: number;
            startTime: string;
            endTime: string;
        };
        subject: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            code: string;
            imageUrl: string | null;
        };
        teacher: {
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
                role: import("../../generated/prisma/enums").Role;
                mustChangePassword: boolean;
                lastLoginAt: Date | null;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            deletedAt: Date | null;
            userId: string;
            customRoleId: string | null;
            leaveGroupId: string | null;
            employeeCode: string;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            joiningDate: Date;
            emergencyPhone: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        subjectId: string;
        sectionId: string;
        teacherId: string;
        periodId: string;
        dayOfWeek: DayOfWeek;
    })[]>;
    findForTeacher(schoolId: string, teacherId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        period: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            order: number;
            startTime: string;
            endTime: string;
        };
        section: {
            class: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
                branchId: string;
                academicYearId: string;
                order: number;
            };
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            classId: string;
            capacity: number | null;
            classTeacherId: string | null;
        };
        subject: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            code: string;
            imageUrl: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        subjectId: string;
        sectionId: string;
        teacherId: string;
        periodId: string;
        dayOfWeek: DayOfWeek;
    })[]>;
    private assertSectionInSchool;
    assign(schoolId: string, data: AssignInput): Promise<{
        period: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            order: number;
            startTime: string;
            endTime: string;
        };
        subject: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            code: string;
            imageUrl: string | null;
        };
        teacher: {
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
                role: import("../../generated/prisma/enums").Role;
                mustChangePassword: boolean;
                lastLoginAt: Date | null;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            deletedAt: Date | null;
            userId: string;
            customRoleId: string | null;
            leaveGroupId: string | null;
            employeeCode: string;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            joiningDate: Date;
            emergencyPhone: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        subjectId: string;
        sectionId: string;
        teacherId: string;
        periodId: string;
        dayOfWeek: DayOfWeek;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
export {};
