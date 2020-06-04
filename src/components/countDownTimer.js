import React, { useState, useEffect } from 'react';

const formattedClock = number => {
  return number < 10 ? `0${number}` : number;
};

const formattedDays = number => {
  if (number < 1) {
    return '';
  }
  if (number < 2) {
    return `${number} day`;
  } else {
    return `${number} days`;
  }
};

const timer = countGoal => {
  const now = new Date().getTime();
  const distance = countGoal.getTime() - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return distance < 0
    ? 'The livestream is ongoing, check it out!'
    : `Join the online event in: ${formattedDays(days)} ${formattedClock(
        hours
      )}:${formattedClock(minutes)}:${formattedClock(seconds)}`;
};

const CountDownTimer = ({ countGoal }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timer(countGoal));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h2>{timeLeft}</h2>;
};

export default CountDownTimer;
