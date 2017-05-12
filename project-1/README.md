Catch the Object
OVERLAY with instructions, and an exit button
<!-- when the exit button is clicked, toggle class to hide the overlay -->
PRESS start button:
<!-- Event listener on the click  -->
Make objects fall down from the top of the screen at a certain rate when start button is pressed.\
Some should fall faster than others
<!-- Make a series of divs. Animate so they fall at a certain rate (maybe top margin will
increase over a set period of time, pushing them down). When start is pressed, this class is turned on.
original state should be height of 0, and no border. toggled class should have height, width, and border -->
RESET falling animation when they reach the bottom of the screen
<!-- Maybe when these border boxes have a max height, they will stop traveling -->
IF clicked, they should vanish
<!-- Add event listener on click to toggle original class, making them reset their position -->
INCREASE score by one point for each click
<!-- In this click event, increase score by plus one -->
INCREASE strikes for each missed object
<!-- When they reset, if not clicked, +1 on the strikes. Can I store this click
event to use in an if then statement?  -->
IF score reaches 20:
<!-- If then statement -->
STOP animation
<!-- reset styling and divs -->
Winning message

IF strikes reach 5:
STOP animation
<!-- reset styling and divs -->
Losing message

RESET BUTTON: resets game
<!-- reset styling and divs -->
