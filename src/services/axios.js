import axios from 'axios';

// Define la URL base según el entorno
const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/api/'  // URL de desarrollo
  : 'https://api.arzz.site/';  // URL de producción

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Aquí puedes agregar otros headers necesarios, como tokens de autorización, etc.
  },
});

export default axiosInstance;
