import React from "react";
import { Routes as Router, Route, Outlet } from "react-router-dom";
import { UserLayout } from "./components/layouts/UserLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";

function Routes() {
  return (
    <Router>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="product/:slug" element={<Product />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Router>
  );
}

export default Routes;
