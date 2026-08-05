import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TimetableEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$TimetableEntryPayload>;
export type AggregateTimetableEntry = {
    _count: TimetableEntryCountAggregateOutputType | null;
    _min: TimetableEntryMinAggregateOutputType | null;
    _max: TimetableEntryMaxAggregateOutputType | null;
};
export type TimetableEntryMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    sectionId: string | null;
    periodId: string | null;
    dayOfWeek: $Enums.DayOfWeek | null;
    subjectId: string | null;
    teacherId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TimetableEntryMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    sectionId: string | null;
    periodId: string | null;
    dayOfWeek: $Enums.DayOfWeek | null;
    subjectId: string | null;
    teacherId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TimetableEntryCountAggregateOutputType = {
    id: number;
    schoolId: number;
    sectionId: number;
    periodId: number;
    dayOfWeek: number;
    subjectId: number;
    teacherId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TimetableEntryMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    sectionId?: true;
    periodId?: true;
    dayOfWeek?: true;
    subjectId?: true;
    teacherId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TimetableEntryMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    sectionId?: true;
    periodId?: true;
    dayOfWeek?: true;
    subjectId?: true;
    teacherId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TimetableEntryCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    sectionId?: true;
    periodId?: true;
    dayOfWeek?: true;
    subjectId?: true;
    teacherId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TimetableEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimetableEntryWhereInput;
    orderBy?: Prisma.TimetableEntryOrderByWithRelationInput | Prisma.TimetableEntryOrderByWithRelationInput[];
    cursor?: Prisma.TimetableEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TimetableEntryCountAggregateInputType;
    _min?: TimetableEntryMinAggregateInputType;
    _max?: TimetableEntryMaxAggregateInputType;
};
export type GetTimetableEntryAggregateType<T extends TimetableEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateTimetableEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTimetableEntry[P]> : Prisma.GetScalarType<T[P], AggregateTimetableEntry[P]>;
};
export type TimetableEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimetableEntryWhereInput;
    orderBy?: Prisma.TimetableEntryOrderByWithAggregationInput | Prisma.TimetableEntryOrderByWithAggregationInput[];
    by: Prisma.TimetableEntryScalarFieldEnum[] | Prisma.TimetableEntryScalarFieldEnum;
    having?: Prisma.TimetableEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TimetableEntryCountAggregateInputType | true;
    _min?: TimetableEntryMinAggregateInputType;
    _max?: TimetableEntryMaxAggregateInputType;
};
export type TimetableEntryGroupByOutputType = {
    id: string;
    schoolId: string;
    sectionId: string;
    periodId: string;
    dayOfWeek: $Enums.DayOfWeek;
    subjectId: string;
    teacherId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: TimetableEntryCountAggregateOutputType | null;
    _min: TimetableEntryMinAggregateOutputType | null;
    _max: TimetableEntryMaxAggregateOutputType | null;
};
export type GetTimetableEntryGroupByPayload<T extends TimetableEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TimetableEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TimetableEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TimetableEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TimetableEntryGroupByOutputType[P]>;
}>>;
export type TimetableEntryWhereInput = {
    AND?: Prisma.TimetableEntryWhereInput | Prisma.TimetableEntryWhereInput[];
    OR?: Prisma.TimetableEntryWhereInput[];
    NOT?: Prisma.TimetableEntryWhereInput | Prisma.TimetableEntryWhereInput[];
    id?: Prisma.StringFilter<"TimetableEntry"> | string;
    schoolId?: Prisma.StringFilter<"TimetableEntry"> | string;
    sectionId?: Prisma.StringFilter<"TimetableEntry"> | string;
    periodId?: Prisma.StringFilter<"TimetableEntry"> | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFilter<"TimetableEntry"> | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFilter<"TimetableEntry"> | string;
    teacherId?: Prisma.StringFilter<"TimetableEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"TimetableEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TimetableEntry"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    section?: Prisma.XOR<Prisma.SectionScalarRelationFilter, Prisma.SectionWhereInput>;
    period?: Prisma.XOR<Prisma.PeriodScalarRelationFilter, Prisma.PeriodWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
};
export type TimetableEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    periodId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    section?: Prisma.SectionOrderByWithRelationInput;
    period?: Prisma.PeriodOrderByWithRelationInput;
    subject?: Prisma.SubjectOrderByWithRelationInput;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
};
export type TimetableEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sectionId_periodId_dayOfWeek?: Prisma.TimetableEntrySectionIdPeriodIdDayOfWeekCompoundUniqueInput;
    AND?: Prisma.TimetableEntryWhereInput | Prisma.TimetableEntryWhereInput[];
    OR?: Prisma.TimetableEntryWhereInput[];
    NOT?: Prisma.TimetableEntryWhereInput | Prisma.TimetableEntryWhereInput[];
    schoolId?: Prisma.StringFilter<"TimetableEntry"> | string;
    sectionId?: Prisma.StringFilter<"TimetableEntry"> | string;
    periodId?: Prisma.StringFilter<"TimetableEntry"> | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFilter<"TimetableEntry"> | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFilter<"TimetableEntry"> | string;
    teacherId?: Prisma.StringFilter<"TimetableEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"TimetableEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TimetableEntry"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    section?: Prisma.XOR<Prisma.SectionScalarRelationFilter, Prisma.SectionWhereInput>;
    period?: Prisma.XOR<Prisma.PeriodScalarRelationFilter, Prisma.PeriodWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.SubjectWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
}, "id" | "sectionId_periodId_dayOfWeek">;
export type TimetableEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    periodId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TimetableEntryCountOrderByAggregateInput;
    _max?: Prisma.TimetableEntryMaxOrderByAggregateInput;
    _min?: Prisma.TimetableEntryMinOrderByAggregateInput;
};
export type TimetableEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.TimetableEntryScalarWhereWithAggregatesInput | Prisma.TimetableEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.TimetableEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TimetableEntryScalarWhereWithAggregatesInput | Prisma.TimetableEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TimetableEntry"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"TimetableEntry"> | string;
    sectionId?: Prisma.StringWithAggregatesFilter<"TimetableEntry"> | string;
    periodId?: Prisma.StringWithAggregatesFilter<"TimetableEntry"> | string;
    dayOfWeek?: Prisma.EnumDayOfWeekWithAggregatesFilter<"TimetableEntry"> | $Enums.DayOfWeek;
    subjectId?: Prisma.StringWithAggregatesFilter<"TimetableEntry"> | string;
    teacherId?: Prisma.StringWithAggregatesFilter<"TimetableEntry"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TimetableEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TimetableEntry"> | Date | string;
};
export type TimetableEntryCreateInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutTimetableEntriesInput;
    section: Prisma.SectionCreateNestedOneWithoutTimetableEntriesInput;
    period: Prisma.PeriodCreateNestedOneWithoutTimetableEntriesInput;
    subject: Prisma.SubjectCreateNestedOneWithoutTimetableEntriesInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutTimetableEntriesInput;
};
export type TimetableEntryUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    periodId: string;
    dayOfWeek: $Enums.DayOfWeek;
    subjectId: string;
    teacherId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimetableEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    period?: Prisma.PeriodUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutTimetableEntriesNestedInput;
};
export type TimetableEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntryCreateManyInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    periodId: string;
    dayOfWeek: $Enums.DayOfWeek;
    subjectId: string;
    teacherId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimetableEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntryListRelationFilter = {
    every?: Prisma.TimetableEntryWhereInput;
    some?: Prisma.TimetableEntryWhereInput;
    none?: Prisma.TimetableEntryWhereInput;
};
export type TimetableEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TimetableEntrySectionIdPeriodIdDayOfWeekCompoundUniqueInput = {
    sectionId: string;
    periodId: string;
    dayOfWeek: $Enums.DayOfWeek;
};
export type TimetableEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    periodId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TimetableEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    periodId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TimetableEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    periodId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TimetableEntryCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSchoolInput, Prisma.TimetableEntryUncheckedCreateWithoutSchoolInput> | Prisma.TimetableEntryCreateWithoutSchoolInput[] | Prisma.TimetableEntryUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutSchoolInput | Prisma.TimetableEntryCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.TimetableEntryCreateManySchoolInputEnvelope;
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
};
export type TimetableEntryUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSchoolInput, Prisma.TimetableEntryUncheckedCreateWithoutSchoolInput> | Prisma.TimetableEntryCreateWithoutSchoolInput[] | Prisma.TimetableEntryUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutSchoolInput | Prisma.TimetableEntryCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.TimetableEntryCreateManySchoolInputEnvelope;
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
};
export type TimetableEntryUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSchoolInput, Prisma.TimetableEntryUncheckedCreateWithoutSchoolInput> | Prisma.TimetableEntryCreateWithoutSchoolInput[] | Prisma.TimetableEntryUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutSchoolInput | Prisma.TimetableEntryCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.TimetableEntryUpsertWithWhereUniqueWithoutSchoolInput | Prisma.TimetableEntryUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.TimetableEntryCreateManySchoolInputEnvelope;
    set?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    disconnect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    delete?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    update?: Prisma.TimetableEntryUpdateWithWhereUniqueWithoutSchoolInput | Prisma.TimetableEntryUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.TimetableEntryUpdateManyWithWhereWithoutSchoolInput | Prisma.TimetableEntryUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.TimetableEntryScalarWhereInput | Prisma.TimetableEntryScalarWhereInput[];
};
export type TimetableEntryUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSchoolInput, Prisma.TimetableEntryUncheckedCreateWithoutSchoolInput> | Prisma.TimetableEntryCreateWithoutSchoolInput[] | Prisma.TimetableEntryUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutSchoolInput | Prisma.TimetableEntryCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.TimetableEntryUpsertWithWhereUniqueWithoutSchoolInput | Prisma.TimetableEntryUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.TimetableEntryCreateManySchoolInputEnvelope;
    set?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    disconnect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    delete?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    update?: Prisma.TimetableEntryUpdateWithWhereUniqueWithoutSchoolInput | Prisma.TimetableEntryUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.TimetableEntryUpdateManyWithWhereWithoutSchoolInput | Prisma.TimetableEntryUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.TimetableEntryScalarWhereInput | Prisma.TimetableEntryScalarWhereInput[];
};
export type TimetableEntryCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSectionInput, Prisma.TimetableEntryUncheckedCreateWithoutSectionInput> | Prisma.TimetableEntryCreateWithoutSectionInput[] | Prisma.TimetableEntryUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutSectionInput | Prisma.TimetableEntryCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.TimetableEntryCreateManySectionInputEnvelope;
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
};
export type TimetableEntryUncheckedCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSectionInput, Prisma.TimetableEntryUncheckedCreateWithoutSectionInput> | Prisma.TimetableEntryCreateWithoutSectionInput[] | Prisma.TimetableEntryUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutSectionInput | Prisma.TimetableEntryCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.TimetableEntryCreateManySectionInputEnvelope;
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
};
export type TimetableEntryUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSectionInput, Prisma.TimetableEntryUncheckedCreateWithoutSectionInput> | Prisma.TimetableEntryCreateWithoutSectionInput[] | Prisma.TimetableEntryUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutSectionInput | Prisma.TimetableEntryCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.TimetableEntryUpsertWithWhereUniqueWithoutSectionInput | Prisma.TimetableEntryUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.TimetableEntryCreateManySectionInputEnvelope;
    set?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    disconnect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    delete?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    update?: Prisma.TimetableEntryUpdateWithWhereUniqueWithoutSectionInput | Prisma.TimetableEntryUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.TimetableEntryUpdateManyWithWhereWithoutSectionInput | Prisma.TimetableEntryUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.TimetableEntryScalarWhereInput | Prisma.TimetableEntryScalarWhereInput[];
};
export type TimetableEntryUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSectionInput, Prisma.TimetableEntryUncheckedCreateWithoutSectionInput> | Prisma.TimetableEntryCreateWithoutSectionInput[] | Prisma.TimetableEntryUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutSectionInput | Prisma.TimetableEntryCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.TimetableEntryUpsertWithWhereUniqueWithoutSectionInput | Prisma.TimetableEntryUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.TimetableEntryCreateManySectionInputEnvelope;
    set?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    disconnect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    delete?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    update?: Prisma.TimetableEntryUpdateWithWhereUniqueWithoutSectionInput | Prisma.TimetableEntryUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.TimetableEntryUpdateManyWithWhereWithoutSectionInput | Prisma.TimetableEntryUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.TimetableEntryScalarWhereInput | Prisma.TimetableEntryScalarWhereInput[];
};
export type TimetableEntryCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSubjectInput, Prisma.TimetableEntryUncheckedCreateWithoutSubjectInput> | Prisma.TimetableEntryCreateWithoutSubjectInput[] | Prisma.TimetableEntryUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutSubjectInput | Prisma.TimetableEntryCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.TimetableEntryCreateManySubjectInputEnvelope;
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
};
export type TimetableEntryUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSubjectInput, Prisma.TimetableEntryUncheckedCreateWithoutSubjectInput> | Prisma.TimetableEntryCreateWithoutSubjectInput[] | Prisma.TimetableEntryUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutSubjectInput | Prisma.TimetableEntryCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.TimetableEntryCreateManySubjectInputEnvelope;
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
};
export type TimetableEntryUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSubjectInput, Prisma.TimetableEntryUncheckedCreateWithoutSubjectInput> | Prisma.TimetableEntryCreateWithoutSubjectInput[] | Prisma.TimetableEntryUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutSubjectInput | Prisma.TimetableEntryCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.TimetableEntryUpsertWithWhereUniqueWithoutSubjectInput | Prisma.TimetableEntryUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.TimetableEntryCreateManySubjectInputEnvelope;
    set?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    disconnect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    delete?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    update?: Prisma.TimetableEntryUpdateWithWhereUniqueWithoutSubjectInput | Prisma.TimetableEntryUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.TimetableEntryUpdateManyWithWhereWithoutSubjectInput | Prisma.TimetableEntryUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.TimetableEntryScalarWhereInput | Prisma.TimetableEntryScalarWhereInput[];
};
export type TimetableEntryUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSubjectInput, Prisma.TimetableEntryUncheckedCreateWithoutSubjectInput> | Prisma.TimetableEntryCreateWithoutSubjectInput[] | Prisma.TimetableEntryUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutSubjectInput | Prisma.TimetableEntryCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.TimetableEntryUpsertWithWhereUniqueWithoutSubjectInput | Prisma.TimetableEntryUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.TimetableEntryCreateManySubjectInputEnvelope;
    set?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    disconnect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    delete?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    update?: Prisma.TimetableEntryUpdateWithWhereUniqueWithoutSubjectInput | Prisma.TimetableEntryUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.TimetableEntryUpdateManyWithWhereWithoutSubjectInput | Prisma.TimetableEntryUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.TimetableEntryScalarWhereInput | Prisma.TimetableEntryScalarWhereInput[];
};
export type TimetableEntryCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutTeacherInput, Prisma.TimetableEntryUncheckedCreateWithoutTeacherInput> | Prisma.TimetableEntryCreateWithoutTeacherInput[] | Prisma.TimetableEntryUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutTeacherInput | Prisma.TimetableEntryCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.TimetableEntryCreateManyTeacherInputEnvelope;
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
};
export type TimetableEntryUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutTeacherInput, Prisma.TimetableEntryUncheckedCreateWithoutTeacherInput> | Prisma.TimetableEntryCreateWithoutTeacherInput[] | Prisma.TimetableEntryUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutTeacherInput | Prisma.TimetableEntryCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.TimetableEntryCreateManyTeacherInputEnvelope;
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
};
export type TimetableEntryUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutTeacherInput, Prisma.TimetableEntryUncheckedCreateWithoutTeacherInput> | Prisma.TimetableEntryCreateWithoutTeacherInput[] | Prisma.TimetableEntryUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutTeacherInput | Prisma.TimetableEntryCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.TimetableEntryUpsertWithWhereUniqueWithoutTeacherInput | Prisma.TimetableEntryUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.TimetableEntryCreateManyTeacherInputEnvelope;
    set?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    disconnect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    delete?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    update?: Prisma.TimetableEntryUpdateWithWhereUniqueWithoutTeacherInput | Prisma.TimetableEntryUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.TimetableEntryUpdateManyWithWhereWithoutTeacherInput | Prisma.TimetableEntryUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.TimetableEntryScalarWhereInput | Prisma.TimetableEntryScalarWhereInput[];
};
export type TimetableEntryUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutTeacherInput, Prisma.TimetableEntryUncheckedCreateWithoutTeacherInput> | Prisma.TimetableEntryCreateWithoutTeacherInput[] | Prisma.TimetableEntryUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutTeacherInput | Prisma.TimetableEntryCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.TimetableEntryUpsertWithWhereUniqueWithoutTeacherInput | Prisma.TimetableEntryUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.TimetableEntryCreateManyTeacherInputEnvelope;
    set?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    disconnect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    delete?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    update?: Prisma.TimetableEntryUpdateWithWhereUniqueWithoutTeacherInput | Prisma.TimetableEntryUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.TimetableEntryUpdateManyWithWhereWithoutTeacherInput | Prisma.TimetableEntryUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.TimetableEntryScalarWhereInput | Prisma.TimetableEntryScalarWhereInput[];
};
export type TimetableEntryCreateNestedManyWithoutPeriodInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutPeriodInput, Prisma.TimetableEntryUncheckedCreateWithoutPeriodInput> | Prisma.TimetableEntryCreateWithoutPeriodInput[] | Prisma.TimetableEntryUncheckedCreateWithoutPeriodInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutPeriodInput | Prisma.TimetableEntryCreateOrConnectWithoutPeriodInput[];
    createMany?: Prisma.TimetableEntryCreateManyPeriodInputEnvelope;
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
};
export type TimetableEntryUncheckedCreateNestedManyWithoutPeriodInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutPeriodInput, Prisma.TimetableEntryUncheckedCreateWithoutPeriodInput> | Prisma.TimetableEntryCreateWithoutPeriodInput[] | Prisma.TimetableEntryUncheckedCreateWithoutPeriodInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutPeriodInput | Prisma.TimetableEntryCreateOrConnectWithoutPeriodInput[];
    createMany?: Prisma.TimetableEntryCreateManyPeriodInputEnvelope;
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
};
export type TimetableEntryUpdateManyWithoutPeriodNestedInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutPeriodInput, Prisma.TimetableEntryUncheckedCreateWithoutPeriodInput> | Prisma.TimetableEntryCreateWithoutPeriodInput[] | Prisma.TimetableEntryUncheckedCreateWithoutPeriodInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutPeriodInput | Prisma.TimetableEntryCreateOrConnectWithoutPeriodInput[];
    upsert?: Prisma.TimetableEntryUpsertWithWhereUniqueWithoutPeriodInput | Prisma.TimetableEntryUpsertWithWhereUniqueWithoutPeriodInput[];
    createMany?: Prisma.TimetableEntryCreateManyPeriodInputEnvelope;
    set?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    disconnect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    delete?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    update?: Prisma.TimetableEntryUpdateWithWhereUniqueWithoutPeriodInput | Prisma.TimetableEntryUpdateWithWhereUniqueWithoutPeriodInput[];
    updateMany?: Prisma.TimetableEntryUpdateManyWithWhereWithoutPeriodInput | Prisma.TimetableEntryUpdateManyWithWhereWithoutPeriodInput[];
    deleteMany?: Prisma.TimetableEntryScalarWhereInput | Prisma.TimetableEntryScalarWhereInput[];
};
export type TimetableEntryUncheckedUpdateManyWithoutPeriodNestedInput = {
    create?: Prisma.XOR<Prisma.TimetableEntryCreateWithoutPeriodInput, Prisma.TimetableEntryUncheckedCreateWithoutPeriodInput> | Prisma.TimetableEntryCreateWithoutPeriodInput[] | Prisma.TimetableEntryUncheckedCreateWithoutPeriodInput[];
    connectOrCreate?: Prisma.TimetableEntryCreateOrConnectWithoutPeriodInput | Prisma.TimetableEntryCreateOrConnectWithoutPeriodInput[];
    upsert?: Prisma.TimetableEntryUpsertWithWhereUniqueWithoutPeriodInput | Prisma.TimetableEntryUpsertWithWhereUniqueWithoutPeriodInput[];
    createMany?: Prisma.TimetableEntryCreateManyPeriodInputEnvelope;
    set?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    disconnect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    delete?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    connect?: Prisma.TimetableEntryWhereUniqueInput | Prisma.TimetableEntryWhereUniqueInput[];
    update?: Prisma.TimetableEntryUpdateWithWhereUniqueWithoutPeriodInput | Prisma.TimetableEntryUpdateWithWhereUniqueWithoutPeriodInput[];
    updateMany?: Prisma.TimetableEntryUpdateManyWithWhereWithoutPeriodInput | Prisma.TimetableEntryUpdateManyWithWhereWithoutPeriodInput[];
    deleteMany?: Prisma.TimetableEntryScalarWhereInput | Prisma.TimetableEntryScalarWhereInput[];
};
export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek;
};
export type TimetableEntryCreateWithoutSchoolInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    section: Prisma.SectionCreateNestedOneWithoutTimetableEntriesInput;
    period: Prisma.PeriodCreateNestedOneWithoutTimetableEntriesInput;
    subject: Prisma.SubjectCreateNestedOneWithoutTimetableEntriesInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutTimetableEntriesInput;
};
export type TimetableEntryUncheckedCreateWithoutSchoolInput = {
    id?: string;
    sectionId: string;
    periodId: string;
    dayOfWeek: $Enums.DayOfWeek;
    subjectId: string;
    teacherId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimetableEntryCreateOrConnectWithoutSchoolInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSchoolInput, Prisma.TimetableEntryUncheckedCreateWithoutSchoolInput>;
};
export type TimetableEntryCreateManySchoolInputEnvelope = {
    data: Prisma.TimetableEntryCreateManySchoolInput | Prisma.TimetableEntryCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type TimetableEntryUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.TimetableEntryUpdateWithoutSchoolInput, Prisma.TimetableEntryUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSchoolInput, Prisma.TimetableEntryUncheckedCreateWithoutSchoolInput>;
};
export type TimetableEntryUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.TimetableEntryUpdateWithoutSchoolInput, Prisma.TimetableEntryUncheckedUpdateWithoutSchoolInput>;
};
export type TimetableEntryUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.TimetableEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.TimetableEntryUpdateManyMutationInput, Prisma.TimetableEntryUncheckedUpdateManyWithoutSchoolInput>;
};
export type TimetableEntryScalarWhereInput = {
    AND?: Prisma.TimetableEntryScalarWhereInput | Prisma.TimetableEntryScalarWhereInput[];
    OR?: Prisma.TimetableEntryScalarWhereInput[];
    NOT?: Prisma.TimetableEntryScalarWhereInput | Prisma.TimetableEntryScalarWhereInput[];
    id?: Prisma.StringFilter<"TimetableEntry"> | string;
    schoolId?: Prisma.StringFilter<"TimetableEntry"> | string;
    sectionId?: Prisma.StringFilter<"TimetableEntry"> | string;
    periodId?: Prisma.StringFilter<"TimetableEntry"> | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFilter<"TimetableEntry"> | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFilter<"TimetableEntry"> | string;
    teacherId?: Prisma.StringFilter<"TimetableEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"TimetableEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TimetableEntry"> | Date | string;
};
export type TimetableEntryCreateWithoutSectionInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutTimetableEntriesInput;
    period: Prisma.PeriodCreateNestedOneWithoutTimetableEntriesInput;
    subject: Prisma.SubjectCreateNestedOneWithoutTimetableEntriesInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutTimetableEntriesInput;
};
export type TimetableEntryUncheckedCreateWithoutSectionInput = {
    id?: string;
    schoolId: string;
    periodId: string;
    dayOfWeek: $Enums.DayOfWeek;
    subjectId: string;
    teacherId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimetableEntryCreateOrConnectWithoutSectionInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSectionInput, Prisma.TimetableEntryUncheckedCreateWithoutSectionInput>;
};
export type TimetableEntryCreateManySectionInputEnvelope = {
    data: Prisma.TimetableEntryCreateManySectionInput | Prisma.TimetableEntryCreateManySectionInput[];
    skipDuplicates?: boolean;
};
export type TimetableEntryUpsertWithWhereUniqueWithoutSectionInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.TimetableEntryUpdateWithoutSectionInput, Prisma.TimetableEntryUncheckedUpdateWithoutSectionInput>;
    create: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSectionInput, Prisma.TimetableEntryUncheckedCreateWithoutSectionInput>;
};
export type TimetableEntryUpdateWithWhereUniqueWithoutSectionInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.TimetableEntryUpdateWithoutSectionInput, Prisma.TimetableEntryUncheckedUpdateWithoutSectionInput>;
};
export type TimetableEntryUpdateManyWithWhereWithoutSectionInput = {
    where: Prisma.TimetableEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.TimetableEntryUpdateManyMutationInput, Prisma.TimetableEntryUncheckedUpdateManyWithoutSectionInput>;
};
export type TimetableEntryCreateWithoutSubjectInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutTimetableEntriesInput;
    section: Prisma.SectionCreateNestedOneWithoutTimetableEntriesInput;
    period: Prisma.PeriodCreateNestedOneWithoutTimetableEntriesInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutTimetableEntriesInput;
};
export type TimetableEntryUncheckedCreateWithoutSubjectInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    periodId: string;
    dayOfWeek: $Enums.DayOfWeek;
    teacherId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimetableEntryCreateOrConnectWithoutSubjectInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSubjectInput, Prisma.TimetableEntryUncheckedCreateWithoutSubjectInput>;
};
export type TimetableEntryCreateManySubjectInputEnvelope = {
    data: Prisma.TimetableEntryCreateManySubjectInput | Prisma.TimetableEntryCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type TimetableEntryUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.TimetableEntryUpdateWithoutSubjectInput, Prisma.TimetableEntryUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.TimetableEntryCreateWithoutSubjectInput, Prisma.TimetableEntryUncheckedCreateWithoutSubjectInput>;
};
export type TimetableEntryUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.TimetableEntryUpdateWithoutSubjectInput, Prisma.TimetableEntryUncheckedUpdateWithoutSubjectInput>;
};
export type TimetableEntryUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.TimetableEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.TimetableEntryUpdateManyMutationInput, Prisma.TimetableEntryUncheckedUpdateManyWithoutSubjectInput>;
};
export type TimetableEntryCreateWithoutTeacherInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutTimetableEntriesInput;
    section: Prisma.SectionCreateNestedOneWithoutTimetableEntriesInput;
    period: Prisma.PeriodCreateNestedOneWithoutTimetableEntriesInput;
    subject: Prisma.SubjectCreateNestedOneWithoutTimetableEntriesInput;
};
export type TimetableEntryUncheckedCreateWithoutTeacherInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    periodId: string;
    dayOfWeek: $Enums.DayOfWeek;
    subjectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimetableEntryCreateOrConnectWithoutTeacherInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimetableEntryCreateWithoutTeacherInput, Prisma.TimetableEntryUncheckedCreateWithoutTeacherInput>;
};
export type TimetableEntryCreateManyTeacherInputEnvelope = {
    data: Prisma.TimetableEntryCreateManyTeacherInput | Prisma.TimetableEntryCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type TimetableEntryUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.TimetableEntryUpdateWithoutTeacherInput, Prisma.TimetableEntryUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.TimetableEntryCreateWithoutTeacherInput, Prisma.TimetableEntryUncheckedCreateWithoutTeacherInput>;
};
export type TimetableEntryUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.TimetableEntryUpdateWithoutTeacherInput, Prisma.TimetableEntryUncheckedUpdateWithoutTeacherInput>;
};
export type TimetableEntryUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.TimetableEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.TimetableEntryUpdateManyMutationInput, Prisma.TimetableEntryUncheckedUpdateManyWithoutTeacherInput>;
};
export type TimetableEntryCreateWithoutPeriodInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutTimetableEntriesInput;
    section: Prisma.SectionCreateNestedOneWithoutTimetableEntriesInput;
    subject: Prisma.SubjectCreateNestedOneWithoutTimetableEntriesInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutTimetableEntriesInput;
};
export type TimetableEntryUncheckedCreateWithoutPeriodInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    dayOfWeek: $Enums.DayOfWeek;
    subjectId: string;
    teacherId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimetableEntryCreateOrConnectWithoutPeriodInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimetableEntryCreateWithoutPeriodInput, Prisma.TimetableEntryUncheckedCreateWithoutPeriodInput>;
};
export type TimetableEntryCreateManyPeriodInputEnvelope = {
    data: Prisma.TimetableEntryCreateManyPeriodInput | Prisma.TimetableEntryCreateManyPeriodInput[];
    skipDuplicates?: boolean;
};
export type TimetableEntryUpsertWithWhereUniqueWithoutPeriodInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.TimetableEntryUpdateWithoutPeriodInput, Prisma.TimetableEntryUncheckedUpdateWithoutPeriodInput>;
    create: Prisma.XOR<Prisma.TimetableEntryCreateWithoutPeriodInput, Prisma.TimetableEntryUncheckedCreateWithoutPeriodInput>;
};
export type TimetableEntryUpdateWithWhereUniqueWithoutPeriodInput = {
    where: Prisma.TimetableEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.TimetableEntryUpdateWithoutPeriodInput, Prisma.TimetableEntryUncheckedUpdateWithoutPeriodInput>;
};
export type TimetableEntryUpdateManyWithWhereWithoutPeriodInput = {
    where: Prisma.TimetableEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.TimetableEntryUpdateManyMutationInput, Prisma.TimetableEntryUncheckedUpdateManyWithoutPeriodInput>;
};
export type TimetableEntryCreateManySchoolInput = {
    id?: string;
    sectionId: string;
    periodId: string;
    dayOfWeek: $Enums.DayOfWeek;
    subjectId: string;
    teacherId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimetableEntryUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    section?: Prisma.SectionUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    period?: Prisma.PeriodUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutTimetableEntriesNestedInput;
};
export type TimetableEntryUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntryUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntryCreateManySectionInput = {
    id?: string;
    schoolId: string;
    periodId: string;
    dayOfWeek: $Enums.DayOfWeek;
    subjectId: string;
    teacherId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimetableEntryUpdateWithoutSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    period?: Prisma.PeriodUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutTimetableEntriesNestedInput;
};
export type TimetableEntryUncheckedUpdateWithoutSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntryUncheckedUpdateManyWithoutSectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntryCreateManySubjectInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    periodId: string;
    dayOfWeek: $Enums.DayOfWeek;
    teacherId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimetableEntryUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    period?: Prisma.PeriodUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutTimetableEntriesNestedInput;
};
export type TimetableEntryUncheckedUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntryUncheckedUpdateManyWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntryCreateManyTeacherInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    periodId: string;
    dayOfWeek: $Enums.DayOfWeek;
    subjectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimetableEntryUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    period?: Prisma.PeriodUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutTimetableEntriesNestedInput;
};
export type TimetableEntryUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntryUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntryCreateManyPeriodInput = {
    id?: string;
    schoolId: string;
    sectionId: string;
    dayOfWeek: $Enums.DayOfWeek;
    subjectId: string;
    teacherId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TimetableEntryUpdateWithoutPeriodInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    section?: Prisma.SectionUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    subject?: Prisma.SubjectUpdateOneRequiredWithoutTimetableEntriesNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutTimetableEntriesNestedInput;
};
export type TimetableEntryUncheckedUpdateWithoutPeriodInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntryUncheckedUpdateManyWithoutPeriodInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TimetableEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    sectionId?: boolean;
    periodId?: boolean;
    dayOfWeek?: boolean;
    subjectId?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    period?: boolean | Prisma.PeriodDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["timetableEntry"]>;
