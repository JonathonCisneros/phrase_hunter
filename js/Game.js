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
}
