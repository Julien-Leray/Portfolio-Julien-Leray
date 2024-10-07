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
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 text-primary bg-secondary h-20 py-4 mt-12 rounded-full flex flex-wrap items-center justify-evenly">
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-12">
        <Link href="/#presentation" className="text-lg md:text-3xl">
          Home
        </Link>
        <Link href="/#about" className="text-lg md:text-3xl lg:pl-10">
          About
        </Link>
        <Link href="/#projects" className="text-lg md:text-3xl lg:pl-10">
          Projects
        </Link>
        <Link href="/#contact" className="text-lg md:text-3xl lg:pl-10">
          Contact
        </Link>

      </div>

      {/* Burger menu button visible only on mobile */}
      <div className="md:hidden flex items-center space-x-4">
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

        {/* Social buttons in mobile */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/leray-julien">
            <img
              src="linkedIn.png"
              alt="Link to my LinkedIn Profile"
              className="w-8"
            />
          </a>
          <a href="https://github.com/Julien-Leray">
            <img
              src="github-w.png"
              alt="Link to my GitHub profile"
              className="w-8"
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu - only displayed on mobile screens */}
      <div
        className={`${isOpen ? 'block' : 'hidden'
          } md:hidden absolute top-full left-0 w-full bg-secondary text-primary`}
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

      {/* Social buttons for desktop */}
      <div className="hidden md:flex fixed top-0 right-12 space-x-4 md:space-x-10 md:mt-4 cursor-pointer">
        <a href="https://www.linkedin.com/in/leray-julien">
          <img
            src="linkedIn.png"
            alt="Link to my LinkedIn Profile"
            className="w-8 md:w-10 lg:w-14"
          />
        </a>
        <a href="https://github.com/Julien-Leray">
          <img
            src="github-w.png"
            alt="Link to my GitHub profile"
            className="w-8 md:w-10 lg:w-14"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
