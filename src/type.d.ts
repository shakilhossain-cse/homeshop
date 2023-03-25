export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  sku: string;
  brand: string;
  quantity: number;
  discount_price: number | null;
  sort_description: string;
  description: string;
  category: string;
  images: string;
  sizes: string[];
  colors: string[];
  rating: string[];
}
export interface IPagination {
  url: string | null;
  label: string;
  active: boolean;
}

export interface ICartData {
  id: number;
  quantity: number;
  product: IProduct;
}
