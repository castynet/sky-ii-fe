import styled from "styled-components";

export const Wrapper = styled.div`
  top: 0;
  height: 44px;
  background-color: var(--purple);
  color: var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
  a {
    font-family: var(--heading-font);
    color: var(--white);
    text-decoration: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;

  a {
    font-family: var(--heading-font);
    color: var(--white);
    text-decoration: none;
  }

  select {
    background-color: transparent;
    padding: 4px 10px;
    color: var(--white);
    border: none;
    font-family: var(--heading-font);
    font-size: 16px;
    outline: none;

    option {
      color: var(--white);
      background-color: var(--purple);
    }
  }
`;
