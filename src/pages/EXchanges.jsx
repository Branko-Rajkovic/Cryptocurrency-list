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
    <div className="page-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className="flex items-center">
          <h2 className="w-1/2 title-orange">Cryptocurrency Exchanges</h2>
          <img
            src="/images/exchange_title.png"
            className="inset-y-0 right-0 w-1/2"
          />
        </header>

        <p className="sky-text-large">
          The following are the top cryptocurrency exchanges, according to
          traffic, liquidity, and trading volumes.
        </p>
        <div className="sky-text-large">
          <NavLink to="/crypto-types">
            <span className="link">Click here</span> to read more about
            cryptocurrency types.
          </NavLink>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap">
            {exchangesList?.map((exchange) => {
              return (
                <div
                  className="w-1/3 card-outer-box"
                  key={exchange?.exchangeId}
                >
                  <ExchangeCart
                    exchangeName={exchange?.name}
                    exchangeUrl={exchange?.exchangeUrl}
                    percentTotalVolume={
                      Number(
                        exchange?.percentTotalVolume &&
                          exchange?.percentTotalVolume >= 0.001
                      )
                        ? exchange?.percentTotalVolume.slice(0, 6)
                        : "Lower than 0.001%"
                    }
                    rank={exchange?.rank}
                    volumeUsd={exchange?.volumeUsd}
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
