"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar
} from "@/components/ui/sidebar";
import {
  AwardIcon,
  BanknoteIcon,
  BedDoubleIcon,
  BookOpenCheckIcon,
  BookOpenIcon,
  BusIcon,
  CalendarCheckIcon,
  CalendarClockIcon,
  CalendarDaysIcon,
  CalendarOffIcon,
  CalendarRangeIcon,
  ChevronRight,
  ClipboardListIcon,
  ClockIcon,
  ContactRoundIcon,
  CreditCardIcon,
  FileSpreadsheetIcon,
  GaugeIcon,
  GraduationCapIcon,
  HardHatIcon,
  HistoryIcon,
  IdCardIcon,
  KeyRoundIcon,
  LayersIcon,
  LibraryIcon,
  MapPinIcon,
  MegaphoneIcon,
  PackageIcon,
  ReceiptIcon,
  ReceiptTextIcon,
  SchoolIcon,
  Building2Icon,
  SettingsIcon,
  ShieldAlertIcon,
  TagIcon,
  UserCheckIcon,
  UserPlusIcon,
  UserRoundIcon,
  UsersIcon,
  UsersRoundIcon,
  WalletIcon,
  type LucideIcon
} from "lucide-react";
import Link from "next/link";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { usePermissions } from "@/hooks/use-permissions";
import { useAuthStore, type Role } from "@/lib/store/auth-store";

/** Groups with no `roles` are shown to every staff role (everyone except PARENT/STUDENT). */
type NavGroup = {
  title: string;
  roles?: Role[];
  items: NavItem;
};

type NavItem = {
  title: string;
  href: string;
  icon?: LucideIcon;
  isComing?: boolean;
  isDataBadge?: string;
  isNew?: boolean;
  newTab?: boolean;
  /** Restricts this item to specific fixed roles, on top of the group's own restriction. */
  roles?: Role[];
  /** Resource-catalog key (see backend/src/common/resource-catalog.ts). Custom-role users only see
   *  items whose resource they were explicitly granted; fixed-role users are unaffected. */
  resource?: string;
  items?: NavItem;
}[];

