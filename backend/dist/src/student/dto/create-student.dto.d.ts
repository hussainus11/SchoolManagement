import { Gender } from "../../../generated/prisma/client";
export declare class CreateStudentDto {
    branchId: string;
    sectionId?: string;
    admissionNumber: string;
    firstName: string;
    lastName: string;
    gender?: Gender;
    dateOfBirth?: string;
    bloodGroup?: string;
    address?: string;
    admissionDate?: string;
}
