import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SectionModel = runtime.Types.Result.DefaultSelection<Prisma.$SectionPayload>;
export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null;
    _avg: SectionAvgAggregateOutputType | null;
    _sum: SectionSumAggregateOutputType | null;
    _min: SectionMinAggregateOutputType | null;
    _max: SectionMaxAggregateOutputType | null;
};
export type SectionAvgAggregateOutputType = {
    capacity: number | null;
};
export type SectionSumAggregateOutputType = {
    capacity: number | null;
};
export type SectionMinAggregateOutputType = {
    id: string | null;
    classId: string | null;
    name: string | null;
    capacity: number | null;
    classTeacherId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SectionMaxAggregateOutputType = {
    id: string | null;
    classId: string | null;
    name: string | null;
    capacity: number | null;
    classTeacherId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SectionCountAggregateOutputType = {
    id: number;
    classId: number;
    name: number;
    capacity: number;
    classTeacherId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SectionAvgAggregateInputType = {
    capacity?: true;
};
export type SectionSumAggregateInputType = {
    capacity?: true;
};
export type SectionMinAggregateInputType = {
    id?: true;
    classId?: true;
    name?: true;
    capacity?: true;
    classTeacherId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SectionMaxAggregateInputType = {
    id?: true;
    classId?: true;
    name?: true;
    capacity?: true;
    classTeacherId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SectionCountAggregateInputType = {
    id?: true;
    classId?: true;
    name?: true;
    capacity?: true;
    classTeacherId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectionWhereInput;
    orderBy?: Prisma.SectionOrderByWithRelationInput | Prisma.SectionOrderByWithRelationInput[];
    cursor?: Prisma.SectionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SectionCountAggregateInputType;
    _avg?: SectionAvgAggregateInputType;
    _sum?: SectionSumAggregateInputType;
    _min?: SectionMinAggregateInputType;
    _max?: SectionMaxAggregateInputType;
};
export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
    [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSection[P]> : Prisma.GetScalarType<T[P], AggregateSection[P]>;
};
export type SectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectionWhereInput;
    orderBy?: Prisma.SectionOrderByWithAggregationInput | Prisma.SectionOrderByWithAggregationInput[];
    by: Prisma.SectionScalarFieldEnum[] | Prisma.SectionScalarFieldEnum;
    having?: Prisma.SectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SectionCountAggregateInputType | true;
    _avg?: SectionAvgAggregateInputType;
    _sum?: SectionSumAggregateInputType;
    _min?: SectionMinAggregateInputType;
    _max?: SectionMaxAggregateInputType;
};
export type SectionGroupByOutputType = {
    id: string;
    classId: string;
    name: string;
    capacity: number | null;
    classTeacherId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SectionCountAggregateOutputType | null;
    _avg: SectionAvgAggregateOutputType | null;
    _sum: SectionSumAggregateOutputType | null;
    _min: SectionMinAggregateOutputType | null;
    _max: SectionMaxAggregateOutputType | null;
};
export type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SectionGroupByOutputType[P]>;
}>>;
export type SectionWhereInput = {
    AND?: Prisma.SectionWhereInput | Prisma.SectionWhereInput[];
    OR?: Prisma.SectionWhereInput[];
    NOT?: Prisma.SectionWhereInput | Prisma.SectionWhereInput[];
    id?: Prisma.StringFilter<"Section"> | string;
    classId?: Prisma.StringFilter<"Section"> | string;
    name?: Prisma.StringFilter<"Section"> | string;
    capacity?: Prisma.IntNullableFilter<"Section"> | number | null;
    classTeacherId?: Prisma.StringNullableFilter<"Section"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Section"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Section"> | Date | string;
    class?: Prisma.XOR<Prisma.ClassScalarRelationFilter, Prisma.ClassWhereInput>;
    classTeacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    students?: Prisma.StudentListRelationFilter;
    subjectTeachers?: Prisma.SubjectTeacherListRelationFilter;
    attendances?: Prisma.StudentAttendanceListRelationFilter;
    timetableEntries?: Prisma.TimetableEntryListRelationFilter;
    assignments?: Prisma.AssignmentListRelationFilter;
    offeredAdmissions?: Prisma.AdmissionListRelationFilter;
};
export type SectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrderInput | Prisma.SortOrder;
    classTeacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    class?: Prisma.ClassOrderByWithRelationInput;
    classTeacher?: Prisma.TeacherOrderByWithRelationInput;
    students?: Prisma.StudentOrderByRelationAggregateInput;
    subjectTeachers?: Prisma.SubjectTeacherOrderByRelationAggregateInput;
    attendances?: Prisma.StudentAttendanceOrderByRelationAggregateInput;
    timetableEntries?: Prisma.TimetableEntryOrderByRelationAggregateInput;
    assignments?: Prisma.AssignmentOrderByRelationAggregateInput;
    offeredAdmissions?: Prisma.AdmissionOrderByRelationAggregateInput;
};
export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    classTeacherId?: string;
    classId_name?: Prisma.SectionClassIdNameCompoundUniqueInput;
    AND?: Prisma.SectionWhereInput | Prisma.SectionWhereInput[];
    OR?: Prisma.SectionWhereInput[];
    NOT?: Prisma.SectionWhereInput | Prisma.SectionWhereInput[];
    classId?: Prisma.StringFilter<"Section"> | string;
    name?: Prisma.StringFilter<"Section"> | string;
    capacity?: Prisma.IntNullableFilter<"Section"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Section"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Section"> | Date | string;
    class?: Prisma.XOR<Prisma.ClassScalarRelationFilter, Prisma.ClassWhereInput>;
    classTeacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    students?: Prisma.StudentListRelationFilter;
    subjectTeachers?: Prisma.SubjectTeacherListRelationFilter;
    attendances?: Prisma.StudentAttendanceListRelationFilter;
    timetableEntries?: Prisma.TimetableEntryListRelationFilter;
    assignments?: Prisma.AssignmentListRelationFilter;
    offeredAdmissions?: Prisma.AdmissionListRelationFilter;
}, "id" | "classTeacherId" | "classId_name">;
export type SectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrderInput | Prisma.SortOrder;
    classTeacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SectionCountOrderByAggregateInput;
    _avg?: Prisma.SectionAvgOrderByAggregateInput;
    _max?: Prisma.SectionMaxOrderByAggregateInput;
    _min?: Prisma.SectionMinOrderByAggregateInput;
    _sum?: Prisma.SectionSumOrderByAggregateInput;
};
export type SectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SectionScalarWhereWithAggregatesInput | Prisma.SectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SectionScalarWhereWithAggregatesInput | Prisma.SectionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Section"> | string;
    classId?: Prisma.StringWithAggregatesFilter<"Section"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Section"> | string;
    capacity?: Prisma.IntNullableWithAggregatesFilter<"Section"> | number | null;
    classTeacherId?: Prisma.StringNullableWithAggregatesFilter<"Section"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Section"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Section"> | Date | string;
};
export type SectionCreateInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    class: Prisma.ClassCreateNestedOneWithoutSectionsInput;
    classTeacher?: Prisma.TeacherCreateNestedOneWithoutClassTeacherOfInput;
    students?: Prisma.StudentCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionUncheckedCreateInput = {
    id?: string;
    classId: string;
    name: string;
    capacity?: number | null;
    classTeacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.ClassUpdateOneRequiredWithoutSectionsNestedInput;
    classTeacher?: Prisma.TeacherUpdateOneWithoutClassTeacherOfNestedInput;
    students?: Prisma.StudentUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionCreateManyInput = {
    id?: string;
    classId: string;
    name: string;
    capacity?: number | null;
    classTeacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectionListRelationFilter = {
    every?: Prisma.SectionWhereInput;
    some?: Prisma.SectionWhereInput;
    none?: Prisma.SectionWhereInput;
};
export type SectionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SectionClassIdNameCompoundUniqueInput = {
    classId: string;
    name: string;
};
export type SectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    classTeacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SectionAvgOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
};
export type SectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    classTeacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    classTeacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SectionSumOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
};
export type SectionScalarRelationFilter = {
    is?: Prisma.SectionWhereInput;
    isNot?: Prisma.SectionWhereInput;
};
export type SectionNullableScalarRelationFilter = {
    is?: Prisma.SectionWhereInput | null;
    isNot?: Prisma.SectionWhereInput | null;
};
export type SectionCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutClassInput, Prisma.SectionUncheckedCreateWithoutClassInput> | Prisma.SectionCreateWithoutClassInput[] | Prisma.SectionUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutClassInput | Prisma.SectionCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.SectionCreateManyClassInputEnvelope;
    connect?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
};
export type SectionUncheckedCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutClassInput, Prisma.SectionUncheckedCreateWithoutClassInput> | Prisma.SectionCreateWithoutClassInput[] | Prisma.SectionUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutClassInput | Prisma.SectionCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.SectionCreateManyClassInputEnvelope;
    connect?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
};
export type SectionUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutClassInput, Prisma.SectionUncheckedCreateWithoutClassInput> | Prisma.SectionCreateWithoutClassInput[] | Prisma.SectionUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutClassInput | Prisma.SectionCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.SectionUpsertWithWhereUniqueWithoutClassInput | Prisma.SectionUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.SectionCreateManyClassInputEnvelope;
    set?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    disconnect?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    delete?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    connect?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    update?: Prisma.SectionUpdateWithWhereUniqueWithoutClassInput | Prisma.SectionUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.SectionUpdateManyWithWhereWithoutClassInput | Prisma.SectionUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.SectionScalarWhereInput | Prisma.SectionScalarWhereInput[];
};
export type SectionUncheckedUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutClassInput, Prisma.SectionUncheckedCreateWithoutClassInput> | Prisma.SectionCreateWithoutClassInput[] | Prisma.SectionUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutClassInput | Prisma.SectionCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.SectionUpsertWithWhereUniqueWithoutClassInput | Prisma.SectionUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.SectionCreateManyClassInputEnvelope;
    set?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    disconnect?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    delete?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    connect?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    update?: Prisma.SectionUpdateWithWhereUniqueWithoutClassInput | Prisma.SectionUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.SectionUpdateManyWithWhereWithoutClassInput | Prisma.SectionUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.SectionScalarWhereInput | Prisma.SectionScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SectionCreateNestedOneWithoutSubjectTeachersInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutSubjectTeachersInput, Prisma.SectionUncheckedCreateWithoutSubjectTeachersInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutSubjectTeachersInput;
    connect?: Prisma.SectionWhereUniqueInput;
};
export type SectionUpdateOneRequiredWithoutSubjectTeachersNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutSubjectTeachersInput, Prisma.SectionUncheckedCreateWithoutSubjectTeachersInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutSubjectTeachersInput;
    upsert?: Prisma.SectionUpsertWithoutSubjectTeachersInput;
    connect?: Prisma.SectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SectionUpdateToOneWithWhereWithoutSubjectTeachersInput, Prisma.SectionUpdateWithoutSubjectTeachersInput>, Prisma.SectionUncheckedUpdateWithoutSubjectTeachersInput>;
};
export type SectionCreateNestedOneWithoutClassTeacherInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutClassTeacherInput, Prisma.SectionUncheckedCreateWithoutClassTeacherInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutClassTeacherInput;
    connect?: Prisma.SectionWhereUniqueInput;
};
export type SectionUncheckedCreateNestedOneWithoutClassTeacherInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutClassTeacherInput, Prisma.SectionUncheckedCreateWithoutClassTeacherInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutClassTeacherInput;
    connect?: Prisma.SectionWhereUniqueInput;
};
export type SectionUpdateOneWithoutClassTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutClassTeacherInput, Prisma.SectionUncheckedCreateWithoutClassTeacherInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutClassTeacherInput;
    upsert?: Prisma.SectionUpsertWithoutClassTeacherInput;
    disconnect?: Prisma.SectionWhereInput | boolean;
    delete?: Prisma.SectionWhereInput | boolean;
    connect?: Prisma.SectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SectionUpdateToOneWithWhereWithoutClassTeacherInput, Prisma.SectionUpdateWithoutClassTeacherInput>, Prisma.SectionUncheckedUpdateWithoutClassTeacherInput>;
};
export type SectionUncheckedUpdateOneWithoutClassTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutClassTeacherInput, Prisma.SectionUncheckedCreateWithoutClassTeacherInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutClassTeacherInput;
    upsert?: Prisma.SectionUpsertWithoutClassTeacherInput;
    disconnect?: Prisma.SectionWhereInput | boolean;
    delete?: Prisma.SectionWhereInput | boolean;
    connect?: Prisma.SectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SectionUpdateToOneWithWhereWithoutClassTeacherInput, Prisma.SectionUpdateWithoutClassTeacherInput>, Prisma.SectionUncheckedUpdateWithoutClassTeacherInput>;
};
export type SectionCreateNestedOneWithoutStudentsInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutStudentsInput, Prisma.SectionUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutStudentsInput;
    connect?: Prisma.SectionWhereUniqueInput;
};
export type SectionUpdateOneWithoutStudentsNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutStudentsInput, Prisma.SectionUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutStudentsInput;
    upsert?: Prisma.SectionUpsertWithoutStudentsInput;
    disconnect?: Prisma.SectionWhereInput | boolean;
    delete?: Prisma.SectionWhereInput | boolean;
    connect?: Prisma.SectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SectionUpdateToOneWithWhereWithoutStudentsInput, Prisma.SectionUpdateWithoutStudentsInput>, Prisma.SectionUncheckedUpdateWithoutStudentsInput>;
};
export type SectionCreateNestedOneWithoutAttendancesInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutAttendancesInput, Prisma.SectionUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutAttendancesInput;
    connect?: Prisma.SectionWhereUniqueInput;
};
export type SectionUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutAttendancesInput, Prisma.SectionUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutAttendancesInput;
    upsert?: Prisma.SectionUpsertWithoutAttendancesInput;
    connect?: Prisma.SectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SectionUpdateToOneWithWhereWithoutAttendancesInput, Prisma.SectionUpdateWithoutAttendancesInput>, Prisma.SectionUncheckedUpdateWithoutAttendancesInput>;
};
export type SectionCreateNestedOneWithoutTimetableEntriesInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutTimetableEntriesInput, Prisma.SectionUncheckedCreateWithoutTimetableEntriesInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutTimetableEntriesInput;
    connect?: Prisma.SectionWhereUniqueInput;
};
export type SectionUpdateOneRequiredWithoutTimetableEntriesNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutTimetableEntriesInput, Prisma.SectionUncheckedCreateWithoutTimetableEntriesInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutTimetableEntriesInput;
    upsert?: Prisma.SectionUpsertWithoutTimetableEntriesInput;
    connect?: Prisma.SectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SectionUpdateToOneWithWhereWithoutTimetableEntriesInput, Prisma.SectionUpdateWithoutTimetableEntriesInput>, Prisma.SectionUncheckedUpdateWithoutTimetableEntriesInput>;
};
export type SectionCreateNestedOneWithoutAssignmentsInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutAssignmentsInput, Prisma.SectionUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutAssignmentsInput;
    connect?: Prisma.SectionWhereUniqueInput;
};
export type SectionUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutAssignmentsInput, Prisma.SectionUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutAssignmentsInput;
    upsert?: Prisma.SectionUpsertWithoutAssignmentsInput;
    connect?: Prisma.SectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SectionUpdateToOneWithWhereWithoutAssignmentsInput, Prisma.SectionUpdateWithoutAssignmentsInput>, Prisma.SectionUncheckedUpdateWithoutAssignmentsInput>;
};
export type SectionCreateNestedOneWithoutOfferedAdmissionsInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutOfferedAdmissionsInput, Prisma.SectionUncheckedCreateWithoutOfferedAdmissionsInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutOfferedAdmissionsInput;
    connect?: Prisma.SectionWhereUniqueInput;
};
export type SectionUpdateOneWithoutOfferedAdmissionsNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutOfferedAdmissionsInput, Prisma.SectionUncheckedCreateWithoutOfferedAdmissionsInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutOfferedAdmissionsInput;
    upsert?: Prisma.SectionUpsertWithoutOfferedAdmissionsInput;
    disconnect?: Prisma.SectionWhereInput | boolean;
    delete?: Prisma.SectionWhereInput | boolean;
    connect?: Prisma.SectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SectionUpdateToOneWithWhereWithoutOfferedAdmissionsInput, Prisma.SectionUpdateWithoutOfferedAdmissionsInput>, Prisma.SectionUncheckedUpdateWithoutOfferedAdmissionsInput>;
};
export type SectionCreateWithoutClassInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classTeacher?: Prisma.TeacherCreateNestedOneWithoutClassTeacherOfInput;
    students?: Prisma.StudentCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionUncheckedCreateWithoutClassInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    classTeacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionCreateOrConnectWithoutClassInput = {
    where: Prisma.SectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectionCreateWithoutClassInput, Prisma.SectionUncheckedCreateWithoutClassInput>;
};
export type SectionCreateManyClassInputEnvelope = {
    data: Prisma.SectionCreateManyClassInput | Prisma.SectionCreateManyClassInput[];
    skipDuplicates?: boolean;
};
export type SectionUpsertWithWhereUniqueWithoutClassInput = {
    where: Prisma.SectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SectionUpdateWithoutClassInput, Prisma.SectionUncheckedUpdateWithoutClassInput>;
    create: Prisma.XOR<Prisma.SectionCreateWithoutClassInput, Prisma.SectionUncheckedCreateWithoutClassInput>;
};
export type SectionUpdateWithWhereUniqueWithoutClassInput = {
    where: Prisma.SectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SectionUpdateWithoutClassInput, Prisma.SectionUncheckedUpdateWithoutClassInput>;
};
export type SectionUpdateManyWithWhereWithoutClassInput = {
    where: Prisma.SectionScalarWhereInput;
    data: Prisma.XOR<Prisma.SectionUpdateManyMutationInput, Prisma.SectionUncheckedUpdateManyWithoutClassInput>;
};
export type SectionScalarWhereInput = {
    AND?: Prisma.SectionScalarWhereInput | Prisma.SectionScalarWhereInput[];
    OR?: Prisma.SectionScalarWhereInput[];
    NOT?: Prisma.SectionScalarWhereInput | Prisma.SectionScalarWhereInput[];
    id?: Prisma.StringFilter<"Section"> | string;
    classId?: Prisma.StringFilter<"Section"> | string;
    name?: Prisma.StringFilter<"Section"> | string;
    capacity?: Prisma.IntNullableFilter<"Section"> | number | null;
    classTeacherId?: Prisma.StringNullableFilter<"Section"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Section"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Section"> | Date | string;
};
export type SectionCreateWithoutSubjectTeachersInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    class: Prisma.ClassCreateNestedOneWithoutSectionsInput;
    classTeacher?: Prisma.TeacherCreateNestedOneWithoutClassTeacherOfInput;
    students?: Prisma.StudentCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionUncheckedCreateWithoutSubjectTeachersInput = {
    id?: string;
    classId: string;
    name: string;
    capacity?: number | null;
    classTeacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionCreateOrConnectWithoutSubjectTeachersInput = {
    where: Prisma.SectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectionCreateWithoutSubjectTeachersInput, Prisma.SectionUncheckedCreateWithoutSubjectTeachersInput>;
};
export type SectionUpsertWithoutSubjectTeachersInput = {
    update: Prisma.XOR<Prisma.SectionUpdateWithoutSubjectTeachersInput, Prisma.SectionUncheckedUpdateWithoutSubjectTeachersInput>;
    create: Prisma.XOR<Prisma.SectionCreateWithoutSubjectTeachersInput, Prisma.SectionUncheckedCreateWithoutSubjectTeachersInput>;
    where?: Prisma.SectionWhereInput;
};
export type SectionUpdateToOneWithWhereWithoutSubjectTeachersInput = {
    where?: Prisma.SectionWhereInput;
    data: Prisma.XOR<Prisma.SectionUpdateWithoutSubjectTeachersInput, Prisma.SectionUncheckedUpdateWithoutSubjectTeachersInput>;
};
export type SectionUpdateWithoutSubjectTeachersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.ClassUpdateOneRequiredWithoutSectionsNestedInput;
    classTeacher?: Prisma.TeacherUpdateOneWithoutClassTeacherOfNestedInput;
    students?: Prisma.StudentUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionUncheckedUpdateWithoutSubjectTeachersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionCreateWithoutClassTeacherInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    class: Prisma.ClassCreateNestedOneWithoutSectionsInput;
    students?: Prisma.StudentCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionUncheckedCreateWithoutClassTeacherInput = {
    id?: string;
    classId: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionCreateOrConnectWithoutClassTeacherInput = {
    where: Prisma.SectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectionCreateWithoutClassTeacherInput, Prisma.SectionUncheckedCreateWithoutClassTeacherInput>;
};
export type SectionUpsertWithoutClassTeacherInput = {
    update: Prisma.XOR<Prisma.SectionUpdateWithoutClassTeacherInput, Prisma.SectionUncheckedUpdateWithoutClassTeacherInput>;
    create: Prisma.XOR<Prisma.SectionCreateWithoutClassTeacherInput, Prisma.SectionUncheckedCreateWithoutClassTeacherInput>;
    where?: Prisma.SectionWhereInput;
};
export type SectionUpdateToOneWithWhereWithoutClassTeacherInput = {
    where?: Prisma.SectionWhereInput;
    data: Prisma.XOR<Prisma.SectionUpdateWithoutClassTeacherInput, Prisma.SectionUncheckedUpdateWithoutClassTeacherInput>;
};
export type SectionUpdateWithoutClassTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.ClassUpdateOneRequiredWithoutSectionsNestedInput;
    students?: Prisma.StudentUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionUncheckedUpdateWithoutClassTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionCreateWithoutStudentsInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    class: Prisma.ClassCreateNestedOneWithoutSectionsInput;
    classTeacher?: Prisma.TeacherCreateNestedOneWithoutClassTeacherOfInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionUncheckedCreateWithoutStudentsInput = {
    id?: string;
    classId: string;
    name: string;
    capacity?: number | null;
    classTeacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionCreateOrConnectWithoutStudentsInput = {
    where: Prisma.SectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectionCreateWithoutStudentsInput, Prisma.SectionUncheckedCreateWithoutStudentsInput>;
};
export type SectionUpsertWithoutStudentsInput = {
    update: Prisma.XOR<Prisma.SectionUpdateWithoutStudentsInput, Prisma.SectionUncheckedUpdateWithoutStudentsInput>;
    create: Prisma.XOR<Prisma.SectionCreateWithoutStudentsInput, Prisma.SectionUncheckedCreateWithoutStudentsInput>;
    where?: Prisma.SectionWhereInput;
};
export type SectionUpdateToOneWithWhereWithoutStudentsInput = {
    where?: Prisma.SectionWhereInput;
    data: Prisma.XOR<Prisma.SectionUpdateWithoutStudentsInput, Prisma.SectionUncheckedUpdateWithoutStudentsInput>;
};
export type SectionUpdateWithoutStudentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.ClassUpdateOneRequiredWithoutSectionsNestedInput;
    classTeacher?: Prisma.TeacherUpdateOneWithoutClassTeacherOfNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionUncheckedUpdateWithoutStudentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionCreateWithoutAttendancesInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    class: Prisma.ClassCreateNestedOneWithoutSectionsInput;
    classTeacher?: Prisma.TeacherCreateNestedOneWithoutClassTeacherOfInput;
    students?: Prisma.StudentCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionUncheckedCreateWithoutAttendancesInput = {
    id?: string;
    classId: string;
    name: string;
    capacity?: number | null;
    classTeacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionCreateOrConnectWithoutAttendancesInput = {
    where: Prisma.SectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectionCreateWithoutAttendancesInput, Prisma.SectionUncheckedCreateWithoutAttendancesInput>;
};
export type SectionUpsertWithoutAttendancesInput = {
    update: Prisma.XOR<Prisma.SectionUpdateWithoutAttendancesInput, Prisma.SectionUncheckedUpdateWithoutAttendancesInput>;
    create: Prisma.XOR<Prisma.SectionCreateWithoutAttendancesInput, Prisma.SectionUncheckedCreateWithoutAttendancesInput>;
    where?: Prisma.SectionWhereInput;
};
export type SectionUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: Prisma.SectionWhereInput;
    data: Prisma.XOR<Prisma.SectionUpdateWithoutAttendancesInput, Prisma.SectionUncheckedUpdateWithoutAttendancesInput>;
};
export type SectionUpdateWithoutAttendancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.ClassUpdateOneRequiredWithoutSectionsNestedInput;
    classTeacher?: Prisma.TeacherUpdateOneWithoutClassTeacherOfNestedInput;
    students?: Prisma.StudentUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionUncheckedUpdateWithoutAttendancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionCreateWithoutTimetableEntriesInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    class: Prisma.ClassCreateNestedOneWithoutSectionsInput;
    classTeacher?: Prisma.TeacherCreateNestedOneWithoutClassTeacherOfInput;
    students?: Prisma.StudentCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionUncheckedCreateWithoutTimetableEntriesInput = {
    id?: string;
    classId: string;
    name: string;
    capacity?: number | null;
    classTeacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionCreateOrConnectWithoutTimetableEntriesInput = {
    where: Prisma.SectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectionCreateWithoutTimetableEntriesInput, Prisma.SectionUncheckedCreateWithoutTimetableEntriesInput>;
};
export type SectionUpsertWithoutTimetableEntriesInput = {
    update: Prisma.XOR<Prisma.SectionUpdateWithoutTimetableEntriesInput, Prisma.SectionUncheckedUpdateWithoutTimetableEntriesInput>;
    create: Prisma.XOR<Prisma.SectionCreateWithoutTimetableEntriesInput, Prisma.SectionUncheckedCreateWithoutTimetableEntriesInput>;
    where?: Prisma.SectionWhereInput;
};
export type SectionUpdateToOneWithWhereWithoutTimetableEntriesInput = {
    where?: Prisma.SectionWhereInput;
    data: Prisma.XOR<Prisma.SectionUpdateWithoutTimetableEntriesInput, Prisma.SectionUncheckedUpdateWithoutTimetableEntriesInput>;
};
export type SectionUpdateWithoutTimetableEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.ClassUpdateOneRequiredWithoutSectionsNestedInput;
    classTeacher?: Prisma.TeacherUpdateOneWithoutClassTeacherOfNestedInput;
    students?: Prisma.StudentUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionUncheckedUpdateWithoutTimetableEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionCreateWithoutAssignmentsInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    class: Prisma.ClassCreateNestedOneWithoutSectionsInput;
    classTeacher?: Prisma.TeacherCreateNestedOneWithoutClassTeacherOfInput;
    students?: Prisma.StudentCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionUncheckedCreateWithoutAssignmentsInput = {
    id?: string;
    classId: string;
    name: string;
    capacity?: number | null;
    classTeacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSectionInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedCreateNestedManyWithoutOfferedSectionInput;
};
export type SectionCreateOrConnectWithoutAssignmentsInput = {
    where: Prisma.SectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectionCreateWithoutAssignmentsInput, Prisma.SectionUncheckedCreateWithoutAssignmentsInput>;
};
export type SectionUpsertWithoutAssignmentsInput = {
    update: Prisma.XOR<Prisma.SectionUpdateWithoutAssignmentsInput, Prisma.SectionUncheckedUpdateWithoutAssignmentsInput>;
    create: Prisma.XOR<Prisma.SectionCreateWithoutAssignmentsInput, Prisma.SectionUncheckedCreateWithoutAssignmentsInput>;
    where?: Prisma.SectionWhereInput;
};
export type SectionUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: Prisma.SectionWhereInput;
    data: Prisma.XOR<Prisma.SectionUpdateWithoutAssignmentsInput, Prisma.SectionUncheckedUpdateWithoutAssignmentsInput>;
};
export type SectionUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.ClassUpdateOneRequiredWithoutSectionsNestedInput;
    classTeacher?: Prisma.TeacherUpdateOneWithoutClassTeacherOfNestedInput;
    students?: Prisma.StudentUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionUncheckedUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionCreateWithoutOfferedAdmissionsInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    class: Prisma.ClassCreateNestedOneWithoutSectionsInput;
    classTeacher?: Prisma.TeacherCreateNestedOneWithoutClassTeacherOfInput;
    students?: Prisma.StudentCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutSectionInput;
};
export type SectionUncheckedCreateWithoutOfferedAdmissionsInput = {
    id?: string;
    classId: string;
    name: string;
    capacity?: number | null;
    classTeacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutSectionInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedCreateNestedManyWithoutSectionInput;
    attendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutSectionInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutSectionInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutSectionInput;
};
export type SectionCreateOrConnectWithoutOfferedAdmissionsInput = {
    where: Prisma.SectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectionCreateWithoutOfferedAdmissionsInput, Prisma.SectionUncheckedCreateWithoutOfferedAdmissionsInput>;
};
export type SectionUpsertWithoutOfferedAdmissionsInput = {
    update: Prisma.XOR<Prisma.SectionUpdateWithoutOfferedAdmissionsInput, Prisma.SectionUncheckedUpdateWithoutOfferedAdmissionsInput>;
    create: Prisma.XOR<Prisma.SectionCreateWithoutOfferedAdmissionsInput, Prisma.SectionUncheckedCreateWithoutOfferedAdmissionsInput>;
    where?: Prisma.SectionWhereInput;
};
export type SectionUpdateToOneWithWhereWithoutOfferedAdmissionsInput = {
    where?: Prisma.SectionWhereInput;
    data: Prisma.XOR<Prisma.SectionUpdateWithoutOfferedAdmissionsInput, Prisma.SectionUncheckedUpdateWithoutOfferedAdmissionsInput>;
};
export type SectionUpdateWithoutOfferedAdmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.ClassUpdateOneRequiredWithoutSectionsNestedInput;
    classTeacher?: Prisma.TeacherUpdateOneWithoutClassTeacherOfNestedInput;
    students?: Prisma.StudentUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSectionNestedInput;
};
export type SectionUncheckedUpdateWithoutOfferedAdmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSectionNestedInput;
};
export type SectionCreateManyClassInput = {
    id?: string;
    name: string;
    capacity?: number | null;
    classTeacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectionUpdateWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classTeacher?: Prisma.TeacherUpdateOneWithoutClassTeacherOfNestedInput;
    students?: Prisma.StudentUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionUncheckedUpdateWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutSectionNestedInput;
    subjectTeachers?: Prisma.SubjectTeacherUncheckedUpdateManyWithoutSectionNestedInput;
    attendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutSectionNestedInput;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutSectionNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutSectionNestedInput;
    offeredAdmissions?: Prisma.AdmissionUncheckedUpdateManyWithoutOfferedSectionNestedInput;
};
export type SectionUncheckedUpdateManyWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    classTeacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectionCountOutputType = {
    students: number;
    subjectTeachers: number;
    attendances: number;
    timetableEntries: number;
    assignments: number;
    offeredAdmissions: number;
};
export type SectionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    students?: boolean | SectionCountOutputTypeCountStudentsArgs;
    subjectTeachers?: boolean | SectionCountOutputTypeCountSubjectTeachersArgs;
    attendances?: boolean | SectionCountOutputTypeCountAttendancesArgs;
    timetableEntries?: boolean | SectionCountOutputTypeCountTimetableEntriesArgs;
    assignments?: boolean | SectionCountOutputTypeCountAssignmentsArgs;
    offeredAdmissions?: boolean | SectionCountOutputTypeCountOfferedAdmissionsArgs;
};
export type SectionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionCountOutputTypeSelect<ExtArgs> | null;
};
export type SectionCountOutputTypeCountStudentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
};
export type SectionCountOutputTypeCountSubjectTeachersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectTeacherWhereInput;
};
export type SectionCountOutputTypeCountAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentAttendanceWhereInput;
};
export type SectionCountOutputTypeCountTimetableEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimetableEntryWhereInput;
};
export type SectionCountOutputTypeCountAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
};
export type SectionCountOutputTypeCountOfferedAdmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdmissionWhereInput;
};
export type SectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    classId?: boolean;
    name?: boolean;
    capacity?: boolean;
    classTeacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    classTeacher?: boolean | Prisma.Section$classTeacherArgs<ExtArgs>;
    students?: boolean | Prisma.Section$studentsArgs<ExtArgs>;
    subjectTeachers?: boolean | Prisma.Section$subjectTeachersArgs<ExtArgs>;
    attendances?: boolean | Prisma.Section$attendancesArgs<ExtArgs>;
    timetableEntries?: boolean | Prisma.Section$timetableEntriesArgs<ExtArgs>;
    assignments?: boolean | Prisma.Section$assignmentsArgs<ExtArgs>;
    offeredAdmissions?: boolean | Prisma.Section$offeredAdmissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.SectionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["section"]>;