export const navItems: NavGroup[] = [
  {
    title: "Platform",
    roles: ["SUPER_ADMIN"],
    items: [
      {
        title: "Schools",
        href: "/schoolmanagement/schools",
        icon: Building2Icon
      }
    ]
  },
  {
    title: "School",
    items: [
      {
        title: "Dashboard",
        href: "/schoolmanagement",
        icon: GaugeIcon,
        resource: "dashboard"
      },
      {
        title: "Settings",
        href: "#",
        icon: SettingsIcon,
        resource: "settings",
        items: [
          { title: "School profile", href: "/schoolmanagement/settings", icon: SchoolIcon },
          { title: "Branches", href: "/schoolmanagement/settings/branches", icon: MapPinIcon },
          { title: "Academic years", href: "/schoolmanagement/settings/academic-years", icon: CalendarRangeIcon },
          { title: "ID card design", href: "/schoolmanagement/settings/id-cards", icon: IdCardIcon },
          { title: "Periods", href: "/schoolmanagement/settings/periods", icon: ClockIcon },
          { title: "Leave groups", href: "/schoolmanagement/settings/leave-groups", icon: CalendarOffIcon },
          { title: "Billing", href: "/schoolmanagement/settings/billing", icon: CreditCardIcon }
        ]
      },
      {
        title: "Permissions",
        href: "/schoolmanagement/permissions",
        icon: KeyRoundIcon,
        roles: ["SCHOOL_ADMIN", "BRANCH_ADMIN"]
      }
    ]
  },
  {
    title: "People & Structure",
    items: [
      {
        title: "Classes",
        href: "/schoolmanagement/classes",
        icon: LayersIcon,
        resource: "classes"
      },
      {
        title: "Subjects",
        href: "/schoolmanagement/subjects",
        icon: BookOpenIcon,
        resource: "subjects"
      },
      {
        title: "Teachers",
        href: "/schoolmanagement/teachers",
        icon: UserRoundIcon,
        resource: "teachers"
      },
      {
        title: "Staff",
        href: "/schoolmanagement/staff",
        icon: HardHatIcon,
        resource: "staff"
      },
      {
        title: "Students",
        href: "/schoolmanagement/students",
        icon: UsersIcon,
        resource: "students"
      },
      {
        title: "Guardians",
        href: "/schoolmanagement/guardians",
        icon: UsersRoundIcon,
        resource: "guardians"
      }
    ]
  },
  {
    title: "Daily Operations",
    items: [
      {
        title: "Attendance",
        href: "/schoolmanagement/attendance",
        icon: CalendarCheckIcon,
        resource: "attendance"
      },
      {
        title: "Timetable",
        href: "/schoolmanagement/timetable",
        icon: CalendarClockIcon,
        resource: "timetable"
      },
      {
        title: "Calendar",
        href: "/schoolmanagement/calendar",
        icon: CalendarDaysIcon,
        resource: "calendar"
      }
    ]
  },
  {
    title: "Academics",
    items: [
      {
        title: "Exams",
        href: "/schoolmanagement/exams",
        icon: GraduationCapIcon,
        resource: "exams"
      },
      {
        title: "Marks",
        href: "/schoolmanagement/marks",
        icon: AwardIcon,
        resource: "marks"
      },
      {
        title: "Homework",
        href: "/schoolmanagement/homework",
        icon: ClipboardListIcon,
        resource: "homework"
      }
    ]
  },
  {
    title: "Money",
    items: [
      {
        title: "Fees",
        href: "#",
        icon: WalletIcon,
        resource: "fees",
        items: [
          { title: "Invoices", href: "/schoolmanagement/fees", icon: ReceiptTextIcon },
          { title: "Fee heads", href: "/schoolmanagement/fees/heads", icon: TagIcon },
          { title: "Fee structures", href: "/schoolmanagement/fees/structures", icon: FileSpreadsheetIcon }
        ]
      },
      {
        title: "Payroll",
        href: "/schoolmanagement/payroll",
        icon: BanknoteIcon,
        resource: "payroll"
      },
      {
        title: "Expenses",
        href: "/schoolmanagement/expenses",
        icon: ReceiptIcon,
        resource: "expenses"
      }
    ]
  },
  {
    title: "Engagement",
    roles: ["SCHOOL_ADMIN", "BRANCH_ADMIN"],
    items: [
      {
        title: "Announcements",
        href: "/schoolmanagement/announcements",
        icon: MegaphoneIcon,
        resource: "announcements"
      },
      {
        title: "Admissions",
        href: "/schoolmanagement/admissions",
        icon: UserPlusIcon,
        resource: "admissions"
      },
      {
        title: "Reports",
        href: "/schoolmanagement/reports",
        icon: ClipboardListIcon,
        resource: "reports"
      }
    ]
  },
  {
    title: "Extras",
    items: [
      {
        title: "Library",
        href: "/schoolmanagement/library",
        icon: LibraryIcon,
        resource: "library"
      },
      {
        title: "Transport",
        href: "/schoolmanagement/transport",
        icon: BusIcon,
        resource: "transport"
      },
      {
        title: "Hostel",
        href: "/schoolmanagement/hostel",
        icon: BedDoubleIcon,
        resource: "hostel"
      },
      {
        title: "Inventory",
        href: "/schoolmanagement/inventory",
        icon: PackageIcon,
        resource: "inventory"
      },
      {
        title: "Leave",
        href: "/schoolmanagement/leave",
        icon: CalendarOffIcon,
        resource: "leave"
      },
      {
        title: "Discipline",
        href: "/schoolmanagement/discipline",
        icon: ShieldAlertIcon,
        resource: "discipline"
      },
      {
        title: "Visitors",
        href: "/schoolmanagement/visitors",
        icon: UserCheckIcon,
        resource: "visitors"
      },
      {
        title: "Alumni",
        href: "/schoolmanagement/alumni",
        icon: ContactRoundIcon,
        resource: "alumni"
      },
      {
        title: "ID cards",
        href: "/schoolmanagement/id-cards",
        icon: IdCardIcon,
        resource: "id-cards"
      },
      {
        title: "Certificates",
        href: "/schoolmanagement/certificates",
        icon: AwardIcon,
        resource: "certificates"
      },
      {
        title: "Audit log",
        href: "/schoolmanagement/audit-logs",
        icon: HistoryIcon,
        resource: "audit-log"
      }
    ]
  },
  {
    title: "Portal",
    roles: ["PARENT", "STUDENT"],
    items: [
      {
        title: "Dashboard",
        href: "/schoolmanagement/portal",
        icon: GaugeIcon
      },
      {
        title: "Attendance",
        href: "/schoolmanagement/portal/attendance",
        icon: CalendarCheckIcon
      },
      {
        title: "Fees",
        href: "/schoolmanagement/portal/fees",
        icon: WalletIcon
      },
      {
        title: "Homework",
        href: "/schoolmanagement/portal/homework",
        icon: BookOpenCheckIcon
      },
      {
        title: "Report card",
        href: "/schoolmanagement/portal/report-card",
        icon: GraduationCapIcon
      }
    ]
  }
];

