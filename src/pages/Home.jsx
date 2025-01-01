import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import CoinInfoCard from "../components/CoinInfoCard";

export default function Home() {
  const [trendingCrypto, setTrendingCrypto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCrypto = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        console.log(response);
        const data = await response.json();
        setTrendingCrypto(data.coins);
        console.log(data.coins);
        console.log(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCrypto();
  }, []);
  return (
    <div className="bg-slate-700">
      <img src="/trending_cr_title.png" className="inset-y-0 right-0 w-full" />

      <h1 className="m-4 text-2xl font-bold text-slate-100">
        Listed below are the hottest trending cryptocurrencies
      </h1>
      <div className="m-2 font-bold text-sky-200">
        <p className="text-xl text-sky-100">
          List of coins based on user and trading activity. The data is retrived
          from CoinGecko platform which features trending, most-searched and new
          cryptocurrencies.
        </p>
        <NavLink to="/crypto">
          <span className="underline underline-offset-4 text-sky-50">
            Click here
          </span>{" "}
          to read more about cryptocurrency trends.
        </NavLink>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap m-4">
          {trendingCrypto.map((coin) => {
            return (
              <div
                className="w-1/3 p-2 border-4 rounded-md bg-slate-600 border-slate-700 text-slate-300"
                key={coin.item.coin_id}
              >
                <CoinInfoCard
                  coinName={coin.item.name}
                  currPrice={coin.item.data.price.toString().slice(0, 12)}
                  image={coin.item.large}
                  marketCap={coin.item.data.market_cap}
                  totalVolume={coin.item.data.total_volume}
                  coinId={coin.item.id}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
