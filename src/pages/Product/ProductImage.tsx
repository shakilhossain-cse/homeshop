import React, { useState } from "react";

function ProductImage({ images }: { images: string }) {
  const [productImage, setProductImage] = useState(images);
  return (
    <div>
      <img src={productImage} alt="product" className="w-full" />
      <div className="grid grid-cols-5 gap-4 mt-4">
          <img
            src={images}
            alt="product-image"
            className="w-full cursor-pointer border"
            onClick={() =>
              setProductImage(images)
            }
          />
        <img
          src="https://themes.rslahmed.dev/rafcart/assets/images/product10.jpg"
          alt="product-image"
          className="w-full cursor-pointer border border-primary"
          onClick={() =>
            setProductImage(
              "https://themes.rslahmed.dev/rafcart/assets/images/product10.jpg"
            )
          }
        />
        <img
          src="https://themes.rslahmed.dev/rafcart/assets/images/product10.jpg"
          alt="product-image"
          className="w-full cursor-pointer border"
          onClick={() =>
            setProductImage(
              "https://themes.rslahmed.dev/rafcart/assets/images/product10.jpg"
            )
          }
        />
        <img
          src="https://themes.rslahmed.dev/rafcart/assets/images/product10.jpg"
          alt="product-image"
          className="w-full cursor-pointer border"
          onClick={() =>
            setProductImage(
              "https://themes.rslahmed.dev/rafcart/assets/images/product10.jpg"
            )
          }
        />
      </div>
    </div>
  );
}

export default ProductImage;
