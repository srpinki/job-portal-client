import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
