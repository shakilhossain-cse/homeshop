import React from "react";
import { BsTrash } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { cartAtom, decrementQuantity, incrementQuantity, removeFromCart } from "../../recoil";
import { ICartData, IProduct } from "../../type";

const Carts = ({ products }: { products: ICartData[] }) => {
  return (
    <div className="col-span-12 md:col-span-9">
      <div className="container bg-[#E9E4E4] p-2">
        <div className="grid grid-cols-12">
          <div className="col-span-7 text-center text-black md:font-semibold">
            Home
          </div>
          <div className="col-span-2 text-center text-black md:font-semibold  hidden md:block">
            Quantity
          </div>
          <div className="col-span-2 text-center text-black md:font-semibold">
            Total
          </div>
          <div className="col-span-2 md:col-span-1 text-center text-black md:font-semibold">
            Action
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {products.map((product) => (
          <CattItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

const CattItem = ({ product }: { product: ICartData }) => {
  const [cart, setCart] = useRecoilState(cartAtom);

  const handelRemoveCart = (productId: number) => {
    const newCart = removeFromCart(cart, productId);
    setCart(newCart);
  };

  const increment = (productId: number) => {
    const newQty = incrementQuantity(cart, productId);
    setCart(newQty);
  };
  
  const decrementQty = (productId: number) => {
    const newQty = decrementQuantity(cart, productId);
    setCart(newQty);
  };

  return (
    <div className="flex items-center justify-between gap-4 p-4 border border-gray-200 rounded ">
      <div className="md:w-28 w-12 flex-shrink-0">
        <img src={product.product.images} alt="product" className="w-full" />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-sm md:text-xl font-medium uppercase">
          {product.product.title.substring(0, 20)}
        </h2>
        <p className="text-gray-500 text-sm">
          {" "}
          Availability :{" "}
          {product.quantity >= 1 ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-orange-600">Out Of Stock</span>
          )}
        </p>
      </div>

      <div className="hidden md:block">
        <div className="flex border border-gray-300 divide-x divide-gray-300 w-max">
          <div
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            onClick={() => decrementQty(product.id)}
          >
            -
          </div>
          <div className="h-8 w-8 text-base flex items-center justify-center">
            {product.quantity}
          </div>
          <div
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            onClick={()=>increment(product.id)}
          >
            +
          </div>
        </div>
        {/* {qtyError && <p className="text-primary mt-3 text-xs">{qtyError}</p>} */}
      </div>
      <div className="text-primary text-lg font-semibold">
        $
        {product.product.discount_price
          ? product.product.discount_price
          : product.product.price}
      </div>
      <div
        className="text-gray-600 cursor-pointer hover:text-primary"
        onClick={() => handelRemoveCart(product.id)}
      >
        <BsTrash />
      </div>
    </div>
  );
};

export default Carts;
