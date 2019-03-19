/*********************
    Phrase Hunter
    By Jonathon Cisneros
*********************/
class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // Displays hidden phrase to user
    addPhraseToDisplay () {
        const phrase = this.phrase;
        const ul = document.querySelector('#phrase ul');
        let li = ' ';
        for (let i = 0; i < phrase.length; i++) {
            if (phrase.charAt(i) !== ' ')
                li += '<li class="hide letter ' + phrase.charAt(i) + '">' + phrase.charAt(i) + '</li>';
            else if (phrase.charAt(i) == ' ')
                li += '<li class="space"> </li>';
        }
        ul.innerHTML = li;
        return ul;
    }
} // End class Phrase
