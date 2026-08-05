import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomRoleModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomRolePayload>;
export type AggregateCustomRole = {
    _count: CustomRoleCountAggregateOutputType | null;
    _min: CustomRoleMinAggregateOutputType | null;
    _max: CustomRoleMaxAggregateOutputType | null;
};
export type CustomRoleMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    allowLogin: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CustomRoleMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    name: string | null;
    allowLogin: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CustomRoleCountAggregateOutputType = {
    id: number;
    schoolId: number;
    name: number;
    allowLogin: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CustomRoleMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    allowLogin?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CustomRoleMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    allowLogin?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CustomRoleCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    name?: true;
    allowLogin?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CustomRoleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomRoleWhereInput;
    orderBy?: Prisma.CustomRoleOrderByWithRelationInput | Prisma.CustomRoleOrderByWithRelationInput[];
    cursor?: Prisma.CustomRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomRoleCountAggregateInputType;
    _min?: CustomRoleMinAggregateInputType;
    _max?: CustomRoleMaxAggregateInputType;
};
export type GetCustomRoleAggregateType<T extends CustomRoleAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomRole]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomRole[P]> : Prisma.GetScalarType<T[P], AggregateCustomRole[P]>;
};
export type CustomRoleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomRoleWhereInput;
    orderBy?: Prisma.CustomRoleOrderByWithAggregationInput | Prisma.CustomRoleOrderByWithAggregationInput[];
    by: Prisma.CustomRoleScalarFieldEnum[] | Prisma.CustomRoleScalarFieldEnum;
    having?: Prisma.CustomRoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomRoleCountAggregateInputType | true;
    _min?: CustomRoleMinAggregateInputType;
    _max?: CustomRoleMaxAggregateInputType;
};
export type CustomRoleGroupByOutputType = {
    id: string;
    schoolId: string;
    name: string;
    allowLogin: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: CustomRoleCountAggregateOutputType | null;
    _min: CustomRoleMinAggregateOutputType | null;
    _max: CustomRoleMaxAggregateOutputType | null;
};
export type GetCustomRoleGroupByPayload<T extends CustomRoleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomRoleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomRoleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomRoleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomRoleGroupByOutputType[P]>;
}>>;
export type CustomRoleWhereInput = {
    AND?: Prisma.CustomRoleWhereInput | Prisma.CustomRoleWhereInput[];
    OR?: Prisma.CustomRoleWhereInput[];
    NOT?: Prisma.CustomRoleWhereInput | Prisma.CustomRoleWhereInput[];
    id?: Prisma.StringFilter<"CustomRole"> | string;
    schoolId?: Prisma.StringFilter<"CustomRole"> | string;
    name?: Prisma.StringFilter<"CustomRole"> | string;
    allowLogin?: Prisma.BoolFilter<"CustomRole"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"CustomRole"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CustomRole"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    permissions?: Prisma.RolePermissionListRelationFilter;
    teachers?: Prisma.TeacherListRelationFilter;
    staff?: Prisma.StaffListRelationFilter;
};
export type CustomRoleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    allowLogin?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    permissions?: Prisma.RolePermissionOrderByRelationAggregateInput;
    teachers?: Prisma.TeacherOrderByRelationAggregateInput;
    staff?: Prisma.StaffOrderByRelationAggregateInput;
};
export type CustomRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    schoolId_name?: Prisma.CustomRoleSchoolIdNameCompoundUniqueInput;
    AND?: Prisma.CustomRoleWhereInput | Prisma.CustomRoleWhereInput[];
    OR?: Prisma.CustomRoleWhereInput[];
    NOT?: Prisma.CustomRoleWhereInput | Prisma.CustomRoleWhereInput[];
    schoolId?: Prisma.StringFilter<"CustomRole"> | string;
    name?: Prisma.StringFilter<"CustomRole"> | string;
    allowLogin?: Prisma.BoolFilter<"CustomRole"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"CustomRole"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CustomRole"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    permissions?: Prisma.RolePermissionListRelationFilter;
    teachers?: Prisma.TeacherListRelationFilter;
    staff?: Prisma.StaffListRelationFilter;
}, "id" | "schoolId_name">;
export type CustomRoleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    allowLogin?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CustomRoleCountOrderByAggregateInput;
    _max?: Prisma.CustomRoleMaxOrderByAggregateInput;
    _min?: Prisma.CustomRoleMinOrderByAggregateInput;
};
export type CustomRoleScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomRoleScalarWhereWithAggregatesInput | Prisma.CustomRoleScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomRoleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomRoleScalarWhereWithAggregatesInput | Prisma.CustomRoleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CustomRole"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"CustomRole"> | string;
    name?: Prisma.StringWithAggregatesFilter<"CustomRole"> | string;
    allowLogin?: Prisma.BoolWithAggregatesFilter<"CustomRole"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CustomRole"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CustomRole"> | Date | string;
};
export type CustomRoleCreateInput = {
    id?: string;
    name: string;
    allowLogin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCustomRolesInput;
    permissions?: Prisma.RolePermissionCreateNestedManyWithoutCustomRoleInput;
    teachers?: Prisma.TeacherCreateNestedManyWithoutCustomRoleInput;
    staff?: Prisma.StaffCreateNestedManyWithoutCustomRoleInput;
};
export type CustomRoleUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    name: string;
    allowLogin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    permissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutCustomRoleInput;
    teachers?: Prisma.TeacherUncheckedCreateNestedManyWithoutCustomRoleInput;
    staff?: Prisma.StaffUncheckedCreateNestedManyWithoutCustomRoleInput;
};
export type CustomRoleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCustomRolesNestedInput;
    permissions?: Prisma.RolePermissionUpdateManyWithoutCustomRoleNestedInput;
    teachers?: Prisma.TeacherUpdateManyWithoutCustomRoleNestedInput;
    staff?: Prisma.StaffUpdateManyWithoutCustomRoleNestedInput;
};
export type CustomRoleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutCustomRoleNestedInput;
    teachers?: Prisma.TeacherUncheckedUpdateManyWithoutCustomRoleNestedInput;
    staff?: Prisma.StaffUncheckedUpdateManyWithoutCustomRoleNestedInput;
};
export type CustomRoleCreateManyInput = {
    id?: string;
    schoolId: string;
    name: string;
    allowLogin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomRoleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomRoleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomRoleListRelationFilter = {
    every?: Prisma.CustomRoleWhereInput;
    some?: Prisma.CustomRoleWhereInput;
    none?: Prisma.CustomRoleWhereInput;
};
export type CustomRoleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustomRoleNullableScalarRelationFilter = {
    is?: Prisma.CustomRoleWhereInput | null;
    isNot?: Prisma.CustomRoleWhereInput | null;
};
export type CustomRoleSchoolIdNameCompoundUniqueInput = {
    schoolId: string;
    name: string;
};
export type CustomRoleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    allowLogin?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomRoleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    allowLogin?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomRoleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    allowLogin?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomRoleScalarRelationFilter = {
    is?: Prisma.CustomRoleWhereInput;
    isNot?: Prisma.CustomRoleWhereInput;
};
export type CustomRoleCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.CustomRoleCreateWithoutSchoolInput, Prisma.CustomRoleUncheckedCreateWithoutSchoolInput> | Prisma.CustomRoleCreateWithoutSchoolInput[] | Prisma.CustomRoleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.CustomRoleCreateOrConnectWithoutSchoolInput | Prisma.CustomRoleCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.CustomRoleCreateManySchoolInputEnvelope;
    connect?: Prisma.CustomRoleWhereUniqueInput | Prisma.CustomRoleWhereUniqueInput[];
};
export type CustomRoleUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.CustomRoleCreateWithoutSchoolInput, Prisma.CustomRoleUncheckedCreateWithoutSchoolInput> | Prisma.CustomRoleCreateWithoutSchoolInput[] | Prisma.CustomRoleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.CustomRoleCreateOrConnectWithoutSchoolInput | Prisma.CustomRoleCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.CustomRoleCreateManySchoolInputEnvelope;
    connect?: Prisma.CustomRoleWhereUniqueInput | Prisma.CustomRoleWhereUniqueInput[];
};
export type CustomRoleUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.CustomRoleCreateWithoutSchoolInput, Prisma.CustomRoleUncheckedCreateWithoutSchoolInput> | Prisma.CustomRoleCreateWithoutSchoolInput[] | Prisma.CustomRoleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.CustomRoleCreateOrConnectWithoutSchoolInput | Prisma.CustomRoleCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.CustomRoleUpsertWithWhereUniqueWithoutSchoolInput | Prisma.CustomRoleUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.CustomRoleCreateManySchoolInputEnvelope;
    set?: Prisma.CustomRoleWhereUniqueInput | Prisma.CustomRoleWhereUniqueInput[];
    disconnect?: Prisma.CustomRoleWhereUniqueInput | Prisma.CustomRoleWhereUniqueInput[];
    delete?: Prisma.CustomRoleWhereUniqueInput | Prisma.CustomRoleWhereUniqueInput[];
    connect?: Prisma.CustomRoleWhereUniqueInput | Prisma.CustomRoleWhereUniqueInput[];
    update?: Prisma.CustomRoleUpdateWithWhereUniqueWithoutSchoolInput | Prisma.CustomRoleUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.CustomRoleUpdateManyWithWhereWithoutSchoolInput | Prisma.CustomRoleUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.CustomRoleScalarWhereInput | Prisma.CustomRoleScalarWhereInput[];
};
export type CustomRoleUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.CustomRoleCreateWithoutSchoolInput, Prisma.CustomRoleUncheckedCreateWithoutSchoolInput> | Prisma.CustomRoleCreateWithoutSchoolInput[] | Prisma.CustomRoleUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.CustomRoleCreateOrConnectWithoutSchoolInput | Prisma.CustomRoleCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.CustomRoleUpsertWithWhereUniqueWithoutSchoolInput | Prisma.CustomRoleUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.CustomRoleCreateManySchoolInputEnvelope;
    set?: Prisma.CustomRoleWhereUniqueInput | Prisma.CustomRoleWhereUniqueInput[];
    disconnect?: Prisma.CustomRoleWhereUniqueInput | Prisma.CustomRoleWhereUniqueInput[];
    delete?: Prisma.CustomRoleWhereUniqueInput | Prisma.CustomRoleWhereUniqueInput[];
    connect?: Prisma.CustomRoleWhereUniqueInput | Prisma.CustomRoleWhereUniqueInput[];
    update?: Prisma.CustomRoleUpdateWithWhereUniqueWithoutSchoolInput | Prisma.CustomRoleUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.CustomRoleUpdateManyWithWhereWithoutSchoolInput | Prisma.CustomRoleUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.CustomRoleScalarWhereInput | Prisma.CustomRoleScalarWhereInput[];
};
export type CustomRoleCreateNestedOneWithoutTeachersInput = {
    create?: Prisma.XOR<Prisma.CustomRoleCreateWithoutTeachersInput, Prisma.CustomRoleUncheckedCreateWithoutTeachersInput>;
    connectOrCreate?: Prisma.CustomRoleCreateOrConnectWithoutTeachersInput;
    connect?: Prisma.CustomRoleWhereUniqueInput;
};
export type CustomRoleUpdateOneWithoutTeachersNestedInput = {
    create?: Prisma.XOR<Prisma.CustomRoleCreateWithoutTeachersInput, Prisma.CustomRoleUncheckedCreateWithoutTeachersInput>;
    connectOrCreate?: Prisma.CustomRoleCreateOrConnectWithoutTeachersInput;
    upsert?: Prisma.CustomRoleUpsertWithoutTeachersInput;
    disconnect?: Prisma.CustomRoleWhereInput | boolean;
    delete?: Prisma.CustomRoleWhereInput | boolean;
    connect?: Prisma.CustomRoleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomRoleUpdateToOneWithWhereWithoutTeachersInput, Prisma.CustomRoleUpdateWithoutTeachersInput>, Prisma.CustomRoleUncheckedUpdateWithoutTeachersInput>;
};
export type CustomRoleCreateNestedOneWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.CustomRoleCreateWithoutStaffInput, Prisma.CustomRoleUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.CustomRoleCreateOrConnectWithoutStaffInput;
    connect?: Prisma.CustomRoleWhereUniqueInput;
};
export type CustomRoleUpdateOneWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.CustomRoleCreateWithoutStaffInput, Prisma.CustomRoleUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.CustomRoleCreateOrConnectWithoutStaffInput;
    upsert?: Prisma.CustomRoleUpsertWithoutStaffInput;
    disconnect?: Prisma.CustomRoleWhereInput | boolean;
    delete?: Prisma.CustomRoleWhereInput | boolean;
    connect?: Prisma.CustomRoleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomRoleUpdateToOneWithWhereWithoutStaffInput, Prisma.CustomRoleUpdateWithoutStaffInput>, Prisma.CustomRoleUncheckedUpdateWithoutStaffInput>;
};
export type CustomRoleCreateNestedOneWithoutPermissionsInput = {
    create?: Prisma.XOR<Prisma.CustomRoleCreateWithoutPermissionsInput, Prisma.CustomRoleUncheckedCreateWithoutPermissionsInput>;
    connectOrCreate?: Prisma.CustomRoleCreateOrConnectWithoutPermissionsInput;
    connect?: Prisma.CustomRoleWhereUniqueInput;
};
export type CustomRoleUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: Prisma.XOR<Prisma.CustomRoleCreateWithoutPermissionsInput, Prisma.CustomRoleUncheckedCreateWithoutPermissionsInput>;
    connectOrCreate?: Prisma.CustomRoleCreateOrConnectWithoutPermissionsInput;
    upsert?: Prisma.CustomRoleUpsertWithoutPermissionsInput;
    connect?: Prisma.CustomRoleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomRoleUpdateToOneWithWhereWithoutPermissionsInput, Prisma.CustomRoleUpdateWithoutPermissionsInput>, Prisma.CustomRoleUncheckedUpdateWithoutPermissionsInput>;
};
export type CustomRoleCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    allowLogin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    permissions?: Prisma.RolePermissionCreateNestedManyWithoutCustomRoleInput;
    teachers?: Prisma.TeacherCreateNestedManyWithoutCustomRoleInput;
    staff?: Prisma.StaffCreateNestedManyWithoutCustomRoleInput;
};
export type CustomRoleUncheckedCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    allowLogin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    permissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutCustomRoleInput;
    teachers?: Prisma.TeacherUncheckedCreateNestedManyWithoutCustomRoleInput;
    staff?: Prisma.StaffUncheckedCreateNestedManyWithoutCustomRoleInput;
};
export type CustomRoleCreateOrConnectWithoutSchoolInput = {
    where: Prisma.CustomRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomRoleCreateWithoutSchoolInput, Prisma.CustomRoleUncheckedCreateWithoutSchoolInput>;
};
export type CustomRoleCreateManySchoolInputEnvelope = {
    data: Prisma.CustomRoleCreateManySchoolInput | Prisma.CustomRoleCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type CustomRoleUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.CustomRoleWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomRoleUpdateWithoutSchoolInput, Prisma.CustomRoleUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.CustomRoleCreateWithoutSchoolInput, Prisma.CustomRoleUncheckedCreateWithoutSchoolInput>;
};
export type CustomRoleUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.CustomRoleWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomRoleUpdateWithoutSchoolInput, Prisma.CustomRoleUncheckedUpdateWithoutSchoolInput>;
};
export type CustomRoleUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.CustomRoleScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomRoleUpdateManyMutationInput, Prisma.CustomRoleUncheckedUpdateManyWithoutSchoolInput>;
};
export type CustomRoleScalarWhereInput = {
    AND?: Prisma.CustomRoleScalarWhereInput | Prisma.CustomRoleScalarWhereInput[];
    OR?: Prisma.CustomRoleScalarWhereInput[];
    NOT?: Prisma.CustomRoleScalarWhereInput | Prisma.CustomRoleScalarWhereInput[];
    id?: Prisma.StringFilter<"CustomRole"> | string;
    schoolId?: Prisma.StringFilter<"CustomRole"> | string;
    name?: Prisma.StringFilter<"CustomRole"> | string;
    allowLogin?: Prisma.BoolFilter<"CustomRole"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"CustomRole"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CustomRole"> | Date | string;
};
export type CustomRoleCreateWithoutTeachersInput = {
    id?: string;
    name: string;
    allowLogin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCustomRolesInput;
    permissions?: Prisma.RolePermissionCreateNestedManyWithoutCustomRoleInput;
    staff?: Prisma.StaffCreateNestedManyWithoutCustomRoleInput;
};
export type CustomRoleUncheckedCreateWithoutTeachersInput = {
    id?: string;
    schoolId: string;
    name: string;
    allowLogin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    permissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutCustomRoleInput;
    staff?: Prisma.StaffUncheckedCreateNestedManyWithoutCustomRoleInput;
};
export type CustomRoleCreateOrConnectWithoutTeachersInput = {
    where: Prisma.CustomRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomRoleCreateWithoutTeachersInput, Prisma.CustomRoleUncheckedCreateWithoutTeachersInput>;
};
export type CustomRoleUpsertWithoutTeachersInput = {
    update: Prisma.XOR<Prisma.CustomRoleUpdateWithoutTeachersInput, Prisma.CustomRoleUncheckedUpdateWithoutTeachersInput>;
    create: Prisma.XOR<Prisma.CustomRoleCreateWithoutTeachersInput, Prisma.CustomRoleUncheckedCreateWithoutTeachersInput>;
    where?: Prisma.CustomRoleWhereInput;
};
export type CustomRoleUpdateToOneWithWhereWithoutTeachersInput = {
    where?: Prisma.CustomRoleWhereInput;
    data: Prisma.XOR<Prisma.CustomRoleUpdateWithoutTeachersInput, Prisma.CustomRoleUncheckedUpdateWithoutTeachersInput>;
};
export type CustomRoleUpdateWithoutTeachersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCustomRolesNestedInput;
    permissions?: Prisma.RolePermissionUpdateManyWithoutCustomRoleNestedInput;
    staff?: Prisma.StaffUpdateManyWithoutCustomRoleNestedInput;
};
export type CustomRoleUncheckedUpdateWithoutTeachersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutCustomRoleNestedInput;
    staff?: Prisma.StaffUncheckedUpdateManyWithoutCustomRoleNestedInput;
};
export type CustomRoleCreateWithoutStaffInput = {
    id?: string;
    name: string;
    allowLogin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCustomRolesInput;
    permissions?: Prisma.RolePermissionCreateNestedManyWithoutCustomRoleInput;
    teachers?: Prisma.TeacherCreateNestedManyWithoutCustomRoleInput;
};
export type CustomRoleUncheckedCreateWithoutStaffInput = {
    id?: string;
    schoolId: string;
    name: string;
    allowLogin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    permissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutCustomRoleInput;
    teachers?: Prisma.TeacherUncheckedCreateNestedManyWithoutCustomRoleInput;
};
export type CustomRoleCreateOrConnectWithoutStaffInput = {
    where: Prisma.CustomRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomRoleCreateWithoutStaffInput, Prisma.CustomRoleUncheckedCreateWithoutStaffInput>;
};
export type CustomRoleUpsertWithoutStaffInput = {
    update: Prisma.XOR<Prisma.CustomRoleUpdateWithoutStaffInput, Prisma.CustomRoleUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.CustomRoleCreateWithoutStaffInput, Prisma.CustomRoleUncheckedCreateWithoutStaffInput>;
    where?: Prisma.CustomRoleWhereInput;
};
export type CustomRoleUpdateToOneWithWhereWithoutStaffInput = {
    where?: Prisma.CustomRoleWhereInput;
    data: Prisma.XOR<Prisma.CustomRoleUpdateWithoutStaffInput, Prisma.CustomRoleUncheckedUpdateWithoutStaffInput>;
};
export type CustomRoleUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCustomRolesNestedInput;
    permissions?: Prisma.RolePermissionUpdateManyWithoutCustomRoleNestedInput;
    teachers?: Prisma.TeacherUpdateManyWithoutCustomRoleNestedInput;
};
export type CustomRoleUncheckedUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutCustomRoleNestedInput;
    teachers?: Prisma.TeacherUncheckedUpdateManyWithoutCustomRoleNestedInput;
};
export type CustomRoleCreateWithoutPermissionsInput = {
    id?: string;
    name: string;
    allowLogin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCustomRolesInput;
    teachers?: Prisma.TeacherCreateNestedManyWithoutCustomRoleInput;
    staff?: Prisma.StaffCreateNestedManyWithoutCustomRoleInput;
};
export type CustomRoleUncheckedCreateWithoutPermissionsInput = {
    id?: string;
    schoolId: string;
    name: string;
    allowLogin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teachers?: Prisma.TeacherUncheckedCreateNestedManyWithoutCustomRoleInput;
    staff?: Prisma.StaffUncheckedCreateNestedManyWithoutCustomRoleInput;
};
export type CustomRoleCreateOrConnectWithoutPermissionsInput = {
    where: Prisma.CustomRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomRoleCreateWithoutPermissionsInput, Prisma.CustomRoleUncheckedCreateWithoutPermissionsInput>;
};
export type CustomRoleUpsertWithoutPermissionsInput = {
    update: Prisma.XOR<Prisma.CustomRoleUpdateWithoutPermissionsInput, Prisma.CustomRoleUncheckedUpdateWithoutPermissionsInput>;
    create: Prisma.XOR<Prisma.CustomRoleCreateWithoutPermissionsInput, Prisma.CustomRoleUncheckedCreateWithoutPermissionsInput>;
    where?: Prisma.CustomRoleWhereInput;
};
export type CustomRoleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: Prisma.CustomRoleWhereInput;
    data: Prisma.XOR<Prisma.CustomRoleUpdateWithoutPermissionsInput, Prisma.CustomRoleUncheckedUpdateWithoutPermissionsInput>;
};
export type CustomRoleUpdateWithoutPermissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCustomRolesNestedInput;
    teachers?: Prisma.TeacherUpdateManyWithoutCustomRoleNestedInput;
    staff?: Prisma.StaffUpdateManyWithoutCustomRoleNestedInput;
};
export type CustomRoleUncheckedUpdateWithoutPermissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teachers?: Prisma.TeacherUncheckedUpdateManyWithoutCustomRoleNestedInput;
    staff?: Prisma.StaffUncheckedUpdateManyWithoutCustomRoleNestedInput;
};
export type CustomRoleCreateManySchoolInput = {
    id?: string;
    name: string;
    allowLogin?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomRoleUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: Prisma.RolePermissionUpdateManyWithoutCustomRoleNestedInput;
    teachers?: Prisma.TeacherUpdateManyWithoutCustomRoleNestedInput;
    staff?: Prisma.StaffUpdateManyWithoutCustomRoleNestedInput;
};
export type CustomRoleUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutCustomRoleNestedInput;
    teachers?: Prisma.TeacherUncheckedUpdateManyWithoutCustomRoleNestedInput;
    staff?: Prisma.StaffUncheckedUpdateManyWithoutCustomRoleNestedInput;
};
export type CustomRoleUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    allowLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomRoleCountOutputType = {
    permissions: number;
    teachers: number;
    staff: number;
};
export type CustomRoleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permissions?: boolean | CustomRoleCountOutputTypeCountPermissionsArgs;
    teachers?: boolean | CustomRoleCountOutputTypeCountTeachersArgs;
    staff?: boolean | CustomRoleCountOutputTypeCountStaffArgs;
};
export type CustomRoleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleCountOutputTypeSelect<ExtArgs> | null;
};
export type CustomRoleCountOutputTypeCountPermissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolePermissionWhereInput;
};
export type CustomRoleCountOutputTypeCountTeachersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherWhereInput;
};
export type CustomRoleCountOutputTypeCountStaffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffWhereInput;
};
export type CustomRoleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    allowLogin?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    permissions?: boolean | Prisma.CustomRole$permissionsArgs<ExtArgs>;
    teachers?: boolean | Prisma.CustomRole$teachersArgs<ExtArgs>;
    staff?: boolean | Prisma.CustomRole$staffArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomRoleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customRole"]>;
