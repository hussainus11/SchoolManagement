import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HostelAllocationModel = runtime.Types.Result.DefaultSelection<Prisma.$HostelAllocationPayload>;
export type AggregateHostelAllocation = {
    _count: HostelAllocationCountAggregateOutputType | null;
    _avg: HostelAllocationAvgAggregateOutputType | null;
    _sum: HostelAllocationSumAggregateOutputType | null;
    _min: HostelAllocationMinAggregateOutputType | null;
    _max: HostelAllocationMaxAggregateOutputType | null;
};
export type HostelAllocationAvgAggregateOutputType = {
    bedNumber: number | null;
};
export type HostelAllocationSumAggregateOutputType = {
    bedNumber: number | null;
};
export type HostelAllocationMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    roomId: string | null;
    studentId: string | null;
    bedNumber: number | null;
    allocatedDate: Date | null;
    vacatedDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HostelAllocationMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    roomId: string | null;
    studentId: string | null;
    bedNumber: number | null;
    allocatedDate: Date | null;
    vacatedDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HostelAllocationCountAggregateOutputType = {
    id: number;
    schoolId: number;
    roomId: number;
    studentId: number;
    bedNumber: number;
    allocatedDate: number;
    vacatedDate: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type HostelAllocationAvgAggregateInputType = {
    bedNumber?: true;
};
export type HostelAllocationSumAggregateInputType = {
    bedNumber?: true;
};
export type HostelAllocationMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    roomId?: true;
    studentId?: true;
    bedNumber?: true;
    allocatedDate?: true;
    vacatedDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HostelAllocationMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    roomId?: true;
    studentId?: true;
    bedNumber?: true;
    allocatedDate?: true;
    vacatedDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HostelAllocationCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    roomId?: true;
    studentId?: true;
    bedNumber?: true;
    allocatedDate?: true;
    vacatedDate?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type HostelAllocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HostelAllocationWhereInput;
    orderBy?: Prisma.HostelAllocationOrderByWithRelationInput | Prisma.HostelAllocationOrderByWithRelationInput[];
    cursor?: Prisma.HostelAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HostelAllocationCountAggregateInputType;
    _avg?: HostelAllocationAvgAggregateInputType;
    _sum?: HostelAllocationSumAggregateInputType;
    _min?: HostelAllocationMinAggregateInputType;
    _max?: HostelAllocationMaxAggregateInputType;
};
export type GetHostelAllocationAggregateType<T extends HostelAllocationAggregateArgs> = {
    [P in keyof T & keyof AggregateHostelAllocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHostelAllocation[P]> : Prisma.GetScalarType<T[P], AggregateHostelAllocation[P]>;
};
export type HostelAllocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HostelAllocationWhereInput;
    orderBy?: Prisma.HostelAllocationOrderByWithAggregationInput | Prisma.HostelAllocationOrderByWithAggregationInput[];
    by: Prisma.HostelAllocationScalarFieldEnum[] | Prisma.HostelAllocationScalarFieldEnum;
    having?: Prisma.HostelAllocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HostelAllocationCountAggregateInputType | true;
    _avg?: HostelAllocationAvgAggregateInputType;
    _sum?: HostelAllocationSumAggregateInputType;
    _min?: HostelAllocationMinAggregateInputType;
    _max?: HostelAllocationMaxAggregateInputType;
};
export type HostelAllocationGroupByOutputType = {
    id: string;
    schoolId: string;
    roomId: string;
    studentId: string;
    bedNumber: number | null;
    allocatedDate: Date;
    vacatedDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: HostelAllocationCountAggregateOutputType | null;
    _avg: HostelAllocationAvgAggregateOutputType | null;
    _sum: HostelAllocationSumAggregateOutputType | null;
    _min: HostelAllocationMinAggregateOutputType | null;
    _max: HostelAllocationMaxAggregateOutputType | null;
};
export type GetHostelAllocationGroupByPayload<T extends HostelAllocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HostelAllocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HostelAllocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HostelAllocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HostelAllocationGroupByOutputType[P]>;
}>>;
export type HostelAllocationWhereInput = {
    AND?: Prisma.HostelAllocationWhereInput | Prisma.HostelAllocationWhereInput[];
    OR?: Prisma.HostelAllocationWhereInput[];
    NOT?: Prisma.HostelAllocationWhereInput | Prisma.HostelAllocationWhereInput[];
    id?: Prisma.StringFilter<"HostelAllocation"> | string;
    schoolId?: Prisma.StringFilter<"HostelAllocation"> | string;
    roomId?: Prisma.StringFilter<"HostelAllocation"> | string;
    studentId?: Prisma.StringFilter<"HostelAllocation"> | string;
    bedNumber?: Prisma.IntNullableFilter<"HostelAllocation"> | number | null;
    allocatedDate?: Prisma.DateTimeFilter<"HostelAllocation"> | Date | string;
    vacatedDate?: Prisma.DateTimeNullableFilter<"HostelAllocation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"HostelAllocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HostelAllocation"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    room?: Prisma.XOR<Prisma.HostelRoomScalarRelationFilter, Prisma.HostelRoomWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
};
export type HostelAllocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    bedNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    allocatedDate?: Prisma.SortOrder;
    vacatedDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    room?: Prisma.HostelRoomOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
};
export type HostelAllocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.HostelAllocationWhereInput | Prisma.HostelAllocationWhereInput[];
    OR?: Prisma.HostelAllocationWhereInput[];
    NOT?: Prisma.HostelAllocationWhereInput | Prisma.HostelAllocationWhereInput[];
    schoolId?: Prisma.StringFilter<"HostelAllocation"> | string;
    roomId?: Prisma.StringFilter<"HostelAllocation"> | string;
    studentId?: Prisma.StringFilter<"HostelAllocation"> | string;
    bedNumber?: Prisma.IntNullableFilter<"HostelAllocation"> | number | null;
    allocatedDate?: Prisma.DateTimeFilter<"HostelAllocation"> | Date | string;
    vacatedDate?: Prisma.DateTimeNullableFilter<"HostelAllocation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"HostelAllocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HostelAllocation"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    room?: Prisma.XOR<Prisma.HostelRoomScalarRelationFilter, Prisma.HostelRoomWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
}, "id">;
export type HostelAllocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    bedNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    allocatedDate?: Prisma.SortOrder;
    vacatedDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.HostelAllocationCountOrderByAggregateInput;
    _avg?: Prisma.HostelAllocationAvgOrderByAggregateInput;
    _max?: Prisma.HostelAllocationMaxOrderByAggregateInput;
    _min?: Prisma.HostelAllocationMinOrderByAggregateInput;
    _sum?: Prisma.HostelAllocationSumOrderByAggregateInput;
};
export type HostelAllocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.HostelAllocationScalarWhereWithAggregatesInput | Prisma.HostelAllocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.HostelAllocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HostelAllocationScalarWhereWithAggregatesInput | Prisma.HostelAllocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"HostelAllocation"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"HostelAllocation"> | string;
    roomId?: Prisma.StringWithAggregatesFilter<"HostelAllocation"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"HostelAllocation"> | string;
    bedNumber?: Prisma.IntNullableWithAggregatesFilter<"HostelAllocation"> | number | null;
    allocatedDate?: Prisma.DateTimeWithAggregatesFilter<"HostelAllocation"> | Date | string;
    vacatedDate?: Prisma.DateTimeNullableWithAggregatesFilter<"HostelAllocation"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"HostelAllocation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"HostelAllocation"> | Date | string;
};
export type HostelAllocationCreateInput = {
    id?: string;
    bedNumber?: number | null;
    allocatedDate?: Date | string;
    vacatedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutHostelAllocationsInput;
    room: Prisma.HostelRoomCreateNestedOneWithoutAllocationsInput;
    student: Prisma.StudentCreateNestedOneWithoutHostelAllocationsInput;
};
export type HostelAllocationUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    roomId: string;
    studentId: string;
    bedNumber?: number | null;
    allocatedDate?: Date | string;
    vacatedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelAllocationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutHostelAllocationsNestedInput;
    room?: Prisma.HostelRoomUpdateOneRequiredWithoutAllocationsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutHostelAllocationsNestedInput;
};
export type HostelAllocationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelAllocationCreateManyInput = {
    id?: string;
    schoolId: string;
    roomId: string;
    studentId: string;
    bedNumber?: number | null;
    allocatedDate?: Date | string;
    vacatedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelAllocationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelAllocationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelAllocationListRelationFilter = {
    every?: Prisma.HostelAllocationWhereInput;
    some?: Prisma.HostelAllocationWhereInput;
    none?: Prisma.HostelAllocationWhereInput;
};
export type HostelAllocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HostelAllocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    bedNumber?: Prisma.SortOrder;
    allocatedDate?: Prisma.SortOrder;
    vacatedDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HostelAllocationAvgOrderByAggregateInput = {
    bedNumber?: Prisma.SortOrder;
};
export type HostelAllocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    bedNumber?: Prisma.SortOrder;
    allocatedDate?: Prisma.SortOrder;
    vacatedDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HostelAllocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    bedNumber?: Prisma.SortOrder;
    allocatedDate?: Prisma.SortOrder;
    vacatedDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HostelAllocationSumOrderByAggregateInput = {
    bedNumber?: Prisma.SortOrder;
};
export type HostelAllocationCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.HostelAllocationCreateWithoutSchoolInput, Prisma.HostelAllocationUncheckedCreateWithoutSchoolInput> | Prisma.HostelAllocationCreateWithoutSchoolInput[] | Prisma.HostelAllocationUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.HostelAllocationCreateOrConnectWithoutSchoolInput | Prisma.HostelAllocationCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.HostelAllocationCreateManySchoolInputEnvelope;
    connect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
};
export type HostelAllocationUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.HostelAllocationCreateWithoutSchoolInput, Prisma.HostelAllocationUncheckedCreateWithoutSchoolInput> | Prisma.HostelAllocationCreateWithoutSchoolInput[] | Prisma.HostelAllocationUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.HostelAllocationCreateOrConnectWithoutSchoolInput | Prisma.HostelAllocationCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.HostelAllocationCreateManySchoolInputEnvelope;
    connect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
};
export type HostelAllocationUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.HostelAllocationCreateWithoutSchoolInput, Prisma.HostelAllocationUncheckedCreateWithoutSchoolInput> | Prisma.HostelAllocationCreateWithoutSchoolInput[] | Prisma.HostelAllocationUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.HostelAllocationCreateOrConnectWithoutSchoolInput | Prisma.HostelAllocationCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.HostelAllocationUpsertWithWhereUniqueWithoutSchoolInput | Prisma.HostelAllocationUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.HostelAllocationCreateManySchoolInputEnvelope;
    set?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    disconnect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    delete?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    connect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    update?: Prisma.HostelAllocationUpdateWithWhereUniqueWithoutSchoolInput | Prisma.HostelAllocationUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.HostelAllocationUpdateManyWithWhereWithoutSchoolInput | Prisma.HostelAllocationUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.HostelAllocationScalarWhereInput | Prisma.HostelAllocationScalarWhereInput[];
};
export type HostelAllocationUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.HostelAllocationCreateWithoutSchoolInput, Prisma.HostelAllocationUncheckedCreateWithoutSchoolInput> | Prisma.HostelAllocationCreateWithoutSchoolInput[] | Prisma.HostelAllocationUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.HostelAllocationCreateOrConnectWithoutSchoolInput | Prisma.HostelAllocationCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.HostelAllocationUpsertWithWhereUniqueWithoutSchoolInput | Prisma.HostelAllocationUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.HostelAllocationCreateManySchoolInputEnvelope;
    set?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    disconnect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    delete?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    connect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    update?: Prisma.HostelAllocationUpdateWithWhereUniqueWithoutSchoolInput | Prisma.HostelAllocationUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.HostelAllocationUpdateManyWithWhereWithoutSchoolInput | Prisma.HostelAllocationUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.HostelAllocationScalarWhereInput | Prisma.HostelAllocationScalarWhereInput[];
};
export type HostelAllocationCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.HostelAllocationCreateWithoutStudentInput, Prisma.HostelAllocationUncheckedCreateWithoutStudentInput> | Prisma.HostelAllocationCreateWithoutStudentInput[] | Prisma.HostelAllocationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.HostelAllocationCreateOrConnectWithoutStudentInput | Prisma.HostelAllocationCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.HostelAllocationCreateManyStudentInputEnvelope;
    connect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
};
export type HostelAllocationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.HostelAllocationCreateWithoutStudentInput, Prisma.HostelAllocationUncheckedCreateWithoutStudentInput> | Prisma.HostelAllocationCreateWithoutStudentInput[] | Prisma.HostelAllocationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.HostelAllocationCreateOrConnectWithoutStudentInput | Prisma.HostelAllocationCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.HostelAllocationCreateManyStudentInputEnvelope;
    connect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
};
export type HostelAllocationUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.HostelAllocationCreateWithoutStudentInput, Prisma.HostelAllocationUncheckedCreateWithoutStudentInput> | Prisma.HostelAllocationCreateWithoutStudentInput[] | Prisma.HostelAllocationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.HostelAllocationCreateOrConnectWithoutStudentInput | Prisma.HostelAllocationCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.HostelAllocationUpsertWithWhereUniqueWithoutStudentInput | Prisma.HostelAllocationUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.HostelAllocationCreateManyStudentInputEnvelope;
    set?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    disconnect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    delete?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    connect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    update?: Prisma.HostelAllocationUpdateWithWhereUniqueWithoutStudentInput | Prisma.HostelAllocationUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.HostelAllocationUpdateManyWithWhereWithoutStudentInput | Prisma.HostelAllocationUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.HostelAllocationScalarWhereInput | Prisma.HostelAllocationScalarWhereInput[];
};
export type HostelAllocationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.HostelAllocationCreateWithoutStudentInput, Prisma.HostelAllocationUncheckedCreateWithoutStudentInput> | Prisma.HostelAllocationCreateWithoutStudentInput[] | Prisma.HostelAllocationUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.HostelAllocationCreateOrConnectWithoutStudentInput | Prisma.HostelAllocationCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.HostelAllocationUpsertWithWhereUniqueWithoutStudentInput | Prisma.HostelAllocationUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.HostelAllocationCreateManyStudentInputEnvelope;
    set?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    disconnect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    delete?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    connect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    update?: Prisma.HostelAllocationUpdateWithWhereUniqueWithoutStudentInput | Prisma.HostelAllocationUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.HostelAllocationUpdateManyWithWhereWithoutStudentInput | Prisma.HostelAllocationUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.HostelAllocationScalarWhereInput | Prisma.HostelAllocationScalarWhereInput[];
};
export type HostelAllocationCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.HostelAllocationCreateWithoutRoomInput, Prisma.HostelAllocationUncheckedCreateWithoutRoomInput> | Prisma.HostelAllocationCreateWithoutRoomInput[] | Prisma.HostelAllocationUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.HostelAllocationCreateOrConnectWithoutRoomInput | Prisma.HostelAllocationCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.HostelAllocationCreateManyRoomInputEnvelope;
    connect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
};
export type HostelAllocationUncheckedCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.HostelAllocationCreateWithoutRoomInput, Prisma.HostelAllocationUncheckedCreateWithoutRoomInput> | Prisma.HostelAllocationCreateWithoutRoomInput[] | Prisma.HostelAllocationUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.HostelAllocationCreateOrConnectWithoutRoomInput | Prisma.HostelAllocationCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.HostelAllocationCreateManyRoomInputEnvelope;
    connect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
};
export type HostelAllocationUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.HostelAllocationCreateWithoutRoomInput, Prisma.HostelAllocationUncheckedCreateWithoutRoomInput> | Prisma.HostelAllocationCreateWithoutRoomInput[] | Prisma.HostelAllocationUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.HostelAllocationCreateOrConnectWithoutRoomInput | Prisma.HostelAllocationCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.HostelAllocationUpsertWithWhereUniqueWithoutRoomInput | Prisma.HostelAllocationUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.HostelAllocationCreateManyRoomInputEnvelope;
    set?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    disconnect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    delete?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    connect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    update?: Prisma.HostelAllocationUpdateWithWhereUniqueWithoutRoomInput | Prisma.HostelAllocationUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.HostelAllocationUpdateManyWithWhereWithoutRoomInput | Prisma.HostelAllocationUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.HostelAllocationScalarWhereInput | Prisma.HostelAllocationScalarWhereInput[];
};
export type HostelAllocationUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.HostelAllocationCreateWithoutRoomInput, Prisma.HostelAllocationUncheckedCreateWithoutRoomInput> | Prisma.HostelAllocationCreateWithoutRoomInput[] | Prisma.HostelAllocationUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.HostelAllocationCreateOrConnectWithoutRoomInput | Prisma.HostelAllocationCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.HostelAllocationUpsertWithWhereUniqueWithoutRoomInput | Prisma.HostelAllocationUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.HostelAllocationCreateManyRoomInputEnvelope;
    set?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    disconnect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    delete?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    connect?: Prisma.HostelAllocationWhereUniqueInput | Prisma.HostelAllocationWhereUniqueInput[];
    update?: Prisma.HostelAllocationUpdateWithWhereUniqueWithoutRoomInput | Prisma.HostelAllocationUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.HostelAllocationUpdateManyWithWhereWithoutRoomInput | Prisma.HostelAllocationUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.HostelAllocationScalarWhereInput | Prisma.HostelAllocationScalarWhereInput[];
};
export type HostelAllocationCreateWithoutSchoolInput = {
    id?: string;
    bedNumber?: number | null;
    allocatedDate?: Date | string;
    vacatedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    room: Prisma.HostelRoomCreateNestedOneWithoutAllocationsInput;
    student: Prisma.StudentCreateNestedOneWithoutHostelAllocationsInput;
};
export type HostelAllocationUncheckedCreateWithoutSchoolInput = {
    id?: string;
    roomId: string;
    studentId: string;
    bedNumber?: number | null;
    allocatedDate?: Date | string;
    vacatedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelAllocationCreateOrConnectWithoutSchoolInput = {
    where: Prisma.HostelAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.HostelAllocationCreateWithoutSchoolInput, Prisma.HostelAllocationUncheckedCreateWithoutSchoolInput>;
};
export type HostelAllocationCreateManySchoolInputEnvelope = {
    data: Prisma.HostelAllocationCreateManySchoolInput | Prisma.HostelAllocationCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type HostelAllocationUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.HostelAllocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.HostelAllocationUpdateWithoutSchoolInput, Prisma.HostelAllocationUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.HostelAllocationCreateWithoutSchoolInput, Prisma.HostelAllocationUncheckedCreateWithoutSchoolInput>;
};
export type HostelAllocationUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.HostelAllocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.HostelAllocationUpdateWithoutSchoolInput, Prisma.HostelAllocationUncheckedUpdateWithoutSchoolInput>;
};
export type HostelAllocationUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.HostelAllocationScalarWhereInput;
    data: Prisma.XOR<Prisma.HostelAllocationUpdateManyMutationInput, Prisma.HostelAllocationUncheckedUpdateManyWithoutSchoolInput>;
};
export type HostelAllocationScalarWhereInput = {
    AND?: Prisma.HostelAllocationScalarWhereInput | Prisma.HostelAllocationScalarWhereInput[];
    OR?: Prisma.HostelAllocationScalarWhereInput[];
    NOT?: Prisma.HostelAllocationScalarWhereInput | Prisma.HostelAllocationScalarWhereInput[];
    id?: Prisma.StringFilter<"HostelAllocation"> | string;
    schoolId?: Prisma.StringFilter<"HostelAllocation"> | string;
    roomId?: Prisma.StringFilter<"HostelAllocation"> | string;
    studentId?: Prisma.StringFilter<"HostelAllocation"> | string;
    bedNumber?: Prisma.IntNullableFilter<"HostelAllocation"> | number | null;
    allocatedDate?: Prisma.DateTimeFilter<"HostelAllocation"> | Date | string;
    vacatedDate?: Prisma.DateTimeNullableFilter<"HostelAllocation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"HostelAllocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HostelAllocation"> | Date | string;
};
export type HostelAllocationCreateWithoutStudentInput = {
    id?: string;
    bedNumber?: number | null;
    allocatedDate?: Date | string;
    vacatedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutHostelAllocationsInput;
    room: Prisma.HostelRoomCreateNestedOneWithoutAllocationsInput;
};
export type HostelAllocationUncheckedCreateWithoutStudentInput = {
    id?: string;
    schoolId: string;
    roomId: string;
    bedNumber?: number | null;
    allocatedDate?: Date | string;
    vacatedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelAllocationCreateOrConnectWithoutStudentInput = {
    where: Prisma.HostelAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.HostelAllocationCreateWithoutStudentInput, Prisma.HostelAllocationUncheckedCreateWithoutStudentInput>;
};
export type HostelAllocationCreateManyStudentInputEnvelope = {
    data: Prisma.HostelAllocationCreateManyStudentInput | Prisma.HostelAllocationCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type HostelAllocationUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.HostelAllocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.HostelAllocationUpdateWithoutStudentInput, Prisma.HostelAllocationUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.HostelAllocationCreateWithoutStudentInput, Prisma.HostelAllocationUncheckedCreateWithoutStudentInput>;
};
export type HostelAllocationUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.HostelAllocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.HostelAllocationUpdateWithoutStudentInput, Prisma.HostelAllocationUncheckedUpdateWithoutStudentInput>;
};
export type HostelAllocationUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.HostelAllocationScalarWhereInput;
    data: Prisma.XOR<Prisma.HostelAllocationUpdateManyMutationInput, Prisma.HostelAllocationUncheckedUpdateManyWithoutStudentInput>;
};
export type HostelAllocationCreateWithoutRoomInput = {
    id?: string;
    bedNumber?: number | null;
    allocatedDate?: Date | string;
    vacatedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutHostelAllocationsInput;
    student: Prisma.StudentCreateNestedOneWithoutHostelAllocationsInput;
};
export type HostelAllocationUncheckedCreateWithoutRoomInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    bedNumber?: number | null;
    allocatedDate?: Date | string;
    vacatedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelAllocationCreateOrConnectWithoutRoomInput = {
    where: Prisma.HostelAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.HostelAllocationCreateWithoutRoomInput, Prisma.HostelAllocationUncheckedCreateWithoutRoomInput>;
};
export type HostelAllocationCreateManyRoomInputEnvelope = {
    data: Prisma.HostelAllocationCreateManyRoomInput | Prisma.HostelAllocationCreateManyRoomInput[];
    skipDuplicates?: boolean;
};
export type HostelAllocationUpsertWithWhereUniqueWithoutRoomInput = {
    where: Prisma.HostelAllocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.HostelAllocationUpdateWithoutRoomInput, Prisma.HostelAllocationUncheckedUpdateWithoutRoomInput>;
    create: Prisma.XOR<Prisma.HostelAllocationCreateWithoutRoomInput, Prisma.HostelAllocationUncheckedCreateWithoutRoomInput>;
};
export type HostelAllocationUpdateWithWhereUniqueWithoutRoomInput = {
    where: Prisma.HostelAllocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.HostelAllocationUpdateWithoutRoomInput, Prisma.HostelAllocationUncheckedUpdateWithoutRoomInput>;
};
export type HostelAllocationUpdateManyWithWhereWithoutRoomInput = {
    where: Prisma.HostelAllocationScalarWhereInput;
    data: Prisma.XOR<Prisma.HostelAllocationUpdateManyMutationInput, Prisma.HostelAllocationUncheckedUpdateManyWithoutRoomInput>;
};
export type HostelAllocationCreateManySchoolInput = {
    id?: string;
    roomId: string;
    studentId: string;
    bedNumber?: number | null;
    allocatedDate?: Date | string;
    vacatedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelAllocationUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    room?: Prisma.HostelRoomUpdateOneRequiredWithoutAllocationsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutHostelAllocationsNestedInput;
};
export type HostelAllocationUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelAllocationUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelAllocationCreateManyStudentInput = {
    id?: string;
    schoolId: string;
    roomId: string;
    bedNumber?: number | null;
    allocatedDate?: Date | string;
    vacatedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelAllocationUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutHostelAllocationsNestedInput;
    room?: Prisma.HostelRoomUpdateOneRequiredWithoutAllocationsNestedInput;
};
export type HostelAllocationUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelAllocationUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelAllocationCreateManyRoomInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    bedNumber?: number | null;
    allocatedDate?: Date | string;
    vacatedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelAllocationUpdateWithoutRoomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutHostelAllocationsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutHostelAllocationsNestedInput;
};
export type HostelAllocationUncheckedUpdateWithoutRoomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelAllocationUncheckedUpdateManyWithoutRoomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    bedNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    allocatedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vacatedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelAllocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    roomId?: boolean;
    studentId?: boolean;
    bedNumber?: boolean;
    allocatedDate?: boolean;
    vacatedDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.HostelRoomDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hostelAllocation"]>;
