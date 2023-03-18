import React from "react";
import styled from "styled-components";
import { AppContext } from "../context";

import mobileSidebarBg from "../images/bg-sidebar-mobile.svg";
import desktopSidebarBg from "../images/bg-sidebar-desktop.svg";

const Container = styled.div`
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    height: 480px;
    padding: 15px;
    border-radius: 10px 0 0 10px;
  }
`;

const SidebarEl = styled.div`
  height: 170px;
  background: center / cover no-repeat url(${mobileSidebarBg});
  padding-top: 25px;

  @media screen and (min-width: 768px) {
    height: 100%;
    background: center bottom / cover no-repeat url(${desktopSidebarBg});
    border-radius: 10px;
    padding: 20px 85px 0 20px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }

  .active {
    color: #02295a;
    background-color: #bfe2fd;
  }
`;

const LinkContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
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

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
    font-size: 11px;
    font-weight: 500;
  }
`;

const LinkBtnDescr = styled.div`
  display: none;
  width: max-content;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 5px;

  @media screen and (min-width: 768px) {
    display: block;
  }

  div:first-of-type {
    letter-spacing: 0.5px;
    color: var(--text-color);
  }

  div:last-of-type {
    color: #ffffff;
    margin-top: 3px;
  }
`;

const Sidebar = () => {
  const appContext = React.useContext(AppContext);
  if (!appContext) return null;
  const { page } = appContext;

  // Array of current page buttons
  const links = React.useRef<(HTMLButtonElement | null)[]>([]);

  React.useEffect(() => {
    // Remove class active from each element
    for (const link of links.current) {
      if (link) {
        link.classList.remove("active");
      }
    }
    // Add class "active" to current page
    for (const link of links.current) {
      if (link && page === parseInt(link!.id)) {
        link.classList.add("active");
      }
    }
  }, [page]);

  return (
    <Container>
      <SidebarEl>
        <Navbar>
          <LinkContainer>
            <LinkBtn ref={(el) => (links.current[0] = el)} id="1">
              1
            </LinkBtn>
            <LinkBtnDescr>
              <div>step 1</div>
              <div>your info</div>
            </LinkBtnDescr>
          </LinkContainer>
          <LinkContainer>
            <LinkBtn ref={(el) => (links.current[1] = el)} id="2">
              2
            </LinkBtn>
            <LinkBtnDescr>
              <div>step 2</div>
              <div>select plan</div>
            </LinkBtnDescr>
          </LinkContainer>
          <LinkContainer>
            <LinkBtn ref={(el) => (links.current[2] = el)} id="3">
              3
            </LinkBtn>
            <LinkBtnDescr>
              <div>step 3</div>
              <div>add-ons</div>
            </LinkBtnDescr>
          </LinkContainer>
          <LinkContainer>
            <LinkBtn ref={(el) => (links.current[3] = el)} id="4">
              4
            </LinkBtn>
            <LinkBtnDescr>
              <div>step 4</div>
              <div>summary</div>
            </LinkBtnDescr>
          </LinkContainer>
        </Navbar>
      </SidebarEl>
    </Container>
  );
};

export default Sidebar;
