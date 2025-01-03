import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Cryptocurrency from "./pages/Cryptocurrency";
import Page from "./pages/Page";
import Layout from "./components/Layout";
import Exchanges from "./pages/EXchanges";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/crypto" element={<Cryptocurrency />} />
            <Route path="/page" element={<Page />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/:id" element={<Coin />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
