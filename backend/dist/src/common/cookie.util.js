"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFRESH_COOKIE_NAME = void 0;
exports.setRefreshCookie = setRefreshCookie;
exports.clearRefreshCookie = clearRefreshCookie;
exports.getRefreshCookie = getRefreshCookie;
exports.REFRESH_COOKIE_NAME = process.env.REFRESH_COOKIE_NAME ?? "refresh_token";
const COOKIE_SECURE = process.env.COOKIE_SECURE === "true";
function setRefreshCookie(res, token, expiresAt) {
    res.cookie(exports.REFRESH_COOKIE_NAME, token, {
        httpOnly: true,
        secure: COOKIE_SECURE,
        sameSite: "lax",
        path: "/",
        expires: expiresAt
    });
}
function clearRefreshCookie(res) {
    res.clearCookie(exports.REFRESH_COOKIE_NAME, { path: "/" });
}
function getRefreshCookie(req) {
    return req.cookies?.[exports.REFRESH_COOKIE_NAME];
}
//# sourceMappingURL=cookie.util.js.map