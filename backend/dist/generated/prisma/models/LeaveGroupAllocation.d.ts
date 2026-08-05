import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeaveGroupAllocationModel = runtime.Types.Result.DefaultSelection<Prisma.$LeaveGroupAllocationPayload>;
export type AggregateLeaveGroupAllocation = {
    _count: LeaveGroupAllocationCountAggregateOutputType | null;
    _avg: LeaveGroupAllocationAvgAggregateOutputType | null;
    _sum: LeaveGroupAllocationSumAggregateOutputType | null;
    _min: LeaveGroupAllocationMinAggregateOutputType | null;
    _max: LeaveGroupAllocationMaxAggregateOutputType | null;
};
export type LeaveGroupAllocationAvgAggregateOutputType = {
    daysPerYear: number | null;
};
export type LeaveGroupAllocationSumAggregateOutputType = {
    daysPerYear: number | null;
};
export type LeaveGroupAllocationMinAggregateOutputType = {
    id: string | null;
    leaveGroupId: string | null;
    leaveTypeId: string | null;
    daysPerYear: number | null;
};
export type LeaveGroupAllocationMaxAggregateOutputType = {
    id: string | null;
    leaveGroupId: string | null;
    leaveTypeId: string | null;
    daysPerYear: number | null;
};
export type LeaveGroupAllocationCountAggregateOutputType = {
    id: number;
    leaveGroupId: number;
    leaveTypeId: number;
    daysPerYear: number;
    _all: number;
};
export type LeaveGroupAllocationAvgAggregateInputType = {
    daysPerYear?: true;
};
export type LeaveGroupAllocationSumAggregateInputType = {
    daysPerYear?: true;
};
export type LeaveGroupAllocationMinAggregateInputType = {
    id?: true;
    leaveGroupId?: true;
    leaveTypeId?: true;
    daysPerYear?: true;
};
export type LeaveGroupAllocationMaxAggregateInputType = {
    id?: true;
    leaveGroupId?: true;
    leaveTypeId?: true;
    daysPerYear?: true;
};
export type LeaveGroupAllocationCountAggregateInputType = {
    id?: true;
    leaveGroupId?: true;
    leaveTypeId?: true;
    daysPerYear?: true;
    _all?: true;
};
export type LeaveGroupAllocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveGroupAllocationWhereInput;
    orderBy?: Prisma.LeaveGroupAllocationOrderByWithRelationInput | Prisma.LeaveGroupAllocationOrderByWithRelationInput[];
    cursor?: Prisma.LeaveGroupAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeaveGroupAllocationCountAggregateInputType;
    _avg?: LeaveGroupAllocationAvgAggregateInputType;
    _sum?: LeaveGroupAllocationSumAggregateInputType;
    _min?: LeaveGroupAllocationMinAggregateInputType;
    _max?: LeaveGroupAllocationMaxAggregateInputType;
};
export type GetLeaveGroupAllocationAggregateType<T extends LeaveGroupAllocationAggregateArgs> = {
    [P in keyof T & keyof AggregateLeaveGroupAllocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeaveGroupAllocation[P]> : Prisma.GetScalarType<T[P], AggregateLeaveGroupAllocation[P]>;
};
export type LeaveGroupAllocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveGroupAllocationWhereInput;
    orderBy?: Prisma.LeaveGroupAllocationOrderByWithAggregationInput | Prisma.LeaveGroupAllocationOrderByWithAggregationInput[];
    by: Prisma.LeaveGroupAllocationScalarFieldEnum[] | Prisma.LeaveGroupAllocationScalarFieldEnum;
    having?: Prisma.LeaveGroupAllocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaveGroupAllocationCountAggregateInputType | true;
    _avg?: LeaveGroupAllocationAvgAggregateInputType;
    _sum?: LeaveGroupAllocationSumAggregateInputType;
    _min?: LeaveGroupAllocationMinAggregateInputType;
    _max?: LeaveGroupAllocationMaxAggregateInputType;
};
export type LeaveGroupAllocationGroupByOutputType = {
    id: string;
    leaveGroupId: string;
    leaveTypeId: string;
    daysPerYear: number;
    _count: LeaveGroupAllocationCountAggregateOutputType | null;
    _avg: LeaveGroupAllocationAvgAggregateOutputType | null;
    _sum: LeaveGroupAllocationSumAggregateOutputType | null;
    _min: LeaveGroupAllocationMinAggregateOutputType | null;
    _max: LeaveGroupAllocationMaxAggregateOutputType | null;
};
export type GetLeaveGroupAllocationGroupByPayload<T extends LeaveGroupAllocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeaveGroupAllocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeaveGroupAllocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeaveGroupAllocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeaveGroupAllocationGroupByOutputType[P]>;
}>>;
export type LeaveGroupAllocationWhereInput = {
    AND?: Prisma.LeaveGroupAllocationWhereInput | Prisma.LeaveGroupAllocationWhereInput[];
    OR?: Prisma.LeaveGroupAllocationWhereInput[];
    NOT?: Prisma.LeaveGroupAllocationWhereInput | Prisma.LeaveGroupAllocationWhereInput[];
    id?: Prisma.StringFilter<"LeaveGroupAllocation"> | string;
    leaveGroupId?: Prisma.StringFilter<"LeaveGroupAllocation"> | string;
    leaveTypeId?: Prisma.StringFilter<"LeaveGroupAllocation"> | string;
    daysPerYear?: Prisma.FloatFilter<"LeaveGroupAllocation"> | number;
    leaveGroup?: Prisma.XOR<Prisma.LeaveGroupScalarRelationFilter, Prisma.LeaveGroupWhereInput>;
    leaveType?: Prisma.XOR<Prisma.LeaveTypeScalarRelationFilter, Prisma.LeaveTypeWhereInput>;
};
export type LeaveGroupAllocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    leaveGroupId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    daysPerYear?: Prisma.SortOrder;
    leaveGroup?: Prisma.LeaveGroupOrderByWithRelationInput;
    leaveType?: Prisma.LeaveTypeOrderByWithRelationInput;
};
export type LeaveGroupAllocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    leaveGroupId_leaveTypeId?: Prisma.LeaveGroupAllocationLeaveGroupIdLeaveTypeIdCompoundUniqueInput;
    AND?: Prisma.LeaveGroupAllocationWhereInput | Prisma.LeaveGroupAllocationWhereInput[];
    OR?: Prisma.LeaveGroupAllocationWhereInput[];
    NOT?: Prisma.LeaveGroupAllocationWhereInput | Prisma.LeaveGroupAllocationWhereInput[];
    leaveGroupId?: Prisma.StringFilter<"LeaveGroupAllocation"> | string;
    leaveTypeId?: Prisma.StringFilter<"LeaveGroupAllocation"> | string;
    daysPerYear?: Prisma.FloatFilter<"LeaveGroupAllocation"> | number;
    leaveGroup?: Prisma.XOR<Prisma.LeaveGroupScalarRelationFilter, Prisma.LeaveGroupWhereInput>;
    leaveType?: Prisma.XOR<Prisma.LeaveTypeScalarRelationFilter, Prisma.LeaveTypeWhereInput>;
}, "id" | "leaveGroupId_leaveTypeId">;
export type LeaveGroupAllocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    leaveGroupId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    daysPerYear?: Prisma.SortOrder;
    _count?: Prisma.LeaveGroupAllocationCountOrderByAggregateInput;
    _avg?: Prisma.LeaveGroupAllocationAvgOrderByAggregateInput;
    _max?: Prisma.LeaveGroupAllocationMaxOrderByAggregateInput;
    _min?: Prisma.LeaveGroupAllocationMinOrderByAggregateInput;
    _sum?: Prisma.LeaveGroupAllocationSumOrderByAggregateInput;
};
export type LeaveGroupAllocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeaveGroupAllocationScalarWhereWithAggregatesInput | Prisma.LeaveGroupAllocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeaveGroupAllocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeaveGroupAllocationScalarWhereWithAggregatesInput | Prisma.LeaveGroupAllocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LeaveGroupAllocation"> | string;
    leaveGroupId?: Prisma.StringWithAggregatesFilter<"LeaveGroupAllocation"> | string;
    leaveTypeId?: Prisma.StringWithAggregatesFilter<"LeaveGroupAllocation"> | string;
    daysPerYear?: Prisma.FloatWithAggregatesFilter<"LeaveGroupAllocation"> | number;
};
export type LeaveGroupAllocationCreateInput = {
    id?: string;
    daysPerYear: number;
    leaveGroup: Prisma.LeaveGroupCreateNestedOneWithoutAllocationsInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutAllocationsInput;
};
export type LeaveGroupAllocationUncheckedCreateInput = {
    id?: string;
    leaveGroupId: string;
    leaveTypeId: string;
    daysPerYear: number;
};
export type LeaveGroupAllocationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPerYear?: Prisma.FloatFieldUpdateOperationsInput | number;
    leaveGroup?: Prisma.LeaveGroupUpdateOneRequiredWithoutAllocationsNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutAllocationsNestedInput;
};
export type LeaveGroupAllocationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveGroupId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPerYear?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LeaveGroupAllocationCreateManyInput = {
    id?: string;
    leaveGroupId: string;
    leaveTypeId: string;
    daysPerYear: number;
};
export type LeaveGroupAllocationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPerYear?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LeaveGroupAllocationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveGroupId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPerYear?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LeaveGroupAllocationListRelationFilter = {
    every?: Prisma.LeaveGroupAllocationWhereInput;
    some?: Prisma.LeaveGroupAllocationWhereInput;
    none?: Prisma.LeaveGroupAllocationWhereInput;
};
export type LeaveGroupAllocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeaveGroupAllocationLeaveGroupIdLeaveTypeIdCompoundUniqueInput = {
    leaveGroupId: string;
    leaveTypeId: string;
};
export type LeaveGroupAllocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    leaveGroupId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    daysPerYear?: Prisma.SortOrder;
};
export type LeaveGroupAllocationAvgOrderByAggregateInput = {
    daysPerYear?: Prisma.SortOrder;
};
export type LeaveGroupAllocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    leaveGroupId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    daysPerYear?: Prisma.SortOrder;
};
export type LeaveGroupAllocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    leaveGroupId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    daysPerYear?: Prisma.SortOrder;
};
export type LeaveGroupAllocationSumOrderByAggregateInput = {
    daysPerYear?: Prisma.SortOrder;
};
export type LeaveGroupAllocationCreateNestedManyWithoutLeaveTypeInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupAllocationCreateWithoutLeaveTypeInput, Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveGroupAllocationCreateWithoutLeaveTypeInput[] | Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveGroupAllocationCreateManyLeaveTypeInputEnvelope;
    connect?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
};
export type LeaveGroupAllocationUncheckedCreateNestedManyWithoutLeaveTypeInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupAllocationCreateWithoutLeaveTypeInput, Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveGroupAllocationCreateWithoutLeaveTypeInput[] | Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveGroupAllocationCreateManyLeaveTypeInputEnvelope;
    connect?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
};
export type LeaveGroupAllocationUpdateManyWithoutLeaveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupAllocationCreateWithoutLeaveTypeInput, Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveGroupAllocationCreateWithoutLeaveTypeInput[] | Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveTypeInput[];
    upsert?: Prisma.LeaveGroupAllocationUpsertWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveGroupAllocationUpsertWithWhereUniqueWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveGroupAllocationCreateManyLeaveTypeInputEnvelope;
    set?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    disconnect?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    delete?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    connect?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    update?: Prisma.LeaveGroupAllocationUpdateWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveGroupAllocationUpdateWithWhereUniqueWithoutLeaveTypeInput[];
    updateMany?: Prisma.LeaveGroupAllocationUpdateManyWithWhereWithoutLeaveTypeInput | Prisma.LeaveGroupAllocationUpdateManyWithWhereWithoutLeaveTypeInput[];
    deleteMany?: Prisma.LeaveGroupAllocationScalarWhereInput | Prisma.LeaveGroupAllocationScalarWhereInput[];
};
export type LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupAllocationCreateWithoutLeaveTypeInput, Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveGroupAllocationCreateWithoutLeaveTypeInput[] | Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveTypeInput[];
    upsert?: Prisma.LeaveGroupAllocationUpsertWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveGroupAllocationUpsertWithWhereUniqueWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveGroupAllocationCreateManyLeaveTypeInputEnvelope;
    set?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    disconnect?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    delete?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    connect?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    update?: Prisma.LeaveGroupAllocationUpdateWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveGroupAllocationUpdateWithWhereUniqueWithoutLeaveTypeInput[];
    updateMany?: Prisma.LeaveGroupAllocationUpdateManyWithWhereWithoutLeaveTypeInput | Prisma.LeaveGroupAllocationUpdateManyWithWhereWithoutLeaveTypeInput[];
    deleteMany?: Prisma.LeaveGroupAllocationScalarWhereInput | Prisma.LeaveGroupAllocationScalarWhereInput[];
};
export type LeaveGroupAllocationCreateNestedManyWithoutLeaveGroupInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupAllocationCreateWithoutLeaveGroupInput, Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveGroupInput> | Prisma.LeaveGroupAllocationCreateWithoutLeaveGroupInput[] | Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveGroupInput[];
    connectOrCreate?: Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveGroupInput | Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveGroupInput[];
    createMany?: Prisma.LeaveGroupAllocationCreateManyLeaveGroupInputEnvelope;
    connect?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
};
export type LeaveGroupAllocationUncheckedCreateNestedManyWithoutLeaveGroupInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupAllocationCreateWithoutLeaveGroupInput, Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveGroupInput> | Prisma.LeaveGroupAllocationCreateWithoutLeaveGroupInput[] | Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveGroupInput[];
    connectOrCreate?: Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveGroupInput | Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveGroupInput[];
    createMany?: Prisma.LeaveGroupAllocationCreateManyLeaveGroupInputEnvelope;
    connect?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
};
export type LeaveGroupAllocationUpdateManyWithoutLeaveGroupNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupAllocationCreateWithoutLeaveGroupInput, Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveGroupInput> | Prisma.LeaveGroupAllocationCreateWithoutLeaveGroupInput[] | Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveGroupInput[];
    connectOrCreate?: Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveGroupInput | Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveGroupInput[];
    upsert?: Prisma.LeaveGroupAllocationUpsertWithWhereUniqueWithoutLeaveGroupInput | Prisma.LeaveGroupAllocationUpsertWithWhereUniqueWithoutLeaveGroupInput[];
    createMany?: Prisma.LeaveGroupAllocationCreateManyLeaveGroupInputEnvelope;
    set?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    disconnect?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    delete?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    connect?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    update?: Prisma.LeaveGroupAllocationUpdateWithWhereUniqueWithoutLeaveGroupInput | Prisma.LeaveGroupAllocationUpdateWithWhereUniqueWithoutLeaveGroupInput[];
    updateMany?: Prisma.LeaveGroupAllocationUpdateManyWithWhereWithoutLeaveGroupInput | Prisma.LeaveGroupAllocationUpdateManyWithWhereWithoutLeaveGroupInput[];
    deleteMany?: Prisma.LeaveGroupAllocationScalarWhereInput | Prisma.LeaveGroupAllocationScalarWhereInput[];
};
export type LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveGroupNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupAllocationCreateWithoutLeaveGroupInput, Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveGroupInput> | Prisma.LeaveGroupAllocationCreateWithoutLeaveGroupInput[] | Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveGroupInput[];
    connectOrCreate?: Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveGroupInput | Prisma.LeaveGroupAllocationCreateOrConnectWithoutLeaveGroupInput[];
    upsert?: Prisma.LeaveGroupAllocationUpsertWithWhereUniqueWithoutLeaveGroupInput | Prisma.LeaveGroupAllocationUpsertWithWhereUniqueWithoutLeaveGroupInput[];
    createMany?: Prisma.LeaveGroupAllocationCreateManyLeaveGroupInputEnvelope;
    set?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    disconnect?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    delete?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    connect?: Prisma.LeaveGroupAllocationWhereUniqueInput | Prisma.LeaveGroupAllocationWhereUniqueInput[];
    update?: Prisma.LeaveGroupAllocationUpdateWithWhereUniqueWithoutLeaveGroupInput | Prisma.LeaveGroupAllocationUpdateWithWhereUniqueWithoutLeaveGroupInput[];
    updateMany?: Prisma.LeaveGroupAllocationUpdateManyWithWhereWithoutLeaveGroupInput | Prisma.LeaveGroupAllocationUpdateManyWithWhereWithoutLeaveGroupInput[];
    deleteMany?: Prisma.LeaveGroupAllocationScalarWhereInput | Prisma.LeaveGroupAllocationScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type LeaveGroupAllocationCreateWithoutLeaveTypeInput = {
    id?: string;
    daysPerYear: number;
    leaveGroup: Prisma.LeaveGroupCreateNestedOneWithoutAllocationsInput;
};
export type LeaveGroupAllocationUncheckedCreateWithoutLeaveTypeInput = {
    id?: string;
    leaveGroupId: string;
    daysPerYear: number;
};
export type LeaveGroupAllocationCreateOrConnectWithoutLeaveTypeInput = {
    where: Prisma.LeaveGroupAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveGroupAllocationCreateWithoutLeaveTypeInput, Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveTypeInput>;
};
export type LeaveGroupAllocationCreateManyLeaveTypeInputEnvelope = {
    data: Prisma.LeaveGroupAllocationCreateManyLeaveTypeInput | Prisma.LeaveGroupAllocationCreateManyLeaveTypeInput[];
    skipDuplicates?: boolean;
};
export type LeaveGroupAllocationUpsertWithWhereUniqueWithoutLeaveTypeInput = {
    where: Prisma.LeaveGroupAllocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveGroupAllocationUpdateWithoutLeaveTypeInput, Prisma.LeaveGroupAllocationUncheckedUpdateWithoutLeaveTypeInput>;
    create: Prisma.XOR<Prisma.LeaveGroupAllocationCreateWithoutLeaveTypeInput, Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveTypeInput>;
};
export type LeaveGroupAllocationUpdateWithWhereUniqueWithoutLeaveTypeInput = {
    where: Prisma.LeaveGroupAllocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveGroupAllocationUpdateWithoutLeaveTypeInput, Prisma.LeaveGroupAllocationUncheckedUpdateWithoutLeaveTypeInput>;
};
export type LeaveGroupAllocationUpdateManyWithWhereWithoutLeaveTypeInput = {
    where: Prisma.LeaveGroupAllocationScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveGroupAllocationUpdateManyMutationInput, Prisma.LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveTypeInput>;
};
export type LeaveGroupAllocationScalarWhereInput = {
    AND?: Prisma.LeaveGroupAllocationScalarWhereInput | Prisma.LeaveGroupAllocationScalarWhereInput[];
    OR?: Prisma.LeaveGroupAllocationScalarWhereInput[];
    NOT?: Prisma.LeaveGroupAllocationScalarWhereInput | Prisma.LeaveGroupAllocationScalarWhereInput[];
    id?: Prisma.StringFilter<"LeaveGroupAllocation"> | string;
    leaveGroupId?: Prisma.StringFilter<"LeaveGroupAllocation"> | string;
    leaveTypeId?: Prisma.StringFilter<"LeaveGroupAllocation"> | string;
    daysPerYear?: Prisma.FloatFilter<"LeaveGroupAllocation"> | number;
};
export type LeaveGroupAllocationCreateWithoutLeaveGroupInput = {
    id?: string;
    daysPerYear: number;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutAllocationsInput;
};
export type LeaveGroupAllocationUncheckedCreateWithoutLeaveGroupInput = {
    id?: string;
    leaveTypeId: string;
    daysPerYear: number;
};
export type LeaveGroupAllocationCreateOrConnectWithoutLeaveGroupInput = {
    where: Prisma.LeaveGroupAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveGroupAllocationCreateWithoutLeaveGroupInput, Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveGroupInput>;
};
export type LeaveGroupAllocationCreateManyLeaveGroupInputEnvelope = {
    data: Prisma.LeaveGroupAllocationCreateManyLeaveGroupInput | Prisma.LeaveGroupAllocationCreateManyLeaveGroupInput[];
    skipDuplicates?: boolean;
};
export type LeaveGroupAllocationUpsertWithWhereUniqueWithoutLeaveGroupInput = {
    where: Prisma.LeaveGroupAllocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveGroupAllocationUpdateWithoutLeaveGroupInput, Prisma.LeaveGroupAllocationUncheckedUpdateWithoutLeaveGroupInput>;
    create: Prisma.XOR<Prisma.LeaveGroupAllocationCreateWithoutLeaveGroupInput, Prisma.LeaveGroupAllocationUncheckedCreateWithoutLeaveGroupInput>;
};
export type LeaveGroupAllocationUpdateWithWhereUniqueWithoutLeaveGroupInput = {
    where: Prisma.LeaveGroupAllocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveGroupAllocationUpdateWithoutLeaveGroupInput, Prisma.LeaveGroupAllocationUncheckedUpdateWithoutLeaveGroupInput>;
};
export type LeaveGroupAllocationUpdateManyWithWhereWithoutLeaveGroupInput = {
    where: Prisma.LeaveGroupAllocationScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveGroupAllocationUpdateManyMutationInput, Prisma.LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveGroupInput>;
};
export type LeaveGroupAllocationCreateManyLeaveTypeInput = {
    id?: string;
    leaveGroupId: string;
    daysPerYear: number;
};
export type LeaveGroupAllocationUpdateWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPerYear?: Prisma.FloatFieldUpdateOperationsInput | number;
    leaveGroup?: Prisma.LeaveGroupUpdateOneRequiredWithoutAllocationsNestedInput;
};
export type LeaveGroupAllocationUncheckedUpdateWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveGroupId?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPerYear?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveGroupId?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPerYear?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LeaveGroupAllocationCreateManyLeaveGroupInput = {
    id?: string;
    leaveTypeId: string;
    daysPerYear: number;
};
export type LeaveGroupAllocationUpdateWithoutLeaveGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPerYear?: Prisma.FloatFieldUpdateOperationsInput | number;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutAllocationsNestedInput;
};
export type LeaveGroupAllocationUncheckedUpdateWithoutLeaveGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPerYear?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    daysPerYear?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LeaveGroupAllocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    leaveGroupId?: boolean;
    leaveTypeId?: boolean;
    daysPerYear?: boolean;
    leaveGroup?: boolean | Prisma.LeaveGroupDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveGroupAllocation"]>;
