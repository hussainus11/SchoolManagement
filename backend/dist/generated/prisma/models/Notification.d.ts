import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NotificationModel = runtime.Types.Result.DefaultSelection<Prisma.$NotificationPayload>;
export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
};
export type NotificationMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    userId: string | null;
    announcementId: string | null;
    type: $Enums.NotificationType | null;
    title: string | null;
    body: string | null;
    link: string | null;
    isRead: boolean | null;
    createdAt: Date | null;
};
export type NotificationMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    userId: string | null;
    announcementId: string | null;
    type: $Enums.NotificationType | null;
    title: string | null;
    body: string | null;
    link: string | null;
    isRead: boolean | null;
    createdAt: Date | null;
};
export type NotificationCountAggregateOutputType = {
    id: number;
    schoolId: number;
    userId: number;
    announcementId: number;
    type: number;
    title: number;
    body: number;
    link: number;
    isRead: number;
    createdAt: number;
    _all: number;
};
export type NotificationMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    userId?: true;
    announcementId?: true;
    type?: true;
    title?: true;
    body?: true;
    link?: true;
    isRead?: true;
    createdAt?: true;
};
export type NotificationMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    userId?: true;
    announcementId?: true;
    type?: true;
    title?: true;
    body?: true;
    link?: true;
    isRead?: true;
    createdAt?: true;
};
export type NotificationCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    userId?: true;
    announcementId?: true;
    type?: true;
    title?: true;
    body?: true;
    link?: true;
    isRead?: true;
    createdAt?: true;
    _all?: true;
};
export type NotificationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotificationCountAggregateInputType;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
};
export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
    [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotification[P]> : Prisma.GetScalarType<T[P], AggregateNotification[P]>;
};
export type NotificationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithAggregationInput | Prisma.NotificationOrderByWithAggregationInput[];
    by: Prisma.NotificationScalarFieldEnum[] | Prisma.NotificationScalarFieldEnum;
    having?: Prisma.NotificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationCountAggregateInputType | true;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
};
export type NotificationGroupByOutputType = {
    id: string;
    schoolId: string;
    userId: string;
    announcementId: string | null;
    type: $Enums.NotificationType;
    title: string;
    body: string;
    link: string | null;
    isRead: boolean;
    createdAt: Date;
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
};
export type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationGroupByOutputType[P]>;
}>>;
export type NotificationWhereInput = {
    AND?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    OR?: Prisma.NotificationWhereInput[];
    NOT?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    id?: Prisma.StringFilter<"Notification"> | string;
    schoolId?: Prisma.StringFilter<"Notification"> | string;
    userId?: Prisma.StringFilter<"Notification"> | string;
    announcementId?: Prisma.StringNullableFilter<"Notification"> | string | null;
    type?: Prisma.EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType;
    title?: Prisma.StringFilter<"Notification"> | string;
    body?: Prisma.StringFilter<"Notification"> | string;
    link?: Prisma.StringNullableFilter<"Notification"> | string | null;
    isRead?: Prisma.BoolFilter<"Notification"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    announcement?: Prisma.XOR<Prisma.AnnouncementNullableScalarRelationFilter, Prisma.AnnouncementWhereInput> | null;
};
export type NotificationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    announcementId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    announcement?: Prisma.AnnouncementOrderByWithRelationInput;
};
export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    OR?: Prisma.NotificationWhereInput[];
    NOT?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    schoolId?: Prisma.StringFilter<"Notification"> | string;
    userId?: Prisma.StringFilter<"Notification"> | string;
    announcementId?: Prisma.StringNullableFilter<"Notification"> | string | null;
    type?: Prisma.EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType;
    title?: Prisma.StringFilter<"Notification"> | string;
    body?: Prisma.StringFilter<"Notification"> | string;
    link?: Prisma.StringNullableFilter<"Notification"> | string | null;
    isRead?: Prisma.BoolFilter<"Notification"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    announcement?: Prisma.XOR<Prisma.AnnouncementNullableScalarRelationFilter, Prisma.AnnouncementWhereInput> | null;
}, "id">;
export type NotificationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    announcementId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.NotificationCountOrderByAggregateInput;
    _max?: Prisma.NotificationMaxOrderByAggregateInput;
    _min?: Prisma.NotificationMinOrderByAggregateInput;
};
export type NotificationScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotificationScalarWhereWithAggregatesInput | Prisma.NotificationScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotificationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotificationScalarWhereWithAggregatesInput | Prisma.NotificationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    announcementId?: Prisma.StringNullableWithAggregatesFilter<"Notification"> | string | null;
    type?: Prisma.EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType;
    title?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    body?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    link?: Prisma.StringNullableWithAggregatesFilter<"Notification"> | string | null;
    isRead?: Prisma.BoolWithAggregatesFilter<"Notification"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Notification"> | Date | string;
};
export type NotificationCreateInput = {
    id?: string;
    type?: $Enums.NotificationType;
    title: string;
    body: string;
    link?: string | null;
    isRead?: boolean;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutNotificationsInput;
    user: Prisma.UserCreateNestedOneWithoutNotificationsInput;
    announcement?: Prisma.AnnouncementCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    userId: string;
    announcementId?: string | null;
    type?: $Enums.NotificationType;
    title: string;
    body: string;
    link?: string | null;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutNotificationsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutNotificationsNestedInput;
    announcement?: Prisma.AnnouncementUpdateOneWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    announcementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationCreateManyInput = {
    id?: string;
    schoolId: string;
    userId: string;
    announcementId?: string | null;
    type?: $Enums.NotificationType;
    title: string;
    body: string;
    link?: string | null;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    announcementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationListRelationFilter = {
    every?: Prisma.NotificationWhereInput;
    some?: Prisma.NotificationWhereInput;
    none?: Prisma.NotificationWhereInput;
};
export type NotificationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotificationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    announcementId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotificationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    announcementId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotificationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    announcementId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotificationCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutSchoolInput, Prisma.NotificationUncheckedCreateWithoutSchoolInput> | Prisma.NotificationCreateWithoutSchoolInput[] | Prisma.NotificationUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutSchoolInput | Prisma.NotificationCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.NotificationCreateManySchoolInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutSchoolInput, Prisma.NotificationUncheckedCreateWithoutSchoolInput> | Prisma.NotificationCreateWithoutSchoolInput[] | Prisma.NotificationUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutSchoolInput | Prisma.NotificationCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.NotificationCreateManySchoolInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutSchoolInput, Prisma.NotificationUncheckedCreateWithoutSchoolInput> | Prisma.NotificationCreateWithoutSchoolInput[] | Prisma.NotificationUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutSchoolInput | Prisma.NotificationCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutSchoolInput | Prisma.NotificationUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.NotificationCreateManySchoolInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutSchoolInput | Prisma.NotificationUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutSchoolInput | Prisma.NotificationUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutSchoolInput, Prisma.NotificationUncheckedCreateWithoutSchoolInput> | Prisma.NotificationCreateWithoutSchoolInput[] | Prisma.NotificationUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutSchoolInput | Prisma.NotificationCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutSchoolInput | Prisma.NotificationUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.NotificationCreateManySchoolInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutSchoolInput | Prisma.NotificationUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutSchoolInput | Prisma.NotificationUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutUserInput, Prisma.NotificationUncheckedCreateWithoutUserInput> | Prisma.NotificationCreateWithoutUserInput[] | Prisma.NotificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutUserInput | Prisma.NotificationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.NotificationCreateManyUserInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutUserInput, Prisma.NotificationUncheckedCreateWithoutUserInput> | Prisma.NotificationCreateWithoutUserInput[] | Prisma.NotificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutUserInput | Prisma.NotificationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.NotificationCreateManyUserInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutUserInput, Prisma.NotificationUncheckedCreateWithoutUserInput> | Prisma.NotificationCreateWithoutUserInput[] | Prisma.NotificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutUserInput | Prisma.NotificationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutUserInput | Prisma.NotificationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.NotificationCreateManyUserInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput | Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutUserInput | Prisma.NotificationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutUserInput, Prisma.NotificationUncheckedCreateWithoutUserInput> | Prisma.NotificationCreateWithoutUserInput[] | Prisma.NotificationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutUserInput | Prisma.NotificationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutUserInput | Prisma.NotificationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.NotificationCreateManyUserInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput | Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutUserInput | Prisma.NotificationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationCreateNestedManyWithoutAnnouncementInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutAnnouncementInput, Prisma.NotificationUncheckedCreateWithoutAnnouncementInput> | Prisma.NotificationCreateWithoutAnnouncementInput[] | Prisma.NotificationUncheckedCreateWithoutAnnouncementInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutAnnouncementInput | Prisma.NotificationCreateOrConnectWithoutAnnouncementInput[];
    createMany?: Prisma.NotificationCreateManyAnnouncementInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUncheckedCreateNestedManyWithoutAnnouncementInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutAnnouncementInput, Prisma.NotificationUncheckedCreateWithoutAnnouncementInput> | Prisma.NotificationCreateWithoutAnnouncementInput[] | Prisma.NotificationUncheckedCreateWithoutAnnouncementInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutAnnouncementInput | Prisma.NotificationCreateOrConnectWithoutAnnouncementInput[];
    createMany?: Prisma.NotificationCreateManyAnnouncementInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUpdateManyWithoutAnnouncementNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutAnnouncementInput, Prisma.NotificationUncheckedCreateWithoutAnnouncementInput> | Prisma.NotificationCreateWithoutAnnouncementInput[] | Prisma.NotificationUncheckedCreateWithoutAnnouncementInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutAnnouncementInput | Prisma.NotificationCreateOrConnectWithoutAnnouncementInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutAnnouncementInput | Prisma.NotificationUpsertWithWhereUniqueWithoutAnnouncementInput[];
    createMany?: Prisma.NotificationCreateManyAnnouncementInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutAnnouncementInput | Prisma.NotificationUpdateWithWhereUniqueWithoutAnnouncementInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutAnnouncementInput | Prisma.NotificationUpdateManyWithWhereWithoutAnnouncementInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUncheckedUpdateManyWithoutAnnouncementNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutAnnouncementInput, Prisma.NotificationUncheckedCreateWithoutAnnouncementInput> | Prisma.NotificationCreateWithoutAnnouncementInput[] | Prisma.NotificationUncheckedCreateWithoutAnnouncementInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutAnnouncementInput | Prisma.NotificationCreateOrConnectWithoutAnnouncementInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutAnnouncementInput | Prisma.NotificationUpsertWithWhereUniqueWithoutAnnouncementInput[];
    createMany?: Prisma.NotificationCreateManyAnnouncementInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutAnnouncementInput | Prisma.NotificationUpdateWithWhereUniqueWithoutAnnouncementInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutAnnouncementInput | Prisma.NotificationUpdateManyWithWhereWithoutAnnouncementInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType;
};
export type NotificationCreateWithoutSchoolInput = {
    id?: string;
    type?: $Enums.NotificationType;
    title: string;
    body: string;
    link?: string | null;
    isRead?: boolean;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutNotificationsInput;
    announcement?: Prisma.AnnouncementCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateWithoutSchoolInput = {
    id?: string;
    userId: string;
    announcementId?: string | null;
    type?: $Enums.NotificationType;
    title: string;
    body: string;
    link?: string | null;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationCreateOrConnectWithoutSchoolInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutSchoolInput, Prisma.NotificationUncheckedCreateWithoutSchoolInput>;
};
export type NotificationCreateManySchoolInputEnvelope = {
    data: Prisma.NotificationCreateManySchoolInput | Prisma.NotificationCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type NotificationUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.NotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutSchoolInput, Prisma.NotificationUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutSchoolInput, Prisma.NotificationUncheckedCreateWithoutSchoolInput>;
};
export type NotificationUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.NotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutSchoolInput, Prisma.NotificationUncheckedUpdateWithoutSchoolInput>;
};
export type NotificationUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.NotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyWithoutSchoolInput>;
};
export type NotificationScalarWhereInput = {
    AND?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
    OR?: Prisma.NotificationScalarWhereInput[];
    NOT?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
    id?: Prisma.StringFilter<"Notification"> | string;
    schoolId?: Prisma.StringFilter<"Notification"> | string;
    userId?: Prisma.StringFilter<"Notification"> | string;
    announcementId?: Prisma.StringNullableFilter<"Notification"> | string | null;
    type?: Prisma.EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType;
    title?: Prisma.StringFilter<"Notification"> | string;
    body?: Prisma.StringFilter<"Notification"> | string;
    link?: Prisma.StringNullableFilter<"Notification"> | string | null;
    isRead?: Prisma.BoolFilter<"Notification"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Notification"> | Date | string;
};
export type NotificationCreateWithoutUserInput = {
    id?: string;
    type?: $Enums.NotificationType;
    title: string;
    body: string;
    link?: string | null;
    isRead?: boolean;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutNotificationsInput;
    announcement?: Prisma.AnnouncementCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string;
    schoolId: string;
    announcementId?: string | null;
    type?: $Enums.NotificationType;
    title: string;
    body: string;
    link?: string | null;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationCreateOrConnectWithoutUserInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutUserInput, Prisma.NotificationUncheckedCreateWithoutUserInput>;
};
export type NotificationCreateManyUserInputEnvelope = {
    data: Prisma.NotificationCreateManyUserInput | Prisma.NotificationCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.NotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutUserInput, Prisma.NotificationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutUserInput, Prisma.NotificationUncheckedCreateWithoutUserInput>;
};
export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.NotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutUserInput, Prisma.NotificationUncheckedUpdateWithoutUserInput>;
};
export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.NotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyWithoutUserInput>;
};
export type NotificationCreateWithoutAnnouncementInput = {
    id?: string;
    type?: $Enums.NotificationType;
    title: string;
    body: string;
    link?: string | null;
    isRead?: boolean;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutNotificationsInput;
    user: Prisma.UserCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateWithoutAnnouncementInput = {
    id?: string;
    schoolId: string;
    userId: string;
    type?: $Enums.NotificationType;
    title: string;
    body: string;
    link?: string | null;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationCreateOrConnectWithoutAnnouncementInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutAnnouncementInput, Prisma.NotificationUncheckedCreateWithoutAnnouncementInput>;
};
export type NotificationCreateManyAnnouncementInputEnvelope = {
    data: Prisma.NotificationCreateManyAnnouncementInput | Prisma.NotificationCreateManyAnnouncementInput[];
    skipDuplicates?: boolean;
};
export type NotificationUpsertWithWhereUniqueWithoutAnnouncementInput = {
    where: Prisma.NotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutAnnouncementInput, Prisma.NotificationUncheckedUpdateWithoutAnnouncementInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutAnnouncementInput, Prisma.NotificationUncheckedCreateWithoutAnnouncementInput>;
};
export type NotificationUpdateWithWhereUniqueWithoutAnnouncementInput = {
    where: Prisma.NotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutAnnouncementInput, Prisma.NotificationUncheckedUpdateWithoutAnnouncementInput>;
};
export type NotificationUpdateManyWithWhereWithoutAnnouncementInput = {
    where: Prisma.NotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyWithoutAnnouncementInput>;
};
export type NotificationCreateManySchoolInput = {
    id?: string;
    userId: string;
    announcementId?: string | null;
    type?: $Enums.NotificationType;
    title: string;
    body: string;
    link?: string | null;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutNotificationsNestedInput;
    announcement?: Prisma.AnnouncementUpdateOneWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    announcementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    announcementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationCreateManyUserInput = {
    id?: string;
    schoolId: string;
    announcementId?: string | null;
    type?: $Enums.NotificationType;
    title: string;
    body: string;
    link?: string | null;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutNotificationsNestedInput;
    announcement?: Prisma.AnnouncementUpdateOneWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    announcementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    announcementId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationCreateManyAnnouncementInput = {
    id?: string;
    schoolId: string;
    userId: string;
    type?: $Enums.NotificationType;
    title: string;
    body: string;
    link?: string | null;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type NotificationUpdateWithoutAnnouncementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutNotificationsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateWithoutAnnouncementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyWithoutAnnouncementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    announcementId?: boolean;
    type?: boolean;
    title?: boolean;
    body?: boolean;
    link?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    announcement?: boolean | Prisma.Notification$announcementArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    announcementId?: boolean;
    type?: boolean;
    title?: boolean;
    body?: boolean;
    link?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    announcement?: boolean | Prisma.Notification$announcementArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    announcementId?: boolean;
    type?: boolean;
    title?: boolean;
    body?: boolean;
    link?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    announcement?: boolean | Prisma.Notification$announcementArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    announcementId?: boolean;
    type?: boolean;
    title?: boolean;
    body?: boolean;
    link?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
};
export type NotificationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "userId" | "announcementId" | "type" | "title" | "body" | "link" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>;
export type NotificationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    announcement?: boolean | Prisma.Notification$announcementArgs<ExtArgs>;
};
export type NotificationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    announcement?: boolean | Prisma.Notification$announcementArgs<ExtArgs>;
};
export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    announcement?: boolean | Prisma.Notification$announcementArgs<ExtArgs>;
};
export type $NotificationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Notification";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        announcement: Prisma.$AnnouncementPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        userId: string;
        announcementId: string | null;
        type: $Enums.NotificationType;
        title: string;
        body: string;
        link: string | null;
        isRead: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["notification"]>;
    composites: {};
};
export type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotificationPayload, S>;
export type NotificationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationCountAggregateInputType | true;
};
export interface NotificationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Notification'];
        meta: {
            name: 'Notification';
        };
    };
    findUnique<T extends NotificationFindUniqueArgs>(args: Prisma.SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotificationFindFirstArgs>(args?: Prisma.SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotificationFindManyArgs>(args?: Prisma.SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotificationCreateArgs>(args: Prisma.SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotificationCreateManyArgs>(args?: Prisma.SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NotificationDeleteArgs>(args: Prisma.SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotificationUpdateArgs>(args: Prisma.SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotificationDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotificationUpdateManyArgs>(args: Prisma.SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NotificationUpsertArgs>(args: Prisma.SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotificationCountArgs>(args?: Prisma.Subset<T, NotificationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationCountAggregateOutputType> : number>;
    aggregate<T extends NotificationAggregateArgs>(args: Prisma.Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>;
    groupBy<T extends NotificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotificationGroupByArgs['orderBy'];
    } : {
        orderBy?: NotificationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotificationFieldRefs;
}
export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    announcement<T extends Prisma.Notification$announcementArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Notification$announcementArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotificationFieldRefs {
    readonly id: Prisma.FieldRef<"Notification", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Notification", 'String'>;
    readonly userId: Prisma.FieldRef<"Notification", 'String'>;
    readonly announcementId: Prisma.FieldRef<"Notification", 'String'>;
    readonly type: Prisma.FieldRef<"Notification", 'NotificationType'>;
    readonly title: Prisma.FieldRef<"Notification", 'String'>;
    readonly body: Prisma.FieldRef<"Notification", 'String'>;
    readonly link: Prisma.FieldRef<"Notification", 'String'>;
    readonly isRead: Prisma.FieldRef<"Notification", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Notification", 'DateTime'>;
}
export type NotificationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotificationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotificationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotificationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationCreateInput, Prisma.NotificationUncheckedCreateInput>;
};
export type NotificationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotificationCreateManyInput | Prisma.NotificationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotificationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    data: Prisma.NotificationCreateManyInput | Prisma.NotificationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NotificationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NotificationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationUpdateInput, Prisma.NotificationUncheckedUpdateInput>;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyInput>;
    where?: Prisma.NotificationWhereInput;
    limit?: number;
};
export type NotificationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyInput>;
    where?: Prisma.NotificationWhereInput;
    limit?: number;
    include?: Prisma.NotificationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NotificationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateInput, Prisma.NotificationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotificationUpdateInput, Prisma.NotificationUncheckedUpdateInput>;
};
export type NotificationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    limit?: number;
};
export type Notification$announcementArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where?: Prisma.AnnouncementWhereInput;
};
export type NotificationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
};
