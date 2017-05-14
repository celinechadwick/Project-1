$(document).ready(function() {
  console.log("working")

  var rounds = 1;
  //keep track of rounds won
  var sequence = [];
  //keep track of the random numbers

  var $reset = function()  {
    sequence = [];
    randomNumber = 0;
    accumulator = 0;
    $(".box").removeAttr("style");
  //   userInput = $("#answer");
  };
    //resets the game


//hide boxes and answer bar on start
  $(".overlay").on("click", function() {
  $(".overlay").hide() //hide the instructions overlay when clicked
  });

  $(".box").hide()
  $("#answer").hide();
  $("#submit").hide();
  $(".message-box").text("Press Start to begin");

  $("#start-button").on("click", function() {
    $(".message-box").text("");
    $(".box").show();
    $("#answer").show();
    $("#submit").show();

    $("#start-button").hide();
    $falling();
  });

//round one: addition
  var $falling = function() {
    // for-loop for random animation and random double digit number
    for (var i = 0; i < 4; i++) {
      var randomNumber = Math.ceil(Math.random() * 100);
      $(".box").eq(i).text(randomNumber);
      sequence.push(randomNumber);

      $(".box").eq(i).animate({
        top: (Math.random() * 300 + 150),
        left: Math.random() * 400 + 160
      }, 2000); // end for-loop
    }

  };//end of $falling()


  var accumulator= 0


  $("#submit").on("click", function() {
    //for loop to find the sum of the numbers
    for (var i = 0; i < sequence.length; i++) {
       accumulator+= sequence[i];
    };
    //the player's guess
    var userInput = parseInt($("#answer").val());
    console.log(userInput, "user input");

    //function comparing the guess to the correct sum
    if (userInput < accumulator) {
      $(".message-box").text("GAME OVER: Too low, the correct answer was " + accumulator);
      $reset();
      $falling();
    }  else if (userInput > accumulator) {
    $(".message-box").text("GAME OVER: Too high, the correct answer was " + accumulator);
      $reset();
      $falling();

    } else if (isNaN(userInput) === true || userInput === "") {
    $(".message-box").text("Please enter a number")
      accumulator = 0;
    } else if (userInput === accumulator && rounds < 3) {
      $(".message-box").text("Correct!");
      rounds++;
      $(".message-box").text("ROUND: " + rounds);
      $reset();
      $falling();
    } else {
      $(".message-box").text("ROUND: " + rounds)
      $reset();
        $(".message-box").text("Round one complete. This time we MULTIPLY");
        rounds = 1;
        accumulator = 0; //need the accumulator to be one for the multiplicaiton section;
         $("#submit").off("click");
        $levelTwo();
    };
  }); //end of submit else-if


//********************************************************************//
//ROUND 2: MULTIPLICATION
var roundsTwo = 1;
//keep track of rounds won
var sequenceTwo = [];
var accumulatorTwo = 1;

var $resetTwo = function() {
  sequenceTwo = [];
  randomNumberTwo = 0;
  accumulatorTwo = 1;
  $(".box").removeAttr("style");
//   userInput = $("#answer");
};
  //resets the game



  var $levelTwo = function() {
    // for-loop for random animation and random single digit number
    for (var i = 0; i < 4; i++) {
      var randomNumberTwo = Math.ceil(Math.random() * 10);
      $(".box").eq(i).text(randomNumberTwo);
      sequenceTwo.push(randomNumberTwo);

      $(".box").eq(i).animate({
        top: (Math.random() * 200 + 150),
        left: Math.random() * 400 + 160
      }, 2000); // end for-loop
    }
    console.log(randomNumberTwo, "random number two")
    $multiplyEval();
  }; //  end of levelTwo function


  var $multiplyEval = function() {
  $("#submit").on("click", function() {
    //for loop to find the product of the numbers
    for (var i = 0; i < sequenceTwo.length; i++) {
       accumulatorTwo*= sequenceTwo[i];
    };
     var userInputTwo = parseInt($("#answer").val());

    // function comparing the guess to the correct product
      if (userInputTwo < accumulatorTwo) {
        $(".message-box").text("GAME OVER: Too low, the correct answer was " + accumulatorTwo);
        $resetTwo();
        $falling();
      }  else if (userInputTwo > accumulatorTwo) {
      $(".message-box").text("GAME OVER: Too high, the correct answer was " + accumulatorTwo);
      $resetTwo();
      $falling();

      } else if (isNaN(userInputTwo) === true || userInputTwo === "") {
      $(".message-box").text("Please enter a number")
        accumulatorTwo =1;
      } else if (userInputTwo === accumulatorTwo && roundsTwo < 3) {
        $(".message-box").text("Correct!");
        roundsTwo++;
        $(".message-box").text("ROUND: " + roundsTwo);
        $resetTwo();
        $levelTwo();
      } else {
        $(".message-box").text("ROUND: " + roundsTwo)
        $resetTwo();
          $(".message-box").text("Level 2 complete. You win!!!");
          roundsTwo = 0;

      };
    }); //end of submit else-if
}; // end of multiplyEval function









});
