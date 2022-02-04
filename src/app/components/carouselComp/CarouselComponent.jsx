import React from 'react';
import {Carousel, Button} from 'react-bootstrap';
import * as styles from "./Styles.CarouselComponent";

const CarouselComponent = () => {
    return <div>
        {/* <h1>Carousel Component</h1> */}
        <div style={{ display: 'block', width: "auto" }}>
            <Carousel>
                <Carousel.Item 
                >
                    <img
                        className="d-block w-100"
                        style={{width:"auto", height:500}}
                        src="assets/wine8.jpg"
                        alt="First slide"
                    />
                   

                    <Carousel.Caption>
                        <h3>Best Wines in Town</h3>
                        <p>New brands in. Come grab a glass! </p>
                        <Button 
              variant="secondary"
              style={{
                backgroundColor: "#fb2e86",
                outline: "none",
                border: "none",
                alignItems: "center",
              }}
            >
              Shop Now
            </Button>
              
                    </Carousel.Caption>
                </Carousel.Item>
              

                <Carousel.Item>
                    <img
                      style={{width:"auto", height:500}}
                        className="d-block w-100"
                        src="assets/wine4.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3><i>Cheers!!!</i></h3>
                        <p>They are here! Put your wine on spotlight!</p>
                        <Button 
              variant="secondary"
              style={{
                backgroundColor: "#fb2e86",
                outline: "none",
                border: "none",
                alignItems: "center",
              }}
            >
              Shop Now
            </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                      style={{width:"auto", height:500}}
                        className="d-block w-100"
                        src="assets/wine1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Tastes Like Happiness!</h3>
                        <p>Unbox! Uncork! Enjoy!Bringing you happpiness at your doorstep!</p>
                        <Button 
              variant="secondary"
              style={{
                backgroundColor: "#fb2e86",
                outline: "none",
                border: "none",
                alignItems: "center",
              }}
            >
              Shop Now
            </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>;
};

export default CarouselComponent;
