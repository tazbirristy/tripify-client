import React from "react";
import Banner from "../../Home/Banner/Banner";
import NewsLetter from "../../Home/NewsLetter/NewsLetter";
import PlayStore from "../../Home/PlayStore/PlayStore";
import ExploreAllServices from "../ExploreAllServices/ExploreAllServices";
import useTitle from "./../../../hooks/useTitle";

const AllServices = () => {
  useTitle("AllServices");

  return (
    <div>
      <Banner></Banner>
      <ExploreAllServices></ExploreAllServices>
      <PlayStore></PlayStore>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default AllServices;
