import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetCategoryPayload>;
export type AggregateAssetCategory = {
    _count: AssetCategoryCountAggregateOutputType | null;
    _min: AssetCategoryMinAggregateOutputType | null;
    _max: AssetCategoryMaxAggregateOutputType | null;
};
export type AssetCategoryMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type AssetCategoryMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type AssetCategoryCountAggregateOutputType = {
    id: number;
    schoolId: number;
    name: number;
    createdAt: number;
    _all: number;
};
export type AssetCategoryMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
};
export type AssetCategoryMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
};
export type AssetCategoryCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
    _all?: true;
};
export type AssetCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetCategoryWhereInput;
    orderBy?: Prisma.AssetCategoryOrderByWithRelationInput | Prisma.AssetCategoryOrderByWithRelationInput[];
    cursor?: Prisma.AssetCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetCategoryCountAggregateInputType;
    _min?: AssetCategoryMinAggregateInputType;
    _max?: AssetCategoryMaxAggregateInputType;
};
export type GetAssetCategoryAggregateType<T extends AssetCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateAssetCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssetCategory[P]> : Prisma.GetScalarType<T[P], AggregateAssetCategory[P]>;
};
export type AssetCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetCategoryWhereInput;
    orderBy?: Prisma.AssetCategoryOrderByWithAggregationInput | Prisma.AssetCategoryOrderByWithAggregationInput[];
    by: Prisma.AssetCategoryScalarFieldEnum[] | Prisma.AssetCategoryScalarFieldEnum;
    having?: Prisma.AssetCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetCategoryCountAggregateInputType | true;
    _min?: AssetCategoryMinAggregateInputType;
    _max?: AssetCategoryMaxAggregateInputType;
};
export type AssetCategoryGroupByOutputType = {
    id: string;
    schoolId: string;
    name: string;
    createdAt: Date;
    _count: AssetCategoryCountAggregateOutputType | null;
    _min: AssetCategoryMinAggregateOutputType | null;
    _max: AssetCategoryMaxAggregateOutputType | null;
};
export type GetAssetCategoryGroupByPayload<T extends AssetCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetCategoryGroupByOutputType[P]>;
}>>;
export type AssetCategoryWhereInput = {
    AND?: Prisma.AssetCategoryWhereInput | Prisma.AssetCategoryWhereInput[];
    OR?: Prisma.AssetCategoryWhereInput[];
    NOT?: Prisma.AssetCategoryWhereInput | Prisma.AssetCategoryWhereInput[];
    id?: Prisma.StringFilter<"AssetCategory"> | string;
    schoolId?: Prisma.StringFilter<"AssetCategory"> | string;
    name?: Prisma.StringFilter<"AssetCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"AssetCategory"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    assets?: Prisma.AssetListRelationFilter;
};
export type AssetCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    assets?: Prisma.AssetOrderByRelationAggregateInput;
};
export type AssetCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    schoolId_name?: Prisma.AssetCategorySchoolIdNameCompoundUniqueInput;
    AND?: Prisma.AssetCategoryWhereInput | Prisma.AssetCategoryWhereInput[];
    OR?: Prisma.AssetCategoryWhereInput[];
    NOT?: Prisma.AssetCategoryWhereInput | Prisma.AssetCategoryWhereInput[];
    schoolId?: Prisma.StringFilter<"AssetCategory"> | string;
    name?: Prisma.StringFilter<"AssetCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"AssetCategory"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    assets?: Prisma.AssetListRelationFilter;
}, "id" | "schoolId_name">;
export type AssetCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AssetCategoryCountOrderByAggregateInput;
    _max?: Prisma.AssetCategoryMaxOrderByAggregateInput;
    _min?: Prisma.AssetCategoryMinOrderByAggregateInput;
};
export type AssetCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetCategoryScalarWhereWithAggregatesInput | Prisma.AssetCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetCategoryScalarWhereWithAggregatesInput | Prisma.AssetCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AssetCategory"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"AssetCategory"> | string;
    name?: Prisma.StringWithAggregatesFilter<"AssetCategory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AssetCategory"> | Date | string;
};
export type AssetCategoryCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAssetCategoriesInput;
    assets?: Prisma.AssetCreateNestedManyWithoutCategoryInput;
};
export type AssetCategoryUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    assets?: Prisma.AssetUncheckedCreateNestedManyWithoutCategoryInput;
};
export type AssetCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAssetCategoriesNestedInput;
    assets?: Prisma.AssetUpdateManyWithoutCategoryNestedInput;
};
export type AssetCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assets?: Prisma.AssetUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type AssetCategoryCreateManyInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
};
export type AssetCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetCategoryListRelationFilter = {
    every?: Prisma.AssetCategoryWhereInput;
    some?: Prisma.AssetCategoryWhereInput;
    none?: Prisma.AssetCategoryWhereInput;
};
export type AssetCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssetCategorySchoolIdNameCompoundUniqueInput = {
    schoolId: string;
    name: string;
};
export type AssetCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetCategoryScalarRelationFilter = {
    is?: Prisma.AssetCategoryWhereInput;
    isNot?: Prisma.AssetCategoryWhereInput;
};
export type AssetCategoryCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.AssetCategoryCreateWithoutSchoolInput, Prisma.AssetCategoryUncheckedCreateWithoutSchoolInput> | Prisma.AssetCategoryCreateWithoutSchoolInput[] | Prisma.AssetCategoryUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AssetCategoryCreateOrConnectWithoutSchoolInput | Prisma.AssetCategoryCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.AssetCategoryCreateManySchoolInputEnvelope;
    connect?: Prisma.AssetCategoryWhereUniqueInput | Prisma.AssetCategoryWhereUniqueInput[];
};
export type AssetCategoryUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.AssetCategoryCreateWithoutSchoolInput, Prisma.AssetCategoryUncheckedCreateWithoutSchoolInput> | Prisma.AssetCategoryCreateWithoutSchoolInput[] | Prisma.AssetCategoryUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AssetCategoryCreateOrConnectWithoutSchoolInput | Prisma.AssetCategoryCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.AssetCategoryCreateManySchoolInputEnvelope;
    connect?: Prisma.AssetCategoryWhereUniqueInput | Prisma.AssetCategoryWhereUniqueInput[];
};
export type AssetCategoryUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCategoryCreateWithoutSchoolInput, Prisma.AssetCategoryUncheckedCreateWithoutSchoolInput> | Prisma.AssetCategoryCreateWithoutSchoolInput[] | Prisma.AssetCategoryUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AssetCategoryCreateOrConnectWithoutSchoolInput | Prisma.AssetCategoryCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.AssetCategoryUpsertWithWhereUniqueWithoutSchoolInput | Prisma.AssetCategoryUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.AssetCategoryCreateManySchoolInputEnvelope;
    set?: Prisma.AssetCategoryWhereUniqueInput | Prisma.AssetCategoryWhereUniqueInput[];
    disconnect?: Prisma.AssetCategoryWhereUniqueInput | Prisma.AssetCategoryWhereUniqueInput[];
    delete?: Prisma.AssetCategoryWhereUniqueInput | Prisma.AssetCategoryWhereUniqueInput[];
    connect?: Prisma.AssetCategoryWhereUniqueInput | Prisma.AssetCategoryWhereUniqueInput[];
    update?: Prisma.AssetCategoryUpdateWithWhereUniqueWithoutSchoolInput | Prisma.AssetCategoryUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.AssetCategoryUpdateManyWithWhereWithoutSchoolInput | Prisma.AssetCategoryUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.AssetCategoryScalarWhereInput | Prisma.AssetCategoryScalarWhereInput[];
};
export type AssetCategoryUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCategoryCreateWithoutSchoolInput, Prisma.AssetCategoryUncheckedCreateWithoutSchoolInput> | Prisma.AssetCategoryCreateWithoutSchoolInput[] | Prisma.AssetCategoryUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AssetCategoryCreateOrConnectWithoutSchoolInput | Prisma.AssetCategoryCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.AssetCategoryUpsertWithWhereUniqueWithoutSchoolInput | Prisma.AssetCategoryUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.AssetCategoryCreateManySchoolInputEnvelope;
    set?: Prisma.AssetCategoryWhereUniqueInput | Prisma.AssetCategoryWhereUniqueInput[];
    disconnect?: Prisma.AssetCategoryWhereUniqueInput | Prisma.AssetCategoryWhereUniqueInput[];
    delete?: Prisma.AssetCategoryWhereUniqueInput | Prisma.AssetCategoryWhereUniqueInput[];
    connect?: Prisma.AssetCategoryWhereUniqueInput | Prisma.AssetCategoryWhereUniqueInput[];
    update?: Prisma.AssetCategoryUpdateWithWhereUniqueWithoutSchoolInput | Prisma.AssetCategoryUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.AssetCategoryUpdateManyWithWhereWithoutSchoolInput | Prisma.AssetCategoryUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.AssetCategoryScalarWhereInput | Prisma.AssetCategoryScalarWhereInput[];
};
export type AssetCategoryCreateNestedOneWithoutAssetsInput = {
    create?: Prisma.XOR<Prisma.AssetCategoryCreateWithoutAssetsInput, Prisma.AssetCategoryUncheckedCreateWithoutAssetsInput>;
    connectOrCreate?: Prisma.AssetCategoryCreateOrConnectWithoutAssetsInput;
    connect?: Prisma.AssetCategoryWhereUniqueInput;
};
export type AssetCategoryUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCategoryCreateWithoutAssetsInput, Prisma.AssetCategoryUncheckedCreateWithoutAssetsInput>;
    connectOrCreate?: Prisma.AssetCategoryCreateOrConnectWithoutAssetsInput;
    upsert?: Prisma.AssetCategoryUpsertWithoutAssetsInput;
    connect?: Prisma.AssetCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssetCategoryUpdateToOneWithWhereWithoutAssetsInput, Prisma.AssetCategoryUpdateWithoutAssetsInput>, Prisma.AssetCategoryUncheckedUpdateWithoutAssetsInput>;
};
export type AssetCategoryCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    assets?: Prisma.AssetCreateNestedManyWithoutCategoryInput;
};
export type AssetCategoryUncheckedCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    assets?: Prisma.AssetUncheckedCreateNestedManyWithoutCategoryInput;
};
export type AssetCategoryCreateOrConnectWithoutSchoolInput = {
    where: Prisma.AssetCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCategoryCreateWithoutSchoolInput, Prisma.AssetCategoryUncheckedCreateWithoutSchoolInput>;
};
export type AssetCategoryCreateManySchoolInputEnvelope = {
    data: Prisma.AssetCategoryCreateManySchoolInput | Prisma.AssetCategoryCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type AssetCategoryUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.AssetCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetCategoryUpdateWithoutSchoolInput, Prisma.AssetCategoryUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.AssetCategoryCreateWithoutSchoolInput, Prisma.AssetCategoryUncheckedCreateWithoutSchoolInput>;
};
export type AssetCategoryUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.AssetCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetCategoryUpdateWithoutSchoolInput, Prisma.AssetCategoryUncheckedUpdateWithoutSchoolInput>;
};
export type AssetCategoryUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.AssetCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetCategoryUpdateManyMutationInput, Prisma.AssetCategoryUncheckedUpdateManyWithoutSchoolInput>;
};
export type AssetCategoryScalarWhereInput = {
    AND?: Prisma.AssetCategoryScalarWhereInput | Prisma.AssetCategoryScalarWhereInput[];
    OR?: Prisma.AssetCategoryScalarWhereInput[];
    NOT?: Prisma.AssetCategoryScalarWhereInput | Prisma.AssetCategoryScalarWhereInput[];
    id?: Prisma.StringFilter<"AssetCategory"> | string;
    schoolId?: Prisma.StringFilter<"AssetCategory"> | string;
    name?: Prisma.StringFilter<"AssetCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"AssetCategory"> | Date | string;
};
export type AssetCategoryCreateWithoutAssetsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAssetCategoriesInput;
};
export type AssetCategoryUncheckedCreateWithoutAssetsInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
};
export type AssetCategoryCreateOrConnectWithoutAssetsInput = {
    where: Prisma.AssetCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCategoryCreateWithoutAssetsInput, Prisma.AssetCategoryUncheckedCreateWithoutAssetsInput>;
};
export type AssetCategoryUpsertWithoutAssetsInput = {
    update: Prisma.XOR<Prisma.AssetCategoryUpdateWithoutAssetsInput, Prisma.AssetCategoryUncheckedUpdateWithoutAssetsInput>;
    create: Prisma.XOR<Prisma.AssetCategoryCreateWithoutAssetsInput, Prisma.AssetCategoryUncheckedCreateWithoutAssetsInput>;
    where?: Prisma.AssetCategoryWhereInput;
};
export type AssetCategoryUpdateToOneWithWhereWithoutAssetsInput = {
    where?: Prisma.AssetCategoryWhereInput;
    data: Prisma.XOR<Prisma.AssetCategoryUpdateWithoutAssetsInput, Prisma.AssetCategoryUncheckedUpdateWithoutAssetsInput>;
};
export type AssetCategoryUpdateWithoutAssetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAssetCategoriesNestedInput;
};
export type AssetCategoryUncheckedUpdateWithoutAssetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetCategoryCreateManySchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
};
export type AssetCategoryUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assets?: Prisma.AssetUpdateManyWithoutCategoryNestedInput;
};
export type AssetCategoryUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assets?: Prisma.AssetUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type AssetCategoryUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetCategoryCountOutputType = {
    assets: number;
};
export type AssetCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assets?: boolean | AssetCategoryCountOutputTypeCountAssetsArgs;
};
export type AssetCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategoryCountOutputTypeSelect<ExtArgs> | null;
};
export type AssetCategoryCountOutputTypeCountAssetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
};
export type AssetCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    assets?: boolean | Prisma.AssetCategory$assetsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetCategory"]>;
export type AssetCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetCategory"]>;
export type AssetCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetCategory"]>;
export type AssetCategorySelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
};
export type AssetCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "name" | "createdAt", ExtArgs["result"]["assetCategory"]>;
export type AssetCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    assets?: boolean | Prisma.AssetCategory$assetsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AssetCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type AssetCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type $AssetCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AssetCategory";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        assets: Prisma.$AssetPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        name: string;
        createdAt: Date;
    }, ExtArgs["result"]["assetCategory"]>;
    composites: {};
};
export type AssetCategoryGetPayload<S extends boolean | null | undefined | AssetCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload, S>;
export type AssetCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetCategoryCountAggregateInputType | true;
};
export interface AssetCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AssetCategory'];
        meta: {
            name: 'AssetCategory';
        };
    };
    findUnique<T extends AssetCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetCategoryClient<runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetCategoryClient<runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetCategoryClient<runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetCategoryClient<runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, AssetCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetCategoryCreateArgs>(args: Prisma.SelectSubset<T, AssetCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__AssetCategoryClient<runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetCategoryDeleteArgs>(args: Prisma.SelectSubset<T, AssetCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetCategoryClient<runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetCategoryUpdateArgs>(args: Prisma.SelectSubset<T, AssetCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetCategoryClient<runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetCategoryUpsertArgs>(args: Prisma.SelectSubset<T, AssetCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetCategoryClient<runtime.Types.Result.GetResult<Prisma.$AssetCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetCategoryCountArgs>(args?: Prisma.Subset<T, AssetCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetCategoryCountAggregateOutputType> : number>;
    aggregate<T extends AssetCategoryAggregateArgs>(args: Prisma.Subset<T, AssetCategoryAggregateArgs>): Prisma.PrismaPromise<GetAssetCategoryAggregateType<T>>;
    groupBy<T extends AssetCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetCategoryFieldRefs;
}
export interface Prisma__AssetCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assets<T extends Prisma.AssetCategory$assetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetCategory$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"AssetCategory", 'String'>;
    readonly schoolId: Prisma.FieldRef<"AssetCategory", 'String'>;
    readonly name: Prisma.FieldRef<"AssetCategory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AssetCategory", 'DateTime'>;
}
export type AssetCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategorySelect<ExtArgs> | null;
    omit?: Prisma.AssetCategoryOmit<ExtArgs> | null;
    include?: Prisma.AssetCategoryInclude<ExtArgs> | null;
    where: Prisma.AssetCategoryWhereUniqueInput;
};
export type AssetCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategorySelect<ExtArgs> | null;
    omit?: Prisma.AssetCategoryOmit<ExtArgs> | null;
    include?: Prisma.AssetCategoryInclude<ExtArgs> | null;
    where: Prisma.AssetCategoryWhereUniqueInput;
};
export type AssetCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategorySelect<ExtArgs> | null;
    omit?: Prisma.AssetCategoryOmit<ExtArgs> | null;
    include?: Prisma.AssetCategoryInclude<ExtArgs> | null;
    where?: Prisma.AssetCategoryWhereInput;
    orderBy?: Prisma.AssetCategoryOrderByWithRelationInput | Prisma.AssetCategoryOrderByWithRelationInput[];
    cursor?: Prisma.AssetCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetCategoryScalarFieldEnum | Prisma.AssetCategoryScalarFieldEnum[];
};
export type AssetCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategorySelect<ExtArgs> | null;
    omit?: Prisma.AssetCategoryOmit<ExtArgs> | null;
    include?: Prisma.AssetCategoryInclude<ExtArgs> | null;
    where?: Prisma.AssetCategoryWhereInput;
    orderBy?: Prisma.AssetCategoryOrderByWithRelationInput | Prisma.AssetCategoryOrderByWithRelationInput[];
    cursor?: Prisma.AssetCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetCategoryScalarFieldEnum | Prisma.AssetCategoryScalarFieldEnum[];
};
export type AssetCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategorySelect<ExtArgs> | null;
    omit?: Prisma.AssetCategoryOmit<ExtArgs> | null;
    include?: Prisma.AssetCategoryInclude<ExtArgs> | null;
    where?: Prisma.AssetCategoryWhereInput;
    orderBy?: Prisma.AssetCategoryOrderByWithRelationInput | Prisma.AssetCategoryOrderByWithRelationInput[];
    cursor?: Prisma.AssetCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetCategoryScalarFieldEnum | Prisma.AssetCategoryScalarFieldEnum[];
};
export type AssetCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategorySelect<ExtArgs> | null;
    omit?: Prisma.AssetCategoryOmit<ExtArgs> | null;
    include?: Prisma.AssetCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetCategoryCreateInput, Prisma.AssetCategoryUncheckedCreateInput>;
};
export type AssetCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetCategoryCreateManyInput | Prisma.AssetCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetCategoryOmit<ExtArgs> | null;
    data: Prisma.AssetCategoryCreateManyInput | Prisma.AssetCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssetCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssetCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategorySelect<ExtArgs> | null;
    omit?: Prisma.AssetCategoryOmit<ExtArgs> | null;
    include?: Prisma.AssetCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetCategoryUpdateInput, Prisma.AssetCategoryUncheckedUpdateInput>;
    where: Prisma.AssetCategoryWhereUniqueInput;
};
export type AssetCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetCategoryUpdateManyMutationInput, Prisma.AssetCategoryUncheckedUpdateManyInput>;
    where?: Prisma.AssetCategoryWhereInput;
    limit?: number;
};
export type AssetCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetCategoryUpdateManyMutationInput, Prisma.AssetCategoryUncheckedUpdateManyInput>;
    where?: Prisma.AssetCategoryWhereInput;
    limit?: number;
    include?: Prisma.AssetCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssetCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategorySelect<ExtArgs> | null;
    omit?: Prisma.AssetCategoryOmit<ExtArgs> | null;
    include?: Prisma.AssetCategoryInclude<ExtArgs> | null;
    where: Prisma.AssetCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCategoryCreateInput, Prisma.AssetCategoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetCategoryUpdateInput, Prisma.AssetCategoryUncheckedUpdateInput>;
};
export type AssetCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategorySelect<ExtArgs> | null;
    omit?: Prisma.AssetCategoryOmit<ExtArgs> | null;
    include?: Prisma.AssetCategoryInclude<ExtArgs> | null;
    where: Prisma.AssetCategoryWhereUniqueInput;
};
export type AssetCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetCategoryWhereInput;
    limit?: number;
};
export type AssetCategory$assetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AssetCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCategorySelect<ExtArgs> | null;
    omit?: Prisma.AssetCategoryOmit<ExtArgs> | null;
    include?: Prisma.AssetCategoryInclude<ExtArgs> | null;
};
