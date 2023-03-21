import React from "react";
import { Routes as Router, Route, Outlet } from "react-router-dom";
import { UserLayout } from "./components/layouts/UserLayout";

function Routes() {
  return (
    <Router>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<h1 className="bg-blue-500 p-5">hello</h1>} />
      </Route>
    </Router>
  );
}

export default Routes;
