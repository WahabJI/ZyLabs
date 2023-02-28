// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guess = 0;
    let guessCount = 0;
    guess = prompt("Enter a number between 1 and 100.");
  
    while (guessCount < totalGuesses) {
      if (guess === null) {
        return 0;
      } else if (isNaN(guess) || guess == "") {
        guess = prompt("Please enter a number.");
      } else if (parseInt(guess) < numToGuess) {
        guessCount++;
        guess = prompt(`${guess} is too small. Guess a larger number.`);
      } else if (parseInt(guess) > numToGuess) {
        guessCount++;
        guess = prompt(`${guess} is too large. Guess a smaller number.`);
      } else if (parseInt(guess) == numToGuess) {
        return guessCount + 1;
      }
      else if(guessCount == totalGuesses){
        alert(`You ran out of guesses. The number was ${numToGuess}.`);
      }
    }
    return 0;
  }
  
