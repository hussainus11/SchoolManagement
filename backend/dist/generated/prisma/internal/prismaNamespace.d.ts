import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly School: "School";
    readonly Branch: "Branch";
    readonly AcademicYear: "AcademicYear";
    readonly User: "User";
    readonly RefreshToken: "RefreshToken";
    readonly AuditLog: "AuditLog";
    readonly Class: "Class";
    readonly Section: "Section";
    readonly Subject: "Subject";
    readonly ClassSubject: "ClassSubject";
    readonly SubjectTeacher: "SubjectTeacher";
    readonly Teacher: "Teacher";
    readonly TeacherQualification: "TeacherQualification";
    readonly Staff: "Staff";
    readonly CustomRole: "CustomRole";
    readonly RolePermission: "RolePermission";
    readonly Student: "Student";
    readonly Guardian: "Guardian";
    readonly StudentGuardian: "StudentGuardian";
    readonly StudentAttendance: "StudentAttendance";
    readonly TeacherAttendance: "TeacherAttendance";
    readonly Period: "Period";
    readonly TimetableEntry: "TimetableEntry";
    readonly SchoolEvent: "SchoolEvent";
    readonly FeeHead: "FeeHead";
    readonly FeeStructure: "FeeStructure";
    readonly StudentDiscount: "StudentDiscount";
    readonly Invoice: "Invoice";
    readonly InvoiceItem: "InvoiceItem";
    readonly Payment: "Payment";
    readonly SalaryStructure: "SalaryStructure";
    readonly Payslip: "Payslip";
    readonly ExpenseCategory: "ExpenseCategory";
    readonly Vendor: "Vendor";
    readonly Expense: "Expense";
    readonly Room: "Room";
    readonly ExamType: "ExamType";
    readonly Exam: "Exam";
    readonly ExamSchedule: "ExamSchedule";
    readonly GradeScale: "GradeScale";
    readonly Mark: "Mark";
    readonly Assignment: "Assignment";
    readonly AssignmentSubmission: "AssignmentSubmission";
    readonly Announcement: "Announcement";
    readonly Notification: "Notification";
    readonly Admission: "Admission";
    readonly Book: "Book";
    readonly BookIssue: "BookIssue";
    readonly Vehicle: "Vehicle";
    readonly Route: "Route";
    readonly RouteStop: "RouteStop";
    readonly StudentTransport: "StudentTransport";
    readonly Hostel: "Hostel";
    readonly HostelRoom: "HostelRoom";
    readonly HostelAllocation: "HostelAllocation";
    readonly AssetCategory: "AssetCategory";
    readonly Asset: "Asset";
    readonly LeaveType: "LeaveType";
    readonly LeaveGroup: "LeaveGroup";
    readonly LeaveGroupAllocation: "LeaveGroupAllocation";
    readonly LeaveRequest: "LeaveRequest";
    readonly DisciplineIncident: "DisciplineIncident";
    readonly Visitor: "Visitor";
    readonly Alumni: "Alumni";
    readonly Document: "Document";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "school" | "branch" | "academicYear" | "user" | "refreshToken" | "auditLog" | "class" | "section" | "subject" | "classSubject" | "subjectTeacher" | "teacher" | "teacherQualification" | "staff" | "customRole" | "rolePermission" | "student" | "guardian" | "studentGuardian" | "studentAttendance" | "teacherAttendance" | "period" | "timetableEntry" | "schoolEvent" | "feeHead" | "feeStructure" | "studentDiscount" | "invoice" | "invoiceItem" | "payment" | "salaryStructure" | "payslip" | "expenseCategory" | "vendor" | "expense" | "room" | "examType" | "exam" | "examSchedule" | "gradeScale" | "mark" | "assignment" | "assignmentSubmission" | "announcement" | "notification" | "admission" | "book" | "bookIssue" | "vehicle" | "route" | "routeStop" | "studentTransport" | "hostel" | "hostelRoom" | "hostelAllocation" | "assetCategory" | "asset" | "leaveType" | "leaveGroup" | "leaveGroupAllocation" | "leaveRequest" | "disciplineIncident" | "visitor" | "alumni" | "document";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        School: {
            payload: Prisma.$SchoolPayload<ExtArgs>;
            fields: Prisma.SchoolFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SchoolFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                findFirst: {
                    args: Prisma.SchoolFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                findMany: {
                    args: Prisma.SchoolFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>[];
                };
                create: {
                    args: Prisma.SchoolCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                createMany: {
                    args: Prisma.SchoolCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>[];
                };
                delete: {
                    args: Prisma.SchoolDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                update: {
                    args: Prisma.SchoolUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                deleteMany: {
                    args: Prisma.SchoolDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SchoolUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>[];
                };
                upsert: {
                    args: Prisma.SchoolUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                aggregate: {
                    args: Prisma.SchoolAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSchool>;
                };
                groupBy: {
                    args: Prisma.SchoolGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SchoolGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SchoolCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SchoolCountAggregateOutputType> | number;
                };
            };
        };
        Branch: {
            payload: Prisma.$BranchPayload<ExtArgs>;
            fields: Prisma.BranchFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BranchFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>;
                };
                findFirst: {
                    args: Prisma.BranchFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>;
                };
                findMany: {
                    args: Prisma.BranchFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>[];
                };
                create: {
                    args: Prisma.BranchCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>;
                };
                createMany: {
                    args: Prisma.BranchCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>[];
                };
                delete: {
                    args: Prisma.BranchDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>;
                };
                update: {
                    args: Prisma.BranchUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>;
                };
                deleteMany: {
                    args: Prisma.BranchDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BranchUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>[];
                };
                upsert: {
                    args: Prisma.BranchUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>;
                };
                aggregate: {
                    args: Prisma.BranchAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBranch>;
                };
                groupBy: {
                    args: Prisma.BranchGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BranchGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BranchCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BranchCountAggregateOutputType> | number;
                };
            };
        };
        AcademicYear: {
            payload: Prisma.$AcademicYearPayload<ExtArgs>;
            fields: Prisma.AcademicYearFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AcademicYearFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AcademicYearFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                findFirst: {
                    args: Prisma.AcademicYearFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AcademicYearFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                findMany: {
                    args: Prisma.AcademicYearFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>[];
                };
                create: {
                    args: Prisma.AcademicYearCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                createMany: {
                    args: Prisma.AcademicYearCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AcademicYearCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>[];
                };
                delete: {
                    args: Prisma.AcademicYearDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                update: {
                    args: Prisma.AcademicYearUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                deleteMany: {
                    args: Prisma.AcademicYearDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AcademicYearUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AcademicYearUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>[];
                };
                upsert: {
                    args: Prisma.AcademicYearUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                aggregate: {
                    args: Prisma.AcademicYearAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAcademicYear>;
                };
                groupBy: {
                    args: Prisma.AcademicYearGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AcademicYearGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AcademicYearCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AcademicYearCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        RefreshToken: {
            payload: Prisma.$RefreshTokenPayload<ExtArgs>;
            fields: Prisma.RefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                update: {
                    args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>;
                };
                groupBy: {
                    args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        Class: {
            payload: Prisma.$ClassPayload<ExtArgs>;
            fields: Prisma.ClassFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClassFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                findFirst: {
                    args: Prisma.ClassFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                findMany: {
                    args: Prisma.ClassFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>[];
                };
                create: {
                    args: Prisma.ClassCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                createMany: {
                    args: Prisma.ClassCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>[];
                };
                delete: {
                    args: Prisma.ClassDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                update: {
                    args: Prisma.ClassUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                deleteMany: {
                    args: Prisma.ClassDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClassUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>[];
                };
                upsert: {
                    args: Prisma.ClassUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                aggregate: {
                    args: Prisma.ClassAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClass>;
                };
                groupBy: {
                    args: Prisma.ClassGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClassCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassCountAggregateOutputType> | number;
                };
            };
        };
        Section: {
            payload: Prisma.$SectionPayload<ExtArgs>;
            fields: Prisma.SectionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SectionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>;
                };
                findFirst: {
                    args: Prisma.SectionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>;
                };
                findMany: {
                    args: Prisma.SectionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>[];
                };
                create: {
                    args: Prisma.SectionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>;
                };
                createMany: {
                    args: Prisma.SectionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>[];
                };
                delete: {
                    args: Prisma.SectionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>;
                };
                update: {
                    args: Prisma.SectionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>;
                };
                deleteMany: {
                    args: Prisma.SectionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SectionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>[];
                };
                upsert: {
                    args: Prisma.SectionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>;
                };
                aggregate: {
                    args: Prisma.SectionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSection>;
                };
                groupBy: {
                    args: Prisma.SectionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SectionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SectionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SectionCountAggregateOutputType> | number;
                };
            };
        };
        Subject: {
            payload: Prisma.$SubjectPayload<ExtArgs>;
            fields: Prisma.SubjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                findFirst: {
                    args: Prisma.SubjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                findMany: {
                    args: Prisma.SubjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                create: {
                    args: Prisma.SubjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                createMany: {
                    args: Prisma.SubjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                delete: {
                    args: Prisma.SubjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                update: {
                    args: Prisma.SubjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                deleteMany: {
                    args: Prisma.SubjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                upsert: {
                    args: Prisma.SubjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                aggregate: {
                    args: Prisma.SubjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubject>;
                };
                groupBy: {
                    args: Prisma.SubjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectCountAggregateOutputType> | number;
                };
            };
        };
        ClassSubject: {
            payload: Prisma.$ClassSubjectPayload<ExtArgs>;
            fields: Prisma.ClassSubjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClassSubjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSubjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClassSubjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSubjectPayload>;
                };
                findFirst: {
                    args: Prisma.ClassSubjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSubjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClassSubjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSubjectPayload>;
                };
                findMany: {
                    args: Prisma.ClassSubjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSubjectPayload>[];
                };
                create: {
                    args: Prisma.ClassSubjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSubjectPayload>;
                };
                createMany: {
                    args: Prisma.ClassSubjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClassSubjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSubjectPayload>[];
                };
                delete: {
                    args: Prisma.ClassSubjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSubjectPayload>;
                };
                update: {
                    args: Prisma.ClassSubjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSubjectPayload>;
                };
                deleteMany: {
                    args: Prisma.ClassSubjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClassSubjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClassSubjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSubjectPayload>[];
                };
                upsert: {
                    args: Prisma.ClassSubjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassSubjectPayload>;
                };
                aggregate: {
                    args: Prisma.ClassSubjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClassSubject>;
                };
                groupBy: {
                    args: Prisma.ClassSubjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassSubjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClassSubjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassSubjectCountAggregateOutputType> | number;
                };
            };
        };
        SubjectTeacher: {
            payload: Prisma.$SubjectTeacherPayload<ExtArgs>;
            fields: Prisma.SubjectTeacherFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubjectTeacherFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubjectTeacherFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>;
                };
                findFirst: {
                    args: Prisma.SubjectTeacherFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubjectTeacherFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>;
                };
                findMany: {
                    args: Prisma.SubjectTeacherFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>[];
                };
                create: {
                    args: Prisma.SubjectTeacherCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>;
                };
                createMany: {
                    args: Prisma.SubjectTeacherCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubjectTeacherCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>[];
                };
                delete: {
                    args: Prisma.SubjectTeacherDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>;
                };
                update: {
                    args: Prisma.SubjectTeacherUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>;
                };
                deleteMany: {
                    args: Prisma.SubjectTeacherDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubjectTeacherUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubjectTeacherUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>[];
                };
                upsert: {
                    args: Prisma.SubjectTeacherUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>;
                };
                aggregate: {
                    args: Prisma.SubjectTeacherAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubjectTeacher>;
                };
                groupBy: {
                    args: Prisma.SubjectTeacherGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectTeacherGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubjectTeacherCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectTeacherCountAggregateOutputType> | number;
                };
            };
        };
        Teacher: {
            payload: Prisma.$TeacherPayload<ExtArgs>;
            fields: Prisma.TeacherFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeacherFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                findFirst: {
                    args: Prisma.TeacherFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                findMany: {
                    args: Prisma.TeacherFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>[];
                };
                create: {
                    args: Prisma.TeacherCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                createMany: {
                    args: Prisma.TeacherCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>[];
                };
                delete: {
                    args: Prisma.TeacherDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                update: {
                    args: Prisma.TeacherUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                deleteMany: {
                    args: Prisma.TeacherDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeacherUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>[];
                };
                upsert: {
                    args: Prisma.TeacherUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                aggregate: {
                    args: Prisma.TeacherAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeacher>;
                };
                groupBy: {
                    args: Prisma.TeacherGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeacherCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherCountAggregateOutputType> | number;
                };
            };
        };
        TeacherQualification: {
            payload: Prisma.$TeacherQualificationPayload<ExtArgs>;
            fields: Prisma.TeacherQualificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeacherQualificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherQualificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeacherQualificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherQualificationPayload>;
                };
                findFirst: {
                    args: Prisma.TeacherQualificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherQualificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeacherQualificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherQualificationPayload>;
                };
                findMany: {
                    args: Prisma.TeacherQualificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherQualificationPayload>[];
                };
                create: {
                    args: Prisma.TeacherQualificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherQualificationPayload>;
                };
                createMany: {
                    args: Prisma.TeacherQualificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeacherQualificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherQualificationPayload>[];
                };
                delete: {
                    args: Prisma.TeacherQualificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherQualificationPayload>;
                };
                update: {
                    args: Prisma.TeacherQualificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherQualificationPayload>;
                };
                deleteMany: {
                    args: Prisma.TeacherQualificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeacherQualificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeacherQualificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherQualificationPayload>[];
                };
                upsert: {
                    args: Prisma.TeacherQualificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherQualificationPayload>;
                };
                aggregate: {
                    args: Prisma.TeacherQualificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeacherQualification>;
                };
                groupBy: {
                    args: Prisma.TeacherQualificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherQualificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeacherQualificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherQualificationCountAggregateOutputType> | number;
                };
            };
        };
        Staff: {
            payload: Prisma.$StaffPayload<ExtArgs>;
            fields: Prisma.StaffFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StaffFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffPayload>;
                };
                findFirst: {
                    args: Prisma.StaffFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffPayload>;
                };
                findMany: {
                    args: Prisma.StaffFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffPayload>[];
                };
                create: {
                    args: Prisma.StaffCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffPayload>;
                };
                createMany: {
                    args: Prisma.StaffCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffPayload>[];
                };
                delete: {
                    args: Prisma.StaffDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffPayload>;
                };
                update: {
                    args: Prisma.StaffUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffPayload>;
                };
                deleteMany: {
                    args: Prisma.StaffDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StaffUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffPayload>[];
                };
                upsert: {
                    args: Prisma.StaffUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StaffPayload>;
                };
                aggregate: {
                    args: Prisma.StaffAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStaff>;
                };
                groupBy: {
                    args: Prisma.StaffGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StaffGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StaffCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StaffCountAggregateOutputType> | number;
                };
            };
        };
        CustomRole: {
            payload: Prisma.$CustomRolePayload<ExtArgs>;
            fields: Prisma.CustomRoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomRoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomRolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomRoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomRolePayload>;
                };
                findFirst: {
                    args: Prisma.CustomRoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomRolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomRoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomRolePayload>;
                };
                findMany: {
                    args: Prisma.CustomRoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomRolePayload>[];
                };
                create: {
                    args: Prisma.CustomRoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomRolePayload>;
                };
                createMany: {
                    args: Prisma.CustomRoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomRoleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomRolePayload>[];
                };
                delete: {
                    args: Prisma.CustomRoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomRolePayload>;
                };
                update: {
                    args: Prisma.CustomRoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomRolePayload>;
                };
                deleteMany: {
                    args: Prisma.CustomRoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomRoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomRoleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomRolePayload>[];
                };
                upsert: {
                    args: Prisma.CustomRoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomRolePayload>;
                };
                aggregate: {
                    args: Prisma.CustomRoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomRole>;
                };
                groupBy: {
                    args: Prisma.CustomRoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomRoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomRoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomRoleCountAggregateOutputType> | number;
                };
            };
        };
        RolePermission: {
            payload: Prisma.$RolePermissionPayload<ExtArgs>;
            fields: Prisma.RolePermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                findFirst: {
                    args: Prisma.RolePermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                findMany: {
                    args: Prisma.RolePermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                create: {
                    args: Prisma.RolePermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                createMany: {
                    args: Prisma.RolePermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                delete: {
                    args: Prisma.RolePermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                update: {
                    args: Prisma.RolePermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                upsert: {
                    args: Prisma.RolePermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                aggregate: {
                    args: Prisma.RolePermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRolePermission>;
                };
                groupBy: {
                    args: Prisma.RolePermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolePermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RolePermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolePermissionCountAggregateOutputType> | number;
                };
            };
        };
        Student: {
            payload: Prisma.$StudentPayload<ExtArgs>;
            fields: Prisma.StudentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                findFirst: {
                    args: Prisma.StudentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                findMany: {
                    args: Prisma.StudentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                create: {
                    args: Prisma.StudentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                createMany: {
                    args: Prisma.StudentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                delete: {
                    args: Prisma.StudentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                update: {
                    args: Prisma.StudentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                upsert: {
                    args: Prisma.StudentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                aggregate: {
                    args: Prisma.StudentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudent>;
                };
                groupBy: {
                    args: Prisma.StudentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentCountAggregateOutputType> | number;
                };
            };
        };
        Guardian: {
            payload: Prisma.$GuardianPayload<ExtArgs>;
            fields: Prisma.GuardianFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GuardianFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuardianPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GuardianFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuardianPayload>;
                };
                findFirst: {
                    args: Prisma.GuardianFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuardianPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GuardianFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuardianPayload>;
                };
                findMany: {
                    args: Prisma.GuardianFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuardianPayload>[];
                };
                create: {
                    args: Prisma.GuardianCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuardianPayload>;
                };
                createMany: {
                    args: Prisma.GuardianCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GuardianCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuardianPayload>[];
                };
                delete: {
                    args: Prisma.GuardianDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuardianPayload>;
                };
                update: {
                    args: Prisma.GuardianUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuardianPayload>;
                };
                deleteMany: {
                    args: Prisma.GuardianDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GuardianUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GuardianUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuardianPayload>[];
                };
                upsert: {
                    args: Prisma.GuardianUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuardianPayload>;
                };
                aggregate: {
                    args: Prisma.GuardianAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGuardian>;
                };
                groupBy: {
                    args: Prisma.GuardianGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GuardianGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GuardianCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GuardianCountAggregateOutputType> | number;
                };
            };
        };
        StudentGuardian: {
            payload: Prisma.$StudentGuardianPayload<ExtArgs>;
            fields: Prisma.StudentGuardianFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentGuardianFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentGuardianPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentGuardianFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentGuardianPayload>;
                };
                findFirst: {
                    args: Prisma.StudentGuardianFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentGuardianPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentGuardianFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentGuardianPayload>;
                };
                findMany: {
                    args: Prisma.StudentGuardianFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentGuardianPayload>[];
                };
                create: {
                    args: Prisma.StudentGuardianCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentGuardianPayload>;
                };
                createMany: {
                    args: Prisma.StudentGuardianCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentGuardianCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentGuardianPayload>[];
                };
                delete: {
                    args: Prisma.StudentGuardianDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentGuardianPayload>;
                };
                update: {
                    args: Prisma.StudentGuardianUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentGuardianPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentGuardianDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentGuardianUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentGuardianUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentGuardianPayload>[];
                };
                upsert: {
                    args: Prisma.StudentGuardianUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentGuardianPayload>;
                };
                aggregate: {
                    args: Prisma.StudentGuardianAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentGuardian>;
                };
                groupBy: {
                    args: Prisma.StudentGuardianGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentGuardianGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentGuardianCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentGuardianCountAggregateOutputType> | number;
                };
            };
        };
        StudentAttendance: {
            payload: Prisma.$StudentAttendancePayload<ExtArgs>;
            fields: Prisma.StudentAttendanceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentAttendanceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentAttendancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentAttendanceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentAttendancePayload>;
                };
                findFirst: {
                    args: Prisma.StudentAttendanceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentAttendancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentAttendanceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentAttendancePayload>;
                };
                findMany: {
                    args: Prisma.StudentAttendanceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentAttendancePayload>[];
                };
                create: {
                    args: Prisma.StudentAttendanceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentAttendancePayload>;
                };
                createMany: {
                    args: Prisma.StudentAttendanceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentAttendanceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentAttendancePayload>[];
                };
                delete: {
                    args: Prisma.StudentAttendanceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentAttendancePayload>;
                };
                update: {
                    args: Prisma.StudentAttendanceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentAttendancePayload>;
                };
                deleteMany: {
                    args: Prisma.StudentAttendanceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentAttendanceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentAttendanceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentAttendancePayload>[];
                };
                upsert: {
                    args: Prisma.StudentAttendanceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentAttendancePayload>;
                };
                aggregate: {
                    args: Prisma.StudentAttendanceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentAttendance>;
                };
                groupBy: {
                    args: Prisma.StudentAttendanceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentAttendanceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentAttendanceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentAttendanceCountAggregateOutputType> | number;
                };
            };
        };
        TeacherAttendance: {
            payload: Prisma.$TeacherAttendancePayload<ExtArgs>;
            fields: Prisma.TeacherAttendanceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeacherAttendanceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherAttendancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeacherAttendanceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>;
                };
                findFirst: {
                    args: Prisma.TeacherAttendanceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherAttendancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeacherAttendanceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>;
                };
                findMany: {
                    args: Prisma.TeacherAttendanceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>[];
                };
                create: {
                    args: Prisma.TeacherAttendanceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>;
                };
                createMany: {
                    args: Prisma.TeacherAttendanceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeacherAttendanceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>[];
                };
                delete: {
                    args: Prisma.TeacherAttendanceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>;
                };
                update: {
                    args: Prisma.TeacherAttendanceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>;
                };
                deleteMany: {
                    args: Prisma.TeacherAttendanceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeacherAttendanceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeacherAttendanceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>[];
                };
                upsert: {
                    args: Prisma.TeacherAttendanceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherAttendancePayload>;
                };
                aggregate: {
                    args: Prisma.TeacherAttendanceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeacherAttendance>;
                };
                groupBy: {
                    args: Prisma.TeacherAttendanceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherAttendanceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeacherAttendanceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherAttendanceCountAggregateOutputType> | number;
                };
            };
        };
        Period: {
            payload: Prisma.$PeriodPayload<ExtArgs>;
            fields: Prisma.PeriodFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PeriodFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PeriodPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PeriodFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PeriodPayload>;
                };
                findFirst: {
                    args: Prisma.PeriodFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PeriodPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PeriodFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PeriodPayload>;
                };
                findMany: {
                    args: Prisma.PeriodFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PeriodPayload>[];
                };
                create: {
                    args: Prisma.PeriodCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PeriodPayload>;
                };
                createMany: {
                    args: Prisma.PeriodCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PeriodCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PeriodPayload>[];
                };
                delete: {
                    args: Prisma.PeriodDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PeriodPayload>;
                };
                update: {
                    args: Prisma.PeriodUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PeriodPayload>;
                };
                deleteMany: {
                    args: Prisma.PeriodDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PeriodUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PeriodUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PeriodPayload>[];
                };
                upsert: {
                    args: Prisma.PeriodUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PeriodPayload>;
                };
                aggregate: {
                    args: Prisma.PeriodAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePeriod>;
                };
                groupBy: {
                    args: Prisma.PeriodGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PeriodGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PeriodCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PeriodCountAggregateOutputType> | number;
                };
            };
        };
        TimetableEntry: {
            payload: Prisma.$TimetableEntryPayload<ExtArgs>;
            fields: Prisma.TimetableEntryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TimetableEntryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimetableEntryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TimetableEntryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimetableEntryPayload>;
                };
                findFirst: {
                    args: Prisma.TimetableEntryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimetableEntryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TimetableEntryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimetableEntryPayload>;
                };
                findMany: {
                    args: Prisma.TimetableEntryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimetableEntryPayload>[];
                };
                create: {
                    args: Prisma.TimetableEntryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimetableEntryPayload>;
                };
                createMany: {
                    args: Prisma.TimetableEntryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TimetableEntryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimetableEntryPayload>[];
                };
                delete: {
                    args: Prisma.TimetableEntryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimetableEntryPayload>;
                };
                update: {
                    args: Prisma.TimetableEntryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimetableEntryPayload>;
                };
                deleteMany: {
                    args: Prisma.TimetableEntryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TimetableEntryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TimetableEntryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimetableEntryPayload>[];
                };
                upsert: {
                    args: Prisma.TimetableEntryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimetableEntryPayload>;
                };
                aggregate: {
                    args: Prisma.TimetableEntryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTimetableEntry>;
                };
                groupBy: {
                    args: Prisma.TimetableEntryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TimetableEntryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TimetableEntryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TimetableEntryCountAggregateOutputType> | number;
                };
            };
        };
        SchoolEvent: {
            payload: Prisma.$SchoolEventPayload<ExtArgs>;
            fields: Prisma.SchoolEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SchoolEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SchoolEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolEventPayload>;
                };
                findFirst: {
                    args: Prisma.SchoolEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SchoolEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolEventPayload>;
                };
                findMany: {
                    args: Prisma.SchoolEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolEventPayload>[];
                };
                create: {
                    args: Prisma.SchoolEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolEventPayload>;
                };
                createMany: {
                    args: Prisma.SchoolEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SchoolEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolEventPayload>[];
                };
                delete: {
                    args: Prisma.SchoolEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolEventPayload>;
                };
                update: {
                    args: Prisma.SchoolEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolEventPayload>;
                };
                deleteMany: {
                    args: Prisma.SchoolEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SchoolEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SchoolEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolEventPayload>[];
                };
                upsert: {
                    args: Prisma.SchoolEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolEventPayload>;
                };
                aggregate: {
                    args: Prisma.SchoolEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSchoolEvent>;
                };
                groupBy: {
                    args: Prisma.SchoolEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SchoolEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SchoolEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SchoolEventCountAggregateOutputType> | number;
                };
            };
        };
        FeeHead: {
            payload: Prisma.$FeeHeadPayload<ExtArgs>;
            fields: Prisma.FeeHeadFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeeHeadFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeHeadPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeeHeadFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeHeadPayload>;
                };
                findFirst: {
                    args: Prisma.FeeHeadFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeHeadPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeeHeadFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeHeadPayload>;
                };
                findMany: {
                    args: Prisma.FeeHeadFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeHeadPayload>[];
                };
                create: {
                    args: Prisma.FeeHeadCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeHeadPayload>;
                };
                createMany: {
                    args: Prisma.FeeHeadCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FeeHeadCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeHeadPayload>[];
                };
                delete: {
                    args: Prisma.FeeHeadDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeHeadPayload>;
                };
                update: {
                    args: Prisma.FeeHeadUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeHeadPayload>;
                };
                deleteMany: {
                    args: Prisma.FeeHeadDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeeHeadUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FeeHeadUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeHeadPayload>[];
                };
                upsert: {
                    args: Prisma.FeeHeadUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeHeadPayload>;
                };
                aggregate: {
                    args: Prisma.FeeHeadAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFeeHead>;
                };
                groupBy: {
                    args: Prisma.FeeHeadGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeeHeadGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeeHeadCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeeHeadCountAggregateOutputType> | number;
                };
            };
        };
        FeeStructure: {
            payload: Prisma.$FeeStructurePayload<ExtArgs>;
            fields: Prisma.FeeStructureFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeeStructureFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeeStructureFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
                };
                findFirst: {
                    args: Prisma.FeeStructureFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeeStructureFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
                };
                findMany: {
                    args: Prisma.FeeStructureFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>[];
                };
                create: {
                    args: Prisma.FeeStructureCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
                };
                createMany: {
                    args: Prisma.FeeStructureCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FeeStructureCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>[];
                };
                delete: {
                    args: Prisma.FeeStructureDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
                };
                update: {
                    args: Prisma.FeeStructureUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
                };
                deleteMany: {
                    args: Prisma.FeeStructureDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeeStructureUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FeeStructureUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>[];
                };
                upsert: {
                    args: Prisma.FeeStructureUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
                };
                aggregate: {
                    args: Prisma.FeeStructureAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFeeStructure>;
                };
                groupBy: {
                    args: Prisma.FeeStructureGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeeStructureGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeeStructureCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeeStructureCountAggregateOutputType> | number;
                };
            };
        };
        StudentDiscount: {
            payload: Prisma.$StudentDiscountPayload<ExtArgs>;
            fields: Prisma.StudentDiscountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentDiscountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentDiscountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentDiscountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentDiscountPayload>;
                };
                findFirst: {
                    args: Prisma.StudentDiscountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentDiscountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentDiscountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentDiscountPayload>;
                };
                findMany: {
                    args: Prisma.StudentDiscountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentDiscountPayload>[];
                };
                create: {
                    args: Prisma.StudentDiscountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentDiscountPayload>;
                };
                createMany: {
                    args: Prisma.StudentDiscountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentDiscountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentDiscountPayload>[];
                };
                delete: {
                    args: Prisma.StudentDiscountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentDiscountPayload>;
                };
                update: {
                    args: Prisma.StudentDiscountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentDiscountPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentDiscountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentDiscountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentDiscountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentDiscountPayload>[];
                };
                upsert: {
                    args: Prisma.StudentDiscountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentDiscountPayload>;
                };
                aggregate: {
                    args: Prisma.StudentDiscountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentDiscount>;
                };
                groupBy: {
                    args: Prisma.StudentDiscountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentDiscountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentDiscountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentDiscountCountAggregateOutputType> | number;
                };
            };
        };
        Invoice: {
            payload: Prisma.$InvoicePayload<ExtArgs>;
            fields: Prisma.InvoiceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvoiceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                findFirst: {
                    args: Prisma.InvoiceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                findMany: {
                    args: Prisma.InvoiceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[];
                };
                create: {
                    args: Prisma.InvoiceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                createMany: {
                    args: Prisma.InvoiceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[];
                };
                delete: {
                    args: Prisma.InvoiceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                update: {
                    args: Prisma.InvoiceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                deleteMany: {
                    args: Prisma.InvoiceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvoiceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[];
                };
                upsert: {
                    args: Prisma.InvoiceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                aggregate: {
                    args: Prisma.InvoiceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvoice>;
                };
                groupBy: {
                    args: Prisma.InvoiceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvoiceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceCountAggregateOutputType> | number;
                };
            };
        };
        InvoiceItem: {
            payload: Prisma.$InvoiceItemPayload<ExtArgs>;
            fields: Prisma.InvoiceItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvoiceItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvoiceItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>;
                };
                findFirst: {
                    args: Prisma.InvoiceItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvoiceItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>;
                };
                findMany: {
                    args: Prisma.InvoiceItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[];
                };
                create: {
                    args: Prisma.InvoiceItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>;
                };
                createMany: {
                    args: Prisma.InvoiceItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InvoiceItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[];
                };
                delete: {
                    args: Prisma.InvoiceItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>;
                };
                update: {
                    args: Prisma.InvoiceItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>;
                };
                deleteMany: {
                    args: Prisma.InvoiceItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvoiceItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InvoiceItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[];
                };
                upsert: {
                    args: Prisma.InvoiceItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoiceItemPayload>;
                };
                aggregate: {
                    args: Prisma.InvoiceItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvoiceItem>;
                };
                groupBy: {
                    args: Prisma.InvoiceItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvoiceItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceItemCountAggregateOutputType> | number;
                };
            };
        };
        Payment: {
            payload: Prisma.$PaymentPayload<ExtArgs>;
            fields: Prisma.PaymentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaymentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findFirst: {
                    args: Prisma.PaymentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findMany: {
                    args: Prisma.PaymentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                create: {
                    args: Prisma.PaymentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                createMany: {
                    args: Prisma.PaymentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                delete: {
                    args: Prisma.PaymentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                update: {
                    args: Prisma.PaymentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                deleteMany: {
                    args: Prisma.PaymentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaymentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                upsert: {
                    args: Prisma.PaymentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayment>;
                };
                groupBy: {
                    args: Prisma.PaymentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaymentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentCountAggregateOutputType> | number;
                };
            };
        };
        SalaryStructure: {
            payload: Prisma.$SalaryStructurePayload<ExtArgs>;
            fields: Prisma.SalaryStructureFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SalaryStructureFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryStructurePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SalaryStructureFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryStructurePayload>;
                };
                findFirst: {
                    args: Prisma.SalaryStructureFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryStructurePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SalaryStructureFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryStructurePayload>;
                };
                findMany: {
                    args: Prisma.SalaryStructureFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryStructurePayload>[];
                };
                create: {
                    args: Prisma.SalaryStructureCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryStructurePayload>;
                };
                createMany: {
                    args: Prisma.SalaryStructureCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SalaryStructureCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryStructurePayload>[];
                };
                delete: {
                    args: Prisma.SalaryStructureDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryStructurePayload>;
                };
                update: {
                    args: Prisma.SalaryStructureUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryStructurePayload>;
                };
                deleteMany: {
                    args: Prisma.SalaryStructureDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SalaryStructureUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SalaryStructureUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryStructurePayload>[];
                };
                upsert: {
                    args: Prisma.SalaryStructureUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryStructurePayload>;
                };
                aggregate: {
                    args: Prisma.SalaryStructureAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSalaryStructure>;
                };
                groupBy: {
                    args: Prisma.SalaryStructureGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SalaryStructureGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SalaryStructureCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SalaryStructureCountAggregateOutputType> | number;
                };
            };
        };
        Payslip: {
            payload: Prisma.$PayslipPayload<ExtArgs>;
            fields: Prisma.PayslipFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PayslipFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PayslipFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>;
                };
                findFirst: {
                    args: Prisma.PayslipFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PayslipFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>;
                };
                findMany: {
                    args: Prisma.PayslipFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>[];
                };
                create: {
                    args: Prisma.PayslipCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>;
                };
                createMany: {
                    args: Prisma.PayslipCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PayslipCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>[];
                };
                delete: {
                    args: Prisma.PayslipDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>;
                };
                update: {
                    args: Prisma.PayslipUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>;
                };
                deleteMany: {
                    args: Prisma.PayslipDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PayslipUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PayslipUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>[];
                };
                upsert: {
                    args: Prisma.PayslipUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>;
                };
                aggregate: {
                    args: Prisma.PayslipAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayslip>;
                };
                groupBy: {
                    args: Prisma.PayslipGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayslipGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PayslipCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayslipCountAggregateOutputType> | number;
                };
            };
        };
        ExpenseCategory: {
            payload: Prisma.$ExpenseCategoryPayload<ExtArgs>;
            fields: Prisma.ExpenseCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExpenseCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExpenseCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.ExpenseCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExpenseCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>;
                };
                findMany: {
                    args: Prisma.ExpenseCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>[];
                };
                create: {
                    args: Prisma.ExpenseCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>;
                };
                createMany: {
                    args: Prisma.ExpenseCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExpenseCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>[];
                };
                delete: {
                    args: Prisma.ExpenseCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>;
                };
                update: {
                    args: Prisma.ExpenseCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ExpenseCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExpenseCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExpenseCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.ExpenseCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpenseCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.ExpenseCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExpenseCategory>;
                };
                groupBy: {
                    args: Prisma.ExpenseCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExpenseCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExpenseCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExpenseCategoryCountAggregateOutputType> | number;
                };
            };
        };
        Vendor: {
            payload: Prisma.$VendorPayload<ExtArgs>;
            fields: Prisma.VendorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VendorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>;
                };
                findFirst: {
                    args: Prisma.VendorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>;
                };
                findMany: {
                    args: Prisma.VendorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>[];
                };
                create: {
                    args: Prisma.VendorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>;
                };
                createMany: {
                    args: Prisma.VendorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>[];
                };
                delete: {
                    args: Prisma.VendorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>;
                };
                update: {
                    args: Prisma.VendorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>;
                };
                deleteMany: {
                    args: Prisma.VendorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VendorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VendorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>[];
                };
                upsert: {
                    args: Prisma.VendorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VendorPayload>;
                };
                aggregate: {
                    args: Prisma.VendorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVendor>;
                };
                groupBy: {
                    args: Prisma.VendorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VendorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VendorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VendorCountAggregateOutputType> | number;
                };
            };
        };
        Expense: {
            payload: Prisma.$ExpensePayload<ExtArgs>;
            fields: Prisma.ExpenseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExpenseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>;
                };
                findFirst: {
                    args: Prisma.ExpenseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>;
                };
                findMany: {
                    args: Prisma.ExpenseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>[];
                };
                create: {
                    args: Prisma.ExpenseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>;
                };
                createMany: {
                    args: Prisma.ExpenseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>[];
                };
                delete: {
                    args: Prisma.ExpenseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>;
                };
                update: {
                    args: Prisma.ExpenseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>;
                };
                deleteMany: {
                    args: Prisma.ExpenseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExpenseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>[];
                };
                upsert: {
                    args: Prisma.ExpenseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExpensePayload>;
                };
                aggregate: {
                    args: Prisma.ExpenseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExpense>;
                };
                groupBy: {
                    args: Prisma.ExpenseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExpenseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExpenseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExpenseCountAggregateOutputType> | number;
                };
            };
        };
        Room: {
            payload: Prisma.$RoomPayload<ExtArgs>;
            fields: Prisma.RoomFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoomFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>;
                };
                findFirst: {
                    args: Prisma.RoomFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>;
                };
                findMany: {
                    args: Prisma.RoomFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>[];
                };
                create: {
                    args: Prisma.RoomCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>;
                };
                createMany: {
                    args: Prisma.RoomCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>[];
                };
                delete: {
                    args: Prisma.RoomDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>;
                };
                update: {
                    args: Prisma.RoomUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>;
                };
                deleteMany: {
                    args: Prisma.RoomDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoomUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>[];
                };
                upsert: {
                    args: Prisma.RoomUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>;
                };
                aggregate: {
                    args: Prisma.RoomAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoom>;
                };
                groupBy: {
                    args: Prisma.RoomGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoomGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoomCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoomCountAggregateOutputType> | number;
                };
            };
        };
        ExamType: {
            payload: Prisma.$ExamTypePayload<ExtArgs>;
            fields: Prisma.ExamTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExamTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExamTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamTypePayload>;
                };
                findFirst: {
                    args: Prisma.ExamTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExamTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamTypePayload>;
                };
                findMany: {
                    args: Prisma.ExamTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamTypePayload>[];
                };
                create: {
                    args: Prisma.ExamTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamTypePayload>;
                };
                createMany: {
                    args: Prisma.ExamTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExamTypeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamTypePayload>[];
                };
                delete: {
                    args: Prisma.ExamTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamTypePayload>;
                };
                update: {
                    args: Prisma.ExamTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamTypePayload>;
                };
                deleteMany: {
                    args: Prisma.ExamTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExamTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExamTypeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamTypePayload>[];
                };
                upsert: {
                    args: Prisma.ExamTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamTypePayload>;
                };
                aggregate: {
                    args: Prisma.ExamTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExamType>;
                };
                groupBy: {
                    args: Prisma.ExamTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExamTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamTypeCountAggregateOutputType> | number;
                };
            };
        };
        Exam: {
            payload: Prisma.$ExamPayload<ExtArgs>;
            fields: Prisma.ExamFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExamFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                findFirst: {
                    args: Prisma.ExamFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                findMany: {
                    args: Prisma.ExamFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>[];
                };
                create: {
                    args: Prisma.ExamCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                createMany: {
                    args: Prisma.ExamCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>[];
                };
                delete: {
                    args: Prisma.ExamDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                update: {
                    args: Prisma.ExamUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                deleteMany: {
                    args: Prisma.ExamDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExamUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExamUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>[];
                };
                upsert: {
                    args: Prisma.ExamUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                aggregate: {
                    args: Prisma.ExamAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExam>;
                };
                groupBy: {
                    args: Prisma.ExamGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExamCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamCountAggregateOutputType> | number;
                };
            };
        };
        ExamSchedule: {
            payload: Prisma.$ExamSchedulePayload<ExtArgs>;
            fields: Prisma.ExamScheduleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExamScheduleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSchedulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExamScheduleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSchedulePayload>;
                };
                findFirst: {
                    args: Prisma.ExamScheduleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSchedulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExamScheduleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSchedulePayload>;
                };
                findMany: {
                    args: Prisma.ExamScheduleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSchedulePayload>[];
                };
                create: {
                    args: Prisma.ExamScheduleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSchedulePayload>;
                };
                createMany: {
                    args: Prisma.ExamScheduleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExamScheduleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSchedulePayload>[];
                };
                delete: {
                    args: Prisma.ExamScheduleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSchedulePayload>;
                };
                update: {
                    args: Prisma.ExamScheduleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSchedulePayload>;
                };
                deleteMany: {
                    args: Prisma.ExamScheduleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExamScheduleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExamScheduleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSchedulePayload>[];
                };
                upsert: {
                    args: Prisma.ExamScheduleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSchedulePayload>;
                };
                aggregate: {
                    args: Prisma.ExamScheduleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExamSchedule>;
                };
                groupBy: {
                    args: Prisma.ExamScheduleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamScheduleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExamScheduleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamScheduleCountAggregateOutputType> | number;
                };
            };
        };
        GradeScale: {
            payload: Prisma.$GradeScalePayload<ExtArgs>;
            fields: Prisma.GradeScaleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GradeScaleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeScalePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GradeScaleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeScalePayload>;
                };
                findFirst: {
                    args: Prisma.GradeScaleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeScalePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GradeScaleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeScalePayload>;
                };
                findMany: {
                    args: Prisma.GradeScaleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeScalePayload>[];
                };
                create: {
                    args: Prisma.GradeScaleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeScalePayload>;
                };
                createMany: {
                    args: Prisma.GradeScaleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GradeScaleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeScalePayload>[];
                };
                delete: {
                    args: Prisma.GradeScaleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeScalePayload>;
                };
                update: {
                    args: Prisma.GradeScaleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeScalePayload>;
                };
                deleteMany: {
                    args: Prisma.GradeScaleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GradeScaleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GradeScaleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeScalePayload>[];
                };
                upsert: {
                    args: Prisma.GradeScaleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GradeScalePayload>;
                };
                aggregate: {
                    args: Prisma.GradeScaleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGradeScale>;
                };
                groupBy: {
                    args: Prisma.GradeScaleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GradeScaleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GradeScaleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GradeScaleCountAggregateOutputType> | number;
                };
            };
        };
        Mark: {
            payload: Prisma.$MarkPayload<ExtArgs>;
            fields: Prisma.MarkFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MarkFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarkPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MarkFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarkPayload>;
                };
                findFirst: {
                    args: Prisma.MarkFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarkPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MarkFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarkPayload>;
                };
                findMany: {
                    args: Prisma.MarkFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarkPayload>[];
                };
                create: {
                    args: Prisma.MarkCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarkPayload>;
                };
                createMany: {
                    args: Prisma.MarkCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MarkCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarkPayload>[];
                };
                delete: {
                    args: Prisma.MarkDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarkPayload>;
                };
                update: {
                    args: Prisma.MarkUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarkPayload>;
                };
                deleteMany: {
                    args: Prisma.MarkDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MarkUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MarkUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarkPayload>[];
                };
                upsert: {
                    args: Prisma.MarkUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarkPayload>;
                };
                aggregate: {
                    args: Prisma.MarkAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMark>;
                };
                groupBy: {
                    args: Prisma.MarkGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MarkGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MarkCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MarkCountAggregateOutputType> | number;
                };
            };
        };
        Assignment: {
            payload: Prisma.$AssignmentPayload<ExtArgs>;
            fields: Prisma.AssignmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssignmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>;
                };
                findFirst: {
                    args: Prisma.AssignmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>;
                };
                findMany: {
                    args: Prisma.AssignmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>[];
                };
                create: {
                    args: Prisma.AssignmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>;
                };
                createMany: {
                    args: Prisma.AssignmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>[];
                };
                delete: {
                    args: Prisma.AssignmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>;
                };
                update: {
                    args: Prisma.AssignmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>;
                };
                deleteMany: {
                    args: Prisma.AssignmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssignmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>[];
                };
                upsert: {
                    args: Prisma.AssignmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentPayload>;
                };
                aggregate: {
                    args: Prisma.AssignmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAssignment>;
                };
                groupBy: {
                    args: Prisma.AssignmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssignmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssignmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssignmentCountAggregateOutputType> | number;
                };
            };
        };
        AssignmentSubmission: {
            payload: Prisma.$AssignmentSubmissionPayload<ExtArgs>;
            fields: Prisma.AssignmentSubmissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssignmentSubmissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssignmentSubmissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>;
                };
                findFirst: {
                    args: Prisma.AssignmentSubmissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssignmentSubmissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>;
                };
                findMany: {
                    args: Prisma.AssignmentSubmissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>[];
                };
                create: {
                    args: Prisma.AssignmentSubmissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>;
                };
                createMany: {
                    args: Prisma.AssignmentSubmissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssignmentSubmissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>[];
                };
                delete: {
                    args: Prisma.AssignmentSubmissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>;
                };
                update: {
                    args: Prisma.AssignmentSubmissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>;
                };
                deleteMany: {
                    args: Prisma.AssignmentSubmissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssignmentSubmissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssignmentSubmissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>[];
                };
                upsert: {
                    args: Prisma.AssignmentSubmissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssignmentSubmissionPayload>;
                };
                aggregate: {
                    args: Prisma.AssignmentSubmissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAssignmentSubmission>;
                };
                groupBy: {
                    args: Prisma.AssignmentSubmissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssignmentSubmissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssignmentSubmissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssignmentSubmissionCountAggregateOutputType> | number;
                };
            };
        };
        Announcement: {
            payload: Prisma.$AnnouncementPayload<ExtArgs>;
            fields: Prisma.AnnouncementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                findFirst: {
                    args: Prisma.AnnouncementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                findMany: {
                    args: Prisma.AnnouncementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>[];
                };
                create: {
                    args: Prisma.AnnouncementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                createMany: {
                    args: Prisma.AnnouncementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>[];
                };
                delete: {
                    args: Prisma.AnnouncementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                update: {
                    args: Prisma.AnnouncementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                deleteMany: {
                    args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>[];
                };
                upsert: {
                    args: Prisma.AnnouncementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                aggregate: {
                    args: Prisma.AnnouncementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnnouncement>;
                };
                groupBy: {
                    args: Prisma.AnnouncementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnnouncementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnnouncementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnnouncementCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        Admission: {
            payload: Prisma.$AdmissionPayload<ExtArgs>;
            fields: Prisma.AdmissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdmissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdmissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdmissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdmissionPayload>;
                };
                findFirst: {
                    args: Prisma.AdmissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdmissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdmissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdmissionPayload>;
                };
                findMany: {
                    args: Prisma.AdmissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdmissionPayload>[];
                };
                create: {
                    args: Prisma.AdmissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdmissionPayload>;
                };
                createMany: {
                    args: Prisma.AdmissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdmissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdmissionPayload>[];
                };
                delete: {
                    args: Prisma.AdmissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdmissionPayload>;
                };
                update: {
                    args: Prisma.AdmissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdmissionPayload>;
                };
                deleteMany: {
                    args: Prisma.AdmissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdmissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdmissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdmissionPayload>[];
                };
                upsert: {
                    args: Prisma.AdmissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdmissionPayload>;
                };
                aggregate: {
                    args: Prisma.AdmissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdmission>;
                };
                groupBy: {
                    args: Prisma.AdmissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdmissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdmissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdmissionCountAggregateOutputType> | number;
                };
            };
        };
        Book: {
            payload: Prisma.$BookPayload<ExtArgs>;
            fields: Prisma.BookFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BookFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                findFirst: {
                    args: Prisma.BookFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                findMany: {
                    args: Prisma.BookFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>[];
                };
                create: {
                    args: Prisma.BookCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                createMany: {
                    args: Prisma.BookCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>[];
                };
                delete: {
                    args: Prisma.BookDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                update: {
                    args: Prisma.BookUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                deleteMany: {
                    args: Prisma.BookDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BookUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>[];
                };
                upsert: {
                    args: Prisma.BookUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                aggregate: {
                    args: Prisma.BookAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBook>;
                };
                groupBy: {
                    args: Prisma.BookGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BookCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookCountAggregateOutputType> | number;
                };
            };
        };
        BookIssue: {
            payload: Prisma.$BookIssuePayload<ExtArgs>;
            fields: Prisma.BookIssueFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BookIssueFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookIssuePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BookIssueFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookIssuePayload>;
                };
                findFirst: {
                    args: Prisma.BookIssueFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookIssuePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BookIssueFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookIssuePayload>;
                };
                findMany: {
                    args: Prisma.BookIssueFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookIssuePayload>[];
                };
                create: {
                    args: Prisma.BookIssueCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookIssuePayload>;
                };
                createMany: {
                    args: Prisma.BookIssueCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BookIssueCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookIssuePayload>[];
                };
                delete: {
                    args: Prisma.BookIssueDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookIssuePayload>;
                };
                update: {
                    args: Prisma.BookIssueUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookIssuePayload>;
                };
                deleteMany: {
                    args: Prisma.BookIssueDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BookIssueUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BookIssueUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookIssuePayload>[];
                };
                upsert: {
                    args: Prisma.BookIssueUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookIssuePayload>;
                };
                aggregate: {
                    args: Prisma.BookIssueAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBookIssue>;
                };
                groupBy: {
                    args: Prisma.BookIssueGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookIssueGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BookIssueCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookIssueCountAggregateOutputType> | number;
                };
            };
        };
        Vehicle: {
            payload: Prisma.$VehiclePayload<ExtArgs>;
            fields: Prisma.VehicleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VehicleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiclePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiclePayload>;
                };
                findFirst: {
                    args: Prisma.VehicleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiclePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiclePayload>;
                };
                findMany: {
                    args: Prisma.VehicleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiclePayload>[];
                };
                create: {
                    args: Prisma.VehicleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiclePayload>;
                };
                createMany: {
                    args: Prisma.VehicleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiclePayload>[];
                };
                delete: {
                    args: Prisma.VehicleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiclePayload>;
                };
                update: {
                    args: Prisma.VehicleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiclePayload>;
                };
                deleteMany: {
                    args: Prisma.VehicleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VehicleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiclePayload>[];
                };
                upsert: {
                    args: Prisma.VehicleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiclePayload>;
                };
                aggregate: {
                    args: Prisma.VehicleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVehicle>;
                };
                groupBy: {
                    args: Prisma.VehicleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VehicleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VehicleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VehicleCountAggregateOutputType> | number;
                };
            };
        };
        Route: {
            payload: Prisma.$RoutePayload<ExtArgs>;
            fields: Prisma.RouteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RouteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutePayload>;
                };
                findFirst: {
                    args: Prisma.RouteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutePayload>;
                };
                findMany: {
                    args: Prisma.RouteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutePayload>[];
                };
                create: {
                    args: Prisma.RouteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutePayload>;
                };
                createMany: {
                    args: Prisma.RouteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutePayload>[];
                };
                delete: {
                    args: Prisma.RouteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutePayload>;
                };
                update: {
                    args: Prisma.RouteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutePayload>;
                };
                deleteMany: {
                    args: Prisma.RouteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RouteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutePayload>[];
                };
                upsert: {
                    args: Prisma.RouteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoutePayload>;
                };
                aggregate: {
                    args: Prisma.RouteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoute>;
                };
                groupBy: {
                    args: Prisma.RouteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RouteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RouteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RouteCountAggregateOutputType> | number;
                };
            };
        };
        RouteStop: {
            payload: Prisma.$RouteStopPayload<ExtArgs>;
            fields: Prisma.RouteStopFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RouteStopFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RouteStopFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>;
                };
                findFirst: {
                    args: Prisma.RouteStopFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RouteStopFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>;
                };
                findMany: {
                    args: Prisma.RouteStopFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>[];
                };
                create: {
                    args: Prisma.RouteStopCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>;
                };
                createMany: {
                    args: Prisma.RouteStopCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RouteStopCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>[];
                };
                delete: {
                    args: Prisma.RouteStopDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>;
                };
                update: {
                    args: Prisma.RouteStopUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>;
                };
                deleteMany: {
                    args: Prisma.RouteStopDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RouteStopUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RouteStopUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>[];
                };
                upsert: {
                    args: Prisma.RouteStopUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>;
                };
                aggregate: {
                    args: Prisma.RouteStopAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRouteStop>;
                };
                groupBy: {
                    args: Prisma.RouteStopGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RouteStopGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RouteStopCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RouteStopCountAggregateOutputType> | number;
                };
            };
        };
        StudentTransport: {
            payload: Prisma.$StudentTransportPayload<ExtArgs>;
            fields: Prisma.StudentTransportFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentTransportFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentTransportPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentTransportFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentTransportPayload>;
                };
                findFirst: {
                    args: Prisma.StudentTransportFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentTransportPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentTransportFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentTransportPayload>;
                };
                findMany: {
                    args: Prisma.StudentTransportFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentTransportPayload>[];
                };
                create: {
                    args: Prisma.StudentTransportCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentTransportPayload>;
                };
                createMany: {
                    args: Prisma.StudentTransportCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentTransportCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentTransportPayload>[];
                };
                delete: {
                    args: Prisma.StudentTransportDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentTransportPayload>;
                };
                update: {
                    args: Prisma.StudentTransportUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentTransportPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentTransportDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentTransportUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentTransportUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentTransportPayload>[];
                };
                upsert: {
                    args: Prisma.StudentTransportUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentTransportPayload>;
                };
                aggregate: {
                    args: Prisma.StudentTransportAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentTransport>;
                };
                groupBy: {
                    args: Prisma.StudentTransportGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentTransportGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentTransportCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentTransportCountAggregateOutputType> | number;
                };
            };
        };
        Hostel: {
            payload: Prisma.$HostelPayload<ExtArgs>;
            fields: Prisma.HostelFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HostelFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HostelFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelPayload>;
                };
                findFirst: {
                    args: Prisma.HostelFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HostelFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelPayload>;
                };
                findMany: {
                    args: Prisma.HostelFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelPayload>[];
                };
                create: {
                    args: Prisma.HostelCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelPayload>;
                };
                createMany: {
                    args: Prisma.HostelCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HostelCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelPayload>[];
                };
                delete: {
                    args: Prisma.HostelDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelPayload>;
                };
                update: {
                    args: Prisma.HostelUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelPayload>;
                };
                deleteMany: {
                    args: Prisma.HostelDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HostelUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HostelUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelPayload>[];
                };
                upsert: {
                    args: Prisma.HostelUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelPayload>;
                };
                aggregate: {
                    args: Prisma.HostelAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHostel>;
                };
                groupBy: {
                    args: Prisma.HostelGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HostelGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HostelCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HostelCountAggregateOutputType> | number;
                };
            };
        };
        HostelRoom: {
            payload: Prisma.$HostelRoomPayload<ExtArgs>;
            fields: Prisma.HostelRoomFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HostelRoomFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelRoomPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HostelRoomFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelRoomPayload>;
                };
                findFirst: {
                    args: Prisma.HostelRoomFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelRoomPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HostelRoomFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelRoomPayload>;
                };
                findMany: {
                    args: Prisma.HostelRoomFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelRoomPayload>[];
                };
                create: {
                    args: Prisma.HostelRoomCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelRoomPayload>;
                };
                createMany: {
                    args: Prisma.HostelRoomCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HostelRoomCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelRoomPayload>[];
                };
                delete: {
                    args: Prisma.HostelRoomDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelRoomPayload>;
                };
                update: {
                    args: Prisma.HostelRoomUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelRoomPayload>;
                };
                deleteMany: {
                    args: Prisma.HostelRoomDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HostelRoomUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HostelRoomUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelRoomPayload>[];
                };
                upsert: {
                    args: Prisma.HostelRoomUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelRoomPayload>;
                };
                aggregate: {
                    args: Prisma.HostelRoomAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHostelRoom>;
                };
                groupBy: {
                    args: Prisma.HostelRoomGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HostelRoomGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HostelRoomCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HostelRoomCountAggregateOutputType> | number;
                };
            };
        };
        HostelAllocation: {
            payload: Prisma.$HostelAllocationPayload<ExtArgs>;
            fields: Prisma.HostelAllocationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HostelAllocationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelAllocationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HostelAllocationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelAllocationPayload>;
                };
                findFirst: {
                    args: Prisma.HostelAllocationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelAllocationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HostelAllocationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelAllocationPayload>;
                };
                findMany: {
                    args: Prisma.HostelAllocationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelAllocationPayload>[];
                };
                create: {
                    args: Prisma.HostelAllocationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelAllocationPayload>;
                };
                createMany: {
                    args: Prisma.HostelAllocationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HostelAllocationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelAllocationPayload>[];
                };
                delete: {
                    args: Prisma.HostelAllocationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelAllocationPayload>;
                };
                update: {
                    args: Prisma.HostelAllocationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelAllocationPayload>;
                };
                deleteMany: {
                    args: Prisma.HostelAllocationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HostelAllocationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HostelAllocationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelAllocationPayload>[];
                };
                upsert: {
                    args: Prisma.HostelAllocationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostelAllocationPayload>;
                };
                aggregate: {
                    args: Prisma.HostelAllocationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHostelAllocation>;
                };
                groupBy: {
                    args: Prisma.HostelAllocationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HostelAllocationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HostelAllocationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HostelAllocationCountAggregateOutputType> | number;
                };
            };
        };
        AssetCategory: {
            payload: Prisma.$AssetCategoryPayload<ExtArgs>;
            fields: Prisma.AssetCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssetCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssetCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.AssetCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssetCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetCategoryPayload>;
                };
                findMany: {
                    args: Prisma.AssetCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetCategoryPayload>[];
                };
                create: {
                    args: Prisma.AssetCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetCategoryPayload>;
                };
                createMany: {
                    args: Prisma.AssetCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssetCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetCategoryPayload>[];
                };
                delete: {
                    args: Prisma.AssetCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetCategoryPayload>;
                };
                update: {
                    args: Prisma.AssetCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.AssetCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssetCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssetCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.AssetCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.AssetCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAssetCategory>;
                };
                groupBy: {
                    args: Prisma.AssetCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssetCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetCategoryCountAggregateOutputType> | number;
                };
            };
        };
        Asset: {
            payload: Prisma.$AssetPayload<ExtArgs>;
            fields: Prisma.AssetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                findFirst: {
                    args: Prisma.AssetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                findMany: {
                    args: Prisma.AssetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>[];
                };
                create: {
                    args: Prisma.AssetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                createMany: {
                    args: Prisma.AssetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>[];
                };
                delete: {
                    args: Prisma.AssetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                update: {
                    args: Prisma.AssetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                deleteMany: {
                    args: Prisma.AssetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>[];
                };
                upsert: {
                    args: Prisma.AssetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                aggregate: {
                    args: Prisma.AssetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAsset>;
                };
                groupBy: {
                    args: Prisma.AssetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetCountAggregateOutputType> | number;
                };
            };
        };
        LeaveType: {
            payload: Prisma.$LeaveTypePayload<ExtArgs>;
            fields: Prisma.LeaveTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeaveTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeaveTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>;
                };
                findFirst: {
                    args: Prisma.LeaveTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeaveTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>;
                };
                findMany: {
                    args: Prisma.LeaveTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>[];
                };
                create: {
                    args: Prisma.LeaveTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>;
                };
                createMany: {
                    args: Prisma.LeaveTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeaveTypeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>[];
                };
                delete: {
                    args: Prisma.LeaveTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>;
                };
                update: {
                    args: Prisma.LeaveTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>;
                };
                deleteMany: {
                    args: Prisma.LeaveTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeaveTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeaveTypeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>[];
                };
                upsert: {
                    args: Prisma.LeaveTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>;
                };
                aggregate: {
                    args: Prisma.LeaveTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeaveType>;
                };
                groupBy: {
                    args: Prisma.LeaveTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeaveTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveTypeCountAggregateOutputType> | number;
                };
            };
        };
        LeaveGroup: {
            payload: Prisma.$LeaveGroupPayload<ExtArgs>;
            fields: Prisma.LeaveGroupFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeaveGroupFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeaveGroupFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupPayload>;
                };
                findFirst: {
                    args: Prisma.LeaveGroupFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeaveGroupFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupPayload>;
                };
                findMany: {
                    args: Prisma.LeaveGroupFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupPayload>[];
                };
                create: {
                    args: Prisma.LeaveGroupCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupPayload>;
                };
                createMany: {
                    args: Prisma.LeaveGroupCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeaveGroupCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupPayload>[];
                };
                delete: {
                    args: Prisma.LeaveGroupDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupPayload>;
                };
                update: {
                    args: Prisma.LeaveGroupUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupPayload>;
                };
                deleteMany: {
                    args: Prisma.LeaveGroupDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeaveGroupUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeaveGroupUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupPayload>[];
                };
                upsert: {
                    args: Prisma.LeaveGroupUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupPayload>;
                };
                aggregate: {
                    args: Prisma.LeaveGroupAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeaveGroup>;
                };
                groupBy: {
                    args: Prisma.LeaveGroupGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveGroupGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeaveGroupCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveGroupCountAggregateOutputType> | number;
                };
            };
        };
        LeaveGroupAllocation: {
            payload: Prisma.$LeaveGroupAllocationPayload<ExtArgs>;
            fields: Prisma.LeaveGroupAllocationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeaveGroupAllocationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupAllocationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeaveGroupAllocationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupAllocationPayload>;
                };
                findFirst: {
                    args: Prisma.LeaveGroupAllocationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupAllocationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeaveGroupAllocationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupAllocationPayload>;
                };
                findMany: {
                    args: Prisma.LeaveGroupAllocationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupAllocationPayload>[];
                };
                create: {
                    args: Prisma.LeaveGroupAllocationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupAllocationPayload>;
                };
                createMany: {
                    args: Prisma.LeaveGroupAllocationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeaveGroupAllocationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupAllocationPayload>[];
                };
                delete: {
                    args: Prisma.LeaveGroupAllocationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupAllocationPayload>;
                };
                update: {
                    args: Prisma.LeaveGroupAllocationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupAllocationPayload>;
                };
                deleteMany: {
                    args: Prisma.LeaveGroupAllocationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeaveGroupAllocationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeaveGroupAllocationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupAllocationPayload>[];
                };
                upsert: {
                    args: Prisma.LeaveGroupAllocationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveGroupAllocationPayload>;
                };
                aggregate: {
                    args: Prisma.LeaveGroupAllocationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeaveGroupAllocation>;
                };
                groupBy: {
                    args: Prisma.LeaveGroupAllocationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveGroupAllocationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeaveGroupAllocationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveGroupAllocationCountAggregateOutputType> | number;
                };
            };
        };
        LeaveRequest: {
            payload: Prisma.$LeaveRequestPayload<ExtArgs>;
            fields: Prisma.LeaveRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeaveRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeaveRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>;
                };
                findFirst: {
                    args: Prisma.LeaveRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeaveRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>;
                };
                findMany: {
                    args: Prisma.LeaveRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[];
                };
                create: {
                    args: Prisma.LeaveRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>;
                };
                createMany: {
                    args: Prisma.LeaveRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeaveRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[];
                };
                delete: {
                    args: Prisma.LeaveRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>;
                };
                update: {
                    args: Prisma.LeaveRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.LeaveRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeaveRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeaveRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[];
                };
                upsert: {
                    args: Prisma.LeaveRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>;
                };
                aggregate: {
                    args: Prisma.LeaveRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeaveRequest>;
                };
                groupBy: {
                    args: Prisma.LeaveRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeaveRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveRequestCountAggregateOutputType> | number;
                };
            };
        };
        DisciplineIncident: {
            payload: Prisma.$DisciplineIncidentPayload<ExtArgs>;
            fields: Prisma.DisciplineIncidentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DisciplineIncidentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplineIncidentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DisciplineIncidentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplineIncidentPayload>;
                };
                findFirst: {
                    args: Prisma.DisciplineIncidentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplineIncidentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DisciplineIncidentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplineIncidentPayload>;
                };
                findMany: {
                    args: Prisma.DisciplineIncidentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplineIncidentPayload>[];
                };
                create: {
                    args: Prisma.DisciplineIncidentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplineIncidentPayload>;
                };
                createMany: {
                    args: Prisma.DisciplineIncidentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DisciplineIncidentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplineIncidentPayload>[];
                };
                delete: {
                    args: Prisma.DisciplineIncidentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplineIncidentPayload>;
                };
                update: {
                    args: Prisma.DisciplineIncidentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplineIncidentPayload>;
                };
                deleteMany: {
                    args: Prisma.DisciplineIncidentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DisciplineIncidentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DisciplineIncidentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplineIncidentPayload>[];
                };
                upsert: {
                    args: Prisma.DisciplineIncidentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplineIncidentPayload>;
                };
                aggregate: {
                    args: Prisma.DisciplineIncidentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDisciplineIncident>;
                };
                groupBy: {
                    args: Prisma.DisciplineIncidentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisciplineIncidentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DisciplineIncidentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisciplineIncidentCountAggregateOutputType> | number;
                };
            };
        };
        Visitor: {
            payload: Prisma.$VisitorPayload<ExtArgs>;
            fields: Prisma.VisitorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VisitorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VisitorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorPayload>;
                };
                findFirst: {
                    args: Prisma.VisitorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VisitorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorPayload>;
                };
                findMany: {
                    args: Prisma.VisitorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorPayload>[];
                };
                create: {
                    args: Prisma.VisitorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorPayload>;
                };
                createMany: {
                    args: Prisma.VisitorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VisitorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorPayload>[];
                };
                delete: {
                    args: Prisma.VisitorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorPayload>;
                };
                update: {
                    args: Prisma.VisitorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorPayload>;
                };
                deleteMany: {
                    args: Prisma.VisitorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VisitorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VisitorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorPayload>[];
                };
                upsert: {
                    args: Prisma.VisitorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VisitorPayload>;
                };
                aggregate: {
                    args: Prisma.VisitorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVisitor>;
                };
                groupBy: {
                    args: Prisma.VisitorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VisitorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VisitorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VisitorCountAggregateOutputType> | number;
                };
            };
        };
        Alumni: {
            payload: Prisma.$AlumniPayload<ExtArgs>;
            fields: Prisma.AlumniFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AlumniFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlumniPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AlumniFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlumniPayload>;
                };
                findFirst: {
                    args: Prisma.AlumniFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlumniPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AlumniFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlumniPayload>;
                };
                findMany: {
                    args: Prisma.AlumniFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlumniPayload>[];
                };
                create: {
                    args: Prisma.AlumniCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlumniPayload>;
                };
                createMany: {
                    args: Prisma.AlumniCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AlumniCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlumniPayload>[];
                };
                delete: {
                    args: Prisma.AlumniDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlumniPayload>;
                };
                update: {
                    args: Prisma.AlumniUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlumniPayload>;
                };
                deleteMany: {
                    args: Prisma.AlumniDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AlumniUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AlumniUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlumniPayload>[];
                };
                upsert: {
                    args: Prisma.AlumniUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlumniPayload>;
                };
                aggregate: {
                    args: Prisma.AlumniAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlumni>;
                };
                groupBy: {
                    args: Prisma.AlumniGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlumniGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AlumniCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlumniCountAggregateOutputType> | number;
                };
            };
        };
        Document: {
            payload: Prisma.$DocumentPayload<ExtArgs>;
            fields: Prisma.DocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                findFirst: {
                    args: Prisma.DocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                findMany: {
                    args: Prisma.DocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>[];
                };
                create: {
                    args: Prisma.DocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                createMany: {
                    args: Prisma.DocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>[];
                };
                delete: {
                    args: Prisma.DocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                update: {
                    args: Prisma.DocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.DocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>[];
                };
                upsert: {
                    args: Prisma.DocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentPayload>;
                };
                aggregate: {
                    args: Prisma.DocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDocument>;
                };
                groupBy: {
                    args: Prisma.DocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const SchoolScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly email: "email";
    readonly phone: "phone";
    readonly address: "address";
    readonly logoUrl: "logoUrl";
    readonly idCardBackgroundColor: "idCardBackgroundColor";
    readonly idCardForegroundColor: "idCardForegroundColor";
    readonly idCardBackgroundImageUrl: "idCardBackgroundImageUrl";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum];
export declare const BranchScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly code: "code";
    readonly address: "address";
    readonly phone: "phone";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum];
export declare const AcademicYearScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isCurrent: "isCurrent";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AcademicYearScalarFieldEnum = (typeof AcademicYearScalarFieldEnum)[keyof typeof AcademicYearScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly phone: "phone";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly mustChangePassword: "mustChangePassword";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly userAgent: "userAgent";
    readonly ipAddress: "ipAddress";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly userId: "userId";
    readonly action: "action";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly before: "before";
    readonly after: "after";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const ClassScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly academicYearId: "academicYearId";
    readonly name: "name";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum];
export declare const SectionScalarFieldEnum: {
    readonly id: "id";
    readonly classId: "classId";
    readonly name: "name";
    readonly capacity: "capacity";
    readonly classTeacherId: "classTeacherId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum];
export declare const SubjectScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly code: "code";
    readonly imageUrl: "imageUrl";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum];
export declare const ClassSubjectScalarFieldEnum: {
    readonly id: "id";
    readonly classId: "classId";
    readonly subjectId: "subjectId";
    readonly createdAt: "createdAt";
};
export type ClassSubjectScalarFieldEnum = (typeof ClassSubjectScalarFieldEnum)[keyof typeof ClassSubjectScalarFieldEnum];
export declare const SubjectTeacherScalarFieldEnum: {
    readonly id: "id";
    readonly sectionId: "sectionId";
    readonly subjectId: "subjectId";
    readonly teacherId: "teacherId";
    readonly createdAt: "createdAt";
};
export type SubjectTeacherScalarFieldEnum = (typeof SubjectTeacherScalarFieldEnum)[keyof typeof SubjectTeacherScalarFieldEnum];
export declare const TeacherScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly customRoleId: "customRoleId";
    readonly leaveGroupId: "leaveGroupId";
    readonly employeeCode: "employeeCode";
    readonly photoUrl: "photoUrl";
    readonly gender: "gender";
    readonly dateOfBirth: "dateOfBirth";
    readonly joiningDate: "joiningDate";
    readonly address: "address";
    readonly emergencyPhone: "emergencyPhone";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum];
export declare const TeacherQualificationScalarFieldEnum: {
    readonly id: "id";
    readonly teacherId: "teacherId";
    readonly degree: "degree";
    readonly institution: "institution";
    readonly yearCompleted: "yearCompleted";
    readonly createdAt: "createdAt";
};
export type TeacherQualificationScalarFieldEnum = (typeof TeacherQualificationScalarFieldEnum)[keyof typeof TeacherQualificationScalarFieldEnum];
export declare const StaffScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly customRoleId: "customRoleId";
    readonly leaveGroupId: "leaveGroupId";
    readonly employeeCode: "employeeCode";
    readonly designation: "designation";
    readonly photoUrl: "photoUrl";
    readonly gender: "gender";
    readonly dateOfBirth: "dateOfBirth";
    readonly joiningDate: "joiningDate";
    readonly address: "address";
    readonly emergencyPhone: "emergencyPhone";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum];
export declare const CustomRoleScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly allowLogin: "allowLogin";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomRoleScalarFieldEnum = (typeof CustomRoleScalarFieldEnum)[keyof typeof CustomRoleScalarFieldEnum];
export declare const RolePermissionScalarFieldEnum: {
    readonly id: "id";
    readonly customRoleId: "customRoleId";
    readonly resource: "resource";
};
export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum];
export declare const StudentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly sectionId: "sectionId";
    readonly admissionNumber: "admissionNumber";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly photoUrl: "photoUrl";
    readonly gender: "gender";
    readonly dateOfBirth: "dateOfBirth";
    readonly bloodGroup: "bloodGroup";
    readonly address: "address";
    readonly admissionDate: "admissionDate";
    readonly academicStatus: "academicStatus";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];
