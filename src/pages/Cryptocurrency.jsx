import React from "react";
import Article from "../components/Article";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Cryptocurrency() {
  return (
    <motion.div
      className="m-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src="/image_header.png" />

      <Article />
    </motion.div>
  );
}
