import React from "react";

export default function GeneralError() {
  return (
    <div className="page-bg">
      <div className="title-orange">Something went wrong! </div>

      <div className="link-anime">
        <NavLink to="/">Home</NavLink>
      </div>
      <ul className="p-2 text-orange-300">
        <li className="link-anime">
          <NavLink to="/hot-crypto">Hot Crypto</NavLink>
        </li>
        <li className="link-anime">
          <NavLink to="/coin-volume">Toplist by 24H Volume</NavLink>
        </li>
        <li className="link-anime">
          <NavLink to="/exchanges">Crypto Exchanges</NavLink>
        </li>
      </ul>
      <ul className="p-2 text-sky-300">
        <li className="link-anime">
          <NavLink to="/crypto-trends">Understanding Crypto Trends</NavLink>
        </li>

        <li className="link-anime">
          <NavLink to="/blockchain-intro">Understanding Blockchain</NavLink>
        </li>
        <li className="link-anime">
          <NavLink to="/crypto-types">Crypto Types</NavLink>
        </li>
        <li className="link-anime">
          <NavLink to="/basic-terms">Basic Terms</NavLink>
        </li>
      </ul>
    </div>
  );
}
