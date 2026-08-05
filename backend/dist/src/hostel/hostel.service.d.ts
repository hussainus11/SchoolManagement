import { PrismaService } from "../prisma/prisma.service";
import { CreateHostelRoomDto } from "./dto/create-hostel-room.dto";
import { CreateHostelDto } from "./dto/create-hostel.dto";
export declare class HostelService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, branchId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOneForSchool(schoolId: string, id: string): Promise<{
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
    private assertBranchInSchool;
    create(schoolId: string, dto: CreateHostelDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        wardenName: string | null;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
    addRoom(schoolId: string, hostelId: string, dto: CreateHostelRoomDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        capacity: number;
        hostelId: string;
        roomNumber: string;
    }>;
    removeRoom(schoolId: string, hostelId: string, roomId: string): Promise<void>;
}
