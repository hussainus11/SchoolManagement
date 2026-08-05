-- CreateTable
CREATE TABLE "LeaveGroup" (
    "id" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LeaveGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaveGroupAllocation" (
    "id" TEXT NOT NULL,
    "leaveGroupId" TEXT NOT NULL,
    "leaveTypeId" TEXT NOT NULL,
    "daysPerYear" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "LeaveGroupAllocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LeaveGroup_schoolId_idx" ON "LeaveGroup"("schoolId");

-- CreateIndex
CREATE UNIQUE INDEX "LeaveGroup_schoolId_name_key" ON "LeaveGroup"("schoolId", "name");

-- CreateIndex
CREATE INDEX "LeaveGroupAllocation_leaveGroupId_idx" ON "LeaveGroupAllocation"("leaveGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "LeaveGroupAllocation_leaveGroupId_leaveTypeId_key" ON "LeaveGroupAllocation"("leaveGroupId", "leaveTypeId");

-- AddForeignKey
ALTER TABLE "LeaveGroup" ADD CONSTRAINT "LeaveGroup_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaveGroupAllocation" ADD CONSTRAINT "LeaveGroupAllocation_leaveGroupId_fkey" FOREIGN KEY ("leaveGroupId") REFERENCES "LeaveGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaveGroupAllocation" ADD CONSTRAINT "LeaveGroupAllocation_leaveTypeId_fkey" FOREIGN KEY ("leaveTypeId") REFERENCES "LeaveType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable: LeaveType loses the single global cap now that per-group allocations own quotas
ALTER TABLE "LeaveType" DROP COLUMN "maxDaysPerYear";

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN "leaveGroupId" TEXT;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_leaveGroupId_fkey" FOREIGN KEY ("leaveGroupId") REFERENCES "LeaveGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "Staff" ADD COLUMN "leaveGroupId" TEXT;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_leaveGroupId_fkey" FOREIGN KEY ("leaveGroupId") REFERENCES "LeaveGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AlterTable: LeaveRequest gains staff support, half-day flag, and a stored day count
ALTER TABLE "LeaveRequest" ALTER COLUMN "teacherId" DROP NOT NULL;
ALTER TABLE "LeaveRequest" ADD COLUMN "staffId" TEXT;
ALTER TABLE "LeaveRequest" ADD COLUMN "isHalfDay" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "LeaveRequest" ADD COLUMN "dayCount" DOUBLE PRECISION;

-- Backfill dayCount for existing rows (inclusive day span between startDate and endDate)
UPDATE "LeaveRequest" SET "dayCount" = (DATE_PART('day', "endDate" - "startDate") + 1);

ALTER TABLE "LeaveRequest" ALTER COLUMN "dayCount" SET NOT NULL;

-- CreateIndex
CREATE INDEX "LeaveRequest_staffId_idx" ON "LeaveRequest"("staffId");

-- AddForeignKey
ALTER TABLE "LeaveRequest" ADD CONSTRAINT "LeaveRequest_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;
