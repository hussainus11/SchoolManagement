import { AcademicStatus, Gender } from "../../../generated/prisma/client";
export declare class UpdateStudentDto {
    firstName?: string;
    lastName?: string;
    sectionId?: string | null;
    gender?: Gender;
    dateOfBirth?: string;
    bloodGroup?: string;
    address?: string;
    academicStatus?: AcademicStatus;
}
