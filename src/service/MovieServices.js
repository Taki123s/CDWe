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
export const searchMovie=(term)=>{
  return axios.get(MOVIE_API_BASE_URL+"/search?term="+`${term}`);
}

export const findMovieWatching = (movieId, token) => {
  return axiosInstance.get(MOVIE_API_BASE_URL + "/watching", {
    params: { movieId: movieId, token: token },
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
export const getMovieChapters = (idMovie) => {
  return axiosInstance.get(MOVIE_API_ADMIN_URL + `/${idMovie}/chapters`);
};

export const uploadChapter = (idMovie, idChapter, data, onUploadProgress) => {
  return axiosInstance.put(
    `${MOVIE_API_ADMIN_URL}/${idMovie}/chapter/${idChapter}/editFile`, 
    data, 
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: onUploadProgress
    }
  );
};
export const addChapter = (idMovie, data) => {
  return axiosInstance.post(
    MOVIE_API_ADMIN_URL + `/${idMovie}/chapters`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
export const editChapter = (idMovie, idChapter, data) => {
  return axiosInstance.put(
    MOVIE_API_ADMIN_URL + `/${idMovie}/chapter/${idChapter}/edit`,
    data
  );
};
export const deleteChapter = (idMovie, idChapter) => {
  return axiosInstance.delete(
    MOVIE_API_ADMIN_URL + `/${idMovie}/chapter/${idChapter}`
  );
};

export const getMovieById =(idMovie) =>{
  return axiosInstance.get(MOVIE_API_BASE_URL+`/${idMovie}`)
}
export const editMovie = (idMovie,data) => {
  return axiosInstance.put(MOVIE_API_ADMIN_URL + `/${idMovie}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};