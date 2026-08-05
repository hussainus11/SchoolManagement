import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExpenseCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ExpenseCategoryPayload>;
export type AggregateExpenseCategory = {
    _count: ExpenseCategoryCountAggregateOutputType | null;
    _min: ExpenseCategoryMinAggregateOutputType | null;
    _max: ExpenseCategoryMaxAggregateOutputType | null;
};
export type ExpenseCategoryMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type ExpenseCategoryMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type ExpenseCategoryCountAggregateOutputType = {
    id: number;
    schoolId: number;
    name: number;
    createdAt: number;
    _all: number;
};
export type ExpenseCategoryMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
};
export type ExpenseCategoryMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
};
export type ExpenseCategoryCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
    _all?: true;
};
export type ExpenseCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseCategoryWhereInput;
    orderBy?: Prisma.ExpenseCategoryOrderByWithRelationInput | Prisma.ExpenseCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExpenseCategoryCountAggregateInputType;
    _min?: ExpenseCategoryMinAggregateInputType;
    _max?: ExpenseCategoryMaxAggregateInputType;
};
export type GetExpenseCategoryAggregateType<T extends ExpenseCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateExpenseCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpenseCategory[P]> : Prisma.GetScalarType<T[P], AggregateExpenseCategory[P]>;
};
export type ExpenseCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseCategoryWhereInput;
    orderBy?: Prisma.ExpenseCategoryOrderByWithAggregationInput | Prisma.ExpenseCategoryOrderByWithAggregationInput[];
    by: Prisma.ExpenseCategoryScalarFieldEnum[] | Prisma.ExpenseCategoryScalarFieldEnum;
    having?: Prisma.ExpenseCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseCategoryCountAggregateInputType | true;
    _min?: ExpenseCategoryMinAggregateInputType;
    _max?: ExpenseCategoryMaxAggregateInputType;
};
export type ExpenseCategoryGroupByOutputType = {
    id: string;
    schoolId: string;
    name: string;
    createdAt: Date;
    _count: ExpenseCategoryCountAggregateOutputType | null;
    _min: ExpenseCategoryMinAggregateOutputType | null;
    _max: ExpenseCategoryMaxAggregateOutputType | null;
};
export type GetExpenseCategoryGroupByPayload<T extends ExpenseCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExpenseCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExpenseCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExpenseCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExpenseCategoryGroupByOutputType[P]>;
}>>;
export type ExpenseCategoryWhereInput = {
    AND?: Prisma.ExpenseCategoryWhereInput | Prisma.ExpenseCategoryWhereInput[];
    OR?: Prisma.ExpenseCategoryWhereInput[];
    NOT?: Prisma.ExpenseCategoryWhereInput | Prisma.ExpenseCategoryWhereInput[];
    id?: Prisma.StringFilter<"ExpenseCategory"> | string;
    schoolId?: Prisma.StringFilter<"ExpenseCategory"> | string;
    name?: Prisma.StringFilter<"ExpenseCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"ExpenseCategory"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    expenses?: Prisma.ExpenseListRelationFilter;
};
export type ExpenseCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    expenses?: Prisma.ExpenseOrderByRelationAggregateInput;
};
export type ExpenseCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    schoolId_name?: Prisma.ExpenseCategorySchoolIdNameCompoundUniqueInput;
    AND?: Prisma.ExpenseCategoryWhereInput | Prisma.ExpenseCategoryWhereInput[];
    OR?: Prisma.ExpenseCategoryWhereInput[];
    NOT?: Prisma.ExpenseCategoryWhereInput | Prisma.ExpenseCategoryWhereInput[];
    schoolId?: Prisma.StringFilter<"ExpenseCategory"> | string;
    name?: Prisma.StringFilter<"ExpenseCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"ExpenseCategory"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    expenses?: Prisma.ExpenseListRelationFilter;
}, "id" | "schoolId_name">;
export type ExpenseCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ExpenseCategoryCountOrderByAggregateInput;
    _max?: Prisma.ExpenseCategoryMaxOrderByAggregateInput;
    _min?: Prisma.ExpenseCategoryMinOrderByAggregateInput;
};
export type ExpenseCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExpenseCategoryScalarWhereWithAggregatesInput | Prisma.ExpenseCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExpenseCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExpenseCategoryScalarWhereWithAggregatesInput | Prisma.ExpenseCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ExpenseCategory"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"ExpenseCategory"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ExpenseCategory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ExpenseCategory"> | Date | string;
};
export type ExpenseCategoryCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExpenseCategoriesInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutCategoryInput;
};
export type ExpenseCategoryUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ExpenseCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExpenseCategoriesNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseCategoryCreateManyInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
};
export type ExpenseCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCategoryListRelationFilter = {
    every?: Prisma.ExpenseCategoryWhereInput;
    some?: Prisma.ExpenseCategoryWhereInput;
    none?: Prisma.ExpenseCategoryWhereInput;
};
export type ExpenseCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExpenseCategorySchoolIdNameCompoundUniqueInput = {
    schoolId: string;
    name: string;
};
export type ExpenseCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ExpenseCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ExpenseCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ExpenseCategoryScalarRelationFilter = {
    is?: Prisma.ExpenseCategoryWhereInput;
    isNot?: Prisma.ExpenseCategoryWhereInput;
};
export type ExpenseCategoryCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutSchoolInput, Prisma.ExpenseCategoryUncheckedCreateWithoutSchoolInput> | Prisma.ExpenseCategoryCreateWithoutSchoolInput[] | Prisma.ExpenseCategoryUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutSchoolInput | Prisma.ExpenseCategoryCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.ExpenseCategoryCreateManySchoolInputEnvelope;
    connect?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
};
export type ExpenseCategoryUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutSchoolInput, Prisma.ExpenseCategoryUncheckedCreateWithoutSchoolInput> | Prisma.ExpenseCategoryCreateWithoutSchoolInput[] | Prisma.ExpenseCategoryUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutSchoolInput | Prisma.ExpenseCategoryCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.ExpenseCategoryCreateManySchoolInputEnvelope;
    connect?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
};
export type ExpenseCategoryUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutSchoolInput, Prisma.ExpenseCategoryUncheckedCreateWithoutSchoolInput> | Prisma.ExpenseCategoryCreateWithoutSchoolInput[] | Prisma.ExpenseCategoryUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutSchoolInput | Prisma.ExpenseCategoryCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.ExpenseCategoryUpsertWithWhereUniqueWithoutSchoolInput | Prisma.ExpenseCategoryUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.ExpenseCategoryCreateManySchoolInputEnvelope;
    set?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    disconnect?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    delete?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    connect?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    update?: Prisma.ExpenseCategoryUpdateWithWhereUniqueWithoutSchoolInput | Prisma.ExpenseCategoryUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.ExpenseCategoryUpdateManyWithWhereWithoutSchoolInput | Prisma.ExpenseCategoryUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.ExpenseCategoryScalarWhereInput | Prisma.ExpenseCategoryScalarWhereInput[];
};
export type ExpenseCategoryUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutSchoolInput, Prisma.ExpenseCategoryUncheckedCreateWithoutSchoolInput> | Prisma.ExpenseCategoryCreateWithoutSchoolInput[] | Prisma.ExpenseCategoryUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutSchoolInput | Prisma.ExpenseCategoryCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.ExpenseCategoryUpsertWithWhereUniqueWithoutSchoolInput | Prisma.ExpenseCategoryUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.ExpenseCategoryCreateManySchoolInputEnvelope;
    set?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    disconnect?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    delete?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    connect?: Prisma.ExpenseCategoryWhereUniqueInput | Prisma.ExpenseCategoryWhereUniqueInput[];
    update?: Prisma.ExpenseCategoryUpdateWithWhereUniqueWithoutSchoolInput | Prisma.ExpenseCategoryUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.ExpenseCategoryUpdateManyWithWhereWithoutSchoolInput | Prisma.ExpenseCategoryUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.ExpenseCategoryScalarWhereInput | Prisma.ExpenseCategoryScalarWhereInput[];
};
export type ExpenseCategoryCreateNestedOneWithoutExpensesInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutExpensesInput, Prisma.ExpenseCategoryUncheckedCreateWithoutExpensesInput>;
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutExpensesInput;
    connect?: Prisma.ExpenseCategoryWhereUniqueInput;
};
export type ExpenseCategoryUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutExpensesInput, Prisma.ExpenseCategoryUncheckedCreateWithoutExpensesInput>;
    connectOrCreate?: Prisma.ExpenseCategoryCreateOrConnectWithoutExpensesInput;
    upsert?: Prisma.ExpenseCategoryUpsertWithoutExpensesInput;
    connect?: Prisma.ExpenseCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExpenseCategoryUpdateToOneWithWhereWithoutExpensesInput, Prisma.ExpenseCategoryUpdateWithoutExpensesInput>, Prisma.ExpenseCategoryUncheckedUpdateWithoutExpensesInput>;
};
export type ExpenseCategoryCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutCategoryInput;
};
export type ExpenseCategoryUncheckedCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ExpenseCategoryCreateOrConnectWithoutSchoolInput = {
    where: Prisma.ExpenseCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutSchoolInput, Prisma.ExpenseCategoryUncheckedCreateWithoutSchoolInput>;
};
export type ExpenseCategoryCreateManySchoolInputEnvelope = {
    data: Prisma.ExpenseCategoryCreateManySchoolInput | Prisma.ExpenseCategoryCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type ExpenseCategoryUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.ExpenseCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseCategoryUpdateWithoutSchoolInput, Prisma.ExpenseCategoryUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutSchoolInput, Prisma.ExpenseCategoryUncheckedCreateWithoutSchoolInput>;
};
export type ExpenseCategoryUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.ExpenseCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateWithoutSchoolInput, Prisma.ExpenseCategoryUncheckedUpdateWithoutSchoolInput>;
};
export type ExpenseCategoryUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.ExpenseCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateManyMutationInput, Prisma.ExpenseCategoryUncheckedUpdateManyWithoutSchoolInput>;
};
export type ExpenseCategoryScalarWhereInput = {
    AND?: Prisma.ExpenseCategoryScalarWhereInput | Prisma.ExpenseCategoryScalarWhereInput[];
    OR?: Prisma.ExpenseCategoryScalarWhereInput[];
    NOT?: Prisma.ExpenseCategoryScalarWhereInput | Prisma.ExpenseCategoryScalarWhereInput[];
    id?: Prisma.StringFilter<"ExpenseCategory"> | string;
    schoolId?: Prisma.StringFilter<"ExpenseCategory"> | string;
    name?: Prisma.StringFilter<"ExpenseCategory"> | string;
    createdAt?: Prisma.DateTimeFilter<"ExpenseCategory"> | Date | string;
};
export type ExpenseCategoryCreateWithoutExpensesInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExpenseCategoriesInput;
};
export type ExpenseCategoryUncheckedCreateWithoutExpensesInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
};
export type ExpenseCategoryCreateOrConnectWithoutExpensesInput = {
    where: Prisma.ExpenseCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutExpensesInput, Prisma.ExpenseCategoryUncheckedCreateWithoutExpensesInput>;
};
export type ExpenseCategoryUpsertWithoutExpensesInput = {
    update: Prisma.XOR<Prisma.ExpenseCategoryUpdateWithoutExpensesInput, Prisma.ExpenseCategoryUncheckedUpdateWithoutExpensesInput>;
    create: Prisma.XOR<Prisma.ExpenseCategoryCreateWithoutExpensesInput, Prisma.ExpenseCategoryUncheckedCreateWithoutExpensesInput>;
    where?: Prisma.ExpenseCategoryWhereInput;
};
export type ExpenseCategoryUpdateToOneWithWhereWithoutExpensesInput = {
    where?: Prisma.ExpenseCategoryWhereInput;
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateWithoutExpensesInput, Prisma.ExpenseCategoryUncheckedUpdateWithoutExpensesInput>;
};
export type ExpenseCategoryUpdateWithoutExpensesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExpenseCategoriesNestedInput;
};
export type ExpenseCategoryUncheckedUpdateWithoutExpensesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCategoryCreateManySchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
};
export type ExpenseCategoryUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expenses?: Prisma.ExpenseUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseCategoryUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ExpenseCategoryUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseCategoryCountOutputType = {
    expenses: number;
};
export type ExpenseCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expenses?: boolean | ExpenseCategoryCountOutputTypeCountExpensesArgs;
};
export type ExpenseCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategoryCountOutputTypeSelect<ExtArgs> | null;
};
export type ExpenseCategoryCountOutputTypeCountExpensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
};
export type ExpenseCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    expenses?: boolean | Prisma.ExpenseCategory$expensesArgs<ExtArgs>;
    _count?: boolean | Prisma.ExpenseCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenseCategory"]>;
