import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeaveTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$LeaveTypePayload>;
export type AggregateLeaveType = {
    _count: LeaveTypeCountAggregateOutputType | null;
    _min: LeaveTypeMinAggregateOutputType | null;
    _max: LeaveTypeMaxAggregateOutputType | null;
};
export type LeaveTypeMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type LeaveTypeMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type LeaveTypeCountAggregateOutputType = {
    id: number;
    schoolId: number;
    name: number;
    createdAt: number;
    _all: number;
};
export type LeaveTypeMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
};
export type LeaveTypeMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
};
export type LeaveTypeCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
    _all?: true;
};
export type LeaveTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithRelationInput | Prisma.LeaveTypeOrderByWithRelationInput[];
    cursor?: Prisma.LeaveTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeaveTypeCountAggregateInputType;
    _min?: LeaveTypeMinAggregateInputType;
    _max?: LeaveTypeMaxAggregateInputType;
};
export type GetLeaveTypeAggregateType<T extends LeaveTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateLeaveType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeaveType[P]> : Prisma.GetScalarType<T[P], AggregateLeaveType[P]>;
};
export type LeaveTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithAggregationInput | Prisma.LeaveTypeOrderByWithAggregationInput[];
    by: Prisma.LeaveTypeScalarFieldEnum[] | Prisma.LeaveTypeScalarFieldEnum;
    having?: Prisma.LeaveTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaveTypeCountAggregateInputType | true;
    _min?: LeaveTypeMinAggregateInputType;
    _max?: LeaveTypeMaxAggregateInputType;
};
export type LeaveTypeGroupByOutputType = {
    id: string;
    schoolId: string;
    name: string;
    createdAt: Date;
    _count: LeaveTypeCountAggregateOutputType | null;
    _min: LeaveTypeMinAggregateOutputType | null;
    _max: LeaveTypeMaxAggregateOutputType | null;
};
export type GetLeaveTypeGroupByPayload<T extends LeaveTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeaveTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeaveTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeaveTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeaveTypeGroupByOutputType[P]>;
}>>;
export type LeaveTypeWhereInput = {
    AND?: Prisma.LeaveTypeWhereInput | Prisma.LeaveTypeWhereInput[];
    OR?: Prisma.LeaveTypeWhereInput[];
    NOT?: Prisma.LeaveTypeWhereInput | Prisma.LeaveTypeWhereInput[];
    id?: Prisma.StringFilter<"LeaveType"> | string;
    schoolId?: Prisma.StringFilter<"LeaveType"> | string;
    name?: Prisma.StringFilter<"LeaveType"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeaveType"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    leaveRequests?: Prisma.LeaveRequestListRelationFilter;
    allocations?: Prisma.LeaveGroupAllocationListRelationFilter;
};
export type LeaveTypeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    leaveRequests?: Prisma.LeaveRequestOrderByRelationAggregateInput;
    allocations?: Prisma.LeaveGroupAllocationOrderByRelationAggregateInput;
};
export type LeaveTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    schoolId_name?: Prisma.LeaveTypeSchoolIdNameCompoundUniqueInput;
    AND?: Prisma.LeaveTypeWhereInput | Prisma.LeaveTypeWhereInput[];
    OR?: Prisma.LeaveTypeWhereInput[];
    NOT?: Prisma.LeaveTypeWhereInput | Prisma.LeaveTypeWhereInput[];
    schoolId?: Prisma.StringFilter<"LeaveType"> | string;
    name?: Prisma.StringFilter<"LeaveType"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeaveType"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    leaveRequests?: Prisma.LeaveRequestListRelationFilter;
    allocations?: Prisma.LeaveGroupAllocationListRelationFilter;
}, "id" | "schoolId_name">;
export type LeaveTypeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LeaveTypeCountOrderByAggregateInput;
    _max?: Prisma.LeaveTypeMaxOrderByAggregateInput;
    _min?: Prisma.LeaveTypeMinOrderByAggregateInput;
};
export type LeaveTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeaveTypeScalarWhereWithAggregatesInput | Prisma.LeaveTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeaveTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeaveTypeScalarWhereWithAggregatesInput | Prisma.LeaveTypeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LeaveType"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"LeaveType"> | string;
    name?: Prisma.StringWithAggregatesFilter<"LeaveType"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LeaveType"> | Date | string;
};
export type LeaveTypeCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutLeaveTypesInput;
    leaveRequests?: Prisma.LeaveRequestCreateNestedManyWithoutLeaveTypeInput;
    allocations?: Prisma.LeaveGroupAllocationCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    leaveRequests?: Prisma.LeaveRequestUncheckedCreateNestedManyWithoutLeaveTypeInput;
    allocations?: Prisma.LeaveGroupAllocationUncheckedCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutLeaveTypesNestedInput;
    leaveRequests?: Prisma.LeaveRequestUpdateManyWithoutLeaveTypeNestedInput;
    allocations?: Prisma.LeaveGroupAllocationUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leaveRequests?: Prisma.LeaveRequestUncheckedUpdateManyWithoutLeaveTypeNestedInput;
    allocations?: Prisma.LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeCreateManyInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
};
export type LeaveTypeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveTypeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveTypeListRelationFilter = {
    every?: Prisma.LeaveTypeWhereInput;
    some?: Prisma.LeaveTypeWhereInput;
    none?: Prisma.LeaveTypeWhereInput;
};
export type LeaveTypeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeaveTypeSchoolIdNameCompoundUniqueInput = {
    schoolId: string;
    name: string;
};
export type LeaveTypeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveTypeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveTypeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveTypeScalarRelationFilter = {
    is?: Prisma.LeaveTypeWhereInput;
    isNot?: Prisma.LeaveTypeWhereInput;
};
export type LeaveTypeCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutSchoolInput, Prisma.LeaveTypeUncheckedCreateWithoutSchoolInput> | Prisma.LeaveTypeCreateWithoutSchoolInput[] | Prisma.LeaveTypeUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutSchoolInput | Prisma.LeaveTypeCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.LeaveTypeCreateManySchoolInputEnvelope;
    connect?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
};
export type LeaveTypeUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutSchoolInput, Prisma.LeaveTypeUncheckedCreateWithoutSchoolInput> | Prisma.LeaveTypeCreateWithoutSchoolInput[] | Prisma.LeaveTypeUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutSchoolInput | Prisma.LeaveTypeCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.LeaveTypeCreateManySchoolInputEnvelope;
    connect?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
};
export type LeaveTypeUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutSchoolInput, Prisma.LeaveTypeUncheckedCreateWithoutSchoolInput> | Prisma.LeaveTypeCreateWithoutSchoolInput[] | Prisma.LeaveTypeUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutSchoolInput | Prisma.LeaveTypeCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.LeaveTypeUpsertWithWhereUniqueWithoutSchoolInput | Prisma.LeaveTypeUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.LeaveTypeCreateManySchoolInputEnvelope;
    set?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    disconnect?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    delete?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    connect?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    update?: Prisma.LeaveTypeUpdateWithWhereUniqueWithoutSchoolInput | Prisma.LeaveTypeUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.LeaveTypeUpdateManyWithWhereWithoutSchoolInput | Prisma.LeaveTypeUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.LeaveTypeScalarWhereInput | Prisma.LeaveTypeScalarWhereInput[];
};
export type LeaveTypeUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutSchoolInput, Prisma.LeaveTypeUncheckedCreateWithoutSchoolInput> | Prisma.LeaveTypeCreateWithoutSchoolInput[] | Prisma.LeaveTypeUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutSchoolInput | Prisma.LeaveTypeCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.LeaveTypeUpsertWithWhereUniqueWithoutSchoolInput | Prisma.LeaveTypeUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.LeaveTypeCreateManySchoolInputEnvelope;
    set?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    disconnect?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    delete?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    connect?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    update?: Prisma.LeaveTypeUpdateWithWhereUniqueWithoutSchoolInput | Prisma.LeaveTypeUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.LeaveTypeUpdateManyWithWhereWithoutSchoolInput | Prisma.LeaveTypeUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.LeaveTypeScalarWhereInput | Prisma.LeaveTypeScalarWhereInput[];
};
export type LeaveTypeCreateNestedOneWithoutAllocationsInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutAllocationsInput, Prisma.LeaveTypeUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutAllocationsInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeUpdateOneRequiredWithoutAllocationsNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutAllocationsInput, Prisma.LeaveTypeUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutAllocationsInput;
    upsert?: Prisma.LeaveTypeUpsertWithoutAllocationsInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaveTypeUpdateToOneWithWhereWithoutAllocationsInput, Prisma.LeaveTypeUpdateWithoutAllocationsInput>, Prisma.LeaveTypeUncheckedUpdateWithoutAllocationsInput>;
};
export type LeaveTypeCreateNestedOneWithoutLeaveRequestsInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutLeaveRequestsInput, Prisma.LeaveTypeUncheckedCreateWithoutLeaveRequestsInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutLeaveRequestsInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeUpdateOneRequiredWithoutLeaveRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutLeaveRequestsInput, Prisma.LeaveTypeUncheckedCreateWithoutLeaveRequestsInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutLeaveRequestsInput;
    upsert?: Prisma.LeaveTypeUpsertWithoutLeaveRequestsInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaveTypeUpdateToOneWithWhereWithoutLeaveRequestsInput, Prisma.LeaveTypeUpdateWithoutLeaveRequestsInput>, Prisma.LeaveTypeUncheckedUpdateWithoutLeaveRequestsInput>;
};
export type LeaveTypeCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    leaveRequests?: Prisma.LeaveRequestCreateNestedManyWithoutLeaveTypeInput;
    allocations?: Prisma.LeaveGroupAllocationCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUncheckedCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    leaveRequests?: Prisma.LeaveRequestUncheckedCreateNestedManyWithoutLeaveTypeInput;
    allocations?: Prisma.LeaveGroupAllocationUncheckedCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeCreateOrConnectWithoutSchoolInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutSchoolInput, Prisma.LeaveTypeUncheckedCreateWithoutSchoolInput>;
};
export type LeaveTypeCreateManySchoolInputEnvelope = {
    data: Prisma.LeaveTypeCreateManySchoolInput | Prisma.LeaveTypeCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type LeaveTypeUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutSchoolInput, Prisma.LeaveTypeUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutSchoolInput, Prisma.LeaveTypeUncheckedCreateWithoutSchoolInput>;
};
export type LeaveTypeUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutSchoolInput, Prisma.LeaveTypeUncheckedUpdateWithoutSchoolInput>;
};
export type LeaveTypeUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.LeaveTypeScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateManyMutationInput, Prisma.LeaveTypeUncheckedUpdateManyWithoutSchoolInput>;
};
export type LeaveTypeScalarWhereInput = {
    AND?: Prisma.LeaveTypeScalarWhereInput | Prisma.LeaveTypeScalarWhereInput[];
    OR?: Prisma.LeaveTypeScalarWhereInput[];
    NOT?: Prisma.LeaveTypeScalarWhereInput | Prisma.LeaveTypeScalarWhereInput[];
    id?: Prisma.StringFilter<"LeaveType"> | string;
    schoolId?: Prisma.StringFilter<"LeaveType"> | string;
    name?: Prisma.StringFilter<"LeaveType"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeaveType"> | Date | string;
};
export type LeaveTypeCreateWithoutAllocationsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutLeaveTypesInput;
    leaveRequests?: Prisma.LeaveRequestCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUncheckedCreateWithoutAllocationsInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    leaveRequests?: Prisma.LeaveRequestUncheckedCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeCreateOrConnectWithoutAllocationsInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutAllocationsInput, Prisma.LeaveTypeUncheckedCreateWithoutAllocationsInput>;
};
export type LeaveTypeUpsertWithoutAllocationsInput = {
    update: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutAllocationsInput, Prisma.LeaveTypeUncheckedUpdateWithoutAllocationsInput>;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutAllocationsInput, Prisma.LeaveTypeUncheckedCreateWithoutAllocationsInput>;
    where?: Prisma.LeaveTypeWhereInput;
};
export type LeaveTypeUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: Prisma.LeaveTypeWhereInput;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutAllocationsInput, Prisma.LeaveTypeUncheckedUpdateWithoutAllocationsInput>;
};
export type LeaveTypeUpdateWithoutAllocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutLeaveTypesNestedInput;
    leaveRequests?: Prisma.LeaveRequestUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateWithoutAllocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leaveRequests?: Prisma.LeaveRequestUncheckedUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeCreateWithoutLeaveRequestsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutLeaveTypesInput;
    allocations?: Prisma.LeaveGroupAllocationCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUncheckedCreateWithoutLeaveRequestsInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    allocations?: Prisma.LeaveGroupAllocationUncheckedCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeCreateOrConnectWithoutLeaveRequestsInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutLeaveRequestsInput, Prisma.LeaveTypeUncheckedCreateWithoutLeaveRequestsInput>;
};
export type LeaveTypeUpsertWithoutLeaveRequestsInput = {
    update: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutLeaveRequestsInput, Prisma.LeaveTypeUncheckedUpdateWithoutLeaveRequestsInput>;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutLeaveRequestsInput, Prisma.LeaveTypeUncheckedCreateWithoutLeaveRequestsInput>;
    where?: Prisma.LeaveTypeWhereInput;
};
export type LeaveTypeUpdateToOneWithWhereWithoutLeaveRequestsInput = {
    where?: Prisma.LeaveTypeWhereInput;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutLeaveRequestsInput, Prisma.LeaveTypeUncheckedUpdateWithoutLeaveRequestsInput>;
};
export type LeaveTypeUpdateWithoutLeaveRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutLeaveTypesNestedInput;
    allocations?: Prisma.LeaveGroupAllocationUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateWithoutLeaveRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeCreateManySchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
};
export type LeaveTypeUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leaveRequests?: Prisma.LeaveRequestUpdateManyWithoutLeaveTypeNestedInput;
    allocations?: Prisma.LeaveGroupAllocationUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leaveRequests?: Prisma.LeaveRequestUncheckedUpdateManyWithoutLeaveTypeNestedInput;
    allocations?: Prisma.LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveTypeCountOutputType = {
    leaveRequests: number;
    allocations: number;
};
export type LeaveTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaveRequests?: boolean | LeaveTypeCountOutputTypeCountLeaveRequestsArgs;
    allocations?: boolean | LeaveTypeCountOutputTypeCountAllocationsArgs;
};
export type LeaveTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeCountOutputTypeSelect<ExtArgs> | null;
};
export type LeaveTypeCountOutputTypeCountLeaveRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveRequestWhereInput;
};
export type LeaveTypeCountOutputTypeCountAllocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveGroupAllocationWhereInput;
};
export type LeaveTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    leaveRequests?: boolean | Prisma.LeaveType$leaveRequestsArgs<ExtArgs>;
    allocations?: boolean | Prisma.LeaveType$allocationsArgs<ExtArgs>;
    _count?: boolean | Prisma.LeaveTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveType"]>;
