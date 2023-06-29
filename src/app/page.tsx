/* eslint-disable react/no-unescaped-entities */
import Sagar from '@/assets/images/Sagar Lama.png';
import Image from 'next/image';

const description =
  'Sagar Lama is a software engineer based in Kathmandu, Nepal who loves to build stuffs for the web using javascript and typescript';

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
