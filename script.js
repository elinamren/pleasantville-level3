const marysHouse = document.querySelector(".house");
const input = document.querySelector("#password");
const patternOne = document.querySelector(".pattern-one");
const patternTwo = document.querySelector(".pattern-two");
const patternThree = document.querySelector(".pattern-three");
const patternFour = document.querySelector(".pattern-four");
const message = document.querySelector("#message");

const speechbubbleText = document.querySelector("#speechbubble-text");
const speechbubbleButton = document.querySelector("#speechbubble-button");

let challengesCompleted = 0;

const firstChallengeHandler = () => {
  window.location.href = "maryshouse.html";
  challengesCompleted++;
  console.log(challengesCompleted);
};

const closeAllPatterns = () => {
  patternTwo.classList.add("hidden");
  patternThree.classList.add("hidden");
  patternOne.classList.add("hidden");
  patternFour.classList.add("hidden");
};
const getPatternOne = () => {
  patternOne.classList.toggle("hidden");
  patternTwo.classList.add("hidden");
  patternThree.classList.add("hidden");
  patternFour.classList.add("hidden");
};
const getPatternTwo = () => {
  patternTwo.classList.toggle("hidden");
  patternOne.classList.add("hidden");
  patternThree.classList.add("hidden");
  patternFour.classList.add("hidden");
};
const getPatternThree = () => {
  patternThree.classList.toggle("hidden");
  patternTwo.classList.add("hidden");
  patternOne.classList.add("hidden");
  patternFour.classList.add("hidden");
};
const getPatternFour = () => {
  patternFour.classList.toggle("hidden");
  patternTwo.classList.add("hidden");
  patternThree.classList.add("hidden");
  patternOne.classList.add("hidden");
};

const showHouse = () => {
  console.log(input.value);
  if (input.value === "rose") {
    closeAllPatterns();
    marysHouse.style.display = "inline-block";
    message.innerText = "You are ready! Go to her house, before its to late.";
  } else if (input.value.includes("r")) {
    closeAllPatterns();

    message.innerText = "You are on the right way!";
  } else {
    closeAllPatterns();

    message.innerText = "You are not ready to meet Mary just yet..";
    marysHouse.style.display = "none";
  }
};

//MARYS HOUSE

const askQuestion = () => {
  console.log("yes its clicked");
  speechbubbleText.innerText =
    "I am looking for someone. Have you noticed anything?";
  speechbubbleButton.innerText = "Get answere?";
};
speechbubbleButton.addEventListener("click", askQuestion);

// Background music

// window.onload = async function makeNoise() {
//   //start up the audio machinery
//   await Tone.start();

//   const distortion = new Tone.Distortion(0.5).toDestination();

//   const player = new Tone.Player({
//     url: "media/base.wav",
//     loop: true,
//   }).connect(distortion);
//   player.volume.value = -25;

//   await Tone.loaded();
//   player.start();
// };
