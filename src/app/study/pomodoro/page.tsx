"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Timer from "./timer";
import { AppSidebar } from "@/components/app-sidebar";

export default function Pomodoro() {
  return (
    <div className="mt-2">
      <Timer></Timer>
    </div>
  );
}
