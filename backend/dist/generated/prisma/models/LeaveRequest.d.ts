import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeaveRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$LeaveRequestPayload>;
export type AggregateLeaveRequest = {
    _count: LeaveRequestCountAggregateOutputType | null;
    _avg: LeaveRequestAvgAggregateOutputType | null;
    _sum: LeaveRequestSumAggregateOutputType | null;
    _min: LeaveRequestMinAggregateOutputType | null;
    _max: LeaveRequestMaxAggregateOutputType | null;
};
export type LeaveRequestAvgAggregateOutputType = {
    dayCount: number | null;
};
export type LeaveRequestSumAggregateOutputType = {
    dayCount: number | null;
};
export type LeaveRequestMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    teacherId: string | null;
    staffId: string | null;
    leaveTypeId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isHalfDay: boolean | null;
    dayCount: number | null;
    reason: string | null;
    status: $Enums.LeaveStatus | null;
    approvedById: string | null;
    approvedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LeaveRequestMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    teacherId: string | null;
    staffId: string | null;
    leaveTypeId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isHalfDay: boolean | null;
    dayCount: number | null;
    reason: string | null;
    status: $Enums.LeaveStatus | null;
    approvedById: string | null;
    approvedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LeaveRequestCountAggregateOutputType = {
    id: number;
    schoolId: number;
    teacherId: number;
    staffId: number;
    leaveTypeId: number;
    startDate: number;
    endDate: number;
    isHalfDay: number;
    dayCount: number;
    reason: number;
    status: number;
    approvedById: number;
    approvedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LeaveRequestAvgAggregateInputType = {
    dayCount?: true;
};
export type LeaveRequestSumAggregateInputType = {
    dayCount?: true;
};
export type LeaveRequestMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    teacherId?: true;
    staffId?: true;
    leaveTypeId?: true;
    startDate?: true;
    endDate?: true;
    isHalfDay?: true;
    dayCount?: true;
    reason?: true;
    status?: true;
    approvedById?: true;
    approvedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LeaveRequestMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    teacherId?: true;
    staffId?: true;
    leaveTypeId?: true;
    startDate?: true;
    endDate?: true;
    isHalfDay?: true;
    dayCount?: true;
    reason?: true;
    status?: true;
    approvedById?: true;
    approvedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LeaveRequestCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    teacherId?: true;
    staffId?: true;
    leaveTypeId?: true;
    startDate?: true;
    endDate?: true;
    isHalfDay?: true;
    dayCount?: true;
    reason?: true;
    status?: true;
    approvedById?: true;
    approvedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LeaveRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveRequestWhereInput;
    orderBy?: Prisma.LeaveRequestOrderByWithRelationInput | Prisma.LeaveRequestOrderByWithRelationInput[];
    cursor?: Prisma.LeaveRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeaveRequestCountAggregateInputType;
    _avg?: LeaveRequestAvgAggregateInputType;
    _sum?: LeaveRequestSumAggregateInputType;
    _min?: LeaveRequestMinAggregateInputType;
    _max?: LeaveRequestMaxAggregateInputType;
};
export type GetLeaveRequestAggregateType<T extends LeaveRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateLeaveRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeaveRequest[P]> : Prisma.GetScalarType<T[P], AggregateLeaveRequest[P]>;
};
export type LeaveRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveRequestWhereInput;
    orderBy?: Prisma.LeaveRequestOrderByWithAggregationInput | Prisma.LeaveRequestOrderByWithAggregationInput[];
    by: Prisma.LeaveRequestScalarFieldEnum[] | Prisma.LeaveRequestScalarFieldEnum;
    having?: Prisma.LeaveRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaveRequestCountAggregateInputType | true;
    _avg?: LeaveRequestAvgAggregateInputType;
    _sum?: LeaveRequestSumAggregateInputType;
    _min?: LeaveRequestMinAggregateInputType;
    _max?: LeaveRequestMaxAggregateInputType;
};
export type LeaveRequestGroupByOutputType = {
    id: string;
    schoolId: string;
    teacherId: string | null;
    staffId: string | null;
    leaveTypeId: string;
    startDate: Date;
    endDate: Date;
    isHalfDay: boolean;
    dayCount: number;
    reason: string | null;
    status: $Enums.LeaveStatus;
    approvedById: string | null;
    approvedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LeaveRequestCountAggregateOutputType | null;
    _avg: LeaveRequestAvgAggregateOutputType | null;
    _sum: LeaveRequestSumAggregateOutputType | null;
    _min: LeaveRequestMinAggregateOutputType | null;
    _max: LeaveRequestMaxAggregateOutputType | null;
};
export type GetLeaveRequestGroupByPayload<T extends LeaveRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeaveRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeaveRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeaveRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeaveRequestGroupByOutputType[P]>;
}>>;
export type LeaveRequestWhereInput = {
    AND?: Prisma.LeaveRequestWhereInput | Prisma.LeaveRequestWhereInput[];
    OR?: Prisma.LeaveRequestWhereInput[];
    NOT?: Prisma.LeaveRequestWhereInput | Prisma.LeaveRequestWhereInput[];
    id?: Prisma.StringFilter<"LeaveRequest"> | string;
    schoolId?: Prisma.StringFilter<"LeaveRequest"> | string;
    teacherId?: Prisma.StringNullableFilter<"LeaveRequest"> | string | null;
    staffId?: Prisma.StringNullableFilter<"LeaveRequest"> | string | null;
    leaveTypeId?: Prisma.StringFilter<"LeaveRequest"> | string;
    startDate?: Prisma.DateTimeFilter<"LeaveRequest"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"LeaveRequest"> | Date | string;
    isHalfDay?: Prisma.BoolFilter<"LeaveRequest"> | boolean;
    dayCount?: Prisma.FloatFilter<"LeaveRequest"> | number;
    reason?: Prisma.StringNullableFilter<"LeaveRequest"> | string | null;
    status?: Prisma.EnumLeaveStatusFilter<"LeaveRequest"> | $Enums.LeaveStatus;
    approvedById?: Prisma.StringNullableFilter<"LeaveRequest"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"LeaveRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LeaveRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LeaveRequest"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    staff?: Prisma.XOR<Prisma.StaffNullableScalarRelationFilter, Prisma.StaffWhereInput> | null;
    leaveType?: Prisma.XOR<Prisma.LeaveTypeScalarRelationFilter, Prisma.LeaveTypeWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type LeaveRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    staffId?: Prisma.SortOrderInput | Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isHalfDay?: Prisma.SortOrder;
    dayCount?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    staff?: Prisma.StaffOrderByWithRelationInput;
    leaveType?: Prisma.LeaveTypeOrderByWithRelationInput;
    approvedBy?: Prisma.UserOrderByWithRelationInput;
};
export type LeaveRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LeaveRequestWhereInput | Prisma.LeaveRequestWhereInput[];
    OR?: Prisma.LeaveRequestWhereInput[];
    NOT?: Prisma.LeaveRequestWhereInput | Prisma.LeaveRequestWhereInput[];
    schoolId?: Prisma.StringFilter<"LeaveRequest"> | string;
    teacherId?: Prisma.StringNullableFilter<"LeaveRequest"> | string | null;
    staffId?: Prisma.StringNullableFilter<"LeaveRequest"> | string | null;
    leaveTypeId?: Prisma.StringFilter<"LeaveRequest"> | string;
    startDate?: Prisma.DateTimeFilter<"LeaveRequest"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"LeaveRequest"> | Date | string;
    isHalfDay?: Prisma.BoolFilter<"LeaveRequest"> | boolean;
    dayCount?: Prisma.FloatFilter<"LeaveRequest"> | number;
    reason?: Prisma.StringNullableFilter<"LeaveRequest"> | string | null;
    status?: Prisma.EnumLeaveStatusFilter<"LeaveRequest"> | $Enums.LeaveStatus;
    approvedById?: Prisma.StringNullableFilter<"LeaveRequest"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"LeaveRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LeaveRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LeaveRequest"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    staff?: Prisma.XOR<Prisma.StaffNullableScalarRelationFilter, Prisma.StaffWhereInput> | null;
    leaveType?: Prisma.XOR<Prisma.LeaveTypeScalarRelationFilter, Prisma.LeaveTypeWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type LeaveRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    staffId?: Prisma.SortOrderInput | Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isHalfDay?: Prisma.SortOrder;
    dayCount?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LeaveRequestCountOrderByAggregateInput;
    _avg?: Prisma.LeaveRequestAvgOrderByAggregateInput;
    _max?: Prisma.LeaveRequestMaxOrderByAggregateInput;
    _min?: Prisma.LeaveRequestMinOrderByAggregateInput;
    _sum?: Prisma.LeaveRequestSumOrderByAggregateInput;
};
export type LeaveRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeaveRequestScalarWhereWithAggregatesInput | Prisma.LeaveRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeaveRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeaveRequestScalarWhereWithAggregatesInput | Prisma.LeaveRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LeaveRequest"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"LeaveRequest"> | string;
    teacherId?: Prisma.StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null;
    staffId?: Prisma.StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null;
    leaveTypeId?: Prisma.StringWithAggregatesFilter<"LeaveRequest"> | string;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string;
    isHalfDay?: Prisma.BoolWithAggregatesFilter<"LeaveRequest"> | boolean;
    dayCount?: Prisma.FloatWithAggregatesFilter<"LeaveRequest"> | number;
    reason?: Prisma.StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null;
    status?: Prisma.EnumLeaveStatusWithAggregatesFilter<"LeaveRequest"> | $Enums.LeaveStatus;
    approvedById?: Prisma.StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null;
    approvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LeaveRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string;
};
export type LeaveRequestCreateInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutLeaveRequestsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLeaveRequestsInput;
    staff?: Prisma.StaffCreateNestedOneWithoutLeaveRequestsInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutLeaveRequestsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedLeaveRequestsInput;
};
export type LeaveRequestUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    teacherId?: string | null;
    staffId?: string | null;
    leaveTypeId: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutLeaveRequestsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutLeaveRequestsNestedInput;
    staff?: Prisma.StaffUpdateOneWithoutLeaveRequestsNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutLeaveRequestsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedLeaveRequestsNestedInput;
};
export type LeaveRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestCreateManyInput = {
    id?: string;
    schoolId: string;
    teacherId?: string | null;
    staffId?: string | null;
    leaveTypeId: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestListRelationFilter = {
    every?: Prisma.LeaveRequestWhereInput;
    some?: Prisma.LeaveRequestWhereInput;
    none?: Prisma.LeaveRequestWhereInput;
};
export type LeaveRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeaveRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isHalfDay?: Prisma.SortOrder;
    dayCount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LeaveRequestAvgOrderByAggregateInput = {
    dayCount?: Prisma.SortOrder;
};
export type LeaveRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isHalfDay?: Prisma.SortOrder;
    dayCount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LeaveRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isHalfDay?: Prisma.SortOrder;
    dayCount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LeaveRequestSumOrderByAggregateInput = {
    dayCount?: Prisma.SortOrder;
};
export type LeaveRequestCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutSchoolInput, Prisma.LeaveRequestUncheckedCreateWithoutSchoolInput> | Prisma.LeaveRequestCreateWithoutSchoolInput[] | Prisma.LeaveRequestUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutSchoolInput | Prisma.LeaveRequestCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.LeaveRequestCreateManySchoolInputEnvelope;
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
};
export type LeaveRequestUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutSchoolInput, Prisma.LeaveRequestUncheckedCreateWithoutSchoolInput> | Prisma.LeaveRequestCreateWithoutSchoolInput[] | Prisma.LeaveRequestUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutSchoolInput | Prisma.LeaveRequestCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.LeaveRequestCreateManySchoolInputEnvelope;
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
};
export type LeaveRequestUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutSchoolInput, Prisma.LeaveRequestUncheckedCreateWithoutSchoolInput> | Prisma.LeaveRequestCreateWithoutSchoolInput[] | Prisma.LeaveRequestUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutSchoolInput | Prisma.LeaveRequestCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.LeaveRequestUpsertWithWhereUniqueWithoutSchoolInput | Prisma.LeaveRequestUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.LeaveRequestCreateManySchoolInputEnvelope;
    set?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    disconnect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    delete?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    update?: Prisma.LeaveRequestUpdateWithWhereUniqueWithoutSchoolInput | Prisma.LeaveRequestUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.LeaveRequestUpdateManyWithWhereWithoutSchoolInput | Prisma.LeaveRequestUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.LeaveRequestScalarWhereInput | Prisma.LeaveRequestScalarWhereInput[];
};
export type LeaveRequestUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutSchoolInput, Prisma.LeaveRequestUncheckedCreateWithoutSchoolInput> | Prisma.LeaveRequestCreateWithoutSchoolInput[] | Prisma.LeaveRequestUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutSchoolInput | Prisma.LeaveRequestCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.LeaveRequestUpsertWithWhereUniqueWithoutSchoolInput | Prisma.LeaveRequestUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.LeaveRequestCreateManySchoolInputEnvelope;
    set?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    disconnect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    delete?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    update?: Prisma.LeaveRequestUpdateWithWhereUniqueWithoutSchoolInput | Prisma.LeaveRequestUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.LeaveRequestUpdateManyWithWhereWithoutSchoolInput | Prisma.LeaveRequestUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.LeaveRequestScalarWhereInput | Prisma.LeaveRequestScalarWhereInput[];
};
export type LeaveRequestCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutApprovedByInput, Prisma.LeaveRequestUncheckedCreateWithoutApprovedByInput> | Prisma.LeaveRequestCreateWithoutApprovedByInput[] | Prisma.LeaveRequestUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutApprovedByInput | Prisma.LeaveRequestCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.LeaveRequestCreateManyApprovedByInputEnvelope;
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
};
export type LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutApprovedByInput, Prisma.LeaveRequestUncheckedCreateWithoutApprovedByInput> | Prisma.LeaveRequestCreateWithoutApprovedByInput[] | Prisma.LeaveRequestUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutApprovedByInput | Prisma.LeaveRequestCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.LeaveRequestCreateManyApprovedByInputEnvelope;
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
};
export type LeaveRequestUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutApprovedByInput, Prisma.LeaveRequestUncheckedCreateWithoutApprovedByInput> | Prisma.LeaveRequestCreateWithoutApprovedByInput[] | Prisma.LeaveRequestUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutApprovedByInput | Prisma.LeaveRequestCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.LeaveRequestCreateManyApprovedByInputEnvelope;
    set?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    disconnect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    delete?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    update?: Prisma.LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.LeaveRequestUpdateManyWithWhereWithoutApprovedByInput | Prisma.LeaveRequestUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.LeaveRequestScalarWhereInput | Prisma.LeaveRequestScalarWhereInput[];
};
export type LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutApprovedByInput, Prisma.LeaveRequestUncheckedCreateWithoutApprovedByInput> | Prisma.LeaveRequestCreateWithoutApprovedByInput[] | Prisma.LeaveRequestUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutApprovedByInput | Prisma.LeaveRequestCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.LeaveRequestCreateManyApprovedByInputEnvelope;
    set?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    disconnect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    delete?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    update?: Prisma.LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.LeaveRequestUpdateManyWithWhereWithoutApprovedByInput | Prisma.LeaveRequestUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.LeaveRequestScalarWhereInput | Prisma.LeaveRequestScalarWhereInput[];
};
export type LeaveRequestCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutTeacherInput, Prisma.LeaveRequestUncheckedCreateWithoutTeacherInput> | Prisma.LeaveRequestCreateWithoutTeacherInput[] | Prisma.LeaveRequestUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutTeacherInput | Prisma.LeaveRequestCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.LeaveRequestCreateManyTeacherInputEnvelope;
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
};
export type LeaveRequestUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutTeacherInput, Prisma.LeaveRequestUncheckedCreateWithoutTeacherInput> | Prisma.LeaveRequestCreateWithoutTeacherInput[] | Prisma.LeaveRequestUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutTeacherInput | Prisma.LeaveRequestCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.LeaveRequestCreateManyTeacherInputEnvelope;
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
};
export type LeaveRequestUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutTeacherInput, Prisma.LeaveRequestUncheckedCreateWithoutTeacherInput> | Prisma.LeaveRequestCreateWithoutTeacherInput[] | Prisma.LeaveRequestUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutTeacherInput | Prisma.LeaveRequestCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.LeaveRequestUpsertWithWhereUniqueWithoutTeacherInput | Prisma.LeaveRequestUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.LeaveRequestCreateManyTeacherInputEnvelope;
    set?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    disconnect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    delete?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    update?: Prisma.LeaveRequestUpdateWithWhereUniqueWithoutTeacherInput | Prisma.LeaveRequestUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.LeaveRequestUpdateManyWithWhereWithoutTeacherInput | Prisma.LeaveRequestUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.LeaveRequestScalarWhereInput | Prisma.LeaveRequestScalarWhereInput[];
};
export type LeaveRequestUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutTeacherInput, Prisma.LeaveRequestUncheckedCreateWithoutTeacherInput> | Prisma.LeaveRequestCreateWithoutTeacherInput[] | Prisma.LeaveRequestUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutTeacherInput | Prisma.LeaveRequestCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.LeaveRequestUpsertWithWhereUniqueWithoutTeacherInput | Prisma.LeaveRequestUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.LeaveRequestCreateManyTeacherInputEnvelope;
    set?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    disconnect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    delete?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    update?: Prisma.LeaveRequestUpdateWithWhereUniqueWithoutTeacherInput | Prisma.LeaveRequestUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.LeaveRequestUpdateManyWithWhereWithoutTeacherInput | Prisma.LeaveRequestUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.LeaveRequestScalarWhereInput | Prisma.LeaveRequestScalarWhereInput[];
};
export type LeaveRequestCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutStaffInput, Prisma.LeaveRequestUncheckedCreateWithoutStaffInput> | Prisma.LeaveRequestCreateWithoutStaffInput[] | Prisma.LeaveRequestUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutStaffInput | Prisma.LeaveRequestCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.LeaveRequestCreateManyStaffInputEnvelope;
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
};
export type LeaveRequestUncheckedCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutStaffInput, Prisma.LeaveRequestUncheckedCreateWithoutStaffInput> | Prisma.LeaveRequestCreateWithoutStaffInput[] | Prisma.LeaveRequestUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutStaffInput | Prisma.LeaveRequestCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.LeaveRequestCreateManyStaffInputEnvelope;
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
};
export type LeaveRequestUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutStaffInput, Prisma.LeaveRequestUncheckedCreateWithoutStaffInput> | Prisma.LeaveRequestCreateWithoutStaffInput[] | Prisma.LeaveRequestUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutStaffInput | Prisma.LeaveRequestCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.LeaveRequestUpsertWithWhereUniqueWithoutStaffInput | Prisma.LeaveRequestUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.LeaveRequestCreateManyStaffInputEnvelope;
    set?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    disconnect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    delete?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    update?: Prisma.LeaveRequestUpdateWithWhereUniqueWithoutStaffInput | Prisma.LeaveRequestUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.LeaveRequestUpdateManyWithWhereWithoutStaffInput | Prisma.LeaveRequestUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.LeaveRequestScalarWhereInput | Prisma.LeaveRequestScalarWhereInput[];
};
export type LeaveRequestUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutStaffInput, Prisma.LeaveRequestUncheckedCreateWithoutStaffInput> | Prisma.LeaveRequestCreateWithoutStaffInput[] | Prisma.LeaveRequestUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutStaffInput | Prisma.LeaveRequestCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.LeaveRequestUpsertWithWhereUniqueWithoutStaffInput | Prisma.LeaveRequestUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.LeaveRequestCreateManyStaffInputEnvelope;
    set?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    disconnect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    delete?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    update?: Prisma.LeaveRequestUpdateWithWhereUniqueWithoutStaffInput | Prisma.LeaveRequestUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.LeaveRequestUpdateManyWithWhereWithoutStaffInput | Prisma.LeaveRequestUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.LeaveRequestScalarWhereInput | Prisma.LeaveRequestScalarWhereInput[];
};
export type LeaveRequestCreateNestedManyWithoutLeaveTypeInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutLeaveTypeInput, Prisma.LeaveRequestUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveRequestCreateWithoutLeaveTypeInput[] | Prisma.LeaveRequestUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveRequestCreateOrConnectWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveRequestCreateManyLeaveTypeInputEnvelope;
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
};
export type LeaveRequestUncheckedCreateNestedManyWithoutLeaveTypeInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutLeaveTypeInput, Prisma.LeaveRequestUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveRequestCreateWithoutLeaveTypeInput[] | Prisma.LeaveRequestUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveRequestCreateOrConnectWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveRequestCreateManyLeaveTypeInputEnvelope;
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
};
export type LeaveRequestUpdateManyWithoutLeaveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutLeaveTypeInput, Prisma.LeaveRequestUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveRequestCreateWithoutLeaveTypeInput[] | Prisma.LeaveRequestUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveRequestCreateOrConnectWithoutLeaveTypeInput[];
    upsert?: Prisma.LeaveRequestUpsertWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveRequestUpsertWithWhereUniqueWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveRequestCreateManyLeaveTypeInputEnvelope;
    set?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    disconnect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    delete?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    update?: Prisma.LeaveRequestUpdateWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveRequestUpdateWithWhereUniqueWithoutLeaveTypeInput[];
    updateMany?: Prisma.LeaveRequestUpdateManyWithWhereWithoutLeaveTypeInput | Prisma.LeaveRequestUpdateManyWithWhereWithoutLeaveTypeInput[];
    deleteMany?: Prisma.LeaveRequestScalarWhereInput | Prisma.LeaveRequestScalarWhereInput[];
};
export type LeaveRequestUncheckedUpdateManyWithoutLeaveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveRequestCreateWithoutLeaveTypeInput, Prisma.LeaveRequestUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveRequestCreateWithoutLeaveTypeInput[] | Prisma.LeaveRequestUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveRequestCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveRequestCreateOrConnectWithoutLeaveTypeInput[];
    upsert?: Prisma.LeaveRequestUpsertWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveRequestUpsertWithWhereUniqueWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveRequestCreateManyLeaveTypeInputEnvelope;
    set?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    disconnect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    delete?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    connect?: Prisma.LeaveRequestWhereUniqueInput | Prisma.LeaveRequestWhereUniqueInput[];
    update?: Prisma.LeaveRequestUpdateWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveRequestUpdateWithWhereUniqueWithoutLeaveTypeInput[];
    updateMany?: Prisma.LeaveRequestUpdateManyWithWhereWithoutLeaveTypeInput | Prisma.LeaveRequestUpdateManyWithWhereWithoutLeaveTypeInput[];
    deleteMany?: Prisma.LeaveRequestScalarWhereInput | Prisma.LeaveRequestScalarWhereInput[];
};
export type EnumLeaveStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeaveStatus;
};
export type LeaveRequestCreateWithoutSchoolInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLeaveRequestsInput;
    staff?: Prisma.StaffCreateNestedOneWithoutLeaveRequestsInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutLeaveRequestsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedLeaveRequestsInput;
};
export type LeaveRequestUncheckedCreateWithoutSchoolInput = {
    id?: string;
    teacherId?: string | null;
    staffId?: string | null;
    leaveTypeId: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveRequestCreateOrConnectWithoutSchoolInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveRequestCreateWithoutSchoolInput, Prisma.LeaveRequestUncheckedCreateWithoutSchoolInput>;
};
export type LeaveRequestCreateManySchoolInputEnvelope = {
    data: Prisma.LeaveRequestCreateManySchoolInput | Prisma.LeaveRequestCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type LeaveRequestUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveRequestUpdateWithoutSchoolInput, Prisma.LeaveRequestUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.LeaveRequestCreateWithoutSchoolInput, Prisma.LeaveRequestUncheckedCreateWithoutSchoolInput>;
};
export type LeaveRequestUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveRequestUpdateWithoutSchoolInput, Prisma.LeaveRequestUncheckedUpdateWithoutSchoolInput>;
};
export type LeaveRequestUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.LeaveRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveRequestUpdateManyMutationInput, Prisma.LeaveRequestUncheckedUpdateManyWithoutSchoolInput>;
};
export type LeaveRequestScalarWhereInput = {
    AND?: Prisma.LeaveRequestScalarWhereInput | Prisma.LeaveRequestScalarWhereInput[];
    OR?: Prisma.LeaveRequestScalarWhereInput[];
    NOT?: Prisma.LeaveRequestScalarWhereInput | Prisma.LeaveRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"LeaveRequest"> | string;
    schoolId?: Prisma.StringFilter<"LeaveRequest"> | string;
    teacherId?: Prisma.StringNullableFilter<"LeaveRequest"> | string | null;
    staffId?: Prisma.StringNullableFilter<"LeaveRequest"> | string | null;
    leaveTypeId?: Prisma.StringFilter<"LeaveRequest"> | string;
    startDate?: Prisma.DateTimeFilter<"LeaveRequest"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"LeaveRequest"> | Date | string;
    isHalfDay?: Prisma.BoolFilter<"LeaveRequest"> | boolean;
    dayCount?: Prisma.FloatFilter<"LeaveRequest"> | number;
    reason?: Prisma.StringNullableFilter<"LeaveRequest"> | string | null;
    status?: Prisma.EnumLeaveStatusFilter<"LeaveRequest"> | $Enums.LeaveStatus;
    approvedById?: Prisma.StringNullableFilter<"LeaveRequest"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"LeaveRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LeaveRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LeaveRequest"> | Date | string;
};
export type LeaveRequestCreateWithoutApprovedByInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutLeaveRequestsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLeaveRequestsInput;
    staff?: Prisma.StaffCreateNestedOneWithoutLeaveRequestsInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutLeaveRequestsInput;
};
export type LeaveRequestUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    schoolId: string;
    teacherId?: string | null;
    staffId?: string | null;
    leaveTypeId: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveRequestCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveRequestCreateWithoutApprovedByInput, Prisma.LeaveRequestUncheckedCreateWithoutApprovedByInput>;
};
export type LeaveRequestCreateManyApprovedByInputEnvelope = {
    data: Prisma.LeaveRequestCreateManyApprovedByInput | Prisma.LeaveRequestCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveRequestUpdateWithoutApprovedByInput, Prisma.LeaveRequestUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.LeaveRequestCreateWithoutApprovedByInput, Prisma.LeaveRequestUncheckedCreateWithoutApprovedByInput>;
};
export type LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveRequestUpdateWithoutApprovedByInput, Prisma.LeaveRequestUncheckedUpdateWithoutApprovedByInput>;
};
export type LeaveRequestUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.LeaveRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveRequestUpdateManyMutationInput, Prisma.LeaveRequestUncheckedUpdateManyWithoutApprovedByInput>;
};
export type LeaveRequestCreateWithoutTeacherInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutLeaveRequestsInput;
    staff?: Prisma.StaffCreateNestedOneWithoutLeaveRequestsInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutLeaveRequestsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedLeaveRequestsInput;
};
export type LeaveRequestUncheckedCreateWithoutTeacherInput = {
    id?: string;
    schoolId: string;
    staffId?: string | null;
    leaveTypeId: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveRequestCreateOrConnectWithoutTeacherInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveRequestCreateWithoutTeacherInput, Prisma.LeaveRequestUncheckedCreateWithoutTeacherInput>;
};
export type LeaveRequestCreateManyTeacherInputEnvelope = {
    data: Prisma.LeaveRequestCreateManyTeacherInput | Prisma.LeaveRequestCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type LeaveRequestUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveRequestUpdateWithoutTeacherInput, Prisma.LeaveRequestUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.LeaveRequestCreateWithoutTeacherInput, Prisma.LeaveRequestUncheckedCreateWithoutTeacherInput>;
};
export type LeaveRequestUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveRequestUpdateWithoutTeacherInput, Prisma.LeaveRequestUncheckedUpdateWithoutTeacherInput>;
};
export type LeaveRequestUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.LeaveRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveRequestUpdateManyMutationInput, Prisma.LeaveRequestUncheckedUpdateManyWithoutTeacherInput>;
};
export type LeaveRequestCreateWithoutStaffInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutLeaveRequestsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLeaveRequestsInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutLeaveRequestsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedLeaveRequestsInput;
};
export type LeaveRequestUncheckedCreateWithoutStaffInput = {
    id?: string;
    schoolId: string;
    teacherId?: string | null;
    leaveTypeId: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveRequestCreateOrConnectWithoutStaffInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveRequestCreateWithoutStaffInput, Prisma.LeaveRequestUncheckedCreateWithoutStaffInput>;
};
export type LeaveRequestCreateManyStaffInputEnvelope = {
    data: Prisma.LeaveRequestCreateManyStaffInput | Prisma.LeaveRequestCreateManyStaffInput[];
    skipDuplicates?: boolean;
};
export type LeaveRequestUpsertWithWhereUniqueWithoutStaffInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveRequestUpdateWithoutStaffInput, Prisma.LeaveRequestUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.LeaveRequestCreateWithoutStaffInput, Prisma.LeaveRequestUncheckedCreateWithoutStaffInput>;
};
export type LeaveRequestUpdateWithWhereUniqueWithoutStaffInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveRequestUpdateWithoutStaffInput, Prisma.LeaveRequestUncheckedUpdateWithoutStaffInput>;
};
export type LeaveRequestUpdateManyWithWhereWithoutStaffInput = {
    where: Prisma.LeaveRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveRequestUpdateManyMutationInput, Prisma.LeaveRequestUncheckedUpdateManyWithoutStaffInput>;
};
export type LeaveRequestCreateWithoutLeaveTypeInput = {
    id?: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutLeaveRequestsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutLeaveRequestsInput;
    staff?: Prisma.StaffCreateNestedOneWithoutLeaveRequestsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedLeaveRequestsInput;
};
export type LeaveRequestUncheckedCreateWithoutLeaveTypeInput = {
    id?: string;
    schoolId: string;
    teacherId?: string | null;
    staffId?: string | null;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveRequestCreateOrConnectWithoutLeaveTypeInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveRequestCreateWithoutLeaveTypeInput, Prisma.LeaveRequestUncheckedCreateWithoutLeaveTypeInput>;
};
export type LeaveRequestCreateManyLeaveTypeInputEnvelope = {
    data: Prisma.LeaveRequestCreateManyLeaveTypeInput | Prisma.LeaveRequestCreateManyLeaveTypeInput[];
    skipDuplicates?: boolean;
};
export type LeaveRequestUpsertWithWhereUniqueWithoutLeaveTypeInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveRequestUpdateWithoutLeaveTypeInput, Prisma.LeaveRequestUncheckedUpdateWithoutLeaveTypeInput>;
    create: Prisma.XOR<Prisma.LeaveRequestCreateWithoutLeaveTypeInput, Prisma.LeaveRequestUncheckedCreateWithoutLeaveTypeInput>;
};
export type LeaveRequestUpdateWithWhereUniqueWithoutLeaveTypeInput = {
    where: Prisma.LeaveRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveRequestUpdateWithoutLeaveTypeInput, Prisma.LeaveRequestUncheckedUpdateWithoutLeaveTypeInput>;
};
export type LeaveRequestUpdateManyWithWhereWithoutLeaveTypeInput = {
    where: Prisma.LeaveRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveRequestUpdateManyMutationInput, Prisma.LeaveRequestUncheckedUpdateManyWithoutLeaveTypeInput>;
};
export type LeaveRequestCreateManySchoolInput = {
    id?: string;
    teacherId?: string | null;
    staffId?: string | null;
    leaveTypeId: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveRequestUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutLeaveRequestsNestedInput;
    staff?: Prisma.StaffUpdateOneWithoutLeaveRequestsNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutLeaveRequestsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedLeaveRequestsNestedInput;
};
export type LeaveRequestUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestCreateManyApprovedByInput = {
    id?: string;
    schoolId: string;
    teacherId?: string | null;
    staffId?: string | null;
    leaveTypeId: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveRequestUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutLeaveRequestsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutLeaveRequestsNestedInput;
    staff?: Prisma.StaffUpdateOneWithoutLeaveRequestsNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutLeaveRequestsNestedInput;
};
export type LeaveRequestUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestCreateManyTeacherInput = {
    id?: string;
    schoolId: string;
    staffId?: string | null;
    leaveTypeId: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveRequestUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutLeaveRequestsNestedInput;
    staff?: Prisma.StaffUpdateOneWithoutLeaveRequestsNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutLeaveRequestsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedLeaveRequestsNestedInput;
};
export type LeaveRequestUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestCreateManyStaffInput = {
    id?: string;
    schoolId: string;
    teacherId?: string | null;
    leaveTypeId: string;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveRequestUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutLeaveRequestsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutLeaveRequestsNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutLeaveRequestsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedLeaveRequestsNestedInput;
};
export type LeaveRequestUncheckedUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestUncheckedUpdateManyWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestCreateManyLeaveTypeInput = {
    id?: string;
    schoolId: string;
    teacherId?: string | null;
    staffId?: string | null;
    startDate: Date | string;
    endDate: Date | string;
    isHalfDay?: boolean;
    dayCount: number;
    reason?: string | null;
    status?: $Enums.LeaveStatus;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveRequestUpdateWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutLeaveRequestsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutLeaveRequestsNestedInput;
    staff?: Prisma.StaffUpdateOneWithoutLeaveRequestsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedLeaveRequestsNestedInput;
};
export type LeaveRequestUncheckedUpdateWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestUncheckedUpdateManyWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isHalfDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dayCount?: Prisma.FloatFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    teacherId?: boolean;
    staffId?: boolean;
    leaveTypeId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isHalfDay?: boolean;
    dayCount?: boolean;
    reason?: boolean;
    status?: boolean;
    approvedById?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.LeaveRequest$teacherArgs<ExtArgs>;
    staff?: boolean | Prisma.LeaveRequest$staffArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.LeaveRequest$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["leaveRequest"]>;
