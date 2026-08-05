"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianService = void 0;
const common_1 = require("@nestjs/common");
const crypto = __importStar(require("node:crypto"));
const client_1 = require("../../generated/prisma/client");
const auth_service_1 = require("../auth/auth.service");
const prisma_service_1 = require("../prisma/prisma.service");
function generateTempPassword() {
    return crypto.randomBytes(9).toString("base64url");
}
let GuardianService = class GuardianService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId, search) {
        return this.prisma.guardian.findMany({
            where: {
                schoolId,
                ...(search
                    ? {
                        OR: [
                            { firstName: { contains: search, mode: "insensitive" } },
                            { lastName: { contains: search, mode: "insensitive" } },
                            { email: { contains: search, mode: "insensitive" } },
                            { phone: { contains: search, mode: "insensitive" } }
                        ]
                    }
                    : {})
            },
            orderBy: { createdAt: "desc" }
        });
    }
    async findOneForSchool(schoolId, id) {
        const guardian = await this.prisma.guardian.findFirst({ where: { id, schoolId } });
        if (!guardian)
            throw new common_1.NotFoundException("Guardian not found");
        return guardian;
    }
    create(schoolId, dto) {
        return this.prisma.guardian.create({ data: { ...dto, schoolId } });
    }
    async createLogin(schoolId, id) {
        const guardian = await this.findOneForSchool(schoolId, id);
        if (guardian.userId)
            throw new common_1.ConflictException("This guardian already has a portal login");
        if (!guardian.email)
            throw new common_1.ConflictException("Guardian must have an email to create a login");
        const existingUser = await this.prisma.user.findUnique({ where: { email: guardian.email } });
        if (existingUser)
            throw new common_1.ConflictException("A user with this email already exists");
        const tempPassword = generateTempPassword();
        const passwordHash = await auth_service_1.AuthService.hashPassword(tempPassword);
        const user = await this.prisma.$transaction(async (tx) => {
            const createdUser = await tx.user.create({
                data: {
                    email: guardian.email,
                    passwordHash,
                    firstName: guardian.firstName,
                    lastName: guardian.lastName,
                    phone: guardian.phone,
                    role: client_1.Role.PARENT,
                    schoolId
                }
            });
            await tx.guardian.update({ where: { id }, data: { userId: createdUser.id } });
            return createdUser;
        });
        return { userId: user.id, email: user.email, tempPassword };
    }
};
exports.GuardianService = GuardianService;
exports.GuardianService = GuardianService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GuardianService);
//# sourceMappingURL=guardian.service.js.map