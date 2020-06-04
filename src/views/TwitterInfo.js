import React from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components/macro';
import { useStore } from 'store';
import { Page, Container, Header } from 'components/Layout';
import arrow from 'assets/images/arrow.svg';
import Button from 'components/Button';
import superagent from 'superagent';
import useTrack from 'hooks/useTrack';
//import CheckNavigationOnLoad from 'components/CheckNavigationOnLoad';
import { DefaultSun } from 'components/Image/BackImage';
import OnlineBanner from 'components/OnlineBanner';

const TweetInfo = styled.div`
  position: relative;
  img {
    position: absolute;
    display: block;
    left: -18px;
    bottom: 65px;
    @media (min-width: 350px) {
      left: 0px;
    }
  }
  p {
    padding: 18px 0 24px;
    margin: 0 auto;
    color: #4a4a4a;
    font-size: 14px;
    @media (min-width: 350px) {
      width: 85%;
    }
  }
  a {
    font-size: 16px;
    font-weight: bold;
  }
`;

const UnderThirteen = styled.p`
  font-size: 12px;
  padding-top: 15px;
`;

const Preview = ({ className, progress }) => {
  //CheckNavigationOnLoad();
  const track = useTrack();

  const clickhandler = () => {
    track({
      category: 'UI',
      action: 'Click',
      label: 'sendtweet',
    });
    window.location.pathname = '/signin/twitter';
    //superagent.get(`/api/setusercountry/${state.formData.country.code}`);
  };

  return (
    <Page className={className} progress={progress}>
      <OnlineBanner />
      <DefaultSun />
      <Container>
        <Header>
          <h1>This will only take a second..</h1>
          <p>
            You will now be redirected to a rather boring page. It’s because we
            need to request access to post on Twitter. We will not interact with
            your account in any way.
          </p>
        </Header>

        <TweetInfo>
          <Button primary onClick={() => clickhandler()}>
            Yes, send the tweet!
          </Button>
          <img alt="arrow" src={arrow} />
          <p>
            This will open and connect your twitter account to this app in order
            for us to send the tweet!
          </p>
          <a
            onClick={() => {
              track({
                category: 'UI',
                action: 'Click',
                label: 'donthavetwitter',
              });
            }}
            href="https://twitter.com/i/flow/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            I don’t have twitter
          </a>
        </TweetInfo>
        <UnderThirteen>
          You have to be at least 13 years old to use Twitter. If you’re under
          13 you can ask a parent to help out.
        </UnderThirteen>
      </Container>
    </Page>
  );
};

export default Preview;
