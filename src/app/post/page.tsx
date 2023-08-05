import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

// nextjs metadata

export const metadata = {
  title: "Sagar Lama | Posts",
  description: "Read my latest posts on software development and more.",
  openGraph: {
    title: "Sagar Lama | Posts",
    description: "Read my latest posts on software development and more.",
  },
  twitter: {
    title: "Sagar Lama | Posts",
    description: "Read my latest posts on software development and more.",
  },
};

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.slug} className="hover:text-blue-700">
          {post.title}
        </Link>
      </h2>
      <div className="flex items-center gap-3  text-sm text-gray-600">
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <span className="text-sm">{post.readingTime.text}</span>
      </div>
      <p className="mt-3 text-gray-700 dark:text-gray-300 line-clamp-2">
        {post.description}
      </p>
      <Link
        className="text-sm underline mt-2 hover:text-blue-500 font-medium"
        href={post.slug}
      >
        Read Post
      </Link>
    </div>
  );
}

const Posts = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sagarlama.com";
  const posts = allPosts
    .filter((post) => {
      if (process.env.NODE_ENV === "development") return true;
      return post.published;
    })
    .map((post) => {
      return {
        ...post,
        slug: `${baseUrl}${post.slug}`,
      };
    })
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="mx-auto max-w-xl py-8 px-4">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
};

export default Posts;
