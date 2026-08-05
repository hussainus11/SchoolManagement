import { FeeFrequency } from "../../../generated/prisma/client";
export declare class CreateFeeStructureDto {
    classId: string;
    feeHeadId: string;
    academicYearId: string;
    amount: number;
    frequency: FeeFrequency;
}
