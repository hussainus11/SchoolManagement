import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TeacherAttendanceModel = runtime.Types.Result.DefaultSelection<Prisma.$TeacherAttendancePayload>;
export type AggregateTeacherAttendance = {
    _count: TeacherAttendanceCountAggregateOutputType | null;
    _min: TeacherAttendanceMinAggregateOutputType | null;
    _max: TeacherAttendanceMaxAggregateOutputType | null;
};
export type TeacherAttendanceMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    academicYearId: string | null;
    teacherId: string | null;
    date: Date | null;
    status: $Enums.AttendanceStatus | null;
    remarks: string | null;
    markedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TeacherAttendanceMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    academicYearId: string | null;
    teacherId: string | null;
    date: Date | null;
    status: $Enums.AttendanceStatus | null;
    remarks: string | null;
    markedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TeacherAttendanceCountAggregateOutputType = {
    id: number;
    schoolId: number;
    academicYearId: number;
    teacherId: number;
    date: number;
    status: number;
    remarks: number;
    markedById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TeacherAttendanceMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    academicYearId?: true;
    teacherId?: true;
    date?: true;
    status?: true;
    remarks?: true;
    markedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TeacherAttendanceMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    academicYearId?: true;
    teacherId?: true;
    date?: true;
    status?: true;
    remarks?: true;
    markedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TeacherAttendanceCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    academicYearId?: true;
    teacherId?: true;
    date?: true;
    status?: true;
    remarks?: true;
    markedById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TeacherAttendanceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherAttendanceWhereInput;
    orderBy?: Prisma.TeacherAttendanceOrderByWithRelationInput | Prisma.TeacherAttendanceOrderByWithRelationInput[];
    cursor?: Prisma.TeacherAttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TeacherAttendanceCountAggregateInputType;
    _min?: TeacherAttendanceMinAggregateInputType;
    _max?: TeacherAttendanceMaxAggregateInputType;
};
export type GetTeacherAttendanceAggregateType<T extends TeacherAttendanceAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacherAttendance]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeacherAttendance[P]> : Prisma.GetScalarType<T[P], AggregateTeacherAttendance[P]>;
};
export type TeacherAttendanceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherAttendanceWhereInput;
    orderBy?: Prisma.TeacherAttendanceOrderByWithAggregationInput | Prisma.TeacherAttendanceOrderByWithAggregationInput[];
    by: Prisma.TeacherAttendanceScalarFieldEnum[] | Prisma.TeacherAttendanceScalarFieldEnum;
    having?: Prisma.TeacherAttendanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeacherAttendanceCountAggregateInputType | true;
    _min?: TeacherAttendanceMinAggregateInputType;
    _max?: TeacherAttendanceMaxAggregateInputType;
};
export type TeacherAttendanceGroupByOutputType = {
    id: string;
    schoolId: string;
    academicYearId: string;
    teacherId: string;
    date: Date;
    status: $Enums.AttendanceStatus;
    remarks: string | null;
    markedById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: TeacherAttendanceCountAggregateOutputType | null;
    _min: TeacherAttendanceMinAggregateOutputType | null;
    _max: TeacherAttendanceMaxAggregateOutputType | null;
};
export type GetTeacherAttendanceGroupByPayload<T extends TeacherAttendanceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TeacherAttendanceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TeacherAttendanceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TeacherAttendanceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TeacherAttendanceGroupByOutputType[P]>;
}>>;
export type TeacherAttendanceWhereInput = {
    AND?: Prisma.TeacherAttendanceWhereInput | Prisma.TeacherAttendanceWhereInput[];
    OR?: Prisma.TeacherAttendanceWhereInput[];
    NOT?: Prisma.TeacherAttendanceWhereInput | Prisma.TeacherAttendanceWhereInput[];
    id?: Prisma.StringFilter<"TeacherAttendance"> | string;
    schoolId?: Prisma.StringFilter<"TeacherAttendance"> | string;
    academicYearId?: Prisma.StringFilter<"TeacherAttendance"> | string;
    teacherId?: Prisma.StringFilter<"TeacherAttendance"> | string;
    date?: Prisma.DateTimeFilter<"TeacherAttendance"> | Date | string;
    status?: Prisma.EnumAttendanceStatusFilter<"TeacherAttendance"> | $Enums.AttendanceStatus;
    remarks?: Prisma.StringNullableFilter<"TeacherAttendance"> | string | null;
    markedById?: Prisma.StringFilter<"TeacherAttendance"> | string;
    createdAt?: Prisma.DateTimeFilter<"TeacherAttendance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TeacherAttendance"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
    markedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TeacherAttendanceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    markedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    academicYear?: Prisma.AcademicYearOrderByWithRelationInput;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    markedBy?: Prisma.UserOrderByWithRelationInput;
};
export type TeacherAttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    teacherId_date?: Prisma.TeacherAttendanceTeacherIdDateCompoundUniqueInput;
    AND?: Prisma.TeacherAttendanceWhereInput | Prisma.TeacherAttendanceWhereInput[];
    OR?: Prisma.TeacherAttendanceWhereInput[];
    NOT?: Prisma.TeacherAttendanceWhereInput | Prisma.TeacherAttendanceWhereInput[];
    schoolId?: Prisma.StringFilter<"TeacherAttendance"> | string;
    academicYearId?: Prisma.StringFilter<"TeacherAttendance"> | string;
    teacherId?: Prisma.StringFilter<"TeacherAttendance"> | string;
    date?: Prisma.DateTimeFilter<"TeacherAttendance"> | Date | string;
    status?: Prisma.EnumAttendanceStatusFilter<"TeacherAttendance"> | $Enums.AttendanceStatus;
    remarks?: Prisma.StringNullableFilter<"TeacherAttendance"> | string | null;
    markedById?: Prisma.StringFilter<"TeacherAttendance"> | string;
    createdAt?: Prisma.DateTimeFilter<"TeacherAttendance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TeacherAttendance"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
    markedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "teacherId_date">;
