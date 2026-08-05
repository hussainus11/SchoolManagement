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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const cookie_util_1 = require("../common/cookie.util");
const users_service_1 = require("../users/users.service");
const auth_service_1 = require("./auth.service");
const current_user_decorator_1 = require("./decorators/current-user.decorator");
const public_decorator_1 = require("./decorators/public.decorator");
const skip_password_check_decorator_1 = require("./decorators/skip-password-check.decorator");
const change_password_dto_1 = require("./dto/change-password.dto");
const login_dto_1 = require("./dto/login.dto");
let AuthController = class AuthController {
    authService;
    usersService;
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    async login(dto, req, res) {
        const { tokens, user } = await this.authService.login(dto.email, dto.password, {
            userAgent: req.headers["user-agent"],
            ipAddress: req.ip
        });
        (0, cookie_util_1.setRefreshCookie)(res, tokens.refreshToken, tokens.refreshTokenExpiresAt);
        return { accessToken: tokens.accessToken, user };
    }
    async refresh(req, res) {
        const rawToken = (0, cookie_util_1.getRefreshCookie)(req);
        if (!rawToken)
            throw new common_1.UnauthorizedException("Missing refresh token");
        const { tokens, user } = await this.authService.refresh(rawToken, {
            userAgent: req.headers["user-agent"],
            ipAddress: req.ip
        });
        (0, cookie_util_1.setRefreshCookie)(res, tokens.refreshToken, tokens.refreshTokenExpiresAt);
        return { accessToken: tokens.accessToken, user };
    }
    async logout(req, res) {
        const rawToken = (0, cookie_util_1.getRefreshCookie)(req);
        if (rawToken)
            await this.authService.logout(rawToken);
        (0, cookie_util_1.clearRefreshCookie)(res);
        return { success: true };
    }
    async me(payload) {
        const user = await this.usersService.findById(payload.sub);
        if (!user)
            throw new common_1.UnauthorizedException();
        return auth_service_1.AuthService.toSafeUser(user);
    }
    async changePassword(payload, dto, req, res) {
        const { tokens, user } = await this.authService.changePassword(payload.sub, dto.currentPassword, dto.newPassword, {
            userAgent: req.headers["user-agent"],
            ipAddress: req.ip
        });
        (0, cookie_util_1.setRefreshCookie)(res, tokens.refreshToken, tokens.refreshTokenExpiresAt);
        return { accessToken: tokens.accessToken, user };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("login"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("refresh"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("logout"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)("me"),
    (0, skip_password_check_decorator_1.SkipPasswordCheck)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
__decorate([
    (0, common_1.Post)("change-password"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, skip_password_check_decorator_1.SkipPasswordCheck)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_dto_1.ChangePasswordDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map