"use client"; // if you're using app router
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react or use Heroicons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4 transition-shadow duration-300 hover:shadow-[inset_0_0_10px_white]">
      <div className="flex items-center justify-between ">
        <Link href="/" className="text-3xl font-bold ">
          AnugrahaTamang
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex gap-8 items-center">
          <Link href="/" className="hover:text-blue-400 ">
            Home
          </Link>
          <Link href="/Project" className="hover:text-blue-400 ">
            Project
          </Link>
          <Link href="/Skill" className="hover:text-blue-400 ">
            Skill
          </Link>
          <Link href="/Contact" className="hover:text-blue-400  ">
            Contact
          </Link>
          <Link href="/About" className="hover:text-blue-400">
            About
          </Link>

          <SignedOut>
            <SignInButton>
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 ml-2">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col lg:hidden mt-4 gap-4 ">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/Project" className="hover:text-blue-400">
            Project
          </Link>
          <Link href="/Skill" className="hover:text-blue-400">
            Skill
          </Link>
          <Link href="/Contact" className="hover:text-blue-400">
            Contact
          </Link>
          <Link href="/About" className="hover:text-blue-400">
            About
          </Link>

          <SignedOut>
            <SignInButton>
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 mt-2">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}
    </header>
  );
};

export default Navbar;
