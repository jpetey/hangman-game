window.onload = function (){

	// What are my variables

	// Set Computer Guess equal to a random choice from the compChoice array.
	var compChoices = ["Towlie", "Mr. Hankey", "Cartman", "Chef", "Butters Scotch", "Stan Marsh", "Kyle Broflovski", "Ike Broflovski", "Kenny McCormick", "ManBearPig", "Timmy"];

	compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
	console.log(compGuess);

	// Break down compGuess into letters & display on screen
	var currWord = compGuess.split("");
	console.log(currWord);

	// Display compGuess letters in a horizontal line without commas
		// Target currWordDisplay div
		var currWordDivGet = document.getElementById("currWordDisplay");
		console.log(currWordDivGet);
		// Create a for loop that selects all letters of the word
		for (var i = 0; i < currWord.length; i++) {
			// Create new <li> element for each letter 
			var currWordParse = document.createElement("li");
			// Populate
			currWordParse.innerHTML = currWord[i];
			// Append
			currWordDivGet.appendChild(currWordParse);
		}


	// Hide compGuess letters until guessed by user
		var ulTarget = document.getElementsByTagName("UL");
		console.log(ulTarget);
		
	for (var i = 0; i < compGuess.length++; i++) {	
		var placeholder = document.getElementsByTagName("LI")[i];
		placeholder.innerHTML = "__ ";
		console.log(placeholder);
	}

	// Define what happens when the user presses a key
	var wins = 0;
	var userGuessCount = 12;
	var userChoice = [];

	// Define what happens when the user presses a key
	document.onkeyup = function (e) {
	// Record key stroke pressed by user & convert to lower case
		var userGuess = e.key.toUpperCase();
		console.log(userGuess);
		console.log(e);

	// Process key stroke from user to affect certain actions 

		userChoice.push(userGuess);
		console.log(userChoice);
		console.log(compGuess.indexOf(userGuess));

		// if userGuess and a letter in compGuess match: Show letter on currWord
		if (compGuess.indexOf(userGuess) !== -1) {
			// Decrease guesses left by 1
			userGuessCount--;
			console.log(userGuessCount);
			//Show letter on screen in Current Word Section, in the correct location			
			//?????

		// if userGuess and compGuess don't match: 1) Decrease Guess Count by 1; 2)  List as letter guessed
		} else if (compGuess.indexOf(userGuess) === -1) {
			// Decrease guesses left by 1
			userGuessCount--;
			console.log(userGuessCount);
			//List as a letter guessed 
			document.querySelector("#lettersGuessedP").innerHTML = userChoice;
		}
		// When all letters are guessed, 1) Increase wins by 1; 2) Reset Guess Count to 12; 3) Reset Letters Guessed to (blank)
		if (userGuessCount === 0) {
			wins++;
			userGuessCount = 12;
			userChoice = [];
		}


		//html resets
		document.querySelector("#winP").innerHTML = wins;
		document.querySelector("#guessesLeftP").innerHTML = userGuessCount;


	}
};