import React from "react";
import { useLocation } from "react-router-dom";

export default function NavbarItem({ title, path }) {
  const location = useLocation();
  let active = false;

  if (location.pathname === path) {
    active = true;
  } else {
    active = false;
  }

  return (
    <div className="font-medium h-10 relative flex items-center">
      <h3
        className={`${
          active ? "!bg-accent !text-white" : ""
        } text-gray-700 z-10 px-2 py-1 hover:bg-gray-200 rounded-md`}
      >
        {title}
      </h3>
    </div>
  );
}
