import { motion } from "framer-motion";
import BasicCryptoTerms from "../components/BasicCryptoTerms";

export default function BasicTerms() {
  return (
    <div className="page-bg">
      <motion.div
        transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex items-center">
          <div className="w-3/4 text-4xl text-sky-300">
            Basic Terms in Cryptocurrency Trading
          </div>
          <img src="/images/basic_terms_title.png" className="w-1/4" />
        </div>

        <BasicCryptoTerms />
      </motion.div>
    </div>
  );
}
