import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentTransportModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentTransportPayload>;
export type AggregateStudentTransport = {
    _count: StudentTransportCountAggregateOutputType | null;
    _min: StudentTransportMinAggregateOutputType | null;
    _max: StudentTransportMaxAggregateOutputType | null;
};
export type StudentTransportMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    studentId: string | null;
    routeId: string | null;
    stopId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentTransportMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    studentId: string | null;
    routeId: string | null;
    stopId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentTransportCountAggregateOutputType = {
    id: number;
    schoolId: number;
    studentId: number;
    routeId: number;
    stopId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StudentTransportMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    studentId?: true;
    routeId?: true;
    stopId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentTransportMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    studentId?: true;
    routeId?: true;
    stopId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentTransportCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    studentId?: true;
    routeId?: true;
    stopId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StudentTransportAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentTransportWhereInput;
    orderBy?: Prisma.StudentTransportOrderByWithRelationInput | Prisma.StudentTransportOrderByWithRelationInput[];
    cursor?: Prisma.StudentTransportWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentTransportCountAggregateInputType;
    _min?: StudentTransportMinAggregateInputType;
    _max?: StudentTransportMaxAggregateInputType;
};
export type GetStudentTransportAggregateType<T extends StudentTransportAggregateArgs> = {
    [P in keyof T & keyof AggregateStudentTransport]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudentTransport[P]> : Prisma.GetScalarType<T[P], AggregateStudentTransport[P]>;
};
export type StudentTransportGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentTransportWhereInput;
    orderBy?: Prisma.StudentTransportOrderByWithAggregationInput | Prisma.StudentTransportOrderByWithAggregationInput[];
    by: Prisma.StudentTransportScalarFieldEnum[] | Prisma.StudentTransportScalarFieldEnum;
    having?: Prisma.StudentTransportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentTransportCountAggregateInputType | true;
    _min?: StudentTransportMinAggregateInputType;
    _max?: StudentTransportMaxAggregateInputType;
};
export type StudentTransportGroupByOutputType = {
    id: string;
    schoolId: string;
    studentId: string;
    routeId: string;
    stopId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: StudentTransportCountAggregateOutputType | null;
    _min: StudentTransportMinAggregateOutputType | null;
    _max: StudentTransportMaxAggregateOutputType | null;
};
export type GetStudentTransportGroupByPayload<T extends StudentTransportGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentTransportGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentTransportGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentTransportGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentTransportGroupByOutputType[P]>;
}>>;
export type StudentTransportWhereInput = {
    AND?: Prisma.StudentTransportWhereInput | Prisma.StudentTransportWhereInput[];
    OR?: Prisma.StudentTransportWhereInput[];
    NOT?: Prisma.StudentTransportWhereInput | Prisma.StudentTransportWhereInput[];
    id?: Prisma.StringFilter<"StudentTransport"> | string;
    schoolId?: Prisma.StringFilter<"StudentTransport"> | string;
    studentId?: Prisma.StringFilter<"StudentTransport"> | string;
    routeId?: Prisma.StringFilter<"StudentTransport"> | string;
    stopId?: Prisma.StringFilter<"StudentTransport"> | string;
    createdAt?: Prisma.DateTimeFilter<"StudentTransport"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StudentTransport"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    route?: Prisma.XOR<Prisma.RouteScalarRelationFilter, Prisma.RouteWhereInput>;
    stop?: Prisma.XOR<Prisma.RouteStopScalarRelationFilter, Prisma.RouteStopWhereInput>;
};
export type StudentTransportOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    routeId?: Prisma.SortOrder;
    stopId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
    route?: Prisma.RouteOrderByWithRelationInput;
    stop?: Prisma.RouteStopOrderByWithRelationInput;
};
export type StudentTransportWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    studentId?: string;
    AND?: Prisma.StudentTransportWhereInput | Prisma.StudentTransportWhereInput[];
    OR?: Prisma.StudentTransportWhereInput[];
    NOT?: Prisma.StudentTransportWhereInput | Prisma.StudentTransportWhereInput[];
    schoolId?: Prisma.StringFilter<"StudentTransport"> | string;
    routeId?: Prisma.StringFilter<"StudentTransport"> | string;
    stopId?: Prisma.StringFilter<"StudentTransport"> | string;
    createdAt?: Prisma.DateTimeFilter<"StudentTransport"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StudentTransport"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    route?: Prisma.XOR<Prisma.RouteScalarRelationFilter, Prisma.RouteWhereInput>;
    stop?: Prisma.XOR<Prisma.RouteStopScalarRelationFilter, Prisma.RouteStopWhereInput>;
}, "id" | "studentId">;
export type StudentTransportOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    routeId?: Prisma.SortOrder;
    stopId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StudentTransportCountOrderByAggregateInput;
    _max?: Prisma.StudentTransportMaxOrderByAggregateInput;
    _min?: Prisma.StudentTransportMinOrderByAggregateInput;
};
export type StudentTransportScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentTransportScalarWhereWithAggregatesInput | Prisma.StudentTransportScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentTransportScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentTransportScalarWhereWithAggregatesInput | Prisma.StudentTransportScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StudentTransport"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"StudentTransport"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"StudentTransport"> | string;
    routeId?: Prisma.StringWithAggregatesFilter<"StudentTransport"> | string;
    stopId?: Prisma.StringWithAggregatesFilter<"StudentTransport"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StudentTransport"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StudentTransport"> | Date | string;
};
export type StudentTransportCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStudentTransportsInput;
    student: Prisma.StudentCreateNestedOneWithoutTransportInput;
    route: Prisma.RouteCreateNestedOneWithoutStudentTransportsInput;
    stop: Prisma.RouteStopCreateNestedOneWithoutStudentTransportsInput;
};
export type StudentTransportUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    routeId: string;
    stopId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentTransportUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentTransportsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutTransportNestedInput;
    route?: Prisma.RouteUpdateOneRequiredWithoutStudentTransportsNestedInput;
    stop?: Prisma.RouteStopUpdateOneRequiredWithoutStudentTransportsNestedInput;
};
export type StudentTransportUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    routeId?: Prisma.StringFieldUpdateOperationsInput | string;
    stopId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentTransportCreateManyInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    routeId: string;
    stopId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentTransportUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentTransportUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    routeId?: Prisma.StringFieldUpdateOperationsInput | string;
    stopId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentTransportListRelationFilter = {
    every?: Prisma.StudentTransportWhereInput;
    some?: Prisma.StudentTransportWhereInput;
    none?: Prisma.StudentTransportWhereInput;
};
export type StudentTransportOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentTransportNullableScalarRelationFilter = {
    is?: Prisma.StudentTransportWhereInput | null;
    isNot?: Prisma.StudentTransportWhereInput | null;
};
export type StudentTransportCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    routeId?: Prisma.SortOrder;
    stopId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentTransportMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    routeId?: Prisma.SortOrder;
    stopId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentTransportMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    routeId?: Prisma.SortOrder;
    stopId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentTransportCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutSchoolInput, Prisma.StudentTransportUncheckedCreateWithoutSchoolInput> | Prisma.StudentTransportCreateWithoutSchoolInput[] | Prisma.StudentTransportUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutSchoolInput | Prisma.StudentTransportCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.StudentTransportCreateManySchoolInputEnvelope;
    connect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
};
export type StudentTransportUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutSchoolInput, Prisma.StudentTransportUncheckedCreateWithoutSchoolInput> | Prisma.StudentTransportCreateWithoutSchoolInput[] | Prisma.StudentTransportUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutSchoolInput | Prisma.StudentTransportCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.StudentTransportCreateManySchoolInputEnvelope;
    connect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
};
export type StudentTransportUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutSchoolInput, Prisma.StudentTransportUncheckedCreateWithoutSchoolInput> | Prisma.StudentTransportCreateWithoutSchoolInput[] | Prisma.StudentTransportUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutSchoolInput | Prisma.StudentTransportCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.StudentTransportUpsertWithWhereUniqueWithoutSchoolInput | Prisma.StudentTransportUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.StudentTransportCreateManySchoolInputEnvelope;
    set?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    disconnect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    delete?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    connect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    update?: Prisma.StudentTransportUpdateWithWhereUniqueWithoutSchoolInput | Prisma.StudentTransportUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.StudentTransportUpdateManyWithWhereWithoutSchoolInput | Prisma.StudentTransportUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.StudentTransportScalarWhereInput | Prisma.StudentTransportScalarWhereInput[];
};
export type StudentTransportUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutSchoolInput, Prisma.StudentTransportUncheckedCreateWithoutSchoolInput> | Prisma.StudentTransportCreateWithoutSchoolInput[] | Prisma.StudentTransportUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutSchoolInput | Prisma.StudentTransportCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.StudentTransportUpsertWithWhereUniqueWithoutSchoolInput | Prisma.StudentTransportUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.StudentTransportCreateManySchoolInputEnvelope;
    set?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    disconnect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    delete?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    connect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    update?: Prisma.StudentTransportUpdateWithWhereUniqueWithoutSchoolInput | Prisma.StudentTransportUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.StudentTransportUpdateManyWithWhereWithoutSchoolInput | Prisma.StudentTransportUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.StudentTransportScalarWhereInput | Prisma.StudentTransportScalarWhereInput[];
};
export type StudentTransportCreateNestedOneWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutStudentInput, Prisma.StudentTransportUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutStudentInput;
    connect?: Prisma.StudentTransportWhereUniqueInput;
};
export type StudentTransportUncheckedCreateNestedOneWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutStudentInput, Prisma.StudentTransportUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutStudentInput;
    connect?: Prisma.StudentTransportWhereUniqueInput;
};
export type StudentTransportUpdateOneWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutStudentInput, Prisma.StudentTransportUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutStudentInput;
    upsert?: Prisma.StudentTransportUpsertWithoutStudentInput;
    disconnect?: Prisma.StudentTransportWhereInput | boolean;
    delete?: Prisma.StudentTransportWhereInput | boolean;
    connect?: Prisma.StudentTransportWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentTransportUpdateToOneWithWhereWithoutStudentInput, Prisma.StudentTransportUpdateWithoutStudentInput>, Prisma.StudentTransportUncheckedUpdateWithoutStudentInput>;
};
export type StudentTransportUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutStudentInput, Prisma.StudentTransportUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutStudentInput;
    upsert?: Prisma.StudentTransportUpsertWithoutStudentInput;
    disconnect?: Prisma.StudentTransportWhereInput | boolean;
    delete?: Prisma.StudentTransportWhereInput | boolean;
    connect?: Prisma.StudentTransportWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentTransportUpdateToOneWithWhereWithoutStudentInput, Prisma.StudentTransportUpdateWithoutStudentInput>, Prisma.StudentTransportUncheckedUpdateWithoutStudentInput>;
};
export type StudentTransportCreateNestedManyWithoutRouteInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutRouteInput, Prisma.StudentTransportUncheckedCreateWithoutRouteInput> | Prisma.StudentTransportCreateWithoutRouteInput[] | Prisma.StudentTransportUncheckedCreateWithoutRouteInput[];
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutRouteInput | Prisma.StudentTransportCreateOrConnectWithoutRouteInput[];
    createMany?: Prisma.StudentTransportCreateManyRouteInputEnvelope;
    connect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
};
export type StudentTransportUncheckedCreateNestedManyWithoutRouteInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutRouteInput, Prisma.StudentTransportUncheckedCreateWithoutRouteInput> | Prisma.StudentTransportCreateWithoutRouteInput[] | Prisma.StudentTransportUncheckedCreateWithoutRouteInput[];
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutRouteInput | Prisma.StudentTransportCreateOrConnectWithoutRouteInput[];
    createMany?: Prisma.StudentTransportCreateManyRouteInputEnvelope;
    connect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
};
export type StudentTransportUpdateManyWithoutRouteNestedInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutRouteInput, Prisma.StudentTransportUncheckedCreateWithoutRouteInput> | Prisma.StudentTransportCreateWithoutRouteInput[] | Prisma.StudentTransportUncheckedCreateWithoutRouteInput[];
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutRouteInput | Prisma.StudentTransportCreateOrConnectWithoutRouteInput[];
    upsert?: Prisma.StudentTransportUpsertWithWhereUniqueWithoutRouteInput | Prisma.StudentTransportUpsertWithWhereUniqueWithoutRouteInput[];
    createMany?: Prisma.StudentTransportCreateManyRouteInputEnvelope;
    set?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    disconnect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    delete?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    connect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    update?: Prisma.StudentTransportUpdateWithWhereUniqueWithoutRouteInput | Prisma.StudentTransportUpdateWithWhereUniqueWithoutRouteInput[];
    updateMany?: Prisma.StudentTransportUpdateManyWithWhereWithoutRouteInput | Prisma.StudentTransportUpdateManyWithWhereWithoutRouteInput[];
    deleteMany?: Prisma.StudentTransportScalarWhereInput | Prisma.StudentTransportScalarWhereInput[];
};
export type StudentTransportUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutRouteInput, Prisma.StudentTransportUncheckedCreateWithoutRouteInput> | Prisma.StudentTransportCreateWithoutRouteInput[] | Prisma.StudentTransportUncheckedCreateWithoutRouteInput[];
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutRouteInput | Prisma.StudentTransportCreateOrConnectWithoutRouteInput[];
    upsert?: Prisma.StudentTransportUpsertWithWhereUniqueWithoutRouteInput | Prisma.StudentTransportUpsertWithWhereUniqueWithoutRouteInput[];
    createMany?: Prisma.StudentTransportCreateManyRouteInputEnvelope;
    set?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    disconnect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    delete?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    connect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    update?: Prisma.StudentTransportUpdateWithWhereUniqueWithoutRouteInput | Prisma.StudentTransportUpdateWithWhereUniqueWithoutRouteInput[];
    updateMany?: Prisma.StudentTransportUpdateManyWithWhereWithoutRouteInput | Prisma.StudentTransportUpdateManyWithWhereWithoutRouteInput[];
    deleteMany?: Prisma.StudentTransportScalarWhereInput | Prisma.StudentTransportScalarWhereInput[];
};
export type StudentTransportCreateNestedManyWithoutStopInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutStopInput, Prisma.StudentTransportUncheckedCreateWithoutStopInput> | Prisma.StudentTransportCreateWithoutStopInput[] | Prisma.StudentTransportUncheckedCreateWithoutStopInput[];
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutStopInput | Prisma.StudentTransportCreateOrConnectWithoutStopInput[];
    createMany?: Prisma.StudentTransportCreateManyStopInputEnvelope;
    connect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
};
export type StudentTransportUncheckedCreateNestedManyWithoutStopInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutStopInput, Prisma.StudentTransportUncheckedCreateWithoutStopInput> | Prisma.StudentTransportCreateWithoutStopInput[] | Prisma.StudentTransportUncheckedCreateWithoutStopInput[];
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutStopInput | Prisma.StudentTransportCreateOrConnectWithoutStopInput[];
    createMany?: Prisma.StudentTransportCreateManyStopInputEnvelope;
    connect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
};
export type StudentTransportUpdateManyWithoutStopNestedInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutStopInput, Prisma.StudentTransportUncheckedCreateWithoutStopInput> | Prisma.StudentTransportCreateWithoutStopInput[] | Prisma.StudentTransportUncheckedCreateWithoutStopInput[];
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutStopInput | Prisma.StudentTransportCreateOrConnectWithoutStopInput[];
    upsert?: Prisma.StudentTransportUpsertWithWhereUniqueWithoutStopInput | Prisma.StudentTransportUpsertWithWhereUniqueWithoutStopInput[];
    createMany?: Prisma.StudentTransportCreateManyStopInputEnvelope;
    set?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    disconnect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    delete?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    connect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    update?: Prisma.StudentTransportUpdateWithWhereUniqueWithoutStopInput | Prisma.StudentTransportUpdateWithWhereUniqueWithoutStopInput[];
    updateMany?: Prisma.StudentTransportUpdateManyWithWhereWithoutStopInput | Prisma.StudentTransportUpdateManyWithWhereWithoutStopInput[];
    deleteMany?: Prisma.StudentTransportScalarWhereInput | Prisma.StudentTransportScalarWhereInput[];
};
export type StudentTransportUncheckedUpdateManyWithoutStopNestedInput = {
    create?: Prisma.XOR<Prisma.StudentTransportCreateWithoutStopInput, Prisma.StudentTransportUncheckedCreateWithoutStopInput> | Prisma.StudentTransportCreateWithoutStopInput[] | Prisma.StudentTransportUncheckedCreateWithoutStopInput[];
    connectOrCreate?: Prisma.StudentTransportCreateOrConnectWithoutStopInput | Prisma.StudentTransportCreateOrConnectWithoutStopInput[];
    upsert?: Prisma.StudentTransportUpsertWithWhereUniqueWithoutStopInput | Prisma.StudentTransportUpsertWithWhereUniqueWithoutStopInput[];
    createMany?: Prisma.StudentTransportCreateManyStopInputEnvelope;
    set?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    disconnect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    delete?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    connect?: Prisma.StudentTransportWhereUniqueInput | Prisma.StudentTransportWhereUniqueInput[];
    update?: Prisma.StudentTransportUpdateWithWhereUniqueWithoutStopInput | Prisma.StudentTransportUpdateWithWhereUniqueWithoutStopInput[];
    updateMany?: Prisma.StudentTransportUpdateManyWithWhereWithoutStopInput | Prisma.StudentTransportUpdateManyWithWhereWithoutStopInput[];
    deleteMany?: Prisma.StudentTransportScalarWhereInput | Prisma.StudentTransportScalarWhereInput[];
};
export type StudentTransportCreateWithoutSchoolInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutTransportInput;
    route: Prisma.RouteCreateNestedOneWithoutStudentTransportsInput;
    stop: Prisma.RouteStopCreateNestedOneWithoutStudentTransportsInput;
};
export type StudentTransportUncheckedCreateWithoutSchoolInput = {
    id?: string;
    studentId: string;
    routeId: string;
    stopId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentTransportCreateOrConnectWithoutSchoolInput = {
    where: Prisma.StudentTransportWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentTransportCreateWithoutSchoolInput, Prisma.StudentTransportUncheckedCreateWithoutSchoolInput>;
};
export type StudentTransportCreateManySchoolInputEnvelope = {
    data: Prisma.StudentTransportCreateManySchoolInput | Prisma.StudentTransportCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type StudentTransportUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.StudentTransportWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentTransportUpdateWithoutSchoolInput, Prisma.StudentTransportUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.StudentTransportCreateWithoutSchoolInput, Prisma.StudentTransportUncheckedCreateWithoutSchoolInput>;
};
export type StudentTransportUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.StudentTransportWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentTransportUpdateWithoutSchoolInput, Prisma.StudentTransportUncheckedUpdateWithoutSchoolInput>;
};
export type StudentTransportUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.StudentTransportScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentTransportUpdateManyMutationInput, Prisma.StudentTransportUncheckedUpdateManyWithoutSchoolInput>;
};
export type StudentTransportScalarWhereInput = {
    AND?: Prisma.StudentTransportScalarWhereInput | Prisma.StudentTransportScalarWhereInput[];
    OR?: Prisma.StudentTransportScalarWhereInput[];
    NOT?: Prisma.StudentTransportScalarWhereInput | Prisma.StudentTransportScalarWhereInput[];
    id?: Prisma.StringFilter<"StudentTransport"> | string;
    schoolId?: Prisma.StringFilter<"StudentTransport"> | string;
    studentId?: Prisma.StringFilter<"StudentTransport"> | string;
    routeId?: Prisma.StringFilter<"StudentTransport"> | string;
    stopId?: Prisma.StringFilter<"StudentTransport"> | string;
    createdAt?: Prisma.DateTimeFilter<"StudentTransport"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StudentTransport"> | Date | string;
};
export type StudentTransportCreateWithoutStudentInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStudentTransportsInput;
    route: Prisma.RouteCreateNestedOneWithoutStudentTransportsInput;
    stop: Prisma.RouteStopCreateNestedOneWithoutStudentTransportsInput;
};
export type StudentTransportUncheckedCreateWithoutStudentInput = {
    id?: string;
    schoolId: string;
    routeId: string;
    stopId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentTransportCreateOrConnectWithoutStudentInput = {
    where: Prisma.StudentTransportWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentTransportCreateWithoutStudentInput, Prisma.StudentTransportUncheckedCreateWithoutStudentInput>;
};
export type StudentTransportUpsertWithoutStudentInput = {
    update: Prisma.XOR<Prisma.StudentTransportUpdateWithoutStudentInput, Prisma.StudentTransportUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.StudentTransportCreateWithoutStudentInput, Prisma.StudentTransportUncheckedCreateWithoutStudentInput>;
    where?: Prisma.StudentTransportWhereInput;
};
export type StudentTransportUpdateToOneWithWhereWithoutStudentInput = {
    where?: Prisma.StudentTransportWhereInput;
    data: Prisma.XOR<Prisma.StudentTransportUpdateWithoutStudentInput, Prisma.StudentTransportUncheckedUpdateWithoutStudentInput>;
};
export type StudentTransportUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentTransportsNestedInput;
    route?: Prisma.RouteUpdateOneRequiredWithoutStudentTransportsNestedInput;
    stop?: Prisma.RouteStopUpdateOneRequiredWithoutStudentTransportsNestedInput;
};
export type StudentTransportUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    routeId?: Prisma.StringFieldUpdateOperationsInput | string;
    stopId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentTransportCreateWithoutRouteInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStudentTransportsInput;
    student: Prisma.StudentCreateNestedOneWithoutTransportInput;
    stop: Prisma.RouteStopCreateNestedOneWithoutStudentTransportsInput;
};
export type StudentTransportUncheckedCreateWithoutRouteInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    stopId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentTransportCreateOrConnectWithoutRouteInput = {
    where: Prisma.StudentTransportWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentTransportCreateWithoutRouteInput, Prisma.StudentTransportUncheckedCreateWithoutRouteInput>;
};
export type StudentTransportCreateManyRouteInputEnvelope = {
    data: Prisma.StudentTransportCreateManyRouteInput | Prisma.StudentTransportCreateManyRouteInput[];
    skipDuplicates?: boolean;
};
export type StudentTransportUpsertWithWhereUniqueWithoutRouteInput = {
    where: Prisma.StudentTransportWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentTransportUpdateWithoutRouteInput, Prisma.StudentTransportUncheckedUpdateWithoutRouteInput>;
    create: Prisma.XOR<Prisma.StudentTransportCreateWithoutRouteInput, Prisma.StudentTransportUncheckedCreateWithoutRouteInput>;
};
export type StudentTransportUpdateWithWhereUniqueWithoutRouteInput = {
    where: Prisma.StudentTransportWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentTransportUpdateWithoutRouteInput, Prisma.StudentTransportUncheckedUpdateWithoutRouteInput>;
};
export type StudentTransportUpdateManyWithWhereWithoutRouteInput = {
    where: Prisma.StudentTransportScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentTransportUpdateManyMutationInput, Prisma.StudentTransportUncheckedUpdateManyWithoutRouteInput>;
};
export type StudentTransportCreateWithoutStopInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStudentTransportsInput;
    student: Prisma.StudentCreateNestedOneWithoutTransportInput;
    route: Prisma.RouteCreateNestedOneWithoutStudentTransportsInput;
};
export type StudentTransportUncheckedCreateWithoutStopInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    routeId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentTransportCreateOrConnectWithoutStopInput = {
    where: Prisma.StudentTransportWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentTransportCreateWithoutStopInput, Prisma.StudentTransportUncheckedCreateWithoutStopInput>;
};
export type StudentTransportCreateManyStopInputEnvelope = {
    data: Prisma.StudentTransportCreateManyStopInput | Prisma.StudentTransportCreateManyStopInput[];
    skipDuplicates?: boolean;
};
export type StudentTransportUpsertWithWhereUniqueWithoutStopInput = {
    where: Prisma.StudentTransportWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentTransportUpdateWithoutStopInput, Prisma.StudentTransportUncheckedUpdateWithoutStopInput>;
    create: Prisma.XOR<Prisma.StudentTransportCreateWithoutStopInput, Prisma.StudentTransportUncheckedCreateWithoutStopInput>;
};
export type StudentTransportUpdateWithWhereUniqueWithoutStopInput = {
    where: Prisma.StudentTransportWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentTransportUpdateWithoutStopInput, Prisma.StudentTransportUncheckedUpdateWithoutStopInput>;
};
export type StudentTransportUpdateManyWithWhereWithoutStopInput = {
    where: Prisma.StudentTransportScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentTransportUpdateManyMutationInput, Prisma.StudentTransportUncheckedUpdateManyWithoutStopInput>;
};
export type StudentTransportCreateManySchoolInput = {
    id?: string;
    studentId: string;
    routeId: string;
    stopId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentTransportUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutTransportNestedInput;
    route?: Prisma.RouteUpdateOneRequiredWithoutStudentTransportsNestedInput;
    stop?: Prisma.RouteStopUpdateOneRequiredWithoutStudentTransportsNestedInput;
};
export type StudentTransportUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    routeId?: Prisma.StringFieldUpdateOperationsInput | string;
    stopId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentTransportUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    routeId?: Prisma.StringFieldUpdateOperationsInput | string;
    stopId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentTransportCreateManyRouteInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    stopId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentTransportUpdateWithoutRouteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentTransportsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutTransportNestedInput;
    stop?: Prisma.RouteStopUpdateOneRequiredWithoutStudentTransportsNestedInput;
};
export type StudentTransportUncheckedUpdateWithoutRouteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    stopId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentTransportUncheckedUpdateManyWithoutRouteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    stopId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentTransportCreateManyStopInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    routeId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentTransportUpdateWithoutStopInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentTransportsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutTransportNestedInput;
    route?: Prisma.RouteUpdateOneRequiredWithoutStudentTransportsNestedInput;
};
export type StudentTransportUncheckedUpdateWithoutStopInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    routeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentTransportUncheckedUpdateManyWithoutStopInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    routeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentTransportSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    routeId?: boolean;
    stopId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    route?: boolean | Prisma.RouteDefaultArgs<ExtArgs>;
    stop?: boolean | Prisma.RouteStopDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentTransport"]>;
