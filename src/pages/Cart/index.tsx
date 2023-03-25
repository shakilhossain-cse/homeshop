import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

function Cart() {
  return (
    <div className="mb-6">
      <BreadCrumb title="Shopping Cart" />
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <CartItems />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default Cart;
