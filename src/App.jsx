import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage.jsx";
import Quoter from "./pages/Quoter.jsx";
import Prices from "./pages/Prices.jsx";
import Calculator from "./pages/Calculator.jsx";

import Navigation from "./components/Navigation.jsx";

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/quoter" element={<Quoter />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/calculator" element={<Calculator />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
