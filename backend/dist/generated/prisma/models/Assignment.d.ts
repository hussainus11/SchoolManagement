import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssignmentModel = runtime.Types.Result.DefaultSelection<Prisma.$AssignmentPayload>;
export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null;
    _min: AssignmentMinAggregateOutputType | null;
    _max: AssignmentMaxAggregateOutputType | null;
};
export type AssignmentMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    sectionId: string | null;
    subjectId: string | null;
    teacherId: string | null;
    title: string | null;
    description: string | null;
    assignedDate: Date | null;
    dueDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type AssignmentMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    sectionId: string | null;
    subjectId: string | null;
    teacherId: string | null;
    title: string | null;
    description: string | null;
    assignedDate: Date | null;
    dueDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type AssignmentCountAggregateOutputType = {
    id: number;
    schoolId: number;
    sectionId: number;
    subjectId: number;
    teacherId: number;
    title: number;
    description: number;
    assignedDate: number;
    dueDate: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type AssignmentMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    sectionId?: true;
    subjectId?: true;
    teacherId?: true;
    title?: true;
    description?: true;
    assignedDate?: true;
    dueDate?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type AssignmentMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    sectionId?: true;
    subjectId?: true;
    teacherId?: true;
    title?: true;
    description?: true;
    assignedDate?: true;
    dueDate?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type AssignmentCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    sectionId?: true;
    subjectId?: true;
    teacherId?: true;
    title?: true;
    description?: true;
    assignedDate?: true;
    dueDate?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type AssignmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput | Prisma.AssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssignmentCountAggregateInputType;
    _min?: AssignmentMinAggregateInputType;
    _max?: AssignmentMaxAggregateInputType;
};
export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssignment[P]> : Prisma.GetScalarType<T[P], AggregateAssignment[P]>;
};
export type AssignmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithAggregationInput | Prisma.AssignmentOrderByWithAggregationInput[];
    by: Prisma.AssignmentScalarFieldEnum[] | Prisma.AssignmentScalarFieldEnum;
    having?: Prisma.AssignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssignmentCountAggregateInputType | true;
    _min?: AssignmentMinAggregateInputType;
    _max?: AssignmentMaxAggregateInputType;
};
export type AssignmentGroupByOutputType = {
    id: string;
    schoolId: string;
    sectionId: string;
    subjectId: string;
    teacherId: string;
    title: string;
    description: string | null;
    assignedDate: Date;
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: AssignmentCountAggregateOutputType | null;
    _min: AssignmentMinAggregateOutputType | null;
    _max: AssignmentMaxAggregateOutputType | null;
};
export type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssignmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssignmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssignmentGroupByOutputType[P]>;
}>>;
export type AssignmentWhereInput = {
    AND?: Prisma.AssignmentWhereInput | Prisma.AssignmentWhereInput[];
    OR?: Prisma.AssignmentWhereInput[];
    NOT?: Prisma.AssignmentWhereInput | Prisma.AssignmentWhereInput[];
    id?: Prisma.StringFilter<"Assignment"> | string;
    schoolId?: Prisma.StringFilter<"Assignment"> | string;
    sectionId?: Prisma.StringFilter<"Assignment"> | string;
    subjectId?: Prisma.StringFilter<"Assignment"> | string;
    teacherId?: Prisma.StringFilter<"Assignment"> | string;
    title?: Prisma.StringFilter<"Assignment"> | string;
    description?: Prisma.StringNullableFilter<"Assignment"> | string | null;
    assignedDate?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Assignment"> | Date | string | null;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    section?: Prisma.XOR<Prisma.SectionScalarRelationFilter, Prisma.SectionWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
    submissions?: Prisma.AssignmentSubmissionListRelationFilter;
};
export type AssignmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    section?: Prisma.SectionOrderByWithRelationInput;
    subject?: Prisma.SubjectOrderByWithRelationInput;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    submissions?: Prisma.AssignmentSubmissionOrderByRelationAggregateInput;
};
export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AssignmentWhereInput | Prisma.AssignmentWhereInput[];
    OR?: Prisma.AssignmentWhereInput[];
    NOT?: Prisma.AssignmentWhereInput | Prisma.AssignmentWhereInput[];
    schoolId?: Prisma.StringFilter<"Assignment"> | string;
    sectionId?: Prisma.StringFilter<"Assignment"> | string;
    subjectId?: Prisma.StringFilter<"Assignment"> | string;
    teacherId?: Prisma.StringFilter<"Assignment"> | string;
    title?: Prisma.StringFilter<"Assignment"> | string;
    description?: Prisma.StringNullableFilter<"Assignment"> | string | null;
    assignedDate?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Assignment"> | Date | string | null;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    section?: Prisma.XOR<Prisma.SectionScalarRelationFilter, Prisma.SectionWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
    submissions?: Prisma.AssignmentSubmissionListRelationFilter;
}, "id">;
export type AssignmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AssignmentCountOrderByAggregateInput;
    _max?: Prisma.AssignmentMaxOrderByAggregateInput;
    _min?: Prisma.AssignmentMinOrderByAggregateInput;
};
export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssignmentScalarWhereWithAggregatesInput | Prisma.AssignmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssignmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssignmentScalarWhereWithAggregatesInput | Prisma.AssignmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    sectionId?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    subjectId?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    teacherId?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Assignment"> | string | null;
    assignedDate?: Prisma.DateTimeWithAggregatesFilter<"Assignment"> | Date | string;
    dueDate?: Prisma.DateTimeWithAggregatesFilter<"Assignment"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Assignment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Assignment"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Assignment"> | Date | string | null;
};
export type AssignmentCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    school: Prisma.SchoolCreateNestedOneWithoutAssignmentsInput;
    section: Prisma.SectionCreateNestedOneWithoutAssignmentsInput;
    subject: Prisma.SubjectCreateNestedOneWithoutAssignmentsInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutAssignmentsInput;
    submissions?: Prisma.AssignmentSubmissionCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    subjectId: string;
    teacherId: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    submissions?: Prisma.AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAssignmentsNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutAssignmentsNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutAssignmentsNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutAssignmentsNestedInput;
    submissions?: Prisma.AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submissions?: Prisma.AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentCreateManyInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    subjectId: string;
    teacherId: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type AssignmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssignmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssignmentListRelationFilter = {
    every?: Prisma.AssignmentWhereInput;
    some?: Prisma.AssignmentWhereInput;
    none?: Prisma.AssignmentWhereInput;
};
export type AssignmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssignmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    assignedDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type AssignmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    assignedDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type AssignmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    assignedDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type AssignmentScalarRelationFilter = {
    is?: Prisma.AssignmentWhereInput;
    isNot?: Prisma.AssignmentWhereInput;
};
export type AssignmentCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSchoolInput, Prisma.AssignmentUncheckedCreateWithoutSchoolInput> | Prisma.AssignmentCreateWithoutSchoolInput[] | Prisma.AssignmentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSchoolInput | Prisma.AssignmentCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.AssignmentCreateManySchoolInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSchoolInput, Prisma.AssignmentUncheckedCreateWithoutSchoolInput> | Prisma.AssignmentCreateWithoutSchoolInput[] | Prisma.AssignmentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSchoolInput | Prisma.AssignmentCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.AssignmentCreateManySchoolInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSchoolInput, Prisma.AssignmentUncheckedCreateWithoutSchoolInput> | Prisma.AssignmentCreateWithoutSchoolInput[] | Prisma.AssignmentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSchoolInput | Prisma.AssignmentCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutSchoolInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.AssignmentCreateManySchoolInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutSchoolInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutSchoolInput | Prisma.AssignmentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSchoolInput, Prisma.AssignmentUncheckedCreateWithoutSchoolInput> | Prisma.AssignmentCreateWithoutSchoolInput[] | Prisma.AssignmentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSchoolInput | Prisma.AssignmentCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutSchoolInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.AssignmentCreateManySchoolInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutSchoolInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutSchoolInput | Prisma.AssignmentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSectionInput, Prisma.AssignmentUncheckedCreateWithoutSectionInput> | Prisma.AssignmentCreateWithoutSectionInput[] | Prisma.AssignmentUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSectionInput | Prisma.AssignmentCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.AssignmentCreateManySectionInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUncheckedCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSectionInput, Prisma.AssignmentUncheckedCreateWithoutSectionInput> | Prisma.AssignmentCreateWithoutSectionInput[] | Prisma.AssignmentUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSectionInput | Prisma.AssignmentCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.AssignmentCreateManySectionInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSectionInput, Prisma.AssignmentUncheckedCreateWithoutSectionInput> | Prisma.AssignmentCreateWithoutSectionInput[] | Prisma.AssignmentUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSectionInput | Prisma.AssignmentCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutSectionInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.AssignmentCreateManySectionInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutSectionInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutSectionInput | Prisma.AssignmentUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSectionInput, Prisma.AssignmentUncheckedCreateWithoutSectionInput> | Prisma.AssignmentCreateWithoutSectionInput[] | Prisma.AssignmentUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSectionInput | Prisma.AssignmentCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutSectionInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.AssignmentCreateManySectionInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutSectionInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutSectionInput | Prisma.AssignmentUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSubjectInput, Prisma.AssignmentUncheckedCreateWithoutSubjectInput> | Prisma.AssignmentCreateWithoutSubjectInput[] | Prisma.AssignmentUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSubjectInput | Prisma.AssignmentCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.AssignmentCreateManySubjectInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSubjectInput, Prisma.AssignmentUncheckedCreateWithoutSubjectInput> | Prisma.AssignmentCreateWithoutSubjectInput[] | Prisma.AssignmentUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSubjectInput | Prisma.AssignmentCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.AssignmentCreateManySubjectInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSubjectInput, Prisma.AssignmentUncheckedCreateWithoutSubjectInput> | Prisma.AssignmentCreateWithoutSubjectInput[] | Prisma.AssignmentUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSubjectInput | Prisma.AssignmentCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutSubjectInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.AssignmentCreateManySubjectInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutSubjectInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutSubjectInput | Prisma.AssignmentUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSubjectInput, Prisma.AssignmentUncheckedCreateWithoutSubjectInput> | Prisma.AssignmentCreateWithoutSubjectInput[] | Prisma.AssignmentUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSubjectInput | Prisma.AssignmentCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutSubjectInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.AssignmentCreateManySubjectInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutSubjectInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutSubjectInput | Prisma.AssignmentUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutTeacherInput, Prisma.AssignmentUncheckedCreateWithoutTeacherInput> | Prisma.AssignmentCreateWithoutTeacherInput[] | Prisma.AssignmentUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutTeacherInput | Prisma.AssignmentCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.AssignmentCreateManyTeacherInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutTeacherInput, Prisma.AssignmentUncheckedCreateWithoutTeacherInput> | Prisma.AssignmentCreateWithoutTeacherInput[] | Prisma.AssignmentUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutTeacherInput | Prisma.AssignmentCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.AssignmentCreateManyTeacherInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutTeacherInput, Prisma.AssignmentUncheckedCreateWithoutTeacherInput> | Prisma.AssignmentCreateWithoutTeacherInput[] | Prisma.AssignmentUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutTeacherInput | Prisma.AssignmentCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutTeacherInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.AssignmentCreateManyTeacherInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutTeacherInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutTeacherInput | Prisma.AssignmentUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutTeacherInput, Prisma.AssignmentUncheckedCreateWithoutTeacherInput> | Prisma.AssignmentCreateWithoutTeacherInput[] | Prisma.AssignmentUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutTeacherInput | Prisma.AssignmentCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutTeacherInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.AssignmentCreateManyTeacherInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutTeacherInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutTeacherInput | Prisma.AssignmentUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentCreateNestedOneWithoutSubmissionsInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSubmissionsInput, Prisma.AssignmentUncheckedCreateWithoutSubmissionsInput>;
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSubmissionsInput;
    connect?: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutSubmissionsInput, Prisma.AssignmentUncheckedCreateWithoutSubmissionsInput>;
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutSubmissionsInput;
    upsert?: Prisma.AssignmentUpsertWithoutSubmissionsInput;
    connect?: Prisma.AssignmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssignmentUpdateToOneWithWhereWithoutSubmissionsInput, Prisma.AssignmentUpdateWithoutSubmissionsInput>, Prisma.AssignmentUncheckedUpdateWithoutSubmissionsInput>;
};
export type AssignmentCreateWithoutSchoolInput = {
    id?: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    section: Prisma.SectionCreateNestedOneWithoutAssignmentsInput;
    subject: Prisma.SubjectCreateNestedOneWithoutAssignmentsInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutAssignmentsInput;
    submissions?: Prisma.AssignmentSubmissionCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentUncheckedCreateWithoutSchoolInput = {
    id?: string;
    sectionId: string;
    subjectId: string;
    teacherId: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    submissions?: Prisma.AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentCreateOrConnectWithoutSchoolInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutSchoolInput, Prisma.AssignmentUncheckedCreateWithoutSchoolInput>;
};
export type AssignmentCreateManySchoolInputEnvelope = {
    data: Prisma.AssignmentCreateManySchoolInput | Prisma.AssignmentCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type AssignmentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssignmentUpdateWithoutSchoolInput, Prisma.AssignmentUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutSchoolInput, Prisma.AssignmentUncheckedCreateWithoutSchoolInput>;
};
export type AssignmentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateWithoutSchoolInput, Prisma.AssignmentUncheckedUpdateWithoutSchoolInput>;
};
export type AssignmentUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.AssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyWithoutSchoolInput>;
};
export type AssignmentScalarWhereInput = {
    AND?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
    OR?: Prisma.AssignmentScalarWhereInput[];
    NOT?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Assignment"> | string;
    schoolId?: Prisma.StringFilter<"Assignment"> | string;
    sectionId?: Prisma.StringFilter<"Assignment"> | string;
    subjectId?: Prisma.StringFilter<"Assignment"> | string;
    teacherId?: Prisma.StringFilter<"Assignment"> | string;
    title?: Prisma.StringFilter<"Assignment"> | string;
    description?: Prisma.StringNullableFilter<"Assignment"> | string | null;
    assignedDate?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Assignment"> | Date | string | null;
};
export type AssignmentCreateWithoutSectionInput = {
    id?: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    school: Prisma.SchoolCreateNestedOneWithoutAssignmentsInput;
    subject: Prisma.SubjectCreateNestedOneWithoutAssignmentsInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutAssignmentsInput;
    submissions?: Prisma.AssignmentSubmissionCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentUncheckedCreateWithoutSectionInput = {
    id?: string;
    schoolId: string;
    subjectId: string;
    teacherId: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    submissions?: Prisma.AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentCreateOrConnectWithoutSectionInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutSectionInput, Prisma.AssignmentUncheckedCreateWithoutSectionInput>;
};
export type AssignmentCreateManySectionInputEnvelope = {
    data: Prisma.AssignmentCreateManySectionInput | Prisma.AssignmentCreateManySectionInput[];
    skipDuplicates?: boolean;
};
export type AssignmentUpsertWithWhereUniqueWithoutSectionInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssignmentUpdateWithoutSectionInput, Prisma.AssignmentUncheckedUpdateWithoutSectionInput>;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutSectionInput, Prisma.AssignmentUncheckedCreateWithoutSectionInput>;
};
export type AssignmentUpdateWithWhereUniqueWithoutSectionInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateWithoutSectionInput, Prisma.AssignmentUncheckedUpdateWithoutSectionInput>;
};
export type AssignmentUpdateManyWithWhereWithoutSectionInput = {
    where: Prisma.AssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyWithoutSectionInput>;
};
export type AssignmentCreateWithoutSubjectInput = {
    id?: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    school: Prisma.SchoolCreateNestedOneWithoutAssignmentsInput;
    section: Prisma.SectionCreateNestedOneWithoutAssignmentsInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutAssignmentsInput;
    submissions?: Prisma.AssignmentSubmissionCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentUncheckedCreateWithoutSubjectInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    teacherId: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    submissions?: Prisma.AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentCreateOrConnectWithoutSubjectInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutSubjectInput, Prisma.AssignmentUncheckedCreateWithoutSubjectInput>;
};
export type AssignmentCreateManySubjectInputEnvelope = {
    data: Prisma.AssignmentCreateManySubjectInput | Prisma.AssignmentCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type AssignmentUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssignmentUpdateWithoutSubjectInput, Prisma.AssignmentUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutSubjectInput, Prisma.AssignmentUncheckedCreateWithoutSubjectInput>;
};
export type AssignmentUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateWithoutSubjectInput, Prisma.AssignmentUncheckedUpdateWithoutSubjectInput>;
};
export type AssignmentUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.AssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyWithoutSubjectInput>;
};
export type AssignmentCreateWithoutTeacherInput = {
    id?: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    school: Prisma.SchoolCreateNestedOneWithoutAssignmentsInput;
    section: Prisma.SectionCreateNestedOneWithoutAssignmentsInput;
    subject: Prisma.SubjectCreateNestedOneWithoutAssignmentsInput;
    submissions?: Prisma.AssignmentSubmissionCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentUncheckedCreateWithoutTeacherInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    subjectId: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    submissions?: Prisma.AssignmentSubmissionUncheckedCreateNestedManyWithoutAssignmentInput;
};
export type AssignmentCreateOrConnectWithoutTeacherInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutTeacherInput, Prisma.AssignmentUncheckedCreateWithoutTeacherInput>;
};
export type AssignmentCreateManyTeacherInputEnvelope = {
    data: Prisma.AssignmentCreateManyTeacherInput | Prisma.AssignmentCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type AssignmentUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssignmentUpdateWithoutTeacherInput, Prisma.AssignmentUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutTeacherInput, Prisma.AssignmentUncheckedCreateWithoutTeacherInput>;
};
export type AssignmentUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateWithoutTeacherInput, Prisma.AssignmentUncheckedUpdateWithoutTeacherInput>;
};
export type AssignmentUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.AssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyWithoutTeacherInput>;
};
export type AssignmentCreateWithoutSubmissionsInput = {
    id?: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    school: Prisma.SchoolCreateNestedOneWithoutAssignmentsInput;
    section: Prisma.SectionCreateNestedOneWithoutAssignmentsInput;
    subject: Prisma.SubjectCreateNestedOneWithoutAssignmentsInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutAssignmentsInput;
};
export type AssignmentUncheckedCreateWithoutSubmissionsInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    subjectId: string;
    teacherId: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type AssignmentCreateOrConnectWithoutSubmissionsInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutSubmissionsInput, Prisma.AssignmentUncheckedCreateWithoutSubmissionsInput>;
};
export type AssignmentUpsertWithoutSubmissionsInput = {
    update: Prisma.XOR<Prisma.AssignmentUpdateWithoutSubmissionsInput, Prisma.AssignmentUncheckedUpdateWithoutSubmissionsInput>;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutSubmissionsInput, Prisma.AssignmentUncheckedCreateWithoutSubmissionsInput>;
    where?: Prisma.AssignmentWhereInput;
};
export type AssignmentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: Prisma.AssignmentWhereInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateWithoutSubmissionsInput, Prisma.AssignmentUncheckedUpdateWithoutSubmissionsInput>;
};
export type AssignmentUpdateWithoutSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAssignmentsNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutAssignmentsNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutAssignmentsNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type AssignmentUncheckedUpdateWithoutSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssignmentCreateManySchoolInput = {
    id?: string;
    sectionId: string;
    subjectId: string;
    teacherId: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type AssignmentUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    section?: Prisma.SectionUpdateOneRequiredWithoutAssignmentsNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutAssignmentsNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutAssignmentsNestedInput;
    submissions?: Prisma.AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submissions?: Prisma.AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssignmentCreateManySectionInput = {
    id?: string;
    schoolId: string;
    subjectId: string;
    teacherId: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type AssignmentUpdateWithoutSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAssignmentsNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutAssignmentsNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutAssignmentsNestedInput;
    submissions?: Prisma.AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentUncheckedUpdateWithoutSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submissions?: Prisma.AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentUncheckedUpdateManyWithoutSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssignmentCreateManySubjectInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    teacherId: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type AssignmentUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAssignmentsNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutAssignmentsNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutAssignmentsNestedInput;
    submissions?: Prisma.AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentUncheckedUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submissions?: Prisma.AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentUncheckedUpdateManyWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssignmentCreateManyTeacherInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    subjectId: string;
    title: string;
    description?: string | null;
    assignedDate?: Date | string;
    dueDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type AssignmentUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAssignmentsNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutAssignmentsNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutAssignmentsNestedInput;
    submissions?: Prisma.AssignmentSubmissionUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submissions?: Prisma.AssignmentSubmissionUncheckedUpdateManyWithoutAssignmentNestedInput;
};
export type AssignmentUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssignmentCountOutputType = {
    submissions: number;
};
export type AssignmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    submissions?: boolean | AssignmentCountOutputTypeCountSubmissionsArgs;
};
export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentCountOutputTypeSelect<ExtArgs> | null;
};
export type AssignmentCountOutputTypeCountSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentSubmissionWhereInput;
};
export type AssignmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    sectionId?: boolean;
    subjectId?: boolean;
    teacherId?: boolean;
    title?: boolean;
    description?: boolean;
    assignedDate?: boolean;
    dueDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    submissions?: boolean | Prisma.Assignment$submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssignmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assignment"]>;
