import React from "react";
import { Routes as Router, Route, Outlet } from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import { UserLayout } from "../components/layouts/UserLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import RequireAuth from "./RequireAuth";
import { Order } from "../pages/User";
import ChangePassword from "../pages/User/Profile/ChangePassword";
import ProfileInfo from "../pages/User/Profile/ProfileInfo";

function Routes() {
  return (
    <Router>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="product/:slug" element={<Product />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="payment" element={<Payment />} />
        <Route
          path="user/"
          element={
            <RequireAuth>
              <AuthLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Order />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="info" element={<ProfileInfo />} />
        </Route>
      </Route>
    </Router>
  );
}

export default Routes;
