import { HttpClient } from "../utils/axios";

export const getHomeData = () => HttpClient.get("/home").then((res) => res.data);
