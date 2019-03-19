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

startBtn.addEventListener("click", () => {
    game.startGame();
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
