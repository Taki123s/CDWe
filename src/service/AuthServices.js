import axios from "axios";
const AUTH_API_BASE_URL = "http://localhost:8080/api/auth";
export const login = (user)=>axios.post(AUTH_API_BASE_URL+"/login",user)
