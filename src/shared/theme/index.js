// What do we want here ?
import styled, { css } from 'styled-components';

// Smallest supported device ( iphone se ? )
const minViewport = 414;
// Original desktop design
const maxViewport = 1360;

export const breakpoint = '600px';

export const dynamicSize = (min, max) => {
  // Dynamic size based on device width
  return css`
    font-size: calc(
      ${min}px + ${max - min} *
        ((100vw - ${minViewport}px) / ${maxViewport - minViewport})
    );
    @media (min-width: ${maxViewport}px) {
      font-size: ${max}px;
    }
  `;
};

export const theme = {
  minViewport,
  maxViewport,
  dynamicSize,
  colors: {
    black: '#000',
    white: '#fff',
  },
};

export const globalCSS = css`
  :root {
    --maize: #fdc846;
    --purpleish-pink: #f343bd;
    --dark-sky-blue: #4a90e2;
    --blue-blue: #2e4fd0;
    --dark-blue: #28255f;
    --light-green: #a4e986;
    --bluey-green: #2d9f97;
    --aqua-marine: #46c0b8;
    --grey: #979797;
    --light-grey: #d8d8d8;
    --pale-grey: #ececf1;
    --very-light-grey: #f3f3f3;
    --dark: #1e272e;
    --black: #000000;
  }
  
  * {
    font-family: 'Arvo', serif;

    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 100%;
    /* font: inherit; */
    vertical-align: baseline;

    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: inherit;
  }
  body { 
    overflow-x: hidden;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;

    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  
`;

export const PreTitle = styled.span`
  color: ${theme.title};
  font-size: 18px;
  ${dynamicSize(13, 18)};
  line-height: 1;
  padding-bottom: 1em;
`;

export const TitleCSS = css`
  font-size: 66px;
  ${dynamicSize(26, 66)};
  line-height: 0.91;
  padding-bottom: 0.45em;
  margin: 0;
  font-weight: bold;
`;

export const Title = styled.h2`
  ${TitleCSS}
`;

export const SmallerTitle = styled.h2`
  ${TitleCSS}
  color: ${theme.title};
  font-size: 54px;
  ${dynamicSize(24, 54)};
  line-height: 0.89;
`;

export const Highlight = styled.p`
  ${dynamicSize(16, 19)};
  text-align: center;
  line-height: 1.33;
  padding-bottom: 1.6;
  font-weight: 500;
`;

export const blockStyles = [
  { title: 'Normal', value: 'normal' },
  { title: 'Title', value: 'title', blockEditor: { render: Title } },
  {
    title: 'SmallerTitle',
    value: 'smallerTitle',
    blockEditor: { render: SmallerTitle },
  },
  {
    title: 'Highlight',
    value: 'highlight',
    blockEditor: { render: Highlight },
  },
  // { title: 'PreTitle', value: 'preTitle', blockEditor: { render: TitleStyle } },
  // { title: 'H1', value: 'h1' },
  // { title: 'H2', value: 'h2' },
  // { title: 'H3', value: 'h3' },
  // { title: 'H4', value: 'h4' },
  // { title: 'H5', value: 'h5' },
];



export const title32 = css`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 0.59em;
`;

export const title20 = css`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 0.59em;
`;

export const text24 = css`
  font-size: 24px;
  line-height: 1.54;
  letter-spacing: 0.1px;
`;
export const text16 = css`
  font-size: 16px;
  line-height: 1.5;
  padding-bottom: 2em;
`;
export const text14 = css`
  font-size: 14px;
  line-height: 1.43;
`;