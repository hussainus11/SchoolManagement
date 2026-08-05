import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AcademicYearModel = runtime.Types.Result.DefaultSelection<Prisma.$AcademicYearPayload>;
export type AggregateAcademicYear = {
    _count: AcademicYearCountAggregateOutputType | null;
    _min: AcademicYearMinAggregateOutputType | null;
    _max: AcademicYearMaxAggregateOutputType | null;
};
export type AcademicYearMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AcademicYearMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AcademicYearCountAggregateOutputType = {
    id: number;
    schoolId: number;
    name: number;
    startDate: number;
    endDate: number;
    isCurrent: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AcademicYearMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AcademicYearMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AcademicYearCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AcademicYearAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AcademicYearWhereInput;
    orderBy?: Prisma.AcademicYearOrderByWithRelationInput | Prisma.AcademicYearOrderByWithRelationInput[];
    cursor?: Prisma.AcademicYearWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AcademicYearCountAggregateInputType;
    _min?: AcademicYearMinAggregateInputType;
    _max?: AcademicYearMaxAggregateInputType;
};
export type GetAcademicYearAggregateType<T extends AcademicYearAggregateArgs> = {
    [P in keyof T & keyof AggregateAcademicYear]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAcademicYear[P]> : Prisma.GetScalarType<T[P], AggregateAcademicYear[P]>;
};
export type AcademicYearGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AcademicYearWhereInput;
    orderBy?: Prisma.AcademicYearOrderByWithAggregationInput | Prisma.AcademicYearOrderByWithAggregationInput[];
    by: Prisma.AcademicYearScalarFieldEnum[] | Prisma.AcademicYearScalarFieldEnum;
    having?: Prisma.AcademicYearScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AcademicYearCountAggregateInputType | true;
    _min?: AcademicYearMinAggregateInputType;
    _max?: AcademicYearMaxAggregateInputType;
};
export type AcademicYearGroupByOutputType = {
    id: string;
    schoolId: string;
    name: string;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: AcademicYearCountAggregateOutputType | null;
    _min: AcademicYearMinAggregateOutputType | null;
    _max: AcademicYearMaxAggregateOutputType | null;
};
export type GetAcademicYearGroupByPayload<T extends AcademicYearGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AcademicYearGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AcademicYearGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AcademicYearGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AcademicYearGroupByOutputType[P]>;
}>>;
export type AcademicYearWhereInput = {
    AND?: Prisma.AcademicYearWhereInput | Prisma.AcademicYearWhereInput[];
    OR?: Prisma.AcademicYearWhereInput[];
    NOT?: Prisma.AcademicYearWhereInput | Prisma.AcademicYearWhereInput[];
    id?: Prisma.StringFilter<"AcademicYear"> | string;
    schoolId?: Prisma.StringFilter<"AcademicYear"> | string;
    name?: Prisma.StringFilter<"AcademicYear"> | string;
    startDate?: Prisma.DateTimeFilter<"AcademicYear"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"AcademicYear"> | Date | string;
    isCurrent?: Prisma.BoolFilter<"AcademicYear"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"AcademicYear"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AcademicYear"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    classes?: Prisma.ClassListRelationFilter;
    studentAttendances?: Prisma.StudentAttendanceListRelationFilter;
    teacherAttendances?: Prisma.TeacherAttendanceListRelationFilter;
    feeStructures?: Prisma.FeeStructureListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
    exams?: Prisma.ExamListRelationFilter;
};
export type AcademicYearOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    classes?: Prisma.ClassOrderByRelationAggregateInput;
    studentAttendances?: Prisma.StudentAttendanceOrderByRelationAggregateInput;
    teacherAttendances?: Prisma.TeacherAttendanceOrderByRelationAggregateInput;
    feeStructures?: Prisma.FeeStructureOrderByRelationAggregateInput;
    invoices?: Prisma.InvoiceOrderByRelationAggregateInput;
    exams?: Prisma.ExamOrderByRelationAggregateInput;
};
export type AcademicYearWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    schoolId_name?: Prisma.AcademicYearSchoolIdNameCompoundUniqueInput;
    AND?: Prisma.AcademicYearWhereInput | Prisma.AcademicYearWhereInput[];
    OR?: Prisma.AcademicYearWhereInput[];
    NOT?: Prisma.AcademicYearWhereInput | Prisma.AcademicYearWhereInput[];
    schoolId?: Prisma.StringFilter<"AcademicYear"> | string;
    name?: Prisma.StringFilter<"AcademicYear"> | string;
    startDate?: Prisma.DateTimeFilter<"AcademicYear"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"AcademicYear"> | Date | string;
    isCurrent?: Prisma.BoolFilter<"AcademicYear"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"AcademicYear"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AcademicYear"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    classes?: Prisma.ClassListRelationFilter;
    studentAttendances?: Prisma.StudentAttendanceListRelationFilter;
    teacherAttendances?: Prisma.TeacherAttendanceListRelationFilter;
    feeStructures?: Prisma.FeeStructureListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
    exams?: Prisma.ExamListRelationFilter;
}, "id" | "schoolId_name">;
export type AcademicYearOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AcademicYearCountOrderByAggregateInput;
    _max?: Prisma.AcademicYearMaxOrderByAggregateInput;
    _min?: Prisma.AcademicYearMinOrderByAggregateInput;
};
export type AcademicYearScalarWhereWithAggregatesInput = {
    AND?: Prisma.AcademicYearScalarWhereWithAggregatesInput | Prisma.AcademicYearScalarWhereWithAggregatesInput[];
    OR?: Prisma.AcademicYearScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AcademicYearScalarWhereWithAggregatesInput | Prisma.AcademicYearScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AcademicYear"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"AcademicYear"> | string;
    name?: Prisma.StringWithAggregatesFilter<"AcademicYear"> | string;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string;
    isCurrent?: Prisma.BoolWithAggregatesFilter<"AcademicYear"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string;
};
export type AcademicYearCreateInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAcademicYearsInput;
    classes?: Prisma.ClassCreateNestedManyWithoutAcademicYearInput;
    studentAttendances?: Prisma.StudentAttendanceCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classes?: Prisma.ClassUncheckedCreateNestedManyWithoutAcademicYearInput;
    studentAttendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamUncheckedCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAcademicYearsNestedInput;
    classes?: Prisma.ClassUpdateManyWithoutAcademicYearNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.ClassUncheckedUpdateManyWithoutAcademicYearNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUncheckedUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearCreateManyInput = {
    id?: string;
    schoolId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AcademicYearUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcademicYearUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcademicYearListRelationFilter = {
    every?: Prisma.AcademicYearWhereInput;
    some?: Prisma.AcademicYearWhereInput;
    none?: Prisma.AcademicYearWhereInput;
};
export type AcademicYearOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AcademicYearSchoolIdNameCompoundUniqueInput = {
    schoolId: string;
    name: string;
};
export type AcademicYearCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AcademicYearMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AcademicYearMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AcademicYearScalarRelationFilter = {
    is?: Prisma.AcademicYearWhereInput;
    isNot?: Prisma.AcademicYearWhereInput;
};
export type AcademicYearCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutSchoolInput, Prisma.AcademicYearUncheckedCreateWithoutSchoolInput> | Prisma.AcademicYearCreateWithoutSchoolInput[] | Prisma.AcademicYearUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutSchoolInput | Prisma.AcademicYearCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.AcademicYearCreateManySchoolInputEnvelope;
    connect?: Prisma.AcademicYearWhereUniqueInput | Prisma.AcademicYearWhereUniqueInput[];
};
export type AcademicYearUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutSchoolInput, Prisma.AcademicYearUncheckedCreateWithoutSchoolInput> | Prisma.AcademicYearCreateWithoutSchoolInput[] | Prisma.AcademicYearUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutSchoolInput | Prisma.AcademicYearCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.AcademicYearCreateManySchoolInputEnvelope;
    connect?: Prisma.AcademicYearWhereUniqueInput | Prisma.AcademicYearWhereUniqueInput[];
};
export type AcademicYearUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutSchoolInput, Prisma.AcademicYearUncheckedCreateWithoutSchoolInput> | Prisma.AcademicYearCreateWithoutSchoolInput[] | Prisma.AcademicYearUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutSchoolInput | Prisma.AcademicYearCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.AcademicYearUpsertWithWhereUniqueWithoutSchoolInput | Prisma.AcademicYearUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.AcademicYearCreateManySchoolInputEnvelope;
    set?: Prisma.AcademicYearWhereUniqueInput | Prisma.AcademicYearWhereUniqueInput[];
    disconnect?: Prisma.AcademicYearWhereUniqueInput | Prisma.AcademicYearWhereUniqueInput[];
    delete?: Prisma.AcademicYearWhereUniqueInput | Prisma.AcademicYearWhereUniqueInput[];
    connect?: Prisma.AcademicYearWhereUniqueInput | Prisma.AcademicYearWhereUniqueInput[];
    update?: Prisma.AcademicYearUpdateWithWhereUniqueWithoutSchoolInput | Prisma.AcademicYearUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.AcademicYearUpdateManyWithWhereWithoutSchoolInput | Prisma.AcademicYearUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.AcademicYearScalarWhereInput | Prisma.AcademicYearScalarWhereInput[];
};
export type AcademicYearUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutSchoolInput, Prisma.AcademicYearUncheckedCreateWithoutSchoolInput> | Prisma.AcademicYearCreateWithoutSchoolInput[] | Prisma.AcademicYearUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutSchoolInput | Prisma.AcademicYearCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.AcademicYearUpsertWithWhereUniqueWithoutSchoolInput | Prisma.AcademicYearUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.AcademicYearCreateManySchoolInputEnvelope;
    set?: Prisma.AcademicYearWhereUniqueInput | Prisma.AcademicYearWhereUniqueInput[];
    disconnect?: Prisma.AcademicYearWhereUniqueInput | Prisma.AcademicYearWhereUniqueInput[];
    delete?: Prisma.AcademicYearWhereUniqueInput | Prisma.AcademicYearWhereUniqueInput[];
    connect?: Prisma.AcademicYearWhereUniqueInput | Prisma.AcademicYearWhereUniqueInput[];
    update?: Prisma.AcademicYearUpdateWithWhereUniqueWithoutSchoolInput | Prisma.AcademicYearUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.AcademicYearUpdateManyWithWhereWithoutSchoolInput | Prisma.AcademicYearUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.AcademicYearScalarWhereInput | Prisma.AcademicYearScalarWhereInput[];
};
export type AcademicYearCreateNestedOneWithoutClassesInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutClassesInput, Prisma.AcademicYearUncheckedCreateWithoutClassesInput>;
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutClassesInput;
    connect?: Prisma.AcademicYearWhereUniqueInput;
};
export type AcademicYearUpdateOneRequiredWithoutClassesNestedInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutClassesInput, Prisma.AcademicYearUncheckedCreateWithoutClassesInput>;
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutClassesInput;
    upsert?: Prisma.AcademicYearUpsertWithoutClassesInput;
    connect?: Prisma.AcademicYearWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AcademicYearUpdateToOneWithWhereWithoutClassesInput, Prisma.AcademicYearUpdateWithoutClassesInput>, Prisma.AcademicYearUncheckedUpdateWithoutClassesInput>;
};
export type AcademicYearCreateNestedOneWithoutStudentAttendancesInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutStudentAttendancesInput, Prisma.AcademicYearUncheckedCreateWithoutStudentAttendancesInput>;
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutStudentAttendancesInput;
    connect?: Prisma.AcademicYearWhereUniqueInput;
};
export type AcademicYearUpdateOneRequiredWithoutStudentAttendancesNestedInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutStudentAttendancesInput, Prisma.AcademicYearUncheckedCreateWithoutStudentAttendancesInput>;
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutStudentAttendancesInput;
    upsert?: Prisma.AcademicYearUpsertWithoutStudentAttendancesInput;
    connect?: Prisma.AcademicYearWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AcademicYearUpdateToOneWithWhereWithoutStudentAttendancesInput, Prisma.AcademicYearUpdateWithoutStudentAttendancesInput>, Prisma.AcademicYearUncheckedUpdateWithoutStudentAttendancesInput>;
};
export type AcademicYearCreateNestedOneWithoutTeacherAttendancesInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutTeacherAttendancesInput, Prisma.AcademicYearUncheckedCreateWithoutTeacherAttendancesInput>;
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutTeacherAttendancesInput;
    connect?: Prisma.AcademicYearWhereUniqueInput;
};
export type AcademicYearUpdateOneRequiredWithoutTeacherAttendancesNestedInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutTeacherAttendancesInput, Prisma.AcademicYearUncheckedCreateWithoutTeacherAttendancesInput>;
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutTeacherAttendancesInput;
    upsert?: Prisma.AcademicYearUpsertWithoutTeacherAttendancesInput;
    connect?: Prisma.AcademicYearWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AcademicYearUpdateToOneWithWhereWithoutTeacherAttendancesInput, Prisma.AcademicYearUpdateWithoutTeacherAttendancesInput>, Prisma.AcademicYearUncheckedUpdateWithoutTeacherAttendancesInput>;
};
export type AcademicYearCreateNestedOneWithoutFeeStructuresInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutFeeStructuresInput, Prisma.AcademicYearUncheckedCreateWithoutFeeStructuresInput>;
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutFeeStructuresInput;
    connect?: Prisma.AcademicYearWhereUniqueInput;
};
export type AcademicYearUpdateOneRequiredWithoutFeeStructuresNestedInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutFeeStructuresInput, Prisma.AcademicYearUncheckedCreateWithoutFeeStructuresInput>;
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutFeeStructuresInput;
    upsert?: Prisma.AcademicYearUpsertWithoutFeeStructuresInput;
    connect?: Prisma.AcademicYearWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AcademicYearUpdateToOneWithWhereWithoutFeeStructuresInput, Prisma.AcademicYearUpdateWithoutFeeStructuresInput>, Prisma.AcademicYearUncheckedUpdateWithoutFeeStructuresInput>;
};
export type AcademicYearCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutInvoicesInput, Prisma.AcademicYearUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.AcademicYearWhereUniqueInput;
};
export type AcademicYearUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutInvoicesInput, Prisma.AcademicYearUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.AcademicYearUpsertWithoutInvoicesInput;
    connect?: Prisma.AcademicYearWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AcademicYearUpdateToOneWithWhereWithoutInvoicesInput, Prisma.AcademicYearUpdateWithoutInvoicesInput>, Prisma.AcademicYearUncheckedUpdateWithoutInvoicesInput>;
};
export type AcademicYearCreateNestedOneWithoutExamsInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutExamsInput, Prisma.AcademicYearUncheckedCreateWithoutExamsInput>;
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutExamsInput;
    connect?: Prisma.AcademicYearWhereUniqueInput;
};
export type AcademicYearUpdateOneRequiredWithoutExamsNestedInput = {
    create?: Prisma.XOR<Prisma.AcademicYearCreateWithoutExamsInput, Prisma.AcademicYearUncheckedCreateWithoutExamsInput>;
    connectOrCreate?: Prisma.AcademicYearCreateOrConnectWithoutExamsInput;
    upsert?: Prisma.AcademicYearUpsertWithoutExamsInput;
    connect?: Prisma.AcademicYearWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AcademicYearUpdateToOneWithWhereWithoutExamsInput, Prisma.AcademicYearUpdateWithoutExamsInput>, Prisma.AcademicYearUncheckedUpdateWithoutExamsInput>;
};
export type AcademicYearCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classes?: Prisma.ClassCreateNestedManyWithoutAcademicYearInput;
    studentAttendances?: Prisma.StudentAttendanceCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearUncheckedCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classes?: Prisma.ClassUncheckedCreateNestedManyWithoutAcademicYearInput;
    studentAttendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamUncheckedCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearCreateOrConnectWithoutSchoolInput = {
    where: Prisma.AcademicYearWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutSchoolInput, Prisma.AcademicYearUncheckedCreateWithoutSchoolInput>;
};
export type AcademicYearCreateManySchoolInputEnvelope = {
    data: Prisma.AcademicYearCreateManySchoolInput | Prisma.AcademicYearCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type AcademicYearUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.AcademicYearWhereUniqueInput;
    update: Prisma.XOR<Prisma.AcademicYearUpdateWithoutSchoolInput, Prisma.AcademicYearUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutSchoolInput, Prisma.AcademicYearUncheckedCreateWithoutSchoolInput>;
};
export type AcademicYearUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.AcademicYearWhereUniqueInput;
    data: Prisma.XOR<Prisma.AcademicYearUpdateWithoutSchoolInput, Prisma.AcademicYearUncheckedUpdateWithoutSchoolInput>;
};
export type AcademicYearUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.AcademicYearScalarWhereInput;
    data: Prisma.XOR<Prisma.AcademicYearUpdateManyMutationInput, Prisma.AcademicYearUncheckedUpdateManyWithoutSchoolInput>;
};
export type AcademicYearScalarWhereInput = {
    AND?: Prisma.AcademicYearScalarWhereInput | Prisma.AcademicYearScalarWhereInput[];
    OR?: Prisma.AcademicYearScalarWhereInput[];
    NOT?: Prisma.AcademicYearScalarWhereInput | Prisma.AcademicYearScalarWhereInput[];
    id?: Prisma.StringFilter<"AcademicYear"> | string;
    schoolId?: Prisma.StringFilter<"AcademicYear"> | string;
    name?: Prisma.StringFilter<"AcademicYear"> | string;
    startDate?: Prisma.DateTimeFilter<"AcademicYear"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"AcademicYear"> | Date | string;
    isCurrent?: Prisma.BoolFilter<"AcademicYear"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"AcademicYear"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AcademicYear"> | Date | string;
};
export type AcademicYearCreateWithoutClassesInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAcademicYearsInput;
    studentAttendances?: Prisma.StudentAttendanceCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearUncheckedCreateWithoutClassesInput = {
    id?: string;
    schoolId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentAttendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamUncheckedCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearCreateOrConnectWithoutClassesInput = {
    where: Prisma.AcademicYearWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutClassesInput, Prisma.AcademicYearUncheckedCreateWithoutClassesInput>;
};
export type AcademicYearUpsertWithoutClassesInput = {
    update: Prisma.XOR<Prisma.AcademicYearUpdateWithoutClassesInput, Prisma.AcademicYearUncheckedUpdateWithoutClassesInput>;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutClassesInput, Prisma.AcademicYearUncheckedCreateWithoutClassesInput>;
    where?: Prisma.AcademicYearWhereInput;
};
export type AcademicYearUpdateToOneWithWhereWithoutClassesInput = {
    where?: Prisma.AcademicYearWhereInput;
    data: Prisma.XOR<Prisma.AcademicYearUpdateWithoutClassesInput, Prisma.AcademicYearUncheckedUpdateWithoutClassesInput>;
};
export type AcademicYearUpdateWithoutClassesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAcademicYearsNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearUncheckedUpdateWithoutClassesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentAttendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUncheckedUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearCreateWithoutStudentAttendancesInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAcademicYearsInput;
    classes?: Prisma.ClassCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearUncheckedCreateWithoutStudentAttendancesInput = {
    id?: string;
    schoolId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classes?: Prisma.ClassUncheckedCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamUncheckedCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearCreateOrConnectWithoutStudentAttendancesInput = {
    where: Prisma.AcademicYearWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutStudentAttendancesInput, Prisma.AcademicYearUncheckedCreateWithoutStudentAttendancesInput>;
};
export type AcademicYearUpsertWithoutStudentAttendancesInput = {
    update: Prisma.XOR<Prisma.AcademicYearUpdateWithoutStudentAttendancesInput, Prisma.AcademicYearUncheckedUpdateWithoutStudentAttendancesInput>;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutStudentAttendancesInput, Prisma.AcademicYearUncheckedCreateWithoutStudentAttendancesInput>;
    where?: Prisma.AcademicYearWhereInput;
};
export type AcademicYearUpdateToOneWithWhereWithoutStudentAttendancesInput = {
    where?: Prisma.AcademicYearWhereInput;
    data: Prisma.XOR<Prisma.AcademicYearUpdateWithoutStudentAttendancesInput, Prisma.AcademicYearUncheckedUpdateWithoutStudentAttendancesInput>;
};
export type AcademicYearUpdateWithoutStudentAttendancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAcademicYearsNestedInput;
    classes?: Prisma.ClassUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearUncheckedUpdateWithoutStudentAttendancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.ClassUncheckedUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUncheckedUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearCreateWithoutTeacherAttendancesInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAcademicYearsInput;
    classes?: Prisma.ClassCreateNestedManyWithoutAcademicYearInput;
    studentAttendances?: Prisma.StudentAttendanceCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearUncheckedCreateWithoutTeacherAttendancesInput = {
    id?: string;
    schoolId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classes?: Prisma.ClassUncheckedCreateNestedManyWithoutAcademicYearInput;
    studentAttendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamUncheckedCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearCreateOrConnectWithoutTeacherAttendancesInput = {
    where: Prisma.AcademicYearWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutTeacherAttendancesInput, Prisma.AcademicYearUncheckedCreateWithoutTeacherAttendancesInput>;
};
export type AcademicYearUpsertWithoutTeacherAttendancesInput = {
    update: Prisma.XOR<Prisma.AcademicYearUpdateWithoutTeacherAttendancesInput, Prisma.AcademicYearUncheckedUpdateWithoutTeacherAttendancesInput>;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutTeacherAttendancesInput, Prisma.AcademicYearUncheckedCreateWithoutTeacherAttendancesInput>;
    where?: Prisma.AcademicYearWhereInput;
};
export type AcademicYearUpdateToOneWithWhereWithoutTeacherAttendancesInput = {
    where?: Prisma.AcademicYearWhereInput;
    data: Prisma.XOR<Prisma.AcademicYearUpdateWithoutTeacherAttendancesInput, Prisma.AcademicYearUncheckedUpdateWithoutTeacherAttendancesInput>;
};
export type AcademicYearUpdateWithoutTeacherAttendancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAcademicYearsNestedInput;
    classes?: Prisma.ClassUpdateManyWithoutAcademicYearNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearUncheckedUpdateWithoutTeacherAttendancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.ClassUncheckedUpdateManyWithoutAcademicYearNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUncheckedUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearCreateWithoutFeeStructuresInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAcademicYearsInput;
    classes?: Prisma.ClassCreateNestedManyWithoutAcademicYearInput;
    studentAttendances?: Prisma.StudentAttendanceCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearUncheckedCreateWithoutFeeStructuresInput = {
    id?: string;
    schoolId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classes?: Prisma.ClassUncheckedCreateNestedManyWithoutAcademicYearInput;
    studentAttendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamUncheckedCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearCreateOrConnectWithoutFeeStructuresInput = {
    where: Prisma.AcademicYearWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutFeeStructuresInput, Prisma.AcademicYearUncheckedCreateWithoutFeeStructuresInput>;
};
export type AcademicYearUpsertWithoutFeeStructuresInput = {
    update: Prisma.XOR<Prisma.AcademicYearUpdateWithoutFeeStructuresInput, Prisma.AcademicYearUncheckedUpdateWithoutFeeStructuresInput>;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutFeeStructuresInput, Prisma.AcademicYearUncheckedCreateWithoutFeeStructuresInput>;
    where?: Prisma.AcademicYearWhereInput;
};
export type AcademicYearUpdateToOneWithWhereWithoutFeeStructuresInput = {
    where?: Prisma.AcademicYearWhereInput;
    data: Prisma.XOR<Prisma.AcademicYearUpdateWithoutFeeStructuresInput, Prisma.AcademicYearUncheckedUpdateWithoutFeeStructuresInput>;
};
export type AcademicYearUpdateWithoutFeeStructuresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAcademicYearsNestedInput;
    classes?: Prisma.ClassUpdateManyWithoutAcademicYearNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearUncheckedUpdateWithoutFeeStructuresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.ClassUncheckedUpdateManyWithoutAcademicYearNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUncheckedUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearCreateWithoutInvoicesInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAcademicYearsInput;
    classes?: Prisma.ClassCreateNestedManyWithoutAcademicYearInput;
    studentAttendances?: Prisma.StudentAttendanceCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearUncheckedCreateWithoutInvoicesInput = {
    id?: string;
    schoolId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classes?: Prisma.ClassUncheckedCreateNestedManyWithoutAcademicYearInput;
    studentAttendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutAcademicYearInput;
    exams?: Prisma.ExamUncheckedCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.AcademicYearWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutInvoicesInput, Prisma.AcademicYearUncheckedCreateWithoutInvoicesInput>;
};
export type AcademicYearUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.AcademicYearUpdateWithoutInvoicesInput, Prisma.AcademicYearUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutInvoicesInput, Prisma.AcademicYearUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.AcademicYearWhereInput;
};
export type AcademicYearUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.AcademicYearWhereInput;
    data: Prisma.XOR<Prisma.AcademicYearUpdateWithoutInvoicesInput, Prisma.AcademicYearUncheckedUpdateWithoutInvoicesInput>;
};
export type AcademicYearUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAcademicYearsNestedInput;
    classes?: Prisma.ClassUpdateManyWithoutAcademicYearNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.ClassUncheckedUpdateManyWithoutAcademicYearNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUncheckedUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearCreateWithoutExamsInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAcademicYearsInput;
    classes?: Prisma.ClassCreateNestedManyWithoutAcademicYearInput;
    studentAttendances?: Prisma.StudentAttendanceCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearUncheckedCreateWithoutExamsInput = {
    id?: string;
    schoolId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classes?: Prisma.ClassUncheckedCreateNestedManyWithoutAcademicYearInput;
    studentAttendances?: Prisma.StudentAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedCreateNestedManyWithoutAcademicYearInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutAcademicYearInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAcademicYearInput;
};
export type AcademicYearCreateOrConnectWithoutExamsInput = {
    where: Prisma.AcademicYearWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutExamsInput, Prisma.AcademicYearUncheckedCreateWithoutExamsInput>;
};
export type AcademicYearUpsertWithoutExamsInput = {
    update: Prisma.XOR<Prisma.AcademicYearUpdateWithoutExamsInput, Prisma.AcademicYearUncheckedUpdateWithoutExamsInput>;
    create: Prisma.XOR<Prisma.AcademicYearCreateWithoutExamsInput, Prisma.AcademicYearUncheckedCreateWithoutExamsInput>;
    where?: Prisma.AcademicYearWhereInput;
};
export type AcademicYearUpdateToOneWithWhereWithoutExamsInput = {
    where?: Prisma.AcademicYearWhereInput;
    data: Prisma.XOR<Prisma.AcademicYearUpdateWithoutExamsInput, Prisma.AcademicYearUncheckedUpdateWithoutExamsInput>;
};
export type AcademicYearUpdateWithoutExamsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAcademicYearsNestedInput;
    classes?: Prisma.ClassUpdateManyWithoutAcademicYearNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearUncheckedUpdateWithoutExamsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.ClassUncheckedUpdateManyWithoutAcademicYearNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearCreateManySchoolInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AcademicYearUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.ClassUpdateManyWithoutAcademicYearNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.ClassUncheckedUpdateManyWithoutAcademicYearNestedInput;
    studentAttendances?: Prisma.StudentAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    teacherAttendances?: Prisma.TeacherAttendanceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutAcademicYearNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAcademicYearNestedInput;
    exams?: Prisma.ExamUncheckedUpdateManyWithoutAcademicYearNestedInput;
};
export type AcademicYearUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcademicYearCountOutputType = {
    classes: number;
    studentAttendances: number;
    teacherAttendances: number;
    feeStructures: number;
    invoices: number;
    exams: number;
};
export type AcademicYearCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | AcademicYearCountOutputTypeCountClassesArgs;
    studentAttendances?: boolean | AcademicYearCountOutputTypeCountStudentAttendancesArgs;
    teacherAttendances?: boolean | AcademicYearCountOutputTypeCountTeacherAttendancesArgs;
    feeStructures?: boolean | AcademicYearCountOutputTypeCountFeeStructuresArgs;
    invoices?: boolean | AcademicYearCountOutputTypeCountInvoicesArgs;
    exams?: boolean | AcademicYearCountOutputTypeCountExamsArgs;
};
export type AcademicYearCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearCountOutputTypeSelect<ExtArgs> | null;
};
export type AcademicYearCountOutputTypeCountClassesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassWhereInput;
};
export type AcademicYearCountOutputTypeCountStudentAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentAttendanceWhereInput;
};
export type AcademicYearCountOutputTypeCountTeacherAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherAttendanceWhereInput;
};
export type AcademicYearCountOutputTypeCountFeeStructuresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeStructureWhereInput;
};
export type AcademicYearCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
};
export type AcademicYearCountOutputTypeCountExamsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
};
export type AcademicYearSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    classes?: boolean | Prisma.AcademicYear$classesArgs<ExtArgs>;
    studentAttendances?: boolean | Prisma.AcademicYear$studentAttendancesArgs<ExtArgs>;
    teacherAttendances?: boolean | Prisma.AcademicYear$teacherAttendancesArgs<ExtArgs>;
    feeStructures?: boolean | Prisma.AcademicYear$feeStructuresArgs<ExtArgs>;
    invoices?: boolean | Prisma.AcademicYear$invoicesArgs<ExtArgs>;
    exams?: boolean | Prisma.AcademicYear$examsArgs<ExtArgs>;
    _count?: boolean | Prisma.AcademicYearCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["academicYear"]>;
