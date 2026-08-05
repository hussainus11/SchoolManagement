import { PrismaService } from "../prisma/prisma.service";
export declare class DashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private examPassRate;
    getSummary(schoolId: string, branchId?: string): Promise<{
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
