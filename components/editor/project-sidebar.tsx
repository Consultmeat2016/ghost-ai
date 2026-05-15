"use client";

import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type ProjectSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

function EmptyProjectState() {
  return (
    <div className="flex min-h-40 flex-1 items-center justify-center rounded-lg border border-dashed bg-card/40 px-6 text-center text-sm text-muted-foreground">
      No projects yet.
    </div>
  );
}

export function ProjectSidebar({
  isOpen,
  onClose,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "fixed top-18 bottom-4 left-4 z-40 flex w-80 max-w-[calc(100vw-2rem)] flex-col rounded-lg border bg-card text-card-foreground shadow-2xl transition-transform duration-200 ease-out",
        isOpen
          ? "translate-x-0"
          : "pointer-events-none -translate-x-[calc(100%+1rem)]",
        className
      )}
    >
      <div className="flex h-12 shrink-0 items-center justify-between border-b px-4">
        <h2 className="text-sm font-medium">projects</h2>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Close projects"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="min-h-0 flex-1 p-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="my-projects" className="mt-4 flex">
          <EmptyProjectState />
        </TabsContent>
        <TabsContent value="shared" className="mt-4 flex">
          <EmptyProjectState />
        </TabsContent>
      </Tabs>

      <div className="border-t p-4">
        <Button type="button" className="w-full">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
