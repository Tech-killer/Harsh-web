import React from "react";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white text-2xl font-bold"> Harsh's Web.
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

        <div
          className={`${isOpen ? "block" : "hidden"} md:block w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row items-center">
            <li className="md:ml-4 mt-2 md:mt-0">
              <NavLink to="/Home" className="text-gray-300 hover:text-white">
                Home
              </NavLink>
            </li>
            <div className="md:ml-4 mt-2 md:mt-0">
              <NavLink to="/about" className="text-gray-300 hover:text-white">
                About
              </NavLink>
            </div>
            <li className="md:ml-4 mt-2 md:mt-0">
              <NavLink to="/Roadmap" className="text-gray-300 hover:text-white">
                RoadMap
              </NavLink>
            </li>
            <li className="md:ml-4 mt-2 md:mt-0">
              <NavLink to="/contact" className="text-gray-300 hover:text-white">
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;