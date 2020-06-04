import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { useStore } from 'store';

const SetWorldLeadersToState = () => {
  const { actions } = useStore();
  const [isFetching, setIsFetching] = useState(false);

  const runEffect = async () => {
    if (isFetching) return;
    try {
      setIsFetching(true);
      const worldLeadersRes = await superagent.get('/api/worldLeaders');
      actions.setWorldLeaders(worldLeadersRes.body);
    } catch (err) {
      console.error(err);
      setIsFetching(false);
      //TODO: set error in state.
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      runEffect();
    }, 60000);
    runEffect();

    const cleanUp = () => clearInterval(interval);
    return cleanUp;
  }, []);

  return <></>;
};

export default SetWorldLeadersToState;
