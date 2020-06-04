import React from 'react';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components/macro';
import { Helmet } from 'react-helmet';
import { globalCSS } from 'shared/theme';
import Home from './views/Home/index';
import { initializeGA } from 'hooks/useTrack';

import RegisterRouter from './views/RegisterRouter';
import Thanks from './views/Thanks/index';
import Login from './views/Login';

import appleTouchicon from 'assets/share/apple-touch-icon-180x180.png';
import favicon from 'assets/share/favicon-64x64.png';
import icon512 from 'assets/share/android-chrome-512x512.png';
import icon192 from 'assets/share/android-chrome-192x192.png';
import PageNotFound from 'views/PageNotFound';

import './i18n';

const GlobalStyle = createGlobalStyle`
  ${globalCSS}
`;

initializeGA();

function App({ user }) {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="512x512"
          href={icon512}
        />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="192x192"
          href={icon192}
        />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="64x64"
          href={favicon}
        />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchicon} />

        <title>Go Climate Striking now!</title>

        <meta
          name="description"
          content="An Online Striking App from Fridays For Future. The Go Climate Striking app is a way to climate strike and campaign online. The more of us who use the app, the bigger the impact we can make!"
        />

        {/* <!--  Non-Essential, But Required for Analytics --> 
          <meta property="fb:app_id" content="your_app_id" />
          <meta name="twitter:site" content="@website-username" /> */}
      </Helmet>

      <Router>
        <Home default path="/" />
        <RegisterRouter path="/register/*" />

        {/* <Login path="/login" />
        <IAmIn path="/iamin" /> */}
        <Thanks path="/thanks" />
        <Login path="/login" />

        <PageNotFound path="/api/*" />
      </Router>
    </>
  );
}

export default App;
