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
      className="p-4 fixed top-0 left-0 w-full z-50 text-secondary bg-opacity-50 bg-site-background h-32 py-8"
      style={{ borderBottom: '4px solid #15616D' }}
    >
      <div className="flex justify-between items-center ml-12 mr-12">
        <div className="text-5xl font-bold ml-2 text-secondary">
          <a
            href="/Julien-Leray_Resume.pdf"
            download
            className="text-lg md:text-2xl bg-gray-800 hover:bg-gray-500 text-white font-bold py-4 px-8 rounded-full"
          >
            My resume
          </a>

        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-secondary focus:outline-none"
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

        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
            <Link
              href="/#presentation"
              onClick={(e) => handleScroll(e, '#presentation')}
              className="block mt-4 md:mt-0 text-3xl"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={(e) => handleScroll(e, '#about')}
              className="block mt-4 md:mt-0 text-3xl"
            >
              About
            </Link>
            <Link
              href="/#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="block mt-4 md:mt-0 text-3xl"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="block mt-4 md:mt-0 text-3xl"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
