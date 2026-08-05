import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { ClassService } from "./class.service";
import { AddClassSubjectDto } from "./dto/add-class-subject.dto";
import { CreateClassDto } from "./dto/create-class.dto";
import { UpdateClassDto } from "./dto/update-class.dto";
export declare class ClassController {
    private readonly classService;
    constructor(classService: ClassService);
    findAll(user: JwtPayload, branchId?: string, academicYearId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOne(user: JwtPayload, id: string): Promise<{
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
    create(user: JwtPayload, dto: CreateClassDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        academicYearId: string;
        order: number;
    }>;
    update(user: JwtPayload, id: string, dto: UpdateClassDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        branchId: string;
        academicYearId: string;
        order: number;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
    addSubject(user: JwtPayload, id: string, dto: AddClassSubjectDto): Promise<{
        id: string;
        createdAt: Date;
        classId: string;
        subjectId: string;
    }>;
    removeSubject(user: JwtPayload, id: string, subjectId: string): Promise<void>;
}
