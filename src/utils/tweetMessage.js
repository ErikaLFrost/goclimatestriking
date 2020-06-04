const tweets = (age, worldLeader, formData) => {
  return `Hi ${
    worldLeader.twitter
  }, I would like to remind you to make a tremendous effort to save our planet. Because the climate can’t wait! @goclimatestrike #fridaysforfuture #climatestrikeonline ${
    formData.country.emoji
  } #goclimate www.goclimatestriking.com
  `;
};

export default tweets;
