import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useRecoilValue } from "recoil";
import { cartAtom } from "../../recoil";

function TopBar() {
  const cartItems = useRecoilValue(cartAtom);  
  return (
    <div>
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          {/* logo */}
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-52
            "
            />
          </Link>

          <SearchBar />

          <div className="flex items-center space-x-4">
            <a
              href=""
              className="text-center flex justify-center items-center flex-col text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <AiOutlineHeart />
                <i className="far fa-heart" />
              </div>
              <div className="text-xs leading-3">Wish List</div>
              <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </span>
            </a>
            <Link
              to="/cart"
              className="text-center flex justify-center items-center flex-col text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <BsCartPlus />
              </div>
              <div className="text-xs leading-3">Cart</div>
              {cartItems.length >= 1&& 
              <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                {cartItems.length}
              </span>}
            </Link>
            <Link
              to="/login"
              className="text-center text-gray-700 flex justify-center items-center flex-col hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <BiUser />
              </div>
              <div className="text-xs leading-3">Account</div>
            </Link>
          </div>
        </div>
      </header>
      ;
    </div>
  );
}

export default TopBar;
