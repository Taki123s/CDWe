import axios from "axios";
import Cookies from 'js-cookie';
const MOVIE_API_BASE_URL = "http://localhost:8080/servicePack";

const axiosInstance = axios.create({
    baseURL: MOVIE_API_BASE_URL
});
axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("jwt_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export const getServiceList = () => {
    return axios.get(MOVIE_API_BASE_URL,);
};
export const getUserPackedList = () => {
    return axios.get(`${MOVIE_API_BASE_URL}/getAll`,);
};
export const getUserPackedListByUser = (idUser) => {
    return axios.get(`${MOVIE_API_BASE_URL}/getAll/${idUser}`);
};
export const editServicePack = (id, updatedService) => {
    return axios.put(`${MOVIE_API_BASE_URL}/${id}`, updatedService);
};
export const deleteServicePack = (id, updatedService) => {
    return axios.put(`${MOVIE_API_BASE_URL}/delete/${id}`);
};
export const deleteUserPacked = (id) => {
    return axios.put(`${MOVIE_API_BASE_URL}/delete/user-packed/${id}`);
};
export const createServicePack = (Service) => {
    return axiosInstance.post(`${MOVIE_API_BASE_URL}/create`,Service,{
        headers: {
            "Content-Type": "multipart/form-data",
        }});
};
