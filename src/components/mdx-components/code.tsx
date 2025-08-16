"use client";
import React, { useRef, useState } from "react";

const Code = (props: any) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  // Extract the language from the className
  const className = props.className || "";

  const language = props["data-language"] || "";

  // Handle copy functionality
  const handleCopy = () => {
    if (codeRef.current) {
      const codeText = codeRef.current.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      });
    }
  };

  return (
    <div className="code-block gap-0 rounded-lg border border-border bg-card">
      <div className="flex justify-between items-center bg-muted py-2 px-4 rounded-t-lg border-b border-border">
        <span className="text-muted-foreground text-sm font-medium">{language}</span>
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="bg-code-background py-1 rounded-b-lg overflow-auto">
        <code
          ref={codeRef}
          className={`${className} bg-code-background text-code-foreground w-full flex flex-col`}
        >
          {props.children}
        </code>
      </div>
    </div>
  );
};

export default Code;
