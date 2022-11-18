// Elementlar:

var videoIndex = 0;
const videoBlock = document.getElementById("video-block");
const videoControls = document.getElementById("video-controls");
const video = document.getElementById("video-tag");
const vName = document.getElementById("v-name");
const channelImage = document.getElementById("channel-image");
const channel = document.getElementById("channel");
const subs = document.getElementById("subs");
const subscribe = document.getElementById("subscribe");
const likeNumber = document.getElementById("like-number");
const like = document.getElementById("like");
const dislike = document.getElementById("dislike");
const source = document.getElementById("source");
const viewCount = document.getElementById("view-count");
const dateCount = document.getElementById("date-count");
const infoText = document.getElementById("info-text");
const commentCount = document.getElementById("comment-count");
const commentList = document.getElementById("comment-list");
const commentText = document.getElementById("comment-text");
const videoList = document.getElementById("video-list");
const projectInfo = document.getElementById("project-info");
const alertBlock = document.getElementById("alert");

const playPauseButton = document.getElementById("play-pause-button");
const minus5 = document.getElementById("minus5");
const plus5 = document.getElementById("plus5");
const volControl = document.getElementById("vol-control");
const videoDuration = document.getElementById("duration");
const currentTimeDuration = document.getElementById("current-time-duration");
const videoVolume = document.getElementById("volume");
const volumeValue = document.getElementById("volume-value");
const volumeCircle = document.getElementById("volume-circle");
const volControlBlock = document.getElementById("vol-control-block");
const vCurrentTime = document.querySelector("#time > div:nth-child(1)");
const vOverallTime = document.querySelector("#time > div:nth-child(3)");
const autoPlay = document.querySelectorAll("#auto-play img");
const vFullscreen = document.getElementById("fullscreen");

const searchText = document.getElementById("search-text");

var isPlaying = false;
var isInAutoPlay = true;
var counter = 0;

// Mixer:

var mixedBaseIndex = [];
function mixerOfVideos() {
  mixedBaseIndex = [];
  for (let i = 0; i < base.length; i++) {
    for (let j = 0; j < base.length + 50; j++) {
      let tempo = Math.floor(Math.random() * base.length);
      if (!mixedBaseIndex.includes(tempo)) {
        mixedBaseIndex.push(tempo);
        break;
      }
    }
  }
  videoIndex = mixedBaseIndex[0];
  itsYou();
}

mixerOfVideos();

// Functions:

loadVideo();

function loadVideo() {
  video.src = base[videoIndex].VideoSource();
  video.poster = base[videoIndex].Image();
  video.load();
  vName.innerHTML = base[videoIndex].name;
  document.title = base[videoIndex].name + " - YouTube Clone";
  channelImage.src = base[videoIndex].channelImg();
  channel.innerHTML = base[videoIndex].channel;
  subs.innerHTML =
    base[videoIndex].subs + base[videoIndex].subsPostfix + " subscribers";
  likeNumber.innerHTML = base[videoIndex].likes + base[videoIndex].likesPostfix;
  if (base[videoIndex].subscribed) {
    subscribe.innerHTML = "Subscribed";
    subscribe.classList.add("subscribed");
  } else {
    subscribe.innerHTML = "Subscribe";
    subscribe.classList.remove("subscribed");
  }
  if (base[videoIndex].liked) {
    like.src = "./images/icons/liked.svg";
  } else {
    like.src = "./images/icons/like.svg";
  }
  if (base[videoIndex].disliked) {
    dislike.src = "./images/icons/disliked.svg";
  } else {
    dislike.src = "./images/icons/dislike.svg";
  }
  source.href = base[videoIndex].source;
  viewCount.innerHTML =
    base[videoIndex].views + base[videoIndex].viewsPostfix + " views";
  dateCount.innerHTML =
    base[videoIndex].postedTime +
    " " +
    base[videoIndex].postedTimePostfix +
    " ago";
  infoText.innerHTML = base[videoIndex].info;
  currentTimeDuration.style.width = `0%`;
  let getOverallTime = setInterval(() => {
    if (video.duration) {
      let vMinutes = Math.trunc(video.duration / 60);
      let vSeconds = Math.trunc(video.duration - vMinutes * 60);
      if (vSeconds < 10) {
        vSeconds = "0" + vSeconds;
      }
      vOverallTime.innerHTML = `${vMinutes}:${vSeconds}`;
      clearInterval(getOverallTime);
    }
  }, 100);
  commentLoad();
}

