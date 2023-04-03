import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { IBillingInputs } from ".";
import {
  cartAtom,
  cartShippingSelector,
  cartSubtotalSelector,
  cartTaxSelector,
  cartTotalSelector,
} from "../../recoil";

type OrderSummaryProps = {
  register?: any;
  errors?: any;
  isButton?: boolean;
};

function OrderSummary({
  register,
  errors,
  isButton = true,
}: OrderSummaryProps) {
  const cartItems = useRecoilValue(cartAtom);
  const subTotal = useRecoilValue(cartSubtotalSelector);
  const tax = useRecoilValue(cartTaxSelector);
  const shipping = useRecoilValue(cartShippingSelector);
  const total = useRecoilValue(cartTotalSelector);
  return (
    <div className="col-span-12 md:col-span-4 border p-4">
      <h3 className="text-lg font-medium mb-4 bg-[#E9E4E4] py-1 px-3 uppercase text-black">
        Order Summary
      </h3>
      <div>
        <div className="space-y-2">
          {cartItems.map((item) => (
            <div className="flex items-center justify-between" key={item.id}>
              <div>
                <h5 className="text-gray-800 font-medium">
                  {item.product.title.slice(0, 20)}
                </h5>
                <p className="text-sm text-gray-600">Size: M</p>
              </div>
              <p className="text-gray-600">x{item.quantity}</p>
              <div className="text-gray-800 font-medium">
                $
                {item.product.discount_price
                  ? (item.product.discount_price * item.quantity).toFixed(2)
                  : (item.product.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
       
          <div className="flex items-center justify-between text-gray-800 font-medium uppercase border-b border-gray-200 py-3">
            <h5>Sub Total</h5>
            <p>${subTotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between text-gray-800 font-medium uppercase border-b border-gray-200 py-3">
            <h5>Shipping</h5>
            <p>${shipping.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between text-gray-800 font-medium uppercase border-b border-gray-200 py-3">
            <h5>Tax</h5>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between text-gray-800 font-medium uppercase py-3">
            <h5>Total</h5>
            <p>${total.toFixed(2)}</p>
          </div>
          {isButton && (
            <>
              {" "}
              <div className="flex items-center mb-4 mt-2">
                <input
                  id="arrangement"
                  type="checkbox"
                  className="text-primary focus:ring-0 rounded cursor-pointer w-4 h-4"
                  {...register("trams")}
                />
                <label htmlFor="arrangement" className="text-gray-600 mx-3">
                  Agree to our
                  <a href="#" className="text-primary">{" "}
                    trams and condition
                  </a>
                </label>
              </div>
              {errors.trams && (
                <p className="text-primary text-sm">{errors.trams.message}</p>
              )}
              <button
                type="submit"
                className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center justify-center gap-2 hover:bg-transparent hover:text-primary transition"
              >
                Place Order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
