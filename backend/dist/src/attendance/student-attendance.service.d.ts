import { AttendanceStatus } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
interface BulkMarkEntry {
    studentId: string;
    status: AttendanceStatus;
    remarks?: string;
}
export declare class StudentAttendanceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private assertSectionInSchool;
    bulkMark(schoolId: string, markedById: string, sectionId: string, date: string, entries: BulkMarkEntry[]): Promise<({
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        academicYearId: string;
        sectionId: string;
        studentId: string;
        date: Date;
        status: AttendanceStatus;
        remarks: string | null;
        markedById: string;
    })[]>;
    findForSectionAndDate(schoolId: string, sectionId: string, date: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        academicYearId: string;
        sectionId: string;
        studentId: string;
        date: Date;
        status: AttendanceStatus;
        remarks: string | null;
        markedById: string;
    })[]>;
    findForStudent(schoolId: string, studentId: string, filters: {
        startDate?: string;
        endDate?: string;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        academicYearId: string;
        sectionId: string;
        studentId: string;
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
        sectionId: string;
        studentId: string;
        date: Date;
        status: AttendanceStatus;
        remarks: string | null;
        markedById: string;
    }>;
}
export {};
