import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display: flex;
  flex-direction: center;
  justify-content: center;
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: center;
  justify-content: center;

  padding: 7px;
  border-radius: 20px;
  background-color: white;

  opacity: 0.8;
`;

const Item = styled.div`
  position: relative;
  width: 11px;
  height: 11px;
  border: 1px solid #979797;
  border-radius: 50%;
  margin-right: 10px;

  transition: 0.3s all ease-in-out;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% + 1px);
    width: 10px;
    height: 1px;
    background-color: #979797;
  }

  &:last-child {
    margin-right: 0;
  }

  &:last-child:after {
    display: none;
  }
`;

const Dot = styled.div`
  position: absolute;
  z-index: 11;
  top: 7px;
  left: 7px;
  width: 11px;
  height: 11px;
  background-color: #979797;
  border-radius: 50%;
  transition: 0.2s all ease-in-out;
  transform: translateX(${p => p.current * 21}px);
`;

const CurrentViewIndicator = ({ currentIndex, totalNumberOfIndex = 4 }) => {
  // create an array to loop over
  const array = Array(totalNumberOfIndex).fill();

  return (
    <Container>
      <Wrapper>
        <Dot current={currentIndex - 1} />
        {array.map((page, idx) => (
          <Item key={idx} active={idx === currentIndex} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default CurrentViewIndicator;
