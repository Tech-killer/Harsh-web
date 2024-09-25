import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import react-scroll for smooth scrolling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="text-white text-2xl font-bold cursor-pointer">
          Harsh's Web.
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className={!isOpen ? "block" : "hidden"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                className={isOpen ? "block" : "hidden"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:block w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row items-center">
            <li className="md:ml-4 mt-2 md:mt-0">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-red-600 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="md:ml-4 mt-2 md:mt-0">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-red-600 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="md:ml-4 mt-2 md:mt-0">
              <Link
                to="roadmap"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-red-600 cursor-pointer"
              >
                Roadmap
              </Link>
            </li>
            <li className="md:ml-4 mt-2 md:mt-0">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-red-600 cursor-pointer"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
