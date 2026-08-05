export declare class CreateLeaveRequestDto {
    teacherId?: string;
    staffId?: string;
    leaveTypeId: string;
    startDate: string;
    endDate: string;
    isHalfDay?: boolean;
    reason?: string;
}
