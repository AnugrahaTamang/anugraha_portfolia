// components/ContactLinks.tsx
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";

const contactLinks = [
  {
    href: "https://github.com/AnugrahaTamang",
    label: "GitHub",
    icon: <Github className="w-6 h-6" />,
    color: "hover:text-gray-300",
  },
  {
    href: "https://www.linkedin.com/in/anugraha-tamang-1a8363278/",
    label: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    color: "hover:text-blue-500",
  },
  {
    href: "mailto:anugrahagomja@gmail.com",
    label: "Email",
    icon: <Mail className="w-6 h-6" />,
    color: "hover:text-red-500",
  },

  {
    href: "https://www.instagram.com/p/DIpvYDEivp3/?img_index=1",
    label: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    color: "hover:text-pink-400",
  },
];

const ContactLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-white dark:bg-black text-black dark:text-white rounded-xl shadow-lg">
      {contactLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`transition-transform duration-300 transform hover:scale-110 ${link.color}`}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default ContactLinks;
