import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PayslipModel = runtime.Types.Result.DefaultSelection<Prisma.$PayslipPayload>;
export type AggregatePayslip = {
    _count: PayslipCountAggregateOutputType | null;
    _avg: PayslipAvgAggregateOutputType | null;
    _sum: PayslipSumAggregateOutputType | null;
    _min: PayslipMinAggregateOutputType | null;
    _max: PayslipMaxAggregateOutputType | null;
};
export type PayslipAvgAggregateOutputType = {
    basicSalary: runtime.Decimal | null;
    allowances: runtime.Decimal | null;
    attendanceDeduction: runtime.Decimal | null;
    otherDeductions: runtime.Decimal | null;
    netSalary: runtime.Decimal | null;
};
export type PayslipSumAggregateOutputType = {
    basicSalary: runtime.Decimal | null;
    allowances: runtime.Decimal | null;
    attendanceDeduction: runtime.Decimal | null;
    otherDeductions: runtime.Decimal | null;
    netSalary: runtime.Decimal | null;
};
export type PayslipMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    userId: string | null;
    salaryStructureId: string | null;
    month: string | null;
    basicSalary: runtime.Decimal | null;
    allowances: runtime.Decimal | null;
    attendanceDeduction: runtime.Decimal | null;
    otherDeductions: runtime.Decimal | null;
    netSalary: runtime.Decimal | null;
    status: $Enums.PayslipStatus | null;
    paidAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type PayslipMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    userId: string | null;
    salaryStructureId: string | null;
    month: string | null;
    basicSalary: runtime.Decimal | null;
    allowances: runtime.Decimal | null;
    attendanceDeduction: runtime.Decimal | null;
    otherDeductions: runtime.Decimal | null;
    netSalary: runtime.Decimal | null;
    status: $Enums.PayslipStatus | null;
    paidAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type PayslipCountAggregateOutputType = {
    id: number;
    schoolId: number;
    userId: number;
    salaryStructureId: number;
    month: number;
    basicSalary: number;
    allowances: number;
    attendanceDeduction: number;
    otherDeductions: number;
    netSalary: number;
    status: number;
    paidAt: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type PayslipAvgAggregateInputType = {
    basicSalary?: true;
    allowances?: true;
    attendanceDeduction?: true;
    otherDeductions?: true;
    netSalary?: true;
};
export type PayslipSumAggregateInputType = {
    basicSalary?: true;
    allowances?: true;
    attendanceDeduction?: true;
    otherDeductions?: true;
    netSalary?: true;
};
export type PayslipMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    userId?: true;
    salaryStructureId?: true;
    month?: true;
    basicSalary?: true;
    allowances?: true;
    attendanceDeduction?: true;
    otherDeductions?: true;
    netSalary?: true;
    status?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type PayslipMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    userId?: true;
    salaryStructureId?: true;
    month?: true;
    basicSalary?: true;
    allowances?: true;
    attendanceDeduction?: true;
    otherDeductions?: true;
    netSalary?: true;
    status?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type PayslipCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    userId?: true;
    salaryStructureId?: true;
    month?: true;
    basicSalary?: true;
    allowances?: true;
    attendanceDeduction?: true;
    otherDeductions?: true;
    netSalary?: true;
    status?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type PayslipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayslipWhereInput;
    orderBy?: Prisma.PayslipOrderByWithRelationInput | Prisma.PayslipOrderByWithRelationInput[];
    cursor?: Prisma.PayslipWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PayslipCountAggregateInputType;
    _avg?: PayslipAvgAggregateInputType;
    _sum?: PayslipSumAggregateInputType;
    _min?: PayslipMinAggregateInputType;
    _max?: PayslipMaxAggregateInputType;
};
export type GetPayslipAggregateType<T extends PayslipAggregateArgs> = {
    [P in keyof T & keyof AggregatePayslip]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayslip[P]> : Prisma.GetScalarType<T[P], AggregatePayslip[P]>;
};
export type PayslipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayslipWhereInput;
    orderBy?: Prisma.PayslipOrderByWithAggregationInput | Prisma.PayslipOrderByWithAggregationInput[];
    by: Prisma.PayslipScalarFieldEnum[] | Prisma.PayslipScalarFieldEnum;
    having?: Prisma.PayslipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayslipCountAggregateInputType | true;
    _avg?: PayslipAvgAggregateInputType;
    _sum?: PayslipSumAggregateInputType;
    _min?: PayslipMinAggregateInputType;
    _max?: PayslipMaxAggregateInputType;
};
export type PayslipGroupByOutputType = {
    id: string;
    schoolId: string;
    userId: string;
    salaryStructureId: string;
    month: string;
    basicSalary: runtime.Decimal;
    allowances: runtime.Decimal;
    attendanceDeduction: runtime.Decimal;
    otherDeductions: runtime.Decimal;
    netSalary: runtime.Decimal;
    status: $Enums.PayslipStatus;
    paidAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: PayslipCountAggregateOutputType | null;
    _avg: PayslipAvgAggregateOutputType | null;
    _sum: PayslipSumAggregateOutputType | null;
    _min: PayslipMinAggregateOutputType | null;
    _max: PayslipMaxAggregateOutputType | null;
};
export type GetPayslipGroupByPayload<T extends PayslipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayslipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayslipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayslipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayslipGroupByOutputType[P]>;
}>>;
export type PayslipWhereInput = {
    AND?: Prisma.PayslipWhereInput | Prisma.PayslipWhereInput[];
    OR?: Prisma.PayslipWhereInput[];
    NOT?: Prisma.PayslipWhereInput | Prisma.PayslipWhereInput[];
    id?: Prisma.StringFilter<"Payslip"> | string;
    schoolId?: Prisma.StringFilter<"Payslip"> | string;
    userId?: Prisma.StringFilter<"Payslip"> | string;
    salaryStructureId?: Prisma.StringFilter<"Payslip"> | string;
    month?: Prisma.StringFilter<"Payslip"> | string;
    basicSalary?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFilter<"Payslip"> | $Enums.PayslipStatus;
    paidAt?: Prisma.DateTimeNullableFilter<"Payslip"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payslip"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payslip"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Payslip"> | Date | string | null;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    salaryStructure?: Prisma.XOR<Prisma.SalaryStructureScalarRelationFilter, Prisma.SalaryStructureWhereInput>;
};
export type PayslipOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    salaryStructureId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    attendanceDeduction?: Prisma.SortOrder;
    otherDeductions?: Prisma.SortOrder;
    netSalary?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    salaryStructure?: Prisma.SalaryStructureOrderByWithRelationInput;
};
export type PayslipWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_month?: Prisma.PayslipUserIdMonthCompoundUniqueInput;
    AND?: Prisma.PayslipWhereInput | Prisma.PayslipWhereInput[];
    OR?: Prisma.PayslipWhereInput[];
    NOT?: Prisma.PayslipWhereInput | Prisma.PayslipWhereInput[];
    schoolId?: Prisma.StringFilter<"Payslip"> | string;
    userId?: Prisma.StringFilter<"Payslip"> | string;
    salaryStructureId?: Prisma.StringFilter<"Payslip"> | string;
    month?: Prisma.StringFilter<"Payslip"> | string;
    basicSalary?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFilter<"Payslip"> | $Enums.PayslipStatus;
    paidAt?: Prisma.DateTimeNullableFilter<"Payslip"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payslip"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payslip"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Payslip"> | Date | string | null;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    salaryStructure?: Prisma.XOR<Prisma.SalaryStructureScalarRelationFilter, Prisma.SalaryStructureWhereInput>;
}, "id" | "userId_month">;
export type PayslipOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    salaryStructureId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    attendanceDeduction?: Prisma.SortOrder;
    otherDeductions?: Prisma.SortOrder;
    netSalary?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PayslipCountOrderByAggregateInput;
    _avg?: Prisma.PayslipAvgOrderByAggregateInput;
    _max?: Prisma.PayslipMaxOrderByAggregateInput;
    _min?: Prisma.PayslipMinOrderByAggregateInput;
    _sum?: Prisma.PayslipSumOrderByAggregateInput;
};
export type PayslipScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayslipScalarWhereWithAggregatesInput | Prisma.PayslipScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayslipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayslipScalarWhereWithAggregatesInput | Prisma.PayslipScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Payslip"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Payslip"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Payslip"> | string;
    salaryStructureId?: Prisma.StringWithAggregatesFilter<"Payslip"> | string;
    month?: Prisma.StringWithAggregatesFilter<"Payslip"> | string;
    basicSalary?: Prisma.DecimalWithAggregatesFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalWithAggregatesFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalWithAggregatesFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalWithAggregatesFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalWithAggregatesFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusWithAggregatesFilter<"Payslip"> | $Enums.PayslipStatus;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Payslip"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Payslip"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Payslip"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Payslip"> | Date | string | null;
};
export type PayslipCreateInput = {
    id?: string;
    month: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.PayslipStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    school: Prisma.SchoolCreateNestedOneWithoutPayslipsInput;
    user: Prisma.UserCreateNestedOneWithoutPayslipsInput;
    salaryStructure: Prisma.SalaryStructureCreateNestedOneWithoutPayslipsInput;
};
export type PayslipUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    userId: string;
    salaryStructureId: string;
    month: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.PayslipStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PayslipUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school?: Prisma.SchoolUpdateOneRequiredWithoutPayslipsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutPayslipsNestedInput;
    salaryStructure?: Prisma.SalaryStructureUpdateOneRequiredWithoutPayslipsNestedInput;
};
export type PayslipUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    salaryStructureId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PayslipCreateManyInput = {
    id?: string;
    schoolId: string;
    userId: string;
    salaryStructureId: string;
    month: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.PayslipStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PayslipUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PayslipUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    salaryStructureId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PayslipListRelationFilter = {
    every?: Prisma.PayslipWhereInput;
    some?: Prisma.PayslipWhereInput;
    none?: Prisma.PayslipWhereInput;
};
export type PayslipOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayslipUserIdMonthCompoundUniqueInput = {
    userId: string;
    month: string;
};
export type PayslipCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    salaryStructureId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    attendanceDeduction?: Prisma.SortOrder;
    otherDeductions?: Prisma.SortOrder;
    netSalary?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type PayslipAvgOrderByAggregateInput = {
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    attendanceDeduction?: Prisma.SortOrder;
    otherDeductions?: Prisma.SortOrder;
    netSalary?: Prisma.SortOrder;
};
export type PayslipMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    salaryStructureId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    attendanceDeduction?: Prisma.SortOrder;
    otherDeductions?: Prisma.SortOrder;
    netSalary?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type PayslipMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    salaryStructureId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    attendanceDeduction?: Prisma.SortOrder;
    otherDeductions?: Prisma.SortOrder;
    netSalary?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type PayslipSumOrderByAggregateInput = {
    basicSalary?: Prisma.SortOrder;
    allowances?: Prisma.SortOrder;
    attendanceDeduction?: Prisma.SortOrder;
    otherDeductions?: Prisma.SortOrder;
    netSalary?: Prisma.SortOrder;
};
export type PayslipCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.PayslipCreateWithoutSchoolInput, Prisma.PayslipUncheckedCreateWithoutSchoolInput> | Prisma.PayslipCreateWithoutSchoolInput[] | Prisma.PayslipUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.PayslipCreateOrConnectWithoutSchoolInput | Prisma.PayslipCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.PayslipCreateManySchoolInputEnvelope;
    connect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
};
export type PayslipUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.PayslipCreateWithoutSchoolInput, Prisma.PayslipUncheckedCreateWithoutSchoolInput> | Prisma.PayslipCreateWithoutSchoolInput[] | Prisma.PayslipUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.PayslipCreateOrConnectWithoutSchoolInput | Prisma.PayslipCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.PayslipCreateManySchoolInputEnvelope;
    connect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
};
export type PayslipUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.PayslipCreateWithoutSchoolInput, Prisma.PayslipUncheckedCreateWithoutSchoolInput> | Prisma.PayslipCreateWithoutSchoolInput[] | Prisma.PayslipUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.PayslipCreateOrConnectWithoutSchoolInput | Prisma.PayslipCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.PayslipUpsertWithWhereUniqueWithoutSchoolInput | Prisma.PayslipUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.PayslipCreateManySchoolInputEnvelope;
    set?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    disconnect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    delete?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    connect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    update?: Prisma.PayslipUpdateWithWhereUniqueWithoutSchoolInput | Prisma.PayslipUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.PayslipUpdateManyWithWhereWithoutSchoolInput | Prisma.PayslipUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.PayslipScalarWhereInput | Prisma.PayslipScalarWhereInput[];
};
export type PayslipUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.PayslipCreateWithoutSchoolInput, Prisma.PayslipUncheckedCreateWithoutSchoolInput> | Prisma.PayslipCreateWithoutSchoolInput[] | Prisma.PayslipUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.PayslipCreateOrConnectWithoutSchoolInput | Prisma.PayslipCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.PayslipUpsertWithWhereUniqueWithoutSchoolInput | Prisma.PayslipUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.PayslipCreateManySchoolInputEnvelope;
    set?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    disconnect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    delete?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    connect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    update?: Prisma.PayslipUpdateWithWhereUniqueWithoutSchoolInput | Prisma.PayslipUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.PayslipUpdateManyWithWhereWithoutSchoolInput | Prisma.PayslipUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.PayslipScalarWhereInput | Prisma.PayslipScalarWhereInput[];
};
export type PayslipCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PayslipCreateWithoutUserInput, Prisma.PayslipUncheckedCreateWithoutUserInput> | Prisma.PayslipCreateWithoutUserInput[] | Prisma.PayslipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PayslipCreateOrConnectWithoutUserInput | Prisma.PayslipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PayslipCreateManyUserInputEnvelope;
    connect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
};
export type PayslipUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PayslipCreateWithoutUserInput, Prisma.PayslipUncheckedCreateWithoutUserInput> | Prisma.PayslipCreateWithoutUserInput[] | Prisma.PayslipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PayslipCreateOrConnectWithoutUserInput | Prisma.PayslipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PayslipCreateManyUserInputEnvelope;
    connect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
};
export type PayslipUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PayslipCreateWithoutUserInput, Prisma.PayslipUncheckedCreateWithoutUserInput> | Prisma.PayslipCreateWithoutUserInput[] | Prisma.PayslipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PayslipCreateOrConnectWithoutUserInput | Prisma.PayslipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PayslipUpsertWithWhereUniqueWithoutUserInput | Prisma.PayslipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PayslipCreateManyUserInputEnvelope;
    set?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    disconnect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    delete?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    connect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    update?: Prisma.PayslipUpdateWithWhereUniqueWithoutUserInput | Prisma.PayslipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PayslipUpdateManyWithWhereWithoutUserInput | Prisma.PayslipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PayslipScalarWhereInput | Prisma.PayslipScalarWhereInput[];
};
export type PayslipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PayslipCreateWithoutUserInput, Prisma.PayslipUncheckedCreateWithoutUserInput> | Prisma.PayslipCreateWithoutUserInput[] | Prisma.PayslipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PayslipCreateOrConnectWithoutUserInput | Prisma.PayslipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PayslipUpsertWithWhereUniqueWithoutUserInput | Prisma.PayslipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PayslipCreateManyUserInputEnvelope;
    set?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    disconnect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    delete?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    connect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    update?: Prisma.PayslipUpdateWithWhereUniqueWithoutUserInput | Prisma.PayslipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PayslipUpdateManyWithWhereWithoutUserInput | Prisma.PayslipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PayslipScalarWhereInput | Prisma.PayslipScalarWhereInput[];
};
export type PayslipCreateNestedManyWithoutSalaryStructureInput = {
    create?: Prisma.XOR<Prisma.PayslipCreateWithoutSalaryStructureInput, Prisma.PayslipUncheckedCreateWithoutSalaryStructureInput> | Prisma.PayslipCreateWithoutSalaryStructureInput[] | Prisma.PayslipUncheckedCreateWithoutSalaryStructureInput[];
    connectOrCreate?: Prisma.PayslipCreateOrConnectWithoutSalaryStructureInput | Prisma.PayslipCreateOrConnectWithoutSalaryStructureInput[];
    createMany?: Prisma.PayslipCreateManySalaryStructureInputEnvelope;
    connect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
};
export type PayslipUncheckedCreateNestedManyWithoutSalaryStructureInput = {
    create?: Prisma.XOR<Prisma.PayslipCreateWithoutSalaryStructureInput, Prisma.PayslipUncheckedCreateWithoutSalaryStructureInput> | Prisma.PayslipCreateWithoutSalaryStructureInput[] | Prisma.PayslipUncheckedCreateWithoutSalaryStructureInput[];
    connectOrCreate?: Prisma.PayslipCreateOrConnectWithoutSalaryStructureInput | Prisma.PayslipCreateOrConnectWithoutSalaryStructureInput[];
    createMany?: Prisma.PayslipCreateManySalaryStructureInputEnvelope;
    connect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
};
export type PayslipUpdateManyWithoutSalaryStructureNestedInput = {
    create?: Prisma.XOR<Prisma.PayslipCreateWithoutSalaryStructureInput, Prisma.PayslipUncheckedCreateWithoutSalaryStructureInput> | Prisma.PayslipCreateWithoutSalaryStructureInput[] | Prisma.PayslipUncheckedCreateWithoutSalaryStructureInput[];
    connectOrCreate?: Prisma.PayslipCreateOrConnectWithoutSalaryStructureInput | Prisma.PayslipCreateOrConnectWithoutSalaryStructureInput[];
    upsert?: Prisma.PayslipUpsertWithWhereUniqueWithoutSalaryStructureInput | Prisma.PayslipUpsertWithWhereUniqueWithoutSalaryStructureInput[];
    createMany?: Prisma.PayslipCreateManySalaryStructureInputEnvelope;
    set?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    disconnect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    delete?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    connect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    update?: Prisma.PayslipUpdateWithWhereUniqueWithoutSalaryStructureInput | Prisma.PayslipUpdateWithWhereUniqueWithoutSalaryStructureInput[];
    updateMany?: Prisma.PayslipUpdateManyWithWhereWithoutSalaryStructureInput | Prisma.PayslipUpdateManyWithWhereWithoutSalaryStructureInput[];
    deleteMany?: Prisma.PayslipScalarWhereInput | Prisma.PayslipScalarWhereInput[];
};
export type PayslipUncheckedUpdateManyWithoutSalaryStructureNestedInput = {
    create?: Prisma.XOR<Prisma.PayslipCreateWithoutSalaryStructureInput, Prisma.PayslipUncheckedCreateWithoutSalaryStructureInput> | Prisma.PayslipCreateWithoutSalaryStructureInput[] | Prisma.PayslipUncheckedCreateWithoutSalaryStructureInput[];
    connectOrCreate?: Prisma.PayslipCreateOrConnectWithoutSalaryStructureInput | Prisma.PayslipCreateOrConnectWithoutSalaryStructureInput[];
    upsert?: Prisma.PayslipUpsertWithWhereUniqueWithoutSalaryStructureInput | Prisma.PayslipUpsertWithWhereUniqueWithoutSalaryStructureInput[];
    createMany?: Prisma.PayslipCreateManySalaryStructureInputEnvelope;
    set?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    disconnect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    delete?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    connect?: Prisma.PayslipWhereUniqueInput | Prisma.PayslipWhereUniqueInput[];
    update?: Prisma.PayslipUpdateWithWhereUniqueWithoutSalaryStructureInput | Prisma.PayslipUpdateWithWhereUniqueWithoutSalaryStructureInput[];
    updateMany?: Prisma.PayslipUpdateManyWithWhereWithoutSalaryStructureInput | Prisma.PayslipUpdateManyWithWhereWithoutSalaryStructureInput[];
    deleteMany?: Prisma.PayslipScalarWhereInput | Prisma.PayslipScalarWhereInput[];
};
export type EnumPayslipStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayslipStatus;
};
export type PayslipCreateWithoutSchoolInput = {
    id?: string;
    month: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.PayslipStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutPayslipsInput;
    salaryStructure: Prisma.SalaryStructureCreateNestedOneWithoutPayslipsInput;
};
export type PayslipUncheckedCreateWithoutSchoolInput = {
    id?: string;
    userId: string;
    salaryStructureId: string;
    month: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.PayslipStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PayslipCreateOrConnectWithoutSchoolInput = {
    where: Prisma.PayslipWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayslipCreateWithoutSchoolInput, Prisma.PayslipUncheckedCreateWithoutSchoolInput>;
};
export type PayslipCreateManySchoolInputEnvelope = {
    data: Prisma.PayslipCreateManySchoolInput | Prisma.PayslipCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type PayslipUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.PayslipWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayslipUpdateWithoutSchoolInput, Prisma.PayslipUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.PayslipCreateWithoutSchoolInput, Prisma.PayslipUncheckedCreateWithoutSchoolInput>;
};
export type PayslipUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.PayslipWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayslipUpdateWithoutSchoolInput, Prisma.PayslipUncheckedUpdateWithoutSchoolInput>;
};
export type PayslipUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.PayslipScalarWhereInput;
    data: Prisma.XOR<Prisma.PayslipUpdateManyMutationInput, Prisma.PayslipUncheckedUpdateManyWithoutSchoolInput>;
};
export type PayslipScalarWhereInput = {
    AND?: Prisma.PayslipScalarWhereInput | Prisma.PayslipScalarWhereInput[];
    OR?: Prisma.PayslipScalarWhereInput[];
    NOT?: Prisma.PayslipScalarWhereInput | Prisma.PayslipScalarWhereInput[];
    id?: Prisma.StringFilter<"Payslip"> | string;
    schoolId?: Prisma.StringFilter<"Payslip"> | string;
    userId?: Prisma.StringFilter<"Payslip"> | string;
    salaryStructureId?: Prisma.StringFilter<"Payslip"> | string;
    month?: Prisma.StringFilter<"Payslip"> | string;
    basicSalary?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFilter<"Payslip"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFilter<"Payslip"> | $Enums.PayslipStatus;
    paidAt?: Prisma.DateTimeNullableFilter<"Payslip"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payslip"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payslip"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Payslip"> | Date | string | null;
};
export type PayslipCreateWithoutUserInput = {
    id?: string;
    month: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.PayslipStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    school: Prisma.SchoolCreateNestedOneWithoutPayslipsInput;
    salaryStructure: Prisma.SalaryStructureCreateNestedOneWithoutPayslipsInput;
};
export type PayslipUncheckedCreateWithoutUserInput = {
    id?: string;
    schoolId: string;
    salaryStructureId: string;
    month: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.PayslipStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PayslipCreateOrConnectWithoutUserInput = {
    where: Prisma.PayslipWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayslipCreateWithoutUserInput, Prisma.PayslipUncheckedCreateWithoutUserInput>;
};
export type PayslipCreateManyUserInputEnvelope = {
    data: Prisma.PayslipCreateManyUserInput | Prisma.PayslipCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PayslipUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PayslipWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayslipUpdateWithoutUserInput, Prisma.PayslipUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PayslipCreateWithoutUserInput, Prisma.PayslipUncheckedCreateWithoutUserInput>;
};
export type PayslipUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PayslipWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayslipUpdateWithoutUserInput, Prisma.PayslipUncheckedUpdateWithoutUserInput>;
};
export type PayslipUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PayslipScalarWhereInput;
    data: Prisma.XOR<Prisma.PayslipUpdateManyMutationInput, Prisma.PayslipUncheckedUpdateManyWithoutUserInput>;
};
export type PayslipCreateWithoutSalaryStructureInput = {
    id?: string;
    month: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.PayslipStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    school: Prisma.SchoolCreateNestedOneWithoutPayslipsInput;
    user: Prisma.UserCreateNestedOneWithoutPayslipsInput;
};
export type PayslipUncheckedCreateWithoutSalaryStructureInput = {
    id?: string;
    schoolId: string;
    userId: string;
    month: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.PayslipStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PayslipCreateOrConnectWithoutSalaryStructureInput = {
    where: Prisma.PayslipWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayslipCreateWithoutSalaryStructureInput, Prisma.PayslipUncheckedCreateWithoutSalaryStructureInput>;
};
export type PayslipCreateManySalaryStructureInputEnvelope = {
    data: Prisma.PayslipCreateManySalaryStructureInput | Prisma.PayslipCreateManySalaryStructureInput[];
    skipDuplicates?: boolean;
};
export type PayslipUpsertWithWhereUniqueWithoutSalaryStructureInput = {
    where: Prisma.PayslipWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayslipUpdateWithoutSalaryStructureInput, Prisma.PayslipUncheckedUpdateWithoutSalaryStructureInput>;
    create: Prisma.XOR<Prisma.PayslipCreateWithoutSalaryStructureInput, Prisma.PayslipUncheckedCreateWithoutSalaryStructureInput>;
};
export type PayslipUpdateWithWhereUniqueWithoutSalaryStructureInput = {
    where: Prisma.PayslipWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayslipUpdateWithoutSalaryStructureInput, Prisma.PayslipUncheckedUpdateWithoutSalaryStructureInput>;
};
export type PayslipUpdateManyWithWhereWithoutSalaryStructureInput = {
    where: Prisma.PayslipScalarWhereInput;
    data: Prisma.XOR<Prisma.PayslipUpdateManyMutationInput, Prisma.PayslipUncheckedUpdateManyWithoutSalaryStructureInput>;
};
export type PayslipCreateManySchoolInput = {
    id?: string;
    userId: string;
    salaryStructureId: string;
    month: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.PayslipStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PayslipUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutPayslipsNestedInput;
    salaryStructure?: Prisma.SalaryStructureUpdateOneRequiredWithoutPayslipsNestedInput;
};
export type PayslipUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    salaryStructureId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PayslipUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    salaryStructureId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PayslipCreateManyUserInput = {
    id?: string;
    schoolId: string;
    salaryStructureId: string;
    month: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.PayslipStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PayslipUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school?: Prisma.SchoolUpdateOneRequiredWithoutPayslipsNestedInput;
    salaryStructure?: Prisma.SalaryStructureUpdateOneRequiredWithoutPayslipsNestedInput;
};
export type PayslipUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    salaryStructureId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PayslipUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    salaryStructureId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PayslipCreateManySalaryStructureInput = {
    id?: string;
    schoolId: string;
    userId: string;
    month: string;
    basicSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.PayslipStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PayslipUpdateWithoutSalaryStructureInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    school?: Prisma.SchoolUpdateOneRequiredWithoutPayslipsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutPayslipsNestedInput;
};
export type PayslipUncheckedUpdateWithoutSalaryStructureInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PayslipUncheckedUpdateManyWithoutSalaryStructureInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    basicSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    allowances?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attendanceDeduction?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    otherDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netSalary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumPayslipStatusFieldUpdateOperationsInput | $Enums.PayslipStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PayslipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    salaryStructureId?: boolean;
    month?: boolean;
    basicSalary?: boolean;
    allowances?: boolean;
    attendanceDeduction?: boolean;
    otherDeductions?: boolean;
    netSalary?: boolean;
    status?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    salaryStructure?: boolean | Prisma.SalaryStructureDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payslip"]>;
export type PayslipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    salaryStructureId?: boolean;
    month?: boolean;
    basicSalary?: boolean;
    allowances?: boolean;
    attendanceDeduction?: boolean;
    otherDeductions?: boolean;
    netSalary?: boolean;
    status?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    salaryStructure?: boolean | Prisma.SalaryStructureDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payslip"]>;
export type PayslipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    salaryStructureId?: boolean;
    month?: boolean;
    basicSalary?: boolean;
    allowances?: boolean;
    attendanceDeduction?: boolean;
    otherDeductions?: boolean;
    netSalary?: boolean;
    status?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    salaryStructure?: boolean | Prisma.SalaryStructureDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payslip"]>;
export type PayslipSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    userId?: boolean;
    salaryStructureId?: boolean;
    month?: boolean;
    basicSalary?: boolean;
    allowances?: boolean;
    attendanceDeduction?: boolean;
    otherDeductions?: boolean;
    netSalary?: boolean;
    status?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type PayslipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "userId" | "salaryStructureId" | "month" | "basicSalary" | "allowances" | "attendanceDeduction" | "otherDeductions" | "netSalary" | "status" | "paidAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["payslip"]>;
export type PayslipInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    salaryStructure?: boolean | Prisma.SalaryStructureDefaultArgs<ExtArgs>;
};
export type PayslipIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    salaryStructure?: boolean | Prisma.SalaryStructureDefaultArgs<ExtArgs>;
};
export type PayslipIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    salaryStructure?: boolean | Prisma.SalaryStructureDefaultArgs<ExtArgs>;
};
export type $PayslipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Payslip";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        salaryStructure: Prisma.$SalaryStructurePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        userId: string;
        salaryStructureId: string;
        month: string;
        basicSalary: runtime.Decimal;
        allowances: runtime.Decimal;
        attendanceDeduction: runtime.Decimal;
        otherDeductions: runtime.Decimal;
        netSalary: runtime.Decimal;
        status: $Enums.PayslipStatus;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["payslip"]>;
    composites: {};
};
export type PayslipGetPayload<S extends boolean | null | undefined | PayslipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayslipPayload, S>;
export type PayslipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayslipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayslipCountAggregateInputType | true;
};
export interface PayslipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Payslip'];
        meta: {
            name: 'Payslip';
        };
    };
    findUnique<T extends PayslipFindUniqueArgs>(args: Prisma.SelectSubset<T, PayslipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayslipClient<runtime.Types.Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PayslipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayslipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayslipClient<runtime.Types.Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PayslipFindFirstArgs>(args?: Prisma.SelectSubset<T, PayslipFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayslipClient<runtime.Types.Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PayslipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayslipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayslipClient<runtime.Types.Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PayslipFindManyArgs>(args?: Prisma.SelectSubset<T, PayslipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PayslipCreateArgs>(args: Prisma.SelectSubset<T, PayslipCreateArgs<ExtArgs>>): Prisma.Prisma__PayslipClient<runtime.Types.Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PayslipCreateManyArgs>(args?: Prisma.SelectSubset<T, PayslipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PayslipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayslipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PayslipDeleteArgs>(args: Prisma.SelectSubset<T, PayslipDeleteArgs<ExtArgs>>): Prisma.Prisma__PayslipClient<runtime.Types.Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PayslipUpdateArgs>(args: Prisma.SelectSubset<T, PayslipUpdateArgs<ExtArgs>>): Prisma.Prisma__PayslipClient<runtime.Types.Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PayslipDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayslipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PayslipUpdateManyArgs>(args: Prisma.SelectSubset<T, PayslipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PayslipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayslipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PayslipUpsertArgs>(args: Prisma.SelectSubset<T, PayslipUpsertArgs<ExtArgs>>): Prisma.Prisma__PayslipClient<runtime.Types.Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PayslipCountArgs>(args?: Prisma.Subset<T, PayslipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayslipCountAggregateOutputType> : number>;
    aggregate<T extends PayslipAggregateArgs>(args: Prisma.Subset<T, PayslipAggregateArgs>): Prisma.PrismaPromise<GetPayslipAggregateType<T>>;
    groupBy<T extends PayslipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayslipGroupByArgs['orderBy'];
    } : {
        orderBy?: PayslipGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayslipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayslipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PayslipFieldRefs;
}
export interface Prisma__PayslipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    salaryStructure<T extends Prisma.SalaryStructureDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalaryStructureDefaultArgs<ExtArgs>>): Prisma.Prisma__SalaryStructureClient<runtime.Types.Result.GetResult<Prisma.$SalaryStructurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PayslipFieldRefs {
    readonly id: Prisma.FieldRef<"Payslip", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Payslip", 'String'>;
    readonly userId: Prisma.FieldRef<"Payslip", 'String'>;
    readonly salaryStructureId: Prisma.FieldRef<"Payslip", 'String'>;
    readonly month: Prisma.FieldRef<"Payslip", 'String'>;
    readonly basicSalary: Prisma.FieldRef<"Payslip", 'Decimal'>;
    readonly allowances: Prisma.FieldRef<"Payslip", 'Decimal'>;
    readonly attendanceDeduction: Prisma.FieldRef<"Payslip", 'Decimal'>;
    readonly otherDeductions: Prisma.FieldRef<"Payslip", 'Decimal'>;
    readonly netSalary: Prisma.FieldRef<"Payslip", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Payslip", 'PayslipStatus'>;
    readonly paidAt: Prisma.FieldRef<"Payslip", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Payslip", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Payslip", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Payslip", 'DateTime'>;
}
export type PayslipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayslipSelect<ExtArgs> | null;
    omit?: Prisma.PayslipOmit<ExtArgs> | null;
    include?: Prisma.PayslipInclude<ExtArgs> | null;
    where: Prisma.PayslipWhereUniqueInput;
};
export type PayslipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayslipSelect<ExtArgs> | null;
    omit?: Prisma.PayslipOmit<ExtArgs> | null;
    include?: Prisma.PayslipInclude<ExtArgs> | null;
    where: Prisma.PayslipWhereUniqueInput;
};
export type PayslipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayslipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayslipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayslipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayslipSelect<ExtArgs> | null;
    omit?: Prisma.PayslipOmit<ExtArgs> | null;
    include?: Prisma.PayslipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayslipCreateInput, Prisma.PayslipUncheckedCreateInput>;
};
export type PayslipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PayslipCreateManyInput | Prisma.PayslipCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PayslipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayslipSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayslipOmit<ExtArgs> | null;
    data: Prisma.PayslipCreateManyInput | Prisma.PayslipCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PayslipIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PayslipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayslipSelect<ExtArgs> | null;
    omit?: Prisma.PayslipOmit<ExtArgs> | null;
    include?: Prisma.PayslipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayslipUpdateInput, Prisma.PayslipUncheckedUpdateInput>;
    where: Prisma.PayslipWhereUniqueInput;
};
export type PayslipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PayslipUpdateManyMutationInput, Prisma.PayslipUncheckedUpdateManyInput>;
    where?: Prisma.PayslipWhereInput;
    limit?: number;
};
export type PayslipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayslipSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayslipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayslipUpdateManyMutationInput, Prisma.PayslipUncheckedUpdateManyInput>;
    where?: Prisma.PayslipWhereInput;
    limit?: number;
    include?: Prisma.PayslipIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PayslipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayslipSelect<ExtArgs> | null;
    omit?: Prisma.PayslipOmit<ExtArgs> | null;
    include?: Prisma.PayslipInclude<ExtArgs> | null;
    where: Prisma.PayslipWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayslipCreateInput, Prisma.PayslipUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PayslipUpdateInput, Prisma.PayslipUncheckedUpdateInput>;
};
export type PayslipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayslipSelect<ExtArgs> | null;
    omit?: Prisma.PayslipOmit<ExtArgs> | null;
    include?: Prisma.PayslipInclude<ExtArgs> | null;
    where: Prisma.PayslipWhereUniqueInput;
};
export type PayslipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayslipWhereInput;
    limit?: number;
};
export type PayslipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayslipSelect<ExtArgs> | null;
    omit?: Prisma.PayslipOmit<ExtArgs> | null;
    include?: Prisma.PayslipInclude<ExtArgs> | null;
};
