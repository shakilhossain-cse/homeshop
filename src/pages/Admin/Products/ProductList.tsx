import { IProduct } from "../../../type";
import { BsFillTrashFill } from "react-icons/bs";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteProduct,
  filterProducts,
  getAllProducts,
} from "../../../services/productService";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Pagination from "../../../components/Pagination";

function ProductList() {
  const [search, setSearch] = useSearchParams();
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["product", page],
    queryFn: () => filterProducts(page),
    keepPreviousData: true,
  });

  const { mutateAsync } = useMutation(deleteProduct);
  const handelPaginate = (page: any) => {
    setPage(page);
    setSearch(`?page=${page}`);
  };
  const handelDelete = async (productId: number) => {
    await mutateAsync(productId);
    queryClient.invalidateQueries(["product", page]);
  };

  const isProductAvailable = (): Boolean => {
    return data?.data.length > 0;
  };
  
  return (
    <div className="shadow rounded px-6 pt-5 pb-7">
      <h3 className="text-lg font-medium mb-4 capitalize">Product List</h3>
      <div className="space-y-4">
        {isProductAvailable() ? (
          data.data.map((product: IProduct) => (
            <>
              <div className="flex flex-wrap items-center justify-between gap-6 p-4 border border-gray-200 rounded ">
                <div className="w-28 flex-shrink-0">
                  <img
                    src={product.images[0].url}
                    alt="product"
                    className="w-full"
                  />
                </div>
                <div className="w-1/3">
                  <Link to={`/product/${product.slug}`}>
                    <h2 className="text-gray-800 text-xl font-medium uppercase">
                      {product.title.slice(0, 15) + "..."}
                    </h2>
                  </Link>
                  <p
                    className={`${
                      product.quantity > 0 ? "text-green-600" : "text-primary"
                    } text-sm`}
                  >
                    {" "}
                    Availability :{" "}
                    <span className="text-gray-500">{product.quantity}</span>
                  </p>
                </div>
                <div className="font-medium">
                  <p className="text-primary">${product.discount_price}</p>
                  <p>${product.price}</p>
                </div>
                <a
                  href="#"
                  className="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary font-roboto font-medium"
                >
                  Edit
                </a>
                <div
                  className="text-gray-600 cursor-pointer hover:text-primary"
                  onClick={() => handelDelete(product.id)}
                >
                  <BsFillTrashFill />
                </div>
              </div>
            </>
          ))
        ) : (
          <p className="text-lg text-center my-4">Product is Empty</p>
        )}

        {isProductAvailable() && data.data.length > 6 ? (
          data?.links && (
            <Pagination links={data.links} handelPaginate={handelPaginate} />
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProductList;
