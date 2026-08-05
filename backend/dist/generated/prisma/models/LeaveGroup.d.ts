import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeaveGroupModel = runtime.Types.Result.DefaultSelection<Prisma.$LeaveGroupPayload>;
export type AggregateLeaveGroup = {
    _count: LeaveGroupCountAggregateOutputType | null;
    _min: LeaveGroupMinAggregateOutputType | null;
    _max: LeaveGroupMaxAggregateOutputType | null;
};
export type LeaveGroupMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LeaveGroupMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LeaveGroupCountAggregateOutputType = {
    id: number;
    schoolId: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LeaveGroupMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LeaveGroupMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LeaveGroupCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LeaveGroupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveGroupWhereInput;
    orderBy?: Prisma.LeaveGroupOrderByWithRelationInput | Prisma.LeaveGroupOrderByWithRelationInput[];
    cursor?: Prisma.LeaveGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeaveGroupCountAggregateInputType;
    _min?: LeaveGroupMinAggregateInputType;
    _max?: LeaveGroupMaxAggregateInputType;
};
export type GetLeaveGroupAggregateType<T extends LeaveGroupAggregateArgs> = {
    [P in keyof T & keyof AggregateLeaveGroup]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeaveGroup[P]> : Prisma.GetScalarType<T[P], AggregateLeaveGroup[P]>;
};
export type LeaveGroupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveGroupWhereInput;
    orderBy?: Prisma.LeaveGroupOrderByWithAggregationInput | Prisma.LeaveGroupOrderByWithAggregationInput[];
    by: Prisma.LeaveGroupScalarFieldEnum[] | Prisma.LeaveGroupScalarFieldEnum;
    having?: Prisma.LeaveGroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaveGroupCountAggregateInputType | true;
    _min?: LeaveGroupMinAggregateInputType;
    _max?: LeaveGroupMaxAggregateInputType;
};
export type LeaveGroupGroupByOutputType = {
    id: string;
    schoolId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: LeaveGroupCountAggregateOutputType | null;
    _min: LeaveGroupMinAggregateOutputType | null;
    _max: LeaveGroupMaxAggregateOutputType | null;
};
export type GetLeaveGroupGroupByPayload<T extends LeaveGroupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeaveGroupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeaveGroupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeaveGroupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeaveGroupGroupByOutputType[P]>;
}>>;
export type LeaveGroupWhereInput = {
    AND?: Prisma.LeaveGroupWhereInput | Prisma.LeaveGroupWhereInput[];
    OR?: Prisma.LeaveGroupWhereInput[];
    NOT?: Prisma.LeaveGroupWhereInput | Prisma.LeaveGroupWhereInput[];
    id?: Prisma.StringFilter<"LeaveGroup"> | string;
    schoolId?: Prisma.StringFilter<"LeaveGroup"> | string;
    name?: Prisma.StringFilter<"LeaveGroup"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeaveGroup"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LeaveGroup"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    allocations?: Prisma.LeaveGroupAllocationListRelationFilter;
    teachers?: Prisma.TeacherListRelationFilter;
    staff?: Prisma.StaffListRelationFilter;
};
export type LeaveGroupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    allocations?: Prisma.LeaveGroupAllocationOrderByRelationAggregateInput;
    teachers?: Prisma.TeacherOrderByRelationAggregateInput;
    staff?: Prisma.StaffOrderByRelationAggregateInput;
};
export type LeaveGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    schoolId_name?: Prisma.LeaveGroupSchoolIdNameCompoundUniqueInput;
    AND?: Prisma.LeaveGroupWhereInput | Prisma.LeaveGroupWhereInput[];
    OR?: Prisma.LeaveGroupWhereInput[];
    NOT?: Prisma.LeaveGroupWhereInput | Prisma.LeaveGroupWhereInput[];
    schoolId?: Prisma.StringFilter<"LeaveGroup"> | string;
    name?: Prisma.StringFilter<"LeaveGroup"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeaveGroup"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LeaveGroup"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    allocations?: Prisma.LeaveGroupAllocationListRelationFilter;
    teachers?: Prisma.TeacherListRelationFilter;
    staff?: Prisma.StaffListRelationFilter;
}, "id" | "schoolId_name">;
export type LeaveGroupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LeaveGroupCountOrderByAggregateInput;
    _max?: Prisma.LeaveGroupMaxOrderByAggregateInput;
    _min?: Prisma.LeaveGroupMinOrderByAggregateInput;
};
export type LeaveGroupScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeaveGroupScalarWhereWithAggregatesInput | Prisma.LeaveGroupScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeaveGroupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeaveGroupScalarWhereWithAggregatesInput | Prisma.LeaveGroupScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LeaveGroup"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"LeaveGroup"> | string;
    name?: Prisma.StringWithAggregatesFilter<"LeaveGroup"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LeaveGroup"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LeaveGroup"> | Date | string;
};
export type LeaveGroupCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutLeaveGroupsInput;
    allocations?: Prisma.LeaveGroupAllocationCreateNestedManyWithoutLeaveGroupInput;
    teachers?: Prisma.TeacherCreateNestedManyWithoutLeaveGroupInput;
    staff?: Prisma.StaffCreateNestedManyWithoutLeaveGroupInput;
};
export type LeaveGroupUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    allocations?: Prisma.LeaveGroupAllocationUncheckedCreateNestedManyWithoutLeaveGroupInput;
    teachers?: Prisma.TeacherUncheckedCreateNestedManyWithoutLeaveGroupInput;
    staff?: Prisma.StaffUncheckedCreateNestedManyWithoutLeaveGroupInput;
};
export type LeaveGroupUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutLeaveGroupsNestedInput;
    allocations?: Prisma.LeaveGroupAllocationUpdateManyWithoutLeaveGroupNestedInput;
    teachers?: Prisma.TeacherUpdateManyWithoutLeaveGroupNestedInput;
    staff?: Prisma.StaffUpdateManyWithoutLeaveGroupNestedInput;
};
export type LeaveGroupUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveGroupNestedInput;
    teachers?: Prisma.TeacherUncheckedUpdateManyWithoutLeaveGroupNestedInput;
    staff?: Prisma.StaffUncheckedUpdateManyWithoutLeaveGroupNestedInput;
};
export type LeaveGroupCreateManyInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveGroupUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveGroupUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveGroupListRelationFilter = {
    every?: Prisma.LeaveGroupWhereInput;
    some?: Prisma.LeaveGroupWhereInput;
    none?: Prisma.LeaveGroupWhereInput;
};
export type LeaveGroupOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeaveGroupNullableScalarRelationFilter = {
    is?: Prisma.LeaveGroupWhereInput | null;
    isNot?: Prisma.LeaveGroupWhereInput | null;
};
export type LeaveGroupSchoolIdNameCompoundUniqueInput = {
    schoolId: string;
    name: string;
};
export type LeaveGroupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LeaveGroupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LeaveGroupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LeaveGroupScalarRelationFilter = {
    is?: Prisma.LeaveGroupWhereInput;
    isNot?: Prisma.LeaveGroupWhereInput;
};
export type LeaveGroupCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupCreateWithoutSchoolInput, Prisma.LeaveGroupUncheckedCreateWithoutSchoolInput> | Prisma.LeaveGroupCreateWithoutSchoolInput[] | Prisma.LeaveGroupUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.LeaveGroupCreateOrConnectWithoutSchoolInput | Prisma.LeaveGroupCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.LeaveGroupCreateManySchoolInputEnvelope;
    connect?: Prisma.LeaveGroupWhereUniqueInput | Prisma.LeaveGroupWhereUniqueInput[];
};
export type LeaveGroupUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupCreateWithoutSchoolInput, Prisma.LeaveGroupUncheckedCreateWithoutSchoolInput> | Prisma.LeaveGroupCreateWithoutSchoolInput[] | Prisma.LeaveGroupUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.LeaveGroupCreateOrConnectWithoutSchoolInput | Prisma.LeaveGroupCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.LeaveGroupCreateManySchoolInputEnvelope;
    connect?: Prisma.LeaveGroupWhereUniqueInput | Prisma.LeaveGroupWhereUniqueInput[];
};
export type LeaveGroupUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupCreateWithoutSchoolInput, Prisma.LeaveGroupUncheckedCreateWithoutSchoolInput> | Prisma.LeaveGroupCreateWithoutSchoolInput[] | Prisma.LeaveGroupUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.LeaveGroupCreateOrConnectWithoutSchoolInput | Prisma.LeaveGroupCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.LeaveGroupUpsertWithWhereUniqueWithoutSchoolInput | Prisma.LeaveGroupUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.LeaveGroupCreateManySchoolInputEnvelope;
    set?: Prisma.LeaveGroupWhereUniqueInput | Prisma.LeaveGroupWhereUniqueInput[];
    disconnect?: Prisma.LeaveGroupWhereUniqueInput | Prisma.LeaveGroupWhereUniqueInput[];
    delete?: Prisma.LeaveGroupWhereUniqueInput | Prisma.LeaveGroupWhereUniqueInput[];
    connect?: Prisma.LeaveGroupWhereUniqueInput | Prisma.LeaveGroupWhereUniqueInput[];
    update?: Prisma.LeaveGroupUpdateWithWhereUniqueWithoutSchoolInput | Prisma.LeaveGroupUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.LeaveGroupUpdateManyWithWhereWithoutSchoolInput | Prisma.LeaveGroupUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.LeaveGroupScalarWhereInput | Prisma.LeaveGroupScalarWhereInput[];
};
export type LeaveGroupUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupCreateWithoutSchoolInput, Prisma.LeaveGroupUncheckedCreateWithoutSchoolInput> | Prisma.LeaveGroupCreateWithoutSchoolInput[] | Prisma.LeaveGroupUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.LeaveGroupCreateOrConnectWithoutSchoolInput | Prisma.LeaveGroupCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.LeaveGroupUpsertWithWhereUniqueWithoutSchoolInput | Prisma.LeaveGroupUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.LeaveGroupCreateManySchoolInputEnvelope;
    set?: Prisma.LeaveGroupWhereUniqueInput | Prisma.LeaveGroupWhereUniqueInput[];
    disconnect?: Prisma.LeaveGroupWhereUniqueInput | Prisma.LeaveGroupWhereUniqueInput[];
    delete?: Prisma.LeaveGroupWhereUniqueInput | Prisma.LeaveGroupWhereUniqueInput[];
    connect?: Prisma.LeaveGroupWhereUniqueInput | Prisma.LeaveGroupWhereUniqueInput[];
    update?: Prisma.LeaveGroupUpdateWithWhereUniqueWithoutSchoolInput | Prisma.LeaveGroupUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.LeaveGroupUpdateManyWithWhereWithoutSchoolInput | Prisma.LeaveGroupUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.LeaveGroupScalarWhereInput | Prisma.LeaveGroupScalarWhereInput[];
};
export type LeaveGroupCreateNestedOneWithoutTeachersInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupCreateWithoutTeachersInput, Prisma.LeaveGroupUncheckedCreateWithoutTeachersInput>;
    connectOrCreate?: Prisma.LeaveGroupCreateOrConnectWithoutTeachersInput;
    connect?: Prisma.LeaveGroupWhereUniqueInput;
};
export type LeaveGroupUpdateOneWithoutTeachersNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupCreateWithoutTeachersInput, Prisma.LeaveGroupUncheckedCreateWithoutTeachersInput>;
    connectOrCreate?: Prisma.LeaveGroupCreateOrConnectWithoutTeachersInput;
    upsert?: Prisma.LeaveGroupUpsertWithoutTeachersInput;
    disconnect?: Prisma.LeaveGroupWhereInput | boolean;
    delete?: Prisma.LeaveGroupWhereInput | boolean;
    connect?: Prisma.LeaveGroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaveGroupUpdateToOneWithWhereWithoutTeachersInput, Prisma.LeaveGroupUpdateWithoutTeachersInput>, Prisma.LeaveGroupUncheckedUpdateWithoutTeachersInput>;
};
export type LeaveGroupCreateNestedOneWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupCreateWithoutStaffInput, Prisma.LeaveGroupUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.LeaveGroupCreateOrConnectWithoutStaffInput;
    connect?: Prisma.LeaveGroupWhereUniqueInput;
};
export type LeaveGroupUpdateOneWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupCreateWithoutStaffInput, Prisma.LeaveGroupUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.LeaveGroupCreateOrConnectWithoutStaffInput;
    upsert?: Prisma.LeaveGroupUpsertWithoutStaffInput;
    disconnect?: Prisma.LeaveGroupWhereInput | boolean;
    delete?: Prisma.LeaveGroupWhereInput | boolean;
    connect?: Prisma.LeaveGroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaveGroupUpdateToOneWithWhereWithoutStaffInput, Prisma.LeaveGroupUpdateWithoutStaffInput>, Prisma.LeaveGroupUncheckedUpdateWithoutStaffInput>;
};
export type LeaveGroupCreateNestedOneWithoutAllocationsInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupCreateWithoutAllocationsInput, Prisma.LeaveGroupUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.LeaveGroupCreateOrConnectWithoutAllocationsInput;
    connect?: Prisma.LeaveGroupWhereUniqueInput;
};
export type LeaveGroupUpdateOneRequiredWithoutAllocationsNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveGroupCreateWithoutAllocationsInput, Prisma.LeaveGroupUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.LeaveGroupCreateOrConnectWithoutAllocationsInput;
    upsert?: Prisma.LeaveGroupUpsertWithoutAllocationsInput;
    connect?: Prisma.LeaveGroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaveGroupUpdateToOneWithWhereWithoutAllocationsInput, Prisma.LeaveGroupUpdateWithoutAllocationsInput>, Prisma.LeaveGroupUncheckedUpdateWithoutAllocationsInput>;
};
export type LeaveGroupCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    allocations?: Prisma.LeaveGroupAllocationCreateNestedManyWithoutLeaveGroupInput;
    teachers?: Prisma.TeacherCreateNestedManyWithoutLeaveGroupInput;
    staff?: Prisma.StaffCreateNestedManyWithoutLeaveGroupInput;
};
export type LeaveGroupUncheckedCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    allocations?: Prisma.LeaveGroupAllocationUncheckedCreateNestedManyWithoutLeaveGroupInput;
    teachers?: Prisma.TeacherUncheckedCreateNestedManyWithoutLeaveGroupInput;
    staff?: Prisma.StaffUncheckedCreateNestedManyWithoutLeaveGroupInput;
};
export type LeaveGroupCreateOrConnectWithoutSchoolInput = {
    where: Prisma.LeaveGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveGroupCreateWithoutSchoolInput, Prisma.LeaveGroupUncheckedCreateWithoutSchoolInput>;
};
export type LeaveGroupCreateManySchoolInputEnvelope = {
    data: Prisma.LeaveGroupCreateManySchoolInput | Prisma.LeaveGroupCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type LeaveGroupUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.LeaveGroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveGroupUpdateWithoutSchoolInput, Prisma.LeaveGroupUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.LeaveGroupCreateWithoutSchoolInput, Prisma.LeaveGroupUncheckedCreateWithoutSchoolInput>;
};
export type LeaveGroupUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.LeaveGroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveGroupUpdateWithoutSchoolInput, Prisma.LeaveGroupUncheckedUpdateWithoutSchoolInput>;
};
export type LeaveGroupUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.LeaveGroupScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveGroupUpdateManyMutationInput, Prisma.LeaveGroupUncheckedUpdateManyWithoutSchoolInput>;
};
export type LeaveGroupScalarWhereInput = {
    AND?: Prisma.LeaveGroupScalarWhereInput | Prisma.LeaveGroupScalarWhereInput[];
    OR?: Prisma.LeaveGroupScalarWhereInput[];
    NOT?: Prisma.LeaveGroupScalarWhereInput | Prisma.LeaveGroupScalarWhereInput[];
    id?: Prisma.StringFilter<"LeaveGroup"> | string;
    schoolId?: Prisma.StringFilter<"LeaveGroup"> | string;
    name?: Prisma.StringFilter<"LeaveGroup"> | string;
    createdAt?: Prisma.DateTimeFilter<"LeaveGroup"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LeaveGroup"> | Date | string;
};
export type LeaveGroupCreateWithoutTeachersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutLeaveGroupsInput;
    allocations?: Prisma.LeaveGroupAllocationCreateNestedManyWithoutLeaveGroupInput;
    staff?: Prisma.StaffCreateNestedManyWithoutLeaveGroupInput;
};
export type LeaveGroupUncheckedCreateWithoutTeachersInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    allocations?: Prisma.LeaveGroupAllocationUncheckedCreateNestedManyWithoutLeaveGroupInput;
    staff?: Prisma.StaffUncheckedCreateNestedManyWithoutLeaveGroupInput;
};
export type LeaveGroupCreateOrConnectWithoutTeachersInput = {
    where: Prisma.LeaveGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveGroupCreateWithoutTeachersInput, Prisma.LeaveGroupUncheckedCreateWithoutTeachersInput>;
};
export type LeaveGroupUpsertWithoutTeachersInput = {
    update: Prisma.XOR<Prisma.LeaveGroupUpdateWithoutTeachersInput, Prisma.LeaveGroupUncheckedUpdateWithoutTeachersInput>;
    create: Prisma.XOR<Prisma.LeaveGroupCreateWithoutTeachersInput, Prisma.LeaveGroupUncheckedCreateWithoutTeachersInput>;
    where?: Prisma.LeaveGroupWhereInput;
};
export type LeaveGroupUpdateToOneWithWhereWithoutTeachersInput = {
    where?: Prisma.LeaveGroupWhereInput;
    data: Prisma.XOR<Prisma.LeaveGroupUpdateWithoutTeachersInput, Prisma.LeaveGroupUncheckedUpdateWithoutTeachersInput>;
};
export type LeaveGroupUpdateWithoutTeachersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutLeaveGroupsNestedInput;
    allocations?: Prisma.LeaveGroupAllocationUpdateManyWithoutLeaveGroupNestedInput;
    staff?: Prisma.StaffUpdateManyWithoutLeaveGroupNestedInput;
};
export type LeaveGroupUncheckedUpdateWithoutTeachersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveGroupNestedInput;
    staff?: Prisma.StaffUncheckedUpdateManyWithoutLeaveGroupNestedInput;
};
export type LeaveGroupCreateWithoutStaffInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutLeaveGroupsInput;
    allocations?: Prisma.LeaveGroupAllocationCreateNestedManyWithoutLeaveGroupInput;
    teachers?: Prisma.TeacherCreateNestedManyWithoutLeaveGroupInput;
};
export type LeaveGroupUncheckedCreateWithoutStaffInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    allocations?: Prisma.LeaveGroupAllocationUncheckedCreateNestedManyWithoutLeaveGroupInput;
    teachers?: Prisma.TeacherUncheckedCreateNestedManyWithoutLeaveGroupInput;
};
export type LeaveGroupCreateOrConnectWithoutStaffInput = {
    where: Prisma.LeaveGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveGroupCreateWithoutStaffInput, Prisma.LeaveGroupUncheckedCreateWithoutStaffInput>;
};
export type LeaveGroupUpsertWithoutStaffInput = {
    update: Prisma.XOR<Prisma.LeaveGroupUpdateWithoutStaffInput, Prisma.LeaveGroupUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.LeaveGroupCreateWithoutStaffInput, Prisma.LeaveGroupUncheckedCreateWithoutStaffInput>;
    where?: Prisma.LeaveGroupWhereInput;
};
export type LeaveGroupUpdateToOneWithWhereWithoutStaffInput = {
    where?: Prisma.LeaveGroupWhereInput;
    data: Prisma.XOR<Prisma.LeaveGroupUpdateWithoutStaffInput, Prisma.LeaveGroupUncheckedUpdateWithoutStaffInput>;
};
export type LeaveGroupUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutLeaveGroupsNestedInput;
    allocations?: Prisma.LeaveGroupAllocationUpdateManyWithoutLeaveGroupNestedInput;
    teachers?: Prisma.TeacherUpdateManyWithoutLeaveGroupNestedInput;
};
export type LeaveGroupUncheckedUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveGroupNestedInput;
    teachers?: Prisma.TeacherUncheckedUpdateManyWithoutLeaveGroupNestedInput;
};
export type LeaveGroupCreateWithoutAllocationsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutLeaveGroupsInput;
    teachers?: Prisma.TeacherCreateNestedManyWithoutLeaveGroupInput;
    staff?: Prisma.StaffCreateNestedManyWithoutLeaveGroupInput;
};
export type LeaveGroupUncheckedCreateWithoutAllocationsInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teachers?: Prisma.TeacherUncheckedCreateNestedManyWithoutLeaveGroupInput;
    staff?: Prisma.StaffUncheckedCreateNestedManyWithoutLeaveGroupInput;
};
export type LeaveGroupCreateOrConnectWithoutAllocationsInput = {
    where: Prisma.LeaveGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveGroupCreateWithoutAllocationsInput, Prisma.LeaveGroupUncheckedCreateWithoutAllocationsInput>;
};
export type LeaveGroupUpsertWithoutAllocationsInput = {
    update: Prisma.XOR<Prisma.LeaveGroupUpdateWithoutAllocationsInput, Prisma.LeaveGroupUncheckedUpdateWithoutAllocationsInput>;
    create: Prisma.XOR<Prisma.LeaveGroupCreateWithoutAllocationsInput, Prisma.LeaveGroupUncheckedCreateWithoutAllocationsInput>;
    where?: Prisma.LeaveGroupWhereInput;
};
export type LeaveGroupUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: Prisma.LeaveGroupWhereInput;
    data: Prisma.XOR<Prisma.LeaveGroupUpdateWithoutAllocationsInput, Prisma.LeaveGroupUncheckedUpdateWithoutAllocationsInput>;
};
export type LeaveGroupUpdateWithoutAllocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutLeaveGroupsNestedInput;
    teachers?: Prisma.TeacherUpdateManyWithoutLeaveGroupNestedInput;
    staff?: Prisma.StaffUpdateManyWithoutLeaveGroupNestedInput;
};
export type LeaveGroupUncheckedUpdateWithoutAllocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teachers?: Prisma.TeacherUncheckedUpdateManyWithoutLeaveGroupNestedInput;
    staff?: Prisma.StaffUncheckedUpdateManyWithoutLeaveGroupNestedInput;
};
export type LeaveGroupCreateManySchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaveGroupUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.LeaveGroupAllocationUpdateManyWithoutLeaveGroupNestedInput;
    teachers?: Prisma.TeacherUpdateManyWithoutLeaveGroupNestedInput;
    staff?: Prisma.StaffUpdateManyWithoutLeaveGroupNestedInput;
};
export type LeaveGroupUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.LeaveGroupAllocationUncheckedUpdateManyWithoutLeaveGroupNestedInput;
    teachers?: Prisma.TeacherUncheckedUpdateManyWithoutLeaveGroupNestedInput;
    staff?: Prisma.StaffUncheckedUpdateManyWithoutLeaveGroupNestedInput;
};
export type LeaveGroupUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveGroupCountOutputType = {
    allocations: number;
    teachers: number;
    staff: number;
};
export type LeaveGroupCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    allocations?: boolean | LeaveGroupCountOutputTypeCountAllocationsArgs;
    teachers?: boolean | LeaveGroupCountOutputTypeCountTeachersArgs;
    staff?: boolean | LeaveGroupCountOutputTypeCountStaffArgs;
};
export type LeaveGroupCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupCountOutputTypeSelect<ExtArgs> | null;
};
export type LeaveGroupCountOutputTypeCountAllocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveGroupAllocationWhereInput;
};
export type LeaveGroupCountOutputTypeCountTeachersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherWhereInput;
};
export type LeaveGroupCountOutputTypeCountStaffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffWhereInput;
};
export type LeaveGroupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    allocations?: boolean | Prisma.LeaveGroup$allocationsArgs<ExtArgs>;
    teachers?: boolean | Prisma.LeaveGroup$teachersArgs<ExtArgs>;
    staff?: boolean | Prisma.LeaveGroup$staffArgs<ExtArgs>;
    _count?: boolean | Prisma.LeaveGroupCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveGroup"]>;
