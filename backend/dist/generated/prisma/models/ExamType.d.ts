import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExamTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$ExamTypePayload>;
export type AggregateExamType = {
    _count: ExamTypeCountAggregateOutputType | null;
    _min: ExamTypeMinAggregateOutputType | null;
    _max: ExamTypeMaxAggregateOutputType | null;
};
export type ExamTypeMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExamTypeMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExamTypeCountAggregateOutputType = {
    id: number;
    schoolId: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ExamTypeMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExamTypeMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExamTypeCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ExamTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamTypeWhereInput;
    orderBy?: Prisma.ExamTypeOrderByWithRelationInput | Prisma.ExamTypeOrderByWithRelationInput[];
    cursor?: Prisma.ExamTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExamTypeCountAggregateInputType;
    _min?: ExamTypeMinAggregateInputType;
    _max?: ExamTypeMaxAggregateInputType;
};
export type GetExamTypeAggregateType<T extends ExamTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateExamType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExamType[P]> : Prisma.GetScalarType<T[P], AggregateExamType[P]>;
};
export type ExamTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamTypeWhereInput;
    orderBy?: Prisma.ExamTypeOrderByWithAggregationInput | Prisma.ExamTypeOrderByWithAggregationInput[];
    by: Prisma.ExamTypeScalarFieldEnum[] | Prisma.ExamTypeScalarFieldEnum;
    having?: Prisma.ExamTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExamTypeCountAggregateInputType | true;
    _min?: ExamTypeMinAggregateInputType;
    _max?: ExamTypeMaxAggregateInputType;
};
export type ExamTypeGroupByOutputType = {
    id: string;
    schoolId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ExamTypeCountAggregateOutputType | null;
    _min: ExamTypeMinAggregateOutputType | null;
    _max: ExamTypeMaxAggregateOutputType | null;
};
export type GetExamTypeGroupByPayload<T extends ExamTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExamTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExamTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExamTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExamTypeGroupByOutputType[P]>;
}>>;
export type ExamTypeWhereInput = {
    AND?: Prisma.ExamTypeWhereInput | Prisma.ExamTypeWhereInput[];
    OR?: Prisma.ExamTypeWhereInput[];
    NOT?: Prisma.ExamTypeWhereInput | Prisma.ExamTypeWhereInput[];
    id?: Prisma.StringFilter<"ExamType"> | string;
    schoolId?: Prisma.StringFilter<"ExamType"> | string;
    name?: Prisma.StringFilter<"ExamType"> | string;
    createdAt?: Prisma.DateTimeFilter<"ExamType"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExamType"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    exams?: Prisma.ExamListRelationFilter;
};
export type ExamTypeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    exams?: Prisma.ExamOrderByRelationAggregateInput;
};
export type ExamTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    schoolId_name?: Prisma.ExamTypeSchoolIdNameCompoundUniqueInput;
    AND?: Prisma.ExamTypeWhereInput | Prisma.ExamTypeWhereInput[];
    OR?: Prisma.ExamTypeWhereInput[];
    NOT?: Prisma.ExamTypeWhereInput | Prisma.ExamTypeWhereInput[];
    schoolId?: Prisma.StringFilter<"ExamType"> | string;
    name?: Prisma.StringFilter<"ExamType"> | string;
    createdAt?: Prisma.DateTimeFilter<"ExamType"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExamType"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    exams?: Prisma.ExamListRelationFilter;
}, "id" | "schoolId_name">;
export type ExamTypeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ExamTypeCountOrderByAggregateInput;
    _max?: Prisma.ExamTypeMaxOrderByAggregateInput;
    _min?: Prisma.ExamTypeMinOrderByAggregateInput;
};
export type ExamTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExamTypeScalarWhereWithAggregatesInput | Prisma.ExamTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExamTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExamTypeScalarWhereWithAggregatesInput | Prisma.ExamTypeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ExamType"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"ExamType"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ExamType"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ExamType"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ExamType"> | Date | string;
};
export type ExamTypeCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamTypesInput;
    exams?: Prisma.ExamCreateNestedManyWithoutExamTypeInput;
};
export type ExamTypeUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    exams?: Prisma.ExamUncheckedCreateNestedManyWithoutExamTypeInput;
};
export type ExamTypeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamTypesNestedInput;
    exams?: Prisma.ExamUpdateManyWithoutExamTypeNestedInput;
};
export type ExamTypeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exams?: Prisma.ExamUncheckedUpdateManyWithoutExamTypeNestedInput;
};
export type ExamTypeCreateManyInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamTypeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamTypeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamTypeListRelationFilter = {
    every?: Prisma.ExamTypeWhereInput;
    some?: Prisma.ExamTypeWhereInput;
    none?: Prisma.ExamTypeWhereInput;
};
export type ExamTypeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExamTypeSchoolIdNameCompoundUniqueInput = {
    schoolId: string;
    name: string;
};
export type ExamTypeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamTypeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamTypeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamTypeScalarRelationFilter = {
    is?: Prisma.ExamTypeWhereInput;
    isNot?: Prisma.ExamTypeWhereInput;
};
export type ExamTypeCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.ExamTypeCreateWithoutSchoolInput, Prisma.ExamTypeUncheckedCreateWithoutSchoolInput> | Prisma.ExamTypeCreateWithoutSchoolInput[] | Prisma.ExamTypeUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExamTypeCreateOrConnectWithoutSchoolInput | Prisma.ExamTypeCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.ExamTypeCreateManySchoolInputEnvelope;
    connect?: Prisma.ExamTypeWhereUniqueInput | Prisma.ExamTypeWhereUniqueInput[];
};
export type ExamTypeUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.ExamTypeCreateWithoutSchoolInput, Prisma.ExamTypeUncheckedCreateWithoutSchoolInput> | Prisma.ExamTypeCreateWithoutSchoolInput[] | Prisma.ExamTypeUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExamTypeCreateOrConnectWithoutSchoolInput | Prisma.ExamTypeCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.ExamTypeCreateManySchoolInputEnvelope;
    connect?: Prisma.ExamTypeWhereUniqueInput | Prisma.ExamTypeWhereUniqueInput[];
};
export type ExamTypeUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.ExamTypeCreateWithoutSchoolInput, Prisma.ExamTypeUncheckedCreateWithoutSchoolInput> | Prisma.ExamTypeCreateWithoutSchoolInput[] | Prisma.ExamTypeUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExamTypeCreateOrConnectWithoutSchoolInput | Prisma.ExamTypeCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.ExamTypeUpsertWithWhereUniqueWithoutSchoolInput | Prisma.ExamTypeUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.ExamTypeCreateManySchoolInputEnvelope;
    set?: Prisma.ExamTypeWhereUniqueInput | Prisma.ExamTypeWhereUniqueInput[];
    disconnect?: Prisma.ExamTypeWhereUniqueInput | Prisma.ExamTypeWhereUniqueInput[];
    delete?: Prisma.ExamTypeWhereUniqueInput | Prisma.ExamTypeWhereUniqueInput[];
    connect?: Prisma.ExamTypeWhereUniqueInput | Prisma.ExamTypeWhereUniqueInput[];
    update?: Prisma.ExamTypeUpdateWithWhereUniqueWithoutSchoolInput | Prisma.ExamTypeUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.ExamTypeUpdateManyWithWhereWithoutSchoolInput | Prisma.ExamTypeUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.ExamTypeScalarWhereInput | Prisma.ExamTypeScalarWhereInput[];
};
export type ExamTypeUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.ExamTypeCreateWithoutSchoolInput, Prisma.ExamTypeUncheckedCreateWithoutSchoolInput> | Prisma.ExamTypeCreateWithoutSchoolInput[] | Prisma.ExamTypeUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExamTypeCreateOrConnectWithoutSchoolInput | Prisma.ExamTypeCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.ExamTypeUpsertWithWhereUniqueWithoutSchoolInput | Prisma.ExamTypeUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.ExamTypeCreateManySchoolInputEnvelope;
    set?: Prisma.ExamTypeWhereUniqueInput | Prisma.ExamTypeWhereUniqueInput[];
    disconnect?: Prisma.ExamTypeWhereUniqueInput | Prisma.ExamTypeWhereUniqueInput[];
    delete?: Prisma.ExamTypeWhereUniqueInput | Prisma.ExamTypeWhereUniqueInput[];
    connect?: Prisma.ExamTypeWhereUniqueInput | Prisma.ExamTypeWhereUniqueInput[];
    update?: Prisma.ExamTypeUpdateWithWhereUniqueWithoutSchoolInput | Prisma.ExamTypeUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.ExamTypeUpdateManyWithWhereWithoutSchoolInput | Prisma.ExamTypeUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.ExamTypeScalarWhereInput | Prisma.ExamTypeScalarWhereInput[];
};
export type ExamTypeCreateNestedOneWithoutExamsInput = {
    create?: Prisma.XOR<Prisma.ExamTypeCreateWithoutExamsInput, Prisma.ExamTypeUncheckedCreateWithoutExamsInput>;
    connectOrCreate?: Prisma.ExamTypeCreateOrConnectWithoutExamsInput;
    connect?: Prisma.ExamTypeWhereUniqueInput;
};
export type ExamTypeUpdateOneRequiredWithoutExamsNestedInput = {
    create?: Prisma.XOR<Prisma.ExamTypeCreateWithoutExamsInput, Prisma.ExamTypeUncheckedCreateWithoutExamsInput>;
    connectOrCreate?: Prisma.ExamTypeCreateOrConnectWithoutExamsInput;
    upsert?: Prisma.ExamTypeUpsertWithoutExamsInput;
    connect?: Prisma.ExamTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExamTypeUpdateToOneWithWhereWithoutExamsInput, Prisma.ExamTypeUpdateWithoutExamsInput>, Prisma.ExamTypeUncheckedUpdateWithoutExamsInput>;
};
export type ExamTypeCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    exams?: Prisma.ExamCreateNestedManyWithoutExamTypeInput;
};
export type ExamTypeUncheckedCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    exams?: Prisma.ExamUncheckedCreateNestedManyWithoutExamTypeInput;
};
export type ExamTypeCreateOrConnectWithoutSchoolInput = {
    where: Prisma.ExamTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamTypeCreateWithoutSchoolInput, Prisma.ExamTypeUncheckedCreateWithoutSchoolInput>;
};
export type ExamTypeCreateManySchoolInputEnvelope = {
    data: Prisma.ExamTypeCreateManySchoolInput | Prisma.ExamTypeCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type ExamTypeUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.ExamTypeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamTypeUpdateWithoutSchoolInput, Prisma.ExamTypeUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.ExamTypeCreateWithoutSchoolInput, Prisma.ExamTypeUncheckedCreateWithoutSchoolInput>;
};
export type ExamTypeUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.ExamTypeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamTypeUpdateWithoutSchoolInput, Prisma.ExamTypeUncheckedUpdateWithoutSchoolInput>;
};
export type ExamTypeUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.ExamTypeScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamTypeUpdateManyMutationInput, Prisma.ExamTypeUncheckedUpdateManyWithoutSchoolInput>;
};
export type ExamTypeScalarWhereInput = {
    AND?: Prisma.ExamTypeScalarWhereInput | Prisma.ExamTypeScalarWhereInput[];
    OR?: Prisma.ExamTypeScalarWhereInput[];
    NOT?: Prisma.ExamTypeScalarWhereInput | Prisma.ExamTypeScalarWhereInput[];
    id?: Prisma.StringFilter<"ExamType"> | string;
    schoolId?: Prisma.StringFilter<"ExamType"> | string;
    name?: Prisma.StringFilter<"ExamType"> | string;
    createdAt?: Prisma.DateTimeFilter<"ExamType"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExamType"> | Date | string;
};
export type ExamTypeCreateWithoutExamsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamTypesInput;
};
export type ExamTypeUncheckedCreateWithoutExamsInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamTypeCreateOrConnectWithoutExamsInput = {
    where: Prisma.ExamTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamTypeCreateWithoutExamsInput, Prisma.ExamTypeUncheckedCreateWithoutExamsInput>;
};
export type ExamTypeUpsertWithoutExamsInput = {
    update: Prisma.XOR<Prisma.ExamTypeUpdateWithoutExamsInput, Prisma.ExamTypeUncheckedUpdateWithoutExamsInput>;
    create: Prisma.XOR<Prisma.ExamTypeCreateWithoutExamsInput, Prisma.ExamTypeUncheckedCreateWithoutExamsInput>;
    where?: Prisma.ExamTypeWhereInput;
};
export type ExamTypeUpdateToOneWithWhereWithoutExamsInput = {
    where?: Prisma.ExamTypeWhereInput;
    data: Prisma.XOR<Prisma.ExamTypeUpdateWithoutExamsInput, Prisma.ExamTypeUncheckedUpdateWithoutExamsInput>;
};
export type ExamTypeUpdateWithoutExamsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamTypesNestedInput;
};
export type ExamTypeUncheckedUpdateWithoutExamsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamTypeCreateManySchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamTypeUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exams?: Prisma.ExamUpdateManyWithoutExamTypeNestedInput;
};
export type ExamTypeUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exams?: Prisma.ExamUncheckedUpdateManyWithoutExamTypeNestedInput;
};
export type ExamTypeUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamTypeCountOutputType = {
    exams: number;
};
export type ExamTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    exams?: boolean | ExamTypeCountOutputTypeCountExamsArgs;
};
export type ExamTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeCountOutputTypeSelect<ExtArgs> | null;
};
export type ExamTypeCountOutputTypeCountExamsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
};
export type ExamTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    exams?: boolean | Prisma.ExamType$examsArgs<ExtArgs>;
    _count?: boolean | Prisma.ExamTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examType"]>;
