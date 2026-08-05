import { SetMetadata } from "@nestjs/common";

export const SKIP_PASSWORD_CHECK_KEY = "skipPasswordCheck";

/** Exempts a handler from MustChangePasswordGuard — use for the endpoint that lets a user
 *  holding a mustChangePassword session actually change their password. */
export const SkipPasswordCheck = () => SetMetadata(SKIP_PASSWORD_CHECK_KEY, true);
