import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AlumniModel = runtime.Types.Result.DefaultSelection<Prisma.$AlumniPayload>;
export type AggregateAlumni = {
    _count: AlumniCountAggregateOutputType | null;
    _avg: AlumniAvgAggregateOutputType | null;
    _sum: AlumniSumAggregateOutputType | null;
    _min: AlumniMinAggregateOutputType | null;
    _max: AlumniMaxAggregateOutputType | null;
};
export type AlumniAvgAggregateOutputType = {
    graduationYear: number | null;
};
export type AlumniSumAggregateOutputType = {
    graduationYear: number | null;
};
export type AlumniMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    studentId: string | null;
    firstName: string | null;
    lastName: string | null;
    graduationYear: number | null;
    currentOccupation: string | null;
    contactEmail: string | null;
    contactPhone: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AlumniMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    studentId: string | null;
    firstName: string | null;
    lastName: string | null;
    graduationYear: number | null;
    currentOccupation: string | null;
    contactEmail: string | null;
    contactPhone: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AlumniCountAggregateOutputType = {
    id: number;
    schoolId: number;
    studentId: number;
    firstName: number;
    lastName: number;
    graduationYear: number;
    currentOccupation: number;
    contactEmail: number;
    contactPhone: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AlumniAvgAggregateInputType = {
    graduationYear?: true;
};
export type AlumniSumAggregateInputType = {
    graduationYear?: true;
};
export type AlumniMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    studentId?: true;
    firstName?: true;
    lastName?: true;
    graduationYear?: true;
    currentOccupation?: true;
    contactEmail?: true;
    contactPhone?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AlumniMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    studentId?: true;
    firstName?: true;
    lastName?: true;
    graduationYear?: true;
    currentOccupation?: true;
    contactEmail?: true;
    contactPhone?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AlumniCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    studentId?: true;
    firstName?: true;
    lastName?: true;
    graduationYear?: true;
    currentOccupation?: true;
    contactEmail?: true;
    contactPhone?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AlumniAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlumniWhereInput;
    orderBy?: Prisma.AlumniOrderByWithRelationInput | Prisma.AlumniOrderByWithRelationInput[];
    cursor?: Prisma.AlumniWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AlumniCountAggregateInputType;
    _avg?: AlumniAvgAggregateInputType;
    _sum?: AlumniSumAggregateInputType;
    _min?: AlumniMinAggregateInputType;
    _max?: AlumniMaxAggregateInputType;
};
export type GetAlumniAggregateType<T extends AlumniAggregateArgs> = {
    [P in keyof T & keyof AggregateAlumni]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlumni[P]> : Prisma.GetScalarType<T[P], AggregateAlumni[P]>;
};
export type AlumniGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlumniWhereInput;
    orderBy?: Prisma.AlumniOrderByWithAggregationInput | Prisma.AlumniOrderByWithAggregationInput[];
    by: Prisma.AlumniScalarFieldEnum[] | Prisma.AlumniScalarFieldEnum;
    having?: Prisma.AlumniScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AlumniCountAggregateInputType | true;
    _avg?: AlumniAvgAggregateInputType;
    _sum?: AlumniSumAggregateInputType;
    _min?: AlumniMinAggregateInputType;
    _max?: AlumniMaxAggregateInputType;
};
export type AlumniGroupByOutputType = {
    id: string;
    schoolId: string;
    studentId: string | null;
    firstName: string;
    lastName: string;
    graduationYear: number;
    currentOccupation: string | null;
    contactEmail: string | null;
    contactPhone: string | null;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AlumniCountAggregateOutputType | null;
    _avg: AlumniAvgAggregateOutputType | null;
    _sum: AlumniSumAggregateOutputType | null;
    _min: AlumniMinAggregateOutputType | null;
    _max: AlumniMaxAggregateOutputType | null;
};
export type GetAlumniGroupByPayload<T extends AlumniGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AlumniGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AlumniGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AlumniGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AlumniGroupByOutputType[P]>;
}>>;
export type AlumniWhereInput = {
    AND?: Prisma.AlumniWhereInput | Prisma.AlumniWhereInput[];
    OR?: Prisma.AlumniWhereInput[];
    NOT?: Prisma.AlumniWhereInput | Prisma.AlumniWhereInput[];
    id?: Prisma.StringFilter<"Alumni"> | string;
    schoolId?: Prisma.StringFilter<"Alumni"> | string;
    studentId?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    firstName?: Prisma.StringFilter<"Alumni"> | string;
    lastName?: Prisma.StringFilter<"Alumni"> | string;
    graduationYear?: Prisma.IntFilter<"Alumni"> | number;
    currentOccupation?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    contactEmail?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    contactPhone?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    notes?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Alumni"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Alumni"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    student?: Prisma.XOR<Prisma.StudentNullableScalarRelationFilter, Prisma.StudentWhereInput> | null;
};
export type AlumniOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    graduationYear?: Prisma.SortOrder;
    currentOccupation?: Prisma.SortOrderInput | Prisma.SortOrder;
    contactEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    contactPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
};
export type AlumniWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    studentId?: string;
    AND?: Prisma.AlumniWhereInput | Prisma.AlumniWhereInput[];
    OR?: Prisma.AlumniWhereInput[];
    NOT?: Prisma.AlumniWhereInput | Prisma.AlumniWhereInput[];
    schoolId?: Prisma.StringFilter<"Alumni"> | string;
    firstName?: Prisma.StringFilter<"Alumni"> | string;
    lastName?: Prisma.StringFilter<"Alumni"> | string;
    graduationYear?: Prisma.IntFilter<"Alumni"> | number;
    currentOccupation?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    contactEmail?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    contactPhone?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    notes?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Alumni"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Alumni"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    student?: Prisma.XOR<Prisma.StudentNullableScalarRelationFilter, Prisma.StudentWhereInput> | null;
}, "id" | "studentId">;
export type AlumniOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    graduationYear?: Prisma.SortOrder;
    currentOccupation?: Prisma.SortOrderInput | Prisma.SortOrder;
    contactEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    contactPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AlumniCountOrderByAggregateInput;
    _avg?: Prisma.AlumniAvgOrderByAggregateInput;
    _max?: Prisma.AlumniMaxOrderByAggregateInput;
    _min?: Prisma.AlumniMinOrderByAggregateInput;
    _sum?: Prisma.AlumniSumOrderByAggregateInput;
};
export type AlumniScalarWhereWithAggregatesInput = {
    AND?: Prisma.AlumniScalarWhereWithAggregatesInput | Prisma.AlumniScalarWhereWithAggregatesInput[];
    OR?: Prisma.AlumniScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AlumniScalarWhereWithAggregatesInput | Prisma.AlumniScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Alumni"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Alumni"> | string;
    studentId?: Prisma.StringNullableWithAggregatesFilter<"Alumni"> | string | null;
    firstName?: Prisma.StringWithAggregatesFilter<"Alumni"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Alumni"> | string;
    graduationYear?: Prisma.IntWithAggregatesFilter<"Alumni"> | number;
    currentOccupation?: Prisma.StringNullableWithAggregatesFilter<"Alumni"> | string | null;
    contactEmail?: Prisma.StringNullableWithAggregatesFilter<"Alumni"> | string | null;
    contactPhone?: Prisma.StringNullableWithAggregatesFilter<"Alumni"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Alumni"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Alumni"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Alumni"> | Date | string;
};
export type AlumniCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    graduationYear: number;
    currentOccupation?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAlumniInput;
    student?: Prisma.StudentCreateNestedOneWithoutAlumniRecordInput;
};
export type AlumniUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    studentId?: string | null;
    firstName: string;
    lastName: string;
    graduationYear: number;
    currentOccupation?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AlumniUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    graduationYear?: Prisma.IntFieldUpdateOperationsInput | number;
    currentOccupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAlumniNestedInput;
    student?: Prisma.StudentUpdateOneWithoutAlumniRecordNestedInput;
};
export type AlumniUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    graduationYear?: Prisma.IntFieldUpdateOperationsInput | number;
    currentOccupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlumniCreateManyInput = {
    id?: string;
    schoolId: string;
    studentId?: string | null;
    firstName: string;
    lastName: string;
    graduationYear: number;
    currentOccupation?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AlumniUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    graduationYear?: Prisma.IntFieldUpdateOperationsInput | number;
    currentOccupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlumniUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    graduationYear?: Prisma.IntFieldUpdateOperationsInput | number;
    currentOccupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlumniListRelationFilter = {
    every?: Prisma.AlumniWhereInput;
    some?: Prisma.AlumniWhereInput;
    none?: Prisma.AlumniWhereInput;
};
export type AlumniOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AlumniNullableScalarRelationFilter = {
    is?: Prisma.AlumniWhereInput | null;
    isNot?: Prisma.AlumniWhereInput | null;
};
export type AlumniCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    graduationYear?: Prisma.SortOrder;
    currentOccupation?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AlumniAvgOrderByAggregateInput = {
    graduationYear?: Prisma.SortOrder;
};
export type AlumniMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    graduationYear?: Prisma.SortOrder;
    currentOccupation?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AlumniMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    graduationYear?: Prisma.SortOrder;
    currentOccupation?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AlumniSumOrderByAggregateInput = {
    graduationYear?: Prisma.SortOrder;
};
export type AlumniCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.AlumniCreateWithoutSchoolInput, Prisma.AlumniUncheckedCreateWithoutSchoolInput> | Prisma.AlumniCreateWithoutSchoolInput[] | Prisma.AlumniUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AlumniCreateOrConnectWithoutSchoolInput | Prisma.AlumniCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.AlumniCreateManySchoolInputEnvelope;
    connect?: Prisma.AlumniWhereUniqueInput | Prisma.AlumniWhereUniqueInput[];
};
export type AlumniUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.AlumniCreateWithoutSchoolInput, Prisma.AlumniUncheckedCreateWithoutSchoolInput> | Prisma.AlumniCreateWithoutSchoolInput[] | Prisma.AlumniUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AlumniCreateOrConnectWithoutSchoolInput | Prisma.AlumniCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.AlumniCreateManySchoolInputEnvelope;
    connect?: Prisma.AlumniWhereUniqueInput | Prisma.AlumniWhereUniqueInput[];
};
export type AlumniUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.AlumniCreateWithoutSchoolInput, Prisma.AlumniUncheckedCreateWithoutSchoolInput> | Prisma.AlumniCreateWithoutSchoolInput[] | Prisma.AlumniUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AlumniCreateOrConnectWithoutSchoolInput | Prisma.AlumniCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.AlumniUpsertWithWhereUniqueWithoutSchoolInput | Prisma.AlumniUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.AlumniCreateManySchoolInputEnvelope;
    set?: Prisma.AlumniWhereUniqueInput | Prisma.AlumniWhereUniqueInput[];
    disconnect?: Prisma.AlumniWhereUniqueInput | Prisma.AlumniWhereUniqueInput[];
    delete?: Prisma.AlumniWhereUniqueInput | Prisma.AlumniWhereUniqueInput[];
    connect?: Prisma.AlumniWhereUniqueInput | Prisma.AlumniWhereUniqueInput[];
    update?: Prisma.AlumniUpdateWithWhereUniqueWithoutSchoolInput | Prisma.AlumniUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.AlumniUpdateManyWithWhereWithoutSchoolInput | Prisma.AlumniUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.AlumniScalarWhereInput | Prisma.AlumniScalarWhereInput[];
};
export type AlumniUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.AlumniCreateWithoutSchoolInput, Prisma.AlumniUncheckedCreateWithoutSchoolInput> | Prisma.AlumniCreateWithoutSchoolInput[] | Prisma.AlumniUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.AlumniCreateOrConnectWithoutSchoolInput | Prisma.AlumniCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.AlumniUpsertWithWhereUniqueWithoutSchoolInput | Prisma.AlumniUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.AlumniCreateManySchoolInputEnvelope;
    set?: Prisma.AlumniWhereUniqueInput | Prisma.AlumniWhereUniqueInput[];
    disconnect?: Prisma.AlumniWhereUniqueInput | Prisma.AlumniWhereUniqueInput[];
    delete?: Prisma.AlumniWhereUniqueInput | Prisma.AlumniWhereUniqueInput[];
    connect?: Prisma.AlumniWhereUniqueInput | Prisma.AlumniWhereUniqueInput[];
    update?: Prisma.AlumniUpdateWithWhereUniqueWithoutSchoolInput | Prisma.AlumniUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.AlumniUpdateManyWithWhereWithoutSchoolInput | Prisma.AlumniUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.AlumniScalarWhereInput | Prisma.AlumniScalarWhereInput[];
};
export type AlumniCreateNestedOneWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.AlumniCreateWithoutStudentInput, Prisma.AlumniUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: Prisma.AlumniCreateOrConnectWithoutStudentInput;
    connect?: Prisma.AlumniWhereUniqueInput;
};
export type AlumniUncheckedCreateNestedOneWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.AlumniCreateWithoutStudentInput, Prisma.AlumniUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: Prisma.AlumniCreateOrConnectWithoutStudentInput;
    connect?: Prisma.AlumniWhereUniqueInput;
};
export type AlumniUpdateOneWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.AlumniCreateWithoutStudentInput, Prisma.AlumniUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: Prisma.AlumniCreateOrConnectWithoutStudentInput;
    upsert?: Prisma.AlumniUpsertWithoutStudentInput;
    disconnect?: Prisma.AlumniWhereInput | boolean;
    delete?: Prisma.AlumniWhereInput | boolean;
    connect?: Prisma.AlumniWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AlumniUpdateToOneWithWhereWithoutStudentInput, Prisma.AlumniUpdateWithoutStudentInput>, Prisma.AlumniUncheckedUpdateWithoutStudentInput>;
};
export type AlumniUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.AlumniCreateWithoutStudentInput, Prisma.AlumniUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: Prisma.AlumniCreateOrConnectWithoutStudentInput;
    upsert?: Prisma.AlumniUpsertWithoutStudentInput;
    disconnect?: Prisma.AlumniWhereInput | boolean;
    delete?: Prisma.AlumniWhereInput | boolean;
    connect?: Prisma.AlumniWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AlumniUpdateToOneWithWhereWithoutStudentInput, Prisma.AlumniUpdateWithoutStudentInput>, Prisma.AlumniUncheckedUpdateWithoutStudentInput>;
};
export type AlumniCreateWithoutSchoolInput = {
    id?: string;
    firstName: string;
    lastName: string;
    graduationYear: number;
    currentOccupation?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student?: Prisma.StudentCreateNestedOneWithoutAlumniRecordInput;
};
export type AlumniUncheckedCreateWithoutSchoolInput = {
    id?: string;
    studentId?: string | null;
    firstName: string;
    lastName: string;
    graduationYear: number;
    currentOccupation?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AlumniCreateOrConnectWithoutSchoolInput = {
    where: Prisma.AlumniWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlumniCreateWithoutSchoolInput, Prisma.AlumniUncheckedCreateWithoutSchoolInput>;
};
export type AlumniCreateManySchoolInputEnvelope = {
    data: Prisma.AlumniCreateManySchoolInput | Prisma.AlumniCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type AlumniUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.AlumniWhereUniqueInput;
    update: Prisma.XOR<Prisma.AlumniUpdateWithoutSchoolInput, Prisma.AlumniUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.AlumniCreateWithoutSchoolInput, Prisma.AlumniUncheckedCreateWithoutSchoolInput>;
};
export type AlumniUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.AlumniWhereUniqueInput;
    data: Prisma.XOR<Prisma.AlumniUpdateWithoutSchoolInput, Prisma.AlumniUncheckedUpdateWithoutSchoolInput>;
};
export type AlumniUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.AlumniScalarWhereInput;
    data: Prisma.XOR<Prisma.AlumniUpdateManyMutationInput, Prisma.AlumniUncheckedUpdateManyWithoutSchoolInput>;
};
export type AlumniScalarWhereInput = {
    AND?: Prisma.AlumniScalarWhereInput | Prisma.AlumniScalarWhereInput[];
    OR?: Prisma.AlumniScalarWhereInput[];
    NOT?: Prisma.AlumniScalarWhereInput | Prisma.AlumniScalarWhereInput[];
    id?: Prisma.StringFilter<"Alumni"> | string;
    schoolId?: Prisma.StringFilter<"Alumni"> | string;
    studentId?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    firstName?: Prisma.StringFilter<"Alumni"> | string;
    lastName?: Prisma.StringFilter<"Alumni"> | string;
    graduationYear?: Prisma.IntFilter<"Alumni"> | number;
    currentOccupation?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    contactEmail?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    contactPhone?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    notes?: Prisma.StringNullableFilter<"Alumni"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Alumni"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Alumni"> | Date | string;
};
export type AlumniCreateWithoutStudentInput = {
    id?: string;
    firstName: string;
    lastName: string;
    graduationYear: number;
    currentOccupation?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutAlumniInput;
};
export type AlumniUncheckedCreateWithoutStudentInput = {
    id?: string;
    schoolId: string;
    firstName: string;
    lastName: string;
    graduationYear: number;
    currentOccupation?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AlumniCreateOrConnectWithoutStudentInput = {
    where: Prisma.AlumniWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlumniCreateWithoutStudentInput, Prisma.AlumniUncheckedCreateWithoutStudentInput>;
};
export type AlumniUpsertWithoutStudentInput = {
    update: Prisma.XOR<Prisma.AlumniUpdateWithoutStudentInput, Prisma.AlumniUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.AlumniCreateWithoutStudentInput, Prisma.AlumniUncheckedCreateWithoutStudentInput>;
    where?: Prisma.AlumniWhereInput;
};
export type AlumniUpdateToOneWithWhereWithoutStudentInput = {
    where?: Prisma.AlumniWhereInput;
    data: Prisma.XOR<Prisma.AlumniUpdateWithoutStudentInput, Prisma.AlumniUncheckedUpdateWithoutStudentInput>;
};
export type AlumniUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    graduationYear?: Prisma.IntFieldUpdateOperationsInput | number;
    currentOccupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutAlumniNestedInput;
};
export type AlumniUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    graduationYear?: Prisma.IntFieldUpdateOperationsInput | number;
    currentOccupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlumniCreateManySchoolInput = {
    id?: string;
    studentId?: string | null;
    firstName: string;
    lastName: string;
    graduationYear: number;
    currentOccupation?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AlumniUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    graduationYear?: Prisma.IntFieldUpdateOperationsInput | number;
    currentOccupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneWithoutAlumniRecordNestedInput;
};
export type AlumniUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    graduationYear?: Prisma.IntFieldUpdateOperationsInput | number;
    currentOccupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlumniUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    graduationYear?: Prisma.IntFieldUpdateOperationsInput | number;
    currentOccupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlumniSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    graduationYear?: boolean;
    currentOccupation?: boolean;
    contactEmail?: boolean;
    contactPhone?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.Alumni$studentArgs<ExtArgs>;
}, ExtArgs["result"]["alumni"]>;
export type AlumniSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    graduationYear?: boolean;
    currentOccupation?: boolean;
    contactEmail?: boolean;
    contactPhone?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.Alumni$studentArgs<ExtArgs>;
}, ExtArgs["result"]["alumni"]>;
export type AlumniSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    graduationYear?: boolean;
    currentOccupation?: boolean;
    contactEmail?: boolean;
    contactPhone?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.Alumni$studentArgs<ExtArgs>;
}, ExtArgs["result"]["alumni"]>;
export type AlumniSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    graduationYear?: boolean;
    currentOccupation?: boolean;
    contactEmail?: boolean;
    contactPhone?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AlumniOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "studentId" | "firstName" | "lastName" | "graduationYear" | "currentOccupation" | "contactEmail" | "contactPhone" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["alumni"]>;
