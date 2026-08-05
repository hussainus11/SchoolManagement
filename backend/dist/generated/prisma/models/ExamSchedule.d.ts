import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExamScheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$ExamSchedulePayload>;
export type AggregateExamSchedule = {
    _count: ExamScheduleCountAggregateOutputType | null;
    _avg: ExamScheduleAvgAggregateOutputType | null;
    _sum: ExamScheduleSumAggregateOutputType | null;
    _min: ExamScheduleMinAggregateOutputType | null;
    _max: ExamScheduleMaxAggregateOutputType | null;
};
export type ExamScheduleAvgAggregateOutputType = {
    maxMarks: runtime.Decimal | null;
    passMarks: runtime.Decimal | null;
};
export type ExamScheduleSumAggregateOutputType = {
    maxMarks: runtime.Decimal | null;
    passMarks: runtime.Decimal | null;
};
export type ExamScheduleMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    examId: string | null;
    classId: string | null;
    subjectId: string | null;
    roomId: string | null;
    examDate: Date | null;
    startTime: string | null;
    endTime: string | null;
    maxMarks: runtime.Decimal | null;
    passMarks: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExamScheduleMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    examId: string | null;
    classId: string | null;
    subjectId: string | null;
    roomId: string | null;
    examDate: Date | null;
    startTime: string | null;
    endTime: string | null;
    maxMarks: runtime.Decimal | null;
    passMarks: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExamScheduleCountAggregateOutputType = {
    id: number;
    schoolId: number;
    branchId: number;
    examId: number;
    classId: number;
    subjectId: number;
    roomId: number;
    examDate: number;
    startTime: number;
    endTime: number;
    maxMarks: number;
    passMarks: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ExamScheduleAvgAggregateInputType = {
    maxMarks?: true;
    passMarks?: true;
};
export type ExamScheduleSumAggregateInputType = {
    maxMarks?: true;
    passMarks?: true;
};
export type ExamScheduleMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    examId?: true;
    classId?: true;
    subjectId?: true;
    roomId?: true;
    examDate?: true;
    startTime?: true;
    endTime?: true;
    maxMarks?: true;
    passMarks?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExamScheduleMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    examId?: true;
    classId?: true;
    subjectId?: true;
    roomId?: true;
    examDate?: true;
    startTime?: true;
    endTime?: true;
    maxMarks?: true;
    passMarks?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExamScheduleCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    examId?: true;
    classId?: true;
    subjectId?: true;
    roomId?: true;
    examDate?: true;
    startTime?: true;
    endTime?: true;
    maxMarks?: true;
    passMarks?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ExamScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamScheduleWhereInput;
    orderBy?: Prisma.ExamScheduleOrderByWithRelationInput | Prisma.ExamScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ExamScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExamScheduleCountAggregateInputType;
    _avg?: ExamScheduleAvgAggregateInputType;
    _sum?: ExamScheduleSumAggregateInputType;
    _min?: ExamScheduleMinAggregateInputType;
    _max?: ExamScheduleMaxAggregateInputType;
};
export type GetExamScheduleAggregateType<T extends ExamScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateExamSchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExamSchedule[P]> : Prisma.GetScalarType<T[P], AggregateExamSchedule[P]>;
};
export type ExamScheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamScheduleWhereInput;
    orderBy?: Prisma.ExamScheduleOrderByWithAggregationInput | Prisma.ExamScheduleOrderByWithAggregationInput[];
    by: Prisma.ExamScheduleScalarFieldEnum[] | Prisma.ExamScheduleScalarFieldEnum;
    having?: Prisma.ExamScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExamScheduleCountAggregateInputType | true;
    _avg?: ExamScheduleAvgAggregateInputType;
    _sum?: ExamScheduleSumAggregateInputType;
    _min?: ExamScheduleMinAggregateInputType;
    _max?: ExamScheduleMaxAggregateInputType;
};
export type ExamScheduleGroupByOutputType = {
    id: string;
    schoolId: string;
    branchId: string;
    examId: string;
    classId: string;
    subjectId: string;
    roomId: string;
    examDate: Date;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal;
    passMarks: runtime.Decimal;
    createdAt: Date;
    updatedAt: Date;
    _count: ExamScheduleCountAggregateOutputType | null;
    _avg: ExamScheduleAvgAggregateOutputType | null;
    _sum: ExamScheduleSumAggregateOutputType | null;
    _min: ExamScheduleMinAggregateOutputType | null;
    _max: ExamScheduleMaxAggregateOutputType | null;
};
export type GetExamScheduleGroupByPayload<T extends ExamScheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExamScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExamScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExamScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExamScheduleGroupByOutputType[P]>;
}>>;
export type ExamScheduleWhereInput = {
    AND?: Prisma.ExamScheduleWhereInput | Prisma.ExamScheduleWhereInput[];
    OR?: Prisma.ExamScheduleWhereInput[];
    NOT?: Prisma.ExamScheduleWhereInput | Prisma.ExamScheduleWhereInput[];
    id?: Prisma.StringFilter<"ExamSchedule"> | string;
    schoolId?: Prisma.StringFilter<"ExamSchedule"> | string;
    branchId?: Prisma.StringFilter<"ExamSchedule"> | string;
    examId?: Prisma.StringFilter<"ExamSchedule"> | string;
    classId?: Prisma.StringFilter<"ExamSchedule"> | string;
    subjectId?: Prisma.StringFilter<"ExamSchedule"> | string;
    roomId?: Prisma.StringFilter<"ExamSchedule"> | string;
    examDate?: Prisma.DateTimeFilter<"ExamSchedule"> | Date | string;
    startTime?: Prisma.StringFilter<"ExamSchedule"> | string;
    endTime?: Prisma.StringFilter<"ExamSchedule"> | string;
    maxMarks?: Prisma.DecimalFilter<"ExamSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFilter<"ExamSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"ExamSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExamSchedule"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    exam?: Prisma.XOR<Prisma.ExamScalarRelationFilter, Prisma.ExamWhereInput>;
    class?: Prisma.XOR<Prisma.ClassScalarRelationFilter, Prisma.ClassWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    room?: Prisma.XOR<Prisma.RoomScalarRelationFilter, Prisma.RoomWhereInput>;
    marks?: Prisma.MarkListRelationFilter;
};
export type ExamScheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    examId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    maxMarks?: Prisma.SortOrder;
    passMarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    branch?: Prisma.BranchOrderByWithRelationInput;
    exam?: Prisma.ExamOrderByWithRelationInput;
    class?: Prisma.ClassOrderByWithRelationInput;
    subject?: Prisma.SubjectOrderByWithRelationInput;
    room?: Prisma.RoomOrderByWithRelationInput;
    marks?: Prisma.MarkOrderByRelationAggregateInput;
};
export type ExamScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    examId_classId_subjectId?: Prisma.ExamScheduleExamIdClassIdSubjectIdCompoundUniqueInput;
    AND?: Prisma.ExamScheduleWhereInput | Prisma.ExamScheduleWhereInput[];
    OR?: Prisma.ExamScheduleWhereInput[];
    NOT?: Prisma.ExamScheduleWhereInput | Prisma.ExamScheduleWhereInput[];
    schoolId?: Prisma.StringFilter<"ExamSchedule"> | string;
    branchId?: Prisma.StringFilter<"ExamSchedule"> | string;
    examId?: Prisma.StringFilter<"ExamSchedule"> | string;
    classId?: Prisma.StringFilter<"ExamSchedule"> | string;
    subjectId?: Prisma.StringFilter<"ExamSchedule"> | string;
    roomId?: Prisma.StringFilter<"ExamSchedule"> | string;
    examDate?: Prisma.DateTimeFilter<"ExamSchedule"> | Date | string;
    startTime?: Prisma.StringFilter<"ExamSchedule"> | string;
    endTime?: Prisma.StringFilter<"ExamSchedule"> | string;
    maxMarks?: Prisma.DecimalFilter<"ExamSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFilter<"ExamSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"ExamSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExamSchedule"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    exam?: Prisma.XOR<Prisma.ExamScalarRelationFilter, Prisma.ExamWhereInput>;
    class?: Prisma.XOR<Prisma.ClassScalarRelationFilter, Prisma.ClassWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    room?: Prisma.XOR<Prisma.RoomScalarRelationFilter, Prisma.RoomWhereInput>;
    marks?: Prisma.MarkListRelationFilter;
}, "id" | "examId_classId_subjectId">;
export type ExamScheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    examId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    maxMarks?: Prisma.SortOrder;
    passMarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ExamScheduleCountOrderByAggregateInput;
    _avg?: Prisma.ExamScheduleAvgOrderByAggregateInput;
    _max?: Prisma.ExamScheduleMaxOrderByAggregateInput;
    _min?: Prisma.ExamScheduleMinOrderByAggregateInput;
    _sum?: Prisma.ExamScheduleSumOrderByAggregateInput;
};
export type ExamScheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExamScheduleScalarWhereWithAggregatesInput | Prisma.ExamScheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExamScheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExamScheduleScalarWhereWithAggregatesInput | Prisma.ExamScheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ExamSchedule"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"ExamSchedule"> | string;
    branchId?: Prisma.StringWithAggregatesFilter<"ExamSchedule"> | string;
    examId?: Prisma.StringWithAggregatesFilter<"ExamSchedule"> | string;
    classId?: Prisma.StringWithAggregatesFilter<"ExamSchedule"> | string;
    subjectId?: Prisma.StringWithAggregatesFilter<"ExamSchedule"> | string;
    roomId?: Prisma.StringWithAggregatesFilter<"ExamSchedule"> | string;
    examDate?: Prisma.DateTimeWithAggregatesFilter<"ExamSchedule"> | Date | string;
    startTime?: Prisma.StringWithAggregatesFilter<"ExamSchedule"> | string;
    endTime?: Prisma.StringWithAggregatesFilter<"ExamSchedule"> | string;
    maxMarks?: Prisma.DecimalWithAggregatesFilter<"ExamSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalWithAggregatesFilter<"ExamSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ExamSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ExamSchedule"> | Date | string;
};
export type ExamScheduleCreateInput = {
    id?: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamSchedulesInput;
    branch: Prisma.BranchCreateNestedOneWithoutExamSchedulesInput;
    exam: Prisma.ExamCreateNestedOneWithoutExamSchedulesInput;
    class: Prisma.ClassCreateNestedOneWithoutExamSchedulesInput;
    subject: Prisma.SubjectCreateNestedOneWithoutExamSchedulesInput;
    room: Prisma.RoomCreateNestedOneWithoutExamSchedulesInput;
    marks?: Prisma.MarkCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    examId: string;
    classId: string;
    subjectId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    marks?: Prisma.MarkUncheckedCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamSchedulesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutExamSchedulesNestedInput;
    exam?: Prisma.ExamUpdateOneRequiredWithoutExamSchedulesNestedInput;
    class?: Prisma.ClassUpdateOneRequiredWithoutExamSchedulesNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutExamSchedulesNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutExamSchedulesNestedInput;
    marks?: Prisma.MarkUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    marks?: Prisma.MarkUncheckedUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleCreateManyInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    examId: string;
    classId: string;
    subjectId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamScheduleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamScheduleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamScheduleListRelationFilter = {
    every?: Prisma.ExamScheduleWhereInput;
    some?: Prisma.ExamScheduleWhereInput;
    none?: Prisma.ExamScheduleWhereInput;
};
export type ExamScheduleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExamScheduleExamIdClassIdSubjectIdCompoundUniqueInput = {
    examId: string;
    classId: string;
    subjectId: string;
};
export type ExamScheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    examId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    maxMarks?: Prisma.SortOrder;
    passMarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamScheduleAvgOrderByAggregateInput = {
    maxMarks?: Prisma.SortOrder;
    passMarks?: Prisma.SortOrder;
};
export type ExamScheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    examId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    maxMarks?: Prisma.SortOrder;
    passMarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamScheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    examId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    roomId?: Prisma.SortOrder;
    examDate?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    maxMarks?: Prisma.SortOrder;
    passMarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamScheduleSumOrderByAggregateInput = {
    maxMarks?: Prisma.SortOrder;
    passMarks?: Prisma.SortOrder;
};
export type ExamScheduleScalarRelationFilter = {
    is?: Prisma.ExamScheduleWhereInput;
    isNot?: Prisma.ExamScheduleWhereInput;
};
export type ExamScheduleCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutSchoolInput, Prisma.ExamScheduleUncheckedCreateWithoutSchoolInput> | Prisma.ExamScheduleCreateWithoutSchoolInput[] | Prisma.ExamScheduleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutSchoolInput | Prisma.ExamScheduleCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.ExamScheduleCreateManySchoolInputEnvelope;
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
};
export type ExamScheduleUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutSchoolInput, Prisma.ExamScheduleUncheckedCreateWithoutSchoolInput> | Prisma.ExamScheduleCreateWithoutSchoolInput[] | Prisma.ExamScheduleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutSchoolInput | Prisma.ExamScheduleCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.ExamScheduleCreateManySchoolInputEnvelope;
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
};
export type ExamScheduleUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutSchoolInput, Prisma.ExamScheduleUncheckedCreateWithoutSchoolInput> | Prisma.ExamScheduleCreateWithoutSchoolInput[] | Prisma.ExamScheduleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutSchoolInput | Prisma.ExamScheduleCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.ExamScheduleUpsertWithWhereUniqueWithoutSchoolInput | Prisma.ExamScheduleUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.ExamScheduleCreateManySchoolInputEnvelope;
    set?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    disconnect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    delete?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    update?: Prisma.ExamScheduleUpdateWithWhereUniqueWithoutSchoolInput | Prisma.ExamScheduleUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.ExamScheduleUpdateManyWithWhereWithoutSchoolInput | Prisma.ExamScheduleUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
};
export type ExamScheduleUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutSchoolInput, Prisma.ExamScheduleUncheckedCreateWithoutSchoolInput> | Prisma.ExamScheduleCreateWithoutSchoolInput[] | Prisma.ExamScheduleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutSchoolInput | Prisma.ExamScheduleCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.ExamScheduleUpsertWithWhereUniqueWithoutSchoolInput | Prisma.ExamScheduleUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.ExamScheduleCreateManySchoolInputEnvelope;
    set?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    disconnect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    delete?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    update?: Prisma.ExamScheduleUpdateWithWhereUniqueWithoutSchoolInput | Prisma.ExamScheduleUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.ExamScheduleUpdateManyWithWhereWithoutSchoolInput | Prisma.ExamScheduleUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
};
export type ExamScheduleCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutBranchInput, Prisma.ExamScheduleUncheckedCreateWithoutBranchInput> | Prisma.ExamScheduleCreateWithoutBranchInput[] | Prisma.ExamScheduleUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutBranchInput | Prisma.ExamScheduleCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.ExamScheduleCreateManyBranchInputEnvelope;
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
};
export type ExamScheduleUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutBranchInput, Prisma.ExamScheduleUncheckedCreateWithoutBranchInput> | Prisma.ExamScheduleCreateWithoutBranchInput[] | Prisma.ExamScheduleUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutBranchInput | Prisma.ExamScheduleCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.ExamScheduleCreateManyBranchInputEnvelope;
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
};
export type ExamScheduleUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutBranchInput, Prisma.ExamScheduleUncheckedCreateWithoutBranchInput> | Prisma.ExamScheduleCreateWithoutBranchInput[] | Prisma.ExamScheduleUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutBranchInput | Prisma.ExamScheduleCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.ExamScheduleUpsertWithWhereUniqueWithoutBranchInput | Prisma.ExamScheduleUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.ExamScheduleCreateManyBranchInputEnvelope;
    set?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    disconnect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    delete?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    update?: Prisma.ExamScheduleUpdateWithWhereUniqueWithoutBranchInput | Prisma.ExamScheduleUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.ExamScheduleUpdateManyWithWhereWithoutBranchInput | Prisma.ExamScheduleUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
};
export type ExamScheduleUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutBranchInput, Prisma.ExamScheduleUncheckedCreateWithoutBranchInput> | Prisma.ExamScheduleCreateWithoutBranchInput[] | Prisma.ExamScheduleUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutBranchInput | Prisma.ExamScheduleCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.ExamScheduleUpsertWithWhereUniqueWithoutBranchInput | Prisma.ExamScheduleUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.ExamScheduleCreateManyBranchInputEnvelope;
    set?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    disconnect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    delete?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    update?: Prisma.ExamScheduleUpdateWithWhereUniqueWithoutBranchInput | Prisma.ExamScheduleUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.ExamScheduleUpdateManyWithWhereWithoutBranchInput | Prisma.ExamScheduleUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
};
export type ExamScheduleCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutClassInput, Prisma.ExamScheduleUncheckedCreateWithoutClassInput> | Prisma.ExamScheduleCreateWithoutClassInput[] | Prisma.ExamScheduleUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutClassInput | Prisma.ExamScheduleCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.ExamScheduleCreateManyClassInputEnvelope;
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
};
export type ExamScheduleUncheckedCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutClassInput, Prisma.ExamScheduleUncheckedCreateWithoutClassInput> | Prisma.ExamScheduleCreateWithoutClassInput[] | Prisma.ExamScheduleUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutClassInput | Prisma.ExamScheduleCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.ExamScheduleCreateManyClassInputEnvelope;
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
};
export type ExamScheduleUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutClassInput, Prisma.ExamScheduleUncheckedCreateWithoutClassInput> | Prisma.ExamScheduleCreateWithoutClassInput[] | Prisma.ExamScheduleUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutClassInput | Prisma.ExamScheduleCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.ExamScheduleUpsertWithWhereUniqueWithoutClassInput | Prisma.ExamScheduleUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.ExamScheduleCreateManyClassInputEnvelope;
    set?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    disconnect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    delete?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    update?: Prisma.ExamScheduleUpdateWithWhereUniqueWithoutClassInput | Prisma.ExamScheduleUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.ExamScheduleUpdateManyWithWhereWithoutClassInput | Prisma.ExamScheduleUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
};
export type ExamScheduleUncheckedUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutClassInput, Prisma.ExamScheduleUncheckedCreateWithoutClassInput> | Prisma.ExamScheduleCreateWithoutClassInput[] | Prisma.ExamScheduleUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutClassInput | Prisma.ExamScheduleCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.ExamScheduleUpsertWithWhereUniqueWithoutClassInput | Prisma.ExamScheduleUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.ExamScheduleCreateManyClassInputEnvelope;
    set?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    disconnect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    delete?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    update?: Prisma.ExamScheduleUpdateWithWhereUniqueWithoutClassInput | Prisma.ExamScheduleUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.ExamScheduleUpdateManyWithWhereWithoutClassInput | Prisma.ExamScheduleUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
};
export type ExamScheduleCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutSubjectInput, Prisma.ExamScheduleUncheckedCreateWithoutSubjectInput> | Prisma.ExamScheduleCreateWithoutSubjectInput[] | Prisma.ExamScheduleUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutSubjectInput | Prisma.ExamScheduleCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.ExamScheduleCreateManySubjectInputEnvelope;
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
};
export type ExamScheduleUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutSubjectInput, Prisma.ExamScheduleUncheckedCreateWithoutSubjectInput> | Prisma.ExamScheduleCreateWithoutSubjectInput[] | Prisma.ExamScheduleUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutSubjectInput | Prisma.ExamScheduleCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.ExamScheduleCreateManySubjectInputEnvelope;
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
};
export type ExamScheduleUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutSubjectInput, Prisma.ExamScheduleUncheckedCreateWithoutSubjectInput> | Prisma.ExamScheduleCreateWithoutSubjectInput[] | Prisma.ExamScheduleUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutSubjectInput | Prisma.ExamScheduleCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.ExamScheduleUpsertWithWhereUniqueWithoutSubjectInput | Prisma.ExamScheduleUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.ExamScheduleCreateManySubjectInputEnvelope;
    set?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    disconnect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    delete?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    update?: Prisma.ExamScheduleUpdateWithWhereUniqueWithoutSubjectInput | Prisma.ExamScheduleUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.ExamScheduleUpdateManyWithWhereWithoutSubjectInput | Prisma.ExamScheduleUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
};
export type ExamScheduleUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutSubjectInput, Prisma.ExamScheduleUncheckedCreateWithoutSubjectInput> | Prisma.ExamScheduleCreateWithoutSubjectInput[] | Prisma.ExamScheduleUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutSubjectInput | Prisma.ExamScheduleCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.ExamScheduleUpsertWithWhereUniqueWithoutSubjectInput | Prisma.ExamScheduleUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.ExamScheduleCreateManySubjectInputEnvelope;
    set?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    disconnect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    delete?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    update?: Prisma.ExamScheduleUpdateWithWhereUniqueWithoutSubjectInput | Prisma.ExamScheduleUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.ExamScheduleUpdateManyWithWhereWithoutSubjectInput | Prisma.ExamScheduleUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
};
export type ExamScheduleCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutRoomInput, Prisma.ExamScheduleUncheckedCreateWithoutRoomInput> | Prisma.ExamScheduleCreateWithoutRoomInput[] | Prisma.ExamScheduleUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutRoomInput | Prisma.ExamScheduleCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.ExamScheduleCreateManyRoomInputEnvelope;
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
};
export type ExamScheduleUncheckedCreateNestedManyWithoutRoomInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutRoomInput, Prisma.ExamScheduleUncheckedCreateWithoutRoomInput> | Prisma.ExamScheduleCreateWithoutRoomInput[] | Prisma.ExamScheduleUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutRoomInput | Prisma.ExamScheduleCreateOrConnectWithoutRoomInput[];
    createMany?: Prisma.ExamScheduleCreateManyRoomInputEnvelope;
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
};
export type ExamScheduleUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutRoomInput, Prisma.ExamScheduleUncheckedCreateWithoutRoomInput> | Prisma.ExamScheduleCreateWithoutRoomInput[] | Prisma.ExamScheduleUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutRoomInput | Prisma.ExamScheduleCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.ExamScheduleUpsertWithWhereUniqueWithoutRoomInput | Prisma.ExamScheduleUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.ExamScheduleCreateManyRoomInputEnvelope;
    set?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    disconnect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    delete?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    update?: Prisma.ExamScheduleUpdateWithWhereUniqueWithoutRoomInput | Prisma.ExamScheduleUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.ExamScheduleUpdateManyWithWhereWithoutRoomInput | Prisma.ExamScheduleUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
};
export type ExamScheduleUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutRoomInput, Prisma.ExamScheduleUncheckedCreateWithoutRoomInput> | Prisma.ExamScheduleCreateWithoutRoomInput[] | Prisma.ExamScheduleUncheckedCreateWithoutRoomInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutRoomInput | Prisma.ExamScheduleCreateOrConnectWithoutRoomInput[];
    upsert?: Prisma.ExamScheduleUpsertWithWhereUniqueWithoutRoomInput | Prisma.ExamScheduleUpsertWithWhereUniqueWithoutRoomInput[];
    createMany?: Prisma.ExamScheduleCreateManyRoomInputEnvelope;
    set?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    disconnect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    delete?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    update?: Prisma.ExamScheduleUpdateWithWhereUniqueWithoutRoomInput | Prisma.ExamScheduleUpdateWithWhereUniqueWithoutRoomInput[];
    updateMany?: Prisma.ExamScheduleUpdateManyWithWhereWithoutRoomInput | Prisma.ExamScheduleUpdateManyWithWhereWithoutRoomInput[];
    deleteMany?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
};
export type ExamScheduleCreateNestedManyWithoutExamInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutExamInput, Prisma.ExamScheduleUncheckedCreateWithoutExamInput> | Prisma.ExamScheduleCreateWithoutExamInput[] | Prisma.ExamScheduleUncheckedCreateWithoutExamInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutExamInput | Prisma.ExamScheduleCreateOrConnectWithoutExamInput[];
    createMany?: Prisma.ExamScheduleCreateManyExamInputEnvelope;
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
};
export type ExamScheduleUncheckedCreateNestedManyWithoutExamInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutExamInput, Prisma.ExamScheduleUncheckedCreateWithoutExamInput> | Prisma.ExamScheduleCreateWithoutExamInput[] | Prisma.ExamScheduleUncheckedCreateWithoutExamInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutExamInput | Prisma.ExamScheduleCreateOrConnectWithoutExamInput[];
    createMany?: Prisma.ExamScheduleCreateManyExamInputEnvelope;
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
};
export type ExamScheduleUpdateManyWithoutExamNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutExamInput, Prisma.ExamScheduleUncheckedCreateWithoutExamInput> | Prisma.ExamScheduleCreateWithoutExamInput[] | Prisma.ExamScheduleUncheckedCreateWithoutExamInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutExamInput | Prisma.ExamScheduleCreateOrConnectWithoutExamInput[];
    upsert?: Prisma.ExamScheduleUpsertWithWhereUniqueWithoutExamInput | Prisma.ExamScheduleUpsertWithWhereUniqueWithoutExamInput[];
    createMany?: Prisma.ExamScheduleCreateManyExamInputEnvelope;
    set?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    disconnect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    delete?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    update?: Prisma.ExamScheduleUpdateWithWhereUniqueWithoutExamInput | Prisma.ExamScheduleUpdateWithWhereUniqueWithoutExamInput[];
    updateMany?: Prisma.ExamScheduleUpdateManyWithWhereWithoutExamInput | Prisma.ExamScheduleUpdateManyWithWhereWithoutExamInput[];
    deleteMany?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
};
export type ExamScheduleUncheckedUpdateManyWithoutExamNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutExamInput, Prisma.ExamScheduleUncheckedCreateWithoutExamInput> | Prisma.ExamScheduleCreateWithoutExamInput[] | Prisma.ExamScheduleUncheckedCreateWithoutExamInput[];
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutExamInput | Prisma.ExamScheduleCreateOrConnectWithoutExamInput[];
    upsert?: Prisma.ExamScheduleUpsertWithWhereUniqueWithoutExamInput | Prisma.ExamScheduleUpsertWithWhereUniqueWithoutExamInput[];
    createMany?: Prisma.ExamScheduleCreateManyExamInputEnvelope;
    set?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    disconnect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    delete?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    connect?: Prisma.ExamScheduleWhereUniqueInput | Prisma.ExamScheduleWhereUniqueInput[];
    update?: Prisma.ExamScheduleUpdateWithWhereUniqueWithoutExamInput | Prisma.ExamScheduleUpdateWithWhereUniqueWithoutExamInput[];
    updateMany?: Prisma.ExamScheduleUpdateManyWithWhereWithoutExamInput | Prisma.ExamScheduleUpdateManyWithWhereWithoutExamInput[];
    deleteMany?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
};
export type ExamScheduleCreateNestedOneWithoutMarksInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutMarksInput, Prisma.ExamScheduleUncheckedCreateWithoutMarksInput>;
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutMarksInput;
    connect?: Prisma.ExamScheduleWhereUniqueInput;
};
export type ExamScheduleUpdateOneRequiredWithoutMarksNestedInput = {
    create?: Prisma.XOR<Prisma.ExamScheduleCreateWithoutMarksInput, Prisma.ExamScheduleUncheckedCreateWithoutMarksInput>;
    connectOrCreate?: Prisma.ExamScheduleCreateOrConnectWithoutMarksInput;
    upsert?: Prisma.ExamScheduleUpsertWithoutMarksInput;
    connect?: Prisma.ExamScheduleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExamScheduleUpdateToOneWithWhereWithoutMarksInput, Prisma.ExamScheduleUpdateWithoutMarksInput>, Prisma.ExamScheduleUncheckedUpdateWithoutMarksInput>;
};
export type ExamScheduleCreateWithoutSchoolInput = {
    id?: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch: Prisma.BranchCreateNestedOneWithoutExamSchedulesInput;
    exam: Prisma.ExamCreateNestedOneWithoutExamSchedulesInput;
    class: Prisma.ClassCreateNestedOneWithoutExamSchedulesInput;
    subject: Prisma.SubjectCreateNestedOneWithoutExamSchedulesInput;
    room: Prisma.RoomCreateNestedOneWithoutExamSchedulesInput;
    marks?: Prisma.MarkCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleUncheckedCreateWithoutSchoolInput = {
    id?: string;
    branchId: string;
    examId: string;
    classId: string;
    subjectId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    marks?: Prisma.MarkUncheckedCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleCreateOrConnectWithoutSchoolInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutSchoolInput, Prisma.ExamScheduleUncheckedCreateWithoutSchoolInput>;
};
export type ExamScheduleCreateManySchoolInputEnvelope = {
    data: Prisma.ExamScheduleCreateManySchoolInput | Prisma.ExamScheduleCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type ExamScheduleUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutSchoolInput, Prisma.ExamScheduleUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutSchoolInput, Prisma.ExamScheduleUncheckedCreateWithoutSchoolInput>;
};
export type ExamScheduleUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutSchoolInput, Prisma.ExamScheduleUncheckedUpdateWithoutSchoolInput>;
};
export type ExamScheduleUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.ExamScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateManyMutationInput, Prisma.ExamScheduleUncheckedUpdateManyWithoutSchoolInput>;
};
export type ExamScheduleScalarWhereInput = {
    AND?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
    OR?: Prisma.ExamScheduleScalarWhereInput[];
    NOT?: Prisma.ExamScheduleScalarWhereInput | Prisma.ExamScheduleScalarWhereInput[];
    id?: Prisma.StringFilter<"ExamSchedule"> | string;
    schoolId?: Prisma.StringFilter<"ExamSchedule"> | string;
    branchId?: Prisma.StringFilter<"ExamSchedule"> | string;
    examId?: Prisma.StringFilter<"ExamSchedule"> | string;
    classId?: Prisma.StringFilter<"ExamSchedule"> | string;
    subjectId?: Prisma.StringFilter<"ExamSchedule"> | string;
    roomId?: Prisma.StringFilter<"ExamSchedule"> | string;
    examDate?: Prisma.DateTimeFilter<"ExamSchedule"> | Date | string;
    startTime?: Prisma.StringFilter<"ExamSchedule"> | string;
    endTime?: Prisma.StringFilter<"ExamSchedule"> | string;
    maxMarks?: Prisma.DecimalFilter<"ExamSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFilter<"ExamSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"ExamSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ExamSchedule"> | Date | string;
};
export type ExamScheduleCreateWithoutBranchInput = {
    id?: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamSchedulesInput;
    exam: Prisma.ExamCreateNestedOneWithoutExamSchedulesInput;
    class: Prisma.ClassCreateNestedOneWithoutExamSchedulesInput;
    subject: Prisma.SubjectCreateNestedOneWithoutExamSchedulesInput;
    room: Prisma.RoomCreateNestedOneWithoutExamSchedulesInput;
    marks?: Prisma.MarkCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleUncheckedCreateWithoutBranchInput = {
    id?: string;
    schoolId: string;
    examId: string;
    classId: string;
    subjectId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    marks?: Prisma.MarkUncheckedCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleCreateOrConnectWithoutBranchInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutBranchInput, Prisma.ExamScheduleUncheckedCreateWithoutBranchInput>;
};
export type ExamScheduleCreateManyBranchInputEnvelope = {
    data: Prisma.ExamScheduleCreateManyBranchInput | Prisma.ExamScheduleCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type ExamScheduleUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutBranchInput, Prisma.ExamScheduleUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutBranchInput, Prisma.ExamScheduleUncheckedCreateWithoutBranchInput>;
};
export type ExamScheduleUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutBranchInput, Prisma.ExamScheduleUncheckedUpdateWithoutBranchInput>;
};
export type ExamScheduleUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.ExamScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateManyMutationInput, Prisma.ExamScheduleUncheckedUpdateManyWithoutBranchInput>;
};
export type ExamScheduleCreateWithoutClassInput = {
    id?: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamSchedulesInput;
    branch: Prisma.BranchCreateNestedOneWithoutExamSchedulesInput;
    exam: Prisma.ExamCreateNestedOneWithoutExamSchedulesInput;
    subject: Prisma.SubjectCreateNestedOneWithoutExamSchedulesInput;
    room: Prisma.RoomCreateNestedOneWithoutExamSchedulesInput;
    marks?: Prisma.MarkCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleUncheckedCreateWithoutClassInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    examId: string;
    subjectId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    marks?: Prisma.MarkUncheckedCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleCreateOrConnectWithoutClassInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutClassInput, Prisma.ExamScheduleUncheckedCreateWithoutClassInput>;
};
export type ExamScheduleCreateManyClassInputEnvelope = {
    data: Prisma.ExamScheduleCreateManyClassInput | Prisma.ExamScheduleCreateManyClassInput[];
    skipDuplicates?: boolean;
};
export type ExamScheduleUpsertWithWhereUniqueWithoutClassInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutClassInput, Prisma.ExamScheduleUncheckedUpdateWithoutClassInput>;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutClassInput, Prisma.ExamScheduleUncheckedCreateWithoutClassInput>;
};
export type ExamScheduleUpdateWithWhereUniqueWithoutClassInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutClassInput, Prisma.ExamScheduleUncheckedUpdateWithoutClassInput>;
};
export type ExamScheduleUpdateManyWithWhereWithoutClassInput = {
    where: Prisma.ExamScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateManyMutationInput, Prisma.ExamScheduleUncheckedUpdateManyWithoutClassInput>;
};
export type ExamScheduleCreateWithoutSubjectInput = {
    id?: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamSchedulesInput;
    branch: Prisma.BranchCreateNestedOneWithoutExamSchedulesInput;
    exam: Prisma.ExamCreateNestedOneWithoutExamSchedulesInput;
    class: Prisma.ClassCreateNestedOneWithoutExamSchedulesInput;
    room: Prisma.RoomCreateNestedOneWithoutExamSchedulesInput;
    marks?: Prisma.MarkCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleUncheckedCreateWithoutSubjectInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    examId: string;
    classId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    marks?: Prisma.MarkUncheckedCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleCreateOrConnectWithoutSubjectInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutSubjectInput, Prisma.ExamScheduleUncheckedCreateWithoutSubjectInput>;
};
export type ExamScheduleCreateManySubjectInputEnvelope = {
    data: Prisma.ExamScheduleCreateManySubjectInput | Prisma.ExamScheduleCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type ExamScheduleUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutSubjectInput, Prisma.ExamScheduleUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutSubjectInput, Prisma.ExamScheduleUncheckedCreateWithoutSubjectInput>;
};
export type ExamScheduleUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutSubjectInput, Prisma.ExamScheduleUncheckedUpdateWithoutSubjectInput>;
};
export type ExamScheduleUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.ExamScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateManyMutationInput, Prisma.ExamScheduleUncheckedUpdateManyWithoutSubjectInput>;
};
export type ExamScheduleCreateWithoutRoomInput = {
    id?: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamSchedulesInput;
    branch: Prisma.BranchCreateNestedOneWithoutExamSchedulesInput;
    exam: Prisma.ExamCreateNestedOneWithoutExamSchedulesInput;
    class: Prisma.ClassCreateNestedOneWithoutExamSchedulesInput;
    subject: Prisma.SubjectCreateNestedOneWithoutExamSchedulesInput;
    marks?: Prisma.MarkCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleUncheckedCreateWithoutRoomInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    examId: string;
    classId: string;
    subjectId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    marks?: Prisma.MarkUncheckedCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleCreateOrConnectWithoutRoomInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutRoomInput, Prisma.ExamScheduleUncheckedCreateWithoutRoomInput>;
};
export type ExamScheduleCreateManyRoomInputEnvelope = {
    data: Prisma.ExamScheduleCreateManyRoomInput | Prisma.ExamScheduleCreateManyRoomInput[];
    skipDuplicates?: boolean;
};
export type ExamScheduleUpsertWithWhereUniqueWithoutRoomInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutRoomInput, Prisma.ExamScheduleUncheckedUpdateWithoutRoomInput>;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutRoomInput, Prisma.ExamScheduleUncheckedCreateWithoutRoomInput>;
};
export type ExamScheduleUpdateWithWhereUniqueWithoutRoomInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutRoomInput, Prisma.ExamScheduleUncheckedUpdateWithoutRoomInput>;
};
export type ExamScheduleUpdateManyWithWhereWithoutRoomInput = {
    where: Prisma.ExamScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateManyMutationInput, Prisma.ExamScheduleUncheckedUpdateManyWithoutRoomInput>;
};
export type ExamScheduleCreateWithoutExamInput = {
    id?: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamSchedulesInput;
    branch: Prisma.BranchCreateNestedOneWithoutExamSchedulesInput;
    class: Prisma.ClassCreateNestedOneWithoutExamSchedulesInput;
    subject: Prisma.SubjectCreateNestedOneWithoutExamSchedulesInput;
    room: Prisma.RoomCreateNestedOneWithoutExamSchedulesInput;
    marks?: Prisma.MarkCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleUncheckedCreateWithoutExamInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    classId: string;
    subjectId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    marks?: Prisma.MarkUncheckedCreateNestedManyWithoutExamScheduleInput;
};
export type ExamScheduleCreateOrConnectWithoutExamInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutExamInput, Prisma.ExamScheduleUncheckedCreateWithoutExamInput>;
};
export type ExamScheduleCreateManyExamInputEnvelope = {
    data: Prisma.ExamScheduleCreateManyExamInput | Prisma.ExamScheduleCreateManyExamInput[];
    skipDuplicates?: boolean;
};
export type ExamScheduleUpsertWithWhereUniqueWithoutExamInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutExamInput, Prisma.ExamScheduleUncheckedUpdateWithoutExamInput>;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutExamInput, Prisma.ExamScheduleUncheckedCreateWithoutExamInput>;
};
export type ExamScheduleUpdateWithWhereUniqueWithoutExamInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutExamInput, Prisma.ExamScheduleUncheckedUpdateWithoutExamInput>;
};
export type ExamScheduleUpdateManyWithWhereWithoutExamInput = {
    where: Prisma.ExamScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateManyMutationInput, Prisma.ExamScheduleUncheckedUpdateManyWithoutExamInput>;
};
export type ExamScheduleCreateWithoutMarksInput = {
    id?: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutExamSchedulesInput;
    branch: Prisma.BranchCreateNestedOneWithoutExamSchedulesInput;
    exam: Prisma.ExamCreateNestedOneWithoutExamSchedulesInput;
    class: Prisma.ClassCreateNestedOneWithoutExamSchedulesInput;
    subject: Prisma.SubjectCreateNestedOneWithoutExamSchedulesInput;
    room: Prisma.RoomCreateNestedOneWithoutExamSchedulesInput;
};
export type ExamScheduleUncheckedCreateWithoutMarksInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    examId: string;
    classId: string;
    subjectId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamScheduleCreateOrConnectWithoutMarksInput = {
    where: Prisma.ExamScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutMarksInput, Prisma.ExamScheduleUncheckedCreateWithoutMarksInput>;
};
export type ExamScheduleUpsertWithoutMarksInput = {
    update: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutMarksInput, Prisma.ExamScheduleUncheckedUpdateWithoutMarksInput>;
    create: Prisma.XOR<Prisma.ExamScheduleCreateWithoutMarksInput, Prisma.ExamScheduleUncheckedCreateWithoutMarksInput>;
    where?: Prisma.ExamScheduleWhereInput;
};
export type ExamScheduleUpdateToOneWithWhereWithoutMarksInput = {
    where?: Prisma.ExamScheduleWhereInput;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateWithoutMarksInput, Prisma.ExamScheduleUncheckedUpdateWithoutMarksInput>;
};
export type ExamScheduleUpdateWithoutMarksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamSchedulesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutExamSchedulesNestedInput;
    exam?: Prisma.ExamUpdateOneRequiredWithoutExamSchedulesNestedInput;
    class?: Prisma.ClassUpdateOneRequiredWithoutExamSchedulesNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutExamSchedulesNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutExamSchedulesNestedInput;
};
export type ExamScheduleUncheckedUpdateWithoutMarksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamScheduleCreateManySchoolInput = {
    id?: string;
    branchId: string;
    examId: string;
    classId: string;
    subjectId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamScheduleUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneRequiredWithoutExamSchedulesNestedInput;
    exam?: Prisma.ExamUpdateOneRequiredWithoutExamSchedulesNestedInput;
    class?: Prisma.ClassUpdateOneRequiredWithoutExamSchedulesNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutExamSchedulesNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutExamSchedulesNestedInput;
    marks?: Prisma.MarkUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    marks?: Prisma.MarkUncheckedUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamScheduleCreateManyBranchInput = {
    id?: string;
    schoolId: string;
    examId: string;
    classId: string;
    subjectId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamScheduleUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamSchedulesNestedInput;
    exam?: Prisma.ExamUpdateOneRequiredWithoutExamSchedulesNestedInput;
    class?: Prisma.ClassUpdateOneRequiredWithoutExamSchedulesNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutExamSchedulesNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutExamSchedulesNestedInput;
    marks?: Prisma.MarkUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    marks?: Prisma.MarkUncheckedUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamScheduleCreateManyClassInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    examId: string;
    subjectId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamScheduleUpdateWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamSchedulesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutExamSchedulesNestedInput;
    exam?: Prisma.ExamUpdateOneRequiredWithoutExamSchedulesNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutExamSchedulesNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutExamSchedulesNestedInput;
    marks?: Prisma.MarkUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    marks?: Prisma.MarkUncheckedUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateManyWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamScheduleCreateManySubjectInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    examId: string;
    classId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamScheduleUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamSchedulesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutExamSchedulesNestedInput;
    exam?: Prisma.ExamUpdateOneRequiredWithoutExamSchedulesNestedInput;
    class?: Prisma.ClassUpdateOneRequiredWithoutExamSchedulesNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutExamSchedulesNestedInput;
    marks?: Prisma.MarkUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    marks?: Prisma.MarkUncheckedUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateManyWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamScheduleCreateManyRoomInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    examId: string;
    classId: string;
    subjectId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamScheduleUpdateWithoutRoomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamSchedulesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutExamSchedulesNestedInput;
    exam?: Prisma.ExamUpdateOneRequiredWithoutExamSchedulesNestedInput;
    class?: Prisma.ClassUpdateOneRequiredWithoutExamSchedulesNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutExamSchedulesNestedInput;
    marks?: Prisma.MarkUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateWithoutRoomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    marks?: Prisma.MarkUncheckedUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateManyWithoutRoomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    examId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamScheduleCreateManyExamInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    classId: string;
    subjectId: string;
    roomId: string;
    examDate: Date | string;
    startTime: string;
    endTime: string;
    maxMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamScheduleUpdateWithoutExamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutExamSchedulesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutExamSchedulesNestedInput;
    class?: Prisma.ClassUpdateOneRequiredWithoutExamSchedulesNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutExamSchedulesNestedInput;
    room?: Prisma.RoomUpdateOneRequiredWithoutExamSchedulesNestedInput;
    marks?: Prisma.MarkUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateWithoutExamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    marks?: Prisma.MarkUncheckedUpdateManyWithoutExamScheduleNestedInput;
};
export type ExamScheduleUncheckedUpdateManyWithoutExamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomId?: Prisma.StringFieldUpdateOperationsInput | string;
    examDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    maxMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    passMarks?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamScheduleCountOutputType = {
    marks: number;
};
export type ExamScheduleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    marks?: boolean | ExamScheduleCountOutputTypeCountMarksArgs;
};
export type ExamScheduleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamScheduleCountOutputTypeSelect<ExtArgs> | null;
};
export type ExamScheduleCountOutputTypeCountMarksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarkWhereInput;
};
export type ExamScheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    examId?: boolean;
    classId?: boolean;
    subjectId?: boolean;
    roomId?: boolean;
    examDate?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    maxMarks?: boolean;
    passMarks?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    exam?: boolean | Prisma.ExamDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
    marks?: boolean | Prisma.ExamSchedule$marksArgs<ExtArgs>;
    _count?: boolean | Prisma.ExamScheduleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examSchedule"]>;
