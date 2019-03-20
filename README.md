# Phrase Hunter by Jonathon Cisneros
This application is a game where the user must guess what the phrase is.
Be aware as the user only has five lives. Every time a letter is guessed wrong,
the user loses a life (a heart). Once the user completes the game by guessing all
letters right, a screen pops up and congratulates the user.
## Submission Notes
*  Once startGame() is called, I used an event listener for keydown presses, once input
    was received, I matched it to the onscreen keyboard, then called the
    handleInteraction() passing the corresponding button.
* In removeLife(), I counted backwards to remove hearts from right to left.
