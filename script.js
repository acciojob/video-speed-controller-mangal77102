const video = document.querySelector(".player__video");
const toggle = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const volume = document.querySelector(".volume");
const playbackSpeed = document.querySelector(".playbackSpeed");
const rewind = document.querySelector(".rewind");
const forward = document.querySelector(".forward");


// Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  toggle.textContent = video.paused ? "►" : "❚ ❚";
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);


// Progress Bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = percent + "%";
}

video.addEventListener("timeupdate", handleProgress);


// Click progress to seek
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

progress.addEventListener("click", scrub);


// Volume
volume.addEventListener("input", function () {
  video.volume = this.value;
});


// Playback Speed
playbackSpeed.addEventListener("input", function () {
  video.playbackRate = this.value;
});


// Rewind 10s
rewind.addEventListener("click", function () {
  video.currentTime -= 10;
});


// Forward 25s
forward.addEventListener("click", function () {
  video.currentTime += 25;
});
