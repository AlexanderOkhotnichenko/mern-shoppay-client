import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mern-shoppay-3ce29f4adce3.herokuapp.com',
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;