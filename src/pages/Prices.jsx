import React, { useState } from "react";
import Box from "../components/common/Box";
import Label from "../components/common/Label";
import Input from "../components/common/Input";
import Btn from "../components/common/Button";
import ModalError from "../components/common/ModalError";
import useApi from "../hooks/useApi"; // Ajusta la ruta según donde hayas ubicado useApi.js
import ModalPrice from "../components/common/ModalPrice";

const Prices = () => {
  const [productName, setProductName] = useState("");
  const [plu, setPlu] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const { loading, error, checkProductExistence } = useApi();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);

  // Función para cerrar los modales
  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalErrorOpen(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchError(false);

    try {
      let exists;
      let productFound;

      if (productName) {
        exists = await checkProductExistence({ productName });
        productFound = exists;
      } else if (plu) {
        exists = await checkProductExistence({ pluProduct: plu });
        productFound = exists;
      }

      if (exists) {
        setSearchResult(productFound);
        setIsModalOpen(true);
      } else {
        setSearchError(true);
        setIsModalErrorOpen(true);
      }
    } catch (error) {
      console.error("Error al buscar el producto:", error);
      setSearchError(true);
      setIsModalErrorOpen(true);
    }
  };

  return (
    <Box title="PRECIOS">
      <div className="p-5">
        <p className="text-center font-bold pb-3">BUSQUE SU PRODUCTO</p>
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col lg:flex-row -mx-3">
            <div className="w-full lg:w-1/2 px-3 py-5">
              <Label text="Por Nombre:" forId="nameProduct" />
              <Input
                id="nameProduct"
                placeHolder="BISTEC DE RES"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <p className="text-center px-3 lg:py-14">ó</p>
            <div className="w-full lg:w-1/2 px-3 lg:py-5">
              <Label text="Por PLU:" forId="pluProduct" />
              <Input
                id="pluProduct"
                placeHolder="100"
                value={plu}
                onChange={(e) => setPlu(e.target.value)}
              />
            </div>
          </div>
          <div className="w-1/2 md:flex mt-3 md:items-center">
            {/* Ahora handleSearch se ejecutará solo cuando se haga clic en el botón */}
            <Btn body="BUSCAR" onClick={handleSearch} />
          </div>
        </form>
        {loading && <p className="text-center mt-3">Buscando producto...</p>}
        <ModalError onClose={closeModal} hidden={!isModalErrorOpen} body="No se encontraron resultados" />
        <ModalPrice onClose={closeModal} hidden={!isModalOpen} product={searchResult} />
      </div>
    </Box>
  );
};

export default Prices;