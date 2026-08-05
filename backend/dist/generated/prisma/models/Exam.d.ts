import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExamModel = runtime.Types.Result.DefaultSelection<Prisma.$ExamPayload>;
export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null;
    _min: ExamMinAggregateOutputType | null;
    _max: ExamMaxAggregateOutputType | null;
};
export type ExamMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    academicYearId: string | null;
    examTypeId: string | null;
    name: string | null;
    startDate: Date | null;
    endDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExamMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    academicYearId: string | null;
    examTypeId: string | null;
    name: string | null;
    startDate: Date | null;
    endDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExamCountAggregateOutputType = {
    id: number;
    schoolId: number;
    academicYearId: number;
    examTypeId: number;
    name: number;
    startDate: number;
    endDate: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ExamMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    academicYearId?: true;
    examTypeId?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExamMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    academicYearId?: true;
    examTypeId?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExamCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    academicYearId?: true;
    examTypeId?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ExamAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    cursor?: Prisma.ExamWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExamCountAggregateInputType;
    _min?: ExamMinAggregateInputType;
    _max?: ExamMaxAggregateInputType;
};
export type GetExamAggregateType<T extends ExamAggregateArgs> = {
    [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExam[P]> : Prisma.GetScalarType<T[P], AggregateExam[P]>;
};
export type ExamGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithAggregationInput | Prisma.ExamOrderByWithAggregationInput[];
    by: Prisma.ExamScalarFieldEnum[] | Prisma.ExamScalarFieldEnum;
    having?: Prisma.ExamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExamCountAggregateInputType | true;
    _min?: ExamMinAggregateInputType;
    _max?: ExamMaxAggregateInputType;
};
export type ExamGroupByOutputType = {
    id: string;
    schoolId: string;
    academicYearId: string;
    examTypeId: string;
    name: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: ExamCountAggregateOutputType | null;
    _min: ExamMinAggregateOutputType | null;
    _max: ExamMaxAggregateOutputType | null;
};
export type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExamGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExamGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExamGroupByOutputType[P]>;
}>>;
export type ExamWhereInput = {
    AND?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    OR?: Prisma.ExamWhereInput[];
    NOT?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    id?: Prisma.StringFilter<"Exam"> | string;
    schoolId?: Prisma.StringFilter<"Exam"> | string;
    academicYearId?: Prisma.StringFilter<"Exam"> | string;
    examTypeId?: Prisma.StringFilter<"Exam"> | string;
    name?: Prisma.StringFilter<"Exam"> | string;
    startDate?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
    examType?: Prisma.XOR<Prisma.ExamTypeScalarRelationFilter, Prisma.ExamTypeWhereInput>;
    examSchedules?: Prisma.ExamScheduleListRelationFilter;
};
export type ExamOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    examTypeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    academicYear?: Prisma.AcademicYearOrderByWithRelationInput;
    examType?: Prisma.ExamTypeOrderByWithRelationInput;
    examSchedules?: Prisma.ExamScheduleOrderByRelationAggregateInput;
};
export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    OR?: Prisma.ExamWhereInput[];
    NOT?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    schoolId?: Prisma.StringFilter<"Exam"> | string;
    academicYearId?: Prisma.StringFilter<"Exam"> | string;
    examTypeId?: Prisma.StringFilter<"Exam"> | string;
    name?: Prisma.StringFilter<"Exam"> | string;
    startDate?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
    examType?: Prisma.XOR<Prisma.ExamTypeScalarRelationFilter, Prisma.ExamTypeWhereInput>;
    examSchedules?: Prisma.ExamScheduleListRelationFilter;
}, "id">;
export type ExamOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    examTypeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ExamCountOrderByAggregateInput;
    _max?: Prisma.ExamMaxOrderByAggregateInput;
    _min?: Prisma.ExamMinOrderByAggregateInput;
};
export type ExamScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExamScalarWhereWithAggregatesInput | Prisma.ExamScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExamScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExamScalarWhereWithAggregatesInput | Prisma.ExamScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    academicYearId?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    examTypeId?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Exam"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"Exam"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Exam"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Exam"> | Date | string;
};
export type ExamCreateInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamsInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutExamsInput;
    examType: Prisma.ExamTypeCreateNestedOneWithoutExamsInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    examTypeId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamsNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutExamsNestedInput;
    examType?: Prisma.ExamTypeUpdateOneRequiredWithoutExamsNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    examTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamCreateManyInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    examTypeId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    examTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamListRelationFilter = {
    every?: Prisma.ExamWhereInput;
    some?: Prisma.ExamWhereInput;
    none?: Prisma.ExamWhereInput;
};
export type ExamOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExamCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    examTypeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    examTypeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    examTypeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamScalarRelationFilter = {
    is?: Prisma.ExamWhereInput;
    isNot?: Prisma.ExamWhereInput;
};
export type ExamCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutSchoolInput, Prisma.ExamUncheckedCreateWithoutSchoolInput> | Prisma.ExamCreateWithoutSchoolInput[] | Prisma.ExamUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutSchoolInput | Prisma.ExamCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.ExamCreateManySchoolInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutSchoolInput, Prisma.ExamUncheckedCreateWithoutSchoolInput> | Prisma.ExamCreateWithoutSchoolInput[] | Prisma.ExamUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutSchoolInput | Prisma.ExamCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.ExamCreateManySchoolInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutSchoolInput, Prisma.ExamUncheckedCreateWithoutSchoolInput> | Prisma.ExamCreateWithoutSchoolInput[] | Prisma.ExamUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutSchoolInput | Prisma.ExamCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutSchoolInput | Prisma.ExamUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.ExamCreateManySchoolInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutSchoolInput | Prisma.ExamUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutSchoolInput | Prisma.ExamUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutSchoolInput, Prisma.ExamUncheckedCreateWithoutSchoolInput> | Prisma.ExamCreateWithoutSchoolInput[] | Prisma.ExamUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutSchoolInput | Prisma.ExamCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutSchoolInput | Prisma.ExamUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.ExamCreateManySchoolInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutSchoolInput | Prisma.ExamUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutSchoolInput | Prisma.ExamUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutAcademicYearInput, Prisma.ExamUncheckedCreateWithoutAcademicYearInput> | Prisma.ExamCreateWithoutAcademicYearInput[] | Prisma.ExamUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutAcademicYearInput | Prisma.ExamCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.ExamCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUncheckedCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutAcademicYearInput, Prisma.ExamUncheckedCreateWithoutAcademicYearInput> | Prisma.ExamCreateWithoutAcademicYearInput[] | Prisma.ExamUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutAcademicYearInput | Prisma.ExamCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.ExamCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutAcademicYearInput, Prisma.ExamUncheckedCreateWithoutAcademicYearInput> | Prisma.ExamCreateWithoutAcademicYearInput[] | Prisma.ExamUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutAcademicYearInput | Prisma.ExamCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.ExamUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.ExamCreateManyAcademicYearInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.ExamUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutAcademicYearInput | Prisma.ExamUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamUncheckedUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutAcademicYearInput, Prisma.ExamUncheckedCreateWithoutAcademicYearInput> | Prisma.ExamCreateWithoutAcademicYearInput[] | Prisma.ExamUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutAcademicYearInput | Prisma.ExamCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.ExamUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.ExamCreateManyAcademicYearInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.ExamUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutAcademicYearInput | Prisma.ExamUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamCreateNestedManyWithoutExamTypeInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutExamTypeInput, Prisma.ExamUncheckedCreateWithoutExamTypeInput> | Prisma.ExamCreateWithoutExamTypeInput[] | Prisma.ExamUncheckedCreateWithoutExamTypeInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutExamTypeInput | Prisma.ExamCreateOrConnectWithoutExamTypeInput[];
    createMany?: Prisma.ExamCreateManyExamTypeInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUncheckedCreateNestedManyWithoutExamTypeInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutExamTypeInput, Prisma.ExamUncheckedCreateWithoutExamTypeInput> | Prisma.ExamCreateWithoutExamTypeInput[] | Prisma.ExamUncheckedCreateWithoutExamTypeInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutExamTypeInput | Prisma.ExamCreateOrConnectWithoutExamTypeInput[];
    createMany?: Prisma.ExamCreateManyExamTypeInputEnvelope;
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
};
export type ExamUpdateManyWithoutExamTypeNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutExamTypeInput, Prisma.ExamUncheckedCreateWithoutExamTypeInput> | Prisma.ExamCreateWithoutExamTypeInput[] | Prisma.ExamUncheckedCreateWithoutExamTypeInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutExamTypeInput | Prisma.ExamCreateOrConnectWithoutExamTypeInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutExamTypeInput | Prisma.ExamUpsertWithWhereUniqueWithoutExamTypeInput[];
    createMany?: Prisma.ExamCreateManyExamTypeInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutExamTypeInput | Prisma.ExamUpdateWithWhereUniqueWithoutExamTypeInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutExamTypeInput | Prisma.ExamUpdateManyWithWhereWithoutExamTypeInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamUncheckedUpdateManyWithoutExamTypeNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutExamTypeInput, Prisma.ExamUncheckedCreateWithoutExamTypeInput> | Prisma.ExamCreateWithoutExamTypeInput[] | Prisma.ExamUncheckedCreateWithoutExamTypeInput[];
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutExamTypeInput | Prisma.ExamCreateOrConnectWithoutExamTypeInput[];
    upsert?: Prisma.ExamUpsertWithWhereUniqueWithoutExamTypeInput | Prisma.ExamUpsertWithWhereUniqueWithoutExamTypeInput[];
    createMany?: Prisma.ExamCreateManyExamTypeInputEnvelope;
    set?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    disconnect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    delete?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    connect?: Prisma.ExamWhereUniqueInput | Prisma.ExamWhereUniqueInput[];
    update?: Prisma.ExamUpdateWithWhereUniqueWithoutExamTypeInput | Prisma.ExamUpdateWithWhereUniqueWithoutExamTypeInput[];
    updateMany?: Prisma.ExamUpdateManyWithWhereWithoutExamTypeInput | Prisma.ExamUpdateManyWithWhereWithoutExamTypeInput[];
    deleteMany?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
};
export type ExamCreateNestedOneWithoutExamSchedulesInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutExamSchedulesInput, Prisma.ExamUncheckedCreateWithoutExamSchedulesInput>;
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutExamSchedulesInput;
    connect?: Prisma.ExamWhereUniqueInput;
};
export type ExamUpdateOneRequiredWithoutExamSchedulesNestedInput = {
    create?: Prisma.XOR<Prisma.ExamCreateWithoutExamSchedulesInput, Prisma.ExamUncheckedCreateWithoutExamSchedulesInput>;
    connectOrCreate?: Prisma.ExamCreateOrConnectWithoutExamSchedulesInput;
    upsert?: Prisma.ExamUpsertWithoutExamSchedulesInput;
    connect?: Prisma.ExamWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExamUpdateToOneWithWhereWithoutExamSchedulesInput, Prisma.ExamUpdateWithoutExamSchedulesInput>, Prisma.ExamUncheckedUpdateWithoutExamSchedulesInput>;
};
export type ExamCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutExamsInput;
    examType: Prisma.ExamTypeCreateNestedOneWithoutExamsInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateWithoutSchoolInput = {
    id?: string;
    academicYearId: string;
    examTypeId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamCreateOrConnectWithoutSchoolInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutSchoolInput, Prisma.ExamUncheckedCreateWithoutSchoolInput>;
};
export type ExamCreateManySchoolInputEnvelope = {
    data: Prisma.ExamCreateManySchoolInput | Prisma.ExamCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type ExamUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.ExamWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamUpdateWithoutSchoolInput, Prisma.ExamUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutSchoolInput, Prisma.ExamUncheckedCreateWithoutSchoolInput>;
};
export type ExamUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.ExamWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutSchoolInput, Prisma.ExamUncheckedUpdateWithoutSchoolInput>;
};
export type ExamUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.ExamScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyWithoutSchoolInput>;
};
export type ExamScalarWhereInput = {
    AND?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
    OR?: Prisma.ExamScalarWhereInput[];
    NOT?: Prisma.ExamScalarWhereInput | Prisma.ExamScalarWhereInput[];
    id?: Prisma.StringFilter<"Exam"> | string;
    schoolId?: Prisma.StringFilter<"Exam"> | string;
    academicYearId?: Prisma.StringFilter<"Exam"> | string;
    examTypeId?: Prisma.StringFilter<"Exam"> | string;
    name?: Prisma.StringFilter<"Exam"> | string;
    startDate?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
};
export type ExamCreateWithoutAcademicYearInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamsInput;
    examType: Prisma.ExamTypeCreateNestedOneWithoutExamsInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateWithoutAcademicYearInput = {
    id?: string;
    schoolId: string;
    examTypeId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamCreateOrConnectWithoutAcademicYearInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutAcademicYearInput, Prisma.ExamUncheckedCreateWithoutAcademicYearInput>;
};
export type ExamCreateManyAcademicYearInputEnvelope = {
    data: Prisma.ExamCreateManyAcademicYearInput | Prisma.ExamCreateManyAcademicYearInput[];
    skipDuplicates?: boolean;
};
export type ExamUpsertWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.ExamWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamUpdateWithoutAcademicYearInput, Prisma.ExamUncheckedUpdateWithoutAcademicYearInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutAcademicYearInput, Prisma.ExamUncheckedCreateWithoutAcademicYearInput>;
};
export type ExamUpdateWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.ExamWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutAcademicYearInput, Prisma.ExamUncheckedUpdateWithoutAcademicYearInput>;
};
export type ExamUpdateManyWithWhereWithoutAcademicYearInput = {
    where: Prisma.ExamScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyWithoutAcademicYearInput>;
};
export type ExamCreateWithoutExamTypeInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamsInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutExamsInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutExamInput;
};
export type ExamUncheckedCreateWithoutExamTypeInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutExamInput;
};
export type ExamCreateOrConnectWithoutExamTypeInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutExamTypeInput, Prisma.ExamUncheckedCreateWithoutExamTypeInput>;
};
export type ExamCreateManyExamTypeInputEnvelope = {
    data: Prisma.ExamCreateManyExamTypeInput | Prisma.ExamCreateManyExamTypeInput[];
    skipDuplicates?: boolean;
};
export type ExamUpsertWithWhereUniqueWithoutExamTypeInput = {
    where: Prisma.ExamWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamUpdateWithoutExamTypeInput, Prisma.ExamUncheckedUpdateWithoutExamTypeInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutExamTypeInput, Prisma.ExamUncheckedCreateWithoutExamTypeInput>;
};
export type ExamUpdateWithWhereUniqueWithoutExamTypeInput = {
    where: Prisma.ExamWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutExamTypeInput, Prisma.ExamUncheckedUpdateWithoutExamTypeInput>;
};
export type ExamUpdateManyWithWhereWithoutExamTypeInput = {
    where: Prisma.ExamScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyWithoutExamTypeInput>;
};
export type ExamCreateWithoutExamSchedulesInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamsInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutExamsInput;
    examType: Prisma.ExamTypeCreateNestedOneWithoutExamsInput;
};
export type ExamUncheckedCreateWithoutExamSchedulesInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    examTypeId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamCreateOrConnectWithoutExamSchedulesInput = {
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateWithoutExamSchedulesInput, Prisma.ExamUncheckedCreateWithoutExamSchedulesInput>;
};
export type ExamUpsertWithoutExamSchedulesInput = {
    update: Prisma.XOR<Prisma.ExamUpdateWithoutExamSchedulesInput, Prisma.ExamUncheckedUpdateWithoutExamSchedulesInput>;
    create: Prisma.XOR<Prisma.ExamCreateWithoutExamSchedulesInput, Prisma.ExamUncheckedCreateWithoutExamSchedulesInput>;
    where?: Prisma.ExamWhereInput;
};
export type ExamUpdateToOneWithWhereWithoutExamSchedulesInput = {
    where?: Prisma.ExamWhereInput;
    data: Prisma.XOR<Prisma.ExamUpdateWithoutExamSchedulesInput, Prisma.ExamUncheckedUpdateWithoutExamSchedulesInput>;
};
export type ExamUpdateWithoutExamSchedulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamsNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutExamsNestedInput;
    examType?: Prisma.ExamTypeUpdateOneRequiredWithoutExamsNestedInput;
};
export type ExamUncheckedUpdateWithoutExamSchedulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    examTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamCreateManySchoolInput = {
    id?: string;
    academicYearId: string;
    examTypeId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutExamsNestedInput;
    examType?: Prisma.ExamTypeUpdateOneRequiredWithoutExamsNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    examTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    examTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamCreateManyAcademicYearInput = {
    id?: string;
    schoolId: string;
    examTypeId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamsNestedInput;
    examType?: Prisma.ExamTypeUpdateOneRequiredWithoutExamsNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    examTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateManyWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    examTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamCreateManyExamTypeInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamUpdateWithoutExamTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamsNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutExamsNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateWithoutExamTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutExamNestedInput;
};
export type ExamUncheckedUpdateManyWithoutExamTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamCountOutputType = {
    examSchedules: number;
};
export type ExamCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    examSchedules?: boolean | ExamCountOutputTypeCountExamSchedulesArgs;
};
export type ExamCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamCountOutputTypeSelect<ExtArgs> | null;
};
export type ExamCountOutputTypeCountExamSchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamScheduleWhereInput;
};
export type ExamSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    academicYearId?: boolean;
    examTypeId?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    examType?: boolean | Prisma.ExamTypeDefaultArgs<ExtArgs>;
    examSchedules?: boolean | Prisma.Exam$examSchedulesArgs<ExtArgs>;
    _count?: boolean | Prisma.ExamCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    academicYearId?: boolean;
    examTypeId?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    examType?: boolean | Prisma.ExamTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    academicYearId?: boolean;
    examTypeId?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    examType?: boolean | Prisma.ExamTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    academicYearId?: boolean;
    examTypeId?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ExamOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "academicYearId" | "examTypeId" | "name" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["exam"]>;