export type LeaveGroupSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveGroup"]>;
export type LeaveGroupSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveGroup"]>;
export type LeaveGroupSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LeaveGroupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["leaveGroup"]>;
export type LeaveGroupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    allocations?: boolean | Prisma.LeaveGroup$allocationsArgs<ExtArgs>;
    teachers?: boolean | Prisma.LeaveGroup$teachersArgs<ExtArgs>;
    staff?: boolean | Prisma.LeaveGroup$staffArgs<ExtArgs>;
    _count?: boolean | Prisma.LeaveGroupCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LeaveGroupIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type LeaveGroupIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type $LeaveGroupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeaveGroup";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        allocations: Prisma.$LeaveGroupAllocationPayload<ExtArgs>[];
        teachers: Prisma.$TeacherPayload<ExtArgs>[];
        staff: Prisma.$StaffPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["leaveGroup"]>;
    composites: {};
};
export type LeaveGroupGetPayload<S extends boolean | null | undefined | LeaveGroupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload, S>;
export type LeaveGroupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeaveGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaveGroupCountAggregateInputType | true;
};
export interface LeaveGroupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeaveGroup'];
        meta: {
            name: 'LeaveGroup';
        };
    };
    findUnique<T extends LeaveGroupFindUniqueArgs>(args: Prisma.SelectSubset<T, LeaveGroupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeaveGroupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeaveGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeaveGroupFindFirstArgs>(args?: Prisma.SelectSubset<T, LeaveGroupFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeaveGroupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeaveGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeaveGroupFindManyArgs>(args?: Prisma.SelectSubset<T, LeaveGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeaveGroupCreateArgs>(args: Prisma.SelectSubset<T, LeaveGroupCreateArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeaveGroupCreateManyArgs>(args?: Prisma.SelectSubset<T, LeaveGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeaveGroupCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeaveGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeaveGroupDeleteArgs>(args: Prisma.SelectSubset<T, LeaveGroupDeleteArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeaveGroupUpdateArgs>(args: Prisma.SelectSubset<T, LeaveGroupUpdateArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeaveGroupDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeaveGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeaveGroupUpdateManyArgs>(args: Prisma.SelectSubset<T, LeaveGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeaveGroupUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeaveGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeaveGroupUpsertArgs>(args: Prisma.SelectSubset<T, LeaveGroupUpsertArgs<ExtArgs>>): Prisma.Prisma__LeaveGroupClient<runtime.Types.Result.GetResult<Prisma.$LeaveGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeaveGroupCountArgs>(args?: Prisma.Subset<T, LeaveGroupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeaveGroupCountAggregateOutputType> : number>;
    aggregate<T extends LeaveGroupAggregateArgs>(args: Prisma.Subset<T, LeaveGroupAggregateArgs>): Prisma.PrismaPromise<GetLeaveGroupAggregateType<T>>;
    groupBy<T extends LeaveGroupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeaveGroupGroupByArgs['orderBy'];
    } : {
        orderBy?: LeaveGroupGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeaveGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeaveGroupFieldRefs;
}
export interface Prisma__LeaveGroupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    allocations<T extends Prisma.LeaveGroup$allocationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveGroup$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveGroupAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    teachers<T extends Prisma.LeaveGroup$teachersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveGroup$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    staff<T extends Prisma.LeaveGroup$staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveGroup$staffArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeaveGroupFieldRefs {
    readonly id: Prisma.FieldRef<"LeaveGroup", 'String'>;
    readonly schoolId: Prisma.FieldRef<"LeaveGroup", 'String'>;
    readonly name: Prisma.FieldRef<"LeaveGroup", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LeaveGroup", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LeaveGroup", 'DateTime'>;
}
export type LeaveGroupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupInclude<ExtArgs> | null;
    where: Prisma.LeaveGroupWhereUniqueInput;
};
export type LeaveGroupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupInclude<ExtArgs> | null;
    where: Prisma.LeaveGroupWhereUniqueInput;
};
export type LeaveGroupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupInclude<ExtArgs> | null;
    where?: Prisma.LeaveGroupWhereInput;
    orderBy?: Prisma.LeaveGroupOrderByWithRelationInput | Prisma.LeaveGroupOrderByWithRelationInput[];
    cursor?: Prisma.LeaveGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveGroupScalarFieldEnum | Prisma.LeaveGroupScalarFieldEnum[];
};
export type LeaveGroupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupInclude<ExtArgs> | null;
    where?: Prisma.LeaveGroupWhereInput;
    orderBy?: Prisma.LeaveGroupOrderByWithRelationInput | Prisma.LeaveGroupOrderByWithRelationInput[];
    cursor?: Prisma.LeaveGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveGroupScalarFieldEnum | Prisma.LeaveGroupScalarFieldEnum[];
};
export type LeaveGroupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupInclude<ExtArgs> | null;
    where?: Prisma.LeaveGroupWhereInput;
    orderBy?: Prisma.LeaveGroupOrderByWithRelationInput | Prisma.LeaveGroupOrderByWithRelationInput[];
    cursor?: Prisma.LeaveGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveGroupScalarFieldEnum | Prisma.LeaveGroupScalarFieldEnum[];
};
export type LeaveGroupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveGroupCreateInput, Prisma.LeaveGroupUncheckedCreateInput>;
};
export type LeaveGroupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeaveGroupCreateManyInput | Prisma.LeaveGroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeaveGroupCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveGroupOmit<ExtArgs> | null;
    data: Prisma.LeaveGroupCreateManyInput | Prisma.LeaveGroupCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeaveGroupIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeaveGroupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveGroupUpdateInput, Prisma.LeaveGroupUncheckedUpdateInput>;
    where: Prisma.LeaveGroupWhereUniqueInput;
};
export type LeaveGroupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeaveGroupUpdateManyMutationInput, Prisma.LeaveGroupUncheckedUpdateManyInput>;
    where?: Prisma.LeaveGroupWhereInput;
    limit?: number;
};
export type LeaveGroupUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveGroupOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveGroupUpdateManyMutationInput, Prisma.LeaveGroupUncheckedUpdateManyInput>;
    where?: Prisma.LeaveGroupWhereInput;
    limit?: number;
    include?: Prisma.LeaveGroupIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeaveGroupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupInclude<ExtArgs> | null;
    where: Prisma.LeaveGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveGroupCreateInput, Prisma.LeaveGroupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeaveGroupUpdateInput, Prisma.LeaveGroupUncheckedUpdateInput>;
};
export type LeaveGroupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupInclude<ExtArgs> | null;
    where: Prisma.LeaveGroupWhereUniqueInput;
};
export type LeaveGroupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveGroupWhereInput;
    limit?: number;
};
export type LeaveGroup$allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaveGroup$teachersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
    orderBy?: Prisma.TeacherOrderByWithRelationInput | Prisma.TeacherOrderByWithRelationInput[];
    cursor?: Prisma.TeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherScalarFieldEnum | Prisma.TeacherScalarFieldEnum[];
};
export type LeaveGroup$staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffSelect<ExtArgs> | null;
    omit?: Prisma.StaffOmit<ExtArgs> | null;
    include?: Prisma.StaffInclude<ExtArgs> | null;
    where?: Prisma.StaffWhereInput;
    orderBy?: Prisma.StaffOrderByWithRelationInput | Prisma.StaffOrderByWithRelationInput[];
    cursor?: Prisma.StaffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StaffScalarFieldEnum | Prisma.StaffScalarFieldEnum[];
};
export type LeaveGroupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveGroupSelect<ExtArgs> | null;
    omit?: Prisma.LeaveGroupOmit<ExtArgs> | null;
    include?: Prisma.LeaveGroupInclude<ExtArgs> | null;
};
