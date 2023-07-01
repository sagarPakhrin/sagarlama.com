import Mdx from '@/components/Mdx';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export interface PostLayoutProps {
  year: string;
  month: string;
  slug: string;
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: PostLayoutProps }) => {
  const slug = `${params.year}/${params.month}/${params.slug}`;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) notFound();

  const og = {
    title: post.title,
    description: post.description,
    // spread only if cover_image exists
    ...(post.cover_image && {
      images: [
        {
          url: post.cover_image ?? '',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    }),
  };

  const metadata = {
    title: post.title,
    description: post.description,
    keywords: post.metakeywords ?? '',
    openGraph: og,
    twitter: og,
  };
  return metadata;
};

const getBlogFromSlug = async (slug: string) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post || !post.published) notFound();
  return post;
};

const PostLayout = async ({ params }: { params: PostLayoutProps }) => {
  const post = await getBlogFromSlug(
    `${params.year}/${params.month}/${params.slug}`
  );

  return (
    <div className="container mx-auto px-4">
      <article className="mx-auto max-w-4xl py-8">
        <header className="">
          <h1 className="text-2xl lg:text-3xl font-bold">{post.title}</h1>
          <div className="mt-2 flex items-center text-sm text-gray-600 gap-4">
            <time dateTime={post.date} className="">
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <span>{post.readingTime.text}</span>
          </div>
        </header>
        <div className="mt-4">
          {post.cover_image && (
            <div className="w-full h-96 relative">
              <Image
                src={post.cover_image}
                alt={post.title}
                // width={1000}
                // height={500}
                fill
              />
            </div>
          )}
        </div>
        <div className="mt-4">
          <p>{post.description}</p>
          <Mdx code={post.body.code} />
        </div>
      </article>
    </div>
  );
};

export default PostLayout;
