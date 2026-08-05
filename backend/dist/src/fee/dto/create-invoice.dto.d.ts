declare class InvoiceItemInputDto {
    feeHeadId: string;
    amount: number;
    discount?: number;
}
export declare class CreateInvoiceDto {
    studentId: string;
    academicYearId: string;
    period: string;
    dueDate: string;
    items: InvoiceItemInputDto[];
}
export {};
