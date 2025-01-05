import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import ExchangeCart from "../components/ExchangeCart";
import { motion } from "framer-motion";

export default function Exchanges() {
  const [exchangesList, setExchangesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchExchanges = async () => {
      try {
        const response = await fetch("https://api.coincap.io/v2/exchanges");
        console.log(response);
        const resData = await response.json();
        setExchangesList(resData.data);
        console.log(resData.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchExchanges();
  }, []);
  return (
    <div className="w-auto min-h-screen bg-slate-700">
      <motion.div
        className="bg-slate-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className="flex items-center">
          <h2 className="w-1/2 text-4xl text-orange-300">
            Cryptocurrency Exchanges
          </h2>
          <img src="/exchange_title.png" className="inset-y-0 right-0 w-1/2" />
        </header>

        <h1 className="m-4 text-2xl font-bold text-slate-100">
          The following are the top cryptocurrency exchanges, according to
          traffic, liquidity, and trading volumes.
        </h1>
        <div className="m-2 font-bold text-sky-200">
          <NavLink to="/crypto-trends">
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
            {exchangesList.map((exchange) => {
              return (
                <div
                  className="w-1/3 p-2 border-4 rounded-md bg-slate-600 border-slate-700 text-slate-300"
                  key={exchange.exchangeId}
                >
                  <ExchangeCart
                    exchangeName={exchange.name}
                    exchangeUrl={exchange.exchangeUrl}
                    percentTotalVolume={
                      Number(
                        exchange.percentTotalVolume &&
                          exchange.percentTotalVolume >= 0.001
                      )
                        ? exchange.percentTotalVolume.slice(0, 6)
                        : "Lower than 0.001%"
                    }
                    rank={exchange.rank}
                    volumeUsd={exchange.volumeUsd}
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
