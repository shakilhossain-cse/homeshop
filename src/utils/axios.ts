import axios from "axios";

export const HttpClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

