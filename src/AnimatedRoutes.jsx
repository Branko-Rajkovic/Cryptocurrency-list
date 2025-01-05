import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HotCrypto from "./pages/HotCrypto";
import Coin from "./pages/Coin";
import CryptoTrends from "./pages/CryptoTrends";
import Page from "./pages/Page";
import Layout from "./components/Layout";
import Exchanges from "./pages/EXchanges";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CoinVolume from "./pages/CoinVolume";
import BlockChainIntro from "./pages/BlockChainIntro";
import BasicTerms from "./pages/BasicTerms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CryptoTypes from "./pages/CryptoTypes";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/hot-crypto" element={<HotCrypto />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/crypto-trends" element={<CryptoTrends />} />
            <Route path="/crypto-types" element={<CryptoTypes />} />
            <Route path="/blockchain-intro" element={<BlockChainIntro />} />
            <Route path="/basic-terms" element={<BasicTerms />} />
            <Route path="/page" element={<Page />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/coin-volume" element={<CoinVolume />} />
            <Route path="/:id" element={<Coin />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
