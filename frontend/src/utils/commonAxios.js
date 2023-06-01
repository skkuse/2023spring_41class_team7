import axios from "axios";

// 공통 Axios 객체 선언
const serverAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
  
});
serverAxios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
serverAxios.defaults.xsrfCookieName = "csrftoken";

export {serverAxios};