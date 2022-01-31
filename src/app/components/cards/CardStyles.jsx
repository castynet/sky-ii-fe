import styled from "styled-components";
export const FloatingSection = styled.div`
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
export const CardSection = styled.div`
  cursor: pointer;
  position: relative;
  height: 280px;
  width: 270px;
  background: #f6f7fb;
  ${FloatingSection}:hover {
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
export const EcomCard = styled.div`
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

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
export const Dot = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const Boxes = styled.div`
  height: 10px;
  width: 10px;
  display: flex;
  background: #de9034;
  border-radius: 50%;
`;
export const Boxes1 = styled.div`
  height: 10px;
  width: 10px;
  background: #ec42a2;
  border-radius: 50%;
`;

export const Boxes2 = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: #8568ff;
`;

export const Prices = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
`;
