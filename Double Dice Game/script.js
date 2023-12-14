const diceFaceImages = {
    0: 'assets/dice.png',
    1: 'assets/1.svg',
    2: 'assets/2.svg',
    3: 'assets/3.svg',
    4: 'assets/4.svg',
    5: 'assets/5.svg',
    6: 'assets/6.svg'
};

const dice1 = document.getElementsByClassName('dice-1');
const dice2 = document.getElementsByClassName('dice-2');
const score1 = document.getElementsByClassName('score-1');
const score2 = document.getElementsByClassName('score-2');

let rounds = 0;

function rollDice() {
    if (rounds < 5) {
        const dice1Value = Math.floor(Math.random() * 6) + 1;
        const dice2Value = Math.floor(Math.random() * 6) + 1;

        console.log(dice1Value, dice2Value);

        dice1[0].src = diceFaceImages[dice1Value];
        dice2[0].src = diceFaceImages[dice2Value];
        score1[0].textContent = Number(score1[0].textContent) + Number(dice1Value);
        score2[0].textContent = Number(score2[0].textContent) + Number(dice2Value);

        rounds++;
    } else if (rounds === 5) {
        if (score1[0].textContent > score2[0].textContent) {
            alert('Piyush Won!!');
        } else if (score1[0].textContent < score2[0].textContent) {
            alert('Barsha Won!!');
        } else {
            alert('It\'s a Tie!!');
        }

        rounds = 0;
        score1[0].textContent = 0;
        score2[0].textContent = 0;
        dice1[0].src = diceFaceImages[0];
        dice2[0].src = diceFaceImages[0];
    }
}