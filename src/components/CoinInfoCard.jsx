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
      <h3 className="h-2xl-orange">{coinName}</h3>
      <div className="card-small-box">
        <div className="w-1/3 mr-2">
          <img
            src={image}
            className="border-4 border-orange-200 rounded-full"
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
        <NavLink to={`/${coinId}`} className="button-sky" viewTransition>
          Click for Details
        </NavLink>
      </div>
    </div>
  );
}
