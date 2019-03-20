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

    // Retrieves keyboard presses and matches to onscreen keyboard
    // then calls handleInteraction(btn)
    document.addEventListener("keypress", (e) => {
        let letter = String.fromCharCode(e.keyCode);
        buttons.forEach(btn => {
            if (letter == btn.innerHTML)
                game.handleInteraction(btn);
        });
    });
});

// Uses onscreen keyboard presses for handleInteraction() parameter
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        game.handleInteraction(e.target);
    });
});
