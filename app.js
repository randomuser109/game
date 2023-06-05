var h;

function GetComputerChoice() {
  let ComputerChoice = ["rock", "paper", "scissors"];

  let ComputerValue =
    ComputerChoice[Math.floor(Math.random() * ComputerChoice.length)];
  h = ComputerValue;
  console.log(h);
}

function a() {
  let player = document.getElementById("prock");
  GetComputerChoice();
  if (player.innerText === "rock" && h === "paper") {
    console.log("A");
  } else console.log("n");
}
