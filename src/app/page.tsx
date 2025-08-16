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

  const experiences = [
    {
      title: "Software Engineer",
      company: "Claros Analytics",
      location: "Nepal",
      startDate: "December 2023",
      endDate: "Present",
      link: "https://clarosanalytics.com/",
    },
    {
      title: "Software Engineer",
      company: "Smaitic Labs",
      location: "Nepal",
      startDate: "June 2020",
      endDate: "September 2022",
      link: "https://www.smaitic.com/",
    },
    {
      title: "Software Engineer",
      company: "Introcept Nepal",
      location: "Nepal",
      startDate: "June 2020",
      endDate: "September 2022",
      link: "https://www.linkedin.com/company/introcept/posts/?feedView=all",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-10 px-4 lg:px-24">
      <div className="mx-auto w-full max-w-2xl pt-4 px-4 pb-10 md:px-8">
        <div
          className={cn(
            "prose prose-a:text-link hover:prose-a:text-link-hover dark:prose-a:text-link dark:hover:prose-a:text-link-hover",
          )}
        >
          <p>
            Hi, I&apos;m Sagar Lama, a software engineer and an occasional
            writer. I&apos;m currently working at{" "}
            <Link href="https://clarosanalytics.com/" target="_blank">
              Claros Analytics
            </Link>{" "}
            building software that simplifies the health plan analysis process.
          </p>
          <p className="my-5">
            I specialize in building full-stack web applications using
            <span aria-label="javascript and typescript">
              {" "}
              javascript/typescript{" "}
            </span>
            technologies. I have experience with wide range of technologies but
            I&apos;m focusing on{" "}
            <b>
              {/* <span>React/Nextjs</span> */}
              <span aria-label="React Nest JS">React,Nextjs</span>
            </b>
            ,{" "}
            <b>
              <span aria-label="Node and Nest JS">Node,Nestjs</span>
            </b>
            .
          </p>
          <h4>Work Experience</h4>
          <ul className="ml-1 relative border-s border-timeline-border dark:border-timeline-border not-prose">
            {experiences.map((experience, idx) => (
              <li className="mb-10 ms-4" key={idx}>
                <div className="absolute w-3 h-3 bg-timeline-dot dark:bg-timeline-dot rounded-full mt-1.5 -start-1.5 border border-background dark:border-background"></div>
                <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                  {experience.startDate} - {experience.endDate}
                </time>
                <h3 className="prose font-medium text-foreground">
                  {experience.title} at
                  <Link
                    href={experience.link}
                    target="_blank"
                    className="text-link hover:text-link-hover dark:text-link dark:hover:text-link-hover"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {experience.company}
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
          <h4>Recent Posts</h4>
          <section className="not-prose">
            <ul className="flex flex-col gap-3">
              {recentPosts.map((post) => (
                <li className="" key={post.link}>
                  <Link
                    href={post.link}
                    target="_blank"
                    className="text-link group text-sm hover:text-link-hover dark:text-link dark:hover:text-link-hover flex gap-4 justify-between items-center"
                    rel="noopener noreferrer"
                  >
                    <h3 className="font-medium text-foreground group-hover:underline group-hover:text-link-hover dark:group-hover:text-link-hover truncate">
                      {post.title}
                    </h3>
                    <p
                      className={cn(
                        "text-xs text-right md:text-sm font-normal text-muted-foreground",
                        "text-nowrap",
                      )}
                    >
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
