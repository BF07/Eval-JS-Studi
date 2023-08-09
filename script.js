const newGame = document.getElementById('btnGame');
const player1 = document.getElementById('player_1');
const player2 = document.getElementById('player_2');
const score1 = document.getElementById('score0');
const score2 = document.getElementById('score1');
const current1 = document.getElementById('current0');
const current2 = document.getElementById('current1');

score1.textContent = 0;
score2.textContent = 0;

const btnRollDice = document.getElementById('btnRollDice');
const btnHold = document.getElementById('btnHold');


const dice = document.querySelector('#dice');
dice.classList.add('hidden');

let activePlayer = 0;
let currentScore = 0;

btnRollDice.addEventListener('click', function() {
    dice.classList.remove('hidden');

        // Générer un nombre aléatoire entre 1 et 6
    const diceNumber = Math.floor(Math.random() * 6) + 1;
        // Afficher l'image adaptée en fonction du nombre aléatoire
    dice.src = 'Images-dé/dé' + diceNumber + '.jpg';


    if (diceNumber !== 1) {
        // Afficher le score actuel
        currentScore += diceNumber;
        // current1.textContent = currentScore;
        document.getElementById(`current${activePlayer}`).textContent = currentScore;
    } else {
        // Passer au joueur 2
        document.getElementById(`current${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
    }
    checkForWin();
});

function checkForWin() {
    if (totalScore[activePlayer] >= 100) {
        alert(`Joueur ${activePlayer + 1} a gagné avec un score de ${totalScore[activePlayer]} points !`);
        resetGame();
    }
}

let totalScore = [0, 0];

btnHold.addEventListener('click', function() {
    if (currentScore > 0) {
        // Ajouter le score actuel au score total du joueur actif
        totalScore[activePlayer] += currentScore;
        // Mettre à jour l'affichage du score total du joueur actif
        document.getElementById(`score${activePlayer}`).textContent = totalScore[activePlayer];
        // Réinitialiser le score actuel du joueur actif à 0
        document.getElementById(`current${activePlayer}`).textContent = 0;
        // Passer au joueur suivant
        activePlayer = activePlayer === 0 ? 1 : 0;
        // Réinitialiser le score actuel à 0 pour le nouveau joueur actif
        currentScore = 0;

        // Vérifier si le joueur actif a gagné (score >= 100)
        checkForWin();
    } 
});

function resetGame() {
        // Masquer classe image dé
        dice.classList.add('hidden');
        // Réinitialiser les scores totaux des joueurs
        score1.textContent = 0;
        score2.textContent = 0;
        totalScore = [0, 0];
        // Réinitialiser les scores actuel des joueurs
        current1.textContent = 0;
        current2.textContent = 0;
        currentScore = 0;
        // Faire commencer le joueur 1
        activePlayer = 0;
}

newGame.addEventListener('click', function() {
    resetGame();
});


