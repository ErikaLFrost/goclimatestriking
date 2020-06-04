import React, { useState } from 'react';
import styled from 'styled-components';
import useTrack from 'hooks/useTrack';

const RadioWrapper = styled.div`
  border-radius: 3px;
  text-align: left;
  input {
    display: none;
  }
  label {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    cursor: pointer;
  }
`;

const Radio = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  border: solid 1px #979797;
  border-radius: 50%;
  justify-content: center;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: black;
    display: ${p => (!p.selected ? 'none' : 'block')};
  }

  margin-right: 18px;
  align-self: center;
`;

const LeaderSelect = props => {
  const { value, children, action, selected } = props;
  const track = useTrack();
  return (
    <RadioWrapper
      onClick={() => {
        action(value);
        track({
          category: 'LEADERSELECT',
          action: 'click',
          label: `${value.name.trim()}`,
        });
      }}
    >
      <label htmlFor={value}>
        <Radio selected={selected !== null && value.name === selected.name} />
        {children}
      </label>
    </RadioWrapper>
  );
};

export default LeaderSelect;
