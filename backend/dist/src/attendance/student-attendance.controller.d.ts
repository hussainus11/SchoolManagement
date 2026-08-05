import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { MarkStudentAttendanceDto } from "./dto/mark-student-attendance.dto";
import { UpdateAttendanceDto } from "./dto/update-attendance.dto";
import { StudentAttendanceService } from "./student-attendance.service";
export declare class StudentAttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: StudentAttendanceService);
    find(user: JwtPayload, sectionId?: string, date?: string, studentId?: string, startDate?: string, endDate?: string): never[] | import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        academicYearId: string;
        sectionId: string;
        studentId: string;
        date: Date;
        status: import("../../generated/prisma/enums").AttendanceStatus;
        remarks: string | null;
        markedById: string;
    }[]>;
    bulkMark(user: JwtPayload, dto: MarkStudentAttendanceDto): Promise<({
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
        status: import("../../generated/prisma/enums").AttendanceStatus;
        remarks: string | null;
        markedById: string;
    })[]>;
    update(user: JwtPayload, id: string, dto: UpdateAttendanceDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        academicYearId: string;
        sectionId: string;
        studentId: string;
        date: Date;
        status: import("../../generated/prisma/enums").AttendanceStatus;
        remarks: string | null;
        markedById: string;
    }>;
}
