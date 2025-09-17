"use client";

import { CldImage } from "next-cloudinary";
import React, { useState } from "react";

const ResponsiveHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Logo */}
      <div className="fixed top-6 left-4 sm:left-6 lg:left-8 z-[1001]">
        <a
          href="/"
          className="block transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-full"
        >
          <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-amber-50 to-yellow-50 p-3 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CldImage
              width={24}
              height={24}
              className="w-6 h-6 object-contain transition-transform duration-300 group-hover:rotate-6"
              alt="Logo"
              src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384652/PortfolioSite/JL_Icon_Small_kzcjux.svg"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </a>
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className={`fixed top-6 right-6 z-[1001] group p-3 rounded-full bg-gray-900/80 hover:bg-gray-800/90 border border-amber-500/30 hover:border-amber-400/60 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl ${
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Open menu"
      >
        <div className="relative w-6 h-6 flex flex-col justify-center items-center">
          <div className="w-6 h-0.5 bg-gray-300 group-hover:bg-amber-300 transition-colors duration-300 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-300 group-hover:bg-amber-300 transition-colors duration-300 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-300 group-hover:bg-amber-300 transition-colors duration-300" />
        </div>
      </button>

      {/* Full Screen Menu */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-[1000]"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setMenuOpen(false);
            }
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 md:right-10 z-[1002] group p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/60 border border-amber-500/30 hover:border-amber-400/50 backdrop-blur-sm transition-all duration-300"
            aria-label="Close menu"
          >
            <div className="relative w-6 h-6">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 group-hover:bg-amber-300 transform rotate-45 -translate-y-px transition-colors duration-300"></div>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 group-hover:bg-amber-300 transform -rotate-45 -translate-y-px transition-colors duration-300"></div>
            </div>
          </button>

          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          </div>

          {/* Menu Items */}
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="w-full max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 xl:gap-32 2xl:gap-40 place-items-center">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about/", label: "About" },
                  { href: "/blog/", label: "Blog" },
                  { href: "/contact/", label: "Contact" },
                  { href: "/guestbook/", label: "Guestbook" },
                  { href: "/portfolio/", label: "Portfolio" },
                  { href: "/privacy", label: "Privacy" },
                ].map((item, index) => (
                  <div key={item.href} className="group">
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-center transform transition-all duration-500 ease-out hover:scale-95 hover:-translate-y-2 cursor-pointer"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-100 group-hover:text-amber-300 transition-colors duration-500 tracking-wider font-sans uppercase drop-shadow-2xl leading-tight whitespace-nowrap">
                        {item.label}
                      </h3>
                      <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center mt-2 mx-auto max-w-xs"></div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Close Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none">
                <div className="flex flex-col items-center text-gray-400">
                  <div className="w-px h-8 bg-gradient-to-b from-transparent to-amber-500 mb-2"></div>
                  <p className="text-sm uppercase tracking-widest font-light">
                    Click to navigate
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 border border-amber-500/30 rounded-full pointer-events-none"></div>
              <div className="absolute top-20 right-10 w-12 h-12 border border-amber-400/20 rotate-45 pointer-events-none"></div>
              <div className="absolute bottom-20 left-20 w-16 h-16 border border-yellow-500/25 rounded-full pointer-events-none"></div>
              <div className="absolute bottom-10 right-20 w-8 h-8 bg-amber-500/20 rounded-full animate-pulse pointer-events-none"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveHeader;