export type AssignmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    sectionId?: boolean;
    subjectId?: boolean;
    teacherId?: boolean;
    title?: boolean;
    description?: boolean;
    assignedDate?: boolean;
    dueDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assignment"]>;
export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    sectionId?: boolean;
    subjectId?: boolean;
    teacherId?: boolean;
    title?: boolean;
    description?: boolean;
    assignedDate?: boolean;
    dueDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assignment"]>;
export type AssignmentSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    sectionId?: boolean;
    subjectId?: boolean;
    teacherId?: boolean;
    title?: boolean;
    description?: boolean;
    assignedDate?: boolean;
    dueDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type AssignmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "sectionId" | "subjectId" | "teacherId" | "title" | "description" | "assignedDate" | "dueDate" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["assignment"]>;
export type AssignmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    submissions?: boolean | Prisma.Assignment$submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssignmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type $AssignmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Assignment";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        section: Prisma.$SectionPayload<ExtArgs>;
        subject: Prisma.$SubjectPayload<ExtArgs>;
        teacher: Prisma.$TeacherPayload<ExtArgs>;
        submissions: Prisma.$AssignmentSubmissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        sectionId: string;
        subjectId: string;
        teacherId: string;
        title: string;
        description: string | null;
        assignedDate: Date;
        dueDate: Date;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["assignment"]>;
    composites: {};
};
export type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssignmentPayload, S>;
export type AssignmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssignmentCountAggregateInputType | true;
};
export interface AssignmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Assignment'];
        meta: {
            name: 'Assignment';
        };
    };
    findUnique<T extends AssignmentFindUniqueArgs>(args: Prisma.SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssignmentFindFirstArgs>(args?: Prisma.SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssignmentFindManyArgs>(args?: Prisma.SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssignmentCreateArgs>(args: Prisma.SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssignmentCreateManyArgs>(args?: Prisma.SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssignmentDeleteArgs>(args: Prisma.SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssignmentUpdateArgs>(args: Prisma.SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssignmentUpdateManyArgs>(args: Prisma.SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssignmentUpsertArgs>(args: Prisma.SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssignmentCountArgs>(args?: Prisma.Subset<T, AssignmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssignmentCountAggregateOutputType> : number>;
    aggregate<T extends AssignmentAggregateArgs>(args: Prisma.Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>;
    groupBy<T extends AssignmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssignmentGroupByArgs['orderBy'];
    } : {
        orderBy?: AssignmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssignmentFieldRefs;
}
export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    section<T extends Prisma.SectionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SectionDefaultArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subject<T extends Prisma.SubjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SubjectDefaultArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.TeacherDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherDefaultArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    submissions<T extends Prisma.Assignment$submissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Assignment$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssignmentFieldRefs {
    readonly id: Prisma.FieldRef<"Assignment", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Assignment", 'String'>;
    readonly sectionId: Prisma.FieldRef<"Assignment", 'String'>;
    readonly subjectId: Prisma.FieldRef<"Assignment", 'String'>;
    readonly teacherId: Prisma.FieldRef<"Assignment", 'String'>;
    readonly title: Prisma.FieldRef<"Assignment", 'String'>;
    readonly description: Prisma.FieldRef<"Assignment", 'String'>;
    readonly assignedDate: Prisma.FieldRef<"Assignment", 'DateTime'>;
    readonly dueDate: Prisma.FieldRef<"Assignment", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Assignment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Assignment", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Assignment", 'DateTime'>;
}
export type AssignmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput | Prisma.AssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssignmentScalarFieldEnum | Prisma.AssignmentScalarFieldEnum[];
};
export type AssignmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput | Prisma.AssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssignmentScalarFieldEnum | Prisma.AssignmentScalarFieldEnum[];
};
export type AssignmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput | Prisma.AssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssignmentScalarFieldEnum | Prisma.AssignmentScalarFieldEnum[];
};
export type AssignmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssignmentCreateInput, Prisma.AssignmentUncheckedCreateInput>;
};
export type AssignmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssignmentCreateManyInput | Prisma.AssignmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssignmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    data: Prisma.AssignmentCreateManyInput | Prisma.AssignmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssignmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssignmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssignmentUpdateInput, Prisma.AssignmentUncheckedUpdateInput>;
    where: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyInput>;
    where?: Prisma.AssignmentWhereInput;
    limit?: number;
};
export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyInput>;
    where?: Prisma.AssignmentWhereInput;
    limit?: number;
    include?: Prisma.AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssignmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateInput, Prisma.AssignmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssignmentUpdateInput, Prisma.AssignmentUncheckedUpdateInput>;
};
export type AssignmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
    limit?: number;
};
export type Assignment$submissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentSubmissionOmit<ExtArgs> | null;
    include?: Prisma.AssignmentSubmissionInclude<ExtArgs> | null;
    where?: Prisma.AssignmentSubmissionWhereInput;
    orderBy?: Prisma.AssignmentSubmissionOrderByWithRelationInput | Prisma.AssignmentSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssignmentSubmissionScalarFieldEnum | Prisma.AssignmentSubmissionScalarFieldEnum[];
};
export type AssignmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
};
