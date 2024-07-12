"use client";

import { Sidebar } from "@/components/sidebar/sidebar";
import { createStrictContext } from "./strict-context";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header/header";

export interface UiState {
  isSidebarOpen: boolean;
  isScrolled: boolean;
  mainRef: React.RefObject<HTMLDivElement>;
}

export interface UiContext extends UiState {
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

const [Provider, useContext] = createStrictContext<UiContext>();

type Props = {
  children: React.ReactNode;
};

const UIProvider = ({ children, ...props }: Props) => {
  const [isScrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (mainRef.current) {
      setScrolled(mainRef.current.scrollTop > 0);
    }
  };

  useEffect(() => {
    const main = mainRef.current;
    if (main) {
      main.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (main) {
        main.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const openSidebar = () => {};

  const closeSidebar = () => {};

  const toggleSidebar = () => {};

  return (
    <Provider
      value={{
        isScrolled,
        openSidebar,
        closeSidebar,
        toggleSidebar,
        mainRef,
        isSidebarOpen: true,
      }}
      {...props}
    >
      <Sidebar />
      <main className="flex-1 overflow-y-auto max-h-screen" ref={mainRef}>
        <Header />
        {children}
      </main>
    </Provider>
  );
};

export { UIProvider, useContext as useUiContext };
