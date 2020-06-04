import React from 'react';
import styled from 'styled-components/macro';
import { Page, Container, Header } from '../components/Layout';
import { useTranslation } from 'react-i18next';
import { useStore } from 'store';
import twitterIcon from 'assets/images/btn_twitter.svg';
import { SignInToTwitterLink } from 'components/TwitterLoginButton';
import useUser from 'hooks/useUser';

const StyledContainer = styled(Container)`
  padding-top: 74px;
  min-height: 100vh;

  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 36px;
    padding-bottom: 34px;
  }
`;

const Thanks = ({ className }) => {
  const { t } = useTranslation();
  const { state } = useStore();
  const [user] = useUser();
  return (
    <Page className={className}>
      <StyledContainer>
        <Header>
          <h1>Login to spread the message</h1>
          <p>
            To make one tweets on you behaf, We need to verify your Twitter
            account.
          </p>
        </Header>
        {/* <ShareHeader>{t('thanks.share')}</ShareHeader> */}
        <img src={twitterIcon} alt="The twitter icon" />
        {user ? (
          <span>{`You are allready logged in ${user.displayName}`}</span>
        ) : (
          <SignInToTwitterLink />
        )}
      </StyledContainer>
    </Page>
  );
};

export default Thanks;
