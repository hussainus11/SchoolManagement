import { AttendanceStatus } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
interface BulkMarkEntry {
    teacherId: string;
    status: AttendanceStatus;
    remarks?: string;
}
export declare class TeacherAttendanceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    bulkMark(schoolId: string, markedById: string, branchId: string, date: string, entries: BulkMarkEntry[]): Promise<({
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
        academicYearId: string;
        teacherId: string;
        date: Date;
        status: AttendanceStatus;
        remarks: string | null;
        markedById: string;
    })[]>;
    findForBranchAndDate(schoolId: string, branchId: string, date: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        academicYearId: string;
        teacherId: string;
        date: Date;
        status: AttendanceStatus;
        remarks: string | null;
        markedById: string;
    })[]>;
    findForTeacher(schoolId: string, teacherId: string, filters: {
        startDate?: string;
        endDate?: string;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        academicYearId: string;
        teacherId: string;
        date: Date;
        status: AttendanceStatus;
        remarks: string | null;
        markedById: string;
    }[]>;
    update(schoolId: string, id: string, data: {
        status?: AttendanceStatus;
        remarks?: string;
    }, markedById: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        academicYearId: string;
        teacherId: string;
        date: Date;
        status: AttendanceStatus;
        remarks: string | null;
        markedById: string;
    }>;
}
export {};
