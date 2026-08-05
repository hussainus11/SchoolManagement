import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
export declare class SchoolService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Prisma.Prisma__SchoolClient<{
        id: string;
        name: string;
        slug: string;
        email: string | null;
        phone: string | null;
        address: string | null;
        logoUrl: string | null;
        idCardBackgroundColor: string;
        idCardForegroundColor: string;
        idCardBackgroundImageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    findByIdOrThrow(id: string): Promise<{
        id: string;
        name: string;
        slug: string;
        email: string | null;
        phone: string | null;
        address: string | null;
        logoUrl: string | null;
        idCardBackgroundColor: string;
        idCardForegroundColor: string;
        idCardBackgroundImageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: Prisma.SchoolUpdateInput): Prisma.Prisma__SchoolClient<{
        id: string;
        name: string;
        slug: string;
        email: string | null;
        phone: string | null;
        address: string | null;
        logoUrl: string | null;
        idCardBackgroundColor: string;
        idCardForegroundColor: string;
        idCardBackgroundImageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    private deleteUploadedFile;
    setIdCardBackgroundImage(id: string, imageUrl: string): Promise<{
        id: string;
        name: string;
        slug: string;
        email: string | null;
        phone: string | null;
        address: string | null;
        logoUrl: string | null;
        idCardBackgroundColor: string;
        idCardForegroundColor: string;
        idCardBackgroundImageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeIdCardBackgroundImage(id: string): Promise<{
        id: string;
        name: string;
        slug: string;
        email: string | null;
        phone: string | null;
        address: string | null;
        logoUrl: string | null;
        idCardBackgroundColor: string;
        idCardForegroundColor: string;
        idCardBackgroundImageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    setLogo(id: string, logoUrl: string): Promise<{
        id: string;
        name: string;
        slug: string;
        email: string | null;
        phone: string | null;
        address: string | null;
        logoUrl: string | null;
        idCardBackgroundColor: string;
        idCardForegroundColor: string;
        idCardBackgroundImageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    removeLogo(id: string): Promise<{
        id: string;
        name: string;
        slug: string;
        email: string | null;
        phone: string | null;
        address: string | null;
        logoUrl: string | null;
        idCardBackgroundColor: string;
        idCardForegroundColor: string;
        idCardBackgroundImageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createWithinTransaction(tx: Prisma.TransactionClient, data: {
        name: string;
        slug: string;
        email?: string;
        phone?: string;
    }): Promise<{
        id: string;
        name: string;
        slug: string;
        email: string | null;
        phone: string | null;
        address: string | null;
        logoUrl: string | null;
        idCardBackgroundColor: string;
        idCardForegroundColor: string;
        idCardBackgroundImageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
