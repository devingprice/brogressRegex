const axios = require("axios");

function fetchRedditFeed(cb){
  const url = "https://old.reddit.com/r/Brogress/new.json";

  axios.get(url).then(function(response) {
    let posts = response.data.data.children;
    
    let titles = posts.map(post => post.data.title);

    cb(titles);
  });
}

function getTagsFromTitle(title){
  const gender = /^[M|F|m|f]/.exec(title);
  return {
    gender: gender ? gender[0] : null,
    age,
    height: null,
    weightBefore: null,
    weightAfter: null,
    timePeriod: null
  }
}

console.log(getTagsFromTitle('M/30/6’1” [260lbs to 233lbs] (8 months)'))

module.exports = {
  fetchRedditFeed,
  getTagsFromTitle
}