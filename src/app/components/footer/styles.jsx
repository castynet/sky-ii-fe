import styled from "styled-components";

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Footer1 = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 1fr);
  background-color: #EEEFFB;
  padding: 30px 50px 20px 30px;
`;
export const Footer2 = styled.div`
  display: grid;
  justify-content: space-around;
  grid-auto-flow: column;
  background-color: #E7E4F8;
`;

export const Title1 = styled.h1`
  color: black;
`;

export const Title2 = styled.h3`
  color: black;
`;

export const Button = styled.button`
    color: white;
    background-color: #FB2E86;
    padding: 0.75em 1em;
    border: none;
    border-radius: 3px;

`;
export const Input = styled.input`
  padding: 0.75em 1em;
  border: none;
  border-radius: 3px;
  color: #F6F6FD;
  
`;
export const p = styled.p`
  color: #BCBFDA;
  margin-top: 13px;
  margin-bottom: 13px;
  color: #8A8FB9;
`;
export const HyperLink = styled.a`
  text-decoration: none;
`;

export const Link = styled.a`
  display: inline-block;
  margin: 10px 10px 0 0;
`;

