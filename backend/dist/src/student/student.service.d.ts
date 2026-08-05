import { PrismaService } from "../prisma/prisma.service";
import { CreateStudentLoginDto } from "./dto/create-student-login.dto";
import { CreateStudentDto } from "./dto/create-student.dto";
import { LinkGuardianDto } from "./dto/link-guardian.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
export declare class StudentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForSchool(schoolId: string, filters: {
        branchId?: string;
        sectionId?: string;
        search?: string;
    }): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOneForSchool(schoolId: string, id: string): Promise<{
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
    private assertBranchInSchool;
    private assertSectionInSchool;
    create(schoolId: string, dto: CreateStudentDto): Promise<{
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
    update(schoolId: string, id: string, dto: UpdateStudentDto): Promise<{
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
    remove(schoolId: string, id: string): Promise<void>;
    setPhoto(schoolId: string, id: string, photoUrl: string): Promise<{
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
    removePhoto(schoolId: string, id: string): Promise<{
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
    linkGuardian(schoolId: string, studentId: string, guardianId: string, dto: LinkGuardianDto): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        guardianId: string;
        relation: import("../../generated/prisma/enums").GuardianRelation;
        isPrimary: boolean;
    }>;
    unlinkGuardian(schoolId: string, studentId: string, guardianId: string): Promise<void>;
    createLogin(schoolId: string, id: string, dto: CreateStudentLoginDto): Promise<{
        userId: string;
        email: string;
        tempPassword: string;
    }>;
}
