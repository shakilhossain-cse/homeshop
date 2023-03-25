import React, { useState } from "react";
import { IFilterData } from ".";

interface IProps {
  handelFilter(value: string): void;
  isCheckedAns(value: string): boolean;
}

const ShopSidebar: React.FC<IProps> = ({ isCheckedAns, handelFilter }) => {
  const categoryData = [
    { label: "Bedroom", qty: 10 },
    { label: "Sofa", qty: 10 },
    { label: "Bed", qty: 11 },
    { label: "Office", qty: 15 },
    { label: "Dining", qty: 10 },
  ];

  return (
    <div className="col-span-1 bg-white px-4 pb-5 shadow rounded overflow-hidden">
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
                  id="category-1"
                  onChange={() => handelFilter(category.label)}
                  checked={isCheckedAns(category.label)}
                />
                <label
                  htmlFor="category-1"
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
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                id="brand-1"
              />
              <label
                htmlFor="brand-1"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                Dominik
              </label>
              <div className="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                id="brand-2"
              />
              <label
                htmlFor="brand-2"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                Kari
              </label>
              <div className="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                id="brand-3"
              />
              <label
                htmlFor="brand-3"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                Maxing
              </label>
              <div className="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                id="brand-4"
              />
              <label
                htmlFor="brand-4"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                Ernest
              </label>
              <div className="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
          </div>
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
            />
            <span className="px-3 text-gray-500">-</span>
            <input
              type="text"
              className="w-full border-gray-300 focus:border-primary focus:ring-0 text-gray-600 text-sm shadow-sm rounded"
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
              >
                lg
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-xl" />
              <label
                htmlFor="size-xl"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow"
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
              >
                xxl
              </label>
            </div>
          </div>
        </div>
        {/* colors filter  */}
        <div className="pt-4">
          <h3 className="text-xl mb-3 text-gray-800 uppercase font-medium">
            Color
          </h3>
          <div className="mt-4 flex items-center gap-2">
            <div className="color-selector">
              <input
                type="radio"
                name="size"
                className="hidden"
                id="color-red"
              />
              <label
                htmlFor="color-red"
                className="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block bg-red-600"
              />
            </div>
            <div className="color-selector">
              <input
                type="radio"
                name="size"
                className="hidden"
                id="color-black"
              />
              <label
                htmlFor="color-black"
                className="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block bg-black"
              />
            </div>
            <div className="color-selector">
              <input
                type="radio"
                name="size"
                className="hidden"
                id="color-blue"
              />
              <label
                htmlFor="color-blue"
                className="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block bg-blue-600"
              />
            </div>
            <div className="color-selector">
              <input
                type="radio"
                name="size"
                className="hidden"
                id="color-white"
              />
              <label
                htmlFor="color-white"
                className="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
