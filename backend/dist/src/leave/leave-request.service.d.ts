import { LeaveStatus, Role } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateLeaveRequestDto } from "./dto/create-leave-request.dto";
export declare class LeaveRequestService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, filters: {
        teacherId?: string;
        staffId?: string;
        status?: LeaveStatus;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        teacher: ({
            user: {
                id: string;
                email: string;
                phone: string | null;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string | null;
                branchId: string | null;
                firstName: string;
                lastName: string;
                role: Role;
                mustChangePassword: boolean;
                lastLoginAt: Date | null;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            deletedAt: Date | null;
            userId: string;
            customRoleId: string | null;
            leaveGroupId: string | null;
            employeeCode: string;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            joiningDate: Date;
            emergencyPhone: string | null;
        }) | null;
        staff: ({
            user: {
                id: string;
                email: string;
                phone: string | null;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string | null;
                branchId: string | null;
                firstName: string;
                lastName: string;
                role: Role;
                mustChangePassword: boolean;
                lastLoginAt: Date | null;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            deletedAt: Date | null;
            userId: string;
            customRoleId: string | null;
            leaveGroupId: string | null;
            employeeCode: string;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            joiningDate: Date;
            emergencyPhone: string | null;
            designation: string;
        }) | null;
        leaveType: {
            id: string;
            name: string;
            createdAt: Date;
            schoolId: string;
        };
        approvedBy: {
            id: string;
            email: string;
            phone: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string | null;
            branchId: string | null;
            firstName: string;
            lastName: string;
            role: Role;
            mustChangePassword: boolean;
            lastLoginAt: Date | null;
            deletedAt: Date | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        teacherId: string | null;
        status: LeaveStatus;
        reason: string | null;
        approvedById: string | null;
        approvedAt: Date | null;
        leaveTypeId: string;
        staffId: string | null;
        isHalfDay: boolean;
        dayCount: number;
    })[]>;
    private resolvePerson;
    create(schoolId: string, userId: string, role: Role, dto: CreateLeaveRequestDto): Promise<{
        teacher: ({
            user: {
                id: string;
                email: string;
                phone: string | null;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string | null;
                branchId: string | null;
                firstName: string;
                lastName: string;
                role: Role;
                mustChangePassword: boolean;
                lastLoginAt: Date | null;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            deletedAt: Date | null;
            userId: string;
            customRoleId: string | null;
            leaveGroupId: string | null;
            employeeCode: string;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            joiningDate: Date;
            emergencyPhone: string | null;
        }) | null;
        staff: ({
            user: {
                id: string;
                email: string;
                phone: string | null;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string | null;
                branchId: string | null;
                firstName: string;
                lastName: string;
                role: Role;
                mustChangePassword: boolean;
                lastLoginAt: Date | null;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            deletedAt: Date | null;
            userId: string;
            customRoleId: string | null;
            leaveGroupId: string | null;
            employeeCode: string;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            joiningDate: Date;
            emergencyPhone: string | null;
            designation: string;
        }) | null;
        leaveType: {
            id: string;
            name: string;
            createdAt: Date;
            schoolId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        teacherId: string | null;
        status: LeaveStatus;
        reason: string | null;
        approvedById: string | null;
        approvedAt: Date | null;
        leaveTypeId: string;
        staffId: string | null;
        isHalfDay: boolean;
        dayCount: number;
    }>;
    private assertPending;
    approve(schoolId: string, id: string, approvedById: string): Promise<{
        teacher: ({
            user: {
                id: string;
                email: string;
                phone: string | null;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string | null;
                branchId: string | null;
                firstName: string;
                lastName: string;
                role: Role;
                mustChangePassword: boolean;
                lastLoginAt: Date | null;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            deletedAt: Date | null;
            userId: string;
            customRoleId: string | null;
            leaveGroupId: string | null;
            employeeCode: string;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            joiningDate: Date;
            emergencyPhone: string | null;
        }) | null;
        staff: ({
            user: {
                id: string;
                email: string;
                phone: string | null;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string | null;
                branchId: string | null;
                firstName: string;
                lastName: string;
                role: Role;
                mustChangePassword: boolean;
                lastLoginAt: Date | null;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            deletedAt: Date | null;
            userId: string;
            customRoleId: string | null;
            leaveGroupId: string | null;
            employeeCode: string;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            joiningDate: Date;
            emergencyPhone: string | null;
            designation: string;
        }) | null;
        leaveType: {
            id: string;
            name: string;
            createdAt: Date;
            schoolId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        teacherId: string | null;
        status: LeaveStatus;
        reason: string | null;
        approvedById: string | null;
        approvedAt: Date | null;
        leaveTypeId: string;
        staffId: string | null;
        isHalfDay: boolean;
        dayCount: number;
    }>;
    reject(schoolId: string, id: string, approvedById: string): Promise<{
        teacher: ({
            user: {
                id: string;
                email: string;
                phone: string | null;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string | null;
                branchId: string | null;
                firstName: string;
                lastName: string;
                role: Role;
                mustChangePassword: boolean;
                lastLoginAt: Date | null;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            deletedAt: Date | null;
            userId: string;
            customRoleId: string | null;
            leaveGroupId: string | null;
            employeeCode: string;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            joiningDate: Date;
            emergencyPhone: string | null;
        }) | null;
        staff: ({
            user: {
                id: string;
                email: string;
                phone: string | null;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string | null;
                branchId: string | null;
                firstName: string;
                lastName: string;
                role: Role;
                mustChangePassword: boolean;
                lastLoginAt: Date | null;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            deletedAt: Date | null;
            userId: string;
            customRoleId: string | null;
            leaveGroupId: string | null;
            employeeCode: string;
            photoUrl: string | null;
            gender: import("../../generated/prisma/enums").Gender | null;
            dateOfBirth: Date | null;
            joiningDate: Date;
            emergencyPhone: string | null;
            designation: string;
        }) | null;
        leaveType: {
            id: string;
            name: string;
            createdAt: Date;
            schoolId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        teacherId: string | null;
        status: LeaveStatus;
        reason: string | null;
        approvedById: string | null;
        approvedAt: Date | null;
        leaveTypeId: string;
        staffId: string | null;
        isHalfDay: boolean;
        dayCount: number;
    }>;
    cancel(schoolId: string, userId: string, role: Role, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        startDate: Date;
        endDate: Date;
        teacherId: string | null;
        status: LeaveStatus;
        reason: string | null;
        approvedById: string | null;
        approvedAt: Date | null;
        leaveTypeId: string;
        staffId: string | null;
        isHalfDay: boolean;
        dayCount: number;
    }>;
    getBalance(schoolId: string, params: {
        teacherId?: string;
        staffId?: string;
    }): Promise<{
        leaveGroup: null;
        balances: never[];
    } | {
        leaveGroup: {
            id: string;
            name: string;
        };
        balances: {
            leaveTypeId: string;
            leaveTypeName: string;
            daysPerYear: number;
            used: number;
            remaining: number;
        }[];
    }>;
}
