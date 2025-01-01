import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-4 bg-white rounded-lg shadow dark:bg-slate-800">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
        <span className="text-sm text-slate-500 sm:text-center dark:text-slate-400">
          © 2025{" "}
          <NavLink href="/" className="hover:underline">
            B™
          </NavLink>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-500 dark:text-slate-400 sm:mt-0">
          <li>
            <NavLink href="#" className="hover:underline me-4 md:me-6">
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="hover:underline">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
