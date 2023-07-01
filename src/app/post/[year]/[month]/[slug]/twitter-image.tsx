import { ImageResponse } from 'next/server';
import { allPosts } from 'contentlayer/generated';
import { PostLayoutProps } from './page';

export const runtime = 'edge';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: PostLayoutProps }) {
  const slug = `${params.year}/${params.month}/${params.slug}`;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post!.title}
      </div>
    ),
    {
      ...size,
    }
  );
}
