import React from "react";
import styled from "styled-components";

const NavigationBtns = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  width: 100%;
  padding: 18px;

  @media screen and (min-width: 768px) {
    position: static;
  }
`;

const BackBtn = styled.button`
  font-family: inherit;
  font-size: 17px;
  font-weight: 500;
  color: var(--text-color);
  background-color: transparent;
  border: none;
`;

const NextBtn = styled.button`
  font-family: inherit;
  font-size: 17px;
  color: #ffffff;
  letter-spacing: 0.5px;
  background-color: var(--primary-color);
  padding: 14px;
  border: none;
  border-radius: 6px;
`;

const NavigationButtons = () => {
  return (
    <NavigationBtns>
      <BackBtn>Go Back</BackBtn>
      <NextBtn>Next Step</NextBtn>
    </NavigationBtns>
  );
};

export default NavigationButtons;
