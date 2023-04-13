import React, { useState } from "react";
import { OrderItem } from "../../../components/OrderItem";
import Pagination from "../../../components/Pagination";
import { useQuery } from "@tanstack/react-query";
import { IOrder } from "../../../type";
import { getAuthUserOrder } from "../../../services/orderService";
import notfound from "../../../assets/not-found.svg";
function MyOrder() {
  const { data } = useQuery<IOrder[]>(["users-orders"], () =>
    getAuthUserOrder("processing")
  );

  return (
    <div className="shadow rounded bg-white px-4 py-6 pb-8 w-full">
      <h2 className="font-medium text-gray-800 text-lg my-4 uppercase">
        My Orders
      </h2>
      {data && data?.length > 0 ? (
        data.map((item: IOrder) => <OrderItem product={item} key={item.id} />)
      ) : (
        <>
          <img src={notfound} alt="not-found-image" className="w-60 mx-auto" />
          <h3 className="text-center text-2xl">Your Order is not found</h3>
        </>
      )}
    </div>
  );
}

export default MyOrder;
