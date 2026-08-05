import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AlumniService } from "./alumni.service";
import { CreateAlumniDto } from "./dto/create-alumni.dto";
export declare class AlumniController {
    private readonly alumniService;
    constructor(alumniService: AlumniService);
    findAll(user: JwtPayload, search?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    create(user: JwtPayload, dto: CreateAlumniDto): Promise<{
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
    update(user: JwtPayload, id: string, dto: CreateAlumniDto): Promise<{
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
    remove(user: JwtPayload, id: string): Promise<void>;
}
