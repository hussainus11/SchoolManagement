import { Role } from "../../generated/prisma/client";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AssignTimetableEntryDto } from "./dto/assign-timetable-entry.dto";
import { TimetableService } from "./timetable.service";
export declare class TimetableController {
    private readonly timetableService;
    constructor(timetableService: TimetableService);
    find(user: JwtPayload, sectionId?: string, teacherId?: string): never[] | import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        period: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            order: number;
            startTime: string;
            endTime: string;
        };
        section: {
            class: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
                branchId: string;
                academicYearId: string;
                order: number;
            };
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            classId: string;
            capacity: number | null;
            classTeacherId: string | null;
        };
        subject: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            code: string;
            imageUrl: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        subjectId: string;
        sectionId: string;
        teacherId: string;
        periodId: string;
        dayOfWeek: import("../../generated/prisma/enums").DayOfWeek;
    })[]> | import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        period: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            order: number;
            startTime: string;
            endTime: string;
        };
        subject: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            code: string;
            imageUrl: string | null;
        };
        teacher: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        subjectId: string;
        sectionId: string;
        teacherId: string;
        periodId: string;
        dayOfWeek: import("../../generated/prisma/enums").DayOfWeek;
    })[]>;
    assign(user: JwtPayload, dto: AssignTimetableEntryDto): Promise<{
        period: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            branchId: string;
            order: number;
            startTime: string;
            endTime: string;
        };
        subject: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            code: string;
            imageUrl: string | null;
        };
        teacher: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        subjectId: string;
        sectionId: string;
        teacherId: string;
        periodId: string;
        dayOfWeek: import("../../generated/prisma/enums").DayOfWeek;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
