import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { DashboardService } from "./dashboard.service";
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getSummary(user: JwtPayload, branchId?: string): Promise<{
        totalStudents: number;
        passingStudents: number;
        currentSuccessRate: number;
        previousSuccessRate: number;
        attendanceBreakdown: {
            present: number;
            absent: number;
            late: number;
        };
        activityRate: number;
        attendanceRateBar: number;
        feeCollectionRateBar: number;
        inProgressCount: number;
        completedCount: number;
        topStudents: {
            id: string;
            name: string;
            percentage: number;
        }[];
        feeCollectionByMonth: {
            period: string;
            collected: number;
        }[];
        recentAssignments: {
            id: string;
            title: string;
            subject: string;
            className: string;
            submissionRate: number;
            gradingRate: number;
        }[];
    }>;
}
