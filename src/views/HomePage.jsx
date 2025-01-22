import React from "react";
import Header from "../components/header/Header";
import CarouselView from "../components/carousel/CarouselView";

const HomeView = () => {
  return (
    <div className="home-container">
      <Header />
      <CarouselView />
    </div>
  );
};

export default HomeView;
