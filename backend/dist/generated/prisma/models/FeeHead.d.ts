import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FeeHeadModel = runtime.Types.Result.DefaultSelection<Prisma.$FeeHeadPayload>;
export type AggregateFeeHead = {
    _count: FeeHeadCountAggregateOutputType | null;
    _min: FeeHeadMinAggregateOutputType | null;
    _max: FeeHeadMaxAggregateOutputType | null;
};
export type FeeHeadMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FeeHeadMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FeeHeadCountAggregateOutputType = {
    id: number;
    schoolId: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FeeHeadMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FeeHeadMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FeeHeadCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FeeHeadAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeHeadWhereInput;
    orderBy?: Prisma.FeeHeadOrderByWithRelationInput | Prisma.FeeHeadOrderByWithRelationInput[];
    cursor?: Prisma.FeeHeadWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FeeHeadCountAggregateInputType;
    _min?: FeeHeadMinAggregateInputType;
    _max?: FeeHeadMaxAggregateInputType;
};
export type GetFeeHeadAggregateType<T extends FeeHeadAggregateArgs> = {
    [P in keyof T & keyof AggregateFeeHead]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFeeHead[P]> : Prisma.GetScalarType<T[P], AggregateFeeHead[P]>;
};
export type FeeHeadGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeHeadWhereInput;
    orderBy?: Prisma.FeeHeadOrderByWithAggregationInput | Prisma.FeeHeadOrderByWithAggregationInput[];
    by: Prisma.FeeHeadScalarFieldEnum[] | Prisma.FeeHeadScalarFieldEnum;
    having?: Prisma.FeeHeadScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeeHeadCountAggregateInputType | true;
    _min?: FeeHeadMinAggregateInputType;
    _max?: FeeHeadMaxAggregateInputType;
};
export type FeeHeadGroupByOutputType = {
    id: string;
    schoolId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FeeHeadCountAggregateOutputType | null;
    _min: FeeHeadMinAggregateOutputType | null;
    _max: FeeHeadMaxAggregateOutputType | null;
};
export type GetFeeHeadGroupByPayload<T extends FeeHeadGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeeHeadGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeeHeadGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeeHeadGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeeHeadGroupByOutputType[P]>;
}>>;
export type FeeHeadWhereInput = {
    AND?: Prisma.FeeHeadWhereInput | Prisma.FeeHeadWhereInput[];
    OR?: Prisma.FeeHeadWhereInput[];
    NOT?: Prisma.FeeHeadWhereInput | Prisma.FeeHeadWhereInput[];
    id?: Prisma.StringFilter<"FeeHead"> | string;
    schoolId?: Prisma.StringFilter<"FeeHead"> | string;
    name?: Prisma.StringFilter<"FeeHead"> | string;
    createdAt?: Prisma.DateTimeFilter<"FeeHead"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeeHead"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    feeStructures?: Prisma.FeeStructureListRelationFilter;
    invoiceItems?: Prisma.InvoiceItemListRelationFilter;
    discounts?: Prisma.StudentDiscountListRelationFilter;
};
export type FeeHeadOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    feeStructures?: Prisma.FeeStructureOrderByRelationAggregateInput;
    invoiceItems?: Prisma.InvoiceItemOrderByRelationAggregateInput;
    discounts?: Prisma.StudentDiscountOrderByRelationAggregateInput;
};
export type FeeHeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    schoolId_name?: Prisma.FeeHeadSchoolIdNameCompoundUniqueInput;
    AND?: Prisma.FeeHeadWhereInput | Prisma.FeeHeadWhereInput[];
    OR?: Prisma.FeeHeadWhereInput[];
    NOT?: Prisma.FeeHeadWhereInput | Prisma.FeeHeadWhereInput[];
    schoolId?: Prisma.StringFilter<"FeeHead"> | string;
    name?: Prisma.StringFilter<"FeeHead"> | string;
    createdAt?: Prisma.DateTimeFilter<"FeeHead"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeeHead"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    feeStructures?: Prisma.FeeStructureListRelationFilter;
    invoiceItems?: Prisma.InvoiceItemListRelationFilter;
    discounts?: Prisma.StudentDiscountListRelationFilter;
}, "id" | "schoolId_name">;
export type FeeHeadOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FeeHeadCountOrderByAggregateInput;
    _max?: Prisma.FeeHeadMaxOrderByAggregateInput;
    _min?: Prisma.FeeHeadMinOrderByAggregateInput;
};
export type FeeHeadScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeeHeadScalarWhereWithAggregatesInput | Prisma.FeeHeadScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeeHeadScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeeHeadScalarWhereWithAggregatesInput | Prisma.FeeHeadScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FeeHead"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"FeeHead"> | string;
    name?: Prisma.StringWithAggregatesFilter<"FeeHead"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FeeHead"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FeeHead"> | Date | string;
};
export type FeeHeadCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutFeeHeadsInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutFeeHeadInput;
    invoiceItems?: Prisma.InvoiceItemCreateNestedManyWithoutFeeHeadInput;
    discounts?: Prisma.StudentDiscountCreateNestedManyWithoutFeeHeadInput;
};
export type FeeHeadUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutFeeHeadInput;
    invoiceItems?: Prisma.InvoiceItemUncheckedCreateNestedManyWithoutFeeHeadInput;
    discounts?: Prisma.StudentDiscountUncheckedCreateNestedManyWithoutFeeHeadInput;
};
export type FeeHeadUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutFeeHeadsNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutFeeHeadNestedInput;
    invoiceItems?: Prisma.InvoiceItemUpdateManyWithoutFeeHeadNestedInput;
    discounts?: Prisma.StudentDiscountUpdateManyWithoutFeeHeadNestedInput;
};
export type FeeHeadUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutFeeHeadNestedInput;
    invoiceItems?: Prisma.InvoiceItemUncheckedUpdateManyWithoutFeeHeadNestedInput;
    discounts?: Prisma.StudentDiscountUncheckedUpdateManyWithoutFeeHeadNestedInput;
};
export type FeeHeadCreateManyInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeeHeadUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeHeadUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeHeadListRelationFilter = {
    every?: Prisma.FeeHeadWhereInput;
    some?: Prisma.FeeHeadWhereInput;
    none?: Prisma.FeeHeadWhereInput;
};
export type FeeHeadOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FeeHeadSchoolIdNameCompoundUniqueInput = {
    schoolId: string;
    name: string;
};
export type FeeHeadCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeeHeadMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeeHeadMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeeHeadScalarRelationFilter = {
    is?: Prisma.FeeHeadWhereInput;
    isNot?: Prisma.FeeHeadWhereInput;
};
export type FeeHeadNullableScalarRelationFilter = {
    is?: Prisma.FeeHeadWhereInput | null;
    isNot?: Prisma.FeeHeadWhereInput | null;
};
export type FeeHeadCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.FeeHeadCreateWithoutSchoolInput, Prisma.FeeHeadUncheckedCreateWithoutSchoolInput> | Prisma.FeeHeadCreateWithoutSchoolInput[] | Prisma.FeeHeadUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.FeeHeadCreateOrConnectWithoutSchoolInput | Prisma.FeeHeadCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.FeeHeadCreateManySchoolInputEnvelope;
    connect?: Prisma.FeeHeadWhereUniqueInput | Prisma.FeeHeadWhereUniqueInput[];
};
export type FeeHeadUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.FeeHeadCreateWithoutSchoolInput, Prisma.FeeHeadUncheckedCreateWithoutSchoolInput> | Prisma.FeeHeadCreateWithoutSchoolInput[] | Prisma.FeeHeadUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.FeeHeadCreateOrConnectWithoutSchoolInput | Prisma.FeeHeadCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.FeeHeadCreateManySchoolInputEnvelope;
    connect?: Prisma.FeeHeadWhereUniqueInput | Prisma.FeeHeadWhereUniqueInput[];
};
export type FeeHeadUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.FeeHeadCreateWithoutSchoolInput, Prisma.FeeHeadUncheckedCreateWithoutSchoolInput> | Prisma.FeeHeadCreateWithoutSchoolInput[] | Prisma.FeeHeadUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.FeeHeadCreateOrConnectWithoutSchoolInput | Prisma.FeeHeadCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.FeeHeadUpsertWithWhereUniqueWithoutSchoolInput | Prisma.FeeHeadUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.FeeHeadCreateManySchoolInputEnvelope;
    set?: Prisma.FeeHeadWhereUniqueInput | Prisma.FeeHeadWhereUniqueInput[];
    disconnect?: Prisma.FeeHeadWhereUniqueInput | Prisma.FeeHeadWhereUniqueInput[];
    delete?: Prisma.FeeHeadWhereUniqueInput | Prisma.FeeHeadWhereUniqueInput[];
    connect?: Prisma.FeeHeadWhereUniqueInput | Prisma.FeeHeadWhereUniqueInput[];
    update?: Prisma.FeeHeadUpdateWithWhereUniqueWithoutSchoolInput | Prisma.FeeHeadUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.FeeHeadUpdateManyWithWhereWithoutSchoolInput | Prisma.FeeHeadUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.FeeHeadScalarWhereInput | Prisma.FeeHeadScalarWhereInput[];
};
export type FeeHeadUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.FeeHeadCreateWithoutSchoolInput, Prisma.FeeHeadUncheckedCreateWithoutSchoolInput> | Prisma.FeeHeadCreateWithoutSchoolInput[] | Prisma.FeeHeadUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.FeeHeadCreateOrConnectWithoutSchoolInput | Prisma.FeeHeadCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.FeeHeadUpsertWithWhereUniqueWithoutSchoolInput | Prisma.FeeHeadUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.FeeHeadCreateManySchoolInputEnvelope;
    set?: Prisma.FeeHeadWhereUniqueInput | Prisma.FeeHeadWhereUniqueInput[];
    disconnect?: Prisma.FeeHeadWhereUniqueInput | Prisma.FeeHeadWhereUniqueInput[];
    delete?: Prisma.FeeHeadWhereUniqueInput | Prisma.FeeHeadWhereUniqueInput[];
    connect?: Prisma.FeeHeadWhereUniqueInput | Prisma.FeeHeadWhereUniqueInput[];
    update?: Prisma.FeeHeadUpdateWithWhereUniqueWithoutSchoolInput | Prisma.FeeHeadUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.FeeHeadUpdateManyWithWhereWithoutSchoolInput | Prisma.FeeHeadUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.FeeHeadScalarWhereInput | Prisma.FeeHeadScalarWhereInput[];
};
export type FeeHeadCreateNestedOneWithoutFeeStructuresInput = {
    create?: Prisma.XOR<Prisma.FeeHeadCreateWithoutFeeStructuresInput, Prisma.FeeHeadUncheckedCreateWithoutFeeStructuresInput>;
    connectOrCreate?: Prisma.FeeHeadCreateOrConnectWithoutFeeStructuresInput;
    connect?: Prisma.FeeHeadWhereUniqueInput;
};
export type FeeHeadUpdateOneRequiredWithoutFeeStructuresNestedInput = {
    create?: Prisma.XOR<Prisma.FeeHeadCreateWithoutFeeStructuresInput, Prisma.FeeHeadUncheckedCreateWithoutFeeStructuresInput>;
    connectOrCreate?: Prisma.FeeHeadCreateOrConnectWithoutFeeStructuresInput;
    upsert?: Prisma.FeeHeadUpsertWithoutFeeStructuresInput;
    connect?: Prisma.FeeHeadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeeHeadUpdateToOneWithWhereWithoutFeeStructuresInput, Prisma.FeeHeadUpdateWithoutFeeStructuresInput>, Prisma.FeeHeadUncheckedUpdateWithoutFeeStructuresInput>;
};
export type FeeHeadCreateNestedOneWithoutDiscountsInput = {
    create?: Prisma.XOR<Prisma.FeeHeadCreateWithoutDiscountsInput, Prisma.FeeHeadUncheckedCreateWithoutDiscountsInput>;
    connectOrCreate?: Prisma.FeeHeadCreateOrConnectWithoutDiscountsInput;
    connect?: Prisma.FeeHeadWhereUniqueInput;
};
export type FeeHeadUpdateOneWithoutDiscountsNestedInput = {
    create?: Prisma.XOR<Prisma.FeeHeadCreateWithoutDiscountsInput, Prisma.FeeHeadUncheckedCreateWithoutDiscountsInput>;
    connectOrCreate?: Prisma.FeeHeadCreateOrConnectWithoutDiscountsInput;
    upsert?: Prisma.FeeHeadUpsertWithoutDiscountsInput;
    disconnect?: Prisma.FeeHeadWhereInput | boolean;
    delete?: Prisma.FeeHeadWhereInput | boolean;
    connect?: Prisma.FeeHeadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeeHeadUpdateToOneWithWhereWithoutDiscountsInput, Prisma.FeeHeadUpdateWithoutDiscountsInput>, Prisma.FeeHeadUncheckedUpdateWithoutDiscountsInput>;
};
export type FeeHeadCreateNestedOneWithoutInvoiceItemsInput = {
    create?: Prisma.XOR<Prisma.FeeHeadCreateWithoutInvoiceItemsInput, Prisma.FeeHeadUncheckedCreateWithoutInvoiceItemsInput>;
    connectOrCreate?: Prisma.FeeHeadCreateOrConnectWithoutInvoiceItemsInput;
    connect?: Prisma.FeeHeadWhereUniqueInput;
};
export type FeeHeadUpdateOneRequiredWithoutInvoiceItemsNestedInput = {
    create?: Prisma.XOR<Prisma.FeeHeadCreateWithoutInvoiceItemsInput, Prisma.FeeHeadUncheckedCreateWithoutInvoiceItemsInput>;
    connectOrCreate?: Prisma.FeeHeadCreateOrConnectWithoutInvoiceItemsInput;
    upsert?: Prisma.FeeHeadUpsertWithoutInvoiceItemsInput;
    connect?: Prisma.FeeHeadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeeHeadUpdateToOneWithWhereWithoutInvoiceItemsInput, Prisma.FeeHeadUpdateWithoutInvoiceItemsInput>, Prisma.FeeHeadUncheckedUpdateWithoutInvoiceItemsInput>;
};
export type FeeHeadCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutFeeHeadInput;
    invoiceItems?: Prisma.InvoiceItemCreateNestedManyWithoutFeeHeadInput;
    discounts?: Prisma.StudentDiscountCreateNestedManyWithoutFeeHeadInput;
};
export type FeeHeadUncheckedCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutFeeHeadInput;
    invoiceItems?: Prisma.InvoiceItemUncheckedCreateNestedManyWithoutFeeHeadInput;
    discounts?: Prisma.StudentDiscountUncheckedCreateNestedManyWithoutFeeHeadInput;
};
export type FeeHeadCreateOrConnectWithoutSchoolInput = {
    where: Prisma.FeeHeadWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeHeadCreateWithoutSchoolInput, Prisma.FeeHeadUncheckedCreateWithoutSchoolInput>;
};
export type FeeHeadCreateManySchoolInputEnvelope = {
    data: Prisma.FeeHeadCreateManySchoolInput | Prisma.FeeHeadCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type FeeHeadUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.FeeHeadWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeeHeadUpdateWithoutSchoolInput, Prisma.FeeHeadUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.FeeHeadCreateWithoutSchoolInput, Prisma.FeeHeadUncheckedCreateWithoutSchoolInput>;
};
export type FeeHeadUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.FeeHeadWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeeHeadUpdateWithoutSchoolInput, Prisma.FeeHeadUncheckedUpdateWithoutSchoolInput>;
};
export type FeeHeadUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.FeeHeadScalarWhereInput;
    data: Prisma.XOR<Prisma.FeeHeadUpdateManyMutationInput, Prisma.FeeHeadUncheckedUpdateManyWithoutSchoolInput>;
};
export type FeeHeadScalarWhereInput = {
    AND?: Prisma.FeeHeadScalarWhereInput | Prisma.FeeHeadScalarWhereInput[];
    OR?: Prisma.FeeHeadScalarWhereInput[];
    NOT?: Prisma.FeeHeadScalarWhereInput | Prisma.FeeHeadScalarWhereInput[];
    id?: Prisma.StringFilter<"FeeHead"> | string;
    schoolId?: Prisma.StringFilter<"FeeHead"> | string;
    name?: Prisma.StringFilter<"FeeHead"> | string;
    createdAt?: Prisma.DateTimeFilter<"FeeHead"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeeHead"> | Date | string;
};
export type FeeHeadCreateWithoutFeeStructuresInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutFeeHeadsInput;
    invoiceItems?: Prisma.InvoiceItemCreateNestedManyWithoutFeeHeadInput;
    discounts?: Prisma.StudentDiscountCreateNestedManyWithoutFeeHeadInput;
};
export type FeeHeadUncheckedCreateWithoutFeeStructuresInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invoiceItems?: Prisma.InvoiceItemUncheckedCreateNestedManyWithoutFeeHeadInput;
    discounts?: Prisma.StudentDiscountUncheckedCreateNestedManyWithoutFeeHeadInput;
};
export type FeeHeadCreateOrConnectWithoutFeeStructuresInput = {
    where: Prisma.FeeHeadWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeHeadCreateWithoutFeeStructuresInput, Prisma.FeeHeadUncheckedCreateWithoutFeeStructuresInput>;
};
export type FeeHeadUpsertWithoutFeeStructuresInput = {
    update: Prisma.XOR<Prisma.FeeHeadUpdateWithoutFeeStructuresInput, Prisma.FeeHeadUncheckedUpdateWithoutFeeStructuresInput>;
    create: Prisma.XOR<Prisma.FeeHeadCreateWithoutFeeStructuresInput, Prisma.FeeHeadUncheckedCreateWithoutFeeStructuresInput>;
    where?: Prisma.FeeHeadWhereInput;
};
export type FeeHeadUpdateToOneWithWhereWithoutFeeStructuresInput = {
    where?: Prisma.FeeHeadWhereInput;
    data: Prisma.XOR<Prisma.FeeHeadUpdateWithoutFeeStructuresInput, Prisma.FeeHeadUncheckedUpdateWithoutFeeStructuresInput>;
};
export type FeeHeadUpdateWithoutFeeStructuresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutFeeHeadsNestedInput;
    invoiceItems?: Prisma.InvoiceItemUpdateManyWithoutFeeHeadNestedInput;
    discounts?: Prisma.StudentDiscountUpdateManyWithoutFeeHeadNestedInput;
};
export type FeeHeadUncheckedUpdateWithoutFeeStructuresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceItems?: Prisma.InvoiceItemUncheckedUpdateManyWithoutFeeHeadNestedInput;
    discounts?: Prisma.StudentDiscountUncheckedUpdateManyWithoutFeeHeadNestedInput;
};
export type FeeHeadCreateWithoutDiscountsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutFeeHeadsInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutFeeHeadInput;
    invoiceItems?: Prisma.InvoiceItemCreateNestedManyWithoutFeeHeadInput;
};
export type FeeHeadUncheckedCreateWithoutDiscountsInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutFeeHeadInput;
    invoiceItems?: Prisma.InvoiceItemUncheckedCreateNestedManyWithoutFeeHeadInput;
};
export type FeeHeadCreateOrConnectWithoutDiscountsInput = {
    where: Prisma.FeeHeadWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeHeadCreateWithoutDiscountsInput, Prisma.FeeHeadUncheckedCreateWithoutDiscountsInput>;
};
export type FeeHeadUpsertWithoutDiscountsInput = {
    update: Prisma.XOR<Prisma.FeeHeadUpdateWithoutDiscountsInput, Prisma.FeeHeadUncheckedUpdateWithoutDiscountsInput>;
    create: Prisma.XOR<Prisma.FeeHeadCreateWithoutDiscountsInput, Prisma.FeeHeadUncheckedCreateWithoutDiscountsInput>;
    where?: Prisma.FeeHeadWhereInput;
};
export type FeeHeadUpdateToOneWithWhereWithoutDiscountsInput = {
    where?: Prisma.FeeHeadWhereInput;
    data: Prisma.XOR<Prisma.FeeHeadUpdateWithoutDiscountsInput, Prisma.FeeHeadUncheckedUpdateWithoutDiscountsInput>;
};
export type FeeHeadUpdateWithoutDiscountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutFeeHeadsNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutFeeHeadNestedInput;
    invoiceItems?: Prisma.InvoiceItemUpdateManyWithoutFeeHeadNestedInput;
};
export type FeeHeadUncheckedUpdateWithoutDiscountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutFeeHeadNestedInput;
    invoiceItems?: Prisma.InvoiceItemUncheckedUpdateManyWithoutFeeHeadNestedInput;
};
export type FeeHeadCreateWithoutInvoiceItemsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutFeeHeadsInput;
    feeStructures?: Prisma.FeeStructureCreateNestedManyWithoutFeeHeadInput;
    discounts?: Prisma.StudentDiscountCreateNestedManyWithoutFeeHeadInput;
};
export type FeeHeadUncheckedCreateWithoutInvoiceItemsInput = {
    id?: string;
    schoolId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feeStructures?: Prisma.FeeStructureUncheckedCreateNestedManyWithoutFeeHeadInput;
    discounts?: Prisma.StudentDiscountUncheckedCreateNestedManyWithoutFeeHeadInput;
};
export type FeeHeadCreateOrConnectWithoutInvoiceItemsInput = {
    where: Prisma.FeeHeadWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeHeadCreateWithoutInvoiceItemsInput, Prisma.FeeHeadUncheckedCreateWithoutInvoiceItemsInput>;
};
export type FeeHeadUpsertWithoutInvoiceItemsInput = {
    update: Prisma.XOR<Prisma.FeeHeadUpdateWithoutInvoiceItemsInput, Prisma.FeeHeadUncheckedUpdateWithoutInvoiceItemsInput>;
    create: Prisma.XOR<Prisma.FeeHeadCreateWithoutInvoiceItemsInput, Prisma.FeeHeadUncheckedCreateWithoutInvoiceItemsInput>;
    where?: Prisma.FeeHeadWhereInput;
};
export type FeeHeadUpdateToOneWithWhereWithoutInvoiceItemsInput = {
    where?: Prisma.FeeHeadWhereInput;
    data: Prisma.XOR<Prisma.FeeHeadUpdateWithoutInvoiceItemsInput, Prisma.FeeHeadUncheckedUpdateWithoutInvoiceItemsInput>;
};
export type FeeHeadUpdateWithoutInvoiceItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutFeeHeadsNestedInput;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutFeeHeadNestedInput;
    discounts?: Prisma.StudentDiscountUpdateManyWithoutFeeHeadNestedInput;
};
export type FeeHeadUncheckedUpdateWithoutInvoiceItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutFeeHeadNestedInput;
    discounts?: Prisma.StudentDiscountUncheckedUpdateManyWithoutFeeHeadNestedInput;
};
export type FeeHeadCreateManySchoolInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeeHeadUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feeStructures?: Prisma.FeeStructureUpdateManyWithoutFeeHeadNestedInput;
    invoiceItems?: Prisma.InvoiceItemUpdateManyWithoutFeeHeadNestedInput;
    discounts?: Prisma.StudentDiscountUpdateManyWithoutFeeHeadNestedInput;
};
export type FeeHeadUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feeStructures?: Prisma.FeeStructureUncheckedUpdateManyWithoutFeeHeadNestedInput;
    invoiceItems?: Prisma.InvoiceItemUncheckedUpdateManyWithoutFeeHeadNestedInput;
    discounts?: Prisma.StudentDiscountUncheckedUpdateManyWithoutFeeHeadNestedInput;
};
export type FeeHeadUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeHeadCountOutputType = {
    feeStructures: number;
    invoiceItems: number;
    discounts: number;
};
export type FeeHeadCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    feeStructures?: boolean | FeeHeadCountOutputTypeCountFeeStructuresArgs;
    invoiceItems?: boolean | FeeHeadCountOutputTypeCountInvoiceItemsArgs;
    discounts?: boolean | FeeHeadCountOutputTypeCountDiscountsArgs;
};
export type FeeHeadCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadCountOutputTypeSelect<ExtArgs> | null;
};
export type FeeHeadCountOutputTypeCountFeeStructuresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeStructureWhereInput;
};
export type FeeHeadCountOutputTypeCountInvoiceItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceItemWhereInput;
};
export type FeeHeadCountOutputTypeCountDiscountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentDiscountWhereInput;
};
export type FeeHeadSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    feeStructures?: boolean | Prisma.FeeHead$feeStructuresArgs<ExtArgs>;
    invoiceItems?: boolean | Prisma.FeeHead$invoiceItemsArgs<ExtArgs>;
    discounts?: boolean | Prisma.FeeHead$discountsArgs<ExtArgs>;
    _count?: boolean | Prisma.FeeHeadCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feeHead"]>;
