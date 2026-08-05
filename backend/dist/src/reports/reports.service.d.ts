import { PrismaService } from "../prisma/prisma.service";
export declare class ReportsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    attendanceSummary(schoolId: string, filters: {
        branchId?: string;
        sectionId?: string;
        startDate?: string;
        endDate?: string;
    }): Promise<{
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
    private groupByStudent;
    private groupBySection;
    feeCollectionSummary(schoolId: string, filters: {
        branchId?: string;
    }): Promise<{
        period: string;
        invoiced: number;
        collected: number;
        outstanding: number;
    }[]>;
    examPerformance(schoolId: string, examId: string): Promise<{
        subjectId: string;
        subjectName: string;
        totalEntered: number;
        totalAbsent: number;
        passed: number;
        passRate: number;
        averagePercentage: number;
    }[]>;
}
