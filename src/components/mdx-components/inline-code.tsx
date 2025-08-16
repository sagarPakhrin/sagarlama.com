import { cn } from "@/lib/utils";

export default function InlineCode({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <code className={cn("bg-code-background text-code-foreground px-2 py-1 rounded text-base", className)}>
      {children}
    </code>
  );
}
