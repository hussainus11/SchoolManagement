import { AttendanceStatus } from "../../../generated/prisma/client";
declare class StudentAttendanceEntryDto {
    studentId: string;
    status: AttendanceStatus;
    remarks?: string;
}
export declare class MarkStudentAttendanceDto {
    sectionId: string;
    date: string;
    entries: StudentAttendanceEntryDto[];
}
export {};
