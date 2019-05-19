let player = 1;
let currentScore = 0;
let totalScore = [0, 0];

document.querySelector('.roll').addEventListener('click', function () {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    let dice = document.querySelector('#dice');
    dice.style.display = 'block';
    dice.src = 'dice-' + randomDice + '.png';


    if (randomDice !== 1) {
        currentScore += randomDice;
        document.querySelector('.current-' + player).textContent = currentScore;
    } else {
        if (player === 1) {
            player = 2;
        } else {
            player = 1;
        }
        currentScore = 0;
        document.querySelector('.current-1').textContent = '0';
        document.querySelector('.current-2').textContent = '0';
    }
})

document.querySelector('.btn-new-game').addEventListener('click', function () {
    currentScore = 0;
    totalScore = [0, 0];
    document.querySelector('.result-1').textContent = totalScore[0];
    document.querySelector('.result-2').textContent = totalScore[1];
    document.querySelector('.current-1').textContent = '0';
    document.querySelector('.current-2').textContent = '0';
})

document.querySelector('.hold').addEventListener('click', function () {
    if (player === 1) {
        totalScore[0] += currentScore;
        document.querySelector('.result-1').textContent = totalScore[0];
        currentScore = 0;
        document.querySelector('.current-1').textContent = '0';
        player = 2;
    } else {
        totalScore[1] += currentScore;
        document.querySelector('.result-2').textContent = totalScore[1];
        currentScore = 0;
        document.querySelector('.current-2').textContent = '0';
        player = 1;
    }
})



