"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EditorNavbarProps = {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
  className?: string;
};

export function EditorNavbar({
  isSidebarOpen,
  onSidebarToggle,
  className,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center border-b bg-background/95 px-3",
        className
      )}
    >
      <div className="flex flex-1 items-center justify-start">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isSidebarOpen ? "Close projects" : "Open projects"}
          aria-pressed={isSidebarOpen}
          onClick={onSidebarToggle}
        >
          <SidebarIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-1 items-center justify-center" />

      <div className="flex flex-1 items-center justify-end" />
    </header>
  );
}
