import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HostelModel = runtime.Types.Result.DefaultSelection<Prisma.$HostelPayload>;
export type AggregateHostel = {
    _count: HostelCountAggregateOutputType | null;
    _min: HostelMinAggregateOutputType | null;
    _max: HostelMaxAggregateOutputType | null;
};
export type HostelMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    name: string | null;
    wardenName: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HostelMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    name: string | null;
    wardenName: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HostelCountAggregateOutputType = {
    id: number;
    schoolId: number;
    branchId: number;
    name: number;
    wardenName: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type HostelMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    name?: true;
    wardenName?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HostelMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    name?: true;
    wardenName?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HostelCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    name?: true;
    wardenName?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type HostelAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HostelWhereInput;
    orderBy?: Prisma.HostelOrderByWithRelationInput | Prisma.HostelOrderByWithRelationInput[];
    cursor?: Prisma.HostelWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HostelCountAggregateInputType;
    _min?: HostelMinAggregateInputType;
    _max?: HostelMaxAggregateInputType;
};
export type GetHostelAggregateType<T extends HostelAggregateArgs> = {
    [P in keyof T & keyof AggregateHostel]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHostel[P]> : Prisma.GetScalarType<T[P], AggregateHostel[P]>;
};
export type HostelGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HostelWhereInput;
    orderBy?: Prisma.HostelOrderByWithAggregationInput | Prisma.HostelOrderByWithAggregationInput[];
    by: Prisma.HostelScalarFieldEnum[] | Prisma.HostelScalarFieldEnum;
    having?: Prisma.HostelScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HostelCountAggregateInputType | true;
    _min?: HostelMinAggregateInputType;
    _max?: HostelMaxAggregateInputType;
};
export type HostelGroupByOutputType = {
    id: string;
    schoolId: string;
    branchId: string;
    name: string;
    wardenName: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: HostelCountAggregateOutputType | null;
    _min: HostelMinAggregateOutputType | null;
    _max: HostelMaxAggregateOutputType | null;
};
export type GetHostelGroupByPayload<T extends HostelGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HostelGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HostelGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HostelGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HostelGroupByOutputType[P]>;
}>>;
export type HostelWhereInput = {
    AND?: Prisma.HostelWhereInput | Prisma.HostelWhereInput[];
    OR?: Prisma.HostelWhereInput[];
    NOT?: Prisma.HostelWhereInput | Prisma.HostelWhereInput[];
    id?: Prisma.StringFilter<"Hostel"> | string;
    schoolId?: Prisma.StringFilter<"Hostel"> | string;
    branchId?: Prisma.StringFilter<"Hostel"> | string;
    name?: Prisma.StringFilter<"Hostel"> | string;
    wardenName?: Prisma.StringNullableFilter<"Hostel"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Hostel"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Hostel"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    rooms?: Prisma.HostelRoomListRelationFilter;
};
export type HostelOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    wardenName?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    branch?: Prisma.BranchOrderByWithRelationInput;
    rooms?: Prisma.HostelRoomOrderByRelationAggregateInput;
};
export type HostelWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.HostelWhereInput | Prisma.HostelWhereInput[];
    OR?: Prisma.HostelWhereInput[];
    NOT?: Prisma.HostelWhereInput | Prisma.HostelWhereInput[];
    schoolId?: Prisma.StringFilter<"Hostel"> | string;
    branchId?: Prisma.StringFilter<"Hostel"> | string;
    name?: Prisma.StringFilter<"Hostel"> | string;
    wardenName?: Prisma.StringNullableFilter<"Hostel"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Hostel"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Hostel"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    rooms?: Prisma.HostelRoomListRelationFilter;
}, "id">;
export type HostelOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    wardenName?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.HostelCountOrderByAggregateInput;
    _max?: Prisma.HostelMaxOrderByAggregateInput;
    _min?: Prisma.HostelMinOrderByAggregateInput;
};
export type HostelScalarWhereWithAggregatesInput = {
    AND?: Prisma.HostelScalarWhereWithAggregatesInput | Prisma.HostelScalarWhereWithAggregatesInput[];
    OR?: Prisma.HostelScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HostelScalarWhereWithAggregatesInput | Prisma.HostelScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Hostel"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Hostel"> | string;
    branchId?: Prisma.StringWithAggregatesFilter<"Hostel"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Hostel"> | string;
    wardenName?: Prisma.StringNullableWithAggregatesFilter<"Hostel"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Hostel"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Hostel"> | Date | string;
};
export type HostelCreateInput = {
    id?: string;
    name: string;
    wardenName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutHostelsInput;
    branch: Prisma.BranchCreateNestedOneWithoutHostelsInput;
    rooms?: Prisma.HostelRoomCreateNestedManyWithoutHostelInput;
};
export type HostelUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    wardenName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rooms?: Prisma.HostelRoomUncheckedCreateNestedManyWithoutHostelInput;
};
export type HostelUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wardenName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutHostelsNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutHostelsNestedInput;
    rooms?: Prisma.HostelRoomUpdateManyWithoutHostelNestedInput;
};
export type HostelUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wardenName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rooms?: Prisma.HostelRoomUncheckedUpdateManyWithoutHostelNestedInput;
};
export type HostelCreateManyInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    wardenName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wardenName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wardenName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelListRelationFilter = {
    every?: Prisma.HostelWhereInput;
    some?: Prisma.HostelWhereInput;
    none?: Prisma.HostelWhereInput;
};
export type HostelOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HostelCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    wardenName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HostelMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    wardenName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HostelMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    wardenName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HostelScalarRelationFilter = {
    is?: Prisma.HostelWhereInput;
    isNot?: Prisma.HostelWhereInput;
};
export type HostelCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.HostelCreateWithoutSchoolInput, Prisma.HostelUncheckedCreateWithoutSchoolInput> | Prisma.HostelCreateWithoutSchoolInput[] | Prisma.HostelUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.HostelCreateOrConnectWithoutSchoolInput | Prisma.HostelCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.HostelCreateManySchoolInputEnvelope;
    connect?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
};
export type HostelUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.HostelCreateWithoutSchoolInput, Prisma.HostelUncheckedCreateWithoutSchoolInput> | Prisma.HostelCreateWithoutSchoolInput[] | Prisma.HostelUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.HostelCreateOrConnectWithoutSchoolInput | Prisma.HostelCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.HostelCreateManySchoolInputEnvelope;
    connect?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
};
export type HostelUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.HostelCreateWithoutSchoolInput, Prisma.HostelUncheckedCreateWithoutSchoolInput> | Prisma.HostelCreateWithoutSchoolInput[] | Prisma.HostelUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.HostelCreateOrConnectWithoutSchoolInput | Prisma.HostelCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.HostelUpsertWithWhereUniqueWithoutSchoolInput | Prisma.HostelUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.HostelCreateManySchoolInputEnvelope;
    set?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    disconnect?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    delete?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    connect?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    update?: Prisma.HostelUpdateWithWhereUniqueWithoutSchoolInput | Prisma.HostelUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.HostelUpdateManyWithWhereWithoutSchoolInput | Prisma.HostelUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.HostelScalarWhereInput | Prisma.HostelScalarWhereInput[];
};
export type HostelUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.HostelCreateWithoutSchoolInput, Prisma.HostelUncheckedCreateWithoutSchoolInput> | Prisma.HostelCreateWithoutSchoolInput[] | Prisma.HostelUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.HostelCreateOrConnectWithoutSchoolInput | Prisma.HostelCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.HostelUpsertWithWhereUniqueWithoutSchoolInput | Prisma.HostelUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.HostelCreateManySchoolInputEnvelope;
    set?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    disconnect?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    delete?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    connect?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    update?: Prisma.HostelUpdateWithWhereUniqueWithoutSchoolInput | Prisma.HostelUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.HostelUpdateManyWithWhereWithoutSchoolInput | Prisma.HostelUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.HostelScalarWhereInput | Prisma.HostelScalarWhereInput[];
};
export type HostelCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.HostelCreateWithoutBranchInput, Prisma.HostelUncheckedCreateWithoutBranchInput> | Prisma.HostelCreateWithoutBranchInput[] | Prisma.HostelUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.HostelCreateOrConnectWithoutBranchInput | Prisma.HostelCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.HostelCreateManyBranchInputEnvelope;
    connect?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
};
export type HostelUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.HostelCreateWithoutBranchInput, Prisma.HostelUncheckedCreateWithoutBranchInput> | Prisma.HostelCreateWithoutBranchInput[] | Prisma.HostelUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.HostelCreateOrConnectWithoutBranchInput | Prisma.HostelCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.HostelCreateManyBranchInputEnvelope;
    connect?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
};
export type HostelUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.HostelCreateWithoutBranchInput, Prisma.HostelUncheckedCreateWithoutBranchInput> | Prisma.HostelCreateWithoutBranchInput[] | Prisma.HostelUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.HostelCreateOrConnectWithoutBranchInput | Prisma.HostelCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.HostelUpsertWithWhereUniqueWithoutBranchInput | Prisma.HostelUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.HostelCreateManyBranchInputEnvelope;
    set?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    disconnect?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    delete?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    connect?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    update?: Prisma.HostelUpdateWithWhereUniqueWithoutBranchInput | Prisma.HostelUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.HostelUpdateManyWithWhereWithoutBranchInput | Prisma.HostelUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.HostelScalarWhereInput | Prisma.HostelScalarWhereInput[];
};
export type HostelUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.HostelCreateWithoutBranchInput, Prisma.HostelUncheckedCreateWithoutBranchInput> | Prisma.HostelCreateWithoutBranchInput[] | Prisma.HostelUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.HostelCreateOrConnectWithoutBranchInput | Prisma.HostelCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.HostelUpsertWithWhereUniqueWithoutBranchInput | Prisma.HostelUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.HostelCreateManyBranchInputEnvelope;
    set?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    disconnect?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    delete?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    connect?: Prisma.HostelWhereUniqueInput | Prisma.HostelWhereUniqueInput[];
    update?: Prisma.HostelUpdateWithWhereUniqueWithoutBranchInput | Prisma.HostelUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.HostelUpdateManyWithWhereWithoutBranchInput | Prisma.HostelUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.HostelScalarWhereInput | Prisma.HostelScalarWhereInput[];
};
export type HostelCreateNestedOneWithoutRoomsInput = {
    create?: Prisma.XOR<Prisma.HostelCreateWithoutRoomsInput, Prisma.HostelUncheckedCreateWithoutRoomsInput>;
    connectOrCreate?: Prisma.HostelCreateOrConnectWithoutRoomsInput;
    connect?: Prisma.HostelWhereUniqueInput;
};
export type HostelUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: Prisma.XOR<Prisma.HostelCreateWithoutRoomsInput, Prisma.HostelUncheckedCreateWithoutRoomsInput>;
    connectOrCreate?: Prisma.HostelCreateOrConnectWithoutRoomsInput;
    upsert?: Prisma.HostelUpsertWithoutRoomsInput;
    connect?: Prisma.HostelWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HostelUpdateToOneWithWhereWithoutRoomsInput, Prisma.HostelUpdateWithoutRoomsInput>, Prisma.HostelUncheckedUpdateWithoutRoomsInput>;
};
export type HostelCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    wardenName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch: Prisma.BranchCreateNestedOneWithoutHostelsInput;
    rooms?: Prisma.HostelRoomCreateNestedManyWithoutHostelInput;
};
export type HostelUncheckedCreateWithoutSchoolInput = {
    id?: string;
    branchId: string;
    name: string;
    wardenName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rooms?: Prisma.HostelRoomUncheckedCreateNestedManyWithoutHostelInput;
};
export type HostelCreateOrConnectWithoutSchoolInput = {
    where: Prisma.HostelWhereUniqueInput;
    create: Prisma.XOR<Prisma.HostelCreateWithoutSchoolInput, Prisma.HostelUncheckedCreateWithoutSchoolInput>;
};
export type HostelCreateManySchoolInputEnvelope = {
    data: Prisma.HostelCreateManySchoolInput | Prisma.HostelCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type HostelUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.HostelWhereUniqueInput;
    update: Prisma.XOR<Prisma.HostelUpdateWithoutSchoolInput, Prisma.HostelUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.HostelCreateWithoutSchoolInput, Prisma.HostelUncheckedCreateWithoutSchoolInput>;
};
export type HostelUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.HostelWhereUniqueInput;
    data: Prisma.XOR<Prisma.HostelUpdateWithoutSchoolInput, Prisma.HostelUncheckedUpdateWithoutSchoolInput>;
};
export type HostelUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.HostelScalarWhereInput;
    data: Prisma.XOR<Prisma.HostelUpdateManyMutationInput, Prisma.HostelUncheckedUpdateManyWithoutSchoolInput>;
};
export type HostelScalarWhereInput = {
    AND?: Prisma.HostelScalarWhereInput | Prisma.HostelScalarWhereInput[];
    OR?: Prisma.HostelScalarWhereInput[];
    NOT?: Prisma.HostelScalarWhereInput | Prisma.HostelScalarWhereInput[];
    id?: Prisma.StringFilter<"Hostel"> | string;
    schoolId?: Prisma.StringFilter<"Hostel"> | string;
    branchId?: Prisma.StringFilter<"Hostel"> | string;
    name?: Prisma.StringFilter<"Hostel"> | string;
    wardenName?: Prisma.StringNullableFilter<"Hostel"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Hostel"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Hostel"> | Date | string;
};
export type HostelCreateWithoutBranchInput = {
    id?: string;
    name: string;
    wardenName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutHostelsInput;
    rooms?: Prisma.HostelRoomCreateNestedManyWithoutHostelInput;
};
export type HostelUncheckedCreateWithoutBranchInput = {
    id?: string;
    schoolId: string;
    name: string;
    wardenName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rooms?: Prisma.HostelRoomUncheckedCreateNestedManyWithoutHostelInput;
};
export type HostelCreateOrConnectWithoutBranchInput = {
    where: Prisma.HostelWhereUniqueInput;
    create: Prisma.XOR<Prisma.HostelCreateWithoutBranchInput, Prisma.HostelUncheckedCreateWithoutBranchInput>;
};
export type HostelCreateManyBranchInputEnvelope = {
    data: Prisma.HostelCreateManyBranchInput | Prisma.HostelCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type HostelUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.HostelWhereUniqueInput;
    update: Prisma.XOR<Prisma.HostelUpdateWithoutBranchInput, Prisma.HostelUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.HostelCreateWithoutBranchInput, Prisma.HostelUncheckedCreateWithoutBranchInput>;
};
export type HostelUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.HostelWhereUniqueInput;
    data: Prisma.XOR<Prisma.HostelUpdateWithoutBranchInput, Prisma.HostelUncheckedUpdateWithoutBranchInput>;
};
export type HostelUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.HostelScalarWhereInput;
    data: Prisma.XOR<Prisma.HostelUpdateManyMutationInput, Prisma.HostelUncheckedUpdateManyWithoutBranchInput>;
};
export type HostelCreateWithoutRoomsInput = {
    id?: string;
    name: string;
    wardenName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutHostelsInput;
    branch: Prisma.BranchCreateNestedOneWithoutHostelsInput;
};
export type HostelUncheckedCreateWithoutRoomsInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    wardenName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelCreateOrConnectWithoutRoomsInput = {
    where: Prisma.HostelWhereUniqueInput;
    create: Prisma.XOR<Prisma.HostelCreateWithoutRoomsInput, Prisma.HostelUncheckedCreateWithoutRoomsInput>;
};
export type HostelUpsertWithoutRoomsInput = {
    update: Prisma.XOR<Prisma.HostelUpdateWithoutRoomsInput, Prisma.HostelUncheckedUpdateWithoutRoomsInput>;
    create: Prisma.XOR<Prisma.HostelCreateWithoutRoomsInput, Prisma.HostelUncheckedCreateWithoutRoomsInput>;
    where?: Prisma.HostelWhereInput;
};
export type HostelUpdateToOneWithWhereWithoutRoomsInput = {
    where?: Prisma.HostelWhereInput;
    data: Prisma.XOR<Prisma.HostelUpdateWithoutRoomsInput, Prisma.HostelUncheckedUpdateWithoutRoomsInput>;
};
export type HostelUpdateWithoutRoomsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wardenName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutHostelsNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutHostelsNestedInput;
};
export type HostelUncheckedUpdateWithoutRoomsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wardenName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelCreateManySchoolInput = {
    id?: string;
    branchId: string;
    name: string;
    wardenName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wardenName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneRequiredWithoutHostelsNestedInput;
    rooms?: Prisma.HostelRoomUpdateManyWithoutHostelNestedInput;
};
export type HostelUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wardenName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rooms?: Prisma.HostelRoomUncheckedUpdateManyWithoutHostelNestedInput;
};
export type HostelUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wardenName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelCreateManyBranchInput = {
    id?: string;
    schoolId: string;
    name: string;
    wardenName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wardenName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutHostelsNestedInput;
    rooms?: Prisma.HostelRoomUpdateManyWithoutHostelNestedInput;
};
export type HostelUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wardenName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rooms?: Prisma.HostelRoomUncheckedUpdateManyWithoutHostelNestedInput;
};
export type HostelUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    wardenName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelCountOutputType = {
    rooms: number;
};
export type HostelCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rooms?: boolean | HostelCountOutputTypeCountRoomsArgs;
};
export type HostelCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelCountOutputTypeSelect<ExtArgs> | null;
};
export type HostelCountOutputTypeCountRoomsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HostelRoomWhereInput;
};
export type HostelSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    wardenName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    rooms?: boolean | Prisma.Hostel$roomsArgs<ExtArgs>;
    _count?: boolean | Prisma.HostelCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hostel"]>;
