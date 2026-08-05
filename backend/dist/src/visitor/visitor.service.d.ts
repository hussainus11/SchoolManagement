import { PrismaService } from "../prisma/prisma.service";
import { CreateVisitorDto } from "./dto/create-visitor.dto";
export declare class VisitorService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, filters: {
        branchId?: string;
        active?: boolean;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        purpose: string;
        personToMeet: string | null;
        checkInAt: Date;
        checkOutAt: Date | null;
    }[]>;
    checkIn(schoolId: string, dto: CreateVisitorDto): Promise<{
        id: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        purpose: string;
        personToMeet: string | null;
        checkInAt: Date;
        checkOutAt: Date | null;
    }>;
    checkOut(schoolId: string, id: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        purpose: string;
        personToMeet: string | null;
        checkInAt: Date;
        checkOutAt: Date | null;
    }>;
}
