import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetPayload>;
export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null;
    _avg: AssetAvgAggregateOutputType | null;
    _sum: AssetSumAggregateOutputType | null;
    _min: AssetMinAggregateOutputType | null;
    _max: AssetMaxAggregateOutputType | null;
};
export type AssetAvgAggregateOutputType = {
    purchaseCost: runtime.Decimal | null;
};
export type AssetSumAggregateOutputType = {
    purchaseCost: runtime.Decimal | null;
};
export type AssetMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    categoryId: string | null;
    name: string | null;
    serialNumber: string | null;
    purchaseDate: Date | null;
    purchaseCost: runtime.Decimal | null;
    status: $Enums.AssetStatus | null;
    assignedToTeacherId: string | null;
    location: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AssetMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    categoryId: string | null;
    name: string | null;
    serialNumber: string | null;
    purchaseDate: Date | null;
    purchaseCost: runtime.Decimal | null;
    status: $Enums.AssetStatus | null;
    assignedToTeacherId: string | null;
    location: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AssetCountAggregateOutputType = {
    id: number;
    schoolId: number;
    branchId: number;
    categoryId: number;
    name: number;
    serialNumber: number;
    purchaseDate: number;
    purchaseCost: number;
    status: number;
    assignedToTeacherId: number;
    location: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AssetAvgAggregateInputType = {
    purchaseCost?: true;
};
export type AssetSumAggregateInputType = {
    purchaseCost?: true;
};
export type AssetMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    categoryId?: true;
    name?: true;
    serialNumber?: true;
    purchaseDate?: true;
    purchaseCost?: true;
    status?: true;
    assignedToTeacherId?: true;
    location?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AssetMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    categoryId?: true;
    name?: true;
    serialNumber?: true;
    purchaseDate?: true;
    purchaseCost?: true;
    status?: true;
    assignedToTeacherId?: true;
    location?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AssetCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    categoryId?: true;
    name?: true;
    serialNumber?: true;
    purchaseDate?: true;
    purchaseCost?: true;
    status?: true;
    assignedToTeacherId?: true;
    location?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AssetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetCountAggregateInputType;
    _avg?: AssetAvgAggregateInputType;
    _sum?: AssetSumAggregateInputType;
    _min?: AssetMinAggregateInputType;
    _max?: AssetMaxAggregateInputType;
};
export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
    [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAsset[P]> : Prisma.GetScalarType<T[P], AggregateAsset[P]>;
};
export type AssetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithAggregationInput | Prisma.AssetOrderByWithAggregationInput[];
    by: Prisma.AssetScalarFieldEnum[] | Prisma.AssetScalarFieldEnum;
    having?: Prisma.AssetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetCountAggregateInputType | true;
    _avg?: AssetAvgAggregateInputType;
    _sum?: AssetSumAggregateInputType;
    _min?: AssetMinAggregateInputType;
    _max?: AssetMaxAggregateInputType;
};
export type AssetGroupByOutputType = {
    id: string;
    schoolId: string;
    branchId: string;
    categoryId: string;
    name: string;
    serialNumber: string | null;
    purchaseDate: Date | null;
    purchaseCost: runtime.Decimal | null;
    status: $Enums.AssetStatus;
    assignedToTeacherId: string | null;
    location: string | null;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AssetCountAggregateOutputType | null;
    _avg: AssetAvgAggregateOutputType | null;
    _sum: AssetSumAggregateOutputType | null;
    _min: AssetMinAggregateOutputType | null;
    _max: AssetMaxAggregateOutputType | null;
};
export type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetGroupByOutputType[P]>;
}>>;
export type AssetWhereInput = {
    AND?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    OR?: Prisma.AssetWhereInput[];
    NOT?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    id?: Prisma.StringFilter<"Asset"> | string;
    schoolId?: Prisma.StringFilter<"Asset"> | string;
    branchId?: Prisma.StringFilter<"Asset"> | string;
    categoryId?: Prisma.StringFilter<"Asset"> | string;
    name?: Prisma.StringFilter<"Asset"> | string;
    serialNumber?: Prisma.StringNullableFilter<"Asset"> | string | null;
    purchaseDate?: Prisma.DateTimeNullableFilter<"Asset"> | Date | string | null;
    purchaseCost?: Prisma.DecimalNullableFilter<"Asset"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus;
    assignedToTeacherId?: Prisma.StringNullableFilter<"Asset"> | string | null;
    location?: Prisma.StringNullableFilter<"Asset"> | string | null;
    notes?: Prisma.StringNullableFilter<"Asset"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    category?: Prisma.XOR<Prisma.AssetCategoryScalarRelationFilter, Prisma.AssetCategoryWhereInput>;
    assignedToTeacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
};
export type AssetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchaseCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedToTeacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    branch?: Prisma.BranchOrderByWithRelationInput;
    category?: Prisma.AssetCategoryOrderByWithRelationInput;
    assignedToTeacher?: Prisma.TeacherOrderByWithRelationInput;
};
export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    OR?: Prisma.AssetWhereInput[];
    NOT?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    schoolId?: Prisma.StringFilter<"Asset"> | string;
    branchId?: Prisma.StringFilter<"Asset"> | string;
    categoryId?: Prisma.StringFilter<"Asset"> | string;
    name?: Prisma.StringFilter<"Asset"> | string;
    serialNumber?: Prisma.StringNullableFilter<"Asset"> | string | null;
    purchaseDate?: Prisma.DateTimeNullableFilter<"Asset"> | Date | string | null;
    purchaseCost?: Prisma.DecimalNullableFilter<"Asset"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus;
    assignedToTeacherId?: Prisma.StringNullableFilter<"Asset"> | string | null;
    location?: Prisma.StringNullableFilter<"Asset"> | string | null;
    notes?: Prisma.StringNullableFilter<"Asset"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    category?: Prisma.XOR<Prisma.AssetCategoryScalarRelationFilter, Prisma.AssetCategoryWhereInput>;
    assignedToTeacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
}, "id">;
export type AssetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchaseCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedToTeacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AssetCountOrderByAggregateInput;
    _avg?: Prisma.AssetAvgOrderByAggregateInput;
    _max?: Prisma.AssetMaxOrderByAggregateInput;
    _min?: Prisma.AssetMinOrderByAggregateInput;
    _sum?: Prisma.AssetSumOrderByAggregateInput;
};
export type AssetScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetScalarWhereWithAggregatesInput | Prisma.AssetScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetScalarWhereWithAggregatesInput | Prisma.AssetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    branchId?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    categoryId?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    serialNumber?: Prisma.StringNullableWithAggregatesFilter<"Asset"> | string | null;
    purchaseDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null;
    purchaseCost?: Prisma.DecimalNullableWithAggregatesFilter<"Asset"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusWithAggregatesFilter<"Asset"> | $Enums.AssetStatus;
    assignedToTeacherId?: Prisma.StringNullableWithAggregatesFilter<"Asset"> | string | null;
    location?: Prisma.StringNullableWithAggregatesFilter<"Asset"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Asset"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Asset"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Asset"> | Date | string;
};
export type AssetCreateInput = {
    id?: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAssetsInput;
    branch: Prisma.BranchCreateNestedOneWithoutAssetsInput;
    category: Prisma.AssetCategoryCreateNestedOneWithoutAssetsInput;
    assignedToTeacher?: Prisma.TeacherCreateNestedOneWithoutAssignedAssetsInput;
};
export type AssetUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    categoryId: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    assignedToTeacherId?: string | null;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAssetsNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutAssetsNestedInput;
    category?: Prisma.AssetCategoryUpdateOneRequiredWithoutAssetsNestedInput;
    assignedToTeacher?: Prisma.TeacherUpdateOneWithoutAssignedAssetsNestedInput;
};
export type AssetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    assignedToTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetCreateManyInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    categoryId: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    assignedToTeacherId?: string | null;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    assignedToTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetListRelationFilter = {
    every?: Prisma.AssetWhereInput;
    some?: Prisma.AssetWhereInput;
    none?: Prisma.AssetWhereInput;
};
export type AssetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    purchaseCost?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedToTeacherId?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AssetAvgOrderByAggregateInput = {
    purchaseCost?: Prisma.SortOrder;
};
export type AssetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    purchaseCost?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedToTeacherId?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AssetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    purchaseCost?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedToTeacherId?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AssetSumOrderByAggregateInput = {
    purchaseCost?: Prisma.SortOrder;
};
export type AssetCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutSchoolInput, Prisma.AssetUncheckedCreateWithoutSchoolInput> | Prisma.AssetCreateWithoutSchoolInput[] | Prisma.AssetUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutSchoolInput | Prisma.AssetCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.AssetCreateManySchoolInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutSchoolInput, Prisma.AssetUncheckedCreateWithoutSchoolInput> | Prisma.AssetCreateWithoutSchoolInput[] | Prisma.AssetUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutSchoolInput | Prisma.AssetCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.AssetCreateManySchoolInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutSchoolInput, Prisma.AssetUncheckedCreateWithoutSchoolInput> | Prisma.AssetCreateWithoutSchoolInput[] | Prisma.AssetUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutSchoolInput | Prisma.AssetCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutSchoolInput | Prisma.AssetUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.AssetCreateManySchoolInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutSchoolInput | Prisma.AssetUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutSchoolInput | Prisma.AssetUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutSchoolInput, Prisma.AssetUncheckedCreateWithoutSchoolInput> | Prisma.AssetCreateWithoutSchoolInput[] | Prisma.AssetUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutSchoolInput | Prisma.AssetCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutSchoolInput | Prisma.AssetUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.AssetCreateManySchoolInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutSchoolInput | Prisma.AssetUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutSchoolInput | Prisma.AssetUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutBranchInput, Prisma.AssetUncheckedCreateWithoutBranchInput> | Prisma.AssetCreateWithoutBranchInput[] | Prisma.AssetUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutBranchInput | Prisma.AssetCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.AssetCreateManyBranchInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutBranchInput, Prisma.AssetUncheckedCreateWithoutBranchInput> | Prisma.AssetCreateWithoutBranchInput[] | Prisma.AssetUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutBranchInput | Prisma.AssetCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.AssetCreateManyBranchInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutBranchInput, Prisma.AssetUncheckedCreateWithoutBranchInput> | Prisma.AssetCreateWithoutBranchInput[] | Prisma.AssetUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutBranchInput | Prisma.AssetCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutBranchInput | Prisma.AssetUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.AssetCreateManyBranchInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutBranchInput | Prisma.AssetUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutBranchInput | Prisma.AssetUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutBranchInput, Prisma.AssetUncheckedCreateWithoutBranchInput> | Prisma.AssetCreateWithoutBranchInput[] | Prisma.AssetUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutBranchInput | Prisma.AssetCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutBranchInput | Prisma.AssetUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.AssetCreateManyBranchInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutBranchInput | Prisma.AssetUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutBranchInput | Prisma.AssetUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetCreateNestedManyWithoutAssignedToTeacherInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutAssignedToTeacherInput, Prisma.AssetUncheckedCreateWithoutAssignedToTeacherInput> | Prisma.AssetCreateWithoutAssignedToTeacherInput[] | Prisma.AssetUncheckedCreateWithoutAssignedToTeacherInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutAssignedToTeacherInput | Prisma.AssetCreateOrConnectWithoutAssignedToTeacherInput[];
    createMany?: Prisma.AssetCreateManyAssignedToTeacherInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUncheckedCreateNestedManyWithoutAssignedToTeacherInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutAssignedToTeacherInput, Prisma.AssetUncheckedCreateWithoutAssignedToTeacherInput> | Prisma.AssetCreateWithoutAssignedToTeacherInput[] | Prisma.AssetUncheckedCreateWithoutAssignedToTeacherInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutAssignedToTeacherInput | Prisma.AssetCreateOrConnectWithoutAssignedToTeacherInput[];
    createMany?: Prisma.AssetCreateManyAssignedToTeacherInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUpdateManyWithoutAssignedToTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutAssignedToTeacherInput, Prisma.AssetUncheckedCreateWithoutAssignedToTeacherInput> | Prisma.AssetCreateWithoutAssignedToTeacherInput[] | Prisma.AssetUncheckedCreateWithoutAssignedToTeacherInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutAssignedToTeacherInput | Prisma.AssetCreateOrConnectWithoutAssignedToTeacherInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutAssignedToTeacherInput | Prisma.AssetUpsertWithWhereUniqueWithoutAssignedToTeacherInput[];
    createMany?: Prisma.AssetCreateManyAssignedToTeacherInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutAssignedToTeacherInput | Prisma.AssetUpdateWithWhereUniqueWithoutAssignedToTeacherInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutAssignedToTeacherInput | Prisma.AssetUpdateManyWithWhereWithoutAssignedToTeacherInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetUncheckedUpdateManyWithoutAssignedToTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutAssignedToTeacherInput, Prisma.AssetUncheckedCreateWithoutAssignedToTeacherInput> | Prisma.AssetCreateWithoutAssignedToTeacherInput[] | Prisma.AssetUncheckedCreateWithoutAssignedToTeacherInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutAssignedToTeacherInput | Prisma.AssetCreateOrConnectWithoutAssignedToTeacherInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutAssignedToTeacherInput | Prisma.AssetUpsertWithWhereUniqueWithoutAssignedToTeacherInput[];
    createMany?: Prisma.AssetCreateManyAssignedToTeacherInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutAssignedToTeacherInput | Prisma.AssetUpdateWithWhereUniqueWithoutAssignedToTeacherInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutAssignedToTeacherInput | Prisma.AssetUpdateManyWithWhereWithoutAssignedToTeacherInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutCategoryInput, Prisma.AssetUncheckedCreateWithoutCategoryInput> | Prisma.AssetCreateWithoutCategoryInput[] | Prisma.AssetUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutCategoryInput | Prisma.AssetCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.AssetCreateManyCategoryInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutCategoryInput, Prisma.AssetUncheckedCreateWithoutCategoryInput> | Prisma.AssetCreateWithoutCategoryInput[] | Prisma.AssetUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutCategoryInput | Prisma.AssetCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.AssetCreateManyCategoryInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutCategoryInput, Prisma.AssetUncheckedCreateWithoutCategoryInput> | Prisma.AssetCreateWithoutCategoryInput[] | Prisma.AssetUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutCategoryInput | Prisma.AssetCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutCategoryInput | Prisma.AssetUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.AssetCreateManyCategoryInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutCategoryInput | Prisma.AssetUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutCategoryInput | Prisma.AssetUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutCategoryInput, Prisma.AssetUncheckedCreateWithoutCategoryInput> | Prisma.AssetCreateWithoutCategoryInput[] | Prisma.AssetUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutCategoryInput | Prisma.AssetCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutCategoryInput | Prisma.AssetUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.AssetCreateManyCategoryInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutCategoryInput | Prisma.AssetUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutCategoryInput | Prisma.AssetUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type EnumAssetStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssetStatus;
};
export type AssetCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch: Prisma.BranchCreateNestedOneWithoutAssetsInput;
    category: Prisma.AssetCategoryCreateNestedOneWithoutAssetsInput;
    assignedToTeacher?: Prisma.TeacherCreateNestedOneWithoutAssignedAssetsInput;
};
export type AssetUncheckedCreateWithoutSchoolInput = {
    id?: string;
    branchId: string;
    categoryId: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    assignedToTeacherId?: string | null;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetCreateOrConnectWithoutSchoolInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutSchoolInput, Prisma.AssetUncheckedCreateWithoutSchoolInput>;
};
export type AssetCreateManySchoolInputEnvelope = {
    data: Prisma.AssetCreateManySchoolInput | Prisma.AssetCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type AssetUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.AssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetUpdateWithoutSchoolInput, Prisma.AssetUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutSchoolInput, Prisma.AssetUncheckedCreateWithoutSchoolInput>;
};
export type AssetUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.AssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutSchoolInput, Prisma.AssetUncheckedUpdateWithoutSchoolInput>;
};
export type AssetUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.AssetScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyWithoutSchoolInput>;
};
export type AssetScalarWhereInput = {
    AND?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
    OR?: Prisma.AssetScalarWhereInput[];
    NOT?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
    id?: Prisma.StringFilter<"Asset"> | string;
    schoolId?: Prisma.StringFilter<"Asset"> | string;
    branchId?: Prisma.StringFilter<"Asset"> | string;
    categoryId?: Prisma.StringFilter<"Asset"> | string;
    name?: Prisma.StringFilter<"Asset"> | string;
    serialNumber?: Prisma.StringNullableFilter<"Asset"> | string | null;
    purchaseDate?: Prisma.DateTimeNullableFilter<"Asset"> | Date | string | null;
    purchaseCost?: Prisma.DecimalNullableFilter<"Asset"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus;
    assignedToTeacherId?: Prisma.StringNullableFilter<"Asset"> | string | null;
    location?: Prisma.StringNullableFilter<"Asset"> | string | null;
    notes?: Prisma.StringNullableFilter<"Asset"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
};
export type AssetCreateWithoutBranchInput = {
    id?: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAssetsInput;
    category: Prisma.AssetCategoryCreateNestedOneWithoutAssetsInput;
    assignedToTeacher?: Prisma.TeacherCreateNestedOneWithoutAssignedAssetsInput;
};
export type AssetUncheckedCreateWithoutBranchInput = {
    id?: string;
    schoolId: string;
    categoryId: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    assignedToTeacherId?: string | null;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetCreateOrConnectWithoutBranchInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutBranchInput, Prisma.AssetUncheckedCreateWithoutBranchInput>;
};
export type AssetCreateManyBranchInputEnvelope = {
    data: Prisma.AssetCreateManyBranchInput | Prisma.AssetCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type AssetUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.AssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetUpdateWithoutBranchInput, Prisma.AssetUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutBranchInput, Prisma.AssetUncheckedCreateWithoutBranchInput>;
};
export type AssetUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.AssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutBranchInput, Prisma.AssetUncheckedUpdateWithoutBranchInput>;
};
export type AssetUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.AssetScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyWithoutBranchInput>;
};
export type AssetCreateWithoutAssignedToTeacherInput = {
    id?: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAssetsInput;
    branch: Prisma.BranchCreateNestedOneWithoutAssetsInput;
    category: Prisma.AssetCategoryCreateNestedOneWithoutAssetsInput;
};
export type AssetUncheckedCreateWithoutAssignedToTeacherInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    categoryId: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetCreateOrConnectWithoutAssignedToTeacherInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutAssignedToTeacherInput, Prisma.AssetUncheckedCreateWithoutAssignedToTeacherInput>;
};
export type AssetCreateManyAssignedToTeacherInputEnvelope = {
    data: Prisma.AssetCreateManyAssignedToTeacherInput | Prisma.AssetCreateManyAssignedToTeacherInput[];
    skipDuplicates?: boolean;
};
export type AssetUpsertWithWhereUniqueWithoutAssignedToTeacherInput = {
    where: Prisma.AssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetUpdateWithoutAssignedToTeacherInput, Prisma.AssetUncheckedUpdateWithoutAssignedToTeacherInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutAssignedToTeacherInput, Prisma.AssetUncheckedCreateWithoutAssignedToTeacherInput>;
};
export type AssetUpdateWithWhereUniqueWithoutAssignedToTeacherInput = {
    where: Prisma.AssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutAssignedToTeacherInput, Prisma.AssetUncheckedUpdateWithoutAssignedToTeacherInput>;
};
export type AssetUpdateManyWithWhereWithoutAssignedToTeacherInput = {
    where: Prisma.AssetScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyWithoutAssignedToTeacherInput>;
};
export type AssetCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAssetsInput;
    branch: Prisma.BranchCreateNestedOneWithoutAssetsInput;
    assignedToTeacher?: Prisma.TeacherCreateNestedOneWithoutAssignedAssetsInput;
};
export type AssetUncheckedCreateWithoutCategoryInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    assignedToTeacherId?: string | null;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetCreateOrConnectWithoutCategoryInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutCategoryInput, Prisma.AssetUncheckedCreateWithoutCategoryInput>;
};
export type AssetCreateManyCategoryInputEnvelope = {
    data: Prisma.AssetCreateManyCategoryInput | Prisma.AssetCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type AssetUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.AssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetUpdateWithoutCategoryInput, Prisma.AssetUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutCategoryInput, Prisma.AssetUncheckedCreateWithoutCategoryInput>;
};
export type AssetUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.AssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutCategoryInput, Prisma.AssetUncheckedUpdateWithoutCategoryInput>;
};
export type AssetUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.AssetScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyWithoutCategoryInput>;
};
export type AssetCreateManySchoolInput = {
    id?: string;
    branchId: string;
    categoryId: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    assignedToTeacherId?: string | null;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneRequiredWithoutAssetsNestedInput;
    category?: Prisma.AssetCategoryUpdateOneRequiredWithoutAssetsNestedInput;
    assignedToTeacher?: Prisma.TeacherUpdateOneWithoutAssignedAssetsNestedInput;
};
export type AssetUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    assignedToTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    assignedToTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetCreateManyBranchInput = {
    id?: string;
    schoolId: string;
    categoryId: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    assignedToTeacherId?: string | null;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAssetsNestedInput;
    category?: Prisma.AssetCategoryUpdateOneRequiredWithoutAssetsNestedInput;
    assignedToTeacher?: Prisma.TeacherUpdateOneWithoutAssignedAssetsNestedInput;
};
export type AssetUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    assignedToTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    assignedToTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetCreateManyAssignedToTeacherInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    categoryId: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetUpdateWithoutAssignedToTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAssetsNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutAssetsNestedInput;
    category?: Prisma.AssetCategoryUpdateOneRequiredWithoutAssetsNestedInput;
};
export type AssetUncheckedUpdateWithoutAssignedToTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetUncheckedUpdateManyWithoutAssignedToTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetCreateManyCategoryInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    serialNumber?: string | null;
    purchaseDate?: Date | string | null;
    purchaseCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.AssetStatus;
    assignedToTeacherId?: string | null;
    location?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAssetsNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutAssetsNestedInput;
    assignedToTeacher?: Prisma.TeacherUpdateOneWithoutAssignedAssetsNestedInput;
};
export type AssetUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    assignedToTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchaseCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    assignedToTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    categoryId?: boolean;
    name?: boolean;
    serialNumber?: boolean;
    purchaseDate?: boolean;
    purchaseCost?: boolean;
    status?: boolean;
    assignedToTeacherId?: boolean;
    location?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.AssetCategoryDefaultArgs<ExtArgs>;
    assignedToTeacher?: boolean | Prisma.Asset$assignedToTeacherArgs<ExtArgs>;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    categoryId?: boolean;
    name?: boolean;
    serialNumber?: boolean;
    purchaseDate?: boolean;
    purchaseCost?: boolean;
    status?: boolean;
    assignedToTeacherId?: boolean;
    location?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.AssetCategoryDefaultArgs<ExtArgs>;
    assignedToTeacher?: boolean | Prisma.Asset$assignedToTeacherArgs<ExtArgs>;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    categoryId?: boolean;
    name?: boolean;
    serialNumber?: boolean;
    purchaseDate?: boolean;
    purchaseCost?: boolean;
    status?: boolean;
    assignedToTeacherId?: boolean;
    location?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.AssetCategoryDefaultArgs<ExtArgs>;
    assignedToTeacher?: boolean | Prisma.Asset$assignedToTeacherArgs<ExtArgs>;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    categoryId?: boolean;
    name?: boolean;
    serialNumber?: boolean;
    purchaseDate?: boolean;
    purchaseCost?: boolean;
    status?: boolean;
    assignedToTeacherId?: boolean;
    location?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AssetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "branchId" | "categoryId" | "name" | "serialNumber" | "purchaseDate" | "purchaseCost" | "status" | "assignedToTeacherId" | "location" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["asset"]>;
