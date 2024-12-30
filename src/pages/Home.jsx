import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Article from "../components/Article";

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
    <div className="p-4 bg-slate-400">
      <Header>
        <img src="/blockchain_woman.png" className="w-full" />
      </Header>

      <h1 className="m-4 text-6xl font-bold text-slate-100">
        Trending Cryptocurrency
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
        <ul className="p-4 bg-slate-300">
          {trendingCrypto.map((coin) => {
            return (
              <li
                className="flex gap-2 p-2 m-2 border-4 bg-slate-200 border-slate-100"
                key={coin.item.coin_id}
              >
                <div className="w-1/2 p-2 bg-white border-4 border-slate-100">
                  <NavLink to={`/${coin.item.id}`}>
                    <h3 className="w-1/4 px-4 text-3xl font-bold text-sky-700">
                      {coin.item.name}
                    </h3>

                    <p className="font-semibold text-sky-600">
                      Click for more details
                    </p>
                  </NavLink>
                </div>

                <div className="flex flex-col items-center w-1/4 p-4 m-2 rounded-md bg-slate-50">
                  <img
                    src={`${coin.item.large}`}
                    className="w-1/2 rounded-full"
                  />
                  <p className="my-2 font-semibold text-slate-500">
                    Total Volume: {coin.item.data.total_volume}
                  </p>
                </div>
                <div className="flex flex-col items-center w-1/4">
                  <p className="px-4 m-2 font-sans font-bold text-slate-800">
                    <span className="text-slate-400">Price: </span> $
                    {coin.item.data.price.toString().slice(0, 12)}
                  </p>
                  <p className="px-4 m-2 text-sm font-bold text-slate-800">
                    <span className="text-slate-400">Market Cap: </span>

                    {coin.item.data.market_cap}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
