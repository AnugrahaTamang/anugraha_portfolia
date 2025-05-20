import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-8 px-6 md:px-20 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-xl font-semibold">Anugraha Tamang</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <Link
            href="https://github.com/AnugrahaTamang"
            target="_blank"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 hover:text-blue-600 transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anugraha-tamang-1a8363278/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
          </Link>
          <Link href="mailto:anugrahagomja@gmail.com" aria-label="Email">
            <Mail className="w-6 h-6 hover:text-blue-600 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
