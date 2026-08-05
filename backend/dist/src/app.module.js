"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const core_1 = require("@nestjs/core");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const academic_year_module_1 = require("./academic-year/academic-year.module");
const audit_module_1 = require("./audit/audit.module");
const audit_interceptor_1 = require("./audit/audit.interceptor");
const auth_module_1 = require("./auth/auth.module");
const jwt_auth_guard_1 = require("./auth/guards/jwt-auth.guard");
const must_change_password_guard_1 = require("./auth/guards/must-change-password.guard");
const roles_guard_1 = require("./auth/guards/roles.guard");
const branch_module_1 = require("./branch/branch.module");
const onboarding_module_1 = require("./onboarding/onboarding.module");
const school_module_1 = require("./school/school.module");
const users_module_1 = require("./users/users.module");
const class_module_1 = require("./class/class.module");
const section_module_1 = require("./section/section.module");
const subject_module_1 = require("./subject/subject.module");
const teacher_module_1 = require("./teacher/teacher.module");
const staff_module_1 = require("./staff/staff.module");
const student_module_1 = require("./student/student.module");
const guardian_module_1 = require("./guardian/guardian.module");
const attendance_module_1 = require("./attendance/attendance.module");
const period_module_1 = require("./period/period.module");
const timetable_module_1 = require("./timetable/timetable.module");
const event_module_1 = require("./event/event.module");
const fee_module_1 = require("./fee/fee.module");
const payroll_module_1 = require("./payroll/payroll.module");
const expense_module_1 = require("./expense/expense.module");
const scheduler_module_1 = require("./scheduler/scheduler.module");
const exam_module_1 = require("./exam/exam.module");
const marks_module_1 = require("./marks/marks.module");
const homework_module_1 = require("./homework/homework.module");
const notification_module_1 = require("./notification/notification.module");
const admission_module_1 = require("./admission/admission.module");
const portal_module_1 = require("./portal/portal.module");
const reports_module_1 = require("./reports/reports.module");
const library_module_1 = require("./library/library.module");
const transport_module_1 = require("./transport/transport.module");
const hostel_module_1 = require("./hostel/hostel.module");
const inventory_module_1 = require("./inventory/inventory.module");
const leave_module_1 = require("./leave/leave.module");
const discipline_module_1 = require("./discipline/discipline.module");
const visitor_module_1 = require("./visitor/visitor.module");
const alumni_module_1 = require("./alumni/alumni.module");
const document_module_1 = require("./document/document.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const custom_role_module_1 = require("./custom-role/custom-role.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            schedule_1.ScheduleModule.forRoot(),
            prisma_module_1.PrismaModule,
            audit_module_1.AuditModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            school_module_1.SchoolModule,
            branch_module_1.BranchModule,
            academic_year_module_1.AcademicYearModule,
            onboarding_module_1.OnboardingModule,
            class_module_1.ClassModule,
            section_module_1.SectionModule,
            subject_module_1.SubjectModule,
            teacher_module_1.TeacherModule,
            staff_module_1.StaffModule,
            student_module_1.StudentModule,
            guardian_module_1.GuardianModule,
            attendance_module_1.AttendanceModule,
            period_module_1.PeriodModule,
            timetable_module_1.TimetableModule,
            event_module_1.EventModule,
            fee_module_1.FeeModule,
            payroll_module_1.PayrollModule,
            expense_module_1.ExpenseModule,
            scheduler_module_1.SchedulerModule,
            exam_module_1.ExamModule,
            marks_module_1.MarksModule,
            homework_module_1.HomeworkModule,
            notification_module_1.NotificationModule,
            admission_module_1.AdmissionModule,
            portal_module_1.PortalModule,
            reports_module_1.ReportsModule,
            library_module_1.LibraryModule,
            transport_module_1.TransportModule,
            hostel_module_1.HostelModule,
            inventory_module_1.InventoryModule,
            leave_module_1.LeaveModule,
            discipline_module_1.DisciplineModule,
            visitor_module_1.VisitorModule,
            alumni_module_1.AlumniModule,
            document_module_1.DocumentModule,
            dashboard_module_1.DashboardModule,
            custom_role_module_1.CustomRoleModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_GUARD, useClass: jwt_auth_guard_1.JwtAuthGuard },
            { provide: core_1.APP_GUARD, useClass: must_change_password_guard_1.MustChangePasswordGuard },
            { provide: core_1.APP_GUARD, useClass: roles_guard_1.RolesGuard },
            { provide: core_1.APP_INTERCEPTOR, useClass: audit_interceptor_1.AuditInterceptor },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map