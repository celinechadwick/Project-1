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
  $(".box").hide()
  $("#answer").hide();
  $("#submit").hide();

  $("#start-button").on("click", function() {
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
      $(".stopwatch").text("GAME OVER: Too low, the correct answer was " + accumulator);
      $reset();
      $falling();
    }  else if (userInput > accumulator) {
    $(".stopwatch").text("GAME OVER: Too high, the correct answer was " + accumulator);
      $reset();
      $falling();

    } else if (isNaN(userInput) === true || userInput === "") {
    $(".stopwatch").text("Please enter a number")
      accumulator = 0;
    } else if (userInput === accumulator && rounds < 3) {
      $(".stopwatch").text("Correct!");
      rounds++;
      $(".stopwatch").text("ROUND: " + rounds);
      $reset();
      $falling();
    } else {
      $(".stopwatch").text("ROUND: " + rounds)
      $reset();
        $(".stopwatch").text("Round one complete");
        rounds = 1;
        $levelTwo();
    };
  }); //end of submit else-if


//********************************************************************//
//ROUND 2: MULTIPLICATION
  var $levelTwo = function() {
    // for-loop for random animation and random single digit number
    for (var i = 0; i < 4; i++) {
      var randomNumber = Math.ceil(Math.random() * 10);
      $(".box").eq(i).text(randomNumber);
      sequence.push(randomNumber);

      $(".box").eq(i).animate({
        top: (Math.random() * 200 + 150),
        left: Math.random() * 400 + 160
      }, 2000); // end for-loop
    }
    $multiplyEval();
  }; //  end of levelTwo function


  var $multiplyEval = function() {
  $("#submit").on("click", function() {
    //for loop to find the product of the numbers
    for (var i = 0; i < sequence.length; i++) {
       accumulator *= sequence[i];
    };
    //the player's guess
     userInput = parseInt($("#answer").val());

    // function comparing the guess to the correct product
      if (userInput < accumulator) {
        $(".stopwatch").text("GAME OVER: Too low, the correct answer was " + accumulator);
        $reset();
        $falling();
      }  else if (userInput > accumulator) {
      $(".stopwatch").text("GAME OVER: Too high, the correct answer was " + accumulator);
        $reset();
        $falling();

      } else if (isNaN(userInput) === true || userInput === "") {
      $(".stopwatch").text("Please enter a number")
        accumulator = 0;
      } else if (userInput === accumulator && rounds < 3) {
        $(".stopwatch").text("Correct!");
        rounds++;
        $(".stopwatch").text("ROUND: " + rounds);
        $reset();
        $falling();
      } else {
        $(".stopwatch").text("ROUND: " + rounds)
        $reset();
          $(".stopwatch").text("Round one complete");
          rounds = 1;

      };
    }); //end of submit else-if
}; // end of multiplyEval function









});
