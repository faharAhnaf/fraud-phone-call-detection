import axios from "axios";

const headers = {
  "Content-Type": "multipart/form-data",
  "Cache-Control": "no-cache",
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 20000,
  headers,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response Error: ", error);
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("Request Error: ", error);
    return Promise.reject(error);
  }
);

export default instance;
