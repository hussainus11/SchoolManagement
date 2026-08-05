import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateRoomDto } from "./dto/create-room.dto";
import { RoomService } from "./room.service";
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    findAll(user: JwtPayload, branchId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        capacity: number | null;
    }[]>;
    create(user: JwtPayload, dto: CreateRoomDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        capacity: number | null;
    }>;
    update(user: JwtPayload, id: string, dto: CreateRoomDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        capacity: number | null;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
