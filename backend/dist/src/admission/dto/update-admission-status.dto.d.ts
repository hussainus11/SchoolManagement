import { AdmissionStatus } from "../../../generated/prisma/client";
export declare class UpdateAdmissionStatusDto {
    status: AdmissionStatus;
    testScore?: number;
    testDate?: string;
    offeredSectionId?: string;
    notes?: string;
}
