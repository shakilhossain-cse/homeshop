import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getAllOrders } from "../../../services/orderService";
import { IData, IOrder } from "../../../type";
import { dateFormate } from "../../../utils/dataformate";
import { OrderItem } from "../../User/Order";
import Pagination from "../../../components/Pagination";
import { useLocation, useParams } from "react-router-dom";
import { getOrderData } from "../../../utils";

export interface IAllOrder extends IData {
  data: IOrder[];
}

function AllOrder() {
  const { pathname } = useLocation();
  const [page, setPage] = useState(1);
  const { data, refetch } = useQuery<IAllOrder>(["all-orders", page], () =>
    getAllOrders(getOrderData(pathname), page)
  );

  const handelPaginate = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    refetch();
  }, [pathname]);

  return (
    <div>
      <div className="shadow rounded bg-white px-4 py-6 pb-8 w-full">
        <h2 className="font-medium text-gray-800 text-lg my-4 uppercase">
          Recent Orders
        </h2>
        {data?.data &&
          data.data.map((item: IOrder) => (
            <OrderItem product={item} key={item.id} />
          ))}

        {data?.next_page_url && data?.links && (
          <Pagination links={data.links} handelPaginate={handelPaginate} />
        )}
      </div>
    </div>
  );
}

export default AllOrder;