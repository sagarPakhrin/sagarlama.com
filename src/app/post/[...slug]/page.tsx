import Mdx from '@/components/Mdx';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export interface PostLayoutProps {
  slug: string[];
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath.split('/') }));

export const generateMetadata = ({ params }: { params: PostLayoutProps }) => {
  const slug = params.slug.join('/');
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

  return {
    metadataBase: new URL('https://sagarlama.com'),
    title: post.title,
    description: post.description,
    keywords: post.metakeywords ?? '',
    openGraph: og,
    twitter: og,
  };
};

const getBlogFromSlug = async (slug: PostLayoutProps['slug']) => {
  const post = allPosts.find((p) => {
    return p._raw.flattenedPath === slug.join('/');
  });
  if (!post || !post.published) notFound();
  return post;
};

const PostLayout = async ({ params }: { params: PostLayoutProps }) => {
  const post = await getBlogFromSlug(params.slug);

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
          <div className="mt-3 flex gap-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 bg-gray-200 rounded-full text-sm py-1 text-gray-700"
              >
                {tag}
              </span>
            ))}
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
                className="object-center object-cover"
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
