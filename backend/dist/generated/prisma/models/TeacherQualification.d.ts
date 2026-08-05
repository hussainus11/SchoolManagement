import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TeacherQualificationModel = runtime.Types.Result.DefaultSelection<Prisma.$TeacherQualificationPayload>;
export type AggregateTeacherQualification = {
    _count: TeacherQualificationCountAggregateOutputType | null;
    _avg: TeacherQualificationAvgAggregateOutputType | null;
    _sum: TeacherQualificationSumAggregateOutputType | null;
    _min: TeacherQualificationMinAggregateOutputType | null;
    _max: TeacherQualificationMaxAggregateOutputType | null;
};
export type TeacherQualificationAvgAggregateOutputType = {
    yearCompleted: number | null;
};
export type TeacherQualificationSumAggregateOutputType = {
    yearCompleted: number | null;
};
export type TeacherQualificationMinAggregateOutputType = {
    id: string | null;
    teacherId: string | null;
    degree: string | null;
    institution: string | null;
    yearCompleted: number | null;
    createdAt: Date | null;
};
export type TeacherQualificationMaxAggregateOutputType = {
    id: string | null;
    teacherId: string | null;
    degree: string | null;
    institution: string | null;
    yearCompleted: number | null;
    createdAt: Date | null;
};
export type TeacherQualificationCountAggregateOutputType = {
    id: number;
    teacherId: number;
    degree: number;
    institution: number;
    yearCompleted: number;
    createdAt: number;
    _all: number;
};
export type TeacherQualificationAvgAggregateInputType = {
    yearCompleted?: true;
};
export type TeacherQualificationSumAggregateInputType = {
    yearCompleted?: true;
};
export type TeacherQualificationMinAggregateInputType = {
    id?: true;
    teacherId?: true;
    degree?: true;
    institution?: true;
    yearCompleted?: true;
    createdAt?: true;
};
export type TeacherQualificationMaxAggregateInputType = {
    id?: true;
    teacherId?: true;
    degree?: true;
    institution?: true;
    yearCompleted?: true;
    createdAt?: true;
};
export type TeacherQualificationCountAggregateInputType = {
    id?: true;
    teacherId?: true;
    degree?: true;
    institution?: true;
    yearCompleted?: true;
    createdAt?: true;
    _all?: true;
};
export type TeacherQualificationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherQualificationWhereInput;
    orderBy?: Prisma.TeacherQualificationOrderByWithRelationInput | Prisma.TeacherQualificationOrderByWithRelationInput[];
    cursor?: Prisma.TeacherQualificationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TeacherQualificationCountAggregateInputType;
    _avg?: TeacherQualificationAvgAggregateInputType;
    _sum?: TeacherQualificationSumAggregateInputType;
    _min?: TeacherQualificationMinAggregateInputType;
    _max?: TeacherQualificationMaxAggregateInputType;
};
export type GetTeacherQualificationAggregateType<T extends TeacherQualificationAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacherQualification]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeacherQualification[P]> : Prisma.GetScalarType<T[P], AggregateTeacherQualification[P]>;
};
export type TeacherQualificationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherQualificationWhereInput;
    orderBy?: Prisma.TeacherQualificationOrderByWithAggregationInput | Prisma.TeacherQualificationOrderByWithAggregationInput[];
    by: Prisma.TeacherQualificationScalarFieldEnum[] | Prisma.TeacherQualificationScalarFieldEnum;
    having?: Prisma.TeacherQualificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeacherQualificationCountAggregateInputType | true;
    _avg?: TeacherQualificationAvgAggregateInputType;
    _sum?: TeacherQualificationSumAggregateInputType;
    _min?: TeacherQualificationMinAggregateInputType;
    _max?: TeacherQualificationMaxAggregateInputType;
};
export type TeacherQualificationGroupByOutputType = {
    id: string;
    teacherId: string;
    degree: string;
    institution: string | null;
    yearCompleted: number | null;
    createdAt: Date;
    _count: TeacherQualificationCountAggregateOutputType | null;
    _avg: TeacherQualificationAvgAggregateOutputType | null;
    _sum: TeacherQualificationSumAggregateOutputType | null;
    _min: TeacherQualificationMinAggregateOutputType | null;
    _max: TeacherQualificationMaxAggregateOutputType | null;
};
export type GetTeacherQualificationGroupByPayload<T extends TeacherQualificationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TeacherQualificationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TeacherQualificationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TeacherQualificationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TeacherQualificationGroupByOutputType[P]>;
}>>;
export type TeacherQualificationWhereInput = {
    AND?: Prisma.TeacherQualificationWhereInput | Prisma.TeacherQualificationWhereInput[];
    OR?: Prisma.TeacherQualificationWhereInput[];
    NOT?: Prisma.TeacherQualificationWhereInput | Prisma.TeacherQualificationWhereInput[];
    id?: Prisma.StringFilter<"TeacherQualification"> | string;
    teacherId?: Prisma.StringFilter<"TeacherQualification"> | string;
    degree?: Prisma.StringFilter<"TeacherQualification"> | string;
    institution?: Prisma.StringNullableFilter<"TeacherQualification"> | string | null;
    yearCompleted?: Prisma.IntNullableFilter<"TeacherQualification"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"TeacherQualification"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
};
export type TeacherQualificationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    degree?: Prisma.SortOrder;
    institution?: Prisma.SortOrderInput | Prisma.SortOrder;
    yearCompleted?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
};
export type TeacherQualificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TeacherQualificationWhereInput | Prisma.TeacherQualificationWhereInput[];
    OR?: Prisma.TeacherQualificationWhereInput[];
    NOT?: Prisma.TeacherQualificationWhereInput | Prisma.TeacherQualificationWhereInput[];
    teacherId?: Prisma.StringFilter<"TeacherQualification"> | string;
    degree?: Prisma.StringFilter<"TeacherQualification"> | string;
    institution?: Prisma.StringNullableFilter<"TeacherQualification"> | string | null;
    yearCompleted?: Prisma.IntNullableFilter<"TeacherQualification"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"TeacherQualification"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
}, "id">;
export type TeacherQualificationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    degree?: Prisma.SortOrder;
    institution?: Prisma.SortOrderInput | Prisma.SortOrder;
    yearCompleted?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TeacherQualificationCountOrderByAggregateInput;
    _avg?: Prisma.TeacherQualificationAvgOrderByAggregateInput;
    _max?: Prisma.TeacherQualificationMaxOrderByAggregateInput;
    _min?: Prisma.TeacherQualificationMinOrderByAggregateInput;
    _sum?: Prisma.TeacherQualificationSumOrderByAggregateInput;
};
export type TeacherQualificationScalarWhereWithAggregatesInput = {
    AND?: Prisma.TeacherQualificationScalarWhereWithAggregatesInput | Prisma.TeacherQualificationScalarWhereWithAggregatesInput[];
    OR?: Prisma.TeacherQualificationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TeacherQualificationScalarWhereWithAggregatesInput | Prisma.TeacherQualificationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TeacherQualification"> | string;
    teacherId?: Prisma.StringWithAggregatesFilter<"TeacherQualification"> | string;
    degree?: Prisma.StringWithAggregatesFilter<"TeacherQualification"> | string;
    institution?: Prisma.StringNullableWithAggregatesFilter<"TeacherQualification"> | string | null;
    yearCompleted?: Prisma.IntNullableWithAggregatesFilter<"TeacherQualification"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TeacherQualification"> | Date | string;
};
export type TeacherQualificationCreateInput = {
    id?: string;
    degree: string;
    institution?: string | null;
    yearCompleted?: number | null;
    createdAt?: Date | string;
    teacher: Prisma.TeacherCreateNestedOneWithoutQualificationsInput;
};
export type TeacherQualificationUncheckedCreateInput = {
    id?: string;
    teacherId: string;
    degree: string;
    institution?: string | null;
    yearCompleted?: number | null;
    createdAt?: Date | string;
};
export type TeacherQualificationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    degree?: Prisma.StringFieldUpdateOperationsInput | string;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    yearCompleted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutQualificationsNestedInput;
};
export type TeacherQualificationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    degree?: Prisma.StringFieldUpdateOperationsInput | string;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    yearCompleted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherQualificationCreateManyInput = {
    id?: string;
    teacherId: string;
    degree: string;
    institution?: string | null;
    yearCompleted?: number | null;
    createdAt?: Date | string;
};
export type TeacherQualificationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    degree?: Prisma.StringFieldUpdateOperationsInput | string;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    yearCompleted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherQualificationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    degree?: Prisma.StringFieldUpdateOperationsInput | string;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    yearCompleted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherQualificationListRelationFilter = {
    every?: Prisma.TeacherQualificationWhereInput;
    some?: Prisma.TeacherQualificationWhereInput;
    none?: Prisma.TeacherQualificationWhereInput;
};
export type TeacherQualificationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TeacherQualificationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    degree?: Prisma.SortOrder;
    institution?: Prisma.SortOrder;
    yearCompleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TeacherQualificationAvgOrderByAggregateInput = {
    yearCompleted?: Prisma.SortOrder;
};
export type TeacherQualificationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    degree?: Prisma.SortOrder;
    institution?: Prisma.SortOrder;
    yearCompleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TeacherQualificationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    degree?: Prisma.SortOrder;
    institution?: Prisma.SortOrder;
    yearCompleted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TeacherQualificationSumOrderByAggregateInput = {
    yearCompleted?: Prisma.SortOrder;
};
export type TeacherQualificationCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.TeacherQualificationCreateWithoutTeacherInput, Prisma.TeacherQualificationUncheckedCreateWithoutTeacherInput> | Prisma.TeacherQualificationCreateWithoutTeacherInput[] | Prisma.TeacherQualificationUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherQualificationCreateOrConnectWithoutTeacherInput | Prisma.TeacherQualificationCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.TeacherQualificationCreateManyTeacherInputEnvelope;
    connect?: Prisma.TeacherQualificationWhereUniqueInput | Prisma.TeacherQualificationWhereUniqueInput[];
};
export type TeacherQualificationUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.TeacherQualificationCreateWithoutTeacherInput, Prisma.TeacherQualificationUncheckedCreateWithoutTeacherInput> | Prisma.TeacherQualificationCreateWithoutTeacherInput[] | Prisma.TeacherQualificationUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherQualificationCreateOrConnectWithoutTeacherInput | Prisma.TeacherQualificationCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.TeacherQualificationCreateManyTeacherInputEnvelope;
    connect?: Prisma.TeacherQualificationWhereUniqueInput | Prisma.TeacherQualificationWhereUniqueInput[];
};
export type TeacherQualificationUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherQualificationCreateWithoutTeacherInput, Prisma.TeacherQualificationUncheckedCreateWithoutTeacherInput> | Prisma.TeacherQualificationCreateWithoutTeacherInput[] | Prisma.TeacherQualificationUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherQualificationCreateOrConnectWithoutTeacherInput | Prisma.TeacherQualificationCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.TeacherQualificationUpsertWithWhereUniqueWithoutTeacherInput | Prisma.TeacherQualificationUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.TeacherQualificationCreateManyTeacherInputEnvelope;
    set?: Prisma.TeacherQualificationWhereUniqueInput | Prisma.TeacherQualificationWhereUniqueInput[];
    disconnect?: Prisma.TeacherQualificationWhereUniqueInput | Prisma.TeacherQualificationWhereUniqueInput[];
    delete?: Prisma.TeacherQualificationWhereUniqueInput | Prisma.TeacherQualificationWhereUniqueInput[];
    connect?: Prisma.TeacherQualificationWhereUniqueInput | Prisma.TeacherQualificationWhereUniqueInput[];
    update?: Prisma.TeacherQualificationUpdateWithWhereUniqueWithoutTeacherInput | Prisma.TeacherQualificationUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.TeacherQualificationUpdateManyWithWhereWithoutTeacherInput | Prisma.TeacherQualificationUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.TeacherQualificationScalarWhereInput | Prisma.TeacherQualificationScalarWhereInput[];
};
export type TeacherQualificationUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherQualificationCreateWithoutTeacherInput, Prisma.TeacherQualificationUncheckedCreateWithoutTeacherInput> | Prisma.TeacherQualificationCreateWithoutTeacherInput[] | Prisma.TeacherQualificationUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherQualificationCreateOrConnectWithoutTeacherInput | Prisma.TeacherQualificationCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.TeacherQualificationUpsertWithWhereUniqueWithoutTeacherInput | Prisma.TeacherQualificationUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.TeacherQualificationCreateManyTeacherInputEnvelope;
    set?: Prisma.TeacherQualificationWhereUniqueInput | Prisma.TeacherQualificationWhereUniqueInput[];
    disconnect?: Prisma.TeacherQualificationWhereUniqueInput | Prisma.TeacherQualificationWhereUniqueInput[];
    delete?: Prisma.TeacherQualificationWhereUniqueInput | Prisma.TeacherQualificationWhereUniqueInput[];
    connect?: Prisma.TeacherQualificationWhereUniqueInput | Prisma.TeacherQualificationWhereUniqueInput[];
    update?: Prisma.TeacherQualificationUpdateWithWhereUniqueWithoutTeacherInput | Prisma.TeacherQualificationUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.TeacherQualificationUpdateManyWithWhereWithoutTeacherInput | Prisma.TeacherQualificationUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.TeacherQualificationScalarWhereInput | Prisma.TeacherQualificationScalarWhereInput[];
};
export type TeacherQualificationCreateWithoutTeacherInput = {
    id?: string;
    degree: string;
    institution?: string | null;
    yearCompleted?: number | null;
    createdAt?: Date | string;
};
export type TeacherQualificationUncheckedCreateWithoutTeacherInput = {
    id?: string;
    degree: string;
    institution?: string | null;
    yearCompleted?: number | null;
    createdAt?: Date | string;
};
export type TeacherQualificationCreateOrConnectWithoutTeacherInput = {
    where: Prisma.TeacherQualificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherQualificationCreateWithoutTeacherInput, Prisma.TeacherQualificationUncheckedCreateWithoutTeacherInput>;
};
export type TeacherQualificationCreateManyTeacherInputEnvelope = {
    data: Prisma.TeacherQualificationCreateManyTeacherInput | Prisma.TeacherQualificationCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type TeacherQualificationUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.TeacherQualificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeacherQualificationUpdateWithoutTeacherInput, Prisma.TeacherQualificationUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.TeacherQualificationCreateWithoutTeacherInput, Prisma.TeacherQualificationUncheckedCreateWithoutTeacherInput>;
};
export type TeacherQualificationUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.TeacherQualificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeacherQualificationUpdateWithoutTeacherInput, Prisma.TeacherQualificationUncheckedUpdateWithoutTeacherInput>;
};
export type TeacherQualificationUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.TeacherQualificationScalarWhereInput;
    data: Prisma.XOR<Prisma.TeacherQualificationUpdateManyMutationInput, Prisma.TeacherQualificationUncheckedUpdateManyWithoutTeacherInput>;
};
export type TeacherQualificationScalarWhereInput = {
    AND?: Prisma.TeacherQualificationScalarWhereInput | Prisma.TeacherQualificationScalarWhereInput[];
    OR?: Prisma.TeacherQualificationScalarWhereInput[];
    NOT?: Prisma.TeacherQualificationScalarWhereInput | Prisma.TeacherQualificationScalarWhereInput[];
    id?: Prisma.StringFilter<"TeacherQualification"> | string;
    teacherId?: Prisma.StringFilter<"TeacherQualification"> | string;
    degree?: Prisma.StringFilter<"TeacherQualification"> | string;
    institution?: Prisma.StringNullableFilter<"TeacherQualification"> | string | null;
    yearCompleted?: Prisma.IntNullableFilter<"TeacherQualification"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"TeacherQualification"> | Date | string;
};
export type TeacherQualificationCreateManyTeacherInput = {
    id?: string;
    degree: string;
    institution?: string | null;
    yearCompleted?: number | null;
    createdAt?: Date | string;
};
export type TeacherQualificationUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    degree?: Prisma.StringFieldUpdateOperationsInput | string;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    yearCompleted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherQualificationUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    degree?: Prisma.StringFieldUpdateOperationsInput | string;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    yearCompleted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherQualificationUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    degree?: Prisma.StringFieldUpdateOperationsInput | string;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    yearCompleted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherQualificationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    degree?: boolean;
    institution?: boolean;
    yearCompleted?: boolean;
    createdAt?: boolean;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherQualification"]>;
