const answers = [
  "Are you sure?",
  "Are you really sure??",
  "Are you really really sure???",
  "Think again?",
  "Don't believe in second chances?",
  "Why are you being so cold?",
  "Maybe we can talk about it?",
  "I am not going to ask again!",
  "Ok now this is hurting my feelings!",
  "You are now just being mean!",
  "Why are you doing this to me?",
  "Please give me a chance!",
  "I am begging you to stop!",
  "Ok, Let's just start over..",
];

const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
let answerIndex = 0;
let buttonSize = 50;
let clicks = 0;

noButton.addEventListener("click", () => {
  const banner = document.getElementById("banner");
  if (clicks === 0) {
    banner.src = "./public/images/no.gif";
    refreshBanner(banner);
  }
  clicks++;
  updateButtonSize();
  updateButtonText();
});

yesButton.addEventListener("click", () => {
  const banner = document.getElementById("banner");
  banner.src = "./public/images/yes.gif";
  refreshBanner(banner);
  toggleButtonsVisibility();
});

function updateButtonSize() {
  const sizes = [40, 50, 30, 35, 45];
  const randomIndex = Math.floor(Math.random() * sizes.length);
  buttonSize += sizes[randomIndex];
  yesButton.style.height = `${buttonSize}px`;
  yesButton.style.width = `${buttonSize}px`;
}

function updateButtonText() {
  const totalAnswers = answers.length;
  if (answerIndex < totalAnswers - 1) {
    noButton.innerHTML = answers[answerIndex];
    answerIndex++;
  } else if (answerIndex === totalAnswers - 1) {
    alert(answers[answerIndex]);
    answerIndex = 0;
    noButton.innerHTML = "No";
    resetButtonSize();
  }
}

function resetButtonSize() {
  yesButton.style.height = "50px";
  yesButton.style.width = "50px";
  buttonSize = 50;
}

function toggleButtonsVisibility() {
  const buttons = document.getElementsByClassName("buttons")[0];
  const message = document.getElementsByClassName("message")[0];
  buttons.style.display = "none";
  message.style.display = "block";
}

function refreshBanner(banner) {
  // Reload banner gif to force load
  const src = banner.src;
  banner.src = "";
  banner.src = src;
}
