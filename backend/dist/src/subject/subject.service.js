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
exports.SubjectService = void 0;
const common_1 = require("@nestjs/common");
const image_upload_util_1 = require("../common/image-upload.util");
const prisma_service_1 = require("../prisma/prisma.service");
let SubjectService = class SubjectService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllForSchool(schoolId) {
        return this.prisma.subject.findMany({ where: { schoolId }, orderBy: { name: "asc" } });
    }
    async findOneForSchool(schoolId, id) {
        const subject = await this.prisma.subject.findFirst({ where: { id, schoolId } });
        if (!subject)
            throw new common_1.NotFoundException("Subject not found");
        return subject;
    }
    create(schoolId, data) {
        return this.prisma.subject.create({ data: { ...data, schoolId } });
    }
    async update(schoolId, id, data) {
        await this.findOneForSchool(schoolId, id);
        return this.prisma.subject.update({ where: { id }, data });
    }
    async remove(schoolId, id) {
        const subject = await this.findOneForSchool(schoolId, id);
        await this.prisma.subjectTeacher.deleteMany({ where: { subjectId: id } });
        await this.prisma.classSubject.deleteMany({ where: { subjectId: id } });
        await this.prisma.subject.delete({ where: { id } });
        (0, image_upload_util_1.deleteUploadedFile)(subject.imageUrl);
    }
    async setImage(schoolId, id, imageUrl) {
        const subject = await this.findOneForSchool(schoolId, id);
        (0, image_upload_util_1.deleteUploadedFile)(subject.imageUrl);
        return this.prisma.subject.update({ where: { id }, data: { imageUrl } });
    }
    async removeImage(schoolId, id) {
        const subject = await this.findOneForSchool(schoolId, id);
        (0, image_upload_util_1.deleteUploadedFile)(subject.imageUrl);
        return this.prisma.subject.update({ where: { id }, data: { imageUrl: null } });
    }
};
exports.SubjectService = SubjectService;
exports.SubjectService = SubjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubjectService);
//# sourceMappingURL=subject.service.js.map