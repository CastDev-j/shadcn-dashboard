import SidebarAndContent from "@/components/SidebarAndContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarAndContent>{children}</SidebarAndContent>;
}
