import React, { useEffect } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import OrderSummary from "../Checkout/OrderSummary";
import cashOnDelivery from "../../assets/cash-on.png";
import RequireAuth from "../../routes/RequireAuth";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  cartAtom,
  cartSubtotalSelector,
  cartTaxSelector,
  cartTotalSelector,
} from "../../recoil";
import { useMutation } from "@tanstack/react-query";
import { submitOrder } from "../../services/orderService";
import { removeFromLocalStorage } from "../../utils/localStorage";
import { CART_KEY } from "../../recoil/constance";
import { toast } from "react-toastify";
import confirmOrderImg from "../../assets/order_confirmed.svg";

function Payment() {
  const navigate = useNavigate();
  const [cart, setCart] = useRecoilState(cartAtom);
  const subtotal = useRecoilValue(cartSubtotalSelector);
  const tax = useRecoilValue(cartTaxSelector);
  const shipping = useRecoilValue(cartSubtotalSelector);
  const total = useRecoilValue(cartTotalSelector);

  useEffect(() => {
    if (!cart.length) {
      navigate("/shop");
    }
  }, []);

  const { mutate, isLoading, isSuccess, data } = useMutation(submitOrder, {
    onSuccess(data) {
      setCart([]);
      removeFromLocalStorage(CART_KEY);
      toast.success(data.message);
    },
    onError(error: any) {
      toast.error(error.message);
    },
  });
  const handelConfirm = () => {
    const updatedCartItems = cart.map((item) => {
      return { id: item.id, quantity: item.quantity, size: "m" };
    });
    const newData = {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      shipping: shipping.toFixed(2),
      total: total.toFixed(2),
      items: updatedCartItems,
    };
    mutate(newData);
  };

  return (
    <RequireAuth>
      <>
        <BreadCrumb title="payment" />
        {isSuccess ? (
          <div className="container flex justify-center items-center">
            <div className="flex my-14 items-center justify-center flex-col">
              <img src={confirmOrderImg} alt="order-confirm" className="w-64" />
              <h2 className="text-2xl uppercase">{data.message}</h2>
            </div>
          </div>
        ) : (
          <div className="container grid grid-cols-12 gap-4 items-start py-4">
            <div className="col-span-12 md:col-span-8 border p-4 rounded">
              <h3 className="text-lg font-medium mb-4 bg-[#E9E4E4] py-1 px-3 uppercase text-black">
                Select Payment Method
              </h3>
              <div className="flex">
                <div className="w-36 rounded-sm border p-4 flex flex-col justify-center items-center border-primary cursor-pointer">
                  <img
                    src={cashOnDelivery}
                    className="w-100"
                    alt="payment_method"
                  />
                  <p className="text-xs uppercase mt-3">cash on delivery</p>
                </div>
              </div>
              <div className="mt-5 border">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium mb-4  py-1 p-3  text-black">
                    Cash On delivery
                  </h3>
                  <img
                    src={cashOnDelivery}
                    className="w-8 h-8"
                    alt="payment_method"
                  />
                </div>
                <div className="text-center p-7">
                  <p>
                    you can pay in cash to our courier when you <br></br>receive
                    the goods at your doorstep.
                  </p>
                  <button
                    onClick={handelConfirm}
                    className="uppercase bg-primary px-4 py-1 mt-5 rounded font-semibold cursor-pointer text-white"
                  >
                    {isLoading ? "Ordering..." : "Confirm order"}
                  </button>
                </div>
              </div>
            </div>
            <OrderSummary isButton={false} />
          </div>
        )}
      </>
    </RequireAuth>
  );
}

export default Payment;
