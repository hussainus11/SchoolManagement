import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RouteStopModel = runtime.Types.Result.DefaultSelection<Prisma.$RouteStopPayload>;
export type AggregateRouteStop = {
    _count: RouteStopCountAggregateOutputType | null;
    _avg: RouteStopAvgAggregateOutputType | null;
    _sum: RouteStopSumAggregateOutputType | null;
    _min: RouteStopMinAggregateOutputType | null;
    _max: RouteStopMaxAggregateOutputType | null;
};
export type RouteStopAvgAggregateOutputType = {
    order: number | null;
    fee: runtime.Decimal | null;
};
export type RouteStopSumAggregateOutputType = {
    order: number | null;
    fee: runtime.Decimal | null;
};
export type RouteStopMinAggregateOutputType = {
    id: string | null;
    routeId: string | null;
    name: string | null;
    order: number | null;
    fee: runtime.Decimal | null;
    createdAt: Date | null;
};
export type RouteStopMaxAggregateOutputType = {
    id: string | null;
    routeId: string | null;
    name: string | null;
    order: number | null;
    fee: runtime.Decimal | null;
    createdAt: Date | null;
};
export type RouteStopCountAggregateOutputType = {
    id: number;
    routeId: number;
    name: number;
    order: number;
    fee: number;
    createdAt: number;
    _all: number;
};
export type RouteStopAvgAggregateInputType = {
    order?: true;
    fee?: true;
};
export type RouteStopSumAggregateInputType = {
    order?: true;
    fee?: true;
};
export type RouteStopMinAggregateInputType = {
    id?: true;
    routeId?: true;
    name?: true;
    order?: true;
    fee?: true;
    createdAt?: true;
};
export type RouteStopMaxAggregateInputType = {
    id?: true;
    routeId?: true;
    name?: true;
    order?: true;
    fee?: true;
    createdAt?: true;
};
export type RouteStopCountAggregateInputType = {
    id?: true;
    routeId?: true;
    name?: true;
    order?: true;
    fee?: true;
    createdAt?: true;
    _all?: true;
};
export type RouteStopAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RouteStopWhereInput;
    orderBy?: Prisma.RouteStopOrderByWithRelationInput | Prisma.RouteStopOrderByWithRelationInput[];
    cursor?: Prisma.RouteStopWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RouteStopCountAggregateInputType;
    _avg?: RouteStopAvgAggregateInputType;
    _sum?: RouteStopSumAggregateInputType;
    _min?: RouteStopMinAggregateInputType;
    _max?: RouteStopMaxAggregateInputType;
};
export type GetRouteStopAggregateType<T extends RouteStopAggregateArgs> = {
    [P in keyof T & keyof AggregateRouteStop]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRouteStop[P]> : Prisma.GetScalarType<T[P], AggregateRouteStop[P]>;
};
export type RouteStopGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RouteStopWhereInput;
    orderBy?: Prisma.RouteStopOrderByWithAggregationInput | Prisma.RouteStopOrderByWithAggregationInput[];
    by: Prisma.RouteStopScalarFieldEnum[] | Prisma.RouteStopScalarFieldEnum;
    having?: Prisma.RouteStopScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RouteStopCountAggregateInputType | true;
    _avg?: RouteStopAvgAggregateInputType;
    _sum?: RouteStopSumAggregateInputType;
    _min?: RouteStopMinAggregateInputType;
    _max?: RouteStopMaxAggregateInputType;
};
export type RouteStopGroupByOutputType = {
    id: string;
    routeId: string;
    name: string;
    order: number;
    fee: runtime.Decimal;
    createdAt: Date;
    _count: RouteStopCountAggregateOutputType | null;
    _avg: RouteStopAvgAggregateOutputType | null;
    _sum: RouteStopSumAggregateOutputType | null;
    _min: RouteStopMinAggregateOutputType | null;
    _max: RouteStopMaxAggregateOutputType | null;
};
export type GetRouteStopGroupByPayload<T extends RouteStopGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RouteStopGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RouteStopGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RouteStopGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RouteStopGroupByOutputType[P]>;
}>>;
export type RouteStopWhereInput = {
    AND?: Prisma.RouteStopWhereInput | Prisma.RouteStopWhereInput[];
    OR?: Prisma.RouteStopWhereInput[];
    NOT?: Prisma.RouteStopWhereInput | Prisma.RouteStopWhereInput[];
    id?: Prisma.StringFilter<"RouteStop"> | string;
    routeId?: Prisma.StringFilter<"RouteStop"> | string;
    name?: Prisma.StringFilter<"RouteStop"> | string;
    order?: Prisma.IntFilter<"RouteStop"> | number;
    fee?: Prisma.DecimalFilter<"RouteStop"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"RouteStop"> | Date | string;
    route?: Prisma.XOR<Prisma.RouteScalarRelationFilter, Prisma.RouteWhereInput>;
    studentTransports?: Prisma.StudentTransportListRelationFilter;
};
export type RouteStopOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    routeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    route?: Prisma.RouteOrderByWithRelationInput;
    studentTransports?: Prisma.StudentTransportOrderByRelationAggregateInput;
};
export type RouteStopWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RouteStopWhereInput | Prisma.RouteStopWhereInput[];
    OR?: Prisma.RouteStopWhereInput[];
    NOT?: Prisma.RouteStopWhereInput | Prisma.RouteStopWhereInput[];
    routeId?: Prisma.StringFilter<"RouteStop"> | string;
    name?: Prisma.StringFilter<"RouteStop"> | string;
    order?: Prisma.IntFilter<"RouteStop"> | number;
    fee?: Prisma.DecimalFilter<"RouteStop"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"RouteStop"> | Date | string;
    route?: Prisma.XOR<Prisma.RouteScalarRelationFilter, Prisma.RouteWhereInput>;
    studentTransports?: Prisma.StudentTransportListRelationFilter;
}, "id">;
export type RouteStopOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    routeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RouteStopCountOrderByAggregateInput;
    _avg?: Prisma.RouteStopAvgOrderByAggregateInput;
    _max?: Prisma.RouteStopMaxOrderByAggregateInput;
    _min?: Prisma.RouteStopMinOrderByAggregateInput;
    _sum?: Prisma.RouteStopSumOrderByAggregateInput;
};
export type RouteStopScalarWhereWithAggregatesInput = {
    AND?: Prisma.RouteStopScalarWhereWithAggregatesInput | Prisma.RouteStopScalarWhereWithAggregatesInput[];
    OR?: Prisma.RouteStopScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RouteStopScalarWhereWithAggregatesInput | Prisma.RouteStopScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RouteStop"> | string;
    routeId?: Prisma.StringWithAggregatesFilter<"RouteStop"> | string;
    name?: Prisma.StringWithAggregatesFilter<"RouteStop"> | string;
    order?: Prisma.IntWithAggregatesFilter<"RouteStop"> | number;
    fee?: Prisma.DecimalWithAggregatesFilter<"RouteStop"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RouteStop"> | Date | string;
};
export type RouteStopCreateInput = {
    id?: string;
    name: string;
    order?: number;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    route: Prisma.RouteCreateNestedOneWithoutStopsInput;
    studentTransports?: Prisma.StudentTransportCreateNestedManyWithoutStopInput;
};
export type RouteStopUncheckedCreateInput = {
    id?: string;
    routeId: string;
    name: string;
    order?: number;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    studentTransports?: Prisma.StudentTransportUncheckedCreateNestedManyWithoutStopInput;
};
export type RouteStopUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    route?: Prisma.RouteUpdateOneRequiredWithoutStopsNestedInput;
    studentTransports?: Prisma.StudentTransportUpdateManyWithoutStopNestedInput;
};
export type RouteStopUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    routeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentTransports?: Prisma.StudentTransportUncheckedUpdateManyWithoutStopNestedInput;
};
export type RouteStopCreateManyInput = {
    id?: string;
    routeId: string;
    name: string;
    order?: number;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type RouteStopUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RouteStopUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    routeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RouteStopListRelationFilter = {
    every?: Prisma.RouteStopWhereInput;
    some?: Prisma.RouteStopWhereInput;
    none?: Prisma.RouteStopWhereInput;
};
export type RouteStopOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RouteStopCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    routeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RouteStopAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
};
export type RouteStopMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    routeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RouteStopMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    routeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RouteStopSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
};
export type RouteStopScalarRelationFilter = {
    is?: Prisma.RouteStopWhereInput;
    isNot?: Prisma.RouteStopWhereInput;
};
export type RouteStopCreateNestedManyWithoutRouteInput = {
    create?: Prisma.XOR<Prisma.RouteStopCreateWithoutRouteInput, Prisma.RouteStopUncheckedCreateWithoutRouteInput> | Prisma.RouteStopCreateWithoutRouteInput[] | Prisma.RouteStopUncheckedCreateWithoutRouteInput[];
    connectOrCreate?: Prisma.RouteStopCreateOrConnectWithoutRouteInput | Prisma.RouteStopCreateOrConnectWithoutRouteInput[];
    createMany?: Prisma.RouteStopCreateManyRouteInputEnvelope;
    connect?: Prisma.RouteStopWhereUniqueInput | Prisma.RouteStopWhereUniqueInput[];
};
export type RouteStopUncheckedCreateNestedManyWithoutRouteInput = {
    create?: Prisma.XOR<Prisma.RouteStopCreateWithoutRouteInput, Prisma.RouteStopUncheckedCreateWithoutRouteInput> | Prisma.RouteStopCreateWithoutRouteInput[] | Prisma.RouteStopUncheckedCreateWithoutRouteInput[];
    connectOrCreate?: Prisma.RouteStopCreateOrConnectWithoutRouteInput | Prisma.RouteStopCreateOrConnectWithoutRouteInput[];
    createMany?: Prisma.RouteStopCreateManyRouteInputEnvelope;
    connect?: Prisma.RouteStopWhereUniqueInput | Prisma.RouteStopWhereUniqueInput[];
};
export type RouteStopUpdateManyWithoutRouteNestedInput = {
    create?: Prisma.XOR<Prisma.RouteStopCreateWithoutRouteInput, Prisma.RouteStopUncheckedCreateWithoutRouteInput> | Prisma.RouteStopCreateWithoutRouteInput[] | Prisma.RouteStopUncheckedCreateWithoutRouteInput[];
    connectOrCreate?: Prisma.RouteStopCreateOrConnectWithoutRouteInput | Prisma.RouteStopCreateOrConnectWithoutRouteInput[];
    upsert?: Prisma.RouteStopUpsertWithWhereUniqueWithoutRouteInput | Prisma.RouteStopUpsertWithWhereUniqueWithoutRouteInput[];
    createMany?: Prisma.RouteStopCreateManyRouteInputEnvelope;
    set?: Prisma.RouteStopWhereUniqueInput | Prisma.RouteStopWhereUniqueInput[];
    disconnect?: Prisma.RouteStopWhereUniqueInput | Prisma.RouteStopWhereUniqueInput[];
    delete?: Prisma.RouteStopWhereUniqueInput | Prisma.RouteStopWhereUniqueInput[];
    connect?: Prisma.RouteStopWhereUniqueInput | Prisma.RouteStopWhereUniqueInput[];
    update?: Prisma.RouteStopUpdateWithWhereUniqueWithoutRouteInput | Prisma.RouteStopUpdateWithWhereUniqueWithoutRouteInput[];
    updateMany?: Prisma.RouteStopUpdateManyWithWhereWithoutRouteInput | Prisma.RouteStopUpdateManyWithWhereWithoutRouteInput[];
    deleteMany?: Prisma.RouteStopScalarWhereInput | Prisma.RouteStopScalarWhereInput[];
};
export type RouteStopUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: Prisma.XOR<Prisma.RouteStopCreateWithoutRouteInput, Prisma.RouteStopUncheckedCreateWithoutRouteInput> | Prisma.RouteStopCreateWithoutRouteInput[] | Prisma.RouteStopUncheckedCreateWithoutRouteInput[];
    connectOrCreate?: Prisma.RouteStopCreateOrConnectWithoutRouteInput | Prisma.RouteStopCreateOrConnectWithoutRouteInput[];
    upsert?: Prisma.RouteStopUpsertWithWhereUniqueWithoutRouteInput | Prisma.RouteStopUpsertWithWhereUniqueWithoutRouteInput[];
    createMany?: Prisma.RouteStopCreateManyRouteInputEnvelope;
    set?: Prisma.RouteStopWhereUniqueInput | Prisma.RouteStopWhereUniqueInput[];
    disconnect?: Prisma.RouteStopWhereUniqueInput | Prisma.RouteStopWhereUniqueInput[];
    delete?: Prisma.RouteStopWhereUniqueInput | Prisma.RouteStopWhereUniqueInput[];
    connect?: Prisma.RouteStopWhereUniqueInput | Prisma.RouteStopWhereUniqueInput[];
    update?: Prisma.RouteStopUpdateWithWhereUniqueWithoutRouteInput | Prisma.RouteStopUpdateWithWhereUniqueWithoutRouteInput[];
    updateMany?: Prisma.RouteStopUpdateManyWithWhereWithoutRouteInput | Prisma.RouteStopUpdateManyWithWhereWithoutRouteInput[];
    deleteMany?: Prisma.RouteStopScalarWhereInput | Prisma.RouteStopScalarWhereInput[];
};
export type RouteStopCreateNestedOneWithoutStudentTransportsInput = {
    create?: Prisma.XOR<Prisma.RouteStopCreateWithoutStudentTransportsInput, Prisma.RouteStopUncheckedCreateWithoutStudentTransportsInput>;
    connectOrCreate?: Prisma.RouteStopCreateOrConnectWithoutStudentTransportsInput;
    connect?: Prisma.RouteStopWhereUniqueInput;
};
export type RouteStopUpdateOneRequiredWithoutStudentTransportsNestedInput = {
    create?: Prisma.XOR<Prisma.RouteStopCreateWithoutStudentTransportsInput, Prisma.RouteStopUncheckedCreateWithoutStudentTransportsInput>;
    connectOrCreate?: Prisma.RouteStopCreateOrConnectWithoutStudentTransportsInput;
    upsert?: Prisma.RouteStopUpsertWithoutStudentTransportsInput;
    connect?: Prisma.RouteStopWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RouteStopUpdateToOneWithWhereWithoutStudentTransportsInput, Prisma.RouteStopUpdateWithoutStudentTransportsInput>, Prisma.RouteStopUncheckedUpdateWithoutStudentTransportsInput>;
};
export type RouteStopCreateWithoutRouteInput = {
    id?: string;
    name: string;
    order?: number;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    studentTransports?: Prisma.StudentTransportCreateNestedManyWithoutStopInput;
};
export type RouteStopUncheckedCreateWithoutRouteInput = {
    id?: string;
    name: string;
    order?: number;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    studentTransports?: Prisma.StudentTransportUncheckedCreateNestedManyWithoutStopInput;
};
export type RouteStopCreateOrConnectWithoutRouteInput = {
    where: Prisma.RouteStopWhereUniqueInput;
    create: Prisma.XOR<Prisma.RouteStopCreateWithoutRouteInput, Prisma.RouteStopUncheckedCreateWithoutRouteInput>;
};
export type RouteStopCreateManyRouteInputEnvelope = {
    data: Prisma.RouteStopCreateManyRouteInput | Prisma.RouteStopCreateManyRouteInput[];
    skipDuplicates?: boolean;
};
export type RouteStopUpsertWithWhereUniqueWithoutRouteInput = {
    where: Prisma.RouteStopWhereUniqueInput;
    update: Prisma.XOR<Prisma.RouteStopUpdateWithoutRouteInput, Prisma.RouteStopUncheckedUpdateWithoutRouteInput>;
    create: Prisma.XOR<Prisma.RouteStopCreateWithoutRouteInput, Prisma.RouteStopUncheckedCreateWithoutRouteInput>;
};
export type RouteStopUpdateWithWhereUniqueWithoutRouteInput = {
    where: Prisma.RouteStopWhereUniqueInput;
    data: Prisma.XOR<Prisma.RouteStopUpdateWithoutRouteInput, Prisma.RouteStopUncheckedUpdateWithoutRouteInput>;
};
export type RouteStopUpdateManyWithWhereWithoutRouteInput = {
    where: Prisma.RouteStopScalarWhereInput;
    data: Prisma.XOR<Prisma.RouteStopUpdateManyMutationInput, Prisma.RouteStopUncheckedUpdateManyWithoutRouteInput>;
};
export type RouteStopScalarWhereInput = {
    AND?: Prisma.RouteStopScalarWhereInput | Prisma.RouteStopScalarWhereInput[];
    OR?: Prisma.RouteStopScalarWhereInput[];
    NOT?: Prisma.RouteStopScalarWhereInput | Prisma.RouteStopScalarWhereInput[];
    id?: Prisma.StringFilter<"RouteStop"> | string;
    routeId?: Prisma.StringFilter<"RouteStop"> | string;
    name?: Prisma.StringFilter<"RouteStop"> | string;
    order?: Prisma.IntFilter<"RouteStop"> | number;
    fee?: Prisma.DecimalFilter<"RouteStop"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"RouteStop"> | Date | string;
};
export type RouteStopCreateWithoutStudentTransportsInput = {
    id?: string;
    name: string;
    order?: number;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    route: Prisma.RouteCreateNestedOneWithoutStopsInput;
};
export type RouteStopUncheckedCreateWithoutStudentTransportsInput = {
    id?: string;
    routeId: string;
    name: string;
    order?: number;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type RouteStopCreateOrConnectWithoutStudentTransportsInput = {
    where: Prisma.RouteStopWhereUniqueInput;
    create: Prisma.XOR<Prisma.RouteStopCreateWithoutStudentTransportsInput, Prisma.RouteStopUncheckedCreateWithoutStudentTransportsInput>;
};
export type RouteStopUpsertWithoutStudentTransportsInput = {
    update: Prisma.XOR<Prisma.RouteStopUpdateWithoutStudentTransportsInput, Prisma.RouteStopUncheckedUpdateWithoutStudentTransportsInput>;
    create: Prisma.XOR<Prisma.RouteStopCreateWithoutStudentTransportsInput, Prisma.RouteStopUncheckedCreateWithoutStudentTransportsInput>;
    where?: Prisma.RouteStopWhereInput;
};
export type RouteStopUpdateToOneWithWhereWithoutStudentTransportsInput = {
    where?: Prisma.RouteStopWhereInput;
    data: Prisma.XOR<Prisma.RouteStopUpdateWithoutStudentTransportsInput, Prisma.RouteStopUncheckedUpdateWithoutStudentTransportsInput>;
};
export type RouteStopUpdateWithoutStudentTransportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    route?: Prisma.RouteUpdateOneRequiredWithoutStopsNestedInput;
};
export type RouteStopUncheckedUpdateWithoutStudentTransportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    routeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RouteStopCreateManyRouteInput = {
    id?: string;
    name: string;
    order?: number;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type RouteStopUpdateWithoutRouteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentTransports?: Prisma.StudentTransportUpdateManyWithoutStopNestedInput;
};
export type RouteStopUncheckedUpdateWithoutRouteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentTransports?: Prisma.StudentTransportUncheckedUpdateManyWithoutStopNestedInput;
};
export type RouteStopUncheckedUpdateManyWithoutRouteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RouteStopCountOutputType = {
    studentTransports: number;
};
export type RouteStopCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    studentTransports?: boolean | RouteStopCountOutputTypeCountStudentTransportsArgs;
};
export type RouteStopCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopCountOutputTypeSelect<ExtArgs> | null;
};
export type RouteStopCountOutputTypeCountStudentTransportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentTransportWhereInput;
};
export type RouteStopSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    routeId?: boolean;
    name?: boolean;
    order?: boolean;
    fee?: boolean;
    createdAt?: boolean;
    route?: boolean | Prisma.RouteDefaultArgs<ExtArgs>;
    studentTransports?: boolean | Prisma.RouteStop$studentTransportsArgs<ExtArgs>;
    _count?: boolean | Prisma.RouteStopCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["routeStop"]>;
