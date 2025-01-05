import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="text-sm font-semibold">
      <img src="/lightning.png" />
      <ul className="p-2 text-orange-300">
        <li className="p-2 mr-4 transition duration-200 ease-in-out delay-150 border-2 rounded-r-lg border-slate-700 bg-slate-600 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500">
          <NavLink to="/hot-crypto" viewTransition>
            Hot Crypto
          </NavLink>
        </li>
        <li className="p-2 mr-4 transition duration-200 ease-in-out delay-150 border-2 rounded-r-lg border-slate-700 bg-slate-600 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500">
          <NavLink to="/coin-volume" viewTransition>
            Toplist by 24H Volume
          </NavLink>
        </li>
        <li className="p-2 mr-4 transition duration-200 ease-in-out delay-150 border-2 rounded-r-lg border-slate-700 bg-slate-600 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500">
          <NavLink to="/exchanges" viewTransition>
            Crypto Exchanges
          </NavLink>
        </li>
      </ul>

      <ul className="p-2 text-sky-300">
        <li className="p-2 mr-4 transition duration-200 ease-in-out delay-150 border-2 rounded-r-lg border-slate-700 bg-slate-600 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500">
          <NavLink to="/crypto-trends" viewTransition>
            Understanding Crypto Trends
          </NavLink>
        </li>

        <li className="p-2 mr-4 transition duration-200 ease-in-out delay-150 border-2 rounded-r-lg border-slate-700 bg-slate-600 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500">
          <NavLink to="/blockchain-intro" viewTransition>
            Understanding Blockchain
          </NavLink>
        </li>
        <li className="p-2 mr-4 transition duration-200 ease-in-out delay-150 border-2 rounded-r-lg border-slate-700 bg-slate-600 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500">
          <NavLink to="/crypto-types" viewTransition>
            Crypto Types
          </NavLink>
        </li>
        <li className="p-2 mr-4 transition duration-200 ease-in-out delay-150 border-2 rounded-r-lg border-slate-700 bg-slate-600 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500">
          <NavLink to="/basic-terms" viewTransition>
            Basic Terms
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
