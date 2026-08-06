export interface ResourceCatalogItem {
  key: string;
  label: string;
  group: string;
}

/**
 * Source of truth for every permission-gateable menu/module in the app.
 * Mirrors the sidebar structure in frontend/components/layout/sidebar/nav-main.tsx —
 * keep the two in sync when adding a new module.
 */
export const RESOURCE_CATALOG: ResourceCatalogItem[] = [
  { key: "dashboard", label: "Dashboard", group: "School" },
  { key: "settings", label: "Settings", group: "School" },

  { key: "classes", label: "Classes", group: "People & Structure" },
  { key: "subjects", label: "Subjects", group: "People & Structure" },
  { key: "teachers", label: "Teachers", group: "People & Structure" },
  { key: "staff", label: "Staff", group: "People & Structure" },
  { key: "students", label: "Students", group: "People & Structure" },

  { key: "attendance", label: "Attendance", group: "Daily Operations" },
  { key: "timetable", label: "Timetable", group: "Daily Operations" },
  { key: "calendar", label: "Calendar", group: "Daily Operations" },

  { key: "exams", label: "Exams", group: "Academics" },
  { key: "marks", label: "Marks", group: "Academics" },
  { key: "homework", label: "Homework", group: "Academics" },

  { key: "fees", label: "Fees", group: "Money" },
  { key: "payroll", label: "Payroll", group: "Money" },
  { key: "expenses", label: "Expenses", group: "Money" },

  { key: "announcements", label: "Announcements", group: "Engagement" },
  { key: "admissions", label: "Admissions", group: "Engagement" },
  { key: "reports", label: "Reports", group: "Engagement" },

  { key: "library", label: "Library", group: "Extras" },
  { key: "transport", label: "Transport", group: "Extras" },
  { key: "hostel", label: "Hostel", group: "Extras" },
  { key: "inventory", label: "Inventory", group: "Extras" },
  { key: "leave", label: "Leave", group: "Extras" },
  { key: "discipline", label: "Discipline", group: "Extras" },
  { key: "visitors", label: "Visitors", group: "Extras" },
  { key: "alumni", label: "Alumni", group: "Extras" },
  { key: "id-cards", label: "ID Cards", group: "Extras" },
  { key: "certificates", label: "Certificates", group: "Extras" },
  { key: "audit-log", label: "Audit Log", group: "Extras" }
];

export const RESOURCE_KEYS = RESOURCE_CATALOG.map((r) => r.key);
export type ResourceKey = (typeof RESOURCE_KEYS)[number];
