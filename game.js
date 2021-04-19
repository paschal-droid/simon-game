var UserchangedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  //console.log(userClickedPattern);

});


function nextSequence() {
    var randomNumber = Math.floor((Math.random()*4))
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
}

nextSequence();

var chosencolor= "#" + gamePattern[0];
$(chosencolor).click(function() {
    $(chosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    var colorPlay = new Audio("sounds/" + gamePattern[0] + ".mp3") 
    colorPlay.play();
    
    
});
