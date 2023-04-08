import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { addToCart, cartAtom } from "../../recoil";
import { IProduct } from "../../type";
import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiFillShopping,
} from "react-icons/ai";

function ProductOption({ data }: { data: IProduct }) {
  const [cart, setCart] = useRecoilState(cartAtom);

  const handelAddToCart = (product: IProduct, quantity: number) => {
    if (data.quantity <= 0||data.quantity <  quantity) return;  
    if (isAddToCart(product.id) !== true) {
      const newCart = addToCart(cart, product, quantity);
      setCart(newCart);
    }
  };

  const isAddToCart = (cartId: number): boolean => {
    const findCart = cart.find((item) => item.id === cartId);
    return !!findCart;
  };
  const [itemQuantity, setItemQuantity] = useState(data.quantity >= 1 ? 1 : 0);
  const [qtyError, setQtyError] = useState("");

  const incrementQty = () => {
    if (data.quantity === itemQuantity) {
      setQtyError(`This product only ${data.quantity} available `);
      return;
    }
    setQtyError("");
    setItemQuantity((prev) => prev + 1);
  };
  const decrementQty = () => {
    if (itemQuantity <= 1) {
      setQtyError(`You can't decrease product qty lower then 1`);
      return;
    }
    setQtyError("");
    setItemQuantity((prev) => prev - 1);
  };
  return (
    <div>
      <h2 className="text-3xl font-medium uppercase mb-2">{data.title}</h2>
      <div className="flex items-center mb-4">
        <div className="flex gap-1 tex-sm text-yellow-400">
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
        <div className="text-xs text-gray-500 ml-3">(40 reviews)</div>
      </div>
      <div className="space-y-3">
        <p className="text-gray-800 font-semibold space-x-2">
          <span>Availability:</span>
          {data.quantity && data.quantity > 0 ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-orange-600">Out Of Stock</span>
          )}
        </p>
        <p className="text-gray-800 space-x-2">
          <span className="font-semibold">Brand:</span>
          <span className="text-gray-600">{data?.brand}</span>
        </p>
        <p className="text-gray-800 space-x-2">
          <span className="font-semibold">Category:</span>
          <span className="text-gray-600">{data?.category}</span>
        </p>
        <p className="text-gray-800 space-x-2">
          <span className="font-semibold">SKU:</span>
          <span className="text-gray-600"> {data?.sku} </span>
        </p>
      </div>
      <div className="flex items-baseline mb-1 mt-3 space-x-2">
        <p className="text-2xl text-primary font-semibold">
          ${data.discount_price ? data.discount_price : data.price}
        </p>
        {data?.discount_price && (
          <p className="text-base text-gray-400 line-through">${data.price}</p>
        )}
      </div>
      <p className="mt-3 text-gray-600">{data?.short_description}</p>
      {/* size filter  */}
      <div className="pt-4">
        <h3 className="text-sm mb-1 text-gray-800 uppercase">Size</h3>
        <div className="mt-4 flex items-center gap-2">
          {data?.sizes.map((size) => (
            <div className="size-selector" key={size}>
              <input type="radio" name="size" className="hidden" id={size} />
              <label
                htmlFor={size}
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow"
              >
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* colors filter  */}

      {/* quantity */}
      <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">quantity</h3>
        <div className="flex border border-gray-300 divide-x divide-gray-300 w-max">
          <div
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            onClick={decrementQty}
          >
            -
          </div>
          <div className="h-8 w-8 text-base flex items-center justify-center">
            {data.quantity >= 1 ? itemQuantity : 0}
          </div>
          <div
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            onClick={incrementQty}
          >
            +
          </div>
        </div>
        {qtyError && <p className="text-primary mt-3 text-xs">{qtyError}</p>}
      </div>
      {/* card button  */}
      <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
        <button
          onClick={() => handelAddToCart(data, itemQuantity)}
          className={`border border-primary text-white px-5 md:px-8 py-1 md:py-2 font-medium rounded uppercase flex items-center gap-2  transition  ${
            data.quantity >= 1
              ? "bg-primary hover:text-primary hover:bg-transparent"
              : "bg-primary bg-opacity-25 cursor-not-allowed border-opacity-0 hover:bg-primary hover:bg-opacity-25 hover:text-black"
          } ${
            isAddToCart(data.id) &&
            "bg-primary bg-opacity-25 cursor-not-allowed border-opacity-0 hover:bg-primary hover:bg-opacity-25 hover:text-black"
          }`}
        >
          {isAddToCart(data.id) ? (
            <>
              <AiFillShopping />
              Added on Cart
            </>
          ) : (
            <>
              <AiOutlineShopping />
              Add to cart
            </>
          )}
        </button>
        <a
          href="#"
          className="border border-gray-300 text-gray-600 px-5 md:px-8 py-1 md:py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
        >
          <AiOutlineHeart />
          Wishlist
        </a>
      </div>
      {/* share links */}
      <div className="flex gap-3 mt-4">
        <a
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fa-solid fa-link" />`
        </a>
      </div>
    </div>
  );
}

export default ProductOption;
