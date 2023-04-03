export interface IUser {
  id: number;
  email: string;
  name: string;
  role: 'member'|'admin';
}

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

interface IOrderItem {
  price: number;
  quantity: number;
  size: string;
  color: string;
  product: IProduct;
}

export interface IOrder {
  id: number;
  paymentStatus: "pending"|"paid";
  status: "processing"|"shipping"|"delivered";
  subtotal: number;
  total: number;
  user_id: number;
  created_at: string;
  order_items: IOrderItem[];
  orderId:string;
}

export interface AxiosErrorResponse {
  response?: {
    data?: {
      message: string;
    };
  };
}