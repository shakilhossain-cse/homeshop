import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

function AuthLayout() {
  return (
    <div>
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <Sidebar />
        <div className="col-span-12  md:col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
