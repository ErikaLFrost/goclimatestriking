import React from 'react';
import styled from 'styled-components/macro';
import { Link } from '@reach/router';
import { Page, Container, Header } from 'components/Layout';
import { text16, text14 } from 'shared/theme';
import CloseButton from 'components/CloseButton';
import TwitterLoginButton from 'components/TwitterLoginButton';
import { DefaultSun, Drop } from 'components/Image/BackImage';

import { useTranslation } from 'react-i18next';

const StyledDrop = styled(Drop)`
  top: 183px;
  left: -500px;
`;

const GreenDot = styled.span`
  position: absolute;
  width: 87px;
  height: 87px;
  background-color: var(--light-green);
  border-radius: 50%;
  top: 495px;
  right: -63px;
`;

const Buttons = styled.div`
  padding-top: 50px;
  button,
  a {
    margin: 0;
  }
  span {
    ${text16}
    display: block;
    padding: 8px 0 13px;
  }
`;

const SecondaryChoice = styled.p`
  padding: 20px 0 0;
  cursor: pointer;
  max-width: 250px;
  margin: 0 auto;
  ${text14}
`;

const Hello = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <DefaultSun />
      <StyledDrop />
      <GreenDot />
      <CloseButton />
      <Container>
        <Header>
          <h1>{t('hello.title')}</h1>
          <p>{t('hello.text')}</p>
        </Header>
        <Buttons>
          {/* <TwitterLoginButton /> */}
          <SecondaryChoice>
            <Link to="/register">{t('words.skipLogin')}</Link>
          </SecondaryChoice>
        </Buttons>
      </Container>
    </Page>
  );
};

export default Hello;
