import React from "react";
import styled from "styled-components";
import { AppContext } from "../context";

import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import SelectAddOns from "./SelectAddOns";
import Summary from "./Summary";
import Confirmation from "./Confirmation";
import NavigationButtons from "./NavigationButtons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 90%;
  padding: 30px 25px 25px;
  border-radius: 10px;
  margin: -70px auto 100px;

  @media screen and (min-width: 768px) {
    height: 480px;
    padding: 50px 60px 30px;
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
    <Container>
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
