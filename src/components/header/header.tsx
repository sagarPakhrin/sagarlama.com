"use client";
import { useUiContext } from "@/context/ui-context";
import { cn } from "@/lib/utils";
import { SidebarTrigger } from "../ui/sidebar";

export const Header = () => {
  const { isScrolled: isScrolledContext, openSidebar } = useUiContext();

  return (
    <div
      className={cn(
        "filter-blur sticky top-0 z-[9] px-3 py-2 border-b border-border flex items-center",
        "bg-background/80 backdrop-blur-lg transition-shadow min-h-[52px]",
        isScrolledContext && "bg-background/90 backdrop-blur-lg shadow-md",
      )}
    >
      {/* 
      <Button
        variant="ghost"
        className="lg:hidden"
        onClick={openSidebar}
        aria-label="Open sidebar"
      >
        <HamburgerMenuIcon className="h-5 w-5" />
      </Button>
      */}
      <SidebarTrigger />
    </div>
  );
};
