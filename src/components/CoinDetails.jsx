import React from "react";
import Info from "./Info";

import SentimentBar from "./SentimentBar";

export default function CoinDetails({ coinData }) {
  return (
    <div className="card">
      <div className="data-block">
        <Info
          title="24h high"
          infoData={coinData?.market_data?.high_24h?.usd}
        />
        <Info title="24h low" infoData={coinData?.market_data?.low_24h?.usd} />
        <Info title="Market cap rank" infoData={coinData?.market_cap_rank} />
        <Info
          title="Circulating supply"
          infoData={coinData?.market_data?.circulating_supply}
        />
        <Info
          title="Current price"
          infoData={coinData?.market_data?.current_price?.usd}
        />
        <Info
          title="Price change, one year"
          infoData={`${coinData?.market_data?.price_change_percentage_1y} %`}
        />
      </div>

      <div className="sentiment">
        <div>
          <SentimentBar
            title="Sentiment"
            sentiment={Math.round(coinData?.sentiment_votes_up_percentage)}
          />
        </div>
      </div>

      <div className="data-block">
        <Info title="Asset Platform" infoData={coinData?.asset_platform_id} />

        <Info title="Categories" infoData={coinData?.categories.toString()} />
        <Info
          title="Market Cap in USD"
          infoData={coinData?.market_data?.market_cap?.usd}
        />
        <Info
          title="Market Cap 24h Change in USD"
          infoData={
            coinData?.market_data?.market_cap_change_24h_in_currency?.usd
          }
        />
        <Info title="Max Supply" infoData={coinData?.market_data?.max_supply} />
      </div>

      <div className="data-block">
        <Info
          title="Total Volume"
          infoData={coinData?.market_data?.total_volume?.usd}
        />
        <Info
          title="Market Cap 24h Change in %"
          infoData={coinData?.market_data?.market_cap_change_percentage_24h}
        />
        <Info
          title="Price Change 24h in USD"
          infoData={coinData?.market_data?.price_change_24h_in_currency?.usd}
        />
        <Info
          title="Price Change 24h in USD"
          infoData={
            coinData?.market_data?.price_change_percentage_1h_in_currency?.usd
          }
        />
        <Info
          title="Homepage"
          infoData={coinData?.links?.homepage.slice(0, 1).toString()}
        />
      </div>
      <div>
        <div className="article">
          <img src={coinData?.image?.small} />
          <h3>Description</h3>
          <p>{coinData?.description?.en ? coinData?.description?.en : ""}</p>
        </div>
      </div>
    </div>
  );
}
