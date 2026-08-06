/** Length of the automatic trial period granted to a school on registration (and used by the
 *  one-time backfill for schools that predate billing enforcement). Shared between SchoolService
 *  and prisma/seed.ts (which runs outside Nest's DI, so it can't just inject SchoolService). */
export const TRIAL_DAYS = 10;
