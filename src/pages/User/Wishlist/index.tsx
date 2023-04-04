import React from "react";

function Wishlist() {
  return (
    <div className="shadow rounded px-6 pt-5 pb-7">
      <h3 className="text-lg font-medium mb-4 capitalize">Wishlist</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded ">
          <div className="w-28 flex-shrink-0">
            <img src="image/product1.jpg" alt="product" className="w-full" />
          </div>
          <div className="w-1/3">
            <h2 className="text-gray-800 text-xl font-medium uppercase">
              Italian Shape Sofa
            </h2>
            <p className="text-gray-500 text-sm">
              {" "}
              Availability : <span className="text-green-600">In Stock</span>
            </p>
          </div>
          <div className="text-primary text-lg font-semibold">$120.00</div>
          <a
            href="#"
            className="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary font-roboto font-medium"
          >
            Add To Cart
          </a>
          <div className="text-gray-600 cursor-pointer hover:text-primary">
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded ">
          <div className="w-28 flex-shrink-0">
            <img src="image/product1.jpg" alt="product" className="w-full" />
          </div>
          <div className="w-1/3">
            <h2 className="text-gray-800 text-xl font-medium uppercase">
              Italian Shape Sofa
            </h2>
            <p className="text-gray-500 text-sm">
              {" "}
              Availability : <span className="text-green-600">In Stock</span>
            </p>
          </div>
          <div className="text-primary text-lg font-semibold">$120.00</div>
          <a
            href="#"
            className="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary font-roboto font-medium"
          >
            Add To Cart
          </a>
          <div className="text-gray-600 cursor-pointer hover:text-primary">
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded ">
          <div className="w-28 flex-shrink-0">
            <img src="image/product1.jpg" alt="product" className="w-full" />
          </div>
          <div className="w-1/3">
            <h2 className="text-gray-800 text-xl font-medium uppercase">
              Italian Shape Sofa
            </h2>
            <p className="text-gray-500 text-sm">
              {" "}
              Availability : <span className="text-green-600">In Stock</span>
            </p>
          </div>
          <div className="text-primary text-lg font-semibold">$120.00</div>
          <a
            href="#"
            className="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary font-roboto font-medium"
          >
            Add To Cart
          </a>
          <div className="text-gray-600 cursor-pointer hover:text-primary">
            <i className="fas fa-trash" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
