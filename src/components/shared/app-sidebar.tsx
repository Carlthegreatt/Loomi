"use client";

import * as React from "react";

import NavHome from "./nav-home";

import { NavMain } from "@/components/shared/nav-main";

import { NavUser } from "@/components/shared/nav-user";
import { TeamSwitcher } from "@/components/shared/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Loomi",
      logo: "GalleryVerticalEnd",
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: "AudioWaveform",
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: "Command",
      plan: "Free",
    },
  ],
  navHome: [
    {
      title: "Dashboard",
      contentId: "dashboard",
      icon: "Home",
      isActive: true,
    },
  ],

  navMain: [
    {
      title: "Finance",
      contentId: "finance",
      icon: "SquareTerminal",
      items: [
        {
          title: "Transaction History",
          contentId: "finance-transactions",
        },
        {
          title: "Starred",
          contentId: "finance-starred",
        },
      ],
    },
    {
      title: "LoomiAI",
      contentId: "loomiai",
      icon: "Bot",
      items: [
        {
          title: "Genesis",
          contentId: "loomiai-genesis",
        },
        {
          title: "Explorer",
          contentId: "loomiai-explorer",
        },
        {
          title: "Quantum",
          contentId: "loomiai-quantum",
        },
      ],
    },
    {
      title: "Study",
      contentId: "study",
      icon: "BookOpen",
      items: [
        {
          title: "Pomodoro",
          contentId: "study-pomodoro",
        },
        {
          title: "Flashcards",
          contentId: "study-flashcards",
        },
        {
          title: "Schedule",
          contentId: "study-schedule",
        },
        {
          title: "To Do List",
          contentId: "study-todo",
        },
      ],
    },

    {
      title: "More Features",
      contentId: "settings",
      icon: "Settings2",
      items: [
        {
          title: "General",
          contentId: "settings-general",
        },
        {
          title: "Team",
          contentId: "settings-team",
        },
        {
          title: "Billing",
          contentId: "settings-billing",
        },
        {
          title: "Limits",
          contentId: "settings-limits",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      contentId: "project-design",
      icon: "Frame",
    },
    {
      name: "Sales & Marketing",
      contentId: "project-sales",
      icon: "PieChart",
    },
    {
      name: "Travel",
      contentId: "project-travel",
      icon: "Map",
    },
  ],
};

export function AppSidebar({
  activeContent,
  setActiveContent,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  activeContent: string;
  setActiveContent: (content: string) => void;
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavHome
          items={data.navHome}
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
        <NavMain
          items={data.navMain}
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
