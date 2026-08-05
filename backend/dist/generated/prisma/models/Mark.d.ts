import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MarkModel = runtime.Types.Result.DefaultSelection<Prisma.$MarkPayload>;
export type AggregateMark = {
    _count: MarkCountAggregateOutputType | null;
    _avg: MarkAvgAggregateOutputType | null;
    _sum: MarkSumAggregateOutputType | null;
    _min: MarkMinAggregateOutputType | null;
    _max: MarkMaxAggregateOutputType | null;
};
export type MarkAvgAggregateOutputType = {
    marksObtained: runtime.Decimal | null;
};
export type MarkSumAggregateOutputType = {
    marksObtained: runtime.Decimal | null;
};
export type MarkMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    examScheduleId: string | null;
    studentId: string | null;
    marksObtained: runtime.Decimal | null;
    isAbsent: boolean | null;
    remarks: string | null;
    enteredById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MarkMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    examScheduleId: string | null;
    studentId: string | null;
    marksObtained: runtime.Decimal | null;
    isAbsent: boolean | null;
    remarks: string | null;
    enteredById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MarkCountAggregateOutputType = {
    id: number;
    schoolId: number;
    examScheduleId: number;
    studentId: number;
    marksObtained: number;
    isAbsent: number;
    remarks: number;
    enteredById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MarkAvgAggregateInputType = {
    marksObtained?: true;
};
export type MarkSumAggregateInputType = {
    marksObtained?: true;
};
export type MarkMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    examScheduleId?: true;
    studentId?: true;
    marksObtained?: true;
    isAbsent?: true;
    remarks?: true;
    enteredById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MarkMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    examScheduleId?: true;
    studentId?: true;
    marksObtained?: true;
    isAbsent?: true;
    remarks?: true;
    enteredById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MarkCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    examScheduleId?: true;
    studentId?: true;
    marksObtained?: true;
    isAbsent?: true;
    remarks?: true;
    enteredById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MarkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarkWhereInput;
    orderBy?: Prisma.MarkOrderByWithRelationInput | Prisma.MarkOrderByWithRelationInput[];
    cursor?: Prisma.MarkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MarkCountAggregateInputType;
    _avg?: MarkAvgAggregateInputType;
    _sum?: MarkSumAggregateInputType;
    _min?: MarkMinAggregateInputType;
    _max?: MarkMaxAggregateInputType;
};
export type GetMarkAggregateType<T extends MarkAggregateArgs> = {
    [P in keyof T & keyof AggregateMark]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMark[P]> : Prisma.GetScalarType<T[P], AggregateMark[P]>;
};
export type MarkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarkWhereInput;
    orderBy?: Prisma.MarkOrderByWithAggregationInput | Prisma.MarkOrderByWithAggregationInput[];
    by: Prisma.MarkScalarFieldEnum[] | Prisma.MarkScalarFieldEnum;
    having?: Prisma.MarkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MarkCountAggregateInputType | true;
    _avg?: MarkAvgAggregateInputType;
    _sum?: MarkSumAggregateInputType;
    _min?: MarkMinAggregateInputType;
    _max?: MarkMaxAggregateInputType;
};
export type MarkGroupByOutputType = {
    id: string;
    schoolId: string;
    examScheduleId: string;
    studentId: string;
    marksObtained: runtime.Decimal | null;
    isAbsent: boolean;
    remarks: string | null;
    enteredById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MarkCountAggregateOutputType | null;
    _avg: MarkAvgAggregateOutputType | null;
    _sum: MarkSumAggregateOutputType | null;
    _min: MarkMinAggregateOutputType | null;
    _max: MarkMaxAggregateOutputType | null;
};
export type GetMarkGroupByPayload<T extends MarkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MarkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MarkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MarkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MarkGroupByOutputType[P]>;
}>>;
export type MarkWhereInput = {
    AND?: Prisma.MarkWhereInput | Prisma.MarkWhereInput[];
    OR?: Prisma.MarkWhereInput[];
    NOT?: Prisma.MarkWhereInput | Prisma.MarkWhereInput[];
    id?: Prisma.StringFilter<"Mark"> | string;
    schoolId?: Prisma.StringFilter<"Mark"> | string;
    examScheduleId?: Prisma.StringFilter<"Mark"> | string;
    studentId?: Prisma.StringFilter<"Mark"> | string;
    marksObtained?: Prisma.DecimalNullableFilter<"Mark"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFilter<"Mark"> | boolean;
    remarks?: Prisma.StringNullableFilter<"Mark"> | string | null;
    enteredById?: Prisma.StringFilter<"Mark"> | string;
    createdAt?: Prisma.DateTimeFilter<"Mark"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Mark"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    examSchedule?: Prisma.XOR<Prisma.ExamScheduleScalarRelationFilter, Prisma.ExamScheduleWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    enteredBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type MarkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    examScheduleId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    marksObtained?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAbsent?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    enteredById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    examSchedule?: Prisma.ExamScheduleOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
    enteredBy?: Prisma.UserOrderByWithRelationInput;
};
export type MarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    examScheduleId_studentId?: Prisma.MarkExamScheduleIdStudentIdCompoundUniqueInput;
    AND?: Prisma.MarkWhereInput | Prisma.MarkWhereInput[];
    OR?: Prisma.MarkWhereInput[];
    NOT?: Prisma.MarkWhereInput | Prisma.MarkWhereInput[];
    schoolId?: Prisma.StringFilter<"Mark"> | string;
    examScheduleId?: Prisma.StringFilter<"Mark"> | string;
    studentId?: Prisma.StringFilter<"Mark"> | string;
    marksObtained?: Prisma.DecimalNullableFilter<"Mark"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFilter<"Mark"> | boolean;
    remarks?: Prisma.StringNullableFilter<"Mark"> | string | null;
    enteredById?: Prisma.StringFilter<"Mark"> | string;
    createdAt?: Prisma.DateTimeFilter<"Mark"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Mark"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    examSchedule?: Prisma.XOR<Prisma.ExamScheduleScalarRelationFilter, Prisma.ExamScheduleWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    enteredBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "examScheduleId_studentId">;
