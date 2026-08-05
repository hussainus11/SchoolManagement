import { Module } from "@nestjs/common";
import { AcademicYearModule } from "../academic-year/academic-year.module";
import { AuditModule } from "../audit/audit.module";
import { AuthModule } from "../auth/auth.module";
import { BranchModule } from "../branch/branch.module";
import { SchoolModule } from "../school/school.module";
import { UsersModule } from "../users/users.module";
import { OnboardingController } from "./onboarding.controller";
import { OnboardingService } from "./onboarding.service";

@Module({
  imports: [SchoolModule, BranchModule, AcademicYearModule, UsersModule, AuthModule, AuditModule],
  controllers: [OnboardingController],
  providers: [OnboardingService]
})
export class OnboardingModule {}
