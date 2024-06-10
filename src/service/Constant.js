
export const BASE_URL = 'http://localhost:8080'

export const API_GET_PATHS = {
     GET_LIST_MOVIE_FOLLOWED_API_ADMIN_URL :`${BASE_URL}/movie/findAll?userId=`,
     GET_ALL_MOVIE:`${BASE_URL}/movie/`,
     GET_ALL_GENRE:`${BASE_URL}/genre/`,
     GET_MOVIE_SAME:`${BASE_URL}/movie/same/`,
     GET_FOLLOW:`${BASE_URL}/FOLLOW/`,
}
export const API_POST_PATHS = {
    FOLLOW_MOVIE: `${BASE_URL}/follow/save`
}

