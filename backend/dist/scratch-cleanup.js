"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("./generated/prisma/client");
const p = new client_1.PrismaClient({ adapter: new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL }) });
(async () => {
    const branch = await p.branch.findFirst({ where: { name: "Branch Filter Test" } });
    if (!branch) {
        console.log("not found, already clean");
        return;
    }
    const [teacherCount, staffCount, studentCount] = await Promise.all([
        p.teacher.count({ where: { branchId: branch.id } }),
        p.staff.count({ where: { branchId: branch.id } }),
        p.student.count({ where: { branchId: branch.id } })
    ]);
    console.log("refs:", { teacherCount, staffCount, studentCount });
    if (teacherCount === 0 && staffCount === 0 && studentCount === 0) {
        await p.branch.delete({ where: { id: branch.id } });
        console.log("deleted test branch");
    }
    else {
        console.log("has references, not deleting");
    }
})().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => p.$disconnect());
//# sourceMappingURL=scratch-cleanup.js.map