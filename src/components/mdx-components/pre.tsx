import { cn } from "@/lib/utils";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Pre = ({ className, ...props }: any) => {
  return <pre className={cn("mb-4 mt-6", className)} {...props} />;
};
