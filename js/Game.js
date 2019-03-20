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
            new Phrase('Starbucks'),
            new Phrase('Ventura County'),
            new Phrase('California'),
            new Phrase('I Love Jessica'),
            new Phrase('Web Development Rocks')
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
        const test = this.checkLetter(button);
        // works
        if (button)
            button.classList.add('chosen');
        // does not work
        if (this.activePhrase)
            console.log(test);
        console.log(button);
    }

    /***
        Checks for winning move
    ***/
    checkForWin () {
        const letters = document.querySelectorAll('#phrase li');
        for (let i = 0; i < letters.length; i++) {

            // If any letter li contains ".hide" return false
            if (letters[i].classList.contains('hide'))
                return false;

            // If all letter li contain ".show" return true
            else if (letters[i].classList.contains('show'))
                return true;
        }
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

        const heart = document.querySelectorAll('#scoreboard img');
        let lastHeart = heart[heart.length - this.missed];
        lastHeart.src = 'images/lostHeart.png';
    }

    /***
        Displays game over message
    ***/
    gameOver (gameWon) {
        const startPage = document.querySelector('#overlay');
        const h1 = document.getElementById('game-over-message');
        // Game won
        if (gameWon) {
            startPage.style.display = 'flex';
            startPage.classList.add('win');
            h1.innerHTML = 'Great Job!';
        }
        // Game lost
        else if (!gameWon) {
            startPage.style.display = 'flex';
            startPage.classList.add('lose');
            h1.innerHTML = 'Bummer, better luck next time!';
        }
    } // End gameOver()
} // End class Game