export type TimetableEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    sectionId?: boolean;
    periodId?: boolean;
    dayOfWeek?: boolean;
    subjectId?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    period?: boolean | Prisma.PeriodDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["timetableEntry"]>;
export type TimetableEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    sectionId?: boolean;
    periodId?: boolean;
    dayOfWeek?: boolean;
    subjectId?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    period?: boolean | Prisma.PeriodDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["timetableEntry"]>;
export type TimetableEntrySelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    sectionId?: boolean;
    periodId?: boolean;
    dayOfWeek?: boolean;
    subjectId?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TimetableEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "sectionId" | "periodId" | "dayOfWeek" | "subjectId" | "teacherId" | "createdAt" | "updatedAt", ExtArgs["result"]["timetableEntry"]>;
export type TimetableEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    period?: boolean | Prisma.PeriodDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type TimetableEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    period?: boolean | Prisma.PeriodDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type TimetableEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    period?: boolean | Prisma.PeriodDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.SubjectDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type $TimetableEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TimetableEntry";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        section: Prisma.$SectionPayload<ExtArgs>;
        period: Prisma.$PeriodPayload<ExtArgs>;
        subject: Prisma.$SubjectPayload<ExtArgs>;
        teacher: Prisma.$TeacherPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        sectionId: string;
        periodId: string;
        dayOfWeek: $Enums.DayOfWeek;
        subjectId: string;
        teacherId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["timetableEntry"]>;
    composites: {};
};
export type TimetableEntryGetPayload<S extends boolean | null | undefined | TimetableEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload, S>;
export type TimetableEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TimetableEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TimetableEntryCountAggregateInputType | true;
};
export interface TimetableEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TimetableEntry'];
        meta: {
            name: 'TimetableEntry';
        };
    };
    findUnique<T extends TimetableEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, TimetableEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TimetableEntryClient<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TimetableEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TimetableEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TimetableEntryClient<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TimetableEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, TimetableEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__TimetableEntryClient<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TimetableEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TimetableEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TimetableEntryClient<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TimetableEntryFindManyArgs>(args?: Prisma.SelectSubset<T, TimetableEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TimetableEntryCreateArgs>(args: Prisma.SelectSubset<T, TimetableEntryCreateArgs<ExtArgs>>): Prisma.Prisma__TimetableEntryClient<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TimetableEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, TimetableEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TimetableEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TimetableEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TimetableEntryDeleteArgs>(args: Prisma.SelectSubset<T, TimetableEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__TimetableEntryClient<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TimetableEntryUpdateArgs>(args: Prisma.SelectSubset<T, TimetableEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__TimetableEntryClient<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TimetableEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, TimetableEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TimetableEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, TimetableEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TimetableEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TimetableEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TimetableEntryUpsertArgs>(args: Prisma.SelectSubset<T, TimetableEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__TimetableEntryClient<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TimetableEntryCountArgs>(args?: Prisma.Subset<T, TimetableEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TimetableEntryCountAggregateOutputType> : number>;
    aggregate<T extends TimetableEntryAggregateArgs>(args: Prisma.Subset<T, TimetableEntryAggregateArgs>): Prisma.PrismaPromise<GetTimetableEntryAggregateType<T>>;
    groupBy<T extends TimetableEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TimetableEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: TimetableEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TimetableEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimetableEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TimetableEntryFieldRefs;
}
export interface Prisma__TimetableEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    section<T extends Prisma.SectionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SectionDefaultArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    period<T extends Prisma.PeriodDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PeriodDefaultArgs<ExtArgs>>): Prisma.Prisma__PeriodClient<runtime.Types.Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subject<T extends Prisma.SubjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SubjectDefaultArgs<ExtArgs>>): Prisma.Prisma__SubjectClient<runtime.Types.Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.TeacherDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherDefaultArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TimetableEntryFieldRefs {
    readonly id: Prisma.FieldRef<"TimetableEntry", 'String'>;
    readonly schoolId: Prisma.FieldRef<"TimetableEntry", 'String'>;
    readonly sectionId: Prisma.FieldRef<"TimetableEntry", 'String'>;
    readonly periodId: Prisma.FieldRef<"TimetableEntry", 'String'>;
    readonly dayOfWeek: Prisma.FieldRef<"TimetableEntry", 'DayOfWeek'>;
    readonly subjectId: Prisma.FieldRef<"TimetableEntry", 'String'>;
    readonly teacherId: Prisma.FieldRef<"TimetableEntry", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TimetableEntry", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TimetableEntry", 'DateTime'>;
}
export type TimetableEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimetableEntrySelect<ExtArgs> | null;
    omit?: Prisma.TimetableEntryOmit<ExtArgs> | null;
    include?: Prisma.TimetableEntryInclude<ExtArgs> | null;
    where: Prisma.TimetableEntryWhereUniqueInput;
};
export type TimetableEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimetableEntrySelect<ExtArgs> | null;
    omit?: Prisma.TimetableEntryOmit<ExtArgs> | null;
    include?: Prisma.TimetableEntryInclude<ExtArgs> | null;
    where: Prisma.TimetableEntryWhereUniqueInput;
};
export type TimetableEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TimetableEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TimetableEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TimetableEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimetableEntrySelect<ExtArgs> | null;
    omit?: Prisma.TimetableEntryOmit<ExtArgs> | null;
    include?: Prisma.TimetableEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TimetableEntryCreateInput, Prisma.TimetableEntryUncheckedCreateInput>;
};
export type TimetableEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TimetableEntryCreateManyInput | Prisma.TimetableEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TimetableEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimetableEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TimetableEntryOmit<ExtArgs> | null;
    data: Prisma.TimetableEntryCreateManyInput | Prisma.TimetableEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TimetableEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TimetableEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimetableEntrySelect<ExtArgs> | null;
    omit?: Prisma.TimetableEntryOmit<ExtArgs> | null;
    include?: Prisma.TimetableEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TimetableEntryUpdateInput, Prisma.TimetableEntryUncheckedUpdateInput>;
    where: Prisma.TimetableEntryWhereUniqueInput;
};
export type TimetableEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TimetableEntryUpdateManyMutationInput, Prisma.TimetableEntryUncheckedUpdateManyInput>;
    where?: Prisma.TimetableEntryWhereInput;
    limit?: number;
};
export type TimetableEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimetableEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TimetableEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TimetableEntryUpdateManyMutationInput, Prisma.TimetableEntryUncheckedUpdateManyInput>;
    where?: Prisma.TimetableEntryWhereInput;
    limit?: number;
    include?: Prisma.TimetableEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TimetableEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimetableEntrySelect<ExtArgs> | null;
    omit?: Prisma.TimetableEntryOmit<ExtArgs> | null;
    include?: Prisma.TimetableEntryInclude<ExtArgs> | null;
    where: Prisma.TimetableEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimetableEntryCreateInput, Prisma.TimetableEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TimetableEntryUpdateInput, Prisma.TimetableEntryUncheckedUpdateInput>;
};
export type TimetableEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimetableEntrySelect<ExtArgs> | null;
    omit?: Prisma.TimetableEntryOmit<ExtArgs> | null;
    include?: Prisma.TimetableEntryInclude<ExtArgs> | null;
    where: Prisma.TimetableEntryWhereUniqueInput;
};
export type TimetableEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimetableEntryWhereInput;
    limit?: number;
};
export type TimetableEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimetableEntrySelect<ExtArgs> | null;
    omit?: Prisma.TimetableEntryOmit<ExtArgs> | null;
    include?: Prisma.TimetableEntryInclude<ExtArgs> | null;
};
