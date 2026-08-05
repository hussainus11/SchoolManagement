import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BookModel = runtime.Types.Result.DefaultSelection<Prisma.$BookPayload>;
export type AggregateBook = {
    _count: BookCountAggregateOutputType | null;
    _avg: BookAvgAggregateOutputType | null;
    _sum: BookSumAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
};
export type BookAvgAggregateOutputType = {
    totalCopies: number | null;
    availableCopies: number | null;
};
export type BookSumAggregateOutputType = {
    totalCopies: number | null;
    availableCopies: number | null;
};
export type BookMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    title: string | null;
    author: string | null;
    isbn: string | null;
    category: string | null;
    totalCopies: number | null;
    availableCopies: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BookMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    title: string | null;
    author: string | null;
    isbn: string | null;
    category: string | null;
    totalCopies: number | null;
    availableCopies: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BookCountAggregateOutputType = {
    id: number;
    schoolId: number;
    title: number;
    author: number;
    isbn: number;
    category: number;
    totalCopies: number;
    availableCopies: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BookAvgAggregateInputType = {
    totalCopies?: true;
    availableCopies?: true;
};
export type BookSumAggregateInputType = {
    totalCopies?: true;
    availableCopies?: true;
};
export type BookMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    title?: true;
    author?: true;
    isbn?: true;
    category?: true;
    totalCopies?: true;
    availableCopies?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BookMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    title?: true;
    author?: true;
    isbn?: true;
    category?: true;
    totalCopies?: true;
    availableCopies?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BookCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    title?: true;
    author?: true;
    isbn?: true;
    category?: true;
    totalCopies?: true;
    availableCopies?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BookAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BookCountAggregateInputType;
    _avg?: BookAvgAggregateInputType;
    _sum?: BookSumAggregateInputType;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
};
export type GetBookAggregateType<T extends BookAggregateArgs> = {
    [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBook[P]> : Prisma.GetScalarType<T[P], AggregateBook[P]>;
};
export type BookGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithAggregationInput | Prisma.BookOrderByWithAggregationInput[];
    by: Prisma.BookScalarFieldEnum[] | Prisma.BookScalarFieldEnum;
    having?: Prisma.BookScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookCountAggregateInputType | true;
    _avg?: BookAvgAggregateInputType;
    _sum?: BookSumAggregateInputType;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
};
export type BookGroupByOutputType = {
    id: string;
    schoolId: string;
    title: string;
    author: string | null;
    isbn: string | null;
    category: string | null;
    totalCopies: number;
    availableCopies: number;
    createdAt: Date;
    updatedAt: Date;
    _count: BookCountAggregateOutputType | null;
    _avg: BookAvgAggregateOutputType | null;
    _sum: BookSumAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
};
export type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookGroupByOutputType[P]>;
}>>;
export type BookWhereInput = {
    AND?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    OR?: Prisma.BookWhereInput[];
    NOT?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    id?: Prisma.StringFilter<"Book"> | string;
    schoolId?: Prisma.StringFilter<"Book"> | string;
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringNullableFilter<"Book"> | string | null;
    isbn?: Prisma.StringNullableFilter<"Book"> | string | null;
    category?: Prisma.StringNullableFilter<"Book"> | string | null;
    totalCopies?: Prisma.IntFilter<"Book"> | number;
    availableCopies?: Prisma.IntFilter<"Book"> | number;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    issues?: Prisma.BookIssueListRelationFilter;
};
export type BookOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrderInput | Prisma.SortOrder;
    isbn?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    issues?: Prisma.BookIssueOrderByRelationAggregateInput;
};
export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    OR?: Prisma.BookWhereInput[];
    NOT?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    schoolId?: Prisma.StringFilter<"Book"> | string;
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringNullableFilter<"Book"> | string | null;
    isbn?: Prisma.StringNullableFilter<"Book"> | string | null;
    category?: Prisma.StringNullableFilter<"Book"> | string | null;
    totalCopies?: Prisma.IntFilter<"Book"> | number;
    availableCopies?: Prisma.IntFilter<"Book"> | number;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    issues?: Prisma.BookIssueListRelationFilter;
}, "id">;
export type BookOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrderInput | Prisma.SortOrder;
    isbn?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BookCountOrderByAggregateInput;
    _avg?: Prisma.BookAvgOrderByAggregateInput;
    _max?: Prisma.BookMaxOrderByAggregateInput;
    _min?: Prisma.BookMinOrderByAggregateInput;
    _sum?: Prisma.BookSumOrderByAggregateInput;
};
export type BookScalarWhereWithAggregatesInput = {
    AND?: Prisma.BookScalarWhereWithAggregatesInput | Prisma.BookScalarWhereWithAggregatesInput[];
    OR?: Prisma.BookScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BookScalarWhereWithAggregatesInput | Prisma.BookScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    author?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    isbn?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    category?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    totalCopies?: Prisma.IntWithAggregatesFilter<"Book"> | number;
    availableCopies?: Prisma.IntWithAggregatesFilter<"Book"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Book"> | Date | string;
};
export type BookCreateInput = {
    id?: string;
    title: string;
    author?: string | null;
    isbn?: string | null;
    category?: string | null;
    totalCopies?: number;
    availableCopies?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutBooksInput;
    issues?: Prisma.BookIssueCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    title: string;
    author?: string | null;
    isbn?: string | null;
    category?: string | null;
    totalCopies?: number;
    availableCopies?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    issues?: Prisma.BookIssueUncheckedCreateNestedManyWithoutBookInput;
};
export type BookUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutBooksNestedInput;
    issues?: Prisma.BookIssueUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issues?: Prisma.BookIssueUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookCreateManyInput = {
    id?: string;
    schoolId: string;
    title: string;
    author?: string | null;
    isbn?: string | null;
    category?: string | null;
    totalCopies?: number;
    availableCopies?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookListRelationFilter = {
    every?: Prisma.BookWhereInput;
    some?: Prisma.BookWhereInput;
    none?: Prisma.BookWhereInput;
};
export type BookOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BookCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookAvgOrderByAggregateInput = {
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
};
export type BookMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookSumOrderByAggregateInput = {
    totalCopies?: Prisma.SortOrder;
    availableCopies?: Prisma.SortOrder;
};
export type BookScalarRelationFilter = {
    is?: Prisma.BookWhereInput;
    isNot?: Prisma.BookWhereInput;
};
export type BookCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutSchoolInput, Prisma.BookUncheckedCreateWithoutSchoolInput> | Prisma.BookCreateWithoutSchoolInput[] | Prisma.BookUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutSchoolInput | Prisma.BookCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.BookCreateManySchoolInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutSchoolInput, Prisma.BookUncheckedCreateWithoutSchoolInput> | Prisma.BookCreateWithoutSchoolInput[] | Prisma.BookUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutSchoolInput | Prisma.BookCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.BookCreateManySchoolInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutSchoolInput, Prisma.BookUncheckedCreateWithoutSchoolInput> | Prisma.BookCreateWithoutSchoolInput[] | Prisma.BookUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutSchoolInput | Prisma.BookCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutSchoolInput | Prisma.BookUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.BookCreateManySchoolInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutSchoolInput | Prisma.BookUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutSchoolInput | Prisma.BookUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutSchoolInput, Prisma.BookUncheckedCreateWithoutSchoolInput> | Prisma.BookCreateWithoutSchoolInput[] | Prisma.BookUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutSchoolInput | Prisma.BookCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutSchoolInput | Prisma.BookUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.BookCreateManySchoolInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutSchoolInput | Prisma.BookUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutSchoolInput | Prisma.BookUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookCreateNestedOneWithoutIssuesInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutIssuesInput, Prisma.BookUncheckedCreateWithoutIssuesInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutIssuesInput;
    connect?: Prisma.BookWhereUniqueInput;
};
export type BookUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutIssuesInput, Prisma.BookUncheckedCreateWithoutIssuesInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutIssuesInput;
    upsert?: Prisma.BookUpsertWithoutIssuesInput;
    connect?: Prisma.BookWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BookUpdateToOneWithWhereWithoutIssuesInput, Prisma.BookUpdateWithoutIssuesInput>, Prisma.BookUncheckedUpdateWithoutIssuesInput>;
};
export type BookCreateWithoutSchoolInput = {
    id?: string;
    title: string;
    author?: string | null;
    isbn?: string | null;
    category?: string | null;
    totalCopies?: number;
    availableCopies?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    issues?: Prisma.BookIssueCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateWithoutSchoolInput = {
    id?: string;
    title: string;
    author?: string | null;
    isbn?: string | null;
    category?: string | null;
    totalCopies?: number;
    availableCopies?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    issues?: Prisma.BookIssueUncheckedCreateNestedManyWithoutBookInput;
};
export type BookCreateOrConnectWithoutSchoolInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutSchoolInput, Prisma.BookUncheckedCreateWithoutSchoolInput>;
};
export type BookCreateManySchoolInputEnvelope = {
    data: Prisma.BookCreateManySchoolInput | Prisma.BookCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type BookUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.BookWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookUpdateWithoutSchoolInput, Prisma.BookUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutSchoolInput, Prisma.BookUncheckedCreateWithoutSchoolInput>;
};
export type BookUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutSchoolInput, Prisma.BookUncheckedUpdateWithoutSchoolInput>;
};
export type BookUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.BookScalarWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyWithoutSchoolInput>;
};
export type BookScalarWhereInput = {
    AND?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
    OR?: Prisma.BookScalarWhereInput[];
    NOT?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
    id?: Prisma.StringFilter<"Book"> | string;
    schoolId?: Prisma.StringFilter<"Book"> | string;
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringNullableFilter<"Book"> | string | null;
    isbn?: Prisma.StringNullableFilter<"Book"> | string | null;
    category?: Prisma.StringNullableFilter<"Book"> | string | null;
    totalCopies?: Prisma.IntFilter<"Book"> | number;
    availableCopies?: Prisma.IntFilter<"Book"> | number;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
};
export type BookCreateWithoutIssuesInput = {
    id?: string;
    title: string;
    author?: string | null;
    isbn?: string | null;
    category?: string | null;
    totalCopies?: number;
    availableCopies?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutBooksInput;
};
export type BookUncheckedCreateWithoutIssuesInput = {
    id?: string;
    schoolId: string;
    title: string;
    author?: string | null;
    isbn?: string | null;
    category?: string | null;
    totalCopies?: number;
    availableCopies?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookCreateOrConnectWithoutIssuesInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutIssuesInput, Prisma.BookUncheckedCreateWithoutIssuesInput>;
};
export type BookUpsertWithoutIssuesInput = {
    update: Prisma.XOR<Prisma.BookUpdateWithoutIssuesInput, Prisma.BookUncheckedUpdateWithoutIssuesInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutIssuesInput, Prisma.BookUncheckedCreateWithoutIssuesInput>;
    where?: Prisma.BookWhereInput;
};
export type BookUpdateToOneWithWhereWithoutIssuesInput = {
    where?: Prisma.BookWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutIssuesInput, Prisma.BookUncheckedUpdateWithoutIssuesInput>;
};
export type BookUpdateWithoutIssuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutBooksNestedInput;
};
export type BookUncheckedUpdateWithoutIssuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookCreateManySchoolInput = {
    id?: string;
    title: string;
    author?: string | null;
    isbn?: string | null;
    category?: string | null;
    totalCopies?: number;
    availableCopies?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issues?: Prisma.BookIssueUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issues?: Prisma.BookIssueUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    availableCopies?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookCountOutputType = {
    issues: number;
};
export type BookCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issues?: boolean | BookCountOutputTypeCountIssuesArgs;
};
export type BookCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookCountOutputTypeSelect<ExtArgs> | null;
};
export type BookCountOutputTypeCountIssuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookIssueWhereInput;
};
export type BookSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    title?: boolean;
    author?: boolean;
    isbn?: boolean;
    category?: boolean;
    totalCopies?: boolean;
    availableCopies?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    issues?: boolean | Prisma.Book$issuesArgs<ExtArgs>;
    _count?: boolean | Prisma.BookCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    title?: boolean;
    author?: boolean;
    isbn?: boolean;
    category?: boolean;
    totalCopies?: boolean;
    availableCopies?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    title?: boolean;
    author?: boolean;
    isbn?: boolean;
    category?: boolean;
    totalCopies?: boolean;
    availableCopies?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    title?: boolean;
    author?: boolean;
    isbn?: boolean;
    category?: boolean;
    totalCopies?: boolean;
    availableCopies?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BookOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "title" | "author" | "isbn" | "category" | "totalCopies" | "availableCopies" | "createdAt" | "updatedAt", ExtArgs["result"]["book"]>;
