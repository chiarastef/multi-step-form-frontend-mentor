import React from "react";
import styled from "styled-components";

import mobileSidebarBg from "../images/bg-sidebar-mobile.svg";
import desktopSidebarBg from "../images/bg-sidebar-desktop.svg";

const Sidebar = styled.div`
  height: 170px;
  background: center / cover no-repeat url(${mobileSidebarBg});
  padding-top: 25px;

  @media screen and (min-width: 768px) {
    background: center bottom / cover no-repeat url(${desktopSidebarBg});
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;

  .active {
    color: #02295a;
    background-color: #bfe2fd;
  }
`;

const LinkBtn = styled.button`
  width: 40px;
  height: 40px;
  font-family: inherit;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  color: #ffffff;
  background-color: transparent;
  padding: 5px 8px;
  border: 1px solid #bfe2fd;
  border-radius: 50%;
  margin: 8px;
`;

const Header = () => {
  return (
    <Sidebar>
      <Navbar>
        <LinkBtn className="active">1</LinkBtn>
        <LinkBtn>2</LinkBtn>
        <LinkBtn>3</LinkBtn>
        <LinkBtn>4</LinkBtn>
      </Navbar>
    </Sidebar>
  );
};

export default Header;
