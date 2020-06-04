import React from 'react';
import { mapDispatchToActions } from './actions';

const newContext = loggedInUser => {
  return JSON.parse(
    JSON.stringify({
      worldLeader: null,
      countries: { list: [] },
      worldLeaders: [],
      formData: {
        // sendCopy: true,
      },
      tweetSent: false,
      me: loggedInUser || {},
      storeVersion: 22,
    })
  );
};

const getLocalStorage = () => {
  const initialState = newContext();
  try {
    const storage = localStorage.getItem('redux-state');
    if (storage === null) return initialState;
    const parsedStateFromStore = JSON.parse(storage);
    if (parsedStateFromStore.storeVersion !== initialState.storeVersion) {
      console.info('new version, clearing local store');
      return initialState;
    }
    return parsedStateFromStore;
  } catch (err) {
    return initialState;
  }
};

export const Store = React.createContext(newContext());

export function useStore() {
  return React.useContext(Store);
}

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SELECT_WORLDLEADER':
      return {
        ...state,
        worldLeader: payload,
      };
    case 'RESET_FORMDATA':
      return { ...state, formData: { ...state.formData, name: '', age: '' } };
    case 'SET_FORM_DATA':
      const newFormData = { ...state.formData };
      newFormData[payload.key] = payload.value;

      return {
        ...state,
        formData: newFormData,
      };
    case 'SET_COUNTRIES':
      return {
        ...state,
        countries: payload,
      };
    case 'SET_WORLDLEADERS':
      return {
        ...state,
        worldLeaders: payload,
      };
    case 'TWEET_SENT':
      return {
        ...state,
        tweetSent: true,
      };
    default:
      return state;
  }
}

// const logger = (action, prevState, currentState) => {
//   // https://medium.com/strands-tech-corner/react-state-management-without-redux-d39c7087039d
//   if (process.env.NODE_ENV !== 'development') return;
//   console.groupCollapsed('Logger');
//   console.log('%c Action:', 'color: blue', action);
//   console.log('%c Previous State:', 'color: red', prevState);
//   console.log('%c Current State:', 'color: green', currentState);
//   console.groupEnd();
// };

const setLocalStorage = (state, action) => {
  // console.log('set local storage', { state, action });
  // if action === 'bla ' return ;
  window.setTimeout(() => {
    localStorage.setItem('redux-state', JSON.stringify(state));
  }, 2000);
};

const reducerMiddleWare = (state, action) => {
  const newState = reducer(state, action);
  setLocalStorage(newState, action);
  // logger(action, state, newState);
  return newState;
};

export function StoreProvider(props) {
  const loggedInUser = props.user;
  const [state, dispatch] = React.useReducer(
    reducerMiddleWare,
    getLocalStorage(loggedInUser)
  );
  const actions = mapDispatchToActions(dispatch);
  const value = { state, actions };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
