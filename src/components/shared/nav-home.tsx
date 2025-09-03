import * as LucideIcons from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export default function NavHome({
  items,
  activeContent,
  setActiveContent,
}: {
  items: {
    title: string;
    contentId: string;
    icon?: string;
    isActive?: boolean;
  }[];
  activeContent: string;
  setActiveContent: (content: string) => void;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Home</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const IconComponent = item.icon
            ? (LucideIcons as any)[item.icon]
            : null;

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                onClick={() => setActiveContent(item.contentId)}
              >
                {IconComponent && <IconComponent />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
