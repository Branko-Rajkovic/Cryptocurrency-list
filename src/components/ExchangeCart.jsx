import React from "react";
import { NavLink } from "react-router-dom";

export default function ExchangeCart({
  exchangeName,
  exchangeUrl,
  percentTotalVolume,
  rank,
  volumeUsd,
}) {
  return (
    <div>
      <h3 className="mx-2 my-1 text-2xl font-bold text-orange-300">
        {exchangeName}
      </h3>
      <div className="flex items-center p-2 border-2 rounded-md border-slate-400 text-slate-200">
        <div>
          <p>Rank:</p>
          <p>{rank}</p>
          <p>Percent Total Volume:</p>
          <p>{percentTotalVolume} %</p>
        </div>
      </div>
      <p className="m-2">Volume in USD: ${volumeUsd}</p>
      <div className="m-2">
        <NavLink
          to={`${exchangeUrl}`}
          className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
        >
          Go to {exchangeName}
        </NavLink>
      </div>
    </div>
  );
}
