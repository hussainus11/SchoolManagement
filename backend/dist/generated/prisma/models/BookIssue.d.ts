import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BookIssueModel = runtime.Types.Result.DefaultSelection<Prisma.$BookIssuePayload>;
export type AggregateBookIssue = {
    _count: BookIssueCountAggregateOutputType | null;
    _avg: BookIssueAvgAggregateOutputType | null;
    _sum: BookIssueSumAggregateOutputType | null;
    _min: BookIssueMinAggregateOutputType | null;
    _max: BookIssueMaxAggregateOutputType | null;
};
export type BookIssueAvgAggregateOutputType = {
    fineAmount: runtime.Decimal | null;
};
export type BookIssueSumAggregateOutputType = {
    fineAmount: runtime.Decimal | null;
};
export type BookIssueMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    bookId: string | null;
    studentId: string | null;
    teacherId: string | null;
    issueDate: Date | null;
    dueDate: Date | null;
    returnDate: Date | null;
    status: $Enums.BookIssueStatus | null;
    fineAmount: runtime.Decimal | null;
    issuedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BookIssueMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    bookId: string | null;
    studentId: string | null;
    teacherId: string | null;
    issueDate: Date | null;
    dueDate: Date | null;
    returnDate: Date | null;
    status: $Enums.BookIssueStatus | null;
    fineAmount: runtime.Decimal | null;
    issuedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BookIssueCountAggregateOutputType = {
    id: number;
    schoolId: number;
    bookId: number;
    studentId: number;
    teacherId: number;
    issueDate: number;
    dueDate: number;
    returnDate: number;
    status: number;
    fineAmount: number;
    issuedById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BookIssueAvgAggregateInputType = {
    fineAmount?: true;
};
export type BookIssueSumAggregateInputType = {
    fineAmount?: true;
};
export type BookIssueMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    bookId?: true;
    studentId?: true;
    teacherId?: true;
    issueDate?: true;
    dueDate?: true;
    returnDate?: true;
    status?: true;
    fineAmount?: true;
    issuedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BookIssueMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    bookId?: true;
    studentId?: true;
    teacherId?: true;
    issueDate?: true;
    dueDate?: true;
    returnDate?: true;
    status?: true;
    fineAmount?: true;
    issuedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BookIssueCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    bookId?: true;
    studentId?: true;
    teacherId?: true;
    issueDate?: true;
    dueDate?: true;
    returnDate?: true;
    status?: true;
    fineAmount?: true;
    issuedById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BookIssueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookIssueWhereInput;
    orderBy?: Prisma.BookIssueOrderByWithRelationInput | Prisma.BookIssueOrderByWithRelationInput[];
    cursor?: Prisma.BookIssueWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BookIssueCountAggregateInputType;
    _avg?: BookIssueAvgAggregateInputType;
    _sum?: BookIssueSumAggregateInputType;
    _min?: BookIssueMinAggregateInputType;
    _max?: BookIssueMaxAggregateInputType;
};
export type GetBookIssueAggregateType<T extends BookIssueAggregateArgs> = {
    [P in keyof T & keyof AggregateBookIssue]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBookIssue[P]> : Prisma.GetScalarType<T[P], AggregateBookIssue[P]>;
};
export type BookIssueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookIssueWhereInput;
    orderBy?: Prisma.BookIssueOrderByWithAggregationInput | Prisma.BookIssueOrderByWithAggregationInput[];
    by: Prisma.BookIssueScalarFieldEnum[] | Prisma.BookIssueScalarFieldEnum;
    having?: Prisma.BookIssueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookIssueCountAggregateInputType | true;
    _avg?: BookIssueAvgAggregateInputType;
    _sum?: BookIssueSumAggregateInputType;
    _min?: BookIssueMinAggregateInputType;
    _max?: BookIssueMaxAggregateInputType;
};
export type BookIssueGroupByOutputType = {
    id: string;
    schoolId: string;
    bookId: string;
    studentId: string | null;
    teacherId: string | null;
    issueDate: Date;
    dueDate: Date;
    returnDate: Date | null;
    status: $Enums.BookIssueStatus;
    fineAmount: runtime.Decimal | null;
    issuedById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: BookIssueCountAggregateOutputType | null;
    _avg: BookIssueAvgAggregateOutputType | null;
    _sum: BookIssueSumAggregateOutputType | null;
    _min: BookIssueMinAggregateOutputType | null;
    _max: BookIssueMaxAggregateOutputType | null;
};
export type GetBookIssueGroupByPayload<T extends BookIssueGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookIssueGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookIssueGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookIssueGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookIssueGroupByOutputType[P]>;
}>>;
export type BookIssueWhereInput = {
    AND?: Prisma.BookIssueWhereInput | Prisma.BookIssueWhereInput[];
    OR?: Prisma.BookIssueWhereInput[];
    NOT?: Prisma.BookIssueWhereInput | Prisma.BookIssueWhereInput[];
    id?: Prisma.StringFilter<"BookIssue"> | string;
    schoolId?: Prisma.StringFilter<"BookIssue"> | string;
    bookId?: Prisma.StringFilter<"BookIssue"> | string;
    studentId?: Prisma.StringNullableFilter<"BookIssue"> | string | null;
    teacherId?: Prisma.StringNullableFilter<"BookIssue"> | string | null;
    issueDate?: Prisma.DateTimeFilter<"BookIssue"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"BookIssue"> | Date | string;
    returnDate?: Prisma.DateTimeNullableFilter<"BookIssue"> | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFilter<"BookIssue"> | $Enums.BookIssueStatus;
    fineAmount?: Prisma.DecimalNullableFilter<"BookIssue"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFilter<"BookIssue"> | string;
    createdAt?: Prisma.DateTimeFilter<"BookIssue"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BookIssue"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    book?: Prisma.XOR<Prisma.BookScalarRelationFilter, Prisma.BookWhereInput>;
    student?: Prisma.XOR<Prisma.StudentNullableScalarRelationFilter, Prisma.StudentWhereInput> | null;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    issuedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BookIssueOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fineAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    issuedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    book?: Prisma.BookOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    issuedBy?: Prisma.UserOrderByWithRelationInput;
};
export type BookIssueWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BookIssueWhereInput | Prisma.BookIssueWhereInput[];
    OR?: Prisma.BookIssueWhereInput[];
    NOT?: Prisma.BookIssueWhereInput | Prisma.BookIssueWhereInput[];
    schoolId?: Prisma.StringFilter<"BookIssue"> | string;
    bookId?: Prisma.StringFilter<"BookIssue"> | string;
    studentId?: Prisma.StringNullableFilter<"BookIssue"> | string | null;
    teacherId?: Prisma.StringNullableFilter<"BookIssue"> | string | null;
    issueDate?: Prisma.DateTimeFilter<"BookIssue"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"BookIssue"> | Date | string;
    returnDate?: Prisma.DateTimeNullableFilter<"BookIssue"> | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFilter<"BookIssue"> | $Enums.BookIssueStatus;
    fineAmount?: Prisma.DecimalNullableFilter<"BookIssue"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFilter<"BookIssue"> | string;
    createdAt?: Prisma.DateTimeFilter<"BookIssue"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BookIssue"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    book?: Prisma.XOR<Prisma.BookScalarRelationFilter, Prisma.BookWhereInput>;
    student?: Prisma.XOR<Prisma.StudentNullableScalarRelationFilter, Prisma.StudentWhereInput> | null;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    issuedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type BookIssueOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fineAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    issuedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BookIssueCountOrderByAggregateInput;
    _avg?: Prisma.BookIssueAvgOrderByAggregateInput;
    _max?: Prisma.BookIssueMaxOrderByAggregateInput;
    _min?: Prisma.BookIssueMinOrderByAggregateInput;
    _sum?: Prisma.BookIssueSumOrderByAggregateInput;
};
export type BookIssueScalarWhereWithAggregatesInput = {
    AND?: Prisma.BookIssueScalarWhereWithAggregatesInput | Prisma.BookIssueScalarWhereWithAggregatesInput[];
    OR?: Prisma.BookIssueScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BookIssueScalarWhereWithAggregatesInput | Prisma.BookIssueScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BookIssue"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"BookIssue"> | string;
    bookId?: Prisma.StringWithAggregatesFilter<"BookIssue"> | string;
    studentId?: Prisma.StringNullableWithAggregatesFilter<"BookIssue"> | string | null;
    teacherId?: Prisma.StringNullableWithAggregatesFilter<"BookIssue"> | string | null;
    issueDate?: Prisma.DateTimeWithAggregatesFilter<"BookIssue"> | Date | string;
    dueDate?: Prisma.DateTimeWithAggregatesFilter<"BookIssue"> | Date | string;
    returnDate?: Prisma.DateTimeNullableWithAggregatesFilter<"BookIssue"> | Date | string | null;
    status?: Prisma.EnumBookIssueStatusWithAggregatesFilter<"BookIssue"> | $Enums.BookIssueStatus;
    fineAmount?: Prisma.DecimalNullableWithAggregatesFilter<"BookIssue"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringWithAggregatesFilter<"BookIssue"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BookIssue"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BookIssue"> | Date | string;
};
export type BookIssueCreateInput = {
    id?: string;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutBookIssuesInput;
    book: Prisma.BookCreateNestedOneWithoutIssuesInput;
    student?: Prisma.StudentCreateNestedOneWithoutBookIssuesInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutBookIssuesInput;
    issuedBy: Prisma.UserCreateNestedOneWithoutIssuedBookIssuesInput;
};
export type BookIssueUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    bookId: string;
    studentId?: string | null;
    teacherId?: string | null;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookIssueUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutBookIssuesNestedInput;
    book?: Prisma.BookUpdateOneRequiredWithoutIssuesNestedInput;
    student?: Prisma.StudentUpdateOneWithoutBookIssuesNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutBookIssuesNestedInput;
    issuedBy?: Prisma.UserUpdateOneRequiredWithoutIssuedBookIssuesNestedInput;
};
export type BookIssueUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueCreateManyInput = {
    id?: string;
    schoolId: string;
    bookId: string;
    studentId?: string | null;
    teacherId?: string | null;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookIssueUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueListRelationFilter = {
    every?: Prisma.BookIssueWhereInput;
    some?: Prisma.BookIssueWhereInput;
    none?: Prisma.BookIssueWhereInput;
};
export type BookIssueOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BookIssueCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fineAmount?: Prisma.SortOrder;
    issuedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookIssueAvgOrderByAggregateInput = {
    fineAmount?: Prisma.SortOrder;
};
export type BookIssueMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fineAmount?: Prisma.SortOrder;
    issuedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookIssueMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fineAmount?: Prisma.SortOrder;
    issuedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookIssueSumOrderByAggregateInput = {
    fineAmount?: Prisma.SortOrder;
};
export type BookIssueCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutSchoolInput, Prisma.BookIssueUncheckedCreateWithoutSchoolInput> | Prisma.BookIssueCreateWithoutSchoolInput[] | Prisma.BookIssueUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutSchoolInput | Prisma.BookIssueCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.BookIssueCreateManySchoolInputEnvelope;
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
};
export type BookIssueUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutSchoolInput, Prisma.BookIssueUncheckedCreateWithoutSchoolInput> | Prisma.BookIssueCreateWithoutSchoolInput[] | Prisma.BookIssueUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutSchoolInput | Prisma.BookIssueCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.BookIssueCreateManySchoolInputEnvelope;
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
};
export type BookIssueUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutSchoolInput, Prisma.BookIssueUncheckedCreateWithoutSchoolInput> | Prisma.BookIssueCreateWithoutSchoolInput[] | Prisma.BookIssueUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutSchoolInput | Prisma.BookIssueCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.BookIssueUpsertWithWhereUniqueWithoutSchoolInput | Prisma.BookIssueUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.BookIssueCreateManySchoolInputEnvelope;
    set?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    disconnect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    delete?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    update?: Prisma.BookIssueUpdateWithWhereUniqueWithoutSchoolInput | Prisma.BookIssueUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.BookIssueUpdateManyWithWhereWithoutSchoolInput | Prisma.BookIssueUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.BookIssueScalarWhereInput | Prisma.BookIssueScalarWhereInput[];
};
export type BookIssueUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutSchoolInput, Prisma.BookIssueUncheckedCreateWithoutSchoolInput> | Prisma.BookIssueCreateWithoutSchoolInput[] | Prisma.BookIssueUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutSchoolInput | Prisma.BookIssueCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.BookIssueUpsertWithWhereUniqueWithoutSchoolInput | Prisma.BookIssueUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.BookIssueCreateManySchoolInputEnvelope;
    set?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    disconnect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    delete?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    update?: Prisma.BookIssueUpdateWithWhereUniqueWithoutSchoolInput | Prisma.BookIssueUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.BookIssueUpdateManyWithWhereWithoutSchoolInput | Prisma.BookIssueUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.BookIssueScalarWhereInput | Prisma.BookIssueScalarWhereInput[];
};
export type BookIssueCreateNestedManyWithoutIssuedByInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutIssuedByInput, Prisma.BookIssueUncheckedCreateWithoutIssuedByInput> | Prisma.BookIssueCreateWithoutIssuedByInput[] | Prisma.BookIssueUncheckedCreateWithoutIssuedByInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutIssuedByInput | Prisma.BookIssueCreateOrConnectWithoutIssuedByInput[];
    createMany?: Prisma.BookIssueCreateManyIssuedByInputEnvelope;
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
};
export type BookIssueUncheckedCreateNestedManyWithoutIssuedByInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutIssuedByInput, Prisma.BookIssueUncheckedCreateWithoutIssuedByInput> | Prisma.BookIssueCreateWithoutIssuedByInput[] | Prisma.BookIssueUncheckedCreateWithoutIssuedByInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutIssuedByInput | Prisma.BookIssueCreateOrConnectWithoutIssuedByInput[];
    createMany?: Prisma.BookIssueCreateManyIssuedByInputEnvelope;
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
};
export type BookIssueUpdateManyWithoutIssuedByNestedInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutIssuedByInput, Prisma.BookIssueUncheckedCreateWithoutIssuedByInput> | Prisma.BookIssueCreateWithoutIssuedByInput[] | Prisma.BookIssueUncheckedCreateWithoutIssuedByInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutIssuedByInput | Prisma.BookIssueCreateOrConnectWithoutIssuedByInput[];
    upsert?: Prisma.BookIssueUpsertWithWhereUniqueWithoutIssuedByInput | Prisma.BookIssueUpsertWithWhereUniqueWithoutIssuedByInput[];
    createMany?: Prisma.BookIssueCreateManyIssuedByInputEnvelope;
    set?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    disconnect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    delete?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    update?: Prisma.BookIssueUpdateWithWhereUniqueWithoutIssuedByInput | Prisma.BookIssueUpdateWithWhereUniqueWithoutIssuedByInput[];
    updateMany?: Prisma.BookIssueUpdateManyWithWhereWithoutIssuedByInput | Prisma.BookIssueUpdateManyWithWhereWithoutIssuedByInput[];
    deleteMany?: Prisma.BookIssueScalarWhereInput | Prisma.BookIssueScalarWhereInput[];
};
export type BookIssueUncheckedUpdateManyWithoutIssuedByNestedInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutIssuedByInput, Prisma.BookIssueUncheckedCreateWithoutIssuedByInput> | Prisma.BookIssueCreateWithoutIssuedByInput[] | Prisma.BookIssueUncheckedCreateWithoutIssuedByInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutIssuedByInput | Prisma.BookIssueCreateOrConnectWithoutIssuedByInput[];
    upsert?: Prisma.BookIssueUpsertWithWhereUniqueWithoutIssuedByInput | Prisma.BookIssueUpsertWithWhereUniqueWithoutIssuedByInput[];
    createMany?: Prisma.BookIssueCreateManyIssuedByInputEnvelope;
    set?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    disconnect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    delete?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    update?: Prisma.BookIssueUpdateWithWhereUniqueWithoutIssuedByInput | Prisma.BookIssueUpdateWithWhereUniqueWithoutIssuedByInput[];
    updateMany?: Prisma.BookIssueUpdateManyWithWhereWithoutIssuedByInput | Prisma.BookIssueUpdateManyWithWhereWithoutIssuedByInput[];
    deleteMany?: Prisma.BookIssueScalarWhereInput | Prisma.BookIssueScalarWhereInput[];
};
export type BookIssueCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutTeacherInput, Prisma.BookIssueUncheckedCreateWithoutTeacherInput> | Prisma.BookIssueCreateWithoutTeacherInput[] | Prisma.BookIssueUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutTeacherInput | Prisma.BookIssueCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.BookIssueCreateManyTeacherInputEnvelope;
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
};
export type BookIssueUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutTeacherInput, Prisma.BookIssueUncheckedCreateWithoutTeacherInput> | Prisma.BookIssueCreateWithoutTeacherInput[] | Prisma.BookIssueUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutTeacherInput | Prisma.BookIssueCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.BookIssueCreateManyTeacherInputEnvelope;
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
};
export type BookIssueUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutTeacherInput, Prisma.BookIssueUncheckedCreateWithoutTeacherInput> | Prisma.BookIssueCreateWithoutTeacherInput[] | Prisma.BookIssueUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutTeacherInput | Prisma.BookIssueCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.BookIssueUpsertWithWhereUniqueWithoutTeacherInput | Prisma.BookIssueUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.BookIssueCreateManyTeacherInputEnvelope;
    set?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    disconnect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    delete?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    update?: Prisma.BookIssueUpdateWithWhereUniqueWithoutTeacherInput | Prisma.BookIssueUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.BookIssueUpdateManyWithWhereWithoutTeacherInput | Prisma.BookIssueUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.BookIssueScalarWhereInput | Prisma.BookIssueScalarWhereInput[];
};
export type BookIssueUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutTeacherInput, Prisma.BookIssueUncheckedCreateWithoutTeacherInput> | Prisma.BookIssueCreateWithoutTeacherInput[] | Prisma.BookIssueUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutTeacherInput | Prisma.BookIssueCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.BookIssueUpsertWithWhereUniqueWithoutTeacherInput | Prisma.BookIssueUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.BookIssueCreateManyTeacherInputEnvelope;
    set?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    disconnect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    delete?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    update?: Prisma.BookIssueUpdateWithWhereUniqueWithoutTeacherInput | Prisma.BookIssueUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.BookIssueUpdateManyWithWhereWithoutTeacherInput | Prisma.BookIssueUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.BookIssueScalarWhereInput | Prisma.BookIssueScalarWhereInput[];
};
export type BookIssueCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutStudentInput, Prisma.BookIssueUncheckedCreateWithoutStudentInput> | Prisma.BookIssueCreateWithoutStudentInput[] | Prisma.BookIssueUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutStudentInput | Prisma.BookIssueCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.BookIssueCreateManyStudentInputEnvelope;
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
};
export type BookIssueUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutStudentInput, Prisma.BookIssueUncheckedCreateWithoutStudentInput> | Prisma.BookIssueCreateWithoutStudentInput[] | Prisma.BookIssueUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutStudentInput | Prisma.BookIssueCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.BookIssueCreateManyStudentInputEnvelope;
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
};
export type BookIssueUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutStudentInput, Prisma.BookIssueUncheckedCreateWithoutStudentInput> | Prisma.BookIssueCreateWithoutStudentInput[] | Prisma.BookIssueUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutStudentInput | Prisma.BookIssueCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.BookIssueUpsertWithWhereUniqueWithoutStudentInput | Prisma.BookIssueUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.BookIssueCreateManyStudentInputEnvelope;
    set?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    disconnect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    delete?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    update?: Prisma.BookIssueUpdateWithWhereUniqueWithoutStudentInput | Prisma.BookIssueUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.BookIssueUpdateManyWithWhereWithoutStudentInput | Prisma.BookIssueUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.BookIssueScalarWhereInput | Prisma.BookIssueScalarWhereInput[];
};
export type BookIssueUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutStudentInput, Prisma.BookIssueUncheckedCreateWithoutStudentInput> | Prisma.BookIssueCreateWithoutStudentInput[] | Prisma.BookIssueUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutStudentInput | Prisma.BookIssueCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.BookIssueUpsertWithWhereUniqueWithoutStudentInput | Prisma.BookIssueUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.BookIssueCreateManyStudentInputEnvelope;
    set?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    disconnect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    delete?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    update?: Prisma.BookIssueUpdateWithWhereUniqueWithoutStudentInput | Prisma.BookIssueUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.BookIssueUpdateManyWithWhereWithoutStudentInput | Prisma.BookIssueUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.BookIssueScalarWhereInput | Prisma.BookIssueScalarWhereInput[];
};
export type BookIssueCreateNestedManyWithoutBookInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutBookInput, Prisma.BookIssueUncheckedCreateWithoutBookInput> | Prisma.BookIssueCreateWithoutBookInput[] | Prisma.BookIssueUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutBookInput | Prisma.BookIssueCreateOrConnectWithoutBookInput[];
    createMany?: Prisma.BookIssueCreateManyBookInputEnvelope;
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
};
export type BookIssueUncheckedCreateNestedManyWithoutBookInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutBookInput, Prisma.BookIssueUncheckedCreateWithoutBookInput> | Prisma.BookIssueCreateWithoutBookInput[] | Prisma.BookIssueUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutBookInput | Prisma.BookIssueCreateOrConnectWithoutBookInput[];
    createMany?: Prisma.BookIssueCreateManyBookInputEnvelope;
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
};
export type BookIssueUpdateManyWithoutBookNestedInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutBookInput, Prisma.BookIssueUncheckedCreateWithoutBookInput> | Prisma.BookIssueCreateWithoutBookInput[] | Prisma.BookIssueUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutBookInput | Prisma.BookIssueCreateOrConnectWithoutBookInput[];
    upsert?: Prisma.BookIssueUpsertWithWhereUniqueWithoutBookInput | Prisma.BookIssueUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: Prisma.BookIssueCreateManyBookInputEnvelope;
    set?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    disconnect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    delete?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    update?: Prisma.BookIssueUpdateWithWhereUniqueWithoutBookInput | Prisma.BookIssueUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?: Prisma.BookIssueUpdateManyWithWhereWithoutBookInput | Prisma.BookIssueUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: Prisma.BookIssueScalarWhereInput | Prisma.BookIssueScalarWhereInput[];
};
export type BookIssueUncheckedUpdateManyWithoutBookNestedInput = {
    create?: Prisma.XOR<Prisma.BookIssueCreateWithoutBookInput, Prisma.BookIssueUncheckedCreateWithoutBookInput> | Prisma.BookIssueCreateWithoutBookInput[] | Prisma.BookIssueUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.BookIssueCreateOrConnectWithoutBookInput | Prisma.BookIssueCreateOrConnectWithoutBookInput[];
    upsert?: Prisma.BookIssueUpsertWithWhereUniqueWithoutBookInput | Prisma.BookIssueUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: Prisma.BookIssueCreateManyBookInputEnvelope;
    set?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    disconnect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    delete?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    connect?: Prisma.BookIssueWhereUniqueInput | Prisma.BookIssueWhereUniqueInput[];
    update?: Prisma.BookIssueUpdateWithWhereUniqueWithoutBookInput | Prisma.BookIssueUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?: Prisma.BookIssueUpdateManyWithWhereWithoutBookInput | Prisma.BookIssueUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: Prisma.BookIssueScalarWhereInput | Prisma.BookIssueScalarWhereInput[];
};
export type EnumBookIssueStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookIssueStatus;
};
export type BookIssueCreateWithoutSchoolInput = {
    id?: string;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    book: Prisma.BookCreateNestedOneWithoutIssuesInput;
    student?: Prisma.StudentCreateNestedOneWithoutBookIssuesInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutBookIssuesInput;
    issuedBy: Prisma.UserCreateNestedOneWithoutIssuedBookIssuesInput;
};
export type BookIssueUncheckedCreateWithoutSchoolInput = {
    id?: string;
    bookId: string;
    studentId?: string | null;
    teacherId?: string | null;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookIssueCreateOrConnectWithoutSchoolInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookIssueCreateWithoutSchoolInput, Prisma.BookIssueUncheckedCreateWithoutSchoolInput>;
};
export type BookIssueCreateManySchoolInputEnvelope = {
    data: Prisma.BookIssueCreateManySchoolInput | Prisma.BookIssueCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type BookIssueUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookIssueUpdateWithoutSchoolInput, Prisma.BookIssueUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.BookIssueCreateWithoutSchoolInput, Prisma.BookIssueUncheckedCreateWithoutSchoolInput>;
};
export type BookIssueUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookIssueUpdateWithoutSchoolInput, Prisma.BookIssueUncheckedUpdateWithoutSchoolInput>;
};
export type BookIssueUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.BookIssueScalarWhereInput;
    data: Prisma.XOR<Prisma.BookIssueUpdateManyMutationInput, Prisma.BookIssueUncheckedUpdateManyWithoutSchoolInput>;
};
export type BookIssueScalarWhereInput = {
    AND?: Prisma.BookIssueScalarWhereInput | Prisma.BookIssueScalarWhereInput[];
    OR?: Prisma.BookIssueScalarWhereInput[];
    NOT?: Prisma.BookIssueScalarWhereInput | Prisma.BookIssueScalarWhereInput[];
    id?: Prisma.StringFilter<"BookIssue"> | string;
    schoolId?: Prisma.StringFilter<"BookIssue"> | string;
    bookId?: Prisma.StringFilter<"BookIssue"> | string;
    studentId?: Prisma.StringNullableFilter<"BookIssue"> | string | null;
    teacherId?: Prisma.StringNullableFilter<"BookIssue"> | string | null;
    issueDate?: Prisma.DateTimeFilter<"BookIssue"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"BookIssue"> | Date | string;
    returnDate?: Prisma.DateTimeNullableFilter<"BookIssue"> | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFilter<"BookIssue"> | $Enums.BookIssueStatus;
    fineAmount?: Prisma.DecimalNullableFilter<"BookIssue"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFilter<"BookIssue"> | string;
    createdAt?: Prisma.DateTimeFilter<"BookIssue"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BookIssue"> | Date | string;
};
export type BookIssueCreateWithoutIssuedByInput = {
    id?: string;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutBookIssuesInput;
    book: Prisma.BookCreateNestedOneWithoutIssuesInput;
    student?: Prisma.StudentCreateNestedOneWithoutBookIssuesInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutBookIssuesInput;
};
export type BookIssueUncheckedCreateWithoutIssuedByInput = {
    id?: string;
    schoolId: string;
    bookId: string;
    studentId?: string | null;
    teacherId?: string | null;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookIssueCreateOrConnectWithoutIssuedByInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookIssueCreateWithoutIssuedByInput, Prisma.BookIssueUncheckedCreateWithoutIssuedByInput>;
};
export type BookIssueCreateManyIssuedByInputEnvelope = {
    data: Prisma.BookIssueCreateManyIssuedByInput | Prisma.BookIssueCreateManyIssuedByInput[];
    skipDuplicates?: boolean;
};
export type BookIssueUpsertWithWhereUniqueWithoutIssuedByInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookIssueUpdateWithoutIssuedByInput, Prisma.BookIssueUncheckedUpdateWithoutIssuedByInput>;
    create: Prisma.XOR<Prisma.BookIssueCreateWithoutIssuedByInput, Prisma.BookIssueUncheckedCreateWithoutIssuedByInput>;
};
export type BookIssueUpdateWithWhereUniqueWithoutIssuedByInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookIssueUpdateWithoutIssuedByInput, Prisma.BookIssueUncheckedUpdateWithoutIssuedByInput>;
};
export type BookIssueUpdateManyWithWhereWithoutIssuedByInput = {
    where: Prisma.BookIssueScalarWhereInput;
    data: Prisma.XOR<Prisma.BookIssueUpdateManyMutationInput, Prisma.BookIssueUncheckedUpdateManyWithoutIssuedByInput>;
};
export type BookIssueCreateWithoutTeacherInput = {
    id?: string;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutBookIssuesInput;
    book: Prisma.BookCreateNestedOneWithoutIssuesInput;
    student?: Prisma.StudentCreateNestedOneWithoutBookIssuesInput;
    issuedBy: Prisma.UserCreateNestedOneWithoutIssuedBookIssuesInput;
};
export type BookIssueUncheckedCreateWithoutTeacherInput = {
    id?: string;
    schoolId: string;
    bookId: string;
    studentId?: string | null;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookIssueCreateOrConnectWithoutTeacherInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookIssueCreateWithoutTeacherInput, Prisma.BookIssueUncheckedCreateWithoutTeacherInput>;
};
export type BookIssueCreateManyTeacherInputEnvelope = {
    data: Prisma.BookIssueCreateManyTeacherInput | Prisma.BookIssueCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type BookIssueUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookIssueUpdateWithoutTeacherInput, Prisma.BookIssueUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.BookIssueCreateWithoutTeacherInput, Prisma.BookIssueUncheckedCreateWithoutTeacherInput>;
};
export type BookIssueUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookIssueUpdateWithoutTeacherInput, Prisma.BookIssueUncheckedUpdateWithoutTeacherInput>;
};
export type BookIssueUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.BookIssueScalarWhereInput;
    data: Prisma.XOR<Prisma.BookIssueUpdateManyMutationInput, Prisma.BookIssueUncheckedUpdateManyWithoutTeacherInput>;
};
export type BookIssueCreateWithoutStudentInput = {
    id?: string;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutBookIssuesInput;
    book: Prisma.BookCreateNestedOneWithoutIssuesInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutBookIssuesInput;
    issuedBy: Prisma.UserCreateNestedOneWithoutIssuedBookIssuesInput;
};
export type BookIssueUncheckedCreateWithoutStudentInput = {
    id?: string;
    schoolId: string;
    bookId: string;
    teacherId?: string | null;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookIssueCreateOrConnectWithoutStudentInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookIssueCreateWithoutStudentInput, Prisma.BookIssueUncheckedCreateWithoutStudentInput>;
};
export type BookIssueCreateManyStudentInputEnvelope = {
    data: Prisma.BookIssueCreateManyStudentInput | Prisma.BookIssueCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type BookIssueUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookIssueUpdateWithoutStudentInput, Prisma.BookIssueUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.BookIssueCreateWithoutStudentInput, Prisma.BookIssueUncheckedCreateWithoutStudentInput>;
};
export type BookIssueUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookIssueUpdateWithoutStudentInput, Prisma.BookIssueUncheckedUpdateWithoutStudentInput>;
};
export type BookIssueUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.BookIssueScalarWhereInput;
    data: Prisma.XOR<Prisma.BookIssueUpdateManyMutationInput, Prisma.BookIssueUncheckedUpdateManyWithoutStudentInput>;
};
export type BookIssueCreateWithoutBookInput = {
    id?: string;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutBookIssuesInput;
    student?: Prisma.StudentCreateNestedOneWithoutBookIssuesInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutBookIssuesInput;
    issuedBy: Prisma.UserCreateNestedOneWithoutIssuedBookIssuesInput;
};
export type BookIssueUncheckedCreateWithoutBookInput = {
    id?: string;
    schoolId: string;
    studentId?: string | null;
    teacherId?: string | null;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookIssueCreateOrConnectWithoutBookInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookIssueCreateWithoutBookInput, Prisma.BookIssueUncheckedCreateWithoutBookInput>;
};
export type BookIssueCreateManyBookInputEnvelope = {
    data: Prisma.BookIssueCreateManyBookInput | Prisma.BookIssueCreateManyBookInput[];
    skipDuplicates?: boolean;
};
export type BookIssueUpsertWithWhereUniqueWithoutBookInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookIssueUpdateWithoutBookInput, Prisma.BookIssueUncheckedUpdateWithoutBookInput>;
    create: Prisma.XOR<Prisma.BookIssueCreateWithoutBookInput, Prisma.BookIssueUncheckedCreateWithoutBookInput>;
};
export type BookIssueUpdateWithWhereUniqueWithoutBookInput = {
    where: Prisma.BookIssueWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookIssueUpdateWithoutBookInput, Prisma.BookIssueUncheckedUpdateWithoutBookInput>;
};
export type BookIssueUpdateManyWithWhereWithoutBookInput = {
    where: Prisma.BookIssueScalarWhereInput;
    data: Prisma.XOR<Prisma.BookIssueUpdateManyMutationInput, Prisma.BookIssueUncheckedUpdateManyWithoutBookInput>;
};
export type BookIssueCreateManySchoolInput = {
    id?: string;
    bookId: string;
    studentId?: string | null;
    teacherId?: string | null;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookIssueUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    book?: Prisma.BookUpdateOneRequiredWithoutIssuesNestedInput;
    student?: Prisma.StudentUpdateOneWithoutBookIssuesNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutBookIssuesNestedInput;
    issuedBy?: Prisma.UserUpdateOneRequiredWithoutIssuedBookIssuesNestedInput;
};
export type BookIssueUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueCreateManyIssuedByInput = {
    id?: string;
    schoolId: string;
    bookId: string;
    studentId?: string | null;
    teacherId?: string | null;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookIssueUpdateWithoutIssuedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutBookIssuesNestedInput;
    book?: Prisma.BookUpdateOneRequiredWithoutIssuesNestedInput;
    student?: Prisma.StudentUpdateOneWithoutBookIssuesNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutBookIssuesNestedInput;
};
export type BookIssueUncheckedUpdateWithoutIssuedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueUncheckedUpdateManyWithoutIssuedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueCreateManyTeacherInput = {
    id?: string;
    schoolId: string;
    bookId: string;
    studentId?: string | null;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookIssueUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutBookIssuesNestedInput;
    book?: Prisma.BookUpdateOneRequiredWithoutIssuesNestedInput;
    student?: Prisma.StudentUpdateOneWithoutBookIssuesNestedInput;
    issuedBy?: Prisma.UserUpdateOneRequiredWithoutIssuedBookIssuesNestedInput;
};
export type BookIssueUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueCreateManyStudentInput = {
    id?: string;
    schoolId: string;
    bookId: string;
    teacherId?: string | null;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookIssueUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutBookIssuesNestedInput;
    book?: Prisma.BookUpdateOneRequiredWithoutIssuesNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutBookIssuesNestedInput;
    issuedBy?: Prisma.UserUpdateOneRequiredWithoutIssuedBookIssuesNestedInput;
};
export type BookIssueUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueCreateManyBookInput = {
    id?: string;
    schoolId: string;
    studentId?: string | null;
    teacherId?: string | null;
    issueDate?: Date | string;
    dueDate: Date | string;
    returnDate?: Date | string | null;
    status?: $Enums.BookIssueStatus;
    fineAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookIssueUpdateWithoutBookInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutBookIssuesNestedInput;
    student?: Prisma.StudentUpdateOneWithoutBookIssuesNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutBookIssuesNestedInput;
    issuedBy?: Prisma.UserUpdateOneRequiredWithoutIssuedBookIssuesNestedInput;
};
export type BookIssueUncheckedUpdateWithoutBookInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueUncheckedUpdateManyWithoutBookInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumBookIssueStatusFieldUpdateOperationsInput | $Enums.BookIssueStatus;
    fineAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    issuedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookIssueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    bookId?: boolean;
    studentId?: boolean;
    teacherId?: boolean;
    issueDate?: boolean;
    dueDate?: boolean;
    returnDate?: boolean;
    status?: boolean;
    fineAmount?: boolean;
    issuedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.BookIssue$studentArgs<ExtArgs>;
    teacher?: boolean | Prisma.BookIssue$teacherArgs<ExtArgs>;
    issuedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bookIssue"]>;
