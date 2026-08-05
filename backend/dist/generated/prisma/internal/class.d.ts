import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get school(): Prisma.SchoolDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get branch(): Prisma.BranchDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get academicYear(): Prisma.AcademicYearDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get class(): Prisma.ClassDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get section(): Prisma.SectionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get subject(): Prisma.SubjectDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get classSubject(): Prisma.ClassSubjectDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get subjectTeacher(): Prisma.SubjectTeacherDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get teacher(): Prisma.TeacherDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get teacherQualification(): Prisma.TeacherQualificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get staff(): Prisma.StaffDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customRole(): Prisma.CustomRoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get student(): Prisma.StudentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get guardian(): Prisma.GuardianDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get studentGuardian(): Prisma.StudentGuardianDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get studentAttendance(): Prisma.StudentAttendanceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get teacherAttendance(): Prisma.TeacherAttendanceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get period(): Prisma.PeriodDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get timetableEntry(): Prisma.TimetableEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get schoolEvent(): Prisma.SchoolEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get feeHead(): Prisma.FeeHeadDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get feeStructure(): Prisma.FeeStructureDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get studentDiscount(): Prisma.StudentDiscountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get invoice(): Prisma.InvoiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get invoiceItem(): Prisma.InvoiceItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payment(): Prisma.PaymentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get salaryStructure(): Prisma.SalaryStructureDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payslip(): Prisma.PayslipDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get expenseCategory(): Prisma.ExpenseCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get vendor(): Prisma.VendorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get expense(): Prisma.ExpenseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get room(): Prisma.RoomDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get examType(): Prisma.ExamTypeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get exam(): Prisma.ExamDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get examSchedule(): Prisma.ExamScheduleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get gradeScale(): Prisma.GradeScaleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mark(): Prisma.MarkDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get assignment(): Prisma.AssignmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get assignmentSubmission(): Prisma.AssignmentSubmissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get announcement(): Prisma.AnnouncementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get admission(): Prisma.AdmissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get book(): Prisma.BookDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get bookIssue(): Prisma.BookIssueDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get vehicle(): Prisma.VehicleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get route(): Prisma.RouteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get routeStop(): Prisma.RouteStopDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get studentTransport(): Prisma.StudentTransportDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get hostel(): Prisma.HostelDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get hostelRoom(): Prisma.HostelRoomDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get hostelAllocation(): Prisma.HostelAllocationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get assetCategory(): Prisma.AssetCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get asset(): Prisma.AssetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get leaveType(): Prisma.LeaveTypeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get leaveGroup(): Prisma.LeaveGroupDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get leaveGroupAllocation(): Prisma.LeaveGroupAllocationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get leaveRequest(): Prisma.LeaveRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get disciplineIncident(): Prisma.DisciplineIncidentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get visitor(): Prisma.VisitorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get alumni(): Prisma.AlumniDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get document(): Prisma.DocumentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
