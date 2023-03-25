import { Link } from "react-router-dom";
import { IProduct } from "../type";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { addToCart, cartAtom } from "../recoil";

function ProductCard({ product }: { product: IProduct }) {
  const [cart, setCart] = useRecoilState(cartAtom);
  const handelAddToCart = (product: IProduct, quantity: number) => {
    if (isAddToCart(product.id) !== true) {
      const newCart = addToCart(cart, product, quantity);
      setCart(newCart);
    }
  };

  const isAddToCart = (cartId: number): boolean => {
    const findCart = cart.find((item) => item.id === cartId);
    return !!findCart;
  };

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
      <button
        onClick={() => handelAddToCart(product, 1)}
        className={isAddToCart(product.id) ? `card-button-done` : "card-button"}
      >
        {isAddToCart(product.id) ? `Added on Cart` : " Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
