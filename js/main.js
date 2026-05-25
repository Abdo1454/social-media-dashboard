let btnMode=document.getElementById("btn-mode");
let varMode=1;
btnMode.addEventListener("click",()=>{
    if(varMode==1){
        document.body.classList.add("light-mode");
        varMode=0;
    }else{
        document.body.classList.remove("light-mode");
        varMode=1;
    }
})


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

fetch("./data.json")
  .then(res => res.json())
  .then(data => {

    const platforms = ["facebook", "twitter", "instagram", "youtube"];

    // Users + Followers
    platforms.forEach(p => {

      elements[`${p}User`].textContent = data[p].user;
      elements[`${p}Followers`].textContent = data[p].total;

      // Today values (overview)
      document.querySelectorAll(`.${p}-flow`).forEach(el => {
        el.textContent = data[p].today;
      });

    });

  })
  .catch(err => {
    console.error("Error loading data.json:", err);
  });