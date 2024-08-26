import { useState } from "react";
import axiosInstance from "./axios"; // Ajusta la ruta según donde hayas ubicado axios.js

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProductByPLU = async (pluProduct) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get("/products/"+pluProduct);

      setLoading(false);
      return response.data;
    }catch{
      setLoading(false);
      console.log("Producto no encontrado:");
      setError(error.response.data.message);
      throw error;
    }
  };

  const getProductByName = async ( productName ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get("/products/search/"+productName);

      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      console.log("Producto no encontrado:");
      setError(error.response.data.message);
      throw error;
    }
  };

  const getProductBySimilarName = async ( productName ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get("/products/search/similar/"+productName);

      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      console.log("Producto no encontrado:");
      setError(error.response.data.message);
      throw error;
    }
  }

  const putProductData = async ( plu, newData ) => {

    try {
      const response = await axiosInstance.put("/products/update/short/"+plu, newData);

      return response.data;
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
    getProductByName,
    getProductByPLU,
    getProductBySimilarName,
    putProductData
  };
};

export default useApi;
