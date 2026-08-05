import { Gender } from "../../../generated/prisma/client";
export declare class CreateTeacherDto {
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    branchId: string;
    employeeCode: string;
    gender?: Gender;
    dateOfBirth?: string;
    joiningDate?: string;
    address?: string;
    emergencyPhone?: string;
    customRoleId: string;
    leaveGroupId?: string;
}
