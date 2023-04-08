import axios from "axios";
import { TOKEN_KEY, USER_KEY } from "../recoil/constance";
import { getFromLocalStorage, removeFromLocalStorage } from "./localStorage";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { tokenAtom, userAtom } from "../recoil/atoms/LoginAtom";

export const HttpClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000,
  headers: { Accept: "application/json" },
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

HttpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const navigate = useNavigate();
    const setToken = useSetRecoilState(tokenAtom);
    const setUser = useSetRecoilState(userAtom);
    if (error.response && error.response.status === 401) {
      setToken(null);
      setUser(null);
      removeFromLocalStorage(TOKEN_KEY);
      removeFromLocalStorage(USER_KEY);
      navigate("/login");
    }
    return Promise.reject(error);
  }
);
