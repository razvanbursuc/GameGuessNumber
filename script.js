let randomNumber = Math.floor(Math.random()*100)    +1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.LowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Introdu un numar intre 1 si 100');
        return;
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Ai ghicit numarul! Bravo!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } 

    else if (guessCount === 10) {
        lastResult.textContent = 'Ai ramas fara incercari. Numarul corect era: ' + randomNumber;
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = '';
        setGameOver();
    } 

    else {

        lastResult.textContent = 'Gresit!';
        lastResult.style.backgroundColor = 'orange';
        lastResult.style.color = 'black';

        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Prea mic >>> ';

        } 
        
        else if (userGuess > randomNumber) {
            lowOrHi.textContent = ' <<< Prea mare';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();

}

function setGameOver() {

    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = 'Incepe un joc nou';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);

}

function resetGame() {

    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click', checkGuess);


if(userGuess === randomNumber) {
    lastResult.textContent = "Felicitari! Lo has logrado!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = " "
    setGameOver();
}
else if (guessCount === 10) {
    lastResult.textContent = "Final de joc!!!";
    setGameOver()
} else {
    lastResult.textContent = "Incorect!";
    lastResult.style.backgroundColor = "red";
}

