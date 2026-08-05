import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { ReportsService } from "./reports.service";
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    attendanceSummary(user: JwtPayload, branchId?: string, sectionId?: string, startDate?: string, endDate?: string): Promise<{
        studentId: string;
        firstName: string;
        lastName: string;
        present: number;
        total: number;
        percentage: number;
    }[] | {
        sectionId: string;
        className: string;
        sectionName: string;
        present: number;
        total: number;
        percentage: number;
    }[]>;
    feeCollection(user: JwtPayload, branchId?: string): Promise<{
        period: string;
        invoiced: number;
        collected: number;
        outstanding: number;
    }[]>;
    examPerformance(user: JwtPayload, examId: string): Promise<{
        subjectId: string;
        subjectName: string;
        totalEntered: number;
        totalAbsent: number;
        passed: number;
        passRate: number;
        averagePercentage: number;
    }[]>;
}
