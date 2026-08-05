import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentPayload>;
export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
export type PaymentAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    invoiceId: string | null;
    amount: runtime.Decimal | null;
    method: $Enums.PaymentMethod | null;
    reference: string | null;
    paidAt: Date | null;
    recordedById: string | null;
    createdAt: Date | null;
    deletedAt: Date | null;
};
export type PaymentMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    invoiceId: string | null;
    amount: runtime.Decimal | null;
    method: $Enums.PaymentMethod | null;
    reference: string | null;
    paidAt: Date | null;
    recordedById: string | null;
    createdAt: Date | null;
    deletedAt: Date | null;
};
export type PaymentCountAggregateOutputType = {
    id: number;
    schoolId: number;
    invoiceId: number;
    amount: number;
    method: number;
    reference: number;
    paidAt: number;
    recordedById: number;
    createdAt: number;
    deletedAt: number;
    _all: number;
};
export type PaymentAvgAggregateInputType = {
    amount?: true;
};
export type PaymentSumAggregateInputType = {
    amount?: true;
};
export type PaymentMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    invoiceId?: true;
    amount?: true;
    method?: true;
    reference?: true;
    paidAt?: true;
    recordedById?: true;
    createdAt?: true;
    deletedAt?: true;
};
export type PaymentMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    invoiceId?: true;
    amount?: true;
    method?: true;
    reference?: true;
    paidAt?: true;
    recordedById?: true;
    createdAt?: true;
    deletedAt?: true;
};
export type PaymentCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    invoiceId?: true;
    amount?: true;
    method?: true;
    reference?: true;
    paidAt?: true;
    recordedById?: true;
    createdAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type PaymentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentCountAggregateInputType;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayment[P]> : Prisma.GetScalarType<T[P], AggregatePayment[P]>;
};
export type PaymentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithAggregationInput | Prisma.PaymentOrderByWithAggregationInput[];
    by: Prisma.PaymentScalarFieldEnum[] | Prisma.PaymentScalarFieldEnum;
    having?: Prisma.PaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type PaymentGroupByOutputType = {
    id: string;
    schoolId: string;
    invoiceId: string;
    amount: runtime.Decimal;
    method: $Enums.PaymentMethod;
    reference: string | null;
    paidAt: Date;
    recordedById: string;
    createdAt: Date;
    deletedAt: Date | null;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
export type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]>;
}>>;
export type PaymentWhereInput = {
    AND?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    OR?: Prisma.PaymentWhereInput[];
    NOT?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    id?: Prisma.StringFilter<"Payment"> | string;
    schoolId?: Prisma.StringFilter<"Payment"> | string;
    invoiceId?: Prisma.StringFilter<"Payment"> | string;
    amount?: Prisma.DecimalFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod;
    reference?: Prisma.StringNullableFilter<"Payment"> | string | null;
    paidAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    recordedById?: Prisma.StringFilter<"Payment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    invoice?: Prisma.XOR<Prisma.InvoiceScalarRelationFilter, Prisma.InvoiceWhereInput>;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type PaymentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    reference?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    invoice?: Prisma.InvoiceOrderByWithRelationInput;
    recordedBy?: Prisma.UserOrderByWithRelationInput;
};
export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    OR?: Prisma.PaymentWhereInput[];
    NOT?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    schoolId?: Prisma.StringFilter<"Payment"> | string;
    invoiceId?: Prisma.StringFilter<"Payment"> | string;
    amount?: Prisma.DecimalFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod;
    reference?: Prisma.StringNullableFilter<"Payment"> | string | null;
    paidAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    recordedById?: Prisma.StringFilter<"Payment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    invoice?: Prisma.XOR<Prisma.InvoiceScalarRelationFilter, Prisma.InvoiceWhereInput>;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type PaymentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    reference?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PaymentCountOrderByAggregateInput;
    _avg?: Prisma.PaymentAvgOrderByAggregateInput;
    _max?: Prisma.PaymentMaxOrderByAggregateInput;
    _min?: Prisma.PaymentMinOrderByAggregateInput;
    _sum?: Prisma.PaymentSumOrderByAggregateInput;
};
export type PaymentScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentScalarWhereWithAggregatesInput | Prisma.PaymentScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentScalarWhereWithAggregatesInput | Prisma.PaymentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    invoiceId?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod;
    reference?: Prisma.StringNullableWithAggregatesFilter<"Payment"> | string | null;
    paidAt?: Prisma.DateTimeWithAggregatesFilter<"Payment"> | Date | string;
    recordedById?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Payment"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null;
};
export type PaymentCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.PaymentMethod;
    reference?: string | null;
    paidAt?: Date | string;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    school: Prisma.SchoolCreateNestedOneWithoutPaymentsInput;
    invoice: Prisma.InvoiceCreateNestedOneWithoutPaymentsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutRecordedPaymentsInput;
};
export type PaymentUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    invoiceId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.PaymentMethod;
    reference?: string | null;
    paidAt?: Date | string;
    recordedById: string;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PaymentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school?: Prisma.SchoolUpdateOneRequiredWithoutPaymentsNestedInput;
    invoice?: Prisma.InvoiceUpdateOneRequiredWithoutPaymentsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutRecordedPaymentsNestedInput;
};
export type PaymentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentCreateManyInput = {
    id?: string;
    schoolId: string;
    invoiceId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.PaymentMethod;
    reference?: string | null;
    paidAt?: Date | string;
    recordedById: string;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PaymentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentListRelationFilter = {
    every?: Prisma.PaymentWhereInput;
    some?: Prisma.PaymentWhereInput;
    none?: Prisma.PaymentWhereInput;
};
export type PaymentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type PaymentAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type PaymentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type PaymentSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutSchoolInput, Prisma.PaymentUncheckedCreateWithoutSchoolInput> | Prisma.PaymentCreateWithoutSchoolInput[] | Prisma.PaymentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutSchoolInput | Prisma.PaymentCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.PaymentCreateManySchoolInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutSchoolInput, Prisma.PaymentUncheckedCreateWithoutSchoolInput> | Prisma.PaymentCreateWithoutSchoolInput[] | Prisma.PaymentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutSchoolInput | Prisma.PaymentCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.PaymentCreateManySchoolInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutSchoolInput, Prisma.PaymentUncheckedCreateWithoutSchoolInput> | Prisma.PaymentCreateWithoutSchoolInput[] | Prisma.PaymentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutSchoolInput | Prisma.PaymentCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutSchoolInput | Prisma.PaymentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.PaymentCreateManySchoolInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutSchoolInput | Prisma.PaymentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutSchoolInput | Prisma.PaymentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutSchoolInput, Prisma.PaymentUncheckedCreateWithoutSchoolInput> | Prisma.PaymentCreateWithoutSchoolInput[] | Prisma.PaymentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutSchoolInput | Prisma.PaymentCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutSchoolInput | Prisma.PaymentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.PaymentCreateManySchoolInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutSchoolInput | Prisma.PaymentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutSchoolInput | Prisma.PaymentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutRecordedByInput, Prisma.PaymentUncheckedCreateWithoutRecordedByInput> | Prisma.PaymentCreateWithoutRecordedByInput[] | Prisma.PaymentUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutRecordedByInput | Prisma.PaymentCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.PaymentCreateManyRecordedByInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUncheckedCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutRecordedByInput, Prisma.PaymentUncheckedCreateWithoutRecordedByInput> | Prisma.PaymentCreateWithoutRecordedByInput[] | Prisma.PaymentUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutRecordedByInput | Prisma.PaymentCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.PaymentCreateManyRecordedByInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutRecordedByInput, Prisma.PaymentUncheckedCreateWithoutRecordedByInput> | Prisma.PaymentCreateWithoutRecordedByInput[] | Prisma.PaymentUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutRecordedByInput | Prisma.PaymentCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.PaymentUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.PaymentCreateManyRecordedByInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.PaymentUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutRecordedByInput | Prisma.PaymentUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentUncheckedUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutRecordedByInput, Prisma.PaymentUncheckedCreateWithoutRecordedByInput> | Prisma.PaymentCreateWithoutRecordedByInput[] | Prisma.PaymentUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutRecordedByInput | Prisma.PaymentCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.PaymentUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.PaymentCreateManyRecordedByInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.PaymentUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutRecordedByInput | Prisma.PaymentUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentCreateNestedManyWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput> | Prisma.PaymentCreateWithoutInvoiceInput[] | Prisma.PaymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutInvoiceInput | Prisma.PaymentCreateOrConnectWithoutInvoiceInput[];
    createMany?: Prisma.PaymentCreateManyInvoiceInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput> | Prisma.PaymentCreateWithoutInvoiceInput[] | Prisma.PaymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutInvoiceInput | Prisma.PaymentCreateOrConnectWithoutInvoiceInput[];
    createMany?: Prisma.PaymentCreateManyInvoiceInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUpdateManyWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput> | Prisma.PaymentCreateWithoutInvoiceInput[] | Prisma.PaymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutInvoiceInput | Prisma.PaymentCreateOrConnectWithoutInvoiceInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutInvoiceInput | Prisma.PaymentUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: Prisma.PaymentCreateManyInvoiceInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutInvoiceInput | Prisma.PaymentUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutInvoiceInput | Prisma.PaymentUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput> | Prisma.PaymentCreateWithoutInvoiceInput[] | Prisma.PaymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutInvoiceInput | Prisma.PaymentCreateOrConnectWithoutInvoiceInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutInvoiceInput | Prisma.PaymentUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: Prisma.PaymentCreateManyInvoiceInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutInvoiceInput | Prisma.PaymentUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutInvoiceInput | Prisma.PaymentUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod;
};
export type PaymentCreateWithoutSchoolInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.PaymentMethod;
    reference?: string | null;
    paidAt?: Date | string;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    invoice: Prisma.InvoiceCreateNestedOneWithoutPaymentsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutRecordedPaymentsInput;
};
export type PaymentUncheckedCreateWithoutSchoolInput = {
    id?: string;
    invoiceId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.PaymentMethod;
    reference?: string | null;
    paidAt?: Date | string;
    recordedById: string;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PaymentCreateOrConnectWithoutSchoolInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutSchoolInput, Prisma.PaymentUncheckedCreateWithoutSchoolInput>;
};
export type PaymentCreateManySchoolInputEnvelope = {
    data: Prisma.PaymentCreateManySchoolInput | Prisma.PaymentCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type PaymentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.PaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutSchoolInput, Prisma.PaymentUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutSchoolInput, Prisma.PaymentUncheckedCreateWithoutSchoolInput>;
};
export type PaymentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.PaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutSchoolInput, Prisma.PaymentUncheckedUpdateWithoutSchoolInput>;
};
export type PaymentUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.PaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyWithoutSchoolInput>;
};
export type PaymentScalarWhereInput = {
    AND?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
    OR?: Prisma.PaymentScalarWhereInput[];
    NOT?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
    id?: Prisma.StringFilter<"Payment"> | string;
    schoolId?: Prisma.StringFilter<"Payment"> | string;
    invoiceId?: Prisma.StringFilter<"Payment"> | string;
    amount?: Prisma.DecimalFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod;
    reference?: Prisma.StringNullableFilter<"Payment"> | string | null;
    paidAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    recordedById?: Prisma.StringFilter<"Payment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
};
export type PaymentCreateWithoutRecordedByInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.PaymentMethod;
    reference?: string | null;
    paidAt?: Date | string;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    school: Prisma.SchoolCreateNestedOneWithoutPaymentsInput;
    invoice: Prisma.InvoiceCreateNestedOneWithoutPaymentsInput;
};
export type PaymentUncheckedCreateWithoutRecordedByInput = {
    id?: string;
    schoolId: string;
    invoiceId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.PaymentMethod;
    reference?: string | null;
    paidAt?: Date | string;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PaymentCreateOrConnectWithoutRecordedByInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutRecordedByInput, Prisma.PaymentUncheckedCreateWithoutRecordedByInput>;
};
export type PaymentCreateManyRecordedByInputEnvelope = {
    data: Prisma.PaymentCreateManyRecordedByInput | Prisma.PaymentCreateManyRecordedByInput[];
    skipDuplicates?: boolean;
};
export type PaymentUpsertWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.PaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutRecordedByInput, Prisma.PaymentUncheckedUpdateWithoutRecordedByInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutRecordedByInput, Prisma.PaymentUncheckedCreateWithoutRecordedByInput>;
};
export type PaymentUpdateWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.PaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutRecordedByInput, Prisma.PaymentUncheckedUpdateWithoutRecordedByInput>;
};
export type PaymentUpdateManyWithWhereWithoutRecordedByInput = {
    where: Prisma.PaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyWithoutRecordedByInput>;
};
export type PaymentCreateWithoutInvoiceInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.PaymentMethod;
    reference?: string | null;
    paidAt?: Date | string;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
    school: Prisma.SchoolCreateNestedOneWithoutPaymentsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutRecordedPaymentsInput;
};
export type PaymentUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    schoolId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.PaymentMethod;
    reference?: string | null;
    paidAt?: Date | string;
    recordedById: string;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PaymentCreateOrConnectWithoutInvoiceInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput>;
};
export type PaymentCreateManyInvoiceInputEnvelope = {
    data: Prisma.PaymentCreateManyInvoiceInput | Prisma.PaymentCreateManyInvoiceInput[];
    skipDuplicates?: boolean;
};
export type PaymentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: Prisma.PaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutInvoiceInput, Prisma.PaymentUncheckedUpdateWithoutInvoiceInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput>;
};
export type PaymentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: Prisma.PaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutInvoiceInput, Prisma.PaymentUncheckedUpdateWithoutInvoiceInput>;
};
export type PaymentUpdateManyWithWhereWithoutInvoiceInput = {
    where: Prisma.PaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyWithoutInvoiceInput>;
};
export type PaymentCreateManySchoolInput = {
    id?: string;
    invoiceId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.PaymentMethod;
    reference?: string | null;
    paidAt?: Date | string;
    recordedById: string;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PaymentUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invoice?: Prisma.InvoiceUpdateOneRequiredWithoutPaymentsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutRecordedPaymentsNestedInput;
};
export type PaymentUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentCreateManyRecordedByInput = {
    id?: string;
    schoolId: string;
    invoiceId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.PaymentMethod;
    reference?: string | null;
    paidAt?: Date | string;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PaymentUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school?: Prisma.SchoolUpdateOneRequiredWithoutPaymentsNestedInput;
    invoice?: Prisma.InvoiceUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type PaymentUncheckedUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentUncheckedUpdateManyWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentCreateManyInvoiceInput = {
    id?: string;
    schoolId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    method: $Enums.PaymentMethod;
    reference?: string | null;
    paidAt?: Date | string;
    recordedById: string;
    createdAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PaymentUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school?: Prisma.SchoolUpdateOneRequiredWithoutPaymentsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutRecordedPaymentsNestedInput;
};
export type PaymentUncheckedUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentUncheckedUpdateManyWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    method?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    invoiceId?: boolean;
    amount?: boolean;
    method?: boolean;
    reference?: boolean;
    paidAt?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    deletedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    invoiceId?: boolean;
    amount?: boolean;
    method?: boolean;
    reference?: boolean;
    paidAt?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    deletedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    invoiceId?: boolean;
    amount?: boolean;
    method?: boolean;
    reference?: boolean;
    paidAt?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    deletedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    invoiceId?: boolean;
    amount?: boolean;
    method?: boolean;
    reference?: boolean;
    paidAt?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    deletedAt?: boolean;
};
export type PaymentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "invoiceId" | "amount" | "method" | "reference" | "paidAt" | "recordedById" | "createdAt" | "deletedAt", ExtArgs["result"]["payment"]>;
export type PaymentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PaymentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PaymentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Payment";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        invoice: Prisma.$InvoicePayload<ExtArgs>;
        recordedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        invoiceId: string;
        amount: runtime.Decimal;
        method: $Enums.PaymentMethod;
        reference: string | null;
        paidAt: Date;
        recordedById: string;
        createdAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["payment"]>;
    composites: {};
};
export type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentPayload, S>;
export type PaymentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentCountAggregateInputType | true;
};
export interface PaymentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Payment'];
        meta: {
            name: 'Payment';
        };
    };
    findUnique<T extends PaymentFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentCreateArgs>(args: Prisma.SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentDeleteArgs>(args: Prisma.SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentUpdateArgs>(args: Prisma.SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentUpsertArgs>(args: Prisma.SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentCountArgs>(args?: Prisma.Subset<T, PaymentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentCountAggregateOutputType> : number>;
    aggregate<T extends PaymentAggregateArgs>(args: Prisma.Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;
    groupBy<T extends PaymentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentFieldRefs;
}
export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invoice<T extends Prisma.InvoiceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvoiceDefaultArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    recordedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentFieldRefs {
    readonly id: Prisma.FieldRef<"Payment", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Payment", 'String'>;
    readonly invoiceId: Prisma.FieldRef<"Payment", 'String'>;
    readonly amount: Prisma.FieldRef<"Payment", 'Decimal'>;
    readonly method: Prisma.FieldRef<"Payment", 'PaymentMethod'>;
    readonly reference: Prisma.FieldRef<"Payment", 'String'>;
    readonly paidAt: Prisma.FieldRef<"Payment", 'DateTime'>;
    readonly recordedById: Prisma.FieldRef<"Payment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Payment", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Payment", 'DateTime'>;
}
export type PaymentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentCreateInput, Prisma.PaymentUncheckedCreateInput>;
};
export type PaymentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentCreateManyInput | Prisma.PaymentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    data: Prisma.PaymentCreateManyInput | Prisma.PaymentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentUpdateInput, Prisma.PaymentUncheckedUpdateInput>;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyInput>;
    where?: Prisma.PaymentWhereInput;
    limit?: number;
};
export type PaymentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyInput>;
    where?: Prisma.PaymentWhereInput;
    limit?: number;
    include?: Prisma.PaymentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateInput, Prisma.PaymentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentUpdateInput, Prisma.PaymentUncheckedUpdateInput>;
};
export type PaymentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    limit?: number;
};
export type PaymentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
};
