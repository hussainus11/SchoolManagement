import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentAttendanceModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentAttendancePayload>;
export type AggregateStudentAttendance = {
    _count: StudentAttendanceCountAggregateOutputType | null;
    _min: StudentAttendanceMinAggregateOutputType | null;
    _max: StudentAttendanceMaxAggregateOutputType | null;
};
export type StudentAttendanceMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    academicYearId: string | null;
    sectionId: string | null;
    studentId: string | null;
    date: Date | null;
    status: $Enums.AttendanceStatus | null;
    remarks: string | null;
    markedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentAttendanceMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    academicYearId: string | null;
    sectionId: string | null;
    studentId: string | null;
    date: Date | null;
    status: $Enums.AttendanceStatus | null;
    remarks: string | null;
    markedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentAttendanceCountAggregateOutputType = {
    id: number;
    schoolId: number;
    academicYearId: number;
    sectionId: number;
    studentId: number;
    date: number;
    status: number;
    remarks: number;
    markedById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StudentAttendanceMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    academicYearId?: true;
    sectionId?: true;
    studentId?: true;
    date?: true;
    status?: true;
    remarks?: true;
    markedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentAttendanceMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    academicYearId?: true;
    sectionId?: true;
    studentId?: true;
    date?: true;
    status?: true;
    remarks?: true;
    markedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentAttendanceCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    academicYearId?: true;
    sectionId?: true;
    studentId?: true;
    date?: true;
    status?: true;
    remarks?: true;
    markedById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StudentAttendanceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentAttendanceWhereInput;
    orderBy?: Prisma.StudentAttendanceOrderByWithRelationInput | Prisma.StudentAttendanceOrderByWithRelationInput[];
    cursor?: Prisma.StudentAttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentAttendanceCountAggregateInputType;
    _min?: StudentAttendanceMinAggregateInputType;
    _max?: StudentAttendanceMaxAggregateInputType;
};
export type GetStudentAttendanceAggregateType<T extends StudentAttendanceAggregateArgs> = {
    [P in keyof T & keyof AggregateStudentAttendance]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudentAttendance[P]> : Prisma.GetScalarType<T[P], AggregateStudentAttendance[P]>;
};
export type StudentAttendanceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentAttendanceWhereInput;
    orderBy?: Prisma.StudentAttendanceOrderByWithAggregationInput | Prisma.StudentAttendanceOrderByWithAggregationInput[];
    by: Prisma.StudentAttendanceScalarFieldEnum[] | Prisma.StudentAttendanceScalarFieldEnum;
    having?: Prisma.StudentAttendanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentAttendanceCountAggregateInputType | true;
    _min?: StudentAttendanceMinAggregateInputType;
    _max?: StudentAttendanceMaxAggregateInputType;
};
export type StudentAttendanceGroupByOutputType = {
    id: string;
    schoolId: string;
    academicYearId: string;
    sectionId: string;
    studentId: string;
    date: Date;
    status: $Enums.AttendanceStatus;
    remarks: string | null;
    markedById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: StudentAttendanceCountAggregateOutputType | null;
    _min: StudentAttendanceMinAggregateOutputType | null;
    _max: StudentAttendanceMaxAggregateOutputType | null;
};
export type GetStudentAttendanceGroupByPayload<T extends StudentAttendanceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentAttendanceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentAttendanceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentAttendanceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentAttendanceGroupByOutputType[P]>;
}>>;
export type StudentAttendanceWhereInput = {
    AND?: Prisma.StudentAttendanceWhereInput | Prisma.StudentAttendanceWhereInput[];
    OR?: Prisma.StudentAttendanceWhereInput[];
    NOT?: Prisma.StudentAttendanceWhereInput | Prisma.StudentAttendanceWhereInput[];
    id?: Prisma.StringFilter<"StudentAttendance"> | string;
    schoolId?: Prisma.StringFilter<"StudentAttendance"> | string;
    academicYearId?: Prisma.StringFilter<"StudentAttendance"> | string;
    sectionId?: Prisma.StringFilter<"StudentAttendance"> | string;
    studentId?: Prisma.StringFilter<"StudentAttendance"> | string;
    date?: Prisma.DateTimeFilter<"StudentAttendance"> | Date | string;
    status?: Prisma.EnumAttendanceStatusFilter<"StudentAttendance"> | $Enums.AttendanceStatus;
    remarks?: Prisma.StringNullableFilter<"StudentAttendance"> | string | null;
    markedById?: Prisma.StringFilter<"StudentAttendance"> | string;
    createdAt?: Prisma.DateTimeFilter<"StudentAttendance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StudentAttendance"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
    section?: Prisma.XOR<Prisma.SectionScalarRelationFilter, Prisma.SectionWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    markedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type StudentAttendanceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    markedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    academicYear?: Prisma.AcademicYearOrderByWithRelationInput;
    section?: Prisma.SectionOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
    markedBy?: Prisma.UserOrderByWithRelationInput;
};
export type StudentAttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    studentId_date?: Prisma.StudentAttendanceStudentIdDateCompoundUniqueInput;
    AND?: Prisma.StudentAttendanceWhereInput | Prisma.StudentAttendanceWhereInput[];
    OR?: Prisma.StudentAttendanceWhereInput[];
    NOT?: Prisma.StudentAttendanceWhereInput | Prisma.StudentAttendanceWhereInput[];
    schoolId?: Prisma.StringFilter<"StudentAttendance"> | string;
    academicYearId?: Prisma.StringFilter<"StudentAttendance"> | string;
    sectionId?: Prisma.StringFilter<"StudentAttendance"> | string;
    studentId?: Prisma.StringFilter<"StudentAttendance"> | string;
    date?: Prisma.DateTimeFilter<"StudentAttendance"> | Date | string;
    status?: Prisma.EnumAttendanceStatusFilter<"StudentAttendance"> | $Enums.AttendanceStatus;
    remarks?: Prisma.StringNullableFilter<"StudentAttendance"> | string | null;
    markedById?: Prisma.StringFilter<"StudentAttendance"> | string;
    createdAt?: Prisma.DateTimeFilter<"StudentAttendance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StudentAttendance"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
    section?: Prisma.XOR<Prisma.SectionScalarRelationFilter, Prisma.SectionWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    markedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "studentId_date">;
