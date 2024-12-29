import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import CoinChart from "../components/CoinChart";
import CoinHeader from "../components/CoinHeader";
import CoinDetails from "../components/CoinDetails";

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
          `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=70`
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
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CoinHeader
            imgSource={coinData.image.large}
            coinName={coinData.name}
            coinSymbol={coinData.symbol}
          />
          <CoinChart graphData={graphData} />
          <CoinDetails coinData={coinData} />
        </>
      )}
    </div>
  );
}
