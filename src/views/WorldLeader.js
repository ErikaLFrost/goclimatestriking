import React from 'react';
import { navigate } from '@reach/router';

import { useStore } from 'store';
import { Page, Container, Header, FullWidth } from 'components/Layout';
import { DefaultSun } from 'components/Image/BackImage';

import useTrack from 'hooks/useTrack';
import WorldLeaderList from 'components/WorldLeader';
import Button from 'components/Button';
import OnlineBanner from 'components/OnlineBanner';

const WorldLeader = ({ className, progress }) => {
  const { state } = useStore();
  const track = useTrack();

  const handleNext = () => {
    track({
      category: 'UI',
      action: 'Click',
      label: 'worldleaderselect',
    });

    navigate('/register/userinfo');
  };

  return (
    <Page className={className} progress={progress}>
      <OnlineBanner />
      <DefaultSun />
      <Container>
        <Header>
          <h1>Pick a world leader</h1>
          <p>Choose which leader you want to address your tweet to.</p>
          <p>
            These 20 world leaders belong to the 20 biggest economies in the
            world and have the power to take action for the climate. The United
            Nations is also included on the list.
          </p>
        </Header>
        <FullWidth>
          <WorldLeaderList />
          <Button
            onClick={handleNext}
            type="button"
            primary
            sticky
            disabled={!state.worldLeader}
          >
            {'Next'}
          </Button>
        </FullWidth>
      </Container>
    </Page>
  );
};

export default WorldLeader;
