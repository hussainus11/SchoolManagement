export declare class LeaveGroupAllocationInput {
    leaveTypeId: string;
    daysPerYear: number;
}
export declare class CreateLeaveGroupDto {
    name: string;
    allocations?: LeaveGroupAllocationInput[];
}
