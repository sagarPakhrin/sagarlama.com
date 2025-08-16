"use client";

import useScript from "@/lib/use-script";
import { useTheme } from "next-themes";
import { useRef } from "react";

export const Comments = () => {
  const comment = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  const _status = useScript({
    url: "https://utteranc.es/client.js",
    theme: theme === "dark" ? "github-dark" : "github-light",
    issueTerm: "url",
    repo: "sagarPakhrin/sagarlama.com",
    ref: comment,
  });

  return <div className="w-full">{<div ref={comment} />}</div>;
};

export default Comments;
