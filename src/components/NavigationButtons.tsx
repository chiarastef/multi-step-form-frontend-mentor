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
    padding: 0 18px;
    margin-top: auto;
  }
`;

const BackBtn = styled.button`
  font-family: inherit;
  font-size: 17px;
  font-weight: 500;
  color: var(--text-color);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 150ms ease-in;

  &:hover {
    color: var(--primary-color);
  }

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
  cursor: pointer;
  transition: background-color 150ms ease-in;

  &:hover {
    background-color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 12px 20px;
  }
`;

const NavigationButtons = () => {
  const appContext = React.useContext(AppContext);
  if (!appContext) return null;
  const { page, setPage, setShowConfirmation } = appContext;

  const goToPreviousPage = (): void => {
    if (page && page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = (): void => {
    if (page && page < 4) {
      setPage(page + 1);
    }
    if (page === 4) {
      setShowConfirmation(true);
    }
  };

  return (
    <NavigationBtns>
      <BackBtn onClick={goToPreviousPage}>Go Back</BackBtn>
      <NextBtn onClick={goToNextPage}>
        {page === 4 ? "Confirm" : "Next Step"}
      </NextBtn>
    </NavigationBtns>
  );
};

export default NavigationButtons;
