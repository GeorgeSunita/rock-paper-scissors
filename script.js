const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const rock = document.querySelector(".rock");

paper.addEventListener("click", userChoice);
scissors.addEventListener("click", userChoice);
rock.addEventListener("click", userChoice);

const userPickImage = document.querySelector("#userPickImage");
const compPickImage = document.querySelector("#computerPickImage");
const newGame = document.querySelector(".newGame");
newGame.addEventListener("click", restartGame);

let modal = document.querySelector(".modal");
const rulesButton = document.querySelector(".rules-button");
rulesButton.addEventListener("click", function () {
  modal.style.display = "block";
});

var span = document.querySelector(".close");
span.onclick = function () {
  modal.style.display = "none";
};
let score = 0;
const resultVar = document.querySelector(".decision h1");

function userChoice(e) {
  let userValue = "";
  if (e.target.classList.contains("icon-paper")) {
    userValue = "paper";
    userPickImage.src = "images/Paper.png";
  }
  if (e.target.classList.contains("icon-scissors")) {
    userValue = "scissors";
    userPickImage.src = "images/Scissors.png";
  }
  if (e.target.classList.contains("icon-rock")) {
    userValue = "rock";
    userPickImage.src = "images/Rock.png";
  }

  let hands = document.querySelector(".choices");
  hands.style.display = "none";

  let contest = document.querySelector(".result");
  contest.style.display = "flex";
  computerChoice(userValue);
}

function computerChoice(userValue) {
  let computerValue = "";
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      computerValue = "rock";
      break;
    case 1:
      computerValue = "paper";
      break;
    case 2:
      computerValue = "scissors";
      break;
    default:
      console.error("Invalid choice generated result");
      break;
  }
  if (computerValue == "rock") {
    compPickImage.src = "images/Rock.png";
  }
  if (computerValue == "paper") {
    compPickImage.src = "images/Paper.png";
  }
  if (computerValue == "scissors") {
    compPickImage.src = "images/Scissors.png";
  }
  result(userValue, computerValue);
}

const result = (uChoice, cChoice) => {
  if (
    (uChoice == "paper" && cChoice == "scissors") ||
    (uChoice == "rock" && cChoice == "paper") ||
    (uChoice == "scissors" && cChoice == "rock")
  )
    resultVar.innerText = "YOU LOSE!";
  if (
    (uChoice == "paper" && cChoice == "rock") ||
    (uChoice == "rock" && cChoice == "scissors") ||
    (uChoice == "scissors" && cChoice == "paper")
  ) {
    resultVar.innerText = "YOU WIN!";
    setScore(score + 1);
  }
  if (
    (uChoice == "paper" && cChoice == "paper") ||
    (uChoice == "rock" && cChoice == "rock") ||
    (uChoice == "scissors" && cChoice == "scissors")
  )
    resultVar.innerText = "It's a tie!";
};

function setScore(newScore) {
  score = newScore;
  document.querySelector(".user-score h1").innerText = newScore;
}

function restartGame() {
  let hands = document.querySelector(".choices");
  hands.style.display = "flex";

  let contest = document.querySelector(".result");
  contest.style.display = "none";
}
