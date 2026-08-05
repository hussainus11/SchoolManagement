import type { Request, Response } from "express";
import { OnboardSchoolDto } from "./dto/onboard-school.dto";
import { OnboardingService } from "./onboarding.service";
export declare class OnboardingController {
    private readonly onboardingService;
    constructor(onboardingService: OnboardingService);
    onboard(dto: OnboardSchoolDto, req: Request, res: Response): Promise<{
        school: any;
        accessToken: string;
        user: {
            id: string;
            email: string;
            phone: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string | null;
            branchId: string | null;
            firstName: string;
            lastName: string;
            role: import("../../generated/prisma/enums").Role;
            mustChangePassword: boolean;
            lastLoginAt: Date | null;
            deletedAt: Date | null;
        };
    }>;
}
