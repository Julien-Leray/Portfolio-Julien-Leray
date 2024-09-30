"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e: any, target: any) => {
    e.preventDefault();
    setTimeout(() => {
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <nav
      className="p-4 fixed top-0 left-0 w-full z-50 text-primary bg-gradient-to-br from-primary to-secondary h-32 py-8"
      style={{ borderBottom: '4px solid #E3ECF1' }}
    >
      <div className="flex justify-between items-center ml-12 mr-12">
        <div className="text-5xl font-bold ml-2 text-secondary">

          <a
            href="/Leray-Julien.pdf"
            download
            className="text-lg md:text-2xl hover:text-tertiary text-primary font-bold "
          >
            My resume
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12">
          <Link href="/#presentation" className="text-lg md:text-2xl">
            Home
          </Link>
          <Link href="/#about" className="text-lg md:text-2xl">
            About
          </Link>
          <Link href="/#projects" className="text-lg md:text-2xl">
            Projects
          </Link>
          <Link href="/#contact" className="text-lg md:text-2xl">
            Contact
          </Link>
        </div>

        {/* Burger menu button visible only on mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - only displayed on mobile screens */}
      <div
        className={`${isOpen ? 'block' : 'hidden'
          } md:hidden absolute top-full left-0 w-full bg-primary text-secondary`}
      >
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <Link
            href="/#presentation"
            onClick={(e) => {
              toggleMenu();
              handleScroll(e, '#presentation');
            }}
            className="block text-3xl"
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={(e) => {
              toggleMenu();
              handleScroll(e, '#about');
            }}
            className="block text-3xl"
          >
            About
          </Link>
          <Link
            href="/#projects"
            onClick={(e) => {
              toggleMenu();
              handleScroll(e, '#projects');
            }}
            className="block text-3xl"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => {
              toggleMenu();
              handleScroll(e, '#contact');
            }}
            className="block text-3xl"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
