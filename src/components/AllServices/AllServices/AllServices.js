import React from "react";
import Banner from "../../Home/Banner/Banner";
import NewsLetter from "../../Home/NewsLetter/NewsLetter";
import PlayStore from "../../Home/PlayStore/PlayStore";
import ExploreAllServices from "../ExploreAllServices/ExploreAllServices";

const AllServices = () => {
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
