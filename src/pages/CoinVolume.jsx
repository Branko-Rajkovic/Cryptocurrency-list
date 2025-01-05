import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import CoinInfoCard from "../components/CoinInfoCard";

//const COINMARKETCAP_API_KEY = "1e77a641-75c7-4d61-aa83-32b7debc029d";

export default function CoinCategories() {
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
          "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
        );
        console.log(response);
        const resData = await response.json();
        setData(() => resData.Data);
        console.log(resData.Data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCrypto();
  }, []);
  return (
    <div className="w-auto min-h-screen bg-slate-700">
      <div>
        <motion.div
          className={"bg-slate-700"}
          transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <header className="flex items-center">
            <h2 className="w-1/2 text-4xl text-orange-300">Top 10 by Volume</h2>
            <img src="/volume_title.png" className="inset-y-0 right-0 w-1/2" />
          </header>

          <h1 className="m-4 text-2xl font-bold text-slate-100">
            Toplist by 24H Volume
          </h1>
          <div className="m-2 font-bold text-sky-200">
            <p className="text-xl text-sky-100">
              The total quantity of a cryptocurrency that has been traded in
              last 24 hours.
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
                    key={coin.CoinInfo.Id}
                  >
                    <CoinInfoCard
                      coinName={coin.CoinInfo.FullName}
                      currPrice={coin.RAW.USD.PRICE.toString().slice(0, 12)}
                      image={`https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`}
                      marketCap={coin.DISPLAY.USD.MKTCAP}
                      totalVolume={`24h ${coin.DISPLAY.USD.TOTALVOLUME24H}`}
                      coinId={coin.CoinInfo.FullName}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
