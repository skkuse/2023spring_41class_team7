import axios from "axios";

// 공통 Axios 객체 선언
export const serverAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
});