export declare const GuardianScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly userId: "userId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly email: "email";
    readonly phone: "phone";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GuardianScalarFieldEnum = (typeof GuardianScalarFieldEnum)[keyof typeof GuardianScalarFieldEnum];
export declare const StudentGuardianScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly guardianId: "guardianId";
    readonly relation: "relation";
    readonly isPrimary: "isPrimary";
    readonly createdAt: "createdAt";
};
export type StudentGuardianScalarFieldEnum = (typeof StudentGuardianScalarFieldEnum)[keyof typeof StudentGuardianScalarFieldEnum];
export declare const StudentAttendanceScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly academicYearId: "academicYearId";
    readonly sectionId: "sectionId";
    readonly studentId: "studentId";
    readonly date: "date";
    readonly status: "status";
    readonly remarks: "remarks";
    readonly markedById: "markedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StudentAttendanceScalarFieldEnum = (typeof StudentAttendanceScalarFieldEnum)[keyof typeof StudentAttendanceScalarFieldEnum];
export declare const TeacherAttendanceScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly academicYearId: "academicYearId";
    readonly teacherId: "teacherId";
    readonly date: "date";
    readonly status: "status";
    readonly remarks: "remarks";
    readonly markedById: "markedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TeacherAttendanceScalarFieldEnum = (typeof TeacherAttendanceScalarFieldEnum)[keyof typeof TeacherAttendanceScalarFieldEnum];
