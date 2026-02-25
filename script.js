const video = document.querySelector(".viewer");
const toggle = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const volume = document.querySelector(".volume");
const playbackSpeed = document.querySelector(".playbackSpeed");
const skipButtons = document.querySelectorAll(".skip");


// 🔹 Play / Pause Toggle
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


// 🔹 Update Progress Bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = percent + "%";
}

video.addEventListener("timeupdate", handleProgress);


// 🔹 Seek when clicking progress bar
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

progress.addEventListener("click", scrub);


// 🔹 Volume Control
volume.addEventListener("input", function () {
  video.volume = this.value;
});


// 🔹 Playback Speed Control
playbackSpeed.addEventListener("input", function () {
  video.playbackRate = this.value;
});


// 🔹 Skip Buttons
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

skipButtons.forEach(button =>
  button.addEventListener("click", skip)
);
