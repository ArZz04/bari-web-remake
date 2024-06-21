import React, { useState } from "react";
import Button from "./Button";
import Label from "./Label";
import Input from "./Input";

const ModalPrice = ({ product, onClose, hidden }) => {
  const [isVisible, setIsVisible] = useState(!hidden);
  const [isChecked, setIsChecked] = useState(false);

  if (!product || hidden) {
    return null; // Si product no está definido o hidden es true, no renderiza nada
  }

  const handleClose = () => {
    setIsVisible(false);
    onClose(); // Llamar a la función onClose para cerrar el modal desde el componente padre
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  console.log(product);

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
                  <Input type="text" id="true" placeHolder={"200010123100"} value={product.barcode} />
                </div>
                <div className="col-span-2">
                  <Label text="Nombre" forId="name" />
                  <Input type="text" id="name" placeHolder={"BISTEC DE RES"} value={product.nombre} />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label text="PLU" forId="plu"  />
                  <Input type="text" id="plu" placeHolder={"100"} value={product.plu} />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label text="Precio" forId="price" />
                  <Input type="text" id="price" placeHolder={"$198"} value={product.precio} />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label text="Familia" forId="family" />
                  <select
                    id="category"
                    defaultValue={product.family}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option value="">Seleccione una categoría</option>
                    <option value="res">RES</option>
                    <option value="cerdo">CERDO</option>
                    <option value="pollo">POLLO</option>
                    <option value="marisco">MARISCO</option>
                    <option value="cremeria">CREMERIA</option>
                    <option value="abarrotes">ABARROTES</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2 ps-4 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    id="basculas-check"
                    value={product.scale ? "true" : "false"}
                    name="bordered-checkbox"
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
                <Button body="Guardar"  />
                <Button body="Cancelar" onClick={handleClose} />
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ModalPrice;
