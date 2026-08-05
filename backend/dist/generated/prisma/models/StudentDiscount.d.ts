import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentDiscountModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentDiscountPayload>;
export type AggregateStudentDiscount = {
    _count: StudentDiscountCountAggregateOutputType | null;
    _avg: StudentDiscountAvgAggregateOutputType | null;
    _sum: StudentDiscountSumAggregateOutputType | null;
    _min: StudentDiscountMinAggregateOutputType | null;
    _max: StudentDiscountMaxAggregateOutputType | null;
};
export type StudentDiscountAvgAggregateOutputType = {
    value: runtime.Decimal | null;
};
export type StudentDiscountSumAggregateOutputType = {
    value: runtime.Decimal | null;
};
export type StudentDiscountMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    studentId: string | null;
    feeHeadId: string | null;
    type: $Enums.DiscountType | null;
    value: runtime.Decimal | null;
    reason: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentDiscountMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    studentId: string | null;
    feeHeadId: string | null;
    type: $Enums.DiscountType | null;
    value: runtime.Decimal | null;
    reason: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentDiscountCountAggregateOutputType = {
    id: number;
    schoolId: number;
    studentId: number;
    feeHeadId: number;
    type: number;
    value: number;
    reason: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StudentDiscountAvgAggregateInputType = {
    value?: true;
};
export type StudentDiscountSumAggregateInputType = {
    value?: true;
};
export type StudentDiscountMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    studentId?: true;
    feeHeadId?: true;
    type?: true;
    value?: true;
    reason?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentDiscountMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    studentId?: true;
    feeHeadId?: true;
    type?: true;
    value?: true;
    reason?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentDiscountCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    studentId?: true;
    feeHeadId?: true;
    type?: true;
    value?: true;
    reason?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StudentDiscountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentDiscountWhereInput;
    orderBy?: Prisma.StudentDiscountOrderByWithRelationInput | Prisma.StudentDiscountOrderByWithRelationInput[];
    cursor?: Prisma.StudentDiscountWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentDiscountCountAggregateInputType;
    _avg?: StudentDiscountAvgAggregateInputType;
    _sum?: StudentDiscountSumAggregateInputType;
    _min?: StudentDiscountMinAggregateInputType;
    _max?: StudentDiscountMaxAggregateInputType;
};
export type GetStudentDiscountAggregateType<T extends StudentDiscountAggregateArgs> = {
    [P in keyof T & keyof AggregateStudentDiscount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudentDiscount[P]> : Prisma.GetScalarType<T[P], AggregateStudentDiscount[P]>;
};
export type StudentDiscountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentDiscountWhereInput;
    orderBy?: Prisma.StudentDiscountOrderByWithAggregationInput | Prisma.StudentDiscountOrderByWithAggregationInput[];
    by: Prisma.StudentDiscountScalarFieldEnum[] | Prisma.StudentDiscountScalarFieldEnum;
    having?: Prisma.StudentDiscountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentDiscountCountAggregateInputType | true;
    _avg?: StudentDiscountAvgAggregateInputType;
    _sum?: StudentDiscountSumAggregateInputType;
    _min?: StudentDiscountMinAggregateInputType;
    _max?: StudentDiscountMaxAggregateInputType;
};
export type StudentDiscountGroupByOutputType = {
    id: string;
    schoolId: string;
    studentId: string;
    feeHeadId: string | null;
    type: $Enums.DiscountType;
    value: runtime.Decimal;
    reason: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: StudentDiscountCountAggregateOutputType | null;
    _avg: StudentDiscountAvgAggregateOutputType | null;
    _sum: StudentDiscountSumAggregateOutputType | null;
    _min: StudentDiscountMinAggregateOutputType | null;
    _max: StudentDiscountMaxAggregateOutputType | null;
};
export type GetStudentDiscountGroupByPayload<T extends StudentDiscountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentDiscountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentDiscountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentDiscountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentDiscountGroupByOutputType[P]>;
}>>;
export type StudentDiscountWhereInput = {
    AND?: Prisma.StudentDiscountWhereInput | Prisma.StudentDiscountWhereInput[];
    OR?: Prisma.StudentDiscountWhereInput[];
    NOT?: Prisma.StudentDiscountWhereInput | Prisma.StudentDiscountWhereInput[];
    id?: Prisma.StringFilter<"StudentDiscount"> | string;
    schoolId?: Prisma.StringFilter<"StudentDiscount"> | string;
    studentId?: Prisma.StringFilter<"StudentDiscount"> | string;
    feeHeadId?: Prisma.StringNullableFilter<"StudentDiscount"> | string | null;
    type?: Prisma.EnumDiscountTypeFilter<"StudentDiscount"> | $Enums.DiscountType;
    value?: Prisma.DecimalFilter<"StudentDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringNullableFilter<"StudentDiscount"> | string | null;
    isActive?: Prisma.BoolFilter<"StudentDiscount"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"StudentDiscount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StudentDiscount"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    feeHead?: Prisma.XOR<Prisma.FeeHeadNullableScalarRelationFilter, Prisma.FeeHeadWhereInput> | null;
};
export type StudentDiscountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    feeHeadId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
    feeHead?: Prisma.FeeHeadOrderByWithRelationInput;
};
export type StudentDiscountWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StudentDiscountWhereInput | Prisma.StudentDiscountWhereInput[];
    OR?: Prisma.StudentDiscountWhereInput[];
    NOT?: Prisma.StudentDiscountWhereInput | Prisma.StudentDiscountWhereInput[];
    schoolId?: Prisma.StringFilter<"StudentDiscount"> | string;
    studentId?: Prisma.StringFilter<"StudentDiscount"> | string;
    feeHeadId?: Prisma.StringNullableFilter<"StudentDiscount"> | string | null;
    type?: Prisma.EnumDiscountTypeFilter<"StudentDiscount"> | $Enums.DiscountType;
    value?: Prisma.DecimalFilter<"StudentDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringNullableFilter<"StudentDiscount"> | string | null;
    isActive?: Prisma.BoolFilter<"StudentDiscount"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"StudentDiscount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StudentDiscount"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    feeHead?: Prisma.XOR<Prisma.FeeHeadNullableScalarRelationFilter, Prisma.FeeHeadWhereInput> | null;
}, "id">;
export type StudentDiscountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    feeHeadId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StudentDiscountCountOrderByAggregateInput;
    _avg?: Prisma.StudentDiscountAvgOrderByAggregateInput;
    _max?: Prisma.StudentDiscountMaxOrderByAggregateInput;
    _min?: Prisma.StudentDiscountMinOrderByAggregateInput;
    _sum?: Prisma.StudentDiscountSumOrderByAggregateInput;
};
export type StudentDiscountScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentDiscountScalarWhereWithAggregatesInput | Prisma.StudentDiscountScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentDiscountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentDiscountScalarWhereWithAggregatesInput | Prisma.StudentDiscountScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StudentDiscount"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"StudentDiscount"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"StudentDiscount"> | string;
    feeHeadId?: Prisma.StringNullableWithAggregatesFilter<"StudentDiscount"> | string | null;
    type?: Prisma.EnumDiscountTypeWithAggregatesFilter<"StudentDiscount"> | $Enums.DiscountType;
    value?: Prisma.DecimalWithAggregatesFilter<"StudentDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"StudentDiscount"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"StudentDiscount"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StudentDiscount"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StudentDiscount"> | Date | string;
};
export type StudentDiscountCreateInput = {
    id?: string;
    type: $Enums.DiscountType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStudentDiscountsInput;
    student: Prisma.StudentCreateNestedOneWithoutDiscountsInput;
    feeHead?: Prisma.FeeHeadCreateNestedOneWithoutDiscountsInput;
};
export type StudentDiscountUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    feeHeadId?: string | null;
    type: $Enums.DiscountType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentDiscountUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentDiscountsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutDiscountsNestedInput;
    feeHead?: Prisma.FeeHeadUpdateOneWithoutDiscountsNestedInput;
};
export type StudentDiscountUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentDiscountCreateManyInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    feeHeadId?: string | null;
    type: $Enums.DiscountType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentDiscountUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentDiscountUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentDiscountListRelationFilter = {
    every?: Prisma.StudentDiscountWhereInput;
    some?: Prisma.StudentDiscountWhereInput;
    none?: Prisma.StudentDiscountWhereInput;
};
export type StudentDiscountOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentDiscountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    feeHeadId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentDiscountAvgOrderByAggregateInput = {
    value?: Prisma.SortOrder;
};
export type StudentDiscountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    feeHeadId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentDiscountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    feeHeadId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentDiscountSumOrderByAggregateInput = {
    value?: Prisma.SortOrder;
};
export type StudentDiscountCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.StudentDiscountCreateWithoutSchoolInput, Prisma.StudentDiscountUncheckedCreateWithoutSchoolInput> | Prisma.StudentDiscountCreateWithoutSchoolInput[] | Prisma.StudentDiscountUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentDiscountCreateOrConnectWithoutSchoolInput | Prisma.StudentDiscountCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.StudentDiscountCreateManySchoolInputEnvelope;
    connect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
};
export type StudentDiscountUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.StudentDiscountCreateWithoutSchoolInput, Prisma.StudentDiscountUncheckedCreateWithoutSchoolInput> | Prisma.StudentDiscountCreateWithoutSchoolInput[] | Prisma.StudentDiscountUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentDiscountCreateOrConnectWithoutSchoolInput | Prisma.StudentDiscountCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.StudentDiscountCreateManySchoolInputEnvelope;
    connect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
};
export type StudentDiscountUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.StudentDiscountCreateWithoutSchoolInput, Prisma.StudentDiscountUncheckedCreateWithoutSchoolInput> | Prisma.StudentDiscountCreateWithoutSchoolInput[] | Prisma.StudentDiscountUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentDiscountCreateOrConnectWithoutSchoolInput | Prisma.StudentDiscountCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.StudentDiscountUpsertWithWhereUniqueWithoutSchoolInput | Prisma.StudentDiscountUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.StudentDiscountCreateManySchoolInputEnvelope;
    set?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    disconnect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    delete?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    connect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    update?: Prisma.StudentDiscountUpdateWithWhereUniqueWithoutSchoolInput | Prisma.StudentDiscountUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.StudentDiscountUpdateManyWithWhereWithoutSchoolInput | Prisma.StudentDiscountUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.StudentDiscountScalarWhereInput | Prisma.StudentDiscountScalarWhereInput[];
};
export type StudentDiscountUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.StudentDiscountCreateWithoutSchoolInput, Prisma.StudentDiscountUncheckedCreateWithoutSchoolInput> | Prisma.StudentDiscountCreateWithoutSchoolInput[] | Prisma.StudentDiscountUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentDiscountCreateOrConnectWithoutSchoolInput | Prisma.StudentDiscountCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.StudentDiscountUpsertWithWhereUniqueWithoutSchoolInput | Prisma.StudentDiscountUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.StudentDiscountCreateManySchoolInputEnvelope;
    set?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    disconnect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    delete?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    connect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    update?: Prisma.StudentDiscountUpdateWithWhereUniqueWithoutSchoolInput | Prisma.StudentDiscountUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.StudentDiscountUpdateManyWithWhereWithoutSchoolInput | Prisma.StudentDiscountUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.StudentDiscountScalarWhereInput | Prisma.StudentDiscountScalarWhereInput[];
};
export type StudentDiscountCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentDiscountCreateWithoutStudentInput, Prisma.StudentDiscountUncheckedCreateWithoutStudentInput> | Prisma.StudentDiscountCreateWithoutStudentInput[] | Prisma.StudentDiscountUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentDiscountCreateOrConnectWithoutStudentInput | Prisma.StudentDiscountCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentDiscountCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
};
export type StudentDiscountUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentDiscountCreateWithoutStudentInput, Prisma.StudentDiscountUncheckedCreateWithoutStudentInput> | Prisma.StudentDiscountCreateWithoutStudentInput[] | Prisma.StudentDiscountUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentDiscountCreateOrConnectWithoutStudentInput | Prisma.StudentDiscountCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentDiscountCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
};
export type StudentDiscountUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentDiscountCreateWithoutStudentInput, Prisma.StudentDiscountUncheckedCreateWithoutStudentInput> | Prisma.StudentDiscountCreateWithoutStudentInput[] | Prisma.StudentDiscountUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentDiscountCreateOrConnectWithoutStudentInput | Prisma.StudentDiscountCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentDiscountUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentDiscountUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentDiscountCreateManyStudentInputEnvelope;
    set?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    disconnect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    delete?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    connect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    update?: Prisma.StudentDiscountUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentDiscountUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentDiscountUpdateManyWithWhereWithoutStudentInput | Prisma.StudentDiscountUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentDiscountScalarWhereInput | Prisma.StudentDiscountScalarWhereInput[];
};
export type StudentDiscountUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentDiscountCreateWithoutStudentInput, Prisma.StudentDiscountUncheckedCreateWithoutStudentInput> | Prisma.StudentDiscountCreateWithoutStudentInput[] | Prisma.StudentDiscountUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentDiscountCreateOrConnectWithoutStudentInput | Prisma.StudentDiscountCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentDiscountUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentDiscountUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentDiscountCreateManyStudentInputEnvelope;
    set?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    disconnect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    delete?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    connect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    update?: Prisma.StudentDiscountUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentDiscountUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentDiscountUpdateManyWithWhereWithoutStudentInput | Prisma.StudentDiscountUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentDiscountScalarWhereInput | Prisma.StudentDiscountScalarWhereInput[];
};
export type StudentDiscountCreateNestedManyWithoutFeeHeadInput = {
    create?: Prisma.XOR<Prisma.StudentDiscountCreateWithoutFeeHeadInput, Prisma.StudentDiscountUncheckedCreateWithoutFeeHeadInput> | Prisma.StudentDiscountCreateWithoutFeeHeadInput[] | Prisma.StudentDiscountUncheckedCreateWithoutFeeHeadInput[];
    connectOrCreate?: Prisma.StudentDiscountCreateOrConnectWithoutFeeHeadInput | Prisma.StudentDiscountCreateOrConnectWithoutFeeHeadInput[];
    createMany?: Prisma.StudentDiscountCreateManyFeeHeadInputEnvelope;
    connect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
};
export type StudentDiscountUncheckedCreateNestedManyWithoutFeeHeadInput = {
    create?: Prisma.XOR<Prisma.StudentDiscountCreateWithoutFeeHeadInput, Prisma.StudentDiscountUncheckedCreateWithoutFeeHeadInput> | Prisma.StudentDiscountCreateWithoutFeeHeadInput[] | Prisma.StudentDiscountUncheckedCreateWithoutFeeHeadInput[];
    connectOrCreate?: Prisma.StudentDiscountCreateOrConnectWithoutFeeHeadInput | Prisma.StudentDiscountCreateOrConnectWithoutFeeHeadInput[];
    createMany?: Prisma.StudentDiscountCreateManyFeeHeadInputEnvelope;
    connect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
};
export type StudentDiscountUpdateManyWithoutFeeHeadNestedInput = {
    create?: Prisma.XOR<Prisma.StudentDiscountCreateWithoutFeeHeadInput, Prisma.StudentDiscountUncheckedCreateWithoutFeeHeadInput> | Prisma.StudentDiscountCreateWithoutFeeHeadInput[] | Prisma.StudentDiscountUncheckedCreateWithoutFeeHeadInput[];
    connectOrCreate?: Prisma.StudentDiscountCreateOrConnectWithoutFeeHeadInput | Prisma.StudentDiscountCreateOrConnectWithoutFeeHeadInput[];
    upsert?: Prisma.StudentDiscountUpsertWithWhereUniqueWithoutFeeHeadInput | Prisma.StudentDiscountUpsertWithWhereUniqueWithoutFeeHeadInput[];
    createMany?: Prisma.StudentDiscountCreateManyFeeHeadInputEnvelope;
    set?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    disconnect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    delete?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    connect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    update?: Prisma.StudentDiscountUpdateWithWhereUniqueWithoutFeeHeadInput | Prisma.StudentDiscountUpdateWithWhereUniqueWithoutFeeHeadInput[];
    updateMany?: Prisma.StudentDiscountUpdateManyWithWhereWithoutFeeHeadInput | Prisma.StudentDiscountUpdateManyWithWhereWithoutFeeHeadInput[];
    deleteMany?: Prisma.StudentDiscountScalarWhereInput | Prisma.StudentDiscountScalarWhereInput[];
};
export type StudentDiscountUncheckedUpdateManyWithoutFeeHeadNestedInput = {
    create?: Prisma.XOR<Prisma.StudentDiscountCreateWithoutFeeHeadInput, Prisma.StudentDiscountUncheckedCreateWithoutFeeHeadInput> | Prisma.StudentDiscountCreateWithoutFeeHeadInput[] | Prisma.StudentDiscountUncheckedCreateWithoutFeeHeadInput[];
    connectOrCreate?: Prisma.StudentDiscountCreateOrConnectWithoutFeeHeadInput | Prisma.StudentDiscountCreateOrConnectWithoutFeeHeadInput[];
    upsert?: Prisma.StudentDiscountUpsertWithWhereUniqueWithoutFeeHeadInput | Prisma.StudentDiscountUpsertWithWhereUniqueWithoutFeeHeadInput[];
    createMany?: Prisma.StudentDiscountCreateManyFeeHeadInputEnvelope;
    set?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    disconnect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    delete?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    connect?: Prisma.StudentDiscountWhereUniqueInput | Prisma.StudentDiscountWhereUniqueInput[];
    update?: Prisma.StudentDiscountUpdateWithWhereUniqueWithoutFeeHeadInput | Prisma.StudentDiscountUpdateWithWhereUniqueWithoutFeeHeadInput[];
    updateMany?: Prisma.StudentDiscountUpdateManyWithWhereWithoutFeeHeadInput | Prisma.StudentDiscountUpdateManyWithWhereWithoutFeeHeadInput[];
    deleteMany?: Prisma.StudentDiscountScalarWhereInput | Prisma.StudentDiscountScalarWhereInput[];
};
export type EnumDiscountTypeFieldUpdateOperationsInput = {
    set?: $Enums.DiscountType;
};
export type StudentDiscountCreateWithoutSchoolInput = {
    id?: string;
    type: $Enums.DiscountType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutDiscountsInput;
    feeHead?: Prisma.FeeHeadCreateNestedOneWithoutDiscountsInput;
};
export type StudentDiscountUncheckedCreateWithoutSchoolInput = {
    id?: string;
    studentId: string;
    feeHeadId?: string | null;
    type: $Enums.DiscountType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentDiscountCreateOrConnectWithoutSchoolInput = {
    where: Prisma.StudentDiscountWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentDiscountCreateWithoutSchoolInput, Prisma.StudentDiscountUncheckedCreateWithoutSchoolInput>;
};
export type StudentDiscountCreateManySchoolInputEnvelope = {
    data: Prisma.StudentDiscountCreateManySchoolInput | Prisma.StudentDiscountCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type StudentDiscountUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.StudentDiscountWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentDiscountUpdateWithoutSchoolInput, Prisma.StudentDiscountUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.StudentDiscountCreateWithoutSchoolInput, Prisma.StudentDiscountUncheckedCreateWithoutSchoolInput>;
};
export type StudentDiscountUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.StudentDiscountWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentDiscountUpdateWithoutSchoolInput, Prisma.StudentDiscountUncheckedUpdateWithoutSchoolInput>;
};
export type StudentDiscountUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.StudentDiscountScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentDiscountUpdateManyMutationInput, Prisma.StudentDiscountUncheckedUpdateManyWithoutSchoolInput>;
};
export type StudentDiscountScalarWhereInput = {
    AND?: Prisma.StudentDiscountScalarWhereInput | Prisma.StudentDiscountScalarWhereInput[];
    OR?: Prisma.StudentDiscountScalarWhereInput[];
    NOT?: Prisma.StudentDiscountScalarWhereInput | Prisma.StudentDiscountScalarWhereInput[];
    id?: Prisma.StringFilter<"StudentDiscount"> | string;
    schoolId?: Prisma.StringFilter<"StudentDiscount"> | string;
    studentId?: Prisma.StringFilter<"StudentDiscount"> | string;
    feeHeadId?: Prisma.StringNullableFilter<"StudentDiscount"> | string | null;
    type?: Prisma.EnumDiscountTypeFilter<"StudentDiscount"> | $Enums.DiscountType;
    value?: Prisma.DecimalFilter<"StudentDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringNullableFilter<"StudentDiscount"> | string | null;
    isActive?: Prisma.BoolFilter<"StudentDiscount"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"StudentDiscount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StudentDiscount"> | Date | string;
};
export type StudentDiscountCreateWithoutStudentInput = {
    id?: string;
    type: $Enums.DiscountType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStudentDiscountsInput;
    feeHead?: Prisma.FeeHeadCreateNestedOneWithoutDiscountsInput;
};
export type StudentDiscountUncheckedCreateWithoutStudentInput = {
    id?: string;
    schoolId: string;
    feeHeadId?: string | null;
    type: $Enums.DiscountType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentDiscountCreateOrConnectWithoutStudentInput = {
    where: Prisma.StudentDiscountWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentDiscountCreateWithoutStudentInput, Prisma.StudentDiscountUncheckedCreateWithoutStudentInput>;
};
export type StudentDiscountCreateManyStudentInputEnvelope = {
    data: Prisma.StudentDiscountCreateManyStudentInput | Prisma.StudentDiscountCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type StudentDiscountUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentDiscountWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentDiscountUpdateWithoutStudentInput, Prisma.StudentDiscountUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.StudentDiscountCreateWithoutStudentInput, Prisma.StudentDiscountUncheckedCreateWithoutStudentInput>;
};
export type StudentDiscountUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentDiscountWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentDiscountUpdateWithoutStudentInput, Prisma.StudentDiscountUncheckedUpdateWithoutStudentInput>;
};
export type StudentDiscountUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.StudentDiscountScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentDiscountUpdateManyMutationInput, Prisma.StudentDiscountUncheckedUpdateManyWithoutStudentInput>;
};
export type StudentDiscountCreateWithoutFeeHeadInput = {
    id?: string;
    type: $Enums.DiscountType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStudentDiscountsInput;
    student: Prisma.StudentCreateNestedOneWithoutDiscountsInput;
};
export type StudentDiscountUncheckedCreateWithoutFeeHeadInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    type: $Enums.DiscountType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentDiscountCreateOrConnectWithoutFeeHeadInput = {
    where: Prisma.StudentDiscountWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentDiscountCreateWithoutFeeHeadInput, Prisma.StudentDiscountUncheckedCreateWithoutFeeHeadInput>;
};
export type StudentDiscountCreateManyFeeHeadInputEnvelope = {
    data: Prisma.StudentDiscountCreateManyFeeHeadInput | Prisma.StudentDiscountCreateManyFeeHeadInput[];
    skipDuplicates?: boolean;
};
export type StudentDiscountUpsertWithWhereUniqueWithoutFeeHeadInput = {
    where: Prisma.StudentDiscountWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentDiscountUpdateWithoutFeeHeadInput, Prisma.StudentDiscountUncheckedUpdateWithoutFeeHeadInput>;
    create: Prisma.XOR<Prisma.StudentDiscountCreateWithoutFeeHeadInput, Prisma.StudentDiscountUncheckedCreateWithoutFeeHeadInput>;
};
export type StudentDiscountUpdateWithWhereUniqueWithoutFeeHeadInput = {
    where: Prisma.StudentDiscountWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentDiscountUpdateWithoutFeeHeadInput, Prisma.StudentDiscountUncheckedUpdateWithoutFeeHeadInput>;
};
export type StudentDiscountUpdateManyWithWhereWithoutFeeHeadInput = {
    where: Prisma.StudentDiscountScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentDiscountUpdateManyMutationInput, Prisma.StudentDiscountUncheckedUpdateManyWithoutFeeHeadInput>;
};
export type StudentDiscountCreateManySchoolInput = {
    id?: string;
    studentId: string;
    feeHeadId?: string | null;
    type: $Enums.DiscountType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentDiscountUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutDiscountsNestedInput;
    feeHead?: Prisma.FeeHeadUpdateOneWithoutDiscountsNestedInput;
};
export type StudentDiscountUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentDiscountUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentDiscountCreateManyStudentInput = {
    id?: string;
    schoolId: string;
    feeHeadId?: string | null;
    type: $Enums.DiscountType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentDiscountUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentDiscountsNestedInput;
    feeHead?: Prisma.FeeHeadUpdateOneWithoutDiscountsNestedInput;
};
export type StudentDiscountUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentDiscountUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentDiscountCreateManyFeeHeadInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    type: $Enums.DiscountType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentDiscountUpdateWithoutFeeHeadInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentDiscountsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutDiscountsNestedInput;
};
export type StudentDiscountUncheckedUpdateWithoutFeeHeadInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentDiscountUncheckedUpdateManyWithoutFeeHeadInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentDiscountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    feeHeadId?: boolean;
    type?: boolean;
    value?: boolean;
    reason?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    feeHead?: boolean | Prisma.StudentDiscount$feeHeadArgs<ExtArgs>;
}, ExtArgs["result"]["studentDiscount"]>;
export type StudentDiscountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    feeHeadId?: boolean;
    type?: boolean;
    value?: boolean;
    reason?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    feeHead?: boolean | Prisma.StudentDiscount$feeHeadArgs<ExtArgs>;
}, ExtArgs["result"]["studentDiscount"]>;
export type StudentDiscountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    feeHeadId?: boolean;
    type?: boolean;
    value?: boolean;
    reason?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    feeHead?: boolean | Prisma.StudentDiscount$feeHeadArgs<ExtArgs>;
}, ExtArgs["result"]["studentDiscount"]>;
export type StudentDiscountSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    feeHeadId?: boolean;
    type?: boolean;
    value?: boolean;
    reason?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StudentDiscountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "studentId" | "feeHeadId" | "type" | "value" | "reason" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["studentDiscount"]>;
