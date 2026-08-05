import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VehicleModel = runtime.Types.Result.DefaultSelection<Prisma.$VehiclePayload>;
export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null;
    _avg: VehicleAvgAggregateOutputType | null;
    _sum: VehicleSumAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
};
export type VehicleAvgAggregateOutputType = {
    capacity: number | null;
};
export type VehicleSumAggregateOutputType = {
    capacity: number | null;
};
export type VehicleMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    registrationNumber: string | null;
    capacity: number | null;
    driverName: string | null;
    driverPhone: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VehicleMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    branchId: string | null;
    registrationNumber: string | null;
    capacity: number | null;
    driverName: string | null;
    driverPhone: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VehicleCountAggregateOutputType = {
    id: number;
    schoolId: number;
    branchId: number;
    registrationNumber: number;
    capacity: number;
    driverName: number;
    driverPhone: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VehicleAvgAggregateInputType = {
    capacity?: true;
};
export type VehicleSumAggregateInputType = {
    capacity?: true;
};
export type VehicleMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    registrationNumber?: true;
    capacity?: true;
    driverName?: true;
    driverPhone?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VehicleMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    registrationNumber?: true;
    capacity?: true;
    driverName?: true;
    driverPhone?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VehicleCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    branchId?: true;
    registrationNumber?: true;
    capacity?: true;
    driverName?: true;
    driverPhone?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VehicleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithRelationInput | Prisma.VehicleOrderByWithRelationInput[];
    cursor?: Prisma.VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VehicleCountAggregateInputType;
    _avg?: VehicleAvgAggregateInputType;
    _sum?: VehicleSumAggregateInputType;
    _min?: VehicleMinAggregateInputType;
    _max?: VehicleMaxAggregateInputType;
};
export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
    [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVehicle[P]> : Prisma.GetScalarType<T[P], AggregateVehicle[P]>;
};
export type VehicleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithAggregationInput | Prisma.VehicleOrderByWithAggregationInput[];
    by: Prisma.VehicleScalarFieldEnum[] | Prisma.VehicleScalarFieldEnum;
    having?: Prisma.VehicleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VehicleCountAggregateInputType | true;
    _avg?: VehicleAvgAggregateInputType;
    _sum?: VehicleSumAggregateInputType;
    _min?: VehicleMinAggregateInputType;
    _max?: VehicleMaxAggregateInputType;
};
export type VehicleGroupByOutputType = {
    id: string;
    schoolId: string;
    branchId: string;
    registrationNumber: string;
    capacity: number | null;
    driverName: string | null;
    driverPhone: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: VehicleCountAggregateOutputType | null;
    _avg: VehicleAvgAggregateOutputType | null;
    _sum: VehicleSumAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
};
export type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VehicleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VehicleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VehicleGroupByOutputType[P]>;
}>>;
export type VehicleWhereInput = {
    AND?: Prisma.VehicleWhereInput | Prisma.VehicleWhereInput[];
    OR?: Prisma.VehicleWhereInput[];
    NOT?: Prisma.VehicleWhereInput | Prisma.VehicleWhereInput[];
    id?: Prisma.StringFilter<"Vehicle"> | string;
    schoolId?: Prisma.StringFilter<"Vehicle"> | string;
    branchId?: Prisma.StringFilter<"Vehicle"> | string;
    registrationNumber?: Prisma.StringFilter<"Vehicle"> | string;
    capacity?: Prisma.IntNullableFilter<"Vehicle"> | number | null;
    driverName?: Prisma.StringNullableFilter<"Vehicle"> | string | null;
    driverPhone?: Prisma.StringNullableFilter<"Vehicle"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    routes?: Prisma.RouteListRelationFilter;
};
export type VehicleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    registrationNumber?: Prisma.SortOrder;
    capacity?: Prisma.SortOrderInput | Prisma.SortOrder;
    driverName?: Prisma.SortOrderInput | Prisma.SortOrder;
    driverPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    branch?: Prisma.BranchOrderByWithRelationInput;
    routes?: Prisma.RouteOrderByRelationAggregateInput;
};
export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    schoolId_registrationNumber?: Prisma.VehicleSchoolIdRegistrationNumberCompoundUniqueInput;
    AND?: Prisma.VehicleWhereInput | Prisma.VehicleWhereInput[];
    OR?: Prisma.VehicleWhereInput[];
    NOT?: Prisma.VehicleWhereInput | Prisma.VehicleWhereInput[];
    schoolId?: Prisma.StringFilter<"Vehicle"> | string;
    branchId?: Prisma.StringFilter<"Vehicle"> | string;
    registrationNumber?: Prisma.StringFilter<"Vehicle"> | string;
    capacity?: Prisma.IntNullableFilter<"Vehicle"> | number | null;
    driverName?: Prisma.StringNullableFilter<"Vehicle"> | string | null;
    driverPhone?: Prisma.StringNullableFilter<"Vehicle"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    routes?: Prisma.RouteListRelationFilter;
}, "id" | "schoolId_registrationNumber">;
export type VehicleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    registrationNumber?: Prisma.SortOrder;
    capacity?: Prisma.SortOrderInput | Prisma.SortOrder;
    driverName?: Prisma.SortOrderInput | Prisma.SortOrder;
    driverPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VehicleCountOrderByAggregateInput;
    _avg?: Prisma.VehicleAvgOrderByAggregateInput;
    _max?: Prisma.VehicleMaxOrderByAggregateInput;
    _min?: Prisma.VehicleMinOrderByAggregateInput;
    _sum?: Prisma.VehicleSumOrderByAggregateInput;
};
export type VehicleScalarWhereWithAggregatesInput = {
    AND?: Prisma.VehicleScalarWhereWithAggregatesInput | Prisma.VehicleScalarWhereWithAggregatesInput[];
    OR?: Prisma.VehicleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VehicleScalarWhereWithAggregatesInput | Prisma.VehicleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    branchId?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    registrationNumber?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    capacity?: Prisma.IntNullableWithAggregatesFilter<"Vehicle"> | number | null;
    driverName?: Prisma.StringNullableWithAggregatesFilter<"Vehicle"> | string | null;
    driverPhone?: Prisma.StringNullableWithAggregatesFilter<"Vehicle"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Vehicle"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Vehicle"> | Date | string;
};
export type VehicleCreateInput = {
    id?: string;
    registrationNumber: string;
    capacity?: number | null;
    driverName?: string | null;
    driverPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutVehiclesInput;
    branch: Prisma.BranchCreateNestedOneWithoutVehiclesInput;
    routes?: Prisma.RouteCreateNestedManyWithoutVehicleInput;
};
export type VehicleUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    registrationNumber: string;
    capacity?: number | null;
    driverName?: string | null;
    driverPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    routes?: Prisma.RouteUncheckedCreateNestedManyWithoutVehicleInput;
};
export type VehicleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutVehiclesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutVehiclesNestedInput;
    routes?: Prisma.RouteUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    routes?: Prisma.RouteUncheckedUpdateManyWithoutVehicleNestedInput;
};
export type VehicleCreateManyInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    registrationNumber: string;
    capacity?: number | null;
    driverName?: string | null;
    driverPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VehicleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehicleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehicleListRelationFilter = {
    every?: Prisma.VehicleWhereInput;
    some?: Prisma.VehicleWhereInput;
    none?: Prisma.VehicleWhereInput;
};
export type VehicleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VehicleSchoolIdRegistrationNumberCompoundUniqueInput = {
    schoolId: string;
    registrationNumber: string;
};
export type VehicleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    registrationNumber?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    driverName?: Prisma.SortOrder;
    driverPhone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VehicleAvgOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
};
export type VehicleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    registrationNumber?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    driverName?: Prisma.SortOrder;
    driverPhone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VehicleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    registrationNumber?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    driverName?: Prisma.SortOrder;
    driverPhone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VehicleSumOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
};
export type VehicleScalarRelationFilter = {
    is?: Prisma.VehicleWhereInput;
    isNot?: Prisma.VehicleWhereInput;
};
export type VehicleCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutSchoolInput, Prisma.VehicleUncheckedCreateWithoutSchoolInput> | Prisma.VehicleCreateWithoutSchoolInput[] | Prisma.VehicleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutSchoolInput | Prisma.VehicleCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.VehicleCreateManySchoolInputEnvelope;
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
};
export type VehicleUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutSchoolInput, Prisma.VehicleUncheckedCreateWithoutSchoolInput> | Prisma.VehicleCreateWithoutSchoolInput[] | Prisma.VehicleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutSchoolInput | Prisma.VehicleCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.VehicleCreateManySchoolInputEnvelope;
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
};
export type VehicleUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutSchoolInput, Prisma.VehicleUncheckedCreateWithoutSchoolInput> | Prisma.VehicleCreateWithoutSchoolInput[] | Prisma.VehicleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutSchoolInput | Prisma.VehicleCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.VehicleUpsertWithWhereUniqueWithoutSchoolInput | Prisma.VehicleUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.VehicleCreateManySchoolInputEnvelope;
    set?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    disconnect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    delete?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    update?: Prisma.VehicleUpdateWithWhereUniqueWithoutSchoolInput | Prisma.VehicleUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.VehicleUpdateManyWithWhereWithoutSchoolInput | Prisma.VehicleUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
};
export type VehicleUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutSchoolInput, Prisma.VehicleUncheckedCreateWithoutSchoolInput> | Prisma.VehicleCreateWithoutSchoolInput[] | Prisma.VehicleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutSchoolInput | Prisma.VehicleCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.VehicleUpsertWithWhereUniqueWithoutSchoolInput | Prisma.VehicleUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.VehicleCreateManySchoolInputEnvelope;
    set?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    disconnect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    delete?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    update?: Prisma.VehicleUpdateWithWhereUniqueWithoutSchoolInput | Prisma.VehicleUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.VehicleUpdateManyWithWhereWithoutSchoolInput | Prisma.VehicleUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
};
export type VehicleCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutBranchInput, Prisma.VehicleUncheckedCreateWithoutBranchInput> | Prisma.VehicleCreateWithoutBranchInput[] | Prisma.VehicleUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutBranchInput | Prisma.VehicleCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.VehicleCreateManyBranchInputEnvelope;
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
};
export type VehicleUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutBranchInput, Prisma.VehicleUncheckedCreateWithoutBranchInput> | Prisma.VehicleCreateWithoutBranchInput[] | Prisma.VehicleUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutBranchInput | Prisma.VehicleCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.VehicleCreateManyBranchInputEnvelope;
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
};
export type VehicleUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutBranchInput, Prisma.VehicleUncheckedCreateWithoutBranchInput> | Prisma.VehicleCreateWithoutBranchInput[] | Prisma.VehicleUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutBranchInput | Prisma.VehicleCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.VehicleUpsertWithWhereUniqueWithoutBranchInput | Prisma.VehicleUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.VehicleCreateManyBranchInputEnvelope;
    set?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    disconnect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    delete?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    update?: Prisma.VehicleUpdateWithWhereUniqueWithoutBranchInput | Prisma.VehicleUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.VehicleUpdateManyWithWhereWithoutBranchInput | Prisma.VehicleUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
};
export type VehicleUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutBranchInput, Prisma.VehicleUncheckedCreateWithoutBranchInput> | Prisma.VehicleCreateWithoutBranchInput[] | Prisma.VehicleUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutBranchInput | Prisma.VehicleCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.VehicleUpsertWithWhereUniqueWithoutBranchInput | Prisma.VehicleUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.VehicleCreateManyBranchInputEnvelope;
    set?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    disconnect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    delete?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    update?: Prisma.VehicleUpdateWithWhereUniqueWithoutBranchInput | Prisma.VehicleUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.VehicleUpdateManyWithWhereWithoutBranchInput | Prisma.VehicleUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
};
export type VehicleCreateNestedOneWithoutRoutesInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutRoutesInput, Prisma.VehicleUncheckedCreateWithoutRoutesInput>;
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutRoutesInput;
    connect?: Prisma.VehicleWhereUniqueInput;
};
export type VehicleUpdateOneRequiredWithoutRoutesNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutRoutesInput, Prisma.VehicleUncheckedCreateWithoutRoutesInput>;
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutRoutesInput;
    upsert?: Prisma.VehicleUpsertWithoutRoutesInput;
    connect?: Prisma.VehicleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VehicleUpdateToOneWithWhereWithoutRoutesInput, Prisma.VehicleUpdateWithoutRoutesInput>, Prisma.VehicleUncheckedUpdateWithoutRoutesInput>;
};
export type VehicleCreateWithoutSchoolInput = {
    id?: string;
    registrationNumber: string;
    capacity?: number | null;
    driverName?: string | null;
    driverPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch: Prisma.BranchCreateNestedOneWithoutVehiclesInput;
    routes?: Prisma.RouteCreateNestedManyWithoutVehicleInput;
};
export type VehicleUncheckedCreateWithoutSchoolInput = {
    id?: string;
    branchId: string;
    registrationNumber: string;
    capacity?: number | null;
    driverName?: string | null;
    driverPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    routes?: Prisma.RouteUncheckedCreateNestedManyWithoutVehicleInput;
};
export type VehicleCreateOrConnectWithoutSchoolInput = {
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutSchoolInput, Prisma.VehicleUncheckedCreateWithoutSchoolInput>;
};
export type VehicleCreateManySchoolInputEnvelope = {
    data: Prisma.VehicleCreateManySchoolInput | Prisma.VehicleCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type VehicleUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.VehicleWhereUniqueInput;
    update: Prisma.XOR<Prisma.VehicleUpdateWithoutSchoolInput, Prisma.VehicleUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutSchoolInput, Prisma.VehicleUncheckedCreateWithoutSchoolInput>;
};
export type VehicleUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.VehicleWhereUniqueInput;
    data: Prisma.XOR<Prisma.VehicleUpdateWithoutSchoolInput, Prisma.VehicleUncheckedUpdateWithoutSchoolInput>;
};
export type VehicleUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.VehicleScalarWhereInput;
    data: Prisma.XOR<Prisma.VehicleUpdateManyMutationInput, Prisma.VehicleUncheckedUpdateManyWithoutSchoolInput>;
};
export type VehicleScalarWhereInput = {
    AND?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
    OR?: Prisma.VehicleScalarWhereInput[];
    NOT?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
    id?: Prisma.StringFilter<"Vehicle"> | string;
    schoolId?: Prisma.StringFilter<"Vehicle"> | string;
    branchId?: Prisma.StringFilter<"Vehicle"> | string;
    registrationNumber?: Prisma.StringFilter<"Vehicle"> | string;
    capacity?: Prisma.IntNullableFilter<"Vehicle"> | number | null;
    driverName?: Prisma.StringNullableFilter<"Vehicle"> | string | null;
    driverPhone?: Prisma.StringNullableFilter<"Vehicle"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
};
export type VehicleCreateWithoutBranchInput = {
    id?: string;
    registrationNumber: string;
    capacity?: number | null;
    driverName?: string | null;
    driverPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutVehiclesInput;
    routes?: Prisma.RouteCreateNestedManyWithoutVehicleInput;
};
export type VehicleUncheckedCreateWithoutBranchInput = {
    id?: string;
    schoolId: string;
    registrationNumber: string;
    capacity?: number | null;
    driverName?: string | null;
    driverPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    routes?: Prisma.RouteUncheckedCreateNestedManyWithoutVehicleInput;
};
export type VehicleCreateOrConnectWithoutBranchInput = {
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutBranchInput, Prisma.VehicleUncheckedCreateWithoutBranchInput>;
};
export type VehicleCreateManyBranchInputEnvelope = {
    data: Prisma.VehicleCreateManyBranchInput | Prisma.VehicleCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type VehicleUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.VehicleWhereUniqueInput;
    update: Prisma.XOR<Prisma.VehicleUpdateWithoutBranchInput, Prisma.VehicleUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutBranchInput, Prisma.VehicleUncheckedCreateWithoutBranchInput>;
};
export type VehicleUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.VehicleWhereUniqueInput;
    data: Prisma.XOR<Prisma.VehicleUpdateWithoutBranchInput, Prisma.VehicleUncheckedUpdateWithoutBranchInput>;
};
export type VehicleUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.VehicleScalarWhereInput;
    data: Prisma.XOR<Prisma.VehicleUpdateManyMutationInput, Prisma.VehicleUncheckedUpdateManyWithoutBranchInput>;
};
export type VehicleCreateWithoutRoutesInput = {
    id?: string;
    registrationNumber: string;
    capacity?: number | null;
    driverName?: string | null;
    driverPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutVehiclesInput;
    branch: Prisma.BranchCreateNestedOneWithoutVehiclesInput;
};
export type VehicleUncheckedCreateWithoutRoutesInput = {
    id?: string;
    schoolId: string;
    branchId: string;
    registrationNumber: string;
    capacity?: number | null;
    driverName?: string | null;
    driverPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VehicleCreateOrConnectWithoutRoutesInput = {
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutRoutesInput, Prisma.VehicleUncheckedCreateWithoutRoutesInput>;
};
export type VehicleUpsertWithoutRoutesInput = {
    update: Prisma.XOR<Prisma.VehicleUpdateWithoutRoutesInput, Prisma.VehicleUncheckedUpdateWithoutRoutesInput>;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutRoutesInput, Prisma.VehicleUncheckedCreateWithoutRoutesInput>;
    where?: Prisma.VehicleWhereInput;
};
export type VehicleUpdateToOneWithWhereWithoutRoutesInput = {
    where?: Prisma.VehicleWhereInput;
    data: Prisma.XOR<Prisma.VehicleUpdateWithoutRoutesInput, Prisma.VehicleUncheckedUpdateWithoutRoutesInput>;
};
export type VehicleUpdateWithoutRoutesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutVehiclesNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutVehiclesNestedInput;
};
export type VehicleUncheckedUpdateWithoutRoutesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehicleCreateManySchoolInput = {
    id?: string;
    branchId: string;
    registrationNumber: string;
    capacity?: number | null;
    driverName?: string | null;
    driverPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VehicleUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneRequiredWithoutVehiclesNestedInput;
    routes?: Prisma.RouteUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    routes?: Prisma.RouteUncheckedUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehicleCreateManyBranchInput = {
    id?: string;
    schoolId: string;
    registrationNumber: string;
    capacity?: number | null;
    driverName?: string | null;
    driverPhone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VehicleUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutVehiclesNestedInput;
    routes?: Prisma.RouteUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    routes?: Prisma.RouteUncheckedUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    driverName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    driverPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehicleCountOutputType = {
    routes: number;
};
export type VehicleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    routes?: boolean | VehicleCountOutputTypeCountRoutesArgs;
};
export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleCountOutputTypeSelect<ExtArgs> | null;
};
export type VehicleCountOutputTypeCountRoutesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RouteWhereInput;
};
export type VehicleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    registrationNumber?: boolean;
    capacity?: boolean;
    driverName?: boolean;
    driverPhone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    routes?: boolean | Prisma.Vehicle$routesArgs<ExtArgs>;
    _count?: boolean | Prisma.VehicleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vehicle"]>;
