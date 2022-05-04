const playButton = document.getElementsByClassName("play-button")[0];
const pauseButton = document.getElementsByClassName("pause-button")[0];
const stopButton = document.getElementsByClassName("stop-button")[0];

const audio = new Audio();

playButton.addEventListener("click", () => {
  console.log("hello");
  playButton.style.display = "none";
  pauseButton.style.display = "flex";
  stopButton.style.display = "flex";
});