export type StudentTransportSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    routeId?: boolean;
    stopId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    route?: boolean | Prisma.RouteDefaultArgs<ExtArgs>;
    stop?: boolean | Prisma.RouteStopDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentTransport"]>;
export type StudentTransportSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    routeId?: boolean;
    stopId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    route?: boolean | Prisma.RouteDefaultArgs<ExtArgs>;
    stop?: boolean | Prisma.RouteStopDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentTransport"]>;
export type StudentTransportSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    routeId?: boolean;
    stopId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StudentTransportOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "studentId" | "routeId" | "stopId" | "createdAt" | "updatedAt", ExtArgs["result"]["studentTransport"]>;
export type StudentTransportInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    route?: boolean | Prisma.RouteDefaultArgs<ExtArgs>;
    stop?: boolean | Prisma.RouteStopDefaultArgs<ExtArgs>;
};
export type StudentTransportIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    route?: boolean | Prisma.RouteDefaultArgs<ExtArgs>;
    stop?: boolean | Prisma.RouteStopDefaultArgs<ExtArgs>;
};
export type StudentTransportIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    route?: boolean | Prisma.RouteDefaultArgs<ExtArgs>;
    stop?: boolean | Prisma.RouteStopDefaultArgs<ExtArgs>;
};
export type $StudentTransportPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StudentTransport";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs>;
        route: Prisma.$RoutePayload<ExtArgs>;
        stop: Prisma.$RouteStopPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        studentId: string;
        routeId: string;
        stopId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["studentTransport"]>;
    composites: {};
};
export type StudentTransportGetPayload<S extends boolean | null | undefined | StudentTransportDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload, S>;
export type StudentTransportCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentTransportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentTransportCountAggregateInputType | true;
};
export interface StudentTransportDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StudentTransport'];
        meta: {
            name: 'StudentTransport';
        };
    };
    findUnique<T extends StudentTransportFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentTransportFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentTransportClient<runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentTransportFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentTransportFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentTransportClient<runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentTransportFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentTransportFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentTransportClient<runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentTransportFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentTransportFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentTransportClient<runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentTransportFindManyArgs>(args?: Prisma.SelectSubset<T, StudentTransportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentTransportCreateArgs>(args: Prisma.SelectSubset<T, StudentTransportCreateArgs<ExtArgs>>): Prisma.Prisma__StudentTransportClient<runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentTransportCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentTransportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentTransportCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentTransportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentTransportDeleteArgs>(args: Prisma.SelectSubset<T, StudentTransportDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentTransportClient<runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentTransportUpdateArgs>(args: Prisma.SelectSubset<T, StudentTransportUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentTransportClient<runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentTransportDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentTransportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentTransportUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentTransportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentTransportUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentTransportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentTransportUpsertArgs>(args: Prisma.SelectSubset<T, StudentTransportUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentTransportClient<runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentTransportCountArgs>(args?: Prisma.Subset<T, StudentTransportCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentTransportCountAggregateOutputType> : number>;
    aggregate<T extends StudentTransportAggregateArgs>(args: Prisma.Subset<T, StudentTransportAggregateArgs>): Prisma.PrismaPromise<GetStudentTransportAggregateType<T>>;
    groupBy<T extends StudentTransportGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentTransportGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentTransportGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentTransportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentTransportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentTransportFieldRefs;
}
export interface Prisma__StudentTransportClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    route<T extends Prisma.RouteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RouteDefaultArgs<ExtArgs>>): Prisma.Prisma__RouteClient<runtime.Types.Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    stop<T extends Prisma.RouteStopDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RouteStopDefaultArgs<ExtArgs>>): Prisma.Prisma__RouteStopClient<runtime.Types.Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentTransportFieldRefs {
    readonly id: Prisma.FieldRef<"StudentTransport", 'String'>;
    readonly schoolId: Prisma.FieldRef<"StudentTransport", 'String'>;
    readonly studentId: Prisma.FieldRef<"StudentTransport", 'String'>;
    readonly routeId: Prisma.FieldRef<"StudentTransport", 'String'>;
    readonly stopId: Prisma.FieldRef<"StudentTransport", 'String'>;
    readonly createdAt: Prisma.FieldRef<"StudentTransport", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StudentTransport", 'DateTime'>;
}
export type StudentTransportFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentTransportSelect<ExtArgs> | null;
    omit?: Prisma.StudentTransportOmit<ExtArgs> | null;
    include?: Prisma.StudentTransportInclude<ExtArgs> | null;
    where: Prisma.StudentTransportWhereUniqueInput;
};
export type StudentTransportFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentTransportSelect<ExtArgs> | null;
    omit?: Prisma.StudentTransportOmit<ExtArgs> | null;
    include?: Prisma.StudentTransportInclude<ExtArgs> | null;
    where: Prisma.StudentTransportWhereUniqueInput;
};
export type StudentTransportFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentTransportSelect<ExtArgs> | null;
    omit?: Prisma.StudentTransportOmit<ExtArgs> | null;
    include?: Prisma.StudentTransportInclude<ExtArgs> | null;
    where?: Prisma.StudentTransportWhereInput;
    orderBy?: Prisma.StudentTransportOrderByWithRelationInput | Prisma.StudentTransportOrderByWithRelationInput[];
    cursor?: Prisma.StudentTransportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentTransportScalarFieldEnum | Prisma.StudentTransportScalarFieldEnum[];
};
export type StudentTransportFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentTransportSelect<ExtArgs> | null;
    omit?: Prisma.StudentTransportOmit<ExtArgs> | null;
    include?: Prisma.StudentTransportInclude<ExtArgs> | null;
    where?: Prisma.StudentTransportWhereInput;
    orderBy?: Prisma.StudentTransportOrderByWithRelationInput | Prisma.StudentTransportOrderByWithRelationInput[];
    cursor?: Prisma.StudentTransportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentTransportScalarFieldEnum | Prisma.StudentTransportScalarFieldEnum[];
};
export type StudentTransportFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentTransportSelect<ExtArgs> | null;
    omit?: Prisma.StudentTransportOmit<ExtArgs> | null;
    include?: Prisma.StudentTransportInclude<ExtArgs> | null;
    where?: Prisma.StudentTransportWhereInput;
    orderBy?: Prisma.StudentTransportOrderByWithRelationInput | Prisma.StudentTransportOrderByWithRelationInput[];
    cursor?: Prisma.StudentTransportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentTransportScalarFieldEnum | Prisma.StudentTransportScalarFieldEnum[];
};
export type StudentTransportCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentTransportSelect<ExtArgs> | null;
    omit?: Prisma.StudentTransportOmit<ExtArgs> | null;
    include?: Prisma.StudentTransportInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentTransportCreateInput, Prisma.StudentTransportUncheckedCreateInput>;
};
export type StudentTransportCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentTransportCreateManyInput | Prisma.StudentTransportCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentTransportCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentTransportSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentTransportOmit<ExtArgs> | null;
    data: Prisma.StudentTransportCreateManyInput | Prisma.StudentTransportCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentTransportIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentTransportUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentTransportSelect<ExtArgs> | null;
    omit?: Prisma.StudentTransportOmit<ExtArgs> | null;
    include?: Prisma.StudentTransportInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentTransportUpdateInput, Prisma.StudentTransportUncheckedUpdateInput>;
    where: Prisma.StudentTransportWhereUniqueInput;
};
export type StudentTransportUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentTransportUpdateManyMutationInput, Prisma.StudentTransportUncheckedUpdateManyInput>;
    where?: Prisma.StudentTransportWhereInput;
    limit?: number;
};
export type StudentTransportUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentTransportSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentTransportOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentTransportUpdateManyMutationInput, Prisma.StudentTransportUncheckedUpdateManyInput>;
    where?: Prisma.StudentTransportWhereInput;
    limit?: number;
    include?: Prisma.StudentTransportIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentTransportUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentTransportSelect<ExtArgs> | null;
    omit?: Prisma.StudentTransportOmit<ExtArgs> | null;
    include?: Prisma.StudentTransportInclude<ExtArgs> | null;
    where: Prisma.StudentTransportWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentTransportCreateInput, Prisma.StudentTransportUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentTransportUpdateInput, Prisma.StudentTransportUncheckedUpdateInput>;
};
export type StudentTransportDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentTransportSelect<ExtArgs> | null;
    omit?: Prisma.StudentTransportOmit<ExtArgs> | null;
    include?: Prisma.StudentTransportInclude<ExtArgs> | null;
    where: Prisma.StudentTransportWhereUniqueInput;
};
export type StudentTransportDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentTransportWhereInput;
    limit?: number;
};
export type StudentTransportDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentTransportSelect<ExtArgs> | null;
    omit?: Prisma.StudentTransportOmit<ExtArgs> | null;
    include?: Prisma.StudentTransportInclude<ExtArgs> | null;
};
