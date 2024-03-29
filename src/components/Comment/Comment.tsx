"use client";

import { useRef } from "react";

import useScript from "@/utils/use-script";

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