export type LeaveRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    teacherId?: boolean;
    staffId?: boolean;
    leaveTypeId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isHalfDay?: boolean;
    dayCount?: boolean;
    reason?: boolean;
    status?: boolean;
    approvedById?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.LeaveRequest$teacherArgs<ExtArgs>;
    staff?: boolean | Prisma.LeaveRequest$staffArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.LeaveRequest$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["leaveRequest"]>;
export type LeaveRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    teacherId?: boolean;
    staffId?: boolean;
    leaveTypeId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isHalfDay?: boolean;
    dayCount?: boolean;
    reason?: boolean;
    status?: boolean;
    approvedById?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.LeaveRequest$teacherArgs<ExtArgs>;
    staff?: boolean | Prisma.LeaveRequest$staffArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.LeaveRequest$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["leaveRequest"]>;
export type LeaveRequestSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    teacherId?: boolean;
    staffId?: boolean;
    leaveTypeId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isHalfDay?: boolean;
    dayCount?: boolean;
    reason?: boolean;
    status?: boolean;
    approvedById?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LeaveRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "teacherId" | "staffId" | "leaveTypeId" | "startDate" | "endDate" | "isHalfDay" | "dayCount" | "reason" | "status" | "approvedById" | "approvedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["leaveRequest"]>;
