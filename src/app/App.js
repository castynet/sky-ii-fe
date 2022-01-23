import React from "react";

import HeadingBar from "app/components/headingBar/headingBar";
import Footer from "app/components/footer/footer";
import { PromoA, PromoB } from "app/elements";
import Card from "app/components/cards/Card";

import Heading from "app/elements/headingBanner/Heading";
import LatestUpdates from "./components/latestUpdates/LatestUpdates";
import CarouselComponent from "./components/carouselComp/CarouselComponent";

export default function App() {
  return (
    <div data-testid="app">
      <CarouselComponent/>
      {/* <HeadingBar />
      <Heading />
      <LatestUpdates/>
      <Card />
      <PromoB />
      <PromoA />
      <Footer /> */}
     
     
      
    </div>
  );
}
