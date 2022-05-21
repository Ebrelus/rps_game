function computerPlay() {
  let wynik = Math.floor(Math.random() * 3) + 1;
  if (wynik === 1) {
    wynik = "Rock";
  } else if (wynik === 2) {
    wynik = "Paper";
  } else if (wynik === 3) {
    wynik = "Scissors";
  } else {
    wynik = "Error";
  }
  return wynik;
}
function playRound(playerSelection, computerSelection) {
  let wygrana = "You Win";
  function przegrana() {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
  if (playerSelection === computerSelection) {
    return "Remis";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return wygrana;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return wygrana;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return wygrana;
  } else {
    return przegrana();
  }
}
function capitalize(string) {
  return (
    string[0].toUpperCase() + string.substr(1, string.length - 1).toLowerCase()
  );
}
let playerSelection = prompt("Enter your option. Rock, Paper or Scissors. ");
playerSelection = capitalize(playerSelection);

const computerSelection = computerPlay();

console.log("Computer's choice is " + computerSelection);
console.log("Player's choice is " + playerSelection);
console.log(playRound(playerSelection, computerSelection));
