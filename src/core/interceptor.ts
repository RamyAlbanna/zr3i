import axios from "axios";

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
    return Promise.reject(error);
  }
);

export default axiosHttp;
