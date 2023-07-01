import { ImageResponse } from 'next/server';
import { allPosts } from 'contentlayer/generated';
import { PostLayoutProps } from './page';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Og({ params }: { params: PostLayoutProps }) {
  const slug = `${params.year}/${params.month}/${params.slug}`;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) notFound();

  return new ImageResponse(
    (
      <>
        {post.cover_image ? (
          <div tw="h-full w-full">
            <Image src={post.cover_image} alt={alt} fill />
          </div>
        ) : (
          <div tw="h-full w-full pb-10">
            <div tw="flex flex-col text-neutral-50">
              <div tw="text-7xl font-bold">{post?.title}</div>
              <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200 truncate">
                {post.description}
              </div>
            </div>
          </div>
        )}
      </>
    ),
    {
      ...size,
    }
  );
}
