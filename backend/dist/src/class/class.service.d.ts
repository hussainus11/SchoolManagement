import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
export declare class ClassService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, filters: {
        branchId?: string;
        academicYearId?: string;
    }): Prisma.PrismaPromise<({
        sections: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            classId: string;
            capacity: number | null;
            classTeacherId: string | null;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        academicYearId: string;
        order: number;
    })[]>;
    findOneForSchool(schoolId: string, id: string): Promise<{
        sections: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            classId: string;
            capacity: number | null;
            classTeacherId: string | null;
        }[];
        classSubjects: ({
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
            classId: string;
            subjectId: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        academicYearId: string;
        order: number;
    }>;
    private assertBranchInSchool;
    private assertAcademicYearInSchool;
    create(schoolId: string, data: {
        branchId: string;
        academicYearId: string;
        name: string;
        order?: number;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        academicYearId: string;
        order: number;
    }>;
    update(schoolId: string, id: string, data: Prisma.ClassUpdateInput): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        academicYearId: string;
        order: number;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
    addSubject(schoolId: string, classId: string, subjectId: string): Promise<{
        id: string;
        createdAt: Date;
        classId: string;
        subjectId: string;
    }>;
    removeSubject(schoolId: string, classId: string, subjectId: string): Promise<void>;
}
