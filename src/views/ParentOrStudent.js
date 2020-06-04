import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { navigate } from '@reach/router';
import { useStore } from 'store';
import { Page, Container, Header } from 'components/Layout';
import { text16 } from 'shared/theme';
import Button from 'components/Button';
import useTrack from 'hooks/useTrack';
import { DefaultSun, Drop } from 'components/Image/BackImage';
import FetchCountries from 'FetchCountries';

const StyledDrop = styled(Drop)`
  top: 183px;
  left: -500px;
`;

const GreenDot = styled.span`
  position: absolute;
  width: 87px;
  height: 87px;
  background-color: var(--light-green);
  border-radius: 50%;
  top: 495px;
  right: -63px;
`;

const Buttons = styled.div`
  padding-top: 50px;
  button,
  a {
    margin: 0;
  }
  span {
    ${text16}
    display: block;
    padding: 8px 0 13px;
    padding-bottom: 45px;
  }
`;

const Hello = ({ progress, className }) => {
  const { actions } = useStore();

  const track = useTrack();

  const clickHandler = isStudent => {
    actions.setIsStudent(isStudent);

    track({
      category: 'UI',
      action: 'click',
      label: isStudent ? 'student' : 'parent',
    });

    navigate(`/register/selectFriday`);
  };

  return (
    <Page className={className} progress={progress}>
      <FetchCountries />
      <DefaultSun />
      <StyledDrop />
      <GreenDot />
      <Container>
        <Header>
          <h1>Who are you?</h1>
          <p>
            The service is for you who are a student, but can also be used by
            parents who want to report absence for their kid.
          </p>
        </Header>
        <Buttons>
          <Button primary onClick={() => clickHandler(true)}>
            I am a student
          </Button>
          <span>
            Are you under 13? Ask your parent <br /> to help out.
          </span>
          <Button onClick={() => clickHandler(false)}>I am a parent</Button>
        </Buttons>
      </Container>
    </Page>
  );
};

export default Hello;