export declare const PeriodScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly name: "name";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PeriodScalarFieldEnum = (typeof PeriodScalarFieldEnum)[keyof typeof PeriodScalarFieldEnum];
export declare const TimetableEntryScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly sectionId: "sectionId";
    readonly periodId: "periodId";
    readonly dayOfWeek: "dayOfWeek";
    readonly subjectId: "subjectId";
    readonly teacherId: "teacherId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TimetableEntryScalarFieldEnum = (typeof TimetableEntryScalarFieldEnum)[keyof typeof TimetableEntryScalarFieldEnum];
export declare const SchoolEventScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly title: "title";
    readonly description: "description";
    readonly location: "location";
    readonly type: "type";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isAllDay: "isAllDay";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SchoolEventScalarFieldEnum = (typeof SchoolEventScalarFieldEnum)[keyof typeof SchoolEventScalarFieldEnum];
export declare const FeeHeadScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FeeHeadScalarFieldEnum = (typeof FeeHeadScalarFieldEnum)[keyof typeof FeeHeadScalarFieldEnum];
export declare const FeeStructureScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly classId: "classId";
    readonly feeHeadId: "feeHeadId";
    readonly academicYearId: "academicYearId";
    readonly amount: "amount";
    readonly frequency: "frequency";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FeeStructureScalarFieldEnum = (typeof FeeStructureScalarFieldEnum)[keyof typeof FeeStructureScalarFieldEnum];
