import React from "react";
import Article from "../components/Article";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function CryptoTrends() {
  return (
    <div className="w-auto min-h-screen bg-slate-700">
      <motion.div
        className="m-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex items-center">
          <div className="w-1/3 text-4xl text-sky-300">
            Cryptocurrency Trends
          </div>
          <img src="/trends_title.png" className="w-2/3" />
        </div>

        <Article />
      </motion.div>
    </div>
  );
}
