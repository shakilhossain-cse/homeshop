import { HttpClient } from "../utils/axios";

export const getDashboardData = () =>
  HttpClient.get("data").then((res) => res.data);
