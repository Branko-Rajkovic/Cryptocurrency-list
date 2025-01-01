import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="text-orange-300">
      <img src="/lightning.png" />
      <ul className="p-4">
        <li>
          <NavLink to="/exchanges">Crypto Exchanges</NavLink>
        </li>
        <li>Top Decentralized Exchanges</li>
        <li>Coins Categories</li>
      </ul>
    </aside>
  );
}
