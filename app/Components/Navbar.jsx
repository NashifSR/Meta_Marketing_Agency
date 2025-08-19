"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ to highlight active link

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Packages", path: "/packages" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact", isButton: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MetaAgency
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.isButton ? (
                <Link
                  key={link.name}
                  href={link.path}
                  className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative text-gray-700 hover:text-blue-600 transition ${
                    pathname === link.path ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  {link.name}
                  {/* underline animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                      pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-3xl text-gray-700 focus:outline-none"
            >
              {isOpen ? "×" : "≡"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((link) =>
              link.isButton ? (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={toggleMenu}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-center transition"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={toggleMenu}
                  className={`text-gray-700 hover:text-blue-600 transition ${
                    pathname === link.path ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
