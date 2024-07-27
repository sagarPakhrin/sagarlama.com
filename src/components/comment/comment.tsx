"use client";

import useScript from "@/lib/use-script";
import { useRef } from "react";

export const Comments = () => {
  const comment = useRef<HTMLDivElement | null>(null);

  const _status = useScript({
    url: "https://utteranc.es/client.js",
    theme: "github-light",
    issueTerm: "url",
    repo: "sagarPakhrin/sagarlama.com",
    ref: comment,
  });

  return <div className="w-full">{<div ref={comment} />}</div>;
};

export default Comments;
