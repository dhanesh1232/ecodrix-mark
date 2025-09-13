"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGlobal } from "@/context/handleContent";
// import "@fillout/react/style.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setIsFilloutOpen } = useGlobal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50"
          : "bg-slate-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  className="h-10 w-auto lg:h-12 transition-transform duration-200 group-hover:scale-105"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {/* <Link
              href="/blog"
              className="text-slate-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 hover:bg-slate-800/50 relative group"
            >
              Blogs
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </Link>
            <Link
              href="/about-us"
              className="text-slate-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 hover:bg-slate-800/50 relative group"
            >
              About
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </Link> */}

            {/* Fillout trigger inside nav */}
            <button
              onClick={() => setIsFilloutOpen(true)}
              className="bg-gradient-to-r rounded-full from-blue-600 to-blue-700 text-white px-4 py-2 ml-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:shadow-lg hover:shadow-blue-500/25 font-medium"
            >
              Talk to sales
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2 border-t border-slate-700/50">
            {/* <Link
              href="/blog"
              className="block text-slate-300 hover:text-white hover:bg-slate-800/50 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/about-us"
              className="block text-slate-300 hover:text-white hover:bg-slate-800/50 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="https://app.ecodrix.com"
              className="block text-slate-300 hover:text-white hover:bg-slate-800/50 px-4 py-3 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Join
            </Link> */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsFilloutOpen(true);
              }}
              className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-4 py-3 mt-2 rounded-full cursor-pointer hover:from-blue-700 hover:to-blue-800 hover:rounded-full transition-all duration-200 transform focus:outline-none focus:ring-0 font-medium"
            >
              Talk to Sales
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
