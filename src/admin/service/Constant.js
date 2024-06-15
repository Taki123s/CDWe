
export const BASE_URL = 'http://localhost:8080'

export const API_GET_PATHS = {
    GET_PROFILE:`${BASE_URL}/account/view/`,
     GET_LIST_MOVIE_FOLLOWED_API_ADMIN_URL :`${BASE_URL}/movie/findAll?userId=`,
     GET_ALL_MOVIE:`${BASE_URL}/movie/`,
     GET_ALL_GENRE:`${BASE_URL}/genre`,
     GET_MOVIE_SAME:`${BASE_URL}/movie/same/`,
     GET_FOLLOW:`${BASE_URL}/follow/`,
     GET_LIST_USER_BOUGHT_SERVICEPACK:`${BASE_URL}/servicePack/all/user/bought`,
     GET_ALL_SERVICEPACK:`${BASE_URL}/servicePack/getAll`,
     GET_ALL_MOVIE:`${BASE_URL}/movie/index`,
     GET_LIST_USER_LOCKED:`${BASE_URL}/account/deActive`,

}
export const API_POST_PATHS = {
    FOLLOW_MOVIE: `${BASE_URL}/follow/save`,
}
export const API_PATCH_PATHS={
    EDIT_USER:`${BASE_URL}/admin/user/`,
}

