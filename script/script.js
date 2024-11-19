const wordGuess = () => {

    let wordArray = ["hunger", "mirror", "future", "parcel", "museum", "sector", "tunnel", "winter", "friend", "guitar", "kitten", "launch"];
    const wordClues = {
        "hunger": "The feeling when you need food.",
        "mirror": "You can see yourself in this.",
        "future": " What’s yet to come.",
        "parcel": " A package sent to someone.",
        "museum": " A place to see old or special things.",
        "sector": " A part of an area or industry.",
        "tunnel": " A passage underground.",
        "winter": " The coldest season.",
        "friend": " Someone you like and trust.",
        "guitar": " A musical instrument with strings.",
        "kitten": " A baby cat.",
        "launch": " To start or send something into the air."
    }

    let winner = false;
    const size = wordArray.length;
    let chances = 1;
    let clueCounter = 0;

    let formatArray = wordArray.map(animal => {
        let formattedWord = "";
        let uniqueNumbers = [];
        while (uniqueNumbers.length < 3) {
            let randNum = Math.floor(Math.random() * animal.length);
            if (!uniqueNumbers.includes(randNum)) {
                uniqueNumbers.push(randNum);
            }
        }
        for (let i = 0; i < animal.length; i++) {
            if (uniqueNumbers.includes(i)) {
                formattedWord += ' _ ';
            } else {
                formattedWord += animal[i];
            }
        }
        return formattedWord;
    });


    const gameLogic = () => {
        while (!winner) {
            for (i = 0; i < size; i++) {
                let displayText = prompt("Welcome to word game, Guess the word " + '\n' + formatArray[i]);

                if (displayText === null || !isNaN(displayText) || /\d/.test(displayText)) {
                    alert("Invalid input! You have either canceled, given empty input, entered a number, or mixed characters with numbers. Exiting...");
                    return;
                }

                if (displayText.toLowerCase() === wordArray[i] && typeof displayText !== "object") {
                    alert("you have guessed the word correctly , try the next word ");
                } else if (displayText.toLowerCase() !== wordArray[i] && typeof displayText !== "object") {
                    while (chances <= 5) {
                        counter = 5 - chances;
                        displayText = prompt(" You have five chances. Your Chance no is " + chances + ". You have " + counter + " chances left. Do you want to try again " + formatArray[i]);

                        if (displayText === null || !isNaN(displayText) || /\d/.test(displayText)) {
                            alert("Invalid input! You have either canceled, entered a number, or mixed characters with numbers. Exiting...");
                            return;
                        }

                        if (displayText.toLowerCase() === wordArray[i] && typeof displayText !== "object") {
                            alert("you have guessed the word correctly , try the next word");
                            break;
                        } else if (displayText.toLowerCase() !== wordArray[i] && typeof displayText !== "object" && chances !== 5) {
                            alert("you have entered a wrong guess. Try again " + formatArray[i]);
                            cluesUsed = 12 - clueCounter;
                            userInput = prompt("Do you want a clue : press Y(for yes) or N(for No). \n You can use only 12 clues \n you have " + cluesUsed + " clues left");
                            if (clueCounter < 12) {
                                if (userInput === "y") {
                                    let clue = wordClues[wordArray[i]];
                                    alert(clue);
                                    chances++;
                                    clueCounter++;
                                } else {
                                    chances++;
                                    continue;
                                }
                            }
                            chances++;
                        } else if (displayText.toLowerCase() !== wordArray[i] && typeof displayText !== "object" && chances === 5) {
                            alert(" Your word is  '" + wordArray[i] + "'.  Thanks for playing");
                            chances++;
                        }
                    }
                    chances = 1;
                } else if (typeof displayText === "object") {
                    alert("You decided to quit");
                    break;
                }
            }
            winner = true;
        }
    }

    gameLogic();

}

document.querySelector(".glowing-button").onclick = () => wordGuess();