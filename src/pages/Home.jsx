import { NavLink } from "react-router-dom";
import homeTitle from "/home_title.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex-col min-h-screen bg-slate-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="bg-cover min-h-fit"
        style={{ backgroundImage: `url(${homeTitle})` }}
      >
        <h1 className="pt-16 font-bold text-orange-300 text-8xl">Crypto </h1>
        <h1 className="pb-16 font-bold text-8xl text-sky-300">Bay</h1>
      </div>

      <div className="flex">
        <NavLink to="/hot-crypto" className="w-1/4">
          <div>
            <img src="/hot_crypto_title1.png" />
            <h3 className="text-xl font-semibold text-orange-300">
              Trending Crypto
            </h3>
          </div>
        </NavLink>
        <NavLink to="/coin-volume" className="w-1/4">
          <div>
            <img src="volume_title.png" />
            <h3 className="text-xl font-semibold text-orange-300">
              Top 10 by Volume
            </h3>
          </div>
        </NavLink>
        <NavLink to="/exchange" className="w-1/4">
          <div>
            <img src="exchange_title.png" />
            <h3 className="text-xl font-semibold text-orange-300">Exchanges</h3>
          </div>
        </NavLink>
      </div>
      <img src="horizontal_rule.png" className="h-10" />
      <div className="flex">
        <NavLink to="/crypto-trends" className="w-1/4">
          <div>
            <img src="/trends_title.png" />
            <h3 className="text-xl font-semibold text-sky-300">
              Crypto Trends
            </h3>
          </div>
        </NavLink>
        <NavLink to="/blockchain-intro" className="w-1/4">
          <div>
            <img src="blockchain_title.png" />
            <h3 className="text-xl font-semibold text-sky-300">
              Blockchain Intro
            </h3>
          </div>
        </NavLink>
      </div>
      <img src="horizontal_rule.png" className="w-1/4" />
      <div className="flex justify-between w-screen">
        <NavLink to="/crypto-types" className="w-1/4">
          <div>
            <img src="dif_types.png" />
            <h3 className="text-xl font-semibold text-sky-300">
              Types of Crypto
            </h3>
          </div>
        </NavLink>
      </div>
      <img src="horizontal_rule.png" className="w-1/4" />
      <NavLink to="/basic-terms">
        <div>
          <img src="basic_terms_title.png" className="w-1/12" />
          <h3 className="text-xl font-semibold end-0 text-sky-300">
            Basic Terms
          </h3>
        </div>
      </NavLink>
    </motion.div>
  );
}
