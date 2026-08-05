import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DisciplineIncidentModel = runtime.Types.Result.DefaultSelection<Prisma.$DisciplineIncidentPayload>;
export type AggregateDisciplineIncident = {
    _count: DisciplineIncidentCountAggregateOutputType | null;
    _min: DisciplineIncidentMinAggregateOutputType | null;
    _max: DisciplineIncidentMaxAggregateOutputType | null;
};
export type DisciplineIncidentMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    studentId: string | null;
    reportedById: string | null;
    incidentDate: Date | null;
    category: string | null;
    severity: $Enums.DisciplineSeverity | null;
    description: string | null;
    actionTaken: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DisciplineIncidentMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    studentId: string | null;
    reportedById: string | null;
    incidentDate: Date | null;
    category: string | null;
    severity: $Enums.DisciplineSeverity | null;
    description: string | null;
    actionTaken: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DisciplineIncidentCountAggregateOutputType = {
    id: number;
    schoolId: number;
    studentId: number;
    reportedById: number;
    incidentDate: number;
    category: number;
    severity: number;
    description: number;
    actionTaken: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DisciplineIncidentMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    studentId?: true;
    reportedById?: true;
    incidentDate?: true;
    category?: true;
    severity?: true;
    description?: true;
    actionTaken?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DisciplineIncidentMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    studentId?: true;
    reportedById?: true;
    incidentDate?: true;
    category?: true;
    severity?: true;
    description?: true;
    actionTaken?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DisciplineIncidentCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    studentId?: true;
    reportedById?: true;
    incidentDate?: true;
    category?: true;
    severity?: true;
    description?: true;
    actionTaken?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DisciplineIncidentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisciplineIncidentWhereInput;
    orderBy?: Prisma.DisciplineIncidentOrderByWithRelationInput | Prisma.DisciplineIncidentOrderByWithRelationInput[];
    cursor?: Prisma.DisciplineIncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DisciplineIncidentCountAggregateInputType;
    _min?: DisciplineIncidentMinAggregateInputType;
    _max?: DisciplineIncidentMaxAggregateInputType;
};
export type GetDisciplineIncidentAggregateType<T extends DisciplineIncidentAggregateArgs> = {
    [P in keyof T & keyof AggregateDisciplineIncident]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDisciplineIncident[P]> : Prisma.GetScalarType<T[P], AggregateDisciplineIncident[P]>;
};
export type DisciplineIncidentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisciplineIncidentWhereInput;
    orderBy?: Prisma.DisciplineIncidentOrderByWithAggregationInput | Prisma.DisciplineIncidentOrderByWithAggregationInput[];
    by: Prisma.DisciplineIncidentScalarFieldEnum[] | Prisma.DisciplineIncidentScalarFieldEnum;
    having?: Prisma.DisciplineIncidentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DisciplineIncidentCountAggregateInputType | true;
    _min?: DisciplineIncidentMinAggregateInputType;
    _max?: DisciplineIncidentMaxAggregateInputType;
};
export type DisciplineIncidentGroupByOutputType = {
    id: string;
    schoolId: string;
    studentId: string;
    reportedById: string;
    incidentDate: Date;
    category: string;
    severity: $Enums.DisciplineSeverity;
    description: string;
    actionTaken: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DisciplineIncidentCountAggregateOutputType | null;
    _min: DisciplineIncidentMinAggregateOutputType | null;
    _max: DisciplineIncidentMaxAggregateOutputType | null;
};
export type GetDisciplineIncidentGroupByPayload<T extends DisciplineIncidentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DisciplineIncidentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DisciplineIncidentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DisciplineIncidentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DisciplineIncidentGroupByOutputType[P]>;
}>>;
export type DisciplineIncidentWhereInput = {
    AND?: Prisma.DisciplineIncidentWhereInput | Prisma.DisciplineIncidentWhereInput[];
    OR?: Prisma.DisciplineIncidentWhereInput[];
    NOT?: Prisma.DisciplineIncidentWhereInput | Prisma.DisciplineIncidentWhereInput[];
    id?: Prisma.StringFilter<"DisciplineIncident"> | string;
    schoolId?: Prisma.StringFilter<"DisciplineIncident"> | string;
    studentId?: Prisma.StringFilter<"DisciplineIncident"> | string;
    reportedById?: Prisma.StringFilter<"DisciplineIncident"> | string;
    incidentDate?: Prisma.DateTimeFilter<"DisciplineIncident"> | Date | string;
    category?: Prisma.StringFilter<"DisciplineIncident"> | string;
    severity?: Prisma.EnumDisciplineSeverityFilter<"DisciplineIncident"> | $Enums.DisciplineSeverity;
    description?: Prisma.StringFilter<"DisciplineIncident"> | string;
    actionTaken?: Prisma.StringNullableFilter<"DisciplineIncident"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DisciplineIncident"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DisciplineIncident"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    reportedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type DisciplineIncidentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    incidentDate?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    actionTaken?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
    reportedBy?: Prisma.UserOrderByWithRelationInput;
};
export type DisciplineIncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DisciplineIncidentWhereInput | Prisma.DisciplineIncidentWhereInput[];
    OR?: Prisma.DisciplineIncidentWhereInput[];
    NOT?: Prisma.DisciplineIncidentWhereInput | Prisma.DisciplineIncidentWhereInput[];
    schoolId?: Prisma.StringFilter<"DisciplineIncident"> | string;
    studentId?: Prisma.StringFilter<"DisciplineIncident"> | string;
    reportedById?: Prisma.StringFilter<"DisciplineIncident"> | string;
    incidentDate?: Prisma.DateTimeFilter<"DisciplineIncident"> | Date | string;
    category?: Prisma.StringFilter<"DisciplineIncident"> | string;
    severity?: Prisma.EnumDisciplineSeverityFilter<"DisciplineIncident"> | $Enums.DisciplineSeverity;
    description?: Prisma.StringFilter<"DisciplineIncident"> | string;
    actionTaken?: Prisma.StringNullableFilter<"DisciplineIncident"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DisciplineIncident"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DisciplineIncident"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    reportedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type DisciplineIncidentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    incidentDate?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    actionTaken?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DisciplineIncidentCountOrderByAggregateInput;
    _max?: Prisma.DisciplineIncidentMaxOrderByAggregateInput;
    _min?: Prisma.DisciplineIncidentMinOrderByAggregateInput;
};
export type DisciplineIncidentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DisciplineIncidentScalarWhereWithAggregatesInput | Prisma.DisciplineIncidentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DisciplineIncidentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DisciplineIncidentScalarWhereWithAggregatesInput | Prisma.DisciplineIncidentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DisciplineIncident"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"DisciplineIncident"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"DisciplineIncident"> | string;
    reportedById?: Prisma.StringWithAggregatesFilter<"DisciplineIncident"> | string;
    incidentDate?: Prisma.DateTimeWithAggregatesFilter<"DisciplineIncident"> | Date | string;
    category?: Prisma.StringWithAggregatesFilter<"DisciplineIncident"> | string;
    severity?: Prisma.EnumDisciplineSeverityWithAggregatesFilter<"DisciplineIncident"> | $Enums.DisciplineSeverity;
    description?: Prisma.StringWithAggregatesFilter<"DisciplineIncident"> | string;
    actionTaken?: Prisma.StringNullableWithAggregatesFilter<"DisciplineIncident"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DisciplineIncident"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DisciplineIncident"> | Date | string;
};
export type DisciplineIncidentCreateInput = {
    id?: string;
    incidentDate?: Date | string;
    category: string;
    severity?: $Enums.DisciplineSeverity;
    description: string;
    actionTaken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutDisciplineIncidentsInput;
    student: Prisma.StudentCreateNestedOneWithoutDisciplineIncidentsInput;
    reportedBy: Prisma.UserCreateNestedOneWithoutReportedIncidentsInput;
};
export type DisciplineIncidentUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    reportedById: string;
    incidentDate?: Date | string;
    category: string;
    severity?: $Enums.DisciplineSeverity;
    description: string;
    actionTaken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisciplineIncidentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutDisciplineIncidentsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutDisciplineIncidentsNestedInput;
    reportedBy?: Prisma.UserUpdateOneRequiredWithoutReportedIncidentsNestedInput;
};
export type DisciplineIncidentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisciplineIncidentCreateManyInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    reportedById: string;
    incidentDate?: Date | string;
    category: string;
    severity?: $Enums.DisciplineSeverity;
    description: string;
    actionTaken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisciplineIncidentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisciplineIncidentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisciplineIncidentListRelationFilter = {
    every?: Prisma.DisciplineIncidentWhereInput;
    some?: Prisma.DisciplineIncidentWhereInput;
    none?: Prisma.DisciplineIncidentWhereInput;
};
export type DisciplineIncidentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DisciplineIncidentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    incidentDate?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    actionTaken?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DisciplineIncidentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    incidentDate?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    actionTaken?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DisciplineIncidentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    reportedById?: Prisma.SortOrder;
    incidentDate?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    actionTaken?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DisciplineIncidentCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutSchoolInput, Prisma.DisciplineIncidentUncheckedCreateWithoutSchoolInput> | Prisma.DisciplineIncidentCreateWithoutSchoolInput[] | Prisma.DisciplineIncidentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.DisciplineIncidentCreateOrConnectWithoutSchoolInput | Prisma.DisciplineIncidentCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.DisciplineIncidentCreateManySchoolInputEnvelope;
    connect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
};
export type DisciplineIncidentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutSchoolInput, Prisma.DisciplineIncidentUncheckedCreateWithoutSchoolInput> | Prisma.DisciplineIncidentCreateWithoutSchoolInput[] | Prisma.DisciplineIncidentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.DisciplineIncidentCreateOrConnectWithoutSchoolInput | Prisma.DisciplineIncidentCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.DisciplineIncidentCreateManySchoolInputEnvelope;
    connect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
};
export type DisciplineIncidentUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutSchoolInput, Prisma.DisciplineIncidentUncheckedCreateWithoutSchoolInput> | Prisma.DisciplineIncidentCreateWithoutSchoolInput[] | Prisma.DisciplineIncidentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.DisciplineIncidentCreateOrConnectWithoutSchoolInput | Prisma.DisciplineIncidentCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.DisciplineIncidentUpsertWithWhereUniqueWithoutSchoolInput | Prisma.DisciplineIncidentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.DisciplineIncidentCreateManySchoolInputEnvelope;
    set?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    disconnect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    delete?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    connect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    update?: Prisma.DisciplineIncidentUpdateWithWhereUniqueWithoutSchoolInput | Prisma.DisciplineIncidentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.DisciplineIncidentUpdateManyWithWhereWithoutSchoolInput | Prisma.DisciplineIncidentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.DisciplineIncidentScalarWhereInput | Prisma.DisciplineIncidentScalarWhereInput[];
};
export type DisciplineIncidentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutSchoolInput, Prisma.DisciplineIncidentUncheckedCreateWithoutSchoolInput> | Prisma.DisciplineIncidentCreateWithoutSchoolInput[] | Prisma.DisciplineIncidentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.DisciplineIncidentCreateOrConnectWithoutSchoolInput | Prisma.DisciplineIncidentCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.DisciplineIncidentUpsertWithWhereUniqueWithoutSchoolInput | Prisma.DisciplineIncidentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.DisciplineIncidentCreateManySchoolInputEnvelope;
    set?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    disconnect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    delete?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    connect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    update?: Prisma.DisciplineIncidentUpdateWithWhereUniqueWithoutSchoolInput | Prisma.DisciplineIncidentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.DisciplineIncidentUpdateManyWithWhereWithoutSchoolInput | Prisma.DisciplineIncidentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.DisciplineIncidentScalarWhereInput | Prisma.DisciplineIncidentScalarWhereInput[];
};
export type DisciplineIncidentCreateNestedManyWithoutReportedByInput = {
    create?: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutReportedByInput, Prisma.DisciplineIncidentUncheckedCreateWithoutReportedByInput> | Prisma.DisciplineIncidentCreateWithoutReportedByInput[] | Prisma.DisciplineIncidentUncheckedCreateWithoutReportedByInput[];
    connectOrCreate?: Prisma.DisciplineIncidentCreateOrConnectWithoutReportedByInput | Prisma.DisciplineIncidentCreateOrConnectWithoutReportedByInput[];
    createMany?: Prisma.DisciplineIncidentCreateManyReportedByInputEnvelope;
    connect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
};
export type DisciplineIncidentUncheckedCreateNestedManyWithoutReportedByInput = {
    create?: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutReportedByInput, Prisma.DisciplineIncidentUncheckedCreateWithoutReportedByInput> | Prisma.DisciplineIncidentCreateWithoutReportedByInput[] | Prisma.DisciplineIncidentUncheckedCreateWithoutReportedByInput[];
    connectOrCreate?: Prisma.DisciplineIncidentCreateOrConnectWithoutReportedByInput | Prisma.DisciplineIncidentCreateOrConnectWithoutReportedByInput[];
    createMany?: Prisma.DisciplineIncidentCreateManyReportedByInputEnvelope;
    connect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
};
export type DisciplineIncidentUpdateManyWithoutReportedByNestedInput = {
    create?: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutReportedByInput, Prisma.DisciplineIncidentUncheckedCreateWithoutReportedByInput> | Prisma.DisciplineIncidentCreateWithoutReportedByInput[] | Prisma.DisciplineIncidentUncheckedCreateWithoutReportedByInput[];
    connectOrCreate?: Prisma.DisciplineIncidentCreateOrConnectWithoutReportedByInput | Prisma.DisciplineIncidentCreateOrConnectWithoutReportedByInput[];
    upsert?: Prisma.DisciplineIncidentUpsertWithWhereUniqueWithoutReportedByInput | Prisma.DisciplineIncidentUpsertWithWhereUniqueWithoutReportedByInput[];
    createMany?: Prisma.DisciplineIncidentCreateManyReportedByInputEnvelope;
    set?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    disconnect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    delete?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    connect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    update?: Prisma.DisciplineIncidentUpdateWithWhereUniqueWithoutReportedByInput | Prisma.DisciplineIncidentUpdateWithWhereUniqueWithoutReportedByInput[];
    updateMany?: Prisma.DisciplineIncidentUpdateManyWithWhereWithoutReportedByInput | Prisma.DisciplineIncidentUpdateManyWithWhereWithoutReportedByInput[];
    deleteMany?: Prisma.DisciplineIncidentScalarWhereInput | Prisma.DisciplineIncidentScalarWhereInput[];
};
export type DisciplineIncidentUncheckedUpdateManyWithoutReportedByNestedInput = {
    create?: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutReportedByInput, Prisma.DisciplineIncidentUncheckedCreateWithoutReportedByInput> | Prisma.DisciplineIncidentCreateWithoutReportedByInput[] | Prisma.DisciplineIncidentUncheckedCreateWithoutReportedByInput[];
    connectOrCreate?: Prisma.DisciplineIncidentCreateOrConnectWithoutReportedByInput | Prisma.DisciplineIncidentCreateOrConnectWithoutReportedByInput[];
    upsert?: Prisma.DisciplineIncidentUpsertWithWhereUniqueWithoutReportedByInput | Prisma.DisciplineIncidentUpsertWithWhereUniqueWithoutReportedByInput[];
    createMany?: Prisma.DisciplineIncidentCreateManyReportedByInputEnvelope;
    set?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    disconnect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    delete?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    connect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    update?: Prisma.DisciplineIncidentUpdateWithWhereUniqueWithoutReportedByInput | Prisma.DisciplineIncidentUpdateWithWhereUniqueWithoutReportedByInput[];
    updateMany?: Prisma.DisciplineIncidentUpdateManyWithWhereWithoutReportedByInput | Prisma.DisciplineIncidentUpdateManyWithWhereWithoutReportedByInput[];
    deleteMany?: Prisma.DisciplineIncidentScalarWhereInput | Prisma.DisciplineIncidentScalarWhereInput[];
};
export type DisciplineIncidentCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutStudentInput, Prisma.DisciplineIncidentUncheckedCreateWithoutStudentInput> | Prisma.DisciplineIncidentCreateWithoutStudentInput[] | Prisma.DisciplineIncidentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.DisciplineIncidentCreateOrConnectWithoutStudentInput | Prisma.DisciplineIncidentCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.DisciplineIncidentCreateManyStudentInputEnvelope;
    connect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
};
export type DisciplineIncidentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutStudentInput, Prisma.DisciplineIncidentUncheckedCreateWithoutStudentInput> | Prisma.DisciplineIncidentCreateWithoutStudentInput[] | Prisma.DisciplineIncidentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.DisciplineIncidentCreateOrConnectWithoutStudentInput | Prisma.DisciplineIncidentCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.DisciplineIncidentCreateManyStudentInputEnvelope;
    connect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
};
export type DisciplineIncidentUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutStudentInput, Prisma.DisciplineIncidentUncheckedCreateWithoutStudentInput> | Prisma.DisciplineIncidentCreateWithoutStudentInput[] | Prisma.DisciplineIncidentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.DisciplineIncidentCreateOrConnectWithoutStudentInput | Prisma.DisciplineIncidentCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.DisciplineIncidentUpsertWithWhereUniqueWithoutStudentInput | Prisma.DisciplineIncidentUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.DisciplineIncidentCreateManyStudentInputEnvelope;
    set?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    disconnect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    delete?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    connect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    update?: Prisma.DisciplineIncidentUpdateWithWhereUniqueWithoutStudentInput | Prisma.DisciplineIncidentUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.DisciplineIncidentUpdateManyWithWhereWithoutStudentInput | Prisma.DisciplineIncidentUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.DisciplineIncidentScalarWhereInput | Prisma.DisciplineIncidentScalarWhereInput[];
};
export type DisciplineIncidentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutStudentInput, Prisma.DisciplineIncidentUncheckedCreateWithoutStudentInput> | Prisma.DisciplineIncidentCreateWithoutStudentInput[] | Prisma.DisciplineIncidentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.DisciplineIncidentCreateOrConnectWithoutStudentInput | Prisma.DisciplineIncidentCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.DisciplineIncidentUpsertWithWhereUniqueWithoutStudentInput | Prisma.DisciplineIncidentUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.DisciplineIncidentCreateManyStudentInputEnvelope;
    set?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    disconnect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    delete?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    connect?: Prisma.DisciplineIncidentWhereUniqueInput | Prisma.DisciplineIncidentWhereUniqueInput[];
    update?: Prisma.DisciplineIncidentUpdateWithWhereUniqueWithoutStudentInput | Prisma.DisciplineIncidentUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.DisciplineIncidentUpdateManyWithWhereWithoutStudentInput | Prisma.DisciplineIncidentUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.DisciplineIncidentScalarWhereInput | Prisma.DisciplineIncidentScalarWhereInput[];
};
export type EnumDisciplineSeverityFieldUpdateOperationsInput = {
    set?: $Enums.DisciplineSeverity;
};
export type DisciplineIncidentCreateWithoutSchoolInput = {
    id?: string;
    incidentDate?: Date | string;
    category: string;
    severity?: $Enums.DisciplineSeverity;
    description: string;
    actionTaken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutDisciplineIncidentsInput;
    reportedBy: Prisma.UserCreateNestedOneWithoutReportedIncidentsInput;
};
export type DisciplineIncidentUncheckedCreateWithoutSchoolInput = {
    id?: string;
    studentId: string;
    reportedById: string;
    incidentDate?: Date | string;
    category: string;
    severity?: $Enums.DisciplineSeverity;
    description: string;
    actionTaken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisciplineIncidentCreateOrConnectWithoutSchoolInput = {
    where: Prisma.DisciplineIncidentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutSchoolInput, Prisma.DisciplineIncidentUncheckedCreateWithoutSchoolInput>;
};
export type DisciplineIncidentCreateManySchoolInputEnvelope = {
    data: Prisma.DisciplineIncidentCreateManySchoolInput | Prisma.DisciplineIncidentCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type DisciplineIncidentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.DisciplineIncidentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DisciplineIncidentUpdateWithoutSchoolInput, Prisma.DisciplineIncidentUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutSchoolInput, Prisma.DisciplineIncidentUncheckedCreateWithoutSchoolInput>;
};
export type DisciplineIncidentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.DisciplineIncidentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DisciplineIncidentUpdateWithoutSchoolInput, Prisma.DisciplineIncidentUncheckedUpdateWithoutSchoolInput>;
};
export type DisciplineIncidentUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.DisciplineIncidentScalarWhereInput;
    data: Prisma.XOR<Prisma.DisciplineIncidentUpdateManyMutationInput, Prisma.DisciplineIncidentUncheckedUpdateManyWithoutSchoolInput>;
};
export type DisciplineIncidentScalarWhereInput = {
    AND?: Prisma.DisciplineIncidentScalarWhereInput | Prisma.DisciplineIncidentScalarWhereInput[];
    OR?: Prisma.DisciplineIncidentScalarWhereInput[];
    NOT?: Prisma.DisciplineIncidentScalarWhereInput | Prisma.DisciplineIncidentScalarWhereInput[];
    id?: Prisma.StringFilter<"DisciplineIncident"> | string;
    schoolId?: Prisma.StringFilter<"DisciplineIncident"> | string;
    studentId?: Prisma.StringFilter<"DisciplineIncident"> | string;
    reportedById?: Prisma.StringFilter<"DisciplineIncident"> | string;
    incidentDate?: Prisma.DateTimeFilter<"DisciplineIncident"> | Date | string;
    category?: Prisma.StringFilter<"DisciplineIncident"> | string;
    severity?: Prisma.EnumDisciplineSeverityFilter<"DisciplineIncident"> | $Enums.DisciplineSeverity;
    description?: Prisma.StringFilter<"DisciplineIncident"> | string;
    actionTaken?: Prisma.StringNullableFilter<"DisciplineIncident"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DisciplineIncident"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DisciplineIncident"> | Date | string;
};
export type DisciplineIncidentCreateWithoutReportedByInput = {
    id?: string;
    incidentDate?: Date | string;
    category: string;
    severity?: $Enums.DisciplineSeverity;
    description: string;
    actionTaken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutDisciplineIncidentsInput;
    student: Prisma.StudentCreateNestedOneWithoutDisciplineIncidentsInput;
};
export type DisciplineIncidentUncheckedCreateWithoutReportedByInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    incidentDate?: Date | string;
    category: string;
    severity?: $Enums.DisciplineSeverity;
    description: string;
    actionTaken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisciplineIncidentCreateOrConnectWithoutReportedByInput = {
    where: Prisma.DisciplineIncidentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutReportedByInput, Prisma.DisciplineIncidentUncheckedCreateWithoutReportedByInput>;
};
export type DisciplineIncidentCreateManyReportedByInputEnvelope = {
    data: Prisma.DisciplineIncidentCreateManyReportedByInput | Prisma.DisciplineIncidentCreateManyReportedByInput[];
    skipDuplicates?: boolean;
};
export type DisciplineIncidentUpsertWithWhereUniqueWithoutReportedByInput = {
    where: Prisma.DisciplineIncidentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DisciplineIncidentUpdateWithoutReportedByInput, Prisma.DisciplineIncidentUncheckedUpdateWithoutReportedByInput>;
    create: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutReportedByInput, Prisma.DisciplineIncidentUncheckedCreateWithoutReportedByInput>;
};
export type DisciplineIncidentUpdateWithWhereUniqueWithoutReportedByInput = {
    where: Prisma.DisciplineIncidentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DisciplineIncidentUpdateWithoutReportedByInput, Prisma.DisciplineIncidentUncheckedUpdateWithoutReportedByInput>;
};
export type DisciplineIncidentUpdateManyWithWhereWithoutReportedByInput = {
    where: Prisma.DisciplineIncidentScalarWhereInput;
    data: Prisma.XOR<Prisma.DisciplineIncidentUpdateManyMutationInput, Prisma.DisciplineIncidentUncheckedUpdateManyWithoutReportedByInput>;
};
export type DisciplineIncidentCreateWithoutStudentInput = {
    id?: string;
    incidentDate?: Date | string;
    category: string;
    severity?: $Enums.DisciplineSeverity;
    description: string;
    actionTaken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutDisciplineIncidentsInput;
    reportedBy: Prisma.UserCreateNestedOneWithoutReportedIncidentsInput;
};
export type DisciplineIncidentUncheckedCreateWithoutStudentInput = {
    id?: string;
    schoolId: string;
    reportedById: string;
    incidentDate?: Date | string;
    category: string;
    severity?: $Enums.DisciplineSeverity;
    description: string;
    actionTaken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisciplineIncidentCreateOrConnectWithoutStudentInput = {
    where: Prisma.DisciplineIncidentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutStudentInput, Prisma.DisciplineIncidentUncheckedCreateWithoutStudentInput>;
};
export type DisciplineIncidentCreateManyStudentInputEnvelope = {
    data: Prisma.DisciplineIncidentCreateManyStudentInput | Prisma.DisciplineIncidentCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type DisciplineIncidentUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.DisciplineIncidentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DisciplineIncidentUpdateWithoutStudentInput, Prisma.DisciplineIncidentUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.DisciplineIncidentCreateWithoutStudentInput, Prisma.DisciplineIncidentUncheckedCreateWithoutStudentInput>;
};
export type DisciplineIncidentUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.DisciplineIncidentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DisciplineIncidentUpdateWithoutStudentInput, Prisma.DisciplineIncidentUncheckedUpdateWithoutStudentInput>;
};
export type DisciplineIncidentUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.DisciplineIncidentScalarWhereInput;
    data: Prisma.XOR<Prisma.DisciplineIncidentUpdateManyMutationInput, Prisma.DisciplineIncidentUncheckedUpdateManyWithoutStudentInput>;
};
export type DisciplineIncidentCreateManySchoolInput = {
    id?: string;
    studentId: string;
    reportedById: string;
    incidentDate?: Date | string;
    category: string;
    severity?: $Enums.DisciplineSeverity;
    description: string;
    actionTaken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisciplineIncidentUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutDisciplineIncidentsNestedInput;
    reportedBy?: Prisma.UserUpdateOneRequiredWithoutReportedIncidentsNestedInput;
};
export type DisciplineIncidentUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisciplineIncidentUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisciplineIncidentCreateManyReportedByInput = {
    id?: string;
    schoolId: string;
    studentId: string;
    incidentDate?: Date | string;
    category: string;
    severity?: $Enums.DisciplineSeverity;
    description: string;
    actionTaken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisciplineIncidentUpdateWithoutReportedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutDisciplineIncidentsNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutDisciplineIncidentsNestedInput;
};
export type DisciplineIncidentUncheckedUpdateWithoutReportedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisciplineIncidentUncheckedUpdateManyWithoutReportedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisciplineIncidentCreateManyStudentInput = {
    id?: string;
    schoolId: string;
    reportedById: string;
    incidentDate?: Date | string;
    category: string;
    severity?: $Enums.DisciplineSeverity;
    description: string;
    actionTaken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DisciplineIncidentUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutDisciplineIncidentsNestedInput;
    reportedBy?: Prisma.UserUpdateOneRequiredWithoutReportedIncidentsNestedInput;
};
export type DisciplineIncidentUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisciplineIncidentUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedById?: Prisma.StringFieldUpdateOperationsInput | string;
    incidentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    actionTaken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisciplineIncidentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    reportedById?: boolean;
    incidentDate?: boolean;
    category?: boolean;
    severity?: boolean;
    description?: boolean;
    actionTaken?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    reportedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["disciplineIncident"]>;
