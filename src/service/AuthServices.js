import axios from 'axios';
import Cookies from 'js-cookie';

const AUTH_API_BASE_URL = "http://localhost:8080/auth";

const axiosInstance = axios.create({
  baseURL: AUTH_API_BASE_URL
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
export const login = (user)=>axiosInstance.post(AUTH_API_BASE_URL+"/login",user)
export const logout = (token) => axiosInstance.post(AUTH_API_BASE_URL+"/logout",token)
export const register = (userRegister) =>axiosInstance.post(AUTH_API_BASE_URL+"/regiser",userRegister)
