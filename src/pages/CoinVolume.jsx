import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import CoinInfoCard from "../components/CoinInfoCard";

//const COINMARKETCAP_API_KEY = "1e77a641-75c7-4d61-aa83-32b7debc029d";

export default function CoinVolume() {
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
    <div className="page-bg">
      <div>
        <motion.div
          transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <header className="flex items-center">
            <h2 className="w-1/2 title-orange">Top 10 by Volume</h2>
            <img
              src="/images/volume_title.png"
              className="inset-y-0 right-0 w-1/2"
            />
          </header>

          <h3 className="h-2xl-sky">Toplist by 24H Volume</h3>
          <div className="m-2 sky-text-large">
            <p>
              The total quantity of a cryptocurrency that has been traded in
              last 24 hours.
            </p>
            <NavLink to="/crypto-trends">
              <span className="link">Click here</span> to read more about
              cryptocurrency trends.
            </NavLink>
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <div className="flex flex-wrap m-4">
              {data?.map((coin) => {
                return (
                  <div
                    className="w-1/3 card-outer-box"
                    key={coin?.CoinInfo?.Id}
                  >
                    <h3 className="h-2xl-orange">{coin?.CoinInfo?.FullName}</h3>
                    <img
                      src={`https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`}
                      className="w-1/2 m-2"
                    />
                    <p className="sky-text-strong">
                      USD Price:{" "}
                      <span className="orange-text-strong">
                        {coin?.RAW?.USD?.PRICE.toString().slice(0, 12)}
                      </span>
                    </p>
                    <p className="sky-text-strong">
                      Marcet Cap:{" "}
                      <span className="orange-text-strong">
                        {coin?.DISPLAY?.USD?.MKTCAP}
                      </span>
                    </p>
                    <p className="sky-text-strong">
                      Total Volume 24h:{" "}
                      <p className="orange-text-strong">
                        {`24h ${coin?.DISPLAY?.USD.TOTALVOLUME24H}`}
                      </p>
                    </p>
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
