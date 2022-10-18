import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <MainDesktopHeader>
        <button className="search">
          <Search size={24} />
        </button>
        <button className="menu">
          <Menu size={24} />
        </button>
        <Logo />
        <Button>subscribe</Button>
        <p>Already a subscriber?</p>
      </MainDesktopHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const MainDesktopHeader = styled(MaxWidthWrapper)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: grid;
    margin-top: 32px;
    margin-bottom: 48px;
    grid-template-columns: repeat(2, 50px) 1fr min-content;
    grid-template-rows: repeat(2, min-content);
    grid-template-areas: "search menu logo button" "search menu logo link";
    & > .search {
      grid-area: search;
    }
    & > .menu {
      grid-area: menu;
    }
    & > div {
      grid-area: logo;
    }
    & > p {
      grid-area: link;
    }
  }
`;

// const SubscribeArea = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

export default Header;
