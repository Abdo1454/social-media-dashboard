const switchMode = document.querySelector(".switch-mode");
const btnMode = document.getElementById("btn-mode");

switchMode.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  btnMode.classList.toggle("light-modee");
});

const elements = {
  facebookUser: document.getElementById("user-face"),
  twitterUser: document.getElementById("user-twitter"),
  instagramUser: document.getElementById("user-instagram"),
  youtubeUser: document.getElementById("user-youtube"),

  facebookFollowers: document.getElementById("follower-face"),
  twitterFollowers: document.getElementById("follower-twitter"),
  instagramFollowers: document.getElementById("follower-instagram"),
  youtubeFollowers: document.getElementById("follower-youtube"),
};
totalFollowers =document.querySelector(".total-followers");
    let total = 0;
fetch("./data.json")
  .then(res => res.json())
  .then(data => {

    const platforms = ["facebook", "twitter", "instagram", "youtube"];

    // Users + Followers
    platforms.forEach(p => {

      elements[`${p}User`].textContent = data[p].user;
      elements[`${p}Followers`].textContent = data[p].total;
        // total followers
      total += data[p].total;

      // Today values (overview)
      document.querySelectorAll(`.${p}-flow`).forEach(el => {
        el.textContent = data[p].today;
      });
 totalFollowers.textContent = `Total Followers: ${total}`;
    });

  })
  .catch(err => {
    console.error("Error loading data.json:", err);
  });