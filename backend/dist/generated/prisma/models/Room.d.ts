import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RoomModel = runtime.Types.Result.DefaultSelection<Prisma.$RoomPayload>;
export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null;
    _avg: RoomAvgAggregateOutputType | null;
    _sum: RoomSumAggregateOutputType | null;
    _min: RoomMinAggregateOutputType | null;
    _max: RoomMaxAggregateOutputType | null;
};
export type RoomAvgAggregateOutputType = {
    capacity: number | null;
};
export type RoomSumAggregateOutputType = {
    capacity: number | null;
};
export type RoomMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    name: string | null;
    capacity: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RoomMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    name: string | null;
    capacity: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RoomCountAggregateOutputType = {
    id: number;
    schoolId: number;
    branchId: number;
    name: number;
    capacity: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RoomAvgAggregateInputType = {
    capacity?: true;
};
export type RoomSumAggregateInputType = {
    capacity?: true;
};
export type RoomMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    name?: true;
    capacity?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RoomMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    name?: true;
    capacity?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RoomCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    name?: true;
    capacity?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RoomAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RoomCountAggregateInputType;
    _avg?: RoomAvgAggregateInputType;
    _sum?: RoomSumAggregateInputType;
    _min?: RoomMinAggregateInputType;
    _max?: RoomMaxAggregateInputType;
};
export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
    [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRoom[P]> : Prisma.GetScalarType<T[P], AggregateRoom[P]>;
};
export type RoomGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithAggregationInput | Prisma.RoomOrderByWithAggregationInput[];
    by: Prisma.RoomScalarFieldEnum[] | Prisma.RoomScalarFieldEnum;
    having?: Prisma.RoomScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoomCountAggregateInputType | true;
    _avg?: RoomAvgAggregateInputType;
    _sum?: RoomSumAggregateInputType;
    _min?: RoomMinAggregateInputType;
    _max?: RoomMaxAggregateInputType;
};
export type RoomGroupByOutputType = {
    id: string;
    schoolId: string;
    branchId: string;
    name: string;
    capacity: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RoomCountAggregateOutputType | null;
    _avg: RoomAvgAggregateOutputType | null;
    _sum: RoomSumAggregateOutputType | null;
    _min: RoomMinAggregateOutputType | null;
    _max: RoomMaxAggregateOutputType | null;
};
export type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoomGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoomGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoomGroupByOutputType[P]>;
}>>;
export type RoomWhereInput = {
    AND?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    OR?: Prisma.RoomWhereInput[];
    NOT?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    id?: Prisma.StringFilter<"Room"> | string;
    schoolId?: Prisma.StringFilter<"Room"> | string;
    branchId?: Prisma.StringFilter<"Room"> | string;
    name?: Prisma.StringFilter<"Room"> | string;
    capacity?: Prisma.IntNullableFilter<"Room"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Room"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Room"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    examSchedules?: Prisma.ExamScheduleListRelationFilter;
};
export type RoomOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    branch?: Prisma.BranchOrderByWithRelationInput;
    examSchedules?: Prisma.ExamScheduleOrderByRelationAggregateInput;
};
export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    branchId_name?: Prisma.RoomBranchIdNameCompoundUniqueInput;
    AND?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    OR?: Prisma.RoomWhereInput[];
    NOT?: Prisma.RoomWhereInput | Prisma.RoomWhereInput[];
    schoolId?: Prisma.StringFilter<"Room"> | string;
    branchId?: Prisma.StringFilter<"Room"> | string;
    name?: Prisma.StringFilter<"Room"> | string;
    capacity?: Prisma.IntNullableFilter<"Room"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Room"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Room"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    examSchedules?: Prisma.ExamScheduleListRelationFilter;
}, "id" | "branchId_name">;
export type RoomOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RoomCountOrderByAggregateInput;
    _avg?: Prisma.RoomAvgOrderByAggregateInput;
    _max?: Prisma.RoomMaxOrderByAggregateInput;
    _min?: Prisma.RoomMinOrderByAggregateInput;
    _sum?: Prisma.RoomSumOrderByAggregateInput;
};
export type RoomScalarWhereWithAggregatesInput = {
    AND?: Prisma.RoomScalarWhereWithAggregatesInput | Prisma.RoomScalarWhereWithAggregatesInput[];
    OR?: Prisma.RoomScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RoomScalarWhereWithAggregatesInput | Prisma.RoomScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Room"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Room"> | string;
    branchId?: Prisma.StringWithAggregatesFilter<"Room"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Room"> | string;
    capacity?: Prisma.IntNullableWithAggregatesFilter<"Room"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Room"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Room"> | Date | string;
};
export type RoomCreateInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutRoomsInput;
    branch: Prisma.BranchCreateNestedOneWithoutRoomsInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutRoomInput;
};
export type RoomUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutRoomInput;
};
export type RoomUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutRoomsNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutRoomsNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutRoomNestedInput;
};
export type RoomUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutRoomNestedInput;
};
export type RoomCreateManyInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RoomUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomListRelationFilter = {
    every?: Prisma.RoomWhereInput;
    some?: Prisma.RoomWhereInput;
    none?: Prisma.RoomWhereInput;
};
export type RoomOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RoomBranchIdNameCompoundUniqueInput = {
    branchId: string;
    name: string;
};
export type RoomCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RoomAvgOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
};
export type RoomMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RoomMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RoomSumOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
};
export type RoomScalarRelationFilter = {
    is?: Prisma.RoomWhereInput;
    isNot?: Prisma.RoomWhereInput;
};
export type RoomCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutSchoolInput, Prisma.RoomUncheckedCreateWithoutSchoolInput> | Prisma.RoomCreateWithoutSchoolInput[] | Prisma.RoomUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutSchoolInput | Prisma.RoomCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.RoomCreateManySchoolInputEnvelope;
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
};
export type RoomUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutSchoolInput, Prisma.RoomUncheckedCreateWithoutSchoolInput> | Prisma.RoomCreateWithoutSchoolInput[] | Prisma.RoomUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutSchoolInput | Prisma.RoomCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.RoomCreateManySchoolInputEnvelope;
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
};
export type RoomUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutSchoolInput, Prisma.RoomUncheckedCreateWithoutSchoolInput> | Prisma.RoomCreateWithoutSchoolInput[] | Prisma.RoomUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutSchoolInput | Prisma.RoomCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.RoomUpsertWithWhereUniqueWithoutSchoolInput | Prisma.RoomUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.RoomCreateManySchoolInputEnvelope;
    set?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    disconnect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    delete?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    update?: Prisma.RoomUpdateWithWhereUniqueWithoutSchoolInput | Prisma.RoomUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.RoomUpdateManyWithWhereWithoutSchoolInput | Prisma.RoomUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
};
export type RoomUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutSchoolInput, Prisma.RoomUncheckedCreateWithoutSchoolInput> | Prisma.RoomCreateWithoutSchoolInput[] | Prisma.RoomUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutSchoolInput | Prisma.RoomCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.RoomUpsertWithWhereUniqueWithoutSchoolInput | Prisma.RoomUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.RoomCreateManySchoolInputEnvelope;
    set?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    disconnect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    delete?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    update?: Prisma.RoomUpdateWithWhereUniqueWithoutSchoolInput | Prisma.RoomUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.RoomUpdateManyWithWhereWithoutSchoolInput | Prisma.RoomUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
};
export type RoomCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutBranchInput, Prisma.RoomUncheckedCreateWithoutBranchInput> | Prisma.RoomCreateWithoutBranchInput[] | Prisma.RoomUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutBranchInput | Prisma.RoomCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.RoomCreateManyBranchInputEnvelope;
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
};
export type RoomUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutBranchInput, Prisma.RoomUncheckedCreateWithoutBranchInput> | Prisma.RoomCreateWithoutBranchInput[] | Prisma.RoomUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutBranchInput | Prisma.RoomCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.RoomCreateManyBranchInputEnvelope;
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
};
export type RoomUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutBranchInput, Prisma.RoomUncheckedCreateWithoutBranchInput> | Prisma.RoomCreateWithoutBranchInput[] | Prisma.RoomUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutBranchInput | Prisma.RoomCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.RoomUpsertWithWhereUniqueWithoutBranchInput | Prisma.RoomUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.RoomCreateManyBranchInputEnvelope;
    set?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    disconnect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    delete?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    update?: Prisma.RoomUpdateWithWhereUniqueWithoutBranchInput | Prisma.RoomUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.RoomUpdateManyWithWhereWithoutBranchInput | Prisma.RoomUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
};
export type RoomUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutBranchInput, Prisma.RoomUncheckedCreateWithoutBranchInput> | Prisma.RoomCreateWithoutBranchInput[] | Prisma.RoomUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutBranchInput | Prisma.RoomCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.RoomUpsertWithWhereUniqueWithoutBranchInput | Prisma.RoomUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.RoomCreateManyBranchInputEnvelope;
    set?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    disconnect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    delete?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    connect?: Prisma.RoomWhereUniqueInput | Prisma.RoomWhereUniqueInput[];
    update?: Prisma.RoomUpdateWithWhereUniqueWithoutBranchInput | Prisma.RoomUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.RoomUpdateManyWithWhereWithoutBranchInput | Prisma.RoomUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
};
export type RoomCreateNestedOneWithoutExamSchedulesInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutExamSchedulesInput, Prisma.RoomUncheckedCreateWithoutExamSchedulesInput>;
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutExamSchedulesInput;
    connect?: Prisma.RoomWhereUniqueInput;
};
export type RoomUpdateOneRequiredWithoutExamSchedulesNestedInput = {
    create?: Prisma.XOR<Prisma.RoomCreateWithoutExamSchedulesInput, Prisma.RoomUncheckedCreateWithoutExamSchedulesInput>;
    connectOrCreate?: Prisma.RoomCreateOrConnectWithoutExamSchedulesInput;
    upsert?: Prisma.RoomUpsertWithoutExamSchedulesInput;
    connect?: Prisma.RoomWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoomUpdateToOneWithWhereWithoutExamSchedulesInput, Prisma.RoomUpdateWithoutExamSchedulesInput>, Prisma.RoomUncheckedUpdateWithoutExamSchedulesInput>;
};
export type RoomCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch: Prisma.BranchCreateNestedOneWithoutRoomsInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutRoomInput;
};
export type RoomUncheckedCreateWithoutSchoolInput = {
    id?: string;
    branchId: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutRoomInput;
};
export type RoomCreateOrConnectWithoutSchoolInput = {
    where: Prisma.RoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomCreateWithoutSchoolInput, Prisma.RoomUncheckedCreateWithoutSchoolInput>;
};
export type RoomCreateManySchoolInputEnvelope = {
    data: Prisma.RoomCreateManySchoolInput | Prisma.RoomCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type RoomUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.RoomWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoomUpdateWithoutSchoolInput, Prisma.RoomUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.RoomCreateWithoutSchoolInput, Prisma.RoomUncheckedCreateWithoutSchoolInput>;
};
export type RoomUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.RoomWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoomUpdateWithoutSchoolInput, Prisma.RoomUncheckedUpdateWithoutSchoolInput>;
};
export type RoomUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.RoomScalarWhereInput;
    data: Prisma.XOR<Prisma.RoomUpdateManyMutationInput, Prisma.RoomUncheckedUpdateManyWithoutSchoolInput>;
};
export type RoomScalarWhereInput = {
    AND?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
    OR?: Prisma.RoomScalarWhereInput[];
    NOT?: Prisma.RoomScalarWhereInput | Prisma.RoomScalarWhereInput[];
    id?: Prisma.StringFilter<"Room"> | string;
    schoolId?: Prisma.StringFilter<"Room"> | string;
    branchId?: Prisma.StringFilter<"Room"> | string;
    name?: Prisma.StringFilter<"Room"> | string;
    capacity?: Prisma.IntNullableFilter<"Room"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Room"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Room"> | Date | string;
};
export type RoomCreateWithoutBranchInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutRoomsInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutRoomInput;
};
export type RoomUncheckedCreateWithoutBranchInput = {
    id?: string;
    schoolId: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutRoomInput;
};
export type RoomCreateOrConnectWithoutBranchInput = {
    where: Prisma.RoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomCreateWithoutBranchInput, Prisma.RoomUncheckedCreateWithoutBranchInput>;
};
export type RoomCreateManyBranchInputEnvelope = {
    data: Prisma.RoomCreateManyBranchInput | Prisma.RoomCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type RoomUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.RoomWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoomUpdateWithoutBranchInput, Prisma.RoomUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.RoomCreateWithoutBranchInput, Prisma.RoomUncheckedCreateWithoutBranchInput>;
};
export type RoomUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.RoomWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoomUpdateWithoutBranchInput, Prisma.RoomUncheckedUpdateWithoutBranchInput>;
};
export type RoomUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.RoomScalarWhereInput;
    data: Prisma.XOR<Prisma.RoomUpdateManyMutationInput, Prisma.RoomUncheckedUpdateManyWithoutBranchInput>;
};
export type RoomCreateWithoutExamSchedulesInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutRoomsInput;
    branch: Prisma.BranchCreateNestedOneWithoutRoomsInput;
};
export type RoomUncheckedCreateWithoutExamSchedulesInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RoomCreateOrConnectWithoutExamSchedulesInput = {
    where: Prisma.RoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomCreateWithoutExamSchedulesInput, Prisma.RoomUncheckedCreateWithoutExamSchedulesInput>;
};
export type RoomUpsertWithoutExamSchedulesInput = {
    update: Prisma.XOR<Prisma.RoomUpdateWithoutExamSchedulesInput, Prisma.RoomUncheckedUpdateWithoutExamSchedulesInput>;
    create: Prisma.XOR<Prisma.RoomCreateWithoutExamSchedulesInput, Prisma.RoomUncheckedCreateWithoutExamSchedulesInput>;
    where?: Prisma.RoomWhereInput;
};
export type RoomUpdateToOneWithWhereWithoutExamSchedulesInput = {
    where?: Prisma.RoomWhereInput;
    data: Prisma.XOR<Prisma.RoomUpdateWithoutExamSchedulesInput, Prisma.RoomUncheckedUpdateWithoutExamSchedulesInput>;
};
export type RoomUpdateWithoutExamSchedulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutRoomsNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutRoomsNestedInput;
};
export type RoomUncheckedUpdateWithoutExamSchedulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomCreateManySchoolInput = {
    id?: string;
    branchId: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RoomUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneRequiredWithoutRoomsNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutRoomNestedInput;
};
export type RoomUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutRoomNestedInput;
};
export type RoomUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomCreateManyBranchInput = {
    id?: string;
    schoolId: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RoomUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutRoomsNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutRoomNestedInput;
};
export type RoomUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutRoomNestedInput;
};
export type RoomUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoomCountOutputType = {
    examSchedules: number;
};
export type RoomCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    examSchedules?: boolean | RoomCountOutputTypeCountExamSchedulesArgs;
};
export type RoomCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomCountOutputTypeSelect<ExtArgs> | null;
};
export type RoomCountOutputTypeCountExamSchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamScheduleWhereInput;
};
export type RoomSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    capacity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    examSchedules?: boolean | Prisma.Room$examSchedulesArgs<ExtArgs>;
    _count?: boolean | Prisma.RoomCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["room"]>;
