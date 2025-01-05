import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import CoinChart from "../components/CoinChart";
import CoinHeader from "../components/CoinHeader";
import CoinDetails from "../components/CoinDetails";
import { convertArrayToCET } from "../utils/helper";
import { motion } from "framer-motion";

export default function Coin() {
  const [coinData, setCoinData] = useState({});
  const [graphData, setGraphData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    setIsLoading(true);
    const fetchCrypto = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=7`
        );
        console.log(response);
        const data = await response.json();
        console.log(data);
        setGraphData(() => data.prices);

        const details = await fetch(
          `https://api.coingecko.com/api/v3/coins/${params.id}`
        );
        const detailsData = await details.json();
        console.log(detailsData);
        setCoinData(() => detailsData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCrypto();
  }, []);

  if (!coinData || !graphData.length) {
    return (
      <>
        <h1>NO data!</h1>
      </>
    );
  }

  return (
    <div className="w-auto min-h-screen bg-slate-700">
      <motion.div
        className="w-full p-8 bg-slate-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex items-center w-full mb-4">
          <div className="flex flex-wrap items-stretch justify-between max-w-screen-xl p-4 mx-auto">
            <div className="text-4xl text-slate-200">
              Trending Cryptocurrency
            </div>
          </div>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CoinHeader
              imgSource={coinData.image.large}
              coinName={coinData.name}
              coinSymbol={coinData.symbol}
              price={coinData.market_data.current_price.usd}
              updated={coinData.last_updated}
            />

            <CoinChart graphData={convertArrayToCET(graphData)} />

            <CoinDetails coinData={coinData} />
          </>
        )}
      </motion.div>
    </div>
  );
}
