import React from 'react';
import { Helmet } from 'react-helmet';
import app from '../../../package.json';

// share Images
import shareImage from './images/og-image.jpg';
//import shareImage1x1 from './share1x1.png'; // if focus is not in center of iamge create a 1x1 image

// icons
import oldNastyIcon from './icons/favicon.ico';
import appleTouchIcon from './icons/apple-touch-icon.png';
import favicon32x32 from './icons/favicon-32x32.png';
import favicon16x16 from './icons/favicon-16x16.png';
import safariPinnedTab from './icons/safari-pinned-tab.svg';
import icon192x192 from './icons/android-chrome-192x192.png';
import icon512x512 from './icons/android-chrome-512x512.png';

const themeColor = '#ffffff';
const safariTabColor = '#5bbad5';

const Seo = () => {
  return (
    <Helmet>
      {/* ICONS */}
      <link rel="shortcut icon" href={oldNastyIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="mask-icon" href={safariPinnedTab} color={safariTabColor} />
      <meta name="theme-color" content={themeColor} />
      <link
        rel="shortcut icon"
        type="image/png"
        sizes="512x512"
        href={icon512x512}
      />
      <link
        rel="shortcut icon"
        type="image/png"
        sizes="192x192"
        href={icon192x192}
      />
      {/* // ICONS */}
      {/* SHARE IMAGES  
        ref https://developers.facebook.com/docs/sharing/webmasters/
      */}
      <meta property="og:image" content={shareImage} />
      <meta
        property="twitter:image"
        content={shareImage} // shareImage1x1
      />
      {/* // SHARE IMAGES  */}

      <title>App name</title>
      <meta
        property="og:site_name"
        content="" // ?
      />
      <meta
        property="og:title"
        content="" // share title
      />
      <meta
        property="twitter:title"
        content="" // twitter sahre title
      />

      <meta
        name="description"
        content="" //google result text
      />
      {/* <!--  Essential META Tags --> */}
      <meta
        property="og:description"
        content="" // share text
      />

      <meta property="og:url" content={app.domain} />

      <meta name="twitter:card" content="summary" />

      {/* <!--  Non-Essential, But Recommended --> */}

      {/* 
      <!--  Non-Essential, But Required for Analytics --> 
      <meta property="fb:app_id" content="your_app_id" />
      <meta name="twitter:site" content="@website-username" /> 
      */}
    </Helmet>
  );
};

export default Seo;
