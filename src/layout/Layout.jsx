import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <div>fotter</div>
    </div>
  );
}

export default Layout;
