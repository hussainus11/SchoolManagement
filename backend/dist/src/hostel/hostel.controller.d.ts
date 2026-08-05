import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateHostelRoomDto } from "./dto/create-hostel-room.dto";
import { CreateHostelDto } from "./dto/create-hostel.dto";
import { HostelService } from "./hostel.service";
export declare class HostelController {
    private readonly hostelService;
    constructor(hostelService: HostelService);
    findAll(user: JwtPayload, branchId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        rooms: ({
            allocations: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
                studentId: string;
                roomId: string;
                bedNumber: number | null;
                allocatedDate: Date;
                vacatedDate: Date | null;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            capacity: number;
            hostelId: string;
            roomNumber: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        wardenName: string | null;
    })[]>;
    findOne(user: JwtPayload, id: string): Promise<{
        rooms: ({
            allocations: ({
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
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            capacity: number;
            hostelId: string;
            roomNumber: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        wardenName: string | null;
    }>;
    create(user: JwtPayload, dto: CreateHostelDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        wardenName: string | null;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
    addRoom(user: JwtPayload, id: string, dto: CreateHostelRoomDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        capacity: number;
        hostelId: string;
        roomNumber: string;
    }>;
    removeRoom(user: JwtPayload, id: string, roomId: string): Promise<void>;
}
