import React from "react";
import { Link } from "react-router-dom";
import { BiCompass } from "react-icons/bi";

import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="w-full h-16 bg-gray-100 flex items-center px-8">
      <Link to="/" aria-label="Home">
        <div className="font-bold text-xl text-gray-700 hover:text-accent flex items-center">
          <BiCompass className="mr-2" />
          BRAND NAME
        </div>
      </Link>
      <div className="ml-auto flex gap-2">
        <Link to="/" aria-label="Home">
          <NavbarItem title="Home" path="/" />
        </Link>
        <Link to="/blog" aria-label="Blog">
          <NavbarItem title="Blog" path="/blog" />
        </Link>
        <Link to="/about" aria-label="About me">
          <NavbarItem title="About me" path="/about" />
        </Link>
        <Link to="/contact" aria-label="Contact">
          <NavbarItem title="Contact" path="/contact" />
        </Link>
      </div>
      <div className="w-0.5 bg-gray-300 h-6 mx-4"></div>
      <div className="flex gap-2">
        <Link to="/signin" aria-label="Sign in">
          <NavbarItem title="Sign in" path="/signin" />
        </Link>
        <Link to="/signup" aria-label="Sign up">
          <NavbarItem title="Sign up" path="/signup" />
        </Link>
      </div>
    </div>
  );
}
