import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import useTrack from 'hooks/useTrack';

import { useStore } from 'store';
import { Page, Container, Header } from '../components/Layout';
import Button from 'components/Button';
import Checkbox from 'components/Boxcheck';
import { BlueCloud, Drops, DefaultSun } from 'components/Image/BackImage';
import { Input, Form, InputField } from 'components/Input';
import CheckNavigationOnLoad from '../CheckNavigationOnLoad';
import checkValidEmail from '../utils/checkValidEmail';
import FuzzyReactSelect from 'components/FuzzyReactSelect';
import OnlineBanner from 'components/OnlineBanner';

const StyledBlueCloud = styled(BlueCloud)`
  right: -100px;
  top: 501.9px;
`;

const StyledDrops = styled(Drops)`
  right: 20px;
  top: 601px;
`;

const StyledForm = styled(Form)`
  button {
    margin-top: 90px;
  }
`;

const StyledHeader = styled(Header)`
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 16px;
    padding-bottom: 0px;
  }
  .persData {
    font-size: 12px;
    padding-bottom: 42px;
  }
`;

// Read about the options here https://fusejs.io/
const countryFuzzyOptions = {
  keys: [{ name: 'label', weight: 0.7 }, { name: 'code', weight: 0.1 }],
  valueKey: 'label',
  maxPatternLength: 8,
  includeScore: true,
  maxResults: 25,
  threshold: 0.3,
};
// Read about the options here https://fusejs.io/

const FuzzyPosition = styled.div`
  margin-bottom: 5px;
`;

const TwitterAgeInfo = styled.p`
  font-size: 14px;
  text-decoration: underline;
  font-style: italic;
`;

const StudentInfo = ({
  className,
  currentIndex,
  totalNumberOfIndex,
  progress,
}) => {
  CheckNavigationOnLoad();
  const { state, actions } = useStore();
  const { country } = state.formData || {};
  const { t } = useTranslation();
  const track = useTrack();
  const countries = state.countries.list;

  const formIsValid = country;

  const sortCountries = (a, b) => {
    var labelA = a.label.toUpperCase();
    var labelB = b.label.toUpperCase();
    if (labelA < labelB) {
      return -1;
    }
    if (labelA > labelB) {
      return 1;
    }

    // names must be equal
    return 0;
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    const data = {
      category: 'UI',
      action: 'click',
      label: 'userinfo',
    };
    track(data);
    navigate('/register/preview');
  };

  const updatedCountrySelectHandler = selected =>
    actions.setFormData('country', selected);
  //TODO: Fix increment buttons on the number inputfield
  return (
    <Page className={className} progress={progress}>
      <OnlineBanner />
      <DefaultSun />
      <StyledBlueCloud />
      <StyledDrops />
      <Container>
        <StyledHeader>
          <h1>Where are you from?</h1>
          <p>Add your home country.</p>
          <p className="persData">(We won’t save your personal data)</p>
        </StyledHeader>

        <StyledForm onSubmit={handleOnSubmit}>
          <FuzzyPosition>
            <FuzzyReactSelect
              label="Country"
              options={countries.sort(sortCountries)}
              fuzzyOptions={countryFuzzyOptions}
              autoCorrect="off"
              spellCheck="false"
              placeholder="Type to search"
              onChange={updatedCountrySelectHandler}
              value={country}
            />
          </FuzzyPosition>
          {/* <Checkbox name="age" children="I am over 13 years old*" />
          <TwitterAgeInfo
            onClick={() => {
              track({
                category: 'FALSELINK',
                action: 'click',
                label: 'over13',
              });
            }}
          >
            You have to be at least 13 years old to use Twitter.
          </TwitterAgeInfo> */}
          <Button type="submit" primary disabled={!formIsValid}>
            {t('words.next')}
          </Button>
        </StyledForm>
      </Container>
    </Page>
  );
};

export default StudentInfo;
