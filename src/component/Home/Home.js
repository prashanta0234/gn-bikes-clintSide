import React from "react";
import HomeBikes from "../Bickes/HomeBikes";
import Review from "../Review/Review";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import WhyUs from "../WhyUs/WhyUs";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <HomeBikes></HomeBikes>
      <Review></Review>
      <WhyUs></WhyUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
