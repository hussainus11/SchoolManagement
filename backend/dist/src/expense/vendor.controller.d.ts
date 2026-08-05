import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateVendorDto } from "./dto/create-vendor.dto";
import { VendorService } from "./vendor.service";
export declare class VendorController {
    private readonly vendorService;
    constructor(vendorService: VendorService);
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        email: string | null;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }[]>;
    create(user: JwtPayload, dto: CreateVendorDto): import("../../generated/prisma/models").Prisma__VendorClient<{
        id: string;
        name: string;
        email: string | null;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(user: JwtPayload, id: string, dto: CreateVendorDto): Promise<{
        id: string;
        name: string;
        email: string | null;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }>;
}
