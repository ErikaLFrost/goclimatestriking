import React from 'react';
import useTrack from 'hooks/useTrack';
import styled from 'styled-components/macro';

import { Link } from '@reach/router';

import { CloseCross } from '../components/Image/BackImage';

const ArrowImg = styled(CloseCross)`
  width: 14px;
  display: block;
  position: absolute;
  bottom: 3px;
  left: 3px;
`;

const CloseLink = styled(Link)`
  position: relative;
  display: block;
  width: 14px;
  height: 14px;
  z-index: 666;
  padding: 12px;
`;

const Thanks = styled(Link)`
  position: absolute;
  top: 56px;
  right: 22px;
  display: block;
  width: 14px;
  height: 14px;
  z-index: 666;
  padding: 12px;
`;

const CloseButtonComponent = props => {
  const thanks = props.thanks;
  const track = useTrack();

  if (thanks) {
    return (
      <Thanks to="/">
        <ArrowImg />
      </Thanks>
    );
  } else {
    return (
      <CloseLink
        onClick={() => {
          track({
            category: 'UI',
            action: 'click',
            label: 'close',
          });
        }}
        to="/"
      >
        <ArrowImg />
      </CloseLink>
    );
  }
};

export default CloseButtonComponent;