export type AlumniInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.Alumni$studentArgs<ExtArgs>;
};
export type AlumniIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.Alumni$studentArgs<ExtArgs>;
};
export type AlumniIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.Alumni$studentArgs<ExtArgs>;
};
export type $AlumniPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Alumni";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        studentId: string | null;
        firstName: string;
        lastName: string;
        graduationYear: number;
        currentOccupation: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["alumni"]>;
    composites: {};
};
export type AlumniGetPayload<S extends boolean | null | undefined | AlumniDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AlumniPayload, S>;
export type AlumniCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AlumniFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AlumniCountAggregateInputType | true;
};
export interface AlumniDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Alumni'];
        meta: {
            name: 'Alumni';
        };
    };
    findUnique<T extends AlumniFindUniqueArgs>(args: Prisma.SelectSubset<T, AlumniFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AlumniClient<runtime.Types.Result.GetResult<Prisma.$AlumniPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AlumniFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AlumniFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlumniClient<runtime.Types.Result.GetResult<Prisma.$AlumniPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AlumniFindFirstArgs>(args?: Prisma.SelectSubset<T, AlumniFindFirstArgs<ExtArgs>>): Prisma.Prisma__AlumniClient<runtime.Types.Result.GetResult<Prisma.$AlumniPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AlumniFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AlumniFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlumniClient<runtime.Types.Result.GetResult<Prisma.$AlumniPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AlumniFindManyArgs>(args?: Prisma.SelectSubset<T, AlumniFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlumniPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AlumniCreateArgs>(args: Prisma.SelectSubset<T, AlumniCreateArgs<ExtArgs>>): Prisma.Prisma__AlumniClient<runtime.Types.Result.GetResult<Prisma.$AlumniPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AlumniCreateManyArgs>(args?: Prisma.SelectSubset<T, AlumniCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AlumniCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AlumniCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlumniPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AlumniDeleteArgs>(args: Prisma.SelectSubset<T, AlumniDeleteArgs<ExtArgs>>): Prisma.Prisma__AlumniClient<runtime.Types.Result.GetResult<Prisma.$AlumniPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AlumniUpdateArgs>(args: Prisma.SelectSubset<T, AlumniUpdateArgs<ExtArgs>>): Prisma.Prisma__AlumniClient<runtime.Types.Result.GetResult<Prisma.$AlumniPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AlumniDeleteManyArgs>(args?: Prisma.SelectSubset<T, AlumniDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AlumniUpdateManyArgs>(args: Prisma.SelectSubset<T, AlumniUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AlumniUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AlumniUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlumniPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AlumniUpsertArgs>(args: Prisma.SelectSubset<T, AlumniUpsertArgs<ExtArgs>>): Prisma.Prisma__AlumniClient<runtime.Types.Result.GetResult<Prisma.$AlumniPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AlumniCountArgs>(args?: Prisma.Subset<T, AlumniCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AlumniCountAggregateOutputType> : number>;
    aggregate<T extends AlumniAggregateArgs>(args: Prisma.Subset<T, AlumniAggregateArgs>): Prisma.PrismaPromise<GetAlumniAggregateType<T>>;
    groupBy<T extends AlumniGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AlumniGroupByArgs['orderBy'];
    } : {
        orderBy?: AlumniGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AlumniGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumniGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AlumniFieldRefs;
}
export interface Prisma__AlumniClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.Alumni$studentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Alumni$studentArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AlumniFieldRefs {
    readonly id: Prisma.FieldRef<"Alumni", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Alumni", 'String'>;
    readonly studentId: Prisma.FieldRef<"Alumni", 'String'>;
    readonly firstName: Prisma.FieldRef<"Alumni", 'String'>;
    readonly lastName: Prisma.FieldRef<"Alumni", 'String'>;
    readonly graduationYear: Prisma.FieldRef<"Alumni", 'Int'>;
    readonly currentOccupation: Prisma.FieldRef<"Alumni", 'String'>;
    readonly contactEmail: Prisma.FieldRef<"Alumni", 'String'>;
    readonly contactPhone: Prisma.FieldRef<"Alumni", 'String'>;
    readonly notes: Prisma.FieldRef<"Alumni", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Alumni", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Alumni", 'DateTime'>;
}
export type AlumniFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlumniSelect<ExtArgs> | null;
    omit?: Prisma.AlumniOmit<ExtArgs> | null;
    include?: Prisma.AlumniInclude<ExtArgs> | null;
    where: Prisma.AlumniWhereUniqueInput;
};
export type AlumniFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlumniSelect<ExtArgs> | null;
    omit?: Prisma.AlumniOmit<ExtArgs> | null;
    include?: Prisma.AlumniInclude<ExtArgs> | null;
    where: Prisma.AlumniWhereUniqueInput;
};
export type AlumniFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlumniSelect<ExtArgs> | null;
    omit?: Prisma.AlumniOmit<ExtArgs> | null;
    include?: Prisma.AlumniInclude<ExtArgs> | null;
    where?: Prisma.AlumniWhereInput;
    orderBy?: Prisma.AlumniOrderByWithRelationInput | Prisma.AlumniOrderByWithRelationInput[];
    cursor?: Prisma.AlumniWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlumniScalarFieldEnum | Prisma.AlumniScalarFieldEnum[];
};
export type AlumniFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlumniSelect<ExtArgs> | null;
    omit?: Prisma.AlumniOmit<ExtArgs> | null;
    include?: Prisma.AlumniInclude<ExtArgs> | null;
    where?: Prisma.AlumniWhereInput;
    orderBy?: Prisma.AlumniOrderByWithRelationInput | Prisma.AlumniOrderByWithRelationInput[];
    cursor?: Prisma.AlumniWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlumniScalarFieldEnum | Prisma.AlumniScalarFieldEnum[];
};
export type AlumniFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlumniSelect<ExtArgs> | null;
    omit?: Prisma.AlumniOmit<ExtArgs> | null;
    include?: Prisma.AlumniInclude<ExtArgs> | null;
    where?: Prisma.AlumniWhereInput;
    orderBy?: Prisma.AlumniOrderByWithRelationInput | Prisma.AlumniOrderByWithRelationInput[];
    cursor?: Prisma.AlumniWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlumniScalarFieldEnum | Prisma.AlumniScalarFieldEnum[];
};
export type AlumniCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlumniSelect<ExtArgs> | null;
    omit?: Prisma.AlumniOmit<ExtArgs> | null;
    include?: Prisma.AlumniInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlumniCreateInput, Prisma.AlumniUncheckedCreateInput>;
};
export type AlumniCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AlumniCreateManyInput | Prisma.AlumniCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AlumniCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlumniSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AlumniOmit<ExtArgs> | null;
    data: Prisma.AlumniCreateManyInput | Prisma.AlumniCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AlumniIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AlumniUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlumniSelect<ExtArgs> | null;
    omit?: Prisma.AlumniOmit<ExtArgs> | null;
    include?: Prisma.AlumniInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlumniUpdateInput, Prisma.AlumniUncheckedUpdateInput>;
    where: Prisma.AlumniWhereUniqueInput;
};
export type AlumniUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AlumniUpdateManyMutationInput, Prisma.AlumniUncheckedUpdateManyInput>;
    where?: Prisma.AlumniWhereInput;
    limit?: number;
};
export type AlumniUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlumniSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AlumniOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlumniUpdateManyMutationInput, Prisma.AlumniUncheckedUpdateManyInput>;
    where?: Prisma.AlumniWhereInput;
    limit?: number;
    include?: Prisma.AlumniIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AlumniUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlumniSelect<ExtArgs> | null;
    omit?: Prisma.AlumniOmit<ExtArgs> | null;
    include?: Prisma.AlumniInclude<ExtArgs> | null;
    where: Prisma.AlumniWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlumniCreateInput, Prisma.AlumniUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AlumniUpdateInput, Prisma.AlumniUncheckedUpdateInput>;
};
export type AlumniDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlumniSelect<ExtArgs> | null;
    omit?: Prisma.AlumniOmit<ExtArgs> | null;
    include?: Prisma.AlumniInclude<ExtArgs> | null;
    where: Prisma.AlumniWhereUniqueInput;
};
export type AlumniDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlumniWhereInput;
    limit?: number;
};
export type Alumni$studentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
};
export type AlumniDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlumniSelect<ExtArgs> | null;
    omit?: Prisma.AlumniOmit<ExtArgs> | null;
    include?: Prisma.AlumniInclude<ExtArgs> | null;
};
