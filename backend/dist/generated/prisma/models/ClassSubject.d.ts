import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClassSubjectModel = runtime.Types.Result.DefaultSelection<Prisma.$ClassSubjectPayload>;
export type AggregateClassSubject = {
    _count: ClassSubjectCountAggregateOutputType | null;
    _min: ClassSubjectMinAggregateOutputType | null;
    _max: ClassSubjectMaxAggregateOutputType | null;
};
export type ClassSubjectMinAggregateOutputType = {
    id: string | null;
    classId: string | null;
    subjectId: string | null;
    createdAt: Date | null;
};
export type ClassSubjectMaxAggregateOutputType = {
    id: string | null;
    classId: string | null;
    subjectId: string | null;
    createdAt: Date | null;
};
export type ClassSubjectCountAggregateOutputType = {
    id: number;
    classId: number;
    subjectId: number;
    createdAt: number;
    _all: number;
};
export type ClassSubjectMinAggregateInputType = {
    id?: true;
    classId?: true;
    subjectId?: true;
    createdAt?: true;
};
export type ClassSubjectMaxAggregateInputType = {
    id?: true;
    classId?: true;
    subjectId?: true;
    createdAt?: true;
};
export type ClassSubjectCountAggregateInputType = {
    id?: true;
    classId?: true;
    subjectId?: true;
    createdAt?: true;
    _all?: true;
};
export type ClassSubjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassSubjectWhereInput;
    orderBy?: Prisma.ClassSubjectOrderByWithRelationInput | Prisma.ClassSubjectOrderByWithRelationInput[];
    cursor?: Prisma.ClassSubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClassSubjectCountAggregateInputType;
    _min?: ClassSubjectMinAggregateInputType;
    _max?: ClassSubjectMaxAggregateInputType;
};
export type GetClassSubjectAggregateType<T extends ClassSubjectAggregateArgs> = {
    [P in keyof T & keyof AggregateClassSubject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClassSubject[P]> : Prisma.GetScalarType<T[P], AggregateClassSubject[P]>;
};
export type ClassSubjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassSubjectWhereInput;
    orderBy?: Prisma.ClassSubjectOrderByWithAggregationInput | Prisma.ClassSubjectOrderByWithAggregationInput[];
    by: Prisma.ClassSubjectScalarFieldEnum[] | Prisma.ClassSubjectScalarFieldEnum;
    having?: Prisma.ClassSubjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClassSubjectCountAggregateInputType | true;
    _min?: ClassSubjectMinAggregateInputType;
    _max?: ClassSubjectMaxAggregateInputType;
};
export type ClassSubjectGroupByOutputType = {
    id: string;
    classId: string;
    subjectId: string;
    createdAt: Date;
    _count: ClassSubjectCountAggregateOutputType | null;
    _min: ClassSubjectMinAggregateOutputType | null;
    _max: ClassSubjectMaxAggregateOutputType | null;
};
export type GetClassSubjectGroupByPayload<T extends ClassSubjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClassSubjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClassSubjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClassSubjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClassSubjectGroupByOutputType[P]>;
}>>;
export type ClassSubjectWhereInput = {
    AND?: Prisma.ClassSubjectWhereInput | Prisma.ClassSubjectWhereInput[];
    OR?: Prisma.ClassSubjectWhereInput[];
    NOT?: Prisma.ClassSubjectWhereInput | Prisma.ClassSubjectWhereInput[];
    id?: Prisma.StringFilter<"ClassSubject"> | string;
    classId?: Prisma.StringFilter<"ClassSubject"> | string;
    subjectId?: Prisma.StringFilter<"ClassSubject"> | string;
    createdAt?: Prisma.DateTimeFilter<"ClassSubject"> | Date | string;
    class?: Prisma.XOR<Prisma.ClassScalarRelationFilter, Prisma.ClassWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
};
export type ClassSubjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    class?: Prisma.ClassOrderByWithRelationInput;
    subject?: Prisma.SubjectOrderByWithRelationInput;
};
export type ClassSubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    classId_subjectId?: Prisma.ClassSubjectClassIdSubjectIdCompoundUniqueInput;
    AND?: Prisma.ClassSubjectWhereInput | Prisma.ClassSubjectWhereInput[];
    OR?: Prisma.ClassSubjectWhereInput[];
    NOT?: Prisma.ClassSubjectWhereInput | Prisma.ClassSubjectWhereInput[];
    classId?: Prisma.StringFilter<"ClassSubject"> | string;
    subjectId?: Prisma.StringFilter<"ClassSubject"> | string;
    createdAt?: Prisma.DateTimeFilter<"ClassSubject"> | Date | string;
    class?: Prisma.XOR<Prisma.ClassScalarRelationFilter, Prisma.ClassWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
}, "id" | "classId_subjectId">;
export type ClassSubjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ClassSubjectCountOrderByAggregateInput;
    _max?: Prisma.ClassSubjectMaxOrderByAggregateInput;
    _min?: Prisma.ClassSubjectMinOrderByAggregateInput;
};
export type ClassSubjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClassSubjectScalarWhereWithAggregatesInput | Prisma.ClassSubjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClassSubjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClassSubjectScalarWhereWithAggregatesInput | Prisma.ClassSubjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ClassSubject"> | string;
    classId?: Prisma.StringWithAggregatesFilter<"ClassSubject"> | string;
    subjectId?: Prisma.StringWithAggregatesFilter<"ClassSubject"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ClassSubject"> | Date | string;
};
export type ClassSubjectCreateInput = {
    id?: string;
    createdAt?: Date | string;
    class: Prisma.ClassCreateNestedOneWithoutClassSubjectsInput;
    subject: Prisma.SubjectCreateNestedOneWithoutClassSubjectsInput;
};
export type ClassSubjectUncheckedCreateInput = {
    id?: string;
    classId: string;
    subjectId: string;
    createdAt?: Date | string;
};
export type ClassSubjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.ClassUpdateOneRequiredWithoutClassSubjectsNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutClassSubjectsNestedInput;
};
export type ClassSubjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassSubjectCreateManyInput = {
    id?: string;
    classId: string;
    subjectId: string;
    createdAt?: Date | string;
};
export type ClassSubjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassSubjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassSubjectListRelationFilter = {
    every?: Prisma.ClassSubjectWhereInput;
    some?: Prisma.ClassSubjectWhereInput;
    none?: Prisma.ClassSubjectWhereInput;
};
export type ClassSubjectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClassSubjectClassIdSubjectIdCompoundUniqueInput = {
    classId: string;
    subjectId: string;
};
export type ClassSubjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ClassSubjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ClassSubjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ClassSubjectCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.ClassSubjectCreateWithoutClassInput, Prisma.ClassSubjectUncheckedCreateWithoutClassInput> | Prisma.ClassSubjectCreateWithoutClassInput[] | Prisma.ClassSubjectUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.ClassSubjectCreateOrConnectWithoutClassInput | Prisma.ClassSubjectCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.ClassSubjectCreateManyClassInputEnvelope;
    connect?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
};
export type ClassSubjectUncheckedCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.ClassSubjectCreateWithoutClassInput, Prisma.ClassSubjectUncheckedCreateWithoutClassInput> | Prisma.ClassSubjectCreateWithoutClassInput[] | Prisma.ClassSubjectUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.ClassSubjectCreateOrConnectWithoutClassInput | Prisma.ClassSubjectCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.ClassSubjectCreateManyClassInputEnvelope;
    connect?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
};
export type ClassSubjectUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.ClassSubjectCreateWithoutClassInput, Prisma.ClassSubjectUncheckedCreateWithoutClassInput> | Prisma.ClassSubjectCreateWithoutClassInput[] | Prisma.ClassSubjectUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.ClassSubjectCreateOrConnectWithoutClassInput | Prisma.ClassSubjectCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.ClassSubjectUpsertWithWhereUniqueWithoutClassInput | Prisma.ClassSubjectUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.ClassSubjectCreateManyClassInputEnvelope;
    set?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    disconnect?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    delete?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    connect?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    update?: Prisma.ClassSubjectUpdateWithWhereUniqueWithoutClassInput | Prisma.ClassSubjectUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.ClassSubjectUpdateManyWithWhereWithoutClassInput | Prisma.ClassSubjectUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.ClassSubjectScalarWhereInput | Prisma.ClassSubjectScalarWhereInput[];
};
export type ClassSubjectUncheckedUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.ClassSubjectCreateWithoutClassInput, Prisma.ClassSubjectUncheckedCreateWithoutClassInput> | Prisma.ClassSubjectCreateWithoutClassInput[] | Prisma.ClassSubjectUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.ClassSubjectCreateOrConnectWithoutClassInput | Prisma.ClassSubjectCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.ClassSubjectUpsertWithWhereUniqueWithoutClassInput | Prisma.ClassSubjectUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.ClassSubjectCreateManyClassInputEnvelope;
    set?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    disconnect?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    delete?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    connect?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    update?: Prisma.ClassSubjectUpdateWithWhereUniqueWithoutClassInput | Prisma.ClassSubjectUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.ClassSubjectUpdateManyWithWhereWithoutClassInput | Prisma.ClassSubjectUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.ClassSubjectScalarWhereInput | Prisma.ClassSubjectScalarWhereInput[];
};
export type ClassSubjectCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.ClassSubjectCreateWithoutSubjectInput, Prisma.ClassSubjectUncheckedCreateWithoutSubjectInput> | Prisma.ClassSubjectCreateWithoutSubjectInput[] | Prisma.ClassSubjectUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.ClassSubjectCreateOrConnectWithoutSubjectInput | Prisma.ClassSubjectCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.ClassSubjectCreateManySubjectInputEnvelope;
    connect?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
};
export type ClassSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.ClassSubjectCreateWithoutSubjectInput, Prisma.ClassSubjectUncheckedCreateWithoutSubjectInput> | Prisma.ClassSubjectCreateWithoutSubjectInput[] | Prisma.ClassSubjectUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.ClassSubjectCreateOrConnectWithoutSubjectInput | Prisma.ClassSubjectCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.ClassSubjectCreateManySubjectInputEnvelope;
    connect?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
};
export type ClassSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.ClassSubjectCreateWithoutSubjectInput, Prisma.ClassSubjectUncheckedCreateWithoutSubjectInput> | Prisma.ClassSubjectCreateWithoutSubjectInput[] | Prisma.ClassSubjectUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.ClassSubjectCreateOrConnectWithoutSubjectInput | Prisma.ClassSubjectCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.ClassSubjectUpsertWithWhereUniqueWithoutSubjectInput | Prisma.ClassSubjectUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.ClassSubjectCreateManySubjectInputEnvelope;
    set?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    disconnect?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    delete?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    connect?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    update?: Prisma.ClassSubjectUpdateWithWhereUniqueWithoutSubjectInput | Prisma.ClassSubjectUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.ClassSubjectUpdateManyWithWhereWithoutSubjectInput | Prisma.ClassSubjectUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.ClassSubjectScalarWhereInput | Prisma.ClassSubjectScalarWhereInput[];
};
export type ClassSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.ClassSubjectCreateWithoutSubjectInput, Prisma.ClassSubjectUncheckedCreateWithoutSubjectInput> | Prisma.ClassSubjectCreateWithoutSubjectInput[] | Prisma.ClassSubjectUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.ClassSubjectCreateOrConnectWithoutSubjectInput | Prisma.ClassSubjectCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.ClassSubjectUpsertWithWhereUniqueWithoutSubjectInput | Prisma.ClassSubjectUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.ClassSubjectCreateManySubjectInputEnvelope;
    set?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    disconnect?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    delete?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    connect?: Prisma.ClassSubjectWhereUniqueInput | Prisma.ClassSubjectWhereUniqueInput[];
    update?: Prisma.ClassSubjectUpdateWithWhereUniqueWithoutSubjectInput | Prisma.ClassSubjectUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.ClassSubjectUpdateManyWithWhereWithoutSubjectInput | Prisma.ClassSubjectUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.ClassSubjectScalarWhereInput | Prisma.ClassSubjectScalarWhereInput[];
};
export type ClassSubjectCreateWithoutClassInput = {
    id?: string;
    createdAt?: Date | string;
    subject: Prisma.SubjectCreateNestedOneWithoutClassSubjectsInput;
};
export type ClassSubjectUncheckedCreateWithoutClassInput = {
    id?: string;
    subjectId: string;
    createdAt?: Date | string;
};
export type ClassSubjectCreateOrConnectWithoutClassInput = {
    where: Prisma.ClassSubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassSubjectCreateWithoutClassInput, Prisma.ClassSubjectUncheckedCreateWithoutClassInput>;
};
export type ClassSubjectCreateManyClassInputEnvelope = {
    data: Prisma.ClassSubjectCreateManyClassInput | Prisma.ClassSubjectCreateManyClassInput[];
    skipDuplicates?: boolean;
};
export type ClassSubjectUpsertWithWhereUniqueWithoutClassInput = {
    where: Prisma.ClassSubjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClassSubjectUpdateWithoutClassInput, Prisma.ClassSubjectUncheckedUpdateWithoutClassInput>;
    create: Prisma.XOR<Prisma.ClassSubjectCreateWithoutClassInput, Prisma.ClassSubjectUncheckedCreateWithoutClassInput>;
};
export type ClassSubjectUpdateWithWhereUniqueWithoutClassInput = {
    where: Prisma.ClassSubjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClassSubjectUpdateWithoutClassInput, Prisma.ClassSubjectUncheckedUpdateWithoutClassInput>;
};
export type ClassSubjectUpdateManyWithWhereWithoutClassInput = {
    where: Prisma.ClassSubjectScalarWhereInput;
    data: Prisma.XOR<Prisma.ClassSubjectUpdateManyMutationInput, Prisma.ClassSubjectUncheckedUpdateManyWithoutClassInput>;
};
export type ClassSubjectScalarWhereInput = {
    AND?: Prisma.ClassSubjectScalarWhereInput | Prisma.ClassSubjectScalarWhereInput[];
    OR?: Prisma.ClassSubjectScalarWhereInput[];
    NOT?: Prisma.ClassSubjectScalarWhereInput | Prisma.ClassSubjectScalarWhereInput[];
    id?: Prisma.StringFilter<"ClassSubject"> | string;
    classId?: Prisma.StringFilter<"ClassSubject"> | string;
    subjectId?: Prisma.StringFilter<"ClassSubject"> | string;
    createdAt?: Prisma.DateTimeFilter<"ClassSubject"> | Date | string;
};
export type ClassSubjectCreateWithoutSubjectInput = {
    id?: string;
    createdAt?: Date | string;
    class: Prisma.ClassCreateNestedOneWithoutClassSubjectsInput;
};
export type ClassSubjectUncheckedCreateWithoutSubjectInput = {
    id?: string;
    classId: string;
    createdAt?: Date | string;
};
export type ClassSubjectCreateOrConnectWithoutSubjectInput = {
    where: Prisma.ClassSubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassSubjectCreateWithoutSubjectInput, Prisma.ClassSubjectUncheckedCreateWithoutSubjectInput>;
};
export type ClassSubjectCreateManySubjectInputEnvelope = {
    data: Prisma.ClassSubjectCreateManySubjectInput | Prisma.ClassSubjectCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type ClassSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.ClassSubjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClassSubjectUpdateWithoutSubjectInput, Prisma.ClassSubjectUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.ClassSubjectCreateWithoutSubjectInput, Prisma.ClassSubjectUncheckedCreateWithoutSubjectInput>;
};
export type ClassSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.ClassSubjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClassSubjectUpdateWithoutSubjectInput, Prisma.ClassSubjectUncheckedUpdateWithoutSubjectInput>;
};
export type ClassSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.ClassSubjectScalarWhereInput;
    data: Prisma.XOR<Prisma.ClassSubjectUpdateManyMutationInput, Prisma.ClassSubjectUncheckedUpdateManyWithoutSubjectInput>;
};
export type ClassSubjectCreateManyClassInput = {
    id?: string;
    subjectId: string;
    createdAt?: Date | string;
};
export type ClassSubjectUpdateWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutClassSubjectsNestedInput;
};
export type ClassSubjectUncheckedUpdateWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassSubjectUncheckedUpdateManyWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassSubjectCreateManySubjectInput = {
    id?: string;
    classId: string;
    createdAt?: Date | string;
};
export type ClassSubjectUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.ClassUpdateOneRequiredWithoutClassSubjectsNestedInput;
};
export type ClassSubjectUncheckedUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassSubjectUncheckedUpdateManyWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassSubjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    classId?: boolean;
    subjectId?: boolean;
    createdAt?: boolean;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["classSubject"]>;
