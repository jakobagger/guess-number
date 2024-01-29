"use strict";

window.addEventListener("DOMContentLoaded", start)

let number;

function start(){
    console.log("up and running");
    number = generateRandomNumber();
    document.querySelector("#guess-form").addEventListener("submit", receiveGuess);
}

function generateRandomNumber(){
    return Math.floor(Math.random()*99)+1;
}

function receiveGuess(event){
    event.preventDefault();

    const form = event.target;
    const value = form.guess.valueAsNumber;
    console.log("Received guess!");
    console.log(value);
    form.guess.value = "";
    checkGuess(value);
}

function checkGuess(guess){
    if (guess === number){
        guessIsCorrect(guess);
    }
    else if (guess < number){
        guessIsTooLow(guess)
    }
    else if (guess > number){
        guessIsTooHigh(guess)
    }
}

function guessIsCorrect(guess){
    console.log("correct");
    const list = document.querySelector("#guess-list");
    const html = `<li>You guessed ${guess}, that was the correct number, hooray!</li>`;
    list.insertAdjacentHTML("beforeend", html);
    document.querySelector("#guess-form").remove();
}

function guessIsTooLow(guess){
    console.log("low");
    const list = document.querySelector("#guess-list");
    const html = `<li>You guessed ${guess}, too low, try again</li>`;
    list.insertAdjacentHTML("beforeend", html);
}

function guessIsTooHigh(guess){
    console.log("high");
    const list = document.querySelector("#guess-list");
    const html = `<li>You guessed ${guess}, too high, try again</li>`;
    list.insertAdjacentHTML("beforeend", html);
}