export type MarkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    examScheduleId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    marksObtained?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAbsent?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    enteredById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MarkCountOrderByAggregateInput;
    _avg?: Prisma.MarkAvgOrderByAggregateInput;
    _max?: Prisma.MarkMaxOrderByAggregateInput;
    _min?: Prisma.MarkMinOrderByAggregateInput;
    _sum?: Prisma.MarkSumOrderByAggregateInput;
};
export type MarkScalarWhereWithAggregatesInput = {
    AND?: Prisma.MarkScalarWhereWithAggregatesInput | Prisma.MarkScalarWhereWithAggregatesInput[];
    OR?: Prisma.MarkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MarkScalarWhereWithAggregatesInput | Prisma.MarkScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Mark"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Mark"> | string;
    examScheduleId?: Prisma.StringWithAggregatesFilter<"Mark"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"Mark"> | string;
    marksObtained?: Prisma.DecimalNullableWithAggregatesFilter<"Mark"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolWithAggregatesFilter<"Mark"> | boolean;
    remarks?: Prisma.StringNullableWithAggregatesFilter<"Mark"> | string | null;
    enteredById?: Prisma.StringWithAggregatesFilter<"Mark"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Mark"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Mark"> | Date | string;
};
export type MarkCreateInput = {
    id?: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutMarksInput;
    examSchedule: Prisma.ExamScheduleCreateNestedOneWithoutMarksInput;
    student: Prisma.StudentCreateNestedOneWithoutMarksInput;
    enteredBy: Prisma.UserCreateNestedOneWithoutEnteredMarksInput;
};
export type MarkUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    examScheduleId: string;
    studentId: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    enteredById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MarkUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutMarksNestedInput;
    examSchedule?: Prisma.ExamScheduleUpdateOneRequiredWithoutMarksNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutMarksNestedInput;
    enteredBy?: Prisma.UserUpdateOneRequiredWithoutEnteredMarksNestedInput;
};
export type MarkUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    examScheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enteredById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarkCreateManyInput = {
    id?: string;
    schoolId: string;
    examScheduleId: string;
    studentId: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    enteredById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MarkUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarkUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    examScheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enteredById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarkListRelationFilter = {
    every?: Prisma.MarkWhereInput;
    some?: Prisma.MarkWhereInput;
    none?: Prisma.MarkWhereInput;
};
export type MarkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MarkExamScheduleIdStudentIdCompoundUniqueInput = {
    examScheduleId: string;
    studentId: string;
};
export type MarkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    examScheduleId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    marksObtained?: Prisma.SortOrder;
    isAbsent?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    enteredById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MarkAvgOrderByAggregateInput = {
    marksObtained?: Prisma.SortOrder;
};
export type MarkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    examScheduleId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    marksObtained?: Prisma.SortOrder;
    isAbsent?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    enteredById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MarkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    examScheduleId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    marksObtained?: Prisma.SortOrder;
    isAbsent?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    enteredById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MarkSumOrderByAggregateInput = {
    marksObtained?: Prisma.SortOrder;
};
export type MarkCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutSchoolInput, Prisma.MarkUncheckedCreateWithoutSchoolInput> | Prisma.MarkCreateWithoutSchoolInput[] | Prisma.MarkUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutSchoolInput | Prisma.MarkCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.MarkCreateManySchoolInputEnvelope;
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
};
export type MarkUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutSchoolInput, Prisma.MarkUncheckedCreateWithoutSchoolInput> | Prisma.MarkCreateWithoutSchoolInput[] | Prisma.MarkUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutSchoolInput | Prisma.MarkCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.MarkCreateManySchoolInputEnvelope;
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
};
export type MarkUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutSchoolInput, Prisma.MarkUncheckedCreateWithoutSchoolInput> | Prisma.MarkCreateWithoutSchoolInput[] | Prisma.MarkUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutSchoolInput | Prisma.MarkCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.MarkUpsertWithWhereUniqueWithoutSchoolInput | Prisma.MarkUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.MarkCreateManySchoolInputEnvelope;
    set?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    disconnect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    delete?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    update?: Prisma.MarkUpdateWithWhereUniqueWithoutSchoolInput | Prisma.MarkUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.MarkUpdateManyWithWhereWithoutSchoolInput | Prisma.MarkUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.MarkScalarWhereInput | Prisma.MarkScalarWhereInput[];
};
export type MarkUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutSchoolInput, Prisma.MarkUncheckedCreateWithoutSchoolInput> | Prisma.MarkCreateWithoutSchoolInput[] | Prisma.MarkUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutSchoolInput | Prisma.MarkCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.MarkUpsertWithWhereUniqueWithoutSchoolInput | Prisma.MarkUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.MarkCreateManySchoolInputEnvelope;
    set?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    disconnect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    delete?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    update?: Prisma.MarkUpdateWithWhereUniqueWithoutSchoolInput | Prisma.MarkUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.MarkUpdateManyWithWhereWithoutSchoolInput | Prisma.MarkUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.MarkScalarWhereInput | Prisma.MarkScalarWhereInput[];
};
export type MarkCreateNestedManyWithoutEnteredByInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutEnteredByInput, Prisma.MarkUncheckedCreateWithoutEnteredByInput> | Prisma.MarkCreateWithoutEnteredByInput[] | Prisma.MarkUncheckedCreateWithoutEnteredByInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutEnteredByInput | Prisma.MarkCreateOrConnectWithoutEnteredByInput[];
    createMany?: Prisma.MarkCreateManyEnteredByInputEnvelope;
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
};
export type MarkUncheckedCreateNestedManyWithoutEnteredByInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutEnteredByInput, Prisma.MarkUncheckedCreateWithoutEnteredByInput> | Prisma.MarkCreateWithoutEnteredByInput[] | Prisma.MarkUncheckedCreateWithoutEnteredByInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutEnteredByInput | Prisma.MarkCreateOrConnectWithoutEnteredByInput[];
    createMany?: Prisma.MarkCreateManyEnteredByInputEnvelope;
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
};
export type MarkUpdateManyWithoutEnteredByNestedInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutEnteredByInput, Prisma.MarkUncheckedCreateWithoutEnteredByInput> | Prisma.MarkCreateWithoutEnteredByInput[] | Prisma.MarkUncheckedCreateWithoutEnteredByInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutEnteredByInput | Prisma.MarkCreateOrConnectWithoutEnteredByInput[];
    upsert?: Prisma.MarkUpsertWithWhereUniqueWithoutEnteredByInput | Prisma.MarkUpsertWithWhereUniqueWithoutEnteredByInput[];
    createMany?: Prisma.MarkCreateManyEnteredByInputEnvelope;
    set?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    disconnect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    delete?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    update?: Prisma.MarkUpdateWithWhereUniqueWithoutEnteredByInput | Prisma.MarkUpdateWithWhereUniqueWithoutEnteredByInput[];
    updateMany?: Prisma.MarkUpdateManyWithWhereWithoutEnteredByInput | Prisma.MarkUpdateManyWithWhereWithoutEnteredByInput[];
    deleteMany?: Prisma.MarkScalarWhereInput | Prisma.MarkScalarWhereInput[];
};
export type MarkUncheckedUpdateManyWithoutEnteredByNestedInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutEnteredByInput, Prisma.MarkUncheckedCreateWithoutEnteredByInput> | Prisma.MarkCreateWithoutEnteredByInput[] | Prisma.MarkUncheckedCreateWithoutEnteredByInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutEnteredByInput | Prisma.MarkCreateOrConnectWithoutEnteredByInput[];
    upsert?: Prisma.MarkUpsertWithWhereUniqueWithoutEnteredByInput | Prisma.MarkUpsertWithWhereUniqueWithoutEnteredByInput[];
    createMany?: Prisma.MarkCreateManyEnteredByInputEnvelope;
    set?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    disconnect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    delete?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    update?: Prisma.MarkUpdateWithWhereUniqueWithoutEnteredByInput | Prisma.MarkUpdateWithWhereUniqueWithoutEnteredByInput[];
    updateMany?: Prisma.MarkUpdateManyWithWhereWithoutEnteredByInput | Prisma.MarkUpdateManyWithWhereWithoutEnteredByInput[];
    deleteMany?: Prisma.MarkScalarWhereInput | Prisma.MarkScalarWhereInput[];
};
export type MarkCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutStudentInput, Prisma.MarkUncheckedCreateWithoutStudentInput> | Prisma.MarkCreateWithoutStudentInput[] | Prisma.MarkUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutStudentInput | Prisma.MarkCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.MarkCreateManyStudentInputEnvelope;
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
};
export type MarkUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutStudentInput, Prisma.MarkUncheckedCreateWithoutStudentInput> | Prisma.MarkCreateWithoutStudentInput[] | Prisma.MarkUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutStudentInput | Prisma.MarkCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.MarkCreateManyStudentInputEnvelope;
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
};
export type MarkUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutStudentInput, Prisma.MarkUncheckedCreateWithoutStudentInput> | Prisma.MarkCreateWithoutStudentInput[] | Prisma.MarkUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutStudentInput | Prisma.MarkCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.MarkUpsertWithWhereUniqueWithoutStudentInput | Prisma.MarkUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.MarkCreateManyStudentInputEnvelope;
    set?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    disconnect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    delete?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    update?: Prisma.MarkUpdateWithWhereUniqueWithoutStudentInput | Prisma.MarkUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.MarkUpdateManyWithWhereWithoutStudentInput | Prisma.MarkUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.MarkScalarWhereInput | Prisma.MarkScalarWhereInput[];
};
export type MarkUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutStudentInput, Prisma.MarkUncheckedCreateWithoutStudentInput> | Prisma.MarkCreateWithoutStudentInput[] | Prisma.MarkUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutStudentInput | Prisma.MarkCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.MarkUpsertWithWhereUniqueWithoutStudentInput | Prisma.MarkUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.MarkCreateManyStudentInputEnvelope;
    set?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    disconnect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    delete?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    update?: Prisma.MarkUpdateWithWhereUniqueWithoutStudentInput | Prisma.MarkUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.MarkUpdateManyWithWhereWithoutStudentInput | Prisma.MarkUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.MarkScalarWhereInput | Prisma.MarkScalarWhereInput[];
};
export type MarkCreateNestedManyWithoutExamScheduleInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutExamScheduleInput, Prisma.MarkUncheckedCreateWithoutExamScheduleInput> | Prisma.MarkCreateWithoutExamScheduleInput[] | Prisma.MarkUncheckedCreateWithoutExamScheduleInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutExamScheduleInput | Prisma.MarkCreateOrConnectWithoutExamScheduleInput[];
    createMany?: Prisma.MarkCreateManyExamScheduleInputEnvelope;
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
};
export type MarkUncheckedCreateNestedManyWithoutExamScheduleInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutExamScheduleInput, Prisma.MarkUncheckedCreateWithoutExamScheduleInput> | Prisma.MarkCreateWithoutExamScheduleInput[] | Prisma.MarkUncheckedCreateWithoutExamScheduleInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutExamScheduleInput | Prisma.MarkCreateOrConnectWithoutExamScheduleInput[];
    createMany?: Prisma.MarkCreateManyExamScheduleInputEnvelope;
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
};
export type MarkUpdateManyWithoutExamScheduleNestedInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutExamScheduleInput, Prisma.MarkUncheckedCreateWithoutExamScheduleInput> | Prisma.MarkCreateWithoutExamScheduleInput[] | Prisma.MarkUncheckedCreateWithoutExamScheduleInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutExamScheduleInput | Prisma.MarkCreateOrConnectWithoutExamScheduleInput[];
    upsert?: Prisma.MarkUpsertWithWhereUniqueWithoutExamScheduleInput | Prisma.MarkUpsertWithWhereUniqueWithoutExamScheduleInput[];
    createMany?: Prisma.MarkCreateManyExamScheduleInputEnvelope;
    set?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    disconnect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    delete?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    update?: Prisma.MarkUpdateWithWhereUniqueWithoutExamScheduleInput | Prisma.MarkUpdateWithWhereUniqueWithoutExamScheduleInput[];
    updateMany?: Prisma.MarkUpdateManyWithWhereWithoutExamScheduleInput | Prisma.MarkUpdateManyWithWhereWithoutExamScheduleInput[];
    deleteMany?: Prisma.MarkScalarWhereInput | Prisma.MarkScalarWhereInput[];
};
export type MarkUncheckedUpdateManyWithoutExamScheduleNestedInput = {
    create?: Prisma.XOR<Prisma.MarkCreateWithoutExamScheduleInput, Prisma.MarkUncheckedCreateWithoutExamScheduleInput> | Prisma.MarkCreateWithoutExamScheduleInput[] | Prisma.MarkUncheckedCreateWithoutExamScheduleInput[];
    connectOrCreate?: Prisma.MarkCreateOrConnectWithoutExamScheduleInput | Prisma.MarkCreateOrConnectWithoutExamScheduleInput[];
    upsert?: Prisma.MarkUpsertWithWhereUniqueWithoutExamScheduleInput | Prisma.MarkUpsertWithWhereUniqueWithoutExamScheduleInput[];
    createMany?: Prisma.MarkCreateManyExamScheduleInputEnvelope;
    set?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    disconnect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    delete?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    connect?: Prisma.MarkWhereUniqueInput | Prisma.MarkWhereUniqueInput[];
    update?: Prisma.MarkUpdateWithWhereUniqueWithoutExamScheduleInput | Prisma.MarkUpdateWithWhereUniqueWithoutExamScheduleInput[];
    updateMany?: Prisma.MarkUpdateManyWithWhereWithoutExamScheduleInput | Prisma.MarkUpdateManyWithWhereWithoutExamScheduleInput[];
    deleteMany?: Prisma.MarkScalarWhereInput | Prisma.MarkScalarWhereInput[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type MarkCreateWithoutSchoolInput = {
    id?: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    examSchedule: Prisma.ExamScheduleCreateNestedOneWithoutMarksInput;
    student: Prisma.StudentCreateNestedOneWithoutMarksInput;
    enteredBy: Prisma.UserCreateNestedOneWithoutEnteredMarksInput;
};
export type MarkUncheckedCreateWithoutSchoolInput = {
    id?: string;
    examScheduleId: string;
    studentId: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    enteredById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MarkCreateOrConnectWithoutSchoolInput = {
    where: Prisma.MarkWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarkCreateWithoutSchoolInput, Prisma.MarkUncheckedCreateWithoutSchoolInput>;
};
export type MarkCreateManySchoolInputEnvelope = {
    data: Prisma.MarkCreateManySchoolInput | Prisma.MarkCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type MarkUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.MarkWhereUniqueInput;
    update: Prisma.XOR<Prisma.MarkUpdateWithoutSchoolInput, Prisma.MarkUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.MarkCreateWithoutSchoolInput, Prisma.MarkUncheckedCreateWithoutSchoolInput>;
};
export type MarkUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.MarkWhereUniqueInput;
    data: Prisma.XOR<Prisma.MarkUpdateWithoutSchoolInput, Prisma.MarkUncheckedUpdateWithoutSchoolInput>;
};
export type MarkUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.MarkScalarWhereInput;
    data: Prisma.XOR<Prisma.MarkUpdateManyMutationInput, Prisma.MarkUncheckedUpdateManyWithoutSchoolInput>;
};
export type MarkScalarWhereInput = {
    AND?: Prisma.MarkScalarWhereInput | Prisma.MarkScalarWhereInput[];
    OR?: Prisma.MarkScalarWhereInput[];
    NOT?: Prisma.MarkScalarWhereInput | Prisma.MarkScalarWhereInput[];
    id?: Prisma.StringFilter<"Mark"> | string;
    schoolId?: Prisma.StringFilter<"Mark"> | string;
    examScheduleId?: Prisma.StringFilter<"Mark"> | string;
    studentId?: Prisma.StringFilter<"Mark"> | string;
    marksObtained?: Prisma.DecimalNullableFilter<"Mark"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFilter<"Mark"> | boolean;
    remarks?: Prisma.StringNullableFilter<"Mark"> | string | null;
    enteredById?: Prisma.StringFilter<"Mark"> | string;
    createdAt?: Prisma.DateTimeFilter<"Mark"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Mark"> | Date | string;
};
export type MarkCreateWithoutEnteredByInput = {
    id?: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutMarksInput;
    examSchedule: Prisma.ExamScheduleCreateNestedOneWithoutMarksInput;
    student: Prisma.StudentCreateNestedOneWithoutMarksInput;
};
export type MarkUncheckedCreateWithoutEnteredByInput = {
    id?: string;
    schoolId: string;
    examScheduleId: string;
    studentId: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MarkCreateOrConnectWithoutEnteredByInput = {
    where: Prisma.MarkWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarkCreateWithoutEnteredByInput, Prisma.MarkUncheckedCreateWithoutEnteredByInput>;
};
export type MarkCreateManyEnteredByInputEnvelope = {
    data: Prisma.MarkCreateManyEnteredByInput | Prisma.MarkCreateManyEnteredByInput[];
    skipDuplicates?: boolean;
};
export type MarkUpsertWithWhereUniqueWithoutEnteredByInput = {
    where: Prisma.MarkWhereUniqueInput;
    update: Prisma.XOR<Prisma.MarkUpdateWithoutEnteredByInput, Prisma.MarkUncheckedUpdateWithoutEnteredByInput>;
    create: Prisma.XOR<Prisma.MarkCreateWithoutEnteredByInput, Prisma.MarkUncheckedCreateWithoutEnteredByInput>;
};
export type MarkUpdateWithWhereUniqueWithoutEnteredByInput = {
    where: Prisma.MarkWhereUniqueInput;
    data: Prisma.XOR<Prisma.MarkUpdateWithoutEnteredByInput, Prisma.MarkUncheckedUpdateWithoutEnteredByInput>;
};
export type MarkUpdateManyWithWhereWithoutEnteredByInput = {
    where: Prisma.MarkScalarWhereInput;
    data: Prisma.XOR<Prisma.MarkUpdateManyMutationInput, Prisma.MarkUncheckedUpdateManyWithoutEnteredByInput>;
};
export type MarkCreateWithoutStudentInput = {
    id?: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutMarksInput;
    examSchedule: Prisma.ExamScheduleCreateNestedOneWithoutMarksInput;
    enteredBy: Prisma.UserCreateNestedOneWithoutEnteredMarksInput;
};
export type MarkUncheckedCreateWithoutStudentInput = {
    id?: string;
    schoolId: string;
    examScheduleId: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    enteredById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MarkCreateOrConnectWithoutStudentInput = {
    where: Prisma.MarkWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarkCreateWithoutStudentInput, Prisma.MarkUncheckedCreateWithoutStudentInput>;
};
export type MarkCreateManyStudentInputEnvelope = {
    data: Prisma.MarkCreateManyStudentInput | Prisma.MarkCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type MarkUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.MarkWhereUniqueInput;
    update: Prisma.XOR<Prisma.MarkUpdateWithoutStudentInput, Prisma.MarkUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.MarkCreateWithoutStudentInput, Prisma.MarkUncheckedCreateWithoutStudentInput>;
};
export type MarkUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.MarkWhereUniqueInput;
    data: Prisma.XOR<Prisma.MarkUpdateWithoutStudentInput, Prisma.MarkUncheckedUpdateWithoutStudentInput>;
};
export type MarkUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.MarkScalarWhereInput;
    data: Prisma.XOR<Prisma.MarkUpdateManyMutationInput, Prisma.MarkUncheckedUpdateManyWithoutStudentInput>;
};
export type MarkCreateWithoutExamScheduleInput = {
    id?: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutMarksInput;
    student: Prisma.StudentCreateNestedOneWithoutMarksInput;
    enteredBy: Prisma.UserCreateNestedOneWithoutEnteredMarksInput;
};
export type MarkUncheckedCreateWithoutExamScheduleInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    enteredById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MarkCreateOrConnectWithoutExamScheduleInput = {
    where: Prisma.MarkWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarkCreateWithoutExamScheduleInput, Prisma.MarkUncheckedCreateWithoutExamScheduleInput>;
};
export type MarkCreateManyExamScheduleInputEnvelope = {
    data: Prisma.MarkCreateManyExamScheduleInput | Prisma.MarkCreateManyExamScheduleInput[];
    skipDuplicates?: boolean;
};
export type MarkUpsertWithWhereUniqueWithoutExamScheduleInput = {
    where: Prisma.MarkWhereUniqueInput;
    update: Prisma.XOR<Prisma.MarkUpdateWithoutExamScheduleInput, Prisma.MarkUncheckedUpdateWithoutExamScheduleInput>;
    create: Prisma.XOR<Prisma.MarkCreateWithoutExamScheduleInput, Prisma.MarkUncheckedCreateWithoutExamScheduleInput>;
};
export type MarkUpdateWithWhereUniqueWithoutExamScheduleInput = {
    where: Prisma.MarkWhereUniqueInput;
    data: Prisma.XOR<Prisma.MarkUpdateWithoutExamScheduleInput, Prisma.MarkUncheckedUpdateWithoutExamScheduleInput>;
};
export type MarkUpdateManyWithWhereWithoutExamScheduleInput = {
    where: Prisma.MarkScalarWhereInput;
    data: Prisma.XOR<Prisma.MarkUpdateManyMutationInput, Prisma.MarkUncheckedUpdateManyWithoutExamScheduleInput>;
};
export type MarkCreateManySchoolInput = {
    id?: string;
    examScheduleId: string;
    studentId: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    enteredById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MarkUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    examSchedule?: Prisma.ExamScheduleUpdateOneRequiredWithoutMarksNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutMarksNestedInput;
    enteredBy?: Prisma.UserUpdateOneRequiredWithoutEnteredMarksNestedInput;
};
export type MarkUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    examScheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enteredById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarkUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    examScheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enteredById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarkCreateManyEnteredByInput = {
    id?: string;
    schoolId: string;
    examScheduleId: string;
    studentId: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MarkUpdateWithoutEnteredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutMarksNestedInput;
    examSchedule?: Prisma.ExamScheduleUpdateOneRequiredWithoutMarksNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutMarksNestedInput;
};
export type MarkUncheckedUpdateWithoutEnteredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    examScheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarkUncheckedUpdateManyWithoutEnteredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    examScheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarkCreateManyStudentInput = {
    id?: string;
    schoolId: string;
    examScheduleId: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    enteredById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MarkUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutMarksNestedInput;
    examSchedule?: Prisma.ExamScheduleUpdateOneRequiredWithoutMarksNestedInput;
    enteredBy?: Prisma.UserUpdateOneRequiredWithoutEnteredMarksNestedInput;
};
export type MarkUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    examScheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enteredById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarkUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    examScheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enteredById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarkCreateManyExamScheduleInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    marksObtained?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: boolean;
    remarks?: string | null;
    enteredById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MarkUpdateWithoutExamScheduleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutMarksNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutMarksNestedInput;
    enteredBy?: Prisma.UserUpdateOneRequiredWithoutEnteredMarksNestedInput;
};
export type MarkUncheckedUpdateWithoutExamScheduleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enteredById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarkUncheckedUpdateManyWithoutExamScheduleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    marksObtained?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isAbsent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enteredById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    examScheduleId?: boolean;
    studentId?: boolean;
    marksObtained?: boolean;
    isAbsent?: boolean;
    remarks?: boolean;
    enteredById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    examSchedule?: boolean | Prisma.ExamScheduleDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    enteredBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mark"]>;
