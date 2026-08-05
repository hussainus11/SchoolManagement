import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SchoolEventModel = runtime.Types.Result.DefaultSelection<Prisma.$SchoolEventPayload>;
export type AggregateSchoolEvent = {
    _count: SchoolEventCountAggregateOutputType | null;
    _min: SchoolEventMinAggregateOutputType | null;
    _max: SchoolEventMaxAggregateOutputType | null;
};
export type SchoolEventMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    title: string | null;
    description: string | null;
    location: string | null;
    type: $Enums.EventType | null;
    startDate: Date | null;
    endDate: Date | null;
    isAllDay: boolean | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SchoolEventMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    title: string | null;
    description: string | null;
    location: string | null;
    type: $Enums.EventType | null;
    startDate: Date | null;
    endDate: Date | null;
    isAllDay: boolean | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SchoolEventCountAggregateOutputType = {
    id: number;
    schoolId: number;
    branchId: number;
    title: number;
    description: number;
    location: number;
    type: number;
    startDate: number;
    endDate: number;
    isAllDay: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SchoolEventMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    title?: true;
    description?: true;
    location?: true;
    type?: true;
    startDate?: true;
    endDate?: true;
    isAllDay?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SchoolEventMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    title?: true;
    description?: true;
    location?: true;
    type?: true;
    startDate?: true;
    endDate?: true;
    isAllDay?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SchoolEventCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    title?: true;
    description?: true;
    location?: true;
    type?: true;
    startDate?: true;
    endDate?: true;
    isAllDay?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SchoolEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolEventWhereInput;
    orderBy?: Prisma.SchoolEventOrderByWithRelationInput | Prisma.SchoolEventOrderByWithRelationInput[];
    cursor?: Prisma.SchoolEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SchoolEventCountAggregateInputType;
    _min?: SchoolEventMinAggregateInputType;
    _max?: SchoolEventMaxAggregateInputType;
};
export type GetSchoolEventAggregateType<T extends SchoolEventAggregateArgs> = {
    [P in keyof T & keyof AggregateSchoolEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchoolEvent[P]> : Prisma.GetScalarType<T[P], AggregateSchoolEvent[P]>;
};
export type SchoolEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolEventWhereInput;
    orderBy?: Prisma.SchoolEventOrderByWithAggregationInput | Prisma.SchoolEventOrderByWithAggregationInput[];
    by: Prisma.SchoolEventScalarFieldEnum[] | Prisma.SchoolEventScalarFieldEnum;
    having?: Prisma.SchoolEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SchoolEventCountAggregateInputType | true;
    _min?: SchoolEventMinAggregateInputType;
    _max?: SchoolEventMaxAggregateInputType;
};
export type SchoolEventGroupByOutputType = {
    id: string;
    schoolId: string;
    branchId: string | null;
    title: string;
    description: string | null;
    location: string | null;
    type: $Enums.EventType;
    startDate: Date;
    endDate: Date;
    isAllDay: boolean;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SchoolEventCountAggregateOutputType | null;
    _min: SchoolEventMinAggregateOutputType | null;
    _max: SchoolEventMaxAggregateOutputType | null;
};
export type GetSchoolEventGroupByPayload<T extends SchoolEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SchoolEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SchoolEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SchoolEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SchoolEventGroupByOutputType[P]>;
}>>;
export type SchoolEventWhereInput = {
    AND?: Prisma.SchoolEventWhereInput | Prisma.SchoolEventWhereInput[];
    OR?: Prisma.SchoolEventWhereInput[];
    NOT?: Prisma.SchoolEventWhereInput | Prisma.SchoolEventWhereInput[];
    id?: Prisma.StringFilter<"SchoolEvent"> | string;
    schoolId?: Prisma.StringFilter<"SchoolEvent"> | string;
    branchId?: Prisma.StringNullableFilter<"SchoolEvent"> | string | null;
    title?: Prisma.StringFilter<"SchoolEvent"> | string;
    description?: Prisma.StringNullableFilter<"SchoolEvent"> | string | null;
    location?: Prisma.StringNullableFilter<"SchoolEvent"> | string | null;
    type?: Prisma.EnumEventTypeFilter<"SchoolEvent"> | $Enums.EventType;
    startDate?: Prisma.DateTimeFilter<"SchoolEvent"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"SchoolEvent"> | Date | string;
    isAllDay?: Prisma.BoolFilter<"SchoolEvent"> | boolean;
    createdById?: Prisma.StringFilter<"SchoolEvent"> | string;
    createdAt?: Prisma.DateTimeFilter<"SchoolEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SchoolEvent"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchNullableScalarRelationFilter, Prisma.BranchWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type SchoolEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isAllDay?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    branch?: Prisma.BranchOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
};
export type SchoolEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SchoolEventWhereInput | Prisma.SchoolEventWhereInput[];
    OR?: Prisma.SchoolEventWhereInput[];
    NOT?: Prisma.SchoolEventWhereInput | Prisma.SchoolEventWhereInput[];
    schoolId?: Prisma.StringFilter<"SchoolEvent"> | string;
    branchId?: Prisma.StringNullableFilter<"SchoolEvent"> | string | null;
    title?: Prisma.StringFilter<"SchoolEvent"> | string;
    description?: Prisma.StringNullableFilter<"SchoolEvent"> | string | null;
    location?: Prisma.StringNullableFilter<"SchoolEvent"> | string | null;
    type?: Prisma.EnumEventTypeFilter<"SchoolEvent"> | $Enums.EventType;
    startDate?: Prisma.DateTimeFilter<"SchoolEvent"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"SchoolEvent"> | Date | string;
    isAllDay?: Prisma.BoolFilter<"SchoolEvent"> | boolean;
    createdById?: Prisma.StringFilter<"SchoolEvent"> | string;
    createdAt?: Prisma.DateTimeFilter<"SchoolEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SchoolEvent"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchNullableScalarRelationFilter, Prisma.BranchWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type SchoolEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isAllDay?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SchoolEventCountOrderByAggregateInput;
    _max?: Prisma.SchoolEventMaxOrderByAggregateInput;
    _min?: Prisma.SchoolEventMinOrderByAggregateInput;
};
export type SchoolEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.SchoolEventScalarWhereWithAggregatesInput | Prisma.SchoolEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.SchoolEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SchoolEventScalarWhereWithAggregatesInput | Prisma.SchoolEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SchoolEvent"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"SchoolEvent"> | string;
    branchId?: Prisma.StringNullableWithAggregatesFilter<"SchoolEvent"> | string | null;
    title?: Prisma.StringWithAggregatesFilter<"SchoolEvent"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"SchoolEvent"> | string | null;
    location?: Prisma.StringNullableWithAggregatesFilter<"SchoolEvent"> | string | null;
    type?: Prisma.EnumEventTypeWithAggregatesFilter<"SchoolEvent"> | $Enums.EventType;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"SchoolEvent"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"SchoolEvent"> | Date | string;
    isAllDay?: Prisma.BoolWithAggregatesFilter<"SchoolEvent"> | boolean;
    createdById?: Prisma.StringWithAggregatesFilter<"SchoolEvent"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SchoolEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SchoolEvent"> | Date | string;
};
export type SchoolEventCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    type: $Enums.EventType;
    startDate: Date | string;
    endDate: Date | string;
    isAllDay?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutEventsInput;
    branch?: Prisma.BranchCreateNestedOneWithoutEventsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedEventsInput;
};
export type SchoolEventUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    branchId?: string | null;
    title: string;
    description?: string | null;
    location?: string | null;
    type: $Enums.EventType;
    startDate: Date | string;
    endDate: Date | string;
    isAllDay?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutEventsNestedInput;
    branch?: Prisma.BranchUpdateOneWithoutEventsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedEventsNestedInput;
};
export type SchoolEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolEventCreateManyInput = {
    id?: string;
    schoolId: string;
    branchId?: string | null;
    title: string;
    description?: string | null;
    location?: string | null;
    type: $Enums.EventType;
    startDate: Date | string;
    endDate: Date | string;
    isAllDay?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolEventListRelationFilter = {
    every?: Prisma.SchoolEventWhereInput;
    some?: Prisma.SchoolEventWhereInput;
    none?: Prisma.SchoolEventWhereInput;
};
export type SchoolEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SchoolEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isAllDay?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SchoolEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isAllDay?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SchoolEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isAllDay?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SchoolEventCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.SchoolEventCreateWithoutSchoolInput, Prisma.SchoolEventUncheckedCreateWithoutSchoolInput> | Prisma.SchoolEventCreateWithoutSchoolInput[] | Prisma.SchoolEventUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SchoolEventCreateOrConnectWithoutSchoolInput | Prisma.SchoolEventCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.SchoolEventCreateManySchoolInputEnvelope;
    connect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
};
export type SchoolEventUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.SchoolEventCreateWithoutSchoolInput, Prisma.SchoolEventUncheckedCreateWithoutSchoolInput> | Prisma.SchoolEventCreateWithoutSchoolInput[] | Prisma.SchoolEventUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SchoolEventCreateOrConnectWithoutSchoolInput | Prisma.SchoolEventCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.SchoolEventCreateManySchoolInputEnvelope;
    connect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
};
export type SchoolEventUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolEventCreateWithoutSchoolInput, Prisma.SchoolEventUncheckedCreateWithoutSchoolInput> | Prisma.SchoolEventCreateWithoutSchoolInput[] | Prisma.SchoolEventUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SchoolEventCreateOrConnectWithoutSchoolInput | Prisma.SchoolEventCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.SchoolEventUpsertWithWhereUniqueWithoutSchoolInput | Prisma.SchoolEventUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.SchoolEventCreateManySchoolInputEnvelope;
    set?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    disconnect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    delete?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    connect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    update?: Prisma.SchoolEventUpdateWithWhereUniqueWithoutSchoolInput | Prisma.SchoolEventUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.SchoolEventUpdateManyWithWhereWithoutSchoolInput | Prisma.SchoolEventUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.SchoolEventScalarWhereInput | Prisma.SchoolEventScalarWhereInput[];
};
export type SchoolEventUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolEventCreateWithoutSchoolInput, Prisma.SchoolEventUncheckedCreateWithoutSchoolInput> | Prisma.SchoolEventCreateWithoutSchoolInput[] | Prisma.SchoolEventUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SchoolEventCreateOrConnectWithoutSchoolInput | Prisma.SchoolEventCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.SchoolEventUpsertWithWhereUniqueWithoutSchoolInput | Prisma.SchoolEventUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.SchoolEventCreateManySchoolInputEnvelope;
    set?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    disconnect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    delete?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    connect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    update?: Prisma.SchoolEventUpdateWithWhereUniqueWithoutSchoolInput | Prisma.SchoolEventUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.SchoolEventUpdateManyWithWhereWithoutSchoolInput | Prisma.SchoolEventUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.SchoolEventScalarWhereInput | Prisma.SchoolEventScalarWhereInput[];
};
export type SchoolEventCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.SchoolEventCreateWithoutBranchInput, Prisma.SchoolEventUncheckedCreateWithoutBranchInput> | Prisma.SchoolEventCreateWithoutBranchInput[] | Prisma.SchoolEventUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.SchoolEventCreateOrConnectWithoutBranchInput | Prisma.SchoolEventCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.SchoolEventCreateManyBranchInputEnvelope;
    connect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
};
export type SchoolEventUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.SchoolEventCreateWithoutBranchInput, Prisma.SchoolEventUncheckedCreateWithoutBranchInput> | Prisma.SchoolEventCreateWithoutBranchInput[] | Prisma.SchoolEventUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.SchoolEventCreateOrConnectWithoutBranchInput | Prisma.SchoolEventCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.SchoolEventCreateManyBranchInputEnvelope;
    connect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
};
export type SchoolEventUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolEventCreateWithoutBranchInput, Prisma.SchoolEventUncheckedCreateWithoutBranchInput> | Prisma.SchoolEventCreateWithoutBranchInput[] | Prisma.SchoolEventUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.SchoolEventCreateOrConnectWithoutBranchInput | Prisma.SchoolEventCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.SchoolEventUpsertWithWhereUniqueWithoutBranchInput | Prisma.SchoolEventUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.SchoolEventCreateManyBranchInputEnvelope;
    set?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    disconnect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    delete?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    connect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    update?: Prisma.SchoolEventUpdateWithWhereUniqueWithoutBranchInput | Prisma.SchoolEventUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.SchoolEventUpdateManyWithWhereWithoutBranchInput | Prisma.SchoolEventUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.SchoolEventScalarWhereInput | Prisma.SchoolEventScalarWhereInput[];
};
export type SchoolEventUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolEventCreateWithoutBranchInput, Prisma.SchoolEventUncheckedCreateWithoutBranchInput> | Prisma.SchoolEventCreateWithoutBranchInput[] | Prisma.SchoolEventUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.SchoolEventCreateOrConnectWithoutBranchInput | Prisma.SchoolEventCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.SchoolEventUpsertWithWhereUniqueWithoutBranchInput | Prisma.SchoolEventUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.SchoolEventCreateManyBranchInputEnvelope;
    set?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    disconnect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    delete?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    connect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    update?: Prisma.SchoolEventUpdateWithWhereUniqueWithoutBranchInput | Prisma.SchoolEventUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.SchoolEventUpdateManyWithWhereWithoutBranchInput | Prisma.SchoolEventUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.SchoolEventScalarWhereInput | Prisma.SchoolEventScalarWhereInput[];
};
export type SchoolEventCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.SchoolEventCreateWithoutCreatedByInput, Prisma.SchoolEventUncheckedCreateWithoutCreatedByInput> | Prisma.SchoolEventCreateWithoutCreatedByInput[] | Prisma.SchoolEventUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.SchoolEventCreateOrConnectWithoutCreatedByInput | Prisma.SchoolEventCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.SchoolEventCreateManyCreatedByInputEnvelope;
    connect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
};
export type SchoolEventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.SchoolEventCreateWithoutCreatedByInput, Prisma.SchoolEventUncheckedCreateWithoutCreatedByInput> | Prisma.SchoolEventCreateWithoutCreatedByInput[] | Prisma.SchoolEventUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.SchoolEventCreateOrConnectWithoutCreatedByInput | Prisma.SchoolEventCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.SchoolEventCreateManyCreatedByInputEnvelope;
    connect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
};
export type SchoolEventUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolEventCreateWithoutCreatedByInput, Prisma.SchoolEventUncheckedCreateWithoutCreatedByInput> | Prisma.SchoolEventCreateWithoutCreatedByInput[] | Prisma.SchoolEventUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.SchoolEventCreateOrConnectWithoutCreatedByInput | Prisma.SchoolEventCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.SchoolEventUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.SchoolEventUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.SchoolEventCreateManyCreatedByInputEnvelope;
    set?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    disconnect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    delete?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    connect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    update?: Prisma.SchoolEventUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.SchoolEventUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.SchoolEventUpdateManyWithWhereWithoutCreatedByInput | Prisma.SchoolEventUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.SchoolEventScalarWhereInput | Prisma.SchoolEventScalarWhereInput[];
};
export type SchoolEventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolEventCreateWithoutCreatedByInput, Prisma.SchoolEventUncheckedCreateWithoutCreatedByInput> | Prisma.SchoolEventCreateWithoutCreatedByInput[] | Prisma.SchoolEventUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.SchoolEventCreateOrConnectWithoutCreatedByInput | Prisma.SchoolEventCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.SchoolEventUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.SchoolEventUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.SchoolEventCreateManyCreatedByInputEnvelope;
    set?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    disconnect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    delete?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    connect?: Prisma.SchoolEventWhereUniqueInput | Prisma.SchoolEventWhereUniqueInput[];
    update?: Prisma.SchoolEventUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.SchoolEventUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.SchoolEventUpdateManyWithWhereWithoutCreatedByInput | Prisma.SchoolEventUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.SchoolEventScalarWhereInput | Prisma.SchoolEventScalarWhereInput[];
};
export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType;
};
export type SchoolEventCreateWithoutSchoolInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    type: $Enums.EventType;
    startDate: Date | string;
    endDate: Date | string;
    isAllDay?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch?: Prisma.BranchCreateNestedOneWithoutEventsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedEventsInput;
};
export type SchoolEventUncheckedCreateWithoutSchoolInput = {
    id?: string;
    branchId?: string | null;
    title: string;
    description?: string | null;
    location?: string | null;
    type: $Enums.EventType;
    startDate: Date | string;
    endDate: Date | string;
    isAllDay?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolEventCreateOrConnectWithoutSchoolInput = {
    where: Prisma.SchoolEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolEventCreateWithoutSchoolInput, Prisma.SchoolEventUncheckedCreateWithoutSchoolInput>;
};
export type SchoolEventCreateManySchoolInputEnvelope = {
    data: Prisma.SchoolEventCreateManySchoolInput | Prisma.SchoolEventCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type SchoolEventUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.SchoolEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.SchoolEventUpdateWithoutSchoolInput, Prisma.SchoolEventUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.SchoolEventCreateWithoutSchoolInput, Prisma.SchoolEventUncheckedCreateWithoutSchoolInput>;
};
export type SchoolEventUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.SchoolEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.SchoolEventUpdateWithoutSchoolInput, Prisma.SchoolEventUncheckedUpdateWithoutSchoolInput>;
};
export type SchoolEventUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.SchoolEventScalarWhereInput;
    data: Prisma.XOR<Prisma.SchoolEventUpdateManyMutationInput, Prisma.SchoolEventUncheckedUpdateManyWithoutSchoolInput>;
};
export type SchoolEventScalarWhereInput = {
    AND?: Prisma.SchoolEventScalarWhereInput | Prisma.SchoolEventScalarWhereInput[];
    OR?: Prisma.SchoolEventScalarWhereInput[];
    NOT?: Prisma.SchoolEventScalarWhereInput | Prisma.SchoolEventScalarWhereInput[];
    id?: Prisma.StringFilter<"SchoolEvent"> | string;
    schoolId?: Prisma.StringFilter<"SchoolEvent"> | string;
    branchId?: Prisma.StringNullableFilter<"SchoolEvent"> | string | null;
    title?: Prisma.StringFilter<"SchoolEvent"> | string;
    description?: Prisma.StringNullableFilter<"SchoolEvent"> | string | null;
    location?: Prisma.StringNullableFilter<"SchoolEvent"> | string | null;
    type?: Prisma.EnumEventTypeFilter<"SchoolEvent"> | $Enums.EventType;
    startDate?: Prisma.DateTimeFilter<"SchoolEvent"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"SchoolEvent"> | Date | string;
    isAllDay?: Prisma.BoolFilter<"SchoolEvent"> | boolean;
    createdById?: Prisma.StringFilter<"SchoolEvent"> | string;
    createdAt?: Prisma.DateTimeFilter<"SchoolEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SchoolEvent"> | Date | string;
};
export type SchoolEventCreateWithoutBranchInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    type: $Enums.EventType;
    startDate: Date | string;
    endDate: Date | string;
    isAllDay?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutEventsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedEventsInput;
};
export type SchoolEventUncheckedCreateWithoutBranchInput = {
    id?: string;
    schoolId: string;
    title: string;
    description?: string | null;
    location?: string | null;
    type: $Enums.EventType;
    startDate: Date | string;
    endDate: Date | string;
    isAllDay?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolEventCreateOrConnectWithoutBranchInput = {
    where: Prisma.SchoolEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolEventCreateWithoutBranchInput, Prisma.SchoolEventUncheckedCreateWithoutBranchInput>;
};
export type SchoolEventCreateManyBranchInputEnvelope = {
    data: Prisma.SchoolEventCreateManyBranchInput | Prisma.SchoolEventCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type SchoolEventUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.SchoolEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.SchoolEventUpdateWithoutBranchInput, Prisma.SchoolEventUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.SchoolEventCreateWithoutBranchInput, Prisma.SchoolEventUncheckedCreateWithoutBranchInput>;
};
export type SchoolEventUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.SchoolEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.SchoolEventUpdateWithoutBranchInput, Prisma.SchoolEventUncheckedUpdateWithoutBranchInput>;
};
export type SchoolEventUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.SchoolEventScalarWhereInput;
    data: Prisma.XOR<Prisma.SchoolEventUpdateManyMutationInput, Prisma.SchoolEventUncheckedUpdateManyWithoutBranchInput>;
};
export type SchoolEventCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    type: $Enums.EventType;
    startDate: Date | string;
    endDate: Date | string;
    isAllDay?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutEventsInput;
    branch?: Prisma.BranchCreateNestedOneWithoutEventsInput;
};
export type SchoolEventUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    schoolId: string;
    branchId?: string | null;
    title: string;
    description?: string | null;
    location?: string | null;
    type: $Enums.EventType;
    startDate: Date | string;
    endDate: Date | string;
    isAllDay?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolEventCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.SchoolEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolEventCreateWithoutCreatedByInput, Prisma.SchoolEventUncheckedCreateWithoutCreatedByInput>;
};
export type SchoolEventCreateManyCreatedByInputEnvelope = {
    data: Prisma.SchoolEventCreateManyCreatedByInput | Prisma.SchoolEventCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type SchoolEventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.SchoolEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.SchoolEventUpdateWithoutCreatedByInput, Prisma.SchoolEventUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.SchoolEventCreateWithoutCreatedByInput, Prisma.SchoolEventUncheckedCreateWithoutCreatedByInput>;
};
export type SchoolEventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.SchoolEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.SchoolEventUpdateWithoutCreatedByInput, Prisma.SchoolEventUncheckedUpdateWithoutCreatedByInput>;
};
export type SchoolEventUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.SchoolEventScalarWhereInput;
    data: Prisma.XOR<Prisma.SchoolEventUpdateManyMutationInput, Prisma.SchoolEventUncheckedUpdateManyWithoutCreatedByInput>;
};
export type SchoolEventCreateManySchoolInput = {
    id?: string;
    branchId?: string | null;
    title: string;
    description?: string | null;
    location?: string | null;
    type: $Enums.EventType;
    startDate: Date | string;
    endDate: Date | string;
    isAllDay?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolEventUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneWithoutEventsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedEventsNestedInput;
};
export type SchoolEventUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolEventUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolEventCreateManyBranchInput = {
    id?: string;
    schoolId: string;
    title: string;
    description?: string | null;
    location?: string | null;
    type: $Enums.EventType;
    startDate: Date | string;
    endDate: Date | string;
    isAllDay?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolEventUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutEventsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedEventsNestedInput;
};
export type SchoolEventUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolEventUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolEventCreateManyCreatedByInput = {
    id?: string;
    schoolId: string;
    branchId?: string | null;
    title: string;
    description?: string | null;
    location?: string | null;
    type: $Enums.EventType;
    startDate: Date | string;
    endDate: Date | string;
    isAllDay?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolEventUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutEventsNestedInput;
    branch?: Prisma.BranchUpdateOneWithoutEventsNestedInput;
};
export type SchoolEventUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolEventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isAllDay?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    title?: boolean;
    description?: boolean;
    location?: boolean;
    type?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isAllDay?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.SchoolEvent$branchArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schoolEvent"]>;
