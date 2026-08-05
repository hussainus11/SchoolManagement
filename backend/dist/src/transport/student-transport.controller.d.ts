import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AssignTransportDto } from "./dto/assign-transport.dto";
import { StudentTransportService } from "./student-transport.service";
export declare class StudentTransportController {
    private readonly studentTransportService;
    constructor(studentTransportService: StudentTransportService);
    findAll(user: JwtPayload, routeId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        student: {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            firstName: string;
            lastName: string;
            deletedAt: Date | null;
            userId: string | null;
            sectionId: string | null;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            admissionNumber: string;
            bloodGroup: string | null;
            admissionDate: Date;
            academicStatus: import("../../generated/prisma/enums").AcademicStatus;
        };
        route: {
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
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            vehicleId: string;
        };
        stop: {
            id: string;
            name: string;
            createdAt: Date;
            order: number;
            routeId: string;
            fee: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        routeId: string;
        stopId: string;
    })[]>;
    assign(user: JwtPayload, dto: AssignTransportDto): Promise<{
        student: {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            firstName: string;
            lastName: string;
            deletedAt: Date | null;
            userId: string | null;
            sectionId: string | null;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            admissionNumber: string;
            bloodGroup: string | null;
            admissionDate: Date;
            academicStatus: import("../../generated/prisma/enums").AcademicStatus;
        };
        route: {
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
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            vehicleId: string;
        };
        stop: {
            id: string;
            name: string;
            createdAt: Date;
            order: number;
            routeId: string;
            fee: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        routeId: string;
        stopId: string;
    }>;
    remove(user: JwtPayload, studentId: string): Promise<void>;
}
