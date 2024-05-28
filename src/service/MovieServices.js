import axios from "axios";
import Cookies from 'js-cookie';

const MOVIE_API_BASE_URL = "http://localhost:8080/movie";

const axiosInstance = axios.create({
  baseURL: MOVIE_API_BASE_URL
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


export const getMovieList = () => {
  return axios.get(MOVIE_API_BASE_URL,);
};
export const findMovie = (id) => {
  return axios.get(MOVIE_API_BASE_URL + `/${id}`);
};
export const findMovieWatching = (movieId,token)=>{
  return axiosInstance.get(MOVIE_API_BASE_URL+'/watching',{params:{movieId:movieId,token:token}})
}
