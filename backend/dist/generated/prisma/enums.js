"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentOwnerType = exports.DisciplineSeverity = exports.AssetStatus = exports.LeaveStatus = exports.BookIssueStatus = exports.AdmissionStatus = exports.NotificationType = exports.SubmissionStatus = exports.ExpenseStatus = exports.PayslipStatus = exports.DiscountType = exports.PaymentMethod = exports.InvoiceStatus = exports.FeeFrequency = exports.EventType = exports.DayOfWeek = exports.AttendanceStatus = exports.GuardianRelation = exports.AcademicStatus = exports.Gender = exports.Role = void 0;
exports.Role = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    SCHOOL_ADMIN: 'SCHOOL_ADMIN',
    BRANCH_ADMIN: 'BRANCH_ADMIN',
    TEACHER: 'TEACHER',
    ACCOUNTANT: 'ACCOUNTANT',
    STAFF: 'STAFF',
    PARENT: 'PARENT',
    STUDENT: 'STUDENT'
};
exports.Gender = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
    OTHER: 'OTHER'
};
exports.AcademicStatus = {
    ACTIVE: 'ACTIVE',
    GRADUATED: 'GRADUATED',
    TRANSFERRED: 'TRANSFERRED',
    WITHDRAWN: 'WITHDRAWN'
};
exports.GuardianRelation = {
    FATHER: 'FATHER',
    MOTHER: 'MOTHER',
    GUARDIAN: 'GUARDIAN',
    OTHER: 'OTHER'
};
exports.AttendanceStatus = {
    PRESENT: 'PRESENT',
    ABSENT: 'ABSENT',
    LATE: 'LATE',
    EXCUSED: 'EXCUSED',
    HALF_DAY: 'HALF_DAY'
};
exports.DayOfWeek = {
    MONDAY: 'MONDAY',
    TUESDAY: 'TUESDAY',
    WEDNESDAY: 'WEDNESDAY',
    THURSDAY: 'THURSDAY',
    FRIDAY: 'FRIDAY',
    SATURDAY: 'SATURDAY',
    SUNDAY: 'SUNDAY'
};
exports.EventType = {
    HOLIDAY: 'HOLIDAY',
    EXAM: 'EXAM',
    MEETING: 'MEETING',
    ACTIVITY: 'ACTIVITY',
    OTHER: 'OTHER'
};
exports.FeeFrequency = {
    MONTHLY: 'MONTHLY',
    QUARTERLY: 'QUARTERLY',
    ANNUAL: 'ANNUAL',
    ONE_TIME: 'ONE_TIME'
};
exports.InvoiceStatus = {
    PENDING: 'PENDING',
    PARTIALLY_PAID: 'PARTIALLY_PAID',
    PAID: 'PAID',
    OVERDUE: 'OVERDUE',
    CANCELLED: 'CANCELLED'
};
exports.PaymentMethod = {
    CASH: 'CASH',
    BANK_TRANSFER: 'BANK_TRANSFER',
    CARD: 'CARD',
    CHEQUE: 'CHEQUE',
    ONLINE: 'ONLINE'
};
exports.DiscountType = {
    PERCENTAGE: 'PERCENTAGE',
    FIXED: 'FIXED'
};
exports.PayslipStatus = {
    DRAFT: 'DRAFT',
    FINALIZED: 'FINALIZED',
    PAID: 'PAID'
};
exports.ExpenseStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    PAID: 'PAID'
};
exports.SubmissionStatus = {
    PENDING: 'PENDING',
    SUBMITTED: 'SUBMITTED',
    LATE: 'LATE',
    GRADED: 'GRADED'
};
exports.NotificationType = {
    ANNOUNCEMENT: 'ANNOUNCEMENT',
    FEE_DUE: 'FEE_DUE',
    ASSIGNMENT: 'ASSIGNMENT',
    GENERAL: 'GENERAL'
};
exports.AdmissionStatus = {
    INQUIRY: 'INQUIRY',
    APPLIED: 'APPLIED',
    TEST_SCHEDULED: 'TEST_SCHEDULED',
    TEST_COMPLETED: 'TEST_COMPLETED',
    OFFERED: 'OFFERED',
    ENROLLED: 'ENROLLED',
    REJECTED: 'REJECTED',
    WITHDRAWN: 'WITHDRAWN'
};
exports.BookIssueStatus = {
    ISSUED: 'ISSUED',
    RETURNED: 'RETURNED',
    LOST: 'LOST'
};
exports.LeaveStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    CANCELLED: 'CANCELLED'
};
exports.AssetStatus = {
    IN_USE: 'IN_USE',
    IN_STORAGE: 'IN_STORAGE',
    UNDER_REPAIR: 'UNDER_REPAIR',
    DISPOSED: 'DISPOSED'
};
exports.DisciplineSeverity = {
    MINOR: 'MINOR',
    MODERATE: 'MODERATE',
    MAJOR: 'MAJOR'
};
exports.DocumentOwnerType = {
    TEACHER: 'TEACHER',
    STUDENT: 'STUDENT',
    STAFF: 'STAFF'
};
//# sourceMappingURL=enums.js.map