import { DocumentOwnerType, Role } from "../../generated/prisma/client";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateDocumentDto } from "./dto/create-document.dto";
import { DocumentService } from "./document.service";
export declare class DocumentController {
    private readonly documentService;
    constructor(documentService: DocumentService);
    findAll(user: JwtPayload, ownerType: DocumentOwnerType, ownerId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
            role: Role;
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
    create(user: JwtPayload, dto: CreateDocumentDto, file: Express.Multer.File): Promise<{
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
            role: Role;
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
    remove(user: JwtPayload, id: string): Promise<void>;
}