export declare const StudentDiscountScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly studentId: "studentId";
    readonly feeHeadId: "feeHeadId";
    readonly type: "type";
    readonly value: "value";
    readonly reason: "reason";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StudentDiscountScalarFieldEnum = (typeof StudentDiscountScalarFieldEnum)[keyof typeof StudentDiscountScalarFieldEnum];
export declare const InvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly studentId: "studentId";
    readonly academicYearId: "academicYearId";
    readonly invoiceNumber: "invoiceNumber";
    readonly period: "period";
    readonly issueDate: "issueDate";
    readonly dueDate: "dueDate";
    readonly subtotal: "subtotal";
    readonly discountTotal: "discountTotal";
    readonly total: "total";
    readonly amountPaid: "amountPaid";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];
export declare const InvoiceItemScalarFieldEnum: {
    readonly id: "id";
    readonly invoiceId: "invoiceId";
    readonly feeHeadId: "feeHeadId";
    readonly amount: "amount";
    readonly discount: "discount";
    readonly createdAt: "createdAt";
};
export type InvoiceItemScalarFieldEnum = (typeof InvoiceItemScalarFieldEnum)[keyof typeof InvoiceItemScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly invoiceId: "invoiceId";
    readonly amount: "amount";
    readonly method: "method";
    readonly reference: "reference";
    readonly paidAt: "paidAt";
    readonly recordedById: "recordedById";
    readonly createdAt: "createdAt";
    readonly deletedAt: "deletedAt";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const SalaryStructureScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly userId: "userId";
    readonly basicSalary: "basicSalary";
    readonly allowances: "allowances";
    readonly fixedDeductions: "fixedDeductions";
    readonly effectiveFrom: "effectiveFrom";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SalaryStructureScalarFieldEnum = (typeof SalaryStructureScalarFieldEnum)[keyof typeof SalaryStructureScalarFieldEnum];
export declare const PayslipScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly userId: "userId";
    readonly salaryStructureId: "salaryStructureId";
    readonly month: "month";
    readonly basicSalary: "basicSalary";
    readonly allowances: "allowances";
    readonly attendanceDeduction: "attendanceDeduction";
    readonly otherDeductions: "otherDeductions";
    readonly netSalary: "netSalary";
    readonly status: "status";
    readonly paidAt: "paidAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type PayslipScalarFieldEnum = (typeof PayslipScalarFieldEnum)[keyof typeof PayslipScalarFieldEnum];
export declare const ExpenseCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type ExpenseCategoryScalarFieldEnum = (typeof ExpenseCategoryScalarFieldEnum)[keyof typeof ExpenseCategoryScalarFieldEnum];
export declare const VendorScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly phone: "phone";
    readonly email: "email";
    readonly address: "address";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum];
