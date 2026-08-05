import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClassModel = runtime.Types.Result.DefaultSelection<Prisma.$ClassPayload>;
export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null;
    _avg: ClassAvgAggregateOutputType | null;
    _sum: ClassSumAggregateOutputType | null;
    _min: ClassMinAggregateOutputType | null;
    _max: ClassMaxAggregateOutputType | null;
};
export type ClassAvgAggregateOutputType = {
    order: number | null;
};
export type ClassSumAggregateOutputType = {
    order: number | null;
};
export type ClassMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    academicYearId: string | null;
    name: string | null;
    order: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClassMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    academicYearId: string | null;
    name: string | null;
    order: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClassCountAggregateOutputType = {
    id: number;
    schoolId: number;
    branchId: number;
    academicYearId: number;
    name: number;
    order: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClassAvgAggregateInputType = {
    order?: true;
};
export type ClassSumAggregateInputType = {
    order?: true;
};
export type ClassMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    academicYearId?: true;
    name?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClassMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    academicYearId?: true;
    name?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClassCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    academicYearId?: true;
    name?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClassAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassWhereInput;
    orderBy?: Prisma.ClassOrderByWithRelationInput | Prisma.ClassOrderByWithRelationInput[];
    cursor?: Prisma.ClassWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClassCountAggregateInputType;
    _avg?: ClassAvgAggregateInputType;
    _sum?: ClassSumAggregateInputType;
    _min?: ClassMinAggregateInputType;
    _max?: ClassMaxAggregateInputType;
};
export type GetClassAggregateType<T extends ClassAggregateArgs> = {
    [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClass[P]> : Prisma.GetScalarType<T[P], AggregateClass[P]>;
};
export type ClassGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassWhereInput;
    orderBy?: Prisma.ClassOrderByWithAggregationInput | Prisma.ClassOrderByWithAggregationInput[];
    by: Prisma.ClassScalarFieldEnum[] | Prisma.ClassScalarFieldEnum;
    having?: Prisma.ClassScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClassCountAggregateInputType | true;
    _avg?: ClassAvgAggregateInputType;
    _sum?: ClassSumAggregateInputType;
    _min?: ClassMinAggregateInputType;
    _max?: ClassMaxAggregateInputType;
};
export type ClassGroupByOutputType = {
    id: string;
    schoolId: string;
    branchId: string;
    academicYearId: string;
    name: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ClassCountAggregateOutputType | null;
    _avg: ClassAvgAggregateOutputType | null;
    _sum: ClassSumAggregateOutputType | null;
    _min: ClassMinAggregateOutputType | null;
    _max: ClassMaxAggregateOutputType | null;
};
export type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClassGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClassGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClassGroupByOutputType[P]>;
}>>;
export type ClassWhereInput = {
    AND?: Prisma.ClassWhereInput | Prisma.ClassWhereInput[];
    OR?: Prisma.ClassWhereInput[];
    NOT?: Prisma.ClassWhereInput | Prisma.ClassWhereInput[];
    id?: Prisma.StringFilter<"Class"> | string;
    schoolId?: Prisma.StringFilter<"Class"> | string;
    branchId?: Prisma.StringFilter<"Class"> | string;
    academicYearId?: Prisma.StringFilter<"Class"> | string;
    name?: Prisma.StringFilter<"Class"> | string;
    order?: Prisma.IntFilter<"Class"> | number;
    createdAt?: Prisma.DateTimeFilter<"Class"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Class"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
    sections?: Prisma.SectionListRelationFilter;
    classSubjects?: Prisma.ClassSubjectListRelationFilter;
    feeStructures?: Prisma.FeeStructureListRelationFilter;
    examSchedules?: Prisma.ExamScheduleListRelationFilter;
};
export type ClassOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    branch?: Prisma.BranchOrderByWithRelationInput;
    academicYear?: Prisma.AcademicYearOrderByWithRelationInput;
    sections?: Prisma.SectionOrderByRelationAggregateInput;
    classSubjects?: Prisma.ClassSubjectOrderByRelationAggregateInput;
    feeStructures?: Prisma.FeeStructureOrderByRelationAggregateInput;
    examSchedules?: Prisma.ExamScheduleOrderByRelationAggregateInput;
};
export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    branchId_academicYearId_name?: Prisma.ClassBranchIdAcademicYearIdNameCompoundUniqueInput;
    AND?: Prisma.ClassWhereInput | Prisma.ClassWhereInput[];
    OR?: Prisma.ClassWhereInput[];
    NOT?: Prisma.ClassWhereInput | Prisma.ClassWhereInput[];
    schoolId?: Prisma.StringFilter<"Class"> | string;
    branchId?: Prisma.StringFilter<"Class"> | string;
    academicYearId?: Prisma.StringFilter<"Class"> | string;
    name?: Prisma.StringFilter<"Class"> | string;
    order?: Prisma.IntFilter<"Class"> | number;
    createdAt?: Prisma.DateTimeFilter<"Class"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Class"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
    sections?: Prisma.SectionListRelationFilter;
    classSubjects?: Prisma.ClassSubjectListRelationFilter;
    feeStructures?: Prisma.FeeStructureListRelationFilter;
    examSchedules?: Prisma.ExamScheduleListRelationFilter;
}, "id" | "branchId_academicYearId_name">;
export type ClassOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClassCountOrderByAggregateInput;
    _avg?: Prisma.ClassAvgOrderByAggregateInput;
    _max?: Prisma.ClassMaxOrderByAggregateInput;
    _min?: Prisma.ClassMinOrderByAggregateInput;
    _sum?: Prisma.ClassSumOrderByAggregateInput;
};
export type ClassScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClassScalarWhereWithAggregatesInput | Prisma.ClassScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClassScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClassScalarWhereWithAggregatesInput | Prisma.ClassScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Class"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Class"> | string;
    branchId?: Prisma.StringWithAggregatesFilter<"Class"> | string;
    academicYearId?: Prisma.StringWithAggregatesFilter<"Class"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Class"> | string;
    order?: Prisma.IntWithAggregatesFilter<"Class"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Class"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Class"> | Date | string;
};
export type ClassCreateInput = {
    id?: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutClassesInput;
    branch: Prisma.BranchCreateNestedOneWithoutClassesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutClassesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutClassInput;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutClassInput;
};
export type ClassUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    academicYearId: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutClassInput;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutClassInput;
};
export type ClassUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutClassesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutClassesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutClassesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutClassNestedInput;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutClassNestedInput;
};
export type ClassUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutClassNestedInput;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutClassNestedInput;
};
export type ClassCreateManyInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    academicYearId: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClassUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassListRelationFilter = {
    every?: Prisma.ClassWhereInput;
    some?: Prisma.ClassWhereInput;
    none?: Prisma.ClassWhereInput;
};
export type ClassOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClassBranchIdAcademicYearIdNameCompoundUniqueInput = {
    branchId: string;
    academicYearId: string;
    name: string;
};
export type ClassCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClassAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type ClassMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClassMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClassSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type ClassScalarRelationFilter = {
    is?: Prisma.ClassWhereInput;
    isNot?: Prisma.ClassWhereInput;
};
export type ClassCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutSchoolInput, Prisma.ClassUncheckedCreateWithoutSchoolInput> | Prisma.ClassCreateWithoutSchoolInput[] | Prisma.ClassUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutSchoolInput | Prisma.ClassCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.ClassCreateManySchoolInputEnvelope;
    connect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
};
export type ClassUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutSchoolInput, Prisma.ClassUncheckedCreateWithoutSchoolInput> | Prisma.ClassCreateWithoutSchoolInput[] | Prisma.ClassUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutSchoolInput | Prisma.ClassCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.ClassCreateManySchoolInputEnvelope;
    connect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
};
export type ClassUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutSchoolInput, Prisma.ClassUncheckedCreateWithoutSchoolInput> | Prisma.ClassCreateWithoutSchoolInput[] | Prisma.ClassUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutSchoolInput | Prisma.ClassCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.ClassUpsertWithWhereUniqueWithoutSchoolInput | Prisma.ClassUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.ClassCreateManySchoolInputEnvelope;
    set?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    disconnect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    delete?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    connect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    update?: Prisma.ClassUpdateWithWhereUniqueWithoutSchoolInput | Prisma.ClassUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.ClassUpdateManyWithWhereWithoutSchoolInput | Prisma.ClassUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.ClassScalarWhereInput | Prisma.ClassScalarWhereInput[];
};
export type ClassUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutSchoolInput, Prisma.ClassUncheckedCreateWithoutSchoolInput> | Prisma.ClassCreateWithoutSchoolInput[] | Prisma.ClassUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutSchoolInput | Prisma.ClassCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.ClassUpsertWithWhereUniqueWithoutSchoolInput | Prisma.ClassUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.ClassCreateManySchoolInputEnvelope;
    set?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    disconnect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    delete?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    connect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    update?: Prisma.ClassUpdateWithWhereUniqueWithoutSchoolInput | Prisma.ClassUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.ClassUpdateManyWithWhereWithoutSchoolInput | Prisma.ClassUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.ClassScalarWhereInput | Prisma.ClassScalarWhereInput[];
};
export type ClassCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutBranchInput, Prisma.ClassUncheckedCreateWithoutBranchInput> | Prisma.ClassCreateWithoutBranchInput[] | Prisma.ClassUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutBranchInput | Prisma.ClassCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.ClassCreateManyBranchInputEnvelope;
    connect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
};
export type ClassUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutBranchInput, Prisma.ClassUncheckedCreateWithoutBranchInput> | Prisma.ClassCreateWithoutBranchInput[] | Prisma.ClassUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutBranchInput | Prisma.ClassCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.ClassCreateManyBranchInputEnvelope;
    connect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
};
export type ClassUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutBranchInput, Prisma.ClassUncheckedCreateWithoutBranchInput> | Prisma.ClassCreateWithoutBranchInput[] | Prisma.ClassUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutBranchInput | Prisma.ClassCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.ClassUpsertWithWhereUniqueWithoutBranchInput | Prisma.ClassUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.ClassCreateManyBranchInputEnvelope;
    set?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    disconnect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    delete?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    connect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    update?: Prisma.ClassUpdateWithWhereUniqueWithoutBranchInput | Prisma.ClassUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.ClassUpdateManyWithWhereWithoutBranchInput | Prisma.ClassUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.ClassScalarWhereInput | Prisma.ClassScalarWhereInput[];
};
export type ClassUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutBranchInput, Prisma.ClassUncheckedCreateWithoutBranchInput> | Prisma.ClassCreateWithoutBranchInput[] | Prisma.ClassUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutBranchInput | Prisma.ClassCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.ClassUpsertWithWhereUniqueWithoutBranchInput | Prisma.ClassUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.ClassCreateManyBranchInputEnvelope;
    set?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    disconnect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    delete?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    connect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    update?: Prisma.ClassUpdateWithWhereUniqueWithoutBranchInput | Prisma.ClassUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.ClassUpdateManyWithWhereWithoutBranchInput | Prisma.ClassUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.ClassScalarWhereInput | Prisma.ClassScalarWhereInput[];
};
export type ClassCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutAcademicYearInput, Prisma.ClassUncheckedCreateWithoutAcademicYearInput> | Prisma.ClassCreateWithoutAcademicYearInput[] | Prisma.ClassUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutAcademicYearInput | Prisma.ClassCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.ClassCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
};
export type ClassUncheckedCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutAcademicYearInput, Prisma.ClassUncheckedCreateWithoutAcademicYearInput> | Prisma.ClassCreateWithoutAcademicYearInput[] | Prisma.ClassUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutAcademicYearInput | Prisma.ClassCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.ClassCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
};
export type ClassUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutAcademicYearInput, Prisma.ClassUncheckedCreateWithoutAcademicYearInput> | Prisma.ClassCreateWithoutAcademicYearInput[] | Prisma.ClassUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutAcademicYearInput | Prisma.ClassCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.ClassUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.ClassUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.ClassCreateManyAcademicYearInputEnvelope;
    set?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    disconnect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    delete?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    connect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    update?: Prisma.ClassUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.ClassUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.ClassUpdateManyWithWhereWithoutAcademicYearInput | Prisma.ClassUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.ClassScalarWhereInput | Prisma.ClassScalarWhereInput[];
};
export type ClassUncheckedUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutAcademicYearInput, Prisma.ClassUncheckedCreateWithoutAcademicYearInput> | Prisma.ClassCreateWithoutAcademicYearInput[] | Prisma.ClassUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutAcademicYearInput | Prisma.ClassCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.ClassUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.ClassUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.ClassCreateManyAcademicYearInputEnvelope;
    set?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    disconnect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    delete?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    connect?: Prisma.ClassWhereUniqueInput | Prisma.ClassWhereUniqueInput[];
    update?: Prisma.ClassUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.ClassUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.ClassUpdateManyWithWhereWithoutAcademicYearInput | Prisma.ClassUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.ClassScalarWhereInput | Prisma.ClassScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ClassCreateNestedOneWithoutSectionsInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutSectionsInput, Prisma.ClassUncheckedCreateWithoutSectionsInput>;
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutSectionsInput;
    connect?: Prisma.ClassWhereUniqueInput;
};
export type ClassUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutSectionsInput, Prisma.ClassUncheckedCreateWithoutSectionsInput>;
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutSectionsInput;
    upsert?: Prisma.ClassUpsertWithoutSectionsInput;
    connect?: Prisma.ClassWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClassUpdateToOneWithWhereWithoutSectionsInput, Prisma.ClassUpdateWithoutSectionsInput>, Prisma.ClassUncheckedUpdateWithoutSectionsInput>;
};
export type ClassCreateNestedOneWithoutClassSubjectsInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutClassSubjectsInput, Prisma.ClassUncheckedCreateWithoutClassSubjectsInput>;
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutClassSubjectsInput;
    connect?: Prisma.ClassWhereUniqueInput;
};
export type ClassUpdateOneRequiredWithoutClassSubjectsNestedInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutClassSubjectsInput, Prisma.ClassUncheckedCreateWithoutClassSubjectsInput>;
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutClassSubjectsInput;
    upsert?: Prisma.ClassUpsertWithoutClassSubjectsInput;
    connect?: Prisma.ClassWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClassUpdateToOneWithWhereWithoutClassSubjectsInput, Prisma.ClassUpdateWithoutClassSubjectsInput>, Prisma.ClassUncheckedUpdateWithoutClassSubjectsInput>;
};
export type ClassCreateNestedOneWithoutFeeStructuresInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutFeeStructuresInput, Prisma.ClassUncheckedCreateWithoutFeeStructuresInput>;
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutFeeStructuresInput;
    connect?: Prisma.ClassWhereUniqueInput;
};
export type ClassUpdateOneRequiredWithoutFeeStructuresNestedInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutFeeStructuresInput, Prisma.ClassUncheckedCreateWithoutFeeStructuresInput>;
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutFeeStructuresInput;
    upsert?: Prisma.ClassUpsertWithoutFeeStructuresInput;
    connect?: Prisma.ClassWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClassUpdateToOneWithWhereWithoutFeeStructuresInput, Prisma.ClassUpdateWithoutFeeStructuresInput>, Prisma.ClassUncheckedUpdateWithoutFeeStructuresInput>;
};
export type ClassCreateNestedOneWithoutExamSchedulesInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutExamSchedulesInput, Prisma.ClassUncheckedCreateWithoutExamSchedulesInput>;
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutExamSchedulesInput;
    connect?: Prisma.ClassWhereUniqueInput;
};
export type ClassUpdateOneRequiredWithoutExamSchedulesNestedInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutExamSchedulesInput, Prisma.ClassUncheckedCreateWithoutExamSchedulesInput>;
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutExamSchedulesInput;
    upsert?: Prisma.ClassUpsertWithoutExamSchedulesInput;
    connect?: Prisma.ClassWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClassUpdateToOneWithWhereWithoutExamSchedulesInput, Prisma.ClassUpdateWithoutExamSchedulesInput>, Prisma.ClassUncheckedUpdateWithoutExamSchedulesInput>;
};
export type ClassCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch: Prisma.BranchCreateNestedOneWithoutClassesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutClassesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutClassInput;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutClassInput;
};
export type ClassUncheckedCreateWithoutSchoolInput = {
    id?: string;
    branchId: string;
    academicYearId: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutClassInput;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutClassInput;
};
export type ClassCreateOrConnectWithoutSchoolInput = {
    where: Prisma.ClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassCreateWithoutSchoolInput, Prisma.ClassUncheckedCreateWithoutSchoolInput>;
};
export type ClassCreateManySchoolInputEnvelope = {
    data: Prisma.ClassCreateManySchoolInput | Prisma.ClassCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type ClassUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.ClassWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClassUpdateWithoutSchoolInput, Prisma.ClassUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.ClassCreateWithoutSchoolInput, Prisma.ClassUncheckedCreateWithoutSchoolInput>;
};
export type ClassUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.ClassWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClassUpdateWithoutSchoolInput, Prisma.ClassUncheckedUpdateWithoutSchoolInput>;
};
export type ClassUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.ClassScalarWhereInput;
    data: Prisma.XOR<Prisma.ClassUpdateManyMutationInput, Prisma.ClassUncheckedUpdateManyWithoutSchoolInput>;
};
export type ClassScalarWhereInput = {
    AND?: Prisma.ClassScalarWhereInput | Prisma.ClassScalarWhereInput[];
    OR?: Prisma.ClassScalarWhereInput[];
    NOT?: Prisma.ClassScalarWhereInput | Prisma.ClassScalarWhereInput[];
    id?: Prisma.StringFilter<"Class"> | string;
    schoolId?: Prisma.StringFilter<"Class"> | string;
    branchId?: Prisma.StringFilter<"Class"> | string;
    academicYearId?: Prisma.StringFilter<"Class"> | string;
    name?: Prisma.StringFilter<"Class"> | string;
    order?: Prisma.IntFilter<"Class"> | number;
    createdAt?: Prisma.DateTimeFilter<"Class"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Class"> | Date | string;
};
export type ClassCreateWithoutBranchInput = {
    id?: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutClassesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutClassesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutClassInput;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutClassInput;
};
export type ClassUncheckedCreateWithoutBranchInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutClassInput;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutClassInput;
};
export type ClassCreateOrConnectWithoutBranchInput = {
    where: Prisma.ClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassCreateWithoutBranchInput, Prisma.ClassUncheckedCreateWithoutBranchInput>;
};
export type ClassCreateManyBranchInputEnvelope = {
    data: Prisma.ClassCreateManyBranchInput | Prisma.ClassCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type ClassUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.ClassWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClassUpdateWithoutBranchInput, Prisma.ClassUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.ClassCreateWithoutBranchInput, Prisma.ClassUncheckedCreateWithoutBranchInput>;
};
export type ClassUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.ClassWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClassUpdateWithoutBranchInput, Prisma.ClassUncheckedUpdateWithoutBranchInput>;
};
export type ClassUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.ClassScalarWhereInput;
    data: Prisma.XOR<Prisma.ClassUpdateManyMutationInput, Prisma.ClassUncheckedUpdateManyWithoutBranchInput>;
};
export type ClassCreateWithoutAcademicYearInput = {
    id?: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutClassesInput;
    branch: Prisma.BranchCreateNestedOneWithoutClassesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutClassInput;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutClassInput;
};
export type ClassUncheckedCreateWithoutAcademicYearInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutClassInput;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutClassInput;
};
export type ClassCreateOrConnectWithoutAcademicYearInput = {
    where: Prisma.ClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassCreateWithoutAcademicYearInput, Prisma.ClassUncheckedCreateWithoutAcademicYearInput>;
};
export type ClassCreateManyAcademicYearInputEnvelope = {
    data: Prisma.ClassCreateManyAcademicYearInput | Prisma.ClassCreateManyAcademicYearInput[];
    skipDuplicates?: boolean;
};
export type ClassUpsertWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.ClassWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClassUpdateWithoutAcademicYearInput, Prisma.ClassUncheckedUpdateWithoutAcademicYearInput>;
    create: Prisma.XOR<Prisma.ClassCreateWithoutAcademicYearInput, Prisma.ClassUncheckedCreateWithoutAcademicYearInput>;
};
export type ClassUpdateWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.ClassWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClassUpdateWithoutAcademicYearInput, Prisma.ClassUncheckedUpdateWithoutAcademicYearInput>;
};
export type ClassUpdateManyWithWhereWithoutAcademicYearInput = {
    where: Prisma.ClassScalarWhereInput;
    data: Prisma.XOR<Prisma.ClassUpdateManyMutationInput, Prisma.ClassUncheckedUpdateManyWithoutAcademicYearInput>;
};
export type ClassCreateWithoutSectionsInput = {
    id?: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutClassesInput;
    branch: Prisma.BranchCreateNestedOneWithoutClassesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutClassesInput;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutClassInput;
};
export type ClassUncheckedCreateWithoutSectionsInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    academicYearId: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutClassInput;
};
export type ClassCreateOrConnectWithoutSectionsInput = {
    where: Prisma.ClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassCreateWithoutSectionsInput, Prisma.ClassUncheckedCreateWithoutSectionsInput>;
};
export type ClassUpsertWithoutSectionsInput = {
    update: Prisma.XOR<Prisma.ClassUpdateWithoutSectionsInput, Prisma.ClassUncheckedUpdateWithoutSectionsInput>;
    create: Prisma.XOR<Prisma.ClassCreateWithoutSectionsInput, Prisma.ClassUncheckedCreateWithoutSectionsInput>;
    where?: Prisma.ClassWhereInput;
};
export type ClassUpdateToOneWithWhereWithoutSectionsInput = {
    where?: Prisma.ClassWhereInput;
    data: Prisma.XOR<Prisma.ClassUpdateWithoutSectionsInput, Prisma.ClassUncheckedUpdateWithoutSectionsInput>;
};
export type ClassUpdateWithoutSectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutClassesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutClassesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutClassesNestedInput;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutClassNestedInput;
};
export type ClassUncheckedUpdateWithoutSectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutClassNestedInput;
};
export type ClassCreateWithoutClassSubjectsInput = {
    id?: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutClassesInput;
    branch: Prisma.BranchCreateNestedOneWithoutClassesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutClassesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutClassInput;
};
export type ClassUncheckedCreateWithoutClassSubjectsInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    academicYearId: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutClassInput;
};
export type ClassCreateOrConnectWithoutClassSubjectsInput = {
    where: Prisma.ClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassCreateWithoutClassSubjectsInput, Prisma.ClassUncheckedCreateWithoutClassSubjectsInput>;
};
export type ClassUpsertWithoutClassSubjectsInput = {
    update: Prisma.XOR<Prisma.ClassUpdateWithoutClassSubjectsInput, Prisma.ClassUncheckedUpdateWithoutClassSubjectsInput>;
    create: Prisma.XOR<Prisma.ClassCreateWithoutClassSubjectsInput, Prisma.ClassUncheckedCreateWithoutClassSubjectsInput>;
    where?: Prisma.ClassWhereInput;
};
export type ClassUpdateToOneWithWhereWithoutClassSubjectsInput = {
    where?: Prisma.ClassWhereInput;
    data: Prisma.XOR<Prisma.ClassUpdateWithoutClassSubjectsInput, Prisma.ClassUncheckedUpdateWithoutClassSubjectsInput>;
};
export type ClassUpdateWithoutClassSubjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutClassesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutClassesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutClassesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutClassNestedInput;
};
export type ClassUncheckedUpdateWithoutClassSubjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutClassNestedInput;
};
export type ClassCreateWithoutFeeStructuresInput = {
    id?: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutClassesInput;
    branch: Prisma.BranchCreateNestedOneWithoutClassesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutClassesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutClassInput;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleCreateNestedManyWithoutClassInput;
};
export type ClassUncheckedCreateWithoutFeeStructuresInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    academicYearId: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutClassInput;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutClassInput;
    examSchedules?: Prisma.ExamScheduleUncheckedCreateNestedManyWithoutClassInput;
};
export type ClassCreateOrConnectWithoutFeeStructuresInput = {
    where: Prisma.ClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassCreateWithoutFeeStructuresInput, Prisma.ClassUncheckedCreateWithoutFeeStructuresInput>;
};
export type ClassUpsertWithoutFeeStructuresInput = {
    update: Prisma.XOR<Prisma.ClassUpdateWithoutFeeStructuresInput, Prisma.ClassUncheckedUpdateWithoutFeeStructuresInput>;
    create: Prisma.XOR<Prisma.ClassCreateWithoutFeeStructuresInput, Prisma.ClassUncheckedCreateWithoutFeeStructuresInput>;
    where?: Prisma.ClassWhereInput;
};
export type ClassUpdateToOneWithWhereWithoutFeeStructuresInput = {
    where?: Prisma.ClassWhereInput;
    data: Prisma.XOR<Prisma.ClassUpdateWithoutFeeStructuresInput, Prisma.ClassUncheckedUpdateWithoutFeeStructuresInput>;
};
export type ClassUpdateWithoutFeeStructuresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutClassesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutClassesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutClassesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutClassNestedInput;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutClassNestedInput;
};
export type ClassUncheckedUpdateWithoutFeeStructuresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutClassNestedInput;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutClassNestedInput;
};
export type ClassCreateWithoutExamSchedulesInput = {
    id?: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutClassesInput;
    branch: Prisma.BranchCreateNestedOneWithoutClassesInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutClassesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutClassInput;
    classSubjects?: Prisma.ClassSubjectCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutClassInput;
};
export type ClassUncheckedCreateWithoutExamSchedulesInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    academicYearId: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutClassInput;
    classSubjects?: Prisma.ClassSubjectUncheckedCreateNestedManyWithoutClassInput;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutClassInput;
};
export type ClassCreateOrConnectWithoutExamSchedulesInput = {
    where: Prisma.ClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassCreateWithoutExamSchedulesInput, Prisma.ClassUncheckedCreateWithoutExamSchedulesInput>;
};
export type ClassUpsertWithoutExamSchedulesInput = {
    update: Prisma.XOR<Prisma.ClassUpdateWithoutExamSchedulesInput, Prisma.ClassUncheckedUpdateWithoutExamSchedulesInput>;
    create: Prisma.XOR<Prisma.ClassCreateWithoutExamSchedulesInput, Prisma.ClassUncheckedCreateWithoutExamSchedulesInput>;
    where?: Prisma.ClassWhereInput;
};
export type ClassUpdateToOneWithWhereWithoutExamSchedulesInput = {
    where?: Prisma.ClassWhereInput;
    data: Prisma.XOR<Prisma.ClassUpdateWithoutExamSchedulesInput, Prisma.ClassUncheckedUpdateWithoutExamSchedulesInput>;
};
export type ClassUpdateWithoutExamSchedulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutClassesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutClassesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutClassesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutClassNestedInput;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutClassNestedInput;
};
export type ClassUncheckedUpdateWithoutExamSchedulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutClassNestedInput;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutClassNestedInput;
};
export type ClassCreateManySchoolInput = {
    id?: string;
    branchId: string;
    academicYearId: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClassUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneRequiredWithoutClassesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutClassesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutClassNestedInput;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutClassNestedInput;
};
export type ClassUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutClassNestedInput;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutClassNestedInput;
};
export type ClassUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassCreateManyBranchInput = {
    id?: string;
    schoolId: string;
    academicYearId: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClassUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutClassesNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutClassesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutClassNestedInput;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutClassNestedInput;
};
export type ClassUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutClassNestedInput;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutClassNestedInput;
};
export type ClassUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassCreateManyAcademicYearInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClassUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutClassesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutClassesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutClassNestedInput;
    classSubjects?: Prisma.ClassSubjectUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUpdateManyWithoutClassNestedInput;
};
export type ClassUncheckedUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutClassNestedInput;
    classSubjects?: Prisma.ClassSubjectUncheckedUpdateManyWithoutClassNestedInput;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutClassNestedInput;
    examSchedules?: Prisma.ExamScheduleUncheckedUpdateManyWithoutClassNestedInput;
};
export type ClassUncheckedUpdateManyWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassCountOutputType = {
    sections: number;
    classSubjects: number;
    feeStructures: number;
    examSchedules: number;
};
export type ClassCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sections?: boolean | ClassCountOutputTypeCountSectionsArgs;
    classSubjects?: boolean | ClassCountOutputTypeCountClassSubjectsArgs;
    feeStructures?: boolean | ClassCountOutputTypeCountFeeStructuresArgs;
    examSchedules?: boolean | ClassCountOutputTypeCountExamSchedulesArgs;
};
export type ClassCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassCountOutputTypeSelect<ExtArgs> | null;
};
export type ClassCountOutputTypeCountSectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectionWhereInput;
};
export type ClassCountOutputTypeCountClassSubjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassSubjectWhereInput;
};
export type ClassCountOutputTypeCountFeeStructuresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeStructureWhereInput;
};
export type ClassCountOutputTypeCountExamSchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamScheduleWhereInput;
};
export type ClassSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    academicYearId?: boolean;
    name?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    sections?: boolean | Prisma.Class$sectionsArgs<ExtArgs>;
    classSubjects?: boolean | Prisma.Class$classSubjectsArgs<ExtArgs>;
    feeStructures?: boolean | Prisma.Class$feeStructuresArgs<ExtArgs>;
    examSchedules?: boolean | Prisma.Class$examSchedulesArgs<ExtArgs>;
    _count?: boolean | Prisma.ClassCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["class"]>;
