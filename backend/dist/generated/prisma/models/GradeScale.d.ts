import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GradeScaleModel = runtime.Types.Result.DefaultSelection<Prisma.$GradeScalePayload>;
export type AggregateGradeScale = {
    _count: GradeScaleCountAggregateOutputType | null;
    _avg: GradeScaleAvgAggregateOutputType | null;
    _sum: GradeScaleSumAggregateOutputType | null;
    _min: GradeScaleMinAggregateOutputType | null;
    _max: GradeScaleMaxAggregateOutputType | null;
};
export type GradeScaleAvgAggregateOutputType = {
    minPercentage: runtime.Decimal | null;
    maxPercentage: runtime.Decimal | null;
};
export type GradeScaleSumAggregateOutputType = {
    minPercentage: runtime.Decimal | null;
    maxPercentage: runtime.Decimal | null;
};
export type GradeScaleMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    grade: string | null;
    minPercentage: runtime.Decimal | null;
    maxPercentage: runtime.Decimal | null;
    remarks: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GradeScaleMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    grade: string | null;
    minPercentage: runtime.Decimal | null;
    maxPercentage: runtime.Decimal | null;
    remarks: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GradeScaleCountAggregateOutputType = {
    id: number;
    schoolId: number;
    grade: number;
    minPercentage: number;
    maxPercentage: number;
    remarks: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GradeScaleAvgAggregateInputType = {
    minPercentage?: true;
    maxPercentage?: true;
};
export type GradeScaleSumAggregateInputType = {
    minPercentage?: true;
    maxPercentage?: true;
};
export type GradeScaleMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    grade?: true;
    minPercentage?: true;
    maxPercentage?: true;
    remarks?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GradeScaleMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    grade?: true;
    minPercentage?: true;
    maxPercentage?: true;
    remarks?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GradeScaleCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    grade?: true;
    minPercentage?: true;
    maxPercentage?: true;
    remarks?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GradeScaleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeScaleWhereInput;
    orderBy?: Prisma.GradeScaleOrderByWithRelationInput | Prisma.GradeScaleOrderByWithRelationInput[];
    cursor?: Prisma.GradeScaleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GradeScaleCountAggregateInputType;
    _avg?: GradeScaleAvgAggregateInputType;
    _sum?: GradeScaleSumAggregateInputType;
    _min?: GradeScaleMinAggregateInputType;
    _max?: GradeScaleMaxAggregateInputType;
};
export type GetGradeScaleAggregateType<T extends GradeScaleAggregateArgs> = {
    [P in keyof T & keyof AggregateGradeScale]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGradeScale[P]> : Prisma.GetScalarType<T[P], AggregateGradeScale[P]>;
};
export type GradeScaleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeScaleWhereInput;
    orderBy?: Prisma.GradeScaleOrderByWithAggregationInput | Prisma.GradeScaleOrderByWithAggregationInput[];
    by: Prisma.GradeScaleScalarFieldEnum[] | Prisma.GradeScaleScalarFieldEnum;
    having?: Prisma.GradeScaleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GradeScaleCountAggregateInputType | true;
    _avg?: GradeScaleAvgAggregateInputType;
    _sum?: GradeScaleSumAggregateInputType;
    _min?: GradeScaleMinAggregateInputType;
    _max?: GradeScaleMaxAggregateInputType;
};
export type GradeScaleGroupByOutputType = {
    id: string;
    schoolId: string;
    grade: string;
    minPercentage: runtime.Decimal;
    maxPercentage: runtime.Decimal;
    remarks: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: GradeScaleCountAggregateOutputType | null;
    _avg: GradeScaleAvgAggregateOutputType | null;
    _sum: GradeScaleSumAggregateOutputType | null;
    _min: GradeScaleMinAggregateOutputType | null;
    _max: GradeScaleMaxAggregateOutputType | null;
};
export type GetGradeScaleGroupByPayload<T extends GradeScaleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GradeScaleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GradeScaleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GradeScaleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GradeScaleGroupByOutputType[P]>;
}>>;
export type GradeScaleWhereInput = {
    AND?: Prisma.GradeScaleWhereInput | Prisma.GradeScaleWhereInput[];
    OR?: Prisma.GradeScaleWhereInput[];
    NOT?: Prisma.GradeScaleWhereInput | Prisma.GradeScaleWhereInput[];
    id?: Prisma.StringFilter<"GradeScale"> | string;
    schoolId?: Prisma.StringFilter<"GradeScale"> | string;
    grade?: Prisma.StringFilter<"GradeScale"> | string;
    minPercentage?: Prisma.DecimalFilter<"GradeScale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage?: Prisma.DecimalFilter<"GradeScale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: Prisma.StringNullableFilter<"GradeScale"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"GradeScale"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GradeScale"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
};
export type GradeScaleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    minPercentage?: Prisma.SortOrder;
    maxPercentage?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
};
export type GradeScaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    schoolId_grade?: Prisma.GradeScaleSchoolIdGradeCompoundUniqueInput;
    AND?: Prisma.GradeScaleWhereInput | Prisma.GradeScaleWhereInput[];
    OR?: Prisma.GradeScaleWhereInput[];
    NOT?: Prisma.GradeScaleWhereInput | Prisma.GradeScaleWhereInput[];
    schoolId?: Prisma.StringFilter<"GradeScale"> | string;
    grade?: Prisma.StringFilter<"GradeScale"> | string;
    minPercentage?: Prisma.DecimalFilter<"GradeScale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage?: Prisma.DecimalFilter<"GradeScale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: Prisma.StringNullableFilter<"GradeScale"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"GradeScale"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GradeScale"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
}, "id" | "schoolId_grade">;
export type GradeScaleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    minPercentage?: Prisma.SortOrder;
    maxPercentage?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GradeScaleCountOrderByAggregateInput;
    _avg?: Prisma.GradeScaleAvgOrderByAggregateInput;
    _max?: Prisma.GradeScaleMaxOrderByAggregateInput;
    _min?: Prisma.GradeScaleMinOrderByAggregateInput;
    _sum?: Prisma.GradeScaleSumOrderByAggregateInput;
};
export type GradeScaleScalarWhereWithAggregatesInput = {
    AND?: Prisma.GradeScaleScalarWhereWithAggregatesInput | Prisma.GradeScaleScalarWhereWithAggregatesInput[];
    OR?: Prisma.GradeScaleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GradeScaleScalarWhereWithAggregatesInput | Prisma.GradeScaleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GradeScale"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"GradeScale"> | string;
    grade?: Prisma.StringWithAggregatesFilter<"GradeScale"> | string;
    minPercentage?: Prisma.DecimalWithAggregatesFilter<"GradeScale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage?: Prisma.DecimalWithAggregatesFilter<"GradeScale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: Prisma.StringNullableWithAggregatesFilter<"GradeScale"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GradeScale"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"GradeScale"> | Date | string;
};
export type GradeScaleCreateInput = {
    id?: string;
    grade: string;
    minPercentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutGradeScalesInput;
};
export type GradeScaleUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    grade: string;
    minPercentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GradeScaleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutGradeScalesNestedInput;
};
export type GradeScaleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeScaleCreateManyInput = {
    id?: string;
    schoolId: string;
    grade: string;
    minPercentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GradeScaleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeScaleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeScaleListRelationFilter = {
    every?: Prisma.GradeScaleWhereInput;
    some?: Prisma.GradeScaleWhereInput;
    none?: Prisma.GradeScaleWhereInput;
};
export type GradeScaleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GradeScaleSchoolIdGradeCompoundUniqueInput = {
    schoolId: string;
    grade: string;
};
export type GradeScaleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    minPercentage?: Prisma.SortOrder;
    maxPercentage?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GradeScaleAvgOrderByAggregateInput = {
    minPercentage?: Prisma.SortOrder;
    maxPercentage?: Prisma.SortOrder;
};
export type GradeScaleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    minPercentage?: Prisma.SortOrder;
    maxPercentage?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GradeScaleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    minPercentage?: Prisma.SortOrder;
    maxPercentage?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GradeScaleSumOrderByAggregateInput = {
    minPercentage?: Prisma.SortOrder;
    maxPercentage?: Prisma.SortOrder;
};
export type GradeScaleCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.GradeScaleCreateWithoutSchoolInput, Prisma.GradeScaleUncheckedCreateWithoutSchoolInput> | Prisma.GradeScaleCreateWithoutSchoolInput[] | Prisma.GradeScaleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.GradeScaleCreateOrConnectWithoutSchoolInput | Prisma.GradeScaleCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.GradeScaleCreateManySchoolInputEnvelope;
    connect?: Prisma.GradeScaleWhereUniqueInput | Prisma.GradeScaleWhereUniqueInput[];
};
export type GradeScaleUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.GradeScaleCreateWithoutSchoolInput, Prisma.GradeScaleUncheckedCreateWithoutSchoolInput> | Prisma.GradeScaleCreateWithoutSchoolInput[] | Prisma.GradeScaleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.GradeScaleCreateOrConnectWithoutSchoolInput | Prisma.GradeScaleCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.GradeScaleCreateManySchoolInputEnvelope;
    connect?: Prisma.GradeScaleWhereUniqueInput | Prisma.GradeScaleWhereUniqueInput[];
};
export type GradeScaleUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.GradeScaleCreateWithoutSchoolInput, Prisma.GradeScaleUncheckedCreateWithoutSchoolInput> | Prisma.GradeScaleCreateWithoutSchoolInput[] | Prisma.GradeScaleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.GradeScaleCreateOrConnectWithoutSchoolInput | Prisma.GradeScaleCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.GradeScaleUpsertWithWhereUniqueWithoutSchoolInput | Prisma.GradeScaleUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.GradeScaleCreateManySchoolInputEnvelope;
    set?: Prisma.GradeScaleWhereUniqueInput | Prisma.GradeScaleWhereUniqueInput[];
    disconnect?: Prisma.GradeScaleWhereUniqueInput | Prisma.GradeScaleWhereUniqueInput[];
    delete?: Prisma.GradeScaleWhereUniqueInput | Prisma.GradeScaleWhereUniqueInput[];
    connect?: Prisma.GradeScaleWhereUniqueInput | Prisma.GradeScaleWhereUniqueInput[];
    update?: Prisma.GradeScaleUpdateWithWhereUniqueWithoutSchoolInput | Prisma.GradeScaleUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.GradeScaleUpdateManyWithWhereWithoutSchoolInput | Prisma.GradeScaleUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.GradeScaleScalarWhereInput | Prisma.GradeScaleScalarWhereInput[];
};
export type GradeScaleUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.GradeScaleCreateWithoutSchoolInput, Prisma.GradeScaleUncheckedCreateWithoutSchoolInput> | Prisma.GradeScaleCreateWithoutSchoolInput[] | Prisma.GradeScaleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.GradeScaleCreateOrConnectWithoutSchoolInput | Prisma.GradeScaleCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.GradeScaleUpsertWithWhereUniqueWithoutSchoolInput | Prisma.GradeScaleUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.GradeScaleCreateManySchoolInputEnvelope;
    set?: Prisma.GradeScaleWhereUniqueInput | Prisma.GradeScaleWhereUniqueInput[];
    disconnect?: Prisma.GradeScaleWhereUniqueInput | Prisma.GradeScaleWhereUniqueInput[];
    delete?: Prisma.GradeScaleWhereUniqueInput | Prisma.GradeScaleWhereUniqueInput[];
    connect?: Prisma.GradeScaleWhereUniqueInput | Prisma.GradeScaleWhereUniqueInput[];
    update?: Prisma.GradeScaleUpdateWithWhereUniqueWithoutSchoolInput | Prisma.GradeScaleUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.GradeScaleUpdateManyWithWhereWithoutSchoolInput | Prisma.GradeScaleUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.GradeScaleScalarWhereInput | Prisma.GradeScaleScalarWhereInput[];
};
export type GradeScaleCreateWithoutSchoolInput = {
    id?: string;
    grade: string;
    minPercentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GradeScaleUncheckedCreateWithoutSchoolInput = {
    id?: string;
    grade: string;
    minPercentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GradeScaleCreateOrConnectWithoutSchoolInput = {
    where: Prisma.GradeScaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.GradeScaleCreateWithoutSchoolInput, Prisma.GradeScaleUncheckedCreateWithoutSchoolInput>;
};
export type GradeScaleCreateManySchoolInputEnvelope = {
    data: Prisma.GradeScaleCreateManySchoolInput | Prisma.GradeScaleCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type GradeScaleUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.GradeScaleWhereUniqueInput;
    update: Prisma.XOR<Prisma.GradeScaleUpdateWithoutSchoolInput, Prisma.GradeScaleUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.GradeScaleCreateWithoutSchoolInput, Prisma.GradeScaleUncheckedCreateWithoutSchoolInput>;
};
export type GradeScaleUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.GradeScaleWhereUniqueInput;
    data: Prisma.XOR<Prisma.GradeScaleUpdateWithoutSchoolInput, Prisma.GradeScaleUncheckedUpdateWithoutSchoolInput>;
};
export type GradeScaleUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.GradeScaleScalarWhereInput;
    data: Prisma.XOR<Prisma.GradeScaleUpdateManyMutationInput, Prisma.GradeScaleUncheckedUpdateManyWithoutSchoolInput>;
};
export type GradeScaleScalarWhereInput = {
    AND?: Prisma.GradeScaleScalarWhereInput | Prisma.GradeScaleScalarWhereInput[];
    OR?: Prisma.GradeScaleScalarWhereInput[];
    NOT?: Prisma.GradeScaleScalarWhereInput | Prisma.GradeScaleScalarWhereInput[];
    id?: Prisma.StringFilter<"GradeScale"> | string;
    schoolId?: Prisma.StringFilter<"GradeScale"> | string;
    grade?: Prisma.StringFilter<"GradeScale"> | string;
    minPercentage?: Prisma.DecimalFilter<"GradeScale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage?: Prisma.DecimalFilter<"GradeScale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: Prisma.StringNullableFilter<"GradeScale"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"GradeScale"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"GradeScale"> | Date | string;
};
export type GradeScaleCreateManySchoolInput = {
    id?: string;
    grade: string;
    minPercentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GradeScaleUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeScaleUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeScaleUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grade?: Prisma.StringFieldUpdateOperationsInput | string;
    minPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    maxPercentage?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeScaleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    grade?: boolean;
    minPercentage?: boolean;
    maxPercentage?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gradeScale"]>;
export type GradeScaleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    grade?: boolean;
    minPercentage?: boolean;
    maxPercentage?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gradeScale"]>;
export type GradeScaleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    grade?: boolean;
    minPercentage?: boolean;
    maxPercentage?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gradeScale"]>;
export type GradeScaleSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    grade?: boolean;
    minPercentage?: boolean;
    maxPercentage?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GradeScaleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "grade" | "minPercentage" | "maxPercentage" | "remarks" | "createdAt" | "updatedAt", ExtArgs["result"]["gradeScale"]>;
export type GradeScaleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type GradeScaleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type GradeScaleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type $GradeScalePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GradeScale";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        grade: string;
        minPercentage: runtime.Decimal;
        maxPercentage: runtime.Decimal;
        remarks: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["gradeScale"]>;
    composites: {};
};
export type GradeScaleGetPayload<S extends boolean | null | undefined | GradeScaleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GradeScalePayload, S>;
export type GradeScaleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GradeScaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GradeScaleCountAggregateInputType | true;
};
export interface GradeScaleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GradeScale'];
        meta: {
            name: 'GradeScale';
        };
    };
    findUnique<T extends GradeScaleFindUniqueArgs>(args: Prisma.SelectSubset<T, GradeScaleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GradeScaleClient<runtime.Types.Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GradeScaleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GradeScaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GradeScaleClient<runtime.Types.Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GradeScaleFindFirstArgs>(args?: Prisma.SelectSubset<T, GradeScaleFindFirstArgs<ExtArgs>>): Prisma.Prisma__GradeScaleClient<runtime.Types.Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GradeScaleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GradeScaleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GradeScaleClient<runtime.Types.Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GradeScaleFindManyArgs>(args?: Prisma.SelectSubset<T, GradeScaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GradeScaleCreateArgs>(args: Prisma.SelectSubset<T, GradeScaleCreateArgs<ExtArgs>>): Prisma.Prisma__GradeScaleClient<runtime.Types.Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GradeScaleCreateManyArgs>(args?: Prisma.SelectSubset<T, GradeScaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GradeScaleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GradeScaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GradeScaleDeleteArgs>(args: Prisma.SelectSubset<T, GradeScaleDeleteArgs<ExtArgs>>): Prisma.Prisma__GradeScaleClient<runtime.Types.Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GradeScaleUpdateArgs>(args: Prisma.SelectSubset<T, GradeScaleUpdateArgs<ExtArgs>>): Prisma.Prisma__GradeScaleClient<runtime.Types.Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GradeScaleDeleteManyArgs>(args?: Prisma.SelectSubset<T, GradeScaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GradeScaleUpdateManyArgs>(args: Prisma.SelectSubset<T, GradeScaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GradeScaleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GradeScaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GradeScaleUpsertArgs>(args: Prisma.SelectSubset<T, GradeScaleUpsertArgs<ExtArgs>>): Prisma.Prisma__GradeScaleClient<runtime.Types.Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GradeScaleCountArgs>(args?: Prisma.Subset<T, GradeScaleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GradeScaleCountAggregateOutputType> : number>;
    aggregate<T extends GradeScaleAggregateArgs>(args: Prisma.Subset<T, GradeScaleAggregateArgs>): Prisma.PrismaPromise<GetGradeScaleAggregateType<T>>;
    groupBy<T extends GradeScaleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GradeScaleGroupByArgs['orderBy'];
    } : {
        orderBy?: GradeScaleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GradeScaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeScaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GradeScaleFieldRefs;
}
export interface Prisma__GradeScaleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GradeScaleFieldRefs {
    readonly id: Prisma.FieldRef<"GradeScale", 'String'>;
    readonly schoolId: Prisma.FieldRef<"GradeScale", 'String'>;
    readonly grade: Prisma.FieldRef<"GradeScale", 'String'>;
    readonly minPercentage: Prisma.FieldRef<"GradeScale", 'Decimal'>;
    readonly maxPercentage: Prisma.FieldRef<"GradeScale", 'Decimal'>;
    readonly remarks: Prisma.FieldRef<"GradeScale", 'String'>;
    readonly createdAt: Prisma.FieldRef<"GradeScale", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"GradeScale", 'DateTime'>;
}
export type GradeScaleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeScaleSelect<ExtArgs> | null;
    omit?: Prisma.GradeScaleOmit<ExtArgs> | null;
    include?: Prisma.GradeScaleInclude<ExtArgs> | null;
    where: Prisma.GradeScaleWhereUniqueInput;
};
export type GradeScaleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeScaleSelect<ExtArgs> | null;
    omit?: Prisma.GradeScaleOmit<ExtArgs> | null;
    include?: Prisma.GradeScaleInclude<ExtArgs> | null;
    where: Prisma.GradeScaleWhereUniqueInput;
};
export type GradeScaleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeScaleSelect<ExtArgs> | null;
    omit?: Prisma.GradeScaleOmit<ExtArgs> | null;
    include?: Prisma.GradeScaleInclude<ExtArgs> | null;
    where?: Prisma.GradeScaleWhereInput;
    orderBy?: Prisma.GradeScaleOrderByWithRelationInput | Prisma.GradeScaleOrderByWithRelationInput[];
    cursor?: Prisma.GradeScaleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeScaleScalarFieldEnum | Prisma.GradeScaleScalarFieldEnum[];
};
export type GradeScaleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeScaleSelect<ExtArgs> | null;
    omit?: Prisma.GradeScaleOmit<ExtArgs> | null;
    include?: Prisma.GradeScaleInclude<ExtArgs> | null;
    where?: Prisma.GradeScaleWhereInput;
    orderBy?: Prisma.GradeScaleOrderByWithRelationInput | Prisma.GradeScaleOrderByWithRelationInput[];
    cursor?: Prisma.GradeScaleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeScaleScalarFieldEnum | Prisma.GradeScaleScalarFieldEnum[];
};
export type GradeScaleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeScaleSelect<ExtArgs> | null;
    omit?: Prisma.GradeScaleOmit<ExtArgs> | null;
    include?: Prisma.GradeScaleInclude<ExtArgs> | null;
    where?: Prisma.GradeScaleWhereInput;
    orderBy?: Prisma.GradeScaleOrderByWithRelationInput | Prisma.GradeScaleOrderByWithRelationInput[];
    cursor?: Prisma.GradeScaleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeScaleScalarFieldEnum | Prisma.GradeScaleScalarFieldEnum[];
};
export type GradeScaleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeScaleSelect<ExtArgs> | null;
    omit?: Prisma.GradeScaleOmit<ExtArgs> | null;
    include?: Prisma.GradeScaleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradeScaleCreateInput, Prisma.GradeScaleUncheckedCreateInput>;
};
export type GradeScaleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GradeScaleCreateManyInput | Prisma.GradeScaleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GradeScaleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeScaleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GradeScaleOmit<ExtArgs> | null;
    data: Prisma.GradeScaleCreateManyInput | Prisma.GradeScaleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GradeScaleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GradeScaleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeScaleSelect<ExtArgs> | null;
    omit?: Prisma.GradeScaleOmit<ExtArgs> | null;
    include?: Prisma.GradeScaleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradeScaleUpdateInput, Prisma.GradeScaleUncheckedUpdateInput>;
    where: Prisma.GradeScaleWhereUniqueInput;
};
export type GradeScaleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GradeScaleUpdateManyMutationInput, Prisma.GradeScaleUncheckedUpdateManyInput>;
    where?: Prisma.GradeScaleWhereInput;
    limit?: number;
};
export type GradeScaleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeScaleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GradeScaleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradeScaleUpdateManyMutationInput, Prisma.GradeScaleUncheckedUpdateManyInput>;
    where?: Prisma.GradeScaleWhereInput;
    limit?: number;
    include?: Prisma.GradeScaleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GradeScaleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeScaleSelect<ExtArgs> | null;
    omit?: Prisma.GradeScaleOmit<ExtArgs> | null;
    include?: Prisma.GradeScaleInclude<ExtArgs> | null;
    where: Prisma.GradeScaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.GradeScaleCreateInput, Prisma.GradeScaleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GradeScaleUpdateInput, Prisma.GradeScaleUncheckedUpdateInput>;
};
export type GradeScaleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeScaleSelect<ExtArgs> | null;
    omit?: Prisma.GradeScaleOmit<ExtArgs> | null;
    include?: Prisma.GradeScaleInclude<ExtArgs> | null;
    where: Prisma.GradeScaleWhereUniqueInput;
};
export type GradeScaleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeScaleWhereInput;
    limit?: number;
};
export type GradeScaleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeScaleSelect<ExtArgs> | null;
    omit?: Prisma.GradeScaleOmit<ExtArgs> | null;
    include?: Prisma.GradeScaleInclude<ExtArgs> | null;
};
