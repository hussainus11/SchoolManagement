import { Gender } from "../../../generated/prisma/client";
export declare class UpdateStaffDto {
    firstName?: string;
    lastName?: string;
    phone?: string;
    designation?: string;
    gender?: Gender;
    dateOfBirth?: string;
    address?: string;
    emergencyPhone?: string;
    customRoleId?: string | null;
    leaveGroupId?: string | null;
}