export type TeacherQualificationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    degree?: boolean;
    institution?: boolean;
    yearCompleted?: boolean;
    createdAt?: boolean;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherQualification"]>;
export type TeacherQualificationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    degree?: boolean;
    institution?: boolean;
    yearCompleted?: boolean;
    createdAt?: boolean;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherQualification"]>;
export type TeacherQualificationSelectScalar = {
    id?: boolean;
    teacherId?: boolean;
    degree?: boolean;
    institution?: boolean;
    yearCompleted?: boolean;
    createdAt?: boolean;
};
export type TeacherQualificationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "teacherId" | "degree" | "institution" | "yearCompleted" | "createdAt", ExtArgs["result"]["teacherQualification"]>;
export type TeacherQualificationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type TeacherQualificationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type TeacherQualificationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type $TeacherQualificationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TeacherQualification";
    objects: {
        teacher: Prisma.$TeacherPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        teacherId: string;
        degree: string;
        institution: string | null;
        yearCompleted: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["teacherQualification"]>;
    composites: {};
};
export type TeacherQualificationGetPayload<S extends boolean | null | undefined | TeacherQualificationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TeacherQualificationPayload, S>;
export type TeacherQualificationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TeacherQualificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeacherQualificationCountAggregateInputType | true;
};
export interface TeacherQualificationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TeacherQualification'];
        meta: {
            name: 'TeacherQualification';
        };
    };
    findUnique<T extends TeacherQualificationFindUniqueArgs>(args: Prisma.SelectSubset<T, TeacherQualificationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TeacherQualificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherQualificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TeacherQualificationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TeacherQualificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherQualificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherQualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TeacherQualificationFindFirstArgs>(args?: Prisma.SelectSubset<T, TeacherQualificationFindFirstArgs<ExtArgs>>): Prisma.Prisma__TeacherQualificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherQualificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TeacherQualificationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TeacherQualificationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherQualificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherQualificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TeacherQualificationFindManyArgs>(args?: Prisma.SelectSubset<T, TeacherQualificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherQualificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TeacherQualificationCreateArgs>(args: Prisma.SelectSubset<T, TeacherQualificationCreateArgs<ExtArgs>>): Prisma.Prisma__TeacherQualificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherQualificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TeacherQualificationCreateManyArgs>(args?: Prisma.SelectSubset<T, TeacherQualificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TeacherQualificationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TeacherQualificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherQualificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TeacherQualificationDeleteArgs>(args: Prisma.SelectSubset<T, TeacherQualificationDeleteArgs<ExtArgs>>): Prisma.Prisma__TeacherQualificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherQualificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TeacherQualificationUpdateArgs>(args: Prisma.SelectSubset<T, TeacherQualificationUpdateArgs<ExtArgs>>): Prisma.Prisma__TeacherQualificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherQualificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TeacherQualificationDeleteManyArgs>(args?: Prisma.SelectSubset<T, TeacherQualificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TeacherQualificationUpdateManyArgs>(args: Prisma.SelectSubset<T, TeacherQualificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TeacherQualificationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TeacherQualificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherQualificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TeacherQualificationUpsertArgs>(args: Prisma.SelectSubset<T, TeacherQualificationUpsertArgs<ExtArgs>>): Prisma.Prisma__TeacherQualificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherQualificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TeacherQualificationCountArgs>(args?: Prisma.Subset<T, TeacherQualificationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TeacherQualificationCountAggregateOutputType> : number>;
    aggregate<T extends TeacherQualificationAggregateArgs>(args: Prisma.Subset<T, TeacherQualificationAggregateArgs>): Prisma.PrismaPromise<GetTeacherQualificationAggregateType<T>>;
    groupBy<T extends TeacherQualificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TeacherQualificationGroupByArgs['orderBy'];
    } : {
        orderBy?: TeacherQualificationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TeacherQualificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherQualificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TeacherQualificationFieldRefs;
}
export interface Prisma__TeacherQualificationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    teacher<T extends Prisma.TeacherDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherDefaultArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TeacherQualificationFieldRefs {
    readonly id: Prisma.FieldRef<"TeacherQualification", 'String'>;
    readonly teacherId: Prisma.FieldRef<"TeacherQualification", 'String'>;
    readonly degree: Prisma.FieldRef<"TeacherQualification", 'String'>;
    readonly institution: Prisma.FieldRef<"TeacherQualification", 'String'>;
    readonly yearCompleted: Prisma.FieldRef<"TeacherQualification", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"TeacherQualification", 'DateTime'>;
}
export type TeacherQualificationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherQualificationSelect<ExtArgs> | null;
    omit?: Prisma.TeacherQualificationOmit<ExtArgs> | null;
    include?: Prisma.TeacherQualificationInclude<ExtArgs> | null;
    where: Prisma.TeacherQualificationWhereUniqueInput;
};
export type TeacherQualificationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherQualificationSelect<ExtArgs> | null;
    omit?: Prisma.TeacherQualificationOmit<ExtArgs> | null;
    include?: Prisma.TeacherQualificationInclude<ExtArgs> | null;
    where: Prisma.TeacherQualificationWhereUniqueInput;
};
export type TeacherQualificationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherQualificationSelect<ExtArgs> | null;
    omit?: Prisma.TeacherQualificationOmit<ExtArgs> | null;
    include?: Prisma.TeacherQualificationInclude<ExtArgs> | null;
    where?: Prisma.TeacherQualificationWhereInput;
    orderBy?: Prisma.TeacherQualificationOrderByWithRelationInput | Prisma.TeacherQualificationOrderByWithRelationInput[];
    cursor?: Prisma.TeacherQualificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherQualificationScalarFieldEnum | Prisma.TeacherQualificationScalarFieldEnum[];
};
export type TeacherQualificationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherQualificationSelect<ExtArgs> | null;
    omit?: Prisma.TeacherQualificationOmit<ExtArgs> | null;
    include?: Prisma.TeacherQualificationInclude<ExtArgs> | null;
    where?: Prisma.TeacherQualificationWhereInput;
    orderBy?: Prisma.TeacherQualificationOrderByWithRelationInput | Prisma.TeacherQualificationOrderByWithRelationInput[];
    cursor?: Prisma.TeacherQualificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherQualificationScalarFieldEnum | Prisma.TeacherQualificationScalarFieldEnum[];
};
export type TeacherQualificationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherQualificationSelect<ExtArgs> | null;
    omit?: Prisma.TeacherQualificationOmit<ExtArgs> | null;
    include?: Prisma.TeacherQualificationInclude<ExtArgs> | null;
    where?: Prisma.TeacherQualificationWhereInput;
    orderBy?: Prisma.TeacherQualificationOrderByWithRelationInput | Prisma.TeacherQualificationOrderByWithRelationInput[];
    cursor?: Prisma.TeacherQualificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherQualificationScalarFieldEnum | Prisma.TeacherQualificationScalarFieldEnum[];
};
export type TeacherQualificationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherQualificationSelect<ExtArgs> | null;
    omit?: Prisma.TeacherQualificationOmit<ExtArgs> | null;
    include?: Prisma.TeacherQualificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeacherQualificationCreateInput, Prisma.TeacherQualificationUncheckedCreateInput>;
};
export type TeacherQualificationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TeacherQualificationCreateManyInput | Prisma.TeacherQualificationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TeacherQualificationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherQualificationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TeacherQualificationOmit<ExtArgs> | null;
    data: Prisma.TeacherQualificationCreateManyInput | Prisma.TeacherQualificationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TeacherQualificationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TeacherQualificationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherQualificationSelect<ExtArgs> | null;
    omit?: Prisma.TeacherQualificationOmit<ExtArgs> | null;
    include?: Prisma.TeacherQualificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeacherQualificationUpdateInput, Prisma.TeacherQualificationUncheckedUpdateInput>;
    where: Prisma.TeacherQualificationWhereUniqueInput;
};
export type TeacherQualificationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TeacherQualificationUpdateManyMutationInput, Prisma.TeacherQualificationUncheckedUpdateManyInput>;
    where?: Prisma.TeacherQualificationWhereInput;
    limit?: number;
};
export type TeacherQualificationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherQualificationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TeacherQualificationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeacherQualificationUpdateManyMutationInput, Prisma.TeacherQualificationUncheckedUpdateManyInput>;
    where?: Prisma.TeacherQualificationWhereInput;
    limit?: number;
    include?: Prisma.TeacherQualificationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TeacherQualificationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherQualificationSelect<ExtArgs> | null;
    omit?: Prisma.TeacherQualificationOmit<ExtArgs> | null;
    include?: Prisma.TeacherQualificationInclude<ExtArgs> | null;
    where: Prisma.TeacherQualificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherQualificationCreateInput, Prisma.TeacherQualificationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TeacherQualificationUpdateInput, Prisma.TeacherQualificationUncheckedUpdateInput>;
};
export type TeacherQualificationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherQualificationSelect<ExtArgs> | null;
    omit?: Prisma.TeacherQualificationOmit<ExtArgs> | null;
    include?: Prisma.TeacherQualificationInclude<ExtArgs> | null;
    where: Prisma.TeacherQualificationWhereUniqueInput;
};
export type TeacherQualificationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherQualificationWhereInput;
    limit?: number;
};
export type TeacherQualificationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherQualificationSelect<ExtArgs> | null;
    omit?: Prisma.TeacherQualificationOmit<ExtArgs> | null;
    include?: Prisma.TeacherQualificationInclude<ExtArgs> | null;
};
