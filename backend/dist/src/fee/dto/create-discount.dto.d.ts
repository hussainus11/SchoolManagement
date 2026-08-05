import { DiscountType } from "../../../generated/prisma/client";
export declare class CreateDiscountDto {
    studentId: string;
    feeHeadId?: string;
    type: DiscountType;
    value: number;
    reason?: string;
}
