import React from 'react';
import styled from 'styled-components/macro';
import LeaderSelect from './LeaderSelect';
import ImageWrapper from './ImageWrapper';
import { useStore } from 'store';

const PersonStyle = styled.li`
  width: 100%;
  padding: 10px 7%;
  display: block;
  background-color: ${p => (p.index % 2 ? '#f8f8f8' : 'white')};
`;

const List = styled.ul`
  padding-bottom: 31px;
`;

const TextContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h2 {
    font-family: Arvo;
    font-weight: normal;
  }
  p {
    font-family: Arvo;
    font-size: 12px;
  }
`;

const ChinaAmb = styled.li`
  font-size: 12px;
  width: 100%;
  padding: 10px 7%;
  display: block;
  background-color: white;
`;

const Person = props => {
  const { name, title, image, flag, twitter } = props.person;
  const { action, selected, index } = props;

  return (
    <PersonStyle index={index}>
      <LeaderSelect
        value={{ name, twitter }}
        action={action}
        selected={selected}
      >
        <TextContainer>
          <h2>{name}</h2>
          <p>{title}</p>
        </TextContainer>
        <ImageWrapper image={image} flag={flag} />
      </LeaderSelect>
    </PersonStyle>
  );
};

const sortFunction = (person1, person2) => {
  const a = person1.name;
  const b = person2.name;
  const x = person1.sortorder || 0;
  const y = person2.sortorder || 0;

  //plan a
  if (x > y) {
    return 1;
  }
  if (y > x) {
    return -1;
  }
  // plan b
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
  return 0;
};

function WorldLeaderList() {
  const { state, actions } = useStore();
  const { worldLeader } = state;
  const { selectWorldLeader } = actions;
  return (
    <List>
      {state.worldLeaders.sort(sortFunction).map((leader, index) => (
        <Person
          key={leader.name}
          index={index}
          person={leader}
          action={selectWorldLeader}
          selected={worldLeader}
        />
      ))}
      <ChinaAmb>
        <p>
          * Mr Cui Tiankai, China’s Ambassador in the US, will here be the
          representative of China because Twitter is blocked in China.
        </p>
      </ChinaAmb>
    </List>
  );
}

export default WorldLeaderList;