export type SchoolEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    title?: boolean;
    description?: boolean;
    location?: boolean;
    type?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isAllDay?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.SchoolEvent$branchArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schoolEvent"]>;
export type SchoolEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    title?: boolean;
    description?: boolean;
    location?: boolean;
    type?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isAllDay?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.SchoolEvent$branchArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schoolEvent"]>;
export type SchoolEventSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    title?: boolean;
    description?: boolean;
    location?: boolean;
    type?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isAllDay?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SchoolEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "branchId" | "title" | "description" | "location" | "type" | "startDate" | "endDate" | "isAllDay" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["schoolEvent"]>;
export type SchoolEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.SchoolEvent$branchArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SchoolEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.SchoolEvent$branchArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SchoolEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.SchoolEvent$branchArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SchoolEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SchoolEvent";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        branch: Prisma.$BranchPayload<ExtArgs> | null;
        createdBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        branchId: string | null;
        title: string;
        description: string | null;
        location: string | null;
        type: $Enums.EventType;
        startDate: Date;
        endDate: Date;
        isAllDay: boolean;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["schoolEvent"]>;
    composites: {};
};
export type SchoolEventGetPayload<S extends boolean | null | undefined | SchoolEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SchoolEventPayload, S>;
export type SchoolEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SchoolEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SchoolEventCountAggregateInputType | true;
};
export interface SchoolEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SchoolEvent'];
        meta: {
            name: 'SchoolEvent';
        };
    };
    findUnique<T extends SchoolEventFindUniqueArgs>(args: Prisma.SelectSubset<T, SchoolEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SchoolEventClient<runtime.Types.Result.GetResult<Prisma.$SchoolEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SchoolEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SchoolEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchoolEventClient<runtime.Types.Result.GetResult<Prisma.$SchoolEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SchoolEventFindFirstArgs>(args?: Prisma.SelectSubset<T, SchoolEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__SchoolEventClient<runtime.Types.Result.GetResult<Prisma.$SchoolEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SchoolEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SchoolEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchoolEventClient<runtime.Types.Result.GetResult<Prisma.$SchoolEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SchoolEventFindManyArgs>(args?: Prisma.SelectSubset<T, SchoolEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SchoolEventCreateArgs>(args: Prisma.SelectSubset<T, SchoolEventCreateArgs<ExtArgs>>): Prisma.Prisma__SchoolEventClient<runtime.Types.Result.GetResult<Prisma.$SchoolEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SchoolEventCreateManyArgs>(args?: Prisma.SelectSubset<T, SchoolEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SchoolEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SchoolEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SchoolEventDeleteArgs>(args: Prisma.SelectSubset<T, SchoolEventDeleteArgs<ExtArgs>>): Prisma.Prisma__SchoolEventClient<runtime.Types.Result.GetResult<Prisma.$SchoolEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SchoolEventUpdateArgs>(args: Prisma.SelectSubset<T, SchoolEventUpdateArgs<ExtArgs>>): Prisma.Prisma__SchoolEventClient<runtime.Types.Result.GetResult<Prisma.$SchoolEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SchoolEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, SchoolEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SchoolEventUpdateManyArgs>(args: Prisma.SelectSubset<T, SchoolEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SchoolEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SchoolEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SchoolEventUpsertArgs>(args: Prisma.SelectSubset<T, SchoolEventUpsertArgs<ExtArgs>>): Prisma.Prisma__SchoolEventClient<runtime.Types.Result.GetResult<Prisma.$SchoolEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SchoolEventCountArgs>(args?: Prisma.Subset<T, SchoolEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SchoolEventCountAggregateOutputType> : number>;
    aggregate<T extends SchoolEventAggregateArgs>(args: Prisma.Subset<T, SchoolEventAggregateArgs>): Prisma.PrismaPromise<GetSchoolEventAggregateType<T>>;
    groupBy<T extends SchoolEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SchoolEventGroupByArgs['orderBy'];
    } : {
        orderBy?: SchoolEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SchoolEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SchoolEventFieldRefs;
}
export interface Prisma__SchoolEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    branch<T extends Prisma.SchoolEvent$branchArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolEvent$branchArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SchoolEventFieldRefs {
    readonly id: Prisma.FieldRef<"SchoolEvent", 'String'>;
    readonly schoolId: Prisma.FieldRef<"SchoolEvent", 'String'>;
    readonly branchId: Prisma.FieldRef<"SchoolEvent", 'String'>;
    readonly title: Prisma.FieldRef<"SchoolEvent", 'String'>;
    readonly description: Prisma.FieldRef<"SchoolEvent", 'String'>;
    readonly location: Prisma.FieldRef<"SchoolEvent", 'String'>;
    readonly type: Prisma.FieldRef<"SchoolEvent", 'EventType'>;
    readonly startDate: Prisma.FieldRef<"SchoolEvent", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"SchoolEvent", 'DateTime'>;
    readonly isAllDay: Prisma.FieldRef<"SchoolEvent", 'Boolean'>;
    readonly createdById: Prisma.FieldRef<"SchoolEvent", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SchoolEvent", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SchoolEvent", 'DateTime'>;
}
export type SchoolEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolEventSelect<ExtArgs> | null;
    omit?: Prisma.SchoolEventOmit<ExtArgs> | null;
    include?: Prisma.SchoolEventInclude<ExtArgs> | null;
    where: Prisma.SchoolEventWhereUniqueInput;
};
export type SchoolEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolEventSelect<ExtArgs> | null;
    omit?: Prisma.SchoolEventOmit<ExtArgs> | null;
    include?: Prisma.SchoolEventInclude<ExtArgs> | null;
    where: Prisma.SchoolEventWhereUniqueInput;
};
export type SchoolEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolEventSelect<ExtArgs> | null;
    omit?: Prisma.SchoolEventOmit<ExtArgs> | null;
    include?: Prisma.SchoolEventInclude<ExtArgs> | null;
    where?: Prisma.SchoolEventWhereInput;
    orderBy?: Prisma.SchoolEventOrderByWithRelationInput | Prisma.SchoolEventOrderByWithRelationInput[];
    cursor?: Prisma.SchoolEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolEventScalarFieldEnum | Prisma.SchoolEventScalarFieldEnum[];
};
export type SchoolEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolEventSelect<ExtArgs> | null;
    omit?: Prisma.SchoolEventOmit<ExtArgs> | null;
    include?: Prisma.SchoolEventInclude<ExtArgs> | null;
    where?: Prisma.SchoolEventWhereInput;
    orderBy?: Prisma.SchoolEventOrderByWithRelationInput | Prisma.SchoolEventOrderByWithRelationInput[];
    cursor?: Prisma.SchoolEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolEventScalarFieldEnum | Prisma.SchoolEventScalarFieldEnum[];
};
export type SchoolEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolEventSelect<ExtArgs> | null;
    omit?: Prisma.SchoolEventOmit<ExtArgs> | null;
    include?: Prisma.SchoolEventInclude<ExtArgs> | null;
    where?: Prisma.SchoolEventWhereInput;
    orderBy?: Prisma.SchoolEventOrderByWithRelationInput | Prisma.SchoolEventOrderByWithRelationInput[];
    cursor?: Prisma.SchoolEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolEventScalarFieldEnum | Prisma.SchoolEventScalarFieldEnum[];
};
export type SchoolEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolEventSelect<ExtArgs> | null;
    omit?: Prisma.SchoolEventOmit<ExtArgs> | null;
    include?: Prisma.SchoolEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SchoolEventCreateInput, Prisma.SchoolEventUncheckedCreateInput>;
};
export type SchoolEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SchoolEventCreateManyInput | Prisma.SchoolEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SchoolEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SchoolEventOmit<ExtArgs> | null;
    data: Prisma.SchoolEventCreateManyInput | Prisma.SchoolEventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SchoolEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SchoolEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolEventSelect<ExtArgs> | null;
    omit?: Prisma.SchoolEventOmit<ExtArgs> | null;
    include?: Prisma.SchoolEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SchoolEventUpdateInput, Prisma.SchoolEventUncheckedUpdateInput>;
    where: Prisma.SchoolEventWhereUniqueInput;
};
export type SchoolEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SchoolEventUpdateManyMutationInput, Prisma.SchoolEventUncheckedUpdateManyInput>;
    where?: Prisma.SchoolEventWhereInput;
    limit?: number;
};
export type SchoolEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SchoolEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SchoolEventUpdateManyMutationInput, Prisma.SchoolEventUncheckedUpdateManyInput>;
    where?: Prisma.SchoolEventWhereInput;
    limit?: number;
    include?: Prisma.SchoolEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SchoolEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolEventSelect<ExtArgs> | null;
    omit?: Prisma.SchoolEventOmit<ExtArgs> | null;
    include?: Prisma.SchoolEventInclude<ExtArgs> | null;
    where: Prisma.SchoolEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolEventCreateInput, Prisma.SchoolEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SchoolEventUpdateInput, Prisma.SchoolEventUncheckedUpdateInput>;
};
export type SchoolEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolEventSelect<ExtArgs> | null;
    omit?: Prisma.SchoolEventOmit<ExtArgs> | null;
    include?: Prisma.SchoolEventInclude<ExtArgs> | null;
    where: Prisma.SchoolEventWhereUniqueInput;
};
export type SchoolEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolEventWhereInput;
    limit?: number;
};
export type SchoolEvent$branchArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BranchSelect<ExtArgs> | null;
    omit?: Prisma.BranchOmit<ExtArgs> | null;
    include?: Prisma.BranchInclude<ExtArgs> | null;
    where?: Prisma.BranchWhereInput;
};
export type SchoolEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolEventSelect<ExtArgs> | null;
    omit?: Prisma.SchoolEventOmit<ExtArgs> | null;
    include?: Prisma.SchoolEventInclude<ExtArgs> | null;
};