export type CustomRoleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    allowLogin?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customRole"]>;
export type CustomRoleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    allowLogin?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customRole"]>;
export type CustomRoleSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    name?: boolean;
    allowLogin?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CustomRoleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "name" | "allowLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["customRole"]>;
export type CustomRoleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    permissions?: boolean | Prisma.CustomRole$permissionsArgs<ExtArgs>;
    teachers?: boolean | Prisma.CustomRole$teachersArgs<ExtArgs>;
    staff?: boolean | Prisma.CustomRole$staffArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomRoleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CustomRoleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type CustomRoleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
};
export type $CustomRolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CustomRole";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        permissions: Prisma.$RolePermissionPayload<ExtArgs>[];
        teachers: Prisma.$TeacherPayload<ExtArgs>[];
        staff: Prisma.$StaffPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        name: string;
        allowLogin: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["customRole"]>;
    composites: {};
};
export type CustomRoleGetPayload<S extends boolean | null | undefined | CustomRoleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomRolePayload, S>;
export type CustomRoleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomRoleCountAggregateInputType | true;
};
export interface CustomRoleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CustomRole'];
        meta: {
            name: 'CustomRole';
        };
    };
    findUnique<T extends CustomRoleFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomRoleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomRoleClient<runtime.Types.Result.GetResult<Prisma.$CustomRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomRoleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomRoleClient<runtime.Types.Result.GetResult<Prisma.$CustomRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomRoleFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomRoleFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomRoleClient<runtime.Types.Result.GetResult<Prisma.$CustomRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomRoleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomRoleClient<runtime.Types.Result.GetResult<Prisma.$CustomRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomRoleFindManyArgs>(args?: Prisma.SelectSubset<T, CustomRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomRoleCreateArgs>(args: Prisma.SelectSubset<T, CustomRoleCreateArgs<ExtArgs>>): Prisma.Prisma__CustomRoleClient<runtime.Types.Result.GetResult<Prisma.$CustomRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomRoleCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomRoleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomRoleDeleteArgs>(args: Prisma.SelectSubset<T, CustomRoleDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomRoleClient<runtime.Types.Result.GetResult<Prisma.$CustomRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomRoleUpdateArgs>(args: Prisma.SelectSubset<T, CustomRoleUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomRoleClient<runtime.Types.Result.GetResult<Prisma.$CustomRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomRoleDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomRoleUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomRoleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomRoleUpsertArgs>(args: Prisma.SelectSubset<T, CustomRoleUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomRoleClient<runtime.Types.Result.GetResult<Prisma.$CustomRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomRoleCountArgs>(args?: Prisma.Subset<T, CustomRoleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomRoleCountAggregateOutputType> : number>;
    aggregate<T extends CustomRoleAggregateArgs>(args: Prisma.Subset<T, CustomRoleAggregateArgs>): Prisma.PrismaPromise<GetCustomRoleAggregateType<T>>;
    groupBy<T extends CustomRoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomRoleGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomRoleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomRoleFieldRefs;
}
export interface Prisma__CustomRoleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    permissions<T extends Prisma.CustomRole$permissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomRole$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    teachers<T extends Prisma.CustomRole$teachersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomRole$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    staff<T extends Prisma.CustomRole$staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomRole$staffArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomRoleFieldRefs {
    readonly id: Prisma.FieldRef<"CustomRole", 'String'>;
    readonly schoolId: Prisma.FieldRef<"CustomRole", 'String'>;
    readonly name: Prisma.FieldRef<"CustomRole", 'String'>;
    readonly allowLogin: Prisma.FieldRef<"CustomRole", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"CustomRole", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CustomRole", 'DateTime'>;
}
export type CustomRoleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleSelect<ExtArgs> | null;
    omit?: Prisma.CustomRoleOmit<ExtArgs> | null;
    include?: Prisma.CustomRoleInclude<ExtArgs> | null;
    where: Prisma.CustomRoleWhereUniqueInput;
};
export type CustomRoleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleSelect<ExtArgs> | null;
    omit?: Prisma.CustomRoleOmit<ExtArgs> | null;
    include?: Prisma.CustomRoleInclude<ExtArgs> | null;
    where: Prisma.CustomRoleWhereUniqueInput;
};
export type CustomRoleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleSelect<ExtArgs> | null;
    omit?: Prisma.CustomRoleOmit<ExtArgs> | null;
    include?: Prisma.CustomRoleInclude<ExtArgs> | null;
    where?: Prisma.CustomRoleWhereInput;
    orderBy?: Prisma.CustomRoleOrderByWithRelationInput | Prisma.CustomRoleOrderByWithRelationInput[];
    cursor?: Prisma.CustomRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomRoleScalarFieldEnum | Prisma.CustomRoleScalarFieldEnum[];
};
export type CustomRoleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleSelect<ExtArgs> | null;
    omit?: Prisma.CustomRoleOmit<ExtArgs> | null;
    include?: Prisma.CustomRoleInclude<ExtArgs> | null;
    where?: Prisma.CustomRoleWhereInput;
    orderBy?: Prisma.CustomRoleOrderByWithRelationInput | Prisma.CustomRoleOrderByWithRelationInput[];
    cursor?: Prisma.CustomRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomRoleScalarFieldEnum | Prisma.CustomRoleScalarFieldEnum[];
};
export type CustomRoleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleSelect<ExtArgs> | null;
    omit?: Prisma.CustomRoleOmit<ExtArgs> | null;
    include?: Prisma.CustomRoleInclude<ExtArgs> | null;
    where?: Prisma.CustomRoleWhereInput;
    orderBy?: Prisma.CustomRoleOrderByWithRelationInput | Prisma.CustomRoleOrderByWithRelationInput[];
    cursor?: Prisma.CustomRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomRoleScalarFieldEnum | Prisma.CustomRoleScalarFieldEnum[];
};
export type CustomRoleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleSelect<ExtArgs> | null;
    omit?: Prisma.CustomRoleOmit<ExtArgs> | null;
    include?: Prisma.CustomRoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomRoleCreateInput, Prisma.CustomRoleUncheckedCreateInput>;
};
export type CustomRoleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomRoleCreateManyInput | Prisma.CustomRoleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomRoleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomRoleOmit<ExtArgs> | null;
    data: Prisma.CustomRoleCreateManyInput | Prisma.CustomRoleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomRoleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomRoleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleSelect<ExtArgs> | null;
    omit?: Prisma.CustomRoleOmit<ExtArgs> | null;
    include?: Prisma.CustomRoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomRoleUpdateInput, Prisma.CustomRoleUncheckedUpdateInput>;
    where: Prisma.CustomRoleWhereUniqueInput;
};
export type CustomRoleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomRoleUpdateManyMutationInput, Prisma.CustomRoleUncheckedUpdateManyInput>;
    where?: Prisma.CustomRoleWhereInput;
    limit?: number;
};
export type CustomRoleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomRoleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomRoleUpdateManyMutationInput, Prisma.CustomRoleUncheckedUpdateManyInput>;
    where?: Prisma.CustomRoleWhereInput;
    limit?: number;
    include?: Prisma.CustomRoleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomRoleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleSelect<ExtArgs> | null;
    omit?: Prisma.CustomRoleOmit<ExtArgs> | null;
    include?: Prisma.CustomRoleInclude<ExtArgs> | null;
    where: Prisma.CustomRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomRoleCreateInput, Prisma.CustomRoleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomRoleUpdateInput, Prisma.CustomRoleUncheckedUpdateInput>;
};
export type CustomRoleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleSelect<ExtArgs> | null;
    omit?: Prisma.CustomRoleOmit<ExtArgs> | null;
    include?: Prisma.CustomRoleInclude<ExtArgs> | null;
    where: Prisma.CustomRoleWhereUniqueInput;
};
export type CustomRoleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomRoleWhereInput;
    limit?: number;
};
export type CustomRole$permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    include?: Prisma.RolePermissionInclude<ExtArgs> | null;
    where?: Prisma.RolePermissionWhereInput;
    orderBy?: Prisma.RolePermissionOrderByWithRelationInput | Prisma.RolePermissionOrderByWithRelationInput[];
    cursor?: Prisma.RolePermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolePermissionScalarFieldEnum | Prisma.RolePermissionScalarFieldEnum[];
};
export type CustomRole$teachersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
    orderBy?: Prisma.TeacherOrderByWithRelationInput | Prisma.TeacherOrderByWithRelationInput[];
    cursor?: Prisma.TeacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherScalarFieldEnum | Prisma.TeacherScalarFieldEnum[];
};
export type CustomRole$staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffSelect<ExtArgs> | null;
    omit?: Prisma.StaffOmit<ExtArgs> | null;
    include?: Prisma.StaffInclude<ExtArgs> | null;
    where?: Prisma.StaffWhereInput;
    orderBy?: Prisma.StaffOrderByWithRelationInput | Prisma.StaffOrderByWithRelationInput[];
    cursor?: Prisma.StaffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StaffScalarFieldEnum | Prisma.StaffScalarFieldEnum[];
};
export type CustomRoleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomRoleSelect<ExtArgs> | null;
    omit?: Prisma.CustomRoleOmit<ExtArgs> | null;
    include?: Prisma.CustomRoleInclude<ExtArgs> | null;
};
