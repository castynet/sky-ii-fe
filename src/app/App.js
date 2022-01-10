import React from 'react'
import HeadingBar from "./components/HeadingBar/headingBar";
import Footer from './components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sofa from './components/promoComponent/Sofa';

//import from components
import HeadingBar from "./Components/HeadingBar/HeadingBar";
import Card from "./components/Cardscomponent/Card";
//import from elements
import Heading from "./elements/HeaderBanner/Heading";

const App = () => {
  return (
    <div>
      <Heading />
      <Sofa/>
      <HeadingBar />
      <Card />
     <Footer/>
    </div>
  );
}

