import React from 'react';
import styled from 'styled-components/macro';
import { useStore } from 'store';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 22px;
`;

const CheckboxStyle = styled.div`
  position: relative;
  width: auto;
  display: block;
  margin: 0 5px 8px;
  min-width: 60px;
  border-radius: 9px;
  background-color: ${p => (p.checked ? '#ffa7a7' : 'var(--very-light-grey)')};

  label {
    display: block;
    padding: 18px 10px 15px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;

    span {
      display: block;
      font-size: 26px;
      font-weight: ${p => (p.checked ? 'bold' : 'normal')};
    }
  }

  input {
    visibility: hidden;
    display: none;
    width: 1em;
    margin: 0 auto;
    padding-bottom: 15px;
    bottom: 0;
    left: 50%;
  }
`;

const Split = styled.div`
  margin: 15px 0;
  font-size: 14px;
  position: relative;
  padding-bottom: 5px;
  width: 100%;
  &::after {
    position: absolute;
    content: '';
    background-color: ${p => (p.checked ? '#ffa7a7' : 'var(--light-grey)')};
    height: 1px;
    width: 100%;
    left: 0;
    bottom: 0;
  }
`;

const MonthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  align-items: center;
`;

const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Checkbox = ({ dateInfo, checked, action, index, radio = false }) => {
  const { date, wDay } = dateInfo;
  const handelChange = e => {
    action(date, radio);
  };

  return (
    <CheckboxStyle checked={checked}>
      <label tabIndex={-10 + index} htmlFor={`date ${date}`}>
        {wDay}
        <span>{date.split('-')[2]}</span>
        <input
          onChange={handelChange}
          checked={checked}
          type="checkbox"
          id={`date ${date}`}
          name={`date ${date}`}
        />
      </label>
    </CheckboxStyle>
  );
};

const getFridaysAndMonths = () => {
  const dateFormat = 'YYYY-MM-D';

  const fridays = [
    {
      wDay: 'Fri',
      month: moment()
        .day(5)
        .month(),
      date: moment()
        .day(5)
        .format(dateFormat),
    },
    {
      wDay: 'Fri',
      month: moment()
        .day(12)
        .month(),
      date: moment()
        .day(12)
        .format(dateFormat),
    },
    {
      wDay: 'Fri',
      month: moment()
        .day(19)
        .month(),
      date: moment()
        .day(19)
        .format(dateFormat),
    },
    {
      wDay: 'Fri',
      month: moment()
        .day(28)
        .month(),
      date: moment()
        .day(28)
        .format(dateFormat),
    },
  ];

  const months = fridays.reduce((accumulator, date) => {
    if (accumulator.indexOf(date.month) === -1) {
      accumulator.push(date.month);
    }
    return accumulator;
  }, []);
  return [fridays, months];
};

const DateSelect = () => {
  const { state, actions } = useStore();
  const { t } = useTranslation();
  const [fridays, months] = getFridaysAndMonths();
  const year = ` ${new Date().getFullYear()}`;
  return (
    <Wrap>
      {months.map(month => {
        const fridaysInThisMonth = fridays.filter(date => date.month === month);

        return (
          <MonthContainer key={`${month}-key`}>
            <Split>{t(`selectDay.months.${month}`) + year}</Split>
            <DatesContainer>
              {fridaysInThisMonth.map((dl, index) => {
                const checked = state.selectedDates.includes(dl.date);
                return (
                  <Checkbox
                    index={index}
                    action={actions.selectDate}
                    radio // only single value allowed
                    checked={checked}
                    dateInfo={dl}
                    key={`cb${dl.date}`}
                  />
                );
              })}
            </DatesContainer>
          </MonthContainer>
        );
      })}
    </Wrap>
  );
};

export default DateSelect;
