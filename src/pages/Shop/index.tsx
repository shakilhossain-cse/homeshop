import { useQuery } from "@tanstack/react-query";
import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { getAllProducts } from "../../services/productService";
import { IProduct } from "../../type";
import ShopProducts from "./ShopProducts";
import ShopSidebar from "./ShopSidebar";

interface IShopProduct {
  current_page: number;
  data: IProduct[];
  total: number;
  prev_page_url: string | null;
  next_page_url: string | null;
}

const Shop = () => {
  const { data } = useQuery<IShopProduct>(["shop-product"], getAllProducts);

  return (
    <>
      <BreadCrumb title="shop" />
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        {/* sidebar  */}
        <ShopSidebar />
        {/* products */}
        <div className="col-span-3">
          {/* sorting  */}
          <div className="flex items-center mb-4">
            <select className="w-44 text-sm text-gray-600 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
              <option value="">default sorting</option>
              <option value="">price low to high</option>
              <option value="">price high to low</option>
              <option value="">latest product</option>
            </select>
            <div className="flex gap-2 ml-auto">
              <div
                id="gridView"
                className="border border-gray-400 w-10 h-9 flex items-center justify-center text-black rounded cursor-pointer transition-all"
              >
                <i className="fas fa-th" />
              </div>
              <div
                id="oneView"
                className="border border-gray-400 w-10 h-9 flex items-center justify-center text-black rounded cursor-pointer transition-all"
              >
                <i className="fas fa-list" />
              </div>
            </div>
          </div>
          {data?.data && <ShopProducts products={data.data}/>}
          
        </div>
      </div>
    </>
  );
};

export default Shop;
