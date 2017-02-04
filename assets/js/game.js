window.onload = function (){

	// What are my variables

	// Set Computer Guess equal to a random choice from the compChoice array.
	var compChoices = ["towlie", "mr. hankey", "cartman", "chef", "butters scotch", "stan marsh", "kyle broflovski", "ike broflovski", "kenny mccormick", "manbearpig", "timmy"];

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
		var userGuess = e.key.toLowerCase();
		console.log(userGuess);
		console.log(e);

		var letterMatch = compGuess.indexOf(userGuess);
		console.log(letterMatch);

		// if userGuess and a letter in compGuess match...
		  if (letterMatch !== -1) {
		  	// ...reveal all insatnces in _ _ _ _ where userGuess = compGuess
		  	for (var r = 0; r < currWord.length; r++) {
    			if (userGuess === currWord[r]) {
    				var placeholder = document.getElementsByTagName("LI")[r];
					console.log(placeholder);
					placeholder.innerHTML = userGuess;
				}
			}
		  // if userGuess and compGuess don't match...
		  } else if (letterMatch === -1) {
			// ...decrease Guess Count by 1;
			userGuessCount--;
			console.log(userGuessCount);
			//...and record guess on page
			userChoice.push(userGuess);
			console.log(userChoice);
			document.querySelector("#lettersGuessedP").innerHTML = userChoice;
			}

		// When all letters are guessed...
		if (userGuessCount === 0) {
			// ...increase wins by 1
			wins++;
			// ... reset Guess Count to 12
			userGuessCount = 12;
			//... reset Letters Guessed to (blank)
			userChoice = [];
			// Have the computer select a new word
			compChoices[Math.floor(Math.random() * compChoices.length)];
		};


		//html resets
		document.querySelector("#winP").innerHTML = wins;
		document.querySelector("#guessesLeftP").innerHTML = userGuessCount;


	};
}