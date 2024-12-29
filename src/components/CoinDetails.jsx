import React from "react";
import Info from "./Info";

export default function CoinDetails({ coinData }) {
  return (
    <div className="bg-slate-200 p-4 text-md font-semibold">
      <Info title="Market cap rank" infoData={coinData.market_cap_rank} />
      <Info title="24h high" infoData={coinData.market_data.high_24h.usd} />
      <Info title="24h low" infoData={coinData.market_data.low_24h.usd} />
      <Info
        title="Circulating supply"
        infoData={coinData.market_data.circulating_supply}
      />
      <Info
        title="Current price"
        infoData={coinData.market_data.current_price.usd}
      />
      <Info
        title="Price change, one year"
        infoData={`${coinData.market_data.price_change_percentage_1y} %`}
      />
    </div>
  );
}
