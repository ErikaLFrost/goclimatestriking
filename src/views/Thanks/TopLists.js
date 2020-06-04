import React, { useState, useEffect } from 'react';
import { useStore } from 'store';
import useTrack from 'hooks/useTrack';
import styled from 'styled-components';
import InstagramIcon from 'assets/images/ic-insta.svg';
import superagent from 'superagent';

import ImageWrapper from '../../components/WorldLeader/ImageWrapper';

const track = useTrack();

const MostTweets = styled.h3`
  color: #20746e;
  font-size: 14px;
  padding-bottom: 10px;
`;

const MostHash = styled.h3`
  color: #20746e;
  font-size: 14px;
  padding: 10px 0 20px;
`;

const StyledList = styled.ul`
  width: 100%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: ${p => (p.padding ? '30px' : '20px')};
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
    a {
      text-align: left;
      color: #1e272e;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: none;
      font-weight: bold;
    }
    p {
      &:first-child {
        text-align: left;
        color: #1e272e;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      text-align: right;
      color: #ffedad;
      font-weight: bold;
      padding-left: 5px;
      min-width: 75px;
    }
  }
`;

const StyledLink = styled.a`
  font-weight: bold;
  display: block;
  text-decoration: underline;
  color: #1e272e;
  font-size: 14px;
  padding-bottom: 50px;
  cursor: pointer;
`;

const PercentBar = styled.p`
  color: white !important;
  width: 232px;
  text-align: right;
  position: relative;
  padding: 15px 0 0 5px;
  &:before {
    content: '';
    width: 100%;
    background-color: #20746e;
    height: 10px;
    display: block;
    border-radius: 5px;
    position: absolute;
    bottom: 30%;
  }
  &:after {
    content: '';
    width: ${p => p.percent};
    background-color: #a8e8e4;
    height: 10px;
    display: block;
    border-radius: 5px;
    position: absolute;
    bottom: 30%;
  }
`;

const CursiveText = styled.p`
  font-family: Arvo;
  font-size: 14px;
  font-style: italic;
  text-align: center;
  color: #1c272f;
`;

const compareCount = (a, b) => {
  if (b.count < a.count) {
    return -1;
  }
  if (b.count > a.count) {
    return 1;
  }
  return 0;
};

const compareHash = (a, b) => {
  if (b.amount < a.amount) {
    return -1;
  }
  if (b.amount > a.amount) {
    return 1;
  }
  return 0;
};

export const CountryTopList = props => {
  const [showMore, toggleShowMore] = useState(false);

  const listItems = props.data.sort(compareCount).map(
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
      <MostTweets>Most tweets:</MostTweets>
      <StyledList>{!showMore ? listItems.slice(0, 5) : listItems}</StyledList>
      <StyledLink
        onClick={() => {
          toggleShowMore(!showMore);
          track({
            category: 'UI',
            action: 'Click',
            label: 'showmore/less',
          });
        }}
      >
        {!showMore ? 'Show more' : 'Show less'}
      </StyledLink>
    </>
  );
};

export const WorldLeaderTopList = props => {
  const { state } = useStore();
  const fullWorldLeaderList = state.worldLeaders;
  const listItems = props.data.sort(compareCount).map((worldLeader, index) => {
    const mappedWorldLeader = fullWorldLeaderList.find(
      ({ name }) => name === worldLeader.name
    );
    const wlPercentage = Math.round(worldLeader.percent).toString() + '%';

    return (
      <li key={index}>
        <ImageWrapper
          image={mappedWorldLeader.image}
          flag={mappedWorldLeader.flag}
        />
        <PercentBar percent={wlPercentage}>{wlPercentage}</PercentBar>
      </li>
    );
  });
  return (
    <>
      <MostTweets>Most tweeted world leaders:</MostTweets>
      <StyledList>{listItems.slice(0, 3)}</StyledList>
    </>
  );
};

export const TrendingHashtags = props => {
  const track = useTrack();
  const listItems = props.data.sort(compareHash).map((hashtag, index) => {
    return (
      <li key={index}>
        <a
          href={hashtag.url}
          onClick={() => {
            track({
              category: 'UI',
              action: 'Click',
              label: `hash=${hashtag.name}`,
            });
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {hashtag.name}
        </a>
        <p>{hashtag.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</p>
      </li>
    );
  });
  return (
    <>
      <MostHash>Hashtag participants:</MostHash>
      <StyledList padding>{listItems}</StyledList>
      <a
        onClick={() => {
          track({
            category: 'UI',
            action: 'Click',
            label: 'insta',
          });
        }}
        href="https://www.instagram.com/explore/tags/climatestrikeonline/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={InstagramIcon} alt="insta" />
      </a>
      <CursiveText>Participate in the Instagram campaign you too!</CursiveText>
    </>
  );
};
