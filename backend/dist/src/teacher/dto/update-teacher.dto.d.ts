import { Gender } from "../../../generated/prisma/client";
export declare class UpdateTeacherDto {
    firstName?: string;
    lastName?: string;
    phone?: string;
    gender?: Gender;
    dateOfBirth?: string;
    address?: string;
    emergencyPhone?: string;
    customRoleId?: string | null;
    leaveGroupId?: string | null;
}
