import { AiOutlineIdcard, AiOutlineHeart } from "react-icons/ai";
import { FiGift } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

export interface ISidebarItem {
  id: number;
  title: string;
  links: string;
  icon: JSX.Element;
  isBold: boolean;
  access: string[];
  // "member" | "admin";
  underLine: boolean;
}
export const sidebarDAta: ISidebarItem[] = [
  {
    id: 1,
    title: "Manage Account",
    links: "/user",
    icon: <AiOutlineIdcard />,
    isBold: true,
    access: ["member"],
    underLine: false,
  },
  {
    id: 10,
    title: "Dashboard",
    links: "/admin",
    icon: <AiOutlineIdcard />,
    isBold: true,
    access: ["admin"],
    underLine: false,
  },
  {
    id: 11,
    title: "Add Product",
    links: "/admin/add-product",
    icon: <AiOutlineIdcard />,
    isBold: false,
    access: ["admin"],
    underLine: false,
  },
  {
    id: 25,
    title: "Products List",
    links: "/admin/product-list",
    icon: <AiOutlineIdcard />,
    isBold: false,
    access: ["admin"],
    underLine: true,
  },
  {
    id: 12,
    title: "Users",
    links: "/admin/users",
    icon: <BiUser />,
    isBold: true,
    access: ["admin"],
    underLine: false,
  },
  {
    id: 2,
    title: "Profile Information",
    links: "/user/info",
    icon: <AiOutlineIdcard />,
    isBold: false,
    access: ["member","admin"],
    underLine: false,
  },
  {
    id: 3,
    title: "Change Password",
    links: "/user/change-password",
    icon: <AiOutlineIdcard />,
    isBold: false,
    access: ["admin", "member"],
    underLine: true,
  },
  {
    id: 13,
    title: "Order",
    links: "/admin/orders",
    icon: <FiGift />,
    isBold: true,
    access: ["admin"],
    underLine: false,
  },
  {
    id: 156,
    title: "Shipping Order",
    links: "/admin/shipping-order",
    icon: <FiGift />,
    isBold: false,
    access: ["admin"],
    underLine: false,
  },
  {
    id: 14,
    title: "Delivered Order",
    links: "/admin/delivered-order",
    icon: <AiOutlineIdcard />,
    isBold: false,
    access: ["admin"],
    underLine: false,
  },
  {
    id: 144,
    title: "Cancel Order",
    links: "/admin/cancel-order",
    icon: <AiOutlineIdcard />,
    isBold: false,
    access: ["admin"],
    underLine: true,
  },

  {
    id: 4,
    title: "My Order",
    links: "/user/my-order",
    icon: <FiGift />,
    isBold: true,
    access: ["member"],
    underLine: false,
  },
  {
    id: 5,
    title: "My Cancellation",
    links: "/user/cancel-order",
    icon: <FiGift />,
    isBold: false,
    access: ["member"],
    underLine: false,
  },
  // {
  //   id: 6,
  //   title: "My Reviews",
  //   links: "/user/reviews",
  //   icon: <FiGift />,
  //   isBold: false,
  //   access: ["member"],
  //   underLine: true,
  // },
  // {
  //   id: 7,
  //   title: "My Wishlist",
  //   links: "/user/wishlist",
  //   icon: <AiOutlineHeart />,
  //   isBold: true,
  //   access: ["member"],
  //   underLine: true,
  // },
];
