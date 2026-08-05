import { PrismaService } from "../prisma/prisma.service";
import { CreateLeaveGroupDto } from "./dto/create-leave-group.dto";
import { UpdateLeaveGroupDto } from "./dto/update-leave-group.dto";
export declare class LeaveGroupService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        _count: {
            staff: number;
            teachers: number;
        };
        allocations: ({
            leaveType: {
                id: string;
                name: string;
                createdAt: Date;
                schoolId: string;
            };
        } & {
            id: string;
            leaveGroupId: string;
            leaveTypeId: string;
            daysPerYear: number;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    })[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        allocations: ({
            leaveType: {
                id: string;
                name: string;
                createdAt: Date;
                schoolId: string;
            };
        } & {
            id: string;
            leaveGroupId: string;
            leaveTypeId: string;
            daysPerYear: number;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }>;
    private assertLeaveTypesBelongToSchool;
    create(schoolId: string, dto: CreateLeaveGroupDto): Promise<{
        allocations: ({
            leaveType: {
                id: string;
                name: string;
                createdAt: Date;
                schoolId: string;
            };
        } & {
            id: string;
            leaveGroupId: string;
            leaveTypeId: string;
            daysPerYear: number;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }>;
    update(schoolId: string, id: string, dto: UpdateLeaveGroupDto): Promise<{
        allocations: ({
            leaveType: {
                id: string;
                name: string;
                createdAt: Date;
                schoolId: string;
            };
        } & {
            id: string;
            leaveGroupId: string;
            leaveTypeId: string;
            daysPerYear: number;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
