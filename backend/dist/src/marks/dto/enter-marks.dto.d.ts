declare class MarkEntryDto {
    studentId: string;
    marksObtained?: number;
    isAbsent?: boolean;
    remarks?: string;
}
export declare class EnterMarksDto {
    examScheduleId: string;
    entries: MarkEntryDto[];
}
export {};
