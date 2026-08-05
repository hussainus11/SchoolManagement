import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentGuardianModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentGuardianPayload>;
export type AggregateStudentGuardian = {
    _count: StudentGuardianCountAggregateOutputType | null;
    _min: StudentGuardianMinAggregateOutputType | null;
    _max: StudentGuardianMaxAggregateOutputType | null;
};
export type StudentGuardianMinAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    guardianId: string | null;
    relation: $Enums.GuardianRelation | null;
    isPrimary: boolean | null;
    createdAt: Date | null;
};
export type StudentGuardianMaxAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    guardianId: string | null;
    relation: $Enums.GuardianRelation | null;
    isPrimary: boolean | null;
    createdAt: Date | null;
};
export type StudentGuardianCountAggregateOutputType = {
    id: number;
    studentId: number;
    guardianId: number;
    relation: number;
    isPrimary: number;
    createdAt: number;
    _all: number;
};
export type StudentGuardianMinAggregateInputType = {
    id?: true;
    studentId?: true;
    guardianId?: true;
    relation?: true;
    isPrimary?: true;
    createdAt?: true;
};
export type StudentGuardianMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    guardianId?: true;
    relation?: true;
    isPrimary?: true;
    createdAt?: true;
};
export type StudentGuardianCountAggregateInputType = {
    id?: true;
    studentId?: true;
    guardianId?: true;
    relation?: true;
    isPrimary?: true;
    createdAt?: true;
    _all?: true;
};
export type StudentGuardianAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentGuardianWhereInput;
    orderBy?: Prisma.StudentGuardianOrderByWithRelationInput | Prisma.StudentGuardianOrderByWithRelationInput[];
    cursor?: Prisma.StudentGuardianWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentGuardianCountAggregateInputType;
    _min?: StudentGuardianMinAggregateInputType;
    _max?: StudentGuardianMaxAggregateInputType;
};
export type GetStudentGuardianAggregateType<T extends StudentGuardianAggregateArgs> = {
    [P in keyof T & keyof AggregateStudentGuardian]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudentGuardian[P]> : Prisma.GetScalarType<T[P], AggregateStudentGuardian[P]>;
};
export type StudentGuardianGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentGuardianWhereInput;
    orderBy?: Prisma.StudentGuardianOrderByWithAggregationInput | Prisma.StudentGuardianOrderByWithAggregationInput[];
    by: Prisma.StudentGuardianScalarFieldEnum[] | Prisma.StudentGuardianScalarFieldEnum;
    having?: Prisma.StudentGuardianScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentGuardianCountAggregateInputType | true;
    _min?: StudentGuardianMinAggregateInputType;
    _max?: StudentGuardianMaxAggregateInputType;
};
export type StudentGuardianGroupByOutputType = {
    id: string;
    studentId: string;
    guardianId: string;
    relation: $Enums.GuardianRelation;
    isPrimary: boolean;
    createdAt: Date;
    _count: StudentGuardianCountAggregateOutputType | null;
    _min: StudentGuardianMinAggregateOutputType | null;
    _max: StudentGuardianMaxAggregateOutputType | null;
};
export type GetStudentGuardianGroupByPayload<T extends StudentGuardianGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentGuardianGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentGuardianGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentGuardianGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentGuardianGroupByOutputType[P]>;
}>>;
export type StudentGuardianWhereInput = {
    AND?: Prisma.StudentGuardianWhereInput | Prisma.StudentGuardianWhereInput[];
    OR?: Prisma.StudentGuardianWhereInput[];
    NOT?: Prisma.StudentGuardianWhereInput | Prisma.StudentGuardianWhereInput[];
    id?: Prisma.StringFilter<"StudentGuardian"> | string;
    studentId?: Prisma.StringFilter<"StudentGuardian"> | string;
    guardianId?: Prisma.StringFilter<"StudentGuardian"> | string;
    relation?: Prisma.EnumGuardianRelationFilter<"StudentGuardian"> | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFilter<"StudentGuardian"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"StudentGuardian"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    guardian?: Prisma.XOR<Prisma.GuardianScalarRelationFilter, Prisma.GuardianWhereInput>;
};
export type StudentGuardianOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    guardianId?: Prisma.SortOrder;
    relation?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    student?: Prisma.StudentOrderByWithRelationInput;
    guardian?: Prisma.GuardianOrderByWithRelationInput;
};
export type StudentGuardianWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    studentId_guardianId?: Prisma.StudentGuardianStudentIdGuardianIdCompoundUniqueInput;
    AND?: Prisma.StudentGuardianWhereInput | Prisma.StudentGuardianWhereInput[];
    OR?: Prisma.StudentGuardianWhereInput[];
    NOT?: Prisma.StudentGuardianWhereInput | Prisma.StudentGuardianWhereInput[];
    studentId?: Prisma.StringFilter<"StudentGuardian"> | string;
    guardianId?: Prisma.StringFilter<"StudentGuardian"> | string;
    relation?: Prisma.EnumGuardianRelationFilter<"StudentGuardian"> | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFilter<"StudentGuardian"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"StudentGuardian"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    guardian?: Prisma.XOR<Prisma.GuardianScalarRelationFilter, Prisma.GuardianWhereInput>;
}, "id" | "studentId_guardianId">;
export type StudentGuardianOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    guardianId?: Prisma.SortOrder;
    relation?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.StudentGuardianCountOrderByAggregateInput;
    _max?: Prisma.StudentGuardianMaxOrderByAggregateInput;
    _min?: Prisma.StudentGuardianMinOrderByAggregateInput;
};
export type StudentGuardianScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentGuardianScalarWhereWithAggregatesInput | Prisma.StudentGuardianScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentGuardianScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentGuardianScalarWhereWithAggregatesInput | Prisma.StudentGuardianScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StudentGuardian"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"StudentGuardian"> | string;
    guardianId?: Prisma.StringWithAggregatesFilter<"StudentGuardian"> | string;
    relation?: Prisma.EnumGuardianRelationWithAggregatesFilter<"StudentGuardian"> | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolWithAggregatesFilter<"StudentGuardian"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StudentGuardian"> | Date | string;
};
export type StudentGuardianCreateInput = {
    id?: string;
    relation: $Enums.GuardianRelation;
    isPrimary?: boolean;
    createdAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutGuardiansInput;
    guardian: Prisma.GuardianCreateNestedOneWithoutStudentsInput;
};
export type StudentGuardianUncheckedCreateInput = {
    id?: string;
    studentId: string;
    guardianId: string;
    relation: $Enums.GuardianRelation;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type StudentGuardianUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    relation?: Prisma.EnumGuardianRelationFieldUpdateOperationsInput | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutGuardiansNestedInput;
    guardian?: Prisma.GuardianUpdateOneRequiredWithoutStudentsNestedInput;
};
export type StudentGuardianUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    guardianId?: Prisma.StringFieldUpdateOperationsInput | string;
    relation?: Prisma.EnumGuardianRelationFieldUpdateOperationsInput | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGuardianCreateManyInput = {
    id?: string;
    studentId: string;
    guardianId: string;
    relation: $Enums.GuardianRelation;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type StudentGuardianUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    relation?: Prisma.EnumGuardianRelationFieldUpdateOperationsInput | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGuardianUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    guardianId?: Prisma.StringFieldUpdateOperationsInput | string;
    relation?: Prisma.EnumGuardianRelationFieldUpdateOperationsInput | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGuardianListRelationFilter = {
    every?: Prisma.StudentGuardianWhereInput;
    some?: Prisma.StudentGuardianWhereInput;
    none?: Prisma.StudentGuardianWhereInput;
};
export type StudentGuardianOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentGuardianStudentIdGuardianIdCompoundUniqueInput = {
    studentId: string;
    guardianId: string;
};
export type StudentGuardianCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    guardianId?: Prisma.SortOrder;
    relation?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StudentGuardianMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    guardianId?: Prisma.SortOrder;
    relation?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StudentGuardianMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    guardianId?: Prisma.SortOrder;
    relation?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StudentGuardianCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentGuardianCreateWithoutStudentInput, Prisma.StudentGuardianUncheckedCreateWithoutStudentInput> | Prisma.StudentGuardianCreateWithoutStudentInput[] | Prisma.StudentGuardianUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentGuardianCreateOrConnectWithoutStudentInput | Prisma.StudentGuardianCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentGuardianCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
};
export type StudentGuardianUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentGuardianCreateWithoutStudentInput, Prisma.StudentGuardianUncheckedCreateWithoutStudentInput> | Prisma.StudentGuardianCreateWithoutStudentInput[] | Prisma.StudentGuardianUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentGuardianCreateOrConnectWithoutStudentInput | Prisma.StudentGuardianCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentGuardianCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
};
export type StudentGuardianUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentGuardianCreateWithoutStudentInput, Prisma.StudentGuardianUncheckedCreateWithoutStudentInput> | Prisma.StudentGuardianCreateWithoutStudentInput[] | Prisma.StudentGuardianUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentGuardianCreateOrConnectWithoutStudentInput | Prisma.StudentGuardianCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentGuardianUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentGuardianUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentGuardianCreateManyStudentInputEnvelope;
    set?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    disconnect?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    delete?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    connect?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    update?: Prisma.StudentGuardianUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentGuardianUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentGuardianUpdateManyWithWhereWithoutStudentInput | Prisma.StudentGuardianUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentGuardianScalarWhereInput | Prisma.StudentGuardianScalarWhereInput[];
};
export type StudentGuardianUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentGuardianCreateWithoutStudentInput, Prisma.StudentGuardianUncheckedCreateWithoutStudentInput> | Prisma.StudentGuardianCreateWithoutStudentInput[] | Prisma.StudentGuardianUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentGuardianCreateOrConnectWithoutStudentInput | Prisma.StudentGuardianCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentGuardianUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentGuardianUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentGuardianCreateManyStudentInputEnvelope;
    set?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    disconnect?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    delete?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    connect?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    update?: Prisma.StudentGuardianUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentGuardianUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentGuardianUpdateManyWithWhereWithoutStudentInput | Prisma.StudentGuardianUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentGuardianScalarWhereInput | Prisma.StudentGuardianScalarWhereInput[];
};
export type StudentGuardianCreateNestedManyWithoutGuardianInput = {
    create?: Prisma.XOR<Prisma.StudentGuardianCreateWithoutGuardianInput, Prisma.StudentGuardianUncheckedCreateWithoutGuardianInput> | Prisma.StudentGuardianCreateWithoutGuardianInput[] | Prisma.StudentGuardianUncheckedCreateWithoutGuardianInput[];
    connectOrCreate?: Prisma.StudentGuardianCreateOrConnectWithoutGuardianInput | Prisma.StudentGuardianCreateOrConnectWithoutGuardianInput[];
    createMany?: Prisma.StudentGuardianCreateManyGuardianInputEnvelope;
    connect?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
};
export type StudentGuardianUncheckedCreateNestedManyWithoutGuardianInput = {
    create?: Prisma.XOR<Prisma.StudentGuardianCreateWithoutGuardianInput, Prisma.StudentGuardianUncheckedCreateWithoutGuardianInput> | Prisma.StudentGuardianCreateWithoutGuardianInput[] | Prisma.StudentGuardianUncheckedCreateWithoutGuardianInput[];
    connectOrCreate?: Prisma.StudentGuardianCreateOrConnectWithoutGuardianInput | Prisma.StudentGuardianCreateOrConnectWithoutGuardianInput[];
    createMany?: Prisma.StudentGuardianCreateManyGuardianInputEnvelope;
    connect?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
};
export type StudentGuardianUpdateManyWithoutGuardianNestedInput = {
    create?: Prisma.XOR<Prisma.StudentGuardianCreateWithoutGuardianInput, Prisma.StudentGuardianUncheckedCreateWithoutGuardianInput> | Prisma.StudentGuardianCreateWithoutGuardianInput[] | Prisma.StudentGuardianUncheckedCreateWithoutGuardianInput[];
    connectOrCreate?: Prisma.StudentGuardianCreateOrConnectWithoutGuardianInput | Prisma.StudentGuardianCreateOrConnectWithoutGuardianInput[];
    upsert?: Prisma.StudentGuardianUpsertWithWhereUniqueWithoutGuardianInput | Prisma.StudentGuardianUpsertWithWhereUniqueWithoutGuardianInput[];
    createMany?: Prisma.StudentGuardianCreateManyGuardianInputEnvelope;
    set?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    disconnect?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    delete?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    connect?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    update?: Prisma.StudentGuardianUpdateWithWhereUniqueWithoutGuardianInput | Prisma.StudentGuardianUpdateWithWhereUniqueWithoutGuardianInput[];
    updateMany?: Prisma.StudentGuardianUpdateManyWithWhereWithoutGuardianInput | Prisma.StudentGuardianUpdateManyWithWhereWithoutGuardianInput[];
    deleteMany?: Prisma.StudentGuardianScalarWhereInput | Prisma.StudentGuardianScalarWhereInput[];
};
export type StudentGuardianUncheckedUpdateManyWithoutGuardianNestedInput = {
    create?: Prisma.XOR<Prisma.StudentGuardianCreateWithoutGuardianInput, Prisma.StudentGuardianUncheckedCreateWithoutGuardianInput> | Prisma.StudentGuardianCreateWithoutGuardianInput[] | Prisma.StudentGuardianUncheckedCreateWithoutGuardianInput[];
    connectOrCreate?: Prisma.StudentGuardianCreateOrConnectWithoutGuardianInput | Prisma.StudentGuardianCreateOrConnectWithoutGuardianInput[];
    upsert?: Prisma.StudentGuardianUpsertWithWhereUniqueWithoutGuardianInput | Prisma.StudentGuardianUpsertWithWhereUniqueWithoutGuardianInput[];
    createMany?: Prisma.StudentGuardianCreateManyGuardianInputEnvelope;
    set?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    disconnect?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    delete?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    connect?: Prisma.StudentGuardianWhereUniqueInput | Prisma.StudentGuardianWhereUniqueInput[];
    update?: Prisma.StudentGuardianUpdateWithWhereUniqueWithoutGuardianInput | Prisma.StudentGuardianUpdateWithWhereUniqueWithoutGuardianInput[];
    updateMany?: Prisma.StudentGuardianUpdateManyWithWhereWithoutGuardianInput | Prisma.StudentGuardianUpdateManyWithWhereWithoutGuardianInput[];
    deleteMany?: Prisma.StudentGuardianScalarWhereInput | Prisma.StudentGuardianScalarWhereInput[];
};
export type EnumGuardianRelationFieldUpdateOperationsInput = {
    set?: $Enums.GuardianRelation;
};
export type StudentGuardianCreateWithoutStudentInput = {
    id?: string;
    relation: $Enums.GuardianRelation;
    isPrimary?: boolean;
    createdAt?: Date | string;
    guardian: Prisma.GuardianCreateNestedOneWithoutStudentsInput;
};
export type StudentGuardianUncheckedCreateWithoutStudentInput = {
    id?: string;
    guardianId: string;
    relation: $Enums.GuardianRelation;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type StudentGuardianCreateOrConnectWithoutStudentInput = {
    where: Prisma.StudentGuardianWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentGuardianCreateWithoutStudentInput, Prisma.StudentGuardianUncheckedCreateWithoutStudentInput>;
};
export type StudentGuardianCreateManyStudentInputEnvelope = {
    data: Prisma.StudentGuardianCreateManyStudentInput | Prisma.StudentGuardianCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type StudentGuardianUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentGuardianWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentGuardianUpdateWithoutStudentInput, Prisma.StudentGuardianUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.StudentGuardianCreateWithoutStudentInput, Prisma.StudentGuardianUncheckedCreateWithoutStudentInput>;
};
export type StudentGuardianUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentGuardianWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentGuardianUpdateWithoutStudentInput, Prisma.StudentGuardianUncheckedUpdateWithoutStudentInput>;
};
export type StudentGuardianUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.StudentGuardianScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentGuardianUpdateManyMutationInput, Prisma.StudentGuardianUncheckedUpdateManyWithoutStudentInput>;
};
export type StudentGuardianScalarWhereInput = {
    AND?: Prisma.StudentGuardianScalarWhereInput | Prisma.StudentGuardianScalarWhereInput[];
    OR?: Prisma.StudentGuardianScalarWhereInput[];
    NOT?: Prisma.StudentGuardianScalarWhereInput | Prisma.StudentGuardianScalarWhereInput[];
    id?: Prisma.StringFilter<"StudentGuardian"> | string;
    studentId?: Prisma.StringFilter<"StudentGuardian"> | string;
    guardianId?: Prisma.StringFilter<"StudentGuardian"> | string;
    relation?: Prisma.EnumGuardianRelationFilter<"StudentGuardian"> | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFilter<"StudentGuardian"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"StudentGuardian"> | Date | string;
};
export type StudentGuardianCreateWithoutGuardianInput = {
    id?: string;
    relation: $Enums.GuardianRelation;
    isPrimary?: boolean;
    createdAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutGuardiansInput;
};
export type StudentGuardianUncheckedCreateWithoutGuardianInput = {
    id?: string;
    studentId: string;
    relation: $Enums.GuardianRelation;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type StudentGuardianCreateOrConnectWithoutGuardianInput = {
    where: Prisma.StudentGuardianWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentGuardianCreateWithoutGuardianInput, Prisma.StudentGuardianUncheckedCreateWithoutGuardianInput>;
};
export type StudentGuardianCreateManyGuardianInputEnvelope = {
    data: Prisma.StudentGuardianCreateManyGuardianInput | Prisma.StudentGuardianCreateManyGuardianInput[];
    skipDuplicates?: boolean;
};
export type StudentGuardianUpsertWithWhereUniqueWithoutGuardianInput = {
    where: Prisma.StudentGuardianWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentGuardianUpdateWithoutGuardianInput, Prisma.StudentGuardianUncheckedUpdateWithoutGuardianInput>;
    create: Prisma.XOR<Prisma.StudentGuardianCreateWithoutGuardianInput, Prisma.StudentGuardianUncheckedCreateWithoutGuardianInput>;
};
export type StudentGuardianUpdateWithWhereUniqueWithoutGuardianInput = {
    where: Prisma.StudentGuardianWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentGuardianUpdateWithoutGuardianInput, Prisma.StudentGuardianUncheckedUpdateWithoutGuardianInput>;
};
export type StudentGuardianUpdateManyWithWhereWithoutGuardianInput = {
    where: Prisma.StudentGuardianScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentGuardianUpdateManyMutationInput, Prisma.StudentGuardianUncheckedUpdateManyWithoutGuardianInput>;
};
export type StudentGuardianCreateManyStudentInput = {
    id?: string;
    guardianId: string;
    relation: $Enums.GuardianRelation;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type StudentGuardianUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    relation?: Prisma.EnumGuardianRelationFieldUpdateOperationsInput | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guardian?: Prisma.GuardianUpdateOneRequiredWithoutStudentsNestedInput;
};
export type StudentGuardianUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guardianId?: Prisma.StringFieldUpdateOperationsInput | string;
    relation?: Prisma.EnumGuardianRelationFieldUpdateOperationsInput | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGuardianUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guardianId?: Prisma.StringFieldUpdateOperationsInput | string;
    relation?: Prisma.EnumGuardianRelationFieldUpdateOperationsInput | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGuardianCreateManyGuardianInput = {
    id?: string;
    studentId: string;
    relation: $Enums.GuardianRelation;
    isPrimary?: boolean;
    createdAt?: Date | string;
};
export type StudentGuardianUpdateWithoutGuardianInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    relation?: Prisma.EnumGuardianRelationFieldUpdateOperationsInput | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutGuardiansNestedInput;
};
export type StudentGuardianUncheckedUpdateWithoutGuardianInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relation?: Prisma.EnumGuardianRelationFieldUpdateOperationsInput | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGuardianUncheckedUpdateManyWithoutGuardianInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relation?: Prisma.EnumGuardianRelationFieldUpdateOperationsInput | $Enums.GuardianRelation;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentGuardianSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    guardianId?: boolean;
    relation?: boolean;
    isPrimary?: boolean;
    createdAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    guardian?: boolean | Prisma.GuardianDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentGuardian"]>;
