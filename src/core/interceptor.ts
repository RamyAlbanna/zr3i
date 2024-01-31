import axios from "axios";
import { ERROR_MESSAGE$ } from "../App";

export const apiUrl = "https://fakestoreapi.com/products";
const axiosHttp = axios.create({
  baseURL: `${apiUrl}`,
});

axiosHttp.interceptors.request.use(
  (request: any) => {
    const token = "token";
    return {
      ...request,
      headers: {
        ...(token && { Authorization: `${token}` }),
        ...request.headers,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    ERROR_MESSAGE$.next(error.message);
    return Promise.reject(error);
  }
);

export default axiosHttp;
