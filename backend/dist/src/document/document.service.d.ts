import { DocumentOwnerType } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateDocumentDto } from "./dto/create-document.dto";
interface UploadedFileMeta {
    url: string;
    originalName: string;
    mimeType: string;
    size: number;
}
export declare class DocumentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForOwner(schoolId: string, ownerType: DocumentOwnerType, ownerId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        uploadedBy: {
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
        createdAt: Date;
        schoolId: string;
        title: string;
        ownerType: DocumentOwnerType;
        ownerId: string;
        fileUrl: string;
        fileName: string;
        mimeType: string;
        fileSize: number;
        uploadedById: string;
    })[]>;
    private assertOwnerInSchool;
    private deleteUploadedFile;
    create(schoolId: string, uploadedById: string, dto: CreateDocumentDto, file: UploadedFileMeta): Promise<{
        uploadedBy: {
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
        createdAt: Date;
        schoolId: string;
        title: string;
        ownerType: DocumentOwnerType;
        ownerId: string;
        fileUrl: string;
        fileName: string;
        mimeType: string;
        fileSize: number;
        uploadedById: string;
    }>;
    remove(schoolId: string, id: string): Promise<void>;
}
export {};
