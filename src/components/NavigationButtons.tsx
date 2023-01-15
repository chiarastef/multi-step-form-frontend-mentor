import React from "react";
import styled from "styled-components";

import { AppContext } from "../context";

const NavigationBtns = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  width: 100%;
  padding: 18px;

  @media screen and (min-width: 768px) {
    position: static;
    margin-top: 50px;
  }
`;

const BackBtn = styled.button`
  font-family: inherit;
  font-size: 17px;
  font-weight: 500;
  color: var(--text-color);
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
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

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 12px 20px;
  }
`;

const NavigationButtons = () => {
  const data = React.useContext(AppContext);

  return (
    <NavigationBtns>
      <BackBtn
        onClick={() => {
          if (data?.page && data?.page > 1) {
            data?.setPage(data?.page - 1);
          }
        }}
      >
        Go Back
      </BackBtn>
      <NextBtn
        onClick={() => {
          if (data?.page && data?.page < 4) {
            data?.setPage(data?.page + 1);
          }
        }}
      >
        Next Step
      </NextBtn>
    </NavigationBtns>
  );
};

export default NavigationButtons;
