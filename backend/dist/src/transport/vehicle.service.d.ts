import { PrismaService } from "../prisma/prisma.service";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";
export declare class VehicleService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, branchId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        capacity: number | null;
        registrationNumber: string;
        driverName: string | null;
        driverPhone: string | null;
    }[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        capacity: number | null;
        registrationNumber: string;
        driverName: string | null;
        driverPhone: string | null;
    }>;
    private assertBranchInSchool;
    create(schoolId: string, dto: CreateVehicleDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        capacity: number | null;
        registrationNumber: string;
        driverName: string | null;
        driverPhone: string | null;
    }>;
    update(schoolId: string, id: string, dto: CreateVehicleDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        capacity: number | null;
        registrationNumber: string;
        driverName: string | null;
        driverPhone: string | null;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
