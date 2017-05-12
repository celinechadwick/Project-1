$(document).ready(function() {
  console.log("working")

  var score = 0;
  var strikes = 0;
  var sequence = [];

  // var $divMaker = function(){
  //   $("<div></div>").attr("class",".animate-box").appendTo(".game-area");
  // };
  // console.log($divMaker);


  $(".box").hide()

  $("#start-button").on("click", function() {
    $(".box").show();
    $("#start-button").hide();
    $falling();
  });


  var $falling = function() {
    // for-loop for random animation
    // for(let i = 0; i < $(".box").length; i++)
    for (var i = 0; i < 4; i++) {
      var randomNumber = Math.ceil(Math.random() * 100);
      $(".box").eq(i).text(randomNumber);
      sequence.push(randomNumber);

      // ${".box"}.each(function() {
      //     //set random color for an array on each reload
      //     var randomNumber = Math.ceil(Math.random() * 100);
      //   $(this).text(randomNumber);
      //   sequence.push(randomNumber);
      // };

      $(".box").eq(i).animate({
        top: (Math.random() * 200 + 350),
        left: Math.random() * 200 + 60
      }, 4000); // end for-loop
    }


    console.log(sequence, "SEQUENCE");
  };//end of $falling()
  $(".box").on("click", function(){
    var $justClicked = parseInt($(this).text())
    var $clickedNumbers = sequence.each(function(box) {
      parseInt($(box).text());
      console.log($clickedNumbers, "CLICKED NUMBERS")
    });

    $(this).hide();
    // console.log($justClicked);
    // console.log($clickedNumbers)

    $clickedNumbers.each(function() {
      if ($justClicked >= $clickedNumbers) {
        console.log("win");
        $("#start-button").show();
      } else if ($justClicked <= $clickedNumbers) {
        console.log("wrong order")
      }

    });
  });

  // while (score < 100) {
  //   console.log("hi")
  // }



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
