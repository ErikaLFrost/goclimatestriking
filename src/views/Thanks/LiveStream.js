import React from 'react';
import styled from 'styled-components';

import CountDownTimer from 'components/countDownTimer';

const Divider = styled.div`
  background-color: #20746e;
  height: 1px;
  width: 95%;
  margin: 50px auto 0;
`;

const VideoContainer = styled.div`
  padding-top: 25px;

  h2 {
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #00766f;
    padding-bottom: 25px;
  }
`;

const Video = styled.iframe`
  border: none;
  width: 100%;
  height: 214px;
`;

const dateIsCurrent = liveStreamDate => {
  const streamDate = new Date(
    liveStreamDate[0],
    liveStreamDate[1],
    liveStreamDate[2],
    liveStreamDate[3]
  );
  const today = new Date();
  if (
    streamDate.getHours() - 1 < today.getHours() &&
    streamDate.getDate() < today.getDate()
  ) {
    return false;
  } else {
    return streamDate;
  }
};

const LiveStream = ({ streamDate, videoUrl }) => {
  const timeLeft = dateIsCurrent(streamDate);
  return (
    timeLeft && (
      <>
        <Divider />
        <VideoContainer>
          <CountDownTimer countGoal={timeLeft} />
          <Video src={videoUrl} />
        </VideoContainer>
      </>
    )
  );
};

export default LiveStream;
