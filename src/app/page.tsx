/* eslint-disable react/no-unescaped-entities */
import Sagar from '@/assets/images/Sagar Lama.png';
import { classNames } from '@/utils/class-names';
import { recentPosts } from '@/utils/posts';
import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const description =
  'Sagar Lama is a fullstack software developer based in Kathmandu, Nepal who loves to build stuffs for the web using javascript and typescript';

export const metadata = {
  title: 'Sagar Lama',
  description,
  openGraph: {
    title: 'Sagar Lama',
    description,
  },
  twitter: {
    title: 'Sagar Lama',
    description,
  },
};

const PostCard = ({ post }: { post: Post }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <Link
      href={`${baseUrl}${post.slug}`}
      className="flex-1 min-w-[288px] max-w-full shadow rounded group hover:shadow-md transition duration-300 ease-in-out overflow-hidden"
    >
      <div className="h-48 lg:h-60  w-full relative overflow-hidden">
        <Image
          src={post.cover_image}
          alt={post.title}
          width={600}
          height={240}
          className={classNames(
            'rounded-t-md w-full h-full object-cover object-center',
            'group-hover:scale-105 transition duration-300 ease-in-out'
          )}
        />
        <div className="bg-black z-10 absolute h-full w-full top-0 left-0 bg-opacity-30 group-hover:bg-opacity-10 transition duration-300" />
      </div>
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
        <p className="mt-2 text-sm text-gray-700 line-clamp-3">
          {post.description}
        </p>
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <main className="">
      <div className="bg-gray-900 py-12 px-4 lg:px-28 flex flex-wrap w-full text-white items-center">
        <div className="w-full lg:w-3/5 xl:pr-44">
          <h1 className="text-4xl lg:text-5xl xl:text-8xl font-bold">
            {' '}
            Sagar Lama
          </h1>
          <h2 className="mt-3 text-lg md:text-2xl text-gray-200 font-poppins">
            Fullstack Software Developer
          </h2>
          <p className="mt-2 text-sm lg:text-base text-gray-400">
            Hey, I'm a software developer based in Kathmandu, Nepal. I'm
            passionate about building stuffs for the web keeping industry best
            practises in mind and ocassionally write about it.
          </p>
        </div>
        <div className="hidden lg:block w-full lg:w-2/5">
          <div className="h-400 2xl:h-[800px] bg-slate-300 relative flex items-end justify-center rounded-3xl">
            <Image
              src={Sagar}
              alt="Picture of Sagar"
              height={200}
              width={600}
              className=""
            />
          </div>
        </div>
      </div>
      <section className="bg-gray-100">
        <div className="container py-10 md:py-16 lg:py-24 px-4">
          <div className="">
            <h2 className="font-semibold text-3xl text-center">Recent Posts</h2>
          </div>
          <div className="mt-10">
            <div className="w-full flex flex-wrap gap-4">
              {recentPosts.map((post) => (
                <PostCard post={post} key={post.slug} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*
      <div className="py-10 md:py-16 lg:py-32 bg-gray-100">
        <div className="mx-auto container flex justify-center">
          <span className="text-sm bg-yellow-500 px-3 py-[2px] rounded text-white font-medium">
            My Stacks
          </span>
        </div>
        <div className="mt-10">
          <div className="container">
            <div className="w-full px-4 lg:w-3/4 mx-auto">
              <TechStacks />
            </div>
          </div>
        </div>
      </div>
      */}
      {/*
      <Experience />
*/}
    </main>
  );
}
