import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateDiscountDto } from "./dto/create-discount.dto";
import { StudentDiscountService } from "./student-discount.service";
export declare class StudentDiscountController {
    private readonly discountService;
    constructor(discountService: StudentDiscountService);
    findForStudent(user: JwtPayload, studentId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    create(user: JwtPayload, dto: CreateDiscountDto): Promise<{
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
    deactivate(user: JwtPayload, id: string): Promise<{
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
