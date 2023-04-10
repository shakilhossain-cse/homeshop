import React from "react";
import { useParams } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSpecificOrder, updateStatus } from "../../../services/orderService";
import { IOrder } from "../../../type";
import { dateFormate } from "../../../utils/dataformate";
import { getOrderStatus } from "../../../utils";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../../recoil/atoms/LoginAtom";
import { IBillingInputs } from "../../Checkout";

interface IOrderDetails {
  orders: IOrder;
  billing: IBillingInputs;
}
function OrderDetails() {
  const { id } = useParams();
  const user = useRecoilValue(userAtom);
  const { data } = useQuery<IOrderDetails>(["order", id], () =>
    getSpecificOrder(Number(id))
  );
  const queryClient = useQueryClient();

  // const { processing, shipping, delivered, cancel } =
  const orderStatus = getOrderStatus(data?.orders.status ?? "processing");
  const { mutateAsync } = useMutation(updateStatus);

  const handleStatus = async (status: string) => {
    if (user?.role === "admin" || status === "cancel") {
      if (!data?.orders.id) return;
      if (orderStatus?.delivered) return;
      if (data?.orders.status === status) return;
      await mutateAsync({ id: data.orders.id, status });
      queryClient.invalidateQueries(["order", id]);
    }
  };
  console.log(data);

  return (
    <div className="shadow rounded bg-white px-4 py-6 pb-8 w-full">
      <h2 className="text-lg font-semibold">Order Details</h2>
      <div className="grid grid-cols-12 my-3">
        <div className="col-span-3">
          <h3 className="font-medium">Order Number</h3>
          <p className="mt-2  text-sm bg-slate-300 px-3 py-1 inline-block rounded font-semibold text-gray-700">
            {data?.orders.orderId}
          </p>
        </div>
        <div className="col-span-3">
          <h3 className="font-medium">Order Date</h3>
          <p className="mt-2 font-light text-sm">
            {data?.orders.created_at && dateFormate(data?.orders.created_at)}
          </p>
        </div>
        <div className="col-span-3">
          <h3 className="font-medium">Payment</h3>
          {data?.orders.paymentStatus === "pending" ? (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              Pending
            </span>
          ) : (
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              Paid
            </span>
          )}
        </div>
        <div className="col-span-3">
          <button
            disabled={orderStatus?.delivered}
            onClick={() => handleStatus("cancel")}
            className={` text-primary border border-primary px-4 rounded font-medium hover:bg-primary hover:text-white transition py-2 ${
              orderStatus?.delivered || orderStatus?.cancel
                ? "cursor-not-allowed text-red-300 border-red-300 hover:bg-red-300 "
                : "cursor-pointer"
            }`}
          >
            Cancel Order
          </button>
        </div>
      </div>
      {orderStatus?.cancel ? (
        <div className="bg-white shadow p-7">
          <p>Your Order is canceled</p>
        </div>
      ) : (
        <div className="max-w-xl  mx-auto my-16 border-b-2 pb-4">
          <div className="flex pb-3">
            <div className="flex-1"></div>
            <div className="flex-1">
              <div
                onClick={() => handleStatus("processing")}
                className="w-10 h-10 bg-green-400 mx-auto rounded-full text-lg text-white flex items-center cursor-pointer"
              >
                <span className="text-white text-center w-full text-4xl flex justify-center items-center">
                  {orderStatus?.processing ? <AiOutlineCheckCircle /> : "1"}
                </span>
              </div>
            </div>
            <div className="w-1/6 align-center items-center align-middle content-center flex">
              <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                <div
                  className="bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded "
                  style={
                    orderStatus?.shipping ? { width: "100%" } : { width: "0%" }
                  }
                />
              </div>
            </div>
            <div className="flex-1">
              <div
                onClick={() => handleStatus("shipping")}
                className="w-10 h-10 bg-green-400 mx-auto rounded-full text-lg text-white flex items-center cursor-pointer"
              >
                <span className="text-white text-center w-full text-4xl flex justify-center items-center">
                  {orderStatus?.shipping ? <AiOutlineCheckCircle /> : "2"}
                </span>
              </div>
            </div>
            <div className="w-1/6 align-center items-center align-middle content-center flex">
              <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                <div
                  className="bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded "
                  style={
                    orderStatus?.delivered ? { width: "100%" } : { width: "0%" }
                  }
                />
              </div>
            </div>
            <div className="flex-1">
              <div
                onClick={() => handleStatus("delivered")}
                className="w-10 h-10 bg-green-400 border-2 border-grey-light mx-auto cursor-pointer rounded-full text-lg text-white flex items-center"
              >
                <span className="text-white text-center w-full text-4xl flex justify-center items-center">
                  {orderStatus?.delivered ? <AiOutlineCheckCircle /> : "3"}
                </span>
              </div>
            </div>

            <div className="flex-1"></div>
          </div>
          <div className="flex text-xs content-center text-center">
            <div className="w-1/3">Order Placed</div>
            <div className="w-1/3">Order Shipping</div>
            <div className="w-1/3">Delivered</div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {data?.orders.order_items.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center flex-wrap justify-between gap-6 p-4 border border-gray-200 rounded "
          >
            <div className="w-28 flex-shrink-0">
              <img
                src={item.product.images[0].url}
                alt="product"
                className="w-full"
              />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-lg font-normal uppercase">
                {item.product.title.slice(0, 20)}
              </h2>
            </div>
            <p className="px-6 py-2 text-center text-black text-lg font-semibold">
              Qty :{item.quantity}
            </p>
            <div className="text-black text-lg font-semibold">
              ${item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <div className="my-4 flex flex-col justify-center border-t-2 font-bold">
          <div className="mt-3 self-end w-full">
            <div className="flex justify-between">
              <h4 className="text-primary">Sub Total</h4>
              <p>{data?.orders.subtotal}</p>
            </div>
            <div className="flex justify-between">
              <h4 className="text-primary">Tax</h4>
              <p>{data?.orders.tax}</p>
            </div>
            <div className="flex justify-between">
              <h4 className="text-primary">Shipping</h4>
              <p>{data?.orders.shipping}</p>
            </div>
            <div className="flex justify-between">
              <h4 className="text-primary">Total</h4>
              <p>{data?.orders.total}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="my-3">User Information</h3>

          <div className="">
            <table className="w-full border text-left text-sm font-light dark:border-neutral-500">
              <tbody>
                {Object.entries(data?.billing ?? {})
                  .slice(1, -3)
                  .map((item, idx) => (
                    <tr className="border-b dark:border-neutral-500" key={idx}>
                      {item.map((data, i) => (
                        <td
                          className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500"
                          key={i}
                        >
                          {data}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
