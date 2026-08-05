import { Role } from "../../../generated/prisma/client";
export interface JwtPayload {
    sub: string;
    role: Role;
    schoolId: string | null;
    branchId: string | null;
    customRoleId?: string | null;
    permissions?: string[];
    mustChangePassword?: boolean;
}
