import { AiOutlineIdcard,AiOutlineHeart } from "react-icons/ai";
import { FiGift } from "react-icons/fi";
export const sidebarDAta = [
  {
    id: 1,
    title: "Manage Account",
    links: "/user",
    icon: <AiOutlineIdcard />,
    isBold: true,
    access: "member",
    underLine:false
  },
  {
    id: 2,
    title: "Profile Information",
    links: "/user/info",
    icon: <AiOutlineIdcard />,
    isBold: false,
    access: "member",
    underLine:false
  },
  {
    id: 3,
    title: "Change Password",
    links: "/user/change-password",
    icon: <AiOutlineIdcard />,
    isBold: false,
    access: "member",
    underLine:true
  },
  {
    id: 4,
    title: "My Order History",
    links: "/user/history",
    icon: <FiGift />,
    isBold: true,
    access: "member",
    underLine:false
  },
  {
    id: 5,
    title: "My Cancellation",
    links: "/user/cancellation",
    icon: <FiGift />,
    isBold: false,
    access: "member",
    underLine:false
  },
  {
    id: 6,
    title: "My Reviews",
    links: "/user/reviews",
    icon: <FiGift />,
    isBold: false,
    access: "member",
    underLine:true
  },
  {
    id: 7,
    title: "My Wishlist",
    links: "/user/wishlist",
    icon: <AiOutlineHeart />,
    isBold: true,
    access: "member",
    underLine:true
  },
];
