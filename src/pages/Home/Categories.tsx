import { useNavigate } from "react-router-dom";
import categoryImg from "../../assets/category/category-1.jpg";

function Categories({ categories }: { categories: string[] }) {
  const navigate = useNavigate();

  const handelClick = (category: string) => {
    navigate("/shop", { state: { category } });
  };
  return (
    <div className="container py-16">
      <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            className="relative rounded-sm overflow-hidden group"
            onClick={() => handelClick(category)}
            key={category}
          >
            <img src={categoryImg} alt="category-image" className="w-full" />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-70"
            >
              {category}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
