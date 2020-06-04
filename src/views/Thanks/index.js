import React, { useEffect, useState } from 'react';
import useTrack from 'hooks/useTrack';
import styled from 'styled-components/macro';
import donecheck from 'assets/images/donecheck.svg';
import { breakpoint } from 'shared/theme';
import logoImg from 'assets/images/fff-logo.png';
import twitterLogo from 'assets/images/ic-twitter_Black.svg';
import InstagramIcon from 'assets/images/ic-insta.svg';

import { Page, Container, Header } from 'components/Layout';
import CloseButtonComponent from 'components/CloseButton';
import StrikeMap from 'components/StrikeMap';
import OnlineBanner from 'components/OnlineBanner';
import { BottomHill, Leaf } from 'components/Image/BackImage';
import {
  CountryTopList,
  WorldLeaderTopList,
  TrendingHashtags,
} from './TopLists';
import SetWorldLeadersToState from 'SetWorldLeadersToState';
import FetchCountries from 'FetchCountries';
import LiveStream from './LiveStream';

import dateFormatter from 'utils/dateFormatter';
import { useStore } from 'store';
import useSendTweet from 'hooks/useSendTweet';

const ThanksPage = styled(Page)`
  background-image: linear-gradient(to bottom, #65d9d3, #35b2a8);
  color: #fff;
  text-align: center;
  min-height: 100vh;
`;

const ThanksContainer = styled(Container)`
  padding-top: 58px;
  padding-bottom: ${p => (p.lowerPaddingBottom ? '19px' : '46px')};
`;

const LoadingSpinner = styled.div`
  img {
    margin-top: 10px;
    animation-name: spin;
    animation-duration: 2500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

const ThanksContent = styled.div`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: 0.1px;
  text-align: center;
  margin: 0 auto;
  max-width: 334px;
  padding-top: 40px;
  p {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.5;
    padding-top: 15px;
  }
`;

const TweetLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  a {
    font-size: 14px;
    font-weight: bold;
    line-height: 1.5;
    padding-top: 15px;
    color: black;
  }
  img {
    padding: 15px 0 0 5px;
  }
`;

const ScrollDiv = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
    bottom: 0;
    left: 0;
  }
`;

const Divider = styled.div`
  background-color: #20746e;
  height: 1px;
  width: 95%;
  margin: 50px auto 0;
`;

const Participants = styled.div`
  width: 100%;
  .participating {
    font-size: 55px;
    font-weight: bold;
    line-height: 1;
    color: #fdecb5;
    padding-top: 40px;
  }
  .others {
    font-size: 13px;
    color: #20746e;
    text-align: center;
    margin-top: 17px;
    font-weight: bold;
  }
`;

const InstagramContainer = styled.div`
  padding-top: 40px;
`;

const Logo = styled.img`
  width: 121px;
  height: 121px;
  margin-top: 100px;
`;

const CursiveText = styled.p`
  font-family: Arvo;
  font-size: 14px;
  font-style: italic;
  text-align: center;
  color: #1c272f;
`;

export const StyledLeaf = styled(Leaf)`
  bottom: 80px;
  left: calc(100% - 80px);
  transform: rotate(-15deg);
  z-index: 1;

  @media (min-width: ${breakpoint}) {
    height: 330px;
    bottom: -30px;
    left: calc(100% - 150px);
  }
`;

const StyledBottomHill = styled(BottomHill)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  width: 100%;
  max-width: 414px;
`;

const TweetSentMessage = ({ worldLeader, twitterUsername }) => {
  const track = useTrack();
  return (
    <ThanksContent>
      <img alt="doneicon" src={donecheck} />
      <h2>Thanks for caring about the climate!</h2>
      <p>
        Nicely done! Your tweet has been posted to <br /> {worldLeader}
      </p>
      {twitterUsername && (
        <TweetLink>
          <a
            onClick={() => {
              track({
                category: 'UI',
                action: 'Click',
                label: 'viewtweet',
              });
            }}
            href={`https://twitter.com/${twitterUsername}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View your tweet here
          </a>
          <img alt="twitterlogo" src={twitterLogo} />
        </TweetLink>
      )}
    </ThanksContent>
  );
};

const Thanks = () => {
  const { state, actions } = useStore();
  const track = useTrack();
  const { worldLeader, formData } = state;

  //year, month - 1, date, hour
  const streamDate = [2020, 3, 24, 1];
  const videoUrl = 'https://www.youtube.com/embed/MXhR5EvR2W8';

  const participantsValue =
    parseInt(state.countries.insta) + state.countries.total;
  useEffect(() => {
    if (formData.name !== '' || formData.age !== '') actions.resetFormdata();
  }, []);

  const tweetData = {
    formData,
    worldLeader,
  };
  const [tweetStatus, twitterUsername] = useSendTweet(tweetData);

  return (
    <ThanksPage>
      <CloseButtonComponent thanks />
      <OnlineBanner />
      <ThanksContainer>
        {tweetStatus === 'SENT' ? (
          <>
            <TweetSentMessage
              worldLeader={state.worldLeader.name}
              twitterUsername={twitterUsername}
            />
            <SetWorldLeadersToState />
            <FetchCountries />
          </>
        ) : (
          <LoadingSpinner>
            <p>Your tweet is being sent...</p>
            <Logo alt="Fridays For Future" src={logoImg} />
          </LoadingSpinner>
        )}
        <LiveStream streamDate={streamDate} videoUrl={videoUrl} />
        <Divider />
        <Participants>
          <p className="participating">
            {participantsValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
          </p>
          <p className="others">
            people around the world have tweeted <br /> about the climate strike
            online
          </p>
        </Participants>
      </ThanksContainer>
      <ScrollDiv>
        <StrikeMap thanks />
      </ScrollDiv>
      <ThanksContainer lowerPaddingBottom>
        <CountryTopList data={state.countries.list} />
        <WorldLeaderTopList data={state.worldLeaders} />
        <Divider />
        <InstagramContainer>
          {/* <TrendingHashtags data={hashtags} /> */}
          <a
            onClick={() => {
              track({
                category: 'UI',
                action: 'Click',
                label: 'insta',
              });
            }}
            href="https://www.instagram.com/explore/tags/climatestrikeonline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="insta" />
          </a>
          <CursiveText>
            Participate in the Instagram campaign you too!
          </CursiveText>
        </InstagramContainer>
        <a
          onClick={() => {
            track({
              category: 'UI',
              action: 'click',
              label: 'fridaysforfuture',
            });
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://fridaysforfuture.se"
        >
          <Logo alt="Fridays For Future" src={logoImg} />
        </a>
      </ThanksContainer>
      <StyledLeaf />
      <StyledBottomHill />
    </ThanksPage>
  );
};

export default Thanks;
