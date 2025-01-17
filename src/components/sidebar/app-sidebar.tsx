"use client";

import { SquareTerminal } from "lucide-react";
import * as React from "react";
import { HiBookOpen, HiMiniHome } from "react-icons/hi2";
import { PiVaultFill } from "react-icons/pi";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { SidebarFooter as SSidebarFooter } from "./sidebar-footer";
import { SidebarLogo } from "./sidebar-logo";

// This is sample data.
const data = {
  navMain: [
    { title: "Home", url: "/", icon: HiMiniHome },
    { title: "Posts", url: "/posts", icon: HiBookOpen },
    {
      title: "Vault",
      url: "/vault",
      icon: PiVaultFill,
    },
    //{
    //  title: "Experiments",
    //  url: "/experiments",
    //  icon: SquareTerminal,
    //  isActive: true,
    //  items: [
    //    {
    //      title: "History",
    //      url: "/posts",
    //    },
    //    {
    //      title: "Starred",
    //      url: "#",
    //    },
    //    {
    //      title: "Settings",
    //      url: "#",
    //    },
    //  ],
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <SSidebarFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
