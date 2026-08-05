export declare function imageUploadOptions(subfolder: string): {
    storage: import("multer").StorageEngine;
    fileFilter: (_req: unknown, file: Express.Multer.File, cb: (error: Error | null, accept: boolean) => void) => void;
    limits: {
        fileSize: number;
    };
};
export declare function deleteUploadedFile(fileUrl: string | null | undefined): void;
