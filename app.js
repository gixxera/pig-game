let player = 1;
let currentScore = 0;
let totalScore = [0, 0];

document.querySelector('.roll').addEventListener('click', () => {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    let dice = document.querySelector('#dice');
    dice.style.display = 'block';
    dice.src = 'dice-' + randomDice + '.png';


    if (randomDice !== 1) {
        currentScore += randomDice;
        document.querySelector('.current-' + player).textContent = currentScore;
    } else {
        playerTurn();
    }
})

let current1 = document.querySelector('.current-1');
let current2 = document.querySelector('.current-2');
let result1 = document.querySelector('.result-1');
let result2 = document.querySelector('.result-2');
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');

const playerTurn = () => {
    player === 1 ? player = 2 : player = 1;
    currentScore = 0;
    current1.textContent = '0';
    current2.textContent = '0';
}

document.querySelector('.btn-new-game').addEventListener('click', () => {
    currentScore = 0;
    totalScore = [0, 0];
    result1.textContent = totalScore[0];
    result2.textContent = totalScore[1];
    current1.textContent = '0';
    current2.textContent = '0';
    document.querySelector('.dice').style.display = 'block';
    player1.textContent = 'PLAYER 1';
    player2.textContent = 'PLAYER 2';

})

document.querySelector('.hold').addEventListener('click', () => {
    if (player === 1) {
        totalScore[0] += currentScore;
        result1.textContent = totalScore[0];
        currentScore = 0;
        current1.textContent = '0';
        if (totalScore[0] >= 100) {
            console.log(player)
            player1.textContent = 'WINNER!!';
            document.querySelector('.dice').style.display = 'none';
        }
        player = 2;
    } else {
        totalScore[1] += currentScore;
        result2.textContent = totalScore[1];
        currentScore = 0;
        current2.textContent = '0';
        if (totalScore[1] >= 100) {
            console.log(player)
            player2.textContent = 'WINNER!!';
            document.querySelector('.dice').style.display = 'none';
        }
        player = 1;
    }
})



