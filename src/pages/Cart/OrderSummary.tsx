import React from "react";
import { useRecoilValue } from "recoil";
import { cartSelector } from "../../recoil";

const OrderSummary = () => {
  const total = useRecoilValue(cartSelector);
  return (
    <div className="col-span-12 md:col-span-3 ">
      <div className="border border-gray-200">
        <div className="p-4">
          <h2 className="uppercase font-semibold text-xl">ORDER SUMMARY</h2>
          <div className="space-y-2 my-4">
            <div className="flex justify-between">
              <h3 className="font-medium">Sub Total</h3>
              <h3 className="font-medium">${total.toFixed(2)}</h3>
            </div>
            <div className="flex justify-between">
              <p className="">Delivery</p>
              <p className="">$10</p>
            </div>
            <div className="flex justify-between">
              <p className="">Tax</p>
              <p className="">free</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold uppercase">Total</h2>
              <h2 className="text-xl font-semibold uppercase">
                ${total + 10}
              </h2>
            </div>
          </div>
          <a href="#" className="card-button uppercase my-4">
            Process to checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
