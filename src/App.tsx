import React from "react";
import styled from "styled-components";
import "./App.css";

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
  return (
    <AppEl>
      <Sidebar />
      <Signup />
    </AppEl>
  );
};

export default App;
