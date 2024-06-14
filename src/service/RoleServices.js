import axios from 'axios';
import Cookies from 'js-cookie';

const ROLE_API_BASE_URL = "http://localhost:8080/admin/roles";

const axiosInstance = axios.create({
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('jwt_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const getRoles = ()=>{
    return axiosInstance.get(ROLE_API_BASE_URL)
}