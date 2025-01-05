import { NavLink } from "react-router-dom";
import homeTitle from "/images/home_title.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="page-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="bg-cover min-h-96"
          style={{ backgroundImage: `url(${homeTitle})` }}
        >
          <h1 className="pt-16 font-bold text-orange-300 text-8xl">Crypto </h1>
          <h1 className="pb-16 font-bold text-8xl text-sky-300">Faye</h1>
        </div>

        <div className="flex">
          <NavLink to="/hot-crypto" className="w-1/4">
            <div>
              <img src="/images/hot_crypto_title1.png" />
              <h3 className="orange-text-strong">Trending Crypto</h3>
            </div>
          </NavLink>
          <NavLink to="/coin-volume" className="w-1/4">
            <div>
              <img src="/images/volume_title.png" />
              <h3 className="orange-text-strong">Top 10 by Volume</h3>
            </div>
          </NavLink>
          <NavLink to="/exchanges" className="w-1/4">
            <div>
              <img src="/images/exchange_title.png" />
              <h3 className="orange-text-strong">Exchanges</h3>
            </div>
          </NavLink>
        </div>
        <img src="/images/horizontal_rule.png" className="h-10" />
        <div className="flex">
          <NavLink to="/crypto-trends" className="w-1/4">
            <div>
              <img src="/images/trends_title.png" />
              <h3 className="sky-text-strong">Crypto Trends</h3>
            </div>
          </NavLink>
          <NavLink to="/images/blockchain-intro" className="w-1/4">
            <div>
              <img src="/images/blockchain_title.png" />
              <h3 className="sky-text-strong">Blockchain Intro</h3>
            </div>
          </NavLink>
        </div>
        <img src="/images/horizontal_rule.png" className="w-1/4" />
        <div className="flex">
          <NavLink to="/crypto-types" className="w-1/4">
            <div>
              <img src="/images/coin_types_title.png" />
              <h3 className="sky-text-strong">Types of Crypto</h3>
            </div>
          </NavLink>
        </div>
        <img src="/images/horizontal_rule.png" className="w-1/4" />
        <NavLink to="/basic-terms">
          <div>
            <img src="/images/basic_terms_title.png" className="w-1/12" />
            <h3 className="sky-text-strong">Basic Terms</h3>
          </div>
        </NavLink>
      </motion.div>
    </div>
  );
}
