import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { UpdateSchoolDto } from "./dto/update-school.dto";
import { SchoolService } from "./school.service";
export declare class SchoolController {
    private readonly schoolService;
    constructor(schoolService: SchoolService);
    getMySchool(user: JwtPayload): Promise<{
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
    updateMySchool(user: JwtPayload, dto: UpdateSchoolDto): import("../../generated/prisma/models").Prisma__SchoolClient<{
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
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    uploadIdCardBackground(user: JwtPayload, file: Express.Multer.File): Promise<{
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
    removeIdCardBackground(user: JwtPayload): Promise<{
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
    uploadLogo(user: JwtPayload, file: Express.Multer.File): Promise<{
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
    removeLogo(user: JwtPayload): Promise<{
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
