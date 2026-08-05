import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreatePeriodDto } from "./dto/create-period.dto";
import { UpdatePeriodDto } from "./dto/update-period.dto";
import { PeriodService } from "./period.service";
export declare class PeriodController {
    private readonly periodService;
    constructor(periodService: PeriodService);
    findAll(user: JwtPayload, branchId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        order: number;
        startTime: string;
        endTime: string;
    }[]>;
    create(user: JwtPayload, dto: CreatePeriodDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        order: number;
        startTime: string;
        endTime: string;
    }>;
    update(user: JwtPayload, id: string, dto: UpdatePeriodDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        order: number;
        startTime: string;
        endTime: string;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