const PORTAL_ROLES: Role[] = ["PARENT", "STUDENT"];
// SUPER_ADMIN has no schoolId, so the regular tenant-scoped groups below (which assume one) would
// just show broken/empty pages for them. They only get groups that explicitly opt them in, same
// as how PARENT/STUDENT are excluded from the default set and only see "Portal".
const PLATFORM_ROLES: Role[] = ["SUPER_ADMIN"];

export function NavMain() {
  const pathname = usePathname();
  const { isMobile } = useSidebar();
  const role = useAuthStore((s) => s.user?.role);
  const { can } = usePermissions();

  const itemVisible = (item: NavItem[number]) => {
    if (item.roles && (!role || !item.roles.includes(role))) return false;
    if (item.resource && !can(item.resource)) return false;
    return true;
  };

  const visibleGroups = navItems
    .filter((nav) => {
      if (nav.roles) return !!role && nav.roles.includes(role);
      return !role || (!PORTAL_ROLES.includes(role) && !PLATFORM_ROLES.includes(role));
    })
    .map((nav) => ({ ...nav, items: nav.items.filter(itemVisible) }))
    .filter((nav) => nav.items.length > 0);

  return (
    <>
      {visibleGroups.map((nav) => (
        <SidebarGroup key={nav.title}>
          <SidebarGroupLabel>{nav.title}</SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {nav.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {Array.isArray(item.items) && item.items.length > 0 ? (
                    <>
                      <div className="hidden group-data-[collapsible=icon]:block">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <SidebarMenuButton tooltip={item.title}>
                              {item.icon && <item.icon />}
                              <span>{item.title}</span>
                              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            side={isMobile ? "bottom" : "right"}
                            align={isMobile ? "end" : "start"}
                            className="min-w-48 rounded-lg">
                            <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
                            {item.items?.map((item) => (
                              <DropdownMenuItem
                                className="hover:text-foreground active:text-foreground hover:bg-[var(--primary)]/10! active:bg-[var(--primary)]/10!"
                                asChild
                                key={item.title}>
                                <a href={item.href}>
                                  {item.icon && <item.icon />}
                                  {item.title}
                                </a>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <Collapsible
                        className="group/collapsible block group-data-[collapsible=icon]:hidden"
                        defaultOpen={!!item.items.find((s) => s.href === pathname)}>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className="hover:text-foreground active:text-foreground hover:bg-[var(--primary)]/10 active:bg-[var(--primary)]/10"
                            tooltip={item.title}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item?.items?.map((subItem, key) => (
                              <SidebarMenuSubItem key={key}>
                                <SidebarMenuSubButton
                                  className="hover:text-foreground active:text-foreground hover:bg-[var(--primary)]/10 active:bg-[var(--primary)]/10"
                                  isActive={pathname === subItem.href}
                                  asChild>
                                  <Link href={subItem.href} target={subItem.newTab ? "_blank" : ""}>
                                    {subItem.icon && <subItem.icon />}
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    </>
                  ) : (
                    <SidebarMenuButton
                      className="hover:text-foreground active:text-foreground hover:bg-[var(--primary)]/10 active:bg-[var(--primary)]/10"
                      isActive={pathname === item.href}
                      tooltip={item.title}
                      asChild>
                      <Link href={item.href} target={item.newTab ? "_blank" : ""}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                  {!!item.isComing && (
                    <SidebarMenuBadge className="peer-hover/menu-button:text-foreground opacity-50">
                      Coming
                    </SidebarMenuBadge>
                  )}
                  {!!item.isNew && (
                    <SidebarMenuBadge className="border border-green-400 text-green-600 peer-hover/menu-button:text-green-600">
                      New
                    </SidebarMenuBadge>
                  )}
                  {!!item.isDataBadge && (
                    <SidebarMenuBadge className="peer-hover/menu-button:text-foreground">
                      {item.isDataBadge}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
}
