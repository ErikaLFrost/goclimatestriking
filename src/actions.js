export const mapDispatchToActions = dispatch => ({
  resetFormdata: payload => dispatch({ type: 'RESET_FORMDATA', payload }),
  selectWorldLeader: payload =>
    dispatch({ type: 'SELECT_WORLDLEADER', payload }),
  setCountries: payload => dispatch({ type: 'SET_COUNTRIES', payload }),
  setWorldLeaders: payload => dispatch({ type: 'SET_WORLDLEADERS', payload }),
  setFormData: (key, value) =>
    dispatch({ type: 'SET_FORM_DATA', payload: { key, value } }),
  tweetSent: payload => dispatch({ type: 'TWEET_SENT', payload }),
});
