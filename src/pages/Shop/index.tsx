import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Pagination from "../../components/Pagination";
import {
  filterProducts,
  getAllProducts,
  getFilteredProducts,
} from "../../services/productService";
import { IData, IPagination, IProduct } from "../../type";
import { getCategoryValuesFromUrl } from "../../utils/getCategoryValuesFromUrl";
import ShopProducts from "./ShopProducts";
import ShopSidebar from "./ShopSidebar";

export interface IShopProduct extends IData {
  data: IProduct[];
}
export interface IFilterData {
  categories: string[];
  brands: string[];
  priceRange: {
    min: number | null;
    max: number | null;
  };
  size: string;
  search: string;
  sortBy: "random" | "low_to_high" | "high_to_low" | "latest";
  // [key: string]: string[] | number[] | string;
}
const Shop = () => {
  const [filterData, setFilterData] = useState<IFilterData>({
    categories: [],
    brands: [],
    priceRange: { min: null, max: null },
    size: "",
    search: "",
    sortBy: "random",
  });
  const [search, setSearch] = useSearchParams();
  const [page, setPage] = useState<any>(1);

  const params = {
    categories: filterData.categories.join(","),
    brands: filterData.brands.join(","),
    min_price: filterData.priceRange.min,
    max_price: filterData.priceRange.max,
    size: filterData.size,
    search: filterData.search,
    per_page: 10,
    sort_by: filterData.sortBy,
  };

  const { data, refetch } = useQuery<IShopProduct>(
    ["product", filterData],
    () => getFilteredProducts(params, page)
  );
  const handleFilterState = (key: keyof IFilterData, value: any): void => {
    setFilterData((prevState) => {
      if (key === "categories") {
        const categories = [...prevState.categories];
        const index = categories.indexOf(value);
        if (index === -1) {
          categories.push(value);
        } else {
          categories.splice(index, 1);
        }
        return {
          ...prevState,
          categories,
        };
      }
      if (key === "brands") {
        const brands = [...prevState.brands];
        const index = brands.indexOf(value);
        if (index === -1) {
          brands.push(value);
        } else {
          brands.splice(index, 1);
        }
        return { ...prevState, brands };
      }

      if (key === "priceRange") {
        const priceRange = {
          ...prevState.priceRange,
          ...value,
        };
        return {
          ...prevState,
          priceRange,
        };
      }

      if (key === "sortBy") {
        return {
          ...prevState,
          sortBy: value,
        };
      }
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const handelPaginate = (page: any) => {
    setPage(page);
    setSearch(`?page=${page}`);
  };

  useEffect(() => {
    refetch();
  }, [filterData]);

  console.log(data);
  const sortProducts = [
    { value: "random", label: "Random" },
    { value: "low_to_high", label: "Low to High" },
    { value: "high_to_low", label: "High to Low" },
    { value: "latest", label: "Latest" },
  ];
  return (
    <>
      <BreadCrumb title="shop" />
      <div className="container grid grid-cols-12 gap-6 pt-4 pb-16 items-start">
        <ShopSidebar handleFilterState={handleFilterState} />
        {/* products */}
        <div className="col-span-12 md:col-span-9">
          {/* sorting  */}
          <div className="flex items-center mb-4">
            <select
              className="w-44 text-sm text-gray-600 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
              onChange={(e) => handleFilterState("sortBy", e.target.value)}
            >
              {sortProducts.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.label}
                </option>
              ))}
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
          {data?.next_page_url && data?.links && (
            <Pagination links={data.links} handelPaginate={handelPaginate} />
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
