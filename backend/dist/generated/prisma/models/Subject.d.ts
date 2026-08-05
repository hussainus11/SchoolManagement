import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SubjectModel = runtime.Types.Result.DefaultSelection<Prisma.$SubjectPayload>;
export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
};
export type SubjectMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    code: string | null;
    imageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubjectMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    code: string | null;
    imageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubjectCountAggregateOutputType = {
    id: number;
    schoolId: number;
    name: number;
    code: number;
    imageUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SubjectMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    code?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubjectMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    code?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubjectCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    code?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SubjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubjectCountAggregateInputType;
    _min?: SubjectMinAggregateInputType;
    _max?: SubjectMaxAggregateInputType;
};
export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
    [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubject[P]> : Prisma.GetScalarType<T[P], AggregateSubject[P]>;
};
export type SubjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithAggregationInput | Prisma.SubjectOrderByWithAggregationInput[];
    by: Prisma.SubjectScalarFieldEnum[] | Prisma.SubjectScalarFieldEnum;
    having?: Prisma.SubjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubjectCountAggregateInputType | true;
    _min?: SubjectMinAggregateInputType;
    _max?: SubjectMaxAggregateInputType;
};
export type SubjectGroupByOutputType = {
    id: string;
    schoolId: string;
    name: string;
    code: string;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SubjectCountAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
};
export type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubjectGroupByOutputType[P]>;
}>>;
export type SubjectWhereInput = {
    AND?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    OR?: Prisma.SubjectWhereInput[];
    NOT?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    id?: Prisma.StringFilter<"Subject"> | string;
    schoolId?: Prisma.StringFilter<"Subject"> | string;
    name?: Prisma.StringFilter<"Subject"> | string;
    code?: Prisma.StringFilter<"Subject"> | string;
    imageUrl?: Prisma.StringNullableFilter<"Subject"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    classSubjects?: Prisma.ClassSubjectListRelationFilter;
    subjectTeachers?: Prisma.SubjectTeacherListRelationFilter;
    timetableEntries?: Prisma.TimetableEntryListRelationFilter;
    examSchedules?: Prisma.ExamScheduleListRelationFilter;
    assignments?: Prisma.AssignmentListRelationFilter;
};
export type SubjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    classSubjects?: Prisma.ClassSubjectOrderByRelationAggregateInput;
    subjectTeachers?: Prisma.SubjectTeacherOrderByRelationAggregateInput;
    timetableEntries?: Prisma.TimetableEntryOrderByRelationAggregateInput;
    examSchedules?: Prisma.ExamScheduleOrderByRelationAggregateInput;
    assignments?: Prisma.AssignmentOrderByRelationAggregateInput;
};
export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    schoolId_code?: Prisma.SubjectSchoolIdCodeCompoundUniqueInput;
    AND?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    OR?: Prisma.SubjectWhereInput[];
    NOT?: Prisma.SubjectWhereInput | Prisma.SubjectWhereInput[];
    schoolId?: Prisma.StringFilter<"Subject"> | string;
    name?: Prisma.StringFilter<"Subject"> | string;
    code?: Prisma.StringFilter<"Subject"> | string;
    imageUrl?: Prisma.StringNullableFilter<"Subject"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    classSubjects?: Prisma.ClassSubjectListRelationFilter;
    subjectTeachers?: Prisma.SubjectTeacherListRelationFilter;
    timetableEntries?: Prisma.TimetableEntryListRelationFilter;
    examSchedules?: Prisma.ExamScheduleListRelationFilter;
    assignments?: Prisma.AssignmentListRelationFilter;
}, "id" | "schoolId_code">;
export type SubjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SubjectCountOrderByAggregateInput;
    _max?: Prisma.SubjectMaxOrderByAggregateInput;
    _min?: Prisma.SubjectMinOrderByAggregateInput;
};
export type SubjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.SubjectScalarWhereWithAggregatesInput | Prisma.SubjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.SubjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SubjectScalarWhereWithAggregatesInput | Prisma.SubjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Subject"> | string;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"Subject"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Subject"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Subject"> | Date | string;
};
export type SubjectCreateInput = {
    id?: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutSubjectsInput;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutSubjectInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSubjectInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSubjectInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutSubjectInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutSubjectInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSubjectInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSubjectInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutSubjectInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutSubjectsNestedInput;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutSubjectNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSubjectNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSubjectNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutSubjectNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutSubjectNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSubjectNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSubjectNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutSubjectNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectCreateManyInput = {
    id?: string;
    schoolId: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectListRelationFilter = {
    every?: Prisma.SubjectWhereInput;
    some?: Prisma.SubjectWhereInput;
    none?: Prisma.SubjectWhereInput;
};
export type SubjectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SubjectSchoolIdCodeCompoundUniqueInput = {
    schoolId: string;
    code: string;
};
export type SubjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubjectScalarRelationFilter = {
    is?: Prisma.SubjectWhereInput;
    isNot?: Prisma.SubjectWhereInput;
};
export type SubjectCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutSchoolInput, Prisma.SubjectUncheckedCreateWithoutSchoolInput> | Prisma.SubjectCreateWithoutSchoolInput[] | Prisma.SubjectUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutSchoolInput | Prisma.SubjectCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.SubjectCreateManySchoolInputEnvelope;
    connect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
};
export type SubjectUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutSchoolInput, Prisma.SubjectUncheckedCreateWithoutSchoolInput> | Prisma.SubjectCreateWithoutSchoolInput[] | Prisma.SubjectUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutSchoolInput | Prisma.SubjectCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.SubjectCreateManySchoolInputEnvelope;
    connect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
};
export type SubjectUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutSchoolInput, Prisma.SubjectUncheckedCreateWithoutSchoolInput> | Prisma.SubjectCreateWithoutSchoolInput[] | Prisma.SubjectUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutSchoolInput | Prisma.SubjectCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.SubjectUpsertWithWhereUniqueWithoutSchoolInput | Prisma.SubjectUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.SubjectCreateManySchoolInputEnvelope;
    set?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    disconnect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    delete?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    connect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    update?: Prisma.SubjectUpdateWithWhereUniqueWithoutSchoolInput | Prisma.SubjectUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.SubjectUpdateManyWithWhereWithoutSchoolInput | Prisma.SubjectUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.SubjectScalarWhereInput | Prisma.SubjectScalarWhereInput[];
};
export type SubjectUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutSchoolInput, Prisma.SubjectUncheckedCreateWithoutSchoolInput> | Prisma.SubjectCreateWithoutSchoolInput[] | Prisma.SubjectUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutSchoolInput | Prisma.SubjectCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.SubjectUpsertWithWhereUniqueWithoutSchoolInput | Prisma.SubjectUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.SubjectCreateManySchoolInputEnvelope;
    set?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    disconnect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    delete?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    connect?: Prisma.SubjectWhereUniqueInput | Prisma.SubjectWhereUniqueInput[];
    update?: Prisma.SubjectUpdateWithWhereUniqueWithoutSchoolInput | Prisma.SubjectUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.SubjectUpdateManyWithWhereWithoutSchoolInput | Prisma.SubjectUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.SubjectScalarWhereInput | Prisma.SubjectScalarWhereInput[];
};
export type SubjectCreateNestedOneWithoutClassSubjectsInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutClassSubjectsInput, Prisma.SubjectUncheckedCreateWithoutClassSubjectsInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutClassSubjectsInput;
    connect?: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateOneRequiredWithoutClassSubjectsNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutClassSubjectsInput, Prisma.SubjectUncheckedCreateWithoutClassSubjectsInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutClassSubjectsInput;
    upsert?: Prisma.SubjectUpsertWithoutClassSubjectsInput;
    connect?: Prisma.SubjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubjectUpdateToOneWithWhereWithoutClassSubjectsInput, Prisma.SubjectUpdateWithoutClassSubjectsInput>, Prisma.SubjectUncheckedUpdateWithoutClassSubjectsInput>;
};
export type SubjectCreateNestedOneWithoutSubjectTeachersInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutSubjectTeachersInput, Prisma.SubjectUncheckedCreateWithoutSubjectTeachersInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutSubjectTeachersInput;
    connect?: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateOneRequiredWithoutSubjectTeachersNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutSubjectTeachersInput, Prisma.SubjectUncheckedCreateWithoutSubjectTeachersInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutSubjectTeachersInput;
    upsert?: Prisma.SubjectUpsertWithoutSubjectTeachersInput;
    connect?: Prisma.SubjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubjectUpdateToOneWithWhereWithoutSubjectTeachersInput, Prisma.SubjectUpdateWithoutSubjectTeachersInput>, Prisma.SubjectUncheckedUpdateWithoutSubjectTeachersInput>;
};
export type SubjectCreateNestedOneWithoutTimetableEntriesInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutTimetableEntriesInput, Prisma.SubjectUncheckedCreateWithoutTimetableEntriesInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutTimetableEntriesInput;
    connect?: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateOneRequiredWithoutTimetableEntriesNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutTimetableEntriesInput, Prisma.SubjectUncheckedCreateWithoutTimetableEntriesInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutTimetableEntriesInput;
    upsert?: Prisma.SubjectUpsertWithoutTimetableEntriesInput;
    connect?: Prisma.SubjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubjectUpdateToOneWithWhereWithoutTimetableEntriesInput, Prisma.SubjectUpdateWithoutTimetableEntriesInput>, Prisma.SubjectUncheckedUpdateWithoutTimetableEntriesInput>;
};
export type SubjectCreateNestedOneWithoutExamSchedulesInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutExamSchedulesInput, Prisma.SubjectUncheckedCreateWithoutExamSchedulesInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutExamSchedulesInput;
    connect?: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateOneRequiredWithoutExamSchedulesNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutExamSchedulesInput, Prisma.SubjectUncheckedCreateWithoutExamSchedulesInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutExamSchedulesInput;
    upsert?: Prisma.SubjectUpsertWithoutExamSchedulesInput;
    connect?: Prisma.SubjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubjectUpdateToOneWithWhereWithoutExamSchedulesInput, Prisma.SubjectUpdateWithoutExamSchedulesInput>, Prisma.SubjectUncheckedUpdateWithoutExamSchedulesInput>;
};
export type SubjectCreateNestedOneWithoutAssignmentsInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutAssignmentsInput, Prisma.SubjectUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutAssignmentsInput;
    connect?: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectCreateWithoutAssignmentsInput, Prisma.SubjectUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.SubjectCreateOrConnectWithoutAssignmentsInput;
    upsert?: Prisma.SubjectUpsertWithoutAssignmentsInput;
    connect?: Prisma.SubjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubjectUpdateToOneWithWhereWithoutAssignmentsInput, Prisma.SubjectUpdateWithoutAssignmentsInput>, Prisma.SubjectUncheckedUpdateWithoutAssignmentsInput>;
};
export type SubjectCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutSubjectInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSubjectInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSubjectInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutSubjectInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutSubjectInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSubjectInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSubjectInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutSubjectInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectCreateOrConnectWithoutSchoolInput = {
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutSchoolInput, Prisma.SubjectUncheckedCreateWithoutSchoolInput>;
};
export type SubjectCreateManySchoolInputEnvelope = {
    data: Prisma.SubjectCreateManySchoolInput | Prisma.SubjectCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type SubjectUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.SubjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.SubjectUpdateWithoutSchoolInput, Prisma.SubjectUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutSchoolInput, Prisma.SubjectUncheckedCreateWithoutSchoolInput>;
};
export type SubjectUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.SubjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.SubjectUpdateWithoutSchoolInput, Prisma.SubjectUncheckedUpdateWithoutSchoolInput>;
};
export type SubjectUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.SubjectScalarWhereInput;
    data: Prisma.XOR<Prisma.SubjectUpdateManyMutationInput, Prisma.SubjectUncheckedUpdateManyWithoutSchoolInput>;
};
export type SubjectScalarWhereInput = {
    AND?: Prisma.SubjectScalarWhereInput | Prisma.SubjectScalarWhereInput[];
    OR?: Prisma.SubjectScalarWhereInput[];
    NOT?: Prisma.SubjectScalarWhereInput | Prisma.SubjectScalarWhereInput[];
    id?: Prisma.StringFilter<"Subject"> | string;
    schoolId?: Prisma.StringFilter<"Subject"> | string;
    name?: Prisma.StringFilter<"Subject"> | string;
    code?: Prisma.StringFilter<"Subject"> | string;
    imageUrl?: Prisma.StringNullableFilter<"Subject"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subject"> | Date | string;
};
export type SubjectCreateWithoutClassSubjectsInput = {
    id?: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutSubjectsInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSubjectInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSubjectInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutSubjectInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateWithoutClassSubjectsInput = {
    id?: string;
    schoolId: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSubjectInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSubjectInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutSubjectInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectCreateOrConnectWithoutClassSubjectsInput = {
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutClassSubjectsInput, Prisma.SubjectUncheckedCreateWithoutClassSubjectsInput>;
};
export type SubjectUpsertWithoutClassSubjectsInput = {
    update: Prisma.XOR<Prisma.SubjectUpdateWithoutClassSubjectsInput, Prisma.SubjectUncheckedUpdateWithoutClassSubjectsInput>;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutClassSubjectsInput, Prisma.SubjectUncheckedCreateWithoutClassSubjectsInput>;
    where?: Prisma.SubjectWhereInput;
};
export type SubjectUpdateToOneWithWhereWithoutClassSubjectsInput = {
    where?: Prisma.SubjectWhereInput;
    data: Prisma.XOR<Prisma.SubjectUpdateWithoutClassSubjectsInput, Prisma.SubjectUncheckedUpdateWithoutClassSubjectsInput>;
};
export type SubjectUpdateWithoutClassSubjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutSubjectsNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSubjectNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSubjectNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutSubjectNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateWithoutClassSubjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSubjectNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSubjectNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutSubjectNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectCreateWithoutSubjectTeachersInput = {
    id?: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutSubjectsInput;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutSubjectInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSubjectInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutSubjectInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateWithoutSubjectTeachersInput = {
    id?: string;
    schoolId: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutSubjectInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSubjectInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutSubjectInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectCreateOrConnectWithoutSubjectTeachersInput = {
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutSubjectTeachersInput, Prisma.SubjectUncheckedCreateWithoutSubjectTeachersInput>;
};
export type SubjectUpsertWithoutSubjectTeachersInput = {
    update: Prisma.XOR<Prisma.SubjectUpdateWithoutSubjectTeachersInput, Prisma.SubjectUncheckedUpdateWithoutSubjectTeachersInput>;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutSubjectTeachersInput, Prisma.SubjectUncheckedCreateWithoutSubjectTeachersInput>;
    where?: Prisma.SubjectWhereInput;
};
export type SubjectUpdateToOneWithWhereWithoutSubjectTeachersInput = {
    where?: Prisma.SubjectWhereInput;
    data: Prisma.XOR<Prisma.SubjectUpdateWithoutSubjectTeachersInput, Prisma.SubjectUncheckedUpdateWithoutSubjectTeachersInput>;
};
export type SubjectUpdateWithoutSubjectTeachersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutSubjectsNestedInput;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutSubjectNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSubjectNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutSubjectNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateWithoutSubjectTeachersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutSubjectNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSubjectNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutSubjectNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectCreateWithoutTimetableEntriesInput = {
    id?: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutSubjectsInput;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutSubjectInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSubjectInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutSubjectInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateWithoutTimetableEntriesInput = {
    id?: string;
    schoolId: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutSubjectInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSubjectInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutSubjectInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectCreateOrConnectWithoutTimetableEntriesInput = {
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutTimetableEntriesInput, Prisma.SubjectUncheckedCreateWithoutTimetableEntriesInput>;
};
export type SubjectUpsertWithoutTimetableEntriesInput = {
    update: Prisma.XOR<Prisma.SubjectUpdateWithoutTimetableEntriesInput, Prisma.SubjectUncheckedUpdateWithoutTimetableEntriesInput>;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutTimetableEntriesInput, Prisma.SubjectUncheckedCreateWithoutTimetableEntriesInput>;
    where?: Prisma.SubjectWhereInput;
};
export type SubjectUpdateToOneWithWhereWithoutTimetableEntriesInput = {
    where?: Prisma.SubjectWhereInput;
    data: Prisma.XOR<Prisma.SubjectUpdateWithoutTimetableEntriesInput, Prisma.SubjectUncheckedUpdateWithoutTimetableEntriesInput>;
};
export type SubjectUpdateWithoutTimetableEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutSubjectsNestedInput;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutSubjectNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSubjectNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutSubjectNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateWithoutTimetableEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutSubjectNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSubjectNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutSubjectNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectCreateWithoutExamSchedulesInput = {
    id?: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutSubjectsInput;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutSubjectInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSubjectInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSubjectInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateWithoutExamSchedulesInput = {
    id?: string;
    schoolId: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutSubjectInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSubjectInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSubjectInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectCreateOrConnectWithoutExamSchedulesInput = {
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutExamSchedulesInput, Prisma.SubjectUncheckedCreateWithoutExamSchedulesInput>;
};
export type SubjectUpsertWithoutExamSchedulesInput = {
    update: Prisma.XOR<Prisma.SubjectUpdateWithoutExamSchedulesInput, Prisma.SubjectUncheckedUpdateWithoutExamSchedulesInput>;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutExamSchedulesInput, Prisma.SubjectUncheckedCreateWithoutExamSchedulesInput>;
    where?: Prisma.SubjectWhereInput;
};
export type SubjectUpdateToOneWithWhereWithoutExamSchedulesInput = {
    where?: Prisma.SubjectWhereInput;
    data: Prisma.XOR<Prisma.SubjectUpdateWithoutExamSchedulesInput, Prisma.SubjectUncheckedUpdateWithoutExamSchedulesInput>;
};
export type SubjectUpdateWithoutExamSchedulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutSubjectsNestedInput;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutSubjectNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSubjectNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSubjectNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateWithoutExamSchedulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutSubjectNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSubjectNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSubjectNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectCreateWithoutAssignmentsInput = {
    id?: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutSubjectsInput;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutSubjectInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSubjectInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSubjectInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutSubjectInput;
};
export type SubjectUncheckedCreateWithoutAssignmentsInput = {
    id?: string;
    schoolId: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutSubjectInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSubjectInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSubjectInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectCreateOrConnectWithoutAssignmentsInput = {
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutAssignmentsInput, Prisma.SubjectUncheckedCreateWithoutAssignmentsInput>;
};
export type SubjectUpsertWithoutAssignmentsInput = {
    update: Prisma.XOR<Prisma.SubjectUpdateWithoutAssignmentsInput, Prisma.SubjectUncheckedUpdateWithoutAssignmentsInput>;
    create: Prisma.XOR<Prisma.SubjectCreateWithoutAssignmentsInput, Prisma.SubjectUncheckedCreateWithoutAssignmentsInput>;
    where?: Prisma.SubjectWhereInput;
};
export type SubjectUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: Prisma.SubjectWhereInput;
    data: Prisma.XOR<Prisma.SubjectUpdateWithoutAssignmentsInput, Prisma.SubjectUncheckedUpdateWithoutAssignmentsInput>;
};
export type SubjectUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutSubjectsNestedInput;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutSubjectNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSubjectNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSubjectNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutSubjectNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSubjectNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSubjectNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectCreateManySchoolInput = {
    id?: string;
    name: string;
    code: string;
    imageUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubjectUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutSubjectNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSubjectNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSubjectNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutSubjectNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutSubjectNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSubjectNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSubjectNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutSubjectNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectCountOutputType = {
    classSubjects: number;
    subjectTeachers: number;
    timetableEntries: number;
    examSchedules: number;
    assignments: number;
};
export type SubjectCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classSubjects?: boolean | SubjectCountOutputTypeCountClassSubjectsArgs;
    subjectTeachers?: boolean | SubjectCountOutputTypeCountSubjectTeachersArgs;
    timetableEntries?: boolean | SubjectCountOutputTypeCountTimetableEntriesArgs;
    examSchedules?: boolean | SubjectCountOutputTypeCountExamSchedulesArgs;
    assignments?: boolean | SubjectCountOutputTypeCountAssignmentsArgs;
};
export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectCountOutputTypeSelect<ExtArgs> | null;
};
export type SubjectCountOutputTypeCountClassSubjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassSubjectWhereInput;
};
export type SubjectCountOutputTypeCountSubjectTeachersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectTeacherWhereInput;
};
export type SubjectCountOutputTypeCountTimetableEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimetableEntryWhereInput;
};
export type SubjectCountOutputTypeCountExamSchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamScheduleWhereInput;
};
export type SubjectCountOutputTypeCountAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
};
export type SubjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    code?: boolean;
    imageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    classSubjects?: boolean | Prisma.Subject$classSubjectsArgs<ExtArgs>;
    subjectTeachers?: boolean | Prisma.Subject$subjectTeachersArgs<ExtArgs>;
    timetableEntries?: boolean | Prisma.Subject$timetableEntriesArgs<ExtArgs>;
    examSchedules?: boolean | Prisma.Subject$examSchedulesArgs<ExtArgs>;
    assignments?: boolean | Prisma.Subject$assignmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.SubjectCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type SubjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    code?: boolean;
    imageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type SubjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    code?: boolean;
    imageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type SubjectSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    code?: boolean;
    imageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SubjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "name" | "code" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["subject"]>;
export type SubjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    classSubjects?: boolean | Prisma.Subject$classSubjectsArgs<ExtArgs>;
    subjectTeachers?: boolean | Prisma.Subject$subjectTeachersArgs<ExtArgs>;
    timetableEntries?: boolean | Prisma.Subject$timetableEntriesArgs<ExtArgs>;
    examSchedules?: boolean | Prisma.Subject$examSchedulesArgs<ExtArgs>;
    assignments?: boolean | Prisma.Subject$assignmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.SubjectCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SubjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type $SubjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Subject";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        classSubjects: Prisma.$ClassSubjectPayload<ExtArgs>[];
        subjectTeachers: Prisma.$SubjectTeacherPayload<ExtArgs>[];
        timetableEntries: Prisma.$TimetableEntryPayload<ExtArgs>[];
        examSchedules: Prisma.$ExamSchedulePayload<ExtArgs>[];
        assignments: Prisma.$AssignmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        name: string;
        code: string;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["subject"]>;
    composites: {};
};
export type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubjectPayload, S>;
export type SubjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubjectCountAggregateInputType | true;
};
export interface SubjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Subject'];
        meta: {
            name: 'Subject';
        };
    };
    findUnique<T extends SubjectFindUniqueArgs>(args: Prisma.SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SubjectFindFirstArgs>(args?: Prisma.SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SubjectFindManyArgs>(args?: Prisma.SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SubjectCreateArgs>(args: Prisma.SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SubjectCreateManyArgs>(args?: Prisma.SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SubjectDeleteArgs>(args: Prisma.SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SubjectUpdateArgs>(args: Prisma.SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SubjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SubjectUpdateManyArgs>(args: Prisma.SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SubjectUpsertArgs>(args: Prisma.SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SubjectCountArgs>(args?: Prisma.Subset<T, SubjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubjectCountAggregateOutputType> : number>;
    aggregate<T extends SubjectAggregateArgs>(args: Prisma.Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>;
    groupBy<T extends SubjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SubjectGroupByArgs['orderBy'];
    } : {
        orderBy?: SubjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SubjectFieldRefs;
}
export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    classSubjects<T extends Prisma.Subject$classSubjectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subject$classSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    subjectTeachers<T extends Prisma.Subject$subjectTeachersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subject$subjectTeachersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    timetableEntries<T extends Prisma.Subject$timetableEntriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subject$timetableEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    examSchedules<T extends Prisma.Subject$examSchedulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subject$examSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assignments<T extends Prisma.Subject$assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subject$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SubjectFieldRefs {
    readonly id: Prisma.FieldRef<"Subject", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Subject", 'String'>;
    readonly name: Prisma.FieldRef<"Subject", 'String'>;
    readonly code: Prisma.FieldRef<"Subject", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"Subject", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Subject", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Subject", 'DateTime'>;
}
export type SubjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
export type SubjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
export type SubjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput | Prisma.SubjectOrderByWithRelationInput[];
    cursor?: Prisma.SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
export type SubjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectCreateInput, Prisma.SubjectUncheckedCreateInput>;
};
export type SubjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SubjectCreateManyInput | Prisma.SubjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SubjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    data: Prisma.SubjectCreateManyInput | Prisma.SubjectCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SubjectIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SubjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectUpdateInput, Prisma.SubjectUncheckedUpdateInput>;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SubjectUpdateManyMutationInput, Prisma.SubjectUncheckedUpdateManyInput>;
    where?: Prisma.SubjectWhereInput;
    limit?: number;
};
export type SubjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubjectUpdateManyMutationInput, Prisma.SubjectUncheckedUpdateManyInput>;
    where?: Prisma.SubjectWhereInput;
    limit?: number;
    include?: Prisma.SubjectIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SubjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectCreateInput, Prisma.SubjectUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SubjectUpdateInput, Prisma.SubjectUncheckedUpdateInput>;
};
export type SubjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
    where: Prisma.SubjectWhereUniqueInput;
};
export type SubjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectWhereInput;
    limit?: number;
};
export type Subject$classSubjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Subject$subjectTeachersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Subject$timetableEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimetableEntrySelect<ExtArgs> | null;
    omit?: Prisma.TimetableEntryOmit<ExtArgs> | null;
    include?: Prisma.TimetableEntryInclude<ExtArgs> | null;
    where?: Prisma.TimetableEntryWhereInput;
    orderBy?: Prisma.TimetableEntryOrderByWithRelationInput | Prisma.TimetableEntryOrderByWithRelationInput[];
    cursor?: Prisma.TimetableEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TimetableEntryScalarFieldEnum | Prisma.TimetableEntryScalarFieldEnum[];
};
export type Subject$examSchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ExamScheduleOmit<ExtArgs> | null;
    include?: Prisma.ExamScheduleInclude<ExtArgs> | null;
    where?: Prisma.ExamScheduleWhereInput;
    orderBy?: Prisma.ExamScheduleOrderByWithRelationInput | Prisma.ExamScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ExamScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamScheduleScalarFieldEnum | Prisma.ExamScheduleScalarFieldEnum[];
};
export type Subject$assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SubjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubjectSelect<ExtArgs> | null;
    omit?: Prisma.SubjectOmit<ExtArgs> | null;
    include?: Prisma.SubjectInclude<ExtArgs> | null;
};
