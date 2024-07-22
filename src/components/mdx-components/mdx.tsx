import type { MDXComponents } from "mdx/types";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Code from "@/components/mdx-components/code";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Pre } from "./pre";
import InlineCode from "./inline-code";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  disabled?: boolean;
}

export function H1({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className={cn(
        "mt-12 scroll-m-20 text-4xl font-bold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export const H2 = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h2">) => (
  <h2
    className={cn(
      "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
      className,
    )}
    {...props}
  />
);

export const H3 = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h3">) => (
  <h3
    className={cn(
      "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
);

export const H4 = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h4">) => (
  <h4
    className={cn(
      "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
);

export const H5 = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h5">) => (
  <h5
    className={cn(
      "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
);

export const H6 = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h6">) => (
  <h6
    className={cn(
      "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
);

export const A = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a">) => (
  <a
    className={cn(
      "font-medium underline underline-offset-4 hover:text-blue-700",
      className,
    )}
    {...props}
  />
);

export const P = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) => (
  <p
    className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    {...props}
  />
);

export const UL = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ul">) => (
  <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
);

export const OL = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ol">) => (
  <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
);

export const LI = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li">) => (
  <li className={cn("mt-2", className)} {...props} />
);

export const BLOCKQUOTE = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"blockquote">) => (
  <blockquote
    className={cn(
      "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
      className,
    )}
    {...props}
  />
);

export const IMG = ({
  className,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img className={cn("rounded-md border", className)} alt={alt} {...props} />
);

export const HR = ({ ...props }) => <hr className="my-4 md:my-8" {...props} />;

export const TABLE = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) => (
  <div className="my-6 w-full overflow-y-auto">
    <table className={cn("w-full", className)} {...props} />
  </div>
);

export const TR = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...props} />
);

export const TH = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"th">) => (
  <th
    className={cn(
      "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
      className,
    )}
    {...props}
  />
);

export const TD = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"td">) => (
  <td
    className={cn(
      "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
      className,
    )}
    {...props}
  />
);

// export const PRE = ({
//   className,
//   children,
//   ...props
// }: React.ComponentPropsWithoutRef<"pre">) => (
//   <pre className={cn("mb-4 mt-6", className)} {...props}>
//     <div>{children}</div>
//   </pre>
// );

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start rounded-md border border-l-4 p-4", {
        "border-red-900 bg-red-50": type === "danger",
        "border-yellow-900 bg-yellow-50": type === "warning",
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
export function MdxCard({
  href,
  className,
  children,
  disabled,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg",
        disabled && "cursor-not-allowed opacity-60",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0 [&>p]:text-muted-foreground">
          {children}
        </div>
      </div>
      {href && (
        <Link href={disabled ? "#" : href} className="absolute inset-0">
          <span className="sr-only">View</span>
        </Link>
      )}
    </div>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    a: A,
    p: P,
    ul: UL,
    ol: OL,
    li: LI,
    blockquote: BLOCKQUOTE,
    img: IMG,
    hr: HR,
    table: TABLE,
    tr: TR,
    th: TH,
    td: TD,
    pre: Pre,
    // code: Code,
    code: (props) => {
      const { className, children } = props;
      const isInLine = typeof children === "string";

      if (isInLine) {
        return <InlineCode>{children}</InlineCode>;
      }
      return <Code {...props} />;
    },

    Image,
    Callout,
    Card: MdxCard,
    ...components,
  };
}
interface MdxProps {
  code: string;
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  const components = useMDXComponents({});

  return (
    <div className="mdx">
      <Component components={components as {}} />
    </div>
  );
}
