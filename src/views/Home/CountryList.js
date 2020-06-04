import React, { useState } from 'react';
import styled from 'styled-components';
import useTrack from 'hooks/useTrack';

const StyledList = styled.ul`
  width: 80%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0);
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 0 5px 0;
    animation-name: animateIn;
    animation-duration: 350ms;
    animation-delay: calc(var(--animation-order) * 409ms);
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    @keyframes animateIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  p {
    &:first-child {
      color: #1e272e;
    }
    color: #ffedad;
    font-weight: bold;
  }
`;

const StyledLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
  color: #ffedad;
  padding-bottom: 57px;
  cursor: pointer;
`;

const compare = (a, b) => {
  if (b.count < a.count) {
    return -1;
  }
  if (b.count > a.count) {
    return 1;
  }
  return 0;
};

const CountryTopList = props => {
  const [showMore, toggleShowMore] = useState(false);
  const track = useTrack();

  const listItems = props.data.sort(compare).map(
    (country, index) =>
      country.count > 0 && (
        <li key={index}>
          <p>{country.label}</p>
          <p>
            {country.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
          </p>
        </li>
      )
  );
  return (
    <>
      <StyledLink
        onClick={() => {
          toggleShowMore(!showMore);
          track({
            category: 'UI',
            action: 'click',
            label: 'showfullist/hidefullist',
          });
        }}
      >
        {!showMore ? 'See full list' : 'Hide full list'}
      </StyledLink>
      <StyledList showMore>{showMore && listItems}</StyledList>
    </>
  );
};

export default CountryTopList;
