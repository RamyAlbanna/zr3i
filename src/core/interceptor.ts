import axios from "axios";
import { IS_LOADING$ } from "../shared/components/spinner";
import { ERROR_MESSAGE$ } from "../shared/components/toaster";

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
    IS_LOADING$.next(false);
    return Promise.reject(error);
  }
);

export default axiosHttp;