function PlayPause() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    video.play();
    playPauseButton.src = "./images/icons/pause.svg";
  } else {
    video.pause();
    playPauseButton.src = "./images/icons/play.svg";
  }
}

function commentForm() {
  if (document.getElementById("comment-text").value.length !== 0) {
    base[videoIndex].comments.push({
      img: YouBase[mixedBaseIndex[0]].Image(),
      name: "You",
      comment: document.getElementById("comment-text").value,
    });
    commentLoad();
    document.getElementById("comment-text").value = "";
    commentCount.innerHTML = base[videoIndex].comments.length + " Comments";
    makeAlert(`Thank you for your comment<br>( ・∧ ‐  )ゞ`);
  } else {
    makeAlert(
      "There is no text to make a new comment! &nbsp;&nbsp; ┐(･ิL_･ิ)┌"
    );
  }
}

commentText.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    commentForm();
  }
});

function commentLoad() {
  commentList.innerHTML = "";
  commentCount.innerHTML = base[videoIndex].comments.length + " Comments";
  for (let i = base[videoIndex].comments.length - 1; i >= 0; i--) {
    let comment = document.createElement("div");
    comment.classList.add("comment");
    commentList.appendChild(comment);
    let commenterImg = document.createElement("img");
    commenterImg.src = base[videoIndex].comments[i].img;
    comment.appendChild(commenterImg);
    let block = document.createElement("div");
    comment.appendChild(block);
    let commenterName = document.createElement("h3");
    commenterName.innerHTML = base[videoIndex].comments[i].name;
    block.appendChild(commenterName);
    let commentText = document.createElement("p");
    commentText.innerHTML = base[videoIndex].comments[i].comment;
    block.appendChild(commentText);
  }
}

function VideoListLoad() {
  videoList.innerHTML = "";
  for (let i = 0; i < base.length; i++) {
    let oneVideo = document.createElement("div");
    oneVideo.classList.add("v-" + base[mixedBaseIndex[i]].id);
    oneVideo.classList.add("one-video");
    if (mixedBaseIndex[i] === videoIndex) {
      oneVideo.classList.add("disabled");
    }
    oneVideo.addEventListener("click", choosenVideo);
    videoList.appendChild(oneVideo);
    let oneVideoImg = document.createElement("div");
    oneVideoImg.style.backgroundImage = `url("${base[
      mixedBaseIndex[i]
    ].Image()}")`;
    oneVideoImg.classList.add("v-" + base[mixedBaseIndex[i]].id);
    oneVideo.appendChild(oneVideoImg);
    let oneVideoInfo = document.createElement("div");
    oneVideo.appendChild(oneVideoInfo);
    let videoTitle = document.createElement("h2");
    videoTitle.innerHTML =
      base[mixedBaseIndex[i]].name.length > 40
        ? base[mixedBaseIndex[i]].name.substr(0, 40) + "..."
        : base[mixedBaseIndex[i]].name;
    videoTitle.title = base[mixedBaseIndex[i]].name;
    videoTitle.classList.add("v-" + base[mixedBaseIndex[i]].id);
    oneVideoInfo.appendChild(videoTitle);
    let videoChannel = document.createElement("p");
    videoChannel.innerHTML = base[mixedBaseIndex[i]].channel;
    videoChannel.classList.add("v-" + base[mixedBaseIndex[i]].id);
    oneVideoInfo.appendChild(videoChannel);
    let videoStats = document.createElement("p");
    videoStats.classList.add("v-" + base[mixedBaseIndex[i]].id);
    oneVideoInfo.appendChild(videoStats);

    videoStats.innerHTML =
      base[mixedBaseIndex[i]].views +
      base[mixedBaseIndex[i]].viewsPostfix +
      " views" +
      " • " +
      base[mixedBaseIndex[i]].postedTime +
      " " +
      base[mixedBaseIndex[i]].postedTimePostfix +
      " ago";
  }
}

VideoListLoad();

function choosenVideo(event) {
  if (event.target && event.target.classList[0]) {
    let choosen = Number(event.target.classList[0].substr(2));
    videoIndex = choosen;
    loadVideo();
    VideoListLoad();
    isPlaying = !isPlaying;
    PlayPause();
    document.getElementById("content").scrollTo(0, 0);
  }
}