export type BookIssueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    bookId?: boolean;
    studentId?: boolean;
    teacherId?: boolean;
    issueDate?: boolean;
    dueDate?: boolean;
    returnDate?: boolean;
    status?: boolean;
    fineAmount?: boolean;
    issuedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.BookIssue$studentArgs<ExtArgs>;
    teacher?: boolean | Prisma.BookIssue$teacherArgs<ExtArgs>;
    issuedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bookIssue"]>;
export type BookIssueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    bookId?: boolean;
    studentId?: boolean;
    teacherId?: boolean;
    issueDate?: boolean;
    dueDate?: boolean;
    returnDate?: boolean;
    status?: boolean;
    fineAmount?: boolean;
    issuedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.BookIssue$studentArgs<ExtArgs>;
    teacher?: boolean | Prisma.BookIssue$teacherArgs<ExtArgs>;
    issuedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bookIssue"]>;
export type BookIssueSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    bookId?: boolean;
    studentId?: boolean;
    teacherId?: boolean;
    issueDate?: boolean;
    dueDate?: boolean;
    returnDate?: boolean;
    status?: boolean;
    fineAmount?: boolean;
    issuedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BookIssueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "bookId" | "studentId" | "teacherId" | "issueDate" | "dueDate" | "returnDate" | "status" | "fineAmount" | "issuedById" | "createdAt" | "updatedAt", ExtArgs["result"]["bookIssue"]>;
