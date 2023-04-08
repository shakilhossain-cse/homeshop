import React, { useState } from "react";

function ProductImage({ images }: { images: any }) {
  const [productImage, setProductImage] = useState(images[0].url);

  return (
    <div>
      <img src={productImage} alt="product" className="w-full" />
      <div className="grid grid-cols-5 gap-4 mt-4">
        {images.map((image: any) => (
          <img
            src={image?.url}
            alt="product-image"
            className="w-full cursor-pointer border"
            onClick={() => setProductImage(image?.url)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImage;
