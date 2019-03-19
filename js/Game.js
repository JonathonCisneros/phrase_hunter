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
    }
}
