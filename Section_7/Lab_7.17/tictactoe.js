let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	
	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			}
			else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	let foundEmpty = false;
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	return gameStatus.DRAW_GAME;
}

function newGame() {
	// TODO: Complete the function
	clearTimeout(computerMoveTimeout);
	computerMoveTimeout = 0;
	//loop through all the buttons and set the innerHTML to empty string also remove the disabled attribute and class name\
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.innerHTML = "";
		button.removeAttribute("disabled");
		button.classList.remove("disabled");
	}
	//set the playerTurn to true
	playerTurn = true;
	//set the text content of the status div to "Your turn"
	document.getElementById("turnInfo").textContent = "Your turn";

}

function boardButtonClicked(button) {
	// TODO: Complete the function
	//set the innerHTML of the button to X
	button.innerHTML = "X";
	//add the "x" class to the button
	button.classList.add("x");
	//set the disabled attribute to true
	button.setAttribute("disabled", true);
	//call switchTurn
	switchTurn();

}

function switchTurn() {
	// TODO: Complete the function
	//check for winner
	const winner = checkForWinner();
	//if more moves are left
	if (winner === gameStatus.MORE_MOVES_LEFT) {
		//if the computer move, use setTimeout to call makeComputerMove after 1 second (1000 milliseconds) and store it in computerMoveTimeout
		if (!playerTurn) {
			//set the text content of the status div to "Your turn"
			document.getElementById("turnInfo").textContent = "Your turn";
			//toggle the playerTurn
			playerTurn = !playerTurn;
			
		}
		//else if the player move
		else {
			//set the text content of the status div to "Computer's turn"
			document.getElementById("turnInfo").textContent = "Computer's turn";
			computerMoveTimeout = setTimeout(makeComputerMove, 1000);
			//toggle the playerTurn
			playerTurn = !playerTurn;
		}
	}
	//in the case of a draw or winner
	else {
		//set playerTurn to false
		playerTurn = false;
		if(winner === gameStatus.HUMAN_WINS){
			//set the text content of the status div to "You win!"
			document.getElementById("turnInfo").textContent = "You win!";
		}
		else if(winner === gameStatus.COMPUTER_WINS){
			//set the text content of the status div to "Computer wins!"
			document.getElementById("turnInfo").textContent = "Computer wins!";
		}
		else{
			//set the text content of the status div to "It's a draw!"
			document.getElementById("turnInfo").textContent = "Draw game";
		}
	}
}

function makeComputerMove() {
	// TODO: Complete the function
	//choose a random button that is not disabled and set its innerHTML to O
	const buttons = getGameBoardButtons();
	let randomButton = buttons[Math.floor(Math.random() * buttons.length)];
	//if the button is disabled, choose another button
	while(randomButton.hasAttribute("disabled")){
		randomButton = buttons[Math.floor(Math.random() * buttons.length)];
	}
	//set the innerHTML of the button to O
	randomButton.innerHTML = "O";
	//add the "o" class to the button
	randomButton.classList.add("o");
	//set the disabled attribute to true
	randomButton.setAttribute("disabled", true);
	//call switchTurn
	switchTurn();
}