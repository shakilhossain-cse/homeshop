import { Link } from "react-router-dom"
import { IProduct } from "../type"
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";


function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="card group">
      {/* product image */}
      <div className="card-image">
        <img src={product.images} alt="product-image" className="w-full h-60" />
        <div className="card-icons">
          <a href="#" className="card-icon-link">
            <AiOutlineSearch />
          </a>
          <a href="#" className="card-icon-link">
            <AiOutlineHeart />
          </a>
        </div>
      </div>
      {/* product content  */}
      <div className="card-content">
        <Link to={"/product/" + product.slug}>
          <h4 className="card-title">{product.title.substring(0, 18)}</h4>
        </Link>
        <div className="card-price-container">
          <p className="card-main-price">
            ${product.discount_price ? product.discount_price : product.price}
          </p>
          {product.discount_price && (
            <p className="card-previous-price">${product.price}</p>
          )}
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
          {/* <div className="tex-xs text-gray-500 ml-3">({product.})</div> */}
        </div>
      </div>
      <a href="#" className="card-button">
        {" "}
        Add to Cart{" "}
      </a>
    </div>
  )
}

export default ProductCard