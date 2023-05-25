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
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sagarllp/',
    },
    {
      name: 'Blog',
      url: 'https://medium.com/@lamasagar',
    },
  ];
  return (
    <nav
      className={classNames(
        'px-8 py-4 flex items-center justify-end text-sm gap-4 text-gray-300 bg-gray-900',
        sticky ? 'sticky top-0 left-0 z-30' : 'relative'
      )}
    >
      {socials.map((social, idx) => (
        <Link
          href={social.url}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.name}
        </Link>
      ))}
      <Link
        href="https://drive.google.com/file/d/1sfkiSGbeWzTtpNznrE7e8xwhwyYtfD0t/view"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-500 px-4 py-2 rounded"
      >
        Resume
      </Link>
    </nav>
  );
};

export default Navbar;
