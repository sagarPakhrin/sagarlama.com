/* eslint-disable react/no-unescaped-entities */
import Github from '@/assets/icons/github.svg';
import Instagram from '@/assets/icons/instagram.svg';
import Twitter from '@/assets/icons/twitter.svg';
import Linkedin from '@/assets/icons/linkedin.svg';
import Sagar from '@/assets/images/Sagar Lama.png';
import { classNames } from '@/utils/class-names';
import { recentPosts } from '@/utils/posts';
import { Post } from 'contentlayer/generated';
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

const description =
  'Sagar Lama is a fullstack software developer based in Kathmandu, Nepal who loves to build stuffs for the web using javascript and typescript';
const keywords =
  'Sagar, Lama, Sagar Lama, software engineer, fullstack developer, typescript, javascript';

export const metadata = {
  title: 'Sagar Lama',
  description,
  keywords,
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

  const timeAgo = formatDistanceToNow(new Date(post.date), {
    addSuffix: true,
  });

  return (
    <Link
      href={`${baseUrl}${post.slug}`}
      className="flex-1 min-w-[288px] max-w-full shadow rounded-lg group hover:shadow-md transition duration-300 ease-in-out overflow-hidden"
    >
      <div className="h-48 lg:h-60  w-full relative overflow-hidden">
        <Image
          src={post.cover_image}
          alt={post.title}
          width={600}
          height={240}
          className={classNames(
            'rounded-t-lg w-full h-full object-cover object-center',
            'group-hover:scale-105 transition duration-300 ease-in-out'
          )}
        />
        <div className="bg-black z-10 absolute h-full w-full top-0 left-0 bg-opacity-30 group-hover:bg-opacity-10 transition duration-300" />
      </div>
      <div className="px-4 py-4">
        {/*
       <div className="">
          <span className="text-sm text-gray-600 font-semibold">{timeAgo}</span>
        </div> */}
        <h2 className="mt-2 text-xl font-bold line-clamp-2">{post.title}</h2>
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
        <div className="mx-auto w-2/3 md:3/5 lg:w-3/5 xl:pr-44">
          <h1 className="text-4xl lg:tex-5xl xl:text-7xl font-bold">
            Hi,
            <br />
            I'm Sagar Lama
          </h1>
          <h2 className="mt-6 text-lg md:text-2xl text-gray-200 font-poppins">
            Full Stack Developer
          </h2>
          <p className="mt-5 lg:text-lg text-gray-400">
            A fullstack developer based in Kathmandu, Nepal, Passionate about
            building stuffs new stuffs keeping industry best practises in mind.
          </p>
          <div className="flex gap-5 mt-5 text-slate-400">
            <Link
              href="https://github.com/sagarPakhrin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/sagarllp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://twitter.com/sagarllp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sagarllp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
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
