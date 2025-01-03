import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  //<Route path="/:id" element={<Coin />} />
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
