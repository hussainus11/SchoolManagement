import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PeriodModel = runtime.Types.Result.DefaultSelection<Prisma.$PeriodPayload>;
export type AggregatePeriod = {
    _count: PeriodCountAggregateOutputType | null;
    _avg: PeriodAvgAggregateOutputType | null;
    _sum: PeriodSumAggregateOutputType | null;
    _min: PeriodMinAggregateOutputType | null;
    _max: PeriodMaxAggregateOutputType | null;
};
export type PeriodAvgAggregateOutputType = {
    order: number | null;
};
export type PeriodSumAggregateOutputType = {
    order: number | null;
};
export type PeriodMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    name: string | null;
    startTime: string | null;
    endTime: string | null;
    order: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PeriodMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    name: string | null;
    startTime: string | null;
    endTime: string | null;
    order: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PeriodCountAggregateOutputType = {
    id: number;
    schoolId: number;
    branchId: number;
    name: number;
    startTime: number;
    endTime: number;
    order: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PeriodAvgAggregateInputType = {
    order?: true;
};
export type PeriodSumAggregateInputType = {
    order?: true;
};
export type PeriodMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    name?: true;
    startTime?: true;
    endTime?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PeriodMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    name?: true;
    startTime?: true;
    endTime?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PeriodCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    name?: true;
    startTime?: true;
    endTime?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PeriodAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PeriodWhereInput;
    orderBy?: Prisma.PeriodOrderByWithRelationInput | Prisma.PeriodOrderByWithRelationInput[];
    cursor?: Prisma.PeriodWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PeriodCountAggregateInputType;
    _avg?: PeriodAvgAggregateInputType;
    _sum?: PeriodSumAggregateInputType;
    _min?: PeriodMinAggregateInputType;
    _max?: PeriodMaxAggregateInputType;
};
export type GetPeriodAggregateType<T extends PeriodAggregateArgs> = {
    [P in keyof T & keyof AggregatePeriod]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePeriod[P]> : Prisma.GetScalarType<T[P], AggregatePeriod[P]>;
};
export type PeriodGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PeriodWhereInput;
    orderBy?: Prisma.PeriodOrderByWithAggregationInput | Prisma.PeriodOrderByWithAggregationInput[];
    by: Prisma.PeriodScalarFieldEnum[] | Prisma.PeriodScalarFieldEnum;
    having?: Prisma.PeriodScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PeriodCountAggregateInputType | true;
    _avg?: PeriodAvgAggregateInputType;
    _sum?: PeriodSumAggregateInputType;
    _min?: PeriodMinAggregateInputType;
    _max?: PeriodMaxAggregateInputType;
};
export type PeriodGroupByOutputType = {
    id: string;
    schoolId: string;
    branchId: string;
    name: string;
    startTime: string;
    endTime: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
    _count: PeriodCountAggregateOutputType | null;
    _avg: PeriodAvgAggregateOutputType | null;
    _sum: PeriodSumAggregateOutputType | null;
    _min: PeriodMinAggregateOutputType | null;
    _max: PeriodMaxAggregateOutputType | null;
};
export type GetPeriodGroupByPayload<T extends PeriodGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PeriodGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PeriodGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PeriodGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PeriodGroupByOutputType[P]>;
}>>;
export type PeriodWhereInput = {
    AND?: Prisma.PeriodWhereInput | Prisma.PeriodWhereInput[];
    OR?: Prisma.PeriodWhereInput[];
    NOT?: Prisma.PeriodWhereInput | Prisma.PeriodWhereInput[];
    id?: Prisma.StringFilter<"Period"> | string;
    schoolId?: Prisma.StringFilter<"Period"> | string;
    branchId?: Prisma.StringFilter<"Period"> | string;
    name?: Prisma.StringFilter<"Period"> | string;
    startTime?: Prisma.StringFilter<"Period"> | string;
    endTime?: Prisma.StringFilter<"Period"> | string;
    order?: Prisma.IntFilter<"Period"> | number;
    createdAt?: Prisma.DateTimeFilter<"Period"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Period"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    timetableEntries?: Prisma.TimetableEntryListRelationFilter;
};
export type PeriodOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    branch?: Prisma.BranchOrderByWithRelationInput;
    timetableEntries?: Prisma.TimetableEntryOrderByRelationAggregateInput;
};
export type PeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    branchId_name?: Prisma.PeriodBranchIdNameCompoundUniqueInput;
    AND?: Prisma.PeriodWhereInput | Prisma.PeriodWhereInput[];
    OR?: Prisma.PeriodWhereInput[];
    NOT?: Prisma.PeriodWhereInput | Prisma.PeriodWhereInput[];
    schoolId?: Prisma.StringFilter<"Period"> | string;
    branchId?: Prisma.StringFilter<"Period"> | string;
    name?: Prisma.StringFilter<"Period"> | string;
    startTime?: Prisma.StringFilter<"Period"> | string;
    endTime?: Prisma.StringFilter<"Period"> | string;
    order?: Prisma.IntFilter<"Period"> | number;
    createdAt?: Prisma.DateTimeFilter<"Period"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Period"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    timetableEntries?: Prisma.TimetableEntryListRelationFilter;
}, "id" | "branchId_name">;
export type PeriodOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PeriodCountOrderByAggregateInput;
    _avg?: Prisma.PeriodAvgOrderByAggregateInput;
    _max?: Prisma.PeriodMaxOrderByAggregateInput;
    _min?: Prisma.PeriodMinOrderByAggregateInput;
    _sum?: Prisma.PeriodSumOrderByAggregateInput;
};
export type PeriodScalarWhereWithAggregatesInput = {
    AND?: Prisma.PeriodScalarWhereWithAggregatesInput | Prisma.PeriodScalarWhereWithAggregatesInput[];
    OR?: Prisma.PeriodScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PeriodScalarWhereWithAggregatesInput | Prisma.PeriodScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Period"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Period"> | string;
    branchId?: Prisma.StringWithAggregatesFilter<"Period"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Period"> | string;
    startTime?: Prisma.StringWithAggregatesFilter<"Period"> | string;
    endTime?: Prisma.StringWithAggregatesFilter<"Period"> | string;
    order?: Prisma.IntWithAggregatesFilter<"Period"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Period"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Period"> | Date | string;
};
export type PeriodCreateInput = {
    id?: string;
    name: string;
    startTime: string;
    endTime: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutPeriodsInput;
    branch: Prisma.BranchCreateNestedOneWithoutPeriodsInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutPeriodInput;
};
export type PeriodUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    startTime: string;
    endTime: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutPeriodInput;
};
export type PeriodUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutPeriodsNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutPeriodsNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutPeriodNestedInput;
};
export type PeriodUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutPeriodNestedInput;
};
export type PeriodCreateManyInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    startTime: string;
    endTime: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PeriodUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeriodUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeriodListRelationFilter = {
    every?: Prisma.PeriodWhereInput;
    some?: Prisma.PeriodWhereInput;
    none?: Prisma.PeriodWhereInput;
};
export type PeriodOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PeriodBranchIdNameCompoundUniqueInput = {
    branchId: string;
    name: string;
};
export type PeriodCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PeriodAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type PeriodMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PeriodMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PeriodSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type PeriodScalarRelationFilter = {
    is?: Prisma.PeriodWhereInput;
    isNot?: Prisma.PeriodWhereInput;
};
export type PeriodCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.PeriodCreateWithoutSchoolInput, Prisma.PeriodUncheckedCreateWithoutSchoolInput> | Prisma.PeriodCreateWithoutSchoolInput[] | Prisma.PeriodUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.PeriodCreateOrConnectWithoutSchoolInput | Prisma.PeriodCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.PeriodCreateManySchoolInputEnvelope;
    connect?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
};
export type PeriodUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.PeriodCreateWithoutSchoolInput, Prisma.PeriodUncheckedCreateWithoutSchoolInput> | Prisma.PeriodCreateWithoutSchoolInput[] | Prisma.PeriodUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.PeriodCreateOrConnectWithoutSchoolInput | Prisma.PeriodCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.PeriodCreateManySchoolInputEnvelope;
    connect?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
};
export type PeriodUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.PeriodCreateWithoutSchoolInput, Prisma.PeriodUncheckedCreateWithoutSchoolInput> | Prisma.PeriodCreateWithoutSchoolInput[] | Prisma.PeriodUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.PeriodCreateOrConnectWithoutSchoolInput | Prisma.PeriodCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.PeriodUpsertWithWhereUniqueWithoutSchoolInput | Prisma.PeriodUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.PeriodCreateManySchoolInputEnvelope;
    set?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    disconnect?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    delete?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    connect?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    update?: Prisma.PeriodUpdateWithWhereUniqueWithoutSchoolInput | Prisma.PeriodUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.PeriodUpdateManyWithWhereWithoutSchoolInput | Prisma.PeriodUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.PeriodScalarWhereInput | Prisma.PeriodScalarWhereInput[];
};
export type PeriodUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.PeriodCreateWithoutSchoolInput, Prisma.PeriodUncheckedCreateWithoutSchoolInput> | Prisma.PeriodCreateWithoutSchoolInput[] | Prisma.PeriodUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.PeriodCreateOrConnectWithoutSchoolInput | Prisma.PeriodCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.PeriodUpsertWithWhereUniqueWithoutSchoolInput | Prisma.PeriodUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.PeriodCreateManySchoolInputEnvelope;
    set?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    disconnect?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    delete?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    connect?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    update?: Prisma.PeriodUpdateWithWhereUniqueWithoutSchoolInput | Prisma.PeriodUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.PeriodUpdateManyWithWhereWithoutSchoolInput | Prisma.PeriodUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.PeriodScalarWhereInput | Prisma.PeriodScalarWhereInput[];
};
export type PeriodCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.PeriodCreateWithoutBranchInput, Prisma.PeriodUncheckedCreateWithoutBranchInput> | Prisma.PeriodCreateWithoutBranchInput[] | Prisma.PeriodUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.PeriodCreateOrConnectWithoutBranchInput | Prisma.PeriodCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.PeriodCreateManyBranchInputEnvelope;
    connect?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
};
export type PeriodUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.PeriodCreateWithoutBranchInput, Prisma.PeriodUncheckedCreateWithoutBranchInput> | Prisma.PeriodCreateWithoutBranchInput[] | Prisma.PeriodUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.PeriodCreateOrConnectWithoutBranchInput | Prisma.PeriodCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.PeriodCreateManyBranchInputEnvelope;
    connect?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
};
export type PeriodUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.PeriodCreateWithoutBranchInput, Prisma.PeriodUncheckedCreateWithoutBranchInput> | Prisma.PeriodCreateWithoutBranchInput[] | Prisma.PeriodUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.PeriodCreateOrConnectWithoutBranchInput | Prisma.PeriodCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.PeriodUpsertWithWhereUniqueWithoutBranchInput | Prisma.PeriodUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.PeriodCreateManyBranchInputEnvelope;
    set?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    disconnect?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    delete?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    connect?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    update?: Prisma.PeriodUpdateWithWhereUniqueWithoutBranchInput | Prisma.PeriodUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.PeriodUpdateManyWithWhereWithoutBranchInput | Prisma.PeriodUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.PeriodScalarWhereInput | Prisma.PeriodScalarWhereInput[];
};
export type PeriodUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.PeriodCreateWithoutBranchInput, Prisma.PeriodUncheckedCreateWithoutBranchInput> | Prisma.PeriodCreateWithoutBranchInput[] | Prisma.PeriodUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.PeriodCreateOrConnectWithoutBranchInput | Prisma.PeriodCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.PeriodUpsertWithWhereUniqueWithoutBranchInput | Prisma.PeriodUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.PeriodCreateManyBranchInputEnvelope;
    set?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    disconnect?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    delete?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    connect?: Prisma.PeriodWhereUniqueInput | Prisma.PeriodWhereUniqueInput[];
    update?: Prisma.PeriodUpdateWithWhereUniqueWithoutBranchInput | Prisma.PeriodUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.PeriodUpdateManyWithWhereWithoutBranchInput | Prisma.PeriodUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.PeriodScalarWhereInput | Prisma.PeriodScalarWhereInput[];
};
export type PeriodCreateNestedOneWithoutTimetableEntriesInput = {
    create?: Prisma.XOR<Prisma.PeriodCreateWithoutTimetableEntriesInput, Prisma.PeriodUncheckedCreateWithoutTimetableEntriesInput>;
    connectOrCreate?: Prisma.PeriodCreateOrConnectWithoutTimetableEntriesInput;
    connect?: Prisma.PeriodWhereUniqueInput;
};
export type PeriodUpdateOneRequiredWithoutTimetableEntriesNestedInput = {
    create?: Prisma.XOR<Prisma.PeriodCreateWithoutTimetableEntriesInput, Prisma.PeriodUncheckedCreateWithoutTimetableEntriesInput>;
    connectOrCreate?: Prisma.PeriodCreateOrConnectWithoutTimetableEntriesInput;
    upsert?: Prisma.PeriodUpsertWithoutTimetableEntriesInput;
    connect?: Prisma.PeriodWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PeriodUpdateToOneWithWhereWithoutTimetableEntriesInput, Prisma.PeriodUpdateWithoutTimetableEntriesInput>, Prisma.PeriodUncheckedUpdateWithoutTimetableEntriesInput>;
};
export type PeriodCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    startTime: string;
    endTime: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch: Prisma.BranchCreateNestedOneWithoutPeriodsInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutPeriodInput;
};
export type PeriodUncheckedCreateWithoutSchoolInput = {
    id?: string;
    branchId: string;
    name: string;
    startTime: string;
    endTime: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutPeriodInput;
};
export type PeriodCreateOrConnectWithoutSchoolInput = {
    where: Prisma.PeriodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PeriodCreateWithoutSchoolInput, Prisma.PeriodUncheckedCreateWithoutSchoolInput>;
};
export type PeriodCreateManySchoolInputEnvelope = {
    data: Prisma.PeriodCreateManySchoolInput | Prisma.PeriodCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type PeriodUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.PeriodWhereUniqueInput;
    update: Prisma.XOR<Prisma.PeriodUpdateWithoutSchoolInput, Prisma.PeriodUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.PeriodCreateWithoutSchoolInput, Prisma.PeriodUncheckedCreateWithoutSchoolInput>;
};
export type PeriodUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.PeriodWhereUniqueInput;
    data: Prisma.XOR<Prisma.PeriodUpdateWithoutSchoolInput, Prisma.PeriodUncheckedUpdateWithoutSchoolInput>;
};
export type PeriodUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.PeriodScalarWhereInput;
    data: Prisma.XOR<Prisma.PeriodUpdateManyMutationInput, Prisma.PeriodUncheckedUpdateManyWithoutSchoolInput>;
};
export type PeriodScalarWhereInput = {
    AND?: Prisma.PeriodScalarWhereInput | Prisma.PeriodScalarWhereInput[];
    OR?: Prisma.PeriodScalarWhereInput[];
    NOT?: Prisma.PeriodScalarWhereInput | Prisma.PeriodScalarWhereInput[];
    id?: Prisma.StringFilter<"Period"> | string;
    schoolId?: Prisma.StringFilter<"Period"> | string;
    branchId?: Prisma.StringFilter<"Period"> | string;
    name?: Prisma.StringFilter<"Period"> | string;
    startTime?: Prisma.StringFilter<"Period"> | string;
    endTime?: Prisma.StringFilter<"Period"> | string;
    order?: Prisma.IntFilter<"Period"> | number;
    createdAt?: Prisma.DateTimeFilter<"Period"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Period"> | Date | string;
};
export type PeriodCreateWithoutBranchInput = {
    id?: string;
    name: string;
    startTime: string;
    endTime: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutPeriodsInput;
    timetableEntries?: Prisma.TimetableEntryCreateNestedManyWithoutPeriodInput;
};
export type PeriodUncheckedCreateWithoutBranchInput = {
    id?: string;
    schoolId: string;
    name: string;
    startTime: string;
    endTime: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    timetableEntries?: Prisma.TimetableEntryUncheckedCreateNestedManyWithoutPeriodInput;
};
export type PeriodCreateOrConnectWithoutBranchInput = {
    where: Prisma.PeriodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PeriodCreateWithoutBranchInput, Prisma.PeriodUncheckedCreateWithoutBranchInput>;
};
export type PeriodCreateManyBranchInputEnvelope = {
    data: Prisma.PeriodCreateManyBranchInput | Prisma.PeriodCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type PeriodUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.PeriodWhereUniqueInput;
    update: Prisma.XOR<Prisma.PeriodUpdateWithoutBranchInput, Prisma.PeriodUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.PeriodCreateWithoutBranchInput, Prisma.PeriodUncheckedCreateWithoutBranchInput>;
};
export type PeriodUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.PeriodWhereUniqueInput;
    data: Prisma.XOR<Prisma.PeriodUpdateWithoutBranchInput, Prisma.PeriodUncheckedUpdateWithoutBranchInput>;
};
export type PeriodUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.PeriodScalarWhereInput;
    data: Prisma.XOR<Prisma.PeriodUpdateManyMutationInput, Prisma.PeriodUncheckedUpdateManyWithoutBranchInput>;
};
export type PeriodCreateWithoutTimetableEntriesInput = {
    id?: string;
    name: string;
    startTime: string;
    endTime: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutPeriodsInput;
    branch: Prisma.BranchCreateNestedOneWithoutPeriodsInput;
};
export type PeriodUncheckedCreateWithoutTimetableEntriesInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    name: string;
    startTime: string;
    endTime: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PeriodCreateOrConnectWithoutTimetableEntriesInput = {
    where: Prisma.PeriodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PeriodCreateWithoutTimetableEntriesInput, Prisma.PeriodUncheckedCreateWithoutTimetableEntriesInput>;
};
export type PeriodUpsertWithoutTimetableEntriesInput = {
    update: Prisma.XOR<Prisma.PeriodUpdateWithoutTimetableEntriesInput, Prisma.PeriodUncheckedUpdateWithoutTimetableEntriesInput>;
    create: Prisma.XOR<Prisma.PeriodCreateWithoutTimetableEntriesInput, Prisma.PeriodUncheckedCreateWithoutTimetableEntriesInput>;
    where?: Prisma.PeriodWhereInput;
};
export type PeriodUpdateToOneWithWhereWithoutTimetableEntriesInput = {
    where?: Prisma.PeriodWhereInput;
    data: Prisma.XOR<Prisma.PeriodUpdateWithoutTimetableEntriesInput, Prisma.PeriodUncheckedUpdateWithoutTimetableEntriesInput>;
};
export type PeriodUpdateWithoutTimetableEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutPeriodsNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutPeriodsNestedInput;
};
export type PeriodUncheckedUpdateWithoutTimetableEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeriodCreateManySchoolInput = {
    id?: string;
    branchId: string;
    name: string;
    startTime: string;
    endTime: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PeriodUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneRequiredWithoutPeriodsNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutPeriodNestedInput;
};
export type PeriodUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutPeriodNestedInput;
};
export type PeriodUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeriodCreateManyBranchInput = {
    id?: string;
    schoolId: string;
    name: string;
    startTime: string;
    endTime: string;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PeriodUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutPeriodsNestedInput;
    timetableEntries?: Prisma.TimetableEntryUpdateManyWithoutPeriodNestedInput;
};
export type PeriodUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timetableEntries?: Prisma.TimetableEntryUncheckedUpdateManyWithoutPeriodNestedInput;
};
export type PeriodUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeriodCountOutputType = {
    timetableEntries: number;
};
export type PeriodCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    timetableEntries?: boolean | PeriodCountOutputTypeCountTimetableEntriesArgs;
};
export type PeriodCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodCountOutputTypeSelect<ExtArgs> | null;
};
export type PeriodCountOutputTypeCountTimetableEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimetableEntryWhereInput;
};
export type PeriodSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    timetableEntries?: boolean | Prisma.Period$timetableEntriesArgs<ExtArgs>;
    _count?: boolean | Prisma.PeriodCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["period"]>;