export declare const ExpenseScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly categoryId: "categoryId";
    readonly vendorId: "vendorId";
    readonly description: "description";
    readonly amount: "amount";
    readonly expenseDate: "expenseDate";
    readonly status: "status";
    readonly requestedById: "requestedById";
    readonly approvedById: "approvedById";
    readonly approvedAt: "approvedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum];
export declare const RoomScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly name: "name";
    readonly capacity: "capacity";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum];
export declare const ExamTypeScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ExamTypeScalarFieldEnum = (typeof ExamTypeScalarFieldEnum)[keyof typeof ExamTypeScalarFieldEnum];
export declare const ExamScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly academicYearId: "academicYearId";
    readonly examTypeId: "examTypeId";
    readonly name: "name";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum];
export declare const ExamScheduleScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly examId: "examId";
    readonly classId: "classId";
    readonly subjectId: "subjectId";
    readonly roomId: "roomId";
    readonly examDate: "examDate";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly maxMarks: "maxMarks";
    readonly passMarks: "passMarks";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ExamScheduleScalarFieldEnum = (typeof ExamScheduleScalarFieldEnum)[keyof typeof ExamScheduleScalarFieldEnum];
export declare const GradeScaleScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly grade: "grade";
    readonly minPercentage: "minPercentage";
    readonly maxPercentage: "maxPercentage";
    readonly remarks: "remarks";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GradeScaleScalarFieldEnum = (typeof GradeScaleScalarFieldEnum)[keyof typeof GradeScaleScalarFieldEnum];
