import React from "react";
import Info from "./Info";

export default function CoinDetails({ coinData }) {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-1/2 p-4 font-semibold text-orange-200 rounded-md bg-slate-600 text-md">
        <Info title="24h high" infoData={coinData.market_data.high_24h.usd} />
        <Info title="24h low" infoData={coinData.market_data.low_24h.usd} />
        <Info title="Market cap rank" infoData={coinData.market_cap_rank} />
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
      <div className="w-1/2 p-4 text-slate-200">
        <img src={coinData.image.small} />
        <h3 className="text-xl font-semibold">Description</h3>
        {coinData.description.en ? coinData.description.en : ""}
      </div>
      <div className="w-1/2 p-4 font-semibold text-orange-200 rounded-md bg-slate-600 text-md">
        <Info title="Asset Platform" infoData={coinData.asset_platform_id} />

        <Info title="Categories" infoData={coinData.categories.toString()} />
        <Info
          title="Market Cap in USD"
          infoData={coinData.market_data.market_cap.usd}
        />
        <Info
          title="Market Cap 24h Change in USD"
          infoData={coinData.market_data.market_cap_change_24h_in_currency.usd}
        />
        <Info title="Max Supply" infoData={coinData.market_data.max_supply} />
      </div>
      <div className="w-1/2 p-4 font-semibold text-orange-200 rounded-md bg-slate-600 text-md">
        <Info
          title="Total Volume"
          infoData={coinData.market_data.total_volume.usd}
        />
        <Info
          title="Market Cap 24h Change in %"
          infoData={coinData.market_data.market_cap_change_percentage_24h}
        />
        <Info
          title="Price Change 24h in USD"
          infoData={coinData.market_data.price_change_24h_in_currency.usd}
        />
        <Info
          title="Price Change 24h in USD"
          infoData={
            coinData.market_data.price_change_percentage_1h_in_currency.usd
          }
        />
        <Info
          title="Homepage"
          infoData={coinData.links.homepage.slice(0, 1).toString()}
        />
      </div>
    </div>
  );
}