export type FeeHeadSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feeHead"]>;
export type FeeHeadSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feeHead"]>;
export type FeeHeadSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FeeHeadOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["feeHead"]>;
export type FeeHeadInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    feeStructures?: boolean | Prisma.FeeHead$feeStructuresArgs<ExtArgs>;
    invoiceItems?: boolean | Prisma.FeeHead$invoiceItemsArgs<ExtArgs>;
    discounts?: boolean | Prisma.FeeHead$discountsArgs<ExtArgs>;
    _count?: boolean | Prisma.FeeHeadCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FeeHeadIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type FeeHeadIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type $FeeHeadPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FeeHead";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        feeStructures: Prisma.$FeeStructurePayload<ExtArgs>[];
        invoiceItems: Prisma.$InvoiceItemPayload<ExtArgs>[];
        discounts: Prisma.$StudentDiscountPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["feeHead"]>;
    composites: {};
};
export type FeeHeadGetPayload<S extends boolean | null | undefined | FeeHeadDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload, S>;
export type FeeHeadCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeeHeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeeHeadCountAggregateInputType | true;
};
export interface FeeHeadDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FeeHead'];
        meta: {
            name: 'FeeHead';
        };
    };
    findUnique<T extends FeeHeadFindUniqueArgs>(args: Prisma.SelectSubset<T, FeeHeadFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeeHeadClient<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FeeHeadFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeeHeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeeHeadClient<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FeeHeadFindFirstArgs>(args?: Prisma.SelectSubset<T, FeeHeadFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeeHeadClient<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FeeHeadFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeeHeadFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeeHeadClient<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FeeHeadFindManyArgs>(args?: Prisma.SelectSubset<T, FeeHeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FeeHeadCreateArgs>(args: Prisma.SelectSubset<T, FeeHeadCreateArgs<ExtArgs>>): Prisma.Prisma__FeeHeadClient<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FeeHeadCreateManyArgs>(args?: Prisma.SelectSubset<T, FeeHeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FeeHeadCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FeeHeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FeeHeadDeleteArgs>(args: Prisma.SelectSubset<T, FeeHeadDeleteArgs<ExtArgs>>): Prisma.Prisma__FeeHeadClient<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FeeHeadUpdateArgs>(args: Prisma.SelectSubset<T, FeeHeadUpdateArgs<ExtArgs>>): Prisma.Prisma__FeeHeadClient<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FeeHeadDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeeHeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FeeHeadUpdateManyArgs>(args: Prisma.SelectSubset<T, FeeHeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FeeHeadUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FeeHeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FeeHeadUpsertArgs>(args: Prisma.SelectSubset<T, FeeHeadUpsertArgs<ExtArgs>>): Prisma.Prisma__FeeHeadClient<runtime.Types.Result.GetResult<Prisma.$FeeHeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FeeHeadCountArgs>(args?: Prisma.Subset<T, FeeHeadCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeeHeadCountAggregateOutputType> : number>;
    aggregate<T extends FeeHeadAggregateArgs>(args: Prisma.Subset<T, FeeHeadAggregateArgs>): Prisma.PrismaPromise<GetFeeHeadAggregateType<T>>;
    groupBy<T extends FeeHeadGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeeHeadGroupByArgs['orderBy'];
    } : {
        orderBy?: FeeHeadGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeeHeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeHeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FeeHeadFieldRefs;
}
export interface Prisma__FeeHeadClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    feeStructures<T extends Prisma.FeeHead$feeStructuresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeeHead$feeStructuresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoiceItems<T extends Prisma.FeeHead$invoiceItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeeHead$invoiceItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    discounts<T extends Prisma.FeeHead$discountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeeHead$discountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentDiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FeeHeadFieldRefs {
    readonly id: Prisma.FieldRef<"FeeHead", 'String'>;
    readonly schoolId: Prisma.FieldRef<"FeeHead", 'String'>;
    readonly name: Prisma.FieldRef<"FeeHead", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FeeHead", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FeeHead", 'DateTime'>;
}
export type FeeHeadFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelect<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    include?: Prisma.FeeHeadInclude<ExtArgs> | null;
    where: Prisma.FeeHeadWhereUniqueInput;
};
export type FeeHeadFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelect<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    include?: Prisma.FeeHeadInclude<ExtArgs> | null;
    where: Prisma.FeeHeadWhereUniqueInput;
};
export type FeeHeadFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelect<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    include?: Prisma.FeeHeadInclude<ExtArgs> | null;
    where?: Prisma.FeeHeadWhereInput;
    orderBy?: Prisma.FeeHeadOrderByWithRelationInput | Prisma.FeeHeadOrderByWithRelationInput[];
    cursor?: Prisma.FeeHeadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeHeadScalarFieldEnum | Prisma.FeeHeadScalarFieldEnum[];
};
export type FeeHeadFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelect<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    include?: Prisma.FeeHeadInclude<ExtArgs> | null;
    where?: Prisma.FeeHeadWhereInput;
    orderBy?: Prisma.FeeHeadOrderByWithRelationInput | Prisma.FeeHeadOrderByWithRelationInput[];
    cursor?: Prisma.FeeHeadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeHeadScalarFieldEnum | Prisma.FeeHeadScalarFieldEnum[];
};
export type FeeHeadFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelect<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    include?: Prisma.FeeHeadInclude<ExtArgs> | null;
    where?: Prisma.FeeHeadWhereInput;
    orderBy?: Prisma.FeeHeadOrderByWithRelationInput | Prisma.FeeHeadOrderByWithRelationInput[];
    cursor?: Prisma.FeeHeadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeHeadScalarFieldEnum | Prisma.FeeHeadScalarFieldEnum[];
};
export type FeeHeadCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelect<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    include?: Prisma.FeeHeadInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeHeadCreateInput, Prisma.FeeHeadUncheckedCreateInput>;
};
export type FeeHeadCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FeeHeadCreateManyInput | Prisma.FeeHeadCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FeeHeadCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    data: Prisma.FeeHeadCreateManyInput | Prisma.FeeHeadCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FeeHeadIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FeeHeadUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelect<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    include?: Prisma.FeeHeadInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeHeadUpdateInput, Prisma.FeeHeadUncheckedUpdateInput>;
    where: Prisma.FeeHeadWhereUniqueInput;
};
export type FeeHeadUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FeeHeadUpdateManyMutationInput, Prisma.FeeHeadUncheckedUpdateManyInput>;
    where?: Prisma.FeeHeadWhereInput;
    limit?: number;
};
export type FeeHeadUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeHeadUpdateManyMutationInput, Prisma.FeeHeadUncheckedUpdateManyInput>;
    where?: Prisma.FeeHeadWhereInput;
    limit?: number;
    include?: Prisma.FeeHeadIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FeeHeadUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelect<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    include?: Prisma.FeeHeadInclude<ExtArgs> | null;
    where: Prisma.FeeHeadWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeHeadCreateInput, Prisma.FeeHeadUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FeeHeadUpdateInput, Prisma.FeeHeadUncheckedUpdateInput>;
};
export type FeeHeadDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelect<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    include?: Prisma.FeeHeadInclude<ExtArgs> | null;
    where: Prisma.FeeHeadWhereUniqueInput;
};
export type FeeHeadDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeHeadWhereInput;
    limit?: number;
};
export type FeeHead$feeStructuresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FeeHead$invoiceItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceItemSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceItemOmit<ExtArgs> | null;
    include?: Prisma.InvoiceItemInclude<ExtArgs> | null;
    where?: Prisma.InvoiceItemWhereInput;
    orderBy?: Prisma.InvoiceItemOrderByWithRelationInput | Prisma.InvoiceItemOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceItemScalarFieldEnum | Prisma.InvoiceItemScalarFieldEnum[];
};
export type FeeHead$discountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentDiscountSelect<ExtArgs> | null;
    omit?: Prisma.StudentDiscountOmit<ExtArgs> | null;
    include?: Prisma.StudentDiscountInclude<ExtArgs> | null;
    where?: Prisma.StudentDiscountWhereInput;
    orderBy?: Prisma.StudentDiscountOrderByWithRelationInput | Prisma.StudentDiscountOrderByWithRelationInput[];
    cursor?: Prisma.StudentDiscountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentDiscountScalarFieldEnum | Prisma.StudentDiscountScalarFieldEnum[];
};
export type FeeHeadDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeHeadSelect<ExtArgs> | null;
    omit?: Prisma.FeeHeadOmit<ExtArgs> | null;
    include?: Prisma.FeeHeadInclude<ExtArgs> | null;
};