export type LeaveGroupAllocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    leaveGroupId?: boolean;
    leaveTypeId?: boolean;
    daysPerYear?: boolean;
    leaveGroup?: boolean | Prisma.LeaveGroupDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveGroupAllocation"]>;
export type LeaveGroupAllocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    leaveGroupId?: boolean;
    leaveTypeId?: boolean;
    daysPerYear?: boolean;
    leaveGroup?: boolean | Prisma.LeaveGroupDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveGroupAllocation"]>;
export type LeaveGroupAllocationSelectScalar = {
    id?: boolean;
    leaveGroupId?: boolean;
    leaveTypeId?: boolean;
    daysPerYear?: boolean;
};
export type LeaveGroupAllocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "leaveGroupId" | "leaveTypeId" | "daysPerYear", ExtArgs["result"]["leaveGroupAllocation"]>;
export type LeaveGroupAllocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaveGroup?: boolean | Prisma.LeaveGroupDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
};
export type LeaveGroupAllocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaveGroup?: boolean | Prisma.LeaveGroupDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
};
export type LeaveGroupAllocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaveGroup?: boolean | Prisma.LeaveGroupDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
};
export type $LeaveGroupAllocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeaveGroupAllocation";
    objects: {
        leaveGroup: Prisma.$LeaveGroupPayload<ExtArgs>;
        leaveType: Prisma.$LeaveTypePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        leaveGroupId: string;
        leaveTypeId: string;
        daysPerYear: number;
    }, ExtArgs["result"]["leaveGroupAllocation"]>;
    composites: {};
};
export type LeaveGroupAllocationGetPayload<S extends boolean | null | undefined | LeaveGroupAllocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload, S>;
export type LeaveGroupAllocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeaveGroupAllocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaveGroupAllocationCountAggregateInputType | true;
};
export interface LeaveGroupAllocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeaveGroupAllocation'];
        meta: {
            name: 'LeaveGroupAllocation';
        };
    };
    findUnique<T extends LeaveGroupAllocationFindUniqueArgs>(args: Prisma.SelectSubset<T, LeaveGroupAllocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupAllocationClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeaveGroupAllocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeaveGroupAllocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupAllocationClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeaveGroupAllocationFindFirstArgs>(args?: Prisma.SelectSubset<T, LeaveGroupAllocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupAllocationClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeaveGroupAllocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeaveGroupAllocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupAllocationClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeaveGroupAllocationFindManyArgs>(args?: Prisma.SelectSubset<T, LeaveGroupAllocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeaveGroupAllocationCreateArgs>(args: Prisma.SelectSubset<T, LeaveGroupAllocationCreateArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupAllocationClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeaveGroupAllocationCreateManyArgs>(args?: Prisma.SelectSubset<T, LeaveGroupAllocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeaveGroupAllocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeaveGroupAllocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeaveGroupAllocationDeleteArgs>(args: Prisma.SelectSubset<T, LeaveGroupAllocationDeleteArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupAllocationClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeaveGroupAllocationUpdateArgs>(args: Prisma.SelectSubset<T, LeaveGroupAllocationUpdateArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupAllocationClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeaveGroupAllocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeaveGroupAllocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeaveGroupAllocationUpdateManyArgs>(args: Prisma.SelectSubset<T, LeaveGroupAllocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeaveGroupAllocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeaveGroupAllocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeaveGroupAllocationUpsertArgs>(args: Prisma.SelectSubset<T, LeaveGroupAllocationUpsertArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupAllocationClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeaveGroupAllocationCountArgs>(args?: Prisma.Subset<T, LeaveGroupAllocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeaveGroupAllocationCountAggregateOutputType> : number>;
    aggregate<T extends LeaveGroupAllocationAggregateArgs>(args: Prisma.Subset<T, LeaveGroupAllocationAggregateArgs>): Prisma.PrismaPromise<GetLeaveGroupAllocationAggregateType<T>>;
    groupBy<T extends LeaveGroupAllocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeaveGroupAllocationGroupByArgs['orderBy'];
    } : {
        orderBy?: LeaveGroupAllocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeaveGroupAllocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveGroupAllocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeaveGroupAllocationFieldRefs;
}
export interface Prisma__LeaveGroupAllocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    leaveGroup<T extends Prisma.LeaveGroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveGroupDefaultArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    leaveType<T extends Prisma.LeaveTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeaveGroupAllocationFieldRefs {
    readonly id: Prisma.FieldRef<"LeaveGroupAllocation", 'String'>;
    readonly leaveGroupId: Prisma.FieldRef<"LeaveGroupAllocation", 'String'>;
    readonly leaveTypeId: Prisma.FieldRef<"LeaveGroupAllocation", 'String'>;
    readonly daysPerYear: Prisma.FieldRef<"LeaveGroupAllocation", 'Float'>;
}
export type LeaveGroupAllocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupAllocationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupAllocationOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupAllocationInclude<ExtArgs> | null;
    where: Prisma.LeaveGroupAllocationWhereUniqueInput;
};
export type LeaveGroupAllocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupAllocationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupAllocationOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupAllocationInclude<ExtArgs> | null;
    where: Prisma.LeaveGroupAllocationWhereUniqueInput;
};
export type LeaveGroupAllocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaveGroupAllocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaveGroupAllocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaveGroupAllocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupAllocationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupAllocationOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupAllocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveGroupAllocationCreateInput, Prisma.LeaveGroupAllocationUncheckedCreateInput>;
};
export type LeaveGroupAllocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeaveGroupAllocationCreateManyInput | Prisma.LeaveGroupAllocationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeaveGroupAllocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupAllocationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveGroupAllocationOmit<ExtArgs> | null;
    data: Prisma.LeaveGroupAllocationCreateManyInput | Prisma.LeaveGroupAllocationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeaveGroupAllocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeaveGroupAllocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupAllocationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupAllocationOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupAllocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveGroupAllocationUpdateInput, Prisma.LeaveGroupAllocationUncheckedUpdateInput>;
    where: Prisma.LeaveGroupAllocationWhereUniqueInput;
};
export type LeaveGroupAllocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeaveGroupAllocationUpdateManyMutationInput, Prisma.LeaveGroupAllocationUncheckedUpdateManyInput>;
    where?: Prisma.LeaveGroupAllocationWhereInput;
    limit?: number;
};
export type LeaveGroupAllocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupAllocationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveGroupAllocationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveGroupAllocationUpdateManyMutationInput, Prisma.LeaveGroupAllocationUncheckedUpdateManyInput>;
    where?: Prisma.LeaveGroupAllocationWhereInput;
    limit?: number;
    include?: Prisma.LeaveGroupAllocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeaveGroupAllocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupAllocationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupAllocationOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupAllocationInclude<ExtArgs> | null;
    where: Prisma.LeaveGroupAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveGroupAllocationCreateInput, Prisma.LeaveGroupAllocationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeaveGroupAllocationUpdateInput, Prisma.LeaveGroupAllocationUncheckedUpdateInput>;
};
export type LeaveGroupAllocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupAllocationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupAllocationOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupAllocationInclude<ExtArgs> | null;
    where: Prisma.LeaveGroupAllocationWhereUniqueInput;
};
export type LeaveGroupAllocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveGroupAllocationWhereInput;
    limit?: number;
};
export type LeaveGroupAllocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupAllocationSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupAllocationOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupAllocationInclude<ExtArgs> | null;
};
