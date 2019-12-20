import axios from "axios";
import { get } from "lodash";

const axiosInstance = axios.create();

export const setToken = token => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeToken = () => {
  delete axiosInstance.defaults.headers.common["Authorization"];
};

axiosInstance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    // const statusCode = get (error, 'response.status');
    // if (statusCode === 401) {
    //   return Promise.reject (error);
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;

export const baseUrl = "";
