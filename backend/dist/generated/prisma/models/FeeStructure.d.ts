import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FeeStructureModel = runtime.Types.Result.DefaultSelection<Prisma.$FeeStructurePayload>;
export type AggregateFeeStructure = {
    _count: FeeStructureCountAggregateOutputType | null;
    _avg: FeeStructureAvgAggregateOutputType | null;
    _sum: FeeStructureSumAggregateOutputType | null;
    _min: FeeStructureMinAggregateOutputType | null;
    _max: FeeStructureMaxAggregateOutputType | null;
};
export type FeeStructureAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type FeeStructureSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type FeeStructureMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    classId: string | null;
    feeHeadId: string | null;
    academicYearId: string | null;
    amount: runtime.Decimal | null;
    frequency: $Enums.FeeFrequency | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FeeStructureMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    classId: string | null;
    feeHeadId: string | null;
    academicYearId: string | null;
    amount: runtime.Decimal | null;
    frequency: $Enums.FeeFrequency | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FeeStructureCountAggregateOutputType = {
    id: number;
    schoolId: number;
    classId: number;
    feeHeadId: number;
    academicYearId: number;
    amount: number;
    frequency: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FeeStructureAvgAggregateInputType = {
    amount?: true;
};
export type FeeStructureSumAggregateInputType = {
    amount?: true;
};
export type FeeStructureMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    classId?: true;
    feeHeadId?: true;
    academicYearId?: true;
    amount?: true;
    frequency?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FeeStructureMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    classId?: true;
    feeHeadId?: true;
    academicYearId?: true;
    amount?: true;
    frequency?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FeeStructureCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    classId?: true;
    feeHeadId?: true;
    academicYearId?: true;
    amount?: true;
    frequency?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FeeStructureAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeStructureWhereInput;
    orderBy?: Prisma.FeeStructureOrderByWithRelationInput | Prisma.FeeStructureOrderByWithRelationInput[];
    cursor?: Prisma.FeeStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FeeStructureCountAggregateInputType;
    _avg?: FeeStructureAvgAggregateInputType;
    _sum?: FeeStructureSumAggregateInputType;
    _min?: FeeStructureMinAggregateInputType;
    _max?: FeeStructureMaxAggregateInputType;
};
export type GetFeeStructureAggregateType<T extends FeeStructureAggregateArgs> = {
    [P in keyof T & keyof AggregateFeeStructure]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFeeStructure[P]> : Prisma.GetScalarType<T[P], AggregateFeeStructure[P]>;
};
export type FeeStructureGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeStructureWhereInput;
    orderBy?: Prisma.FeeStructureOrderByWithAggregationInput | Prisma.FeeStructureOrderByWithAggregationInput[];
    by: Prisma.FeeStructureScalarFieldEnum[] | Prisma.FeeStructureScalarFieldEnum;
    having?: Prisma.FeeStructureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeeStructureCountAggregateInputType | true;
    _avg?: FeeStructureAvgAggregateInputType;
    _sum?: FeeStructureSumAggregateInputType;
    _min?: FeeStructureMinAggregateInputType;
    _max?: FeeStructureMaxAggregateInputType;
};
export type FeeStructureGroupByOutputType = {
    id: string;
    schoolId: string;
    classId: string;
    feeHeadId: string;
    academicYearId: string;
    amount: runtime.Decimal;
    frequency: $Enums.FeeFrequency;
    createdAt: Date;
    updatedAt: Date;
    _count: FeeStructureCountAggregateOutputType | null;
    _avg: FeeStructureAvgAggregateOutputType | null;
    _sum: FeeStructureSumAggregateOutputType | null;
    _min: FeeStructureMinAggregateOutputType | null;
    _max: FeeStructureMaxAggregateOutputType | null;
};
export type GetFeeStructureGroupByPayload<T extends FeeStructureGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeeStructureGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeeStructureGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeeStructureGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeeStructureGroupByOutputType[P]>;
}>>;
export type FeeStructureWhereInput = {
    AND?: Prisma.FeeStructureWhereInput | Prisma.FeeStructureWhereInput[];
    OR?: Prisma.FeeStructureWhereInput[];
    NOT?: Prisma.FeeStructureWhereInput | Prisma.FeeStructureWhereInput[];
    id?: Prisma.StringFilter<"FeeStructure"> | string;
    schoolId?: Prisma.StringFilter<"FeeStructure"> | string;
    classId?: Prisma.StringFilter<"FeeStructure"> | string;
    feeHeadId?: Prisma.StringFilter<"FeeStructure"> | string;
    academicYearId?: Prisma.StringFilter<"FeeStructure"> | string;
    amount?: Prisma.DecimalFilter<"FeeStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFilter<"FeeStructure"> | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFilter<"FeeStructure"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeeStructure"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    class?: Prisma.XOR<Prisma.ClassScalarRelationFilter, Prisma.ClassWhereInput>;
    feeHead?: Prisma.XOR<Prisma.FeeHeadScalarRelationFilter, Prisma.FeeHeadWhereInput>;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
};
export type FeeStructureOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    feeHeadId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    class?: Prisma.ClassOrderByWithRelationInput;
    feeHead?: Prisma.FeeHeadOrderByWithRelationInput;
    academicYear?: Prisma.AcademicYearOrderByWithRelationInput;
};
export type FeeStructureWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    classId_feeHeadId_academicYearId?: Prisma.FeeStructureClassIdFeeHeadIdAcademicYearIdCompoundUniqueInput;
    AND?: Prisma.FeeStructureWhereInput | Prisma.FeeStructureWhereInput[];
    OR?: Prisma.FeeStructureWhereInput[];
    NOT?: Prisma.FeeStructureWhereInput | Prisma.FeeStructureWhereInput[];
    schoolId?: Prisma.StringFilter<"FeeStructure"> | string;
    classId?: Prisma.StringFilter<"FeeStructure"> | string;
    feeHeadId?: Prisma.StringFilter<"FeeStructure"> | string;
    academicYearId?: Prisma.StringFilter<"FeeStructure"> | string;
    amount?: Prisma.DecimalFilter<"FeeStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFilter<"FeeStructure"> | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFilter<"FeeStructure"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeeStructure"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    class?: Prisma.XOR<Prisma.ClassScalarRelationFilter, Prisma.ClassWhereInput>;
    feeHead?: Prisma.XOR<Prisma.FeeHeadScalarRelationFilter, Prisma.FeeHeadWhereInput>;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
}, "id" | "classId_feeHeadId_academicYearId">;
export type FeeStructureOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    feeHeadId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FeeStructureCountOrderByAggregateInput;
    _avg?: Prisma.FeeStructureAvgOrderByAggregateInput;
    _max?: Prisma.FeeStructureMaxOrderByAggregateInput;
    _min?: Prisma.FeeStructureMinOrderByAggregateInput;
    _sum?: Prisma.FeeStructureSumOrderByAggregateInput;
};
export type FeeStructureScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeeStructureScalarWhereWithAggregatesInput | Prisma.FeeStructureScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeeStructureScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeeStructureScalarWhereWithAggregatesInput | Prisma.FeeStructureScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FeeStructure"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"FeeStructure"> | string;
    classId?: Prisma.StringWithAggregatesFilter<"FeeStructure"> | string;
    feeHeadId?: Prisma.StringWithAggregatesFilter<"FeeStructure"> | string;
    academicYearId?: Prisma.StringWithAggregatesFilter<"FeeStructure"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"FeeStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyWithAggregatesFilter<"FeeStructure"> | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FeeStructure"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FeeStructure"> | Date | string;
};
export type FeeStructureCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutFeeStructuresInput;
    class: Prisma.ClassCreateNestedOneWithoutFeeStructuresInput;
    feeHead: Prisma.FeeHeadCreateNestedOneWithoutFeeStructuresInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutFeeStructuresInput;
};
export type FeeStructureUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    classId: string;
    feeHeadId: string;
    academicYearId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeeStructureUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutFeeStructuresNestedInput;
    class?: Prisma.ClassUpdateOneRequiredWithoutFeeStructuresNestedInput;
    feeHead?: Prisma.FeeHeadUpdateOneRequiredWithoutFeeStructuresNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutFeeStructuresNestedInput;
};
export type FeeStructureUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeStructureCreateManyInput = {
    id?: string;
    schoolId: string;
    classId: string;
    feeHeadId: string;
    academicYearId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeeStructureUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeStructureUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeStructureListRelationFilter = {
    every?: Prisma.FeeStructureWhereInput;
    some?: Prisma.FeeStructureWhereInput;
    none?: Prisma.FeeStructureWhereInput;
};
export type FeeStructureOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FeeStructureClassIdFeeHeadIdAcademicYearIdCompoundUniqueInput = {
    classId: string;
    feeHeadId: string;
    academicYearId: string;
};
export type FeeStructureCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    feeHeadId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeeStructureAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type FeeStructureMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    feeHeadId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeeStructureMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    feeHeadId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeeStructureSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type FeeStructureCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutSchoolInput, Prisma.FeeStructureUncheckedCreateWithoutSchoolInput> | Prisma.FeeStructureCreateWithoutSchoolInput[] | Prisma.FeeStructureUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutSchoolInput | Prisma.FeeStructureCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.FeeStructureCreateManySchoolInputEnvelope;
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
};
export type FeeStructureUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutSchoolInput, Prisma.FeeStructureUncheckedCreateWithoutSchoolInput> | Prisma.FeeStructureCreateWithoutSchoolInput[] | Prisma.FeeStructureUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutSchoolInput | Prisma.FeeStructureCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.FeeStructureCreateManySchoolInputEnvelope;
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
};
export type FeeStructureUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutSchoolInput, Prisma.FeeStructureUncheckedCreateWithoutSchoolInput> | Prisma.FeeStructureCreateWithoutSchoolInput[] | Prisma.FeeStructureUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutSchoolInput | Prisma.FeeStructureCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.FeeStructureUpsertWithWhereUniqueWithoutSchoolInput | Prisma.FeeStructureUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.FeeStructureCreateManySchoolInputEnvelope;
    set?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    disconnect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    delete?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    update?: Prisma.FeeStructureUpdateWithWhereUniqueWithoutSchoolInput | Prisma.FeeStructureUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.FeeStructureUpdateManyWithWhereWithoutSchoolInput | Prisma.FeeStructureUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.FeeStructureScalarWhereInput | Prisma.FeeStructureScalarWhereInput[];
};
export type FeeStructureUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutSchoolInput, Prisma.FeeStructureUncheckedCreateWithoutSchoolInput> | Prisma.FeeStructureCreateWithoutSchoolInput[] | Prisma.FeeStructureUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutSchoolInput | Prisma.FeeStructureCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.FeeStructureUpsertWithWhereUniqueWithoutSchoolInput | Prisma.FeeStructureUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.FeeStructureCreateManySchoolInputEnvelope;
    set?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    disconnect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    delete?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    update?: Prisma.FeeStructureUpdateWithWhereUniqueWithoutSchoolInput | Prisma.FeeStructureUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.FeeStructureUpdateManyWithWhereWithoutSchoolInput | Prisma.FeeStructureUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.FeeStructureScalarWhereInput | Prisma.FeeStructureScalarWhereInput[];
};
export type FeeStructureCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutAcademicYearInput, Prisma.FeeStructureUncheckedCreateWithoutAcademicYearInput> | Prisma.FeeStructureCreateWithoutAcademicYearInput[] | Prisma.FeeStructureUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutAcademicYearInput | Prisma.FeeStructureCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.FeeStructureCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
};
export type FeeStructureUncheckedCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutAcademicYearInput, Prisma.FeeStructureUncheckedCreateWithoutAcademicYearInput> | Prisma.FeeStructureCreateWithoutAcademicYearInput[] | Prisma.FeeStructureUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutAcademicYearInput | Prisma.FeeStructureCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.FeeStructureCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
};
export type FeeStructureUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutAcademicYearInput, Prisma.FeeStructureUncheckedCreateWithoutAcademicYearInput> | Prisma.FeeStructureCreateWithoutAcademicYearInput[] | Prisma.FeeStructureUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutAcademicYearInput | Prisma.FeeStructureCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.FeeStructureUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.FeeStructureUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.FeeStructureCreateManyAcademicYearInputEnvelope;
    set?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    disconnect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    delete?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    update?: Prisma.FeeStructureUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.FeeStructureUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.FeeStructureUpdateManyWithWhereWithoutAcademicYearInput | Prisma.FeeStructureUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.FeeStructureScalarWhereInput | Prisma.FeeStructureScalarWhereInput[];
};
export type FeeStructureUncheckedUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutAcademicYearInput, Prisma.FeeStructureUncheckedCreateWithoutAcademicYearInput> | Prisma.FeeStructureCreateWithoutAcademicYearInput[] | Prisma.FeeStructureUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutAcademicYearInput | Prisma.FeeStructureCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.FeeStructureUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.FeeStructureUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.FeeStructureCreateManyAcademicYearInputEnvelope;
    set?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    disconnect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    delete?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    update?: Prisma.FeeStructureUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.FeeStructureUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.FeeStructureUpdateManyWithWhereWithoutAcademicYearInput | Prisma.FeeStructureUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.FeeStructureScalarWhereInput | Prisma.FeeStructureScalarWhereInput[];
};
export type FeeStructureCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutClassInput, Prisma.FeeStructureUncheckedCreateWithoutClassInput> | Prisma.FeeStructureCreateWithoutClassInput[] | Prisma.FeeStructureUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutClassInput | Prisma.FeeStructureCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.FeeStructureCreateManyClassInputEnvelope;
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
};
export type FeeStructureUncheckedCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutClassInput, Prisma.FeeStructureUncheckedCreateWithoutClassInput> | Prisma.FeeStructureCreateWithoutClassInput[] | Prisma.FeeStructureUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutClassInput | Prisma.FeeStructureCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.FeeStructureCreateManyClassInputEnvelope;
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
};
export type FeeStructureUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutClassInput, Prisma.FeeStructureUncheckedCreateWithoutClassInput> | Prisma.FeeStructureCreateWithoutClassInput[] | Prisma.FeeStructureUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutClassInput | Prisma.FeeStructureCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.FeeStructureUpsertWithWhereUniqueWithoutClassInput | Prisma.FeeStructureUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.FeeStructureCreateManyClassInputEnvelope;
    set?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    disconnect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    delete?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    update?: Prisma.FeeStructureUpdateWithWhereUniqueWithoutClassInput | Prisma.FeeStructureUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.FeeStructureUpdateManyWithWhereWithoutClassInput | Prisma.FeeStructureUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.FeeStructureScalarWhereInput | Prisma.FeeStructureScalarWhereInput[];
};
export type FeeStructureUncheckedUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutClassInput, Prisma.FeeStructureUncheckedCreateWithoutClassInput> | Prisma.FeeStructureCreateWithoutClassInput[] | Prisma.FeeStructureUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutClassInput | Prisma.FeeStructureCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.FeeStructureUpsertWithWhereUniqueWithoutClassInput | Prisma.FeeStructureUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.FeeStructureCreateManyClassInputEnvelope;
    set?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    disconnect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    delete?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    update?: Prisma.FeeStructureUpdateWithWhereUniqueWithoutClassInput | Prisma.FeeStructureUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.FeeStructureUpdateManyWithWhereWithoutClassInput | Prisma.FeeStructureUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.FeeStructureScalarWhereInput | Prisma.FeeStructureScalarWhereInput[];
};
export type FeeStructureCreateNestedManyWithoutFeeHeadInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutFeeHeadInput, Prisma.FeeStructureUncheckedCreateWithoutFeeHeadInput> | Prisma.FeeStructureCreateWithoutFeeHeadInput[] | Prisma.FeeStructureUncheckedCreateWithoutFeeHeadInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutFeeHeadInput | Prisma.FeeStructureCreateOrConnectWithoutFeeHeadInput[];
    createMany?: Prisma.FeeStructureCreateManyFeeHeadInputEnvelope;
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
};
export type FeeStructureUncheckedCreateNestedManyWithoutFeeHeadInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutFeeHeadInput, Prisma.FeeStructureUncheckedCreateWithoutFeeHeadInput> | Prisma.FeeStructureCreateWithoutFeeHeadInput[] | Prisma.FeeStructureUncheckedCreateWithoutFeeHeadInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutFeeHeadInput | Prisma.FeeStructureCreateOrConnectWithoutFeeHeadInput[];
    createMany?: Prisma.FeeStructureCreateManyFeeHeadInputEnvelope;
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
};
export type FeeStructureUpdateManyWithoutFeeHeadNestedInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutFeeHeadInput, Prisma.FeeStructureUncheckedCreateWithoutFeeHeadInput> | Prisma.FeeStructureCreateWithoutFeeHeadInput[] | Prisma.FeeStructureUncheckedCreateWithoutFeeHeadInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutFeeHeadInput | Prisma.FeeStructureCreateOrConnectWithoutFeeHeadInput[];
    upsert?: Prisma.FeeStructureUpsertWithWhereUniqueWithoutFeeHeadInput | Prisma.FeeStructureUpsertWithWhereUniqueWithoutFeeHeadInput[];
    createMany?: Prisma.FeeStructureCreateManyFeeHeadInputEnvelope;
    set?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    disconnect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    delete?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    update?: Prisma.FeeStructureUpdateWithWhereUniqueWithoutFeeHeadInput | Prisma.FeeStructureUpdateWithWhereUniqueWithoutFeeHeadInput[];
    updateMany?: Prisma.FeeStructureUpdateManyWithWhereWithoutFeeHeadInput | Prisma.FeeStructureUpdateManyWithWhereWithoutFeeHeadInput[];
    deleteMany?: Prisma.FeeStructureScalarWhereInput | Prisma.FeeStructureScalarWhereInput[];
};
export type FeeStructureUncheckedUpdateManyWithoutFeeHeadNestedInput = {
    create?: Prisma.XOR<Prisma.FeeStructureCreateWithoutFeeHeadInput, Prisma.FeeStructureUncheckedCreateWithoutFeeHeadInput> | Prisma.FeeStructureCreateWithoutFeeHeadInput[] | Prisma.FeeStructureUncheckedCreateWithoutFeeHeadInput[];
    connectOrCreate?: Prisma.FeeStructureCreateOrConnectWithoutFeeHeadInput | Prisma.FeeStructureCreateOrConnectWithoutFeeHeadInput[];
    upsert?: Prisma.FeeStructureUpsertWithWhereUniqueWithoutFeeHeadInput | Prisma.FeeStructureUpsertWithWhereUniqueWithoutFeeHeadInput[];
    createMany?: Prisma.FeeStructureCreateManyFeeHeadInputEnvelope;
    set?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    disconnect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    delete?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    connect?: Prisma.FeeStructureWhereUniqueInput | Prisma.FeeStructureWhereUniqueInput[];
    update?: Prisma.FeeStructureUpdateWithWhereUniqueWithoutFeeHeadInput | Prisma.FeeStructureUpdateWithWhereUniqueWithoutFeeHeadInput[];
    updateMany?: Prisma.FeeStructureUpdateManyWithWhereWithoutFeeHeadInput | Prisma.FeeStructureUpdateManyWithWhereWithoutFeeHeadInput[];
    deleteMany?: Prisma.FeeStructureScalarWhereInput | Prisma.FeeStructureScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumFeeFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.FeeFrequency;
};
export type FeeStructureCreateWithoutSchoolInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    class: Prisma.ClassCreateNestedOneWithoutFeeStructuresInput;
    feeHead: Prisma.FeeHeadCreateNestedOneWithoutFeeStructuresInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutFeeStructuresInput;
};
export type FeeStructureUncheckedCreateWithoutSchoolInput = {
    id?: string;
    classId: string;
    feeHeadId: string;
    academicYearId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeeStructureCreateOrConnectWithoutSchoolInput = {
    where: Prisma.FeeStructureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeStructureCreateWithoutSchoolInput, Prisma.FeeStructureUncheckedCreateWithoutSchoolInput>;
};
export type FeeStructureCreateManySchoolInputEnvelope = {
    data: Prisma.FeeStructureCreateManySchoolInput | Prisma.FeeStructureCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type FeeStructureUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.FeeStructureWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeeStructureUpdateWithoutSchoolInput, Prisma.FeeStructureUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.FeeStructureCreateWithoutSchoolInput, Prisma.FeeStructureUncheckedCreateWithoutSchoolInput>;
};
export type FeeStructureUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.FeeStructureWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeeStructureUpdateWithoutSchoolInput, Prisma.FeeStructureUncheckedUpdateWithoutSchoolInput>;
};
export type FeeStructureUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.FeeStructureScalarWhereInput;
    data: Prisma.XOR<Prisma.FeeStructureUpdateManyMutationInput, Prisma.FeeStructureUncheckedUpdateManyWithoutSchoolInput>;
};
export type FeeStructureScalarWhereInput = {
    AND?: Prisma.FeeStructureScalarWhereInput | Prisma.FeeStructureScalarWhereInput[];
    OR?: Prisma.FeeStructureScalarWhereInput[];
    NOT?: Prisma.FeeStructureScalarWhereInput | Prisma.FeeStructureScalarWhereInput[];
    id?: Prisma.StringFilter<"FeeStructure"> | string;
    schoolId?: Prisma.StringFilter<"FeeStructure"> | string;
    classId?: Prisma.StringFilter<"FeeStructure"> | string;
    feeHeadId?: Prisma.StringFilter<"FeeStructure"> | string;
    academicYearId?: Prisma.StringFilter<"FeeStructure"> | string;
    amount?: Prisma.DecimalFilter<"FeeStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFilter<"FeeStructure"> | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFilter<"FeeStructure"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeeStructure"> | Date | string;
};
export type FeeStructureCreateWithoutAcademicYearInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutFeeStructuresInput;
    class: Prisma.ClassCreateNestedOneWithoutFeeStructuresInput;
    feeHead: Prisma.FeeHeadCreateNestedOneWithoutFeeStructuresInput;
};
export type FeeStructureUncheckedCreateWithoutAcademicYearInput = {
    id?: string;
    schoolId: string;
    classId: string;
    feeHeadId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeeStructureCreateOrConnectWithoutAcademicYearInput = {
    where: Prisma.FeeStructureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeStructureCreateWithoutAcademicYearInput, Prisma.FeeStructureUncheckedCreateWithoutAcademicYearInput>;
};
export type FeeStructureCreateManyAcademicYearInputEnvelope = {
    data: Prisma.FeeStructureCreateManyAcademicYearInput | Prisma.FeeStructureCreateManyAcademicYearInput[];
    skipDuplicates?: boolean;
};
export type FeeStructureUpsertWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.FeeStructureWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeeStructureUpdateWithoutAcademicYearInput, Prisma.FeeStructureUncheckedUpdateWithoutAcademicYearInput>;
    create: Prisma.XOR<Prisma.FeeStructureCreateWithoutAcademicYearInput, Prisma.FeeStructureUncheckedCreateWithoutAcademicYearInput>;
};
export type FeeStructureUpdateWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.FeeStructureWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeeStructureUpdateWithoutAcademicYearInput, Prisma.FeeStructureUncheckedUpdateWithoutAcademicYearInput>;
};
export type FeeStructureUpdateManyWithWhereWithoutAcademicYearInput = {
    where: Prisma.FeeStructureScalarWhereInput;
    data: Prisma.XOR<Prisma.FeeStructureUpdateManyMutationInput, Prisma.FeeStructureUncheckedUpdateManyWithoutAcademicYearInput>;
};
export type FeeStructureCreateWithoutClassInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutFeeStructuresInput;
    feeHead: Prisma.FeeHeadCreateNestedOneWithoutFeeStructuresInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutFeeStructuresInput;
};
export type FeeStructureUncheckedCreateWithoutClassInput = {
    id?: string;
    schoolId: string;
    feeHeadId: string;
    academicYearId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeeStructureCreateOrConnectWithoutClassInput = {
    where: Prisma.FeeStructureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeStructureCreateWithoutClassInput, Prisma.FeeStructureUncheckedCreateWithoutClassInput>;
};
export type FeeStructureCreateManyClassInputEnvelope = {
    data: Prisma.FeeStructureCreateManyClassInput | Prisma.FeeStructureCreateManyClassInput[];
    skipDuplicates?: boolean;
};
export type FeeStructureUpsertWithWhereUniqueWithoutClassInput = {
    where: Prisma.FeeStructureWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeeStructureUpdateWithoutClassInput, Prisma.FeeStructureUncheckedUpdateWithoutClassInput>;
    create: Prisma.XOR<Prisma.FeeStructureCreateWithoutClassInput, Prisma.FeeStructureUncheckedCreateWithoutClassInput>;
};
export type FeeStructureUpdateWithWhereUniqueWithoutClassInput = {
    where: Prisma.FeeStructureWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeeStructureUpdateWithoutClassInput, Prisma.FeeStructureUncheckedUpdateWithoutClassInput>;
};
export type FeeStructureUpdateManyWithWhereWithoutClassInput = {
    where: Prisma.FeeStructureScalarWhereInput;
    data: Prisma.XOR<Prisma.FeeStructureUpdateManyMutationInput, Prisma.FeeStructureUncheckedUpdateManyWithoutClassInput>;
};
export type FeeStructureCreateWithoutFeeHeadInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutFeeStructuresInput;
    class: Prisma.ClassCreateNestedOneWithoutFeeStructuresInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutFeeStructuresInput;
};
export type FeeStructureUncheckedCreateWithoutFeeHeadInput = {
    id?: string;
    schoolId: string;
    classId: string;
    academicYearId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeeStructureCreateOrConnectWithoutFeeHeadInput = {
    where: Prisma.FeeStructureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeStructureCreateWithoutFeeHeadInput, Prisma.FeeStructureUncheckedCreateWithoutFeeHeadInput>;
};
export type FeeStructureCreateManyFeeHeadInputEnvelope = {
    data: Prisma.FeeStructureCreateManyFeeHeadInput | Prisma.FeeStructureCreateManyFeeHeadInput[];
    skipDuplicates?: boolean;
};
export type FeeStructureUpsertWithWhereUniqueWithoutFeeHeadInput = {
    where: Prisma.FeeStructureWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeeStructureUpdateWithoutFeeHeadInput, Prisma.FeeStructureUncheckedUpdateWithoutFeeHeadInput>;
    create: Prisma.XOR<Prisma.FeeStructureCreateWithoutFeeHeadInput, Prisma.FeeStructureUncheckedCreateWithoutFeeHeadInput>;
};
export type FeeStructureUpdateWithWhereUniqueWithoutFeeHeadInput = {
    where: Prisma.FeeStructureWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeeStructureUpdateWithoutFeeHeadInput, Prisma.FeeStructureUncheckedUpdateWithoutFeeHeadInput>;
};
export type FeeStructureUpdateManyWithWhereWithoutFeeHeadInput = {
    where: Prisma.FeeStructureScalarWhereInput;
    data: Prisma.XOR<Prisma.FeeStructureUpdateManyMutationInput, Prisma.FeeStructureUncheckedUpdateManyWithoutFeeHeadInput>;
};
export type FeeStructureCreateManySchoolInput = {
    id?: string;
    classId: string;
    feeHeadId: string;
    academicYearId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeeStructureUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.ClassUpdateOneRequiredWithoutFeeStructuresNestedInput;
    feeHead?: Prisma.FeeHeadUpdateOneRequiredWithoutFeeStructuresNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutFeeStructuresNestedInput;
};
export type FeeStructureUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeStructureUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeStructureCreateManyAcademicYearInput = {
    id?: string;
    schoolId: string;
    classId: string;
    feeHeadId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeeStructureUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutFeeStructuresNestedInput;
    class?: Prisma.ClassUpdateOneRequiredWithoutFeeStructuresNestedInput;
    feeHead?: Prisma.FeeHeadUpdateOneRequiredWithoutFeeStructuresNestedInput;
};
export type FeeStructureUncheckedUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeStructureUncheckedUpdateManyWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeStructureCreateManyClassInput = {
    id?: string;
    schoolId: string;
    feeHeadId: string;
    academicYearId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeeStructureUpdateWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutFeeStructuresNestedInput;
    feeHead?: Prisma.FeeHeadUpdateOneRequiredWithoutFeeStructuresNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutFeeStructuresNestedInput;
};
export type FeeStructureUncheckedUpdateWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeStructureUncheckedUpdateManyWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    feeHeadId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeStructureCreateManyFeeHeadInput = {
    id?: string;
    schoolId: string;
    classId: string;
    academicYearId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency: $Enums.FeeFrequency;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeeStructureUpdateWithoutFeeHeadInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutFeeStructuresNestedInput;
    class?: Prisma.ClassUpdateOneRequiredWithoutFeeStructuresNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutFeeStructuresNestedInput;
};
export type FeeStructureUncheckedUpdateWithoutFeeHeadInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeStructureUncheckedUpdateManyWithoutFeeHeadInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    frequency?: Prisma.EnumFeeFrequencyFieldUpdateOperationsInput | $Enums.FeeFrequency;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeStructureSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    classId?: boolean;
    feeHeadId?: boolean;
    academicYearId?: boolean;
    amount?: boolean;
    frequency?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    feeHead?: boolean | Prisma.FeeHeadDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feeStructure"]>;
export type FeeStructureSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    classId?: boolean;
    feeHeadId?: boolean;
    academicYearId?: boolean;
    amount?: boolean;
    frequency?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    feeHead?: boolean | Prisma.FeeHeadDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feeStructure"]>;
export type FeeStructureSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    classId?: boolean;
    feeHeadId?: boolean;
    academicYearId?: boolean;
    amount?: boolean;
    frequency?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    feeHead?: boolean | Prisma.FeeHeadDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feeStructure"]>;
export type FeeStructureSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    classId?: boolean;
    feeHeadId?: boolean;
    academicYearId?: boolean;
    amount?: boolean;
    frequency?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FeeStructureOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "classId" | "feeHeadId" | "academicYearId" | "amount" | "frequency" | "createdAt" | "updatedAt", ExtArgs["result"]["feeStructure"]>;
export type FeeStructureInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    feeHead?: boolean | Prisma.FeeHeadDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
};
export type FeeStructureIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    feeHead?: boolean | Prisma.FeeHeadDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
};
export type FeeStructureIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    feeHead?: boolean | Prisma.FeeHeadDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
};
export type $FeeStructurePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FeeStructure";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        class: Prisma.$ClassPayload<ExtArgs>;
        feeHead: Prisma.$FeeHeadPayload<ExtArgs>;
        academicYear: Prisma.$AcademicYearPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        classId: string;
        feeHeadId: string;
        academicYearId: string;
        amount: runtime.Decimal;
        frequency: $Enums.FeeFrequency;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["feeStructure"]>;
    composites: {};
};
export type FeeStructureGetPayload<S extends boolean | null | undefined | FeeStructureDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload, S>;
export type FeeStructureCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeeStructureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeeStructureCountAggregateInputType | true;
};
export interface FeeStructureDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FeeStructure'];
        meta: {
            name: 'FeeStructure';
        };
    };
    findUnique<T extends FeeStructureFindUniqueArgs>(args: Prisma.SelectSubset<T, FeeStructureFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeeStructureClient<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FeeStructureFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeeStructureFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeeStructureClient<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FeeStructureFindFirstArgs>(args?: Prisma.SelectSubset<T, FeeStructureFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeeStructureClient<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FeeStructureFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeeStructureFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeeStructureClient<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FeeStructureFindManyArgs>(args?: Prisma.SelectSubset<T, FeeStructureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FeeStructureCreateArgs>(args: Prisma.SelectSubset<T, FeeStructureCreateArgs<ExtArgs>>): Prisma.Prisma__FeeStructureClient<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FeeStructureCreateManyArgs>(args?: Prisma.SelectSubset<T, FeeStructureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FeeStructureCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FeeStructureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FeeStructureDeleteArgs>(args: Prisma.SelectSubset<T, FeeStructureDeleteArgs<ExtArgs>>): Prisma.Prisma__FeeStructureClient<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FeeStructureUpdateArgs>(args: Prisma.SelectSubset<T, FeeStructureUpdateArgs<ExtArgs>>): Prisma.Prisma__FeeStructureClient<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FeeStructureDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeeStructureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FeeStructureUpdateManyArgs>(args: Prisma.SelectSubset<T, FeeStructureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FeeStructureUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FeeStructureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FeeStructureUpsertArgs>(args: Prisma.SelectSubset<T, FeeStructureUpsertArgs<ExtArgs>>): Prisma.Prisma__FeeStructureClient<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FeeStructureCountArgs>(args?: Prisma.Subset<T, FeeStructureCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeeStructureCountAggregateOutputType> : number>;
    aggregate<T extends FeeStructureAggregateArgs>(args: Prisma.Subset<T, FeeStructureAggregateArgs>): Prisma.PrismaPromise<GetFeeStructureAggregateType<T>>;
    groupBy<T extends FeeStructureGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeeStructureGroupByArgs['orderBy'];
    } : {
        orderBy?: FeeStructureGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeeStructureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeStructureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FeeStructureFieldRefs;
}
export interface Prisma__FeeStructureClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    class<T extends Prisma.ClassDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClassDefaultArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    feeHead<T extends Prisma.FeeHeadDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeeHeadDefaultArgs<ExtArgs>>): Prisma.Prisma__FeeHeadClient<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    academicYear<T extends Prisma.AcademicYearDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYearDefaultArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FeeStructureFieldRefs {
    readonly id: Prisma.FieldRef<"FeeStructure", 'String'>;
    readonly schoolId: Prisma.FieldRef<"FeeStructure", 'String'>;
    readonly classId: Prisma.FieldRef<"FeeStructure", 'String'>;
    readonly feeHeadId: Prisma.FieldRef<"FeeStructure", 'String'>;
    readonly academicYearId: Prisma.FieldRef<"FeeStructure", 'String'>;
    readonly amount: Prisma.FieldRef<"FeeStructure", 'Decimal'>;
    readonly frequency: Prisma.FieldRef<"FeeStructure", 'FeeFrequency'>;
    readonly createdAt: Prisma.FieldRef<"FeeStructure", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FeeStructure", 'DateTime'>;
}
export type FeeStructureFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelect<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    include?: Prisma.FeeStructureInclude<ExtArgs> | null;
    where: Prisma.FeeStructureWhereUniqueInput;
};
export type FeeStructureFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelect<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    include?: Prisma.FeeStructureInclude<ExtArgs> | null;
    where: Prisma.FeeStructureWhereUniqueInput;
};
export type FeeStructureFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelect<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    include?: Prisma.FeeStructureInclude<ExtArgs> | null;
    where?: Prisma.FeeStructureWhereInput;
    orderBy?: Prisma.FeeStructureOrderByWithRelationInput | Prisma.FeeStructureOrderByWithRelationInput[];
    cursor?: Prisma.FeeStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeStructureScalarFieldEnum | Prisma.FeeStructureScalarFieldEnum[];
};
export type FeeStructureFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelect<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    include?: Prisma.FeeStructureInclude<ExtArgs> | null;
    where?: Prisma.FeeStructureWhereInput;
    orderBy?: Prisma.FeeStructureOrderByWithRelationInput | Prisma.FeeStructureOrderByWithRelationInput[];
    cursor?: Prisma.FeeStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeStructureScalarFieldEnum | Prisma.FeeStructureScalarFieldEnum[];
};
export type FeeStructureFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelect<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    include?: Prisma.FeeStructureInclude<ExtArgs> | null;
    where?: Prisma.FeeStructureWhereInput;
    orderBy?: Prisma.FeeStructureOrderByWithRelationInput | Prisma.FeeStructureOrderByWithRelationInput[];
    cursor?: Prisma.FeeStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeStructureScalarFieldEnum | Prisma.FeeStructureScalarFieldEnum[];
};
export type FeeStructureCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelect<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    include?: Prisma.FeeStructureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeStructureCreateInput, Prisma.FeeStructureUncheckedCreateInput>;
};
export type FeeStructureCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FeeStructureCreateManyInput | Prisma.FeeStructureCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FeeStructureCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    data: Prisma.FeeStructureCreateManyInput | Prisma.FeeStructureCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FeeStructureIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FeeStructureUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelect<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    include?: Prisma.FeeStructureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeStructureUpdateInput, Prisma.FeeStructureUncheckedUpdateInput>;
    where: Prisma.FeeStructureWhereUniqueInput;
};
export type FeeStructureUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FeeStructureUpdateManyMutationInput, Prisma.FeeStructureUncheckedUpdateManyInput>;
    where?: Prisma.FeeStructureWhereInput;
    limit?: number;
};
export type FeeStructureUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeStructureUpdateManyMutationInput, Prisma.FeeStructureUncheckedUpdateManyInput>;
    where?: Prisma.FeeStructureWhereInput;
    limit?: number;
    include?: Prisma.FeeStructureIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FeeStructureUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelect<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    include?: Prisma.FeeStructureInclude<ExtArgs> | null;
    where: Prisma.FeeStructureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeStructureCreateInput, Prisma.FeeStructureUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FeeStructureUpdateInput, Prisma.FeeStructureUncheckedUpdateInput>;
};
export type FeeStructureDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelect<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    include?: Prisma.FeeStructureInclude<ExtArgs> | null;
    where: Prisma.FeeStructureWhereUniqueInput;
};
export type FeeStructureDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeStructureWhereInput;
    limit?: number;
};
export type FeeStructureDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelect<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    include?: Prisma.FeeStructureInclude<ExtArgs> | null;
};
