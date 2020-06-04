import React from 'react';
import styled from 'styled-components';
import digitalStrike from '../assets/images/tag_onlinestrike.svg';

const Banner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const OnlineBanner = () => {
  return (
    <Banner>
      <img alt="banner" src={digitalStrike} />
    </Banner>
  );
};

export default OnlineBanner;
