import { nullable, z } from "zod";

export const productSchema = z.object({
  title: z.string().nonempty("Title is required"),
  price: z.string().nonempty("price is required"),
  sku: z.string().nonempty("sku is required"),
  brand: z.string().nonempty("brand is required"),
  quantity: z.string().nonempty("quantity is required"),
  discount_price: z.string().nullable(),
  short_description: z.string().nonempty("sort description is required"),
  description: z.string().nonempty("description is required"),
  category: z.string().nonempty("category is required"),
  sizes: z.array(z.string()).min(1),
  images: z.array(
    z.object({
      url: z.string(),
    })
  ).min(1),
});
