import Mdx from '@/components/Mdx';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Head from 'next/head';
import { notFound } from 'next/navigation';

interface PostLayoutProps {
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
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      // 'twitter:title': post.title,
    },
    twitter: {
      title: post.title,
    },
  };
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
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={post.description}
          key={'description'}
        />
        <meta name="keywords" content={post.metadata} />
      </Head>
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
            <p>{post.description}</p>
            <Mdx code={post.body.code} />
          </div>
        </article>
      </div>
    </>
  );
};

export default PostLayout;
