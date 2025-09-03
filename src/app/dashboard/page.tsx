"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { ContentSwitcher } from "@/components/content-switcher";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";

export default function Page() {
  const [activeContent, setActiveContent] = useState("dashboard");

  return (
    <SidebarProvider>
      <AppSidebar
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
      <ContentSwitcher activeContent={activeContent} />
    </SidebarProvider>
  );
}
