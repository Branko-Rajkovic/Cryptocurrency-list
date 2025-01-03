import React from "react";
import { NavLink } from "react-router-dom";

export default function CoinInfoCard({
  coinName,
  currPrice,
  image,
  marketCap,
  totalVolume,
  coinId,
}) {
  return (
    <div>
      <h3 className="mx-2 my-1 text-2xl font-bold text-orange-300">
        {coinName}
      </h3>
      <div className="flex items-center p-2 border-2 rounded-md border-slate-400 text-slate-200">
        <div className="mr-2">
          <img
            src={image}
            className="w-1/3 border-4 border-orange-200 rounded-full"
          />
        </div>

        <div>
          <p>Market Cap:</p>
          <p>{marketCap}</p>
          <p>Total Volume:</p>
          <p>{totalVolume}</p>
        </div>
      </div>
      <p className="m-2">Current Price: ${currPrice}</p>
      <div className="m-2">
        <NavLink
          to={`/${coinId}`}
          className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
          viewTransition
        >
          Click for Details
        </NavLink>
      </div>
    </div>
  );
}
