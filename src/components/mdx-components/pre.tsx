import { cn } from "@/lib/utils";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Pre = ({ className, ...props }: any) => {
  return (
    <pre 
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border border-border bg-code-background p-4 text-code-foreground", 
        className
      )} 
      {...props} 
    />
  );
};
