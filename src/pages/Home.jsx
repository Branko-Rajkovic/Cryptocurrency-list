import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

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
    <div>
      <h1>Trending Cryptocurrency</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {trendingCrypto.map((coin) => {
            return (
              <li key={coin.item.coin_id}>
                <Link to={`/${coin.item.id}`}>{coin.item.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