export type ClassSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    academicYearId?: boolean;
    name?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["class"]>;
export type ClassSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    academicYearId?: boolean;
    name?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["class"]>;
export type ClassSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    academicYearId?: boolean;
    name?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ClassOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "branchId" | "academicYearId" | "name" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["class"]>;
export type ClassInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
    sections?: boolean | Prisma.Class$sectionsArgs<ExtArgs>;
    classSubjects?: boolean | Prisma.Class$classSubjectsArgs<ExtArgs>;
    feeStructures?: boolean | Prisma.Class$feeStructuresArgs<ExtArgs>;
    examSchedules?: boolean | Prisma.Class$examSchedulesArgs<ExtArgs>;
    _count?: boolean | Prisma.ClassCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClassIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
};
export type ClassIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
};
export type $ClassPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Class";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        branch: Prisma.$BranchPayload<ExtArgs>;
        academicYear: Prisma.$AcademicYearPayload<ExtArgs>;
        sections: Prisma.$SectionPayload<ExtArgs>[];
        classSubjects: Prisma.$ClassSubjectPayload<ExtArgs>[];
        feeStructures: Prisma.$FeeStructurePayload<ExtArgs>[];
        examSchedules: Prisma.$ExamSchedulePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        branchId: string;
        academicYearId: string;
        name: string;
        order: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["class"]>;
    composites: {};
};
export type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClassPayload, S>;
export type ClassCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClassCountAggregateInputType | true;
};
export interface ClassDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Class'];
        meta: {
            name: 'Class';
        };
    };
    findUnique<T extends ClassFindUniqueArgs>(args: Prisma.SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClassFindFirstArgs>(args?: Prisma.SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClassFindManyArgs>(args?: Prisma.SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClassCreateArgs>(args: Prisma.SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClassCreateManyArgs>(args?: Prisma.SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClassDeleteArgs>(args: Prisma.SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClassUpdateArgs>(args: Prisma.SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClassDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClassUpdateManyArgs>(args: Prisma.SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClassUpsertArgs>(args: Prisma.SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClassCountArgs>(args?: Prisma.Subset<T, ClassCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClassCountAggregateOutputType> : number>;
    aggregate<T extends ClassAggregateArgs>(args: Prisma.Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>;
    groupBy<T extends ClassGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClassGroupByArgs['orderBy'];
    } : {
        orderBy?: ClassGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClassFieldRefs;
}
export interface Prisma__ClassClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    branch<T extends Prisma.BranchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BranchDefaultArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    academicYear<T extends Prisma.AcademicYearDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYearDefaultArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sections<T extends Prisma.Class$sectionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Class$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    classSubjects<T extends Prisma.Class$classSubjectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Class$classSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    feeStructures<T extends Prisma.Class$feeStructuresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Class$feeStructuresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    examSchedules<T extends Prisma.Class$examSchedulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Class$examSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClassFieldRefs {
    readonly id: Prisma.FieldRef<"Class", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Class", 'String'>;
    readonly branchId: Prisma.FieldRef<"Class", 'String'>;
    readonly academicYearId: Prisma.FieldRef<"Class", 'String'>;
    readonly name: Prisma.FieldRef<"Class", 'String'>;
    readonly order: Prisma.FieldRef<"Class", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Class", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Class", 'DateTime'>;
}
export type ClassFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where: Prisma.ClassWhereUniqueInput;
};
export type ClassFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where: Prisma.ClassWhereUniqueInput;
};
export type ClassFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClassFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClassFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClassCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassCreateInput, Prisma.ClassUncheckedCreateInput>;
};
export type ClassCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClassCreateManyInput | Prisma.ClassCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClassCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    data: Prisma.ClassCreateManyInput | Prisma.ClassCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClassIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClassUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassUpdateInput, Prisma.ClassUncheckedUpdateInput>;
    where: Prisma.ClassWhereUniqueInput;
};
export type ClassUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClassUpdateManyMutationInput, Prisma.ClassUncheckedUpdateManyInput>;
    where?: Prisma.ClassWhereInput;
    limit?: number;
};
export type ClassUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassUpdateManyMutationInput, Prisma.ClassUncheckedUpdateManyInput>;
    where?: Prisma.ClassWhereInput;
    limit?: number;
    include?: Prisma.ClassIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClassUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where: Prisma.ClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassCreateInput, Prisma.ClassUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClassUpdateInput, Prisma.ClassUncheckedUpdateInput>;
};
export type ClassDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where: Prisma.ClassWhereUniqueInput;
};
export type ClassDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassWhereInput;
    limit?: number;
};
export type Class$sectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Class$classSubjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Class$feeStructuresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Class$examSchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClassDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
};
