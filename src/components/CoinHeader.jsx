import React from "react";
import { convertToCET } from "../utils/helper";

export default function CoinHeader({
  imgSource,
  coinName,
  coinSymbol,
  price,
  updated,
}) {
  return (
    <header className="card">
      <img
        src={imgSource}
        className="w-1/6 border-4 border-orange-300 rounded-full"
      />
      <h2 className="title-orange">
        {coinName} ({coinSymbol})
      </h2>
      <div className="px-4 m-2">
        <span className="orange-text-strong">
          Price: ${price.toString().slice(0, 12)}
        </span>
        <div className="sky-text-strong">
          Price updated on {convertToCET(updated)}
        </div>
      </div>
    </header>
  );
}