export declare const MarkScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly examScheduleId: "examScheduleId";
    readonly studentId: "studentId";
    readonly marksObtained: "marksObtained";
    readonly isAbsent: "isAbsent";
    readonly remarks: "remarks";
    readonly enteredById: "enteredById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MarkScalarFieldEnum = (typeof MarkScalarFieldEnum)[keyof typeof MarkScalarFieldEnum];
export declare const AssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly sectionId: "sectionId";
    readonly subjectId: "subjectId";
    readonly teacherId: "teacherId";
    readonly title: "title";
    readonly description: "description";
    readonly assignedDate: "assignedDate";
    readonly dueDate: "dueDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum];
export declare const AssignmentSubmissionScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly assignmentId: "assignmentId";
    readonly studentId: "studentId";
    readonly status: "status";
    readonly submissionText: "submissionText";
    readonly submittedAt: "submittedAt";
    readonly marksObtained: "marksObtained";
    readonly feedback: "feedback";
    readonly gradedById: "gradedById";
    readonly gradedAt: "gradedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AssignmentSubmissionScalarFieldEnum = (typeof AssignmentSubmissionScalarFieldEnum)[keyof typeof AssignmentSubmissionScalarFieldEnum];
export declare const AnnouncementScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly title: "title";
    readonly body: "body";
    readonly targetRoles: "targetRoles";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly userId: "userId";
    readonly announcementId: "announcementId";
    readonly type: "type";
    readonly title: "title";
    readonly body: "body";
    readonly link: "link";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const AdmissionScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly applicantFirstName: "applicantFirstName";
    readonly applicantLastName: "applicantLastName";
    readonly dateOfBirth: "dateOfBirth";
    readonly gender: "gender";
    readonly gradeAppliedFor: "gradeAppliedFor";
    readonly guardianName: "guardianName";
    readonly guardianPhone: "guardianPhone";
    readonly guardianEmail: "guardianEmail";
    readonly source: "source";
    readonly status: "status";
    readonly testScore: "testScore";
    readonly testDate: "testDate";
    readonly offeredSectionId: "offeredSectionId";
    readonly notes: "notes";
    readonly convertedStudentId: "convertedStudentId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdmissionScalarFieldEnum = (typeof AdmissionScalarFieldEnum)[keyof typeof AdmissionScalarFieldEnum];
