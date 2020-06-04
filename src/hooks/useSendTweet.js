import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { trackFinal } from './useTrack';

const useSendTweet = tweetData => {
  const [status, setStatus] = useState('NOT_SENT');
  const [twitterUsername, setTwitterUsername] = useState(null);

  useEffect(() => {
    const runEffect = async () => {
      //if (state.tweetSent === true) return;
      try {
        setStatus('SENDING');
        const sendTweetRes = await superagent
          .post('/api/sendtweet')
          .send(tweetData);
        setStatus('SENT');
        setTwitterUsername(sendTweetRes.body.twitterName);
        // console.log({ tweetData });
        //if (!sendTweetRes.body.noTrack) {
        trackFinal({
          countryName: tweetData.formData.country.label,
          worldLeader: tweetData.worldLeader.countryName,
        });
        //}
        //console.log(sendTweetRes);
        //actions.tweetSent(sendTweetRes.body);
      } catch (err) {
        console.error(err);
        setStatus('ERROR');
        //TODO: set error in state.
      }
    };
    runEffect();
  }, []);
  return [status, twitterUsername];
};

export default useSendTweet;
