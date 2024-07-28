"use client";

import Github from "@/assets/icons/github.svg";
import Instagram from "@/assets/icons/insta.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import { useUiContext } from "@/context/ui-context";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { HiArrowUpRight, HiBookOpen, HiMiniHome } from "react-icons/hi2";
import { PiVaultFill } from "react-icons/pi";
import { Button } from "../ui/button";

export const Sidebar = () => {
  const pathname = usePathname();
  const asideRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setScrolled] = useState(false);
  const { isSidebarOpen, closeSidebar } = useUiContext();

  const links = [
    { name: "Home", href: "/", icon: HiMiniHome },
    { name: "Posts", href: "/posts", icon: HiBookOpen },
    {
      name: "Vault",
      href: "/vault",
      icon: PiVaultFill,
    },
  ];

  const socials = [
    { name: "Github", href: "https://github.com/sagarPakhrin", icon: Github },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/sagarllp",
      icon: LinkedIn,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/codewith.sagarlp/",
      icon: Instagram,
    },
  ];

  const scrollHandler = () => {
    if (asideRef.current) {
      if (asideRef.current.scrollTop > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  useEffect(() => {
    if (!asideRef?.current) return;

    const currentAside = asideRef.current;
    currentAside.addEventListener("scroll", scrollHandler);

    return () => {
      currentAside.removeEventListener("scroll", scrollHandler);
    };
  }, [asideRef]);

  const backgropVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <>
      <aside
        className={cn(
          "absolute 3xl:w-80 z-30 flex h-full shadow-md max-h-screen min-h-screen w-3/4 overflow-y-auto border-r border-gray-100 bg-white pb-10 dark:border-gray-800 dark:bg-gray-900 sm:w-1/2 sm:pb-0 md:w-1/3 lg:z-auto lg:w-56 lg:dark:bg-gray-900 2xl:w-72 flex-col",
          "-translate-x-full transform transition duration-200 ease-in-out",
          "lg:relative lg:translate-x-0",
          isSidebarOpen && "translate-x-0",
        )}
        ref={asideRef}
      >
        <div
          className={cn(
            "px-3 py-4 sticky top-0 z-10 bg-white/70 backdrop-blur-lg",
            isScrolled && "shadow-md",
            "flex items-center gap-2",
          )}
        >
          <Button
            variant="ghost"
            className="px-0 py-0 h-6 w-6 lg:hidden"
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            <CgClose className="h-5 w-5" />
          </Button>
          <h2 className="pl-3 text-sm font-bold text-primary line-clamp-1">
            Sagar Lama
          </h2>
        </div>
        <nav className="flex-1 p-3 flex flex-col">
          <ul className="flex-1 flex flex-col gap-1">
            {links.map(({ icon: Icon, ...link }, index) => (
              <li key={index}>
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    "flex gap-3 px-2 py-1.5 rounded-md text-sm font-medium hover:bg-gray-200 text-gray-700 items-center",
                    pathname === link.href &&
                      "bg-black hover:bg-black text-white",
                  )}
                  onClick={closeSidebar}
                >
                  <Icon className="w-4 h-4 fill-current" />
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="">
            <h3 className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-500 dark:text-white">
              Socials
            </h3>
            <div className="mt-2 pb-8">
              <ul className="flex flex-col gap-1">
                {socials.map(({ icon: Icon, ...link }, index) => (
                  <li key={index}>
                    <Link
                      key={index}
                      href={link.href}
                      className={cn(
                        "flex px-2 py-1.5 rounded-md text-sm font-medium hover:bg-gray-200 text-gray-700 items-center justify-between",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="w-4 h-4 fill-current" />
                        <span>{link.name}</span>
                      </span>
                      <HiArrowUpRight className="w-4 h-4 fill-current" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </aside>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            onClick={closeSidebar}
            className={cn(
              "fixed inset-0 z-20 bg-black transition bg-opacity-20",
            )}
            initial="closed"
            animate="open"
            exit="closed"
            variants={backgropVariants}
          />
        )}
      </AnimatePresence>
    </>
  );
};
