import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center py-6 px-12">
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <NavLink to='/'>
        <img
          src="icon.png"            // public/icon.png
          alt="Logo"
          className="w-8 h-8 object-contain"
        />
        </NavLink>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:block w-[30%]">
        <ul className="w-full flex items-center justify-between space-x-8 text-sm font-[500] text-gray-400">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white border-b-2 border-cyan-400"
                    : "hover:text-white transition-colors"
                } pb-1`
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white border-b-2 border-cyan-400"
                    : "hover:text-white transition-colors"
                } pb-1`
              }
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white border-b-2 border-cyan-400"
                    : "hover:text-white transition-colors"
                } pb-1`
              }
            >
              EXPERIENCE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white border-b-2 border-cyan-400"
                    : "hover:text-white transition-colors"
                } pb-1`
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <nav className="absolute top-full right-4 mt-2 w-48 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg md:hidden z-10">
          <ul className="flex flex-col items-center space-y-4 text-sm font-semibold text-gray-400 p-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "hover:text-white transition-colors"} pb-1`
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "hover:text-white transition-colors"} pb-1`
                }
              >
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "hover:text-white transition-colors"} pb-1`
                }
              >
                EXPERIENCE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "hover:text-white transition-colors"} pb-1`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      
    </header>
  );
}
