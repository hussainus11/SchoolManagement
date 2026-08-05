import { PrismaService } from "../prisma/prisma.service";
import { CreateDiscountDto } from "./dto/create-discount.dto";
export declare class StudentDiscountService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findForStudent(schoolId: string, studentId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        feeHead: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        } | null;
    } & {
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        type: import("../../generated/prisma/enums").DiscountType;
        feeHeadId: string | null;
        value: import("@prisma/client-runtime-utils").Decimal;
        reason: string | null;
    })[]>;
    create(schoolId: string, dto: CreateDiscountDto): Promise<{
        feeHead: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        } | null;
    } & {
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        type: import("../../generated/prisma/enums").DiscountType;
        feeHeadId: string | null;
        value: import("@prisma/client-runtime-utils").Decimal;
        reason: string | null;
    }>;
    deactivate(schoolId: string, id: string): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        type: import("../../generated/prisma/enums").DiscountType;
        feeHeadId: string | null;
        value: import("@prisma/client-runtime-utils").Decimal;
        reason: string | null;
    }>;
}
