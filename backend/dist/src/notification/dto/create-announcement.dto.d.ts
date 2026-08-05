import { Role } from "../../../generated/prisma/client";
export declare class CreateAnnouncementDto {
    branchId?: string;
    title: string;
    body: string;
    targetRoles: Role[];
}
