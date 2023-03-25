import React from 'react'
import { BsTrash } from "react-icons/bs";

const CartItems = () => {
  return (
    <div className="col-span-9 ">
    <div className="container bg-[#E9E4E4] p-2">
      <div className="grid grid-cols-12">
        <div className="col-span-7 text-center text-black font-semibold">
          Home
        </div>
        <div className="col-span-2 text-center text-black font-semibold">
          Quantity
        </div>
        <div className="col-span-2 text-center text-black font-semibold">
          Total Price
        </div>
        <div className="col-span-1 text-center text-black font-semibold">
          Action
        </div>
      </div>
    </div>
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4 p-4 border border-gray-200 rounded ">
        <div className="w-28 flex-shrink-0">
          <img
            src="https://themes.rslahmed.dev/rafcart/assets/images/headphone-4.png"
            alt="product"
            className="w-28"
          />
        </div>
        <div className="w-1/3">
          <h2 className="text-gray-800 text-xl font-medium uppercase">
            Italian Shape Sofa
          </h2>
          <p className="text-gray-500 text-sm">
            {" "}
            Availability :{" "}
            <span className="text-green-600">In Stock</span>
          </p>
        </div>

        <div className="">
          <div className="flex border border-gray-300 divide-x divide-gray-300 w-max">
            <div
              className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
              // onClick={DecrementQty}
            >
              -
            </div>
            <div className="h-8 w-8 text-base flex items-center justify-center">
              {/* {data.quantity >= 1 ? itemQuantity : 0} */}0
            </div>
            <div
              className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
              // onClick={IncrementQty}
            >
              +
            </div>
          </div>
          {/* {qtyError && <p className="text-primary mt-3 text-xs">{qtyError}</p>} */}
        </div>
        <div className="text-primary text-lg font-semibold">
          $120.00
        </div>
        <div className="text-gray-600 cursor-pointer hover:text-primary">
          <BsTrash />
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItems