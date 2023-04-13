import { HttpClient } from "../utils/axios";

export const createWishlist = (product_id: number) =>
  HttpClient.post("/wishlist", { product_id }).then((res) => res.data);

export const getWishlist = () =>
  HttpClient.get("/wishlist").then((res) => res.data);
