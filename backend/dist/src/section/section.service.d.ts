import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
export declare class SectionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForClass(schoolId: string, classId: string): Prisma.PrismaPromise<({
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
                role: import("../../generated/prisma/enums").Role;
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
    findOneForSchool(schoolId: string, id: string): Promise<{
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
                    role: import("../../generated/prisma/enums").Role;
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
                role: import("../../generated/prisma/enums").Role;
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
    private assertClassInSchool;
    create(schoolId: string, data: {
        classId: string;
        name: string;
        capacity?: number;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        capacity: number | null;
        classTeacherId: string | null;
    }>;
    update(schoolId: string, id: string, data: Prisma.SectionUpdateInput): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        capacity: number | null;
        classTeacherId: string | null;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
    assignClassTeacher(schoolId: string, id: string, teacherId: string | null | undefined): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        capacity: number | null;
        classTeacherId: string | null;
    }>;
    addSubjectTeacher(schoolId: string, sectionId: string, subjectId: string, teacherId: string): Promise<{
        id: string;
        createdAt: Date;
        subjectId: string;
        sectionId: string;
        teacherId: string;
    }>;
    removeSubjectTeacher(schoolId: string, sectionId: string, subjectId: string): Promise<void>;
}
