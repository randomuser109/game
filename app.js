let ComputerChoice2;
function GetComputerChoice() {
  let ComputerChoice = ["rock", "paper", "scissors"];

  let ComputerValue =
    ComputerChoice[Math.floor(Math.random() * ComputerChoice.length)];
  ComputerChoice2 = ComputerValue;
}

function rock() {
  let player = document.getElementById("rock");
  GetComputerChoice();
  if (player.innerText === "rock" && ComputerChoice2 === "scissors") {
    console.log("rocks cruhes scissors player win");
  } else console.log("paper cover rock computer ");
}

function paper() {
  let player = document.getElementById("paper");
  GetComputerChoice();
  if (player.innerText === "paper" && ComputerChoice2 === "rock") {
    console.log("paper cover rock player win");
  } else console.log("scissors  cuts paper computer ");
}

function scissors() {
  let player = document.getElementById("scissors");
  GetComputerChoice();
  if (player.innerText === "scissors" && ComputerChoice2 === "paper") {
    console.log("scissors  cuts paper player win");
  } else console.log("rocks crushes scissors computer ");
}
