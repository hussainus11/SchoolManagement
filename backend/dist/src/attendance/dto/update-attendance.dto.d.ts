import { AttendanceStatus } from "../../../generated/prisma/client";
export declare class UpdateAttendanceDto {
    status?: AttendanceStatus;
    remarks?: string;
}
