import axios from 'axios';

// Define la URL base según el entorno
const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://192.168.1.3:3000/api/'  // URL de desarrollo
  : 'http://187.224.97.238:3000/api/';  // URL de producción

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Aquí puedes agregar otros headers necesarios, como tokens de autorización, etc.
  },
});

export default axiosInstance;