export type LeaveTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveType"]>;
export type LeaveTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveType"]>;
export type LeaveTypeSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
};
export type LeaveTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "name" | "createdAt", ExtArgs["result"]["leaveType"]>;
export type LeaveTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    leaveRequests?: boolean | Prisma.LeaveType$leaveRequestsArgs<ExtArgs>;
    allocations?: boolean | Prisma.LeaveType$allocationsArgs<ExtArgs>;
    _count?: boolean | Prisma.LeaveTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LeaveTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type LeaveTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type $LeaveTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeaveType";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        leaveRequests: Prisma.$LeaveRequestPayload<ExtArgs>[];
        allocations: Prisma.$LeaveGroupAllocationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        name: string;
        createdAt: Date;
    }, ExtArgs["result"]["leaveType"]>;
    composites: {};
};
export type LeaveTypeGetPayload<S extends boolean | null | undefined | LeaveTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload, S>;
export type LeaveTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeaveTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaveTypeCountAggregateInputType | true;
};
export interface LeaveTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeaveType'];
        meta: {
            name: 'LeaveType';
        };
    };
    findUnique<T extends LeaveTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, LeaveTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeaveTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeaveTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeaveTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, LeaveTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeaveTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeaveTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeaveTypeFindManyArgs>(args?: Prisma.SelectSubset<T, LeaveTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeaveTypeCreateArgs>(args: Prisma.SelectSubset<T, LeaveTypeCreateArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeaveTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, LeaveTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeaveTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeaveTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeaveTypeDeleteArgs>(args: Prisma.SelectSubset<T, LeaveTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeaveTypeUpdateArgs>(args: Prisma.SelectSubset<T, LeaveTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeaveTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeaveTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeaveTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, LeaveTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeaveTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeaveTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeaveTypeUpsertArgs>(args: Prisma.SelectSubset<T, LeaveTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeaveTypeCountArgs>(args?: Prisma.Subset<T, LeaveTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeaveTypeCountAggregateOutputType> : number>;
    aggregate<T extends LeaveTypeAggregateArgs>(args: Prisma.Subset<T, LeaveTypeAggregateArgs>): Prisma.PrismaPromise<GetLeaveTypeAggregateType<T>>;
    groupBy<T extends LeaveTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeaveTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: LeaveTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeaveTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeaveTypeFieldRefs;
}
export interface Prisma__LeaveTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    leaveRequests<T extends Prisma.LeaveType$leaveRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveType$leaveRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    allocations<T extends Prisma.LeaveType$allocationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveType$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeaveTypeFieldRefs {
    readonly id: Prisma.FieldRef<"LeaveType", 'String'>;
    readonly schoolId: Prisma.FieldRef<"LeaveType", 'String'>;
    readonly name: Prisma.FieldRef<"LeaveType", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LeaveType", 'DateTime'>;
}
export type LeaveTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithRelationInput | Prisma.LeaveTypeOrderByWithRelationInput[];
    cursor?: Prisma.LeaveTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveTypeScalarFieldEnum | Prisma.LeaveTypeScalarFieldEnum[];
};
export type LeaveTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithRelationInput | Prisma.LeaveTypeOrderByWithRelationInput[];
    cursor?: Prisma.LeaveTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveTypeScalarFieldEnum | Prisma.LeaveTypeScalarFieldEnum[];
};
export type LeaveTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithRelationInput | Prisma.LeaveTypeOrderByWithRelationInput[];
    cursor?: Prisma.LeaveTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveTypeScalarFieldEnum | Prisma.LeaveTypeScalarFieldEnum[];
};
export type LeaveTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveTypeCreateInput, Prisma.LeaveTypeUncheckedCreateInput>;
};
export type LeaveTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeaveTypeCreateManyInput | Prisma.LeaveTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeaveTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    data: Prisma.LeaveTypeCreateManyInput | Prisma.LeaveTypeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeaveTypeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeaveTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateInput, Prisma.LeaveTypeUncheckedUpdateInput>;
    where: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeaveTypeUpdateManyMutationInput, Prisma.LeaveTypeUncheckedUpdateManyInput>;
    where?: Prisma.LeaveTypeWhereInput;
    limit?: number;
};
export type LeaveTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateManyMutationInput, Prisma.LeaveTypeUncheckedUpdateManyInput>;
    where?: Prisma.LeaveTypeWhereInput;
    limit?: number;
    include?: Prisma.LeaveTypeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeaveTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where: Prisma.LeaveTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveTypeCreateInput, Prisma.LeaveTypeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeaveTypeUpdateInput, Prisma.LeaveTypeUncheckedUpdateInput>;
};
export type LeaveTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveTypeWhereInput;
    limit?: number;
};
export type LeaveType$leaveRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaveType$allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupAllocationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupAllocationOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupAllocationInclude<ExtArgs> | null;
    where?: Prisma.LeaveGroupAllocationWhereInput;
    orderBy?: Prisma.LeaveGroupAllocationOrderByWithRelationInput | Prisma.LeaveGroupAllocationOrderByWithRelationInput[];
    cursor?: Prisma.LeaveGroupAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveGroupAllocationScalarFieldEnum | Prisma.LeaveGroupAllocationScalarFieldEnum[];
};
export type LeaveTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
};
