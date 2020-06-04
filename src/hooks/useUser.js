import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { useStore } from 'store';

// custom hook!
const useUser = () => {
  // const { actions, state } = useStore();
  const [user, setUser] = useState(null);
  // console.log('user', user);
  // api
  const fetchUser = async () => {
    if (user) return;
    try {
      const userData = await superagent.get('/api/profile/me');
      setUser(userData.body); //
      //actions.setCountries(countriesRes.body);
    } catch (err) {
      // console.error('cant get loged in user, not logged in?', err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, [user]);

  return [user];
};

export default useUser;
