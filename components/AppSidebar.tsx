"use client";
import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import CodeDancingwithMilos_Logo from "@/public/images/codedancingwithmilos.jpg";
import { NavMain } from "./sidebar/nav-main";
import { NavPages } from "./sidebar/nav-pages";
import AvatarLogo from "./ui/avatar-logo";
import { data } from "@/data/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className=" flex flex-row items-center">
        <AvatarLogo 
            img={CodeDancingwithMilos_Logo}
            alt="CodeDancing with Milos"
            logoFallback="CDwM"
            className=""

        />
        {/* <div className="group-data-[collapsible=icon]:hidden flex flex-col items-center text-sm tracking-wider space-y-[-8px]">
            <span>CodeDancing</span> 
            <span>with</span>
            <span className="">Milos</span>
        </div> */}
      </SidebarHeader>
      <SidebarContent>
        <NavPages pages={data.pages} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