export type StudentAttendanceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    markedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StudentAttendanceCountOrderByAggregateInput;
    _max?: Prisma.StudentAttendanceMaxOrderByAggregateInput;
    _min?: Prisma.StudentAttendanceMinOrderByAggregateInput;
};
export type StudentAttendanceScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentAttendanceScalarWhereWithAggregatesInput | Prisma.StudentAttendanceScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentAttendanceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentAttendanceScalarWhereWithAggregatesInput | Prisma.StudentAttendanceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StudentAttendance"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"StudentAttendance"> | string;
    academicYearId?: Prisma.StringWithAggregatesFilter<"StudentAttendance"> | string;
    sectionId?: Prisma.StringWithAggregatesFilter<"StudentAttendance"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"StudentAttendance"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"StudentAttendance"> | Date | string;
    status?: Prisma.EnumAttendanceStatusWithAggregatesFilter<"StudentAttendance"> | $Enums.AttendanceStatus;
    remarks?: Prisma.StringNullableWithAggregatesFilter<"StudentAttendance"> | string | null;
    markedById?: Prisma.StringWithAggregatesFilter<"StudentAttendance"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StudentAttendance"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StudentAttendance"> | Date | string;
};
export type StudentAttendanceCreateInput = {
    id?: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStudentAttendancesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutStudentAttendancesInput;
    section: Prisma.SectionCreateNestedOneWithoutAttendancesInput;
    student: Prisma.StudentCreateNestedOneWithoutAttendancesInput;
    markedBy: Prisma.UserCreateNestedOneWithoutMarkedStudentAttendancesInput;
};
export type StudentAttendanceUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    sectionId: string;
    studentId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentAttendanceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentAttendancesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutStudentAttendancesNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutAttendancesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutAttendancesNestedInput;
    markedBy?: Prisma.UserUpdateOneRequiredWithoutMarkedStudentAttendancesNestedInput;
};
export type StudentAttendanceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceCreateManyInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    sectionId: string;
    studentId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentAttendanceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceListRelationFilter = {
    every?: Prisma.StudentAttendanceWhereInput;
    some?: Prisma.StudentAttendanceWhereInput;
    none?: Prisma.StudentAttendanceWhereInput;
};
export type StudentAttendanceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentAttendanceStudentIdDateCompoundUniqueInput = {
    studentId: string;
    date: Date | string;
};
export type StudentAttendanceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    markedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentAttendanceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    markedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentAttendanceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    markedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentAttendanceCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutSchoolInput, Prisma.StudentAttendanceUncheckedCreateWithoutSchoolInput> | Prisma.StudentAttendanceCreateWithoutSchoolInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutSchoolInput | Prisma.StudentAttendanceCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.StudentAttendanceCreateManySchoolInputEnvelope;
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
};
export type StudentAttendanceUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutSchoolInput, Prisma.StudentAttendanceUncheckedCreateWithoutSchoolInput> | Prisma.StudentAttendanceCreateWithoutSchoolInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutSchoolInput | Prisma.StudentAttendanceCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.StudentAttendanceCreateManySchoolInputEnvelope;
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
};
export type StudentAttendanceUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutSchoolInput, Prisma.StudentAttendanceUncheckedCreateWithoutSchoolInput> | Prisma.StudentAttendanceCreateWithoutSchoolInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutSchoolInput | Prisma.StudentAttendanceCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutSchoolInput | Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.StudentAttendanceCreateManySchoolInputEnvelope;
    set?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    disconnect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    delete?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    update?: Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutSchoolInput | Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.StudentAttendanceUpdateManyWithWhereWithoutSchoolInput | Prisma.StudentAttendanceUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.StudentAttendanceScalarWhereInput | Prisma.StudentAttendanceScalarWhereInput[];
};
export type StudentAttendanceUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutSchoolInput, Prisma.StudentAttendanceUncheckedCreateWithoutSchoolInput> | Prisma.StudentAttendanceCreateWithoutSchoolInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutSchoolInput | Prisma.StudentAttendanceCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutSchoolInput | Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.StudentAttendanceCreateManySchoolInputEnvelope;
    set?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    disconnect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    delete?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    update?: Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutSchoolInput | Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.StudentAttendanceUpdateManyWithWhereWithoutSchoolInput | Prisma.StudentAttendanceUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.StudentAttendanceScalarWhereInput | Prisma.StudentAttendanceScalarWhereInput[];
};
export type StudentAttendanceCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutAcademicYearInput, Prisma.StudentAttendanceUncheckedCreateWithoutAcademicYearInput> | Prisma.StudentAttendanceCreateWithoutAcademicYearInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutAcademicYearInput | Prisma.StudentAttendanceCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.StudentAttendanceCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
};
export type StudentAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutAcademicYearInput, Prisma.StudentAttendanceUncheckedCreateWithoutAcademicYearInput> | Prisma.StudentAttendanceCreateWithoutAcademicYearInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutAcademicYearInput | Prisma.StudentAttendanceCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.StudentAttendanceCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
};
export type StudentAttendanceUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutAcademicYearInput, Prisma.StudentAttendanceUncheckedCreateWithoutAcademicYearInput> | Prisma.StudentAttendanceCreateWithoutAcademicYearInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutAcademicYearInput | Prisma.StudentAttendanceCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.StudentAttendanceCreateManyAcademicYearInputEnvelope;
    set?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    disconnect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    delete?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    update?: Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.StudentAttendanceUpdateManyWithWhereWithoutAcademicYearInput | Prisma.StudentAttendanceUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.StudentAttendanceScalarWhereInput | Prisma.StudentAttendanceScalarWhereInput[];
};
export type StudentAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutAcademicYearInput, Prisma.StudentAttendanceUncheckedCreateWithoutAcademicYearInput> | Prisma.StudentAttendanceCreateWithoutAcademicYearInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutAcademicYearInput | Prisma.StudentAttendanceCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.StudentAttendanceCreateManyAcademicYearInputEnvelope;
    set?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    disconnect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    delete?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    update?: Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.StudentAttendanceUpdateManyWithWhereWithoutAcademicYearInput | Prisma.StudentAttendanceUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.StudentAttendanceScalarWhereInput | Prisma.StudentAttendanceScalarWhereInput[];
};
export type StudentAttendanceCreateNestedManyWithoutMarkedByInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutMarkedByInput, Prisma.StudentAttendanceUncheckedCreateWithoutMarkedByInput> | Prisma.StudentAttendanceCreateWithoutMarkedByInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutMarkedByInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutMarkedByInput | Prisma.StudentAttendanceCreateOrConnectWithoutMarkedByInput[];
    createMany?: Prisma.StudentAttendanceCreateManyMarkedByInputEnvelope;
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
};
export type StudentAttendanceUncheckedCreateNestedManyWithoutMarkedByInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutMarkedByInput, Prisma.StudentAttendanceUncheckedCreateWithoutMarkedByInput> | Prisma.StudentAttendanceCreateWithoutMarkedByInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutMarkedByInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutMarkedByInput | Prisma.StudentAttendanceCreateOrConnectWithoutMarkedByInput[];
    createMany?: Prisma.StudentAttendanceCreateManyMarkedByInputEnvelope;
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
};
export type StudentAttendanceUpdateManyWithoutMarkedByNestedInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutMarkedByInput, Prisma.StudentAttendanceUncheckedCreateWithoutMarkedByInput> | Prisma.StudentAttendanceCreateWithoutMarkedByInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutMarkedByInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutMarkedByInput | Prisma.StudentAttendanceCreateOrConnectWithoutMarkedByInput[];
    upsert?: Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutMarkedByInput | Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutMarkedByInput[];
    createMany?: Prisma.StudentAttendanceCreateManyMarkedByInputEnvelope;
    set?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    disconnect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    delete?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    update?: Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutMarkedByInput | Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutMarkedByInput[];
    updateMany?: Prisma.StudentAttendanceUpdateManyWithWhereWithoutMarkedByInput | Prisma.StudentAttendanceUpdateManyWithWhereWithoutMarkedByInput[];
    deleteMany?: Prisma.StudentAttendanceScalarWhereInput | Prisma.StudentAttendanceScalarWhereInput[];
};
export type StudentAttendanceUncheckedUpdateManyWithoutMarkedByNestedInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutMarkedByInput, Prisma.StudentAttendanceUncheckedCreateWithoutMarkedByInput> | Prisma.StudentAttendanceCreateWithoutMarkedByInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutMarkedByInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutMarkedByInput | Prisma.StudentAttendanceCreateOrConnectWithoutMarkedByInput[];
    upsert?: Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutMarkedByInput | Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutMarkedByInput[];
    createMany?: Prisma.StudentAttendanceCreateManyMarkedByInputEnvelope;
    set?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    disconnect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    delete?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    update?: Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutMarkedByInput | Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutMarkedByInput[];
    updateMany?: Prisma.StudentAttendanceUpdateManyWithWhereWithoutMarkedByInput | Prisma.StudentAttendanceUpdateManyWithWhereWithoutMarkedByInput[];
    deleteMany?: Prisma.StudentAttendanceScalarWhereInput | Prisma.StudentAttendanceScalarWhereInput[];
};
export type StudentAttendanceCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutSectionInput, Prisma.StudentAttendanceUncheckedCreateWithoutSectionInput> | Prisma.StudentAttendanceCreateWithoutSectionInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutSectionInput | Prisma.StudentAttendanceCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.StudentAttendanceCreateManySectionInputEnvelope;
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
};
export type StudentAttendanceUncheckedCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutSectionInput, Prisma.StudentAttendanceUncheckedCreateWithoutSectionInput> | Prisma.StudentAttendanceCreateWithoutSectionInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutSectionInput | Prisma.StudentAttendanceCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.StudentAttendanceCreateManySectionInputEnvelope;
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
};
export type StudentAttendanceUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutSectionInput, Prisma.StudentAttendanceUncheckedCreateWithoutSectionInput> | Prisma.StudentAttendanceCreateWithoutSectionInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutSectionInput | Prisma.StudentAttendanceCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutSectionInput | Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.StudentAttendanceCreateManySectionInputEnvelope;
    set?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    disconnect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    delete?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    update?: Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutSectionInput | Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.StudentAttendanceUpdateManyWithWhereWithoutSectionInput | Prisma.StudentAttendanceUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.StudentAttendanceScalarWhereInput | Prisma.StudentAttendanceScalarWhereInput[];
};
export type StudentAttendanceUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutSectionInput, Prisma.StudentAttendanceUncheckedCreateWithoutSectionInput> | Prisma.StudentAttendanceCreateWithoutSectionInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutSectionInput | Prisma.StudentAttendanceCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutSectionInput | Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.StudentAttendanceCreateManySectionInputEnvelope;
    set?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    disconnect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    delete?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    update?: Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutSectionInput | Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.StudentAttendanceUpdateManyWithWhereWithoutSectionInput | Prisma.StudentAttendanceUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.StudentAttendanceScalarWhereInput | Prisma.StudentAttendanceScalarWhereInput[];
};
export type StudentAttendanceCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutStudentInput, Prisma.StudentAttendanceUncheckedCreateWithoutStudentInput> | Prisma.StudentAttendanceCreateWithoutStudentInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutStudentInput | Prisma.StudentAttendanceCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentAttendanceCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
};
export type StudentAttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutStudentInput, Prisma.StudentAttendanceUncheckedCreateWithoutStudentInput> | Prisma.StudentAttendanceCreateWithoutStudentInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutStudentInput | Prisma.StudentAttendanceCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentAttendanceCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
};
export type StudentAttendanceUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutStudentInput, Prisma.StudentAttendanceUncheckedCreateWithoutStudentInput> | Prisma.StudentAttendanceCreateWithoutStudentInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutStudentInput | Prisma.StudentAttendanceCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentAttendanceCreateManyStudentInputEnvelope;
    set?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    disconnect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    delete?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    update?: Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentAttendanceUpdateManyWithWhereWithoutStudentInput | Prisma.StudentAttendanceUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentAttendanceScalarWhereInput | Prisma.StudentAttendanceScalarWhereInput[];
};
export type StudentAttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutStudentInput, Prisma.StudentAttendanceUncheckedCreateWithoutStudentInput> | Prisma.StudentAttendanceCreateWithoutStudentInput[] | Prisma.StudentAttendanceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentAttendanceCreateOrConnectWithoutStudentInput | Prisma.StudentAttendanceCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentAttendanceUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentAttendanceCreateManyStudentInputEnvelope;
    set?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    disconnect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    delete?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    connect?: Prisma.StudentAttendanceWhereUniqueInput | Prisma.StudentAttendanceWhereUniqueInput[];
    update?: Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentAttendanceUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentAttendanceUpdateManyWithWhereWithoutStudentInput | Prisma.StudentAttendanceUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentAttendanceScalarWhereInput | Prisma.StudentAttendanceScalarWhereInput[];
};
export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus;
};
export type StudentAttendanceCreateWithoutSchoolInput = {
    id?: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutStudentAttendancesInput;
    section: Prisma.SectionCreateNestedOneWithoutAttendancesInput;
    student: Prisma.StudentCreateNestedOneWithoutAttendancesInput;
    markedBy: Prisma.UserCreateNestedOneWithoutMarkedStudentAttendancesInput;
};
export type StudentAttendanceUncheckedCreateWithoutSchoolInput = {
    id?: string;
    academicYearId: string;
    sectionId: string;
    studentId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentAttendanceCreateOrConnectWithoutSchoolInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutSchoolInput, Prisma.StudentAttendanceUncheckedCreateWithoutSchoolInput>;
};
export type StudentAttendanceCreateManySchoolInputEnvelope = {
    data: Prisma.StudentAttendanceCreateManySchoolInput | Prisma.StudentAttendanceCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type StudentAttendanceUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentAttendanceUpdateWithoutSchoolInput, Prisma.StudentAttendanceUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutSchoolInput, Prisma.StudentAttendanceUncheckedCreateWithoutSchoolInput>;
};
export type StudentAttendanceUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateWithoutSchoolInput, Prisma.StudentAttendanceUncheckedUpdateWithoutSchoolInput>;
};
export type StudentAttendanceUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.StudentAttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateManyMutationInput, Prisma.StudentAttendanceUncheckedUpdateManyWithoutSchoolInput>;
};
export type StudentAttendanceScalarWhereInput = {
    AND?: Prisma.StudentAttendanceScalarWhereInput | Prisma.StudentAttendanceScalarWhereInput[];
    OR?: Prisma.StudentAttendanceScalarWhereInput[];
    NOT?: Prisma.StudentAttendanceScalarWhereInput | Prisma.StudentAttendanceScalarWhereInput[];
    id?: Prisma.StringFilter<"StudentAttendance"> | string;
    schoolId?: Prisma.StringFilter<"StudentAttendance"> | string;
    academicYearId?: Prisma.StringFilter<"StudentAttendance"> | string;
    sectionId?: Prisma.StringFilter<"StudentAttendance"> | string;
    studentId?: Prisma.StringFilter<"StudentAttendance"> | string;
    date?: Prisma.DateTimeFilter<"StudentAttendance"> | Date | string;
    status?: Prisma.EnumAttendanceStatusFilter<"StudentAttendance"> | $Enums.AttendanceStatus;
    remarks?: Prisma.StringNullableFilter<"StudentAttendance"> | string | null;
    markedById?: Prisma.StringFilter<"StudentAttendance"> | string;
    createdAt?: Prisma.DateTimeFilter<"StudentAttendance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StudentAttendance"> | Date | string;
};
export type StudentAttendanceCreateWithoutAcademicYearInput = {
    id?: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStudentAttendancesInput;
    section: Prisma.SectionCreateNestedOneWithoutAttendancesInput;
    student: Prisma.StudentCreateNestedOneWithoutAttendancesInput;
    markedBy: Prisma.UserCreateNestedOneWithoutMarkedStudentAttendancesInput;
};
export type StudentAttendanceUncheckedCreateWithoutAcademicYearInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    studentId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentAttendanceCreateOrConnectWithoutAcademicYearInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutAcademicYearInput, Prisma.StudentAttendanceUncheckedCreateWithoutAcademicYearInput>;
};
export type StudentAttendanceCreateManyAcademicYearInputEnvelope = {
    data: Prisma.StudentAttendanceCreateManyAcademicYearInput | Prisma.StudentAttendanceCreateManyAcademicYearInput[];
    skipDuplicates?: boolean;
};
export type StudentAttendanceUpsertWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentAttendanceUpdateWithoutAcademicYearInput, Prisma.StudentAttendanceUncheckedUpdateWithoutAcademicYearInput>;
    create: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutAcademicYearInput, Prisma.StudentAttendanceUncheckedCreateWithoutAcademicYearInput>;
};
export type StudentAttendanceUpdateWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateWithoutAcademicYearInput, Prisma.StudentAttendanceUncheckedUpdateWithoutAcademicYearInput>;
};
export type StudentAttendanceUpdateManyWithWhereWithoutAcademicYearInput = {
    where: Prisma.StudentAttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateManyMutationInput, Prisma.StudentAttendanceUncheckedUpdateManyWithoutAcademicYearInput>;
};
export type StudentAttendanceCreateWithoutMarkedByInput = {
    id?: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStudentAttendancesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutStudentAttendancesInput;
    section: Prisma.SectionCreateNestedOneWithoutAttendancesInput;
    student: Prisma.StudentCreateNestedOneWithoutAttendancesInput;
};
export type StudentAttendanceUncheckedCreateWithoutMarkedByInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    sectionId: string;
    studentId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentAttendanceCreateOrConnectWithoutMarkedByInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutMarkedByInput, Prisma.StudentAttendanceUncheckedCreateWithoutMarkedByInput>;
};
export type StudentAttendanceCreateManyMarkedByInputEnvelope = {
    data: Prisma.StudentAttendanceCreateManyMarkedByInput | Prisma.StudentAttendanceCreateManyMarkedByInput[];
    skipDuplicates?: boolean;
};
export type StudentAttendanceUpsertWithWhereUniqueWithoutMarkedByInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentAttendanceUpdateWithoutMarkedByInput, Prisma.StudentAttendanceUncheckedUpdateWithoutMarkedByInput>;
    create: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutMarkedByInput, Prisma.StudentAttendanceUncheckedCreateWithoutMarkedByInput>;
};
export type StudentAttendanceUpdateWithWhereUniqueWithoutMarkedByInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateWithoutMarkedByInput, Prisma.StudentAttendanceUncheckedUpdateWithoutMarkedByInput>;
};
export type StudentAttendanceUpdateManyWithWhereWithoutMarkedByInput = {
    where: Prisma.StudentAttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateManyMutationInput, Prisma.StudentAttendanceUncheckedUpdateManyWithoutMarkedByInput>;
};
export type StudentAttendanceCreateWithoutSectionInput = {
    id?: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStudentAttendancesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutStudentAttendancesInput;
    student: Prisma.StudentCreateNestedOneWithoutAttendancesInput;
    markedBy: Prisma.UserCreateNestedOneWithoutMarkedStudentAttendancesInput;
};
export type StudentAttendanceUncheckedCreateWithoutSectionInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    studentId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentAttendanceCreateOrConnectWithoutSectionInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutSectionInput, Prisma.StudentAttendanceUncheckedCreateWithoutSectionInput>;
};
export type StudentAttendanceCreateManySectionInputEnvelope = {
    data: Prisma.StudentAttendanceCreateManySectionInput | Prisma.StudentAttendanceCreateManySectionInput[];
    skipDuplicates?: boolean;
};
export type StudentAttendanceUpsertWithWhereUniqueWithoutSectionInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentAttendanceUpdateWithoutSectionInput, Prisma.StudentAttendanceUncheckedUpdateWithoutSectionInput>;
    create: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutSectionInput, Prisma.StudentAttendanceUncheckedCreateWithoutSectionInput>;
};
export type StudentAttendanceUpdateWithWhereUniqueWithoutSectionInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateWithoutSectionInput, Prisma.StudentAttendanceUncheckedUpdateWithoutSectionInput>;
};
export type StudentAttendanceUpdateManyWithWhereWithoutSectionInput = {
    where: Prisma.StudentAttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateManyMutationInput, Prisma.StudentAttendanceUncheckedUpdateManyWithoutSectionInput>;
};
export type StudentAttendanceCreateWithoutStudentInput = {
    id?: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStudentAttendancesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutStudentAttendancesInput;
    section: Prisma.SectionCreateNestedOneWithoutAttendancesInput;
    markedBy: Prisma.UserCreateNestedOneWithoutMarkedStudentAttendancesInput;
};
export type StudentAttendanceUncheckedCreateWithoutStudentInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    sectionId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentAttendanceCreateOrConnectWithoutStudentInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutStudentInput, Prisma.StudentAttendanceUncheckedCreateWithoutStudentInput>;
};
export type StudentAttendanceCreateManyStudentInputEnvelope = {
    data: Prisma.StudentAttendanceCreateManyStudentInput | Prisma.StudentAttendanceCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type StudentAttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentAttendanceUpdateWithoutStudentInput, Prisma.StudentAttendanceUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.StudentAttendanceCreateWithoutStudentInput, Prisma.StudentAttendanceUncheckedCreateWithoutStudentInput>;
};
export type StudentAttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentAttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateWithoutStudentInput, Prisma.StudentAttendanceUncheckedUpdateWithoutStudentInput>;
};
export type StudentAttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.StudentAttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateManyMutationInput, Prisma.StudentAttendanceUncheckedUpdateManyWithoutStudentInput>;
};
export type StudentAttendanceCreateManySchoolInput = {
    id?: string;
    academicYearId: string;
    sectionId: string;
    studentId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentAttendanceUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutStudentAttendancesNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutAttendancesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutAttendancesNestedInput;
    markedBy?: Prisma.UserUpdateOneRequiredWithoutMarkedStudentAttendancesNestedInput;
};
export type StudentAttendanceUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceCreateManyAcademicYearInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    studentId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentAttendanceUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentAttendancesNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutAttendancesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutAttendancesNestedInput;
    markedBy?: Prisma.UserUpdateOneRequiredWithoutMarkedStudentAttendancesNestedInput;
};
export type StudentAttendanceUncheckedUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceUncheckedUpdateManyWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceCreateManyMarkedByInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    sectionId: string;
    studentId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentAttendanceUpdateWithoutMarkedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentAttendancesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutStudentAttendancesNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutAttendancesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutAttendancesNestedInput;
};
export type StudentAttendanceUncheckedUpdateWithoutMarkedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceUncheckedUpdateManyWithoutMarkedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceCreateManySectionInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    studentId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentAttendanceUpdateWithoutSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentAttendancesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutStudentAttendancesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutAttendancesNestedInput;
    markedBy?: Prisma.UserUpdateOneRequiredWithoutMarkedStudentAttendancesNestedInput;
};
export type StudentAttendanceUncheckedUpdateWithoutSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceUncheckedUpdateManyWithoutSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceCreateManyStudentInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    sectionId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentAttendanceUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentAttendancesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutStudentAttendancesNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutAttendancesNestedInput;
    markedBy?: Prisma.UserUpdateOneRequiredWithoutMarkedStudentAttendancesNestedInput;
};
export type StudentAttendanceUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentAttendanceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    academicYearId?: boolean;
    sectionId?: boolean;
    studentId?: boolean;
    date?: boolean;
    status?: boolean;
    remarks?: boolean;
    markedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    markedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentAttendance"]>;