export type BookIssueInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.BookIssue$studentArgs<ExtArgs>;
    teacher?: boolean | Prisma.BookIssue$teacherArgs<ExtArgs>;
    issuedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BookIssueIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.BookIssue$studentArgs<ExtArgs>;
    teacher?: boolean | Prisma.BookIssue$teacherArgs<ExtArgs>;
    issuedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BookIssueIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.BookIssue$studentArgs<ExtArgs>;
    teacher?: boolean | Prisma.BookIssue$teacherArgs<ExtArgs>;
    issuedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BookIssuePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BookIssue";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        book: Prisma.$BookPayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs> | null;
        teacher: Prisma.$TeacherPayload<ExtArgs> | null;
        issuedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        bookId: string;
        studentId: string | null;
        teacherId: string | null;
        issueDate: Date;
        dueDate: Date;
        returnDate: Date | null;
        status: $Enums.BookIssueStatus;
        fineAmount: runtime.Decimal | null;
        issuedById: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["bookIssue"]>;
    composites: {};
};
export type BookIssueGetPayload<S extends boolean | null | undefined | BookIssueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BookIssuePayload, S>;
export type BookIssueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BookIssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookIssueCountAggregateInputType | true;
};
export interface BookIssueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BookIssue'];
        meta: {
            name: 'BookIssue';
        };
    };
    findUnique<T extends BookIssueFindUniqueArgs>(args: Prisma.SelectSubset<T, BookIssueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BookIssueClient<runtime.Types.Result.GetResult<Prisma.$BookIssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BookIssueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BookIssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookIssueClient<runtime.Types.Result.GetResult<Prisma.$BookIssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BookIssueFindFirstArgs>(args?: Prisma.SelectSubset<T, BookIssueFindFirstArgs<ExtArgs>>): Prisma.Prisma__BookIssueClient<runtime.Types.Result.GetResult<Prisma.$BookIssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BookIssueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BookIssueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookIssueClient<runtime.Types.Result.GetResult<Prisma.$BookIssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BookIssueFindManyArgs>(args?: Prisma.SelectSubset<T, BookIssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BookIssueCreateArgs>(args: Prisma.SelectSubset<T, BookIssueCreateArgs<ExtArgs>>): Prisma.Prisma__BookIssueClient<runtime.Types.Result.GetResult<Prisma.$BookIssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BookIssueCreateManyArgs>(args?: Prisma.SelectSubset<T, BookIssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BookIssueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BookIssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookIssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BookIssueDeleteArgs>(args: Prisma.SelectSubset<T, BookIssueDeleteArgs<ExtArgs>>): Prisma.Prisma__BookIssueClient<runtime.Types.Result.GetResult<Prisma.$BookIssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BookIssueUpdateArgs>(args: Prisma.SelectSubset<T, BookIssueUpdateArgs<ExtArgs>>): Prisma.Prisma__BookIssueClient<runtime.Types.Result.GetResult<Prisma.$BookIssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BookIssueDeleteManyArgs>(args?: Prisma.SelectSubset<T, BookIssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BookIssueUpdateManyArgs>(args: Prisma.SelectSubset<T, BookIssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BookIssueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BookIssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookIssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BookIssueUpsertArgs>(args: Prisma.SelectSubset<T, BookIssueUpsertArgs<ExtArgs>>): Prisma.Prisma__BookIssueClient<runtime.Types.Result.GetResult<Prisma.$BookIssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BookIssueCountArgs>(args?: Prisma.Subset<T, BookIssueCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookIssueCountAggregateOutputType> : number>;
    aggregate<T extends BookIssueAggregateArgs>(args: Prisma.Subset<T, BookIssueAggregateArgs>): Prisma.PrismaPromise<GetBookIssueAggregateType<T>>;
    groupBy<T extends BookIssueGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BookIssueGroupByArgs['orderBy'];
    } : {
        orderBy?: BookIssueGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BookIssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BookIssueFieldRefs;
}
export interface Prisma__BookIssueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    book<T extends Prisma.BookDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BookDefaultArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.BookIssue$studentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BookIssue$studentArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.BookIssue$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BookIssue$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    issuedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BookIssueFieldRefs {
    readonly id: Prisma.FieldRef<"BookIssue", 'String'>;
    readonly schoolId: Prisma.FieldRef<"BookIssue", 'String'>;
    readonly bookId: Prisma.FieldRef<"BookIssue", 'String'>;
    readonly studentId: Prisma.FieldRef<"BookIssue", 'String'>;
    readonly teacherId: Prisma.FieldRef<"BookIssue", 'String'>;
    readonly issueDate: Prisma.FieldRef<"BookIssue", 'DateTime'>;
    readonly dueDate: Prisma.FieldRef<"BookIssue", 'DateTime'>;
    readonly returnDate: Prisma.FieldRef<"BookIssue", 'DateTime'>;
    readonly status: Prisma.FieldRef<"BookIssue", 'BookIssueStatus'>;
    readonly fineAmount: Prisma.FieldRef<"BookIssue", 'Decimal'>;
    readonly issuedById: Prisma.FieldRef<"BookIssue", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BookIssue", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BookIssue", 'DateTime'>;
}
export type BookIssueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookIssueSelect<ExtArgs> | null;
    omit?: Prisma.BookIssueOmit<ExtArgs> | null;
    include?: Prisma.BookIssueInclude<ExtArgs> | null;
    where: Prisma.BookIssueWhereUniqueInput;
};
export type BookIssueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookIssueSelect<ExtArgs> | null;
    omit?: Prisma.BookIssueOmit<ExtArgs> | null;
    include?: Prisma.BookIssueInclude<ExtArgs> | null;
    where: Prisma.BookIssueWhereUniqueInput;
};
export type BookIssueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BookIssueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BookIssueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BookIssueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookIssueSelect<ExtArgs> | null;
    omit?: Prisma.BookIssueOmit<ExtArgs> | null;
    include?: Prisma.BookIssueInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookIssueCreateInput, Prisma.BookIssueUncheckedCreateInput>;
};
export type BookIssueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BookIssueCreateManyInput | Prisma.BookIssueCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BookIssueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookIssueSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookIssueOmit<ExtArgs> | null;
    data: Prisma.BookIssueCreateManyInput | Prisma.BookIssueCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BookIssueIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BookIssueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookIssueSelect<ExtArgs> | null;
    omit?: Prisma.BookIssueOmit<ExtArgs> | null;
    include?: Prisma.BookIssueInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookIssueUpdateInput, Prisma.BookIssueUncheckedUpdateInput>;
    where: Prisma.BookIssueWhereUniqueInput;
};
export type BookIssueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BookIssueUpdateManyMutationInput, Prisma.BookIssueUncheckedUpdateManyInput>;
    where?: Prisma.BookIssueWhereInput;
    limit?: number;
};
export type BookIssueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookIssueSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookIssueOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookIssueUpdateManyMutationInput, Prisma.BookIssueUncheckedUpdateManyInput>;
    where?: Prisma.BookIssueWhereInput;
    limit?: number;
    include?: Prisma.BookIssueIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BookIssueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookIssueSelect<ExtArgs> | null;
    omit?: Prisma.BookIssueOmit<ExtArgs> | null;
    include?: Prisma.BookIssueInclude<ExtArgs> | null;
    where: Prisma.BookIssueWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookIssueCreateInput, Prisma.BookIssueUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BookIssueUpdateInput, Prisma.BookIssueUncheckedUpdateInput>;
};
export type BookIssueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookIssueSelect<ExtArgs> | null;
    omit?: Prisma.BookIssueOmit<ExtArgs> | null;
    include?: Prisma.BookIssueInclude<ExtArgs> | null;
    where: Prisma.BookIssueWhereUniqueInput;
};
export type BookIssueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookIssueWhereInput;
    limit?: number;
};
export type BookIssue$studentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
};
export type BookIssue$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
export type BookIssueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookIssueSelect<ExtArgs> | null;
    omit?: Prisma.BookIssueOmit<ExtArgs> | null;
    include?: Prisma.BookIssueInclude<ExtArgs> | null;
};
