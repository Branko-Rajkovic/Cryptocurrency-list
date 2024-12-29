import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

function App() {
  //<Route path="/:id" element={<Coin />} />
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Coin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