function openProjectInfo() {
  if (projectInfo.classList.contains("open")) {
    projectInfo.classList.remove("open");
  } else {
    projectInfo.classList.add("open");
  }
}

var alertTimeout = null;

function makeAlert(text) {
  clearTimeout(alertTimeout);
  alertBlock.innerHTML = text;
  alertBlock.classList.add("appear");
  alertTimeout = setTimeout(() => {
    alertBlock.classList.remove("appear");
  }, 3000);
}

function minusPlus(time) {
  video.currentTime += time;
}

var controlControlsShow = null;

videoBlock.addEventListener("mousemove", () => {
  if (isPlaying) {
    clearTimeout(controlControlsShow);
    videoControls.classList.add("show");
    controlControlsShow = setTimeout(() => {
      videoControls.classList.remove("show");
    }, 3000);
  } else {
    clearTimeout(controlControlsShow);
    videoControls.classList.add("show");
  }
});

function previousVideo() {
  for (let i = 0; i < base.length; i++) {
    if (mixedBaseIndex[i] === videoIndex && i !== 0) {
      videoIndex = mixedBaseIndex[i - 1];
      break;
    } else if (mixedBaseIndex[i] === videoIndex && i === 0) {
      videoIndex = mixedBaseIndex[mixedBaseIndex.length - 1];
      break;
    }
  }
  loadVideo();
  commentLoad();
  VideoListLoad();
  isPlaying = !isPlaying;
  PlayPause();
}

function nextVideo() {
  for (let i = 0; i < base.length; i++) {
    if (mixedBaseIndex[i] === videoIndex && i !== mixedBaseIndex.length - 1) {
      videoIndex = mixedBaseIndex[i + 1];
      break;
    } else if (
      mixedBaseIndex[i] === videoIndex &&
      i === mixedBaseIndex.length - 1
    ) {
      videoIndex = mixedBaseIndex[0];
      break;
    }
  }
  loadVideo();
  commentLoad();
  VideoListLoad();
  isPlaying = !isPlaying;
  PlayPause();
}

video.addEventListener("timeupdate", () => {
  currentTimeDuration.style.width = `${
    (video.currentTime / video.duration) * 100
  }%`;
  let vMinutes = Math.trunc(video.currentTime / 60);
  let vSeconds = Math.trunc(video.currentTime - vMinutes * 60);
  if (vSeconds < 10) {
    vSeconds = "0" + vSeconds;
  }
  vCurrentTime.innerHTML = `${vMinutes}:${vSeconds}`;
});

duration.addEventListener("click", (event) => {
  video.currentTime = (event.offsetX / duration.clientWidth) * video.duration;
});

function muteVideo() {
  video.muted = !video.muted;
  if (video.muted) {
    volControl.src = "./images/icons/mute.svg";
    volumeValue.style.width = `0%`;
    volumeCircle.style.left = `calc(0% - 6px)`;
  } else {
    volControl.src = "../images/icons/volume_up.svg";
    volumeValue.style.width = `${video.volume * 100}%`;
    volumeCircle.style.left = `calc(${video.volume * 100}% - 6px)`;
  }
}

videoVolume.addEventListener("click", (event) => {
  if (event.target.id !== "volume-circle") {
    video.volume = event.offsetX / videoVolume.clientWidth;
    volumeValue.style.width = `${video.volume * 100}%`;
    volumeCircle.style.left = `calc(${video.volume * 100}% - 6px)`;
    if (video.volume >= 0.5) {
      volControl.src = "./images/icons/volume_up.svg";
    } else {
      volControl.src = "./images/icons/volume_down.svg";
    }
  }
});

volControlBlock.addEventListener("mouseover", () => {
  videoVolume.classList.add("show");
});
volControlBlock.addEventListener("mouseleave", () => {
  videoVolume.classList.remove("show");
});

function autoPlayOnOff() {
  isInAutoPlay = !isInAutoPlay;
  if (isInAutoPlay) {
    autoPlay[0].style.right = "-0.75em";
    autoPlay[0].style.left = "auto";
    autoPlay[1].style.right = "-0.75em";
    autoPlay[1].style.left = "auto";
    autoPlay[1].classList.remove("hide");
    makeAlert("Auto Play is on now<br>&#10596;");
  } else {
    autoPlay[0].style.left = "-0.75em";
    autoPlay[0].style.right = "auto";
    autoPlay[1].style.left = "-0.75em";
    autoPlay[1].style.right = "auto";
    autoPlay[1].classList.add("hide");
    makeAlert("Auto Play is off<br>&#10560;");
  }
}