export type LeaveRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.LeaveRequest$teacherArgs<ExtArgs>;
    staff?: boolean | Prisma.LeaveRequest$staffArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.LeaveRequest$approvedByArgs<ExtArgs>;
};
export type LeaveRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.LeaveRequest$teacherArgs<ExtArgs>;
    staff?: boolean | Prisma.LeaveRequest$staffArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.LeaveRequest$approvedByArgs<ExtArgs>;
};
export type LeaveRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.LeaveRequest$teacherArgs<ExtArgs>;
    staff?: boolean | Prisma.LeaveRequest$staffArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.LeaveRequest$approvedByArgs<ExtArgs>;
};
export type $LeaveRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeaveRequest";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        teacher: Prisma.$TeacherPayload<ExtArgs> | null;
        staff: Prisma.$StaffPayload<ExtArgs> | null;
        leaveType: Prisma.$LeaveTypePayload<ExtArgs>;
        approvedBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        teacherId: string | null;
        staffId: string | null;
        leaveTypeId: string;
        startDate: Date;
        endDate: Date;
        isHalfDay: boolean;
        dayCount: number;
        reason: string | null;
        status: $Enums.LeaveStatus;
        approvedById: string | null;
        approvedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["leaveRequest"]>;
    composites: {};
};
export type LeaveRequestGetPayload<S extends boolean | null | undefined | LeaveRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload, S>;
export type LeaveRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeaveRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaveRequestCountAggregateInputType | true;
};
export interface LeaveRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeaveRequest'];
        meta: {
            name: 'LeaveRequest';
        };
    };
    findUnique<T extends LeaveRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, LeaveRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeaveRequestClient<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeaveRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeaveRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveRequestClient<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeaveRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, LeaveRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeaveRequestClient<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeaveRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeaveRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveRequestClient<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeaveRequestFindManyArgs>(args?: Prisma.SelectSubset<T, LeaveRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeaveRequestCreateArgs>(args: Prisma.SelectSubset<T, LeaveRequestCreateArgs<ExtArgs>>): Prisma.Prisma__LeaveRequestClient<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeaveRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, LeaveRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeaveRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeaveRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeaveRequestDeleteArgs>(args: Prisma.SelectSubset<T, LeaveRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__LeaveRequestClient<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeaveRequestUpdateArgs>(args: Prisma.SelectSubset<T, LeaveRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__LeaveRequestClient<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeaveRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeaveRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeaveRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, LeaveRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeaveRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeaveRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeaveRequestUpsertArgs>(args: Prisma.SelectSubset<T, LeaveRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__LeaveRequestClient<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeaveRequestCountArgs>(args?: Prisma.Subset<T, LeaveRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeaveRequestCountAggregateOutputType> : number>;
    aggregate<T extends LeaveRequestAggregateArgs>(args: Prisma.Subset<T, LeaveRequestAggregateArgs>): Prisma.PrismaPromise<GetLeaveRequestAggregateType<T>>;
    groupBy<T extends LeaveRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeaveRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: LeaveRequestGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeaveRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeaveRequestFieldRefs;
}
export interface Prisma__LeaveRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.LeaveRequest$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveRequest$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    staff<T extends Prisma.LeaveRequest$staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveRequest$staffArgs<ExtArgs>>): Prisma.Prisma__StaffClient<runtime.Types.Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    leaveType<T extends Prisma.LeaveTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.LeaveRequest$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveRequest$approvedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeaveRequestFieldRefs {
    readonly id: Prisma.FieldRef<"LeaveRequest", 'String'>;
    readonly schoolId: Prisma.FieldRef<"LeaveRequest", 'String'>;
    readonly teacherId: Prisma.FieldRef<"LeaveRequest", 'String'>;
    readonly staffId: Prisma.FieldRef<"LeaveRequest", 'String'>;
    readonly leaveTypeId: Prisma.FieldRef<"LeaveRequest", 'String'>;
    readonly startDate: Prisma.FieldRef<"LeaveRequest", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"LeaveRequest", 'DateTime'>;
    readonly isHalfDay: Prisma.FieldRef<"LeaveRequest", 'Boolean'>;
    readonly dayCount: Prisma.FieldRef<"LeaveRequest", 'Float'>;
    readonly reason: Prisma.FieldRef<"LeaveRequest", 'String'>;
    readonly status: Prisma.FieldRef<"LeaveRequest", 'LeaveStatus'>;
    readonly approvedById: Prisma.FieldRef<"LeaveRequest", 'String'>;
    readonly approvedAt: Prisma.FieldRef<"LeaveRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"LeaveRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LeaveRequest", 'DateTime'>;
}
export type LeaveRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelect<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    include?: Prisma.LeaveRequestInclude<ExtArgs> | null;
    where: Prisma.LeaveRequestWhereUniqueInput;
};
export type LeaveRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelect<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    include?: Prisma.LeaveRequestInclude<ExtArgs> | null;
    where: Prisma.LeaveRequestWhereUniqueInput;
};
export type LeaveRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelect<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    include?: Prisma.LeaveRequestInclude<ExtArgs> | null;
    where?: Prisma.LeaveRequestWhereInput;
    orderBy?: Prisma.LeaveRequestOrderByWithRelationInput | Prisma.LeaveRequestOrderByWithRelationInput[];
    cursor?: Prisma.LeaveRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveRequestScalarFieldEnum | Prisma.LeaveRequestScalarFieldEnum[];
};
export type LeaveRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelect<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    include?: Prisma.LeaveRequestInclude<ExtArgs> | null;
    where?: Prisma.LeaveRequestWhereInput;
    orderBy?: Prisma.LeaveRequestOrderByWithRelationInput | Prisma.LeaveRequestOrderByWithRelationInput[];
    cursor?: Prisma.LeaveRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveRequestScalarFieldEnum | Prisma.LeaveRequestScalarFieldEnum[];
};
export type LeaveRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelect<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    include?: Prisma.LeaveRequestInclude<ExtArgs> | null;
    where?: Prisma.LeaveRequestWhereInput;
    orderBy?: Prisma.LeaveRequestOrderByWithRelationInput | Prisma.LeaveRequestOrderByWithRelationInput[];
    cursor?: Prisma.LeaveRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveRequestScalarFieldEnum | Prisma.LeaveRequestScalarFieldEnum[];
};
export type LeaveRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelect<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    include?: Prisma.LeaveRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveRequestCreateInput, Prisma.LeaveRequestUncheckedCreateInput>;
};
export type LeaveRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeaveRequestCreateManyInput | Prisma.LeaveRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeaveRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    data: Prisma.LeaveRequestCreateManyInput | Prisma.LeaveRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeaveRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeaveRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelect<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    include?: Prisma.LeaveRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveRequestUpdateInput, Prisma.LeaveRequestUncheckedUpdateInput>;
    where: Prisma.LeaveRequestWhereUniqueInput;
};
export type LeaveRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeaveRequestUpdateManyMutationInput, Prisma.LeaveRequestUncheckedUpdateManyInput>;
    where?: Prisma.LeaveRequestWhereInput;
    limit?: number;
};
export type LeaveRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveRequestUpdateManyMutationInput, Prisma.LeaveRequestUncheckedUpdateManyInput>;
    where?: Prisma.LeaveRequestWhereInput;
    limit?: number;
    include?: Prisma.LeaveRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeaveRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelect<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    include?: Prisma.LeaveRequestInclude<ExtArgs> | null;
    where: Prisma.LeaveRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveRequestCreateInput, Prisma.LeaveRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeaveRequestUpdateInput, Prisma.LeaveRequestUncheckedUpdateInput>;
};
export type LeaveRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelect<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    include?: Prisma.LeaveRequestInclude<ExtArgs> | null;
    where: Prisma.LeaveRequestWhereUniqueInput;
};
export type LeaveRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveRequestWhereInput;
    limit?: number;
};
export type LeaveRequest$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
export type LeaveRequest$staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffSelect<ExtArgs> | null;
    omit?: Prisma.StaffOmit<ExtArgs> | null;
    include?: Prisma.StaffInclude<ExtArgs> | null;
    where?: Prisma.StaffWhereInput;
};
export type LeaveRequest$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type LeaveRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelect<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    include?: Prisma.LeaveRequestInclude<ExtArgs> | null;
};
