import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SalaryStructureModel = runtime.Types.Result.DefaultSelection<Prisma.$SalaryStructurePayload>;
export type AggregateSalaryStructure = {
    _count: SalaryStructureCountAggregateOutputType | null;
    _avg: SalaryStructureAvgAggregateOutputType | null;
    _sum: SalaryStructureSumAggregateOutputType | null;
    _min: SalaryStructureMinAggregateOutputType | null;
    _max: SalaryStructureMaxAggregateOutputType | null;
};
export type SalaryStructureAvgAggregateOutputType = {
    basicSalary: runtime.Decimal | null;
    allowances: runtime.Decimal | null;
    fixedDeductions: runtime.Decimal | null;
};
export type SalaryStructureSumAggregateOutputType = {
    basicSalary: runtime.Decimal | null;
    allowances: runtime.Decimal | null;
    fixedDeductions: runtime.Decimal | null;
};
export type SalaryStructureMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    userId: string | null;
    basicSalary: runtime.Decimal | null;
    allowances: runtime.Decimal | null;
    fixedDeductions: runtime.Decimal | null;
    effectiveFrom: Date | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SalaryStructureMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    userId: string | null;
    basicSalary: runtime.Decimal | null;
    allowances: runtime.Decimal | null;
    fixedDeductions: runtime.Decimal | null;
    effectiveFrom: Date | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SalaryStructureCountAggregateOutputType = {
    id: number;
    schoolId: number;
    userId: number;
    basicSalary: number;
    allowances: number;
    fixedDeductions: number;
    effectiveFrom: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SalaryStructureAvgAggregateInputType = {
    basicSalary?: true;
    allowances?: true;
    fixedDeductions?: true;
};
export type SalaryStructureSumAggregateInputType = {
    basicSalary?: true;
    allowances?: true;
    fixedDeductions?: true;
};
export type SalaryStructureMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    userId?: true;
    basicSalary?: true;
    allowances?: true;
    fixedDeductions?: true;
    effectiveFrom?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SalaryStructureMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    userId?: true;
    basicSalary?: true;
    allowances?: true;
    fixedDeductions?: true;
    effectiveFrom?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SalaryStructureCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    userId?: true;
    basicSalary?: true;
    allowances?: true;
    fixedDeductions?: true;
    effectiveFrom?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SalaryStructureAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalaryStructureWhereInput;
    orderBy?: Prisma.SalaryStructureOrderByWithRelationInput | Prisma.SalaryStructureOrderByWithRelationInput[];
    cursor?: Prisma.SalaryStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SalaryStructureCountAggregateInputType;
    _avg?: SalaryStructureAvgAggregateInputType;
    _sum?: SalaryStructureSumAggregateInputType;
    _min?: SalaryStructureMinAggregateInputType;
    _max?: SalaryStructureMaxAggregateInputType;
};
export type GetSalaryStructureAggregateType<T extends SalaryStructureAggregateArgs> = {
    [P in keyof T & keyof AggregateSalaryStructure]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSalaryStructure[P]> : Prisma.GetScalarType<T[P], AggregateSalaryStructure[P]>;
};
export type SalaryStructureGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalaryStructureWhereInput;
    orderBy?: Prisma.SalaryStructureOrderByWithAggregationInput | Prisma.SalaryStructureOrderByWithAggregationInput[];
    by: Prisma.SalaryStructureScalarFieldEnum[] | Prisma.SalaryStructureScalarFieldEnum;
    having?: Prisma.SalaryStructureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalaryStructureCountAggregateInputType | true;
    _avg?: SalaryStructureAvgAggregateInputType;
    _sum?: SalaryStructureSumAggregateInputType;
    _min?: SalaryStructureMinAggregateInputType;
    _max?: SalaryStructureMaxAggregateInputType;
};
export type SalaryStructureGroupByOutputType = {
    id: string;
    schoolId: string;
    userId: string;
    basicSalary: runtime.Decimal;
    allowances: runtime.Decimal;
    fixedDeductions: runtime.Decimal;
    effectiveFrom: Date;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: SalaryStructureCountAggregateOutputType | null;
    _avg: SalaryStructureAvgAggregateOutputType | null;
    _sum: SalaryStructureSumAggregateOutputType | null;
    _min: SalaryStructureMinAggregateOutputType | null;
    _max: SalaryStructureMaxAggregateOutputType | null;
};
export type GetSalaryStructureGroupByPayload<T extends SalaryStructureGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SalaryStructureGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SalaryStructureGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SalaryStructureGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SalaryStructureGroupByOutputType[P]>;
}>>;
export type SalaryStructureWhereInput = {
    AND?: Prisma.SalaryStructureWhereInput | Prisma.SalaryStructureWhereInput[];
    OR?: Prisma.SalaryStructureWhereInput[];
    NOT?: Prisma.SalaryStructureWhereInput | Prisma.SalaryStructureWhereInput[];
    id?: Prisma.StringFilter<"SalaryStructure"> | string;
    schoolId?: Prisma.StringFilter<"SalaryStructure"> | string;
    userId?: Prisma.StringFilter<"SalaryStructure"> | string;
    basicSalary?: Prisma.DecimalFilter<"SalaryStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFilter<"SalaryStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFilter<"SalaryStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFilter<"SalaryStructure"> | Date | string;
    isActive?: Prisma.BoolFilter<"SalaryStructure"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"SalaryStructure"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SalaryStructure"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    payslips?: Prisma.PayslipListRelationFilter;
};
export type SalaryStructureOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    fixedDeductions?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    payslips?: Prisma.PayslipOrderByRelationAggregateInput;
};
export type SalaryStructureWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SalaryStructureWhereInput | Prisma.SalaryStructureWhereInput[];
    OR?: Prisma.SalaryStructureWhereInput[];
    NOT?: Prisma.SalaryStructureWhereInput | Prisma.SalaryStructureWhereInput[];
    schoolId?: Prisma.StringFilter<"SalaryStructure"> | string;
    userId?: Prisma.StringFilter<"SalaryStructure"> | string;
    basicSalary?: Prisma.DecimalFilter<"SalaryStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFilter<"SalaryStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFilter<"SalaryStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFilter<"SalaryStructure"> | Date | string;
    isActive?: Prisma.BoolFilter<"SalaryStructure"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"SalaryStructure"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SalaryStructure"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    payslips?: Prisma.PayslipListRelationFilter;
}, "id">;
export type SalaryStructureOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    fixedDeductions?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SalaryStructureCountOrderByAggregateInput;
    _avg?: Prisma.SalaryStructureAvgOrderByAggregateInput;
    _max?: Prisma.SalaryStructureMaxOrderByAggregateInput;
    _min?: Prisma.SalaryStructureMinOrderByAggregateInput;
    _sum?: Prisma.SalaryStructureSumOrderByAggregateInput;
};
export type SalaryStructureScalarWhereWithAggregatesInput = {
    AND?: Prisma.SalaryStructureScalarWhereWithAggregatesInput | Prisma.SalaryStructureScalarWhereWithAggregatesInput[];
    OR?: Prisma.SalaryStructureScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SalaryStructureScalarWhereWithAggregatesInput | Prisma.SalaryStructureScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SalaryStructure"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"SalaryStructure"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"SalaryStructure"> | string;
    basicSalary?: Prisma.DecimalWithAggregatesFilter<"SalaryStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalWithAggregatesFilter<"SalaryStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalWithAggregatesFilter<"SalaryStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeWithAggregatesFilter<"SalaryStructure"> | Date | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"SalaryStructure"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SalaryStructure"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SalaryStructure"> | Date | string;
};
export type SalaryStructureCreateInput = {
    id?: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutSalaryStructuresInput;
    user: Prisma.UserCreateNestedOneWithoutSalaryStructuresInput;
    payslips?: Prisma.PayslipCreateNestedManyWithoutSalaryStructureInput;
};
export type SalaryStructureUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    userId: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payslips?: Prisma.PayslipUncheckedCreateNestedManyWithoutSalaryStructureInput;
};
export type SalaryStructureUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutSalaryStructuresNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSalaryStructuresNestedInput;
    payslips?: Prisma.PayslipUpdateManyWithoutSalaryStructureNestedInput;
};
export type SalaryStructureUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payslips?: Prisma.PayslipUncheckedUpdateManyWithoutSalaryStructureNestedInput;
};
export type SalaryStructureCreateManyInput = {
    id?: string;
    schoolId: string;
    userId: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalaryStructureUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalaryStructureUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalaryStructureListRelationFilter = {
    every?: Prisma.SalaryStructureWhereInput;
    some?: Prisma.SalaryStructureWhereInput;
    none?: Prisma.SalaryStructureWhereInput;
};
export type SalaryStructureOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SalaryStructureCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    fixedDeductions?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SalaryStructureAvgOrderByAggregateInput = {
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    fixedDeductions?: Prisma.SortOrder;
};
export type SalaryStructureMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    fixedDeductions?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SalaryStructureMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    fixedDeductions?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SalaryStructureSumOrderByAggregateInput = {
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    fixedDeductions?: Prisma.SortOrder;
};
export type SalaryStructureScalarRelationFilter = {
    is?: Prisma.SalaryStructureWhereInput;
    isNot?: Prisma.SalaryStructureWhereInput;
};
export type SalaryStructureCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.SalaryStructureCreateWithoutSchoolInput, Prisma.SalaryStructureUncheckedCreateWithoutSchoolInput> | Prisma.SalaryStructureCreateWithoutSchoolInput[] | Prisma.SalaryStructureUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SalaryStructureCreateOrConnectWithoutSchoolInput | Prisma.SalaryStructureCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.SalaryStructureCreateManySchoolInputEnvelope;
    connect?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
};
export type SalaryStructureUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.SalaryStructureCreateWithoutSchoolInput, Prisma.SalaryStructureUncheckedCreateWithoutSchoolInput> | Prisma.SalaryStructureCreateWithoutSchoolInput[] | Prisma.SalaryStructureUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SalaryStructureCreateOrConnectWithoutSchoolInput | Prisma.SalaryStructureCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.SalaryStructureCreateManySchoolInputEnvelope;
    connect?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
};
export type SalaryStructureUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.SalaryStructureCreateWithoutSchoolInput, Prisma.SalaryStructureUncheckedCreateWithoutSchoolInput> | Prisma.SalaryStructureCreateWithoutSchoolInput[] | Prisma.SalaryStructureUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SalaryStructureCreateOrConnectWithoutSchoolInput | Prisma.SalaryStructureCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.SalaryStructureUpsertWithWhereUniqueWithoutSchoolInput | Prisma.SalaryStructureUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.SalaryStructureCreateManySchoolInputEnvelope;
    set?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    disconnect?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    delete?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    connect?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    update?: Prisma.SalaryStructureUpdateWithWhereUniqueWithoutSchoolInput | Prisma.SalaryStructureUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.SalaryStructureUpdateManyWithWhereWithoutSchoolInput | Prisma.SalaryStructureUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.SalaryStructureScalarWhereInput | Prisma.SalaryStructureScalarWhereInput[];
};
export type SalaryStructureUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.SalaryStructureCreateWithoutSchoolInput, Prisma.SalaryStructureUncheckedCreateWithoutSchoolInput> | Prisma.SalaryStructureCreateWithoutSchoolInput[] | Prisma.SalaryStructureUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SalaryStructureCreateOrConnectWithoutSchoolInput | Prisma.SalaryStructureCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.SalaryStructureUpsertWithWhereUniqueWithoutSchoolInput | Prisma.SalaryStructureUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.SalaryStructureCreateManySchoolInputEnvelope;
    set?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    disconnect?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    delete?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    connect?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    update?: Prisma.SalaryStructureUpdateWithWhereUniqueWithoutSchoolInput | Prisma.SalaryStructureUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.SalaryStructureUpdateManyWithWhereWithoutSchoolInput | Prisma.SalaryStructureUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.SalaryStructureScalarWhereInput | Prisma.SalaryStructureScalarWhereInput[];
};
export type SalaryStructureCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SalaryStructureCreateWithoutUserInput, Prisma.SalaryStructureUncheckedCreateWithoutUserInput> | Prisma.SalaryStructureCreateWithoutUserInput[] | Prisma.SalaryStructureUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SalaryStructureCreateOrConnectWithoutUserInput | Prisma.SalaryStructureCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SalaryStructureCreateManyUserInputEnvelope;
    connect?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
};
export type SalaryStructureUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SalaryStructureCreateWithoutUserInput, Prisma.SalaryStructureUncheckedCreateWithoutUserInput> | Prisma.SalaryStructureCreateWithoutUserInput[] | Prisma.SalaryStructureUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SalaryStructureCreateOrConnectWithoutUserInput | Prisma.SalaryStructureCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SalaryStructureCreateManyUserInputEnvelope;
    connect?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
};
export type SalaryStructureUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SalaryStructureCreateWithoutUserInput, Prisma.SalaryStructureUncheckedCreateWithoutUserInput> | Prisma.SalaryStructureCreateWithoutUserInput[] | Prisma.SalaryStructureUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SalaryStructureCreateOrConnectWithoutUserInput | Prisma.SalaryStructureCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SalaryStructureUpsertWithWhereUniqueWithoutUserInput | Prisma.SalaryStructureUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SalaryStructureCreateManyUserInputEnvelope;
    set?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    disconnect?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    delete?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    connect?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    update?: Prisma.SalaryStructureUpdateWithWhereUniqueWithoutUserInput | Prisma.SalaryStructureUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SalaryStructureUpdateManyWithWhereWithoutUserInput | Prisma.SalaryStructureUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SalaryStructureScalarWhereInput | Prisma.SalaryStructureScalarWhereInput[];
};
export type SalaryStructureUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SalaryStructureCreateWithoutUserInput, Prisma.SalaryStructureUncheckedCreateWithoutUserInput> | Prisma.SalaryStructureCreateWithoutUserInput[] | Prisma.SalaryStructureUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SalaryStructureCreateOrConnectWithoutUserInput | Prisma.SalaryStructureCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SalaryStructureUpsertWithWhereUniqueWithoutUserInput | Prisma.SalaryStructureUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SalaryStructureCreateManyUserInputEnvelope;
    set?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    disconnect?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    delete?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    connect?: Prisma.SalaryStructureWhereUniqueInput | Prisma.SalaryStructureWhereUniqueInput[];
    update?: Prisma.SalaryStructureUpdateWithWhereUniqueWithoutUserInput | Prisma.SalaryStructureUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SalaryStructureUpdateManyWithWhereWithoutUserInput | Prisma.SalaryStructureUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SalaryStructureScalarWhereInput | Prisma.SalaryStructureScalarWhereInput[];
};
export type SalaryStructureCreateNestedOneWithoutPayslipsInput = {
    create?: Prisma.XOR<Prisma.SalaryStructureCreateWithoutPayslipsInput, Prisma.SalaryStructureUncheckedCreateWithoutPayslipsInput>;
    connectOrCreate?: Prisma.SalaryStructureCreateOrConnectWithoutPayslipsInput;
    connect?: Prisma.SalaryStructureWhereUniqueInput;
};
export type SalaryStructureUpdateOneRequiredWithoutPayslipsNestedInput = {
    create?: Prisma.XOR<Prisma.SalaryStructureCreateWithoutPayslipsInput, Prisma.SalaryStructureUncheckedCreateWithoutPayslipsInput>;
    connectOrCreate?: Prisma.SalaryStructureCreateOrConnectWithoutPayslipsInput;
    upsert?: Prisma.SalaryStructureUpsertWithoutPayslipsInput;
    connect?: Prisma.SalaryStructureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SalaryStructureUpdateToOneWithWhereWithoutPayslipsInput, Prisma.SalaryStructureUpdateWithoutPayslipsInput>, Prisma.SalaryStructureUncheckedUpdateWithoutPayslipsInput>;
};
export type SalaryStructureCreateWithoutSchoolInput = {
    id?: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSalaryStructuresInput;
    payslips?: Prisma.PayslipCreateNestedManyWithoutSalaryStructureInput;
};
export type SalaryStructureUncheckedCreateWithoutSchoolInput = {
    id?: string;
    userId: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payslips?: Prisma.PayslipUncheckedCreateNestedManyWithoutSalaryStructureInput;
};
export type SalaryStructureCreateOrConnectWithoutSchoolInput = {
    where: Prisma.SalaryStructureWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalaryStructureCreateWithoutSchoolInput, Prisma.SalaryStructureUncheckedCreateWithoutSchoolInput>;
};
export type SalaryStructureCreateManySchoolInputEnvelope = {
    data: Prisma.SalaryStructureCreateManySchoolInput | Prisma.SalaryStructureCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type SalaryStructureUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.SalaryStructureWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalaryStructureUpdateWithoutSchoolInput, Prisma.SalaryStructureUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.SalaryStructureCreateWithoutSchoolInput, Prisma.SalaryStructureUncheckedCreateWithoutSchoolInput>;
};
export type SalaryStructureUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.SalaryStructureWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalaryStructureUpdateWithoutSchoolInput, Prisma.SalaryStructureUncheckedUpdateWithoutSchoolInput>;
};
export type SalaryStructureUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.SalaryStructureScalarWhereInput;
    data: Prisma.XOR<Prisma.SalaryStructureUpdateManyMutationInput, Prisma.SalaryStructureUncheckedUpdateManyWithoutSchoolInput>;
};
export type SalaryStructureScalarWhereInput = {
    AND?: Prisma.SalaryStructureScalarWhereInput | Prisma.SalaryStructureScalarWhereInput[];
    OR?: Prisma.SalaryStructureScalarWhereInput[];
    NOT?: Prisma.SalaryStructureScalarWhereInput | Prisma.SalaryStructureScalarWhereInput[];
    id?: Prisma.StringFilter<"SalaryStructure"> | string;
    schoolId?: Prisma.StringFilter<"SalaryStructure"> | string;
    userId?: Prisma.StringFilter<"SalaryStructure"> | string;
    basicSalary?: Prisma.DecimalFilter<"SalaryStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFilter<"SalaryStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFilter<"SalaryStructure"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFilter<"SalaryStructure"> | Date | string;
    isActive?: Prisma.BoolFilter<"SalaryStructure"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"SalaryStructure"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SalaryStructure"> | Date | string;
};
export type SalaryStructureCreateWithoutUserInput = {
    id?: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutSalaryStructuresInput;
    payslips?: Prisma.PayslipCreateNestedManyWithoutSalaryStructureInput;
};
export type SalaryStructureUncheckedCreateWithoutUserInput = {
    id?: string;
    schoolId: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payslips?: Prisma.PayslipUncheckedCreateNestedManyWithoutSalaryStructureInput;
};
export type SalaryStructureCreateOrConnectWithoutUserInput = {
    where: Prisma.SalaryStructureWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalaryStructureCreateWithoutUserInput, Prisma.SalaryStructureUncheckedCreateWithoutUserInput>;
};
export type SalaryStructureCreateManyUserInputEnvelope = {
    data: Prisma.SalaryStructureCreateManyUserInput | Prisma.SalaryStructureCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SalaryStructureUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SalaryStructureWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalaryStructureUpdateWithoutUserInput, Prisma.SalaryStructureUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SalaryStructureCreateWithoutUserInput, Prisma.SalaryStructureUncheckedCreateWithoutUserInput>;
};
export type SalaryStructureUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SalaryStructureWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalaryStructureUpdateWithoutUserInput, Prisma.SalaryStructureUncheckedUpdateWithoutUserInput>;
};
export type SalaryStructureUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SalaryStructureScalarWhereInput;
    data: Prisma.XOR<Prisma.SalaryStructureUpdateManyMutationInput, Prisma.SalaryStructureUncheckedUpdateManyWithoutUserInput>;
};
export type SalaryStructureCreateWithoutPayslipsInput = {
    id?: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutSalaryStructuresInput;
    user: Prisma.UserCreateNestedOneWithoutSalaryStructuresInput;
};
export type SalaryStructureUncheckedCreateWithoutPayslipsInput = {
    id?: string;
    schoolId: string;
    userId: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalaryStructureCreateOrConnectWithoutPayslipsInput = {
    where: Prisma.SalaryStructureWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalaryStructureCreateWithoutPayslipsInput, Prisma.SalaryStructureUncheckedCreateWithoutPayslipsInput>;
};
export type SalaryStructureUpsertWithoutPayslipsInput = {
    update: Prisma.XOR<Prisma.SalaryStructureUpdateWithoutPayslipsInput, Prisma.SalaryStructureUncheckedUpdateWithoutPayslipsInput>;
    create: Prisma.XOR<Prisma.SalaryStructureCreateWithoutPayslipsInput, Prisma.SalaryStructureUncheckedCreateWithoutPayslipsInput>;
    where?: Prisma.SalaryStructureWhereInput;
};
export type SalaryStructureUpdateToOneWithWhereWithoutPayslipsInput = {
    where?: Prisma.SalaryStructureWhereInput;
    data: Prisma.XOR<Prisma.SalaryStructureUpdateWithoutPayslipsInput, Prisma.SalaryStructureUncheckedUpdateWithoutPayslipsInput>;
};
export type SalaryStructureUpdateWithoutPayslipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutSalaryStructuresNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSalaryStructuresNestedInput;
};
export type SalaryStructureUncheckedUpdateWithoutPayslipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalaryStructureCreateManySchoolInput = {
    id?: string;
    userId: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalaryStructureUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSalaryStructuresNestedInput;
    payslips?: Prisma.PayslipUpdateManyWithoutSalaryStructureNestedInput;
};
export type SalaryStructureUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payslips?: Prisma.PayslipUncheckedUpdateManyWithoutSalaryStructureNestedInput;
};
export type SalaryStructureUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalaryStructureCreateManyUserInput = {
    id?: string;
    schoolId: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalaryStructureUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutSalaryStructuresNestedInput;
    payslips?: Prisma.PayslipUpdateManyWithoutSalaryStructureNestedInput;
};
export type SalaryStructureUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payslips?: Prisma.PayslipUncheckedUpdateManyWithoutSalaryStructureNestedInput;
};
export type SalaryStructureUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fixedDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalaryStructureCountOutputType = {
    payslips: number;
};
export type SalaryStructureCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payslips?: boolean | SalaryStructureCountOutputTypeCountPayslipsArgs;
};
export type SalaryStructureCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureCountOutputTypeSelect<ExtArgs> | null;
};
export type SalaryStructureCountOutputTypeCountPayslipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayslipWhereInput;
};
export type SalaryStructureSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    basicSalary?: boolean;
    allowances?: boolean;
    fixedDeductions?: boolean;
    effectiveFrom?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    payslips?: boolean | Prisma.SalaryStructure$payslipsArgs<ExtArgs>;
    _count?: boolean | Prisma.SalaryStructureCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salaryStructure"]>;
