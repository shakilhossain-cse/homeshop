import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Pagination from "../../components/Pagination";
import { filterProducts, getAllProducts } from "../../services/productService";
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
  priceRange: {
    min: number | null;
    max: number | null;
  };
  size: string;
  search: string;
  // [key: string]: string[] | number[] | string;
}
const Shop = () => {
  const [filterData, setFilterData] = useState<IFilterData>({
    categories: [],
    brands: [],
    priceRange: { min: null, max: null },
    size: "",
    search: "",
  });
  const [search, setSearch] = useSearchParams();
  const [page, setPage] = useState(1);
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["product", page],
      queryFn: () => filterProducts(page),
      keepPreviousData: true,
    });

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
    if (search.get("page")) {
      setPage(Number(search.get("page")));
    }
    if (search.get("title")) {
      handleFilterState('search',search.get('title'))
    }
  }, [page,search.get("title")]);

  console.log(filterData);

  return (
    <>
      <BreadCrumb title="shop" />
      <div className="container grid grid-cols-12 gap-6 pt-4 pb-16 items-start">
        <ShopSidebar handleFilterState={handleFilterState} />
        {/* products */}
        <div className="col-span-12 md:col-span-9">
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
          {data?.links && (
            <Pagination links={data.links} handelPaginate={handelPaginate} />
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
