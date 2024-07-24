"use client";
import { useUiContext } from "@/context/ui-context";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export const Header = () => {
  const { isScrolled: isScrolledContext, openSidebar } = useUiContext();

  return (
    <div
      className={cn(
        "filter-blur sticky top-0 z-10 px-3 py-2 dark:border-b dark:border-gray-900",
        "bg-white dark:bg-gray-900 transition-shadow min-h-12",
        isScrolledContext && "bg-white/50 backdrop-blur-lg shadow-md",
      )}
    >
      <Button variant="ghost" className="lg:hidden" onClick={openSidebar}>
        <HamburgerMenuIcon className="h-5 w-5" />
      </Button>
    </div>
  );
};
