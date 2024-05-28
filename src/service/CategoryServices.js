import axios from "axios";

const GENRE_API_BASE_URL = "http://localhost:8080/genre";

export const getGenreList = () => {
  return axios.get(GENRE_API_BASE_URL);
};
export const getMoviesByGenre = (idGenre,currentPage, sortBy, ascending) =>{
  return axios.get(GENRE_API_BASE_URL+"/movies",{params:{idGenre:idGenre,page:currentPage,sortBy:sortBy,ascending:ascending}});
}
