import axios, { AxiosError } from "axios";
import { IS_LOADING$ } from "../shared/components/spinner";
import { TOASTER$ } from "../shared/components/toaster";

export const apiUrl = "https://jsonplaceholder.typicode.com";
const axiosHttp = axios.create({
  baseURL: `${apiUrl}`,
});

axiosHttp.interceptors.request.use(
  (request: any) => {
    IS_LOADING$.next(true);
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
    TOASTER$.next({ type: "error", message: error.message });
  }
);

axiosHttp.interceptors.response.use(
  (response) => {
    IS_LOADING$.next(false);
    response.config.method === "post" &&
      TOASTER$.next({ type: "success", message: "created successfully!" });
    return response;
  },
  (error: AxiosError) => {
    TOASTER$.next({ type: "error", message: error.message });
    IS_LOADING$.next(false);
    return Promise.reject(error);
  }
);

export default axiosHttp;
