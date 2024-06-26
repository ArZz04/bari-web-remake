import React, { useEffect, useState } from "react";
import Button from "./Button";
import Label from "./Label";
import Input from "./Input";
import useApi from "../../services/useApi";

const ModalPrice = ({ product, onClose, hidden }) => {
  const [isVisible, setIsVisible] = useState(!hidden);
  const [isChecked, setIsChecked] = useState(false);
  const { putProductData } = useApi();
  const [editedProduct, setEditedProduct] = useState({
    DESCRIPCION: "",
    CODIGO: "",
    BARRAS: "",
    P01: "",
    FAMILIA: "",
    IMPORTADO: false
  });

  // useEffect para actualizar editedProduct cuando product cambia
  useEffect(() => {
    if (product) {
      setEditedProduct({
        DESCRIPCION: product.DESCRIPCION || "",
        CODIGO: product.CODIGO || "",
        BARRAS: product.BARRAS || "",
        P01: product.P01 || "",
        FAMILIA: product.FAMILIA || "",
        IMPORTADO: !!product.IMPORTADO   // Convertir a booleano
      });
      setIsChecked(!!product.IMPORTADO);  // Actualizar el estado del checkbox
    } else {
      // Si product es null o undefined, reiniciar editedProduct
      setEditedProduct({
        DESCRIPCION: "",
        CODIGO: "",
        BARRAS: "",
        P01: "",
        FAMILIA: "",
        IMPORTADO: false
      });
      setIsChecked(false);  // Reiniciar el estado del checkbox
    }
  }, [product]);

  if (!product || hidden) {
    return null; // Si product no está definido o hidden es true, no renderiza nada
  }

  const handleClose = () => {
    setIsVisible(false);
    onClose(); // Llamar a la función onClose para cerrar el modal desde el componente padre
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setEditedProduct({ ...editedProduct, [id]: value });
  };

  const saveProduct = async () => {
    try {
      // Lógica para guardar los cambios en el producto
      console.log("Guardando cambios en el producto:", editedProduct);
      
      // Llamar a la función putProductData de useApi.js para guardar los cambios
      await putProductData(editedProduct.CODIGO, editedProduct);

      // Llamar a la función onClose para cerrar el modal después de guardar
      onClose();
    } catch (error) {
      console.error("Error al guardar cambios en el producto:", error);
      // Manejo de errores: mostrar mensaje de error, etc.
    }
  };

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
    setEditedProduct({ ...editedProduct, importado: checked }); // Actualizar importado en editedProduct
  };

  return (
    <div
      id="crud-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative rounded-lg shadow bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 text-white">
              Detalles del Producto
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
              onClick={handleClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Cerrar modal</span>
            </button>
          </div>

          <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <Label text="Código de Barras" forId="true" />
                  <Input
                  type="text"
                  id="BARRAS"
                  value={editedProduct.BARRAS || "NO CONTIENE"}
                  onChange={handleInputChange}
                />
                </div>
                <div className="col-span-2">
                  <Label text="Nombre" forId="name" />
                  <Input
                  type="text"
                  id="name"
                  value={editedProduct.DESCRIPCION}
                  onChange={handleInputChange}
                />
                  </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label text="PLU" forId="plu"  />
                  <Input
                  type="text"
                  id="plu"
                  value={editedProduct.CODIGO}
                  onChange={handleInputChange}
                />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label text="Precio" forId="price" />
                  <Input
                  type="text"
                  id="P01"
                  value={editedProduct.P01}
                  onChange={handleInputChange}
                />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label text="Familia" forId="family" />
                  <select
                  id="family"
                  value={editedProduct.FAMILIA}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="">Seleccione una categoría</option>
                  <option value="RES">RES</option>
                  <option value="PUERCO">CERDO</option>
                  <option value="POLLO">POLLO</option>
                  <option value="MARISCOS">MARISCO</option>
                  <option value="CLA">CREMERIA</option>
                  <option value="abarrotes">ABARROTES</option>
                </select>
                </div>

                <div className="flex items-center space-x-2 ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input
                  type="checkbox"
                  id="IMPORTADO"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                  <label
                    htmlFor="basculas-check"
                    className="text-sm text-gray-900 dark:text-white cursor-pointer"
                  >
                    Activo en Básculas
                  </label>
                </div>
              </div>  
              <div className="flex flex-row justify-between">
                <Button body="Guardar" onClick={saveProduct}  />
                <Button body="Cancelar" onClick={handleClose} />
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ModalPrice;