export type VehicleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    registrationNumber?: boolean;
    capacity?: boolean;
    driverName?: boolean;
    driverPhone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vehicle"]>;
export type VehicleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    registrationNumber?: boolean;
    capacity?: boolean;
    driverName?: boolean;
    driverPhone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vehicle"]>;
export type VehicleSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    branchId?: boolean;
    registrationNumber?: boolean;
    capacity?: boolean;
    driverName?: boolean;
    driverPhone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VehicleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "branchId" | "registrationNumber" | "capacity" | "driverName" | "driverPhone" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>;
export type VehicleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    routes?: boolean | Prisma.Vehicle$routesArgs<ExtArgs>;
    _count?: boolean | Prisma.VehicleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VehicleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type $VehiclePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vehicle";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        branch: Prisma.$BranchPayload<ExtArgs>;
        routes: Prisma.$RoutePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        branchId: string;
        registrationNumber: string;
        capacity: number | null;
        driverName: string | null;
        driverPhone: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["vehicle"]>;
    composites: {};
};
export type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VehiclePayload, S>;
export type VehicleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VehicleCountAggregateInputType | true;
};
export interface VehicleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'];
        meta: {
            name: 'Vehicle';
        };
    };
    findUnique<T extends VehicleFindUniqueArgs>(args: Prisma.SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VehicleFindFirstArgs>(args?: Prisma.SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VehicleFindManyArgs>(args?: Prisma.SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VehicleCreateArgs>(args: Prisma.SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VehicleCreateManyArgs>(args?: Prisma.SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VehicleDeleteArgs>(args: Prisma.SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VehicleUpdateArgs>(args: Prisma.SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VehicleDeleteManyArgs>(args?: Prisma.SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VehicleUpdateManyArgs>(args: Prisma.SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VehicleUpsertArgs>(args: Prisma.SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VehicleCountArgs>(args?: Prisma.Subset<T, VehicleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VehicleCountAggregateOutputType> : number>;
    aggregate<T extends VehicleAggregateArgs>(args: Prisma.Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>;
    groupBy<T extends VehicleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VehicleGroupByArgs['orderBy'];
    } : {
        orderBy?: VehicleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VehicleFieldRefs;
}
export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    branch<T extends Prisma.BranchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BranchDefaultArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    routes<T extends Prisma.Vehicle$routesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vehicle$routesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VehicleFieldRefs {
    readonly id: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly schoolId: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly branchId: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly registrationNumber: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly capacity: Prisma.FieldRef<"Vehicle", 'Int'>;
    readonly driverName: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly driverPhone: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Vehicle", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Vehicle", 'DateTime'>;
}
export type VehicleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where: Prisma.VehicleWhereUniqueInput;
};
export type VehicleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where: Prisma.VehicleWhereUniqueInput;
};
export type VehicleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithRelationInput | Prisma.VehicleOrderByWithRelationInput[];
    cursor?: Prisma.VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehicleScalarFieldEnum | Prisma.VehicleScalarFieldEnum[];
};
export type VehicleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithRelationInput | Prisma.VehicleOrderByWithRelationInput[];
    cursor?: Prisma.VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehicleScalarFieldEnum | Prisma.VehicleScalarFieldEnum[];
};
export type VehicleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithRelationInput | Prisma.VehicleOrderByWithRelationInput[];
    cursor?: Prisma.VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehicleScalarFieldEnum | Prisma.VehicleScalarFieldEnum[];
};
export type VehicleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehicleCreateInput, Prisma.VehicleUncheckedCreateInput>;
};
export type VehicleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VehicleCreateManyInput | Prisma.VehicleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VehicleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    data: Prisma.VehicleCreateManyInput | Prisma.VehicleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VehicleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VehicleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehicleUpdateInput, Prisma.VehicleUncheckedUpdateInput>;
    where: Prisma.VehicleWhereUniqueInput;
};
export type VehicleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VehicleUpdateManyMutationInput, Prisma.VehicleUncheckedUpdateManyInput>;
    where?: Prisma.VehicleWhereInput;
    limit?: number;
};
export type VehicleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehicleUpdateManyMutationInput, Prisma.VehicleUncheckedUpdateManyInput>;
    where?: Prisma.VehicleWhereInput;
    limit?: number;
    include?: Prisma.VehicleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VehicleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateInput, Prisma.VehicleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VehicleUpdateInput, Prisma.VehicleUncheckedUpdateInput>;
};
export type VehicleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where: Prisma.VehicleWhereUniqueInput;
};
export type VehicleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehicleWhereInput;
    limit?: number;
};
export type Vehicle$routesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteSelect<ExtArgs> | null;
    omit?: Prisma.RouteOmit<ExtArgs> | null;
    include?: Prisma.RouteInclude<ExtArgs> | null;
    where?: Prisma.RouteWhereInput;
    orderBy?: Prisma.RouteOrderByWithRelationInput | Prisma.RouteOrderByWithRelationInput[];
    cursor?: Prisma.RouteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RouteScalarFieldEnum | Prisma.RouteScalarFieldEnum[];
};
export type VehicleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
};
