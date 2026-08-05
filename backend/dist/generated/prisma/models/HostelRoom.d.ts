import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HostelRoomModel = runtime.Types.Result.DefaultSelection<Prisma.$HostelRoomPayload>;
export type AggregateHostelRoom = {
    _count: HostelRoomCountAggregateOutputType | null;
    _avg: HostelRoomAvgAggregateOutputType | null;
    _sum: HostelRoomSumAggregateOutputType | null;
    _min: HostelRoomMinAggregateOutputType | null;
    _max: HostelRoomMaxAggregateOutputType | null;
};
export type HostelRoomAvgAggregateOutputType = {
    capacity: number | null;
};
export type HostelRoomSumAggregateOutputType = {
    capacity: number | null;
};
export type HostelRoomMinAggregateOutputType = {
    id: string | null;
    hostelId: string | null;
    roomNumber: string | null;
    capacity: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HostelRoomMaxAggregateOutputType = {
    id: string | null;
    hostelId: string | null;
    roomNumber: string | null;
    capacity: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HostelRoomCountAggregateOutputType = {
    id: number;
    hostelId: number;
    roomNumber: number;
    capacity: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type HostelRoomAvgAggregateInputType = {
    capacity?: true;
};
export type HostelRoomSumAggregateInputType = {
    capacity?: true;
};
export type HostelRoomMinAggregateInputType = {
    id?: true;
    hostelId?: true;
    roomNumber?: true;
    capacity?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HostelRoomMaxAggregateInputType = {
    id?: true;
    hostelId?: true;
    roomNumber?: true;
    capacity?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HostelRoomCountAggregateInputType = {
    id?: true;
    hostelId?: true;
    roomNumber?: true;
    capacity?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type HostelRoomAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HostelRoomWhereInput;
    orderBy?: Prisma.HostelRoomOrderByWithRelationInput | Prisma.HostelRoomOrderByWithRelationInput[];
    cursor?: Prisma.HostelRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HostelRoomCountAggregateInputType;
    _avg?: HostelRoomAvgAggregateInputType;
    _sum?: HostelRoomSumAggregateInputType;
    _min?: HostelRoomMinAggregateInputType;
    _max?: HostelRoomMaxAggregateInputType;
};
export type GetHostelRoomAggregateType<T extends HostelRoomAggregateArgs> = {
    [P in keyof T & keyof AggregateHostelRoom]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHostelRoom[P]> : Prisma.GetScalarType<T[P], AggregateHostelRoom[P]>;
};
export type HostelRoomGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HostelRoomWhereInput;
    orderBy?: Prisma.HostelRoomOrderByWithAggregationInput | Prisma.HostelRoomOrderByWithAggregationInput[];
    by: Prisma.HostelRoomScalarFieldEnum[] | Prisma.HostelRoomScalarFieldEnum;
    having?: Prisma.HostelRoomScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HostelRoomCountAggregateInputType | true;
    _avg?: HostelRoomAvgAggregateInputType;
    _sum?: HostelRoomSumAggregateInputType;
    _min?: HostelRoomMinAggregateInputType;
    _max?: HostelRoomMaxAggregateInputType;
};
export type HostelRoomGroupByOutputType = {
    id: string;
    hostelId: string;
    roomNumber: string;
    capacity: number;
    createdAt: Date;
    updatedAt: Date;
    _count: HostelRoomCountAggregateOutputType | null;
    _avg: HostelRoomAvgAggregateOutputType | null;
    _sum: HostelRoomSumAggregateOutputType | null;
    _min: HostelRoomMinAggregateOutputType | null;
    _max: HostelRoomMaxAggregateOutputType | null;
};
export type GetHostelRoomGroupByPayload<T extends HostelRoomGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HostelRoomGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HostelRoomGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HostelRoomGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HostelRoomGroupByOutputType[P]>;
}>>;
export type HostelRoomWhereInput = {
    AND?: Prisma.HostelRoomWhereInput | Prisma.HostelRoomWhereInput[];
    OR?: Prisma.HostelRoomWhereInput[];
    NOT?: Prisma.HostelRoomWhereInput | Prisma.HostelRoomWhereInput[];
    id?: Prisma.StringFilter<"HostelRoom"> | string;
    hostelId?: Prisma.StringFilter<"HostelRoom"> | string;
    roomNumber?: Prisma.StringFilter<"HostelRoom"> | string;
    capacity?: Prisma.IntFilter<"HostelRoom"> | number;
    createdAt?: Prisma.DateTimeFilter<"HostelRoom"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HostelRoom"> | Date | string;
    hostel?: Prisma.XOR<Prisma.HostelScalarRelationFilter, Prisma.HostelWhereInput>;
    allocations?: Prisma.HostelAllocationListRelationFilter;
};
export type HostelRoomOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    hostelId?: Prisma.SortOrder;
    roomNumber?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    hostel?: Prisma.HostelOrderByWithRelationInput;
    allocations?: Prisma.HostelAllocationOrderByRelationAggregateInput;
};
export type HostelRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    hostelId_roomNumber?: Prisma.HostelRoomHostelIdRoomNumberCompoundUniqueInput;
    AND?: Prisma.HostelRoomWhereInput | Prisma.HostelRoomWhereInput[];
    OR?: Prisma.HostelRoomWhereInput[];
    NOT?: Prisma.HostelRoomWhereInput | Prisma.HostelRoomWhereInput[];
    hostelId?: Prisma.StringFilter<"HostelRoom"> | string;
    roomNumber?: Prisma.StringFilter<"HostelRoom"> | string;
    capacity?: Prisma.IntFilter<"HostelRoom"> | number;
    createdAt?: Prisma.DateTimeFilter<"HostelRoom"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HostelRoom"> | Date | string;
    hostel?: Prisma.XOR<Prisma.HostelScalarRelationFilter, Prisma.HostelWhereInput>;
    allocations?: Prisma.HostelAllocationListRelationFilter;
}, "id" | "hostelId_roomNumber">;
export type HostelRoomOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    hostelId?: Prisma.SortOrder;
    roomNumber?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.HostelRoomCountOrderByAggregateInput;
    _avg?: Prisma.HostelRoomAvgOrderByAggregateInput;
    _max?: Prisma.HostelRoomMaxOrderByAggregateInput;
    _min?: Prisma.HostelRoomMinOrderByAggregateInput;
    _sum?: Prisma.HostelRoomSumOrderByAggregateInput;
};
export type HostelRoomScalarWhereWithAggregatesInput = {
    AND?: Prisma.HostelRoomScalarWhereWithAggregatesInput | Prisma.HostelRoomScalarWhereWithAggregatesInput[];
    OR?: Prisma.HostelRoomScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HostelRoomScalarWhereWithAggregatesInput | Prisma.HostelRoomScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"HostelRoom"> | string;
    hostelId?: Prisma.StringWithAggregatesFilter<"HostelRoom"> | string;
    roomNumber?: Prisma.StringWithAggregatesFilter<"HostelRoom"> | string;
    capacity?: Prisma.IntWithAggregatesFilter<"HostelRoom"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"HostelRoom"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"HostelRoom"> | Date | string;
};
export type HostelRoomCreateInput = {
    id?: string;
    roomNumber: string;
    capacity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hostel: Prisma.HostelCreateNestedOneWithoutRoomsInput;
    allocations?: Prisma.HostelAllocationCreateNestedManyWithoutRoomInput;
};
export type HostelRoomUncheckedCreateInput = {
    id?: string;
    hostelId: string;
    roomNumber: string;
    capacity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    allocations?: Prisma.HostelAllocationUncheckedCreateNestedManyWithoutRoomInput;
};
export type HostelRoomUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roomNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hostel?: Prisma.HostelUpdateOneRequiredWithoutRoomsNestedInput;
    allocations?: Prisma.HostelAllocationUpdateManyWithoutRoomNestedInput;
};
export type HostelRoomUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hostelId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.HostelAllocationUncheckedUpdateManyWithoutRoomNestedInput;
};
export type HostelRoomCreateManyInput = {
    id?: string;
    hostelId: string;
    roomNumber: string;
    capacity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelRoomUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roomNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelRoomUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hostelId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelRoomListRelationFilter = {
    every?: Prisma.HostelRoomWhereInput;
    some?: Prisma.HostelRoomWhereInput;
    none?: Prisma.HostelRoomWhereInput;
};
export type HostelRoomOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HostelRoomHostelIdRoomNumberCompoundUniqueInput = {
    hostelId: string;
    roomNumber: string;
};
export type HostelRoomCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    hostelId?: Prisma.SortOrder;
    roomNumber?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HostelRoomAvgOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
};
export type HostelRoomMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    hostelId?: Prisma.SortOrder;
    roomNumber?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HostelRoomMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    hostelId?: Prisma.SortOrder;
    roomNumber?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HostelRoomSumOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
};
export type HostelRoomScalarRelationFilter = {
    is?: Prisma.HostelRoomWhereInput;
    isNot?: Prisma.HostelRoomWhereInput;
};
export type HostelRoomCreateNestedManyWithoutHostelInput = {
    create?: Prisma.XOR<Prisma.HostelRoomCreateWithoutHostelInput, Prisma.HostelRoomUncheckedCreateWithoutHostelInput> | Prisma.HostelRoomCreateWithoutHostelInput[] | Prisma.HostelRoomUncheckedCreateWithoutHostelInput[];
    connectOrCreate?: Prisma.HostelRoomCreateOrConnectWithoutHostelInput | Prisma.HostelRoomCreateOrConnectWithoutHostelInput[];
    createMany?: Prisma.HostelRoomCreateManyHostelInputEnvelope;
    connect?: Prisma.HostelRoomWhereUniqueInput | Prisma.HostelRoomWhereUniqueInput[];
};
export type HostelRoomUncheckedCreateNestedManyWithoutHostelInput = {
    create?: Prisma.XOR<Prisma.HostelRoomCreateWithoutHostelInput, Prisma.HostelRoomUncheckedCreateWithoutHostelInput> | Prisma.HostelRoomCreateWithoutHostelInput[] | Prisma.HostelRoomUncheckedCreateWithoutHostelInput[];
    connectOrCreate?: Prisma.HostelRoomCreateOrConnectWithoutHostelInput | Prisma.HostelRoomCreateOrConnectWithoutHostelInput[];
    createMany?: Prisma.HostelRoomCreateManyHostelInputEnvelope;
    connect?: Prisma.HostelRoomWhereUniqueInput | Prisma.HostelRoomWhereUniqueInput[];
};
export type HostelRoomUpdateManyWithoutHostelNestedInput = {
    create?: Prisma.XOR<Prisma.HostelRoomCreateWithoutHostelInput, Prisma.HostelRoomUncheckedCreateWithoutHostelInput> | Prisma.HostelRoomCreateWithoutHostelInput[] | Prisma.HostelRoomUncheckedCreateWithoutHostelInput[];
    connectOrCreate?: Prisma.HostelRoomCreateOrConnectWithoutHostelInput | Prisma.HostelRoomCreateOrConnectWithoutHostelInput[];
    upsert?: Prisma.HostelRoomUpsertWithWhereUniqueWithoutHostelInput | Prisma.HostelRoomUpsertWithWhereUniqueWithoutHostelInput[];
    createMany?: Prisma.HostelRoomCreateManyHostelInputEnvelope;
    set?: Prisma.HostelRoomWhereUniqueInput | Prisma.HostelRoomWhereUniqueInput[];
    disconnect?: Prisma.HostelRoomWhereUniqueInput | Prisma.HostelRoomWhereUniqueInput[];
    delete?: Prisma.HostelRoomWhereUniqueInput | Prisma.HostelRoomWhereUniqueInput[];
    connect?: Prisma.HostelRoomWhereUniqueInput | Prisma.HostelRoomWhereUniqueInput[];
    update?: Prisma.HostelRoomUpdateWithWhereUniqueWithoutHostelInput | Prisma.HostelRoomUpdateWithWhereUniqueWithoutHostelInput[];
    updateMany?: Prisma.HostelRoomUpdateManyWithWhereWithoutHostelInput | Prisma.HostelRoomUpdateManyWithWhereWithoutHostelInput[];
    deleteMany?: Prisma.HostelRoomScalarWhereInput | Prisma.HostelRoomScalarWhereInput[];
};
export type HostelRoomUncheckedUpdateManyWithoutHostelNestedInput = {
    create?: Prisma.XOR<Prisma.HostelRoomCreateWithoutHostelInput, Prisma.HostelRoomUncheckedCreateWithoutHostelInput> | Prisma.HostelRoomCreateWithoutHostelInput[] | Prisma.HostelRoomUncheckedCreateWithoutHostelInput[];
    connectOrCreate?: Prisma.HostelRoomCreateOrConnectWithoutHostelInput | Prisma.HostelRoomCreateOrConnectWithoutHostelInput[];
    upsert?: Prisma.HostelRoomUpsertWithWhereUniqueWithoutHostelInput | Prisma.HostelRoomUpsertWithWhereUniqueWithoutHostelInput[];
    createMany?: Prisma.HostelRoomCreateManyHostelInputEnvelope;
    set?: Prisma.HostelRoomWhereUniqueInput | Prisma.HostelRoomWhereUniqueInput[];
    disconnect?: Prisma.HostelRoomWhereUniqueInput | Prisma.HostelRoomWhereUniqueInput[];
    delete?: Prisma.HostelRoomWhereUniqueInput | Prisma.HostelRoomWhereUniqueInput[];
    connect?: Prisma.HostelRoomWhereUniqueInput | Prisma.HostelRoomWhereUniqueInput[];
    update?: Prisma.HostelRoomUpdateWithWhereUniqueWithoutHostelInput | Prisma.HostelRoomUpdateWithWhereUniqueWithoutHostelInput[];
    updateMany?: Prisma.HostelRoomUpdateManyWithWhereWithoutHostelInput | Prisma.HostelRoomUpdateManyWithWhereWithoutHostelInput[];
    deleteMany?: Prisma.HostelRoomScalarWhereInput | Prisma.HostelRoomScalarWhereInput[];
};
export type HostelRoomCreateNestedOneWithoutAllocationsInput = {
    create?: Prisma.XOR<Prisma.HostelRoomCreateWithoutAllocationsInput, Prisma.HostelRoomUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.HostelRoomCreateOrConnectWithoutAllocationsInput;
    connect?: Prisma.HostelRoomWhereUniqueInput;
};
export type HostelRoomUpdateOneRequiredWithoutAllocationsNestedInput = {
    create?: Prisma.XOR<Prisma.HostelRoomCreateWithoutAllocationsInput, Prisma.HostelRoomUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.HostelRoomCreateOrConnectWithoutAllocationsInput;
    upsert?: Prisma.HostelRoomUpsertWithoutAllocationsInput;
    connect?: Prisma.HostelRoomWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HostelRoomUpdateToOneWithWhereWithoutAllocationsInput, Prisma.HostelRoomUpdateWithoutAllocationsInput>, Prisma.HostelRoomUncheckedUpdateWithoutAllocationsInput>;
};
export type HostelRoomCreateWithoutHostelInput = {
    id?: string;
    roomNumber: string;
    capacity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    allocations?: Prisma.HostelAllocationCreateNestedManyWithoutRoomInput;
};
export type HostelRoomUncheckedCreateWithoutHostelInput = {
    id?: string;
    roomNumber: string;
    capacity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    allocations?: Prisma.HostelAllocationUncheckedCreateNestedManyWithoutRoomInput;
};
export type HostelRoomCreateOrConnectWithoutHostelInput = {
    where: Prisma.HostelRoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.HostelRoomCreateWithoutHostelInput, Prisma.HostelRoomUncheckedCreateWithoutHostelInput>;
};
export type HostelRoomCreateManyHostelInputEnvelope = {
    data: Prisma.HostelRoomCreateManyHostelInput | Prisma.HostelRoomCreateManyHostelInput[];
    skipDuplicates?: boolean;
};
export type HostelRoomUpsertWithWhereUniqueWithoutHostelInput = {
    where: Prisma.HostelRoomWhereUniqueInput;
    update: Prisma.XOR<Prisma.HostelRoomUpdateWithoutHostelInput, Prisma.HostelRoomUncheckedUpdateWithoutHostelInput>;
    create: Prisma.XOR<Prisma.HostelRoomCreateWithoutHostelInput, Prisma.HostelRoomUncheckedCreateWithoutHostelInput>;
};
export type HostelRoomUpdateWithWhereUniqueWithoutHostelInput = {
    where: Prisma.HostelRoomWhereUniqueInput;
    data: Prisma.XOR<Prisma.HostelRoomUpdateWithoutHostelInput, Prisma.HostelRoomUncheckedUpdateWithoutHostelInput>;
};
export type HostelRoomUpdateManyWithWhereWithoutHostelInput = {
    where: Prisma.HostelRoomScalarWhereInput;
    data: Prisma.XOR<Prisma.HostelRoomUpdateManyMutationInput, Prisma.HostelRoomUncheckedUpdateManyWithoutHostelInput>;
};
export type HostelRoomScalarWhereInput = {
    AND?: Prisma.HostelRoomScalarWhereInput | Prisma.HostelRoomScalarWhereInput[];
    OR?: Prisma.HostelRoomScalarWhereInput[];
    NOT?: Prisma.HostelRoomScalarWhereInput | Prisma.HostelRoomScalarWhereInput[];
    id?: Prisma.StringFilter<"HostelRoom"> | string;
    hostelId?: Prisma.StringFilter<"HostelRoom"> | string;
    roomNumber?: Prisma.StringFilter<"HostelRoom"> | string;
    capacity?: Prisma.IntFilter<"HostelRoom"> | number;
    createdAt?: Prisma.DateTimeFilter<"HostelRoom"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HostelRoom"> | Date | string;
};
export type HostelRoomCreateWithoutAllocationsInput = {
    id?: string;
    roomNumber: string;
    capacity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hostel: Prisma.HostelCreateNestedOneWithoutRoomsInput;
};
export type HostelRoomUncheckedCreateWithoutAllocationsInput = {
    id?: string;
    hostelId: string;
    roomNumber: string;
    capacity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelRoomCreateOrConnectWithoutAllocationsInput = {
    where: Prisma.HostelRoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.HostelRoomCreateWithoutAllocationsInput, Prisma.HostelRoomUncheckedCreateWithoutAllocationsInput>;
};
export type HostelRoomUpsertWithoutAllocationsInput = {
    update: Prisma.XOR<Prisma.HostelRoomUpdateWithoutAllocationsInput, Prisma.HostelRoomUncheckedUpdateWithoutAllocationsInput>;
    create: Prisma.XOR<Prisma.HostelRoomCreateWithoutAllocationsInput, Prisma.HostelRoomUncheckedCreateWithoutAllocationsInput>;
    where?: Prisma.HostelRoomWhereInput;
};
export type HostelRoomUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: Prisma.HostelRoomWhereInput;
    data: Prisma.XOR<Prisma.HostelRoomUpdateWithoutAllocationsInput, Prisma.HostelRoomUncheckedUpdateWithoutAllocationsInput>;
};
export type HostelRoomUpdateWithoutAllocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roomNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hostel?: Prisma.HostelUpdateOneRequiredWithoutRoomsNestedInput;
};
export type HostelRoomUncheckedUpdateWithoutAllocationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hostelId?: Prisma.StringFieldUpdateOperationsInput | string;
    roomNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelRoomCreateManyHostelInput = {
    id?: string;
    roomNumber: string;
    capacity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HostelRoomUpdateWithoutHostelInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roomNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.HostelAllocationUpdateManyWithoutRoomNestedInput;
};
export type HostelRoomUncheckedUpdateWithoutHostelInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roomNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    allocations?: Prisma.HostelAllocationUncheckedUpdateManyWithoutRoomNestedInput;
};
export type HostelRoomUncheckedUpdateManyWithoutHostelInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roomNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HostelRoomCountOutputType = {
    allocations: number;
};
export type HostelRoomCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    allocations?: boolean | HostelRoomCountOutputTypeCountAllocationsArgs;
};
export type HostelRoomCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomCountOutputTypeSelect<ExtArgs> | null;
};
export type HostelRoomCountOutputTypeCountAllocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HostelAllocationWhereInput;
};
export type HostelRoomSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    hostelId?: boolean;
    roomNumber?: boolean;
    capacity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    hostel?: boolean | Prisma.HostelDefaultArgs<ExtArgs>;
    allocations?: boolean | Prisma.HostelRoom$allocationsArgs<ExtArgs>;
    _count?: boolean | Prisma.HostelRoomCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hostelRoom"]>;
