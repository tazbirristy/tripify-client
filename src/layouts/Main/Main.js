import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../../components/Shared/Header/Header";
import Footer from "./../../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="bg-purple-800">
        <div className="max-w-screen-2xl mx-auto">
          <Header></Header>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mb-12">
        <Outlet></Outlet>
      </div>
      <div className="bg-purple-800">
        <div className="max-w-screen-2xl mx-auto bg-gray-800  py-16">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
