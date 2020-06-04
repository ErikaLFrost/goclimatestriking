import React from 'react';
import { useStore } from 'store';
import useTrack from 'hooks/useTrack';
import styled from 'styled-components/macro';

import logoImg from 'assets/images/fff-logo.png';
import twitterLogo from 'assets/images/ic-twitter.svg';

import SetWorldLeadersToState from 'SetWorldLeadersToState';
import FetchCountries from 'FetchCountries';
import { Page, Container } from 'components/Layout';
import { ButtonShapedLink } from 'components/Button';
import { DefaultSun } from 'components/Image/BackImage';
import {
  StyledRain,
  StyledDrop,
  StyledLeaf,
  StyledBottomHill,
} from './StyledShapes';
import StrikeMap from 'components/StrikeMap';
import OnlineBanner from 'components/OnlineBanner';
import CountryTopList from './CountryList';

const HomePage = styled(Page)`
  background-image: linear-gradient(to bottom, #65d9d3, #35b2a8);
  color: #fff;
  text-align: center;
  min-height: 100vh;
`;

const HomeContainer = styled(Container)`
  padding-top: ${p => (p.removePaddingTop ? '0px' : '50px')};
  padding-bottom: ${p => (p.lowerPaddingBottom ? '19px' : '46px')};
`;

const Top = styled.div`
  z-index: 1;
  font-size: 180px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
`;

const SubTop = styled.div`
  font-size: 55px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
`;

const Seal = styled.div`
  font-size: 13px;
  line-height: 1.69;
  color: #20746e;
  text-align: center;
  margin-top: 17px;
  font-weight: bold;
`;

const Content = styled.div`
  font-size: 18px;
  line-height: 1.54;
  letter-spacing: 0.1px;
  text-align: ${p => (p.center ? 'center' : 'left')};
  margin: 15px auto 0;
  max-width: 334px;
  p {
    padding-bottom: 10px;
    line-height: 1.56;
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

const Participants = styled.div`
  width: 100%;
  padding: 20px 0 0;
  .join {
    font-size: 22px;
    color: #20746e;
    text-align: center;
    margin-top: 17px;
    font-weight: bold;
  }
  .participating {
    font-size: 62px;
    font-weight: bold;
    line-height: 1;
    color: #ffedad;
    padding-top: 10px;
  }
  .others {
    font-size: 18px;
    color: #20746e;
    text-align: center;
    margin-top: 17px;
    font-weight: bold;
  }
`;

const StyledButtonShapedLink = styled(ButtonShapedLink)`
  margin-top: 3px;
  color: #4a90e2;
  font-size: 22px;
  max-width: 370px;
  img {
    padding-left: 10px;
    vertical-align: middle;
  }
`;

const Logo = styled.img`
  width: 121px;
  height: 121px;
  margin-top: 100px;
`;

const Home = () => {
  const { state } = useStore();
  const track = useTrack();
  const participantsValue =
    parseInt(state.countries.insta) + state.countries.total;
  return (
    <HomePage>
      <OnlineBanner />
      <SetWorldLeadersToState />
      <DefaultSun />
      <StyledRain />
      <HomeContainer>
        <Top>GO</Top>
        <SubTop>Climate</SubTop>
        <SubTop>Striking</SubTop>
        <Seal>An Online Striking App from Fridays For Future</Seal>
        <Content center>
          <p>
            Because of the current coronavirus pandemic, it is time for us to go
            online. Use this app to send a tweet to a world leader reminding
            them that the climate can’t wait!
          </p>
        </Content>
        <StyledButtonShapedLink
          onClick={() => {
            track({
              category: 'UI',
              action: 'click',
              label: 'godigitalstrike',
            });
          }}
          href="/register/"
          white={1}
        >
          Go digital striking <img alt="twitter" src={twitterLogo} />
        </StyledButtonShapedLink>
        <Participants>
          <p className="join">Join us and </p>
          <p className="participating">
            {participantsValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
          </p>
          <p className="others">other climate defenders</p>
        </Participants>
      </HomeContainer>

      <ScrollDiv>
        <StrikeMap home />
      </ScrollDiv>

      <HomeContainer removePaddingTop lowerPaddingBottom>
        <CountryTopList data={state.countries.list} />
        <Content>
          <p>
            The Go Climate Striking app is a way to climate strike and campaign
            online. The app helps the users to create a personal Twitter message
            directed to one of the world's top leaders. It can be used by anyone
            who wants to tell the decision-makers that the climate can’t wait.
          </p>
          <p>
            The app was created by Fridays For Future as an alternative to the
            globally- known school strikes, since the Covid-19 pandemic has made
            large gatherings unsafe. With the Go Climate Striking digital web
            app, Fridays for Future has made it possible for people to respect
            social distancing restrictions by striking and campaigning for the
            climate online. The more of us who use the app, the bigger the
            impact we can make.
          </p>
        </Content>
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
      </HomeContainer>
      <StyledDrop />
      <StyledLeaf />
      <StyledBottomHill />
      <FetchCountries />
    </HomePage>
  );
};

export default Home;
