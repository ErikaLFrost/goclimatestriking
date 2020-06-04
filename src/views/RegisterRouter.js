import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import WorldLeader from './WorldLeader';
import UserInfo from './UserInfo';
import Preview from './Preview/index';
import TwitterInfo from './TwitterInfo';

const ScrollToTop = ({ children, location }) => {
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
};

const RegisterPage = () => {
  return (
    <Router primary={false}>
      <ScrollToTop path="/">
        <WorldLeader path="/" progress={1} />
        <UserInfo path="userinfo/" progress={2} />
        <Preview path="preview/" progress={3} />
        <TwitterInfo path="twitterinfo" progress={4} />
      </ScrollToTop>
    </Router>
  );
};

export default RegisterPage;
