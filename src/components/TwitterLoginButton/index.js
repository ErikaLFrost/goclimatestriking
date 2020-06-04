import React from 'react';
import request from 'superagent';
import Button from 'components/Button';
import twBtn from './sign-in-with-twitter-gray.png';
import { components } from 'react-select';

// const getTwitterRedirectUrl = () => {
//   request
//     .get('/signin/generateTwitterRedirectUrl')
//     .then(resp => {
//       console.log('resp', resp);
//     })
//     .catch(console.error);
// };

export const SignInToTwitterLink = () => {
  //dosent work with CREATE REACT APP and proxy backend
  return (
    <a href="/signin/twitter">
      <img src={twBtn} alt="Sign in with twitter" />
    </a>
  );
};
