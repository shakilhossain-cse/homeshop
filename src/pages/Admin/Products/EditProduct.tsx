import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageUpload from "../../../components/ImageUpload";
import { IProduct } from "../../../type";
import axios from "axios";
import BreadCrumb from "../../../components/BreadCrumb";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "./Schema";
import { MutateOptions, useMutation, useQuery } from "@tanstack/react-query";
import {
  createProduct,
  getProductDetails,
  updateProduct,
} from "../../../services/productService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [imageResponse, setImageResponse] = useState<{ url: string }[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const { data: product } = useQuery<IProduct>(["product", slug], () =>
    getProductDetails(slug)
  );
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      sku: "",
      brand: "",
      category: "",
      price: 0,
      discount_price: 0,
      quantity: 0,
      sizes: [],
      short_description: "",
      description: "",
    },
  });

  const { mutate, isLoading } = useMutation(updateProduct);

  const onSubmit = (data: IProduct) => {
    if (!product?.id) return;
    mutate(
      {
        data: data,
        id: product.id,
      },
      {
        onSuccess(data) {
          toast.success(data.message);
          navigate("/admin/product-list");
        },
      }
    );
  };

  useEffect(() => {
    setValue("images", imageResponse);
  }, [imageResponse]);

  useEffect(() => {
    setValue("title", product?.title ?? "");
    setValue("sku", product?.sku ?? "");
    setValue("brand", product?.brand ?? "");
    setValue("category", product?.category ?? "");
    setValue("price", product?.price ?? 0);
    setValue("discount_price", product?.discount_price ?? 0);
    setValue("quantity", product?.quantity ?? 0);
    setValue("sizes", product?.sizes ?? []);
    setValue("short_description", product?.short_description ?? "");
    setValue("description", product?.description ?? "");
    setValue("images", imageResponse);
    setImageResponse(product?.images ?? []);
  }, [product]);

  console.log(product);

  const sizes = ["m", "l", "xl", "xxl", "2xl"];
  return (
    <div className="">
      <BreadCrumb title="Edit Product" />
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
          <div className="mb-4  w-full">
            <label
              htmlFor="brand"
              className="block text-gray-700 font-bold mb-2"
            >
              Brand:
            </label>
            <input
              type="text"
              id="brand"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              {...register("brand")}
            />
            {errors.brand && (
              <p className="text-primary text-sm">{errors.brand.message}</p>
            )}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mb-4 w-full">
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2"
            >
              Category:
            </label>
            <input
              type="text"
              id="category"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              {...register("category")}
            />
            {errors.category && (
              <p className="text-primary text-sm">{errors.category.message}</p>
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
          imageResponse={imageResponse}
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
                {sizes.map((size) => (
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

  // return (
  //   <div>
  //     {/* <ImageUpload files={files} setFiles={setFiles} /> */}
  //     {/* <h1>Upload Images</h1>
  //     <form onSubmit={submitData}>
  //       <input name="image" type="file" multiple onChange={handleInputChange}/>
  //       <button type="submit">upload</button>
  //     </form> */}
  //   </div>
  // );
};

export default EditProduct;
