import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Pagination from "../../components/Pagination";
import { getAllProducts } from "../../services/productService";
import { IPagination, IProduct } from "../../type";
import { getCategoryValuesFromUrl } from "../../utils/getCategoryValuesFromUrl";
import ShopProducts from "./ShopProducts";
import ShopSidebar from "./ShopSidebar";

interface IShopProduct {
  current_page: number;
  data: IProduct[];
  total: number;
  links: IPagination[];
  prev_page_url: string | null;
  next_page_url: string | null;
}
export interface IFilterData {
  categories: string[];
  brands: string[];
  priceRange: number[];
  size: string;
  color: string;
  [key: string]: string[] | number[] | string;
}
const Shop = () => {
  const [filterData, setFilterData] = useState<IFilterData>({
    categories: [],
    brands: [],
    priceRange: [],
    size: "",
    color: "",
  });
  const [categories, setCategories] = useState<string[]>([]);

  const [search, setSearch] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (categories.length >= 1) {
      search.set(
        "category",
        categories.map((c) => c.replace(",", "%2C")).join(",")
      );
      setSearch(search);
    } else {
      search.delete("category");
      setSearch(search);
    }
    console.log(location.search);
  }, [categories]);

  const handelFilter = (value: string) => {
    const find = categories.find((category) => category === value);

    if (find) {
      const category = categories.filter((category) => category !== value);
      setCategories(category);
    } else {
      setCategories([...categories, value]);
    }
  };

  const isCheckedAns = (value: string): boolean => {
    const category = categories.find((category) => category === value);
    if (category) {
      return true;
    } else {
      return false;
    }
  };

  const { data } = useQuery<IShopProduct>(["shop-product"], getAllProducts);

  return (
    <>
      <BreadCrumb title="shop" />
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <ShopSidebar isCheckedAns={isCheckedAns} handelFilter={handelFilter} />
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
          {data?.data && <ShopProducts products={data.data} />}
          {data?.links && <Pagination links={data.links} />}
        </div>
      </div>
    </>
  );
};

export default Shop;
