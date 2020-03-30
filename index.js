const axios = require("axios");

function fetchRedditFeed(cb){
  const url = "https://old.reddit.com/r/Brogress/new.json";

  axios.get(url).then(function(response) {
    let posts = response.data.data.children;
    
    let titles = posts.map(post => post.data.title);

    cb(titles);
  });
}

module.exports = {
  fetchRedditFeed
}