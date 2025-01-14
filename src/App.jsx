import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { ErrorBoundary } from "react-error-boundary";
import GeneralError from "./components/GeneralError";

function App() {
  //<Route path="/:id" element={<Coin />} />
  return (
    <ErrorBoundary fallback={<GeneralError />}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
