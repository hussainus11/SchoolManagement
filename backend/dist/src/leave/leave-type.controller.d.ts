import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { CreateLeaveTypeDto } from "./dto/create-leave-type.dto";
import { LeaveTypeService } from "./leave-type.service";
export declare class LeaveTypeController {
    private readonly leaveTypeService;
    constructor(leaveTypeService: LeaveTypeService);
    findAll(user: JwtPayload): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        schoolId: string;
    }[]>;
    create(user: JwtPayload, dto: CreateLeaveTypeDto): import("../../generated/prisma/models").Prisma__LeaveTypeClient<{
        id: string;
        name: string;
        createdAt: Date;
        schoolId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(user: JwtPayload, id: string): Promise<void>;
}
