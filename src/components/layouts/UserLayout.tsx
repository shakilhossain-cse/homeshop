import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Navbar, TopBar } from "../Header";

export const UserLayout = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