export declare const BookScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly title: "title";
    readonly author: "author";
    readonly isbn: "isbn";
    readonly category: "category";
    readonly totalCopies: "totalCopies";
    readonly availableCopies: "availableCopies";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum];
export declare const BookIssueScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly bookId: "bookId";
    readonly studentId: "studentId";
    readonly teacherId: "teacherId";
    readonly issueDate: "issueDate";
    readonly dueDate: "dueDate";
    readonly returnDate: "returnDate";
    readonly status: "status";
    readonly fineAmount: "fineAmount";
    readonly issuedById: "issuedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BookIssueScalarFieldEnum = (typeof BookIssueScalarFieldEnum)[keyof typeof BookIssueScalarFieldEnum];
export declare const VehicleScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly registrationNumber: "registrationNumber";
    readonly capacity: "capacity";
    readonly driverName: "driverName";
    readonly driverPhone: "driverPhone";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum];
export declare const RouteScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly vehicleId: "vehicleId";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum];
export declare const RouteStopScalarFieldEnum: {
    readonly id: "id";
    readonly routeId: "routeId";
    readonly name: "name";
    readonly order: "order";
    readonly fee: "fee";
    readonly createdAt: "createdAt";
};
export type RouteStopScalarFieldEnum = (typeof RouteStopScalarFieldEnum)[keyof typeof RouteStopScalarFieldEnum];
export declare const StudentTransportScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly studentId: "studentId";
    readonly routeId: "routeId";
    readonly stopId: "stopId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StudentTransportScalarFieldEnum = (typeof StudentTransportScalarFieldEnum)[keyof typeof StudentTransportScalarFieldEnum];
