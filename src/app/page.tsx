import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import * as React from "react";

export default function Home() {
  const recentPosts = [
    {
      link: "https://sagarlama.substack.com/p/startup-your-development-environment",
      title: "Startup your development environment with a single command",
      date: "JUN 16, 2024",
    },
    {
      link: "https://cloudhandbook.substack.com/p/how-does-docker-work-dockerize-sample",
      title:
        "🐳 How does Docker Work, Dockerize sample React Application, and Multi-stage Docker build. 🚀",
      date: "MAY 28, 2024",
    },
    {
      link: "https://cloudhandbook.substack.com/p/how-containers-work-deep-dive-into?utm_source=profile&utm_medium=reader2",
      title: "📦 How Containers work? Deep dive into Containerization.",
      date: "MAY 14, 2024",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-10 px-24">
      <div className="mx-auto w-full max-w-2xl px-4 pb-10 md:px-8">
        <div
          className={cn(
            "prose prose-a:text-blue-700 hover:prose-a:text-blue-500",
          )}
        >
          <p>
            Hi, I&apos;m Sagar Lama, a software engineer and an occasional
            writer. I&apos;m currently working at{" "}
            <Link href="https://clarosanalytics.com/" target="_blank">
              Claros Analytics
            </Link>{" "}
            building software that simplifies the health plan analysis process
          </p>
          <p className="my-5">
            I specialize in building full-stack web applications using
            javascript/typescript technologies. I have experience with wide
            range of technologies but I&apos;m focusing on <b>React/Nextjs</b>,{" "}
            <b>Node/Nestjs</b>
          </p>
          <h4>Work Experience</h4>
          <ul className="ml-1 relative border-s border-gray-200 dark:border-gray-700 not-prose">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                December 2023 -
              </time>
              <h3 className="prose font-medium text-gray-900 dark:text-white">
                Software Engineer at
                <Link
                  href="https://clarosanalytics.com/"
                  target="_blank"
                  className="text-blue-700 hover:text-blue-500"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Claros Analytics
                </Link>
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                September 2022 - December 2023
              </time>
              <h3 className="prose font-medium text-gray-900 dark:text-white">
                Software Engineer at
                <Link
                  href="https://www.smaitic.com/"
                  target="_blank"
                  className="text-blue-700 hover:text-blue-500"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Smaitic Labs
                </Link>
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                June 2020 - September 2022
              </time>
              <h3 className="prose font-medium text-gray-900 dark:text-white">
                Software Engineer at
                <Link
                  href="https://www.linkedin.com/company/introcept/posts/?feedView=all"
                  target="_blank"
                  className="text-blue-700 hover:text-blue-500"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Introcept Nepal
                </Link>
              </h3>
            </li>
          </ul>
          <h4>Recent Posts</h4>
          <section className="not-prose">
            <ul className="flex flex-col gap-3">
              {recentPosts.map((post) => (
                <li className="" key={post.link}>
                  <Link
                    href={post.link}
                    target="_blank"
                    className="text-blue-700 group text-sm hover:text-blue-500 flex gap-4 justify-between items-center"
                    rel="noopener noreferrer"
                  >
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:text-blue-500 dark:text-white truncate">
                      {post.title}
                    </h3>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 min-w-28">
                      {post.date}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
