import * as React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { classNames } from '@/utils/class-names';

import { Callout } from '@/components/callout';
import { MdxCard } from '@/components/mdx-card';

const components = {
  h1: ({ className, ...props }: { className: string }) => (
    <h1
      className={classNames(
        'mt-12 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: { className: string }) => (
    <h2
      className={classNames(
        'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: { className: string }) => (
    <h3
      className={classNames(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: { className: string }) => (
    <h4
      className={classNames(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: { className: string }) => (
    <h5
      className={classNames(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: { className: string }) => (
    <h6
      className={classNames(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: { className: string }) => (
    <a
      className={classNames(
        'font-medium underline underline-offset-4',
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: { className: string }) => (
    <p
      className={classNames('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: { className: string }) => (
    <ul className={classNames('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: { className: string }) => (
    <ol
      className={classNames('my-6 ml-6 list-decimal', className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: { className: string }) => (
    <li className={classNames('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: { className: string }) => (
    <blockquote
      className={classNames(
        'mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground',
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={classNames('rounded-md border', className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={classNames('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={classNames('m-0 border-t p-0 even:bg-muted', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: { className: string }) => (
    <th
      className={classNames(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: { className: string }) => (
    <td
      className={classNames(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: { className: string }) => (
    <pre
      className={classNames(
        'mb-4 mt-6 overflow-x-auto rounded-lg border bg-black p-4',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: { className: string }) => (
    <code
      className={classNames('relative rounded font-mono text-sm', className)}
      {...props}
    />
  ),
  Image,
  Callout,
  Card: MdxCard,
};

interface MdxProps {
  code: string;
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components as {}} />
    </div>
  );
}