export type PeriodSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["period"]>;
export type PeriodSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["period"]>;
export type PeriodSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    name?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PeriodOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "branchId" | "name" | "startTime" | "endTime" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["period"]>;
export type PeriodInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    timetableEntries?: boolean | Prisma.Period$timetableEntriesArgs<ExtArgs>;
    _count?: boolean | Prisma.PeriodCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PeriodIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type PeriodIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type $PeriodPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Period";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        branch: Prisma.$BranchPayload<ExtArgs>;
        timetableEntries: Prisma.$TimetableEntryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        branchId: string;
        name: string;
        startTime: string;
        endTime: string;
        order: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["period"]>;
    composites: {};
};
export type PeriodGetPayload<S extends boolean | null | undefined | PeriodDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PeriodPayload, S>;
export type PeriodCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PeriodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PeriodCountAggregateInputType | true;
};
export interface PeriodDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Period'];
        meta: {
            name: 'Period';
        };
    };
    findUnique<T extends PeriodFindUniqueArgs>(args: Prisma.SelectSubset<T, PeriodFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PeriodClient<runtime.Types.Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PeriodFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PeriodClient<runtime.Types.Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PeriodFindFirstArgs>(args?: Prisma.SelectSubset<T, PeriodFindFirstArgs<ExtArgs>>): Prisma.Prisma__PeriodClient<runtime.Types.Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PeriodFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PeriodClient<runtime.Types.Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PeriodFindManyArgs>(args?: Prisma.SelectSubset<T, PeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PeriodCreateArgs>(args: Prisma.SelectSubset<T, PeriodCreateArgs<ExtArgs>>): Prisma.Prisma__PeriodClient<runtime.Types.Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PeriodCreateManyArgs>(args?: Prisma.SelectSubset<T, PeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PeriodCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PeriodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PeriodDeleteArgs>(args: Prisma.SelectSubset<T, PeriodDeleteArgs<ExtArgs>>): Prisma.Prisma__PeriodClient<runtime.Types.Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PeriodUpdateArgs>(args: Prisma.SelectSubset<T, PeriodUpdateArgs<ExtArgs>>): Prisma.Prisma__PeriodClient<runtime.Types.Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PeriodDeleteManyArgs>(args?: Prisma.SelectSubset<T, PeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PeriodUpdateManyArgs>(args: Prisma.SelectSubset<T, PeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PeriodUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PeriodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PeriodUpsertArgs>(args: Prisma.SelectSubset<T, PeriodUpsertArgs<ExtArgs>>): Prisma.Prisma__PeriodClient<runtime.Types.Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PeriodCountArgs>(args?: Prisma.Subset<T, PeriodCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PeriodCountAggregateOutputType> : number>;
    aggregate<T extends PeriodAggregateArgs>(args: Prisma.Subset<T, PeriodAggregateArgs>): Prisma.PrismaPromise<GetPeriodAggregateType<T>>;
    groupBy<T extends PeriodGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PeriodGroupByArgs['orderBy'];
    } : {
        orderBy?: PeriodGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PeriodFieldRefs;
}
export interface Prisma__PeriodClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    branch<T extends Prisma.BranchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BranchDefaultArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    timetableEntries<T extends Prisma.Period$timetableEntriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Period$timetableEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimetableEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PeriodFieldRefs {
    readonly id: Prisma.FieldRef<"Period", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Period", 'String'>;
    readonly branchId: Prisma.FieldRef<"Period", 'String'>;
    readonly name: Prisma.FieldRef<"Period", 'String'>;
    readonly startTime: Prisma.FieldRef<"Period", 'String'>;
    readonly endTime: Prisma.FieldRef<"Period", 'String'>;
    readonly order: Prisma.FieldRef<"Period", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Period", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Period", 'DateTime'>;
}
export type PeriodFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodSelect<ExtArgs> | null;
    omit?: Prisma.PeriodOmit<ExtArgs> | null;
    include?: Prisma.PeriodInclude<ExtArgs> | null;
    where: Prisma.PeriodWhereUniqueInput;
};
export type PeriodFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodSelect<ExtArgs> | null;
    omit?: Prisma.PeriodOmit<ExtArgs> | null;
    include?: Prisma.PeriodInclude<ExtArgs> | null;
    where: Prisma.PeriodWhereUniqueInput;
};
export type PeriodFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodSelect<ExtArgs> | null;
    omit?: Prisma.PeriodOmit<ExtArgs> | null;
    include?: Prisma.PeriodInclude<ExtArgs> | null;
    where?: Prisma.PeriodWhereInput;
    orderBy?: Prisma.PeriodOrderByWithRelationInput | Prisma.PeriodOrderByWithRelationInput[];
    cursor?: Prisma.PeriodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PeriodScalarFieldEnum | Prisma.PeriodScalarFieldEnum[];
};
export type PeriodFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodSelect<ExtArgs> | null;
    omit?: Prisma.PeriodOmit<ExtArgs> | null;
    include?: Prisma.PeriodInclude<ExtArgs> | null;
    where?: Prisma.PeriodWhereInput;
    orderBy?: Prisma.PeriodOrderByWithRelationInput | Prisma.PeriodOrderByWithRelationInput[];
    cursor?: Prisma.PeriodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PeriodScalarFieldEnum | Prisma.PeriodScalarFieldEnum[];
};
export type PeriodFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodSelect<ExtArgs> | null;
    omit?: Prisma.PeriodOmit<ExtArgs> | null;
    include?: Prisma.PeriodInclude<ExtArgs> | null;
    where?: Prisma.PeriodWhereInput;
    orderBy?: Prisma.PeriodOrderByWithRelationInput | Prisma.PeriodOrderByWithRelationInput[];
    cursor?: Prisma.PeriodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PeriodScalarFieldEnum | Prisma.PeriodScalarFieldEnum[];
};
export type PeriodCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodSelect<ExtArgs> | null;
    omit?: Prisma.PeriodOmit<ExtArgs> | null;
    include?: Prisma.PeriodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PeriodCreateInput, Prisma.PeriodUncheckedCreateInput>;
};
export type PeriodCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PeriodCreateManyInput | Prisma.PeriodCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PeriodCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PeriodOmit<ExtArgs> | null;
    data: Prisma.PeriodCreateManyInput | Prisma.PeriodCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PeriodIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PeriodUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodSelect<ExtArgs> | null;
    omit?: Prisma.PeriodOmit<ExtArgs> | null;
    include?: Prisma.PeriodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PeriodUpdateInput, Prisma.PeriodUncheckedUpdateInput>;
    where: Prisma.PeriodWhereUniqueInput;
};
export type PeriodUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PeriodUpdateManyMutationInput, Prisma.PeriodUncheckedUpdateManyInput>;
    where?: Prisma.PeriodWhereInput;
    limit?: number;
};
export type PeriodUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PeriodOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PeriodUpdateManyMutationInput, Prisma.PeriodUncheckedUpdateManyInput>;
    where?: Prisma.PeriodWhereInput;
    limit?: number;
    include?: Prisma.PeriodIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PeriodUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodSelect<ExtArgs> | null;
    omit?: Prisma.PeriodOmit<ExtArgs> | null;
    include?: Prisma.PeriodInclude<ExtArgs> | null;
    where: Prisma.PeriodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PeriodCreateInput, Prisma.PeriodUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PeriodUpdateInput, Prisma.PeriodUncheckedUpdateInput>;
};
export type PeriodDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodSelect<ExtArgs> | null;
    omit?: Prisma.PeriodOmit<ExtArgs> | null;
    include?: Prisma.PeriodInclude<ExtArgs> | null;
    where: Prisma.PeriodWhereUniqueInput;
};
export type PeriodDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PeriodWhereInput;
    limit?: number;
};
export type Period$timetableEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PeriodDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodSelect<ExtArgs> | null;
    omit?: Prisma.PeriodOmit<ExtArgs> | null;
    include?: Prisma.PeriodInclude<ExtArgs> | null;
};
