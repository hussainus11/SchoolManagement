import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateRouteStopDto } from "./dto/create-route-stop.dto";
import { CreateRouteDto } from "./dto/create-route.dto";
import { UpdateRouteDto } from "./dto/update-route.dto";
import { RouteService } from "./route.service";
export declare class RouteController {
    private readonly routeService;
    constructor(routeService: RouteService);
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        vehicle: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            capacity: number | null;
            registrationNumber: string;
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
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        vehicleId: string;
    })[]>;
    findOne(user: JwtPayload, id: string): Promise<{
        vehicle: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            capacity: number | null;
            registrationNumber: string;
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
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        vehicleId: string;
    }>;
    create(user: JwtPayload, dto: CreateRouteDto): Promise<{
        vehicle: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            capacity: number | null;
            registrationNumber: string;
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
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        vehicleId: string;
    }>;
    update(user: JwtPayload, id: string, dto: UpdateRouteDto): Promise<{
        vehicle: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            capacity: number | null;
            registrationNumber: string;
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
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        vehicleId: string;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
    addStop(user: JwtPayload, id: string, dto: CreateRouteStopDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        order: number;
        routeId: string;
        fee: import("@prisma/client-runtime-utils").Decimal;
    }>;
    removeStop(user: JwtPayload, id: string, stopId: string): Promise<void>;
}
