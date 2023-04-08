import { HttpClient } from "../utils/axios";

export const getProductDetails = (slug: string | undefined) =>
  HttpClient.get(`/products/${slug}`).then((res) => res.data);
export const getAllProducts = () =>
  HttpClient.get("/products").then((res) => res.data);
export const filterProducts = (page = 0) =>
  HttpClient.get("/products?page=" + page).then((res) => res.data);
export const createProduct = (data: any) =>
  HttpClient.post("/product", data).then((res) => res.data);
export const deleteProduct = (productId: number) =>
  HttpClient.delete(`/product/${productId}`).then((res) => res.data);