export type SalaryStructureSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    basicSalary?: boolean;
    allowances?: boolean;
    fixedDeductions?: boolean;
    effectiveFrom?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salaryStructure"]>;
export type SalaryStructureSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    basicSalary?: boolean;
    allowances?: boolean;
    fixedDeductions?: boolean;
    effectiveFrom?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salaryStructure"]>;
export type SalaryStructureSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    basicSalary?: boolean;
    allowances?: boolean;
    fixedDeductions?: boolean;
    effectiveFrom?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SalaryStructureOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "userId" | "basicSalary" | "allowances" | "fixedDeductions" | "effectiveFrom" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["salaryStructure"]>;
export type SalaryStructureInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    payslips?: boolean | Prisma.SalaryStructure$payslipsArgs<ExtArgs>;
    _count?: boolean | Prisma.SalaryStructureCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SalaryStructureIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SalaryStructureIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SalaryStructurePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SalaryStructure";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        payslips: Prisma.$PayslipPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        userId: string;
        basicSalary: runtime.Decimal;
        allowances: runtime.Decimal;
        fixedDeductions: runtime.Decimal;
        effectiveFrom: Date;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["salaryStructure"]>;
    composites: {};
};
export type SalaryStructureGetPayload<S extends boolean | null | undefined | SalaryStructureDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload, S>;
export type SalaryStructureCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SalaryStructureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SalaryStructureCountAggregateInputType | true;
};
export interface SalaryStructureDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SalaryStructure'];
        meta: {
            name: 'SalaryStructure';
        };
    };
    findUnique<T extends SalaryStructureFindUniqueArgs>(args: Prisma.SelectSubset<T, SalaryStructureFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SalaryStructureClient<runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SalaryStructureFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SalaryStructureFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalaryStructureClient<runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SalaryStructureFindFirstArgs>(args?: Prisma.SelectSubset<T, SalaryStructureFindFirstArgs<ExtArgs>>): Prisma.Prisma__SalaryStructureClient<runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SalaryStructureFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SalaryStructureFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalaryStructureClient<runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SalaryStructureFindManyArgs>(args?: Prisma.SelectSubset<T, SalaryStructureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SalaryStructureCreateArgs>(args: Prisma.SelectSubset<T, SalaryStructureCreateArgs<ExtArgs>>): Prisma.Prisma__SalaryStructureClient<runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SalaryStructureCreateManyArgs>(args?: Prisma.SelectSubset<T, SalaryStructureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SalaryStructureCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SalaryStructureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SalaryStructureDeleteArgs>(args: Prisma.SelectSubset<T, SalaryStructureDeleteArgs<ExtArgs>>): Prisma.Prisma__SalaryStructureClient<runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SalaryStructureUpdateArgs>(args: Prisma.SelectSubset<T, SalaryStructureUpdateArgs<ExtArgs>>): Prisma.Prisma__SalaryStructureClient<runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SalaryStructureDeleteManyArgs>(args?: Prisma.SelectSubset<T, SalaryStructureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SalaryStructureUpdateManyArgs>(args: Prisma.SelectSubset<T, SalaryStructureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SalaryStructureUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SalaryStructureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SalaryStructureUpsertArgs>(args: Prisma.SelectSubset<T, SalaryStructureUpsertArgs<ExtArgs>>): Prisma.Prisma__SalaryStructureClient<runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SalaryStructureCountArgs>(args?: Prisma.Subset<T, SalaryStructureCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SalaryStructureCountAggregateOutputType> : number>;
    aggregate<T extends SalaryStructureAggregateArgs>(args: Prisma.Subset<T, SalaryStructureAggregateArgs>): Prisma.PrismaPromise<GetSalaryStructureAggregateType<T>>;
    groupBy<T extends SalaryStructureGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SalaryStructureGroupByArgs['orderBy'];
    } : {
        orderBy?: SalaryStructureGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SalaryStructureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaryStructureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SalaryStructureFieldRefs;
}
export interface Prisma__SalaryStructureClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payslips<T extends Prisma.SalaryStructure$payslipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalaryStructure$payslipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SalaryStructureFieldRefs {
    readonly id: Prisma.FieldRef<"SalaryStructure", 'String'>;
    readonly schoolId: Prisma.FieldRef<"SalaryStructure", 'String'>;
    readonly userId: Prisma.FieldRef<"SalaryStructure", 'String'>;
    readonly basicSalary: Prisma.FieldRef<"SalaryStructure", 'Decimal'>;
    readonly allowances: Prisma.FieldRef<"SalaryStructure", 'Decimal'>;
    readonly fixedDeductions: Prisma.FieldRef<"SalaryStructure", 'Decimal'>;
    readonly effectiveFrom: Prisma.FieldRef<"SalaryStructure", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"SalaryStructure", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"SalaryStructure", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SalaryStructure", 'DateTime'>;
}
export type SalaryStructureFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureSelect<ExtArgs> | null;
    omit?: Prisma.SalaryStructureOmit<ExtArgs> | null;
    include?: Prisma.SalaryStructureInclude<ExtArgs> | null;
    where: Prisma.SalaryStructureWhereUniqueInput;
};
export type SalaryStructureFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureSelect<ExtArgs> | null;
    omit?: Prisma.SalaryStructureOmit<ExtArgs> | null;
    include?: Prisma.SalaryStructureInclude<ExtArgs> | null;
    where: Prisma.SalaryStructureWhereUniqueInput;
};
export type SalaryStructureFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureSelect<ExtArgs> | null;
    omit?: Prisma.SalaryStructureOmit<ExtArgs> | null;
    include?: Prisma.SalaryStructureInclude<ExtArgs> | null;
    where?: Prisma.SalaryStructureWhereInput;
    orderBy?: Prisma.SalaryStructureOrderByWithRelationInput | Prisma.SalaryStructureOrderByWithRelationInput[];
    cursor?: Prisma.SalaryStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalaryStructureScalarFieldEnum | Prisma.SalaryStructureScalarFieldEnum[];
};
export type SalaryStructureFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureSelect<ExtArgs> | null;
    omit?: Prisma.SalaryStructureOmit<ExtArgs> | null;
    include?: Prisma.SalaryStructureInclude<ExtArgs> | null;
    where?: Prisma.SalaryStructureWhereInput;
    orderBy?: Prisma.SalaryStructureOrderByWithRelationInput | Prisma.SalaryStructureOrderByWithRelationInput[];
    cursor?: Prisma.SalaryStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalaryStructureScalarFieldEnum | Prisma.SalaryStructureScalarFieldEnum[];
};
export type SalaryStructureFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureSelect<ExtArgs> | null;
    omit?: Prisma.SalaryStructureOmit<ExtArgs> | null;
    include?: Prisma.SalaryStructureInclude<ExtArgs> | null;
    where?: Prisma.SalaryStructureWhereInput;
    orderBy?: Prisma.SalaryStructureOrderByWithRelationInput | Prisma.SalaryStructureOrderByWithRelationInput[];
    cursor?: Prisma.SalaryStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalaryStructureScalarFieldEnum | Prisma.SalaryStructureScalarFieldEnum[];
};
export type SalaryStructureCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureSelect<ExtArgs> | null;
    omit?: Prisma.SalaryStructureOmit<ExtArgs> | null;
    include?: Prisma.SalaryStructureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalaryStructureCreateInput, Prisma.SalaryStructureUncheckedCreateInput>;
};
export type SalaryStructureCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SalaryStructureCreateManyInput | Prisma.SalaryStructureCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SalaryStructureCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalaryStructureOmit<ExtArgs> | null;
    data: Prisma.SalaryStructureCreateManyInput | Prisma.SalaryStructureCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SalaryStructureIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SalaryStructureUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureSelect<ExtArgs> | null;
    omit?: Prisma.SalaryStructureOmit<ExtArgs> | null;
    include?: Prisma.SalaryStructureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalaryStructureUpdateInput, Prisma.SalaryStructureUncheckedUpdateInput>;
    where: Prisma.SalaryStructureWhereUniqueInput;
};
export type SalaryStructureUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SalaryStructureUpdateManyMutationInput, Prisma.SalaryStructureUncheckedUpdateManyInput>;
    where?: Prisma.SalaryStructureWhereInput;
    limit?: number;
};
export type SalaryStructureUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalaryStructureOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalaryStructureUpdateManyMutationInput, Prisma.SalaryStructureUncheckedUpdateManyInput>;
    where?: Prisma.SalaryStructureWhereInput;
    limit?: number;
    include?: Prisma.SalaryStructureIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SalaryStructureUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureSelect<ExtArgs> | null;
    omit?: Prisma.SalaryStructureOmit<ExtArgs> | null;
    include?: Prisma.SalaryStructureInclude<ExtArgs> | null;
    where: Prisma.SalaryStructureWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalaryStructureCreateInput, Prisma.SalaryStructureUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SalaryStructureUpdateInput, Prisma.SalaryStructureUncheckedUpdateInput>;
};
export type SalaryStructureDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureSelect<ExtArgs> | null;
    omit?: Prisma.SalaryStructureOmit<ExtArgs> | null;
    include?: Prisma.SalaryStructureInclude<ExtArgs> | null;
    where: Prisma.SalaryStructureWhereUniqueInput;
};
export type SalaryStructureDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalaryStructureWhereInput;
    limit?: number;
};
export type SalaryStructure$payslipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayslipSelect<ExtArgs> | null;
    omit?: Prisma.PayslipOmit<ExtArgs> | null;
    include?: Prisma.PayslipInclude<ExtArgs> | null;
    where?: Prisma.PayslipWhereInput;
    orderBy?: Prisma.PayslipOrderByWithRelationInput | Prisma.PayslipOrderByWithRelationInput[];
    cursor?: Prisma.PayslipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayslipScalarFieldEnum | Prisma.PayslipScalarFieldEnum[];
};
export type SalaryStructureDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalaryStructureSelect<ExtArgs> | null;
    omit?: Prisma.SalaryStructureOmit<ExtArgs> | null;
    include?: Prisma.SalaryStructureInclude<ExtArgs> | null;
};
