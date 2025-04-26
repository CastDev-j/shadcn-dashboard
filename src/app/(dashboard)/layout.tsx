import SidebarAndContent from "@/components/SidebarAndContent";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
// import { ThemeProvider } from "@/components/ui/theme-provider";
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
    // <ThemeProvider
    //   attribute="class"
    //   defaultTheme="system"
    //   enableSystem
    //   disableTransitionOnChange
    // >
    <SidebarAndContent>
      {children}
      <SonnerToaster richColors />
    </SidebarAndContent>
    // </ThemeProvider>
  );
}