export type AssetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.AssetCategoryDefaultArgs<ExtArgs>;
    assignedToTeacher?: boolean | Prisma.Asset$assignedToTeacherArgs<ExtArgs>;
};
export type AssetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.AssetCategoryDefaultArgs<ExtArgs>;
    assignedToTeacher?: boolean | Prisma.Asset$assignedToTeacherArgs<ExtArgs>;
};
export type AssetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.AssetCategoryDefaultArgs<ExtArgs>;
    assignedToTeacher?: boolean | Prisma.Asset$assignedToTeacherArgs<ExtArgs>;
};
export type $AssetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Asset";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        branch: Prisma.$BranchPayload<ExtArgs>;
        category: Prisma.$AssetCategoryPayload<ExtArgs>;
        assignedToTeacher: Prisma.$TeacherPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        branchId: string;
        categoryId: string;
        name: string;
        serialNumber: string | null;
        purchaseDate: Date | null;
        purchaseCost: runtime.Decimal | null;
        status: $Enums.AssetStatus;
        assignedToTeacherId: string | null;
        location: string | null;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["asset"]>;
    composites: {};
};
export type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetPayload, S>;
export type AssetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetCountAggregateInputType | true;
};
export interface AssetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Asset'];
        meta: {
            name: 'Asset';
        };
    };
    findUnique<T extends AssetFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetFindManyArgs>(args?: Prisma.SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetCreateArgs>(args: Prisma.SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetDeleteArgs>(args: Prisma.SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetUpdateArgs>(args: Prisma.SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetUpsertArgs>(args: Prisma.SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetCountArgs>(args?: Prisma.Subset<T, AssetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetCountAggregateOutputType> : number>;
    aggregate<T extends AssetAggregateArgs>(args: Prisma.Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>;
    groupBy<T extends AssetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetFieldRefs;
}
export interface Prisma__AssetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    branch<T extends Prisma.BranchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BranchDefaultArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.AssetCategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetCategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetCategoryClient<runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assignedToTeacher<T extends Prisma.Asset$assignedToTeacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Asset$assignedToTeacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetFieldRefs {
    readonly id: Prisma.FieldRef<"Asset", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Asset", 'String'>;
    readonly branchId: Prisma.FieldRef<"Asset", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Asset", 'String'>;
    readonly name: Prisma.FieldRef<"Asset", 'String'>;
    readonly serialNumber: Prisma.FieldRef<"Asset", 'String'>;
    readonly purchaseDate: Prisma.FieldRef<"Asset", 'DateTime'>;
    readonly purchaseCost: Prisma.FieldRef<"Asset", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Asset", 'AssetStatus'>;
    readonly assignedToTeacherId: Prisma.FieldRef<"Asset", 'String'>;
    readonly location: Prisma.FieldRef<"Asset", 'String'>;
    readonly notes: Prisma.FieldRef<"Asset", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Asset", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Asset", 'DateTime'>;
}
export type AssetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type AssetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type AssetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type AssetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetCreateInput, Prisma.AssetUncheckedCreateInput>;
};
export type AssetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetCreateManyInput | Prisma.AssetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    data: Prisma.AssetCreateManyInput | Prisma.AssetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetUpdateInput, Prisma.AssetUncheckedUpdateInput>;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyInput>;
    where?: Prisma.AssetWhereInput;
    limit?: number;
};
export type AssetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyInput>;
    where?: Prisma.AssetWhereInput;
    limit?: number;
    include?: Prisma.AssetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateInput, Prisma.AssetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetUpdateInput, Prisma.AssetUncheckedUpdateInput>;
};
export type AssetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    limit?: number;
};
export type Asset$assignedToTeacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
export type AssetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
};
