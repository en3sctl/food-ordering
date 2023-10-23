import React from "react";
import Carousel from "../../components/Carousel";
import Campaigns from "@/components/Campaigns";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "../../components/about";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
    </div>
  );
};

export default Index;