export type ClassSubjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    classId?: boolean;
    subjectId?: boolean;
    createdAt?: boolean;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["classSubject"]>;
export type ClassSubjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    classId?: boolean;
    subjectId?: boolean;
    createdAt?: boolean;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["classSubject"]>;
export type ClassSubjectSelectScalar = {
    id?: boolean;
    classId?: boolean;
    subjectId?: boolean;
    createdAt?: boolean;
};
export type ClassSubjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "classId" | "subjectId" | "createdAt", ExtArgs["result"]["classSubject"]>;
export type ClassSubjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
};
export type ClassSubjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
};
export type ClassSubjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
};
export type $ClassSubjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClassSubject";
    objects: {
        class: Prisma.$ClassPayload<ExtArgs>;
        subject: Prisma.$SubjectPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        classId: string;
        subjectId: string;
        createdAt: Date;
    }, ExtArgs["result"]["classSubject"]>;
    composites: {};
};
export type ClassSubjectGetPayload<S extends boolean | null | undefined | ClassSubjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload, S>;
export type ClassSubjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClassSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClassSubjectCountAggregateInputType | true;
};
export interface ClassSubjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClassSubject'];
        meta: {
            name: 'ClassSubject';
        };
    };
    findUnique<T extends ClassSubjectFindUniqueArgs>(args: Prisma.SelectSubset<T, ClassSubjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClassSubjectClient<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClassSubjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClassSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClassSubjectClient<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClassSubjectFindFirstArgs>(args?: Prisma.SelectSubset<T, ClassSubjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClassSubjectClient<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClassSubjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClassSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClassSubjectClient<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClassSubjectFindManyArgs>(args?: Prisma.SelectSubset<T, ClassSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClassSubjectCreateArgs>(args: Prisma.SelectSubset<T, ClassSubjectCreateArgs<ExtArgs>>): Prisma.Prisma__ClassSubjectClient<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClassSubjectCreateManyArgs>(args?: Prisma.SelectSubset<T, ClassSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClassSubjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClassSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClassSubjectDeleteArgs>(args: Prisma.SelectSubset<T, ClassSubjectDeleteArgs<ExtArgs>>): Prisma.Prisma__ClassSubjectClient<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClassSubjectUpdateArgs>(args: Prisma.SelectSubset<T, ClassSubjectUpdateArgs<ExtArgs>>): Prisma.Prisma__ClassSubjectClient<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClassSubjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClassSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClassSubjectUpdateManyArgs>(args: Prisma.SelectSubset<T, ClassSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClassSubjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClassSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClassSubjectUpsertArgs>(args: Prisma.SelectSubset<T, ClassSubjectUpsertArgs<ExtArgs>>): Prisma.Prisma__ClassSubjectClient<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClassSubjectCountArgs>(args?: Prisma.Subset<T, ClassSubjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClassSubjectCountAggregateOutputType> : number>;
    aggregate<T extends ClassSubjectAggregateArgs>(args: Prisma.Subset<T, ClassSubjectAggregateArgs>): Prisma.PrismaPromise<GetClassSubjectAggregateType<T>>;
    groupBy<T extends ClassSubjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClassSubjectGroupByArgs['orderBy'];
    } : {
        orderBy?: ClassSubjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClassSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClassSubjectFieldRefs;
}
export interface Prisma__ClassSubjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    class<T extends Prisma.ClassDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClassDefaultArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subject<T extends Prisma.SubjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SubjectDefaultArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClassSubjectFieldRefs {
    readonly id: Prisma.FieldRef<"ClassSubject", 'String'>;
    readonly classId: Prisma.FieldRef<"ClassSubject", 'String'>;
    readonly subjectId: Prisma.FieldRef<"ClassSubject", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ClassSubject", 'DateTime'>;
}
export type ClassSubjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSubjectSelect<ExtArgs> | null;
    omit?: Prisma.ClassSubjectOmit<ExtArgs> | null;
    include?: Prisma.ClassSubjectInclude<ExtArgs> | null;
    where: Prisma.ClassSubjectWhereUniqueInput;
};
export type ClassSubjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSubjectSelect<ExtArgs> | null;
    omit?: Prisma.ClassSubjectOmit<ExtArgs> | null;
    include?: Prisma.ClassSubjectInclude<ExtArgs> | null;
    where: Prisma.ClassSubjectWhereUniqueInput;
};
export type ClassSubjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSubjectSelect<ExtArgs> | null;
    omit?: Prisma.ClassSubjectOmit<ExtArgs> | null;
    include?: Prisma.ClassSubjectInclude<ExtArgs> | null;
    where?: Prisma.ClassSubjectWhereInput;
    orderBy?: Prisma.ClassSubjectOrderByWithRelationInput | Prisma.ClassSubjectOrderByWithRelationInput[];
    cursor?: Prisma.ClassSubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassSubjectScalarFieldEnum | Prisma.ClassSubjectScalarFieldEnum[];
};
export type ClassSubjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSubjectSelect<ExtArgs> | null;
    omit?: Prisma.ClassSubjectOmit<ExtArgs> | null;
    include?: Prisma.ClassSubjectInclude<ExtArgs> | null;
    where?: Prisma.ClassSubjectWhereInput;
    orderBy?: Prisma.ClassSubjectOrderByWithRelationInput | Prisma.ClassSubjectOrderByWithRelationInput[];
    cursor?: Prisma.ClassSubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassSubjectScalarFieldEnum | Prisma.ClassSubjectScalarFieldEnum[];
};
export type ClassSubjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSubjectSelect<ExtArgs> | null;
    omit?: Prisma.ClassSubjectOmit<ExtArgs> | null;
    include?: Prisma.ClassSubjectInclude<ExtArgs> | null;
    where?: Prisma.ClassSubjectWhereInput;
    orderBy?: Prisma.ClassSubjectOrderByWithRelationInput | Prisma.ClassSubjectOrderByWithRelationInput[];
    cursor?: Prisma.ClassSubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassSubjectScalarFieldEnum | Prisma.ClassSubjectScalarFieldEnum[];
};
export type ClassSubjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSubjectSelect<ExtArgs> | null;
    omit?: Prisma.ClassSubjectOmit<ExtArgs> | null;
    include?: Prisma.ClassSubjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassSubjectCreateInput, Prisma.ClassSubjectUncheckedCreateInput>;
};
export type ClassSubjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClassSubjectCreateManyInput | Prisma.ClassSubjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClassSubjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSubjectSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClassSubjectOmit<ExtArgs> | null;
    data: Prisma.ClassSubjectCreateManyInput | Prisma.ClassSubjectCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClassSubjectIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClassSubjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSubjectSelect<ExtArgs> | null;
    omit?: Prisma.ClassSubjectOmit<ExtArgs> | null;
    include?: Prisma.ClassSubjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassSubjectUpdateInput, Prisma.ClassSubjectUncheckedUpdateInput>;
    where: Prisma.ClassSubjectWhereUniqueInput;
};
export type ClassSubjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClassSubjectUpdateManyMutationInput, Prisma.ClassSubjectUncheckedUpdateManyInput>;
    where?: Prisma.ClassSubjectWhereInput;
    limit?: number;
};
export type ClassSubjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSubjectSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClassSubjectOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassSubjectUpdateManyMutationInput, Prisma.ClassSubjectUncheckedUpdateManyInput>;
    where?: Prisma.ClassSubjectWhereInput;
    limit?: number;
    include?: Prisma.ClassSubjectIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClassSubjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSubjectSelect<ExtArgs> | null;
    omit?: Prisma.ClassSubjectOmit<ExtArgs> | null;
    include?: Prisma.ClassSubjectInclude<ExtArgs> | null;
    where: Prisma.ClassSubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassSubjectCreateInput, Prisma.ClassSubjectUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClassSubjectUpdateInput, Prisma.ClassSubjectUncheckedUpdateInput>;
};
export type ClassSubjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSubjectSelect<ExtArgs> | null;
    omit?: Prisma.ClassSubjectOmit<ExtArgs> | null;
    include?: Prisma.ClassSubjectInclude<ExtArgs> | null;
    where: Prisma.ClassSubjectWhereUniqueInput;
};
export type ClassSubjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassSubjectWhereInput;
    limit?: number;
};
export type ClassSubjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSubjectSelect<ExtArgs> | null;
    omit?: Prisma.ClassSubjectOmit<ExtArgs> | null;
    include?: Prisma.ClassSubjectInclude<ExtArgs> | null;
};
