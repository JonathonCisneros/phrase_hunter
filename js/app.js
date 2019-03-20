/*********************
    Phrase Hunter
    By Jonathon Cisneros
*********************/
/***
    Variables
***/
const phrase = new Phrase("Life is like a box of chocolates");
const game = new Game();
const startBtn = document.querySelector('#btn__reset');
const buttons = document.querySelectorAll('#qwerty button');

startBtn.addEventListener("click", () => {
    game.startGame();
});

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        game.handleInteraction(e.target);
    });
});


// TEST

// const logPhrase = (phrase) => {
// console.log(`Phrase - phrase: `, phrase.phrase);
// };
//
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

//game.getRandomPhrase().addPhraseToDisplay();

// game.startGame(); //didnt work while uncommented
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
