import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ children }) {
  return (
    <div className="p-4">
      <nav className="bg-white border-slate-200 dark:bg-slate-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <img src="/b_small.png" className="h-8" alt="Flowbite Logo" />

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 font-medium border rounded-lg border-slate-100 md:p-0 bg-slate-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700">
              <li>
                <NavLink
                  to="/"
                  className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block px-3 py-2 rounded text-slate-900 hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block px-3 py-2 rounded text-slate-900 hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
