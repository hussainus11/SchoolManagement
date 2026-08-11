import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AcademicYearModule } from './academic-year/academic-year.module';
import { AuditModule } from './audit/audit.module';
import { AuditInterceptor } from './audit/audit.interceptor';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { MustChangePasswordGuard } from './auth/guards/must-change-password.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { BranchModule } from './branch/branch.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { SchoolModule } from './school/school.module';
import { UsersModule } from './users/users.module';
import { ClassModule } from './class/class.module';
import { SectionModule } from './section/section.module';
import { SubjectModule } from './subject/subject.module';
import { TeacherModule } from './teacher/teacher.module';
import { StaffModule } from './staff/staff.module';
import { StudentModule } from './student/student.module';
import { GuardianModule } from './guardian/guardian.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PeriodModule } from './period/period.module';
import { TimetableModule } from './timetable/timetable.module';
import { EventModule } from './event/event.module';
import { FeeModule } from './fee/fee.module';
import { PayrollModule } from './payroll/payroll.module';
import { ExpenseModule } from './expense/expense.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { ExamModule } from './exam/exam.module';
import { MarksModule } from './marks/marks.module';
import { HomeworkModule } from './homework/homework.module';
import { NotificationModule } from './notification/notification.module';
import { AdmissionModule } from './admission/admission.module';
import { PortalModule } from './portal/portal.module';
import { ReportsModule } from './reports/reports.module';
import { LibraryModule } from './library/library.module';
import { TransportModule } from './transport/transport.module';
import { HostelModule } from './hostel/hostel.module';
import { InventoryModule } from './inventory/inventory.module';
import { LeaveModule } from './leave/leave.module';
import { DisciplineModule } from './discipline/discipline.module';
import { VisitorModule } from './visitor/visitor.module';
import { AlumniModule } from './alumni/alumni.module';
import { DocumentModule } from './document/document.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomRoleModule } from './custom-role/custom-role.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    PrismaModule,
    AuditModule,
    UsersModule,
    AuthModule,
    SchoolModule,
    BranchModule,
    AcademicYearModule,
    OnboardingModule,
    ClassModule,
    SectionModule,
    SubjectModule,
    TeacherModule,
    StaffModule,
    StudentModule,
    GuardianModule,
    AttendanceModule,
    PeriodModule,
    TimetableModule,
    EventModule,
    FeeModule,
    PayrollModule,
    ExpenseModule,
    SchedulerModule,
    ExamModule,
    MarksModule,
    HomeworkModule,
    NotificationModule,
    AdmissionModule,
    PortalModule,
    ReportsModule,
    LibraryModule,
    TransportModule,
    HostelModule,
    InventoryModule,
    LeaveModule,
    DisciplineModule,
    VisitorModule,
    AlumniModule,
    DocumentModule,
    DashboardModule,
    CustomRoleModule,
    WhatsappModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: MustChangePasswordGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_INTERCEPTOR, useClass: AuditInterceptor },
  ],
})
export class AppModule {}
