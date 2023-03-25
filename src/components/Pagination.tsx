import React from "react";
import { Link } from "react-router-dom";
import { IPagination } from "../type";

function Pagination({ links }: { links: IPagination[] }) {
  return (
    <div aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to="#"
              className={`px-3 py-2 leading-tight  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
