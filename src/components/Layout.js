import React from 'react';
import useTrack from 'hooks/useTrack';

import styled from 'styled-components/macro';
import { title32, text16 } from 'shared/theme';
import ArrowBack from 'components/ArrowBack';
import CloseButtonComponent from 'components/CloseButton';
import CurrentViewIndicator from 'components/CurrentViewIndicator';

const PageStyle = styled.div`
  color: #000;
  text-align: center;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: transparent;
`;

const TopNavWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 56px 23px 0 23px;
`;

const TopNav = props => {
  const track = useTrack();
  return (
    <TopNavWrapper>
      <ArrowBack url="/" />
      <CurrentViewIndicator currentIndex={props.progress} />
      <CloseButtonComponent />
    </TopNavWrapper>
  );
};

export const Page = ({ className, progress, children }) => (
  <PageStyle className={className}>
    {progress && <TopNav progress={progress} />}
    {children}
  </PageStyle>
);

export const Container = styled.div`
  margin: 0 auto;
  max-width: 440px;
  padding: 0 20px;
  position: relative;
  padding-top: 45px; //TODO: Media Query
  padding-bottom: 83px;
  z-index: 10;
`;

export const Header = styled.header`
  h1 {
    ${title32}
  }
  p {
    ${text16}
  }
`;

export const FullWidth = styled.div`
  margin: 0px -20px;
  width: calc(100% + 40px);
`;
