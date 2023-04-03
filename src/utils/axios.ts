import axios from "axios";
import { TOKEN_KEY } from "../recoil/constance";
import { getFromLocalStorage } from "./localStorage";

export const HttpClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
  headers: { "Accept": "application/json" },
});

HttpClient.interceptors.request.use(
  (config) => {
    const token = getFromLocalStorage(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