export type ExamScheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    examId?: boolean;
    classId?: boolean;
    subjectId?: boolean;
    roomId?: boolean;
    examDate?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    maxMarks?: boolean;
    passMarks?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    exam?: boolean | Prisma.ExamDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examSchedule"]>;
export type ExamScheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    examId?: boolean;
    classId?: boolean;
    subjectId?: boolean;
    roomId?: boolean;
    examDate?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    maxMarks?: boolean;
    passMarks?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    exam?: boolean | Prisma.ExamDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examSchedule"]>;
export type ExamScheduleSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    examId?: boolean;
    classId?: boolean;
    subjectId?: boolean;
    roomId?: boolean;
    examDate?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    maxMarks?: boolean;
    passMarks?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ExamScheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "branchId" | "examId" | "classId" | "subjectId" | "roomId" | "examDate" | "startTime" | "endTime" | "maxMarks" | "passMarks" | "createdAt" | "updatedAt", ExtArgs["result"]["examSchedule"]>;
export type ExamScheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    exam?: boolean | Prisma.ExamDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
    marks?: boolean | Prisma.ExamSchedule$marksArgs<ExtArgs>;
    _count?: boolean | Prisma.ExamScheduleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ExamScheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    exam?: boolean | Prisma.ExamDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
};
export type ExamScheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    exam?: boolean | Prisma.ExamDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.ClassDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    room?: boolean | Prisma.RoomDefaultArgs<ExtArgs>;
};
export type $ExamSchedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExamSchedule";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        branch: Prisma.$BranchPayload<ExtArgs>;
        exam: Prisma.$ExamPayload<ExtArgs>;
        class: Prisma.$ClassPayload<ExtArgs>;
        subject: Prisma.$SubjectPayload<ExtArgs>;
        room: Prisma.$RoomPayload<ExtArgs>;
        marks: Prisma.$MarkPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        branchId: string;
        examId: string;
        classId: string;
        subjectId: string;
        roomId: string;
        examDate: Date;
        startTime: string;
        endTime: string;
        maxMarks: runtime.Decimal;
        passMarks: runtime.Decimal;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["examSchedule"]>;
    composites: {};
};
export type ExamScheduleGetPayload<S extends boolean | null | undefined | ExamScheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload, S>;
export type ExamScheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExamScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExamScheduleCountAggregateInputType | true;
};
export interface ExamScheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExamSchedule'];
        meta: {
            name: 'ExamSchedule';
        };
    };
    findUnique<T extends ExamScheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, ExamScheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExamScheduleClient<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExamScheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExamScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamScheduleClient<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExamScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, ExamScheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExamScheduleClient<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExamScheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExamScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamScheduleClient<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExamScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, ExamScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExamScheduleCreateArgs>(args: Prisma.SelectSubset<T, ExamScheduleCreateArgs<ExtArgs>>): Prisma.Prisma__ExamScheduleClient<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExamScheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, ExamScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExamScheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExamScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExamScheduleDeleteArgs>(args: Prisma.SelectSubset<T, ExamScheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__ExamScheduleClient<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExamScheduleUpdateArgs>(args: Prisma.SelectSubset<T, ExamScheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__ExamScheduleClient<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExamScheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExamScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExamScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, ExamScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExamScheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExamScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExamScheduleUpsertArgs>(args: Prisma.SelectSubset<T, ExamScheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__ExamScheduleClient<runtime.Types.Result.GetResult<Prisma.$ExamSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExamScheduleCountArgs>(args?: Prisma.Subset<T, ExamScheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExamScheduleCountAggregateOutputType> : number>;
    aggregate<T extends ExamScheduleAggregateArgs>(args: Prisma.Subset<T, ExamScheduleAggregateArgs>): Prisma.PrismaPromise<GetExamScheduleAggregateType<T>>;
    groupBy<T extends ExamScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExamScheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: ExamScheduleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExamScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExamScheduleFieldRefs;
}
export interface Prisma__ExamScheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    branch<T extends Prisma.BranchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BranchDefaultArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    exam<T extends Prisma.ExamDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExamDefaultArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    class<T extends Prisma.ClassDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClassDefaultArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subject<T extends Prisma.SubjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SubjectDefaultArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    room<T extends Prisma.RoomDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoomDefaultArgs<ExtArgs>>): Prisma.Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    marks<T extends Prisma.ExamSchedule$marksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExamSchedule$marksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExamScheduleFieldRefs {
    readonly id: Prisma.FieldRef<"ExamSchedule", 'String'>;
    readonly schoolId: Prisma.FieldRef<"ExamSchedule", 'String'>;
    readonly branchId: Prisma.FieldRef<"ExamSchedule", 'String'>;
    readonly examId: Prisma.FieldRef<"ExamSchedule", 'String'>;
    readonly classId: Prisma.FieldRef<"ExamSchedule", 'String'>;
    readonly subjectId: Prisma.FieldRef<"ExamSchedule", 'String'>;
    readonly roomId: Prisma.FieldRef<"ExamSchedule", 'String'>;
    readonly examDate: Prisma.FieldRef<"ExamSchedule", 'DateTime'>;
    readonly startTime: Prisma.FieldRef<"ExamSchedule", 'String'>;
    readonly endTime: Prisma.FieldRef<"ExamSchedule", 'String'>;
    readonly maxMarks: Prisma.FieldRef<"ExamSchedule", 'Decimal'>;
    readonly passMarks: Prisma.FieldRef<"ExamSchedule", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"ExamSchedule", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ExamSchedule", 'DateTime'>;
}
export type ExamScheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ExamScheduleOmit<ExtArgs> | null;
    include?: Prisma.ExamScheduleInclude<ExtArgs> | null;
    where: Prisma.ExamScheduleWhereUniqueInput;
};
export type ExamScheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ExamScheduleOmit<ExtArgs> | null;
    include?: Prisma.ExamScheduleInclude<ExtArgs> | null;
    where: Prisma.ExamScheduleWhereUniqueInput;
};
export type ExamScheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamScheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamScheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamScheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ExamScheduleOmit<ExtArgs> | null;
    include?: Prisma.ExamScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamScheduleCreateInput, Prisma.ExamScheduleUncheckedCreateInput>;
};
export type ExamScheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExamScheduleCreateManyInput | Prisma.ExamScheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExamScheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamScheduleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamScheduleOmit<ExtArgs> | null;
    data: Prisma.ExamScheduleCreateManyInput | Prisma.ExamScheduleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExamScheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExamScheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ExamScheduleOmit<ExtArgs> | null;
    include?: Prisma.ExamScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateInput, Prisma.ExamScheduleUncheckedUpdateInput>;
    where: Prisma.ExamScheduleWhereUniqueInput;
};
export type ExamScheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExamScheduleUpdateManyMutationInput, Prisma.ExamScheduleUncheckedUpdateManyInput>;
    where?: Prisma.ExamScheduleWhereInput;
    limit?: number;
};
export type ExamScheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamScheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamScheduleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamScheduleUpdateManyMutationInput, Prisma.ExamScheduleUncheckedUpdateManyInput>;
    where?: Prisma.ExamScheduleWhereInput;
    limit?: number;
    include?: Prisma.ExamScheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExamScheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ExamScheduleOmit<ExtArgs> | null;
    include?: Prisma.ExamScheduleInclude<ExtArgs> | null;
    where: Prisma.ExamScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamScheduleCreateInput, Prisma.ExamScheduleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExamScheduleUpdateInput, Prisma.ExamScheduleUncheckedUpdateInput>;
};
export type ExamScheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ExamScheduleOmit<ExtArgs> | null;
    include?: Prisma.ExamScheduleInclude<ExtArgs> | null;
    where: Prisma.ExamScheduleWhereUniqueInput;
};
export type ExamScheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamScheduleWhereInput;
    limit?: number;
};
export type ExamSchedule$marksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamScheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ExamScheduleOmit<ExtArgs> | null;
    include?: Prisma.ExamScheduleInclude<ExtArgs> | null;
};
