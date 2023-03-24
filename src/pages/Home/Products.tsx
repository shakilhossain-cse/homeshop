import { IProduct } from "../../type";
import ProductCard from "../../components/ProductCard";

function Products({ data, title }: { data: IProduct[]; title: string }) {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {title}
      </h2>
      <div className="card-container">
        {data.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
