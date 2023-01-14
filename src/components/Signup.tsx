import React from "react";
import styled from "styled-components";

import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import NavigationButtons from "./NavigationButtons";

const Container = styled.div`
  background-color: #ffffff;
  width: 90%;
  padding: 30px 25px 20px;
  border-radius: 8px;
  margin: -70px auto;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`;

const Signup = () => {
  const [page, setPage] = React.useState<number>(1);

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
