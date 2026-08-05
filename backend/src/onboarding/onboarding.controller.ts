import { Body, Controller, HttpCode, HttpStatus, Post, Req, Res } from "@nestjs/common";
import type { Request, Response } from "express";
import { Public } from "../auth/decorators/public.decorator";
import { setRefreshCookie } from "../common/cookie.util";
import { OnboardSchoolDto } from "./dto/onboard-school.dto";
import { OnboardingService } from "./onboarding.service";

@Controller("onboarding")
export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) {}

  @Public()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async onboard(
    @Body() dto: OnboardSchoolDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const { school, tokens, user } = await this.onboardingService.onboard(dto, {
      userAgent: req.headers["user-agent"] as string | undefined,
      ipAddress: req.ip
    });

    setRefreshCookie(res, tokens.refreshToken, tokens.refreshTokenExpiresAt);
    return { school, accessToken: tokens.accessToken, user };
  }
}
