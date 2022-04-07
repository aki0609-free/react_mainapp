import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const TheHeader = () => {
  return (
    <MainHeader>
      <HeaderNav>
        <HeaderLink to="/"><h1>Find A Coach</h1></HeaderLink>
        <ul>
          <HeaderLink to="/coaches">All Coaches</HeaderLink>
          <HeaderLink to="/requests">Requests</HeaderLink>
        </ul>
      </HeaderNav>
    </MainHeader>
  )
}

const MainHeader = styled.header`
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  color: white;
  &:hover {
    border: 1px solid #391e3;
  }
  h1 {
    color: white;
    margin: auto 0;
    font-size: 2.0rem;
  }
`;

const HeaderNav = styled.nav`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;