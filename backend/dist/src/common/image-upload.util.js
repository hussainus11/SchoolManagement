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
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageUploadOptions = imageUploadOptions;
exports.deleteUploadedFile = deleteUploadedFile;
const common_1 = require("@nestjs/common");
const crypto = __importStar(require("node:crypto"));
const fs = __importStar(require("node:fs"));
const node_path_1 = require("node:path");
const path = __importStar(require("node:path"));
const multer_1 = require("multer");
const ALLOWED_IMAGE_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];
function imageUploadOptions(subfolder) {
    const uploadDir = (0, node_path_1.join)(process.cwd(), "uploads", subfolder);
    return {
        storage: (0, multer_1.diskStorage)({
            destination: (_req, _file, cb) => {
                fs.mkdirSync(uploadDir, { recursive: true });
                cb(null, uploadDir);
            },
            filename: (_req, file, cb) => {
                const unique = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}`;
                cb(null, `${unique}${(0, node_path_1.extname)(file.originalname)}`);
            }
        }),
        fileFilter: (_req, file, cb) => {
            if (!ALLOWED_IMAGE_MIME_TYPES.includes(file.mimetype)) {
                cb(new common_1.BadRequestException("Only JPEG, PNG, or WEBP images are allowed"), false);
                return;
            }
            cb(null, true);
        },
        limits: { fileSize: 5 * 1024 * 1024 }
    };
}
function deleteUploadedFile(fileUrl) {
    if (!fileUrl || !fileUrl.startsWith("/uploads/"))
        return;
    fs.unlink(path.join(process.cwd(), fileUrl), () => { });
}
//# sourceMappingURL=image-upload.util.js.map