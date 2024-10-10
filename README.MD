## WHO IS THE IMPOSTER 

Keep the commumity safe and put your detective skills to the test! 🕵️‍♀️
Identify the imposter among four suspects: the Officer 🚓, the Artist 🎨, the Musician 🎶, and the Chef 👨‍🍳. Examine clues, use your two chances wisely, and uncover the truth to keep the town safe! 🏙️ Click "Start Game" to begin your thrilling adventure! 🎉

### Overview

![Imposter Investigation](/characters/hero.webp)




### How to Play "WHO IS THE IMPOSTER"?

1. **Click "Start"**: Begin the game by clicking the start button.
2. **Read the Case**: Carefully review the murder mystery and suspect details.
3. **Investigate**: Analyze the clues and suspect statements.
4. **Make a Guess**: Choose the suspect you believe is the imposter.
5. **Second Guess**: If your first guess is incorrect, use your second chance to make another guess.
6. **Reveal Outcome**: Find out if you solved the case!


### Technical Aproach 

* JavaScript
* HTML
* CSS 

#### Functionalty Overview


1. **`randomCase()`**  
   Returns a random case from the `cases` array.

2. **`getCase()`**  
   Sets the `selectedCase` variable by calling `randomCase()`.

3. **`generateCase()`**  
   Retrieves a random case, updates the UI with the case description, and displays the suspects' motives, alibis, and behaviors.

4. **`getsus(event)`**  
   Handles the selection of a suspect, comparing the selected suspect’s ID with the murderer’s ID from the current case. If the selected suspect is the murderer, it calls `win()`. If it’s the wrong guess, it decreases the number of hearts and marks the suspect as "Not guilty."

5. **`win(eliminateSus)`**  
   Displays the win screen, hiding the game UI and showing a congratulatory message with an image of the imposter.

6. **`lose(eliminateSus)`**  
   Displays the lose screen, hiding the game UI and revealing the actual murderer.

7. **`restart()`**  
   Resets all game variables and the UI, enabling the buttons and suspect images, resetting the hearts, and generating a new case to start the game again.

8. **`tryAgain` event listener**  
   Resets the game state when the player clicks the "Try Again" button after losing.

9. **`start` event listener**  
   Starts the game when the player clicks the "Start" button, resetting the game state and hiding the start button.

10. **`clueButton` event listener**  
    Alerts "hi" (placeholder behavior) and removes the hidden class to show the clues when clicked.

11. **Event listeners for suspects (`officer`, `chef`, `musician`, `artist`)**  
    Triggers the `getsus` function when a suspect button is clicked.


[Game link](https://fatemnhm.github.io/whoIsTheImposter/m)

### References

(https://codepen.io/tag/hero?cursor=ZD0xJm89MCZwPTEw)