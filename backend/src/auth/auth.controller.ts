import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UnauthorizedException
} from "@nestjs/common";
import type { Request, Response } from "express";
import { clearRefreshCookie, getRefreshCookie, setRefreshCookie } from "../common/cookie.util";
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";
import { CurrentUser } from "./decorators/current-user.decorator";
import { Public } from "./decorators/public.decorator";
import { SkipPasswordCheck } from "./decorators/skip-password-check.decorator";
import { ChangePasswordDto } from "./dto/change-password.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { LoginDto } from "./dto/login.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import type { JwtPayload } from "./types/jwt-payload.type";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Public()
  @Post("login")
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() dto: LoginDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const { tokens, user } = await this.authService.login(dto.email, dto.password, {
      userAgent: req.headers["user-agent"] as string | undefined,
      ipAddress: req.ip
    });
    setRefreshCookie(res, tokens.refreshToken, tokens.refreshTokenExpiresAt);
    return { accessToken: tokens.accessToken, user };
  }

  @Public()
  @Post("refresh")
  @HttpCode(HttpStatus.OK)
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const rawToken = getRefreshCookie(req);
    if (!rawToken) throw new UnauthorizedException("Missing refresh token");

    const { tokens, user } = await this.authService.refresh(rawToken, {
      userAgent: req.headers["user-agent"] as string | undefined,
      ipAddress: req.ip
    });
    setRefreshCookie(res, tokens.refreshToken, tokens.refreshTokenExpiresAt);
    return { accessToken: tokens.accessToken, user };
  }

  @Public()
  @Post("logout")
  @HttpCode(HttpStatus.OK)
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const rawToken = getRefreshCookie(req);
    if (rawToken) await this.authService.logout(rawToken);
    clearRefreshCookie(res);
    return { success: true };
  }

  @Get("me")
  @SkipPasswordCheck()
  async me(@CurrentUser() payload: JwtPayload) {
    const user = await this.usersService.findById(payload.sub);
    if (!user) throw new UnauthorizedException();
    return AuthService.toSafeUser(user);
  }

  @Public()
  @Post("forgot-password")
  @HttpCode(HttpStatus.OK)
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    await this.authService.forgotPassword(dto.email);
    // Always the same response, whether or not the email matched an account.
    return { message: "If an account exists for that email, a reset link has been sent." };
  }

  @Public()
  @Post("reset-password")
  @HttpCode(HttpStatus.OK)
  async resetPassword(
    @Body() dto: ResetPasswordDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const { tokens, user } = await this.authService.resetPassword(dto.token, dto.newPassword, {
      userAgent: req.headers["user-agent"] as string | undefined,
      ipAddress: req.ip
    });
    setRefreshCookie(res, tokens.refreshToken, tokens.refreshTokenExpiresAt);
    return { accessToken: tokens.accessToken, user };
  }

  @Post("change-password")
  @HttpCode(HttpStatus.OK)
  @SkipPasswordCheck()
  async changePassword(
    @CurrentUser() payload: JwtPayload,
    @Body() dto: ChangePasswordDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const { tokens, user } = await this.authService.changePassword(
      payload.sub,
      dto.currentPassword,
      dto.newPassword,
      {
        userAgent: req.headers["user-agent"] as string | undefined,
        ipAddress: req.ip
      }
    );
    setRefreshCookie(res, tokens.refreshToken, tokens.refreshTokenExpiresAt);
    return { accessToken: tokens.accessToken, user };
  }
}
