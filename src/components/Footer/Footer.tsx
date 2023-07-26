import Github from '@/assets/icons/github.svg';
import Linkedin from '@/assets/icons/linkedin.svg';
import Instagram from '@/assets/icons/instagram.svg';
import Twitter from '@/assets/icons/twitter.svg';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto flex items-center justify-center py-7">
        <div className="flex items-center justify-center gap-8 text-gray-400">
          <Link
            href="https://github.com/sagarPakhrin"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-gray-50"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.instagram.com/sagarllp/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-gray-50"
          >
            <Instagram className="h-6 w-6" />
          </Link>
          <Link
            href="https://twitter.com/sagarllp"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-gray-50"
          >
            <Twitter className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sagarllp/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-gray-50"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
