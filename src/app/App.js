import 'bootstrap/dist/css/bootstrap.min.css';
import Sofa from './components/promoComponent/Sofa';
import HeadingBar from "./Components/HeadingBar/HeadingBar";
import React from "react";

//import from components
import HeadingBar from "./Components/HeadingBar/HeadingBar";
import Card from "./components/Cardscomponent/Card";
//import from elements
import Heading from "./elements/HeaderBanner/Heading";

const App = () => {
  return (
    <div>
      <Sofa/>
      <HeadingBar />
      <Card />
      <Heading />
    </div>
  );
}
