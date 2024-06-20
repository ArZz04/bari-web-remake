// App.jsx
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import Quoter from "./pages/Quoter.jsx";
import Prices from "./pages/Prices.jsx";
import Calculator from "./pages/Calculator.jsx";
import NotFound from "./pages/404.jsx";
import Spinner from "./components/Spinner.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="quoter" element={<Quoter />} />
          <Route path="prices" element={<Prices />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
