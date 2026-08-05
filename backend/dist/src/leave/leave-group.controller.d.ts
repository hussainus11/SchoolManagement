import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateLeaveGroupDto } from "./dto/create-leave-group.dto";
import { UpdateLeaveGroupDto } from "./dto/update-leave-group.dto";
import { LeaveGroupService } from "./leave-group.service";
export declare class LeaveGroupController {
    private readonly leaveGroupService;
    constructor(leaveGroupService: LeaveGroupService);
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOne(user: JwtPayload, id: string): Promise<{
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
    create(user: JwtPayload, dto: CreateLeaveGroupDto): Promise<{
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
    update(user: JwtPayload, id: string, dto: UpdateLeaveGroupDto): Promise<{
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
    remove(user: JwtPayload, id: string): Promise<void>;
}
