import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import CoinInfoCard from "../components/CoinInfoCard";
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
    <div className="page-bg">
      <motion.div
        transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex items-center">
          <div className="w-1/2 title-orange">Hot Crypto</div>
          <img src="/images/hot_crypto_title1.png" className="right-0 w-1/2" />
        </div>

        <h1 className="h-2xl-sky">
          Listed below are the hottest trending cryptocurrencies
        </h1>
        <div className="m-2 sky-text-large">
          <p>
            List of coins based on user and trading activity. Trending,
            most-searched and new cryptocurrencies.
          </p>
          <NavLink to="/crypto-trends">
            <span className="link">Click here</span> to read more about
            blockchain.
          </NavLink>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap m-4">
            {data?.map((coin) => {
              return (
                <div className="w-1/3 card-outer-box" key={coin?.item?.coin_id}>
                  <CoinInfoCard
                    coinName={coin?.item?.name}
                    currPrice={coin?.item?.data?.price.toString().slice(0, 12)}
                    image={coin?.item?.large}
                    marketCap={coin?.item?.data?.market_cap}
                    totalVolume={coin?.item?.data?.total_volume}
                    coinId={coin?.item?.id}
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
