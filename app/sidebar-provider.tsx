"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";

export default function Sidebar({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState<boolean>(false)
    console.log(open)
  return (
    <SidebarProvider
        open={open}
        onOpenChange={setOpen}
    >
      {children}
    </SidebarProvider>
  );
}
