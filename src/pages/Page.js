import React from 'react';
//import { useStore } from 'store';
import styled from 'styled-components/macro';
import TextBlock from 'components/TextBlock';

const Wrapper = styled.div`
  position: relative;
`;

const Page = ({ page }) => {
  //const { state, actions } = useStore();
  const { title, content } = page;
  return (
    <Wrapper>
      <h1>{title}</h1>
      <TextBlock blocks={content} />
    </Wrapper>
  );
};

export default Page;
