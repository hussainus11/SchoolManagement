import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VisitorModel = runtime.Types.Result.DefaultSelection<Prisma.$VisitorPayload>;
export type AggregateVisitor = {
    _count: VisitorCountAggregateOutputType | null;
    _min: VisitorMinAggregateOutputType | null;
    _max: VisitorMaxAggregateOutputType | null;
};
export type VisitorMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    name: string | null;
    phone: string | null;
    purpose: string | null;
    personToMeet: string | null;
    checkInAt: Date | null;
    checkOutAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VisitorMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    name: string | null;
    phone: string | null;
    purpose: string | null;
    personToMeet: string | null;
    checkInAt: Date | null;
    checkOutAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VisitorCountAggregateOutputType = {
    id: number;
    schoolId: number;
    branchId: number;
    name: number;
    phone: number;
    purpose: number;
    personToMeet: number;
    checkInAt: number;
    checkOutAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VisitorMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    name?: true;
    phone?: true;
    purpose?: true;
    personToMeet?: true;
    checkInAt?: true;
    checkOutAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VisitorMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    name?: true;
    phone?: true;
    purpose?: true;
    personToMeet?: true;
    checkInAt?: true;
    checkOutAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VisitorCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    name?: true;
    phone?: true;
    purpose?: true;
    personToMeet?: true;
    checkInAt?: true;
    checkOutAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VisitorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitorWhereInput;
    orderBy?: Prisma.VisitorOrderByWithRelationInput | Prisma.VisitorOrderByWithRelationInput[];
    cursor?: Prisma.VisitorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VisitorCountAggregateInputType;
    _min?: VisitorMinAggregateInputType;
    _max?: VisitorMaxAggregateInputType;
};
export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
    [P in keyof T & keyof AggregateVisitor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVisitor[P]> : Prisma.GetScalarType<T[P], AggregateVisitor[P]>;
};
export type VisitorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitorWhereInput;
    orderBy?: Prisma.VisitorOrderByWithAggregationInput | Prisma.VisitorOrderByWithAggregationInput[];
    by: Prisma.VisitorScalarFieldEnum[] | Prisma.VisitorScalarFieldEnum;
    having?: Prisma.VisitorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VisitorCountAggregateInputType | true;
    _min?: VisitorMinAggregateInputType;
    _max?: VisitorMaxAggregateInputType;
};
export type VisitorGroupByOutputType = {
    id: string;
    schoolId: string;
    branchId: string;
    name: string;
    phone: string | null;
    purpose: string;
    personToMeet: string | null;
    checkInAt: Date;
    checkOutAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: VisitorCountAggregateOutputType | null;
    _min: VisitorMinAggregateOutputType | null;
    _max: VisitorMaxAggregateOutputType | null;
};
export type GetVisitorGroupByPayload<T extends VisitorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VisitorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VisitorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VisitorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VisitorGroupByOutputType[P]>;
}>>;
export type VisitorWhereInput = {
    AND?: Prisma.VisitorWhereInput | Prisma.VisitorWhereInput[];
    OR?: Prisma.VisitorWhereInput[];
    NOT?: Prisma.VisitorWhereInput | Prisma.VisitorWhereInput[];
    id?: Prisma.StringFilter<"Visitor"> | string;
    schoolId?: Prisma.StringFilter<"Visitor"> | string;
    branchId?: Prisma.StringFilter<"Visitor"> | string;
    name?: Prisma.StringFilter<"Visitor"> | string;
    phone?: Prisma.StringNullableFilter<"Visitor"> | string | null;
    purpose?: Prisma.StringFilter<"Visitor"> | string;
    personToMeet?: Prisma.StringNullableFilter<"Visitor"> | string | null;
    checkInAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
    checkOutAt?: Prisma.DateTimeNullableFilter<"Visitor"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
};
export type VisitorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    personToMeet?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkInAt?: Prisma.SortOrder;
    checkOutAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    branch?: Prisma.BranchOrderByWithRelationInput;
};
export type VisitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VisitorWhereInput | Prisma.VisitorWhereInput[];
    OR?: Prisma.VisitorWhereInput[];
    NOT?: Prisma.VisitorWhereInput | Prisma.VisitorWhereInput[];
    schoolId?: Prisma.StringFilter<"Visitor"> | string;
    branchId?: Prisma.StringFilter<"Visitor"> | string;
    name?: Prisma.StringFilter<"Visitor"> | string;
    phone?: Prisma.StringNullableFilter<"Visitor"> | string | null;
    purpose?: Prisma.StringFilter<"Visitor"> | string;
    personToMeet?: Prisma.StringNullableFilter<"Visitor"> | string | null;
    checkInAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
    checkOutAt?: Prisma.DateTimeNullableFilter<"Visitor"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
}, "id">;
export type VisitorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    personToMeet?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkInAt?: Prisma.SortOrder;
    checkOutAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VisitorCountOrderByAggregateInput;
    _max?: Prisma.VisitorMaxOrderByAggregateInput;
    _min?: Prisma.VisitorMinOrderByAggregateInput;
};
export type VisitorScalarWhereWithAggregatesInput = {
    AND?: Prisma.VisitorScalarWhereWithAggregatesInput | Prisma.VisitorScalarWhereWithAggregatesInput[];
    OR?: Prisma.VisitorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VisitorScalarWhereWithAggregatesInput | Prisma.VisitorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Visitor"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Visitor"> | string;
    branchId?: Prisma.StringWithAggregatesFilter<"Visitor"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Visitor"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Visitor"> | string | null;
    purpose?: Prisma.StringWithAggregatesFilter<"Visitor"> | string;
    personToMeet?: Prisma.StringNullableWithAggregatesFilter<"Visitor"> | string | null;
    checkInAt?: Prisma.DateTimeWithAggregatesFilter<"Visitor"> | Date | string;
    checkOutAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Visitor"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Visitor"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Visitor"> | Date | string;
};
export type VisitorCreateInput = {
    id?: string;
    name: string;
    phone?: string | null;
    purpose: string;
    personToMeet?: string | null;
    checkInAt?: Date | string;
    checkOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutVisitorsInput;
    branch: Prisma.BranchCreateNestedOneWithoutVisitorsInput;
};
export type VisitorUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    phone?: string | null;
    purpose: string;
    personToMeet?: string | null;
    checkInAt?: Date | string;
    checkOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisitorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    personToMeet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutVisitorsNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutVisitorsNestedInput;
};
export type VisitorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    personToMeet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorCreateManyInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    phone?: string | null;
    purpose: string;
    personToMeet?: string | null;
    checkInAt?: Date | string;
    checkOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisitorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    personToMeet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    personToMeet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorListRelationFilter = {
    every?: Prisma.VisitorWhereInput;
    some?: Prisma.VisitorWhereInput;
    none?: Prisma.VisitorWhereInput;
};
export type VisitorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VisitorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    personToMeet?: Prisma.SortOrder;
    checkInAt?: Prisma.SortOrder;
    checkOutAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VisitorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    personToMeet?: Prisma.SortOrder;
    checkInAt?: Prisma.SortOrder;
    checkOutAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VisitorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    personToMeet?: Prisma.SortOrder;
    checkInAt?: Prisma.SortOrder;
    checkOutAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VisitorCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutSchoolInput, Prisma.VisitorUncheckedCreateWithoutSchoolInput> | Prisma.VisitorCreateWithoutSchoolInput[] | Prisma.VisitorUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutSchoolInput | Prisma.VisitorCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.VisitorCreateManySchoolInputEnvelope;
    connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
};
export type VisitorUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutSchoolInput, Prisma.VisitorUncheckedCreateWithoutSchoolInput> | Prisma.VisitorCreateWithoutSchoolInput[] | Prisma.VisitorUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutSchoolInput | Prisma.VisitorCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.VisitorCreateManySchoolInputEnvelope;
    connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
};
export type VisitorUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutSchoolInput, Prisma.VisitorUncheckedCreateWithoutSchoolInput> | Prisma.VisitorCreateWithoutSchoolInput[] | Prisma.VisitorUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutSchoolInput | Prisma.VisitorCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.VisitorUpsertWithWhereUniqueWithoutSchoolInput | Prisma.VisitorUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.VisitorCreateManySchoolInputEnvelope;
    set?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    disconnect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    delete?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    update?: Prisma.VisitorUpdateWithWhereUniqueWithoutSchoolInput | Prisma.VisitorUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.VisitorUpdateManyWithWhereWithoutSchoolInput | Prisma.VisitorUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.VisitorScalarWhereInput | Prisma.VisitorScalarWhereInput[];
};
export type VisitorUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutSchoolInput, Prisma.VisitorUncheckedCreateWithoutSchoolInput> | Prisma.VisitorCreateWithoutSchoolInput[] | Prisma.VisitorUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutSchoolInput | Prisma.VisitorCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.VisitorUpsertWithWhereUniqueWithoutSchoolInput | Prisma.VisitorUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.VisitorCreateManySchoolInputEnvelope;
    set?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    disconnect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    delete?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    update?: Prisma.VisitorUpdateWithWhereUniqueWithoutSchoolInput | Prisma.VisitorUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.VisitorUpdateManyWithWhereWithoutSchoolInput | Prisma.VisitorUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.VisitorScalarWhereInput | Prisma.VisitorScalarWhereInput[];
};
export type VisitorCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutBranchInput, Prisma.VisitorUncheckedCreateWithoutBranchInput> | Prisma.VisitorCreateWithoutBranchInput[] | Prisma.VisitorUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutBranchInput | Prisma.VisitorCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.VisitorCreateManyBranchInputEnvelope;
    connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
};
export type VisitorUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutBranchInput, Prisma.VisitorUncheckedCreateWithoutBranchInput> | Prisma.VisitorCreateWithoutBranchInput[] | Prisma.VisitorUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutBranchInput | Prisma.VisitorCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.VisitorCreateManyBranchInputEnvelope;
    connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
};
export type VisitorUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutBranchInput, Prisma.VisitorUncheckedCreateWithoutBranchInput> | Prisma.VisitorCreateWithoutBranchInput[] | Prisma.VisitorUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutBranchInput | Prisma.VisitorCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.VisitorUpsertWithWhereUniqueWithoutBranchInput | Prisma.VisitorUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.VisitorCreateManyBranchInputEnvelope;
    set?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    disconnect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    delete?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    update?: Prisma.VisitorUpdateWithWhereUniqueWithoutBranchInput | Prisma.VisitorUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.VisitorUpdateManyWithWhereWithoutBranchInput | Prisma.VisitorUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.VisitorScalarWhereInput | Prisma.VisitorScalarWhereInput[];
};
export type VisitorUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.VisitorCreateWithoutBranchInput, Prisma.VisitorUncheckedCreateWithoutBranchInput> | Prisma.VisitorCreateWithoutBranchInput[] | Prisma.VisitorUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutBranchInput | Prisma.VisitorCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.VisitorUpsertWithWhereUniqueWithoutBranchInput | Prisma.VisitorUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.VisitorCreateManyBranchInputEnvelope;
    set?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    disconnect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    delete?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
    update?: Prisma.VisitorUpdateWithWhereUniqueWithoutBranchInput | Prisma.VisitorUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.VisitorUpdateManyWithWhereWithoutBranchInput | Prisma.VisitorUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.VisitorScalarWhereInput | Prisma.VisitorScalarWhereInput[];
};
export type VisitorCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    phone?: string | null;
    purpose: string;
    personToMeet?: string | null;
    checkInAt?: Date | string;
    checkOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch: Prisma.BranchCreateNestedOneWithoutVisitorsInput;
};
export type VisitorUncheckedCreateWithoutSchoolInput = {
    id?: string;
    branchId: string;
    name: string;
    phone?: string | null;
    purpose: string;
    personToMeet?: string | null;
    checkInAt?: Date | string;
    checkOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisitorCreateOrConnectWithoutSchoolInput = {
    where: Prisma.VisitorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisitorCreateWithoutSchoolInput, Prisma.VisitorUncheckedCreateWithoutSchoolInput>;
};
export type VisitorCreateManySchoolInputEnvelope = {
    data: Prisma.VisitorCreateManySchoolInput | Prisma.VisitorCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type VisitorUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.VisitorWhereUniqueInput;
    update: Prisma.XOR<Prisma.VisitorUpdateWithoutSchoolInput, Prisma.VisitorUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.VisitorCreateWithoutSchoolInput, Prisma.VisitorUncheckedCreateWithoutSchoolInput>;
};
export type VisitorUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.VisitorWhereUniqueInput;
    data: Prisma.XOR<Prisma.VisitorUpdateWithoutSchoolInput, Prisma.VisitorUncheckedUpdateWithoutSchoolInput>;
};
export type VisitorUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.VisitorScalarWhereInput;
    data: Prisma.XOR<Prisma.VisitorUpdateManyMutationInput, Prisma.VisitorUncheckedUpdateManyWithoutSchoolInput>;
};
export type VisitorScalarWhereInput = {
    AND?: Prisma.VisitorScalarWhereInput | Prisma.VisitorScalarWhereInput[];
    OR?: Prisma.VisitorScalarWhereInput[];
    NOT?: Prisma.VisitorScalarWhereInput | Prisma.VisitorScalarWhereInput[];
    id?: Prisma.StringFilter<"Visitor"> | string;
    schoolId?: Prisma.StringFilter<"Visitor"> | string;
    branchId?: Prisma.StringFilter<"Visitor"> | string;
    name?: Prisma.StringFilter<"Visitor"> | string;
    phone?: Prisma.StringNullableFilter<"Visitor"> | string | null;
    purpose?: Prisma.StringFilter<"Visitor"> | string;
    personToMeet?: Prisma.StringNullableFilter<"Visitor"> | string | null;
    checkInAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
    checkOutAt?: Prisma.DateTimeNullableFilter<"Visitor"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
};
export type VisitorCreateWithoutBranchInput = {
    id?: string;
    name: string;
    phone?: string | null;
    purpose: string;
    personToMeet?: string | null;
    checkInAt?: Date | string;
    checkOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutVisitorsInput;
};
export type VisitorUncheckedCreateWithoutBranchInput = {
    id?: string;
    schoolId: string;
    name: string;
    phone?: string | null;
    purpose: string;
    personToMeet?: string | null;
    checkInAt?: Date | string;
    checkOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisitorCreateOrConnectWithoutBranchInput = {
    where: Prisma.VisitorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisitorCreateWithoutBranchInput, Prisma.VisitorUncheckedCreateWithoutBranchInput>;
};
export type VisitorCreateManyBranchInputEnvelope = {
    data: Prisma.VisitorCreateManyBranchInput | Prisma.VisitorCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type VisitorUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.VisitorWhereUniqueInput;
    update: Prisma.XOR<Prisma.VisitorUpdateWithoutBranchInput, Prisma.VisitorUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.VisitorCreateWithoutBranchInput, Prisma.VisitorUncheckedCreateWithoutBranchInput>;
};
export type VisitorUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.VisitorWhereUniqueInput;
    data: Prisma.XOR<Prisma.VisitorUpdateWithoutBranchInput, Prisma.VisitorUncheckedUpdateWithoutBranchInput>;
};
export type VisitorUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.VisitorScalarWhereInput;
    data: Prisma.XOR<Prisma.VisitorUpdateManyMutationInput, Prisma.VisitorUncheckedUpdateManyWithoutBranchInput>;
};
export type VisitorCreateManySchoolInput = {
    id?: string;
    branchId: string;
    name: string;
    phone?: string | null;
    purpose: string;
    personToMeet?: string | null;
    checkInAt?: Date | string;
    checkOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisitorUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    personToMeet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneRequiredWithoutVisitorsNestedInput;
};
export type VisitorUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    personToMeet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    personToMeet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorCreateManyBranchInput = {
    id?: string;
    schoolId: string;
    name: string;
    phone?: string | null;
    purpose: string;
    personToMeet?: string | null;
    checkInAt?: Date | string;
    checkOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VisitorUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    personToMeet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutVisitorsNestedInput;
};
export type VisitorUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    personToMeet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    personToMeet?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VisitorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    phone?: boolean;
    purpose?: boolean;
    personToMeet?: boolean;
    checkInAt?: boolean;
    checkOutAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visitor"]>;
