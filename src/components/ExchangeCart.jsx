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
      <h3 className="h-2xl-orange">{exchangeName}</h3>
      <div className="card-small-box">
        <div>
          <p>Rank:</p>
          <p>{rank}</p>
          <p>Percent Total Volume:</p>
          <p>{percentTotalVolume} %</p>
        </div>
      </div>
      <p className="m-2">Volume in USD: ${volumeUsd}</p>
      <div className="m-2">
        <NavLink to={`${exchangeUrl}`} className="button-sky">
          Go to {exchangeName}
        </NavLink>
      </div>
    </div>
  );
}
