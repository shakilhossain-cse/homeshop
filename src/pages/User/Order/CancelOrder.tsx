import { useQuery } from "@tanstack/react-query";
import React from "react";
import { IOrder } from "../../../type";
import { getAuthUserOrder } from "../../../services/orderService";
import { OrderItem } from "../../../components/OrderItem";
import notfound from "../../../assets/not-found.svg";
function CancelOrder() {
  const { data } = useQuery<IOrder[]>(["cancel-orders"], () =>
    getAuthUserOrder("cancel")
  );

  return (
    <div className="shadow rounded bg-white px-4 py-6 pb-8 w-full">
      <h2 className="font-medium text-gray-800 text-lg my-4 uppercase">
        Cancel Orders
      </h2>
      {data && data?.length > 0 ? (
        data.map((item: IOrder) => <OrderItem product={item} key={item.id} />)
      ) : (
        <>
          <img src={notfound} alt="not-found-image" className="w-60 mx-auto" />
          <h3 className="text-center text-2xl">Your Order is not Cancelled Yet</h3>
        </>
      )}
    </div>
  );
}

export default CancelOrder;
