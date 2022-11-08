import React from "react";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import PlayStore from "../PlayStore/PlayStore";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PlayStore></PlayStore>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
