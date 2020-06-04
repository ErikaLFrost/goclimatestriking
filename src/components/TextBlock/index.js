import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components/macro';
import theme, { blockStyles } from 'theme';
//import Quote from 'components/shared/Quote';

const Wrapper = styled.div`
  ${theme.dynamicSize(15, 18)};
  line-height: 1.6;
  text-rendering: geometricPrecision;
  margin-bottom: 30px;

  p + p {
    /* Other margin on the first item */
    margin-top: 1.1em;
  }
  p {
    padding-bottom: 12px;
  }
  img {
    width: 100%;
  }
  ul {
    margin-top: 10px;
    padding-left: 15px;
  }
  li {
    margin-bottom: 15px;
  }
`;

const BlockRenderer = props => {
  const style = props.node.style || 'normal';

  const standardElements = [
    'list of allowed html5 blocks ',
    'blockquote',
    'span',
    'article',
    'address',
    'mark',
    'section',
    'pre',
  ];

  // return custom blocks shared between cms and frontend
  const blockStyle = blockStyles.find(s => s.value === style);
  if (blockStyle && blockStyle.blockEditor && blockStyle.blockEditor.render) {
    // the component to render is styled component of any kind
    const StyledReactElement = blockStyle.blockEditor.render;
    // return a function to use when to render it.
    return (
      <StyledReactElement className={props.node.style}>
        {props.children}
      </StyledReactElement>
    );
  }

  // return header h1,h2 ...
  if (/^h\d/.test(style)) {
    // header
    const level = style.replace(/[^\d]/g, '');
    const HLevel = `h${level}`;
    return (
      <HLevel className={`textBlock level-${level} ${style}`}>
        {props.children}
      </HLevel>
    );
  }

  // return standard elements where style is for example: "span-preTitle"
  const elementStyle = style.split('-')[0]; // "element: "h4-preTitle""
  const elementIndex = standardElements.indexOf(elementStyle);
  if (elementIndex > 0) {
    const HTMLElement = standardElements[elementIndex]; // must be capital variable for jsx to render as element
    return <HTMLElement className={`${style}`}>{props.children}</HTMLElement>;
  }

  return <p className={`textBlock ${style}`}>{props.children}</p>;
};

const tint = props => (
  <span
    style={{
      color: theme.tint,
    }}
  >
    {props.children}
  </span>
);

const TextBlock = ({ blocks, className, children, style }) => {
  if (blocks && blocks.length === 1) {
    // Is there only one child?
    if (blocks[0].children && blocks[0].children.length === 1) {
      // Is this child just an empty string?
      // Well then we do not need to return anything.
      if (
        blocks[0].children[0].text &&
        blocks[0].children[0].text.replace(/ /g, '').length === 0
      ) {
        return <div />;
      }
    }
  }
  return (
    <Wrapper className={className} style={style}>
      {blocks && (
        <BlockContent
          projectId="jtppvh9o" // wtf ??
          blocks={blocks}
          dataset="production" // wtf ??
          serializers={{
            types: { block: BlockRenderer },
            marks: { tint },
          }}
        />
      )}
      {children && <p>{children}</p>}
    </Wrapper>
  );
};

export default TextBlock;
