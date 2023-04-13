import { IFilterResponse } from "../pages/Admin/Products/AddProduct";
import { IFilterData, IShopProduct } from "../pages/Shop";
import { IProduct } from "../type";
import { HttpClient } from "../utils/axios";

export const getProductDetails = (slug: string | undefined) =>
  HttpClient.get(`/products/${slug}`).then((res) => res.data);
export const getAllProducts = () =>
  HttpClient.get("/products").then((res) => res.data);
export const filterProducts = (page = 0) =>
  HttpClient.get("/products?page=" + page).then((res) => res.data);
export const createProduct = (data: any) =>
  HttpClient.post("/product", data).then((res) => res.data);
export const updateProduct = ({ data, id }: { data: IProduct; id: number }) =>
  HttpClient.patch(`/product/${id}`, data).then((res) => res.data);
export const deleteProduct = (productId: number) =>
  HttpClient.delete(`/product/${productId}`).then((res) => res.data);
export const getFilteredProducts = async (
  param: any,
  page = 1
): Promise<IShopProduct> =>
  HttpClient.get(`/product?page=${page}`, {
    params: param,
  }).then((res) => res.data);

export const getFilterData = (): Promise<IFilterResponse> =>
  HttpClient.get("/filter-data").then((res) => res.data);
