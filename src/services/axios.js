import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.arzz.site/',  // Reemplaza con la URL base de tu API
  headers: {
    'Content-Type': 'application/json',
    // Aquí puedes agregar otros headers necesarios, como tokens de autorización, etc.
  },
});

export default axiosInstance;
