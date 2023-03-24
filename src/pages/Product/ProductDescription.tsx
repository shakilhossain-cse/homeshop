import React from "react";

function ProductDescription({ description }: { description: string }) {
  return (
    <div className="container pb-18 mb-10">
      <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
        Product details
      </h3>
      <div className="md:w-3/5 w-full pt-6">
        <div className="text-gray-600 space-y-3">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
