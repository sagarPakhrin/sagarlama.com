import Cypress from '@/assets/icons/stacks/cypress.svg';
import Docker from '@/assets/icons/stacks/docker.svg';
import K8s from '@/assets/icons/stacks/kubernetes.svg';
import Mongo from '@/assets/icons/stacks/mongo.svg';
import Mysql from '@/assets/icons/stacks/mysql.svg';
import Nestjs from '@/assets/icons/stacks/nestjs.svg';
import Nextjs from '@/assets/icons/stacks/nextjs.svg';
import Prisma from '@/assets/icons/stacks/prisma.svg';
import React from '@/assets/icons/stacks/react.svg';
import Tailwind from '@/assets/icons/stacks/tailwind.svg';
import Typescript from '@/assets/icons/stacks/typescript.svg';
import Vim from '@/assets/icons/stacks/vim.svg';
import Link from 'next/link';

const TechStacks = () => {
  const stacks = [
    {
      link: 'https://react.dev/',
      icon: <React className="h-24 w-24 lg:h-28 lg:w-28" />,
    },
    {
      link: 'https://nextjs.org/',
      icon: <Typescript className="h-24 w-24 lg:h-28 lg:w-28" />,
    },
    {
      link: 'https://nextjs.org/',
      icon: <Nextjs className="h-24 w-24 lg:h-28 lg:w-28" />,
    },
    {
      link: 'https://tailwindcss.com/',
      icon: <Tailwind className="h-24 w-24 lg:h-28 lg:w-28" />,
    },
    {
      link: 'https://www.cypress.io/',
      icon: <Cypress className="h-24 w-24 lg:h-28 lg:w-28" />,
    },
    {
      link: 'https://nestjs.com/',
      icon: <Nestjs className="h-24 w-24 lg:h-28 lg:w-28" />,
    },
    {
      link: 'https://www.prisma.io/',
      icon: <Prisma className="h-24 w-24 lg:h-28 lg:w-28" />,
    },
    {
      link: 'https://www.mysql.com/',
      icon: <Mysql className="h-24 w-24 lg:h-28 lg:w-28" />,
    },
    {
      link: 'https://www.mongodb.com/',
      icon: <Mongo className="h-24 w-24 lg:h-28 lg:w-28" />,
    },
    {
      link: 'https://www.docker.com/',
      icon: <Docker className="h-24 w-24 lg:h-28 lg:w-28" />,
    },
    {
      link: 'https://kubernetes.io/',
      icon: <K8s className="h-24 w-24 lg:h-28 lg:w-28" />,
    },
    {
      link: 'https://www.vim.org/',
      icon: <Vim className="h-24 w-24 lg:h-28 lg:w-28" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
      {stacks.map((stack, index) => (
        <Link
          key={index}
          href={stack.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          <div className="cursor-pointer">{stack.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default TechStacks;
