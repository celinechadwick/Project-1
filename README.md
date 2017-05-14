
1.Explanations of the technologies used
2.Approach taken
  When the page loads, an overlay appears. Once clicked away, a start button appears.
  This start button is bound to a click event that initiates the loop which provides random integers, as well as random movement animation
  These random numbers are stored in a variable that is evaluated by the next function.
  This second function is bound to a "submit" button element. It stores the user input in a variable, evaluates the sum of the random numbers,
  and defines game pathways depending on the validity of the input.
  Round two can only be accessed once the conditions in the prior function are met. This round is the same, except that the user must provide the
  product instead of the sum.

3.User stories
Game instructions overlay
User clicks exit button, overlay hidden
User presses start, objects begin falling from top of game screen. objects have random numbers on them
User guesses the sum of the objects and inputs it
User incorrectly guesses and the game resets, or the user guesses correctly and goes to next round
User must make it past three rounds to go to level two
User guesses the product of the objects and inputs it
User incorrectly guesses and the game resets, or the user guesses correctly and goes to next round
User must make it through three rounds to win the game

4.Wireframes
https://wireframe.cc/NToQzq
https://docs.google.com/presentation/d/13-Ny2MiwShR4gk6vE4QXJkzhTYxq4Y40EgOZ05LOmaA/edit?usp=sharing
5.How-to-use instructions
1) Click on overlay to begin the game
2) Press START button
3) Provide the SUM of the numbers provided
4) Type in the guess in the input bar and press SUBMIT button
5) Guess the correct number three times to proceed to level 2
6) To win level 2, provide the PRODUCT of the numbers, and get through three rounds.

6.Unsolved problems
  - User cannot play past level two, and at the end of the game, there is a conflict with the initial click event function (causing erratic animation and
    incorrect correct answer calculation)
  - Browser cannot be resized because this conflicts with the position:absolute styling that is needed for the animation. Similarly, this causes the numbers
  to overlap instead of clearing one another
  - Styling could be more elegant, and the functions could be compressed to comply with the D.R.Y. practices

OVERLAY with instructions, that can be clicked on to exit

PRESS start button:

Make objects fall down from the top of the screen at a certain rate when start button is pressed.

Each object has a random number between 10-100

INPUT the sum of the numbers into the bar and press submit

IF the player guesses wrong, they lose, and the game restarts

IF the player gets 3 rounds correct, they move to the multiplication round

IF the player wins three times they have beat the game

DISPLAY winning message


Sources:
Box shadow tutorial found at "https://www.w3schools.com/cssref/css3_pr_box-shadow.asp";
Stopwatch code corrections (from in-class lab):
