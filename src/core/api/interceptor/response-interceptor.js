import axios from "axios";

axios.interceptors.response.use(
  (config) => {},
  (error) => {
    return Promise.reject(error);
  }
);
