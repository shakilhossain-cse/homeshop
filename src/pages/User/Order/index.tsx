import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getRecentOrders } from "../../../services/orderService";
import { IOrder, IProduct } from "../../../type";
import { dateFormate } from "../../../utils/dataformate";
import { Link } from "react-router-dom";

function Order() {
  const { data } = useQuery<IOrder[]>(["orders"], getRecentOrders);
  return (
    <div>
      <div className="shadow rounded bg-white px-4 py-6 pb-8 w-full">
        <h2 className="font-medium text-gray-800 text-lg my-4 uppercase">
          Recent Orders
        </h2>
        {data?.map((item: IOrder) => (
          <OrderItem product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export const OrderItem = ({ product: order }: { product: IOrder }) => {
  const baseUrl = window.location.origin;
  return (
    <div className="space-y-1 border border-gray-300 p-4 mb-3">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex gap-2">
          {order.order_items.map((item, idx) => (
            <img
              key={idx}
              src={item.product.images[0].url}
              alt="image"
              className="w-24"
            />
          ))}
        </div>
        <Link
          to={`${baseUrl}/user/order/${order.id}`}
          className="text-primary border border-primary px-4 rounded font-medium hover:bg-primary hover:text-white transition py-2"
        >
          View Order
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:grid-cols-5 ">
        <div>
          <h4>Order Number</h4>
          <p className="font-light bg-gray-300 inline-block opacity-50 px-1 rounded">
            {order.orderId}
          </p>
        </div>
        <div>
          <h4>Purchased</h4>
          <p className="font-light text-base">
            {dateFormate(order.created_at)}
          </p>
        </div>
        <div>
          <h4>Payment</h4>
          {order.paymentStatus === "pending" ? (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              Pending
            </span>
          ) : (
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              Paid
            </span>
          )}
        </div>
        <div>
          <h4>Total</h4>
          <p className="font-light text-base">${order.total}</p>
        </div>
        <div>
          <h4>Status</h4>
          <div>
            <div className="relative h-2 bg-gray-200 rounded-full">
              {order.status === "processing" ? (
                <div
                  className="absolute top-0 left-0 h-full bg-orange-500 rounded-full"
                  style={{ width: "33.33%" }}
                />
              ) : order.status === "shipping" ? (
                <div
                  className="absolute top-0 left-0 h-full bg-yellow-500 rounded-full"
                  style={{ width: "66.66%" }}
                />
              ) : order.status === "delivered" ? (
                <div
                  className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                  style={{ width: "99.66%" }}
                />
              ) : (
                <div
                  className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                  style={{ width: "99.66%" }}
                />
              )}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span
                className={`${
                  order.status === "processing"
                    ? "text-orange-500"
                    : order.status === "shipping"
                    ? "text-yellow-500"
                    : order.status === "delivered"
                    ? "text-green-500"
                    : "text-primary"
                } font-medium`}
              >
                {order.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
