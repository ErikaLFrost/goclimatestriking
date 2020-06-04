import React from 'react';
import styled from 'styled-components/macro';
import useTrack from 'hooks/useTrack';

import { ArrowBack } from '../components/Image/BackImage';

const goBack = () => {
  //todo: track this action
  if (typeof window !== 'undefined') {
    window.history.back();
  }
};

const ArrowComponent = styled(ArrowBack)`
  width: 19px;
  display: block;
  position: absolute;
  bottom: 3px;
  right: 3px;
`;

const ArrowButton = styled.button`
  position: relative;
  display: block;
  background: none;
  border: none;
  outline: none;

  width: 14px;
  height: 14px;
  z-index: 666;
  padding: 12px;
`;

const ArrowBackComponent = ({ url }) => {
  const track = useTrack();
  return (
    <ArrowButton
      onClick={() => {
        track({
          category: 'UI',
          action: 'click',
          label: 'back',
        });
        goBack();
      }}
    >
      <ArrowComponent />
    </ArrowButton>
  );
};

export default ArrowBackComponent;
