// function play() {
//     // hide the home section
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // show the playground section
//   const playGroundSection = document.getElementById("game-screen");
//   playGroundSection.classList.remove("hidden");
// }

function continueGame() {
  // generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log("your Random alphabet:", alphabet);
  // // set random alphabet
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerHTML = alphabet;
  // // add random background color
  setBackgroundColorById(alphabet);
}

function play() {
  // hide the home section
  hideElementById("home-screen");
  // show the playground section
  showElementById("game-screen");
  continueGame();
}
