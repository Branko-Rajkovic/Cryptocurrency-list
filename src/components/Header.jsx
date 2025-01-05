import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ children }) {
  return (
    <div>
      <nav className="header">
        <ul>
          <li>
            <NavLink
              to="/"
              className="px-2 py-1 text-orange-300 rounded-md hover:text-white hover:bg-orange-300"
              viewTransition
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="px-2 py-1 rounded-md text-slate-300 hover:text-white hover:bg-slate-300"
              viewTransition
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="px-2 py-1 rounded-md text-sky-300 hover:text-white hover:bg-sky-300"
              viewTransition
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