export type StudentAttendanceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    academicYearId?: boolean;
    sectionId?: boolean;
    studentId?: boolean;
    date?: boolean;
    status?: boolean;
    remarks?: boolean;
    markedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    markedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentAttendance"]>;
export type StudentAttendanceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    academicYearId?: boolean;
    sectionId?: boolean;
    studentId?: boolean;
    date?: boolean;
    status?: boolean;
    remarks?: boolean;
    markedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    markedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentAttendance"]>;
export type StudentAttendanceSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    academicYearId?: boolean;
    sectionId?: boolean;
    studentId?: boolean;
    date?: boolean;
    status?: boolean;
    remarks?: boolean;
    markedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StudentAttendanceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "academicYearId" | "sectionId" | "studentId" | "date" | "status" | "remarks" | "markedById" | "createdAt" | "updatedAt", ExtArgs["result"]["studentAttendance"]>;
export type StudentAttendanceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    markedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type StudentAttendanceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    markedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type StudentAttendanceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    markedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $StudentAttendancePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StudentAttendance";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        academicYear: Prisma.$AcademicYearPayload<ExtArgs>;
        section: Prisma.$SectionPayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs>;
        markedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        academicYearId: string;
        sectionId: string;
        studentId: string;
        date: Date;
        status: $Enums.AttendanceStatus;
        remarks: string | null;
        markedById: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["studentAttendance"]>;
    composites: {};
};
export type StudentAttendanceGetPayload<S extends boolean | null | undefined | StudentAttendanceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload, S>;
export type StudentAttendanceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentAttendanceCountAggregateInputType | true;
};
export interface StudentAttendanceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StudentAttendance'];
        meta: {
            name: 'StudentAttendance';
        };
    };
    findUnique<T extends StudentAttendanceFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentAttendanceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentAttendanceClient<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentAttendanceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentAttendanceClient<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentAttendanceFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentAttendanceFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentAttendanceClient<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentAttendanceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentAttendanceClient<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentAttendanceFindManyArgs>(args?: Prisma.SelectSubset<T, StudentAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentAttendanceCreateArgs>(args: Prisma.SelectSubset<T, StudentAttendanceCreateArgs<ExtArgs>>): Prisma.Prisma__StudentAttendanceClient<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentAttendanceCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentAttendanceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentAttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentAttendanceDeleteArgs>(args: Prisma.SelectSubset<T, StudentAttendanceDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentAttendanceClient<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentAttendanceUpdateArgs>(args: Prisma.SelectSubset<T, StudentAttendanceUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentAttendanceClient<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentAttendanceDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentAttendanceUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentAttendanceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentAttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentAttendanceUpsertArgs>(args: Prisma.SelectSubset<T, StudentAttendanceUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentAttendanceClient<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentAttendanceCountArgs>(args?: Prisma.Subset<T, StudentAttendanceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentAttendanceCountAggregateOutputType> : number>;
    aggregate<T extends StudentAttendanceAggregateArgs>(args: Prisma.Subset<T, StudentAttendanceAggregateArgs>): Prisma.PrismaPromise<GetStudentAttendanceAggregateType<T>>;
    groupBy<T extends StudentAttendanceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentAttendanceGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentAttendanceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentAttendanceFieldRefs;
}
export interface Prisma__StudentAttendanceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    academicYear<T extends Prisma.AcademicYearDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYearDefaultArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    section<T extends Prisma.SectionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SectionDefaultArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    markedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentAttendanceFieldRefs {
    readonly id: Prisma.FieldRef<"StudentAttendance", 'String'>;
    readonly schoolId: Prisma.FieldRef<"StudentAttendance", 'String'>;
    readonly academicYearId: Prisma.FieldRef<"StudentAttendance", 'String'>;
    readonly sectionId: Prisma.FieldRef<"StudentAttendance", 'String'>;
    readonly studentId: Prisma.FieldRef<"StudentAttendance", 'String'>;
    readonly date: Prisma.FieldRef<"StudentAttendance", 'DateTime'>;
    readonly status: Prisma.FieldRef<"StudentAttendance", 'AttendanceStatus'>;
    readonly remarks: Prisma.FieldRef<"StudentAttendance", 'String'>;
    readonly markedById: Prisma.FieldRef<"StudentAttendance", 'String'>;
    readonly createdAt: Prisma.FieldRef<"StudentAttendance", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StudentAttendance", 'DateTime'>;
}
export type StudentAttendanceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.StudentAttendanceOmit<ExtArgs> | null;
    include?: Prisma.StudentAttendanceInclude<ExtArgs> | null;
    where: Prisma.StudentAttendanceWhereUniqueInput;
};
export type StudentAttendanceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.StudentAttendanceOmit<ExtArgs> | null;
    include?: Prisma.StudentAttendanceInclude<ExtArgs> | null;
    where: Prisma.StudentAttendanceWhereUniqueInput;
};
export type StudentAttendanceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentAttendanceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentAttendanceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentAttendanceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.StudentAttendanceOmit<ExtArgs> | null;
    include?: Prisma.StudentAttendanceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentAttendanceCreateInput, Prisma.StudentAttendanceUncheckedCreateInput>;
};
export type StudentAttendanceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentAttendanceCreateManyInput | Prisma.StudentAttendanceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentAttendanceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentAttendanceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentAttendanceOmit<ExtArgs> | null;
    data: Prisma.StudentAttendanceCreateManyInput | Prisma.StudentAttendanceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentAttendanceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentAttendanceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.StudentAttendanceOmit<ExtArgs> | null;
    include?: Prisma.StudentAttendanceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateInput, Prisma.StudentAttendanceUncheckedUpdateInput>;
    where: Prisma.StudentAttendanceWhereUniqueInput;
};
export type StudentAttendanceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateManyMutationInput, Prisma.StudentAttendanceUncheckedUpdateManyInput>;
    where?: Prisma.StudentAttendanceWhereInput;
    limit?: number;
};
export type StudentAttendanceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentAttendanceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentAttendanceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentAttendanceUpdateManyMutationInput, Prisma.StudentAttendanceUncheckedUpdateManyInput>;
    where?: Prisma.StudentAttendanceWhereInput;
    limit?: number;
    include?: Prisma.StudentAttendanceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentAttendanceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.StudentAttendanceOmit<ExtArgs> | null;
    include?: Prisma.StudentAttendanceInclude<ExtArgs> | null;
    where: Prisma.StudentAttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentAttendanceCreateInput, Prisma.StudentAttendanceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentAttendanceUpdateInput, Prisma.StudentAttendanceUncheckedUpdateInput>;
};
export type StudentAttendanceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.StudentAttendanceOmit<ExtArgs> | null;
    include?: Prisma.StudentAttendanceInclude<ExtArgs> | null;
    where: Prisma.StudentAttendanceWhereUniqueInput;
};
export type StudentAttendanceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentAttendanceWhereInput;
    limit?: number;
};
export type StudentAttendanceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.StudentAttendanceOmit<ExtArgs> | null;
    include?: Prisma.StudentAttendanceInclude<ExtArgs> | null;
};
