"use client";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import Timer from "@/features/pomodoro/components/Pomodoro";

const Dashboard = () => <div>dashdasd</div>;
const StudyPomodoro = () => (
  <div className="">
    <Timer></Timer>
  </div>
);

const contentRegistry: Record<string, React.ReactNode> = {
  "study-pomodoro": <StudyPomodoro />,
  dashboard: <Dashboard />,
};

console.debug("contentRegistry:", contentRegistry);

export function ContentSwitcher({ activeContent }: { activeContent: string }) {
  const content = contentRegistry[activeContent];

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Input placeholder="Search" className="h-7 text-sm flex" />
          <Search />
        </div>
      </header>

      <div>{content}</div>
    </SidebarInset>
  );
}
