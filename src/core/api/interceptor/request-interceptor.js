import axios from "../axios/axios";

axios.interceptors.request.use(
  (config) => {},
  (error) => {
    return Promise.reject(error);
  }
);
