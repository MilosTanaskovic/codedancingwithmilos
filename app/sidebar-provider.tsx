"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { useIsLaptop } from "@/hooks/use-laptop";
import { useEffect, useState } from "react";

export default function Sidebar({ children }: { children: React.ReactNode }) {
    const isLaptop = useIsLaptop();
    const [open, setOpen] = useState<boolean>(!isLaptop);

    useEffect(() => {
        setOpen(!isLaptop);
    }, [isLaptop]);

  return (
    <SidebarProvider
        defaultOpen={!isLaptop}
        open={open}
        onOpenChange={setOpen}
    >
      {children}
    </SidebarProvider>
  );
}
