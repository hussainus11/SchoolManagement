-- AlterTable
ALTER TABLE "School" ADD COLUMN     "idCardBackgroundColor" TEXT NOT NULL DEFAULT '#1E3A8A',
ADD COLUMN     "idCardBackgroundImageUrl" TEXT,
ADD COLUMN     "idCardForegroundColor" TEXT NOT NULL DEFAULT '#FFFFFF';
