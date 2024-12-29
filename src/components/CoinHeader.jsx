import React from "react";

export default function CoinHeader({ imgSource, coinName, coinSymbol }) {
  return (
    <header>
      <img src={imgSource} />
      <h1>
        {coinName} ({coinSymbol})
      </h1>
    </header>
  );
}
