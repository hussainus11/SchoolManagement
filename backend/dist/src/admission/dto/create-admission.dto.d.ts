import { Gender } from "../../../generated/prisma/client";
export declare class CreateAdmissionDto {
    branchId: string;
    applicantFirstName: string;
    applicantLastName: string;
    dateOfBirth?: string;
    gender?: Gender;
    gradeAppliedFor: string;
    guardianName: string;
    guardianPhone: string;
    guardianEmail?: string;
    source?: string;
}
