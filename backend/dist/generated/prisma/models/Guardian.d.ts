import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GuardianModel = runtime.Types.Result.DefaultSelection<Prisma.$GuardianPayload>;
export type AggregateGuardian = {
    _count: GuardianCountAggregateOutputType | null;
    _min: GuardianMinAggregateOutputType | null;
    _max: GuardianMaxAggregateOutputType | null;
};
export type GuardianMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    userId: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GuardianMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    userId: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GuardianCountAggregateOutputType = {
    id: number;
    schoolId: number;
    userId: number;
    firstName: number;
    lastName: number;
    email: number;
    phone: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GuardianMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GuardianMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GuardianCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GuardianAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuardianWhereInput;
    orderBy?: Prisma.GuardianOrderByWithRelationInput | Prisma.GuardianOrderByWithRelationInput[];
    cursor?: Prisma.GuardianWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GuardianCountAggregateInputType;
    _min?: GuardianMinAggregateInputType;
    _max?: GuardianMaxAggregateInputType;
};
export type GetGuardianAggregateType<T extends GuardianAggregateArgs> = {
    [P in keyof T & keyof AggregateGuardian]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGuardian[P]> : Prisma.GetScalarType<T[P], AggregateGuardian[P]>;
};
export type GuardianGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuardianWhereInput;
    orderBy?: Prisma.GuardianOrderByWithAggregationInput | Prisma.GuardianOrderByWithAggregationInput[];
    by: Prisma.GuardianScalarFieldEnum[] | Prisma.GuardianScalarFieldEnum;
    having?: Prisma.GuardianScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GuardianCountAggregateInputType | true;
    _min?: GuardianMinAggregateInputType;
    _max?: GuardianMaxAggregateInputType;
};
export type GuardianGroupByOutputType = {
    id: string;
    schoolId: string;
    userId: string | null;
    firstName: string;
    lastName: string;
    email: string | null;
    phone: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: GuardianCountAggregateOutputType | null;
    _min: GuardianMinAggregateOutputType | null;
    _max: GuardianMaxAggregateOutputType | null;
};
export type GetGuardianGroupByPayload<T extends GuardianGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GuardianGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GuardianGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GuardianGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GuardianGroupByOutputType[P]>;
}>>;
export type GuardianWhereInput = {
    AND?: Prisma.GuardianWhereInput | Prisma.GuardianWhereInput[];
    OR?: Prisma.GuardianWhereInput[];
    NOT?: Prisma.GuardianWhereInput | Prisma.GuardianWhereInput[];
    id?: Prisma.StringFilter<"Guardian"> | string;
    schoolId?: Prisma.StringFilter<"Guardian"> | string;
    userId?: Prisma.StringNullableFilter<"Guardian"> | string | null;
    firstName?: Prisma.StringFilter<"Guardian"> | string;
    lastName?: Prisma.StringFilter<"Guardian"> | string;
    email?: Prisma.StringNullableFilter<"Guardian"> | string | null;
    phone?: Prisma.StringNullableFilter<"Guardian"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Guardian"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Guardian"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    students?: Prisma.StudentGuardianListRelationFilter;
};
export type GuardianOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    students?: Prisma.StudentGuardianOrderByRelationAggregateInput;
};
export type GuardianWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.GuardianWhereInput | Prisma.GuardianWhereInput[];
    OR?: Prisma.GuardianWhereInput[];
    NOT?: Prisma.GuardianWhereInput | Prisma.GuardianWhereInput[];
    schoolId?: Prisma.StringFilter<"Guardian"> | string;
    firstName?: Prisma.StringFilter<"Guardian"> | string;
    lastName?: Prisma.StringFilter<"Guardian"> | string;
    email?: Prisma.StringNullableFilter<"Guardian"> | string | null;
    phone?: Prisma.StringNullableFilter<"Guardian"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Guardian"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Guardian"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    students?: Prisma.StudentGuardianListRelationFilter;
}, "id" | "userId">;
export type GuardianOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GuardianCountOrderByAggregateInput;
    _max?: Prisma.GuardianMaxOrderByAggregateInput;
    _min?: Prisma.GuardianMinOrderByAggregateInput;
};
export type GuardianScalarWhereWithAggregatesInput = {
    AND?: Prisma.GuardianScalarWhereWithAggregatesInput | Prisma.GuardianScalarWhereWithAggregatesInput[];
    OR?: Prisma.GuardianScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GuardianScalarWhereWithAggregatesInput | Prisma.GuardianScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Guardian"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Guardian"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"Guardian"> | string | null;
    firstName?: Prisma.StringWithAggregatesFilter<"Guardian"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Guardian"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Guardian"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Guardian"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Guardian"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Guardian"> | Date | string;
};
export type GuardianCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutGuardiansInput;
    user?: Prisma.UserCreateNestedOneWithoutGuardianInput;
    students?: Prisma.StudentGuardianCreateNestedManyWithoutGuardianInput;
};
export type GuardianUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    userId?: string | null;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: Prisma.StudentGuardianUncheckedCreateNestedManyWithoutGuardianInput;
};
export type GuardianUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutGuardiansNestedInput;
    user?: Prisma.UserUpdateOneWithoutGuardianNestedInput;
    students?: Prisma.StudentGuardianUpdateManyWithoutGuardianNestedInput;
};
export type GuardianUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    students?: Prisma.StudentGuardianUncheckedUpdateManyWithoutGuardianNestedInput;
};
export type GuardianCreateManyInput = {
    id?: string;
    schoolId: string;
    userId?: string | null;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GuardianUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuardianUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuardianListRelationFilter = {
    every?: Prisma.GuardianWhereInput;
    some?: Prisma.GuardianWhereInput;
    none?: Prisma.GuardianWhereInput;
};
export type GuardianOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GuardianNullableScalarRelationFilter = {
    is?: Prisma.GuardianWhereInput | null;
    isNot?: Prisma.GuardianWhereInput | null;
};
export type GuardianCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GuardianMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GuardianMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GuardianScalarRelationFilter = {
    is?: Prisma.GuardianWhereInput;
    isNot?: Prisma.GuardianWhereInput;
};
export type GuardianCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.GuardianCreateWithoutSchoolInput, Prisma.GuardianUncheckedCreateWithoutSchoolInput> | Prisma.GuardianCreateWithoutSchoolInput[] | Prisma.GuardianUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.GuardianCreateOrConnectWithoutSchoolInput | Prisma.GuardianCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.GuardianCreateManySchoolInputEnvelope;
    connect?: Prisma.GuardianWhereUniqueInput | Prisma.GuardianWhereUniqueInput[];
};
export type GuardianUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.GuardianCreateWithoutSchoolInput, Prisma.GuardianUncheckedCreateWithoutSchoolInput> | Prisma.GuardianCreateWithoutSchoolInput[] | Prisma.GuardianUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.GuardianCreateOrConnectWithoutSchoolInput | Prisma.GuardianCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.GuardianCreateManySchoolInputEnvelope;
    connect?: Prisma.GuardianWhereUniqueInput | Prisma.GuardianWhereUniqueInput[];
};
export type GuardianUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.GuardianCreateWithoutSchoolInput, Prisma.GuardianUncheckedCreateWithoutSchoolInput> | Prisma.GuardianCreateWithoutSchoolInput[] | Prisma.GuardianUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.GuardianCreateOrConnectWithoutSchoolInput | Prisma.GuardianCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.GuardianUpsertWithWhereUniqueWithoutSchoolInput | Prisma.GuardianUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.GuardianCreateManySchoolInputEnvelope;
    set?: Prisma.GuardianWhereUniqueInput | Prisma.GuardianWhereUniqueInput[];
    disconnect?: Prisma.GuardianWhereUniqueInput | Prisma.GuardianWhereUniqueInput[];
    delete?: Prisma.GuardianWhereUniqueInput | Prisma.GuardianWhereUniqueInput[];
    connect?: Prisma.GuardianWhereUniqueInput | Prisma.GuardianWhereUniqueInput[];
    update?: Prisma.GuardianUpdateWithWhereUniqueWithoutSchoolInput | Prisma.GuardianUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.GuardianUpdateManyWithWhereWithoutSchoolInput | Prisma.GuardianUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.GuardianScalarWhereInput | Prisma.GuardianScalarWhereInput[];
};
export type GuardianUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.GuardianCreateWithoutSchoolInput, Prisma.GuardianUncheckedCreateWithoutSchoolInput> | Prisma.GuardianCreateWithoutSchoolInput[] | Prisma.GuardianUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.GuardianCreateOrConnectWithoutSchoolInput | Prisma.GuardianCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.GuardianUpsertWithWhereUniqueWithoutSchoolInput | Prisma.GuardianUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.GuardianCreateManySchoolInputEnvelope;
    set?: Prisma.GuardianWhereUniqueInput | Prisma.GuardianWhereUniqueInput[];
    disconnect?: Prisma.GuardianWhereUniqueInput | Prisma.GuardianWhereUniqueInput[];
    delete?: Prisma.GuardianWhereUniqueInput | Prisma.GuardianWhereUniqueInput[];
    connect?: Prisma.GuardianWhereUniqueInput | Prisma.GuardianWhereUniqueInput[];
    update?: Prisma.GuardianUpdateWithWhereUniqueWithoutSchoolInput | Prisma.GuardianUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.GuardianUpdateManyWithWhereWithoutSchoolInput | Prisma.GuardianUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.GuardianScalarWhereInput | Prisma.GuardianScalarWhereInput[];
};
export type GuardianCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GuardianCreateWithoutUserInput, Prisma.GuardianUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.GuardianCreateOrConnectWithoutUserInput;
    connect?: Prisma.GuardianWhereUniqueInput;
};
export type GuardianUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GuardianCreateWithoutUserInput, Prisma.GuardianUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.GuardianCreateOrConnectWithoutUserInput;
    connect?: Prisma.GuardianWhereUniqueInput;
};
export type GuardianUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GuardianCreateWithoutUserInput, Prisma.GuardianUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.GuardianCreateOrConnectWithoutUserInput;
    upsert?: Prisma.GuardianUpsertWithoutUserInput;
    disconnect?: Prisma.GuardianWhereInput | boolean;
    delete?: Prisma.GuardianWhereInput | boolean;
    connect?: Prisma.GuardianWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GuardianUpdateToOneWithWhereWithoutUserInput, Prisma.GuardianUpdateWithoutUserInput>, Prisma.GuardianUncheckedUpdateWithoutUserInput>;
};
export type GuardianUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GuardianCreateWithoutUserInput, Prisma.GuardianUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.GuardianCreateOrConnectWithoutUserInput;
    upsert?: Prisma.GuardianUpsertWithoutUserInput;
    disconnect?: Prisma.GuardianWhereInput | boolean;
    delete?: Prisma.GuardianWhereInput | boolean;
    connect?: Prisma.GuardianWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GuardianUpdateToOneWithWhereWithoutUserInput, Prisma.GuardianUpdateWithoutUserInput>, Prisma.GuardianUncheckedUpdateWithoutUserInput>;
};
export type GuardianCreateNestedOneWithoutStudentsInput = {
    create?: Prisma.XOR<Prisma.GuardianCreateWithoutStudentsInput, Prisma.GuardianUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.GuardianCreateOrConnectWithoutStudentsInput;
    connect?: Prisma.GuardianWhereUniqueInput;
};
export type GuardianUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: Prisma.XOR<Prisma.GuardianCreateWithoutStudentsInput, Prisma.GuardianUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.GuardianCreateOrConnectWithoutStudentsInput;
    upsert?: Prisma.GuardianUpsertWithoutStudentsInput;
    connect?: Prisma.GuardianWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GuardianUpdateToOneWithWhereWithoutStudentsInput, Prisma.GuardianUpdateWithoutStudentsInput>, Prisma.GuardianUncheckedUpdateWithoutStudentsInput>;
};
export type GuardianCreateWithoutSchoolInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutGuardianInput;
    students?: Prisma.StudentGuardianCreateNestedManyWithoutGuardianInput;
};
export type GuardianUncheckedCreateWithoutSchoolInput = {
    id?: string;
    userId?: string | null;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: Prisma.StudentGuardianUncheckedCreateNestedManyWithoutGuardianInput;
};
export type GuardianCreateOrConnectWithoutSchoolInput = {
    where: Prisma.GuardianWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuardianCreateWithoutSchoolInput, Prisma.GuardianUncheckedCreateWithoutSchoolInput>;
};
export type GuardianCreateManySchoolInputEnvelope = {
    data: Prisma.GuardianCreateManySchoolInput | Prisma.GuardianCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type GuardianUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.GuardianWhereUniqueInput;
    update: Prisma.XOR<Prisma.GuardianUpdateWithoutSchoolInput, Prisma.GuardianUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.GuardianCreateWithoutSchoolInput, Prisma.GuardianUncheckedCreateWithoutSchoolInput>;
};
export type GuardianUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.GuardianWhereUniqueInput;
    data: Prisma.XOR<Prisma.GuardianUpdateWithoutSchoolInput, Prisma.GuardianUncheckedUpdateWithoutSchoolInput>;
};
export type GuardianUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.GuardianScalarWhereInput;
    data: Prisma.XOR<Prisma.GuardianUpdateManyMutationInput, Prisma.GuardianUncheckedUpdateManyWithoutSchoolInput>;
};
export type GuardianScalarWhereInput = {
    AND?: Prisma.GuardianScalarWhereInput | Prisma.GuardianScalarWhereInput[];
    OR?: Prisma.GuardianScalarWhereInput[];
    NOT?: Prisma.GuardianScalarWhereInput | Prisma.GuardianScalarWhereInput[];
    id?: Prisma.StringFilter<"Guardian"> | string;
    schoolId?: Prisma.StringFilter<"Guardian"> | string;
    userId?: Prisma.StringNullableFilter<"Guardian"> | string | null;
    firstName?: Prisma.StringFilter<"Guardian"> | string;
    lastName?: Prisma.StringFilter<"Guardian"> | string;
    email?: Prisma.StringNullableFilter<"Guardian"> | string | null;
    phone?: Prisma.StringNullableFilter<"Guardian"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Guardian"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Guardian"> | Date | string;
};
export type GuardianCreateWithoutUserInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutGuardiansInput;
    students?: Prisma.StudentGuardianCreateNestedManyWithoutGuardianInput;
};
export type GuardianUncheckedCreateWithoutUserInput = {
    id?: string;
    schoolId: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: Prisma.StudentGuardianUncheckedCreateNestedManyWithoutGuardianInput;
};
export type GuardianCreateOrConnectWithoutUserInput = {
    where: Prisma.GuardianWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuardianCreateWithoutUserInput, Prisma.GuardianUncheckedCreateWithoutUserInput>;
};
export type GuardianUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.GuardianUpdateWithoutUserInput, Prisma.GuardianUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.GuardianCreateWithoutUserInput, Prisma.GuardianUncheckedCreateWithoutUserInput>;
    where?: Prisma.GuardianWhereInput;
};
export type GuardianUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.GuardianWhereInput;
    data: Prisma.XOR<Prisma.GuardianUpdateWithoutUserInput, Prisma.GuardianUncheckedUpdateWithoutUserInput>;
};
export type GuardianUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutGuardiansNestedInput;
    students?: Prisma.StudentGuardianUpdateManyWithoutGuardianNestedInput;
};
export type GuardianUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    students?: Prisma.StudentGuardianUncheckedUpdateManyWithoutGuardianNestedInput;
};
export type GuardianCreateWithoutStudentsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutGuardiansInput;
    user?: Prisma.UserCreateNestedOneWithoutGuardianInput;
};
export type GuardianUncheckedCreateWithoutStudentsInput = {
    id?: string;
    schoolId: string;
    userId?: string | null;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GuardianCreateOrConnectWithoutStudentsInput = {
    where: Prisma.GuardianWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuardianCreateWithoutStudentsInput, Prisma.GuardianUncheckedCreateWithoutStudentsInput>;
};
export type GuardianUpsertWithoutStudentsInput = {
    update: Prisma.XOR<Prisma.GuardianUpdateWithoutStudentsInput, Prisma.GuardianUncheckedUpdateWithoutStudentsInput>;
    create: Prisma.XOR<Prisma.GuardianCreateWithoutStudentsInput, Prisma.GuardianUncheckedCreateWithoutStudentsInput>;
    where?: Prisma.GuardianWhereInput;
};
export type GuardianUpdateToOneWithWhereWithoutStudentsInput = {
    where?: Prisma.GuardianWhereInput;
    data: Prisma.XOR<Prisma.GuardianUpdateWithoutStudentsInput, Prisma.GuardianUncheckedUpdateWithoutStudentsInput>;
};
export type GuardianUpdateWithoutStudentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutGuardiansNestedInput;
    user?: Prisma.UserUpdateOneWithoutGuardianNestedInput;
};
export type GuardianUncheckedUpdateWithoutStudentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuardianCreateManySchoolInput = {
    id?: string;
    userId?: string | null;
    firstName: string;
    lastName: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GuardianUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutGuardianNestedInput;
    students?: Prisma.StudentGuardianUpdateManyWithoutGuardianNestedInput;
};
export type GuardianUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    students?: Prisma.StudentGuardianUncheckedUpdateManyWithoutGuardianNestedInput;
};
export type GuardianUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuardianCountOutputType = {
    students: number;
};
export type GuardianCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    students?: boolean | GuardianCountOutputTypeCountStudentsArgs;
};
export type GuardianCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianCountOutputTypeSelect<ExtArgs> | null;
};
export type GuardianCountOutputTypeCountStudentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentGuardianWhereInput;
};
export type GuardianSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Guardian$userArgs<ExtArgs>;
    students?: boolean | Prisma.Guardian$studentsArgs<ExtArgs>;
    _count?: boolean | Prisma.GuardianCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["guardian"]>;
