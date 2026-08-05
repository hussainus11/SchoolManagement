import { Role } from "../../generated/prisma/client";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { MarkTeacherAttendanceDto } from "./dto/mark-teacher-attendance.dto";
import { UpdateAttendanceDto } from "./dto/update-attendance.dto";
import { TeacherAttendanceService } from "./teacher-attendance.service";
export declare class TeacherAttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: TeacherAttendanceService);
    find(user: JwtPayload, branchId?: string, date?: string, teacherId?: string, startDate?: string, endDate?: string): never[] | import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        academicYearId: string;
        teacherId: string;
        date: Date;
        status: import("../../generated/prisma/enums").AttendanceStatus;
        remarks: string | null;
        markedById: string;
    }[]>;
    bulkMark(user: JwtPayload, dto: MarkTeacherAttendanceDto): Promise<({
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
                role: Role;
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
        teacherId: string;
        date: Date;
        status: import("../../generated/prisma/enums").AttendanceStatus;
        remarks: string | null;
        markedById: string;
    }>;
}
