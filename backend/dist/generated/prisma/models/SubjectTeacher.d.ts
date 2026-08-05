import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SubjectTeacherModel = runtime.Types.Result.DefaultSelection<Prisma.$SubjectTeacherPayload>;
export type AggregateSubjectTeacher = {
    _count: SubjectTeacherCountAggregateOutputType | null;
    _min: SubjectTeacherMinAggregateOutputType | null;
    _max: SubjectTeacherMaxAggregateOutputType | null;
};
export type SubjectTeacherMinAggregateOutputType = {
    id: string | null;
    sectionId: string | null;
    subjectId: string | null;
    teacherId: string | null;
    createdAt: Date | null;
};
export type SubjectTeacherMaxAggregateOutputType = {
    id: string | null;
    sectionId: string | null;
    subjectId: string | null;
    teacherId: string | null;
    createdAt: Date | null;
};
export type SubjectTeacherCountAggregateOutputType = {
    id: number;
    sectionId: number;
    subjectId: number;
    teacherId: number;
    createdAt: number;
    _all: number;
};
export type SubjectTeacherMinAggregateInputType = {
    id?: true;
    sectionId?: true;
    subjectId?: true;
    teacherId?: true;
    createdAt?: true;
};
export type SubjectTeacherMaxAggregateInputType = {
    id?: true;
    sectionId?: true;
    subjectId?: true;
    teacherId?: true;
    createdAt?: true;
};
export type SubjectTeacherCountAggregateInputType = {
    id?: true;
    sectionId?: true;
    subjectId?: true;
    teacherId?: true;
    createdAt?: true;
    _all?: true;
};
export type SubjectTeacherAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectTeacherWhereInput;
    orderBy?: Prisma.SubjectTeacherOrderByWithRelationInput | Prisma.SubjectTeacherOrderByWithRelationInput[];
    cursor?: Prisma.SubjectTeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubjectTeacherCountAggregateInputType;
    _min?: SubjectTeacherMinAggregateInputType;
    _max?: SubjectTeacherMaxAggregateInputType;
};
export type GetSubjectTeacherAggregateType<T extends SubjectTeacherAggregateArgs> = {
    [P in keyof T & keyof AggregateSubjectTeacher]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubjectTeacher[P]> : Prisma.GetScalarType<T[P], AggregateSubjectTeacher[P]>;
};
export type SubjectTeacherGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectTeacherWhereInput;
    orderBy?: Prisma.SubjectTeacherOrderByWithAggregationInput | Prisma.SubjectTeacherOrderByWithAggregationInput[];
    by: Prisma.SubjectTeacherScalarFieldEnum[] | Prisma.SubjectTeacherScalarFieldEnum;
    having?: Prisma.SubjectTeacherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubjectTeacherCountAggregateInputType | true;
    _min?: SubjectTeacherMinAggregateInputType;
    _max?: SubjectTeacherMaxAggregateInputType;
};
export type SubjectTeacherGroupByOutputType = {
    id: string;
    sectionId: string;
    subjectId: string;
    teacherId: string;
    createdAt: Date;
    _count: SubjectTeacherCountAggregateOutputType | null;
    _min: SubjectTeacherMinAggregateOutputType | null;
    _max: SubjectTeacherMaxAggregateOutputType | null;
};
export type GetSubjectTeacherGroupByPayload<T extends SubjectTeacherGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubjectTeacherGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubjectTeacherGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubjectTeacherGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubjectTeacherGroupByOutputType[P]>;
}>>;
export type SubjectTeacherWhereInput = {
    AND?: Prisma.SubjectTeacherWhereInput | Prisma.SubjectTeacherWhereInput[];
    OR?: Prisma.SubjectTeacherWhereInput[];
    NOT?: Prisma.SubjectTeacherWhereInput | Prisma.SubjectTeacherWhereInput[];
    id?: Prisma.StringFilter<"SubjectTeacher"> | string;
    sectionId?: Prisma.StringFilter<"SubjectTeacher"> | string;
    subjectId?: Prisma.StringFilter<"SubjectTeacher"> | string;
    teacherId?: Prisma.StringFilter<"SubjectTeacher"> | string;
    createdAt?: Prisma.DateTimeFilter<"SubjectTeacher"> | Date | string;
    section?: Prisma.XOR<Prisma.SectionScalarRelationFilter, Prisma.SectionWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
};
export type SubjectTeacherOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    section?: Prisma.SectionOrderByWithRelationInput;
    subject?: Prisma.SubjectOrderByWithRelationInput;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
};
export type SubjectTeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sectionId_subjectId?: Prisma.SubjectTeacherSectionIdSubjectIdCompoundUniqueInput;
    AND?: Prisma.SubjectTeacherWhereInput | Prisma.SubjectTeacherWhereInput[];
    OR?: Prisma.SubjectTeacherWhereInput[];
    NOT?: Prisma.SubjectTeacherWhereInput | Prisma.SubjectTeacherWhereInput[];
    sectionId?: Prisma.StringFilter<"SubjectTeacher"> | string;
    subjectId?: Prisma.StringFilter<"SubjectTeacher"> | string;
    teacherId?: Prisma.StringFilter<"SubjectTeacher"> | string;
    createdAt?: Prisma.DateTimeFilter<"SubjectTeacher"> | Date | string;
    section?: Prisma.XOR<Prisma.SectionScalarRelationFilter, Prisma.SectionWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
}, "id" | "sectionId_subjectId">;
export type SubjectTeacherOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SubjectTeacherCountOrderByAggregateInput;
    _max?: Prisma.SubjectTeacherMaxOrderByAggregateInput;
    _min?: Prisma.SubjectTeacherMinOrderByAggregateInput;
};
export type SubjectTeacherScalarWhereWithAggregatesInput = {
    AND?: Prisma.SubjectTeacherScalarWhereWithAggregatesInput | Prisma.SubjectTeacherScalarWhereWithAggregatesInput[];
    OR?: Prisma.SubjectTeacherScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SubjectTeacherScalarWhereWithAggregatesInput | Prisma.SubjectTeacherScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SubjectTeacher"> | string;
    sectionId?: Prisma.StringWithAggregatesFilter<"SubjectTeacher"> | string;
    subjectId?: Prisma.StringWithAggregatesFilter<"SubjectTeacher"> | string;
    teacherId?: Prisma.StringWithAggregatesFilter<"SubjectTeacher"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SubjectTeacher"> | Date | string;
};
export type SubjectTeacherCreateInput = {
    id?: string;
    createdAt?: Date | string;
    section: Prisma.SectionCreateNestedOneWithoutSubjectTeachersInput;
    subject: Prisma.SubjectCreateNestedOneWithoutSubjectTeachersInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutSubjectTeachersInput;
};
export type SubjectTeacherUncheckedCreateInput = {
    id?: string;
    sectionId: string;
    subjectId: string;
    teacherId: string;
    createdAt?: Date | string;
};
export type SubjectTeacherUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    section?: Prisma.SectionUpdateOneRequiredWithoutSubjectTeachersNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutSubjectTeachersNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutSubjectTeachersNestedInput;
};
export type SubjectTeacherUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectTeacherCreateManyInput = {
    id?: string;
    sectionId: string;
    subjectId: string;
    teacherId: string;
    createdAt?: Date | string;
};
export type SubjectTeacherUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectTeacherUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectTeacherListRelationFilter = {
    every?: Prisma.SubjectTeacherWhereInput;
    some?: Prisma.SubjectTeacherWhereInput;
    none?: Prisma.SubjectTeacherWhereInput;
};
export type SubjectTeacherOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SubjectTeacherSectionIdSubjectIdCompoundUniqueInput = {
    sectionId: string;
    subjectId: string;
};
export type SubjectTeacherCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SubjectTeacherMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SubjectTeacherMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SubjectTeacherCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutSectionInput, Prisma.SubjectTeacherUncheckedCreateWithoutSectionInput> | Prisma.SubjectTeacherCreateWithoutSectionInput[] | Prisma.SubjectTeacherUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.SubjectTeacherCreateOrConnectWithoutSectionInput | Prisma.SubjectTeacherCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.SubjectTeacherCreateManySectionInputEnvelope;
    connect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
};
export type SubjectTeacherUncheckedCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutSectionInput, Prisma.SubjectTeacherUncheckedCreateWithoutSectionInput> | Prisma.SubjectTeacherCreateWithoutSectionInput[] | Prisma.SubjectTeacherUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.SubjectTeacherCreateOrConnectWithoutSectionInput | Prisma.SubjectTeacherCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.SubjectTeacherCreateManySectionInputEnvelope;
    connect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
};
export type SubjectTeacherUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutSectionInput, Prisma.SubjectTeacherUncheckedCreateWithoutSectionInput> | Prisma.SubjectTeacherCreateWithoutSectionInput[] | Prisma.SubjectTeacherUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.SubjectTeacherCreateOrConnectWithoutSectionInput | Prisma.SubjectTeacherCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.SubjectTeacherUpsertWithWhereUniqueWithoutSectionInput | Prisma.SubjectTeacherUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.SubjectTeacherCreateManySectionInputEnvelope;
    set?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    disconnect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    delete?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    connect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    update?: Prisma.SubjectTeacherUpdateWithWhereUniqueWithoutSectionInput | Prisma.SubjectTeacherUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.SubjectTeacherUpdateManyWithWhereWithoutSectionInput | Prisma.SubjectTeacherUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.SubjectTeacherScalarWhereInput | Prisma.SubjectTeacherScalarWhereInput[];
};
export type SubjectTeacherUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutSectionInput, Prisma.SubjectTeacherUncheckedCreateWithoutSectionInput> | Prisma.SubjectTeacherCreateWithoutSectionInput[] | Prisma.SubjectTeacherUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.SubjectTeacherCreateOrConnectWithoutSectionInput | Prisma.SubjectTeacherCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.SubjectTeacherUpsertWithWhereUniqueWithoutSectionInput | Prisma.SubjectTeacherUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.SubjectTeacherCreateManySectionInputEnvelope;
    set?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    disconnect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    delete?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    connect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    update?: Prisma.SubjectTeacherUpdateWithWhereUniqueWithoutSectionInput | Prisma.SubjectTeacherUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.SubjectTeacherUpdateManyWithWhereWithoutSectionInput | Prisma.SubjectTeacherUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.SubjectTeacherScalarWhereInput | Prisma.SubjectTeacherScalarWhereInput[];
};
export type SubjectTeacherCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutSubjectInput, Prisma.SubjectTeacherUncheckedCreateWithoutSubjectInput> | Prisma.SubjectTeacherCreateWithoutSubjectInput[] | Prisma.SubjectTeacherUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.SubjectTeacherCreateOrConnectWithoutSubjectInput | Prisma.SubjectTeacherCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.SubjectTeacherCreateManySubjectInputEnvelope;
    connect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
};
export type SubjectTeacherUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutSubjectInput, Prisma.SubjectTeacherUncheckedCreateWithoutSubjectInput> | Prisma.SubjectTeacherCreateWithoutSubjectInput[] | Prisma.SubjectTeacherUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.SubjectTeacherCreateOrConnectWithoutSubjectInput | Prisma.SubjectTeacherCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.SubjectTeacherCreateManySubjectInputEnvelope;
    connect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
};
export type SubjectTeacherUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutSubjectInput, Prisma.SubjectTeacherUncheckedCreateWithoutSubjectInput> | Prisma.SubjectTeacherCreateWithoutSubjectInput[] | Prisma.SubjectTeacherUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.SubjectTeacherCreateOrConnectWithoutSubjectInput | Prisma.SubjectTeacherCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.SubjectTeacherUpsertWithWhereUniqueWithoutSubjectInput | Prisma.SubjectTeacherUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.SubjectTeacherCreateManySubjectInputEnvelope;
    set?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    disconnect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    delete?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    connect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    update?: Prisma.SubjectTeacherUpdateWithWhereUniqueWithoutSubjectInput | Prisma.SubjectTeacherUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.SubjectTeacherUpdateManyWithWhereWithoutSubjectInput | Prisma.SubjectTeacherUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.SubjectTeacherScalarWhereInput | Prisma.SubjectTeacherScalarWhereInput[];
};
export type SubjectTeacherUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutSubjectInput, Prisma.SubjectTeacherUncheckedCreateWithoutSubjectInput> | Prisma.SubjectTeacherCreateWithoutSubjectInput[] | Prisma.SubjectTeacherUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.SubjectTeacherCreateOrConnectWithoutSubjectInput | Prisma.SubjectTeacherCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.SubjectTeacherUpsertWithWhereUniqueWithoutSubjectInput | Prisma.SubjectTeacherUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.SubjectTeacherCreateManySubjectInputEnvelope;
    set?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    disconnect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    delete?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    connect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    update?: Prisma.SubjectTeacherUpdateWithWhereUniqueWithoutSubjectInput | Prisma.SubjectTeacherUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.SubjectTeacherUpdateManyWithWhereWithoutSubjectInput | Prisma.SubjectTeacherUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.SubjectTeacherScalarWhereInput | Prisma.SubjectTeacherScalarWhereInput[];
};
export type SubjectTeacherCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutTeacherInput, Prisma.SubjectTeacherUncheckedCreateWithoutTeacherInput> | Prisma.SubjectTeacherCreateWithoutTeacherInput[] | Prisma.SubjectTeacherUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.SubjectTeacherCreateOrConnectWithoutTeacherInput | Prisma.SubjectTeacherCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.SubjectTeacherCreateManyTeacherInputEnvelope;
    connect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
};
export type SubjectTeacherUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutTeacherInput, Prisma.SubjectTeacherUncheckedCreateWithoutTeacherInput> | Prisma.SubjectTeacherCreateWithoutTeacherInput[] | Prisma.SubjectTeacherUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.SubjectTeacherCreateOrConnectWithoutTeacherInput | Prisma.SubjectTeacherCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.SubjectTeacherCreateManyTeacherInputEnvelope;
    connect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
};
export type SubjectTeacherUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutTeacherInput, Prisma.SubjectTeacherUncheckedCreateWithoutTeacherInput> | Prisma.SubjectTeacherCreateWithoutTeacherInput[] | Prisma.SubjectTeacherUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.SubjectTeacherCreateOrConnectWithoutTeacherInput | Prisma.SubjectTeacherCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.SubjectTeacherUpsertWithWhereUniqueWithoutTeacherInput | Prisma.SubjectTeacherUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.SubjectTeacherCreateManyTeacherInputEnvelope;
    set?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    disconnect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    delete?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    connect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    update?: Prisma.SubjectTeacherUpdateWithWhereUniqueWithoutTeacherInput | Prisma.SubjectTeacherUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.SubjectTeacherUpdateManyWithWhereWithoutTeacherInput | Prisma.SubjectTeacherUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.SubjectTeacherScalarWhereInput | Prisma.SubjectTeacherScalarWhereInput[];
};
export type SubjectTeacherUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutTeacherInput, Prisma.SubjectTeacherUncheckedCreateWithoutTeacherInput> | Prisma.SubjectTeacherCreateWithoutTeacherInput[] | Prisma.SubjectTeacherUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.SubjectTeacherCreateOrConnectWithoutTeacherInput | Prisma.SubjectTeacherCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.SubjectTeacherUpsertWithWhereUniqueWithoutTeacherInput | Prisma.SubjectTeacherUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.SubjectTeacherCreateManyTeacherInputEnvelope;
    set?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    disconnect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    delete?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    connect?: Prisma.SubjectTeacherWhereUniqueInput | Prisma.SubjectTeacherWhereUniqueInput[];
    update?: Prisma.SubjectTeacherUpdateWithWhereUniqueWithoutTeacherInput | Prisma.SubjectTeacherUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.SubjectTeacherUpdateManyWithWhereWithoutTeacherInput | Prisma.SubjectTeacherUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.SubjectTeacherScalarWhereInput | Prisma.SubjectTeacherScalarWhereInput[];
};
export type SubjectTeacherCreateWithoutSectionInput = {
    id?: string;
    createdAt?: Date | string;
    subject: Prisma.SubjectCreateNestedOneWithoutSubjectTeachersInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutSubjectTeachersInput;
};
export type SubjectTeacherUncheckedCreateWithoutSectionInput = {
    id?: string;
    subjectId: string;
    teacherId: string;
    createdAt?: Date | string;
};
export type SubjectTeacherCreateOrConnectWithoutSectionInput = {
    where: Prisma.SubjectTeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutSectionInput, Prisma.SubjectTeacherUncheckedCreateWithoutSectionInput>;
};
export type SubjectTeacherCreateManySectionInputEnvelope = {
    data: Prisma.SubjectTeacherCreateManySectionInput | Prisma.SubjectTeacherCreateManySectionInput[];
    skipDuplicates?: boolean;
};
export type SubjectTeacherUpsertWithWhereUniqueWithoutSectionInput = {
    where: Prisma.SubjectTeacherWhereUniqueInput;
    update: Prisma.XOR<Prisma.SubjectTeacherUpdateWithoutSectionInput, Prisma.SubjectTeacherUncheckedUpdateWithoutSectionInput>;
    create: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutSectionInput, Prisma.SubjectTeacherUncheckedCreateWithoutSectionInput>;
};
export type SubjectTeacherUpdateWithWhereUniqueWithoutSectionInput = {
    where: Prisma.SubjectTeacherWhereUniqueInput;
    data: Prisma.XOR<Prisma.SubjectTeacherUpdateWithoutSectionInput, Prisma.SubjectTeacherUncheckedUpdateWithoutSectionInput>;
};
export type SubjectTeacherUpdateManyWithWhereWithoutSectionInput = {
    where: Prisma.SubjectTeacherScalarWhereInput;
    data: Prisma.XOR<Prisma.SubjectTeacherUpdateManyMutationInput, Prisma.SubjectTeacherUncheckedUpdateManyWithoutSectionInput>;
};
export type SubjectTeacherScalarWhereInput = {
    AND?: Prisma.SubjectTeacherScalarWhereInput | Prisma.SubjectTeacherScalarWhereInput[];
    OR?: Prisma.SubjectTeacherScalarWhereInput[];
    NOT?: Prisma.SubjectTeacherScalarWhereInput | Prisma.SubjectTeacherScalarWhereInput[];
    id?: Prisma.StringFilter<"SubjectTeacher"> | string;
    sectionId?: Prisma.StringFilter<"SubjectTeacher"> | string;
    subjectId?: Prisma.StringFilter<"SubjectTeacher"> | string;
    teacherId?: Prisma.StringFilter<"SubjectTeacher"> | string;
    createdAt?: Prisma.DateTimeFilter<"SubjectTeacher"> | Date | string;
};
export type SubjectTeacherCreateWithoutSubjectInput = {
    id?: string;
    createdAt?: Date | string;
    section: Prisma.SectionCreateNestedOneWithoutSubjectTeachersInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutSubjectTeachersInput;
};
export type SubjectTeacherUncheckedCreateWithoutSubjectInput = {
    id?: string;
    sectionId: string;
    teacherId: string;
    createdAt?: Date | string;
};
export type SubjectTeacherCreateOrConnectWithoutSubjectInput = {
    where: Prisma.SubjectTeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutSubjectInput, Prisma.SubjectTeacherUncheckedCreateWithoutSubjectInput>;
};
export type SubjectTeacherCreateManySubjectInputEnvelope = {
    data: Prisma.SubjectTeacherCreateManySubjectInput | Prisma.SubjectTeacherCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type SubjectTeacherUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.SubjectTeacherWhereUniqueInput;
    update: Prisma.XOR<Prisma.SubjectTeacherUpdateWithoutSubjectInput, Prisma.SubjectTeacherUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutSubjectInput, Prisma.SubjectTeacherUncheckedCreateWithoutSubjectInput>;
};
export type SubjectTeacherUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.SubjectTeacherWhereUniqueInput;
    data: Prisma.XOR<Prisma.SubjectTeacherUpdateWithoutSubjectInput, Prisma.SubjectTeacherUncheckedUpdateWithoutSubjectInput>;
};
export type SubjectTeacherUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.SubjectTeacherScalarWhereInput;
    data: Prisma.XOR<Prisma.SubjectTeacherUpdateManyMutationInput, Prisma.SubjectTeacherUncheckedUpdateManyWithoutSubjectInput>;
};
export type SubjectTeacherCreateWithoutTeacherInput = {
    id?: string;
    createdAt?: Date | string;
    section: Prisma.SectionCreateNestedOneWithoutSubjectTeachersInput;
    subject: Prisma.SubjectCreateNestedOneWithoutSubjectTeachersInput;
};
export type SubjectTeacherUncheckedCreateWithoutTeacherInput = {
    id?: string;
    sectionId: string;
    subjectId: string;
    createdAt?: Date | string;
};
export type SubjectTeacherCreateOrConnectWithoutTeacherInput = {
    where: Prisma.SubjectTeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutTeacherInput, Prisma.SubjectTeacherUncheckedCreateWithoutTeacherInput>;
};
export type SubjectTeacherCreateManyTeacherInputEnvelope = {
    data: Prisma.SubjectTeacherCreateManyTeacherInput | Prisma.SubjectTeacherCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type SubjectTeacherUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.SubjectTeacherWhereUniqueInput;
    update: Prisma.XOR<Prisma.SubjectTeacherUpdateWithoutTeacherInput, Prisma.SubjectTeacherUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.SubjectTeacherCreateWithoutTeacherInput, Prisma.SubjectTeacherUncheckedCreateWithoutTeacherInput>;
};
export type SubjectTeacherUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.SubjectTeacherWhereUniqueInput;
    data: Prisma.XOR<Prisma.SubjectTeacherUpdateWithoutTeacherInput, Prisma.SubjectTeacherUncheckedUpdateWithoutTeacherInput>;
};
export type SubjectTeacherUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.SubjectTeacherScalarWhereInput;
    data: Prisma.XOR<Prisma.SubjectTeacherUpdateManyMutationInput, Prisma.SubjectTeacherUncheckedUpdateManyWithoutTeacherInput>;
};
export type SubjectTeacherCreateManySectionInput = {
    id?: string;
    subjectId: string;
    teacherId: string;
    createdAt?: Date | string;
};
export type SubjectTeacherUpdateWithoutSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutSubjectTeachersNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutSubjectTeachersNestedInput;
};
export type SubjectTeacherUncheckedUpdateWithoutSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectTeacherUncheckedUpdateManyWithoutSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectTeacherCreateManySubjectInput = {
    id?: string;
    sectionId: string;
    teacherId: string;
    createdAt?: Date | string;
};
export type SubjectTeacherUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    section?: Prisma.SectionUpdateOneRequiredWithoutSubjectTeachersNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutSubjectTeachersNestedInput;
};
export type SubjectTeacherUncheckedUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectTeacherUncheckedUpdateManyWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectTeacherCreateManyTeacherInput = {
    id?: string;
    sectionId: string;
    subjectId: string;
    createdAt?: Date | string;
};
export type SubjectTeacherUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    section?: Prisma.SectionUpdateOneRequiredWithoutSubjectTeachersNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutSubjectTeachersNestedInput;
};
export type SubjectTeacherUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectTeacherUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectTeacherSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sectionId?: boolean;
    subjectId?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subjectTeacher"]>;
