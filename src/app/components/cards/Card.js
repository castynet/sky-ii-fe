import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <div>
      <Ecomcard>
        <Cardsection className="cardsection">
          <picture>
            <img
              src="https://images.unsplash.com/photo-1601392740426-907c7b028119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="chair"
            />
          </picture>
          <Floatingsection>
            <div className="cart">
              <i class="bx bx-cart"></i>
            </div>
            <div className="zoom">
              <i class="bx bx-zoom-in"></i>
            </div>
            <div className="heart">
              <i class="bx bx-heart"></i>
            </div>
          </Floatingsection>
        </Cardsection>
        <Cardcontent>
          <h2 className="titlecard">Vel elit euismod</h2>
          <Dot>
            <Boxes></Boxes>
            <Boxes1></Boxes1>
            <Boxes2></Boxes2>
          </Dot>
          <Prices>
            <div className="prices1">
              <p>$26.00 </p>
            </div>
            <div className="prices2">
              <span>$42.00</span>
            </div>
          </Prices>
        </Cardcontent>
      </Ecomcard>
    </div>
  );
};

const Floatingsection = styled.div`
  opacity: 0;
  position: absolute;
  padding-left: 11px;
  color: #151875;
  text-align: center;
  box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  .cart {
    width: 30px;
    height: 30px;
    background-color: white;
    color: #151875;
  }
  .zoom {
    width: 30px;
    height: 30px;
    background-color: white;
    color: #151875;
  }
  .heart {
    width: 30px;
    height: 30px;
    background-color: white;
    color: #151875;
  }
`;
const Cardsection = styled.div`
  cursor: pointer;
  position: relative;
  height: 280px;
  width: 270px;
  background: #f6f7fb;
  ${Floatingsection}:hover {
    opacity: 1;
    width: 100%;
    height: 50px;
    background: transparent;
    background-color: transparent;
    transition: all 0.4s;
  }
  img {
    height: 201px;
    width: 201px;
    padding-top: 50px;
    padding-left: 50px;
    object-fit: cover;
  }
`;
const Ecomcard = styled.div`
  cursor: pointer;

  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  transition: all 0.4s;
  h2 {
    font-size: 18px;
    line-height: 21px;
    color: #151875;
  }
`;

const Cardcontent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
const Dot = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

const Boxes = styled.div`
  height: 10px;
  width: 10px;
  display: flex;
  background: #de9034;
  border-radius: 50%;
`;
const Boxes1 = styled.div`
  height: 10px;
  width: 10px;
  background: #ec42a2;
  border-radius: 50%;
`;

const Boxes2 = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: #8568ff;
`;

const Prices = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
`;

export default Card;
