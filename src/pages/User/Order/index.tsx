import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getRecentOrders } from "../../../services/orderService";
import { IOrder } from "../../../type";
import { OrderItem } from "../../../components/OrderItem";

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



export default Order;
