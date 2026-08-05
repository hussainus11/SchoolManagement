import { Role } from "../../generated/prisma/client";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { AssignClassTeacherDto } from "./dto/assign-class-teacher.dto";
import { AssignSubjectTeacherDto } from "./dto/assign-subject-teacher.dto";
import { CreateSectionDto } from "./dto/create-section.dto";
import { UpdateSectionDto } from "./dto/update-section.dto";
import { SectionService } from "./section.service";
export declare class SectionController {
    private readonly sectionService;
    constructor(sectionService: SectionService);
    findAll(user: JwtPayload, classId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        classTeacher: ({
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
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        capacity: number | null;
        classTeacherId: string | null;
    })[]>;
    findOne(user: JwtPayload, id: string): Promise<{
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
        subjectTeachers: ({
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
            subjectId: string;
            sectionId: string;
            teacherId: string;
        })[];
        classTeacher: ({
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
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        capacity: number | null;
        classTeacherId: string | null;
    }>;
    create(user: JwtPayload, dto: CreateSectionDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        capacity: number | null;
        classTeacherId: string | null;
    }>;
    update(user: JwtPayload, id: string, dto: UpdateSectionDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        capacity: number | null;
        classTeacherId: string | null;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
    assignClassTeacher(user: JwtPayload, id: string, dto: AssignClassTeacherDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        capacity: number | null;
        classTeacherId: string | null;
    }>;
    addSubjectTeacher(user: JwtPayload, id: string, dto: AssignSubjectTeacherDto): Promise<{
        id: string;
        createdAt: Date;
        subjectId: string;
        sectionId: string;
        teacherId: string;
    }>;
    removeSubjectTeacher(user: JwtPayload, id: string, subjectId: string): Promise<void>;
}
