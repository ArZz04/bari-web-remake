import { useState } from "react";
import axiosInstance from "../services/axios"; // Ajusta la ruta según donde hayas ubicado axios.js

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkProductExistence = async ({ productName, pluProduct }) => {
    setLoading(true);
    setError(null);

    try {
      let response;
      if (productName) {
        response = await axiosInstance.post("/buscar-producto", {
          nameProduct: productName,
        });
      } else if (pluProduct) {
        response = await axiosInstance.post("/buscar-producto", {
          pluProduct: pluProduct,
        });
      }

      setLoading(false);
      console.log("Producto encontrado:", response.data.producto);
      return response.data.producto;
    } catch (error) {
      setLoading(false);
      console.log("Producto no encontrado:");
      setError(error.response.data.message);
      throw error;
    }
  };

  return {
    loading,
    error,
    checkProductExistence,
  };
};

export default useApi;
