import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageUpload from "../../../components/ImageUpload";
import { IProduct } from "../../../type";
import axios from "axios";
import BreadCrumb from "../../../components/BreadCrumb";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "./Schema";
import { MutateOptions, useMutation, useQuery } from "@tanstack/react-query";
import { createProduct, getFilterData } from "../../../services/productService";
import { toast } from "react-toastify";

export interface IFilterResponse {
  categories: string[];
  brands: string[];
  sizes: string[];
}

const AddProduct = () => {
  const { data } = useQuery<IFilterResponse>(["filter-data"], getFilterData);
  const [imageResponse, setImageResponse] = useState<{ url: string }[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: zodResolver(productSchema),
  });

  const { mutate, isLoading } = useMutation(createProduct);

  const onSubmit = (data: IProduct) => {
    mutate(data, {
      onSuccess(data) {
        toast.success(data.message);
        reset();
        setImageResponse([]);
        setImages([]);
      },
    });
  };

  useEffect(() => {
    setValue("images", imageResponse);
  }, [imageResponse]);

  const toggleCategoryOptions = () => setIsOpenCategory(!isOpenCategory);
  const toggleBrandOptions = () => setIsOpenBrand(!isOpenBrand);

  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenBrand, setIsOpenBrand] = useState(false);
  const categorySelectRef = useRef<HTMLDivElement>(null);
  const brandSelectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categorySelectRef.current &&
        !categorySelectRef.current.contains(event.target as Node)
      ) {
        setIsOpenCategory(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [categorySelectRef]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        brandSelectRef.current &&
        !brandSelectRef.current.contains(event.target as Node)
      ) {
        setIsOpenBrand(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [brandSelectRef]);

  return (
    <div className="">
      <BreadCrumb title="Add Product" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-primary text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="flex gap-4 ">
          <div className="mb-4 w-full">
            <label htmlFor="sku" className="block text-gray-700 font-bold mb-2">
              SKU:
            </label>
            <input
              type="text"
              id="sku"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              {...register("sku")}
            />
            {errors.sku && (
              <p className="text-primary text-sm">{errors.sku.message}</p>
            )}
          </div>
          <div className="relative mb-4 w-full h-full" ref={categorySelectRef}>
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2"
            >
              Category:
            </label>
            <div
              className="w-full py-3 text-sm pl-3 pr-8  bg-white border border-gray-300 rounded-md cursor-pointer focus:outline-none"
              onClick={toggleCategoryOptions}
            >
              {getValues("category") || "Select or create a category"}
            </div>
            {isOpenCategory && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <div className="px-3 py-2">
                  <input
                    type="text"
                    {...register("category")}
                    className="w-full h-10 px-2 text-base bg-white border border-gray-300 rounded-md"
                    placeholder="type here for create new category"
                  />
                </div>
                <ul className="max-h-32 overflow-auto">
                  {data &&
                    data?.categories.map((option: string) => (
                      <li
                        key={option}
                        className="px-3 py-2 text-base cursor-pointer hover:bg-gray-100"
                        onClick={() => setValue("category", option)}
                      >
                        {option}
                      </li>
                    ))}
                </ul>
              </div>
            )}
            {errors.category && (
              <p className="text-primary text-sm">{errors.category.message}</p>
            )}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative mb-4 w-full h-full" ref={brandSelectRef}>
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2"
            >
              Brands:
            </label>
            <div
              className="w-full py-3 text-sm pl-3 pr-8  bg-white border border-gray-300 rounded-md cursor-pointer focus:outline-none"
              onClick={toggleBrandOptions}
            >
              {getValues("brand") || "select or create a brand"}
            </div>
            {isOpenBrand && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <div className="px-3 py-2">
                  <input
                    type="text"
                    {...register("brand")}
                    className="w-full h-10 px-2 text-base bg-white border border-gray-300 rounded-md"
                    placeholder="type here for create new brand"
                  />
                </div>
                <ul className="max-h-32 overflow-auto">
                  {data &&
                    data?.brands.map((option: string) => (
                      <li
                        key={option}
                        className="px-3 py-2 text-base cursor-pointer hover:bg-gray-100"
                        onClick={() => setValue("brand", option)}
                      >
                        {option}
                      </li>
                    ))}
                </ul>
              </div>
            )}
            {errors.brand && (
              <p className="text-primary text-sm">{errors.brand.message}</p>
            )}
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              {...register("price")}
            />
            {errors.price && (
              <p className="text-primary text-sm">{errors.price.message}</p>
            )}
          </div>
        </div>

        <div className="flex gap-4 ">
          <div className="mb-4 w-full">
            <label
              htmlFor="discount_price"
              className="block text-gray-700 font-bold mb-2"
            >
              Discount Price:
            </label>
            <input
              type="number"
              id="discount_price"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              {...register("discount_price")}
            />
            {errors.discount_price && (
              <p className="text-primary text-sm">
                {errors.discount_price.message}
              </p>
            )}
          </div>
          {/* Quantity */}
          <div className="mb-4 w-full">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-bold mb-2"
            >
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              {...register("quantity")}
            />
          </div>{" "}
        </div>
        <ImageUpload
          setImageResponse={setImageResponse}
          setImages={setImages}
          images={images}
        />
        {errors.images && !imageResponse.length && (
          <p className="text-primary"> image is required </p>
        )}

        <div>
          {/* Sizes */}
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="mb-4 w-full">
              <label
                htmlFor="sizes"
                className="block text-gray-700 font-bold mb-2"
              >
                Sizes:
              </label>
              <div className="flex gap-4 flex-wrap -mx-2">
                {data?.sizes.map((size: any) => (
                  <div className=" px-2" key={size}>
                    <label
                      htmlFor={size}
                      className="inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={size}
                        value={size}
                        {...register("sizes")}
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                      />
                      <span className="ml-2">{size}</span>
                    </label>
                  </div>
                ))}
              </div>
              {errors.sizes && (
                <p className="text-primary text-sm">{errors.sizes.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="short_description"
            className="block text-gray-700 font-bold mb-2"
          >
            Short Description:
          </label>
          <textarea
            {...register("short_description")}
            id="short_description"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            rows={3}
          />
          {errors.short_description && (
            <p className="text-primary text-sm">
              {errors.short_description.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            {...register("description")}
            id="description"
            name="description"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            rows={6}
          />
          {errors.description && (
            <p className="text-primary text-sm">{errors.description.message}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={isLoading}
            type="submit"
            className={` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isLoading ? "bg-red-400 " : "bg-primary"
            }`}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
