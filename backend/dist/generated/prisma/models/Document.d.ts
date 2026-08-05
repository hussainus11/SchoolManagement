import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentPayload>;
export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null;
    _avg: DocumentAvgAggregateOutputType | null;
    _sum: DocumentSumAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
};
export type DocumentAvgAggregateOutputType = {
    fileSize: number | null;
};
export type DocumentSumAggregateOutputType = {
    fileSize: number | null;
};
export type DocumentMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    ownerType: $Enums.DocumentOwnerType | null;
    ownerId: string | null;
    title: string | null;
    fileUrl: string | null;
    fileName: string | null;
    mimeType: string | null;
    fileSize: number | null;
    uploadedById: string | null;
    createdAt: Date | null;
};
export type DocumentMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    ownerType: $Enums.DocumentOwnerType | null;
    ownerId: string | null;
    title: string | null;
    fileUrl: string | null;
    fileName: string | null;
    mimeType: string | null;
    fileSize: number | null;
    uploadedById: string | null;
    createdAt: Date | null;
};
export type DocumentCountAggregateOutputType = {
    id: number;
    schoolId: number;
    ownerType: number;
    ownerId: number;
    title: number;
    fileUrl: number;
    fileName: number;
    mimeType: number;
    fileSize: number;
    uploadedById: number;
    createdAt: number;
    _all: number;
};
export type DocumentAvgAggregateInputType = {
    fileSize?: true;
};
export type DocumentSumAggregateInputType = {
    fileSize?: true;
};
export type DocumentMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    ownerType?: true;
    ownerId?: true;
    title?: true;
    fileUrl?: true;
    fileName?: true;
    mimeType?: true;
    fileSize?: true;
    uploadedById?: true;
    createdAt?: true;
};
export type DocumentMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    ownerType?: true;
    ownerId?: true;
    title?: true;
    fileUrl?: true;
    fileName?: true;
    mimeType?: true;
    fileSize?: true;
    uploadedById?: true;
    createdAt?: true;
};
export type DocumentCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    ownerType?: true;
    ownerId?: true;
    title?: true;
    fileUrl?: true;
    fileName?: true;
    mimeType?: true;
    fileSize?: true;
    uploadedById?: true;
    createdAt?: true;
    _all?: true;
};
export type DocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentCountAggregateInputType;
    _avg?: DocumentAvgAggregateInputType;
    _sum?: DocumentSumAggregateInputType;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
};
export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocument[P]> : Prisma.GetScalarType<T[P], AggregateDocument[P]>;
};
export type DocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithAggregationInput | Prisma.DocumentOrderByWithAggregationInput[];
    by: Prisma.DocumentScalarFieldEnum[] | Prisma.DocumentScalarFieldEnum;
    having?: Prisma.DocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentCountAggregateInputType | true;
    _avg?: DocumentAvgAggregateInputType;
    _sum?: DocumentSumAggregateInputType;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
};
export type DocumentGroupByOutputType = {
    id: string;
    schoolId: string;
    ownerType: $Enums.DocumentOwnerType;
    ownerId: string;
    title: string;
    fileUrl: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
    uploadedById: string;
    createdAt: Date;
    _count: DocumentCountAggregateOutputType | null;
    _avg: DocumentAvgAggregateOutputType | null;
    _sum: DocumentSumAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
};
export type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentGroupByOutputType[P]>;
}>>;
export type DocumentWhereInput = {
    AND?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    OR?: Prisma.DocumentWhereInput[];
    NOT?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    id?: Prisma.StringFilter<"Document"> | string;
    schoolId?: Prisma.StringFilter<"Document"> | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFilter<"Document"> | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFilter<"Document"> | string;
    title?: Prisma.StringFilter<"Document"> | string;
    fileUrl?: Prisma.StringFilter<"Document"> | string;
    fileName?: Prisma.StringFilter<"Document"> | string;
    mimeType?: Prisma.StringFilter<"Document"> | string;
    fileSize?: Prisma.IntFilter<"Document"> | number;
    uploadedById?: Prisma.StringFilter<"Document"> | string;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    uploadedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type DocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    ownerType?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    uploadedBy?: Prisma.UserOrderByWithRelationInput;
};
export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    OR?: Prisma.DocumentWhereInput[];
    NOT?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    schoolId?: Prisma.StringFilter<"Document"> | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFilter<"Document"> | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFilter<"Document"> | string;
    title?: Prisma.StringFilter<"Document"> | string;
    fileUrl?: Prisma.StringFilter<"Document"> | string;
    fileName?: Prisma.StringFilter<"Document"> | string;
    mimeType?: Prisma.StringFilter<"Document"> | string;
    fileSize?: Prisma.IntFilter<"Document"> | number;
    uploadedById?: Prisma.StringFilter<"Document"> | string;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    uploadedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type DocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    ownerType?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DocumentCountOrderByAggregateInput;
    _avg?: Prisma.DocumentAvgOrderByAggregateInput;
    _max?: Prisma.DocumentMaxOrderByAggregateInput;
    _min?: Prisma.DocumentMinOrderByAggregateInput;
    _sum?: Prisma.DocumentSumOrderByAggregateInput;
};
export type DocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentScalarWhereWithAggregatesInput | Prisma.DocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentScalarWhereWithAggregatesInput | Prisma.DocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeWithAggregatesFilter<"Document"> | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    fileUrl?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    fileName?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    mimeType?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    fileSize?: Prisma.IntWithAggregatesFilter<"Document"> | number;
    uploadedById?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Document"> | Date | string;
};
export type DocumentCreateInput = {
    id?: string;
    ownerType: $Enums.DocumentOwnerType;
    ownerId: string;
    title: string;
    fileUrl: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutDocumentsInput;
    uploadedBy: Prisma.UserCreateNestedOneWithoutUploadedDocumentsInput;
};
export type DocumentUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    ownerType: $Enums.DocumentOwnerType;
    ownerId: string;
    title: string;
    fileUrl: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
    uploadedById: string;
    createdAt?: Date | string;
};
export type DocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutDocumentsNestedInput;
    uploadedBy?: Prisma.UserUpdateOneRequiredWithoutUploadedDocumentsNestedInput;
};
export type DocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentCreateManyInput = {
    id?: string;
    schoolId: string;
    ownerType: $Enums.DocumentOwnerType;
    ownerId: string;
    title: string;
    fileUrl: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
    uploadedById: string;
    createdAt?: Date | string;
};
export type DocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentListRelationFilter = {
    every?: Prisma.DocumentWhereInput;
    some?: Prisma.DocumentWhereInput;
    none?: Prisma.DocumentWhereInput;
};
export type DocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    ownerType?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentAvgOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type DocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    ownerType?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    ownerType?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentSumOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type DocumentCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutSchoolInput, Prisma.DocumentUncheckedCreateWithoutSchoolInput> | Prisma.DocumentCreateWithoutSchoolInput[] | Prisma.DocumentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutSchoolInput | Prisma.DocumentCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.DocumentCreateManySchoolInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutSchoolInput, Prisma.DocumentUncheckedCreateWithoutSchoolInput> | Prisma.DocumentCreateWithoutSchoolInput[] | Prisma.DocumentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutSchoolInput | Prisma.DocumentCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.DocumentCreateManySchoolInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutSchoolInput, Prisma.DocumentUncheckedCreateWithoutSchoolInput> | Prisma.DocumentCreateWithoutSchoolInput[] | Prisma.DocumentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutSchoolInput | Prisma.DocumentCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutSchoolInput | Prisma.DocumentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.DocumentCreateManySchoolInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutSchoolInput | Prisma.DocumentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutSchoolInput | Prisma.DocumentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type DocumentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutSchoolInput, Prisma.DocumentUncheckedCreateWithoutSchoolInput> | Prisma.DocumentCreateWithoutSchoolInput[] | Prisma.DocumentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutSchoolInput | Prisma.DocumentCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutSchoolInput | Prisma.DocumentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.DocumentCreateManySchoolInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutSchoolInput | Prisma.DocumentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutSchoolInput | Prisma.DocumentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type DocumentCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUploadedByInput, Prisma.DocumentUncheckedCreateWithoutUploadedByInput> | Prisma.DocumentCreateWithoutUploadedByInput[] | Prisma.DocumentUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUploadedByInput | Prisma.DocumentCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.DocumentCreateManyUploadedByInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUploadedByInput, Prisma.DocumentUncheckedCreateWithoutUploadedByInput> | Prisma.DocumentCreateWithoutUploadedByInput[] | Prisma.DocumentUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUploadedByInput | Prisma.DocumentCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.DocumentCreateManyUploadedByInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUploadedByInput, Prisma.DocumentUncheckedCreateWithoutUploadedByInput> | Prisma.DocumentCreateWithoutUploadedByInput[] | Prisma.DocumentUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUploadedByInput | Prisma.DocumentCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.DocumentUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.DocumentCreateManyUploadedByInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.DocumentUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutUploadedByInput | Prisma.DocumentUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type DocumentUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUploadedByInput, Prisma.DocumentUncheckedCreateWithoutUploadedByInput> | Prisma.DocumentCreateWithoutUploadedByInput[] | Prisma.DocumentUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUploadedByInput | Prisma.DocumentCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.DocumentUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.DocumentCreateManyUploadedByInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.DocumentUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutUploadedByInput | Prisma.DocumentUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type EnumDocumentOwnerTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentOwnerType;
};
export type DocumentCreateWithoutSchoolInput = {
    id?: string;
    ownerType: $Enums.DocumentOwnerType;
    ownerId: string;
    title: string;
    fileUrl: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
    createdAt?: Date | string;
    uploadedBy: Prisma.UserCreateNestedOneWithoutUploadedDocumentsInput;
};
export type DocumentUncheckedCreateWithoutSchoolInput = {
    id?: string;
    ownerType: $Enums.DocumentOwnerType;
    ownerId: string;
    title: string;
    fileUrl: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
    uploadedById: string;
    createdAt?: Date | string;
};
export type DocumentCreateOrConnectWithoutSchoolInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutSchoolInput, Prisma.DocumentUncheckedCreateWithoutSchoolInput>;
};
export type DocumentCreateManySchoolInputEnvelope = {
    data: Prisma.DocumentCreateManySchoolInput | Prisma.DocumentCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type DocumentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.DocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutSchoolInput, Prisma.DocumentUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutSchoolInput, Prisma.DocumentUncheckedCreateWithoutSchoolInput>;
};
export type DocumentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.DocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutSchoolInput, Prisma.DocumentUncheckedUpdateWithoutSchoolInput>;
};
export type DocumentUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.DocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyWithoutSchoolInput>;
};
export type DocumentScalarWhereInput = {
    AND?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
    OR?: Prisma.DocumentScalarWhereInput[];
    NOT?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
    id?: Prisma.StringFilter<"Document"> | string;
    schoolId?: Prisma.StringFilter<"Document"> | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFilter<"Document"> | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFilter<"Document"> | string;
    title?: Prisma.StringFilter<"Document"> | string;
    fileUrl?: Prisma.StringFilter<"Document"> | string;
    fileName?: Prisma.StringFilter<"Document"> | string;
    mimeType?: Prisma.StringFilter<"Document"> | string;
    fileSize?: Prisma.IntFilter<"Document"> | number;
    uploadedById?: Prisma.StringFilter<"Document"> | string;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
};
export type DocumentCreateWithoutUploadedByInput = {
    id?: string;
    ownerType: $Enums.DocumentOwnerType;
    ownerId: string;
    title: string;
    fileUrl: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
    createdAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutDocumentsInput;
};
export type DocumentUncheckedCreateWithoutUploadedByInput = {
    id?: string;
    schoolId: string;
    ownerType: $Enums.DocumentOwnerType;
    ownerId: string;
    title: string;
    fileUrl: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
    createdAt?: Date | string;
};
export type DocumentCreateOrConnectWithoutUploadedByInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutUploadedByInput, Prisma.DocumentUncheckedCreateWithoutUploadedByInput>;
};
export type DocumentCreateManyUploadedByInputEnvelope = {
    data: Prisma.DocumentCreateManyUploadedByInput | Prisma.DocumentCreateManyUploadedByInput[];
    skipDuplicates?: boolean;
};
export type DocumentUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.DocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutUploadedByInput, Prisma.DocumentUncheckedUpdateWithoutUploadedByInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutUploadedByInput, Prisma.DocumentUncheckedCreateWithoutUploadedByInput>;
};
export type DocumentUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.DocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutUploadedByInput, Prisma.DocumentUncheckedUpdateWithoutUploadedByInput>;
};
export type DocumentUpdateManyWithWhereWithoutUploadedByInput = {
    where: Prisma.DocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyWithoutUploadedByInput>;
};
export type DocumentCreateManySchoolInput = {
    id?: string;
    ownerType: $Enums.DocumentOwnerType;
    ownerId: string;
    title: string;
    fileUrl: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
    uploadedById: string;
    createdAt?: Date | string;
};
export type DocumentUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uploadedBy?: Prisma.UserUpdateOneRequiredWithoutUploadedDocumentsNestedInput;
};
export type DocumentUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentCreateManyUploadedByInput = {
    id?: string;
    schoolId: string;
    ownerType: $Enums.DocumentOwnerType;
    ownerId: string;
    title: string;
    fileUrl: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
    createdAt?: Date | string;
};
export type DocumentUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutDocumentsNestedInput;
};
export type DocumentUncheckedUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentUncheckedUpdateManyWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerType?: Prisma.EnumDocumentOwnerTypeFieldUpdateOperationsInput | $Enums.DocumentOwnerType;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    ownerType?: boolean;
    ownerId?: boolean;
    title?: boolean;
    fileUrl?: boolean;
    fileName?: boolean;
    mimeType?: boolean;
    fileSize?: boolean;
    uploadedById?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    ownerType?: boolean;
    ownerId?: boolean;
    title?: boolean;
    fileUrl?: boolean;
    fileName?: boolean;
    mimeType?: boolean;
    fileSize?: boolean;
    uploadedById?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    ownerType?: boolean;
    ownerId?: boolean;
    title?: boolean;
    fileUrl?: boolean;
    fileName?: boolean;
    mimeType?: boolean;
    fileSize?: boolean;
    uploadedById?: boolean;
    createdAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    ownerType?: boolean;
    ownerId?: boolean;
    title?: boolean;
    fileUrl?: boolean;
    fileName?: boolean;
    mimeType?: boolean;
    fileSize?: boolean;
    uploadedById?: boolean;
    createdAt?: boolean;
};
export type DocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "ownerType" | "ownerId" | "title" | "fileUrl" | "fileName" | "mimeType" | "fileSize" | "uploadedById" | "createdAt", ExtArgs["result"]["document"]>;
export type DocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type DocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $DocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Document";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        uploadedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        ownerType: $Enums.DocumentOwnerType;
        ownerId: string;
        title: string;
        fileUrl: string;
        fileName: string;
        mimeType: string;
        fileSize: number;
        uploadedById: string;
        createdAt: Date;
    }, ExtArgs["result"]["document"]>;
    composites: {};
};
export type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentPayload, S>;
export type DocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentCountAggregateInputType | true;
};
export interface DocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Document'];
        meta: {
            name: 'Document';
        };
    };
    findUnique<T extends DocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentCreateArgs>(args: Prisma.SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentDeleteArgs>(args: Prisma.SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentUpdateArgs>(args: Prisma.SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentUpsertArgs>(args: Prisma.SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentCountArgs>(args?: Prisma.Subset<T, DocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentCountAggregateOutputType> : number>;
    aggregate<T extends DocumentAggregateArgs>(args: Prisma.Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>;
    groupBy<T extends DocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentFieldRefs;
}
export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    uploadedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentFieldRefs {
    readonly id: Prisma.FieldRef<"Document", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Document", 'String'>;
    readonly ownerType: Prisma.FieldRef<"Document", 'DocumentOwnerType'>;
    readonly ownerId: Prisma.FieldRef<"Document", 'String'>;
    readonly title: Prisma.FieldRef<"Document", 'String'>;
    readonly fileUrl: Prisma.FieldRef<"Document", 'String'>;
    readonly fileName: Prisma.FieldRef<"Document", 'String'>;
    readonly mimeType: Prisma.FieldRef<"Document", 'String'>;
    readonly fileSize: Prisma.FieldRef<"Document", 'Int'>;
    readonly uploadedById: Prisma.FieldRef<"Document", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Document", 'DateTime'>;
}
export type DocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentCreateInput, Prisma.DocumentUncheckedCreateInput>;
};
export type DocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentCreateManyInput | Prisma.DocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    data: Prisma.DocumentCreateManyInput | Prisma.DocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentUpdateInput, Prisma.DocumentUncheckedUpdateInput>;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyInput>;
    where?: Prisma.DocumentWhereInput;
    limit?: number;
};
export type DocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyInput>;
    where?: Prisma.DocumentWhereInput;
    limit?: number;
    include?: Prisma.DocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateInput, Prisma.DocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentUpdateInput, Prisma.DocumentUncheckedUpdateInput>;
};
export type DocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    limit?: number;
};
export type DocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
};
