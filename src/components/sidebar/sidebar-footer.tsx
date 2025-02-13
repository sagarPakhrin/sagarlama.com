"use client";

import { HiDocumentText } from "react-icons/hi2";
import Github from "@/assets/icons/github.svg";
import Instagram from "@/assets/icons/insta.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { SidebarGroupLabel, SidebarMenuButton } from "../ui/sidebar";

export function SidebarFooter() {
  const socials = [
    { name: "Resume", href: "https://drive.google.com/file/d/1sfkiSGbeWzTtpNznrE7e8xwhwyYtfD0t/view?usp=drive_link", icon: HiDocumentText },
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

  return (
    <div className="">
      <SidebarGroupLabel>Socials</SidebarGroupLabel>

      <div className="mt-2 pb-8">
        <ul className="flex flex-col gap-1">
          {socials.map(({ icon: Icon, ...link }, index) => (
            <li key={index}>
              <SidebarMenuButton asChild>
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    "flex px-2 py-1.5 rounded-md text-sm font-medium hover:bg-gray-200 text-gray-700 items-center justify-between",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 fill-current" />
                    <span>{link.name}</span>
                  </div>
                  <HiArrowUpRight className="w-4 h-4 fill-current" />
                </Link>
              </SidebarMenuButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