export type AcademicYearSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["academicYear"]>;
export type AcademicYearSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["academicYear"]>;
export type AcademicYearSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AcademicYearOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "name" | "startDate" | "endDate" | "isCurrent" | "createdAt" | "updatedAt", ExtArgs["result"]["academicYear"]>;
export type AcademicYearInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    classes?: boolean | Prisma.AcademicYear$classesArgs<ExtArgs>;
    studentAttendances?: boolean | Prisma.AcademicYear$studentAttendancesArgs<ExtArgs>;
    teacherAttendances?: boolean | Prisma.AcademicYear$teacherAttendancesArgs<ExtArgs>;
    feeStructures?: boolean | Prisma.AcademicYear$feeStructuresArgs<ExtArgs>;
    invoices?: boolean | Prisma.AcademicYear$invoicesArgs<ExtArgs>;
    exams?: boolean | Prisma.AcademicYear$examsArgs<ExtArgs>;
    _count?: boolean | Prisma.AcademicYearCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AcademicYearIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type AcademicYearIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type $AcademicYearPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AcademicYear";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        classes: Prisma.$ClassPayload<ExtArgs>[];
        studentAttendances: Prisma.$StudentAttendancePayload<ExtArgs>[];
        teacherAttendances: Prisma.$TeacherAttendancePayload<ExtArgs>[];
        feeStructures: Prisma.$FeeStructurePayload<ExtArgs>[];
        invoices: Prisma.$InvoicePayload<ExtArgs>[];
        exams: Prisma.$ExamPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        name: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["academicYear"]>;
    composites: {};
};
export type AcademicYearGetPayload<S extends boolean | null | undefined | AcademicYearDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload, S>;
export type AcademicYearCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AcademicYearFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AcademicYearCountAggregateInputType | true;
};
export interface AcademicYearDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AcademicYear'];
        meta: {
            name: 'AcademicYear';
        };
    };
    findUnique<T extends AcademicYearFindUniqueArgs>(args: Prisma.SelectSubset<T, AcademicYearFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AcademicYearFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AcademicYearFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AcademicYearFindFirstArgs>(args?: Prisma.SelectSubset<T, AcademicYearFindFirstArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AcademicYearFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AcademicYearFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AcademicYearFindManyArgs>(args?: Prisma.SelectSubset<T, AcademicYearFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AcademicYearCreateArgs>(args: Prisma.SelectSubset<T, AcademicYearCreateArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AcademicYearCreateManyArgs>(args?: Prisma.SelectSubset<T, AcademicYearCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AcademicYearCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AcademicYearCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AcademicYearDeleteArgs>(args: Prisma.SelectSubset<T, AcademicYearDeleteArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AcademicYearUpdateArgs>(args: Prisma.SelectSubset<T, AcademicYearUpdateArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AcademicYearDeleteManyArgs>(args?: Prisma.SelectSubset<T, AcademicYearDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AcademicYearUpdateManyArgs>(args: Prisma.SelectSubset<T, AcademicYearUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AcademicYearUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AcademicYearUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AcademicYearUpsertArgs>(args: Prisma.SelectSubset<T, AcademicYearUpsertArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AcademicYearCountArgs>(args?: Prisma.Subset<T, AcademicYearCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AcademicYearCountAggregateOutputType> : number>;
    aggregate<T extends AcademicYearAggregateArgs>(args: Prisma.Subset<T, AcademicYearAggregateArgs>): Prisma.PrismaPromise<GetAcademicYearAggregateType<T>>;
    groupBy<T extends AcademicYearGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AcademicYearGroupByArgs['orderBy'];
    } : {
        orderBy?: AcademicYearGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AcademicYearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicYearGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AcademicYearFieldRefs;
}
export interface Prisma__AcademicYearClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    classes<T extends Prisma.AcademicYear$classesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYear$classesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    studentAttendances<T extends Prisma.AcademicYear$studentAttendancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYear$studentAttendancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    teacherAttendances<T extends Prisma.AcademicYear$teacherAttendancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYear$teacherAttendancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    feeStructures<T extends Prisma.AcademicYear$feeStructuresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYear$feeStructuresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoices<T extends Prisma.AcademicYear$invoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYear$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    exams<T extends Prisma.AcademicYear$examsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYear$examsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AcademicYearFieldRefs {
    readonly id: Prisma.FieldRef<"AcademicYear", 'String'>;
    readonly schoolId: Prisma.FieldRef<"AcademicYear", 'String'>;
    readonly name: Prisma.FieldRef<"AcademicYear", 'String'>;
    readonly startDate: Prisma.FieldRef<"AcademicYear", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"AcademicYear", 'DateTime'>;
    readonly isCurrent: Prisma.FieldRef<"AcademicYear", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"AcademicYear", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AcademicYear", 'DateTime'>;
}
export type AcademicYearFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearSelect<ExtArgs> | null;
    omit?: Prisma.AcademicYearOmit<ExtArgs> | null;
    include?: Prisma.AcademicYearInclude<ExtArgs> | null;
    where: Prisma.AcademicYearWhereUniqueInput;
};
export type AcademicYearFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearSelect<ExtArgs> | null;
    omit?: Prisma.AcademicYearOmit<ExtArgs> | null;
    include?: Prisma.AcademicYearInclude<ExtArgs> | null;
    where: Prisma.AcademicYearWhereUniqueInput;
};
export type AcademicYearFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearSelect<ExtArgs> | null;
    omit?: Prisma.AcademicYearOmit<ExtArgs> | null;
    include?: Prisma.AcademicYearInclude<ExtArgs> | null;
    where?: Prisma.AcademicYearWhereInput;
    orderBy?: Prisma.AcademicYearOrderByWithRelationInput | Prisma.AcademicYearOrderByWithRelationInput[];
    cursor?: Prisma.AcademicYearWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AcademicYearScalarFieldEnum | Prisma.AcademicYearScalarFieldEnum[];
};
export type AcademicYearFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearSelect<ExtArgs> | null;
    omit?: Prisma.AcademicYearOmit<ExtArgs> | null;
    include?: Prisma.AcademicYearInclude<ExtArgs> | null;
    where?: Prisma.AcademicYearWhereInput;
    orderBy?: Prisma.AcademicYearOrderByWithRelationInput | Prisma.AcademicYearOrderByWithRelationInput[];
    cursor?: Prisma.AcademicYearWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AcademicYearScalarFieldEnum | Prisma.AcademicYearScalarFieldEnum[];
};
export type AcademicYearFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearSelect<ExtArgs> | null;
    omit?: Prisma.AcademicYearOmit<ExtArgs> | null;
    include?: Prisma.AcademicYearInclude<ExtArgs> | null;
    where?: Prisma.AcademicYearWhereInput;
    orderBy?: Prisma.AcademicYearOrderByWithRelationInput | Prisma.AcademicYearOrderByWithRelationInput[];
    cursor?: Prisma.AcademicYearWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AcademicYearScalarFieldEnum | Prisma.AcademicYearScalarFieldEnum[];
};
export type AcademicYearCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearSelect<ExtArgs> | null;
    omit?: Prisma.AcademicYearOmit<ExtArgs> | null;
    include?: Prisma.AcademicYearInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AcademicYearCreateInput, Prisma.AcademicYearUncheckedCreateInput>;
};
export type AcademicYearCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AcademicYearCreateManyInput | Prisma.AcademicYearCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AcademicYearCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AcademicYearOmit<ExtArgs> | null;
    data: Prisma.AcademicYearCreateManyInput | Prisma.AcademicYearCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AcademicYearIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AcademicYearUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearSelect<ExtArgs> | null;
    omit?: Prisma.AcademicYearOmit<ExtArgs> | null;
    include?: Prisma.AcademicYearInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AcademicYearUpdateInput, Prisma.AcademicYearUncheckedUpdateInput>;
    where: Prisma.AcademicYearWhereUniqueInput;
};
export type AcademicYearUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AcademicYearUpdateManyMutationInput, Prisma.AcademicYearUncheckedUpdateManyInput>;
    where?: Prisma.AcademicYearWhereInput;
    limit?: number;
};
export type AcademicYearUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AcademicYearOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AcademicYearUpdateManyMutationInput, Prisma.AcademicYearUncheckedUpdateManyInput>;
    where?: Prisma.AcademicYearWhereInput;
    limit?: number;
    include?: Prisma.AcademicYearIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AcademicYearUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearSelect<ExtArgs> | null;
    omit?: Prisma.AcademicYearOmit<ExtArgs> | null;
    include?: Prisma.AcademicYearInclude<ExtArgs> | null;
    where: Prisma.AcademicYearWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcademicYearCreateInput, Prisma.AcademicYearUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AcademicYearUpdateInput, Prisma.AcademicYearUncheckedUpdateInput>;
};
export type AcademicYearDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearSelect<ExtArgs> | null;
    omit?: Prisma.AcademicYearOmit<ExtArgs> | null;
    include?: Prisma.AcademicYearInclude<ExtArgs> | null;
    where: Prisma.AcademicYearWhereUniqueInput;
};
export type AcademicYearDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AcademicYearWhereInput;
    limit?: number;
};
export type AcademicYear$classesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where?: Prisma.ClassWhereInput;
    orderBy?: Prisma.ClassOrderByWithRelationInput | Prisma.ClassOrderByWithRelationInput[];
    cursor?: Prisma.ClassWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassScalarFieldEnum | Prisma.ClassScalarFieldEnum[];
};
export type AcademicYear$studentAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AcademicYear$teacherAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AcademicYear$feeStructuresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeStructureSelect<ExtArgs> | null;
    omit?: Prisma.FeeStructureOmit<ExtArgs> | null;
    include?: Prisma.FeeStructureInclude<ExtArgs> | null;
    where?: Prisma.FeeStructureWhereInput;
    orderBy?: Prisma.FeeStructureOrderByWithRelationInput | Prisma.FeeStructureOrderByWithRelationInput[];
    cursor?: Prisma.FeeStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeStructureScalarFieldEnum | Prisma.FeeStructureScalarFieldEnum[];
};
export type AcademicYear$invoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type AcademicYear$examsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AcademicYearDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AcademicYearSelect<ExtArgs> | null;
    omit?: Prisma.AcademicYearOmit<ExtArgs> | null;
    include?: Prisma.AcademicYearInclude<ExtArgs> | null;
};
