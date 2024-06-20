import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage.jsx";
import Quoter from "./pages/Quoter.jsx";
import Prices from "./pages/Prices.jsx";
import Calculator from "./pages/Calculator.jsx";
import NotFound from "./pages/404.jsx";

import Layout from "./components/layouts/Layout.jsx"; // Importa el nuevo componente Layout

function App() {
  return (
    <BrowserRouter>
      <Layout> {/* Renderiza el Layout común para todas las rutas */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="quoter" element={<Quoter />} />
            <Route path="prices" element={<Prices />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="*" element={<NotFound />} /> {/* Ruta para manejar páginas no encontradas */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
