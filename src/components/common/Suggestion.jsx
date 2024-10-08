import React from "react";

const Suggest = ({ plu, nameProduct, onClick }) => {
  return (
    <button
      className="shadow bg-gray-600 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-gray-300
        font-bold py-2 px-4 rounded"
      type="button"
      onClick={onClick}
    >
      {plu} | {nameProduct}
    </button>
  );
};

export default Suggest;
