import { generateMeta } from "@/lib/utils";
import { DashboardContent } from "@/app/schoolmanagement/(auth)/components/dashboard-content";

export async function generateMetadata() {
  return generateMeta({
    title: "Dashboard",
    description: "School management dashboard.",
    canonical: ""
  });
}

export default function Page() {
  return <DashboardContent />;
}