export type SubjectTeacherSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sectionId?: boolean;
    subjectId?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subjectTeacher"]>;
export type SubjectTeacherSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sectionId?: boolean;
    subjectId?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subjectTeacher"]>;
export type SubjectTeacherSelectScalar = {
    id?: boolean;
    sectionId?: boolean;
    subjectId?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
};
export type SubjectTeacherOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sectionId" | "subjectId" | "teacherId" | "createdAt", ExtArgs["result"]["subjectTeacher"]>;
export type SubjectTeacherInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type SubjectTeacherIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type SubjectTeacherIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type $SubjectTeacherPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SubjectTeacher";
    objects: {
        section: Prisma.$SectionPayload<ExtArgs>;
        subject: Prisma.$SubjectPayload<ExtArgs>;
        teacher: Prisma.$TeacherPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sectionId: string;
        subjectId: string;
        teacherId: string;
        createdAt: Date;
    }, ExtArgs["result"]["subjectTeacher"]>;
    composites: {};
};
export type SubjectTeacherGetPayload<S extends boolean | null | undefined | SubjectTeacherDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload, S>;
export type SubjectTeacherCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SubjectTeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubjectTeacherCountAggregateInputType | true;
};
export interface SubjectTeacherDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SubjectTeacher'];
        meta: {
            name: 'SubjectTeacher';
        };
    };
    findUnique<T extends SubjectTeacherFindUniqueArgs>(args: Prisma.SelectSubset<T, SubjectTeacherFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubjectTeacherClient<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SubjectTeacherFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubjectTeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubjectTeacherClient<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SubjectTeacherFindFirstArgs>(args?: Prisma.SelectSubset<T, SubjectTeacherFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubjectTeacherClient<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SubjectTeacherFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubjectTeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubjectTeacherClient<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SubjectTeacherFindManyArgs>(args?: Prisma.SelectSubset<T, SubjectTeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SubjectTeacherCreateArgs>(args: Prisma.SelectSubset<T, SubjectTeacherCreateArgs<ExtArgs>>): Prisma.Prisma__SubjectTeacherClient<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SubjectTeacherCreateManyArgs>(args?: Prisma.SelectSubset<T, SubjectTeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SubjectTeacherCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubjectTeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SubjectTeacherDeleteArgs>(args: Prisma.SelectSubset<T, SubjectTeacherDeleteArgs<ExtArgs>>): Prisma.Prisma__SubjectTeacherClient<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SubjectTeacherUpdateArgs>(args: Prisma.SelectSubset<T, SubjectTeacherUpdateArgs<ExtArgs>>): Prisma.Prisma__SubjectTeacherClient<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SubjectTeacherDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubjectTeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SubjectTeacherUpdateManyArgs>(args: Prisma.SelectSubset<T, SubjectTeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SubjectTeacherUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubjectTeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SubjectTeacherUpsertArgs>(args: Prisma.SelectSubset<T, SubjectTeacherUpsertArgs<ExtArgs>>): Prisma.Prisma__SubjectTeacherClient<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SubjectTeacherCountArgs>(args?: Prisma.Subset<T, SubjectTeacherCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubjectTeacherCountAggregateOutputType> : number>;
    aggregate<T extends SubjectTeacherAggregateArgs>(args: Prisma.Subset<T, SubjectTeacherAggregateArgs>): Prisma.PrismaPromise<GetSubjectTeacherAggregateType<T>>;
    groupBy<T extends SubjectTeacherGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SubjectTeacherGroupByArgs['orderBy'];
    } : {
        orderBy?: SubjectTeacherGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SubjectTeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SubjectTeacherFieldRefs;
}
export interface Prisma__SubjectTeacherClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    section<T extends Prisma.SectionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SectionDefaultArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subject<T extends Prisma.SubjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SubjectDefaultArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.TeacherDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherDefaultArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SubjectTeacherFieldRefs {
    readonly id: Prisma.FieldRef<"SubjectTeacher", 'String'>;
    readonly sectionId: Prisma.FieldRef<"SubjectTeacher", 'String'>;
    readonly subjectId: Prisma.FieldRef<"SubjectTeacher", 'String'>;
    readonly teacherId: Prisma.FieldRef<"SubjectTeacher", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SubjectTeacher", 'DateTime'>;
}
export type SubjectTeacherFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectTeacherSelect<ExtArgs> | null;
    omit?: Prisma.SubjectTeacherOmit<ExtArgs> | null;
    include?: Prisma.SubjectTeacherInclude<ExtArgs> | null;
    where: Prisma.SubjectTeacherWhereUniqueInput;
};
export type SubjectTeacherFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectTeacherSelect<ExtArgs> | null;
    omit?: Prisma.SubjectTeacherOmit<ExtArgs> | null;
    include?: Prisma.SubjectTeacherInclude<ExtArgs> | null;
    where: Prisma.SubjectTeacherWhereUniqueInput;
};
export type SubjectTeacherFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectTeacherSelect<ExtArgs> | null;
    omit?: Prisma.SubjectTeacherOmit<ExtArgs> | null;
    include?: Prisma.SubjectTeacherInclude<ExtArgs> | null;
    where?: Prisma.SubjectTeacherWhereInput;
    orderBy?: Prisma.SubjectTeacherOrderByWithRelationInput | Prisma.SubjectTeacherOrderByWithRelationInput[];
    cursor?: Prisma.SubjectTeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectTeacherScalarFieldEnum | Prisma.SubjectTeacherScalarFieldEnum[];
};
export type SubjectTeacherFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectTeacherSelect<ExtArgs> | null;
    omit?: Prisma.SubjectTeacherOmit<ExtArgs> | null;
    include?: Prisma.SubjectTeacherInclude<ExtArgs> | null;
    where?: Prisma.SubjectTeacherWhereInput;
    orderBy?: Prisma.SubjectTeacherOrderByWithRelationInput | Prisma.SubjectTeacherOrderByWithRelationInput[];
    cursor?: Prisma.SubjectTeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectTeacherScalarFieldEnum | Prisma.SubjectTeacherScalarFieldEnum[];
};
export type SubjectTeacherFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectTeacherSelect<ExtArgs> | null;
    omit?: Prisma.SubjectTeacherOmit<ExtArgs> | null;
    include?: Prisma.SubjectTeacherInclude<ExtArgs> | null;
    where?: Prisma.SubjectTeacherWhereInput;
    orderBy?: Prisma.SubjectTeacherOrderByWithRelationInput | Prisma.SubjectTeacherOrderByWithRelationInput[];
    cursor?: Prisma.SubjectTeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectTeacherScalarFieldEnum | Prisma.SubjectTeacherScalarFieldEnum[];
};
export type SubjectTeacherCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectTeacherSelect<ExtArgs> | null;
    omit?: Prisma.SubjectTeacherOmit<ExtArgs> | null;
    include?: Prisma.SubjectTeacherInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectTeacherCreateInput, Prisma.SubjectTeacherUncheckedCreateInput>;
};
export type SubjectTeacherCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SubjectTeacherCreateManyInput | Prisma.SubjectTeacherCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SubjectTeacherCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectTeacherSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubjectTeacherOmit<ExtArgs> | null;
    data: Prisma.SubjectTeacherCreateManyInput | Prisma.SubjectTeacherCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SubjectTeacherIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SubjectTeacherUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectTeacherSelect<ExtArgs> | null;
    omit?: Prisma.SubjectTeacherOmit<ExtArgs> | null;
    include?: Prisma.SubjectTeacherInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectTeacherUpdateInput, Prisma.SubjectTeacherUncheckedUpdateInput>;
    where: Prisma.SubjectTeacherWhereUniqueInput;
};
export type SubjectTeacherUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SubjectTeacherUpdateManyMutationInput, Prisma.SubjectTeacherUncheckedUpdateManyInput>;
    where?: Prisma.SubjectTeacherWhereInput;
    limit?: number;
};
export type SubjectTeacherUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectTeacherSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubjectTeacherOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectTeacherUpdateManyMutationInput, Prisma.SubjectTeacherUncheckedUpdateManyInput>;
    where?: Prisma.SubjectTeacherWhereInput;
    limit?: number;
    include?: Prisma.SubjectTeacherIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SubjectTeacherUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectTeacherSelect<ExtArgs> | null;
    omit?: Prisma.SubjectTeacherOmit<ExtArgs> | null;
    include?: Prisma.SubjectTeacherInclude<ExtArgs> | null;
    where: Prisma.SubjectTeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectTeacherCreateInput, Prisma.SubjectTeacherUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SubjectTeacherUpdateInput, Prisma.SubjectTeacherUncheckedUpdateInput>;
};
export type SubjectTeacherDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectTeacherSelect<ExtArgs> | null;
    omit?: Prisma.SubjectTeacherOmit<ExtArgs> | null;
    include?: Prisma.SubjectTeacherInclude<ExtArgs> | null;
    where: Prisma.SubjectTeacherWhereUniqueInput;
};
export type SubjectTeacherDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectTeacherWhereInput;
    limit?: number;
};
export type SubjectTeacherDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectTeacherSelect<ExtArgs> | null;
    omit?: Prisma.SubjectTeacherOmit<ExtArgs> | null;
    include?: Prisma.SubjectTeacherInclude<ExtArgs> | null;
};
