import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../recoil/atoms/LoginAtom";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        {/* all category  */}
        <NavDropDown />
        {/* navbar links */}
        <NavLinks />
      </div>
    </nav>
  );
}

function NavDropDown() {
  return (
    <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
      <span className="text-white">
        <i className="fas fa-bars" />
      </span>
      <span className="capitalize ml-2 text-white">All Categories</span>
      <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed hidden group-hover:block">
        <a
          href=""
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img
            src="image/sofa.png"
            className="w-5 h-5 object-contain"
            alt="icon"
          />
          <span className="ml-6 text-gray-600 text-sm">Sofa</span>
        </a>
        <a
          href="#"
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img
            src="image/bed.png"
            className="w-5 h-5 object-contain"
            alt="icon"
          />
          <span className="ml-6 text-gray-600 text-sm">Bed</span>
        </a>
        <a
          href=""
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img
            src="image/outdoor.png"
            className="w-5 h-5 object-contain"
            alt="icon"
          />
          <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
        </a>
        <a
          href=""
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img
            src="image/dining.png"
            className="w-5 h-5 object-contain"
            alt="icon"
          />
          <span className="ml-6 text-gray-600 text-sm">Dining</span>
        </a>
        <a
          href=""
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img
            src="image/office.png"
            className="w-5 h-5 object-contain"
            alt="icon"
          />
          <span className="ml-6 text-gray-600 text-sm">Office</span>
        </a>
      </div>
    </div>
  );
}

function NavLinks() {
  const user = useRecoilValue(userAtom);
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/shop" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];
  return (
    <div className="flex items-center justify-between flex-grow p-3 md:pl-12">
      <div className="flex items-center space-x-6 capitalize">
        {navLinks.map((item) => (
          <Link
            to={item.link}
            className="text-gray-200 hover:text-white transition text-sm"
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <Link to="/login" className="text-gray-200 hover:text-white transition">
        {user?.id ? "Hi " + user.name : "login"}
      </Link>
    </div>
  );
}

export default Navbar;
