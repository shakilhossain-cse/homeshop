import React from "react";
import ProductCard from "../../components/ProductCard";
import { IProduct } from "../../type";

function ShopProducts({ products }: { products: IProduct[] }) {
  return (
    <>
      <div className="container pb-16">
        <div className="space-y-3 hidden" id="oneData">
          <div className="grid grid-cols-[250px,1fr] gap-4 border shadow bg-white p-1">
            <div className="card-image">
              <img
                src="image/product1.jpg"
                alt="product-image"
                className="w-full"
              />
              <div className="card-icons">
                <a href="#" className="card-icon-link">
                  <i className="fas fa-search" />
                </a>
                <a href="#" className="card-icon-link">
                  <i className="far fa-heart" />
                </a>
              </div>
            </div>
            <div className="card-content">
              <a href="#">
                <h4 className="card-title">Madeline sofa</h4>
              </a>
              <div className="card-price-container">
                <p className="card-main-price">$45.00</p>
                <p className="card-previous-price">$45.00</p>
              </div>
              <div className="flex item-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="tex-xs text-gray-500 ml-3">(142)</div>
              </div>
              <div className="pt-4 space-x-3">
                <a
                  href="#"
                  className="w-1/4 py-1 px-3 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
                >
                  Add to Cart
                </a>
                <a
                  href="#"
                  className="w-1/4 py-1 px-3 text-center text-gray-600 border border-gray-300 rounded hover:bg-transparent hover:text-primary transition"
                >
                  Wishlist
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[250px,1fr] gap-4 border shadow bg-white p-1">
            <div className="card-image">
              <img
                src="image/product1.jpg"
                alt="product-image"
                className="w-full"
              />
              <div className="card-icons">
                <a href="#" className="card-icon-link">
                  <i className="fas fa-search" />
                </a>
                <a href="#" className="card-icon-link">
                  <i className="far fa-heart" />
                </a>
              </div>
            </div>
            <div className="card-content">
              <a href="#">
                <h4 className="card-title">Madeline sofa</h4>
              </a>
              <div className="card-price-container">
                <p className="card-main-price">$45.00</p>
                <p className="card-previous-price">$45.00</p>
              </div>
              <div className="flex item-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="tex-xs text-gray-500 ml-3">(142)</div>
              </div>
              <div className="pt-4 space-x-3">
                <a
                  href="#"
                  className="w-1/4 py-1 px-3 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
                >
                  Add to Cart
                </a>
                <a
                  href="#"
                  className="w-1/4 py-1 px-3 text-center text-gray-600 border border-gray-300 rounded hover:bg-transparent hover:text-primary transition"
                >
                  Wishlist
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[250px,1fr] gap-4 border shadow bg-white p-1">
            <div className="card-image">
              <img
                src="image/product1.jpg"
                alt="product-image"
                className="w-full"
              />
              <div className="card-icons">
                <a href="#" className="card-icon-link">
                  <i className="fas fa-search" />
                </a>
                <a href="#" className="card-icon-link">
                  <i className="far fa-heart" />
                </a>
              </div>
            </div>
            <div className="card-content">
              <a href="#">
                <h4 className="card-title">Madeline sofa</h4>
              </a>
              <div className="card-price-container">
                <p className="card-main-price">$45.00</p>
                <p className="card-previous-price">$45.00</p>
              </div>
              <div className="flex item-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="tex-xs text-gray-500 ml-3">(142)</div>
              </div>
              <div className="pt-4 space-x-3">
                <a
                  href="#"
                  className="w-1/4 py-1 px-3 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
                >
                  Add to Cart
                </a>
                <a
                  href="#"
                  className="w-1/4 py-1 px-3 text-center text-gray-600 border border-gray-300 rounded hover:bg-transparent hover:text-primary transition"
                >
                  Wishlist
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[250px,1fr] gap-4 border shadow bg-white p-1">
            <div className="card-image">
              <img
                src="image/product1.jpg"
                alt="product-image"
                className="w-full"
              />
              <div className="card-icons">
                <a href="#" className="card-icon-link">
                  <i className="fas fa-search" />
                </a>
                <a href="#" className="card-icon-link">
                  <i className="far fa-heart" />
                </a>
              </div>
            </div>
            <div className="card-content">
              <a href="#">
                <h4 className="card-title">Madeline sofa</h4>
              </a>
              <div className="card-price-container">
                <p className="card-main-price">$45.00</p>
                <p className="card-previous-price">$45.00</p>
              </div>
              <div className="flex item-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="tex-xs text-gray-500 ml-3">(142)</div>
              </div>
              <div className="pt-4 space-x-3">
                <a
                  href="#"
                  className="w-1/4 py-1 px-3 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
                >
                  Add to Cart
                </a>
                <a
                  href="#"
                  className="w-1/4 py-1 px-3 text-center text-gray-600 border border-gray-300 rounded hover:bg-transparent hover:text-primary transition"
                >
                  Wishlist
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[250px,1fr] gap-4 border shadow bg-white p-1">
            <div className="card-image">
              <img
                src="image/product1.jpg"
                alt="product-image"
                className="w-full"
              />
              <div className="card-icons">
                <a href="#" className="card-icon-link">
                  <i className="fas fa-search" />
                </a>
                <a href="#" className="card-icon-link">
                  <i className="far fa-heart" />
                </a>
              </div>
            </div>
            <div className="card-content">
              <a href="#">
                <h4 className="card-title">Madeline sofa</h4>
              </a>
              <div className="card-price-container">
                <p className="card-main-price">$45.00</p>
                <p className="card-previous-price">$45.00</p>
              </div>
              <div className="flex item-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="tex-xs text-gray-500 ml-3">(142)</div>
              </div>
              <div className="pt-4 space-x-3">
                <a
                  href="#"
                  className="w-1/4 py-1 px-3 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
                >
                  Add to Cart
                </a>
                <a
                  href="#"
                  className="w-1/4 py-1 px-3 text-center text-gray-600 border border-gray-300 rounded hover:bg-transparent hover:text-primary transition"
                >
                  Wishlist
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[250px,1fr] gap-4 border shadow bg-white p-1">
            <div className="card-image">
              <img
                src="image/product1.jpg"
                alt="product-image"
                className="w-full"
              />
              <div className="card-icons">
                <a href="#" className="card-icon-link">
                  <i className="fas fa-search" />
                </a>
                <a href="#" className="card-icon-link">
                  <i className="far fa-heart" />
                </a>
              </div>
            </div>
            <div className="card-content">
              <a href="#">
                <h4 className="card-title">Madeline sofa</h4>
              </a>
              <div className="card-price-container">
                <p className="card-main-price">$45.00</p>
                <p className="card-previous-price">$45.00</p>
              </div>
              <div className="flex item-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="tex-xs text-gray-500 ml-3">(142)</div>
              </div>
              <div className="pt-4 space-x-3">
                <a
                  href="#"
                  className="w-1/4 py-1 px-3 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
                >
                  Add to Cart
                </a>
                <a
                  href="#"
                  className="w-1/4 py-1 px-3 text-center text-gray-600 border border-gray-300 rounded hover:bg-transparent hover:text-primary transition"
                >
                  Wishlist
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="gridData" className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopProducts;