export type StudentGuardianSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    guardianId?: boolean;
    relation?: boolean;
    isPrimary?: boolean;
    createdAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    guardian?: boolean | Prisma.GuardianDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentGuardian"]>;
export type StudentGuardianSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    guardianId?: boolean;
    relation?: boolean;
    isPrimary?: boolean;
    createdAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    guardian?: boolean | Prisma.GuardianDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentGuardian"]>;
export type StudentGuardianSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    guardianId?: boolean;
    relation?: boolean;
    isPrimary?: boolean;
    createdAt?: boolean;
};
export type StudentGuardianOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "guardianId" | "relation" | "isPrimary" | "createdAt", ExtArgs["result"]["studentGuardian"]>;
export type StudentGuardianInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    guardian?: boolean | Prisma.GuardianDefaultArgs<ExtArgs>;
};
export type StudentGuardianIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    guardian?: boolean | Prisma.GuardianDefaultArgs<ExtArgs>;
};
export type StudentGuardianIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    guardian?: boolean | Prisma.GuardianDefaultArgs<ExtArgs>;
};
export type $StudentGuardianPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StudentGuardian";
    objects: {
        student: Prisma.$StudentPayload<ExtArgs>;
        guardian: Prisma.$GuardianPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentId: string;
        guardianId: string;
        relation: $Enums.GuardianRelation;
        isPrimary: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["studentGuardian"]>;
    composites: {};
};
export type StudentGuardianGetPayload<S extends boolean | null | undefined | StudentGuardianDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload, S>;
export type StudentGuardianCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentGuardianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentGuardianCountAggregateInputType | true;
};
export interface StudentGuardianDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StudentGuardian'];
        meta: {
            name: 'StudentGuardian';
        };
    };
    findUnique<T extends StudentGuardianFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentGuardianFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentGuardianClient<runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentGuardianFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentGuardianFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentGuardianClient<runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentGuardianFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentGuardianFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentGuardianClient<runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentGuardianFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentGuardianFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentGuardianClient<runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentGuardianFindManyArgs>(args?: Prisma.SelectSubset<T, StudentGuardianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentGuardianCreateArgs>(args: Prisma.SelectSubset<T, StudentGuardianCreateArgs<ExtArgs>>): Prisma.Prisma__StudentGuardianClient<runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentGuardianCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentGuardianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentGuardianCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentGuardianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentGuardianDeleteArgs>(args: Prisma.SelectSubset<T, StudentGuardianDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentGuardianClient<runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentGuardianUpdateArgs>(args: Prisma.SelectSubset<T, StudentGuardianUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentGuardianClient<runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentGuardianDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentGuardianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentGuardianUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentGuardianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentGuardianUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentGuardianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentGuardianUpsertArgs>(args: Prisma.SelectSubset<T, StudentGuardianUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentGuardianClient<runtime.Types.Result.GetResult<Prisma.$StudentGuardianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentGuardianCountArgs>(args?: Prisma.Subset<T, StudentGuardianCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentGuardianCountAggregateOutputType> : number>;
    aggregate<T extends StudentGuardianAggregateArgs>(args: Prisma.Subset<T, StudentGuardianAggregateArgs>): Prisma.PrismaPromise<GetStudentGuardianAggregateType<T>>;
    groupBy<T extends StudentGuardianGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentGuardianGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentGuardianGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentGuardianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGuardianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentGuardianFieldRefs;
}
export interface Prisma__StudentGuardianClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    guardian<T extends Prisma.GuardianDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GuardianDefaultArgs<ExtArgs>>): Prisma.Prisma__GuardianClient<runtime.Types.Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentGuardianFieldRefs {
    readonly id: Prisma.FieldRef<"StudentGuardian", 'String'>;
    readonly studentId: Prisma.FieldRef<"StudentGuardian", 'String'>;
    readonly guardianId: Prisma.FieldRef<"StudentGuardian", 'String'>;
    readonly relation: Prisma.FieldRef<"StudentGuardian", 'GuardianRelation'>;
    readonly isPrimary: Prisma.FieldRef<"StudentGuardian", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"StudentGuardian", 'DateTime'>;
}
export type StudentGuardianFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGuardianSelect<ExtArgs> | null;
    omit?: Prisma.StudentGuardianOmit<ExtArgs> | null;
    include?: Prisma.StudentGuardianInclude<ExtArgs> | null;
    where: Prisma.StudentGuardianWhereUniqueInput;
};
export type StudentGuardianFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGuardianSelect<ExtArgs> | null;
    omit?: Prisma.StudentGuardianOmit<ExtArgs> | null;
    include?: Prisma.StudentGuardianInclude<ExtArgs> | null;
    where: Prisma.StudentGuardianWhereUniqueInput;
};
export type StudentGuardianFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentGuardianFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentGuardianFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentGuardianCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGuardianSelect<ExtArgs> | null;
    omit?: Prisma.StudentGuardianOmit<ExtArgs> | null;
    include?: Prisma.StudentGuardianInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentGuardianCreateInput, Prisma.StudentGuardianUncheckedCreateInput>;
};
export type StudentGuardianCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentGuardianCreateManyInput | Prisma.StudentGuardianCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentGuardianCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGuardianSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentGuardianOmit<ExtArgs> | null;
    data: Prisma.StudentGuardianCreateManyInput | Prisma.StudentGuardianCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentGuardianIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentGuardianUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGuardianSelect<ExtArgs> | null;
    omit?: Prisma.StudentGuardianOmit<ExtArgs> | null;
    include?: Prisma.StudentGuardianInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentGuardianUpdateInput, Prisma.StudentGuardianUncheckedUpdateInput>;
    where: Prisma.StudentGuardianWhereUniqueInput;
};
export type StudentGuardianUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentGuardianUpdateManyMutationInput, Prisma.StudentGuardianUncheckedUpdateManyInput>;
    where?: Prisma.StudentGuardianWhereInput;
    limit?: number;
};
export type StudentGuardianUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGuardianSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentGuardianOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentGuardianUpdateManyMutationInput, Prisma.StudentGuardianUncheckedUpdateManyInput>;
    where?: Prisma.StudentGuardianWhereInput;
    limit?: number;
    include?: Prisma.StudentGuardianIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentGuardianUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGuardianSelect<ExtArgs> | null;
    omit?: Prisma.StudentGuardianOmit<ExtArgs> | null;
    include?: Prisma.StudentGuardianInclude<ExtArgs> | null;
    where: Prisma.StudentGuardianWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentGuardianCreateInput, Prisma.StudentGuardianUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentGuardianUpdateInput, Prisma.StudentGuardianUncheckedUpdateInput>;
};
export type StudentGuardianDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGuardianSelect<ExtArgs> | null;
    omit?: Prisma.StudentGuardianOmit<ExtArgs> | null;
    include?: Prisma.StudentGuardianInclude<ExtArgs> | null;
    where: Prisma.StudentGuardianWhereUniqueInput;
};
export type StudentGuardianDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentGuardianWhereInput;
    limit?: number;
};
export type StudentGuardianDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentGuardianSelect<ExtArgs> | null;
    omit?: Prisma.StudentGuardianOmit<ExtArgs> | null;
    include?: Prisma.StudentGuardianInclude<ExtArgs> | null;
};
