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
      <Header />

      <h1 className="m-4 text-6xl text-slate-100 font-bold">
        Trending Cryptocurrency
      </h1>
      <div className="m-2 font-bold text-sky-200">
        <NavLink to="/crypto">
          <span className="underline underline-offset-4 text-sky-50">
            Click here
          </span>{" "}
          to read more about cryptocurrency.
        </NavLink>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <ul className="p-4 bg-slate-300">
          {trendingCrypto.map((coin) => {
            return (
              <li
                className="m-2 p-2 bg-slate-200 border-4 border-slate-100 flex gap-2"
                key={coin.item.coin_id}
              >
                <div className="p-2 w-1/2 border-4 border-slate-100 bg-white">
                  <NavLink to={`/${coin.item.id}`}>
                    <h3 className="font-bold text-sky-700 text-3xl px-4 w-1/4">
                      {coin.item.name}
                    </h3>

                    <span className="text-slate-700">
                      {coin.item.data.content
                        ? coin.item.data.content.description
                        : ""}
                    </span>
                    <p className="text-sky-600 font-semibold">
                      Click for more details
                    </p>
                  </NavLink>
                </div>

                <div className="p-4 bg-slate-50 flex flex-col items-center m-2 w-1/4 rounded-md">
                  <img
                    src={`${coin.item.large}`}
                    className="w-1/2 rounded-full"
                  />
                  <p className="text-slate-500 my-2 font-semibold">
                    Total Volume: {coin.item.data.total_volume}
                  </p>
                </div>
                <div className="w-1/4 flex flex-col items-center">
                  <p className="m-2 px-4 font-sans font-bold text-slate-800">
                    <span className="text-slate-400">Price: </span> $
                    {coin.item.data.price.toString().slice(0, 12)}
                  </p>
                  <p className="m-2 px-4 text-sm font-bold text-slate-800">
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
