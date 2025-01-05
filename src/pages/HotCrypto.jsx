import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import CoinInfoCard from "../components/CoinInfoCard";
import { useFetchData } from "../hooks/useFetch";
import { motion } from "framer-motion";

export default function HotCrypto() {
  // const { data, isLoading, error } = useFetchData(
  //   "https://api.coingecko.com/api/v3/search/trending"
  // );
  // console.log(data);
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  const [data, setData] = useState([]);
  // (() => {
  //   return JSON.parse(localStorage.getItem("data"));
  // });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCrypto = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        console.log(response);
        const resData = await response.json();
        setData(() => resData.coins);
        console.log(resData.coins);
        console.log(resData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCrypto();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(data));
  // }, [data]);

  return (
    <div className="w-auto min-h-screen bg-slate-700">
      <motion.div
        className={"bg-slate-700"}
        transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex items-center">
          <div className="w-1/2 text-6xl font-bold text-orange-300 text-end">
            Hot Crypto
          </div>
          <img src="/hot_crypto_title1.png" className="right-0 w-1/2" />
        </div>

        <h1 className="m-4 text-2xl font-bold text-slate-100">
          Listed below are the hottest trending cryptocurrencies
        </h1>
        <div className="m-2 font-bold text-sky-200">
          <p className="text-xl text-sky-100">
            List of coins based on user and trading activity. The data is
            retrived from CoinGecko platform which features trending,
            most-searched and new cryptocurrencies.
          </p>
          <NavLink to="/crypto-trends" viewTransition>
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
            {data?.map((coin) => {
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
      </motion.div>
    </div>
  );
}
