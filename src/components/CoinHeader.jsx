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
    <header className="flex items-center">
      <img
        src={imgSource}
        className="rounded-full border-4 border-orange-300"
      />
      <h1 className="text-5xl m-4 font-bold text-orange-200">
        {coinName} ({coinSymbol})
      </h1>
      <div className="m-2 px-4 font-sans font-bold text-slate-800">
        <span className="text-xl text-orange-300">
          Price: ${price.toString().slice(0, 12)}
        </span>
        <div className="text-md text-slate-50">
          Price updated on {convertToCET(updated)}
        </div>
      </div>
    </header>
  );
}
