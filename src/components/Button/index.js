import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from '@reach/router';

const stickyContainer = css`
  width: 100%;
  margin: 0 auto;
  max-width: 440px;
  padding: 0 20px;
  height: 114px;
  background-color: white;
  position: fixed;
  bottom: 83px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  bottom: 0;
`;

const ButtonWrap = styled.div`
  ${p => p.sticky && stickyContainer}
`;

const buttonStyle = css`
  display: inline-block;
  margin: 1em 0 0;
  padding: 0.77em 1.13em;
  width: 100%;
  max-width: 300px;
  border-radius: 30px;
  color: #fff;
  border: none;
  background-color: #4a4a4a;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  
  ${p =>
    p.white &&
    css`
      background-color: #fff;
      color: var(--bluey-green);
    `}

  ${p =>
    p.disabled &&
    css`
      background-color: #d6d6d6;
      color: #fff;
      border: none;
      cursor: not-allowed;
    `}
  ${p =>
    p.notYet &&
    css`
      background-color: transparent;
      color: #fff;
      border: 2px dotted #fff;
    `}
  ${p =>
    p.primary &&
    !p.disabled &&
    css`
      background-color: #38b5ab;
    `}

`;

const ExternalLink = styled.a`
  ${buttonStyle}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const InternalLink = styled(Link)`
  ${buttonStyle}
`;

export const ButtonShapedLink = props => {
  if (props.disabled) return <StyledButton {...props} />;

  if (props.href && props.href.indexOf('/') === 0)
    return <InternalLink {...props} to={props.href} />;

  return <ExternalLink {...props} />;
};

export const Button = props => {
  return (
    <ButtonWrap sticky={props.sticky}>
      <StyledButton {...props} />
    </ButtonWrap>
  );
};

export default Button;
