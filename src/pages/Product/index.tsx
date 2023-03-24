import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import { getProductDetails } from "../../services/productService";
import { IProduct } from "../../type";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductOption from "./ProductOption";

const Product = () => {
  const { slug } = useParams();
  const location = useLocation();
  const { data, isLoading } = useQuery<IProduct>(["product", slug], () =>
    getProductDetails(slug)
  );

  return (
    <>
      <BreadCrumb title={data?.title} />
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.images && <ProductImage images={data.images} />}
        {data && <ProductOption data={data} />}
      </section>
      {data?.description && <ProductDescription description={data.description} />}
    </>
  );
};

export default Product;
