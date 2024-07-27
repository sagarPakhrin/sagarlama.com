import Mdx, { useMDXComponents } from "@/components/mdx-components/mdx";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { notFound } from "next/navigation";
import Comment from "@/components/comment/comment";

export interface PostLayoutProps {
  slug: string[];
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath.split("/") }));

export const generateMetadata = ({ params }: { params: PostLayoutProps }) => {
  const slug = ["/posts", ...params.slug].join("/");
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) notFound();

  const og = {
    title: post.title,
    description: post.metadescription,
    // spread only if cover_image exists
    ...(post.cover_image && {
      images: [
        {
          url: post.cover_image ?? "",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    }),
  };

  return {
    metadataBase: new URL("https://sagarlama.com"),
    title: post.title,
    description: post.metadescription,
    keywords: post.metakeywords ?? "",
    openGraph: og,
    twitter: og,
  };
};

const getBlogFromSlug = async (slug: PostLayoutProps["slug"]) => {
  const parsed_slug = ["/posts", ...slug].join("/");

  const post = allPosts.find((p) => {
    return p.slug === parsed_slug;
  });

  const isDev = process.env.NODE_ENV === "development";

  // if no post, 404
  // if post is not published and not in dev mode, 404
  // else return post

  if (!post || (!isDev && !post.published)) {
    notFound();
  }

  /*

   if (!post) {
    notFound();
   } else if(isDev) {
      return post;
   } else if (!post.published) {
      notFound();
   }
   return post

   */

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
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <span>{post.readingTime.text}</span>
          </div>
          <div className="mt-3 flex gap-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 bg-gray-200 rounded-full text-sm py-1 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
        <div className="mt-4">
          {post.cover_image && (
            <div className="w-full h-56 md:h-64 lg:h-96 relative">
              <Image
                src={post.cover_image}
                alt={post.title}
                // width={1000}
                // height={500}
                fill
                className="object-center object-cover rounded-md"
                priority
              />
            </div>
          )}
        </div>
        <div className="mt-4">
          <p>{post.description}</p>
          <Mdx code={post.body.code} />
        </div>
      </article>
      <Comment />
    </div>
  );
};

export default PostLayout;
