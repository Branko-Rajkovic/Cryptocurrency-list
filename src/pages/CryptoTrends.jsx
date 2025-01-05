import React from "react";
import Article from "../components/Article";
import { motion } from "framer-motion";

export default function CryptoTrends() {
  return (
    <div className="page-bg">
      <motion.div
        className="m-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex items-center">
          <div className="w-1/3 title-sky">Cryptocurrency Trends</div>
          <img src="/images/trends_title.png" className="w-2/3" />
        </div>

        <Article />
      </motion.div>
    </div>
  );
}
