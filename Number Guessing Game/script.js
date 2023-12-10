let counter = 0;
const number = Math.floor(Math.random() * 10 + 1);
console.log("Target number is: " + number);

function guessNumber() {
    let inputElement = document.querySelector("input");
    let inputValue = inputElement.value;
    if (inputValue > number) {
        alert("Too high! Guess again");
        counter++;
    } else if (inputValue < number) {
        alert("Too low! Guess again");
        counter++;
    } else {
        alert("You got it! It took you " + counter + " guesses.");
    }
    inputElement.value = "";
}