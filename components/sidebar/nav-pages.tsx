"use client";

import {
  type LucideIcon,
} from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavPages({
  pages,
}: {
  pages: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:show">
      <SidebarGroupLabel>Pages</SidebarGroupLabel>
      <SidebarMenu>
        {pages.map((page) => (
          <SidebarMenuItem key={page.name}>
            <SidebarMenuButton asChild tooltip={page.name}>
              <Link href={page.url}>
                <page.icon className="group-data-[collapsible=icon]:w-6 group-data-[collapsible=icon]:h-6" />
                <span>{page.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
