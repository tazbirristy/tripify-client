import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../../components/Shared/Header/Header";
import Footer from "./../../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div>
        <div className="max-w-screen-2xl mx-auto">
          <Header></Header>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mb-8">
        <Outlet></Outlet>
      </div>
      <div>
        <div className="max-w-screen-2xl mx-auto py-25">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