export type TeacherAttendanceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    markedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TeacherAttendanceCountOrderByAggregateInput;
    _max?: Prisma.TeacherAttendanceMaxOrderByAggregateInput;
    _min?: Prisma.TeacherAttendanceMinOrderByAggregateInput;
};
export type TeacherAttendanceScalarWhereWithAggregatesInput = {
    AND?: Prisma.TeacherAttendanceScalarWhereWithAggregatesInput | Prisma.TeacherAttendanceScalarWhereWithAggregatesInput[];
    OR?: Prisma.TeacherAttendanceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TeacherAttendanceScalarWhereWithAggregatesInput | Prisma.TeacherAttendanceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TeacherAttendance"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"TeacherAttendance"> | string;
    academicYearId?: Prisma.StringWithAggregatesFilter<"TeacherAttendance"> | string;
    teacherId?: Prisma.StringWithAggregatesFilter<"TeacherAttendance"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"TeacherAttendance"> | Date | string;
    status?: Prisma.EnumAttendanceStatusWithAggregatesFilter<"TeacherAttendance"> | $Enums.AttendanceStatus;
    remarks?: Prisma.StringNullableWithAggregatesFilter<"TeacherAttendance"> | string | null;
    markedById?: Prisma.StringWithAggregatesFilter<"TeacherAttendance"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TeacherAttendance"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TeacherAttendance"> | Date | string;
};
export type TeacherAttendanceCreateInput = {
    id?: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutTeacherAttendancesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutTeacherAttendancesInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutAttendancesInput;
    markedBy: Prisma.UserCreateNestedOneWithoutMarkedTeacherAttendancesInput;
};
export type TeacherAttendanceUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    teacherId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherAttendanceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutTeacherAttendancesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutTeacherAttendancesNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutAttendancesNestedInput;
    markedBy?: Prisma.UserUpdateOneRequiredWithoutMarkedTeacherAttendancesNestedInput;
};
export type TeacherAttendanceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherAttendanceCreateManyInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    teacherId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherAttendanceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherAttendanceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherAttendanceListRelationFilter = {
    every?: Prisma.TeacherAttendanceWhereInput;
    some?: Prisma.TeacherAttendanceWhereInput;
    none?: Prisma.TeacherAttendanceWhereInput;
};
export type TeacherAttendanceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TeacherAttendanceTeacherIdDateCompoundUniqueInput = {
    teacherId: string;
    date: Date | string;
};
export type TeacherAttendanceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    markedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TeacherAttendanceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    markedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TeacherAttendanceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    markedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TeacherAttendanceCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutSchoolInput, Prisma.TeacherAttendanceUncheckedCreateWithoutSchoolInput> | Prisma.TeacherAttendanceCreateWithoutSchoolInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutSchoolInput | Prisma.TeacherAttendanceCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.TeacherAttendanceCreateManySchoolInputEnvelope;
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
};
export type TeacherAttendanceUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutSchoolInput, Prisma.TeacherAttendanceUncheckedCreateWithoutSchoolInput> | Prisma.TeacherAttendanceCreateWithoutSchoolInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutSchoolInput | Prisma.TeacherAttendanceCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.TeacherAttendanceCreateManySchoolInputEnvelope;
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
};
export type TeacherAttendanceUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutSchoolInput, Prisma.TeacherAttendanceUncheckedCreateWithoutSchoolInput> | Prisma.TeacherAttendanceCreateWithoutSchoolInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutSchoolInput | Prisma.TeacherAttendanceCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutSchoolInput | Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.TeacherAttendanceCreateManySchoolInputEnvelope;
    set?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    disconnect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    delete?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    update?: Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutSchoolInput | Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.TeacherAttendanceUpdateManyWithWhereWithoutSchoolInput | Prisma.TeacherAttendanceUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.TeacherAttendanceScalarWhereInput | Prisma.TeacherAttendanceScalarWhereInput[];
};
export type TeacherAttendanceUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutSchoolInput, Prisma.TeacherAttendanceUncheckedCreateWithoutSchoolInput> | Prisma.TeacherAttendanceCreateWithoutSchoolInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutSchoolInput | Prisma.TeacherAttendanceCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutSchoolInput | Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.TeacherAttendanceCreateManySchoolInputEnvelope;
    set?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    disconnect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    delete?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    update?: Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutSchoolInput | Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.TeacherAttendanceUpdateManyWithWhereWithoutSchoolInput | Prisma.TeacherAttendanceUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.TeacherAttendanceScalarWhereInput | Prisma.TeacherAttendanceScalarWhereInput[];
};
export type TeacherAttendanceCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutAcademicYearInput, Prisma.TeacherAttendanceUncheckedCreateWithoutAcademicYearInput> | Prisma.TeacherAttendanceCreateWithoutAcademicYearInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutAcademicYearInput | Prisma.TeacherAttendanceCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.TeacherAttendanceCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
};
export type TeacherAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutAcademicYearInput, Prisma.TeacherAttendanceUncheckedCreateWithoutAcademicYearInput> | Prisma.TeacherAttendanceCreateWithoutAcademicYearInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutAcademicYearInput | Prisma.TeacherAttendanceCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.TeacherAttendanceCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
};
export type TeacherAttendanceUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutAcademicYearInput, Prisma.TeacherAttendanceUncheckedCreateWithoutAcademicYearInput> | Prisma.TeacherAttendanceCreateWithoutAcademicYearInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutAcademicYearInput | Prisma.TeacherAttendanceCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.TeacherAttendanceCreateManyAcademicYearInputEnvelope;
    set?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    disconnect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    delete?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    update?: Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.TeacherAttendanceUpdateManyWithWhereWithoutAcademicYearInput | Prisma.TeacherAttendanceUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.TeacherAttendanceScalarWhereInput | Prisma.TeacherAttendanceScalarWhereInput[];
};
export type TeacherAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutAcademicYearInput, Prisma.TeacherAttendanceUncheckedCreateWithoutAcademicYearInput> | Prisma.TeacherAttendanceCreateWithoutAcademicYearInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutAcademicYearInput | Prisma.TeacherAttendanceCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.TeacherAttendanceCreateManyAcademicYearInputEnvelope;
    set?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    disconnect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    delete?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    update?: Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.TeacherAttendanceUpdateManyWithWhereWithoutAcademicYearInput | Prisma.TeacherAttendanceUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.TeacherAttendanceScalarWhereInput | Prisma.TeacherAttendanceScalarWhereInput[];
};
export type TeacherAttendanceCreateNestedManyWithoutMarkedByInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutMarkedByInput, Prisma.TeacherAttendanceUncheckedCreateWithoutMarkedByInput> | Prisma.TeacherAttendanceCreateWithoutMarkedByInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutMarkedByInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutMarkedByInput | Prisma.TeacherAttendanceCreateOrConnectWithoutMarkedByInput[];
    createMany?: Prisma.TeacherAttendanceCreateManyMarkedByInputEnvelope;
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
};
export type TeacherAttendanceUncheckedCreateNestedManyWithoutMarkedByInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutMarkedByInput, Prisma.TeacherAttendanceUncheckedCreateWithoutMarkedByInput> | Prisma.TeacherAttendanceCreateWithoutMarkedByInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutMarkedByInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutMarkedByInput | Prisma.TeacherAttendanceCreateOrConnectWithoutMarkedByInput[];
    createMany?: Prisma.TeacherAttendanceCreateManyMarkedByInputEnvelope;
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
};
export type TeacherAttendanceUpdateManyWithoutMarkedByNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutMarkedByInput, Prisma.TeacherAttendanceUncheckedCreateWithoutMarkedByInput> | Prisma.TeacherAttendanceCreateWithoutMarkedByInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutMarkedByInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutMarkedByInput | Prisma.TeacherAttendanceCreateOrConnectWithoutMarkedByInput[];
    upsert?: Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutMarkedByInput | Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutMarkedByInput[];
    createMany?: Prisma.TeacherAttendanceCreateManyMarkedByInputEnvelope;
    set?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    disconnect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    delete?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    update?: Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutMarkedByInput | Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutMarkedByInput[];
    updateMany?: Prisma.TeacherAttendanceUpdateManyWithWhereWithoutMarkedByInput | Prisma.TeacherAttendanceUpdateManyWithWhereWithoutMarkedByInput[];
    deleteMany?: Prisma.TeacherAttendanceScalarWhereInput | Prisma.TeacherAttendanceScalarWhereInput[];
};
export type TeacherAttendanceUncheckedUpdateManyWithoutMarkedByNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutMarkedByInput, Prisma.TeacherAttendanceUncheckedCreateWithoutMarkedByInput> | Prisma.TeacherAttendanceCreateWithoutMarkedByInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutMarkedByInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutMarkedByInput | Prisma.TeacherAttendanceCreateOrConnectWithoutMarkedByInput[];
    upsert?: Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutMarkedByInput | Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutMarkedByInput[];
    createMany?: Prisma.TeacherAttendanceCreateManyMarkedByInputEnvelope;
    set?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    disconnect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    delete?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    update?: Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutMarkedByInput | Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutMarkedByInput[];
    updateMany?: Prisma.TeacherAttendanceUpdateManyWithWhereWithoutMarkedByInput | Prisma.TeacherAttendanceUpdateManyWithWhereWithoutMarkedByInput[];
    deleteMany?: Prisma.TeacherAttendanceScalarWhereInput | Prisma.TeacherAttendanceScalarWhereInput[];
};
export type TeacherAttendanceCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutTeacherInput, Prisma.TeacherAttendanceUncheckedCreateWithoutTeacherInput> | Prisma.TeacherAttendanceCreateWithoutTeacherInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutTeacherInput | Prisma.TeacherAttendanceCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.TeacherAttendanceCreateManyTeacherInputEnvelope;
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
};
export type TeacherAttendanceUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutTeacherInput, Prisma.TeacherAttendanceUncheckedCreateWithoutTeacherInput> | Prisma.TeacherAttendanceCreateWithoutTeacherInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutTeacherInput | Prisma.TeacherAttendanceCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.TeacherAttendanceCreateManyTeacherInputEnvelope;
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
};
export type TeacherAttendanceUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutTeacherInput, Prisma.TeacherAttendanceUncheckedCreateWithoutTeacherInput> | Prisma.TeacherAttendanceCreateWithoutTeacherInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutTeacherInput | Prisma.TeacherAttendanceCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutTeacherInput | Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.TeacherAttendanceCreateManyTeacherInputEnvelope;
    set?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    disconnect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    delete?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    update?: Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutTeacherInput | Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.TeacherAttendanceUpdateManyWithWhereWithoutTeacherInput | Prisma.TeacherAttendanceUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.TeacherAttendanceScalarWhereInput | Prisma.TeacherAttendanceScalarWhereInput[];
};
export type TeacherAttendanceUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutTeacherInput, Prisma.TeacherAttendanceUncheckedCreateWithoutTeacherInput> | Prisma.TeacherAttendanceCreateWithoutTeacherInput[] | Prisma.TeacherAttendanceUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherAttendanceCreateOrConnectWithoutTeacherInput | Prisma.TeacherAttendanceCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutTeacherInput | Prisma.TeacherAttendanceUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.TeacherAttendanceCreateManyTeacherInputEnvelope;
    set?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    disconnect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    delete?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    connect?: Prisma.TeacherAttendanceWhereUniqueInput | Prisma.TeacherAttendanceWhereUniqueInput[];
    update?: Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutTeacherInput | Prisma.TeacherAttendanceUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.TeacherAttendanceUpdateManyWithWhereWithoutTeacherInput | Prisma.TeacherAttendanceUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.TeacherAttendanceScalarWhereInput | Prisma.TeacherAttendanceScalarWhereInput[];
};
export type TeacherAttendanceCreateWithoutSchoolInput = {
    id?: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutTeacherAttendancesInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutAttendancesInput;
    markedBy: Prisma.UserCreateNestedOneWithoutMarkedTeacherAttendancesInput;
};
export type TeacherAttendanceUncheckedCreateWithoutSchoolInput = {
    id?: string;
    academicYearId: string;
    teacherId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherAttendanceCreateOrConnectWithoutSchoolInput = {
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutSchoolInput, Prisma.TeacherAttendanceUncheckedCreateWithoutSchoolInput>;
};
export type TeacherAttendanceCreateManySchoolInputEnvelope = {
    data: Prisma.TeacherAttendanceCreateManySchoolInput | Prisma.TeacherAttendanceCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type TeacherAttendanceUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeacherAttendanceUpdateWithoutSchoolInput, Prisma.TeacherAttendanceUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutSchoolInput, Prisma.TeacherAttendanceUncheckedCreateWithoutSchoolInput>;
};
export type TeacherAttendanceUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeacherAttendanceUpdateWithoutSchoolInput, Prisma.TeacherAttendanceUncheckedUpdateWithoutSchoolInput>;
};
export type TeacherAttendanceUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.TeacherAttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.TeacherAttendanceUpdateManyMutationInput, Prisma.TeacherAttendanceUncheckedUpdateManyWithoutSchoolInput>;
};
export type TeacherAttendanceScalarWhereInput = {
    AND?: Prisma.TeacherAttendanceScalarWhereInput | Prisma.TeacherAttendanceScalarWhereInput[];
    OR?: Prisma.TeacherAttendanceScalarWhereInput[];
    NOT?: Prisma.TeacherAttendanceScalarWhereInput | Prisma.TeacherAttendanceScalarWhereInput[];
    id?: Prisma.StringFilter<"TeacherAttendance"> | string;
    schoolId?: Prisma.StringFilter<"TeacherAttendance"> | string;
    academicYearId?: Prisma.StringFilter<"TeacherAttendance"> | string;
    teacherId?: Prisma.StringFilter<"TeacherAttendance"> | string;
    date?: Prisma.DateTimeFilter<"TeacherAttendance"> | Date | string;
    status?: Prisma.EnumAttendanceStatusFilter<"TeacherAttendance"> | $Enums.AttendanceStatus;
    remarks?: Prisma.StringNullableFilter<"TeacherAttendance"> | string | null;
    markedById?: Prisma.StringFilter<"TeacherAttendance"> | string;
    createdAt?: Prisma.DateTimeFilter<"TeacherAttendance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TeacherAttendance"> | Date | string;
};
export type TeacherAttendanceCreateWithoutAcademicYearInput = {
    id?: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutTeacherAttendancesInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutAttendancesInput;
    markedBy: Prisma.UserCreateNestedOneWithoutMarkedTeacherAttendancesInput;
};
export type TeacherAttendanceUncheckedCreateWithoutAcademicYearInput = {
    id?: string;
    schoolId: string;
    teacherId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherAttendanceCreateOrConnectWithoutAcademicYearInput = {
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutAcademicYearInput, Prisma.TeacherAttendanceUncheckedCreateWithoutAcademicYearInput>;
};
export type TeacherAttendanceCreateManyAcademicYearInputEnvelope = {
    data: Prisma.TeacherAttendanceCreateManyAcademicYearInput | Prisma.TeacherAttendanceCreateManyAcademicYearInput[];
    skipDuplicates?: boolean;
};
export type TeacherAttendanceUpsertWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeacherAttendanceUpdateWithoutAcademicYearInput, Prisma.TeacherAttendanceUncheckedUpdateWithoutAcademicYearInput>;
    create: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutAcademicYearInput, Prisma.TeacherAttendanceUncheckedCreateWithoutAcademicYearInput>;
};
export type TeacherAttendanceUpdateWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeacherAttendanceUpdateWithoutAcademicYearInput, Prisma.TeacherAttendanceUncheckedUpdateWithoutAcademicYearInput>;
};
export type TeacherAttendanceUpdateManyWithWhereWithoutAcademicYearInput = {
    where: Prisma.TeacherAttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.TeacherAttendanceUpdateManyMutationInput, Prisma.TeacherAttendanceUncheckedUpdateManyWithoutAcademicYearInput>;
};
export type TeacherAttendanceCreateWithoutMarkedByInput = {
    id?: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutTeacherAttendancesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutTeacherAttendancesInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutAttendancesInput;
};
export type TeacherAttendanceUncheckedCreateWithoutMarkedByInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    teacherId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherAttendanceCreateOrConnectWithoutMarkedByInput = {
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutMarkedByInput, Prisma.TeacherAttendanceUncheckedCreateWithoutMarkedByInput>;
};
export type TeacherAttendanceCreateManyMarkedByInputEnvelope = {
    data: Prisma.TeacherAttendanceCreateManyMarkedByInput | Prisma.TeacherAttendanceCreateManyMarkedByInput[];
    skipDuplicates?: boolean;
};
export type TeacherAttendanceUpsertWithWhereUniqueWithoutMarkedByInput = {
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeacherAttendanceUpdateWithoutMarkedByInput, Prisma.TeacherAttendanceUncheckedUpdateWithoutMarkedByInput>;
    create: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutMarkedByInput, Prisma.TeacherAttendanceUncheckedCreateWithoutMarkedByInput>;
};
export type TeacherAttendanceUpdateWithWhereUniqueWithoutMarkedByInput = {
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeacherAttendanceUpdateWithoutMarkedByInput, Prisma.TeacherAttendanceUncheckedUpdateWithoutMarkedByInput>;
};
export type TeacherAttendanceUpdateManyWithWhereWithoutMarkedByInput = {
    where: Prisma.TeacherAttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.TeacherAttendanceUpdateManyMutationInput, Prisma.TeacherAttendanceUncheckedUpdateManyWithoutMarkedByInput>;
};
export type TeacherAttendanceCreateWithoutTeacherInput = {
    id?: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutTeacherAttendancesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutTeacherAttendancesInput;
    markedBy: Prisma.UserCreateNestedOneWithoutMarkedTeacherAttendancesInput;
};
export type TeacherAttendanceUncheckedCreateWithoutTeacherInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherAttendanceCreateOrConnectWithoutTeacherInput = {
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutTeacherInput, Prisma.TeacherAttendanceUncheckedCreateWithoutTeacherInput>;
};
export type TeacherAttendanceCreateManyTeacherInputEnvelope = {
    data: Prisma.TeacherAttendanceCreateManyTeacherInput | Prisma.TeacherAttendanceCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type TeacherAttendanceUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeacherAttendanceUpdateWithoutTeacherInput, Prisma.TeacherAttendanceUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.TeacherAttendanceCreateWithoutTeacherInput, Prisma.TeacherAttendanceUncheckedCreateWithoutTeacherInput>;
};
export type TeacherAttendanceUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeacherAttendanceUpdateWithoutTeacherInput, Prisma.TeacherAttendanceUncheckedUpdateWithoutTeacherInput>;
};
export type TeacherAttendanceUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.TeacherAttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.TeacherAttendanceUpdateManyMutationInput, Prisma.TeacherAttendanceUncheckedUpdateManyWithoutTeacherInput>;
};
export type TeacherAttendanceCreateManySchoolInput = {
    id?: string;
    academicYearId: string;
    teacherId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherAttendanceUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutTeacherAttendancesNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutAttendancesNestedInput;
    markedBy?: Prisma.UserUpdateOneRequiredWithoutMarkedTeacherAttendancesNestedInput;
};
export type TeacherAttendanceUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherAttendanceUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherAttendanceCreateManyAcademicYearInput = {
    id?: string;
    schoolId: string;
    teacherId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherAttendanceUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutTeacherAttendancesNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutAttendancesNestedInput;
    markedBy?: Prisma.UserUpdateOneRequiredWithoutMarkedTeacherAttendancesNestedInput;
};
export type TeacherAttendanceUncheckedUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherAttendanceUncheckedUpdateManyWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherAttendanceCreateManyMarkedByInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    teacherId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherAttendanceUpdateWithoutMarkedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutTeacherAttendancesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutTeacherAttendancesNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutAttendancesNestedInput;
};
export type TeacherAttendanceUncheckedUpdateWithoutMarkedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherAttendanceUncheckedUpdateManyWithoutMarkedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherAttendanceCreateManyTeacherInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    date: Date | string;
    status: $Enums.AttendanceStatus;
    remarks?: string | null;
    markedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherAttendanceUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutTeacherAttendancesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutTeacherAttendancesNestedInput;
    markedBy?: Prisma.UserUpdateOneRequiredWithoutMarkedTeacherAttendancesNestedInput;
};
export type TeacherAttendanceUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherAttendanceUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    markedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherAttendanceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    academicYearId?: boolean;
    teacherId?: boolean;
    date?: boolean;
    status?: boolean;
    remarks?: boolean;
    markedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    markedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherAttendance"]>;