export type ExpenseCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenseCategory"]>;
export type ExpenseCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenseCategory"]>;
export type ExpenseCategorySelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
};
export type ExpenseCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "name" | "createdAt", ExtArgs["result"]["expenseCategory"]>;
export type ExpenseCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    expenses?: boolean | Prisma.ExpenseCategory$expensesArgs<ExtArgs>;
    _count?: boolean | Prisma.ExpenseCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ExpenseCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type ExpenseCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type $ExpenseCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExpenseCategory";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        expenses: Prisma.$ExpensePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        name: string;
        createdAt: Date;
    }, ExtArgs["result"]["expenseCategory"]>;
    composites: {};
};
export type ExpenseCategoryGetPayload<S extends boolean | null | undefined | ExpenseCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload, S>;
export type ExpenseCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExpenseCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExpenseCategoryCountAggregateInputType | true;
};
export interface ExpenseCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExpenseCategory'];
        meta: {
            name: 'ExpenseCategory';
        };
    };
    findUnique<T extends ExpenseCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExpenseCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExpenseCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ExpenseCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExpenseCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExpenseCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExpenseCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, ExpenseCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExpenseCategoryCreateArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExpenseCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ExpenseCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExpenseCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExpenseCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExpenseCategoryDeleteArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExpenseCategoryUpdateArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExpenseCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExpenseCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExpenseCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExpenseCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExpenseCategoryUpsertArgs>(args: Prisma.SelectSubset<T, ExpenseCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ExpenseCategoryClient<runtime.Types.Result.GetResult<Prisma.$ExpenseCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExpenseCategoryCountArgs>(args?: Prisma.Subset<T, ExpenseCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExpenseCategoryCountAggregateOutputType> : number>;
    aggregate<T extends ExpenseCategoryAggregateArgs>(args: Prisma.Subset<T, ExpenseCategoryAggregateArgs>): Prisma.PrismaPromise<GetExpenseCategoryAggregateType<T>>;
    groupBy<T extends ExpenseCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExpenseCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ExpenseCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExpenseCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExpenseCategoryFieldRefs;
}
export interface Prisma__ExpenseCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    expenses<T extends Prisma.ExpenseCategory$expensesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExpenseCategory$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExpenseCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"ExpenseCategory", 'String'>;
    readonly schoolId: Prisma.FieldRef<"ExpenseCategory", 'String'>;
    readonly name: Prisma.FieldRef<"ExpenseCategory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ExpenseCategory", 'DateTime'>;
}
export type ExpenseCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where: Prisma.ExpenseCategoryWhereUniqueInput;
};
export type ExpenseCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where: Prisma.ExpenseCategoryWhereUniqueInput;
};
export type ExpenseCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseCategoryWhereInput;
    orderBy?: Prisma.ExpenseCategoryOrderByWithRelationInput | Prisma.ExpenseCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseCategoryScalarFieldEnum | Prisma.ExpenseCategoryScalarFieldEnum[];
};
export type ExpenseCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseCategoryWhereInput;
    orderBy?: Prisma.ExpenseCategoryOrderByWithRelationInput | Prisma.ExpenseCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseCategoryScalarFieldEnum | Prisma.ExpenseCategoryScalarFieldEnum[];
};
export type ExpenseCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where?: Prisma.ExpenseCategoryWhereInput;
    orderBy?: Prisma.ExpenseCategoryOrderByWithRelationInput | Prisma.ExpenseCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseCategoryScalarFieldEnum | Prisma.ExpenseCategoryScalarFieldEnum[];
};
export type ExpenseCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseCategoryCreateInput, Prisma.ExpenseCategoryUncheckedCreateInput>;
};
export type ExpenseCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExpenseCategoryCreateManyInput | Prisma.ExpenseCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExpenseCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    data: Prisma.ExpenseCategoryCreateManyInput | Prisma.ExpenseCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExpenseCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExpenseCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateInput, Prisma.ExpenseCategoryUncheckedUpdateInput>;
    where: Prisma.ExpenseCategoryWhereUniqueInput;
};
export type ExpenseCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateManyMutationInput, Prisma.ExpenseCategoryUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseCategoryWhereInput;
    limit?: number;
};
export type ExpenseCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseCategoryUpdateManyMutationInput, Prisma.ExpenseCategoryUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseCategoryWhereInput;
    limit?: number;
    include?: Prisma.ExpenseCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExpenseCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where: Prisma.ExpenseCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCategoryCreateInput, Prisma.ExpenseCategoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExpenseCategoryUpdateInput, Prisma.ExpenseCategoryUncheckedUpdateInput>;
};
export type ExpenseCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
    where: Prisma.ExpenseCategoryWhereUniqueInput;
};
export type ExpenseCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseCategoryWhereInput;
    limit?: number;
};
export type ExpenseCategory$expensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithRelationInput | Prisma.ExpenseOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseScalarFieldEnum | Prisma.ExpenseScalarFieldEnum[];
};
export type ExpenseCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCategorySelect<ExtArgs> | null;
    omit?: Prisma.ExpenseCategoryOmit<ExtArgs> | null;
    include?: Prisma.ExpenseCategoryInclude<ExtArgs> | null;
};
