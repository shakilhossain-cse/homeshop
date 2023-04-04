import React, { useState } from "react";
import { IFilterData } from ".";

interface IProps {
  handleFilterState: (key: keyof IFilterData, value: any) => void;
  // isCheckedAns(value: string): boolean;
}

const ShopSidebar: React.FC<IProps> = ({ handleFilterState }) => {
  const categoryData = [
    { label: "Bedroom", qty: 10 },
    { label: "Sofa", qty: 10 },
    { label: "Bed", qty: 11 },
    { label: "Office", qty: 15 },
    { label: "Dining", qty: 10 },
  ];
  const brandData = [
    { label: "Dominik", qty: 10 },
    { label: "Kari", qty: 10 },
    { label: "mixing", qty: 11 },
    { label: "Ernest", qty: 15 },
  ];
  // { isCheckedAns, handelFilter }

  return (
    <div className="col-span-12 md:col-span-3 bg-white px-4 pb-5 shadow rounded overflow-hidden">
      <div className="divide-y divide-gray-200 space-y-5">
        {/* category filter  */}
        <div>
          <h3 className="text-xl mb-3 text-gray-800 uppercase font-medium">
            Categories
          </h3>
          {categoryData.map((category) => (
            <div className="space-y-2" key={category.label}>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  id={category.label}
                  onChange={() =>
                    handleFilterState("categories", category.label)
                  }
                />
                <label
                  htmlFor={category.label}
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  {category.label}
                </label>
                <div className="ml-auto text-gray-600 text-sm">
                  ({category.qty})
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* brands filter  */}
        <div className="pt-4">
          <h3 className="text-xl mb-3 text-gray-800 uppercase font-medium">
            Brands
          </h3>
          {brandData.map((brand) => (
            <div className="space-y-2" key={brand.label}>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  id={brand.label}
                  onChange={() =>handleFilterState("brands", brand.label)}
                />
                <label
                  htmlFor={brand.label}
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  {brand.label}
                </label>
                <div className="ml-auto text-gray-600 text-sm">
                  ({brand.qty})
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* price filter  */}
        <div className="pt-4">
          <h3 className="text-xl mb-3 text-gray-800 uppercase font-medium">
            Price
          </h3>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              className="w-full border-gray-300 focus:border-primary focus:ring-0 text-gray-600 text-sm shadow-sm rounded"
              placeholder="min"
              onChange={(e) => handleFilterState('priceRange', { min: e.target.value })}
            />
            <span className="px-3 text-gray-500">-</span>
            <input
              type="text"
              className="w-full border-gray-300 focus:border-primary focus:ring-0 text-gray-600 text-sm shadow-sm rounded"
              onChange={(e) => handleFilterState('priceRange', { max: e.target.value })}
              placeholder="max"
            />
          </div>
        </div>
        {/* size filter  */}
        <div className="pt-4">
          <h3 className="text-xl mb-3 text-gray-800 uppercase font-medium">
            Size
          </h3>
          <div className="mt-4 flex items-center gap-2">
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-lg" />
              <label
                htmlFor="size-lg"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow"
                onClick={() => handleFilterState('size', "lg")}
              >
                lg
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-xl" />
              <label
                htmlFor="size-xl"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow"
                onClick={() => handleFilterState('size', "xl")}
              >
                xl
              </label>
            </div>
            <div className="size-selector">
              <input
                type="radio"
                name="size"
                className="hidden"
                id="size-xxl"
              />
              <label
                htmlFor="size-xxl"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow"
                onClick={() => handleFilterState('size', "xxl")}
              >
                xxl
              </label>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default ShopSidebar;