export type ExamInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    examType?: boolean | Prisma.ExamTypeDefaultArgs<ExtArgs>;
    examSchedules?: boolean | Prisma.Exam$examSchedulesArgs<ExtArgs>;
    _count?: boolean | Prisma.ExamCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ExamIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    examType?: boolean | Prisma.ExamTypeDefaultArgs<ExtArgs>;
};
export type ExamIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    examType?: boolean | Prisma.ExamTypeDefaultArgs<ExtArgs>;
};
export type $ExamPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Exam";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        academicYear: Prisma.$AcademicYearPayload<ExtArgs>;
        examType: Prisma.$ExamTypePayload<ExtArgs>;
        examSchedules: Prisma.$ExamSchedulePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        academicYearId: string;
        examTypeId: string;
        name: string;
        startDate: Date;
        endDate: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["exam"]>;
    composites: {};
};
export type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExamPayload, S>;
export type ExamCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExamCountAggregateInputType | true;
};
export interface ExamDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Exam'];
        meta: {
            name: 'Exam';
        };
    };
    findUnique<T extends ExamFindUniqueArgs>(args: Prisma.SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExamFindFirstArgs>(args?: Prisma.SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExamFindManyArgs>(args?: Prisma.SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExamCreateArgs>(args: Prisma.SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExamCreateManyArgs>(args?: Prisma.SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExamDeleteArgs>(args: Prisma.SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExamUpdateArgs>(args: Prisma.SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExamDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExamUpdateManyArgs>(args: Prisma.SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExamUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExamUpsertArgs>(args: Prisma.SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExamCountArgs>(args?: Prisma.Subset<T, ExamCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExamCountAggregateOutputType> : number>;
    aggregate<T extends ExamAggregateArgs>(args: Prisma.Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>;
    groupBy<T extends ExamGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExamGroupByArgs['orderBy'];
    } : {
        orderBy?: ExamGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExamFieldRefs;
}
export interface Prisma__ExamClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    academicYear<T extends Prisma.AcademicYearDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYearDefaultArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    examType<T extends Prisma.ExamTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExamTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__ExamTypeClient<runtime.Types.Result.GetResult<Prisma.$ExamTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    examSchedules<T extends Prisma.Exam$examSchedulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Exam$examSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExamFieldRefs {
    readonly id: Prisma.FieldRef<"Exam", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Exam", 'String'>;
    readonly academicYearId: Prisma.FieldRef<"Exam", 'String'>;
    readonly examTypeId: Prisma.FieldRef<"Exam", 'String'>;
    readonly name: Prisma.FieldRef<"Exam", 'String'>;
    readonly startDate: Prisma.FieldRef<"Exam", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Exam", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Exam", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Exam", 'DateTime'>;
}
export type ExamFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where: Prisma.ExamWhereUniqueInput;
};
export type ExamFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where: Prisma.ExamWhereUniqueInput;
};
export type ExamFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamCreateInput, Prisma.ExamUncheckedCreateInput>;
};
export type ExamCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExamCreateManyInput | Prisma.ExamCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExamCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    data: Prisma.ExamCreateManyInput | Prisma.ExamCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExamIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExamUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamUpdateInput, Prisma.ExamUncheckedUpdateInput>;
    where: Prisma.ExamWhereUniqueInput;
};
export type ExamUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyInput>;
    where?: Prisma.ExamWhereInput;
    limit?: number;
};
export type ExamUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyInput>;
    where?: Prisma.ExamWhereInput;
    limit?: number;
    include?: Prisma.ExamIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExamUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateInput, Prisma.ExamUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExamUpdateInput, Prisma.ExamUncheckedUpdateInput>;
};
export type ExamDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
    where: Prisma.ExamWhereUniqueInput;
};
export type ExamDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
    limit?: number;
};
export type Exam$examSchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    include?: Prisma.ExamInclude<ExtArgs> | null;
};
