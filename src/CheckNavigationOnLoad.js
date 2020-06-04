import { useEffect } from 'react';
import { useStore } from 'store';
// import { navigate } from '@reach/router';

const arrayIsEmpty = arr => !Array.isArray(arr) || !arr.length;
const objectIsEmpty = obj =>
  Object.entries(obj).length === 0 && obj.constructor === Object;

// TODO: turned off for now during develop

// if you land on a page that uses this hook and
// formData and selectedDates are empty you will be redirected to '/register'
const CheckNavigationOnLoad = () => {
  const { state } = useStore();

  useEffect(() => {
    if (objectIsEmpty(state.formData) && arrayIsEmpty(state.selectedDates)) {
      // navigate('/register');
      // console.log('should navigate');
    }
  }, [state.formData, state.selectedDates]);
};

export default CheckNavigationOnLoad;