export type DisciplineIncidentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    reportedById?: boolean;
    incidentDate?: boolean;
    category?: boolean;
    severity?: boolean;
    description?: boolean;
    actionTaken?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    reportedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["disciplineIncident"]>;
export type DisciplineIncidentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    reportedById?: boolean;
    incidentDate?: boolean;
    category?: boolean;
    severity?: boolean;
    description?: boolean;
    actionTaken?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    reportedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["disciplineIncident"]>;
export type DisciplineIncidentSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    studentId?: boolean;
    reportedById?: boolean;
    incidentDate?: boolean;
    category?: boolean;
    severity?: boolean;
    description?: boolean;
    actionTaken?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DisciplineIncidentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "studentId" | "reportedById" | "incidentDate" | "category" | "severity" | "description" | "actionTaken" | "createdAt" | "updatedAt", ExtArgs["result"]["disciplineIncident"]>;
export type DisciplineIncidentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    reportedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type DisciplineIncidentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    reportedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type DisciplineIncidentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    reportedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $DisciplineIncidentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DisciplineIncident";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs>;
        reportedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        studentId: string;
        reportedById: string;
        incidentDate: Date;
        category: string;
        severity: $Enums.DisciplineSeverity;
        description: string;
        actionTaken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["disciplineIncident"]>;
    composites: {};
};
export type DisciplineIncidentGetPayload<S extends boolean | null | undefined | DisciplineIncidentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DisciplineIncidentPayload, S>;
export type DisciplineIncidentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DisciplineIncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DisciplineIncidentCountAggregateInputType | true;
};
export interface DisciplineIncidentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DisciplineIncident'];
        meta: {
            name: 'DisciplineIncident';
        };
    };
    findUnique<T extends DisciplineIncidentFindUniqueArgs>(args: Prisma.SelectSubset<T, DisciplineIncidentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DisciplineIncidentClient<runtime.Types.Result.GetResult<Prisma.$DisciplineIncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DisciplineIncidentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DisciplineIncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DisciplineIncidentClient<runtime.Types.Result.GetResult<Prisma.$DisciplineIncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DisciplineIncidentFindFirstArgs>(args?: Prisma.SelectSubset<T, DisciplineIncidentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DisciplineIncidentClient<runtime.Types.Result.GetResult<Prisma.$DisciplineIncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DisciplineIncidentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DisciplineIncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DisciplineIncidentClient<runtime.Types.Result.GetResult<Prisma.$DisciplineIncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DisciplineIncidentFindManyArgs>(args?: Prisma.SelectSubset<T, DisciplineIncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisciplineIncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DisciplineIncidentCreateArgs>(args: Prisma.SelectSubset<T, DisciplineIncidentCreateArgs<ExtArgs>>): Prisma.Prisma__DisciplineIncidentClient<runtime.Types.Result.GetResult<Prisma.$DisciplineIncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DisciplineIncidentCreateManyArgs>(args?: Prisma.SelectSubset<T, DisciplineIncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DisciplineIncidentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DisciplineIncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisciplineIncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DisciplineIncidentDeleteArgs>(args: Prisma.SelectSubset<T, DisciplineIncidentDeleteArgs<ExtArgs>>): Prisma.Prisma__DisciplineIncidentClient<runtime.Types.Result.GetResult<Prisma.$DisciplineIncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DisciplineIncidentUpdateArgs>(args: Prisma.SelectSubset<T, DisciplineIncidentUpdateArgs<ExtArgs>>): Prisma.Prisma__DisciplineIncidentClient<runtime.Types.Result.GetResult<Prisma.$DisciplineIncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DisciplineIncidentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DisciplineIncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DisciplineIncidentUpdateManyArgs>(args: Prisma.SelectSubset<T, DisciplineIncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DisciplineIncidentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DisciplineIncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisciplineIncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DisciplineIncidentUpsertArgs>(args: Prisma.SelectSubset<T, DisciplineIncidentUpsertArgs<ExtArgs>>): Prisma.Prisma__DisciplineIncidentClient<runtime.Types.Result.GetResult<Prisma.$DisciplineIncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DisciplineIncidentCountArgs>(args?: Prisma.Subset<T, DisciplineIncidentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DisciplineIncidentCountAggregateOutputType> : number>;
    aggregate<T extends DisciplineIncidentAggregateArgs>(args: Prisma.Subset<T, DisciplineIncidentAggregateArgs>): Prisma.PrismaPromise<GetDisciplineIncidentAggregateType<T>>;
    groupBy<T extends DisciplineIncidentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DisciplineIncidentGroupByArgs['orderBy'];
    } : {
        orderBy?: DisciplineIncidentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DisciplineIncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplineIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DisciplineIncidentFieldRefs;
}
export interface Prisma__DisciplineIncidentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reportedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DisciplineIncidentFieldRefs {
    readonly id: Prisma.FieldRef<"DisciplineIncident", 'String'>;
    readonly schoolId: Prisma.FieldRef<"DisciplineIncident", 'String'>;
    readonly studentId: Prisma.FieldRef<"DisciplineIncident", 'String'>;
    readonly reportedById: Prisma.FieldRef<"DisciplineIncident", 'String'>;
    readonly incidentDate: Prisma.FieldRef<"DisciplineIncident", 'DateTime'>;
    readonly category: Prisma.FieldRef<"DisciplineIncident", 'String'>;
    readonly severity: Prisma.FieldRef<"DisciplineIncident", 'DisciplineSeverity'>;
    readonly description: Prisma.FieldRef<"DisciplineIncident", 'String'>;
    readonly actionTaken: Prisma.FieldRef<"DisciplineIncident", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DisciplineIncident", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DisciplineIncident", 'DateTime'>;
}
export type DisciplineIncidentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplineIncidentSelect<ExtArgs> | null;
    omit?: Prisma.DisciplineIncidentOmit<ExtArgs> | null;
    include?: Prisma.DisciplineIncidentInclude<ExtArgs> | null;
    where: Prisma.DisciplineIncidentWhereUniqueInput;
};
export type DisciplineIncidentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplineIncidentSelect<ExtArgs> | null;
    omit?: Prisma.DisciplineIncidentOmit<ExtArgs> | null;
    include?: Prisma.DisciplineIncidentInclude<ExtArgs> | null;
    where: Prisma.DisciplineIncidentWhereUniqueInput;
};
export type DisciplineIncidentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplineIncidentSelect<ExtArgs> | null;
    omit?: Prisma.DisciplineIncidentOmit<ExtArgs> | null;
    include?: Prisma.DisciplineIncidentInclude<ExtArgs> | null;
    where?: Prisma.DisciplineIncidentWhereInput;
    orderBy?: Prisma.DisciplineIncidentOrderByWithRelationInput | Prisma.DisciplineIncidentOrderByWithRelationInput[];
    cursor?: Prisma.DisciplineIncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisciplineIncidentScalarFieldEnum | Prisma.DisciplineIncidentScalarFieldEnum[];
};
export type DisciplineIncidentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplineIncidentSelect<ExtArgs> | null;
    omit?: Prisma.DisciplineIncidentOmit<ExtArgs> | null;
    include?: Prisma.DisciplineIncidentInclude<ExtArgs> | null;
    where?: Prisma.DisciplineIncidentWhereInput;
    orderBy?: Prisma.DisciplineIncidentOrderByWithRelationInput | Prisma.DisciplineIncidentOrderByWithRelationInput[];
    cursor?: Prisma.DisciplineIncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisciplineIncidentScalarFieldEnum | Prisma.DisciplineIncidentScalarFieldEnum[];
};
export type DisciplineIncidentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplineIncidentSelect<ExtArgs> | null;
    omit?: Prisma.DisciplineIncidentOmit<ExtArgs> | null;
    include?: Prisma.DisciplineIncidentInclude<ExtArgs> | null;
    where?: Prisma.DisciplineIncidentWhereInput;
    orderBy?: Prisma.DisciplineIncidentOrderByWithRelationInput | Prisma.DisciplineIncidentOrderByWithRelationInput[];
    cursor?: Prisma.DisciplineIncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisciplineIncidentScalarFieldEnum | Prisma.DisciplineIncidentScalarFieldEnum[];
};
export type DisciplineIncidentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplineIncidentSelect<ExtArgs> | null;
    omit?: Prisma.DisciplineIncidentOmit<ExtArgs> | null;
    include?: Prisma.DisciplineIncidentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DisciplineIncidentCreateInput, Prisma.DisciplineIncidentUncheckedCreateInput>;
};
export type DisciplineIncidentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DisciplineIncidentCreateManyInput | Prisma.DisciplineIncidentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DisciplineIncidentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplineIncidentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DisciplineIncidentOmit<ExtArgs> | null;
    data: Prisma.DisciplineIncidentCreateManyInput | Prisma.DisciplineIncidentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DisciplineIncidentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DisciplineIncidentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplineIncidentSelect<ExtArgs> | null;
    omit?: Prisma.DisciplineIncidentOmit<ExtArgs> | null;
    include?: Prisma.DisciplineIncidentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DisciplineIncidentUpdateInput, Prisma.DisciplineIncidentUncheckedUpdateInput>;
    where: Prisma.DisciplineIncidentWhereUniqueInput;
};
export type DisciplineIncidentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DisciplineIncidentUpdateManyMutationInput, Prisma.DisciplineIncidentUncheckedUpdateManyInput>;
    where?: Prisma.DisciplineIncidentWhereInput;
    limit?: number;
};
export type DisciplineIncidentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplineIncidentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DisciplineIncidentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DisciplineIncidentUpdateManyMutationInput, Prisma.DisciplineIncidentUncheckedUpdateManyInput>;
    where?: Prisma.DisciplineIncidentWhereInput;
    limit?: number;
    include?: Prisma.DisciplineIncidentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DisciplineIncidentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplineIncidentSelect<ExtArgs> | null;
    omit?: Prisma.DisciplineIncidentOmit<ExtArgs> | null;
    include?: Prisma.DisciplineIncidentInclude<ExtArgs> | null;
    where: Prisma.DisciplineIncidentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisciplineIncidentCreateInput, Prisma.DisciplineIncidentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DisciplineIncidentUpdateInput, Prisma.DisciplineIncidentUncheckedUpdateInput>;
};
export type DisciplineIncidentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplineIncidentSelect<ExtArgs> | null;
    omit?: Prisma.DisciplineIncidentOmit<ExtArgs> | null;
    include?: Prisma.DisciplineIncidentInclude<ExtArgs> | null;
    where: Prisma.DisciplineIncidentWhereUniqueInput;
};
export type DisciplineIncidentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisciplineIncidentWhereInput;
    limit?: number;
};
export type DisciplineIncidentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplineIncidentSelect<ExtArgs> | null;
    omit?: Prisma.DisciplineIncidentOmit<ExtArgs> | null;
    include?: Prisma.DisciplineIncidentInclude<ExtArgs> | null;
};
