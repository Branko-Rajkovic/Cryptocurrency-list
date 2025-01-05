import React from "react";
import ArticleBlockChain from "../components/ArticleBlockChain";
import { motion } from "framer-motion";

export default function BlockChainIntro() {
  return (
    <div className="w-auto min-h-screen bg-slate-700">
      <motion.div
        className={"bg-slate-700"}
        transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex items-center">
          <div className="w-1/2 text-4xl text-sky-300">What is Blockchain?</div>
          <img src="/blockchain_title.png" className="w-1/2" />
        </div>

        <ArticleBlockChain />
      </motion.div>
    </div>
  );
}
