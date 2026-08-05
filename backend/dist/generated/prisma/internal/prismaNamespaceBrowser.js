"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentSubmissionScalarFieldEnum = exports.AssignmentScalarFieldEnum = exports.MarkScalarFieldEnum = exports.GradeScaleScalarFieldEnum = exports.ExamScheduleScalarFieldEnum = exports.ExamScalarFieldEnum = exports.ExamTypeScalarFieldEnum = exports.RoomScalarFieldEnum = exports.ExpenseScalarFieldEnum = exports.VendorScalarFieldEnum = exports.ExpenseCategoryScalarFieldEnum = exports.PayslipScalarFieldEnum = exports.SalaryStructureScalarFieldEnum = exports.PaymentScalarFieldEnum = exports.InvoiceItemScalarFieldEnum = exports.InvoiceScalarFieldEnum = exports.StudentDiscountScalarFieldEnum = exports.FeeStructureScalarFieldEnum = exports.FeeHeadScalarFieldEnum = exports.SchoolEventScalarFieldEnum = exports.TimetableEntryScalarFieldEnum = exports.PeriodScalarFieldEnum = exports.TeacherAttendanceScalarFieldEnum = exports.StudentAttendanceScalarFieldEnum = exports.StudentGuardianScalarFieldEnum = exports.GuardianScalarFieldEnum = exports.StudentScalarFieldEnum = exports.RolePermissionScalarFieldEnum = exports.CustomRoleScalarFieldEnum = exports.StaffScalarFieldEnum = exports.TeacherQualificationScalarFieldEnum = exports.TeacherScalarFieldEnum = exports.SubjectTeacherScalarFieldEnum = exports.ClassSubjectScalarFieldEnum = exports.SubjectScalarFieldEnum = exports.SectionScalarFieldEnum = exports.ClassScalarFieldEnum = exports.AuditLogScalarFieldEnum = exports.RefreshTokenScalarFieldEnum = exports.UserScalarFieldEnum = exports.AcademicYearScalarFieldEnum = exports.BranchScalarFieldEnum = exports.SchoolScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.DocumentScalarFieldEnum = exports.AlumniScalarFieldEnum = exports.VisitorScalarFieldEnum = exports.DisciplineIncidentScalarFieldEnum = exports.LeaveRequestScalarFieldEnum = exports.LeaveGroupAllocationScalarFieldEnum = exports.LeaveGroupScalarFieldEnum = exports.LeaveTypeScalarFieldEnum = exports.AssetScalarFieldEnum = exports.AssetCategoryScalarFieldEnum = exports.HostelAllocationScalarFieldEnum = exports.HostelRoomScalarFieldEnum = exports.HostelScalarFieldEnum = exports.StudentTransportScalarFieldEnum = exports.RouteStopScalarFieldEnum = exports.RouteScalarFieldEnum = exports.VehicleScalarFieldEnum = exports.BookIssueScalarFieldEnum = exports.BookScalarFieldEnum = exports.AdmissionScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.AnnouncementScalarFieldEnum = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    School: 'School',
    Branch: 'Branch',
    AcademicYear: 'AcademicYear',
    User: 'User',
    RefreshToken: 'RefreshToken',
    AuditLog: 'AuditLog',
    Class: 'Class',
    Section: 'Section',
    Subject: 'Subject',
    ClassSubject: 'ClassSubject',
    SubjectTeacher: 'SubjectTeacher',
    Teacher: 'Teacher',
    TeacherQualification: 'TeacherQualification',
    Staff: 'Staff',
    CustomRole: 'CustomRole',
    RolePermission: 'RolePermission',
    Student: 'Student',
    Guardian: 'Guardian',
    StudentGuardian: 'StudentGuardian',
    StudentAttendance: 'StudentAttendance',
    TeacherAttendance: 'TeacherAttendance',
    Period: 'Period',
    TimetableEntry: 'TimetableEntry',
    SchoolEvent: 'SchoolEvent',
    FeeHead: 'FeeHead',
    FeeStructure: 'FeeStructure',
    StudentDiscount: 'StudentDiscount',
    Invoice: 'Invoice',
    InvoiceItem: 'InvoiceItem',
    Payment: 'Payment',
    SalaryStructure: 'SalaryStructure',
    Payslip: 'Payslip',
    ExpenseCategory: 'ExpenseCategory',
    Vendor: 'Vendor',
    Expense: 'Expense',
    Room: 'Room',
    ExamType: 'ExamType',
    Exam: 'Exam',
    ExamSchedule: 'ExamSchedule',
    GradeScale: 'GradeScale',
    Mark: 'Mark',
    Assignment: 'Assignment',
    AssignmentSubmission: 'AssignmentSubmission',
    Announcement: 'Announcement',
    Notification: 'Notification',
    Admission: 'Admission',
    Book: 'Book',
    BookIssue: 'BookIssue',
    Vehicle: 'Vehicle',
    Route: 'Route',
    RouteStop: 'RouteStop',
    StudentTransport: 'StudentTransport',
    Hostel: 'Hostel',
    HostelRoom: 'HostelRoom',
    HostelAllocation: 'HostelAllocation',
    AssetCategory: 'AssetCategory',
    Asset: 'Asset',
    LeaveType: 'LeaveType',
    LeaveGroup: 'LeaveGroup',
    LeaveGroupAllocation: 'LeaveGroupAllocation',
    LeaveRequest: 'LeaveRequest',
    DisciplineIncident: 'DisciplineIncident',
    Visitor: 'Visitor',
    Alumni: 'Alumni',
    Document: 'Document'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.SchoolScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    phone: 'phone',
    address: 'address',
    logoUrl: 'logoUrl',
    idCardBackgroundColor: 'idCardBackgroundColor',
    idCardForegroundColor: 'idCardForegroundColor',
    idCardBackgroundImageUrl: 'idCardBackgroundImageUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BranchScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    code: 'code',
    address: 'address',
    phone: 'phone',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AcademicYearScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    isCurrent: 'isCurrent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    role: 'role',
    isActive: 'isActive',
    mustChangePassword: 'mustChangePassword',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.RefreshTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    userId: 'userId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    before: 'before',
    after: 'after',
    createdAt: 'createdAt'
};
exports.ClassScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    academicYearId: 'academicYearId',
    name: 'name',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SectionScalarFieldEnum = {
    id: 'id',
    classId: 'classId',
    name: 'name',
    capacity: 'capacity',
    classTeacherId: 'classTeacherId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SubjectScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    code: 'code',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ClassSubjectScalarFieldEnum = {
    id: 'id',
    classId: 'classId',
    subjectId: 'subjectId',
    createdAt: 'createdAt'
};
exports.SubjectTeacherScalarFieldEnum = {
    id: 'id',
    sectionId: 'sectionId',
    subjectId: 'subjectId',
    teacherId: 'teacherId',
    createdAt: 'createdAt'
};
exports.TeacherScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    schoolId: 'schoolId',
    branchId: 'branchId',
    customRoleId: 'customRoleId',
    leaveGroupId: 'leaveGroupId',
    employeeCode: 'employeeCode',
    photoUrl: 'photoUrl',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    joiningDate: 'joiningDate',
    address: 'address',
    emergencyPhone: 'emergencyPhone',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.TeacherQualificationScalarFieldEnum = {
    id: 'id',
    teacherId: 'teacherId',
    degree: 'degree',
    institution: 'institution',
    yearCompleted: 'yearCompleted',
    createdAt: 'createdAt'
};
exports.StaffScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    schoolId: 'schoolId',
    branchId: 'branchId',
    customRoleId: 'customRoleId',
    leaveGroupId: 'leaveGroupId',
    employeeCode: 'employeeCode',
    designation: 'designation',
    photoUrl: 'photoUrl',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    joiningDate: 'joiningDate',
    address: 'address',
    emergencyPhone: 'emergencyPhone',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.CustomRoleScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    allowLogin: 'allowLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RolePermissionScalarFieldEnum = {
    id: 'id',
    customRoleId: 'customRoleId',
    resource: 'resource'
};
exports.StudentScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    schoolId: 'schoolId',
    branchId: 'branchId',
    sectionId: 'sectionId',
    admissionNumber: 'admissionNumber',
    firstName: 'firstName',
    lastName: 'lastName',
    photoUrl: 'photoUrl',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    bloodGroup: 'bloodGroup',
    address: 'address',
    admissionDate: 'admissionDate',
    academicStatus: 'academicStatus',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.GuardianScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.StudentGuardianScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    guardianId: 'guardianId',
    relation: 'relation',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt'
};
exports.StudentAttendanceScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    academicYearId: 'academicYearId',
    sectionId: 'sectionId',
    studentId: 'studentId',
    date: 'date',
    status: 'status',
    remarks: 'remarks',
    markedById: 'markedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TeacherAttendanceScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    academicYearId: 'academicYearId',
    teacherId: 'teacherId',
    date: 'date',
    status: 'status',
    remarks: 'remarks',
    markedById: 'markedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PeriodScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    name: 'name',
    startTime: 'startTime',
    endTime: 'endTime',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TimetableEntryScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    sectionId: 'sectionId',
    periodId: 'periodId',
    dayOfWeek: 'dayOfWeek',
    subjectId: 'subjectId',
    teacherId: 'teacherId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SchoolEventScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    title: 'title',
    description: 'description',
    location: 'location',
    type: 'type',
    startDate: 'startDate',
    endDate: 'endDate',
    isAllDay: 'isAllDay',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.FeeHeadScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.FeeStructureScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    classId: 'classId',
    feeHeadId: 'feeHeadId',
    academicYearId: 'academicYearId',
    amount: 'amount',
    frequency: 'frequency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.StudentDiscountScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    studentId: 'studentId',
    feeHeadId: 'feeHeadId',
    type: 'type',
    value: 'value',
    reason: 'reason',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.InvoiceScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    studentId: 'studentId',
    academicYearId: 'academicYearId',
    invoiceNumber: 'invoiceNumber',
    period: 'period',
    issueDate: 'issueDate',
    dueDate: 'dueDate',
    subtotal: 'subtotal',
    discountTotal: 'discountTotal',
    total: 'total',
    amountPaid: 'amountPaid',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.InvoiceItemScalarFieldEnum = {
    id: 'id',
    invoiceId: 'invoiceId',
    feeHeadId: 'feeHeadId',
    amount: 'amount',
    discount: 'discount',
    createdAt: 'createdAt'
};
exports.PaymentScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    invoiceId: 'invoiceId',
    amount: 'amount',
    method: 'method',
    reference: 'reference',
    paidAt: 'paidAt',
    recordedById: 'recordedById',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
};
exports.SalaryStructureScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    userId: 'userId',
    basicSalary: 'basicSalary',
    allowances: 'allowances',
    fixedDeductions: 'fixedDeductions',
    effectiveFrom: 'effectiveFrom',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PayslipScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    userId: 'userId',
    salaryStructureId: 'salaryStructureId',
    month: 'month',
    basicSalary: 'basicSalary',
    allowances: 'allowances',
    attendanceDeduction: 'attendanceDeduction',
    otherDeductions: 'otherDeductions',
    netSalary: 'netSalary',
    status: 'status',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.ExpenseCategoryScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    createdAt: 'createdAt'
};
exports.VendorScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ExpenseScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    categoryId: 'categoryId',
    vendorId: 'vendorId',
    description: 'description',
    amount: 'amount',
    expenseDate: 'expenseDate',
    status: 'status',
    requestedById: 'requestedById',
    approvedById: 'approvedById',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.RoomScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    name: 'name',
    capacity: 'capacity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ExamTypeScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ExamScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    academicYearId: 'academicYearId',
    examTypeId: 'examTypeId',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ExamScheduleScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    examId: 'examId',
    classId: 'classId',
    subjectId: 'subjectId',
    roomId: 'roomId',
    examDate: 'examDate',
    startTime: 'startTime',
    endTime: 'endTime',
    maxMarks: 'maxMarks',
    passMarks: 'passMarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.GradeScaleScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    grade: 'grade',
    minPercentage: 'minPercentage',
    maxPercentage: 'maxPercentage',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MarkScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    examScheduleId: 'examScheduleId',
    studentId: 'studentId',
    marksObtained: 'marksObtained',
    isAbsent: 'isAbsent',
    remarks: 'remarks',
    enteredById: 'enteredById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AssignmentScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    sectionId: 'sectionId',
    subjectId: 'subjectId',
    teacherId: 'teacherId',
    title: 'title',
    description: 'description',
    assignedDate: 'assignedDate',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.AssignmentSubmissionScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    assignmentId: 'assignmentId',
    studentId: 'studentId',
    status: 'status',
    submissionText: 'submissionText',
    submittedAt: 'submittedAt',
    marksObtained: 'marksObtained',
    feedback: 'feedback',
    gradedById: 'gradedById',
    gradedAt: 'gradedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AnnouncementScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    title: 'title',
    body: 'body',
    targetRoles: 'targetRoles',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    userId: 'userId',
    announcementId: 'announcementId',
    type: 'type',
    title: 'title',
    body: 'body',
    link: 'link',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
