import { HttpClient } from "../utils/axios";

export const getProductDetails = (slug: string | undefined) =>
  HttpClient.get(`/products/${slug}`).then((res) => res.data);
export const getAllProducts = () =>
  HttpClient.get("/products").then((res) => res.data);
export const filterProducts = (page = 0) => {
  console.log(page);
  
 return HttpClient.get("/products?page=" + page).then((res) => res.data);
};

// const fetchProjects = (page = 0) => fetch('/api/projects?page=' + page).then((res) => res.json())
