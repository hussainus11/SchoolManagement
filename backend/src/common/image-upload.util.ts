import { BadRequestException } from "@nestjs/common";
import * as crypto from "node:crypto";
import * as fs from "node:fs";
import { extname, join } from "node:path";
import * as path from "node:path";
import { diskStorage } from "multer";

const ALLOWED_IMAGE_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];

/** Multer options for a single-image upload field, storing files under uploads/<subfolder>/. */
export function imageUploadOptions(subfolder: string) {
  const uploadDir = join(process.cwd(), "uploads", subfolder);
  return {
    storage: diskStorage({
      destination: (_req, _file, cb) => {
        fs.mkdirSync(uploadDir, { recursive: true });
        cb(null, uploadDir);
      },
      filename: (_req, file, cb) => {
        const unique = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}`;
        cb(null, `${unique}${extname(file.originalname)}`);
      }
    }),
    fileFilter: (_req: unknown, file: Express.Multer.File, cb: (error: Error | null, accept: boolean) => void) => {
      if (!ALLOWED_IMAGE_MIME_TYPES.includes(file.mimetype)) {
        cb(new BadRequestException("Only JPEG, PNG, or WEBP images are allowed"), false);
        return;
      }
      cb(null, true);
    },
    limits: { fileSize: 5 * 1024 * 1024 }
  };
}

/** Best-effort delete of a previously-uploaded file referenced by its public /uploads/... URL. */
export function deleteUploadedFile(fileUrl: string | null | undefined) {
  if (!fileUrl || !fileUrl.startsWith("/uploads/")) return;
  fs.unlink(path.join(process.cwd(), fileUrl), () => {});
}
