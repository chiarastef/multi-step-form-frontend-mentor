import React from "react";
import styled from "styled-components";

import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import NavigationButtons from "./NavigationButtons";

interface Props {
  page: number;
}

const Container = styled.div`
  background-color: #ffffff;
  width: 90%;
  height: 480px;
  padding: 30px 25px 20px;
  border-radius: 8px;
  margin: -70px auto;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 50px 60px 0;
    border-radius: 0 10px 10px 0;
  }
`;

const Signup = ({ page }: Props) => {
  // Show page based on page prop
  switch (page) {
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
