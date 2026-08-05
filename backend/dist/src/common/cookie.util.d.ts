import type { Request, Response } from "express";
export declare const REFRESH_COOKIE_NAME: string;
export declare function setRefreshCookie(res: Response, token: string, expiresAt: Date): void;
export declare function clearRefreshCookie(res: Response): void;
export declare function getRefreshCookie(req: Request): string | undefined;
