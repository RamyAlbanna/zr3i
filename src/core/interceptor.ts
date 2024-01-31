import axios from "axios";
import { IS_LOADING$ } from "../shared/components/spinner";
import { ERROR_MESSAGE$ } from "../shared/components/toaster";

export const apiUrl = "https://fakestoreapi.com/products";
const axiosHttp = axios.create({
  baseURL: `${apiUrl}`,
});

axiosHttp.interceptors.request.use(
  (request: any) => {
    IS_LOADING$.next(true);
    const clonedRequest = { ...request };
    const token = "Bearer " + localStorage.getItem("token");
    clonedRequest.headers = {
      ...clonedRequest.headers,
      Authorization: token,
    };
    return clonedRequest;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosHttp.interceptors.response.use(
  (response) => {
    IS_LOADING$.next(false);
    return response;
  },
  (error) => {
    ERROR_MESSAGE$.next(error.message);
    IS_LOADING$.next(false);
    return Promise.reject(error);
  }
);

export default axiosHttp;
