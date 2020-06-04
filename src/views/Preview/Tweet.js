import React from 'react';
import { useStore } from 'store';
import styled from 'styled-components';
import tweets from 'utils/tweetMessage';

const StyledTweet = styled.p`
  font-size: 18px;
  line-height: 1.56;
  color: #000;
  padding-bottom: 15px;
`;

const TweetText = () => {
  const { state } = useStore();
  const { age, worldLeader, formData } = state;
  return <StyledTweet>{tweets(age, worldLeader, formData)}</StyledTweet>;
};

export default TweetText;
