import axios from "axios";
import Cookies from "js-cookie";

const MOVIE_API_BASE_URL = "http://localhost:8080/movie";
const MOVIE_API_ADMIN_URL = "http://localhost:8080/admin/movies";

const axiosInstance = axios.create({});

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

export const getMovieList = () => {
  return axios.get(MOVIE_API_BASE_URL);
};
export const findMovie = (id) => {
  return axios.get(MOVIE_API_BASE_URL + `/${id}`);
};
export const findMovieWatching = (movieId, token) => {
  return axiosInstance.get(MOVIE_API_BASE_URL + "/watching", {
    params: { movieId: movieId, token: token },
  });
};
export const uploadChapter = (data) => {
  return axiosInstance.post("/uploadChapter", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const adminListMovie = () => {
  return axiosInstance.get(MOVIE_API_ADMIN_URL);
};
export const deleteMovie = (id) => {
  return axiosInstance.delete(MOVIE_API_ADMIN_URL + `/delete/${id}`);
};
export const addMovie = (data) => {
  return axiosInstance.post(MOVIE_API_ADMIN_URL + "/add", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
