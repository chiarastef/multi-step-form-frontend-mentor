import React from "react";
import styled from "styled-components";
import { AppContext } from "../context";

interface styleProps {
  firstPage: boolean;
}

const NavigationBtnsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    position: static;
    margin-top: auto;
  }
`;

const NavigationBtns = styled.div<styleProps>`
  display: flex;
  justify-content: ${({ firstPage }) =>
    firstPage ? "flex-end" : "space-between"};
  width: 90%;
  padding: 10px 0;
  margin: auto;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const BackBtn = styled.button`
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 150ms ease-in;

  &:hover {
    color: var(--primary-color);
  }
`;

const NextBtn = styled.button`
  font-family: inherit;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.5px;
  background-color: var(--primary-color);
  padding: 10px 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 150ms ease-in;

  &:hover {
    background-color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    padding: 12px 10px;
  }
`;

const NavigationButtons = () => {
  const appContext = React.useContext(AppContext);
  if (!appContext) return null;
  const {
    page,
    setPage,
    setShowConfirmation,
    personalInfo,
    planInfo,
    setPersonalFormSubmitted,
    setWasPlanSelected,
  } = appContext;

  const isNotFirstPage = page > 1;

  const goToPreviousPage = (): void => {
    if (page === 2) {
      setPersonalFormSubmitted(false);
    }
    if (page === 3) {
      setWasPlanSelected(false);
    }
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = (): void => {
    switch (page) {
      case 1:
        setPersonalFormSubmitted(true);
        if (
          personalInfo.name &&
          personalInfo.email &&
          personalInfo.phoneNumber
        ) {
          setPage(page + 1);
        }
        break;
      case 2:
        setWasPlanSelected(true);
        if (planInfo.planName) {
          setPage(page + 1);
        }
        break;
      case 3:
        setPage(page + 1);
        break;
      case 4:
        setShowConfirmation(true);
        break;
    }
  };

  return (
    <NavigationBtnsContainer>
      <NavigationBtns firstPage={!isNotFirstPage}>
        {page > 1 && <BackBtn onClick={goToPreviousPage}>Go Back</BackBtn>}
        <NextBtn onClick={goToNextPage}>
          {page === 4 ? "Confirm" : "Next Step"}
        </NextBtn>
      </NavigationBtns>
    </NavigationBtnsContainer>
  );
};

export default NavigationButtons;