export type HostelRoomSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    hostelId?: boolean;
    roomNumber?: boolean;
    capacity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    hostel?: boolean | Prisma.HostelDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hostelRoom"]>;
export type HostelRoomSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    hostelId?: boolean;
    roomNumber?: boolean;
    capacity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    hostel?: boolean | Prisma.HostelDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hostelRoom"]>;
export type HostelRoomSelectScalar = {
    id?: boolean;
    hostelId?: boolean;
    roomNumber?: boolean;
    capacity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type HostelRoomOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "hostelId" | "roomNumber" | "capacity" | "createdAt" | "updatedAt", ExtArgs["result"]["hostelRoom"]>;
export type HostelRoomInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    hostel?: boolean | Prisma.HostelDefaultArgs<ExtArgs>;
    allocations?: boolean | Prisma.HostelRoom$allocationsArgs<ExtArgs>;
    _count?: boolean | Prisma.HostelRoomCountOutputTypeDefaultArgs<ExtArgs>;
};
export type HostelRoomIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    hostel?: boolean | Prisma.HostelDefaultArgs<ExtArgs>;
};
export type HostelRoomIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    hostel?: boolean | Prisma.HostelDefaultArgs<ExtArgs>;
};
export type $HostelRoomPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HostelRoom";
    objects: {
        hostel: Prisma.$HostelPayload<ExtArgs>;
        allocations: Prisma.$HostelAllocationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        hostelId: string;
        roomNumber: string;
        capacity: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["hostelRoom"]>;
    composites: {};
};
export type HostelRoomGetPayload<S extends boolean | null | undefined | HostelRoomDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload, S>;
export type HostelRoomCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HostelRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HostelRoomCountAggregateInputType | true;
};
export interface HostelRoomDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HostelRoom'];
        meta: {
            name: 'HostelRoom';
        };
    };
    findUnique<T extends HostelRoomFindUniqueArgs>(args: Prisma.SelectSubset<T, HostelRoomFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HostelRoomClient<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HostelRoomFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HostelRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HostelRoomClient<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HostelRoomFindFirstArgs>(args?: Prisma.SelectSubset<T, HostelRoomFindFirstArgs<ExtArgs>>): Prisma.Prisma__HostelRoomClient<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HostelRoomFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HostelRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HostelRoomClient<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HostelRoomFindManyArgs>(args?: Prisma.SelectSubset<T, HostelRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HostelRoomCreateArgs>(args: Prisma.SelectSubset<T, HostelRoomCreateArgs<ExtArgs>>): Prisma.Prisma__HostelRoomClient<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HostelRoomCreateManyArgs>(args?: Prisma.SelectSubset<T, HostelRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HostelRoomCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HostelRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HostelRoomDeleteArgs>(args: Prisma.SelectSubset<T, HostelRoomDeleteArgs<ExtArgs>>): Prisma.Prisma__HostelRoomClient<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HostelRoomUpdateArgs>(args: Prisma.SelectSubset<T, HostelRoomUpdateArgs<ExtArgs>>): Prisma.Prisma__HostelRoomClient<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HostelRoomDeleteManyArgs>(args?: Prisma.SelectSubset<T, HostelRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HostelRoomUpdateManyArgs>(args: Prisma.SelectSubset<T, HostelRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HostelRoomUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HostelRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HostelRoomUpsertArgs>(args: Prisma.SelectSubset<T, HostelRoomUpsertArgs<ExtArgs>>): Prisma.Prisma__HostelRoomClient<runtime.Types.Result.GetResult<Prisma.$HostelRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HostelRoomCountArgs>(args?: Prisma.Subset<T, HostelRoomCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HostelRoomCountAggregateOutputType> : number>;
    aggregate<T extends HostelRoomAggregateArgs>(args: Prisma.Subset<T, HostelRoomAggregateArgs>): Prisma.PrismaPromise<GetHostelRoomAggregateType<T>>;
    groupBy<T extends HostelRoomGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HostelRoomGroupByArgs['orderBy'];
    } : {
        orderBy?: HostelRoomGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HostelRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHostelRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HostelRoomFieldRefs;
}
export interface Prisma__HostelRoomClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    hostel<T extends Prisma.HostelDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HostelDefaultArgs<ExtArgs>>): Prisma.Prisma__HostelClient<runtime.Types.Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    allocations<T extends Prisma.HostelRoom$allocationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HostelRoom$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HostelAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HostelRoomFieldRefs {
    readonly id: Prisma.FieldRef<"HostelRoom", 'String'>;
    readonly hostelId: Prisma.FieldRef<"HostelRoom", 'String'>;
    readonly roomNumber: Prisma.FieldRef<"HostelRoom", 'String'>;
    readonly capacity: Prisma.FieldRef<"HostelRoom", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"HostelRoom", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"HostelRoom", 'DateTime'>;
}
export type HostelRoomFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelect<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    include?: Prisma.HostelRoomInclude<ExtArgs> | null;
    where: Prisma.HostelRoomWhereUniqueInput;
};
export type HostelRoomFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelect<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    include?: Prisma.HostelRoomInclude<ExtArgs> | null;
    where: Prisma.HostelRoomWhereUniqueInput;
};
export type HostelRoomFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelect<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    include?: Prisma.HostelRoomInclude<ExtArgs> | null;
    where?: Prisma.HostelRoomWhereInput;
    orderBy?: Prisma.HostelRoomOrderByWithRelationInput | Prisma.HostelRoomOrderByWithRelationInput[];
    cursor?: Prisma.HostelRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HostelRoomScalarFieldEnum | Prisma.HostelRoomScalarFieldEnum[];
};
export type HostelRoomFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelect<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    include?: Prisma.HostelRoomInclude<ExtArgs> | null;
    where?: Prisma.HostelRoomWhereInput;
    orderBy?: Prisma.HostelRoomOrderByWithRelationInput | Prisma.HostelRoomOrderByWithRelationInput[];
    cursor?: Prisma.HostelRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HostelRoomScalarFieldEnum | Prisma.HostelRoomScalarFieldEnum[];
};
export type HostelRoomFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelect<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    include?: Prisma.HostelRoomInclude<ExtArgs> | null;
    where?: Prisma.HostelRoomWhereInput;
    orderBy?: Prisma.HostelRoomOrderByWithRelationInput | Prisma.HostelRoomOrderByWithRelationInput[];
    cursor?: Prisma.HostelRoomWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HostelRoomScalarFieldEnum | Prisma.HostelRoomScalarFieldEnum[];
};
export type HostelRoomCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelect<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    include?: Prisma.HostelRoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HostelRoomCreateInput, Prisma.HostelRoomUncheckedCreateInput>;
};
export type HostelRoomCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HostelRoomCreateManyInput | Prisma.HostelRoomCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HostelRoomCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    data: Prisma.HostelRoomCreateManyInput | Prisma.HostelRoomCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HostelRoomIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HostelRoomUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelect<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    include?: Prisma.HostelRoomInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HostelRoomUpdateInput, Prisma.HostelRoomUncheckedUpdateInput>;
    where: Prisma.HostelRoomWhereUniqueInput;
};
export type HostelRoomUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HostelRoomUpdateManyMutationInput, Prisma.HostelRoomUncheckedUpdateManyInput>;
    where?: Prisma.HostelRoomWhereInput;
    limit?: number;
};
export type HostelRoomUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HostelRoomUpdateManyMutationInput, Prisma.HostelRoomUncheckedUpdateManyInput>;
    where?: Prisma.HostelRoomWhereInput;
    limit?: number;
    include?: Prisma.HostelRoomIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HostelRoomUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelect<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    include?: Prisma.HostelRoomInclude<ExtArgs> | null;
    where: Prisma.HostelRoomWhereUniqueInput;
    create: Prisma.XOR<Prisma.HostelRoomCreateInput, Prisma.HostelRoomUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HostelRoomUpdateInput, Prisma.HostelRoomUncheckedUpdateInput>;
};
export type HostelRoomDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelect<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    include?: Prisma.HostelRoomInclude<ExtArgs> | null;
    where: Prisma.HostelRoomWhereUniqueInput;
};
export type HostelRoomDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HostelRoomWhereInput;
    limit?: number;
};
export type HostelRoom$allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelAllocationSelect<ExtArgs> | null;
    omit?: Prisma.HostelAllocationOmit<ExtArgs> | null;
    include?: Prisma.HostelAllocationInclude<ExtArgs> | null;
    where?: Prisma.HostelAllocationWhereInput;
    orderBy?: Prisma.HostelAllocationOrderByWithRelationInput | Prisma.HostelAllocationOrderByWithRelationInput[];
    cursor?: Prisma.HostelAllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HostelAllocationScalarFieldEnum | Prisma.HostelAllocationScalarFieldEnum[];
};
export type HostelRoomDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HostelRoomSelect<ExtArgs> | null;
    omit?: Prisma.HostelRoomOmit<ExtArgs> | null;
    include?: Prisma.HostelRoomInclude<ExtArgs> | null;
};
