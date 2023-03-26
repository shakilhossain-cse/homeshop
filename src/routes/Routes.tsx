import React from "react";
import { Routes as Router, Route, Outlet } from "react-router-dom";
import { UserLayout } from "../components/layouts/UserLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import RequireAuth from "./RequireAuth";

function Routes() {
  return (
    <Router>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="product/:slug" element={<Product />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Router>
  );
}

export default Routes;
