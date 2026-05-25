let elements = {
  facebookUser: document.getElementById("user-face"),
  twitterUser: document.getElementById("user-twitter"),
  instagramUser: document.getElementById("user-instagram"),
  youtubeUser: document.getElementById("user-youtube"),

  facebookFollowers: document.getElementById("follower-face"),
  twitterFollowers: document.getElementById("follower-twitter"),
  instagramFollowers: document.getElementById("follower-instagram"),
  youtubeFollowers: document.getElementById("follower-youtube"),
};
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data));