export type RoomSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    capacity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["room"]>;
export type RoomSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    capacity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["room"]>;
export type RoomSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    capacity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RoomOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "branchId" | "name" | "capacity" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>;
export type RoomInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    examSchedules?: boolean | Prisma.Room$examSchedulesArgs<ExtArgs>;
    _count?: boolean | Prisma.RoomCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RoomIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type RoomIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type $RoomPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Room";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        branch: Prisma.$BranchPayload<ExtArgs>;
        examSchedules: Prisma.$ExamSchedulePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        branchId: string;
        name: string;
        capacity: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["room"]>;
    composites: {};
};
export type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RoomPayload, S>;
export type RoomCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoomCountAggregateInputType | true;
};
export interface RoomDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Room'];
        meta: {
            name: 'Room';
        };
    };
    findUnique<T extends RoomFindUniqueArgs>(args: Prisma.SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RoomFindFirstArgs>(args?: Prisma.SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RoomFindManyArgs>(args?: Prisma.SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RoomCreateArgs>(args: Prisma.SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RoomCreateManyArgs>(args?: Prisma.SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RoomDeleteArgs>(args: Prisma.SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RoomUpdateArgs>(args: Prisma.SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RoomDeleteManyArgs>(args?: Prisma.SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RoomUpdateManyArgs>(args: Prisma.SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RoomUpsertArgs>(args: Prisma.SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RoomCountArgs>(args?: Prisma.Subset<T, RoomCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoomCountAggregateOutputType> : number>;
    aggregate<T extends RoomAggregateArgs>(args: Prisma.Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>;
    groupBy<T extends RoomGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RoomGroupByArgs['orderBy'];
    } : {
        orderBy?: RoomGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RoomFieldRefs;
}
export interface Prisma__RoomClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    branch<T extends Prisma.BranchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BranchDefaultArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    examSchedules<T extends Prisma.Room$examSchedulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Room$examSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RoomFieldRefs {
    readonly id: Prisma.FieldRef<"Room", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Room", 'String'>;
    readonly branchId: Prisma.FieldRef<"Room", 'String'>;
    readonly name: Prisma.FieldRef<"Room", 'String'>;
    readonly capacity: Prisma.FieldRef<"Room", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Room", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Room", 'DateTime'>;
}
export type RoomFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[];
};
export type RoomFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[];
};
export type RoomFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where?: Prisma.RoomWhereInput;
    orderBy?: Prisma.RoomOrderByWithRelationInput | Prisma.RoomOrderByWithRelationInput[];
    cursor?: Prisma.RoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomScalarFieldEnum | Prisma.RoomScalarFieldEnum[];
};
export type RoomCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoomCreateInput, Prisma.RoomUncheckedCreateInput>;
};
export type RoomCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RoomCreateManyInput | Prisma.RoomCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RoomCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    data: Prisma.RoomCreateManyInput | Prisma.RoomCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RoomIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RoomUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoomUpdateInput, Prisma.RoomUncheckedUpdateInput>;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RoomUpdateManyMutationInput, Prisma.RoomUncheckedUpdateManyInput>;
    where?: Prisma.RoomWhereInput;
    limit?: number;
};
export type RoomUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoomUpdateManyMutationInput, Prisma.RoomUncheckedUpdateManyInput>;
    where?: Prisma.RoomWhereInput;
    limit?: number;
    include?: Prisma.RoomIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RoomUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoomCreateInput, Prisma.RoomUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RoomUpdateInput, Prisma.RoomUncheckedUpdateInput>;
};
export type RoomDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
    where: Prisma.RoomWhereUniqueInput;
};
export type RoomDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoomWhereInput;
    limit?: number;
};
export type Room$examSchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ExamScheduleOmit<ExtArgs> | null;
    include?: Prisma.ExamScheduleInclude<ExtArgs> | null;
    where?: Prisma.ExamScheduleWhereInput;
    orderBy?: Prisma.ExamScheduleOrderByWithRelationInput | Prisma.ExamScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ExamScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamScheduleScalarFieldEnum | Prisma.ExamScheduleScalarFieldEnum[];
};
export type RoomDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoomSelect<ExtArgs> | null;
    omit?: Prisma.RoomOmit<ExtArgs> | null;
    include?: Prisma.RoomInclude<ExtArgs> | null;
};