export type SectionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    classId?: boolean;
    name?: boolean;
    capacity?: boolean;
    classTeacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    classTeacher?: boolean | Prisma.Section$classTeacherArgs<ExtArgs>;
}, ExtArgs["result"]["section"]>;
export type SectionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    classId?: boolean;
    name?: boolean;
    capacity?: boolean;
    classTeacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    classTeacher?: boolean | Prisma.Section$classTeacherArgs<ExtArgs>;
}, ExtArgs["result"]["section"]>;
export type SectionSelectScalar = {
    id?: boolean;
    classId?: boolean;
    name?: boolean;
    capacity?: boolean;
    classTeacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "classId" | "name" | "capacity" | "classTeacherId" | "createdAt" | "updatedAt", ExtArgs["result"]["section"]>;
export type SectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    classTeacher?: boolean | Prisma.Section$classTeacherArgs<ExtArgs>;
    students?: boolean | Prisma.Section$studentsArgs<ExtArgs>;
    subjectTeachers?: boolean | Prisma.Section$subjectTeachersArgs<ExtArgs>;
    attendances?: boolean | Prisma.Section$attendancesArgs<ExtArgs>;
    timetableEntries?: boolean | Prisma.Section$timetableEntriesArgs<ExtArgs>;
    assignments?: boolean | Prisma.Section$assignmentsArgs<ExtArgs>;
    offeredAdmissions?: boolean | Prisma.Section$offeredAdmissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.SectionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SectionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    classTeacher?: boolean | Prisma.Section$classTeacherArgs<ExtArgs>;
};
export type SectionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    classTeacher?: boolean | Prisma.Section$classTeacherArgs<ExtArgs>;
};
export type $SectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Section";
    objects: {
        class: Prisma.$ClassPayload<ExtArgs>;
        classTeacher: Prisma.$TeacherPayload<ExtArgs> | null;
        students: Prisma.$StudentPayload<ExtArgs>[];
        subjectTeachers: Prisma.$SubjectTeacherPayload<ExtArgs>[];
        attendances: Prisma.$StudentAttendancePayload<ExtArgs>[];
        timetableEntries: Prisma.$TimetableEntryPayload<ExtArgs>[];
        assignments: Prisma.$AssignmentPayload<ExtArgs>[];
        offeredAdmissions: Prisma.$AdmissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        classId: string;
        name: string;
        capacity: number | null;
        classTeacherId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["section"]>;
    composites: {};
};
export type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SectionPayload, S>;
export type SectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SectionCountAggregateInputType | true;
};
export interface SectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Section'];
        meta: {
            name: 'Section';
        };
    };
    findUnique<T extends SectionFindUniqueArgs>(args: Prisma.SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SectionFindFirstArgs>(args?: Prisma.SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SectionFindManyArgs>(args?: Prisma.SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SectionCreateArgs>(args: Prisma.SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SectionCreateManyArgs>(args?: Prisma.SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SectionDeleteArgs>(args: Prisma.SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SectionUpdateArgs>(args: Prisma.SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SectionUpdateManyArgs>(args: Prisma.SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SectionUpsertArgs>(args: Prisma.SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SectionCountArgs>(args?: Prisma.Subset<T, SectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SectionCountAggregateOutputType> : number>;
    aggregate<T extends SectionAggregateArgs>(args: Prisma.Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>;
    groupBy<T extends SectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SectionGroupByArgs['orderBy'];
    } : {
        orderBy?: SectionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SectionFieldRefs;
}
export interface Prisma__SectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    class<T extends Prisma.ClassDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClassDefaultArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    classTeacher<T extends Prisma.Section$classTeacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Section$classTeacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    students<T extends Prisma.Section$studentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Section$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    subjectTeachers<T extends Prisma.Section$subjectTeachersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Section$subjectTeachersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectTeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attendances<T extends Prisma.Section$attendancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Section$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    timetableEntries<T extends Prisma.Section$timetableEntriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Section$timetableEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assignments<T extends Prisma.Section$assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Section$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    offeredAdmissions<T extends Prisma.Section$offeredAdmissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Section$offeredAdmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SectionFieldRefs {
    readonly id: Prisma.FieldRef<"Section", 'String'>;
    readonly classId: Prisma.FieldRef<"Section", 'String'>;
    readonly name: Prisma.FieldRef<"Section", 'String'>;
    readonly capacity: Prisma.FieldRef<"Section", 'Int'>;
    readonly classTeacherId: Prisma.FieldRef<"Section", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Section", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Section", 'DateTime'>;
}
export type SectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionSelect<ExtArgs> | null;
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    include?: Prisma.SectionInclude<ExtArgs> | null;
    where: Prisma.SectionWhereUniqueInput;
};
export type SectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionSelect<ExtArgs> | null;
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    include?: Prisma.SectionInclude<ExtArgs> | null;
    where: Prisma.SectionWhereUniqueInput;
};
export type SectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionSelect<ExtArgs> | null;
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    include?: Prisma.SectionInclude<ExtArgs> | null;
    where?: Prisma.SectionWhereInput;
    orderBy?: Prisma.SectionOrderByWithRelationInput | Prisma.SectionOrderByWithRelationInput[];
    cursor?: Prisma.SectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SectionScalarFieldEnum | Prisma.SectionScalarFieldEnum[];
};
export type SectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionSelect<ExtArgs> | null;
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    include?: Prisma.SectionInclude<ExtArgs> | null;
    where?: Prisma.SectionWhereInput;
    orderBy?: Prisma.SectionOrderByWithRelationInput | Prisma.SectionOrderByWithRelationInput[];
    cursor?: Prisma.SectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SectionScalarFieldEnum | Prisma.SectionScalarFieldEnum[];
};
export type SectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionSelect<ExtArgs> | null;
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    include?: Prisma.SectionInclude<ExtArgs> | null;
    where?: Prisma.SectionWhereInput;
    orderBy?: Prisma.SectionOrderByWithRelationInput | Prisma.SectionOrderByWithRelationInput[];
    cursor?: Prisma.SectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SectionScalarFieldEnum | Prisma.SectionScalarFieldEnum[];
};
export type SectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionSelect<ExtArgs> | null;
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    include?: Prisma.SectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SectionCreateInput, Prisma.SectionUncheckedCreateInput>;
};
export type SectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SectionCreateManyInput | Prisma.SectionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SectionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    data: Prisma.SectionCreateManyInput | Prisma.SectionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SectionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionSelect<ExtArgs> | null;
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    include?: Prisma.SectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SectionUpdateInput, Prisma.SectionUncheckedUpdateInput>;
    where: Prisma.SectionWhereUniqueInput;
};
export type SectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SectionUpdateManyMutationInput, Prisma.SectionUncheckedUpdateManyInput>;
    where?: Prisma.SectionWhereInput;
    limit?: number;
};
export type SectionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SectionUpdateManyMutationInput, Prisma.SectionUncheckedUpdateManyInput>;
    where?: Prisma.SectionWhereInput;
    limit?: number;
    include?: Prisma.SectionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionSelect<ExtArgs> | null;
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    include?: Prisma.SectionInclude<ExtArgs> | null;
    where: Prisma.SectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectionCreateInput, Prisma.SectionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SectionUpdateInput, Prisma.SectionUncheckedUpdateInput>;
};
export type SectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionSelect<ExtArgs> | null;
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    include?: Prisma.SectionInclude<ExtArgs> | null;
    where: Prisma.SectionWhereUniqueInput;
};
export type SectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectionWhereInput;
    limit?: number;
};
export type Section$classTeacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
export type Section$studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type Section$subjectTeachersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Section$attendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.StudentAttendanceOmit<ExtArgs> | null;
    include?: Prisma.StudentAttendanceInclude<ExtArgs> | null;
    where?: Prisma.StudentAttendanceWhereInput;
    orderBy?: Prisma.StudentAttendanceOrderByWithRelationInput | Prisma.StudentAttendanceOrderByWithRelationInput[];
    cursor?: Prisma.StudentAttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentAttendanceScalarFieldEnum | Prisma.StudentAttendanceScalarFieldEnum[];
};
export type Section$timetableEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Section$assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Section$offeredAdmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionSelect<ExtArgs> | null;
    omit?: Prisma.AdmissionOmit<ExtArgs> | null;
    include?: Prisma.AdmissionInclude<ExtArgs> | null;
    where?: Prisma.AdmissionWhereInput;
    orderBy?: Prisma.AdmissionOrderByWithRelationInput | Prisma.AdmissionOrderByWithRelationInput[];
    cursor?: Prisma.AdmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdmissionScalarFieldEnum | Prisma.AdmissionScalarFieldEnum[];
};
export type SectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectionSelect<ExtArgs> | null;
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    include?: Prisma.SectionInclude<ExtArgs> | null;
};
