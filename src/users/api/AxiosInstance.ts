import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;