exports.AdmissionScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    applicantFirstName: 'applicantFirstName',
    applicantLastName: 'applicantLastName',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    gradeAppliedFor: 'gradeAppliedFor',
    guardianName: 'guardianName',
    guardianPhone: 'guardianPhone',
    guardianEmail: 'guardianEmail',
    source: 'source',
    status: 'status',
    testScore: 'testScore',
    testDate: 'testDate',
    offeredSectionId: 'offeredSectionId',
    notes: 'notes',
    convertedStudentId: 'convertedStudentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BookScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    title: 'title',
    author: 'author',
    isbn: 'isbn',
    category: 'category',
    totalCopies: 'totalCopies',
    availableCopies: 'availableCopies',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BookIssueScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    bookId: 'bookId',
    studentId: 'studentId',
    teacherId: 'teacherId',
    issueDate: 'issueDate',
    dueDate: 'dueDate',
    returnDate: 'returnDate',
    status: 'status',
    fineAmount: 'fineAmount',
    issuedById: 'issuedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.VehicleScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    registrationNumber: 'registrationNumber',
    capacity: 'capacity',
    driverName: 'driverName',
    driverPhone: 'driverPhone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RouteScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    vehicleId: 'vehicleId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RouteStopScalarFieldEnum = {
    id: 'id',
    routeId: 'routeId',
    name: 'name',
    order: 'order',
    fee: 'fee',
    createdAt: 'createdAt'
};
exports.StudentTransportScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    studentId: 'studentId',
    routeId: 'routeId',
    stopId: 'stopId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.HostelScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    name: 'name',
    wardenName: 'wardenName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.HostelRoomScalarFieldEnum = {
    id: 'id',
    hostelId: 'hostelId',
    roomNumber: 'roomNumber',
    capacity: 'capacity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.HostelAllocationScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    roomId: 'roomId',
    studentId: 'studentId',
    bedNumber: 'bedNumber',
    allocatedDate: 'allocatedDate',
    vacatedDate: 'vacatedDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AssetCategoryScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    createdAt: 'createdAt'
};
exports.AssetScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    categoryId: 'categoryId',
    name: 'name',
    serialNumber: 'serialNumber',
    purchaseDate: 'purchaseDate',
    purchaseCost: 'purchaseCost',
    status: 'status',
    assignedToTeacherId: 'assignedToTeacherId',
    location: 'location',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LeaveTypeScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    createdAt: 'createdAt'
};
exports.LeaveGroupScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LeaveGroupAllocationScalarFieldEnum = {
    id: 'id',
    leaveGroupId: 'leaveGroupId',
    leaveTypeId: 'leaveTypeId',
    daysPerYear: 'daysPerYear'
};
exports.LeaveRequestScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    teacherId: 'teacherId',
    staffId: 'staffId',
    leaveTypeId: 'leaveTypeId',
    startDate: 'startDate',
    endDate: 'endDate',
    isHalfDay: 'isHalfDay',
    dayCount: 'dayCount',
    reason: 'reason',
    status: 'status',
    approvedById: 'approvedById',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.DisciplineIncidentScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    studentId: 'studentId',
    reportedById: 'reportedById',
    incidentDate: 'incidentDate',
    category: 'category',
    severity: 'severity',
    description: 'description',
    actionTaken: 'actionTaken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.VisitorScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    branchId: 'branchId',
    name: 'name',
    phone: 'phone',
    purpose: 'purpose',
    personToMeet: 'personToMeet',
    checkInAt: 'checkInAt',
    checkOutAt: 'checkOutAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AlumniScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    studentId: 'studentId',
    firstName: 'firstName',
    lastName: 'lastName',
    graduationYear: 'graduationYear',
    currentOccupation: 'currentOccupation',
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.DocumentScalarFieldEnum = {
    id: 'id',
    schoolId: 'schoolId',
    ownerType: 'ownerType',
    ownerId: 'ownerId',
    title: 'title',
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    mimeType: 'mimeType',
    fileSize: 'fileSize',
    uploadedById: 'uploadedById',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map