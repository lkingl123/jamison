"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu toggle state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative">
      {/* Left Section: Logo and Menu Links */}
      <div className="flex items-center space-x-6">
        {/* Logo Icon */}
        <div className="flex items-center">
          <div className="bg-customIndigo w-8 h-8 flex items-center justify-center rounded-full mr-2">
            <span className="text-white font-bold text-lg">J</span>
          </div>
          <Link href="/" className="text-2xl font-bold text-black">
            Jamison
          </Link>
        </div>
        {/* Menu Links */}
        <div className="hidden lg:flex space-x-8 text-black">
          <Link
            href="/"
            className="px-4 py-2 font-semibold text-customIndigo hover:bg-gray-100 rounded-md"
          >
            How it works
          </Link>
          {/* <Link
            href="/pricing"
            className="px-4 py-2 font-semibold hover:text-gray-900 hover:bg-gray-100 rounded-md"
          >
            Pricing
          </Link>
          <Link
            href="/api"
            className="px-4 py-2 font-semibold hover:text-gray-900 hover:bg-gray-100 rounded-md"
          >
            API
          </Link> */}
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="text-3xl text-gray-800" />
        ) : (
          <FaBars className="text-3xl text-gray-800" />
        )}
      </div>

      {/* Right Section: Buttons */}
      <div className="hidden lg:flex space-x-6">
        <Link
          href="/login"
          className="bg-gray-200 text-black px-6 py-3 rounded-md hover:bg-gray-300 text-lg font-medium"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          className="bg-black text-white text-lg font-medium px-6 py-3 rounded-md hover:bg-customBlue transition"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg w-full lg:hidden py-8 px-6 rounded-md z-10 transition-all ease-in-out duration-300">
          {/* <Link
            href="/"
            className="block text-lg text-black bg-gray-100 py-3 px-4 hover:text-customBlue hover:bg-gray-100 rounded-md"
            onClick={toggleMenu} // Close the menu after clicking
          >
            How it works
          </Link> */}
          {/* <Link
            href="/pricing"
            className="block text-lg text-black py-3 px-4 hover:text-customIndigo hover:bg-gray-100 rounded-md"
            onClick={toggleMenu} // Close the menu after clicking
          >
            Pricing
          </Link>
          <Link
            href="/api"
            className="block text-lg text-black py-3 px-4 hover:text-customIndigo hover:bg-gray-100 rounded-md"
            onClick={toggleMenu} // Close the menu after clicking
          >
            API
          </Link> */}
          <div className="mt-6 space-y-4">
            <Link
              href="/login"
              className="block text-lg text-black bg-gray-300 py-2 px-4 hover:bg-gray-500 rounded-md"
              onClick={toggleMenu} // Close the menu after clicking
            >
              Sign in
            </Link>
            <Link
              href="/create-chatbot"
              className="block text-lg text-white bg-black py-3 px-4 rounded-md hover:bg-customBlue transition"
              onClick={toggleMenu} // Close the menu after clicking
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
