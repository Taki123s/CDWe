import axios from "axios";

const GENRE_API_BASE_URL = "http://localhost:8080/api/genres";

export const getGenreList = () => {
  return axios.get(GENRE_API_BASE_URL);
};

