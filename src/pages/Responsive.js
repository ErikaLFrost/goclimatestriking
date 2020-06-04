import React from 'react';
import styled from 'styled-components/macro';
import { media } from 'theme/helpers';

const ShowOnlyPhone = styled.div`
  background-color: red;

  ${media.phone`
    background-color: green;
  `}
`;

const TabletAndUp = styled.div`
  background-color: red;

  ${media.tablet`
    background-color: green;
  `}
`;

const DesktopAndUp = styled.div`
  background-color: red;

  ${media.desktop`
    background-color: green;
  `}
`;

const TabletOnly = styled.div`
  background-color: red;

  ${media.tabletOnly`
    background-color: green;
  `}
`;

export default () => (
  <div>
    <ShowOnlyPhone>Green on phone size</ShowOnlyPhone>
    <TabletAndUp>Green on Tablet and up</TabletAndUp>
    <DesktopAndUp>Green on Desktop and up</DesktopAndUp>
    <TabletOnly>Green on Tablet only</TabletOnly>
  </div>
);
