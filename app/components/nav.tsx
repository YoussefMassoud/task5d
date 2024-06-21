/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import { useState } from "react"; // Import useState to manage state for mobile menu

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close
  const [activeSection, setActiveSection] = useState("home"); // State to track active section

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSetActive = (section :string) => {
    setActiveSection(section);
    closeMenu(); // Close the menu after selecting a section (for mobile view)
  };

  const people = [
    {
      id: 1,
      name: "Hassan Abu Ali",
      designation: "Software Engineer",
      image: "/b2edc168bd2fd8ef0e2a7039fa12f31b.png",
    },
  ];

  return (
    <div className="py-12 px-6 lg:px-16">
      {" "}
      <div className="py-3 rounded-xl bg-[#1B1C37]">
        <div className="flex justify-between items-center">
          {/* Logo or Branding */}
          <div className="flex items-center px-3 lg:px-12 space-x-7  lg:space-x-7">
            <AnimatedTooltip items={people} />
            <div className="text-white text-md">Hassan Abu Ali</div>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white px-5 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu Links */}
          <div className="hidden lg:flex space-x-7 text-md">
            <span
              className={`text-white cursor-pointer ${
                activeSection === "home" && "border-b-2 border-[#7579FF]"
              }`}
              onClick={() => handleSetActive("home")}
            >
              Home
            </span>
            <span
              className={`text-white cursor-pointer ${
                activeSection === "skills" && "border-b-2 border-[#7579FF]"
              }`}
              onClick={() => handleSetActive("skills")}
            >
              Skills
            </span>
            <span
              className={`text-white cursor-pointer ${
                activeSection === "portfolio" && "border-b-2 border-[#7579FF]"
              }`}
              onClick={() => handleSetActive("portfolio")}
            >
              Portfolio
            </span>
            <span
              className={`text-white cursor-pointer ${
                activeSection === "blog" && "border-b-2  border-[#7579FF]"
              }`}
              onClick={() => handleSetActive("blog")}
            >
              Blog
            </span>
          </div>
          {/* Contact Me Button */}
          <div className="justify-end text-white px-12 lg:flex hidden">
            <button className="bg-[#7579FF] py-2 rounded-xl px-6">
              Contact Me
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isOpen && (
          <div className="lg:hidden bg-[#1B1C37] mt-2 py-3 px-4 rounded-xl">
            <div className="flex  flex-col space-y-3">
              <span className="text-white">Home</span>
              <span className="text-white">Skills</span>
              <span className="text-white">Portfolio</span>
              <span className="text-white">Blog</span>
              <button
                className="bg-[#7579FF] py-2 rounded-xl px-6 text-white"
                onClick={closeMenu}
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
