import React from "react";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import PlayStore from "../PlayStore/PlayStore";
import Services from "../Services/Services";
import useTitle from "./../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <PlayStore></PlayStore>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
