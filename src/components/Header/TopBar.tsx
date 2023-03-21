import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import logo from "../../assets/logo.png";

function TopBar() {
  return (
    <div>
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          {/* logo */}
          <a href="#">
            <img src={logo} alt="logo" className="w-52
            " />
          </a>
          {/* search */}
          <div className="w-full md:flex max-w-xl relative hidden">
            <span className="absolute left-4 top-4 text-lg text-gray-400">
              <i className="fas fa-search" />
            </span>
            <input
              type="text"
              className="w-3/4 border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
              placeholder="search.."
            />
            <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
              Search
            </button>
          </div>
          {/* icons */}
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
            <a
              href=""
              className="text-center flex justify-center items-center flex-col text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <BsCartPlus />
              </div>
              <div className="text-xs leading-3">Cart</div>
              <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </span>
            </a>
            <a
              href=""
              className="text-center text-gray-700 flex justify-center items-center flex-col hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <BiUser />
              </div>
              <div className="text-xs leading-3">Account</div>
            </a>
          </div>
        </div>
      </header>
      ;
    </div>
  );
}

export default TopBar;
