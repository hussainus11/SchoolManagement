import "dotenv/config";
import * as bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Role } from "../generated/prisma/client";
import { TRIAL_DAYS } from "../src/common/billing.constants";

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });

const SUPER_ADMIN_EMAIL = "saddam.hussain@gmail.com";
const SUPER_ADMIN_PASSWORD = "XXXXxxxx1412@";

async function seedSuperAdmin() {
  const existing = await prisma.user.findUnique({ where: { email: SUPER_ADMIN_EMAIL } });

  if (existing) {
    // Self-heals role/status on every run, but never touches passwordHash so a password the
    // admin changed later via the app isn't silently reset back to the seed value.
    const user = await prisma.user.update({
      where: { id: existing.id },
      data: { role: Role.SUPER_ADMIN, isActive: true, deletedAt: null }
    });
    console.log(`SUPER_ADMIN user already exists, refreshed status: ${user.email} (${user.id})`);
    return;
  }

  const passwordHash = await bcrypt.hash(SUPER_ADMIN_PASSWORD, 10);
  const user = await prisma.user.create({
    data: {
      email: SUPER_ADMIN_EMAIL,
      passwordHash,
      firstName: "Saddam",
      lastName: "Hussain",
      role: Role.SUPER_ADMIN,
      isActive: true
    }
  });
  console.log(`Created SUPER_ADMIN user: ${user.email} (${user.id})`);
}

/** One-time backfill: schools created before billing enforcement existed have no
 *  nextBillingDate. Only touches rows that are still null, so this is safe to re-run — it will
 *  never push out a date that's already been set (by this backfill or a real payment). */
async function backfillTrialForExistingSchools() {
  const nextBillingDate = new Date(Date.now() + TRIAL_DAYS * 24 * 60 * 60 * 1000);
  const { count } = await prisma.school.updateMany({
    where: { nextBillingDate: null },
    data: { nextBillingDate }
  });
  if (count > 0) {
    console.log(
      `Backfilled a ${TRIAL_DAYS}-day trial for ${count} pre-existing school(s), expiring ${nextBillingDate.toISOString()}`
    );
  } else {
    console.log("No schools needed a billing-date backfill.");
  }
}

async function main() {
  await seedSuperAdmin();
  await backfillTrialForExistingSchools();
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
