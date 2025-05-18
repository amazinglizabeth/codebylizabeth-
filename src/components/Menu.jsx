import React, { useState } from "react";
import Logo from "../assets/images/logo-cbl.png";

const Menu = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pt-3 px-4 md:px-8 flex items-center justify-between relative">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-16 h-16" />
      </div>

      <div className="hidden md:flex justify-center mx-auto space-x-6 font-semibold">
        <a href="#about" className="hover:text-pink-500 transition">
          About
        </a>
        <a href="#projects" className="hover:text-pink-500 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-pink-500 transition">
          Contact
        </a>
      </div>

      <div className="md:fixed md:top-5 md:right-3 hidden md:flex">
        <button
          onClick={toggleTheme}
          className={` p-2 rounded-lg transition-colors duration-300 ${
            darkMode
              ? "bg-pink-100 text-black hover:bg-pink-200"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
        >
          {darkMode ? (
            <span className="flex items-center gap-2">
              <span>☀️</span> Light
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span>🌙</span> Dark
            </span>
          )}
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 w-full z-10 px-4 py-4 flex flex-col gap-4 md:hidden font-semibold shadow-md ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <button
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            className={` p-2 rounded-lg transition-colors duration-300 ${
              darkMode
                ? "bg-pink-100 text-black hover:bg-pink-200"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Menu;