export type VisitorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    phone?: boolean;
    purpose?: boolean;
    personToMeet?: boolean;
    checkInAt?: boolean;
    checkOutAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visitor"]>;
export type VisitorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    phone?: boolean;
    purpose?: boolean;
    personToMeet?: boolean;
    checkInAt?: boolean;
    checkOutAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["visitor"]>;
export type VisitorSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    phone?: boolean;
    purpose?: boolean;
    personToMeet?: boolean;
    checkInAt?: boolean;
    checkOutAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VisitorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "branchId" | "name" | "phone" | "purpose" | "personToMeet" | "checkInAt" | "checkOutAt" | "createdAt" | "updatedAt", ExtArgs["result"]["visitor"]>;
export type VisitorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type VisitorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type VisitorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type $VisitorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Visitor";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        branch: Prisma.$BranchPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        branchId: string;
        name: string;
        phone: string | null;
        purpose: string;
        personToMeet: string | null;
        checkInAt: Date;
        checkOutAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["visitor"]>;
    composites: {};
};
export type VisitorGetPayload<S extends boolean | null | undefined | VisitorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VisitorPayload, S>;
export type VisitorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VisitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VisitorCountAggregateInputType | true;
};
export interface VisitorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Visitor'];
        meta: {
            name: 'Visitor';
        };
    };
    findUnique<T extends VisitorFindUniqueArgs>(args: Prisma.SelectSubset<T, VisitorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VisitorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VisitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VisitorFindFirstArgs>(args?: Prisma.SelectSubset<T, VisitorFindFirstArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VisitorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VisitorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VisitorFindManyArgs>(args?: Prisma.SelectSubset<T, VisitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VisitorCreateArgs>(args: Prisma.SelectSubset<T, VisitorCreateArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VisitorCreateManyArgs>(args?: Prisma.SelectSubset<T, VisitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VisitorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VisitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VisitorDeleteArgs>(args: Prisma.SelectSubset<T, VisitorDeleteArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VisitorUpdateArgs>(args: Prisma.SelectSubset<T, VisitorUpdateArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VisitorDeleteManyArgs>(args?: Prisma.SelectSubset<T, VisitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VisitorUpdateManyArgs>(args: Prisma.SelectSubset<T, VisitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VisitorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VisitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VisitorUpsertArgs>(args: Prisma.SelectSubset<T, VisitorUpsertArgs<ExtArgs>>): Prisma.Prisma__VisitorClient<runtime.Types.Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VisitorCountArgs>(args?: Prisma.Subset<T, VisitorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VisitorCountAggregateOutputType> : number>;
    aggregate<T extends VisitorAggregateArgs>(args: Prisma.Subset<T, VisitorAggregateArgs>): Prisma.PrismaPromise<GetVisitorAggregateType<T>>;
    groupBy<T extends VisitorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VisitorGroupByArgs['orderBy'];
    } : {
        orderBy?: VisitorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VisitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VisitorFieldRefs;
}
export interface Prisma__VisitorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    branch<T extends Prisma.BranchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BranchDefaultArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VisitorFieldRefs {
    readonly id: Prisma.FieldRef<"Visitor", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Visitor", 'String'>;
    readonly branchId: Prisma.FieldRef<"Visitor", 'String'>;
    readonly name: Prisma.FieldRef<"Visitor", 'String'>;
    readonly phone: Prisma.FieldRef<"Visitor", 'String'>;
    readonly purpose: Prisma.FieldRef<"Visitor", 'String'>;
    readonly personToMeet: Prisma.FieldRef<"Visitor", 'String'>;
    readonly checkInAt: Prisma.FieldRef<"Visitor", 'DateTime'>;
    readonly checkOutAt: Prisma.FieldRef<"Visitor", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Visitor", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Visitor", 'DateTime'>;
}
export type VisitorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where: Prisma.VisitorWhereUniqueInput;
};
export type VisitorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where: Prisma.VisitorWhereUniqueInput;
};
export type VisitorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where?: Prisma.VisitorWhereInput;
    orderBy?: Prisma.VisitorOrderByWithRelationInput | Prisma.VisitorOrderByWithRelationInput[];
    cursor?: Prisma.VisitorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisitorScalarFieldEnum | Prisma.VisitorScalarFieldEnum[];
};
export type VisitorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where?: Prisma.VisitorWhereInput;
    orderBy?: Prisma.VisitorOrderByWithRelationInput | Prisma.VisitorOrderByWithRelationInput[];
    cursor?: Prisma.VisitorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisitorScalarFieldEnum | Prisma.VisitorScalarFieldEnum[];
};
export type VisitorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where?: Prisma.VisitorWhereInput;
    orderBy?: Prisma.VisitorOrderByWithRelationInput | Prisma.VisitorOrderByWithRelationInput[];
    cursor?: Prisma.VisitorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VisitorScalarFieldEnum | Prisma.VisitorScalarFieldEnum[];
};
export type VisitorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisitorCreateInput, Prisma.VisitorUncheckedCreateInput>;
};
export type VisitorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VisitorCreateManyInput | Prisma.VisitorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VisitorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    data: Prisma.VisitorCreateManyInput | Prisma.VisitorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VisitorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VisitorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisitorUpdateInput, Prisma.VisitorUncheckedUpdateInput>;
    where: Prisma.VisitorWhereUniqueInput;
};
export type VisitorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VisitorUpdateManyMutationInput, Prisma.VisitorUncheckedUpdateManyInput>;
    where?: Prisma.VisitorWhereInput;
    limit?: number;
};
export type VisitorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VisitorUpdateManyMutationInput, Prisma.VisitorUncheckedUpdateManyInput>;
    where?: Prisma.VisitorWhereInput;
    limit?: number;
    include?: Prisma.VisitorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VisitorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where: Prisma.VisitorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VisitorCreateInput, Prisma.VisitorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VisitorUpdateInput, Prisma.VisitorUncheckedUpdateInput>;
};
export type VisitorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
    where: Prisma.VisitorWhereUniqueInput;
};
export type VisitorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VisitorWhereInput;
    limit?: number;
};
export type VisitorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VisitorSelect<ExtArgs> | null;
    omit?: Prisma.VisitorOmit<ExtArgs> | null;
    include?: Prisma.VisitorInclude<ExtArgs> | null;
};
