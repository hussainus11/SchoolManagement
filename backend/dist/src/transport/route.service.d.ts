import { PrismaService } from "../prisma/prisma.service";
import { CreateRouteStopDto } from "./dto/create-route-stop.dto";
import { CreateRouteDto } from "./dto/create-route.dto";
import { UpdateRouteDto } from "./dto/update-route.dto";
export declare class RouteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        vehicle: {
            id: string;
            schoolId: string;
            createdAt: Date;
            updatedAt: Date;
            branchId: string;
            registrationNumber: string;
            capacity: number | null;
            driverName: string | null;
            driverPhone: string | null;
        };
        stops: {
            id: string;
            name: string;
            createdAt: Date;
            order: number;
            routeId: string;
            fee: import("@prisma/client-runtime-utils").Decimal;
        }[];
    } & {
        id: string;
        schoolId: string;
        vehicleId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        vehicle: {
            id: string;
            schoolId: string;
            createdAt: Date;
            updatedAt: Date;
            branchId: string;
            registrationNumber: string;
            capacity: number | null;
            driverName: string | null;
            driverPhone: string | null;
        };
        stops: {
            id: string;
            name: string;
            createdAt: Date;
            order: number;
            routeId: string;
            fee: import("@prisma/client-runtime-utils").Decimal;
        }[];
    } & {
        id: string;
        schoolId: string;
        vehicleId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private assertVehicleInSchool;
    create(schoolId: string, dto: CreateRouteDto): Promise<{
        vehicle: {
            id: string;
            schoolId: string;
            createdAt: Date;
            updatedAt: Date;
            branchId: string;
            registrationNumber: string;
            capacity: number | null;
            driverName: string | null;
            driverPhone: string | null;
        };
        stops: {
            id: string;
            name: string;
            createdAt: Date;
            order: number;
            routeId: string;
            fee: import("@prisma/client-runtime-utils").Decimal;
        }[];
    } & {
        id: string;
        schoolId: string;
        vehicleId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(schoolId: string, id: string, dto: UpdateRouteDto): Promise<{
        vehicle: {
            id: string;
            schoolId: string;
            createdAt: Date;
            updatedAt: Date;
            branchId: string;
            registrationNumber: string;
            capacity: number | null;
            driverName: string | null;
            driverPhone: string | null;
        };
        stops: {
            id: string;
            name: string;
            createdAt: Date;
            order: number;
            routeId: string;
            fee: import("@prisma/client-runtime-utils").Decimal;
        }[];
    } & {
        id: string;
        schoolId: string;
        vehicleId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
    addStop(schoolId: string, routeId: string, dto: CreateRouteStopDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        order: number;
        routeId: string;
        fee: import("@prisma/client-runtime-utils").Decimal;
    }>;
    removeStop(schoolId: string, routeId: string, stopId: string): Promise<void>;
}
