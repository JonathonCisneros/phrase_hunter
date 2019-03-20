/*********************
    Phrase Hunter
    By Jonathon Cisneros
*********************/
class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /***
        Creates phrases for use in game
    ***/
    createPhrases () {
        const phrases = [
            new Phrase('My name is Jeff'),
            new Phrase("Heres Johnny"),
            new Phrase('California Lovin'),
            new Phrase("Its Alive"),
            new Phrase("Best Day Ever"),
            new Phrase('I Love JS')
        ];
        return phrases;
    }

    /***
        Gets random phrases for use in game
    ***/
    getRandomPhrase () {
        const phrases = this.createPhrases();
        const random = Math.floor(Math.random() * phrases.length);
        return phrases[random];
    }

    /***
        Begins game with selecting a random phrase and displaying it
    ***/
    startGame () {
        // Resets keys
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.classList.remove('chosen', 'wrong', 'disabled');
        })

        // Resets lives (hearts)
        this.missed = 0;
        const hearts = document.querySelectorAll('#scoreboard img');
        hearts.forEach(heart => {
            heart.src = 'images/liveHeart.png';
        });

        const startPage = document.querySelector('#overlay');
        startPage.style.display = 'none'; // Hides start screen

        const phrase = this.getRandomPhrase(); // Calls for random phrase
        phrase.addPhraseToDisplay(); // Sets random phrase to display

        this.activePhrase = phrase; // Sets current phrase to activePhrase
    } // End startGame()

    /***
        Handles interaction
    ***/
    handleInteraction (button) {
        const active = this.activePhrase;
        const letter = button.innerHTML;

        // works
        if (active.checkLetter(letter) == true) {
            button.classList.add('chosen', 'disabled'); // Disables correct letter to prevent clicking again
            active.showMatchedLetter(letter);
        }

        else if (active.checkLetter(letter) == false) {
            button.classList.add('wrong', 'disabled');
            this.removeLife();
        }
        // Calls checkForWin()
        this.checkForWin();
    }

    /***
        Checks for winning move
    ***/
    checkForWin () {
        const letters = document.querySelectorAll('.letter'); // Creates array of letters only, excludes spaces as it causes bugs
        let show = 0;

        // If all letter li contain ".show" add 1 to show
        for (let i = 0; i < letters.length; i++) {
            if (letters[i].classList.contains('show'))
                show += 1;
        }

        // Check if all letters contain '.show' then calls gameOver(true)
        if (show == (letters.length))
            this.gameOver(true);
    } // End checkForWin()

    /***
        Increases the value of the missed property
        Removes a life from the scoreboard
        Checks if player has remaining lives and ends game if player is out
    ***/
    removeLife () {
        this.missed += 1;
        // If 5 lives are used, game over
        if (this.missed == 5)
            this.gameOver(false);

        const hearts = document.querySelectorAll('#scoreboard img');
        let lastHeart = hearts[hearts.length - this.missed];
        lastHeart.src = 'images/lostHeart.png';
    } // End removeLife()

    /***
        Displays game over message
    ***/
    gameOver (gameWon) {
        const startPage = document.querySelector('#overlay');
        const h1 = document.getElementById('game-over-message');
        let answer = this.activePhrase;
        let h4 = document.createElement('h4');

        // Game won
        if (gameWon) {
            // Slight timeout so user can see phrase
            setTimeout(() => {
                startPage.style.display = 'flex';
                startPage.classList.remove('lose');
                startPage.classList.add('win');
                h1.innerHTML = 'Great Job!';
            }, 500);
        }

        // Game lost
        else if (gameWon == false) {
            startPage.style.display = 'flex';
            startPage.classList.remove('win');
            startPage.classList.add('lose');
            h1.innerHTML = 'Bummer, better luck next time!';
        }
    } // End gameOver()
} // End class Game
