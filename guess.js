function guessTheNumber(){
    const randomNum = Math.floor(Math.random() * 100) + 1;

  //Dont use infinite loops on bigger games
    while (true) {
      const playerGuess = parseInt(prompt('Guess a number: '))

        if (isNaN(playerGuess)) {
            console.log('Please enter a valid Number');
            continue
        }

        if (playerGuess == randomNum) {
            console.log(`Congratulations you Won.`);
            break;
        } else if (playerGuess > randomNum) {
            console.log(`to High, your guess: ${playerGuess} and the answer: ${randomNum}`)
        } else if (playerGuess < randomNum) {
            console.log(`to Low, your guess: ${playerGuess} and the answer: ${randomNum}`)
        }

    }
}
guessTheNumber()