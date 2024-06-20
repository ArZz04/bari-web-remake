import BtnNav from "./common/ButtonNav";
import Logo from "../assets/Logo";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="py-2 px-4 mx-auto max-w-xl lg:pt-16 lg:py-8 lg:px-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Link className="align-items" to="/">
            <Logo />
          </Link>
        </div>
        <ul className="flex flex-col w-full justify-center mt-10 md:flex-row md:gap-10">
          <BtnNav to="/" title="INICIO" />
          <BtnNav to="/quoter" title="COTIZADOR" />
          <BtnNav to="/prices" title="PRECIOS" />
          <BtnNav to="/calculator" title="CALCULADORA" />
        </ul>
        <hr className="md:opacity-0 opacity-10 w-full mt-5" />
      </div>
    </nav>
  );
};

export default Navigation;
