import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllUser } from "../../../services/authService";
import { IData, IUser } from "../../../type";
import { BsCheckLg } from "react-icons/bs";
import { debounce } from "lodash";
import Pagination from "../../../components/Pagination";

export interface IAllUserData extends IData {
  data: IUser[];
}

function User() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");

  const { data } = useQuery<IAllUserData>({
    queryKey: ["user", page, search],
    queryFn: () => getAllUser(page, search),
    keepPreviousData: true,
  }
  );
//   const { data } = useQuery<IAllUserData>(["user", page, search], () =>
//     getAllUser(page, search)
//   );

  const handelSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, 500);

  const handelPaginate = (page: any) => {
    setPage(page);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 p-4">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            onChange={handelSearch}
            id="table-search-users"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Position
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data && data.data.length > 0 ? (
            data.data.map((user) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">{user.name}</div>
                    <div className="font-normal text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="p-1 cursor-pointer hover:bg-red-400 rounded-sm text-lg  bg-primary text-white">
                      <BsCheckLg />
                    </div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <div className="text-lg p-5">No User Found</div>
          )}
        </tbody>
      </table>
      <div className="mt-3 p-3">
        {data?.data && data.data.length > 6 ? (
          data?.links && (
            <Pagination links={data.links} handelPaginate={handelPaginate} />
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default User;
