/*********************
    Phrase Hunter
    By Jonathon Cisneros
*********************/
class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /***
        Displays hidden phrase to user
    ***/
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

    /***
        Checks if passed letter is in phrase
    ***/
    checkLetter (letter) {
        return this.phrase.includes(letter);
    }

    /***
        Displays passed letter on screen after a match is found
    ***/
    showMatchedLetter (letter) {
        const li = document.querySelectorAll('#phrase li');
        for (let i = 0; i < li.length; i++) {
            if (li[i].classList.contains(letter)) {
                li[i].classList.remove('hide');
                li[i].classList.add('show');
            }
        }
    }
} // End class Phrase
