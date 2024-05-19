import axios from "axios";

const MOVIE_API_BASE_URL = "http://localhost:8080/movie";

export const getMovieList = () => {
  return axios.get(MOVIE_API_BASE_URL,);
};
export const findMovie = (id) => {
  return axios.get(MOVIE_API_BASE_URL + `/${id}`);
};
export const findMovieWatching = (id)=>{
  return axios.get(MOVIE_API_BASE_URL+'/watching/'+id)
}
