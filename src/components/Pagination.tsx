import React from "react";
import { Link } from "react-router-dom";
import { IPagination } from "../type";

function Pagination({
  links,
  handelPaginate,
}: {
  links: IPagination[];
  handelPaginate: any;
}) {
const handelPagination = (link:IPagination) => {
  const pageValue = link.url && link.url.split('=')[1];
  if (link.label ==="&laquo; Previous") {
    handelPaginate(pageValue)
  }else if (link.label === "Next &raquo;"){
    handelPaginate(pageValue)
  }else{
    handelPaginate(link.label)
  }
}
  return (
    <div aria-label="Page navigation example">
      <ul className="inline-flex flex-wrap gap-y-6 items-center -space-x-px">
        {links.map((link, idx) => {
          return (
            <li key={idx} onClick={() => handelPagination(link)}>
              <p
                className={`px-3 py-2 leading-tight cursor-pointer  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  link.url === null
                    ? "cursor-not-allowed border"
                    : link.active
                    ? "bg-primary border border-primary text-white"
                    : "text-gray-500 bg-white border border-gray-300 "
                }`}
              >
                {link.label === "&laquo; Previous"
                  ? "Prev"
                  : link.label === "Next &raquo;"
                  ? "Next"
                  : link.label}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pagination;
