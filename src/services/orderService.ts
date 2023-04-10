import { IAllOrder } from "../pages/Admin/Order";
import { IOrder } from "../type";
import { HttpClient } from "../utils/axios";

export const getRecentOrders = (): Promise<IOrder[]> =>
  HttpClient.get("order").then((res) => res.data);
export const submitOrder = (data: any) =>
  HttpClient.post("order", data).then((res) => res.data);
export const getAllOrders = (status = 'processing', page: number): Promise<IAllOrder> =>
  HttpClient.get(`all-order/${status}`, { params: { page } }).then((res) => res.data);
export const getSpecificOrder = (orderId: number) =>
  HttpClient.get(`order/${orderId}`).then((res) => res.data);
export const updateStatus = ({ id, status }: { id: number, status: string }) =>
HttpClient.post(`order-status/${id}`, { status }).then((res) => res.data);