export type GuardianSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Guardian$userArgs<ExtArgs>;
}, ExtArgs["result"]["guardian"]>;
export type GuardianSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Guardian$userArgs<ExtArgs>;
}, ExtArgs["result"]["guardian"]>;
export type GuardianSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GuardianOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "userId" | "firstName" | "lastName" | "email" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["guardian"]>;
export type GuardianInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Guardian$userArgs<ExtArgs>;
    students?: boolean | Prisma.Guardian$studentsArgs<ExtArgs>;
    _count?: boolean | Prisma.GuardianCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GuardianIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Guardian$userArgs<ExtArgs>;
};
export type GuardianIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Guardian$userArgs<ExtArgs>;
};
export type $GuardianPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Guardian";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
        students: Prisma.$StudentGuardianPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        userId: string | null;
        firstName: string;
        lastName: string;
        email: string | null;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["guardian"]>;
    composites: {};
};
export type GuardianGetPayload<S extends boolean | null | undefined | GuardianDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GuardianPayload, S>;
export type GuardianCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GuardianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GuardianCountAggregateInputType | true;
};
export interface GuardianDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Guardian'];
        meta: {
            name: 'Guardian';
        };
    };
    findUnique<T extends GuardianFindUniqueArgs>(args: Prisma.SelectSubset<T, GuardianFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GuardianClient<runtime.Types.Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GuardianFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GuardianFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GuardianClient<runtime.Types.Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GuardianFindFirstArgs>(args?: Prisma.SelectSubset<T, GuardianFindFirstArgs<ExtArgs>>): Prisma.Prisma__GuardianClient<runtime.Types.Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GuardianFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GuardianFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GuardianClient<runtime.Types.Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GuardianFindManyArgs>(args?: Prisma.SelectSubset<T, GuardianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GuardianCreateArgs>(args: Prisma.SelectSubset<T, GuardianCreateArgs<ExtArgs>>): Prisma.Prisma__GuardianClient<runtime.Types.Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GuardianCreateManyArgs>(args?: Prisma.SelectSubset<T, GuardianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GuardianCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GuardianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GuardianDeleteArgs>(args: Prisma.SelectSubset<T, GuardianDeleteArgs<ExtArgs>>): Prisma.Prisma__GuardianClient<runtime.Types.Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GuardianUpdateArgs>(args: Prisma.SelectSubset<T, GuardianUpdateArgs<ExtArgs>>): Prisma.Prisma__GuardianClient<runtime.Types.Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GuardianDeleteManyArgs>(args?: Prisma.SelectSubset<T, GuardianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GuardianUpdateManyArgs>(args: Prisma.SelectSubset<T, GuardianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GuardianUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GuardianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GuardianUpsertArgs>(args: Prisma.SelectSubset<T, GuardianUpsertArgs<ExtArgs>>): Prisma.Prisma__GuardianClient<runtime.Types.Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GuardianCountArgs>(args?: Prisma.Subset<T, GuardianCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GuardianCountAggregateOutputType> : number>;
    aggregate<T extends GuardianAggregateArgs>(args: Prisma.Subset<T, GuardianAggregateArgs>): Prisma.PrismaPromise<GetGuardianAggregateType<T>>;
    groupBy<T extends GuardianGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GuardianGroupByArgs['orderBy'];
    } : {
        orderBy?: GuardianGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GuardianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuardianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GuardianFieldRefs;
}
export interface Prisma__GuardianClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.Guardian$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Guardian$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    students<T extends Prisma.Guardian$studentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Guardian$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GuardianFieldRefs {
    readonly id: Prisma.FieldRef<"Guardian", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Guardian", 'String'>;
    readonly userId: Prisma.FieldRef<"Guardian", 'String'>;
    readonly firstName: Prisma.FieldRef<"Guardian", 'String'>;
    readonly lastName: Prisma.FieldRef<"Guardian", 'String'>;
    readonly email: Prisma.FieldRef<"Guardian", 'String'>;
    readonly phone: Prisma.FieldRef<"Guardian", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Guardian", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Guardian", 'DateTime'>;
}
export type GuardianFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianSelect<ExtArgs> | null;
    omit?: Prisma.GuardianOmit<ExtArgs> | null;
    include?: Prisma.GuardianInclude<ExtArgs> | null;
    where: Prisma.GuardianWhereUniqueInput;
};
export type GuardianFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianSelect<ExtArgs> | null;
    omit?: Prisma.GuardianOmit<ExtArgs> | null;
    include?: Prisma.GuardianInclude<ExtArgs> | null;
    where: Prisma.GuardianWhereUniqueInput;
};
export type GuardianFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianSelect<ExtArgs> | null;
    omit?: Prisma.GuardianOmit<ExtArgs> | null;
    include?: Prisma.GuardianInclude<ExtArgs> | null;
    where?: Prisma.GuardianWhereInput;
    orderBy?: Prisma.GuardianOrderByWithRelationInput | Prisma.GuardianOrderByWithRelationInput[];
    cursor?: Prisma.GuardianWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuardianScalarFieldEnum | Prisma.GuardianScalarFieldEnum[];
};
export type GuardianFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianSelect<ExtArgs> | null;
    omit?: Prisma.GuardianOmit<ExtArgs> | null;
    include?: Prisma.GuardianInclude<ExtArgs> | null;
    where?: Prisma.GuardianWhereInput;
    orderBy?: Prisma.GuardianOrderByWithRelationInput | Prisma.GuardianOrderByWithRelationInput[];
    cursor?: Prisma.GuardianWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuardianScalarFieldEnum | Prisma.GuardianScalarFieldEnum[];
};
export type GuardianFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianSelect<ExtArgs> | null;
    omit?: Prisma.GuardianOmit<ExtArgs> | null;
    include?: Prisma.GuardianInclude<ExtArgs> | null;
    where?: Prisma.GuardianWhereInput;
    orderBy?: Prisma.GuardianOrderByWithRelationInput | Prisma.GuardianOrderByWithRelationInput[];
    cursor?: Prisma.GuardianWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuardianScalarFieldEnum | Prisma.GuardianScalarFieldEnum[];
};
export type GuardianCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianSelect<ExtArgs> | null;
    omit?: Prisma.GuardianOmit<ExtArgs> | null;
    include?: Prisma.GuardianInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuardianCreateInput, Prisma.GuardianUncheckedCreateInput>;
};
export type GuardianCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GuardianCreateManyInput | Prisma.GuardianCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GuardianCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GuardianOmit<ExtArgs> | null;
    data: Prisma.GuardianCreateManyInput | Prisma.GuardianCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GuardianIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GuardianUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianSelect<ExtArgs> | null;
    omit?: Prisma.GuardianOmit<ExtArgs> | null;
    include?: Prisma.GuardianInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuardianUpdateInput, Prisma.GuardianUncheckedUpdateInput>;
    where: Prisma.GuardianWhereUniqueInput;
};
export type GuardianUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GuardianUpdateManyMutationInput, Prisma.GuardianUncheckedUpdateManyInput>;
    where?: Prisma.GuardianWhereInput;
    limit?: number;
};
export type GuardianUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GuardianOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuardianUpdateManyMutationInput, Prisma.GuardianUncheckedUpdateManyInput>;
    where?: Prisma.GuardianWhereInput;
    limit?: number;
    include?: Prisma.GuardianIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GuardianUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianSelect<ExtArgs> | null;
    omit?: Prisma.GuardianOmit<ExtArgs> | null;
    include?: Prisma.GuardianInclude<ExtArgs> | null;
    where: Prisma.GuardianWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuardianCreateInput, Prisma.GuardianUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GuardianUpdateInput, Prisma.GuardianUncheckedUpdateInput>;
};
export type GuardianDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianSelect<ExtArgs> | null;
    omit?: Prisma.GuardianOmit<ExtArgs> | null;
    include?: Prisma.GuardianInclude<ExtArgs> | null;
    where: Prisma.GuardianWhereUniqueInput;
};
export type GuardianDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuardianWhereInput;
    limit?: number;
};
export type Guardian$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Guardian$studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGuardianSelect<ExtArgs> | null;
    omit?: Prisma.StudentGuardianOmit<ExtArgs> | null;
    include?: Prisma.StudentGuardianInclude<ExtArgs> | null;
    where?: Prisma.StudentGuardianWhereInput;
    orderBy?: Prisma.StudentGuardianOrderByWithRelationInput | Prisma.StudentGuardianOrderByWithRelationInput[];
    cursor?: Prisma.StudentGuardianWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentGuardianScalarFieldEnum | Prisma.StudentGuardianScalarFieldEnum[];
};
export type GuardianDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuardianSelect<ExtArgs> | null;
    omit?: Prisma.GuardianOmit<ExtArgs> | null;
    include?: Prisma.GuardianInclude<ExtArgs> | null;
};
