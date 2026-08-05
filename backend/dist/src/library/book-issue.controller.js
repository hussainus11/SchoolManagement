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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookIssueController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const resource_decorator_1 = require("../auth/decorators/resource.decorator");
const audit_decorator_1 = require("../audit/decorators/audit.decorator");
const book_issue_service_1 = require("./book-issue.service");
const issue_book_dto_1 = require("./dto/issue-book.dto");
const return_book_dto_1 = require("./dto/return-book.dto");
let BookIssueController = class BookIssueController {
    bookIssueService;
    constructor(bookIssueService) {
        this.bookIssueService = bookIssueService;
    }
    findAll(user, status, studentId, teacherId) {
        return this.bookIssueService.findAllForSchool(user.schoolId, { status, studentId, teacherId });
    }
    issue(user, dto) {
        return this.bookIssueService.issue(user.schoolId, user.sub, dto);
    }
    returnBook(user, id, dto) {
        return this.bookIssueService.returnBook(user.schoolId, id, dto.fineAmount);
    }
    markLost(user, id, dto) {
        return this.bookIssueService.markLost(user.schoolId, id, dto.fineAmount);
    }
};
exports.BookIssueController = BookIssueController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)("status")),
    __param(2, (0, common_1.Query)("studentId")),
    __param(3, (0, common_1.Query)("teacherId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], BookIssueController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, issue_book_dto_1.IssueBookDto]),
    __metadata("design:returntype", void 0)
], BookIssueController.prototype, "issue", null);
__decorate([
    (0, common_1.Patch)(":id/return"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, return_book_dto_1.ReturnBookDto]),
    __metadata("design:returntype", void 0)
], BookIssueController.prototype, "returnBook", null);
__decorate([
    (0, common_1.Patch)(":id/lost"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, return_book_dto_1.ReturnBookDto]),
    __metadata("design:returntype", void 0)
], BookIssueController.prototype, "markLost", null);
exports.BookIssueController = BookIssueController = __decorate([
    (0, common_1.Controller)("library/issues"),
    (0, audit_decorator_1.Audit)("BookIssue"),
    (0, resource_decorator_1.Resource)("library"),
    (0, roles_decorator_1.Roles)(client_1.Role.SCHOOL_ADMIN, client_1.Role.BRANCH_ADMIN),
    __metadata("design:paramtypes", [book_issue_service_1.BookIssueService])
], BookIssueController);
//# sourceMappingURL=book-issue.controller.js.map