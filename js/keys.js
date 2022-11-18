document.body.onkeyup = function (e) {
  if(e.target.id !== "search-text" && e.target.id !== "comment-text") {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
      document.getElementById('content').scrollTo(0,0);
      PlayPause();
    }
    if (e.key == "n") {
      nextVideo();
    }
    if (e.key == "p") {
      previousVideo();
    }
    if (e.key == "ArrowLeft") {
      minusPlus(-5);
    }
    if (e.key == "ArrowRight") {
      minusPlus(5);
    }
    if (e.key == "m") {
      muteVideo();
    }
    if (e.key == "a") {
      autoPlayOnOff();
    }
    if (e.key == "r") {
      refreshAll();
    }
    if (e.key == "s") {
      searchText.focus();
    }
    if (e.key == "c") {
      commentText.focus();
    }
    if (e.key == "f") {
      if (video.classList.contains("openFS")) {
        document.exitFullscreen();
      } else {
        videoBlock.requestFullscreen();
      }
    }
  }
};