video.addEventListener("ended", () => {
  if (isInAutoPlay) {
    nextVideo();
  } else {
    PlayPause();
    video.currentTime = 0;
    currentTimeDuration.style.width = `0%`;
  }
});

// ------------------

vFullscreen.addEventListener("click", () => {
  if (video.classList.contains("openFS")) {
    document.exitFullscreen();
  } else {
    videoBlock.requestFullscreen();
  }
});

video.addEventListener("dblclick", () => {
  if (video.classList.contains("openFS")) {
    document.exitFullscreen();
  } else {
    videoBlock.requestFullscreen();
  }
});

videoBlock.addEventListener("fullscreenchange", () => {
  if (video.classList.contains("openFS")) {
    video.classList.remove("openFS");
    vFullscreen.src = "../images/icons/fullscreen.svg";
  } else {
    video.classList.add("openFS");
    vFullscreen.src = "./images/icons/screen.svg";
  }
});

function onSubscribe() {
  base[videoIndex].subscribed = !base[videoIndex].subscribed;
  if (base[videoIndex].subscribed) {
    subscribe.innerHTML = "Subscribed";
    subscribe.classList.add("subscribed");
    makeAlert(
      `You have subscribed to the ${base[videoIndex].channel} channel<br>d(> _・ )`
    );
  } else {
    subscribe.innerHTML = "Subscribe";
    subscribe.classList.remove("subscribed");
    makeAlert(
      `You have unsubscribed from the ${base[videoIndex].channel} channel<br>゜(>▂<)゜`
    );
  }
}

function likeDislike(whichOne) {
  if (whichOne === 1 && !base[videoIndex].liked) {
    base[videoIndex].liked = true;
    base[videoIndex].disliked = false;
    like.src = "./images/icons/liked.svg";
    dislike.src = "./images/icons/dislike.svg";
    makeAlert(`You have liked this video<br>≧ω≦ )`);
    if (base[videoIndex].likesPostfix === "") {
      makeAlert(
        `You have liked this video<br>≧ω≦ )<br>As a demo clone we won't count your liking action`
      );
    }
  } else if (whichOne === 0 && !base[videoIndex].disliked) {
    base[videoIndex].liked = false;
    base[videoIndex].disliked = true;
    like.src = "./images/icons/like.svg";
    dislike.src = "./images/icons/disliked.svg";
    makeAlert(`You have disliked this video<br>( ͠° ) ͜ʖ ( ͠° )`);
  } else if (whichOne === 1 && base[videoIndex].liked) {
    base[videoIndex].liked = false;
    like.src = "./images/icons/like.svg";
    makeAlert(`"Like" status has been canceled<br>(  ⚆ _ ⚆ )`);
  } else if (whichOne === 0 && base[videoIndex].disliked) {
    base[videoIndex].disliked = false;
    dislike.src = "./images/icons/dislike.svg";
    makeAlert(`"DisLike" status has been canceled<br>(  ⚆ _ ⚆ )`);
  }
}

// Search engine:

searchText.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchFromYouTube();
  }
});

function searchFromYouTube() {
  let searchTextRightNow = searchText.value;
  if (searchTextRightNow !== "") {
    window.open(
      "https://www.youtube.com/results?search_query=" + searchTextRightNow,
      "_blank"
    );
  } else {
    makeAlert(`You have not entered anything to search<br>¯\( °_o)/¯`);
  }
}

// --------------

// Copy to Clipboard:

function shareProject() {
  navigator.clipboard.writeText(document.baseURI);
  makeAlert(`Project link has copied to clipboard!<br>(❁⌒ᴗ⌒)b`);
}

// Persona:

function itsYou() {
  let persona = document.getElementsByClassName("persona");
  for (let i = 0; i < persona.length; i++) {
    persona[i].src = YouBase[videoIndex].Image();
    persona[i].title = YouBase[videoIndex].name;
  }
}

// Refresh:

function refreshAll() {
  mixerOfVideos();
  loadVideo();
  VideoListLoad();
  isPlaying = true;
  PlayPause();
  makeAlert("You Refreshed the page<br>Enjoy!&nbsp;&nbsp;&nbsp;( ◕ᴗ◕✿ )");
  document.getElementById("content").scrollTo(0, 0);
}
