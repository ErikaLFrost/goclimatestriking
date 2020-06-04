import React from 'react';
import ReactGA from 'react-ga';
import { globalHistory } from '@reach/router';

export const initializeGA = () => {
  if (typeof window === 'undefined') return;
  ReactGA.initialize('UA-147739362-1');
  ReactGA.pageview(globalHistory.location.pathname);

  globalHistory.listen(history => {
    ReactGA.set({ page: history.location.pathname });
    ReactGA.pageview(history.location.pathname);
  });
};

export default function useTrack() {
  const event = data => {
    ReactGA.event({
      transport: 'beacon',
      ...data,
    });
  };
  return event;
}

export const trackFinal = ({ countryCode, worldLeader }) => {
  ReactGA.event({
    transport: 'beacon',
    category: 'Registration',
    action: `Final country ${countryCode}`,
  });

  ReactGA.event({
    transport: 'beacon',
    category: 'Registration',
    action: `Final leader ${worldLeader}`,
  });
};

export const trackErrorSend = err => {
  ReactGA.event({
    transport: 'beacon',
    category: 'Error',
    action: 'final',
  });
};

export const SocialTrack = ({ name, children }) => (
  <span
    onClick={() => {
      ReactGA.event({
        transport: 'beacon',
        category: 'Social',
        action: name,
      });
    }}
  >
    {children}
  </span>
);
