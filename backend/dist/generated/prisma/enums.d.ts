export declare const Role: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly SCHOOL_ADMIN: "SCHOOL_ADMIN";
    readonly BRANCH_ADMIN: "BRANCH_ADMIN";
    readonly TEACHER: "TEACHER";
    readonly ACCOUNTANT: "ACCOUNTANT";
    readonly STAFF: "STAFF";
    readonly PARENT: "PARENT";
    readonly STUDENT: "STUDENT";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Gender: {
    readonly MALE: "MALE";
    readonly FEMALE: "FEMALE";
    readonly OTHER: "OTHER";
};
export type Gender = (typeof Gender)[keyof typeof Gender];
export declare const AcademicStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly GRADUATED: "GRADUATED";
    readonly TRANSFERRED: "TRANSFERRED";
    readonly WITHDRAWN: "WITHDRAWN";
};
export type AcademicStatus = (typeof AcademicStatus)[keyof typeof AcademicStatus];
export declare const GuardianRelation: {
    readonly FATHER: "FATHER";
    readonly MOTHER: "MOTHER";
    readonly GUARDIAN: "GUARDIAN";
    readonly OTHER: "OTHER";
};
export type GuardianRelation = (typeof GuardianRelation)[keyof typeof GuardianRelation];
export declare const AttendanceStatus: {
    readonly PRESENT: "PRESENT";
    readonly ABSENT: "ABSENT";
    readonly LATE: "LATE";
    readonly EXCUSED: "EXCUSED";
    readonly HALF_DAY: "HALF_DAY";
};
export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus];
export declare const DayOfWeek: {
    readonly MONDAY: "MONDAY";
    readonly TUESDAY: "TUESDAY";
    readonly WEDNESDAY: "WEDNESDAY";
    readonly THURSDAY: "THURSDAY";
    readonly FRIDAY: "FRIDAY";
    readonly SATURDAY: "SATURDAY";
    readonly SUNDAY: "SUNDAY";
};
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];
export declare const EventType: {
    readonly HOLIDAY: "HOLIDAY";
    readonly EXAM: "EXAM";
    readonly MEETING: "MEETING";
    readonly ACTIVITY: "ACTIVITY";
    readonly OTHER: "OTHER";
};
export type EventType = (typeof EventType)[keyof typeof EventType];
export declare const FeeFrequency: {
    readonly MONTHLY: "MONTHLY";
    readonly QUARTERLY: "QUARTERLY";
    readonly ANNUAL: "ANNUAL";
    readonly ONE_TIME: "ONE_TIME";
};
export type FeeFrequency = (typeof FeeFrequency)[keyof typeof FeeFrequency];
export declare const InvoiceStatus: {
    readonly PENDING: "PENDING";
    readonly PARTIALLY_PAID: "PARTIALLY_PAID";
    readonly PAID: "PAID";
    readonly OVERDUE: "OVERDUE";
    readonly CANCELLED: "CANCELLED";
};
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus];
export declare const PaymentMethod: {
    readonly CASH: "CASH";
    readonly BANK_TRANSFER: "BANK_TRANSFER";
    readonly CARD: "CARD";
    readonly CHEQUE: "CHEQUE";
    readonly ONLINE: "ONLINE";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const DiscountType: {
    readonly PERCENTAGE: "PERCENTAGE";
    readonly FIXED: "FIXED";
};
export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType];
export declare const PayslipStatus: {
    readonly DRAFT: "DRAFT";
    readonly FINALIZED: "FINALIZED";
    readonly PAID: "PAID";
};
export type PayslipStatus = (typeof PayslipStatus)[keyof typeof PayslipStatus];
export declare const ExpenseStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly PAID: "PAID";
};
export type ExpenseStatus = (typeof ExpenseStatus)[keyof typeof ExpenseStatus];
export declare const SubmissionStatus: {
    readonly PENDING: "PENDING";
    readonly SUBMITTED: "SUBMITTED";
    readonly LATE: "LATE";
    readonly GRADED: "GRADED";
};
export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus];
export declare const NotificationType: {
    readonly ANNOUNCEMENT: "ANNOUNCEMENT";
    readonly FEE_DUE: "FEE_DUE";
    readonly ASSIGNMENT: "ASSIGNMENT";
    readonly GENERAL: "GENERAL";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const AdmissionStatus: {
    readonly INQUIRY: "INQUIRY";
    readonly APPLIED: "APPLIED";
    readonly TEST_SCHEDULED: "TEST_SCHEDULED";
    readonly TEST_COMPLETED: "TEST_COMPLETED";
    readonly OFFERED: "OFFERED";
    readonly ENROLLED: "ENROLLED";
    readonly REJECTED: "REJECTED";
    readonly WITHDRAWN: "WITHDRAWN";
};
export type AdmissionStatus = (typeof AdmissionStatus)[keyof typeof AdmissionStatus];
export declare const BookIssueStatus: {
    readonly ISSUED: "ISSUED";
    readonly RETURNED: "RETURNED";
    readonly LOST: "LOST";
};
export type BookIssueStatus = (typeof BookIssueStatus)[keyof typeof BookIssueStatus];
export declare const LeaveStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly CANCELLED: "CANCELLED";
};
export type LeaveStatus = (typeof LeaveStatus)[keyof typeof LeaveStatus];
export declare const AssetStatus: {
    readonly IN_USE: "IN_USE";
    readonly IN_STORAGE: "IN_STORAGE";
    readonly UNDER_REPAIR: "UNDER_REPAIR";
    readonly DISPOSED: "DISPOSED";
};
export type AssetStatus = (typeof AssetStatus)[keyof typeof AssetStatus];
export declare const DisciplineSeverity: {
    readonly MINOR: "MINOR";
    readonly MODERATE: "MODERATE";
    readonly MAJOR: "MAJOR";
};
export type DisciplineSeverity = (typeof DisciplineSeverity)[keyof typeof DisciplineSeverity];
export declare const DocumentOwnerType: {
    readonly TEACHER: "TEACHER";
    readonly STUDENT: "STUDENT";
    readonly STAFF: "STAFF";
};
export type DocumentOwnerType = (typeof DocumentOwnerType)[keyof typeof DocumentOwnerType];
