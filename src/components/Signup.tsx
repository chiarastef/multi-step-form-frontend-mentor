import React from "react";
import styled from "styled-components";

import { AppContext } from "../context";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import NavigationButtons from "./NavigationButtons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 90%;
  padding: 30px 25px 20px;
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
  const data = React.useContext(AppContext);

  // Show page
  switch (data?.page) {
    case 1:
      return (
        <Container>
          <PersonalInfo />
          <NavigationButtons />
        </Container>
      );
    case 2:
      return (
        <Container>
          <SelectPlan />
          <NavigationButtons />
        </Container>
      );
    default:
      return (
        <Container>
          <PersonalInfo />
          <NavigationButtons />
        </Container>
      );
  }
};

export default Signup;