export type MarkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    examScheduleId?: boolean;
    studentId?: boolean;
    marksObtained?: boolean;
    isAbsent?: boolean;
    remarks?: boolean;
    enteredById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    examSchedule?: boolean | Prisma.ExamScheduleDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    enteredBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mark"]>;
export type MarkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    examScheduleId?: boolean;
    studentId?: boolean;
    marksObtained?: boolean;
    isAbsent?: boolean;
    remarks?: boolean;
    enteredById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    examSchedule?: boolean | Prisma.ExamScheduleDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    enteredBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mark"]>;
export type MarkSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    examScheduleId?: boolean;
    studentId?: boolean;
    marksObtained?: boolean;
    isAbsent?: boolean;
    remarks?: boolean;
    enteredById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MarkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "examScheduleId" | "studentId" | "marksObtained" | "isAbsent" | "remarks" | "enteredById" | "createdAt" | "updatedAt", ExtArgs["result"]["mark"]>;
export type MarkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    examSchedule?: boolean | Prisma.ExamScheduleDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    enteredBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MarkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    examSchedule?: boolean | Prisma.ExamScheduleDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    enteredBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MarkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    examSchedule?: boolean | Prisma.ExamScheduleDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    enteredBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MarkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Mark";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        examSchedule: Prisma.$ExamSchedulePayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs>;
        enteredBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        examScheduleId: string;
        studentId: string;
        marksObtained: runtime.Decimal | null;
        isAbsent: boolean;
        remarks: string | null;
        enteredById: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["mark"]>;
    composites: {};
};
export type MarkGetPayload<S extends boolean | null | undefined | MarkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MarkPayload, S>;
export type MarkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MarkCountAggregateInputType | true;
};
export interface MarkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Mark'];
        meta: {
            name: 'Mark';
        };
    };
    findUnique<T extends MarkFindUniqueArgs>(args: Prisma.SelectSubset<T, MarkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MarkClient<runtime.Types.Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MarkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MarkClient<runtime.Types.Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MarkFindFirstArgs>(args?: Prisma.SelectSubset<T, MarkFindFirstArgs<ExtArgs>>): Prisma.Prisma__MarkClient<runtime.Types.Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MarkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MarkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MarkClient<runtime.Types.Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MarkFindManyArgs>(args?: Prisma.SelectSubset<T, MarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MarkCreateArgs>(args: Prisma.SelectSubset<T, MarkCreateArgs<ExtArgs>>): Prisma.Prisma__MarkClient<runtime.Types.Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MarkCreateManyArgs>(args?: Prisma.SelectSubset<T, MarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MarkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MarkDeleteArgs>(args: Prisma.SelectSubset<T, MarkDeleteArgs<ExtArgs>>): Prisma.Prisma__MarkClient<runtime.Types.Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MarkUpdateArgs>(args: Prisma.SelectSubset<T, MarkUpdateArgs<ExtArgs>>): Prisma.Prisma__MarkClient<runtime.Types.Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MarkDeleteManyArgs>(args?: Prisma.SelectSubset<T, MarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MarkUpdateManyArgs>(args: Prisma.SelectSubset<T, MarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MarkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MarkUpsertArgs>(args: Prisma.SelectSubset<T, MarkUpsertArgs<ExtArgs>>): Prisma.Prisma__MarkClient<runtime.Types.Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MarkCountArgs>(args?: Prisma.Subset<T, MarkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MarkCountAggregateOutputType> : number>;
    aggregate<T extends MarkAggregateArgs>(args: Prisma.Subset<T, MarkAggregateArgs>): Prisma.PrismaPromise<GetMarkAggregateType<T>>;
    groupBy<T extends MarkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MarkGroupByArgs['orderBy'];
    } : {
        orderBy?: MarkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MarkFieldRefs;
}
export interface Prisma__MarkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    examSchedule<T extends Prisma.ExamScheduleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExamScheduleDefaultArgs<ExtArgs>>): Prisma.Prisma__ExamScheduleClient<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    enteredBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MarkFieldRefs {
    readonly id: Prisma.FieldRef<"Mark", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Mark", 'String'>;
    readonly examScheduleId: Prisma.FieldRef<"Mark", 'String'>;
    readonly studentId: Prisma.FieldRef<"Mark", 'String'>;
    readonly marksObtained: Prisma.FieldRef<"Mark", 'Decimal'>;
    readonly isAbsent: Prisma.FieldRef<"Mark", 'Boolean'>;
    readonly remarks: Prisma.FieldRef<"Mark", 'String'>;
    readonly enteredById: Prisma.FieldRef<"Mark", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Mark", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Mark", 'DateTime'>;
}
export type MarkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarkSelect<ExtArgs> | null;
    omit?: Prisma.MarkOmit<ExtArgs> | null;
    include?: Prisma.MarkInclude<ExtArgs> | null;
    where: Prisma.MarkWhereUniqueInput;
};
export type MarkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarkSelect<ExtArgs> | null;
    omit?: Prisma.MarkOmit<ExtArgs> | null;
    include?: Prisma.MarkInclude<ExtArgs> | null;
    where: Prisma.MarkWhereUniqueInput;
};
export type MarkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarkSelect<ExtArgs> | null;
    omit?: Prisma.MarkOmit<ExtArgs> | null;
    include?: Prisma.MarkInclude<ExtArgs> | null;
    where?: Prisma.MarkWhereInput;
    orderBy?: Prisma.MarkOrderByWithRelationInput | Prisma.MarkOrderByWithRelationInput[];
    cursor?: Prisma.MarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarkScalarFieldEnum | Prisma.MarkScalarFieldEnum[];
};
export type MarkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarkSelect<ExtArgs> | null;
    omit?: Prisma.MarkOmit<ExtArgs> | null;
    include?: Prisma.MarkInclude<ExtArgs> | null;
    where?: Prisma.MarkWhereInput;
    orderBy?: Prisma.MarkOrderByWithRelationInput | Prisma.MarkOrderByWithRelationInput[];
    cursor?: Prisma.MarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarkScalarFieldEnum | Prisma.MarkScalarFieldEnum[];
};
export type MarkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarkSelect<ExtArgs> | null;
    omit?: Prisma.MarkOmit<ExtArgs> | null;
    include?: Prisma.MarkInclude<ExtArgs> | null;
    where?: Prisma.MarkWhereInput;
    orderBy?: Prisma.MarkOrderByWithRelationInput | Prisma.MarkOrderByWithRelationInput[];
    cursor?: Prisma.MarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarkScalarFieldEnum | Prisma.MarkScalarFieldEnum[];
};
export type MarkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarkSelect<ExtArgs> | null;
    omit?: Prisma.MarkOmit<ExtArgs> | null;
    include?: Prisma.MarkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MarkCreateInput, Prisma.MarkUncheckedCreateInput>;
};
export type MarkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MarkCreateManyInput | Prisma.MarkCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MarkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarkSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MarkOmit<ExtArgs> | null;
    data: Prisma.MarkCreateManyInput | Prisma.MarkCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MarkIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MarkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarkSelect<ExtArgs> | null;
    omit?: Prisma.MarkOmit<ExtArgs> | null;
    include?: Prisma.MarkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MarkUpdateInput, Prisma.MarkUncheckedUpdateInput>;
    where: Prisma.MarkWhereUniqueInput;
};
export type MarkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MarkUpdateManyMutationInput, Prisma.MarkUncheckedUpdateManyInput>;
    where?: Prisma.MarkWhereInput;
    limit?: number;
};
export type MarkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarkSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MarkOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MarkUpdateManyMutationInput, Prisma.MarkUncheckedUpdateManyInput>;
    where?: Prisma.MarkWhereInput;
    limit?: number;
    include?: Prisma.MarkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MarkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarkSelect<ExtArgs> | null;
    omit?: Prisma.MarkOmit<ExtArgs> | null;
    include?: Prisma.MarkInclude<ExtArgs> | null;
    where: Prisma.MarkWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarkCreateInput, Prisma.MarkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MarkUpdateInput, Prisma.MarkUncheckedUpdateInput>;
};
export type MarkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarkSelect<ExtArgs> | null;
    omit?: Prisma.MarkOmit<ExtArgs> | null;
    include?: Prisma.MarkInclude<ExtArgs> | null;
    where: Prisma.MarkWhereUniqueInput;
};
export type MarkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarkWhereInput;
    limit?: number;
};
export type MarkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarkSelect<ExtArgs> | null;
    omit?: Prisma.MarkOmit<ExtArgs> | null;
    include?: Prisma.MarkInclude<ExtArgs> | null;
};
