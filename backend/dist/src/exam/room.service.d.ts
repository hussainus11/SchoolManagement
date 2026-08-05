import { PrismaService } from "../prisma/prisma.service";
import { CreateRoomDto } from "./dto/create-room.dto";
export declare class RoomService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, branchId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        capacity: number | null;
    }[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        capacity: number | null;
    }>;
    private assertBranchInSchool;
    create(schoolId: string, dto: CreateRoomDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        capacity: number | null;
    }>;
    update(schoolId: string, id: string, dto: CreateRoomDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        capacity: number | null;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
