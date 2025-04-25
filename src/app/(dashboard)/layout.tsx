import SidebarAndContent from "@/components/SidebarAndContent";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
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
  return (
    <SidebarAndContent>
      {children}
      <SonnerToaster />
    </SidebarAndContent>
  );
}