export type StudentDiscountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    feeHead?: boolean | Prisma.StudentDiscount$feeHeadArgs<ExtArgs>;
};
export type StudentDiscountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    feeHead?: boolean | Prisma.StudentDiscount$feeHeadArgs<ExtArgs>;
};
export type StudentDiscountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    feeHead?: boolean | Prisma.StudentDiscount$feeHeadArgs<ExtArgs>;
};
export type $StudentDiscountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StudentDiscount";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs>;
        feeHead: Prisma.$FeeHeadPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        studentId: string;
        feeHeadId: string | null;
        type: $Enums.DiscountType;
        value: runtime.Decimal;
        reason: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["studentDiscount"]>;
    composites: {};
};
export type StudentDiscountGetPayload<S extends boolean | null | undefined | StudentDiscountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload, S>;
export type StudentDiscountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentDiscountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentDiscountCountAggregateInputType | true;
};
export interface StudentDiscountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StudentDiscount'];
        meta: {
            name: 'StudentDiscount';
        };
    };
    findUnique<T extends StudentDiscountFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentDiscountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentDiscountClient<runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentDiscountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentDiscountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentDiscountClient<runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentDiscountFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentDiscountFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentDiscountClient<runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentDiscountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentDiscountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentDiscountClient<runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentDiscountFindManyArgs>(args?: Prisma.SelectSubset<T, StudentDiscountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentDiscountCreateArgs>(args: Prisma.SelectSubset<T, StudentDiscountCreateArgs<ExtArgs>>): Prisma.Prisma__StudentDiscountClient<runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentDiscountCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentDiscountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentDiscountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentDiscountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentDiscountDeleteArgs>(args: Prisma.SelectSubset<T, StudentDiscountDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentDiscountClient<runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentDiscountUpdateArgs>(args: Prisma.SelectSubset<T, StudentDiscountUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentDiscountClient<runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentDiscountDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentDiscountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentDiscountUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentDiscountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentDiscountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentDiscountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentDiscountUpsertArgs>(args: Prisma.SelectSubset<T, StudentDiscountUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentDiscountClient<runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentDiscountCountArgs>(args?: Prisma.Subset<T, StudentDiscountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentDiscountCountAggregateOutputType> : number>;
    aggregate<T extends StudentDiscountAggregateArgs>(args: Prisma.Subset<T, StudentDiscountAggregateArgs>): Prisma.PrismaPromise<GetStudentDiscountAggregateType<T>>;
    groupBy<T extends StudentDiscountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentDiscountGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentDiscountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentDiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentDiscountFieldRefs;
}
export interface Prisma__StudentDiscountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    feeHead<T extends Prisma.StudentDiscount$feeHeadArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDiscount$feeHeadArgs<ExtArgs>>): Prisma.Prisma__FeeHeadClient<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentDiscountFieldRefs {
    readonly id: Prisma.FieldRef<"StudentDiscount", 'String'>;
    readonly schoolId: Prisma.FieldRef<"StudentDiscount", 'String'>;
    readonly studentId: Prisma.FieldRef<"StudentDiscount", 'String'>;
    readonly feeHeadId: Prisma.FieldRef<"StudentDiscount", 'String'>;
    readonly type: Prisma.FieldRef<"StudentDiscount", 'DiscountType'>;
    readonly value: Prisma.FieldRef<"StudentDiscount", 'Decimal'>;
    readonly reason: Prisma.FieldRef<"StudentDiscount", 'String'>;
    readonly isActive: Prisma.FieldRef<"StudentDiscount", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"StudentDiscount", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StudentDiscount", 'DateTime'>;
}
export type StudentDiscountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    include?: Prisma.StudentDiscountInclude<ExtArgs> | null;
    where: Prisma.StudentDiscountWhereUniqueInput;
};
export type StudentDiscountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    include?: Prisma.StudentDiscountInclude<ExtArgs> | null;
    where: Prisma.StudentDiscountWhereUniqueInput;
};
export type StudentDiscountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    include?: Prisma.StudentDiscountInclude<ExtArgs> | null;
    where?: Prisma.StudentDiscountWhereInput;
    orderBy?: Prisma.StudentDiscountOrderByWithRelationInput | Prisma.StudentDiscountOrderByWithRelationInput[];
    cursor?: Prisma.StudentDiscountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentDiscountScalarFieldEnum | Prisma.StudentDiscountScalarFieldEnum[];
};
export type StudentDiscountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    include?: Prisma.StudentDiscountInclude<ExtArgs> | null;
    where?: Prisma.StudentDiscountWhereInput;
    orderBy?: Prisma.StudentDiscountOrderByWithRelationInput | Prisma.StudentDiscountOrderByWithRelationInput[];
    cursor?: Prisma.StudentDiscountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentDiscountScalarFieldEnum | Prisma.StudentDiscountScalarFieldEnum[];
};
export type StudentDiscountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    include?: Prisma.StudentDiscountInclude<ExtArgs> | null;
    where?: Prisma.StudentDiscountWhereInput;
    orderBy?: Prisma.StudentDiscountOrderByWithRelationInput | Prisma.StudentDiscountOrderByWithRelationInput[];
    cursor?: Prisma.StudentDiscountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentDiscountScalarFieldEnum | Prisma.StudentDiscountScalarFieldEnum[];
};
export type StudentDiscountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    include?: Prisma.StudentDiscountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentDiscountCreateInput, Prisma.StudentDiscountUncheckedCreateInput>;
};
export type StudentDiscountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentDiscountCreateManyInput | Prisma.StudentDiscountCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentDiscountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    data: Prisma.StudentDiscountCreateManyInput | Prisma.StudentDiscountCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentDiscountIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentDiscountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    include?: Prisma.StudentDiscountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentDiscountUpdateInput, Prisma.StudentDiscountUncheckedUpdateInput>;
    where: Prisma.StudentDiscountWhereUniqueInput;
};
export type StudentDiscountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentDiscountUpdateManyMutationInput, Prisma.StudentDiscountUncheckedUpdateManyInput>;
    where?: Prisma.StudentDiscountWhereInput;
    limit?: number;
};
export type StudentDiscountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentDiscountUpdateManyMutationInput, Prisma.StudentDiscountUncheckedUpdateManyInput>;
    where?: Prisma.StudentDiscountWhereInput;
    limit?: number;
    include?: Prisma.StudentDiscountIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentDiscountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    include?: Prisma.StudentDiscountInclude<ExtArgs> | null;
    where: Prisma.StudentDiscountWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentDiscountCreateInput, Prisma.StudentDiscountUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentDiscountUpdateInput, Prisma.StudentDiscountUncheckedUpdateInput>;
};
export type StudentDiscountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    include?: Prisma.StudentDiscountInclude<ExtArgs> | null;
    where: Prisma.StudentDiscountWhereUniqueInput;
};
export type StudentDiscountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentDiscountWhereInput;
    limit?: number;
};
export type StudentDiscount$feeHeadArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelect<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    include?: Prisma.FeeHeadInclude<ExtArgs> | null;
    where?: Prisma.FeeHeadWhereInput;
};
export type StudentDiscountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    include?: Prisma.StudentDiscountInclude<ExtArgs> | null;
};