export type ExamTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examType"]>;
export type ExamTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examType"]>;
export type ExamTypeSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ExamTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["examType"]>;
export type ExamTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    exams?: boolean | Prisma.ExamType$examsArgs<ExtArgs>;
    _count?: boolean | Prisma.ExamTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ExamTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type ExamTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type $ExamTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExamType";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        exams: Prisma.$ExamPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["examType"]>;
    composites: {};
};
export type ExamTypeGetPayload<S extends boolean | null | undefined | ExamTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExamTypePayload, S>;
export type ExamTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExamTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExamTypeCountAggregateInputType | true;
};
export interface ExamTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExamType'];
        meta: {
            name: 'ExamType';
        };
    };
    findUnique<T extends ExamTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, ExamTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExamTypeClient<runtime.Types.Result.GetResult<Prisma.$ExamTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExamTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExamTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamTypeClient<runtime.Types.Result.GetResult<Prisma.$ExamTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExamTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, ExamTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExamTypeClient<runtime.Types.Result.GetResult<Prisma.$ExamTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExamTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExamTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamTypeClient<runtime.Types.Result.GetResult<Prisma.$ExamTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExamTypeFindManyArgs>(args?: Prisma.SelectSubset<T, ExamTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExamTypeCreateArgs>(args: Prisma.SelectSubset<T, ExamTypeCreateArgs<ExtArgs>>): Prisma.Prisma__ExamTypeClient<runtime.Types.Result.GetResult<Prisma.$ExamTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExamTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, ExamTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExamTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExamTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExamTypeDeleteArgs>(args: Prisma.SelectSubset<T, ExamTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__ExamTypeClient<runtime.Types.Result.GetResult<Prisma.$ExamTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExamTypeUpdateArgs>(args: Prisma.SelectSubset<T, ExamTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__ExamTypeClient<runtime.Types.Result.GetResult<Prisma.$ExamTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExamTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExamTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExamTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, ExamTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExamTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExamTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExamTypeUpsertArgs>(args: Prisma.SelectSubset<T, ExamTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__ExamTypeClient<runtime.Types.Result.GetResult<Prisma.$ExamTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExamTypeCountArgs>(args?: Prisma.Subset<T, ExamTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExamTypeCountAggregateOutputType> : number>;
    aggregate<T extends ExamTypeAggregateArgs>(args: Prisma.Subset<T, ExamTypeAggregateArgs>): Prisma.PrismaPromise<GetExamTypeAggregateType<T>>;
    groupBy<T extends ExamTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExamTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: ExamTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExamTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExamTypeFieldRefs;
}
export interface Prisma__ExamTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    exams<T extends Prisma.ExamType$examsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExamType$examsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExamTypeFieldRefs {
    readonly id: Prisma.FieldRef<"ExamType", 'String'>;
    readonly schoolId: Prisma.FieldRef<"ExamType", 'String'>;
    readonly name: Prisma.FieldRef<"ExamType", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ExamType", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ExamType", 'DateTime'>;
}
export type ExamTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeSelect<ExtArgs> | null;
    omit?: Prisma.ExamTypeOmit<ExtArgs> | null;
    include?: Prisma.ExamTypeInclude<ExtArgs> | null;
    where: Prisma.ExamTypeWhereUniqueInput;
};
export type ExamTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeSelect<ExtArgs> | null;
    omit?: Prisma.ExamTypeOmit<ExtArgs> | null;
    include?: Prisma.ExamTypeInclude<ExtArgs> | null;
    where: Prisma.ExamTypeWhereUniqueInput;
};
export type ExamTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeSelect<ExtArgs> | null;
    omit?: Prisma.ExamTypeOmit<ExtArgs> | null;
    include?: Prisma.ExamTypeInclude<ExtArgs> | null;
    where?: Prisma.ExamTypeWhereInput;
    orderBy?: Prisma.ExamTypeOrderByWithRelationInput | Prisma.ExamTypeOrderByWithRelationInput[];
    cursor?: Prisma.ExamTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamTypeScalarFieldEnum | Prisma.ExamTypeScalarFieldEnum[];
};
export type ExamTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeSelect<ExtArgs> | null;
    omit?: Prisma.ExamTypeOmit<ExtArgs> | null;
    include?: Prisma.ExamTypeInclude<ExtArgs> | null;
    where?: Prisma.ExamTypeWhereInput;
    orderBy?: Prisma.ExamTypeOrderByWithRelationInput | Prisma.ExamTypeOrderByWithRelationInput[];
    cursor?: Prisma.ExamTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamTypeScalarFieldEnum | Prisma.ExamTypeScalarFieldEnum[];
};
export type ExamTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeSelect<ExtArgs> | null;
    omit?: Prisma.ExamTypeOmit<ExtArgs> | null;
    include?: Prisma.ExamTypeInclude<ExtArgs> | null;
    where?: Prisma.ExamTypeWhereInput;
    orderBy?: Prisma.ExamTypeOrderByWithRelationInput | Prisma.ExamTypeOrderByWithRelationInput[];
    cursor?: Prisma.ExamTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamTypeScalarFieldEnum | Prisma.ExamTypeScalarFieldEnum[];
};
export type ExamTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeSelect<ExtArgs> | null;
    omit?: Prisma.ExamTypeOmit<ExtArgs> | null;
    include?: Prisma.ExamTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamTypeCreateInput, Prisma.ExamTypeUncheckedCreateInput>;
};
export type ExamTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExamTypeCreateManyInput | Prisma.ExamTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExamTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamTypeOmit<ExtArgs> | null;
    data: Prisma.ExamTypeCreateManyInput | Prisma.ExamTypeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExamTypeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExamTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeSelect<ExtArgs> | null;
    omit?: Prisma.ExamTypeOmit<ExtArgs> | null;
    include?: Prisma.ExamTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamTypeUpdateInput, Prisma.ExamTypeUncheckedUpdateInput>;
    where: Prisma.ExamTypeWhereUniqueInput;
};
export type ExamTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExamTypeUpdateManyMutationInput, Prisma.ExamTypeUncheckedUpdateManyInput>;
    where?: Prisma.ExamTypeWhereInput;
    limit?: number;
};
export type ExamTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamTypeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamTypeUpdateManyMutationInput, Prisma.ExamTypeUncheckedUpdateManyInput>;
    where?: Prisma.ExamTypeWhereInput;
    limit?: number;
    include?: Prisma.ExamTypeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExamTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeSelect<ExtArgs> | null;
    omit?: Prisma.ExamTypeOmit<ExtArgs> | null;
    include?: Prisma.ExamTypeInclude<ExtArgs> | null;
    where: Prisma.ExamTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamTypeCreateInput, Prisma.ExamTypeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExamTypeUpdateInput, Prisma.ExamTypeUncheckedUpdateInput>;
};
export type ExamTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeSelect<ExtArgs> | null;
    omit?: Prisma.ExamTypeOmit<ExtArgs> | null;
    include?: Prisma.ExamTypeInclude<ExtArgs> | null;
    where: Prisma.ExamTypeWhereUniqueInput;
};
export type ExamTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamTypeWhereInput;
    limit?: number;
};
export type ExamType$examsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    cursor?: Prisma.ExamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
export type ExamTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamTypeSelect<ExtArgs> | null;
    omit?: Prisma.ExamTypeOmit<ExtArgs> | null;
    include?: Prisma.ExamTypeInclude<ExtArgs> | null;
};
