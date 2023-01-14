import React from "react";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";

const AppEl = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const App = () => {
  const [page, setPage] = React.useState<number>(1);

  return (
    <AppEl>
      <Sidebar page={page} />
      <Signup page={page} />
    </AppEl>
  );
};

export default App;
