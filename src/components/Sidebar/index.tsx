import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tokenAtom, userAtom } from "../../recoil/atoms/LoginAtom";
import { removeFromLocalStorage } from "../../utils/localStorage";
import { TOKEN_KEY, USER_KEY } from "../../recoil/constance";
import { ISidebarItem, sidebarDAta } from "./sidebardata";
import { FiLogOut } from "react-icons/fi";
import { useMutation } from "@tanstack/react-query";
import { logoutRequest } from "../../services/authService";
import { toast } from "react-toastify";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);
  const setToken = useSetRecoilState(tokenAtom);
  const user = useRecoilValue(userAtom);

  const handelLogout = async () => {
    toast.success("Your logout successfully");
    removeFromLocalStorage(TOKEN_KEY);
    removeFromLocalStorage(USER_KEY);
    setUser(null);
    setToken(null);
    navigate("/");
  };

  const isAllowed = (data: ISidebarItem): Boolean => {
    if (user === null) {
      handelLogout();
      return false;
    }
    return !!data.access.includes(user?.role);
  };

  return (
    <div className="col-span-12  md:col-span-3">
      {/* profile */}
      <div className="px-4 py-3 shadow flex items-center gap-4">
        <div className="flex-shrink-0">
          <img
            src={
              user?.avatar ??
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            }
            alt="avatar"
            className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
          />
        </div>
        <div className="flex-grow">
          <p className="text-gray-600">Hello</p>
          <h4 className="text-gray-800 font-medium uppercase">
            {user?.first_name} {user?.last_name}
          </h4>
        </div>
      </div>
      <div className=" bg-white rounded shadow p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
        <div className="">
          {sidebarDAta.map(
            (data) =>
              isAllowed(data) && (
                <Link
                  to={data.links}
                  className={`${
                    location.pathname == data.links
                      ? "text-primary"
                      : "hover:text-primary"
                  } flex items-center  capitalize  py-1  ${
                    data.isBold && "font-medium mt-3"
                  } ${data.underLine && " border-b-2 pb-3"}`}
                  key={data.id}
                >
                  <span
                    className={`top-0 mx-2 text-base ${
                      !data.isBold && "opacity-0"
                    } `}
                  >
                    {data.icon}
                  </span>
                  {data.title}
                </Link>
              )
          )}
          <button
            onClick={handelLogout}
            className={`hover:text-primary flex items-center  capitalize  py-1 font-medium mt-3 `}
          >
            <span className={`top-0 mx-2 text-base `}>
              <FiLogOut />
            </span>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
