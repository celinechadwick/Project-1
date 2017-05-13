$(document).ready(function() {
  console.log("working")


  var sequence = [];

  // var $divMaker = function(){
  //   $("<div></div>").attr("class",".animate-box").appendTo(".game-area");
  // };
  // console.log($divMaker);


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


  var $falling = function() {
    // for-loop for random animation
    for (var i = 0; i < 4; i++) {
      var randomNumber = Math.ceil(Math.random() * 100);
      $(".box").eq(i).text(randomNumber);
      sequence.push(randomNumber);

      $(".box").eq(i).animate({
        top: (Math.random() * 200 + 150),
        left: Math.random() * 400 + 60
      }, 2000); // end for-loop
    }
    console.log(sequence, "SEQUENCE");
  };//end of $falling()
  // $(".box").on("click", function(){
  //   var $justClicked = []
  //   parseInt($(this).text());
  //   $justClicked.push()
  //   //
  //   // var $sequenceNums = sequence.each(function(box) {
  //   //     parseInt($(box).text())
  //   //   });
  //
  //   $(this).hide();
  //   // console.log($justClicked);
  //   // console.log($clickedNumbers)
  //   for (var i = 0; i < sequence.length; i++) {
  //     if ($justClicked >= sequence[i]) {
  //       console.log("win");
  //       $("#start-button").show();
  //     } else if ($justClicked <= sequence[i]) {
  //       console.log("wrong order")
  //     }
  //
  //   };
  // });

  // while (score < 100) {
  //   console.log("hi")
  // }
  var accumulator= 0
  console.log(accumulator, "initial accumulator value")

  $("#submit").on("click", function() {
//for loop to find the sum of the numbers
    for (var i = 0; i < sequence.length; i++) {
       accumulator+= sequence[i];
    };
    //ADD INPUT FROM SUBMIT BUTTON HERE
    var userInput = parseInt($("#answer").val());
    console.log(userInput, "user input");
    if (userInput < accumulator) {
      alert("you lose, too low. The correct value is " + accumulator)
    }
    else if (userInput === NaN) {
      alert("please enter a number");
    }


  });


  // $(".box").addClass("animate-box")
  // console.log("gameStart")
  // });

  // var clickBox = function() {
  // $(".box").on("click", function() {
  // this.remove();
  // $divMaker();
  // score ++;
  // console.log(score);
  // });
  // };
  // gameStart();













});
