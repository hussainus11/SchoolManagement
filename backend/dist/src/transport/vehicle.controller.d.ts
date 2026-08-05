import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";
import { VehicleService } from "./vehicle.service";
export declare class VehicleController {
    private readonly vehicleService;
    constructor(vehicleService: VehicleService);
    findAll(user: JwtPayload, branchId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    create(user: JwtPayload, dto: CreateVehicleDto): Promise<{
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
    update(user: JwtPayload, id: string, dto: CreateVehicleDto): Promise<{
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
    remove(user: JwtPayload, id: string): Promise<void>;
}
