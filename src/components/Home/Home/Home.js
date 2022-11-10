import React from "react";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import PlayStore from "../PlayStore/PlayStore";
import Services from "../Services/Services";

const Home = () => {
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
