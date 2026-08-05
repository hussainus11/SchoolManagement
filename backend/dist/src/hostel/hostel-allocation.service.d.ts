import { PrismaService } from "../prisma/prisma.service";
import { AllocateHostelDto } from "./dto/allocate-hostel.dto";
export declare class HostelAllocationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, filters: {
        roomId?: string;
        active?: boolean;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        room: {
            hostel: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
                branchId: string;
                wardenName: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            capacity: number;
            hostelId: string;
            roomNumber: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        roomId: string;
        bedNumber: number | null;
        allocatedDate: Date;
        vacatedDate: Date | null;
    })[]>;
    allocate(schoolId: string, dto: AllocateHostelDto): Promise<{
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
        room: {
            hostel: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
                branchId: string;
                wardenName: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            capacity: number;
            hostelId: string;
            roomNumber: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        roomId: string;
        bedNumber: number | null;
        allocatedDate: Date;
        vacatedDate: Date | null;
    }>;
    vacate(schoolId: string, id: string): Promise<{
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
        room: {
            hostel: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
                branchId: string;
                wardenName: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            capacity: number;
            hostelId: string;
            roomNumber: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        roomId: string;
        bedNumber: number | null;
        allocatedDate: Date;
        vacatedDate: Date | null;
    }>;
}