export declare const HostelScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly name: "name";
    readonly wardenName: "wardenName";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type HostelScalarFieldEnum = (typeof HostelScalarFieldEnum)[keyof typeof HostelScalarFieldEnum];
export declare const HostelRoomScalarFieldEnum: {
    readonly id: "id";
    readonly hostelId: "hostelId";
    readonly roomNumber: "roomNumber";
    readonly capacity: "capacity";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type HostelRoomScalarFieldEnum = (typeof HostelRoomScalarFieldEnum)[keyof typeof HostelRoomScalarFieldEnum];
export declare const HostelAllocationScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly roomId: "roomId";
    readonly studentId: "studentId";
    readonly bedNumber: "bedNumber";
    readonly allocatedDate: "allocatedDate";
    readonly vacatedDate: "vacatedDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type HostelAllocationScalarFieldEnum = (typeof HostelAllocationScalarFieldEnum)[keyof typeof HostelAllocationScalarFieldEnum];
export declare const AssetCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type AssetCategoryScalarFieldEnum = (typeof AssetCategoryScalarFieldEnum)[keyof typeof AssetCategoryScalarFieldEnum];
export declare const AssetScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly categoryId: "categoryId";
    readonly name: "name";
    readonly serialNumber: "serialNumber";
    readonly purchaseDate: "purchaseDate";
    readonly purchaseCost: "purchaseCost";
    readonly status: "status";
    readonly assignedToTeacherId: "assignedToTeacherId";
    readonly location: "location";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum];
export declare const LeaveTypeScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type LeaveTypeScalarFieldEnum = (typeof LeaveTypeScalarFieldEnum)[keyof typeof LeaveTypeScalarFieldEnum];
export declare const LeaveGroupScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LeaveGroupScalarFieldEnum = (typeof LeaveGroupScalarFieldEnum)[keyof typeof LeaveGroupScalarFieldEnum];
export declare const LeaveGroupAllocationScalarFieldEnum: {
    readonly id: "id";
    readonly leaveGroupId: "leaveGroupId";
    readonly leaveTypeId: "leaveTypeId";
    readonly daysPerYear: "daysPerYear";
};
export type LeaveGroupAllocationScalarFieldEnum = (typeof LeaveGroupAllocationScalarFieldEnum)[keyof typeof LeaveGroupAllocationScalarFieldEnum];
export declare const LeaveRequestScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly teacherId: "teacherId";
    readonly staffId: "staffId";
    readonly leaveTypeId: "leaveTypeId";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isHalfDay: "isHalfDay";
    readonly dayCount: "dayCount";
    readonly reason: "reason";
    readonly status: "status";
    readonly approvedById: "approvedById";
    readonly approvedAt: "approvedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LeaveRequestScalarFieldEnum = (typeof LeaveRequestScalarFieldEnum)[keyof typeof LeaveRequestScalarFieldEnum];
export declare const DisciplineIncidentScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly studentId: "studentId";
    readonly reportedById: "reportedById";
    readonly incidentDate: "incidentDate";
    readonly category: "category";
    readonly severity: "severity";
    readonly description: "description";
    readonly actionTaken: "actionTaken";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DisciplineIncidentScalarFieldEnum = (typeof DisciplineIncidentScalarFieldEnum)[keyof typeof DisciplineIncidentScalarFieldEnum];
export declare const VisitorScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly branchId: "branchId";
    readonly name: "name";
    readonly phone: "phone";
    readonly purpose: "purpose";
    readonly personToMeet: "personToMeet";
    readonly checkInAt: "checkInAt";
    readonly checkOutAt: "checkOutAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VisitorScalarFieldEnum = (typeof VisitorScalarFieldEnum)[keyof typeof VisitorScalarFieldEnum];
export declare const AlumniScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly studentId: "studentId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly graduationYear: "graduationYear";
    readonly currentOccupation: "currentOccupation";
    readonly contactEmail: "contactEmail";
    readonly contactPhone: "contactPhone";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AlumniScalarFieldEnum = (typeof AlumniScalarFieldEnum)[keyof typeof AlumniScalarFieldEnum];
export declare const DocumentScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly ownerType: "ownerType";
    readonly ownerId: "ownerId";
    readonly title: "title";
    readonly fileUrl: "fileUrl";
    readonly fileName: "fileName";
    readonly mimeType: "mimeType";
    readonly fileSize: "fileSize";
    readonly uploadedById: "uploadedById";
    readonly createdAt: "createdAt";
};
export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>;
export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>;
export type EnumAcademicStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AcademicStatus'>;
export type ListEnumAcademicStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AcademicStatus[]'>;
export type EnumGuardianRelationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GuardianRelation'>;
export type ListEnumGuardianRelationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GuardianRelation[]'>;
export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>;
export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>;
export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>;
export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>;
export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>;
export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type EnumFeeFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeeFrequency'>;
export type ListEnumFeeFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeeFrequency[]'>;
export type EnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType'>;
export type ListEnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType[]'>;
export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>;
export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>;
export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>;
export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>;
export type EnumPayslipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayslipStatus'>;
export type ListEnumPayslipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayslipStatus[]'>;
export type EnumExpenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseStatus'>;
export type ListEnumExpenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseStatus[]'>;
export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>;
export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>;
export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>;
export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>;
export type EnumAdmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdmissionStatus'>;
export type ListEnumAdmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdmissionStatus[]'>;
export type EnumBookIssueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookIssueStatus'>;
export type ListEnumBookIssueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookIssueStatus[]'>;
export type EnumAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetStatus'>;
export type ListEnumAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetStatus[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus'>;
export type ListEnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus[]'>;
export type EnumDisciplineSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisciplineSeverity'>;
export type ListEnumDisciplineSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisciplineSeverity[]'>;
export type EnumDocumentOwnerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentOwnerType'>;
export type ListEnumDocumentOwnerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentOwnerType[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    school?: Prisma.SchoolOmit;
    branch?: Prisma.BranchOmit;
    academicYear?: Prisma.AcademicYearOmit;
    user?: Prisma.UserOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
    auditLog?: Prisma.AuditLogOmit;
    class?: Prisma.ClassOmit;
    section?: Prisma.SectionOmit;
    subject?: Prisma.SubjectOmit;
    classSubject?: Prisma.ClassSubjectOmit;
    subjectTeacher?: Prisma.SubjectTeacherOmit;
    teacher?: Prisma.TeacherOmit;
    teacherQualification?: Prisma.TeacherQualificationOmit;
    staff?: Prisma.StaffOmit;
    customRole?: Prisma.CustomRoleOmit;
    rolePermission?: Prisma.RolePermissionOmit;
    student?: Prisma.StudentOmit;
    guardian?: Prisma.GuardianOmit;
    studentGuardian?: Prisma.StudentGuardianOmit;
    studentAttendance?: Prisma.StudentAttendanceOmit;
    teacherAttendance?: Prisma.TeacherAttendanceOmit;
    period?: Prisma.PeriodOmit;
    timetableEntry?: Prisma.TimetableEntryOmit;
    schoolEvent?: Prisma.SchoolEventOmit;
    feeHead?: Prisma.FeeHeadOmit;
    feeStructure?: Prisma.FeeStructureOmit;
    studentDiscount?: Prisma.StudentDiscountOmit;
    invoice?: Prisma.InvoiceOmit;
    invoiceItem?: Prisma.InvoiceItemOmit;
    payment?: Prisma.PaymentOmit;
    salaryStructure?: Prisma.SalaryStructureOmit;
    payslip?: Prisma.PayslipOmit;
    expenseCategory?: Prisma.ExpenseCategoryOmit;
    vendor?: Prisma.VendorOmit;
    expense?: Prisma.ExpenseOmit;
    room?: Prisma.RoomOmit;
    examType?: Prisma.ExamTypeOmit;
    exam?: Prisma.ExamOmit;
    examSchedule?: Prisma.ExamScheduleOmit;
    gradeScale?: Prisma.GradeScaleOmit;
    mark?: Prisma.MarkOmit;
    assignment?: Prisma.AssignmentOmit;
    assignmentSubmission?: Prisma.AssignmentSubmissionOmit;
    announcement?: Prisma.AnnouncementOmit;
    notification?: Prisma.NotificationOmit;
    admission?: Prisma.AdmissionOmit;
    book?: Prisma.BookOmit;
    bookIssue?: Prisma.BookIssueOmit;
    vehicle?: Prisma.VehicleOmit;
    route?: Prisma.RouteOmit;
    routeStop?: Prisma.RouteStopOmit;
    studentTransport?: Prisma.StudentTransportOmit;
    hostel?: Prisma.HostelOmit;
    hostelRoom?: Prisma.HostelRoomOmit;
    hostelAllocation?: Prisma.HostelAllocationOmit;
    assetCategory?: Prisma.AssetCategoryOmit;
    asset?: Prisma.AssetOmit;
    leaveType?: Prisma.LeaveTypeOmit;
    leaveGroup?: Prisma.LeaveGroupOmit;
    leaveGroupAllocation?: Prisma.LeaveGroupAllocationOmit;
    leaveRequest?: Prisma.LeaveRequestOmit;
    disciplineIncident?: Prisma.DisciplineIncidentOmit;
    visitor?: Prisma.VisitorOmit;
    alumni?: Prisma.AlumniOmit;
    document?: Prisma.DocumentOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
