import React from 'react';
import styled from 'styled-components/macro';
import { useStore } from 'store';
import A from 'components/A';
import logo from './logo.png';

const Wrapper = styled.div`
  width: 200px;
  img {
    display: block;
    width: 100%;
  }
`;

const Logo = () => {
  const { state, actions } = useStore();

  const closeMenuIfOpen = () => {
    if (state.menu_expanded) actions.toggleMenu();
  };

  return (
    <Wrapper>
      <A to="/" onClick={closeMenuIfOpen}>
        <img alt="companyName" src={logo} />
      </A>
    </Wrapper>
  );
};

export default Logo;