export type HostelSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    wardenName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hostel"]>;
export type HostelSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    wardenName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hostel"]>;
export type HostelSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    wardenName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type HostelOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "branchId" | "name" | "wardenName" | "createdAt" | "updatedAt", ExtArgs["result"]["hostel"]>;
export type HostelInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    rooms?: boolean | Prisma.Hostel$roomsArgs<ExtArgs>;
    _count?: boolean | Prisma.HostelCountOutputTypeDefaultArgs<ExtArgs>;
};
export type HostelIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type HostelIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type $HostelPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Hostel";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        branch: Prisma.$BranchPayload<ExtArgs>;
        rooms: Prisma.$HostelRoomPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        branchId: string;
        name: string;
        wardenName: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["hostel"]>;
    composites: {};
};
export type HostelGetPayload<S extends boolean | null | undefined | HostelDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HostelPayload, S>;
export type HostelCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HostelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HostelCountAggregateInputType | true;
};
export interface HostelDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Hostel'];
        meta: {
            name: 'Hostel';
        };
    };
    findUnique<T extends HostelFindUniqueArgs>(args: Prisma.SelectSubset<T, HostelFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HostelClient<runtime.Types.Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HostelFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HostelFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HostelClient<runtime.Types.Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HostelFindFirstArgs>(args?: Prisma.SelectSubset<T, HostelFindFirstArgs<ExtArgs>>): Prisma.Prisma__HostelClient<runtime.Types.Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HostelFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HostelFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HostelClient<runtime.Types.Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HostelFindManyArgs>(args?: Prisma.SelectSubset<T, HostelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HostelCreateArgs>(args: Prisma.SelectSubset<T, HostelCreateArgs<ExtArgs>>): Prisma.Prisma__HostelClient<runtime.Types.Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HostelCreateManyArgs>(args?: Prisma.SelectSubset<T, HostelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HostelCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HostelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HostelDeleteArgs>(args: Prisma.SelectSubset<T, HostelDeleteArgs<ExtArgs>>): Prisma.Prisma__HostelClient<runtime.Types.Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HostelUpdateArgs>(args: Prisma.SelectSubset<T, HostelUpdateArgs<ExtArgs>>): Prisma.Prisma__HostelClient<runtime.Types.Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HostelDeleteManyArgs>(args?: Prisma.SelectSubset<T, HostelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HostelUpdateManyArgs>(args: Prisma.SelectSubset<T, HostelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HostelUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HostelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HostelUpsertArgs>(args: Prisma.SelectSubset<T, HostelUpsertArgs<ExtArgs>>): Prisma.Prisma__HostelClient<runtime.Types.Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HostelCountArgs>(args?: Prisma.Subset<T, HostelCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HostelCountAggregateOutputType> : number>;
    aggregate<T extends HostelAggregateArgs>(args: Prisma.Subset<T, HostelAggregateArgs>): Prisma.PrismaPromise<GetHostelAggregateType<T>>;
    groupBy<T extends HostelGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HostelGroupByArgs['orderBy'];
    } : {
        orderBy?: HostelGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HostelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHostelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HostelFieldRefs;
}
export interface Prisma__HostelClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    branch<T extends Prisma.BranchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BranchDefaultArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rooms<T extends Prisma.Hostel$roomsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Hostel$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HostelFieldRefs {
    readonly id: Prisma.FieldRef<"Hostel", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Hostel", 'String'>;
    readonly branchId: Prisma.FieldRef<"Hostel", 'String'>;
    readonly name: Prisma.FieldRef<"Hostel", 'String'>;
    readonly wardenName: Prisma.FieldRef<"Hostel", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Hostel", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Hostel", 'DateTime'>;
}
export type HostelFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelSelect<ExtArgs> | null;
    omit?: Prisma.HostelOmit<ExtArgs> | null;
    include?: Prisma.HostelInclude<ExtArgs> | null;
    where: Prisma.HostelWhereUniqueInput;
};
export type HostelFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelSelect<ExtArgs> | null;
    omit?: Prisma.HostelOmit<ExtArgs> | null;
    include?: Prisma.HostelInclude<ExtArgs> | null;
    where: Prisma.HostelWhereUniqueInput;
};
export type HostelFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelSelect<ExtArgs> | null;
    omit?: Prisma.HostelOmit<ExtArgs> | null;
    include?: Prisma.HostelInclude<ExtArgs> | null;
    where?: Prisma.HostelWhereInput;
    orderBy?: Prisma.HostelOrderByWithRelationInput | Prisma.HostelOrderByWithRelationInput[];
    cursor?: Prisma.HostelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HostelScalarFieldEnum | Prisma.HostelScalarFieldEnum[];
};
export type HostelFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelSelect<ExtArgs> | null;
    omit?: Prisma.HostelOmit<ExtArgs> | null;
    include?: Prisma.HostelInclude<ExtArgs> | null;
    where?: Prisma.HostelWhereInput;
    orderBy?: Prisma.HostelOrderByWithRelationInput | Prisma.HostelOrderByWithRelationInput[];
    cursor?: Prisma.HostelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HostelScalarFieldEnum | Prisma.HostelScalarFieldEnum[];
};
export type HostelFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelSelect<ExtArgs> | null;
    omit?: Prisma.HostelOmit<ExtArgs> | null;
    include?: Prisma.HostelInclude<ExtArgs> | null;
    where?: Prisma.HostelWhereInput;
    orderBy?: Prisma.HostelOrderByWithRelationInput | Prisma.HostelOrderByWithRelationInput[];
    cursor?: Prisma.HostelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HostelScalarFieldEnum | Prisma.HostelScalarFieldEnum[];
};
export type HostelCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelSelect<ExtArgs> | null;
    omit?: Prisma.HostelOmit<ExtArgs> | null;
    include?: Prisma.HostelInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HostelCreateInput, Prisma.HostelUncheckedCreateInput>;
};
export type HostelCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HostelCreateManyInput | Prisma.HostelCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HostelCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HostelOmit<ExtArgs> | null;
    data: Prisma.HostelCreateManyInput | Prisma.HostelCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HostelIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HostelUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelSelect<ExtArgs> | null;
    omit?: Prisma.HostelOmit<ExtArgs> | null;
    include?: Prisma.HostelInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HostelUpdateInput, Prisma.HostelUncheckedUpdateInput>;
    where: Prisma.HostelWhereUniqueInput;
};
export type HostelUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HostelUpdateManyMutationInput, Prisma.HostelUncheckedUpdateManyInput>;
    where?: Prisma.HostelWhereInput;
    limit?: number;
};
export type HostelUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HostelOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HostelUpdateManyMutationInput, Prisma.HostelUncheckedUpdateManyInput>;
    where?: Prisma.HostelWhereInput;
    limit?: number;
    include?: Prisma.HostelIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HostelUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelSelect<ExtArgs> | null;
    omit?: Prisma.HostelOmit<ExtArgs> | null;
    include?: Prisma.HostelInclude<ExtArgs> | null;
    where: Prisma.HostelWhereUniqueInput;
    create: Prisma.XOR<Prisma.HostelCreateInput, Prisma.HostelUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HostelUpdateInput, Prisma.HostelUncheckedUpdateInput>;
};
export type HostelDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelSelect<ExtArgs> | null;
    omit?: Prisma.HostelOmit<ExtArgs> | null;
    include?: Prisma.HostelInclude<ExtArgs> | null;
    where: Prisma.HostelWhereUniqueInput;
};
export type HostelDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HostelWhereInput;
    limit?: number;
};
export type Hostel$roomsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelect<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    include?: Prisma.HostelRoomInclude<ExtArgs> | null;
    where?: Prisma.HostelRoomWhereInput;
    orderBy?: Prisma.HostelRoomOrderByWithRelationInput | Prisma.HostelRoomOrderByWithRelationInput[];
    cursor?: Prisma.HostelRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HostelRoomScalarFieldEnum | Prisma.HostelRoomScalarFieldEnum[];
};
export type HostelDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelSelect<ExtArgs> | null;
    omit?: Prisma.HostelOmit<ExtArgs> | null;
    include?: Prisma.HostelInclude<ExtArgs> | null;
};
