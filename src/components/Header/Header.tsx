'use client';

import { classNames } from '@/utils/class-names';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);

    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (!sticky && scrollTop > 100) {
      setSticky(true);
    }
  };

  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/sagarPakhrin',
      target: '_blank',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sagarllp/',
      target: '_blank',
    },
    {
      name: 'Posts',
      url: '/post',
    },
  ];
  return (
    <header
      className={classNames(sticky ? 'sticky top-0 left-0 z-30' : 'relative')}
    >
      <nav
        className={classNames(
          'px-8 py-4 flex items-center justify-between text-sm gap-4 text-gray-300 bg-gray-900'
        )}
      >
        <Link href="/" className="font-medium text-2xl">
          SL
        </Link>
        <div className="flex gap-4 items-center">
          {socials.map((social, idx) => (
            <Link
              href={social.url}
              key={idx}
              target={social.target}
              rel="noopener noreferrer"
            >
              {social.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
