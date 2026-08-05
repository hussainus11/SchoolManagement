import { Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
interface AuditEntry {
    schoolId?: string | null;
    userId?: string | null;
    action: string;
    entityType: string;
    entityId?: string | null;
    before?: Prisma.InputJsonValue;
    after?: Prisma.InputJsonValue;
}
export declare class AuditService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    log(entry: AuditEntry): Prisma.Prisma__AuditLogClient<{
        id: string;
        createdAt: Date;
        schoolId: string | null;
        userId: string | null;
        action: string;
        entityType: string;
        entityId: string | null;
        before: import("@prisma/client/runtime/client").JsonValue | null;
        after: import("@prisma/client/runtime/client").JsonValue | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
}
export {};
