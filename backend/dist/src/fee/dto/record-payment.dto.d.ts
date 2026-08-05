import { PaymentMethod } from "../../../generated/prisma/client";
export declare class RecordPaymentDto {
    amount: number;
    method: PaymentMethod;
    reference?: string;
    paidAt?: string;
}
