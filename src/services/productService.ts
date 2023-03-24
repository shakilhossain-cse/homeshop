import { HttpClient } from "../utils/axios";

export const getProductDetails = (slug:string | undefined) => HttpClient.get(`/products/${slug}`).then((res) => res.data);
export const getAllProducts = () => HttpClient.get('/products').then(res => res.data)