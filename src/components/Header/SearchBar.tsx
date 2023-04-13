import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { filterProducts } from "../../services/productService";

function SearchBar() {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/shop?title=${search}`, { state: { search } });
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="w-full md:flex max-w-xl relative hidden"
    >
      <span className="absolute left-4 top-4 text-lg text-gray-400">
        <i className="fas fa-search" />
      </span>
      <input
        type="text"
        className="w-3/4 border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
        placeholder="search.."
        onChange={onSearchChange}
      />
      <button
        type="submit"
        className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
