"use strict";
// assigment no 2 .
// This guess the number game is a short TypeScript/Node.js.
// Set the maximum value for the number guessing game
const maxValue = 10;
const randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random Number: ${randomNumber}`);
// // Variable to track if the guess is correct
let correctGuess = false;
// // Array of predefined guesses
const guesses = [3, 7, 5, 2, 9];
// // Initialize index for iterating over guesses
let index = 0;
// Guessing game loop
while (!correctGuess && index < guesses.length) {
    const userGuess = guesses[index];
    console.log(`User Guess: ${userGuess}`);
    if (userGuess === randomNumber) {
        correctGuess = true;
        console.log(`Congratulations! You guessed the correct number: ${randomNumber}`);
    }
    else {
        console.log(`Incorrect guess. Try again!`);
    }
    index++;
}
