import React from 'react';
import { navigate } from '@reach/router';
import useTrack from 'hooks/useTrack';
import styled from 'styled-components/macro';
import { useStore } from 'store';
import { Page, Container, Header } from 'components/Layout';
import arrow from 'assets/images/arrow.svg';
import Button from 'components/Button';
import superagent from 'superagent';
import { trackErrorSend } from 'hooks/useTrack';
//import CheckNavigationOnLoad from 'components/CheckNavigationOnLoad';
import { DefaultSun } from 'components/Image/BackImage';
import TweetText from './Tweet';
import OnlineBanner from 'components/OnlineBanner';

const PreviewContainer = styled.div`
  padding: 45px 35px 40px 35px;
  text-align: left;
  background-color: #f7f7f7;
  border-radius: 10px;
`;

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

const Preview = ({ className, progress }) => {
  //CheckNavigationOnLoad();
  const { state } = useStore();
  const track = useTrack();

  const sendTweet = async () => {
    const data = {
      ...state.formData,
    };
    try {
      let url = '/api/v2/tweet';
      if (!state.me) url = '/api/tweet';

      await superagent.post(url, data);
    } catch (err) {
      console.error(err);
      trackErrorSend(err);
    }
  };

  const clickhandler = () => {
    track({
      category: 'UI',
      action: 'Click',
      label: 'previewnext',
    });
    navigate('/register/twitterinfo');
    //superagent.get(`/api/setusercountry/${state.formData.country.code}`);
  };

  return (
    <Page className={className} progress={progress}>
      <OnlineBanner />
      <DefaultSun />
      <Container>
        <Header>
          <h1>Preview</h1>
          <p>
            Check it out, this is what your tweet to a world leader will look
            like!
          </p>
        </Header>

        <PreviewContainer>
          <TweetText />
        </PreviewContainer>

        <TweetInfo>
          <Button primary onClick={() => clickhandler()}>
            Next
          </Button>
        </TweetInfo>
      </Container>
    </Page>
  );
};

export default Preview;
