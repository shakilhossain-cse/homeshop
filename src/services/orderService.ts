import { IOrder } from "../type";
import { HttpClient } from "../utils/axios";

export const getRecentOrders = (): Promise<IOrder[]> =>
  HttpClient.get("order").then((res) => res.data);
export const submitOrder = (data: any) =>
  HttpClient.post("order", data).then((res) => res.data);
