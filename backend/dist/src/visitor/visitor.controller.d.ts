import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateVisitorDto } from "./dto/create-visitor.dto";
import { VisitorService } from "./visitor.service";
export declare class VisitorController {
    private readonly visitorService;
    constructor(visitorService: VisitorService);
    findAll(user: JwtPayload, branchId?: string, active?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    checkIn(user: JwtPayload, dto: CreateVisitorDto): Promise<{
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
    checkOut(user: JwtPayload, id: string): Promise<{
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
