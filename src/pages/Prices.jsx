import React, { useState } from "react";
import Box from "../components/common/Box";
import Label from "../components/common/Label";
import Input from "../components/common/Input";
import Btn from "../components/common/Button";
import ModalError from "../components/common/ModalError";
import useApi from "../services/useApi"; // Ajusta la ruta según donde hayas ubicado useApi.js
import ModalPrice from "../components/common/ModalPrice";
import Suggest from "../components/common/Suggestion";

const Prices = () => {
  const [productName, setProductName] = useState("");
  const [plu, setPlu] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const { loading, error, getProductByName, getProductByPLU, getProductBySimilarName } = useApi();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]); // Estado para las sugerencias
  const [isWriting, setIsWriting] = useState(false);

  // Función para cerrar los modales
  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalErrorOpen(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchError(false);

    try {
      var productResponse = null;

      if (productName) {
        productResponse = await getProductByName( productName );
      } else if (plu) {
        productResponse = await getProductByPLU( plu );
      }

      if (productResponse) {
        setSearchResult(productResponse);
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

  const handleSuggestions = async (name) => {
    try {
      let suggestionsResponse = null;

      if (name) {
        suggestionsResponse = await getProductBySimilarName(name);
      }

      if (suggestionsResponse) {
        setSuggestions(suggestionsResponse); // Actualizar el estado de las sugerencias
      } else {
        setSuggestions([]); // Limpiar sugerencias si no hay resultados
      }
    } catch (error) {
      console.error("Error al obtener sugerencias:", error);
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
                onChange={(e) => {
                  const value = e.target.value;
                  setProductName(value);
                  setPlu(""); // Limpiar plu cuando se escribe en productName

                  if (value.length > 0) {
                    handleSuggestions(value); // Llamar a la función de sugerencias con el valor actual
                  } else {
                    setSuggestions([]); // Limpiar sugerencias si el input está vacío
                  }
                }}
                disabled={plu.length > 0}
              />
              {/* Mostrar sugerencias debajo del campo de entrada */}
              {suggestions.length > 0 && (
                <div className="absolute flex flex-col shadow mt-2 w-3/4">
                  {suggestions.map((suggestion, index) => {
                    if (index > 4) return null; // Limitar a 5 sugerencias
                    if (suggestion.DESCRIPCION === productName) return null; // No mostrar la sugerencia actual
                    return (
                        <Suggest
                            key={index}
                            plu={suggestion.CODIGO}
                            nameProduct={suggestion.DESCRIPCION}
                            onClick={() => {
                                setProductName(suggestion.DESCRIPCION);
                                setSuggestions([]); // Limpiar sugerencias después de seleccionar una
                            }}
                        />
                    );
                })}
                </div>
              )}
            </div>
            <p className="text-center px-3 lg:py-14">ó</p>
            <div className="w-full lg:w-1/2 px-3 lg:py-5">
              <Label text="Por PLU:" forId="pluProduct" />
              <Input
                id="pluProduct"
                placeHolder="100"
                value={plu}
                onChange={(e) => {
                  setPlu(e.target.value);
                  setProductName(""); // Limpiar productName cuando se escribe en plu
                }}
                disabled={productName.length > 0}
              />
            </div>
          </div>
          <div className="w-1/2 md:flex mt-3 md:items-center">
            <Btn body="BUSCAR" onClick={handleSearch} />
          </div>
        </form>
        {loading && <p className="text-center mt-3">Buscando producto...</p>}
        <ModalError onClose={closeModal} hidden={!isModalErrorOpen} body="No se encontraron resultados" />
        <ModalPrice onClose={closeModal} hidden={!isModalOpen} product={searchResult || ''} />
      </div>
    </Box>
  );
};


export default Prices;