export type TeacherAttendanceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    academicYearId?: boolean;
    teacherId?: boolean;
    date?: boolean;
    status?: boolean;
    remarks?: boolean;
    markedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    markedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherAttendance"]>;
export type TeacherAttendanceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    academicYearId?: boolean;
    teacherId?: boolean;
    date?: boolean;
    status?: boolean;
    remarks?: boolean;
    markedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    markedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherAttendance"]>;
export type TeacherAttendanceSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    academicYearId?: boolean;
    teacherId?: boolean;
    date?: boolean;
    status?: boolean;
    remarks?: boolean;
    markedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TeacherAttendanceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "academicYearId" | "teacherId" | "date" | "status" | "remarks" | "markedById" | "createdAt" | "updatedAt", ExtArgs["result"]["teacherAttendance"]>;
export type TeacherAttendanceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    markedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TeacherAttendanceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    markedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TeacherAttendanceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    markedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TeacherAttendancePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TeacherAttendance";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        academicYear: Prisma.$AcademicYearPayload<ExtArgs>;
        teacher: Prisma.$TeacherPayload<ExtArgs>;
        markedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        academicYearId: string;
        teacherId: string;
        date: Date;
        status: $Enums.AttendanceStatus;
        remarks: string | null;
        markedById: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["teacherAttendance"]>;
    composites: {};
};
export type TeacherAttendanceGetPayload<S extends boolean | null | undefined | TeacherAttendanceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload, S>;
export type TeacherAttendanceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TeacherAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeacherAttendanceCountAggregateInputType | true;
};
export interface TeacherAttendanceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TeacherAttendance'];
        meta: {
            name: 'TeacherAttendance';
        };
    };
    findUnique<T extends TeacherAttendanceFindUniqueArgs>(args: Prisma.SelectSubset<T, TeacherAttendanceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TeacherAttendanceClient<runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TeacherAttendanceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TeacherAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherAttendanceClient<runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TeacherAttendanceFindFirstArgs>(args?: Prisma.SelectSubset<T, TeacherAttendanceFindFirstArgs<ExtArgs>>): Prisma.Prisma__TeacherAttendanceClient<runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TeacherAttendanceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TeacherAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherAttendanceClient<runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TeacherAttendanceFindManyArgs>(args?: Prisma.SelectSubset<T, TeacherAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TeacherAttendanceCreateArgs>(args: Prisma.SelectSubset<T, TeacherAttendanceCreateArgs<ExtArgs>>): Prisma.Prisma__TeacherAttendanceClient<runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TeacherAttendanceCreateManyArgs>(args?: Prisma.SelectSubset<T, TeacherAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TeacherAttendanceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TeacherAttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TeacherAttendanceDeleteArgs>(args: Prisma.SelectSubset<T, TeacherAttendanceDeleteArgs<ExtArgs>>): Prisma.Prisma__TeacherAttendanceClient<runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TeacherAttendanceUpdateArgs>(args: Prisma.SelectSubset<T, TeacherAttendanceUpdateArgs<ExtArgs>>): Prisma.Prisma__TeacherAttendanceClient<runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TeacherAttendanceDeleteManyArgs>(args?: Prisma.SelectSubset<T, TeacherAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TeacherAttendanceUpdateManyArgs>(args: Prisma.SelectSubset<T, TeacherAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TeacherAttendanceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TeacherAttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TeacherAttendanceUpsertArgs>(args: Prisma.SelectSubset<T, TeacherAttendanceUpsertArgs<ExtArgs>>): Prisma.Prisma__TeacherAttendanceClient<runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TeacherAttendanceCountArgs>(args?: Prisma.Subset<T, TeacherAttendanceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TeacherAttendanceCountAggregateOutputType> : number>;
    aggregate<T extends TeacherAttendanceAggregateArgs>(args: Prisma.Subset<T, TeacherAttendanceAggregateArgs>): Prisma.PrismaPromise<GetTeacherAttendanceAggregateType<T>>;
    groupBy<T extends TeacherAttendanceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TeacherAttendanceGroupByArgs['orderBy'];
    } : {
        orderBy?: TeacherAttendanceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TeacherAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TeacherAttendanceFieldRefs;
}
export interface Prisma__TeacherAttendanceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    academicYear<T extends Prisma.AcademicYearDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYearDefaultArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.TeacherDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherDefaultArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    markedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TeacherAttendanceFieldRefs {
    readonly id: Prisma.FieldRef<"TeacherAttendance", 'String'>;
    readonly schoolId: Prisma.FieldRef<"TeacherAttendance", 'String'>;
    readonly academicYearId: Prisma.FieldRef<"TeacherAttendance", 'String'>;
    readonly teacherId: Prisma.FieldRef<"TeacherAttendance", 'String'>;
    readonly date: Prisma.FieldRef<"TeacherAttendance", 'DateTime'>;
    readonly status: Prisma.FieldRef<"TeacherAttendance", 'AttendanceStatus'>;
    readonly remarks: Prisma.FieldRef<"TeacherAttendance", 'String'>;
    readonly markedById: Prisma.FieldRef<"TeacherAttendance", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TeacherAttendance", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TeacherAttendance", 'DateTime'>;
}
export type TeacherAttendanceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.TeacherAttendanceOmit<ExtArgs> | null;
    include?: Prisma.TeacherAttendanceInclude<ExtArgs> | null;
    where: Prisma.TeacherAttendanceWhereUniqueInput;
};
export type TeacherAttendanceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.TeacherAttendanceOmit<ExtArgs> | null;
    include?: Prisma.TeacherAttendanceInclude<ExtArgs> | null;
    where: Prisma.TeacherAttendanceWhereUniqueInput;
};
export type TeacherAttendanceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.TeacherAttendanceOmit<ExtArgs> | null;
    include?: Prisma.TeacherAttendanceInclude<ExtArgs> | null;
    where?: Prisma.TeacherAttendanceWhereInput;
    orderBy?: Prisma.TeacherAttendanceOrderByWithRelationInput | Prisma.TeacherAttendanceOrderByWithRelationInput[];
    cursor?: Prisma.TeacherAttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherAttendanceScalarFieldEnum | Prisma.TeacherAttendanceScalarFieldEnum[];
};
export type TeacherAttendanceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.TeacherAttendanceOmit<ExtArgs> | null;
    include?: Prisma.TeacherAttendanceInclude<ExtArgs> | null;
    where?: Prisma.TeacherAttendanceWhereInput;
    orderBy?: Prisma.TeacherAttendanceOrderByWithRelationInput | Prisma.TeacherAttendanceOrderByWithRelationInput[];
    cursor?: Prisma.TeacherAttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherAttendanceScalarFieldEnum | Prisma.TeacherAttendanceScalarFieldEnum[];
};
export type TeacherAttendanceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.TeacherAttendanceOmit<ExtArgs> | null;
    include?: Prisma.TeacherAttendanceInclude<ExtArgs> | null;
    where?: Prisma.TeacherAttendanceWhereInput;
    orderBy?: Prisma.TeacherAttendanceOrderByWithRelationInput | Prisma.TeacherAttendanceOrderByWithRelationInput[];
    cursor?: Prisma.TeacherAttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherAttendanceScalarFieldEnum | Prisma.TeacherAttendanceScalarFieldEnum[];
};
export type TeacherAttendanceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.TeacherAttendanceOmit<ExtArgs> | null;
    include?: Prisma.TeacherAttendanceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeacherAttendanceCreateInput, Prisma.TeacherAttendanceUncheckedCreateInput>;
};
export type TeacherAttendanceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TeacherAttendanceCreateManyInput | Prisma.TeacherAttendanceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TeacherAttendanceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherAttendanceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TeacherAttendanceOmit<ExtArgs> | null;
    data: Prisma.TeacherAttendanceCreateManyInput | Prisma.TeacherAttendanceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TeacherAttendanceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TeacherAttendanceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.TeacherAttendanceOmit<ExtArgs> | null;
    include?: Prisma.TeacherAttendanceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeacherAttendanceUpdateInput, Prisma.TeacherAttendanceUncheckedUpdateInput>;
    where: Prisma.TeacherAttendanceWhereUniqueInput;
};
export type TeacherAttendanceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TeacherAttendanceUpdateManyMutationInput, Prisma.TeacherAttendanceUncheckedUpdateManyInput>;
    where?: Prisma.TeacherAttendanceWhereInput;
    limit?: number;
};
export type TeacherAttendanceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherAttendanceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TeacherAttendanceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeacherAttendanceUpdateManyMutationInput, Prisma.TeacherAttendanceUncheckedUpdateManyInput>;
    where?: Prisma.TeacherAttendanceWhereInput;
    limit?: number;
    include?: Prisma.TeacherAttendanceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TeacherAttendanceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.TeacherAttendanceOmit<ExtArgs> | null;
    include?: Prisma.TeacherAttendanceInclude<ExtArgs> | null;
    where: Prisma.TeacherAttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherAttendanceCreateInput, Prisma.TeacherAttendanceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TeacherAttendanceUpdateInput, Prisma.TeacherAttendanceUncheckedUpdateInput>;
};
export type TeacherAttendanceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.TeacherAttendanceOmit<ExtArgs> | null;
    include?: Prisma.TeacherAttendanceInclude<ExtArgs> | null;
    where: Prisma.TeacherAttendanceWhereUniqueInput;
};
export type TeacherAttendanceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherAttendanceWhereInput;
    limit?: number;
};
export type TeacherAttendanceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherAttendanceSelect<ExtArgs> | null;
    omit?: Prisma.TeacherAttendanceOmit<ExtArgs> | null;
    include?: Prisma.TeacherAttendanceInclude<ExtArgs> | null;
};
