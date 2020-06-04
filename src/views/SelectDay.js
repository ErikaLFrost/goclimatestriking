import React from 'react';
import styled from 'styled-components/macro';
import { navigate } from '@reach/router';

import { useStore } from 'store';
import { Page, Container, Header, FullWidth } from '../components/Layout';
import { title20, text14 } from 'shared/theme';
import { Polygon, DefaultSun } from 'components/Image/BackImage';

import { Button } from 'components/Button';
import DateSelect from 'components/DateSelect';
import useTrack from 'hooks/useTrack';
import WorldLeaders from 'FetchWorldLeaders';
import CoronaBanner from 'components/CoronaBanner';

import { useTranslation } from 'react-i18next';

const StyledPolygon = styled(Polygon)`
  top: 498px;
  right: -270px;
`;

const DottedBox = styled.div`
  padding: 50px 20px 50px 30px;
  margin: 30px 0;
  border: 2px dotted #9b9b9b;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  h2 {
    ${title20}
  }
  p {
    ${text14}
  }
`;

const SelectDay = ({
  className,
  currentIndex,
  totalNumberOfIndex,
  progress,
}) => {
  const { state } = useStore();
  const track = useTrack();
  const { t } = useTranslation();

  const handleNext = () => {
    track({
      category: 'UI',
      action: 'Click',
      label: 'Date selected',
    });
    navigate('/register/worldLeader');
  };

  return (
    <Page className={className} progress={progress}>
      <CoronaBanner />
      <WorldLeaders />
      <DefaultSun />
      <StyledPolygon />
      <Container>
        <Header>
          <h1>Select strike date!</h1>
          <p>What date do you intend to strike?</p>
        </Header>

        <FullWidth>
          <DateSelect />
        </FullWidth>

        <DottedBox>
          <h2>Strike info</h2>
          <p>
            The global school strike for the climate is ongoing. Strike at your
            nearest town hall, or in a large square. Bring a sign, take
            pictures, share. #fridaysforfuture #goclimatestriking
          </p>
        </DottedBox>

        <Button
          onClick={handleNext}
          type="button"
          primary
          disabled={!state.selectedDates.length}
        >
          {t('words.next')}
        </Button>
      </Container>
    </Page>
  );
};

export default SelectDay;
