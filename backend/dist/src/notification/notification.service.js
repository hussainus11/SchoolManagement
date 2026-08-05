"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NotificationService = class NotificationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async notifyStudentGuardians(schoolId, studentId, type, title, body, link) {
        const links = await this.prisma.studentGuardian.findMany({
            where: { studentId, guardian: { userId: { not: null } } },
            include: { guardian: true }
        });
        const userIds = links
            .map((l) => l.guardian.userId)
            .filter((id) => id !== null);
        if (userIds.length === 0)
            return;
        await this.prisma.notification.createMany({
            data: userIds.map((userId) => ({ schoolId, userId, type, title, body, link }))
        });
    }
    findForUser(schoolId, userId, unreadOnly) {
        return this.prisma.notification.findMany({
            where: { schoolId, userId, isRead: unreadOnly ? false : undefined },
            orderBy: { createdAt: "desc" },
            take: 50
        });
    }
    unreadCount(schoolId, userId) {
        return this.prisma.notification.count({ where: { schoolId, userId, isRead: false } });
    }
    async markRead(schoolId, userId, id) {
        const notification = await this.prisma.notification.findFirst({ where: { id, schoolId, userId } });
        if (!notification)
            throw new common_1.NotFoundException("Notification not found");
        return this.prisma.notification.update({ where: { id }, data: { isRead: true } });
    }
    async markAllRead(schoolId, userId) {
        await this.prisma.notification.updateMany({
            where: { schoolId, userId, isRead: false },
            data: { isRead: true }
        });
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map