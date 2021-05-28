const marysHouse = document.querySelector(".house");
const input = document.querySelector("#password");
const patternOne = document.querySelector(".pattern-one");
const patternTwo = document.querySelector(".pattern-two");
const patternThree = document.querySelector(".pattern-three");
const patternFour = document.querySelector(".pattern-four");

let challengesCompleted = 0;

const firstChallengeHandler = () => {
  window.location.href = "http://127.0.0.1:5500/maryshouse.html";
  challengesCompleted++;
  console.log(challengesCompleted);
};

const getPatternOne = () => {
  patternOne.classList.toggle("hidden");
};
const getPatternTwo = () => {
  patternTwo.classList.toggle("hidden");
};
const getPatternThree = () => {
  patternThree.classList.toggle("hidden");
};
const getPatternFour = () => {
  patternFour.classList.toggle("hidden");
};

const showHouse = (event) => {
  console.log(input.value);
  if (input.value === "rose") {
    marysHouse.style.display = "inline-block";
    console.log("magic forest clicked");
  } else {
    alert("You are not ready to meet Mary just yet..");
    marysHouse.style.display = "none";
  }
};

// Background music

window.onload = async function makeNoise() {
  //start up the audio machinery
  await Tone.start();

  const distortion = new Tone.Distortion(0.5).toDestination();

  const player = new Tone.Player({
    url: "media/base.wav",
    loop: true,
  }).connect(distortion);
  player.volume.value = -25;

  await Tone.loaded();
  player.start();
};