export type HostelAllocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    roomId?: boolean;
    studentId?: boolean;
    bedNumber?: boolean;
    allocatedDate?: boolean;
    vacatedDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.HostelRoomDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hostelAllocation"]>;
export type HostelAllocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    roomId?: boolean;
    studentId?: boolean;
    bedNumber?: boolean;
    allocatedDate?: boolean;
    vacatedDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.HostelRoomDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hostelAllocation"]>;
export type HostelAllocationSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    roomId?: boolean;
    studentId?: boolean;
    bedNumber?: boolean;
    allocatedDate?: boolean;
    vacatedDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type HostelAllocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "roomId" | "studentId" | "bedNumber" | "allocatedDate" | "vacatedDate" | "createdAt" | "updatedAt", ExtArgs["result"]["hostelAllocation"]>;
export type HostelAllocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.HostelRoomDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type HostelAllocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.HostelRoomDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type HostelAllocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.HostelRoomDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type $HostelAllocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HostelAllocation";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        room: Prisma.$HostelRoomPayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        roomId: string;
        studentId: string;
        bedNumber: number | null;
        allocatedDate: Date;
        vacatedDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["hostelAllocation"]>;
    composites: {};
};
export type HostelAllocationGetPayload<S extends boolean | null | undefined | HostelAllocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload, S>;
export type HostelAllocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HostelAllocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HostelAllocationCountAggregateInputType | true;
};
export interface HostelAllocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HostelAllocation'];
        meta: {
            name: 'HostelAllocation';
        };
    };
    findUnique<T extends HostelAllocationFindUniqueArgs>(args: Prisma.SelectSubset<T, HostelAllocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HostelAllocationClient<runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HostelAllocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HostelAllocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HostelAllocationClient<runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HostelAllocationFindFirstArgs>(args?: Prisma.SelectSubset<T, HostelAllocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__HostelAllocationClient<runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HostelAllocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HostelAllocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HostelAllocationClient<runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HostelAllocationFindManyArgs>(args?: Prisma.SelectSubset<T, HostelAllocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HostelAllocationCreateArgs>(args: Prisma.SelectSubset<T, HostelAllocationCreateArgs<ExtArgs>>): Prisma.Prisma__HostelAllocationClient<runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HostelAllocationCreateManyArgs>(args?: Prisma.SelectSubset<T, HostelAllocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HostelAllocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HostelAllocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HostelAllocationDeleteArgs>(args: Prisma.SelectSubset<T, HostelAllocationDeleteArgs<ExtArgs>>): Prisma.Prisma__HostelAllocationClient<runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HostelAllocationUpdateArgs>(args: Prisma.SelectSubset<T, HostelAllocationUpdateArgs<ExtArgs>>): Prisma.Prisma__HostelAllocationClient<runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HostelAllocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, HostelAllocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HostelAllocationUpdateManyArgs>(args: Prisma.SelectSubset<T, HostelAllocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HostelAllocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HostelAllocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HostelAllocationUpsertArgs>(args: Prisma.SelectSubset<T, HostelAllocationUpsertArgs<ExtArgs>>): Prisma.Prisma__HostelAllocationClient<runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HostelAllocationCountArgs>(args?: Prisma.Subset<T, HostelAllocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HostelAllocationCountAggregateOutputType> : number>;
    aggregate<T extends HostelAllocationAggregateArgs>(args: Prisma.Subset<T, HostelAllocationAggregateArgs>): Prisma.PrismaPromise<GetHostelAllocationAggregateType<T>>;
    groupBy<T extends HostelAllocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HostelAllocationGroupByArgs['orderBy'];
    } : {
        orderBy?: HostelAllocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HostelAllocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHostelAllocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HostelAllocationFieldRefs;
}
export interface Prisma__HostelAllocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    room<T extends Prisma.HostelRoomDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HostelRoomDefaultArgs<ExtArgs>>): Prisma.Prisma__HostelRoomClient<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HostelAllocationFieldRefs {
    readonly id: Prisma.FieldRef<"HostelAllocation", 'String'>;
    readonly schoolId: Prisma.FieldRef<"HostelAllocation", 'String'>;
    readonly roomId: Prisma.FieldRef<"HostelAllocation", 'String'>;
    readonly studentId: Prisma.FieldRef<"HostelAllocation", 'String'>;
    readonly bedNumber: Prisma.FieldRef<"HostelAllocation", 'Int'>;
    readonly allocatedDate: Prisma.FieldRef<"HostelAllocation", 'DateTime'>;
    readonly vacatedDate: Prisma.FieldRef<"HostelAllocation", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"HostelAllocation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"HostelAllocation", 'DateTime'>;
}
export type HostelAllocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelect<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    include?: Prisma.HostelAllocationInclude<ExtArgs> | null;
    where: Prisma.HostelAllocationWhereUniqueInput;
};
export type HostelAllocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelect<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    include?: Prisma.HostelAllocationInclude<ExtArgs> | null;
    where: Prisma.HostelAllocationWhereUniqueInput;
};
export type HostelAllocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelect<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    include?: Prisma.HostelAllocationInclude<ExtArgs> | null;
    where?: Prisma.HostelAllocationWhereInput;
    orderBy?: Prisma.HostelAllocationOrderByWithRelationInput | Prisma.HostelAllocationOrderByWithRelationInput[];
    cursor?: Prisma.HostelAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HostelAllocationScalarFieldEnum | Prisma.HostelAllocationScalarFieldEnum[];
};
export type HostelAllocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelect<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    include?: Prisma.HostelAllocationInclude<ExtArgs> | null;
    where?: Prisma.HostelAllocationWhereInput;
    orderBy?: Prisma.HostelAllocationOrderByWithRelationInput | Prisma.HostelAllocationOrderByWithRelationInput[];
    cursor?: Prisma.HostelAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HostelAllocationScalarFieldEnum | Prisma.HostelAllocationScalarFieldEnum[];
};
export type HostelAllocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelect<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    include?: Prisma.HostelAllocationInclude<ExtArgs> | null;
    where?: Prisma.HostelAllocationWhereInput;
    orderBy?: Prisma.HostelAllocationOrderByWithRelationInput | Prisma.HostelAllocationOrderByWithRelationInput[];
    cursor?: Prisma.HostelAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HostelAllocationScalarFieldEnum | Prisma.HostelAllocationScalarFieldEnum[];
};
export type HostelAllocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelect<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    include?: Prisma.HostelAllocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HostelAllocationCreateInput, Prisma.HostelAllocationUncheckedCreateInput>;
};
export type HostelAllocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HostelAllocationCreateManyInput | Prisma.HostelAllocationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HostelAllocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    data: Prisma.HostelAllocationCreateManyInput | Prisma.HostelAllocationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HostelAllocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HostelAllocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelect<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    include?: Prisma.HostelAllocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HostelAllocationUpdateInput, Prisma.HostelAllocationUncheckedUpdateInput>;
    where: Prisma.HostelAllocationWhereUniqueInput;
};
export type HostelAllocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HostelAllocationUpdateManyMutationInput, Prisma.HostelAllocationUncheckedUpdateManyInput>;
    where?: Prisma.HostelAllocationWhereInput;
    limit?: number;
};
export type HostelAllocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HostelAllocationUpdateManyMutationInput, Prisma.HostelAllocationUncheckedUpdateManyInput>;
    where?: Prisma.HostelAllocationWhereInput;
    limit?: number;
    include?: Prisma.HostelAllocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HostelAllocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelect<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    include?: Prisma.HostelAllocationInclude<ExtArgs> | null;
    where: Prisma.HostelAllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.HostelAllocationCreateInput, Prisma.HostelAllocationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HostelAllocationUpdateInput, Prisma.HostelAllocationUncheckedUpdateInput>;
};
export type HostelAllocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelect<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    include?: Prisma.HostelAllocationInclude<ExtArgs> | null;
    where: Prisma.HostelAllocationWhereUniqueInput;
};
export type HostelAllocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HostelAllocationWhereInput;
    limit?: number;
};
export type HostelAllocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelect<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    include?: Prisma.HostelAllocationInclude<ExtArgs> | null;
};
