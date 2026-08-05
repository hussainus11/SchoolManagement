import { AttendanceStatus } from "../../../generated/prisma/client";
declare class TeacherAttendanceEntryDto {
    teacherId: string;
    status: AttendanceStatus;
    remarks?: string;
}
export declare class MarkTeacherAttendanceDto {
    branchId: string;
    date: string;
    entries: TeacherAttendanceEntryDto[];
}
export {};
