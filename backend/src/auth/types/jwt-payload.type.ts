import { Role } from "../../../generated/prisma/client";

export interface JwtPayload {
  sub: string;
  role: Role;
  schoolId: string | null;
  branchId: string | null;
  /** Set when the user's Teacher/Staff record has a CustomRole assigned. */
  customRoleId?: string | null;
  /** Resource keys the CustomRole was explicitly granted; additive on top of the fixed `role`. */
  permissions?: string[];
  /** When true, MustChangePasswordGuard blocks every endpoint except /auth/change-password. */
  mustChangePassword?: boolean;
}
