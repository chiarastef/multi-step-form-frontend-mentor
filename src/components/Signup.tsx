import React from "react";
import styled from "styled-components";
import { AppContext } from "../context";

import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import SelectAddOns from "./SelectAddOns";
import Summary from "./Summary";
import Confirmation from "./Confirmation";
import NavigationButtons from "./NavigationButtons";

interface ContainerProps {
  isConfirmation: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 90%;
  padding: 25px 20px 20px;
  border-radius: 10px;
  margin: ${(props) =>
    props.isConfirmation ? "-70px auto 30px" : "-70px auto 100px"};

  @media screen and (min-width: 768px) {
    height: 480px;
    padding: 50px 30px 30px;
    border-radius: 0 10px 10px 0;
    margin: 0 auto;
  }
`;

const Signup = () => {
  const appContext = React.useContext(AppContext);
  if (!appContext) return null;
  const { page, showConfirmation } = appContext;

  const renderPage = () => {
    switch (page) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <SelectAddOns />;
      case 4:
        return <Summary />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <Container isConfirmation={showConfirmation}>
      {showConfirmation ? (
        <Confirmation />
      ) : (
        <>
          {renderPage()}
          <NavigationButtons />
        </>
      )}
    </Container>
  );
};

export default Signup;
