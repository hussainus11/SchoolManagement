import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnnouncementModel = runtime.Types.Result.DefaultSelection<Prisma.$AnnouncementPayload>;
export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null;
    _min: AnnouncementMinAggregateOutputType | null;
    _max: AnnouncementMaxAggregateOutputType | null;
};
export type AnnouncementMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    title: string | null;
    body: string | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AnnouncementMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    title: string | null;
    body: string | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AnnouncementCountAggregateOutputType = {
    id: number;
    schoolId: number;
    branchId: number;
    title: number;
    body: number;
    targetRoles: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AnnouncementMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    title?: true;
    body?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AnnouncementMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    title?: true;
    body?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AnnouncementCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    title?: true;
    body?: true;
    targetRoles?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AnnouncementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnnouncementWhereInput;
    orderBy?: Prisma.AnnouncementOrderByWithRelationInput | Prisma.AnnouncementOrderByWithRelationInput[];
    cursor?: Prisma.AnnouncementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnnouncementCountAggregateInputType;
    _min?: AnnouncementMinAggregateInputType;
    _max?: AnnouncementMaxAggregateInputType;
};
export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
    [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnnouncement[P]> : Prisma.GetScalarType<T[P], AggregateAnnouncement[P]>;
};
export type AnnouncementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnnouncementWhereInput;
    orderBy?: Prisma.AnnouncementOrderByWithAggregationInput | Prisma.AnnouncementOrderByWithAggregationInput[];
    by: Prisma.AnnouncementScalarFieldEnum[] | Prisma.AnnouncementScalarFieldEnum;
    having?: Prisma.AnnouncementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnnouncementCountAggregateInputType | true;
    _min?: AnnouncementMinAggregateInputType;
    _max?: AnnouncementMaxAggregateInputType;
};
export type AnnouncementGroupByOutputType = {
    id: string;
    schoolId: string;
    branchId: string | null;
    title: string;
    body: string;
    targetRoles: $Enums.Role[];
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: AnnouncementCountAggregateOutputType | null;
    _min: AnnouncementMinAggregateOutputType | null;
    _max: AnnouncementMaxAggregateOutputType | null;
};
export type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnnouncementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnnouncementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnnouncementGroupByOutputType[P]>;
}>>;
export type AnnouncementWhereInput = {
    AND?: Prisma.AnnouncementWhereInput | Prisma.AnnouncementWhereInput[];
    OR?: Prisma.AnnouncementWhereInput[];
    NOT?: Prisma.AnnouncementWhereInput | Prisma.AnnouncementWhereInput[];
    id?: Prisma.StringFilter<"Announcement"> | string;
    schoolId?: Prisma.StringFilter<"Announcement"> | string;
    branchId?: Prisma.StringNullableFilter<"Announcement"> | string | null;
    title?: Prisma.StringFilter<"Announcement"> | string;
    body?: Prisma.StringFilter<"Announcement"> | string;
    targetRoles?: Prisma.EnumRoleNullableListFilter<"Announcement">;
    createdById?: Prisma.StringFilter<"Announcement"> | string;
    createdAt?: Prisma.DateTimeFilter<"Announcement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Announcement"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchNullableScalarRelationFilter, Prisma.BranchWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    notifications?: Prisma.NotificationListRelationFilter;
};
export type AnnouncementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    targetRoles?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    branch?: Prisma.BranchOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
};
export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AnnouncementWhereInput | Prisma.AnnouncementWhereInput[];
    OR?: Prisma.AnnouncementWhereInput[];
    NOT?: Prisma.AnnouncementWhereInput | Prisma.AnnouncementWhereInput[];
    schoolId?: Prisma.StringFilter<"Announcement"> | string;
    branchId?: Prisma.StringNullableFilter<"Announcement"> | string | null;
    title?: Prisma.StringFilter<"Announcement"> | string;
    body?: Prisma.StringFilter<"Announcement"> | string;
    targetRoles?: Prisma.EnumRoleNullableListFilter<"Announcement">;
    createdById?: Prisma.StringFilter<"Announcement"> | string;
    createdAt?: Prisma.DateTimeFilter<"Announcement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Announcement"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchNullableScalarRelationFilter, Prisma.BranchWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    notifications?: Prisma.NotificationListRelationFilter;
}, "id">;
export type AnnouncementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    targetRoles?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AnnouncementCountOrderByAggregateInput;
    _max?: Prisma.AnnouncementMaxOrderByAggregateInput;
    _min?: Prisma.AnnouncementMinOrderByAggregateInput;
};
export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnnouncementScalarWhereWithAggregatesInput | Prisma.AnnouncementScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnnouncementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnnouncementScalarWhereWithAggregatesInput | Prisma.AnnouncementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Announcement"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Announcement"> | string;
    branchId?: Prisma.StringNullableWithAggregatesFilter<"Announcement"> | string | null;
    title?: Prisma.StringWithAggregatesFilter<"Announcement"> | string;
    body?: Prisma.StringWithAggregatesFilter<"Announcement"> | string;
    targetRoles?: Prisma.EnumRoleNullableListFilter<"Announcement">;
    createdById?: Prisma.StringWithAggregatesFilter<"Announcement"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Announcement"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Announcement"> | Date | string;
};
export type AnnouncementCreateInput = {
    id?: string;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAnnouncementsInput;
    branch?: Prisma.BranchCreateNestedOneWithoutAnnouncementsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedAnnouncementsInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAnnouncementInput;
};
export type AnnouncementUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    branchId?: string | null;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAnnouncementInput;
};
export type AnnouncementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAnnouncementsNestedInput;
    branch?: Prisma.BranchUpdateOneWithoutAnnouncementsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedAnnouncementsNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAnnouncementNestedInput;
};
export type AnnouncementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAnnouncementNestedInput;
};
export type AnnouncementCreateManyInput = {
    id?: string;
    schoolId: string;
    branchId?: string | null;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnnouncementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementListRelationFilter = {
    every?: Prisma.AnnouncementWhereInput;
    some?: Prisma.AnnouncementWhereInput;
    none?: Prisma.AnnouncementWhereInput;
};
export type AnnouncementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel> | null;
    has?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type AnnouncementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    targetRoles?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AnnouncementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AnnouncementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AnnouncementNullableScalarRelationFilter = {
    is?: Prisma.AnnouncementWhereInput | null;
    isNot?: Prisma.AnnouncementWhereInput | null;
};
export type AnnouncementCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutSchoolInput, Prisma.AnnouncementUncheckedCreateWithoutSchoolInput> | Prisma.AnnouncementCreateWithoutSchoolInput[] | Prisma.AnnouncementUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutSchoolInput | Prisma.AnnouncementCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.AnnouncementCreateManySchoolInputEnvelope;
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
};
export type AnnouncementUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutSchoolInput, Prisma.AnnouncementUncheckedCreateWithoutSchoolInput> | Prisma.AnnouncementCreateWithoutSchoolInput[] | Prisma.AnnouncementUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutSchoolInput | Prisma.AnnouncementCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.AnnouncementCreateManySchoolInputEnvelope;
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
};
export type AnnouncementUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutSchoolInput, Prisma.AnnouncementUncheckedCreateWithoutSchoolInput> | Prisma.AnnouncementCreateWithoutSchoolInput[] | Prisma.AnnouncementUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutSchoolInput | Prisma.AnnouncementCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.AnnouncementUpsertWithWhereUniqueWithoutSchoolInput | Prisma.AnnouncementUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.AnnouncementCreateManySchoolInputEnvelope;
    set?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    disconnect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    delete?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    update?: Prisma.AnnouncementUpdateWithWhereUniqueWithoutSchoolInput | Prisma.AnnouncementUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.AnnouncementUpdateManyWithWhereWithoutSchoolInput | Prisma.AnnouncementUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.AnnouncementScalarWhereInput | Prisma.AnnouncementScalarWhereInput[];
};
export type AnnouncementUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutSchoolInput, Prisma.AnnouncementUncheckedCreateWithoutSchoolInput> | Prisma.AnnouncementCreateWithoutSchoolInput[] | Prisma.AnnouncementUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutSchoolInput | Prisma.AnnouncementCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.AnnouncementUpsertWithWhereUniqueWithoutSchoolInput | Prisma.AnnouncementUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.AnnouncementCreateManySchoolInputEnvelope;
    set?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    disconnect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    delete?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    update?: Prisma.AnnouncementUpdateWithWhereUniqueWithoutSchoolInput | Prisma.AnnouncementUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.AnnouncementUpdateManyWithWhereWithoutSchoolInput | Prisma.AnnouncementUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.AnnouncementScalarWhereInput | Prisma.AnnouncementScalarWhereInput[];
};
export type AnnouncementCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutBranchInput, Prisma.AnnouncementUncheckedCreateWithoutBranchInput> | Prisma.AnnouncementCreateWithoutBranchInput[] | Prisma.AnnouncementUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutBranchInput | Prisma.AnnouncementCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.AnnouncementCreateManyBranchInputEnvelope;
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
};
export type AnnouncementUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutBranchInput, Prisma.AnnouncementUncheckedCreateWithoutBranchInput> | Prisma.AnnouncementCreateWithoutBranchInput[] | Prisma.AnnouncementUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutBranchInput | Prisma.AnnouncementCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.AnnouncementCreateManyBranchInputEnvelope;
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
};
export type AnnouncementUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutBranchInput, Prisma.AnnouncementUncheckedCreateWithoutBranchInput> | Prisma.AnnouncementCreateWithoutBranchInput[] | Prisma.AnnouncementUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutBranchInput | Prisma.AnnouncementCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.AnnouncementUpsertWithWhereUniqueWithoutBranchInput | Prisma.AnnouncementUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.AnnouncementCreateManyBranchInputEnvelope;
    set?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    disconnect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    delete?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    update?: Prisma.AnnouncementUpdateWithWhereUniqueWithoutBranchInput | Prisma.AnnouncementUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.AnnouncementUpdateManyWithWhereWithoutBranchInput | Prisma.AnnouncementUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.AnnouncementScalarWhereInput | Prisma.AnnouncementScalarWhereInput[];
};
export type AnnouncementUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutBranchInput, Prisma.AnnouncementUncheckedCreateWithoutBranchInput> | Prisma.AnnouncementCreateWithoutBranchInput[] | Prisma.AnnouncementUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutBranchInput | Prisma.AnnouncementCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.AnnouncementUpsertWithWhereUniqueWithoutBranchInput | Prisma.AnnouncementUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.AnnouncementCreateManyBranchInputEnvelope;
    set?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    disconnect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    delete?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    update?: Prisma.AnnouncementUpdateWithWhereUniqueWithoutBranchInput | Prisma.AnnouncementUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.AnnouncementUpdateManyWithWhereWithoutBranchInput | Prisma.AnnouncementUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.AnnouncementScalarWhereInput | Prisma.AnnouncementScalarWhereInput[];
};
export type AnnouncementCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutCreatedByInput, Prisma.AnnouncementUncheckedCreateWithoutCreatedByInput> | Prisma.AnnouncementCreateWithoutCreatedByInput[] | Prisma.AnnouncementUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutCreatedByInput | Prisma.AnnouncementCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.AnnouncementCreateManyCreatedByInputEnvelope;
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
};
export type AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutCreatedByInput, Prisma.AnnouncementUncheckedCreateWithoutCreatedByInput> | Prisma.AnnouncementCreateWithoutCreatedByInput[] | Prisma.AnnouncementUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutCreatedByInput | Prisma.AnnouncementCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.AnnouncementCreateManyCreatedByInputEnvelope;
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
};
export type AnnouncementUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutCreatedByInput, Prisma.AnnouncementUncheckedCreateWithoutCreatedByInput> | Prisma.AnnouncementCreateWithoutCreatedByInput[] | Prisma.AnnouncementUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutCreatedByInput | Prisma.AnnouncementCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.AnnouncementCreateManyCreatedByInputEnvelope;
    set?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    disconnect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    delete?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    update?: Prisma.AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.AnnouncementUpdateManyWithWhereWithoutCreatedByInput | Prisma.AnnouncementUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.AnnouncementScalarWhereInput | Prisma.AnnouncementScalarWhereInput[];
};
export type AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutCreatedByInput, Prisma.AnnouncementUncheckedCreateWithoutCreatedByInput> | Prisma.AnnouncementCreateWithoutCreatedByInput[] | Prisma.AnnouncementUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutCreatedByInput | Prisma.AnnouncementCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.AnnouncementCreateManyCreatedByInputEnvelope;
    set?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    disconnect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    delete?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    update?: Prisma.AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.AnnouncementUpdateManyWithWhereWithoutCreatedByInput | Prisma.AnnouncementUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.AnnouncementScalarWhereInput | Prisma.AnnouncementScalarWhereInput[];
};
export type AnnouncementCreatetargetRolesInput = {
    set: $Enums.Role[];
};
export type AnnouncementUpdatetargetRolesInput = {
    set?: $Enums.Role[];
    push?: $Enums.Role | $Enums.Role[];
};
export type AnnouncementCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutNotificationsInput, Prisma.AnnouncementUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.AnnouncementWhereUniqueInput;
};
export type AnnouncementUpdateOneWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutNotificationsInput, Prisma.AnnouncementUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.AnnouncementUpsertWithoutNotificationsInput;
    disconnect?: Prisma.AnnouncementWhereInput | boolean;
    delete?: Prisma.AnnouncementWhereInput | boolean;
    connect?: Prisma.AnnouncementWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnnouncementUpdateToOneWithWhereWithoutNotificationsInput, Prisma.AnnouncementUpdateWithoutNotificationsInput>, Prisma.AnnouncementUncheckedUpdateWithoutNotificationsInput>;
};
export type AnnouncementCreateWithoutSchoolInput = {
    id?: string;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch?: Prisma.BranchCreateNestedOneWithoutAnnouncementsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedAnnouncementsInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAnnouncementInput;
};
export type AnnouncementUncheckedCreateWithoutSchoolInput = {
    id?: string;
    branchId?: string | null;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAnnouncementInput;
};
export type AnnouncementCreateOrConnectWithoutSchoolInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnnouncementCreateWithoutSchoolInput, Prisma.AnnouncementUncheckedCreateWithoutSchoolInput>;
};
export type AnnouncementCreateManySchoolInputEnvelope = {
    data: Prisma.AnnouncementCreateManySchoolInput | Prisma.AnnouncementCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type AnnouncementUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnnouncementUpdateWithoutSchoolInput, Prisma.AnnouncementUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.AnnouncementCreateWithoutSchoolInput, Prisma.AnnouncementUncheckedCreateWithoutSchoolInput>;
};
export type AnnouncementUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnnouncementUpdateWithoutSchoolInput, Prisma.AnnouncementUncheckedUpdateWithoutSchoolInput>;
};
export type AnnouncementUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.AnnouncementScalarWhereInput;
    data: Prisma.XOR<Prisma.AnnouncementUpdateManyMutationInput, Prisma.AnnouncementUncheckedUpdateManyWithoutSchoolInput>;
};
export type AnnouncementScalarWhereInput = {
    AND?: Prisma.AnnouncementScalarWhereInput | Prisma.AnnouncementScalarWhereInput[];
    OR?: Prisma.AnnouncementScalarWhereInput[];
    NOT?: Prisma.AnnouncementScalarWhereInput | Prisma.AnnouncementScalarWhereInput[];
    id?: Prisma.StringFilter<"Announcement"> | string;
    schoolId?: Prisma.StringFilter<"Announcement"> | string;
    branchId?: Prisma.StringNullableFilter<"Announcement"> | string | null;
    title?: Prisma.StringFilter<"Announcement"> | string;
    body?: Prisma.StringFilter<"Announcement"> | string;
    targetRoles?: Prisma.EnumRoleNullableListFilter<"Announcement">;
    createdById?: Prisma.StringFilter<"Announcement"> | string;
    createdAt?: Prisma.DateTimeFilter<"Announcement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Announcement"> | Date | string;
};
export type AnnouncementCreateWithoutBranchInput = {
    id?: string;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAnnouncementsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedAnnouncementsInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAnnouncementInput;
};
export type AnnouncementUncheckedCreateWithoutBranchInput = {
    id?: string;
    schoolId: string;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAnnouncementInput;
};
export type AnnouncementCreateOrConnectWithoutBranchInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnnouncementCreateWithoutBranchInput, Prisma.AnnouncementUncheckedCreateWithoutBranchInput>;
};
export type AnnouncementCreateManyBranchInputEnvelope = {
    data: Prisma.AnnouncementCreateManyBranchInput | Prisma.AnnouncementCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type AnnouncementUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnnouncementUpdateWithoutBranchInput, Prisma.AnnouncementUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.AnnouncementCreateWithoutBranchInput, Prisma.AnnouncementUncheckedCreateWithoutBranchInput>;
};
export type AnnouncementUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnnouncementUpdateWithoutBranchInput, Prisma.AnnouncementUncheckedUpdateWithoutBranchInput>;
};
export type AnnouncementUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.AnnouncementScalarWhereInput;
    data: Prisma.XOR<Prisma.AnnouncementUpdateManyMutationInput, Prisma.AnnouncementUncheckedUpdateManyWithoutBranchInput>;
};
export type AnnouncementCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAnnouncementsInput;
    branch?: Prisma.BranchCreateNestedOneWithoutAnnouncementsInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAnnouncementInput;
};
export type AnnouncementUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    schoolId: string;
    branchId?: string | null;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAnnouncementInput;
};
export type AnnouncementCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnnouncementCreateWithoutCreatedByInput, Prisma.AnnouncementUncheckedCreateWithoutCreatedByInput>;
};
export type AnnouncementCreateManyCreatedByInputEnvelope = {
    data: Prisma.AnnouncementCreateManyCreatedByInput | Prisma.AnnouncementCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnnouncementUpdateWithoutCreatedByInput, Prisma.AnnouncementUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.AnnouncementCreateWithoutCreatedByInput, Prisma.AnnouncementUncheckedCreateWithoutCreatedByInput>;
};
export type AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnnouncementUpdateWithoutCreatedByInput, Prisma.AnnouncementUncheckedUpdateWithoutCreatedByInput>;
};
export type AnnouncementUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.AnnouncementScalarWhereInput;
    data: Prisma.XOR<Prisma.AnnouncementUpdateManyMutationInput, Prisma.AnnouncementUncheckedUpdateManyWithoutCreatedByInput>;
};
export type AnnouncementCreateWithoutNotificationsInput = {
    id?: string;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAnnouncementsInput;
    branch?: Prisma.BranchCreateNestedOneWithoutAnnouncementsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedAnnouncementsInput;
};
export type AnnouncementUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    schoolId: string;
    branchId?: string | null;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnnouncementCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnnouncementCreateWithoutNotificationsInput, Prisma.AnnouncementUncheckedCreateWithoutNotificationsInput>;
};
export type AnnouncementUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.AnnouncementUpdateWithoutNotificationsInput, Prisma.AnnouncementUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.AnnouncementCreateWithoutNotificationsInput, Prisma.AnnouncementUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.AnnouncementWhereInput;
};
export type AnnouncementUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.AnnouncementWhereInput;
    data: Prisma.XOR<Prisma.AnnouncementUpdateWithoutNotificationsInput, Prisma.AnnouncementUncheckedUpdateWithoutNotificationsInput>;
};
export type AnnouncementUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAnnouncementsNestedInput;
    branch?: Prisma.BranchUpdateOneWithoutAnnouncementsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedAnnouncementsNestedInput;
};
export type AnnouncementUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementCreateManySchoolInput = {
    id?: string;
    branchId?: string | null;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnnouncementUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneWithoutAnnouncementsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedAnnouncementsNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAnnouncementNestedInput;
};
export type AnnouncementUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAnnouncementNestedInput;
};
export type AnnouncementUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementCreateManyBranchInput = {
    id?: string;
    schoolId: string;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnnouncementUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAnnouncementsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedAnnouncementsNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAnnouncementNestedInput;
};
export type AnnouncementUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAnnouncementNestedInput;
};
export type AnnouncementUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementCreateManyCreatedByInput = {
    id?: string;
    schoolId: string;
    branchId?: string | null;
    title: string;
    body: string;
    targetRoles?: Prisma.AnnouncementCreatetargetRolesInput | $Enums.Role[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnnouncementUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAnnouncementsNestedInput;
    branch?: Prisma.BranchUpdateOneWithoutAnnouncementsNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAnnouncementNestedInput;
};
export type AnnouncementUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAnnouncementNestedInput;
};
export type AnnouncementUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetRoles?: Prisma.AnnouncementUpdatetargetRolesInput | $Enums.Role[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementCountOutputType = {
    notifications: number;
};
export type AnnouncementCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notifications?: boolean | AnnouncementCountOutputTypeCountNotificationsArgs;
};
export type AnnouncementCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementCountOutputTypeSelect<ExtArgs> | null;
};
export type AnnouncementCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type AnnouncementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    title?: boolean;
    body?: boolean;
    targetRoles?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.Announcement$branchArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    notifications?: boolean | Prisma.Announcement$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AnnouncementCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["announcement"]>;
