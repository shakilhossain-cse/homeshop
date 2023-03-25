import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import BreadCrumb from "../../components/BreadCrumb";
import { cartAtom } from "../../recoil";
import Carts from "./CartItems";
import OrderSummary from "./OrderSummary";
import emptyCartImage from "../../assets/emptyCart.svg";

function Cart() {
  const cartItems = useRecoilValue(cartAtom);
  return (
    <div className="mb-6">
      <BreadCrumb title="Shopping Cart" />
      <div className="container">
        {!cartItems.length ? (
          <div className="flex items-center justify-center flex-col">
            <img src={emptyCartImage} className="w-2/6" alt="empty-cart"></img>
            <h2 className="font-bold text-xl my-4 uppercase">
              Your Cart is Empty{" "}
              <Link to="/shop" className="text-primary">
                Click For Shopping
              </Link>
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-4">
            <Carts products={cartItems} />
            <OrderSummary />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
