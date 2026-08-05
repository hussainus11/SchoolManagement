import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateStudentLoginDto } from "./dto/create-student-login.dto";
import { CreateStudentDto } from "./dto/create-student.dto";
import { LinkGuardianDto } from "./dto/link-guardian.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { StudentService } from "./student.service";
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    findAll(user: JwtPayload, branchId?: string, sectionId?: string, search?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        section: ({
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
        }) | null;
        guardians: ({
            guardian: {
                id: string;
                email: string | null;
                phone: string | null;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
                firstName: string;
                lastName: string;
                userId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            studentId: string;
            guardianId: string;
            relation: import("../../generated/prisma/enums").GuardianRelation;
            isPrimary: boolean;
        })[];
    } & {
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
    })[]>;
    findOne(user: JwtPayload, id: string): Promise<{
        section: ({
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
        }) | null;
        guardians: ({
            guardian: {
                id: string;
                email: string | null;
                phone: string | null;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
                firstName: string;
                lastName: string;
                userId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            studentId: string;
            guardianId: string;
            relation: import("../../generated/prisma/enums").GuardianRelation;
            isPrimary: boolean;
        })[];
    } & {
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
    }>;
    create(user: JwtPayload, dto: CreateStudentDto): Promise<{
        section: ({
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
        }) | null;
    } & {
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
    }>;
    update(user: JwtPayload, id: string, dto: UpdateStudentDto): Promise<{
        section: ({
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
        }) | null;
        guardians: ({
            guardian: {
                id: string;
                email: string | null;
                phone: string | null;
                createdAt: Date;
                updatedAt: Date;
                schoolId: string;
                firstName: string;
                lastName: string;
                userId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            studentId: string;
            guardianId: string;
            relation: import("../../generated/prisma/enums").GuardianRelation;
            isPrimary: boolean;
        })[];
    } & {
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
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
    linkGuardian(user: JwtPayload, id: string, guardianId: string, dto: LinkGuardianDto): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        guardianId: string;
        relation: import("../../generated/prisma/enums").GuardianRelation;
        isPrimary: boolean;
    }>;
    unlinkGuardian(user: JwtPayload, id: string, guardianId: string): Promise<void>;
    createLogin(user: JwtPayload, id: string, dto: CreateStudentLoginDto): Promise<{
        userId: string;
        email: string;
        tempPassword: string;
    }>;
    uploadPhoto(user: JwtPayload, id: string, file: Express.Multer.File): Promise<{
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
    }>;
    removePhoto(user: JwtPayload, id: string): Promise<{
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
    }>;
}
