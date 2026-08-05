import { PrismaService } from "../prisma/prisma.service";
import { CreateAlumniDto } from "./dto/create-alumni.dto";
export declare class AlumniService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, search?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        firstName: string;
        lastName: string;
        studentId: string | null;
        notes: string | null;
        graduationYear: number;
        currentOccupation: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
    }[]>;
    create(schoolId: string, dto: CreateAlumniDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        firstName: string;
        lastName: string;
        studentId: string | null;
        notes: string | null;
        graduationYear: number;
        currentOccupation: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
    }>;
    update(schoolId: string, id: string, dto: CreateAlumniDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        firstName: string;
        lastName: string;
        studentId: string | null;
        notes: string | null;
        graduationYear: number;
        currentOccupation: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
