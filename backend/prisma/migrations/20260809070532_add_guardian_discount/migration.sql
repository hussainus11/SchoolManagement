-- CreateTable
CREATE TABLE "GuardianDiscount" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "guardianId" TEXT NOT NULL,
    "feeHeadId" TEXT,
    "type" "DiscountType" NOT NULL,
    "value" DECIMAL(10,2) NOT NULL,
    "reason" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GuardianDiscount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GuardianDiscount_schoolId_guardianId_idx" ON "GuardianDiscount"("schoolId", "guardianId");

-- AddForeignKey
ALTER TABLE "GuardianDiscount" ADD CONSTRAINT "GuardianDiscount_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuardianDiscount" ADD CONSTRAINT "GuardianDiscount_guardianId_fkey" FOREIGN KEY ("guardianId") REFERENCES "Guardian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuardianDiscount" ADD CONSTRAINT "GuardianDiscount_feeHeadId_fkey" FOREIGN KEY ("feeHeadId") REFERENCES "FeeHead"("id") ON DELETE SET NULL ON UPDATE CASCADE;