export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    title?: boolean;
    body?: boolean;
    targetRoles?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.Announcement$branchArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["announcement"]>;
export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    title?: boolean;
    body?: boolean;
    targetRoles?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.Announcement$branchArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["announcement"]>;
export type AnnouncementSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    title?: boolean;
    body?: boolean;
    targetRoles?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AnnouncementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "branchId" | "title" | "body" | "targetRoles" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["announcement"]>;
export type AnnouncementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.Announcement$branchArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    notifications?: boolean | Prisma.Announcement$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AnnouncementCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.Announcement$branchArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AnnouncementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.Announcement$branchArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AnnouncementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Announcement";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        branch: Prisma.$BranchPayload<ExtArgs> | null;
        createdBy: Prisma.$UserPayload<ExtArgs>;
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        branchId: string | null;
        title: string;
        body: string;
        targetRoles: $Enums.Role[];
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["announcement"]>;
    composites: {};
};
export type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload, S>;
export type AnnouncementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnnouncementCountAggregateInputType | true;
};
export interface AnnouncementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Announcement'];
        meta: {
            name: 'Announcement';
        };
    };
    findUnique<T extends AnnouncementFindUniqueArgs>(args: Prisma.SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnnouncementFindFirstArgs>(args?: Prisma.SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnnouncementFindManyArgs>(args?: Prisma.SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnnouncementCreateArgs>(args: Prisma.SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnnouncementCreateManyArgs>(args?: Prisma.SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnnouncementDeleteArgs>(args: Prisma.SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnnouncementUpdateArgs>(args: Prisma.SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnnouncementUpdateManyArgs>(args: Prisma.SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnnouncementUpsertArgs>(args: Prisma.SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnnouncementCountArgs>(args?: Prisma.Subset<T, AnnouncementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnnouncementCountAggregateOutputType> : number>;
    aggregate<T extends AnnouncementAggregateArgs>(args: Prisma.Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>;
    groupBy<T extends AnnouncementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnnouncementGroupByArgs['orderBy'];
    } : {
        orderBy?: AnnouncementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnnouncementFieldRefs;
}
export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    branch<T extends Prisma.Announcement$branchArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Announcement$branchArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    notifications<T extends Prisma.Announcement$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Announcement$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnnouncementFieldRefs {
    readonly id: Prisma.FieldRef<"Announcement", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Announcement", 'String'>;
    readonly branchId: Prisma.FieldRef<"Announcement", 'String'>;
    readonly title: Prisma.FieldRef<"Announcement", 'String'>;
    readonly body: Prisma.FieldRef<"Announcement", 'String'>;
    readonly targetRoles: Prisma.FieldRef<"Announcement", 'Role[]'>;
    readonly createdById: Prisma.FieldRef<"Announcement", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Announcement", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Announcement", 'DateTime'>;
}
export type AnnouncementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where: Prisma.AnnouncementWhereUniqueInput;
};
export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where: Prisma.AnnouncementWhereUniqueInput;
};
export type AnnouncementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where?: Prisma.AnnouncementWhereInput;
    orderBy?: Prisma.AnnouncementOrderByWithRelationInput | Prisma.AnnouncementOrderByWithRelationInput[];
    cursor?: Prisma.AnnouncementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnnouncementScalarFieldEnum | Prisma.AnnouncementScalarFieldEnum[];
};
export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where?: Prisma.AnnouncementWhereInput;
    orderBy?: Prisma.AnnouncementOrderByWithRelationInput | Prisma.AnnouncementOrderByWithRelationInput[];
    cursor?: Prisma.AnnouncementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnnouncementScalarFieldEnum | Prisma.AnnouncementScalarFieldEnum[];
};
export type AnnouncementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where?: Prisma.AnnouncementWhereInput;
    orderBy?: Prisma.AnnouncementOrderByWithRelationInput | Prisma.AnnouncementOrderByWithRelationInput[];
    cursor?: Prisma.AnnouncementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnnouncementScalarFieldEnum | Prisma.AnnouncementScalarFieldEnum[];
};
export type AnnouncementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnnouncementCreateInput, Prisma.AnnouncementUncheckedCreateInput>;
};
export type AnnouncementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnnouncementCreateManyInput | Prisma.AnnouncementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    data: Prisma.AnnouncementCreateManyInput | Prisma.AnnouncementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnnouncementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnnouncementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnnouncementUpdateInput, Prisma.AnnouncementUncheckedUpdateInput>;
    where: Prisma.AnnouncementWhereUniqueInput;
};
export type AnnouncementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnnouncementUpdateManyMutationInput, Prisma.AnnouncementUncheckedUpdateManyInput>;
    where?: Prisma.AnnouncementWhereInput;
    limit?: number;
};
export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnnouncementUpdateManyMutationInput, Prisma.AnnouncementUncheckedUpdateManyInput>;
    where?: Prisma.AnnouncementWhereInput;
    limit?: number;
    include?: Prisma.AnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnnouncementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where: Prisma.AnnouncementWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnnouncementCreateInput, Prisma.AnnouncementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnnouncementUpdateInput, Prisma.AnnouncementUncheckedUpdateInput>;
};
export type AnnouncementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where: Prisma.AnnouncementWhereUniqueInput;
};
export type AnnouncementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnnouncementWhereInput;
    limit?: number;
};
export type Announcement$branchArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BranchSelect<ExtArgs> | null;
    omit?: Prisma.BranchOmit<ExtArgs> | null;
    include?: Prisma.BranchInclude<ExtArgs> | null;
    where?: Prisma.BranchWhereInput;
};
export type Announcement$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type AnnouncementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
};