export type BookInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    issues?: boolean | Prisma.Book$issuesArgs<ExtArgs>;
    _count?: boolean | Prisma.BookCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BookIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type BookIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type $BookPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Book";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        issues: Prisma.$BookIssuePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        title: string;
        author: string | null;
        isbn: string | null;
        category: string | null;
        totalCopies: number;
        availableCopies: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["book"]>;
    composites: {};
};
export type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BookPayload, S>;
export type BookCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookCountAggregateInputType | true;
};
export interface BookDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Book'];
        meta: {
            name: 'Book';
        };
    };
    findUnique<T extends BookFindUniqueArgs>(args: Prisma.SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BookFindFirstArgs>(args?: Prisma.SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BookFindManyArgs>(args?: Prisma.SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BookCreateArgs>(args: Prisma.SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BookCreateManyArgs>(args?: Prisma.SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BookDeleteArgs>(args: Prisma.SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BookUpdateArgs>(args: Prisma.SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BookDeleteManyArgs>(args?: Prisma.SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BookUpdateManyArgs>(args: Prisma.SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BookUpsertArgs>(args: Prisma.SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BookCountArgs>(args?: Prisma.Subset<T, BookCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookCountAggregateOutputType> : number>;
    aggregate<T extends BookAggregateArgs>(args: Prisma.Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>;
    groupBy<T extends BookGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BookGroupByArgs['orderBy'];
    } : {
        orderBy?: BookGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BookFieldRefs;
}
export interface Prisma__BookClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    issues<T extends Prisma.Book$issuesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BookFieldRefs {
    readonly id: Prisma.FieldRef<"Book", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Book", 'String'>;
    readonly title: Prisma.FieldRef<"Book", 'String'>;
    readonly author: Prisma.FieldRef<"Book", 'String'>;
    readonly isbn: Prisma.FieldRef<"Book", 'String'>;
    readonly category: Prisma.FieldRef<"Book", 'String'>;
    readonly totalCopies: Prisma.FieldRef<"Book", 'Int'>;
    readonly availableCopies: Prisma.FieldRef<"Book", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Book", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Book", 'DateTime'>;
}
export type BookFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookCreateInput, Prisma.BookUncheckedCreateInput>;
};
export type BookCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BookCreateManyInput | Prisma.BookCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BookCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    data: Prisma.BookCreateManyInput | Prisma.BookCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BookIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BookUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookUpdateInput, Prisma.BookUncheckedUpdateInput>;
    where: Prisma.BookWhereUniqueInput;
};
export type BookUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyInput>;
    where?: Prisma.BookWhereInput;
    limit?: number;
};
export type BookUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyInput>;
    where?: Prisma.BookWhereInput;
    limit?: number;
    include?: Prisma.BookIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BookUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateInput, Prisma.BookUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BookUpdateInput, Prisma.BookUncheckedUpdateInput>;
};
export type BookDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    limit?: number;
};
export type Book$issuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookIssueSelect<ExtArgs> | null;
    omit?: Prisma.BookIssueOmit<ExtArgs> | null;
    include?: Prisma.BookIssueInclude<ExtArgs> | null;
    where?: Prisma.BookIssueWhereInput;
    orderBy?: Prisma.BookIssueOrderByWithRelationInput | Prisma.BookIssueOrderByWithRelationInput[];
    cursor?: Prisma.BookIssueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookIssueScalarFieldEnum | Prisma.BookIssueScalarFieldEnum[];
};
export type BookDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
};
