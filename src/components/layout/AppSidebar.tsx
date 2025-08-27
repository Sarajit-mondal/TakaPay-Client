import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import { Link } from "react-router";

// Example Logo component
function Logo() {
  return (
    <h1 className="text-xl font-bold text-primary">MFS App</h1>
  );
}

// Example role menus
const navData = {
  user: [
    {
      title: "Dashboard",
      items: [
        { title: "Home", url: "/" },
        { title: "Send Money", url: "/send-money" },
        { title: "Cash Out", url: "/cash-out" },
        { title: "Transactions", url: "/transactions" },
      ],
    },
  ],
  agent: [
    {
      title: "Agent Panel",
      items: [
        { title: "Cash In", url: "/cash-in" },
        { title: "Cash Out", url: "/cash-out" },
        { title: "User Requests", url: "/user-requests" },
        { title: "Reports", url: "/reports" },
      ],
    },
  ],
  admin: [
    {
      title: "Admin Panel",
      items: [
        { title: "Manage Users", url: "/manage-users" },
        { title: "Manage Agents", url: "/manage-agents" },
        { title: "Transactions", url: "/transactions" },
        { title: "Settings", url: "/settings" },
      ],
    },
  ],
};

type Role = "user" | "agent" | "admin";

export function AppSidebar({
  role = "user", // default role
  ...props
}: { role?: Role } & React.ComponentProps<typeof Sidebar>) {
  const data = navData[role];

  return (
    <Sidebar {...props}>
      <SidebarHeader className="items-center">
        <Link to="/">
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {data.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
