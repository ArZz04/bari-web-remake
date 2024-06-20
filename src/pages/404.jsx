// NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col mt-32 items-center ">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#43120c] px-2 text-sm rounded rotate-12 absolute">
        Pagina no encontrada
      </div>
      <button className="mt-5">
        <Link
          to="/"
          className="relative inline-block text-sm font-medium text-[#43120c] group active:text-red-950 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#43120c] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          {/* <span className="relative block px-8 py-3 bg-white border border-current">
            Ir a Inicio
          </span> */}
        </Link>
      </button>
    </main>
  );
};

export default NotFound;
