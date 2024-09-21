import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 flex flex-wrap justify-between items-center text-white px-6 pt-4 md:px-12 lg:px-20 bg-black bg-opacity-80">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden absolute right-6 top-4 z-30">
        {menuOpen ? (
          <RiCloseLine
            size={30}
            className="transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="transition-all duration-300"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:gap-6 md:w-auto">
        <li className="text-md transition-all duration-300 p-2">
          <a href="#About">About</a>
        </li>
        <li className="text-md transition-all duration-300 p-2">
          <a href="#Experience">Experience</a>
        </li>
        <li className="text-md transition-all duration-300 p-2">
          <a href="#Projects">Projects</a>
        </li>
        <li className="text-md transition-all duration-300 p-2">
          <a href="#Footer">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black bg-opacity-90 md:hidden flex flex-col items-center py-4 z-20">
          <li className="text-md transition-all duration-300 p-2">
            <a href="#About" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li className="text-md transition-all duration-300 p-2">
            <a href="#Experience" onClick={() => setMenuOpen(false)}>Experience</a>
          </li>
          <li className="text-md transition-all duration-300 p-2">
            <a href="#Projects" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>
          <li className="text-md transition-all duration-300 p-2">
            <a href="#Footer" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