export type RouteStopSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    routeId?: boolean;
    name?: boolean;
    order?: boolean;
    fee?: boolean;
    createdAt?: boolean;
    route?: boolean | Prisma.RouteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["routeStop"]>;
export type RouteStopSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    routeId?: boolean;
    name?: boolean;
    order?: boolean;
    fee?: boolean;
    createdAt?: boolean;
    route?: boolean | Prisma.RouteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["routeStop"]>;
export type RouteStopSelectScalar = {
    id?: boolean;
    routeId?: boolean;
    name?: boolean;
    order?: boolean;
    fee?: boolean;
    createdAt?: boolean;
};
export type RouteStopOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "routeId" | "name" | "order" | "fee" | "createdAt", ExtArgs["result"]["routeStop"]>;
export type RouteStopInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    route?: boolean | Prisma.RouteDefaultArgs<ExtArgs>;
    studentTransports?: boolean | Prisma.RouteStop$studentTransportsArgs<ExtArgs>;
    _count?: boolean | Prisma.RouteStopCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RouteStopIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    route?: boolean | Prisma.RouteDefaultArgs<ExtArgs>;
};
export type RouteStopIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    route?: boolean | Prisma.RouteDefaultArgs<ExtArgs>;
};
export type $RouteStopPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RouteStop";
    objects: {
        route: Prisma.$RoutePayload<ExtArgs>;
        studentTransports: Prisma.$StudentTransportPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        routeId: string;
        name: string;
        order: number;
        fee: runtime.Decimal;
        createdAt: Date;
    }, ExtArgs["result"]["routeStop"]>;
    composites: {};
};
export type RouteStopGetPayload<S extends boolean | null | undefined | RouteStopDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RouteStopPayload, S>;
export type RouteStopCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RouteStopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RouteStopCountAggregateInputType | true;
};
export interface RouteStopDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RouteStop'];
        meta: {
            name: 'RouteStop';
        };
    };
    findUnique<T extends RouteStopFindUniqueArgs>(args: Prisma.SelectSubset<T, RouteStopFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RouteStopClient<runtime.Types.Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RouteStopFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RouteStopFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RouteStopClient<runtime.Types.Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RouteStopFindFirstArgs>(args?: Prisma.SelectSubset<T, RouteStopFindFirstArgs<ExtArgs>>): Prisma.Prisma__RouteStopClient<runtime.Types.Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RouteStopFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RouteStopFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RouteStopClient<runtime.Types.Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RouteStopFindManyArgs>(args?: Prisma.SelectSubset<T, RouteStopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RouteStopCreateArgs>(args: Prisma.SelectSubset<T, RouteStopCreateArgs<ExtArgs>>): Prisma.Prisma__RouteStopClient<runtime.Types.Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RouteStopCreateManyArgs>(args?: Prisma.SelectSubset<T, RouteStopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RouteStopCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RouteStopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RouteStopDeleteArgs>(args: Prisma.SelectSubset<T, RouteStopDeleteArgs<ExtArgs>>): Prisma.Prisma__RouteStopClient<runtime.Types.Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RouteStopUpdateArgs>(args: Prisma.SelectSubset<T, RouteStopUpdateArgs<ExtArgs>>): Prisma.Prisma__RouteStopClient<runtime.Types.Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RouteStopDeleteManyArgs>(args?: Prisma.SelectSubset<T, RouteStopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RouteStopUpdateManyArgs>(args: Prisma.SelectSubset<T, RouteStopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RouteStopUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RouteStopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RouteStopUpsertArgs>(args: Prisma.SelectSubset<T, RouteStopUpsertArgs<ExtArgs>>): Prisma.Prisma__RouteStopClient<runtime.Types.Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RouteStopCountArgs>(args?: Prisma.Subset<T, RouteStopCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RouteStopCountAggregateOutputType> : number>;
    aggregate<T extends RouteStopAggregateArgs>(args: Prisma.Subset<T, RouteStopAggregateArgs>): Prisma.PrismaPromise<GetRouteStopAggregateType<T>>;
    groupBy<T extends RouteStopGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RouteStopGroupByArgs['orderBy'];
    } : {
        orderBy?: RouteStopGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RouteStopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteStopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RouteStopFieldRefs;
}
export interface Prisma__RouteStopClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    route<T extends Prisma.RouteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RouteDefaultArgs<ExtArgs>>): Prisma.Prisma__RouteClient<runtime.Types.Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    studentTransports<T extends Prisma.RouteStop$studentTransportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RouteStop$studentTransportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RouteStopFieldRefs {
    readonly id: Prisma.FieldRef<"RouteStop", 'String'>;
    readonly routeId: Prisma.FieldRef<"RouteStop", 'String'>;
    readonly name: Prisma.FieldRef<"RouteStop", 'String'>;
    readonly order: Prisma.FieldRef<"RouteStop", 'Int'>;
    readonly fee: Prisma.FieldRef<"RouteStop", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"RouteStop", 'DateTime'>;
}
export type RouteStopFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopSelect<ExtArgs> | null;
    omit?: Prisma.RouteStopOmit<ExtArgs> | null;
    include?: Prisma.RouteStopInclude<ExtArgs> | null;
    where: Prisma.RouteStopWhereUniqueInput;
};
export type RouteStopFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopSelect<ExtArgs> | null;
    omit?: Prisma.RouteStopOmit<ExtArgs> | null;
    include?: Prisma.RouteStopInclude<ExtArgs> | null;
    where: Prisma.RouteStopWhereUniqueInput;
};
export type RouteStopFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopSelect<ExtArgs> | null;
    omit?: Prisma.RouteStopOmit<ExtArgs> | null;
    include?: Prisma.RouteStopInclude<ExtArgs> | null;
    where?: Prisma.RouteStopWhereInput;
    orderBy?: Prisma.RouteStopOrderByWithRelationInput | Prisma.RouteStopOrderByWithRelationInput[];
    cursor?: Prisma.RouteStopWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RouteStopScalarFieldEnum | Prisma.RouteStopScalarFieldEnum[];
};
export type RouteStopFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopSelect<ExtArgs> | null;
    omit?: Prisma.RouteStopOmit<ExtArgs> | null;
    include?: Prisma.RouteStopInclude<ExtArgs> | null;
    where?: Prisma.RouteStopWhereInput;
    orderBy?: Prisma.RouteStopOrderByWithRelationInput | Prisma.RouteStopOrderByWithRelationInput[];
    cursor?: Prisma.RouteStopWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RouteStopScalarFieldEnum | Prisma.RouteStopScalarFieldEnum[];
};
export type RouteStopFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopSelect<ExtArgs> | null;
    omit?: Prisma.RouteStopOmit<ExtArgs> | null;
    include?: Prisma.RouteStopInclude<ExtArgs> | null;
    where?: Prisma.RouteStopWhereInput;
    orderBy?: Prisma.RouteStopOrderByWithRelationInput | Prisma.RouteStopOrderByWithRelationInput[];
    cursor?: Prisma.RouteStopWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RouteStopScalarFieldEnum | Prisma.RouteStopScalarFieldEnum[];
};
export type RouteStopCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopSelect<ExtArgs> | null;
    omit?: Prisma.RouteStopOmit<ExtArgs> | null;
    include?: Prisma.RouteStopInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RouteStopCreateInput, Prisma.RouteStopUncheckedCreateInput>;
};
export type RouteStopCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RouteStopCreateManyInput | Prisma.RouteStopCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RouteStopCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RouteStopOmit<ExtArgs> | null;
    data: Prisma.RouteStopCreateManyInput | Prisma.RouteStopCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RouteStopIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RouteStopUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopSelect<ExtArgs> | null;
    omit?: Prisma.RouteStopOmit<ExtArgs> | null;
    include?: Prisma.RouteStopInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RouteStopUpdateInput, Prisma.RouteStopUncheckedUpdateInput>;
    where: Prisma.RouteStopWhereUniqueInput;
};
export type RouteStopUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RouteStopUpdateManyMutationInput, Prisma.RouteStopUncheckedUpdateManyInput>;
    where?: Prisma.RouteStopWhereInput;
    limit?: number;
};
export type RouteStopUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RouteStopOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RouteStopUpdateManyMutationInput, Prisma.RouteStopUncheckedUpdateManyInput>;
    where?: Prisma.RouteStopWhereInput;
    limit?: number;
    include?: Prisma.RouteStopIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RouteStopUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopSelect<ExtArgs> | null;
    omit?: Prisma.RouteStopOmit<ExtArgs> | null;
    include?: Prisma.RouteStopInclude<ExtArgs> | null;
    where: Prisma.RouteStopWhereUniqueInput;
    create: Prisma.XOR<Prisma.RouteStopCreateInput, Prisma.RouteStopUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RouteStopUpdateInput, Prisma.RouteStopUncheckedUpdateInput>;
};
export type RouteStopDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopSelect<ExtArgs> | null;
    omit?: Prisma.RouteStopOmit<ExtArgs> | null;
    include?: Prisma.RouteStopInclude<ExtArgs> | null;
    where: Prisma.RouteStopWhereUniqueInput;
};
export type RouteStopDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RouteStopWhereInput;
    limit?: number;
};
export type RouteStop$studentTransportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RouteStopDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RouteStopSelect<ExtArgs> | null;
    omit?: Prisma.RouteStopOmit<ExtArgs> | null;
    include?: Prisma.RouteStopInclude<ExtArgs> | null;
};
