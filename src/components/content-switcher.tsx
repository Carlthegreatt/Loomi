"use client";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import Timer from "@/app/study/pomodoro/timer";

// Content components for different sections
const DashboardContent = () => (
  <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-muted/50">
        <div className="items-center flex justify-center font-bold">
          Dashboard
        </div>
      </div>
      <div className="aspect-video rounded-xl bg-muted/50" />
      <div className="aspect-video rounded-xl bg-[#5d969d]" />
    </div>
    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
      <div className="aspect-video flex-auto rounded-xl bg-muted/50 md:min-h-min" />
      <div className="aspect-video flex-auto rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  </div>
);

const FinanceContent = () => (
  <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    <h2 className="text-2xl font-bold">Finance Dashboard</h2>
    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
      <div className="aspect-video rounded-xl bg-green-100 p-6">
        <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
        <p className="text-gray-600">View all your financial transactions</p>
      </div>
      <div className="aspect-video rounded-xl bg-blue-100 p-6">
        <h3 className="text-lg font-semibold mb-2">Starred Items</h3>
        <p className="text-gray-600">
          Quick access to important financial data
        </p>
      </div>
    </div>
  </div>
);

const LoomiAIContent = () => (
  <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    <h2 className="text-2xl font-bold">LoomiAI</h2>
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-purple-100 p-6">
        <h3 className="text-lg font-semibold mb-2">Genesis</h3>
        <p className="text-gray-600">AI model training and development</p>
      </div>
      <div className="aspect-video rounded-xl bg-indigo-100 p-6">
        <h3 className="text-lg font-semibold mb-2">Explorer</h3>
        <p className="text-gray-600">Discover AI capabilities and features</p>
      </div>
      <div className="aspect-video rounded-xl bg-cyan-100 p-6">
        <h3 className="text-lg font-semibold mb-2">Quantum</h3>
        <p className="text-gray-600">Advanced quantum computing features</p>
      </div>
    </div>
  </div>
);

const StudyContent = () => (
  <div className="">
    <Timer></Timer>
  </div>
);

const SettingsContent = () => (
  <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    <h2 className="text-2xl font-bold">Settings</h2>
    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
      <div className="aspect-video rounded-xl bg-gray-100 p-6">
        <h3 className="text-lg font-semibold mb-2">General</h3>
        <p className="text-gray-600">General application settings</p>
      </div>
      <div className="aspect-video rounded-xl bg-gray-100 p-6">
        <h3 className="text-lg font-semibold mb-2">Team</h3>
        <p className="text-gray-600">Team management settings</p>
      </div>
      <div className="aspect-video rounded-xl bg-gray-100 p-6">
        <h3 className="text-lg font-semibold mb-2">Billing</h3>
        <p className="text-gray-600">Billing and subscription settings</p>
      </div>
      <div className="aspect-video rounded-xl bg-gray-100 p-6">
        <h3 className="text-lg font-semibold mb-2">Limits</h3>
        <p className="text-gray-600">Usage limits and quotas</p>
      </div>
    </div>
  </div>
);

const ProjectContent = ({ projectName }: { projectName: string }) => (
  <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    <h2 className="text-2xl font-bold">{projectName}</h2>
    <div className="aspect-video rounded-xl bg-muted/50 p-6">
      <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
      <p className="text-gray-600">
        This is the {projectName} project workspace.
      </p>
    </div>
  </div>
);

interface ContentSwitcherProps {
  activeContent: string;
}

export function ContentSwitcher({ activeContent }: ContentSwitcherProps) {
  const renderContent = () => {
    if (activeContent.startsWith("project-")) {
      const projectName = activeContent
        .replace("project-", "")
        .replace(/-/g, " ");
      return <ProjectContent projectName={projectName} />;
    }

    // Handle main section contentIds by showing appropriate content
    if (activeContent === "finance") {
      return <FinanceContent />;
    }
    if (activeContent === "loomiai") {
      return <LoomiAIContent />;
    }
    if (activeContent === "study") {
      return <StudyContent />;
    }
    if (activeContent === "settings") {
      return <SettingsContent />;
    }

    // Handle specific sub-item contentIds
    switch (activeContent) {
      case "dashboard":
        return <DashboardContent />;
      case "finance-transactions":
      case "finance-starred":
        return <FinanceContent />;
      case "loomiai-genesis":
      case "loomiai-explorer":
      case "loomiai-quantum":
        return <LoomiAIContent />;
      case "study-pomodoro":
      case "study-flashcards":
      case "study-schedule":
      case "study-todo":
        return <StudyContent />;
      case "settings-general":
      case "settings-team":
      case "settings-billing":
      case "settings-limits":
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

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
      {renderContent()}
    </SidebarInset>
  );
}
