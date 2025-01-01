import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ children }) {
  return (
    <div>
      <nav className="bg-white border-slate-200 dark:bg-slate-700">
        <div className="flex flex-wrap items-stretch justify-between max-w-screen-xl p-4 mx-auto">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 font-medium md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <NavLink
                  to="/"
                  className="px-2 py-1 text-orange-300 rounded-md hover:text-white hover:bg-orange-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="px-2 py-1 rounded-md text-slate-300 hover:text-white hover:bg-slate-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="px-2 py-1 rounded-md text-sky-300 hover:text-white hover:bg-sky-300"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
