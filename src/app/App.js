import React from "react";

import HeadingBar from "app/components/headingBar/headingBar";
import Footer from "app/components/footerComponent/footer";
import Sofa from "app/components/promoComponent/Sofa";
import Card from "app/components/cards/Card";

import Heading from "app/elements/headingBanner/Heading";

export default function App() {
  return (
    <>
      <Heading />
      <Sofa />
      <HeadingBar />
      <Card />
      <Footer />
    </>
  );
}
